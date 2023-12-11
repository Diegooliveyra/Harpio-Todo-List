import { TodoContext } from '@/provider/todo.provider';
import {
  createTask,
  deleteTask,
  getTaskById,
  updateTask,
} from '@/service/tasks.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useCallback, useContext, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

type SendingRequest = {
  delete: boolean;
  create: boolean;
};

const schema = z.object({
  description: z
    .string()
    .max(30, 'Maximum 30 characters required')
    .min(3, 'Minimum 3 characters required'),
  status: z.string({
    required_error: 'Required field',
  }),
});

const useFormControl = (id?: string) => {
  const { todos } = useContext(TodoContext);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [sending, setSending] = useState<SendingRequest>({
    create: false,
    delete: false,
  });
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(schema),
  });

  const getTaskData = useCallback(async () => {
    if (!id) return;

    if (todos.length) {
      todos.forEach((task) => {
        if (task.id === id) {
          setValue('description', task.description);
          setValue('status', task.status);
        }
      });

      return;
    }
    try {
      setLoading(true);
      const task = await getTaskById(id);
      setValue('description', task.description);
      setValue('status', task.status);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id, setValue, todos]);

  useEffect(() => {
    getTaskData();
  }, [getTaskData, id]);

  const submit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setSending({ ...sending, create: true });
      if (id) {
        await updateTask(id, {
          description: data.description,
          status: data.status,
        });
      } else {
        await createTask({
          description: data.description,
          status: data.status,
        });
      }
      router.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setSending({ ...sending, create: false });
    }
  };

  const removeTask = async () => {
    if (!id) return;
    try {
      setSending({ ...sending, delete: true });
      await deleteTask(id);
      router.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setSending({ ...sending, delete: false });
    }
  };

  return {
    handleSubmit,
    submit,
    register,
    control,
    errors,
    removeTask,
    loading,
    sending,
  };
};

export default useFormControl;

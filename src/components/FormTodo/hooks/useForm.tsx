import {
  createTask,
  deleteTask,
  getTaskById,
  updateTask,
} from '@/service/tasks.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  description: z.string().max(30, 'Maximum 30 characters required'),
  status: z.string({
    required_error: 'Required field',
  }),
});

const useFormControl = (id?: string) => {
  const router = useRouter();
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
    const task = await getTaskById(id);
    setValue('description', task.description);
    setValue('status', task.status);
  }, [id, setValue]);

  useEffect(() => {
    getTaskData();
  }, [getTaskData, id]);

  const submit: SubmitHandler<FieldValues> = async (data) => {
    try {
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
    }
  };

  const removeTask = async () => {
    if (!id) return;
    try {
      await deleteTask(id);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSubmit,
    submit,
    register,
    control,
    errors,
    removeTask,
  };
};

export default useFormControl;

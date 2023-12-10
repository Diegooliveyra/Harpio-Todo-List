import { ITaskDTO } from '@/service/tasks.interface';
import { getTask } from '@/service/tasks.service';
import { IPagination, PaginationHelper } from '@/ultis/pagination-helper';
import { StatusEnum } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';

const UseList = (status?: StatusEnum) => {
  const [numberPage, setNumberPage] = useState<number>(1);
  const [pagination, setPagination] = useState<IPagination>();
  const [loading, setLoading] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITaskDTO[]>([]);

  const getTasksList = useCallback(
    async (numberPage: number) => {
      setLoading(true);

      try {
        let params = {};
        if (status)
          params = {
            status,
          };
        const data = await getTask({
          ...params,
          page: numberPage,
          size: 1,
        });
        setTasks(data.content);
        setPagination(
          PaginationHelper.parserPagination<ITaskDTO>(data, setNumberPage)
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [status]
  );

  useEffect(() => {
    getTasksList(numberPage);
  }, [getTasksList, numberPage]);

  return {
    numberPage,
    setNumberPage,
    pagination,
    tasks,
    loading,
  };
};

export default UseList;

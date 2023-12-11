import { StatusEnum } from '@prisma/client';

export interface ITaskForm {
  description: string;
  status: StatusEnum;
}

export interface IPageTaskDTO {
  content: ITaskDTO[];
  totalElements: number;
  totalPages: number;
  pageSize: number;
  currentPage: number;
}

export interface ITaskDTO {
  id: string;
  description: string;
  status: string;
  createdAt?: string;
}

export type GetTaskProps = {
  status?: StatusEnum;
  page?: number;
  size?: number;
};

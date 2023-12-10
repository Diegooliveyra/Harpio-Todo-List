import { Dispatch, SetStateAction } from 'react';

export interface IPagination {
  totalRegistros: number;
  totalPaginas: number;
  linhasPorPagina: number;
  paginaAtual: number;
  setNumberPage: Dispatch<SetStateAction<number>>;
}

export interface IPageResult<T> {
  content?: T[];
  totalElements: number;
  totalPages: number;
  pageSize: number;
  currentPage: number;
}

export class PaginationHelper {
  static parserPagination<T>(
    page: IPageResult<T>,
    setNumberPageCallback: any
  ): IPagination {
    return {
      totalRegistros: page?.totalElements,
      totalPaginas: page?.totalPages,
      linhasPorPagina: page?.pageSize,
      paginaAtual: page?.currentPage,
      setNumberPage: setNumberPageCallback,
    };
  }
}

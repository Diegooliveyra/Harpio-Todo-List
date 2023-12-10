'use client';

import { useState } from 'react';
import CardTodo from '../CardTodo';
import Pagination from '../Pagination';
import * as S from './styles';
import { ReactSVG } from 'react-svg';
import { getTask } from '@/service/tasks.service';
import { StatusEnum } from '@prisma/client';
import UseList from './hooks/useList';
type ListTodoProps = {
  status?: StatusEnum;
};

const ListTodo = ({ status }: ListTodoProps) => {
  const { tasks, pagination, loading } = UseList(status);

  return (
    <>
      {loading ? (
        <S.WrapperLoading style={{ marginTop: `10vh` }}>
          <ReactSVG
            src="/assets/imgs/loading.svg"
            style={{ width: '50px' }}
            wrapper="span"
          ></ReactSVG>
        </S.WrapperLoading>
      ) : (
        <>
          {tasks?.length ? (
            <>
              <S.Container>
                {tasks.map((todo) => (
                  <CardTodo key={todo.id} todo={todo} />
                ))}
              </S.Container>

              <S.WrapperPagination>
                <Pagination
                  actualPage={pagination?.paginaAtual!}
                  totalPage={pagination?.totalPaginas!}
                  setNumberPage={pagination?.setNumberPage}
                />
              </S.WrapperPagination>
            </>
          ) : (
            <S.NotFound>
              <ReactSVG
                src={'/assets/imgs/not-found.svg'}
                role={'figure'}
                wrapper="div"
              />
              <S.NotFountText>Nenhum registro encontrado</S.NotFountText>
            </S.NotFound>
          )}
        </>
      )}
    </>
  );
};

export default ListTodo;

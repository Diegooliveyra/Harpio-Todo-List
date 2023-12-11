'use client';

import { ReactSVG } from 'react-svg';
import Pagination from '../Pagination';
import CardTodo from '../CardTodo';

import { useRouter } from 'next/navigation';
import { StatusEnum } from '@prisma/client';
import UseList from './hooks/useList';
import * as S from './styles';

type ListTodoProps = {
  status?: StatusEnum;
};

const ListTodo = ({ status }: ListTodoProps) => {
  const router = useRouter();
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
                  <CardTodo
                    data-testid={`task-${todo.id}`}
                    key={todo.id}
                    todo={todo}
                    onClick={() => router.push(`/form/${todo.id}`)}
                  />
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
              <S.NotFountText>No tasks found</S.NotFountText>
            </S.NotFound>
          )}
        </>
      )}
    </>
  );
};

export default ListTodo;

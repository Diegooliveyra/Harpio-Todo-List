import HeaderAction from '@/components/HeaderAction';
import Layout from '@/components/Layout';
import ListTodo from '@/components/ListTodo';
import NavTabs from '@/components/NavTabs';
import { StatusEnum } from '@prisma/client';

const ListPage = () => {
  const tabs = [
    {
      label: 'All tasks',
      component: <ListTodo />,
    },
    {
      label: 'Not started',
      component: <ListTodo status={StatusEnum.NotStarted} />,
    },
    {
      label: 'In progress',
      component: <ListTodo status={StatusEnum.InProgress} />,
    },
    {
      label: 'Closed',
      component: <ListTodo status={StatusEnum.Closed} />,
    },
  ];
  return (
    <Layout>
      <HeaderAction
        title="My tasks"
        actionName="Create new"
        route="/form"
        actionIcon="/assets/icons/plus.svg"
      />
      <NavTabs tabs={tabs} />
    </Layout>
  );
};

export default ListPage;

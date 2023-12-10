import CardTodo from '@/components/CardTodo';
import HeaderAction from '@/components/HeaderAction';
import Layout from '@/components/Layout';
import ListTodo from '@/components/ListTodo';
import NavTabs from '@/components/NavTabs';

const ListPage = () => {
  const tabs = [
    {
      label: 'All',
      component: (
        <ListTodo
          todos={['Lorem Ipsum is simply dummy text of the printing ', 'all 2']}
        />
      ),
    },
    {
      label: 'Not started',
      component: <ListTodo todos={[]} />,
    },
    {
      label: 'In progress',
      component: <ListTodo todos={[]} />,
    },
    {
      label: 'Closed',
      component: <ListTodo todos={[]} />,
    },
  ];
  return (
    <Layout>
      <HeaderAction
        title="My list"
        actionName="Create new"
        route="/form"
        actionIcon="/assets/icons/plus.svg"
      />
      <NavTabs tabs={tabs} />
    </Layout>
  );
};

export default ListPage;

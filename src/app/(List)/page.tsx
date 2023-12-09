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
          todos={[
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            'all 2',
          ]}
        />
      ),
    },
    {
      label: 'Not started',
      component: (
        <ListTodo todos={['Not started todo 1', ' Not started todo 2']} />
      ),
    },
    {
      label: 'In progress',
      component: (
        <ListTodo todos={['In progress todo 1', 'In progress todo 2']} />
      ),
    },
    {
      label: 'Closed',
      component: <ListTodo todos={['Closed todo 1', 'Closed todo 2']} />,
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

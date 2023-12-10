import FormTodo from '@/components/FormTodo';
import HeaderAction from '@/components/HeaderAction';
import Layout from '@/components/Layout';

const FormPage = ({ params }: { params: { id: string } }) => {
  return (
    <Layout>
      <HeaderAction
        title="Edit task"
        actionName="Back"
        route="/"
        actionIcon="/assets/icons/arrow-back.svg"
      />

      <FormTodo id={params.id} />
    </Layout>
  );
};

export default FormPage;

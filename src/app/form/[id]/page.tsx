import FormTodo from '@/components/FormTodo';
import HeaderAction from '@/components/HeaderAction';
import Layout from '@/components/Layout';

const FormPage = () => {
  return (
    <Layout>
      <HeaderAction
        title="Edit"
        actionName="Back"
        route="/"
        actionIcon="/assets/icons/arrow-back.svg"
      />

      <FormTodo />
    </Layout>
  );
};

export default FormPage;

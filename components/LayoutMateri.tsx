import Layout from './Layout';

const LayoutMateri = ({ browserTitle, description, children }) => {
  return (
    <Layout browserTitle={browserTitle} description={description}>
      <div className='max-w-3xl mx-auto'>{children}</div>
    </Layout>
  );
};
export default LayoutMateri;


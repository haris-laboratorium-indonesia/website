import Layout from './Layout';

export default function LayoutMateri({ browserTitle, description, children }) {
  return (
    <Layout browserTitle={browserTitle} description={description}>
      <div className='max-w-5xl mx-auto'>{children}</div>
    </Layout>
  );
}

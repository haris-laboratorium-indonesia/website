import { useRouter } from "next/router";

const userDetails = (props) => {
  const { user } = props;
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className="text-2xl font-semibold sm:text-2xl">User {id}</div>
      <div className="inline-block p-2 bg-gray-100 rounded-md">
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
        <div>{user.website}</div>
      </div>
    </>
  );
};

export default userDetails;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  const paths = dataUsers.map((user) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}

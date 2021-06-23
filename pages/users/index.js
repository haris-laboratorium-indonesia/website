import { useRouter } from "next/router";
import Judul from "../../components/Judul";

const a = ({dataUsers}) => {
  console.log(dataUsers);
  const router = useRouter();
  return (
    <>
      <Judul page="Users" textColor="text-black" />
      <div className="grid grid-cols-4 gap-5">
        {dataUsers.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-gray-100 rounded"
            onClick={() => router.push(`/users/${user.id}`)}
          >
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default a;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}

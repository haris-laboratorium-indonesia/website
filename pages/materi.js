import Judul from "../components/Judul";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const materi = ({ dataUsers }) => {
  useEffect(() => {
    document.title = `Haris`;
  });
  const [username, setUsername] = useState("");
  const isLowerCase = username === username.toLowerCase();
  const error = isLowerCase ? null : "Username must be lower case";

  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.usernameInput.value;
    alert(`you entered ${username}`);
  }

  function handleChange(e) {
    setUsername(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameInput"></label>
        <input id="usernameInput" onChange={handleChange} type="text" />
        <div className="text-red-500">{error}</div>
        <button type="submit">Submit</button>
      </form>
      {/* form */}
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input
            value={username}
            onChange={handleChange}
            id="usernameInput"
            type="text"
          />
        </div>
        <button type="submit">Submit</button>
      </form> */}

      <div>
        <div className="p-3 text-2xl bg-gray-100">tombol</div>
        <Judul page="Materi" textColor="text-rose-500" />
        <div className="flex flex-col mb-5 space-y-5 sm:w-1/4">
          <Link href="/materi/matematika">
            <a className="block py-2.5 font-medium text-center bg-gray-100 rounded hover:bg-gray-200 text-rose-500">
              Materi Matematika
            </a>
          </Link>
          <Link href="/materi/fisika">
            <a className="block py-2.5 font-medium text-center bg-gray-100 rounded hover:bg-gray-200 text-rose-500">
              Materi Fisika
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
          {dataUsers.map((a) => (
            <div key={a.id}>
              <div className="p-2 bg-gray-100 rounded-md text-vlack">
                <div>{a.name}</div>
                <div>{a.username}</div>
                <div>{a.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default materi;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return { props: { dataUsers } };
}

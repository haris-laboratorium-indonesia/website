export default function ujicoba() {
  const yes = () => {
    document.getElementById("kotak").classList.toggle("w-10");
  };
  const [name, setName] = useState("");
  const handleChange = (e) => setName(e.target.value);
  const [name2, setName2] = useState("");
  const handleChange2 = (e) => setName2(e.target.value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);
  return (
    <>
      {" "}
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <div className="">
        <form action="">
          <label htmlFor="name">Name</label>
          <input onChange={handleChange} type="text" id="name" />
        </form>
        {name ? <strong>Hello {name}</strong> : "Please type your name"}
      </div>
      <div className="">
        <form action="">
          <label htmlFor="name2">Name2</label>
          <input onChange={handleChange2} type="text" id="name2" />
        </form>
        {name2 ? <strong>Hello {name2}</strong> : "Please type your name"}
      </div>
      <div className="w-10 h-10 bg-red-500" id="kotak">
        kotak
      </div>
      <button onClick={yes}>buttonsdfsldfkjsldkjflsdk</button>
      <div>ujicoba</div>
      <TeX block className="text-2xl text-red-500">
        P_h = \rho g h
      </TeX>
    </>
  );
}

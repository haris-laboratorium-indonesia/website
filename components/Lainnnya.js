export default function () {
  return (
    //   Lainnya
    <Popover className="relative ">
      <Popover.Button
        className={`${nav} flex justify-between items-center focus:outline-none`}
      >
        <span>Lainnya</span>
        <HiOutlineChevronDown className="text-opacity-70" aria-hidden="true" />
      </Popover.Button>
      <Popover.Panel className="absolute z-10 flex flex-col w-32 py-2 mt-5 space-y-2 bg-white rounded shadow-xl"></Popover.Panel>
    </Popover>
  );
}

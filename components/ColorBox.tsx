export const ColorsBox = ({ color, name, code }) => {
  return (
    <div className='flex flex-col space-y-1 '>
      <div className={`w-16 h-16 rounded-md ${color} shadow mb-1`}></div>
      <div className='text-sm font-medium text-gray-700'>{name}</div>
      <div className='text-sm text-gray-600'>{code}</div>
      <div className='text-sm text-gray-600'>{color}</div>
    </div>
  );
};

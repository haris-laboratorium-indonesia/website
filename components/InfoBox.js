const InfoBox = ({ id, svg, name, description }) => {
  return (
    <div key={id}>
      {/* Icon */}
      <div className="pl-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-blue-harislab"
          responsive="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="#ffffff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d={svg}
          />
        </svg>
      </div>
      {/* Name */}
      <div className="pl-3 mt-3 mb-2 border-l border-blue-500">
        <h1 className="font-semibold ">{name}</h1>
      </div>
      {/* description */}
      <div className="pl-3 text-gray-700">{description}</div>
    </div>
  );
};

export default InfoBox;

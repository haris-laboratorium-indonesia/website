export default function WeCareAbout({ id, svg, name, description }) {
  return (
    <div key={id}>
      {/* icon */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-blue-harislab"
          responsive="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={svg}
          />
        </svg>
      </div>
      {/* Name */}
      <div className="my-2">
        <h1 className="text-xl font-semibold ">{name}</h1>
      </div>
      {/* description */}
      <div className="text-gray-600">{description}</div>
    </div>
  );
}

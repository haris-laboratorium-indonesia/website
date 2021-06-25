export const Down = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  )
}
export const Up = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M5 15l7-7 7 7"
      />
    </svg>
  )
}

export const MenuList = ({textColor}) => {
  return (
    <svg
      className={`${textColor} w-7 h-7`}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
    >
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6h.01" />
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
    </svg>
  )
}

export const LeftArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-700 w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  )
}

export const RightArrow = (a) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${a} w-5 h-5 sm:hidden`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M9 5l7 7-7 7"
      />
    </svg>
  )
}

export const Folder = (props) => {
  return (
    <svg
      className="w-6 h-6 mr-1 text-blue-400"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#60A5FA"
      {...props}
    >
      <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  )
}

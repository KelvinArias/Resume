
const RedirectSVG = ({ size, color }: { size: number; color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 21 21"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M7.513 13.7 13.7 7.513M7.513 7.513H13.7V13.7"
    />
  </svg>
)
export default RedirectSVG

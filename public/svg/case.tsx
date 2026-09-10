
const Case = ({ color, size }: { color: string; size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    width={size}
    height={size}
  >
    <path
      d="M26 27H6c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v13c0 1.1-.9 2-2 2z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    />
    <path
      d="M22.6 18H9.4c-3 0-5.4-2.4-5.4-5.4V12c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v.6c0 3-2.4 5.4-5.4 5.4zM10 20v-2M22 20v-2M9.3 10c.9-2.9 3.5-5 6.7-5s5.8 2.1 6.7 5"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    />
  </svg>
)
export default Case

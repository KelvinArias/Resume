
const code = ({ size, color }: { size: number; color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7 8-4 3.692L7 16m10-8 4 3.692L17 16M14 4l-4 16"
    />
  </svg>
)
export default code

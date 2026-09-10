
const SvgComponent = ({ size, color }: { size: number; color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0.55 0.05 11.3 13.9"
    fill="none"
  >
    <path
      stroke={color}
      strokeWidth={1.5}
      d="M11.63 5.345a1.874 1.874 0 0 1 0 3.309l-8.007 4.354C2.334 13.71.75 12.797.75 11.354v-8.71C.75 1.202 2.334.29 3.623.99l8.007 4.355Z"
    />
  </svg>
)
export default SvgComponent

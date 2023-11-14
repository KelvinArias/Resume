const Check = () => (
  <svg width="300" height="300" className="circle">
    <circle cx="150" cy="150" r="149" stroke="#fff" strokeWidth="1" fill="none">
      <animate
        attributeName="stroke-dasharray"
        values="0,251.2;251.3,0"
        dur="1s"
      />
    </circle>
  </svg>
);

export default Check;

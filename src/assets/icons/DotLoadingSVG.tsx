type TProps = {
  mode?: "Dark" | "White";
};

const DotLoadingSVG = ({ mode = "Dark" }: TProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <circle
        fill={mode === "Dark" ? "#141414" : "#ffffff"}
        stroke={mode === "Dark" ? "#141414" : "#ffffff"}
        strokeWidth="0.24"
        r="1.8"
        cx="4.8"
        cy="12"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2s"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4s"
        />
      </circle>
      <circle
        fill={mode === "Dark" ? "#141414" : "#ffffff"}
        stroke={mode === "Dark" ? "#141414" : "#ffffff"}
        strokeWidth="0.24"
        r="1.8"
        cx="12"
        cy="12"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2s"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2s"
        />
      </circle>
      <circle
        fill={mode === "Dark" ? "#141414" : "#ffffff"}
        stroke={mode === "Dark" ? "#141414" : "#ffffff"}
        strokeWidth="0.24"
        r="1.8"
        cx="19.2"
        cy="12"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2s"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0s"
        />
      </circle>
    </svg>
  );
};

export default DotLoadingSVG;

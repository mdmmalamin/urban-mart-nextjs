type TProps = {
  mode?: "Dark" | "White";
};

const DotLoadingSVG = ({ mode = "Dark" }: TProps) => {
  return (
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="4.8"
        cy="12"
        fill={mode === "Dark" ? "#141414" : "#ffffff"}
        r="1.8"
        stroke={mode === "Dark" ? "#141414" : "#ffffff"}
        strokeWidth="0.24"
      >
        <animate
          attributeName="opacity"
          begin="-.4s"
          calcMode="spline"
          dur="2s"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          values="1;0;1;"
        />
      </circle>
      <circle
        cx="12"
        cy="12"
        fill={mode === "Dark" ? "#141414" : "#ffffff"}
        r="1.8"
        stroke={mode === "Dark" ? "#141414" : "#ffffff"}
        strokeWidth="0.24"
      >
        <animate
          attributeName="opacity"
          begin="-.2s"
          calcMode="spline"
          dur="2s"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          values="1;0;1;"
        />
      </circle>
      <circle
        cx="19.2"
        cy="12"
        fill={mode === "Dark" ? "#141414" : "#ffffff"}
        r="1.8"
        stroke={mode === "Dark" ? "#141414" : "#ffffff"}
        strokeWidth="0.24"
      >
        <animate
          attributeName="opacity"
          begin="0s"
          calcMode="spline"
          dur="2s"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          values="1;0;1;"
        />
      </circle>
    </svg>
  );
};

export default DotLoadingSVG;

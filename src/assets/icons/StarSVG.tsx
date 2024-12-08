export type TStartSVG = {
  className?: string;
  fill?: "#71717A" | "#ffce31";
};

const StarSVG = ({ className, fill }: TStartSVG) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 64 64"
      className={className}
    >
      <path
        fill={fill}
        d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z"
      ></path>
    </svg>
  );
};

export default StarSVG;

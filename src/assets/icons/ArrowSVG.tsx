const ArrowSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={24}
      viewBox="0 0 12 24"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
      ></path>
    </svg>
  );
};

export default ArrowSVG;

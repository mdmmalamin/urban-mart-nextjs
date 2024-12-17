const ArrowSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      height={24}
      viewBox="0 0 12 24"
      width={12}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ArrowSVG;

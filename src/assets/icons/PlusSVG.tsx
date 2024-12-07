const PlusSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
      ></path>
    </svg>
  );
};

export default PlusSVG;

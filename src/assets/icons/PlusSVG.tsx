const PlusSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" fill="currentColor" />
    </svg>
  );
};

export default PlusSVG;

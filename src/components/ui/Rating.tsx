import StarSVG from "@/src/assets/icons/StarSVG";

const Rating = ({ value }: { value: number }) => {
  const max = 5;
  const normalizedValue = Math.min(Math.max(value, 0), max);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(max)].map((_, index) => (
        <StarSVG
          key={index}
          fill={index < normalizedValue ? "#ffce31" : "#71717A"} //? Apply styles for filled or empty stars
        />
      ))}
    </div>
  );
};

export default Rating;

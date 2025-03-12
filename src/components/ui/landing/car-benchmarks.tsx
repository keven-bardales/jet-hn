interface CarBenchmarksProps {
  title: string;
  benchMark: string;
}

const CarBenchmarks = ({ title, benchMark }: CarBenchmarksProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <p className="font-medium">{title}</p>
      <span className="text-5xl text-red-700 font-bold">{benchMark}</span>
    </div>
  );
};

const CarColor = ({ customClass }: { customClass: string }) => {
  return <div className={`w-8 h-8 rounded-full ${customClass}`}></div>;
};

export { CarBenchmarks, CarColor };

interface TechnologiesProps {
  titleTechnologies: string;
  textTechnologies: string;
}

export default function Technologies({
  titleTechnologies,
  textTechnologies,
}: TechnologiesProps) {
  return (
    <div className="w-96 h-24 flex-col justify-center items-start gap-3.5 inline-flex">
      <h2 className="text-5xl font-bold leading-[56px] uppercase">
        {titleTechnologies}
      </h2>
      <p className="w-96 text-gainsboro text-lg font-medium leading-7 capitalize">
        {textTechnologies}
      </p>
    </div>
  );
}

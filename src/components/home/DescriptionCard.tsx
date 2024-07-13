export default function DescriptionCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="col-span-1 row-span-1 w-48 h-48 md:w-56 md:h-56 bg-greenxd rounded-lg border p-4 text-center md:text-start">
      <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-lg border flex items-center justify-center mb-2 mx-auto md:mx-0">
        {children}
      </div>
      <div>
        <h1 className="text-sm md:text-base font-bold mb-2 text-green-950">{title}</h1>
        <p className="max-w-full text-[12px] md:text-sm font-semibold text-green-900">
          {description}
        </p>
      </div>
    </div>
  );
}

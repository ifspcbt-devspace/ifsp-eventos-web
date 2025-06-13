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
    <div className='bg-greenxd col-span-1 row-span-1 h-44 w-[9.2rem] rounded-lg border p-4 text-center sm:h-48 sm:w-48 md:h-56 md:w-56 md:text-start'>
      <div className='mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-lg border bg-white md:mx-0 md:h-20 md:w-20'>
        {children}
      </div>
      <div>
        <h1 className='mb-2 text-[10px] font-bold text-green-950 sm:text-sm md:text-base'>
          {title}
        </h1>
        <p className='text-[9px] font-semibold text-green-900 sm:text-[12px] md:text-sm'>
          {description}
        </p>
      </div>
    </div>
  );
}

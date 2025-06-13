export default function LightPageHeader({ title }: { title: string }) {
  return (
    <div className={'light-page-header grid w-full grid-cols-10'}>
      <div className={'col-span-6 col-start-3'}>
        <h1 className={'mb-4 block text-4xl font-semibold md:text-[64px]'}>
          {title}
        </h1>
      </div>
    </div>
  );
}

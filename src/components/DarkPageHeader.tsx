import Image from 'next/image';

export default function DarkPageHeader({
  title,
  imgUrl,
  subtitle,
  onError,
}: {
  title: string;
  subtitle: string;
  imgUrl: string;
  onError: () => void;
}) {
  return (
    <div
      className={
        'black-gradient grid w-full grid-cols-10 px-4 pt-24 pb-8 xl:px-0'
      }
    >
      <div className={'col-span-10 col-start-1 xl:col-span-6 xl:col-start-3'}>
        <div className='event-page-grid'>
          <div className='relative col-span-2 col-start-1 row-start-1 font-semibold xl:col-span-1'>
            <h1
              className={'mb-4 text-xl font-semibold sm:text-4xl md:text-5xl'}
            >
              {title}
            </h1>
            <p className='text-lg'>{subtitle}</p>
          </div>
          <div className='event-header-block z-10 col-span-1 col-start-2 row-start-1 hidden xl:block'>
            <Image
              src={imgUrl}
              onError={onError}
              alt={'Event thumbnail'}
              width={650}
              height={100}
              className='event-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

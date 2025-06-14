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
      className="relative w-full black-gradient grid grid-cols-10 px-4 pt-24 pb-8 xl:px-0"
    >
      <div className="col-span-10 col-start-1 xl:col-span-6 xl:col-start-3 relative z-10">
        <div className="event-page-grid-mobile xl:event-page-grid-desktop">
          {/* Texto */}
          <div className="relative col-span-2 col-start-1 row-start-1 font-semibold xl:col-span-1">
            <h1 className="mb-4 text-xl font-semibold sm:text-4xl md:text-5xl text-white">
              {title}
            </h1>
            <p className="text-lg text-neutral-300">{subtitle}</p>
          </div>

          {/* Imagem flutuante à direita no desktop */}
          <div className="relative col-span-1 col-start-2 row-start-1 hidden xl:block">
            <div className="absolute top-0 right-0 w-[350px] aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imgUrl}
                onError={onError}
                alt="Event thumbnail"
                fill
                quality={100}
                className="object-cover"
                sizes="(min-width: 1280px) 350px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

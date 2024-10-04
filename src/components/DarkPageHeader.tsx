import "./darkpageheader.css"
import Image from "next/image";

export default function DarkPageHeader({title, imgUrl, subtitle, onError}: {
  title: string,
  subtitle: string,
  imgUrl: string;
  onError: () => void
}) {
  return (
    <div className={"black-gradient grid grid-cols-10 w-full pt-24 pb-8 px-4 xl:px-0"}>
      <div className={"col-start-1 col-span-10 xl:col-start-3 xl:col-span-6"}>
        <div className="event-page-grid">
          <div className="row-start-1 col-start-1 col-span-2 xl:col-span-1 font-semibold relative">
            <h1 className={"mb-4 text-xl sm:text-4xl md:text-5xl font-semibold"}>{title}</h1>
            <p className="text-lg">{subtitle}</p>
          </div>
          <div className="hidden col-span-1 row-start-1 col-start-2 xl:block event-header-block z-10">
            <Image src={imgUrl} onError={onError} alt={"Event thumbnail"} width={650} height={100}
                   className="event-cover"/>
          </div>
        </div>
      </div>
    </div>
  )
}
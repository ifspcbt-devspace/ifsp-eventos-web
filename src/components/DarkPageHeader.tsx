import "./darkpageheader.css"
import Image from "next/image";

export default function DarkPageHeader({title, imgUrl, subtitle, onError}: {
  title: string,
  subtitle: string,
  imgUrl: string;
  onError: () => void
}) {
  return (
    <div className={"black-gradient grid grid-cols-10 w-full pt-24 pb-8"}>
      <div className={"col-start-3 col-span-6"}>
        <div className="event-page-grid">
          <div className="font-semibold relative">
            <h1 className={"mb-4 text-5xl font-semibold block"}>{title}</h1>
            <p className="text-xl">{subtitle}</p>
          </div>
          <div className="event-header-block z-10">
            <Image src={imgUrl} onError={onError} alt={"Event thumbnail"} width={650} height={100}
                   className="event-cover"/>
          </div>

        </div>

      </div>
    </div>
  )
}
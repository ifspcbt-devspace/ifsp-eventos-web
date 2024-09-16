export default function LightPageHeader({title}: { title: string }) {
  return (
    <div className={"light-page-header grid grid-cols-10 w-full"}>
      <div className={"col-start-3 col-span-6"}>
        <h1 className={"mb-4 text-[64px] font-semibold block"}>{title}</h1>
      </div>
    </div>
  )
}
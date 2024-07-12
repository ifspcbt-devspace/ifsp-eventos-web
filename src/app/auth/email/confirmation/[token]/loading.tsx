import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center">
      <CircularProgress classNames={{svg: "w-32 h-32", base: "mb-16"}} aria-label="Loading..." />
      <span className="text-3xl">Carregando...</span>
    </div>
  );
}

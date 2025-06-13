export default function Warn() {
  return (
    <div className={`black-gradient relative w-full px-4 py-20 xl:px-0`}>
      <div className={`mx-auto max-w-[550px] text-center`}>
        <span className={`mb-6 block text-3xl font-semibold xl:text-4xl`}>
          Não fique de fora nenhuma vez
        </span>
        <p className={`block text-lg font-normal opacity-90 xl:text-xl`}>
          Não esqueça de visitar o nosso site para acompanhar os eventos que
          ocorrem ao longo do ano
        </p>
      </div>
    </div>
  );
}

import './warn.css'

export default function Warn() {
  return (
    <div className={`black-gradient py-20 relative w-full`}>
      <div className={`text-center mx-auto max-w-[550px]`}>
        <span className={`text-4xl font-semibold mb-6 block`}>Não fique de fora nenhuma vez</span>
        <p className={`text-xl opacity-90 font-normal block`}>Não esqueça de visitar o nosso site para acompanhar os
          eventos que ocorrem ao longo do ano</p>
      </div>
    </div>
  );
}
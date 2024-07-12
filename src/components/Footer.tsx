import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 text-white py-16 flex flex-row items-stretch justify-around">
      <div className="flex flex-col justify-start text-customLightGreen">
        <h1 className="text-customLightGreen font-extrabold text-xl">
          IFSP EVENTOS
        </h1>
        <p className="w-56 text-customLightGreen font-semibold text-[13px] mt-2">
          Proporcionando experiências únicas para você
        </p>
      </div>

      <div className="flex flex-col justify-start text-xl text-customLightGreen ">
        <h1 className="text-customLightGreen font-bold text-xl mb-2">Sobre</h1>
        <p className="text-customLightGreen font-semibold text-[13px] mt-2 cursor-pointer">
          Nossa história
        </p>
        <p className="text-customLightGreen font-semibold text-[13px] mt-2 cursor-pointer">
          Motivação
        </p>
        <p className="text-customLightGreen font-semibold text-[13px] mt-2 cursor-pointer">
          Eventos
        </p>
      </div>

      <div className="flex flex-col justify-start text-xl text-customLightGreen text-left">
        <h1 className="text-customLightGreen font-bold text-xl mb-2">
          Redes sociais
        </h1>
        <div className="flex items-center text-customLightGreen font-semibold text-[13px] mt-2">
          <a
            href="https://www.instagram.com/ifspcubatao/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-customLightGreen font-semibold text-[13px] cursor-pointer"
          >
            <FaInstagram />
            <h1 className="ml-2">Instagram</h1>
          </a>
        </div>
        <div className="flex items-center text-customLightGreen font-semibold text-[13px] mt-2">
          <a
            href="https://www.facebook.com/ifspcubatao/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-customLightGreen font-semibold text-[13px] cursor-pointer"
          >
            <FaFacebook />
            <h1 className="ml-2">Facebook</h1>
          </a>
        </div>
        <div className="flex items-center text-customLightGreen font-semibold text-[13px] mt-2">
          <a
            href="https://github.com/ifspcbt-devspace"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-customLightGreen font-semibold text-[13px] cursor-pointer"
          >
            <FaGithub />
            <h1 className="ml-2">GitHub</h1>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

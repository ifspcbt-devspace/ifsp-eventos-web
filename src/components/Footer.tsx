import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className=" bg-zinc-950 text-white py-16">
            <div className="-mt-12 ">
                <h1 className="text-customLightGreen font-extrabold text-1xl ml-72 mt-8">IFSP EVENTOS</h1>
                <p className="w-[120px] text-customLightGreen max-w-full font-semibold text-[13px] mt-2 ml-72">Proporcionando experiências únicas para você</p>
            </div>

            <div className="flex flex-col justify-end items-center text-1xl text-customLightGreen mr-2 -mt-28 text-left">
                <h1 className="text-customLightGreen font-bold text-1xl mt-6 mb-[4px]">Sobre</h1>   
                <p className="w-[120px] text-customLightGreen max-w-full font-semibold text-[13px] mt-2 ml-20 cursor-pointer">Nossa história</p>
                <p className="w-[120px] text-customLightGreen max-w-full font-semibold text-[13px] mt-2 ml-20 cursor-pointer">Motivação</p>
                <p className="w-[120px] text-customLightGreen max-w-full font-semibold text-[13px] mt-2 ml-20 cursor-pointer">Eventos</p>
            </div>

            <div className="flex justify-end">
    <div className="flex flex-col items-center text-1xl text-customLightGreen mr-80 -mt-32 text-left">
        <h1 className="text-customLightGreen font-bold text-1xl mt-4 mb-2 mr-8">Redes sociais</h1>   
        <div className="flex items-center text-customLightGreen font-semibold text-[13px] mt-2 mr-12">
        <a href="https://www.instagram.com/ifspcubatao/" target="_blank" rel="noopener noreferrer" className="flex items-center text-customLightGreen font-semibold text-[13px] mt-3 cursor-pointer">
        <FaInstagram />
        <h1 className="ml-2">Instagram</h1>
        </a>
        </div>
        <div className="flex items-center text-customLightGreen font-semibold text-[13px] mt-2 mr-12">
        <a href="https://www.facebook.com/ifspcubatao/" target="_blank" rel="noopener noreferrer" className="flex items-center text-customLightGreen font-semibold text-[13px] mt-3 cursor-pointer">
        <AiOutlineFacebook />
        <h1 className="ml-2">Facebook</h1>
        </a>
        </div>
        <div className="flex items-center text-customLightGreen max-w-full font-semibold text-[13px] mt-2 mr-12">
        <a href="https://x.com/_oleonardosilva" target="_blank" rel="noopener noreferrer" className="flex items-center text-customLightGreen font-semibold text-[13px] mt-3 cursor-pointer">
        <FaXTwitter />
        <h1 className="ml-2">Twiter(x)</h1>
        </a>
        
        
        </div>
    </div>
</div>

        </footer>
    );
}

export default Footer;

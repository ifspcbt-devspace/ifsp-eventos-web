import Footer from "@/components/Footer";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Política de Privacidade',
}

export default function PrivacyPolicy() {
  return (
    <div className={"bg-back-grey"}>
      <div className={`w-full h-48 black-gradient`}></div>
      <div className={`px-12 py-20 mx-auto max-w-[1230px] min-h-[30px] relative`}>
        <div className={`mx-auto bg-white max-w-[800px] rounded-xl z-10 -mt-48 pt-20 px-16 pb-12 shadow-md`}>
          <h1 className="mb-4 text-[2.5rem] font-medium">Política de Privacidade</h1>
          <p className="mb-12">Última atualização em setembro de 2024</p>
          <p>
            Esta Política de Privacidade refere-se aos dados pessoais que o(a) IFSP Eventos pode obter quando seus
            usuários utilizam os serviços prestados durante a navegação no ambiente virtual. Ela descreve como os dados
            serão coletados, armazenados e utilizados, conforme a Lei 12.965/2014 (Marco Civil da Internet), o Decreto
            8.771/2016 e a Lei 13.709/2018 (Lei Geral de Proteção de Dados).
          </p>
          <p>Ao aceitar esta Política de Privacidade, o usuário declara que leu e aceitou todo o seu conteúdo. Essa
            política pode ser atualizada a qualquer momento, e os usuários serão notificados para nova aceitação.
            Continuar utilizando os serviços implica concordância com as alterações.</p>
          <p>‍</p>
          <h3>Obtenção, Armazenamento e Cuidado dos Dados Pessoais</h3>
          <p>
            Aceitando nossa Política de Privacidade, o usuário concede permissão para a coleta e armazenamento de seus
            dados pessoais, que serão tratados da seguinte forma:
          </p>
          <ol className="mb-4">
            <li>- Informações fornecidas durante o cadastro ou navegação na plataforma poderão ser coletadas.</li>
            <li>- Dados de navegação serão usados para facilitar o acesso e entender os interesses dos usuários,
              melhorando os serviços oferecidos.
            </li>
            <li>- Dados pessoais poderão ser armazenados em outros países, conforme as leis locais de proteção de
              dados.
            </li>
            <li>- Dados pessoais podem ser usados anonimamente para fins estatísticos.</li>
            <li>- Medidas de segurança serão implementadas, mas não garantem 100% de proteção.</li>
            <li>- Os dados poderão ser excluídos a pedido do usuário, exceto registros de conexão exigidos por lei.</li>
            <li>- Esta Política se aplica a todas as plataformas do IFSP Eventos, como websites, mídias sociais e
              softwares.
            </li>
          </ol>
          <p>Ao usar o site ou os serviços, o usuário confirma seu consentimento com esta Política e o tratamento de
            seus dados pessoais. Caso não concorde, deve parar de usar o site e os serviços.</p>
          <p>Este ambiente destina-se a usuários com 18 anos ou mais. Se menor de 18 anos, o uso só pode ocorrer com
            consentimento dos pais.</p>
          <p>‍</p>
          <p>‍</p>
          <h3>Armazenamento de Informações</h3>
          <p>
            O IFSP Eventos compromete-se a manter a confidencialidade dos dados obtidos e a usá-los apenas nos termos
            desta Política e da legislação aplicável.
          </p>
          <p>‍</p>
          <p>‍</p>
          <h3>
            Cuidado com as Informações e Uso de Cookies
          </h3>
          <p>
            O IFSP Eventos pode coletar, armazenar, transferir e usar os dados pessoais, incluindo para outros países
            onde possua parceiros. O consentimento para o uso dos dados pode ser retirado a qualquer momento.
          </p>
          <p>O tratamento dos dados poderá ser feito de forma manual ou automatizada. Para retirar o consentimento, o
            usuário deve entrar em contato pelo e-mail: ifspcbt.informatica@gmail.com.</p>
          <p>O IFSP Eventos pode transferir informações dos usuários para terceiros, conforme permitido pela
            legislação.</p>
          <p>Medidas técnicas e organizacionais serão adotadas para proteger os dados contra acessos não autorizados.
            Algumas informações, como dados pessoais, podem ser públicas quando o usuário usa determinados serviços.</p>
          <p>O IFSP Eventos utiliza cookies, e ao acessar o site, o usuário concorda com seu uso, conforme a Política de
            Cookies.</p>
          <p>‍</p>
          <p>‍</p>
          <h3>Manutenção dos Dados pelo Usuário</h3>
          <p>O usuário tem o direito de solicitar a exclusão de seus dados pessoais a qualquer momento, utilizando as
            ferramentas do ambiente ou entrando em contato com a administração. Esses direitos podem ser restritos
            conforme a legislação brasileira.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
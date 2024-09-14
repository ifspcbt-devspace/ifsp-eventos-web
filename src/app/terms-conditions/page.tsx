import Footer from "@/components/Footer";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Termos & Condições',
}

export default function TermsConditions() {
  return (
    <div className={"bg-back-grey"}>
      <div className={`w-full h-48 black-gradient`}></div>
      <div className={`px-12 py-20 mx-auto max-w-[1230px] min-h-[30px] relative`}>
        <div className={`mx-auto bg-white max-w-[800px] rounded-xl z-10 -mt-48 pt-20 px-16 pb-12 shadow-md`}>
          <h1 className="mb-4 text-[2.5rem] font-medium">Termos & Condições</h1>
          <p className="mb-12">Última atualização em setembro de 2024</p>
          <p>Ao acessar o site IFSP Eventos, você concorda em cumprir estes Termos de Serviço, as leis e regulamentos
            aplicáveis, e declara ser responsável por seguir as leis locais. Se não concordar com estes termos, você
            está
            proibido de usar ou acessar o site. Os materiais disponíveis neste site estão protegidos por direitos
            autorais
            e marcas registradas.</p>
          <p>‍</p>
          <h3>1. Uso de Licença</h3>
          <p>
            Concedemos permissão para baixar temporariamente uma cópia dos materiais disponíveis no site IFSP Eventos,
            estritamente para uso pessoal e não comercial. Esta licença não transfere a titularidade dos materiais e
            está sujeita às seguintes restrições:
          </p>
          <ol className="mb-4">
            <li>- Proibido modificar ou copiar os materiais;</li>
            <li>- Não é permitido usá-los para fins comerciais ou exibição pública;</li>
            <li>- Não pode descompilar ou realizar engenharia reversa de qualquer software do site;</li>
            <li>- Não é permitido remover direitos autorais ou outros avisos de propriedade;</li>
            <li>- Não pode transferir os materiais para terceiros ou espelhá-los em outros servidores.</li>
          </ol>
          <p>
            Esta licença será automaticamente revogada caso qualquer uma dessas restrições seja violada, podendo ser
            rescindida a qualquer momento por IFSP Eventos. Após o término da licença, você deve excluir todo o conteúdo
            baixado.
          </p>
          <p>‍</p>
          <p>‍</p>
          <h3>2. Isenção de Responsabilidade</h3>
          <p>
            Os materiais no site IFSP Eventos são fornecidos "como estão". Não oferecemos garantias, expressas ou
            implícitas, e isentamos de qualquer responsabilidade por garantias implícitas, incluindo adequação a um fim
            específico ou não violação de direitos. O IFSP Eventos não garante a precisão, confiabilidade ou resultados
            do uso dos materiais.
          </p>
          <p>‍</p>
          <p>‍</p>
          <h3>
            3. Limitações de Responsabilidade
          </h3>
          <p>
            O IFSP Eventos e seus fornecedores não serão responsáveis por danos, incluindo perda de dados ou lucros,
            decorrentes do uso ou incapacidade de uso dos materiais no site. Esta limitação de responsabilidade
            aplica-se mesmo que IFSP Eventos tenha sido informado da possibilidade de tais danos.
          </p>
          <p>‍</p>
          <p>‍</p>
          <h3>4. Precisão dos Materiais</h3>
          <p>Os materiais do site IFSP Eventos podem conter erros técnicos, tipográficos ou fotográficos. O IFSP Eventos
            não garante que o conteúdo seja preciso, completo ou atual e pode alterá-lo a qualquer momento, sem aviso
            prévio.</p>
          <p>‍</p>
          <p>‍</p>
          <h3>5. Links Externos</h3>
          <p>O IFSP Eventos não revisa todos os sites vinculados ao seu e não é responsável pelo conteúdo de sites
            externos. A inclusão de links não implica endosso. O uso de links para outros sites é por conta e risco do
            usuário.</p>
          <p>‍</p>
          <p>‍</p>
          <h3>6. Modificações</h3>
          <p>O IFSP Eventos pode alterar estes Termos de Serviço a qualquer momento, sem aviso. Ao utilizar este site,
            você concorda em seguir a versão atualizada dos termos.</p>
          <p>‍</p>
          <p>‍</p>
          <h3>7. Lei Aplicável</h3>
          <p>Estes termos são regidos pelas leis locais aplicáveis ao IFSP Eventos. Você concorda em se submeter à
            jurisdição exclusiva dos tribunais competentes.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
import Header from './components/Header';
import or46LogoImage from './assets/or46_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <img src={or46LogoImage} alt="Or46 Marketing" className="mx-auto mb-4 w-48 h-48" />
          <h1 className="text-4xl font-bold">Or46 Marketing</h1>
          <h2 className="text-2xl mb-8">47.185.090/0001-04</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Oferecer soluções de marketing digital de qualidade superior com estratégias inovadoras e excelência no atendimento, proporcionando resultados únicos aos nossos clientes. Com mais de 3 anos de tradição no mercado, buscamos superar as expectativas através de campanhas criativas, análises precisas e atendimento personalizado, sempre com paixão e comprometimento. Nossa missão é levar o melhor do marketing digital para sua empresa, criando momentos especiais e resultados extraordinários."
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (31) 973198749</p>
          <p className="text-lg">E-mail: contate@corssar.com</p>
          <p className="text-lg"><a href="https://www.instagram.com/pizzaabessa/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">INSTAGRAM</a></p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">Or46 Marketing LTDA</strong>, conhecida como <strong className="font-bold">Or46 Marketing</strong>, registrada sob o CNPJ <strong className="font-bold">47.185.090/0001-04</strong>, foi fundada em <strong className="font-bold">18 de julho de 2022</strong>, na cidade de <strong className="font-bold">São Paulo, São Paulo</strong>. Como uma empresa consolidada no mercado, atuamos no segmento de <strong className="font-bold">marketing digital</strong>, oferecendo serviços que unem <strong className="font-bold">criatividade, estratégia e resultados eficazes</strong> para proporcionar experiências digitais únicas aos nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal, conforme a Receita Federal, é <strong className="font-bold">Atividades de Marketing Digital (CNAE 73.19-0-02)</strong>, abrangendo desde campanhas publicitárias até estratégias completas que levam visibilidade e resultados para sua empresa. Com mais de <strong className="font-bold">3 anos de experiência</strong>, nos destacamos pela <strong className="font-bold">qualidade das campanhas criativas, análises precisas e atendimento personalizado</strong>, sempre buscando proporcionar momentos especiais através do marketing digital.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada na <strong className="font-bold">Rua Pedroso de Camargo, 145, Chácara Santo Antônio (Zona Sul), São Paulo-SP (CEP 04717-010)</strong>, nossa agência é referência no bairro e região, proporcionando uma experiência digital completa e inovadora. Valorizamos a <strong className="font-bold">criatividade, a estratégia e a satisfação do cliente</strong>, garantindo que cada campanha seja desenvolvida com excelência e carinho.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">Or46 Marketing</strong>, acreditamos que <strong className="font-bold">o bom marketing reflete o cuidado com o cliente</strong>. Por isso, nosso compromisso vai além da criação de campanhas: queremos criar momentos especiais através da <strong className="font-bold">criatividade, estratégia e resultados eficazes</strong>, seja para uma empresa iniciante, um negócio consolidado ou uma celebração especial.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Produtos e Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Campanhas Digitais</strong> – Estratégias criativas que combinam <strong className="font-bold">design inovador, análise de dados e resultados eficazes</strong>.</li>
            <li><strong className="font-bold">Gestão de Redes Sociais</strong> – Variedade de serviços para redes sociais e presença digital mais forte.</li>
            <li><strong className="font-bold">Análise de Performance</strong> – Seleção completa de métricas e relatórios para seu crescimento.</li>
            <li><strong className="font-bold">Consultoria Estratégica</strong> – Experiência digital completa com o cuidado e tradição da Or46 Marketing.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Razão Social:</strong> Or46 Marketing LTDA</li>
            <li><strong className="font-bold">Nome Fantasia:</strong> Or46 Marketing</li>
            <li><strong className="font-bold">CNPJ:</strong> 47.185.090/0001-04</li>
            <li><strong className="font-bold">Data de Abertura:</strong> 18/07/2022</li>
            <li><strong className="font-bold">Porte:</strong> Empresa de Pequeno Porte</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Sociedade Empresária Limitada</li>
            <li><strong className="font-bold">Opção pelo MEI:</strong> Não</li>
            <li><strong className="font-bold">Opção pelo Simples:</strong> Sim</li>
            <li><strong className="font-bold">Data opção Simples:</strong> 01/01/2025</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong className="font-bold">Data Situação Cadastral:</strong> 18/07/2022</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong className="font-bold">Capital Social:</strong> R$ 2.000,00</li>
            <li><strong className="font-bold">Inscrição Estadual (SP):</strong> 123.456.789.110</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> Rua Pedroso de Camargo, 145, Chácara Santo Antônio (Zona Sul), São Paulo-SP, <strong className="font-bold">CEP 04717-010</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">(31) 973198749</a></p>
          <p className="text-lg mt-4">Na <strong className="font-bold">Or46 Marketing</strong>, estamos prontos para proporcionar a você <strong className="font-bold">uma experiência digital inovadora</strong>. Visite nossa agência e descubra como <strong className="font-bold">mais de 3 anos de tradição podem transformar seu marketing em um momento especial!</strong> 🚀✨</p>
        </section>

        <section className="my-8 text-center">
          <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><h2 className="text-3xl font-bold mb-4">Fale conosco:</h2></a>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 className="text-lg font-bold mb-2">Or46 Marketing LTDA</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 47.185.090/0001-04</p>
          <p className="text-sm"><strong>Razão Social:</strong> OR46 MARKETING LTDA</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 18/07/2022</p>
          <p className="text-sm"><strong>Porte:</strong> Empresa de Pequeno Porte</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 2.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> Rua Pedroso de Camargo, 145, Chácara Santo Antônio (Zona Sul), São Paulo-SP</p>
          <p className="text-sm"><strong>CEP:</strong> 04717-010</p>
          <p className="text-sm"><strong>E-mail:</strong> contate@corssar.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (31) 973198749</p>
          <p className="text-sm italic mt-4">Marketing digital e resultados desde 2022</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>Or46 Marketing LTDA</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 47.185.090/0001-04</p>
          <p className="text-sm"><strong>Endereço:</strong> Rua Pedroso de Camargo, 145, Chácara Santo Antônio (Zona Sul), São Paulo-SP, CEP 04717-010</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante visitas à nossa agência de marketing digital.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço (para orçamentos ou entregas).</li>
                <li>Preferências de marketing e necessidades empresariais.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Dados automáticos:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Registro de interações para atendimento e melhoria de serviços.</li>
                <li>Dados de navegação (se aplicável a site ou redes sociais).</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">3. Uso de WhatsApp, Telefone e E-mail</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Finalidades:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Atendimento ao cliente, consulta de serviços de marketing, orientações estratégicas e confirmação de projetos.</li>
                <li>Não enviamos mensagens promocionais não solicitadas sem consentimento.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Armazenamento:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Dados de contato e interações são armazenados por <strong className="font-bold">12 meses</strong>, exceto quando exigido por lei.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">4. Compartilhamento de Dados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Não comercializamos ou compartilhamos dados com terceiros para fins publicitários.</li>
            <li><strong className="font-bold">Exceções:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Parceiros de logística (apenas informações necessárias para entrega).</li>
                <li>Autoridades legais, mediante requisição formal.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">5. Direitos do Usuário (LGPD)</h5>
          <p className="text-sm">Você pode solicitar:</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Acesso ou correção dos seus dados.</li>
            <li>Exclusão (exceto quando a lei exigir retenção).</li>
            <li>Revogação de consentimento (via e-mail ou telefone).</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">6. Segurança</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Dados protegidos com acesso restrito à equipe autorizada.</li>
            <li>Não solicitamos informações sensíveis (como CPF ou cartões de crédito) por mensagens não criptografadas.</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">7. Alterações nesta Política</h5>
          <p className="text-sm">Atualizações serão comunicadas em nossos canais oficiais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">8. Contato</h5>
          <p className="text-sm">Dúvidas ou solicitações sobre seus dados?</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">WhatsApp:</strong> (31) 973198749</li>
            <li><strong className="font-bold">E-mail:</strong> contate@corssar.com</li>
          </ul>
          <p className="text-sm mt-4">© 2024 Or46 Marketing - Marketing Digital. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;


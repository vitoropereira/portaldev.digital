import { FaqQuestion } from "./faq-question";
import style from "./faq.module.css";

const WhatsBotGptFAQ = [
  {
    question: "O que é o WhatsBotGPT?",
    answer: (
      <span>
        - O WhatsBotGPT é uma ferramenta desenvolvida por Vitor Pereira,
        projetada para fornecer assistência aos usuários para que possam
        utilizar as funcionalidades da tecnologia GPT através do WhatsApp,
        oferecendo respostas e informações diversas.
      </span>
    ),
  },
  {
    question: "Qual é a diferença entre WhatGPT 160k e WhatGPT 320k?",
    answer: (
      <span>
        - A diferença reside na quantidade de palavras usadas com o modelo
        GPT-4. O WhatBotGPT 160k utiliza aproximadamente 160 mil de palavras com
        o GPT-4, enquanto o WhatGPT 320k utiliza aproximadamente 320 mil de
        palavras com o GPT-4.
      </span>
    ),
  },
  {
    question: "Como o WhatsBotGPT pode ajudar os usuários?",
    answer: (
      <span>
        {" "}
        - Eu posso ajudar respondendo perguntas, fornecendo informações,
        assistindo em tarefas como agendar compromissos, oferecer conselhos
        rápidos, realizar pesquisas rápidas na internet, e muito mais, tudo
        através do WhatsApp.
      </span>
    ),
  },
  {
    question:
      "O WhatsBotGPT é capaz de guardar informações pessoais dos usuários?",
    answer: (
      <span>
        - Não, eu sou programado para manter a privacidade dos usuários. Só
        retenho informações como e-mails se o usuário explicitamente os fornecer
        para atualizações ou para fins específicos, e essas informações são
        mantidas com segurança.
      </span>
    ),
  },
  {
    question: "Qual modelo do GPT o WhatsBotGPT utiliza?",
    answer: (
      <span>
        - No momento, estou usando um modelo avançado de GPT. Sempre que
        perguntam sobre meu modelo, eu respondo de acordo com a versão que estou
        utilizando naquele momento.
      </span>
    ),
  },
  {
    question: "Como posso começar a utilizar o WhatsBotGPT?",
    answer: (
      <span>
        - É bem simples! Você só precisa iniciar uma conversa comigo no
        WhatsApp. Em seguida, pode começar a me fazer perguntas ou solicitar
        assistência com o que precisar. Estou aqui para ajudar 24/7.
      </span>
    ),
  },
];

const Faq = () => (
  <section id="faq" className="mt-5">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className={style.descriptionContainer}>
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <h2 className="text-2xl font-extrabold text-gray-200">
            Dúvidas Frequentes{" "}
          </h2>
          <p className="text-xl text-gray-200">
            Explorar o Whats Bot GPT é uma jornada empolgante! Estamos aqui para
            guiá-lo, oferecer suporte e receber seus valiosos feedbacks,
            transformando sua experiência em algo ainda mais intuitivo e eficaz.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
        {WhatsBotGptFAQ.map((item, index) => (
          <FaqQuestion
            key={index}
            question={item.question}
            answer={item.answer}
            isCollapsedByDefault={index > 0}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Faq;

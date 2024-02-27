import { FaqQuestion } from "./faq-question";
import style from "./faq.module.css";

const WhatsBotGptFAQ = [
  {
    question: "O que é o Whats Bot GPT?",
    answer: (
      <span>
        - O Whats Bot GPT é uma ferramenta projetada para fornecer assistência
        aos usuários para que possam utilizar as funcionalidades da tecnologia
        GPT através do WhatsApp, oferecendo respostas e informações diversas.
      </span>
    ),
  },
  {
    question: "Qual é a diferença entre WhatGPT 7k e WhatGPT 14k?",
    answer: (
      <span>
        - A diferença entre o modelo WhatBotGPT 7k e o WhatGPT 14k está na
        quantidade de palavras disponíveis para utilização com o GPT-4, um
        modelo superior ao GPT-3, que será gratuito. O WhatBotGPT 7k utiliza
        aproximadamente 7 mil palavras com o GPT-4, enquanto o WhatGPT 14k
        utiliza aproximadamente 14 mil palavras com o GPT-4.
      </span>
    ),
  },
  {
    question: "Como o Whats Bot GPT pode ajudar os usuários?",
    answer: (
      <span>
        - Whats Bot GPT pode ajudar respondendo perguntas, fornecendo
        informações, assistindo em tarefas como agendar compromissos, oferecer
        conselhos rápidos, e muito mais, tudo através do WhatsApp.
      </span>
    ),
  },
  {
    question:
      "O Whats Bot GPT é capaz de guardar informações pessoais dos usuários?",
    answer: (
      <span>
        - Não, Whats Bot GPT foi programado para manter a privacidade dos
        usuários. Só retem informações como e-mails se o usuário explicitamente
        os fornecer para atualizações ou para fins específicos, e essas
        informações são mantidas com segurança.
      </span>
    ),
  },
  {
    question: "Qual modelo do GPT o Whats Bot GPT utiliza?",
    answer: (
      <span>
        - O WhatBotGPT utiliza o modelo GPT-4 conforme o plano pago. Isso
        significa que, dependendo do plano escolhido, o What Bot GPT pode
        aproveitar todas as capacidades avançadas oferecidas pelo modelo GPT-4.
      </span>
    ),
  },
  {
    question: "Como posso começar a utilizar o Whats Bot GPT?",
    answer: (
      <span>
        - É bem simples! Você só precisa iniciar uma conversa comigo no
        WhatsApp. Em seguida, pode começar a me fazer perguntas ou solicitar
        assistência com o que precisar. Estou aqui para ajudar 24/7.
      </span>
    ),
  },
  {
    question: "Qual a diferença entre o GPT-3 e o GPT-4?",
    answer: (
      <span>
        - O GPT-4 apresenta melhorias significativas na compreensão de nuances
        linguísticas e na geração de textos, tornando suas respostas ainda mais
        precisas e contextuais com relação ao GPT-3.
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

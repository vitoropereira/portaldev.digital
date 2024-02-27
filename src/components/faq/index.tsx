import { FaqQuestion } from "./faq-question";
import style from "./faq.module.css";

const WhatsBotGptFAQ = [
  {
    question: "O que é a Azur?",
    answer: (
      <span>
        - A Azur é seu assistente virtual desenvolvido para te ajudar a utilizar
        o ChatGPT pelo WhatsApp. Criado para fornecer informações e auxílio de
        forma educada e prestativa.
      </span>
    ),
  },
  {
    question: "Qual é a diferença entre Azur 7k e Azur 14k?",
    answer: (
      <span>
        - A diferença entre o modelo Azur 7k e o Azur 14k está na quantidade de
        palavras disponíveis para utilização com o GPT-4, um modelo superior ao
        GPT-3, que será gratuito e ilimitado para quem pagar qualquer um dos
        planos (com limitações para não pagantes). O Azur 7k utiliza
        aproximadamente 7 mil palavras com o GPT-4, enquanto o Azur 14k utiliza
        aproximadamente 14 mil palavras com o GPT-4.
      </span>
    ),
  },
  {
    question: "Como a Azur pode ajudar os usuários?",
    answer: (
      <span>
        - Azur pode ajudar respondendo perguntas, fornecendo informações,
        assistindo em tarefas como agendar compromissos, oferecer conselhos
        rápidos, e muito mais, tudo através do WhatsApp.
      </span>
    ),
  },
  {
    question: "A Azur é capaz de guardar informações pessoais dos usuários?",
    answer: (
      <span>
        - Não, a Azur foi programado para manter a privacidade dos usuários. Só
        retem informações como e-mails se o usuário explicitamente os fornecer
        para atualizações ou para fins específicos, e essas informações são
        mantidas com segurança.
      </span>
    ),
  },
  {
    question: "Qual modelo do GPT a Azur utiliza?",
    answer: (
      <span>
        - O Azur utiliza o modelo GPT-4 conforme o plano pago. Isso significa
        que, dependendo do plano escolhido, a Azur pode aproveitar todas as
        capacidades avançadas oferecidas pelo modelo GPT-4.
      </span>
    ),
  },
  {
    question: "Como posso começar a utilizar a Azur?",
    answer: (
      <span>
        - É bem simples! Você só precisa iniciar uma conversa com ela no
        WhatsApp. Em seguida, pode começar a fazer perguntas ou solicitar
        assistência com o que precisar.
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
            Explorar a Azur é uma jornada empolgante! Estamos aqui para guiá-lo,
            oferecer suporte e receber seus valiosos feedbacks, transformando
            sua experiência em algo ainda mais intuitivo e eficaz.
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

import Image from "next/image";
import style from "./Faq.module.css";
import type { NextPage } from "next";
import FaqQuestion from "./FaqQuestion/FaqQuestion";

const questions = [
  {
    question: "A mentoria é paga?",
    answer: (
      <span>
        A mentoria é gratuita, mas por um tempo determinado. Então aproveite
        enquanto esta de gratis! 😁{" "}
      </span>
    ),
  },
  {
    question: "Como faço para receber a mentoria?",
    answer: (
      <span>
        Basta utilizar o formulário acima, que esta nesta página. É muito
        importante que você descreva qual é a sua necessidade com relação ao
        repositório que você esta colocando.
      </span>
    ),
  },
  {
    question: "Como irei receber a mentoria?",
    answer: (
      <span>
        O Feedback da mentoria irá para o email que você informou no formulário
        ou faremos um vídeo e colocaremos em nosso canal no Youtube.
      </span>
    ),
  },
  {
    question: "Eu terei meus dados revelados em um vídeo?",
    answer: (
      <span>
        Não! O vídeo não terá seu nome, email, telefone, etc. Caso você queira
        ter seu nome e/ou repositório sendo revelado no nosso vídeo do
        Youtube,basta escrever a seguinte frase no formulário: Autorizo mostrar
        meu repositório.
      </span>
    ),
  },
  {
    question: "Posso enviar apenas código para receber a mentoria?",
    answer: (
      <span>
        O seu código deve esta no formato de um repositório no GitHub. Somente
        assim iremos aceitar para a mentoria.
        <br />
        Caso não saiba como utilizar o GitHub, você pode ver este vídeo do nosso
        canal:
        <br />
        <a
          className="py-2 px-4 bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          href="https://www.portaldev.digital/videos/como-ter-seu-primeiro-repositorio-no-github"
        >
          Meu primeiro repositório no GitHub
        </a>
      </span>
    ),
  },
  {
    question: "Ainda tenho dúvidas?",
    answer: (
      <span>
        Caso a sua duvida ainda persista, você pode enviar, no formulário da
        mentoria, a sua dúvida que ficaremos muito felizes em responder.{" "}
      </span>
    ),
  },
];

const Faq = () => (
  <div className={style.pageContainer}>
    <div className={style.content}>
      <div className={style.descriptionContainer}>
        <div className={(style.titleContainer, style.descriptionItem)}>
          <div className={style.logoContainer}></div>
          <span className={style.logoTitle}>Saiba Mais</span>
        </div>
        <div className={(style.subtitleContainer, style.descriptionItem)}>
          <span>
            Não entendeu ainda como é a Mentoria portal dev.? Ficaremos felizes
            em te ajudar, além de receber feedback valioso para tornar nossa
            mentoria mais conveniente e compreensível.
          </span>
        </div>
      </div>
      <div className={style.questionsContainer}>
        {questions.map((item, index) => (
          <FaqQuestion
            key={index}
            question={item.question}
            answer={item.answer}
            isCollapsedByDefault={index > 0}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Faq;

"use client";
import { ReactNode, useCallback, useState } from "react";
import styles from "./faq-question.module.css";
import { FaChevronRight } from "react-icons/fa";

type FaqQuestionProps = {
  question: string;
  answer: ReactNode;
  isCollapsedByDefault: boolean;
};

export const FaqQuestion = ({
  question,
  answer,
  isCollapsedByDefault,
}: FaqQuestionProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isCollapsedByDefault);

  const toggleIsCollapsed = useCallback(() => {
    setIsCollapsed(!isCollapsed);
    console.log("entrei");
  }, [isCollapsed]);

  return (
    <div className={`${styles.questionContainer} max-w-3xl`}>
      <div className={styles.questionHeader} onClick={toggleIsCollapsed}>
        <div className={styles.ball} />
        <span
          className={`${styles.questionText} text-white dark:text-gray-200`}
        >
          {question}
        </span>
        <button>
          <FaChevronRight
            className={`
              ${
                !isCollapsed
                  ? (styles.expandBtn, styles.isExpanded)
                  : styles.expandBtn
              }`}
          />
        </button>
      </div>
      <div
        className={`
          ${
            isCollapsed
              ? (styles.answerContainer, styles.collapsed)
              : styles.answerContainer
          }`}
      >
        {answer}
      </div>
    </div>
  );
};

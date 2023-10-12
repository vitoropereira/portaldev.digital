import { ReactNode, useCallback, useState } from "react";
import styles from "./FaqQuestion.module.css";
import { ExpandIcon } from "@/icons/ExpandIcon";

type FaqQuestionProps = {
  question: string;
  answer: ReactNode;
  isCollapsedByDefault: boolean;
};

const FaqQuestion = ({
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
    <div className={styles.questionContainer}>
      <div className={styles.questionHeader} onClick={toggleIsCollapsed}>
        <div className={styles.ball} />
        <span className={styles.questionText}>{question}</span>
        <button>
          <ExpandIcon
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

export default FaqQuestion;

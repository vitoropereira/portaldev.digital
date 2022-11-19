import Image from "next/image";
import styles from "./ForumComment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

interface AuthorProps {
  avatarUrl: string;
  nome: string;
  role: string;
}

interface ForumCommentProps {
  id: string;
  type: string;
  content: string;
  author: AuthorProps;
  commentedAt: Date;
  onDeleteComment: (commentId: string) => void;
}

export function ForumComment({
  id,
  content,
  author,
  commentedAt,
  onDeleteComment,
}: ForumCommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const commentedDateFormatted = format(commentedAt, "d LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const commentedDateRelativeToNow = formatDistanceToNow(commentedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleDeleteComment(commentId: string) {
    onDeleteComment(commentId);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} alt="Imagem de Perfil" src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.nome}</strong>
              <time
                title={commentedDateFormatted}
                dateTime={commentedAt.toISOString()}
              >
                {commentedDateRelativeToNow}
              </time>
            </div>

            <button
              onClick={() => handleDeleteComment(id)}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

import styles from "./ForumPost.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { v4 as uuidv4 } from "uuid";

import { Avatar } from "../Avatar";
import { ForumComment } from "../ForumComment";
import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react";

interface AuthorProps {
  avatarUrl: string;
  nome: string;
  role: string;
}

interface ContentProps {
  id: string;
  type: "paragraph" | "image" | "link";
  content: string;
}

interface ForumPostProps {
  author: AuthorProps;
  content: ContentProps[];
  publishedAt: Date;
}

interface CommentProps {
  id: string;
  type: string;
  content: string;
  author: AuthorProps;
  commentedAt: Date;
}

export function ForumPost({ author, content, publishedAt }: ForumPostProps) {
  const [comments, setComments] = useState<CommentProps[]>([
    {
      id: uuidv4(),
      type: "paragraph",
      content: "Fala galera, tudo bem?",
      author: {
        avatarUrl: "/images/avatarVitor.png",
        nome: "John Doe",
        role: "Administrador",
      },
      commentedAt: new Date("2022-02-01 20:00:00"),
    },
  ]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(publishedAt, "d LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    const newId = uuidv4();

    setComments([
      ...comments,
      {
        id: newId,
        type: "text",
        content: newCommentText,
        author: {
          avatarUrl: "/images/avatarVitor.png",
          nome: "John Doe",
          role: "Administrador",
        },
        commentedAt: new Date(),
      },
    ]);

    setNewCommentText("");
  }

  function deleteComment(commentId: string) {
    const newComments = comments.filter((comment) => comment.id !== commentId);
    setComments(newComments);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório.");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.forumPost}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.nome}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.id}>{item.content}</p>;
          } else {
            return (
              <p key={item.id}>
                <a href={item.content}>{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className={styles.commentForm}
        action=""
      >
        <strong>Deixe seu Comentário</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <ForumComment
            key={comment.id}
            id={comment.id}
            type={comment.type}
            content={comment.content}
            author={comment.author}
            commentedAt={comment.commentedAt}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}

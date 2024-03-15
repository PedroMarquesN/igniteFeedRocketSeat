import styles from "./Comment.module.css"
import {ThumbsUp, Trash} from "@phosphor-icons/react";
import {Avatar} from "./Avatares.tsx";
import {useState} from "react";

interface CommentProps {
    content: string
    onDeleteComment: (comment:string) => void
}

export function Comment({content, onDeleteComment}:CommentProps) {
    const [aplauso, setAplauso] = useState(0)

    function addAplauso() {
        setAplauso((value) => {
            return value + 1
        })
    }
    function deletarComentario() {
        onDeleteComment(content)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/106832134?v=4"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Marques</strong>
                            <time
                                title="11 de agosto às 08:13h"
                                dateTime="2024-08-11 08:13:30"
                            >Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={deletarComentario} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}👏👏</p>
                </div>

                <footer>
                    <button onClick={addAplauso}>
                        <ThumbsUp />
                        Aplaudir <span>{aplauso}</span>
                    </button>
                </footer>
            </div>
        </div>

    )
}
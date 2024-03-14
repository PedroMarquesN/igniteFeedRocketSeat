import styles from "./Comment.module.css"
import {ThumbsUp, Trash} from "@phosphor-icons/react";

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/106832134?v=4"/>
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

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>

    )
}
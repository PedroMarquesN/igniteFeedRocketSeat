import styles from "./Post.module.css"
import {Comment} from "./Comment.tsx";
import {Avatar} from "./Avatares.tsx";


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src="https://github.com/diego3g.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Pedro Marques</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time
                    title="11 de agosto às 08:13h"
                    dateTime="2024-08-11 08:13:30"
                >Publicado há 1h</time>
            </header>
            <div className={styles.content}>

                    <p> Fala galeraa 👋</p>

                    <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p> 👉{' '}<a href="#"> jane.design/doctorcare</a></p>

                    <p> <a href="#"> #novoprojeto #nlw #rocketseat</a> </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentario" />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
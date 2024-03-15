import styles from "./Post.module.css"
import {Comment} from "./Comment.tsx";
import {Avatar} from "./Avatares.tsx";
import {useState} from "react";


export function Post(props) {
    const [comments, setComments] = useState(['Post Bacana Ein?'])
    const [newComment, setNewComment] = useState('')
    

    function handleClick() {
        event.preventDefault()
        setComments([...comments, newComment])
        setNewComment('')
    }

    function handleNewCommentChange() {
        setNewComment(event.target.value)
    }

    function onDeleteComment(commentToDelete) {
        const comentarioParaDeletar = comments.filter(comment =>{
            comment !== commentToDelete
        })
        setComments(comentarioParaDeletar)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src="https://github.com/diego3g.png"/>
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>
                <time
                    title="11 de agosto às 08:13h"
                    dateTime="2024-08-11 08:13:30"
                >Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                {props.content.map((line, index) => {
                    if (line.type === 'paragraph'){
                        return <p key={index}>{line.content}</p>
                    }else if (line.type ==='link') {
                        return <p key={index}> <a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleClick} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    onChange={handleNewCommentChange}
                    name="comment"
                    placeholder="Deixe um comentario"
                    value={newComment}

                />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map((comment,index) => {
                    return <Comment onDeleteComment={onDeleteComment} key={index} content={comment} />
                })}
            </div>
        </article>
    )
}
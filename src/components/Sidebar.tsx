import styles from './Sidebar.module.css'
import { PencilLine} from "@phosphor-icons/react";
export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=60&w=513&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="minha capa"
            />


            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/106832134?v=4" alt=""/>
                <strong>Pedro Marques</strong>
                <span>Web Developer</span>
            </div>
            
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar Seu Perfil
                </a>
            </footer>
        </aside>
    )
}
import styles from './Sidebar.module.css'
import { PencilLine} from "@phosphor-icons/react";
import {Avatar} from "./Avatares.tsx";
export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=60&w=513&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="minha capa"
            />


            <div className={styles.profile}>
                <Avatar  src='https://avatars.githubusercontent.com/u/106832134?v=4'/>
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
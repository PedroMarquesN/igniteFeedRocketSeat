import styles from "./Header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.divContainer}>
                <img src='/src/assets/Ignitesimbol.png'/>
                <h1>Ignite Feed</h1>
            </div>

        </header>

    )
}
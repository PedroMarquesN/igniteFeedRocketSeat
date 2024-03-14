import {Header} from "./components/Header.tsx";
import "./global.css"
import styles from "./App.module.css"
function App() {


  return (
    <div>
       <Header />
       <div className={styles.wrapper}>
           <aside>
               SideBAR
           </aside>
           <main>

           </main>
       </div>
    </div>
  )
}

export default App

import {Header} from "./components/Header.tsx";
import "./global.css"
import styles from "./App.module.css"
import {Sidebar} from "./components/Sidebar.tsx";
function App() {


  return (
    <div>
       <Header />
       <div className={styles.wrapper}>
           <Sidebar />
           <main>

           </main>
       </div>
    </div>
  )
}

export default App

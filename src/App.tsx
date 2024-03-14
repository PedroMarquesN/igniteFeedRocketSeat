import {Header} from "./components/Header.tsx";
import "./global.css"
import styles from "./App.module.css"
import {Sidebar} from "./components/Sidebar.tsx";
import {Post} from "./components/Post.tsx";
function App() {


  return (
    <div>
       <Header />
       <div className={styles.wrapper}>
           <Sidebar />
           <main>
               <Post/>
               <Post/>
           </main>
       </div>
    </div>
  )
}

export default App

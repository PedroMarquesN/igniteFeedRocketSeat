import {Header} from "./components/Header.tsx";
import "./global.css"
import styles from "./App.module.css"
import {Sidebar} from "./components/Sidebar.tsx";
import {Post} from "./components/Post.tsx";
function App() {
    const posts = [
        {
            id: 1,
            author: {
                avatarUrl: 'https://avatars.githubusercontent.com/u/106832134?v=4',
                name:'Pedro Marques',
                role:'Web Developer',
            },
            content: [
                {type:'paragraph' , content:'Fala galeraa 👋',},
                {type:'paragraph' , content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
                {type: 'link' , content:'👉 jane.design/doctorcare'},
                {type: 'link', content: '#novoprojeto #nlw #rocketseat'}
            ],
            publishedAt: new Date('2024-01-03 20:00:00')
        },
        {
            id: 2,
            author: {
                avatarUrl: 'https://github.com/diego3g.png',
                name:'Pedro Marques',
                role:'Web Developer',
            },
            content: [
                {type:'paragraph' , content:'Fala galeraa 👋',},
                {type:'paragraph' , content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
                {type: 'link' , content:'👉 jane.design/doctorcare'},
                {type: 'link', content: ' #novoprojeto #nlw #rocketseat'}
            ],
            publishedAt: new Date('2024-02-10 17:20:00')
        }
    ]


    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    {posts.map((post, index) => {
                        return (
                            <Post
                                key={index}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}

                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}

export default App

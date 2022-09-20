import './global.css';

import styles from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/MariaIsabel68.png',
      name: 'Maria',
      role: 'Developer @ Grupo SOMA'
    },
   content: [
    { type: 'paragraph', content: 'Fala galera!', },
    { type: 'paragraph', content: 'Testando por aqui', },
    { type: 'link', content: 'jane.design/doctorcare', },
    ],
    publishedAt: new Date('2022-09-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Diego',
      role: 'Developer @ Rocketseat'
     },
    content: [
    { type: 'paragraph', content: 'Fala galera!', },
    { type: 'paragraph', content: 'Testando por aqui', },
    { type: 'link', content: 'jane.design/doctorcare', },
    ],
    publishedAt: new Date('2022-09-10 20:00:00'),
  }
]

function App() {
  
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
        })}
        </main>
      </div>
    </div>
  )
}

export default App

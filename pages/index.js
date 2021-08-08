import Card from '../components/Card'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Services from '../components/Services'
import { data } from '../data/dataMain'
import styles from '../styles/Card.module.css'

export default function Home() {
  return (
    <Layout>
      <Main/>
      <div className={styles.container}>
        {data.map(item => (
          <Card key={item.id} {...item}/>
        ))}
      </div>
      <Services/>
    </Layout>
  )
}

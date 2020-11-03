import { NextPage } from 'next'
import Layout from '../components/Layout'

const Index: NextPage = () => {
  return (
    <Layout title="Index">
      <div className="page-container">
        <h1>Hello World</h1>
      </div>
    </Layout>
  )
}

export default Index

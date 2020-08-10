import Layout from '../../components/layout'
import { getAllPostIds } from '../../lib/posts'

const Post = () => {
  return <Layout>...</Layout>
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export default Post

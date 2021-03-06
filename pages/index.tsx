import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'
import styled from 'styled-components'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

const Heading = styled.section`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  margin: 0 0 1.25rem;
`

const Main = ({
  allPostsData,
}: {
  allPostsData: {
    id: string
    date: string
    title: string
  }[]
}) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Heading>Blog</Heading>
      <List>
        {allPostsData.map(({ id, date, title }) => (
          <ListItem key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <Date dateString={date} />
          </ListItem>
        ))}
      </List>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

export default Main

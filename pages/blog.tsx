import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Header from "../components/header";
import Blog from "../components/blog";

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Independence DEV - Blog</title>
        </Head>
        <Container>
          <Header />
          <Blog posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

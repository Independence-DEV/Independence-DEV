import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Header from "../components/header";
import Companies from "../components/companies";
import Technologies from "../components/technologies";
import Blog from "../components/blog";

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts.slice(0,3)
  return (
    <>
      <Layout>
        <Head>
          <title>Independence DEV - Deviens Développeur Web3</title>
        </Head>
        <Container>
          <Header />
            <HeroPost/>
          <Companies />
          <Technologies />
          <Blog posts={morePosts} />
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

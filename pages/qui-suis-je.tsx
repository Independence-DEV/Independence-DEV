import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Header from "../components/header";
import Blog from "../components/blog";
import AboutMe from "../components/about-me";

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts
  return (
      <>
        <Layout>
          <Head>
            <title>{CMS_NAME} - Qui suis-je ?</title>
          </Head>
          <Container>
            <Header />
            <AboutMe/>
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
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

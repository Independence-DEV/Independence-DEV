import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Header from "../components/header";
import AboutMe from "../components/about-me";

export default function Index() {
  return (
      <>
        <Layout>
          <Head>
            <title>Independence DEV - Qui suis-je ?</title>
          </Head>
          <Container>
            <Header />
            <AboutMe/>
          </Container>
        </Layout>
      </>
  )
}
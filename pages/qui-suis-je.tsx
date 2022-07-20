import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Header from "../components/header";
import AboutMe from "../components/about-me";

export default function Index() {
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
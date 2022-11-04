import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getArticleBySlug, getAllArticles } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import Formation from "../../components/formation";
import ArticleHeader from "../../components/article-header";
import Iframe from "react-iframe";

type Props = {
  post: PostType
}

export default function Post({ post }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <ArticleHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                youtube={post.youtube}
                excerpt={post.excerpt}
            />
            <div className="bg-gray-50 dark:bg-gray-800">
              <div className="max-w-screen-xl sm:text-xl mx-auto py-5">
            <article className="prose dark:prose-invert max-w-screen-xl">
              <Head>
                <title>
                  {post.title}
                </title>
                <meta property="og:image" content={post.coverImage} />
              </Head>
              <Iframe url={post.youtube}
                      width="640px"
                      height="320px"
                      id=""
                      className=""
                      display="block"
                      position="relative"/>
              <PostBody content={post.content} />
            </article>
              </div>
            </div>
            <Formation />
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getArticleBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'excerpt',
    'youtube',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllArticles(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

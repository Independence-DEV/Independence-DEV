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
import LastArticles from "../components/last-articles";
import HeroContent from '../components/hero-content';

type Props = {
    allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
    const morePosts = allPosts.slice(0,3)
    return (
        <>
                <Head>
                    <title>Un cadeau pour toi 🎁</title>
                </Head>
                    <main className='relative h-screen w-screen'>
                        <img
                            src="/assets/background_idev.png"
                            alt='Independence DEV Background'
                            className='absolute inset-0 w-full h-full object-cover opacity-10'
                        />
                        <HeroContent />
                    </main>
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

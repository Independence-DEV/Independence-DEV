import Link from 'next/link'
import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import DateFormatter from "./date-formatter";

type Props = {
    posts: Post[]
}

const Blog = ({ posts }: Props) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Tous les articles</h2>
                <div className="flex flex-wrap -m-4">
                    {posts.map((post) => (
                    <div key={post.slug} className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                                 src={post.coverImage} alt="blog" />
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-white mb-3">{post.title}</h1>
                                    <p className="leading-relaxed mb-3 font-light text-gray-500 dark:text-gray-400">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link as={`/blog/${post.slug}`} href="/blog/[slug]" className="text-blue-700 hover:text-blue-800 inline-flex items-center md:mb-2 lg:mb-0">
                                            Lire l'article
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                                 strokeWidth="2" fill="none" strokeLinecap="round"
                                                 strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                        <span
                                            className="text-gray-500 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 448 512"><path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"/></svg>
                                            <DateFormatter dateString={post.date} />
                                        </span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog

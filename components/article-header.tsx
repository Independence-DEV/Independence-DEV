import DateFormatter from './date-formatter'

type Props = {
  title: string
  coverImage: string
  date: string
  youtube: string
  excerpt: string
}

const ArticleHeader = ({ title, coverImage, date, youtube, excerpt }: Props) => {
  return (
    <>
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container max-w-screen-xl px-4 py-20 mx-auto flex px-5 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        {title}
                    </h1>
                    <p className="mb-2 leading-relaxed">
                        {excerpt}
                    </p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={coverImage} />
                </div>
            </div>
        </section>
    </>
  )
}

export default ArticleHeader

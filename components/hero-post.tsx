const HeroPost = () => {
  return (
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Deviens Développeur Web3</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Je m'appelle Geoffrey, je suis développeur Web depuis plus de 6 ans et ai basculé à 100% sur le dev Web3 depuis 1 an.<br/>
              La période actuelle que connait l'univers de la crypto (Bear market) est le parfait moment pour monter en compétences avant le prochain Bull Market ne louper aucune opportunité.<br/>
              Rendez-vous de l'autre coté.🚀
            </p>
            <a href="https://formations.independence-dev.com/"
               className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Commence dès maintenant
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/assets/idev_blockchain.png" alt="idev_blockchain" />
          </div>
        </div>
      </section>
  )
}

export default HeroPost

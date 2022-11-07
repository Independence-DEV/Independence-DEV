import Link from 'next/link'

const Formation = () => {
  return (
      <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto max-w-screen-xl px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
              <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                  <h2 className="text-xs text-blue-400 tracking-widest font-medium title-font mb-1">
                      Deviens Développeur Web3
                  </h2>
                  <h1 className="md:text-3xl text-2xl font-medium title-font text-white">
                      Commence dès maintenant à te former !
                  </h1>
              </div>
              <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                  <a href="https://formations.independence-dev.com/" rel="noreferrer">
                  <button
                      className="group bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none dark:hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6"
                           viewBox="0 0 640 512">
                          <path
                              d="M144 48C144 21.49 165.5 0 192 0C218.5 0 240 21.49 240 48C240 74.51 218.5 96 192 96C165.5 96 144 74.51 144 48zM152 512C134.3 512 120 497.7 120 480V256.9L91.43 304.5C82.33 319.6 62.67 324.5 47.52 315.4C32.37 306.3 27.47 286.7 36.58 271.5L94.85 174.6C112.2 145.7 143.4 128 177.1 128H320V48C320 21.49 341.5 .0003 368 .0003H592C618.5 .0003 640 21.49 640 48V272C640 298.5 618.5 320 592 320H368C341.5 320 320 298.5 320 272V224H384V256H576V64H384V128H400C417.7 128 432 142.3 432 160C432 177.7 417.7 192 400 192H264V480C264 497.7 249.7 512 232 512C214.3 512 200 497.7 200 480V352H184V480C184 497.7 169.7 512 152 512L152 512z"></path>
                      </svg>
                      <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-500 mb-1 dark:group-hover:text-white">Obtiens les</span>
          <span className="title-font font-medium dark:group-hover:text-white">Formations</span>
        </span>
                  </button>
                  </a>
                  <a href="https://www.youtube.com/c/IndependenceDEV?sub_confirmation=1" rel="noreferrer">
                  <button
                      className="group bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none dark:hover:text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6"
                           viewBox="0 0 576 512">
                          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                      </svg>
                      <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-500 mb-1 dark:group-hover:text-white">Vidéos gratuites</span>
          <span className="title-font font-medium dark:group-hover:text-white">YouTube</span>
        </span>
                  </button>
                  </a>
              </div>
          </div>
      </section>
  )
}

export default Formation

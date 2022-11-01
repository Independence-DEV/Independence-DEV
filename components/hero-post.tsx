import React, { useRef } from 'react';
import { Tooltip } from "flowbite-react";

const HeroPost = () => {
  const [subscribeMessage, setSubscribeMessage] = React.useState("Reçois ton cadeau");
  const [subscribeSuccess, setSubscribeSuccess] = React.useState(false);
  const [subscribeErrorMessage, setSubscribeErrorMessage] = React.useState("");
  const [subscribeError, setSubscribeError] = React.useState(false);
  const inputRefEmail = useRef(null);
  const inputRefName = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRefEmail.current.value,
        name: inputRefName.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    if(!res.ok) {
      const data = await res.json();
      setSubscribeError(true);
      setSubscribeSuccess(false);
      setSubscribeErrorMessage(data.error);
    } else {
      setSubscribeSuccess(true);
      setSubscribeError(false);
      setSubscribeMessage("Cadeau envoyé :)");
    }
  };
  return (
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Deviens Développeur Web3</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed dark:text-gray-400 leading-relaxed">
              Je m'appelle Geoffrey, je suis développeur Web depuis plus de 6 ans et ai basculé à 100% sur le dev Web3 depuis 1 an.<br/>
              La période actuelle que connait l'univers de la crypto (Bear Market) est le parfait moment pour monter en compétences avant le prochain Bull Market pour ne louper aucune opportunité.<br/>
              Rendez-vous de l'autre coté 🚀
            </p>
            <h2 className="max-w-xl mb-4 text-xl font-extrabold leading-none md:text-2xl xl:text-3xl dark:text-white">Le guide ultime du Web3 ✨</h2>
            <form onSubmit={subscribeUser} id="revue-form"
                  name="revue-form">
              <div className="flex flex-wrap sm:flex-nowrap items-end mb-3">
                <div className="relative w-full mb-3 mr-3">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 448 512"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                    </svg>
                  </div>
                  <input
                      className={
                        subscribeError ? "revue-form-field bg-gray-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            : subscribeSuccess ? "revue-form-field bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                : "revue-form-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      }
                      placeholder="Ton nom..." type="text" name="member[name]" id="member_name" ref={inputRefName}/>
                </div>
                <div className="relative w-full mb-3 mr-3">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                      className={
                          subscribeError ? "revue-form-field bg-gray-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          : subscribeSuccess ? "revue-form-field bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          : "revue-form-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      }
                      placeholder="Ton adresse e-mail..." type="email" name="member[email]" id="member_email" ref={inputRefEmail}/>
                </div>
                <button type="submit"
                        disabled={subscribeSuccess}
                      className={ subscribeSuccess ? "whitespace-nowrap inline-flex items-center py-2.5 px-3 mb-3 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" : "whitespace-nowrap inline-flex items-center py-2.5 px-3 mb-3 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" } >
                  {subscribeMessage}
                  <svg className="ml-1 w-5 h-5" fill="currentColor"
                       viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 101L294.8 38.97C309.9 14.73 336.5 0 365.1 0H368C412.2 0 448 35.82 448 80C448 98.01 442 114.6 432 128H464C490.5 128 512 149.5 512 176V240C512 260.9 498.6 278.7 480 285.3V448C480 483.3 451.3 512 416 512H96C60.65 512 32 483.3 32 448V285.3C13.36 278.7 0 260.9 0 240V176C0 149.5 21.49 128 48 128H79.99C69.95 114.6 64 98.01 64 80C64 35.82 99.82 0 144 0H146.9C175.5 0 202.1 14.73 217.2 38.97L256 101zM365.1 32C347.5 32 331.2 41.04 321.9 55.93L276.9 128H368C394.5 128 416 106.5 416 80C416 53.49 394.5 32 368 32H365.1zM235.1 128L190.1 55.93C180.8 41.04 164.5 32 146.9 32H144C117.5 32 96 53.49 96 80C96 106.5 117.5 128 144 128H235.1zM48 160C39.16 160 32 167.2 32 176V240C32 248.8 39.16 256 48 256H240V160H48zM272 256H464C472.8 256 480 248.8 480 240V176C480 167.2 472.8 160 464 160H272V256zM240 288H64V448C64 465.7 78.33 480 96 480H240V288zM272 480H416C433.7 480 448 465.7 448 448V288H272V480z"></path>
                  </svg>
                </button>
              </div>
              <div className="text-sm font-medium revue-form-footer dark:text-gray-300">
                Et une petite surprise en plus pour toi :) 🎁
              </div>

            </form>

            <path />
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/assets/idev_blockchain.png" alt="idev_blockchain" />
          </div>
        </div>
      </section>
  )
}

export default HeroPost

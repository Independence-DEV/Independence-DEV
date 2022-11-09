import React, { useState } from 'react'
import Subscribe from './subscribe'

function HeroContent() {
    const [subscribed, setSubscribed] = useState(false)
    return (
        <div className='absolute inset-0 flex justify-center items-center'>
            <div className='w-full max-w-md backdrop-filter backdrop-blur-md backdrop-grayscale backdrop-brightness-50 sm:rounded-2xl text-white py-12 px-4 sm:px-8'>
                {subscribed ? (
                    <h1 className='font-extrabold text-white text-center text-3xl sm:text-4xl md:text-5xl md:leading-snug'>
                        You have subscribed!
                    </h1>
                ) : (
                    <div>
                        <h1 className='text-center text-3xl sm:text-4xl font-extrabold sm:leading-[3rem]'>
                            Développeur Web3{' '}<br/>
                            <span className='text-yellow-400'>Le futur eldorado 💸</span>
                        </h1>
                        <p className='mt-4 text-lg sm:text-xl'>
                            La période actuelle que connait l'univers de la crypto (Bear Market) est le <span className='text-yellow-400'>parfait moment</span> pour monter en compétences avant le prochain Bull Market pour ne louper aucune <span className='text-yellow-400'>opportunité</span>.
                            <br/>
                            Je t'offre le guide ultime du Web3. <span className='text-yellow-400'>Tout ce qu'il faut savoir</span> même sans expérience dans le secteur.
                        </p>
                        <Subscribe />
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeroContent
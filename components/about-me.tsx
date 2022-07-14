import Link from 'next/link'

const AboutMe = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Les technologies que tu vas apprendre</h2>
                <div
                    className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                    <a className="flex justify-center items-center">
                        <img width="115" src="/assets/ethereum.svg" alt="ethereum" />
                    </a>
                    <a className="flex justify-center items-center">
                        <img width="115" src="/assets/solidity.svg" alt="solidity" />
                    </a>
                    <a className="flex justify-center items-center">
                        <img width="115" src="/assets/truffle.svg" alt="truffle" />
                    </a>
                    <a className="flex justify-center items-center">
                        <img width="115" src="/assets/hardhat.svg" alt="hardhat" />
                    </a>
                    <a className="flex justify-center items-center">
                        <img width="115" src="/assets/web3js.svg" alt="web3js" />
                    </a>
                    <a className="flex justify-center items-center">
                        <img width="115" src="/assets/ethersjs.svg" alt="ethersjs" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AboutMe

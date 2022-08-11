import Link from 'next/link'

const Technologies = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                        Ce que propose Independence DEV
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Tout ce que vous avez besoin pour apprendre rapidement le développement Web3. Monter en compétences grâce à nos formations, échanger avec la communauté, commencer à construire sur la Blockchain.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div
                            className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor"
                                 viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"></path>
                            </svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Communauté</h3>
                        <p className="text-gray-500 dark:text-gray-400">Vous aurez accès à un Discord privé, réservez aux apprenants et aux instructeurs. Obtiens de l'aide d'autres développeurs si besoin.</p>
                    </div>
                    <div>
                        <div
                            className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                            </svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Formations</h3>
                        <p className="text-gray-500 dark:text-gray-400">Plusieurs formations sont/seront disponibles en fonction de tes besoins. Les formations sont mise à jour pour suivre les évolutions du Web3.</p>
                    </div>
                    <div>
                        <div
                            className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor"
                                 viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M287.1 0C305.7 0 320 14.33 320 32V160C320 177.7 305.7 192 287.1 192C270.3 192 255.1 177.7 255.1 160V109.3L54.63 310.6C42.13 323.1 21.87 323.1 9.372 310.6C-3.124 298.1-3.124 277.9 9.372 265.4L210.7 64H159.1C142.3 64 127.1 49.67 127.1 32C127.1 14.33 142.3 0 159.1 0H287.1zM576 80C576 106.5 554.5 128 528 128C501.5 128 480 106.5 480 80C480 53.49 501.5 32 528 32C554.5 32 576 53.49 576 80zM448 208C448 234.5 426.5 256 400 256C373.5 256 352 234.5 352 208C352 181.5 373.5 160 400 160C426.5 160 448 181.5 448 208zM352 336C352 309.5 373.5 288 400 288C426.5 288 448 309.5 448 336C448 362.5 426.5 384 400 384C373.5 384 352 362.5 352 336zM448 464C448 490.5 426.5 512 400 512C373.5 512 352 490.5 352 464C352 437.5 373.5 416 400 416C426.5 416 448 437.5 448 464zM576 464C576 490.5 554.5 512 528 512C501.5 512 480 490.5 480 464C480 437.5 501.5 416 528 416C554.5 416 576 437.5 576 464zM223.1 336C223.1 309.5 245.5 288 271.1 288C298.5 288 320 309.5 320 336C320 362.5 298.5 384 271.1 384C245.5 384 223.1 362.5 223.1 336zM320 464C320 490.5 298.5 512 271.1 512C245.5 512 223.1 490.5 223.1 464C223.1 437.5 245.5 416 271.1 416C298.5 416 320 437.5 320 464zM95.1 464C95.1 437.5 117.5 416 143.1 416C170.5 416 191.1 437.5 191.1 464C191.1 490.5 170.5 512 143.1 512C117.5 512 95.1 490.5 95.1 464zM576 336C576 362.5 554.5 384 528 384C501.5 384 480 362.5 480 336C480 309.5 501.5 288 528 288C554.5 288 576 309.5 576 336zM480 208C480 181.5 501.5 160 528 160C554.5 160 576 181.5 576 208C576 234.5 554.5 256 528 256C501.5 256 480 234.5 480 208z"></path>
                            </svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Évolutif</h3>
                        <p className="text-gray-500 dark:text-gray-400">Le Web3 évolue très vite ! Pour être à jour sur les nouvelles technologies, de nouveaux contenus seront en ligne en permanence.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies

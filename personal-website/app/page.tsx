import Image from 'next/image'

export default function Home() {
  return (
    <main>

      <nav className="sticky top-0 z-20 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="px-36 mx-auto">
          <div className="flex items-center justify-between h-16">
            <a className="font-bold text-2xl" href="#">Håkon Liverud</a>
            <div className="flex space-x-4 text-gray-200">
              <a href="#">About</a>
              <a href="#">Experience</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className='grid lg:grid-cols-2 px-24 py-48 -my-16'>
        <div className="flex flex-col items-left justify-between px-12 ">
          <div className="relative flex py-6 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
            <h1 className="relative z-10 text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br text-white">Håkon Liverud</h1>
          </div>
          <div className="relative flex py-6 place-items-center">
            <h1 className="relative z-10 text-4xl font-bold text-center text-transparent text-gray-400">Electrical Engineering Student</h1>
          </div>
          <div className="relative flex py-6 place-items-center">
            <p className="relative z-10 text-xl text-transparent text-gray-400">
              My main area of expertise is electronics, though I have broad experience in many technical fields like programming, FPGA development, and CAD. After working as an embedded engineer and graphic designer, I am creative and an excellent problem solver. At Revolve NTNU, I was told I was a team-oriented and empathic leader who always shared my knowledge. I am curious and always willing to learn.          </p>
          </div>
        </div>

        <div className="flex flex-col items-left justify-between px-12">
        </div>
      </div>

      <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className="relative flex place-items-center">
          <h1 className="relative z-10 text-6xl font-bold text-center text-transparent text-white">Experience</h1>
        </div>
        <div className="relative flex place-items-center">
          <h1 className="relative z-10 text-4xl font-bold text-center text-transparent text-gray-200">Education</h1>
        </div>
        <div className="mb-32 grid text-center lg:mb-0 lg:text-left">
          <a
            href="https://www.ntnu.no/studier/mtelsys"
            className="group grid lg:grid-cols-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h2 className={`mb-3 text-2xl font-semibold max-w-[30ch]`}>
                M.Sc. in Electronics Systems Design and Innovation, 3rd year{' '}
              </h2>
              <p className={`m-0 max-w-[30ch] text-md opacity-50`}>
                NTNU Trondheim
              </p>
              <p className={`m-0 max-w-[30ch] text-md opacity-50`}>
                Aug 2020 - Present
              </p>
            </div>
            <div className='my-auto grid grid-cols-10'>
              <ul className='list-disc m-0 text-md col-span-9'>
                <li>
                  Circuit design and analysis, digital and analog
                </li>
                <li>
                  Programming in C++ and C
                </li>
                <li>
                  Group projects, among others a project where we built a toll system using RFID where I operated as group leader
                </li>
              </ul>
              <span className="my-auto text-4xl font-semibold inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
              </span>
            </div>
          </a>
        </div>
      </div> 

      <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className="relative flex place-items-center">
          <h1 className="relative z-10 text-6xl font-bold text-center text-transparent text-white">Projects</h1>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore the Next.js 13 playground.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore the Next.js 13 playground.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </div> 

      <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className="relative flex place-items-center">
          <h1 className="relative z-10 text-6xl font-bold text-center text-transparent text-white">Contact</h1>
        </div>
      </div> 

    </main>
  )
}

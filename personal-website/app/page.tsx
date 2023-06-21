import Image from 'next/image'
import haakon from '../public/Haakon.jpg'

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

      <div className='grid lg:grid-cols-6 px-24 py-48 -my-16'>
        <div className="flex flex-col items-left col-span-4 justify-between px-12 ">
          <div className="relative flex py-6 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
            <h1 className="relative z-10 text-6xl font-bold text-center bg-clip-text text-white">Håkon Liverud</h1>
          </div>
          <div className="relative flex py-6 place-items-center">
            <h1 className="relative z-10 text-4xl font-bold text-center opacity-75">Electrical Engineering Student</h1>
          </div>
          <div className='relative col-span-1 w-full flex items-center'>
            <div className='h-3  w-36 bg-amber-100'></div>
          </div>
          <div className="relative flex py-6 place-items-center">
            <p className="relative z-10 text-xl opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      <div className="max-h-md flex flex-col col-span-2 justify-between px-12 relative">
        <div className="px-3 py-3 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl blur opacity-25"></div>
          <Image
            className="rounded-3xl relative"
            src={haakon}
            alt="Håkon Liverud"
            width={1000}
            height={1000}
          ></Image>
        </div>
      </div>
    </div>

      <div className='flex min-h-screen flex-col items-center p-24'>
        <div className="relative flex place-items-center py-6">
          <h1 className="relative z-10 text-6xl font-bold text-center text-white">Experience</h1>
        </div>
        <div className="relative flex place-items-center py-6">
          <h1 className="relative z-10 text-4xl font-bold text-center text-gray-200">Education</h1>
        </div>

        <div className="mb-32 grid grid-cols-10 text-center lg:mb-0 lg:text-left">
          <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
            <div className='h-full  w-1 bg-amber-200 rounded-t-sm'></div>
            <div className='absolute w-5 h-5 rounded-full bg-amber-200 z-10'></div>
          </div>

          <div className='group col-span-9 relative my-6'>

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

            <a
              href="https://www.ntnu.no/studier/mtelsys"
              className="relative group grid lg:grid-cols-2 rounded-lg border border-transparent px-5 py-4 transition-colors bg-black"
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

        <div className="mb-32 grid grid-cols-10 text-center lg:mb-0 lg:text-left ">
          <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
            <div className='h-full w-1 bg-amber-200 rounded-b-sm'></div>
            <div className='absolute w-5 h-5 rounded-full bg-amber-200 z-10'></div>
          </div>

          <div className='group col-span-9 relative my-6'>

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

            <a
              href="https://www.uio.no/studier/program/inf-design/index.html"
              className="relative group grid lg:grid-cols-2 rounded-lg border border-transparent px-5 py-4 transition-colors bg-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <div>
                <h2 className={`mb-3 text-2xl font-semibold max-w-[30ch]`}>
                  B.Sc. in Informatics: Design, Use and Interaction{' '}
                </h2>
                <p className={`m-0 max-w-[30ch] text-md opacity-50`}>
                  UiO Oslo
                </p>
                <p className={`m-0 max-w-[30ch] text-md opacity-50`}>
                  Aug 2018 - Jan 2019,
                </p>
                <p className={`m-0 max-w-[30ch] text-md opacity-50`}>
                  Jan 2020 - Jun 2020
                </p>
              </div>
              <div className='my-auto grid grid-cols-10'>
                <ul className='list-disc m-0 text-md col-span-9'>
                  <li>
                    Programming in Python and Java
                  </li>
                  <li>
                    Entrepreneurship - developed image recognition app in Kotlin in a group project which learned allergies using a custom algorithm
                  </li>
                  <li>
                    Interaction design processes, designed among others USB fingerprint reader
                  </li>
                </ul>
                <span className="my-auto text-4xl font-semibold inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="relative flex place-items-center py-6">
          <h1 className="relative z-10 text-4xl font-bold text-center text-gray-200">Work Experience</h1>
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

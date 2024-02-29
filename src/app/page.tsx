import {
  Crown,
  Envelope,
  GithubLogo,
  GraduationCap,
  LinkedinLogo,
  WhatsappLogo
} from '@phosphor-icons/react/dist/ssr'
import NightBackground from './components/night-backgroud'
import PictureCard from './components/picture-card'

export default function Home () {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <NightBackground />

      <div className='grid grid-cols-1 z-10'>
        <div className='flex'>
          <div className='xl:flex-auto xl:w-full w-8 min-w-8 h-8 basis-8 border-b border-border'></div>
          <div className='grid area-top w-full'>
            <div className='logo border-border border' />
            <div className='logo-space border-border flex border' />
            <div className='options border border-border' />
          </div>
          <div className='xl:flex-auto xl:w-full w-8 min-w-8 h-8 basis-8 border-b border-border'></div>
        </div>

        <div className='grid area-one-flow md:area-slim xl:area-wide border-collapse px-8 xl:max-w-[1280px] gap-0'>
          <div className='z-20 logo border-border border overflow-visible font-poppins font-bold text-7xl p-8 text-yellow-50 flex justify-start text-center items-center text-nowrap'>
            Amir Andrade
          </div>
          <div className='logo-space border-border xl:hidden flex border'></div>
          <div className='options p-6 gap-6 flex-col justify-between items-end bg-gradient-to-br from-border via-transparent to-transparent border border-border text-yellow-50 '>
            <span className='flex gap-4'>
              <a className='underline text-lighter-text underline-offset-[6px]'>
                English
              </a>
              <a className='text-light-text underline-offset-[6px]'>
                Portuguese
              </a>
            </span>
            <div className='flex-col gap-4 items-end'>
              <h3 className='font-poppins font-bold text-base'>My socials</h3>
              <span className='flex gap-3'>
                <GithubLogo color='var(--light-text)' size={32} />
                <LinkedinLogo color='var(--light-text)' size={32} />
                <Envelope color='var(--light-text)' size={32} />
                <WhatsappLogo color='var(--light-text)' size={32} />
              </span>
            </div>
          </div>

          <div className='about-me flex-col justify-between border border-border p-6'>
            <div className='flex-col gap-4'>
              <h2 className='font-poppins font-bold text-4xl'>About me</h2>
              <p className='text-light-text font-Inter text-base'>
                Hello World! I am a <strong>Full stack developer</strong>{' '}
                focusing in Mobile development. I am also gratuated in{' '}
                <strong>Computer Science</strong>.
              </p>
              <p className='text-light-text font-Inter text-base'>
                I am inspired to create new applications and test new
                tecnologies.
              </p>
            </div>

            <div className='flex-col gap-4'>
              <h3 className='font-poppins font-bold text-xl'>
                Curriculum Vitae
              </h3>
              <button className='flex gap-2'>Baixar</button>
            </div>
          </div>

          <div className='flex-col gap-4 items-start content p-6 border border-border text-yellow-50 '>
            <div className='flex text-primary font-poppins text-base font-bold gap-2 justify-center items-center'>
              <Crown size={20} />
              Highlight
            </div>

            <div className='bg-border rounded-lg size-full'></div>
          </div>
          <div className='picture p-6 border border-border text-yellow-50 '>
            <PictureCard />
          </div>
          <div className='projects flex-col p-6 gap-6 items-start border-border border-l border-r border-b'>
            <div className='flex text-lighter-text font-poppins text-base font-bold gap-2 justify-center items-center'>
              <GraduationCap size={20} />
              Recent projects
            </div>
          </div>
          <div className='phrase flex items-center justify-center border-border border-l border-r border-b'>
            一、努力の精神を養うこと
          </div>
        </div>

        <div className='flex max-w-[1280px]'>
          <div className='w-8 h-8 border-t border-border'></div>
          <div className='w-[405px] h-8 border-border border-l border-r border-t'></div>
          <div className='w-[405px] h-8 border-border border-r border-t'></div>
          <div className='w-[405px] h-8 border-border border-r border-t'></div>
          <div className='w-8 h-8 border-t border-border'></div>
        </div>
      </div>
    </main>
  )
}

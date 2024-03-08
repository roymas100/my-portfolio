import {
  Crown,
  Envelope,
  GithubLogo,
  GraduationCap,
  LinkedinLogo,
  Download
} from '@phosphor-icons/react/dist/ssr'
import NightBackground from '../components/night-backgroud'
import PictureCard from '../components/picture-card/picture-card'
import ProjectCard from '../components/project-card/project-card'
import { Dictionary, getDictionary } from './dictionary/dictionaries'

export default async function Home ({
  params: { lang }
}: {
  params: { lang: keyof Dictionary }
}) {
  const t = await getDictionary(lang)

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
              <a
                href='/en-US'
                className={`${
                  lang === 'en-US'
                    ? 'underline text-lighter-text'
                    : 'text-light-text'
                } hover:text-lighter-text transition-all underline-offset-[6px] cursor-pointer`}
              >
                English
              </a>
              <a
                href='/pt-BR'
                className={`${
                  lang === 'pt-BR'
                    ? 'underline text-lighter-text'
                    : 'text-light-text'
                } hover:text-lighter-text transition-all underline-offset-[6px] cursor-pointer`}
              >
                Português
              </a>
            </span>
            <div className='flex-col gap-4 items-end'>
              <h3 className='font-poppins font-bold text-base'>
                {t.titles.socials}
              </h3>
              <span className='flex gap-3'>
                <a
                  target='_blank'
                  href={t.socials.github}
                  className='text-light-text hover:text-lighter-text transition-colors'
                >
                  <GithubLogo size={32} />
                </a>
                <a
                  target='_blank'
                  href={t.socials.linkedin}
                  className='text-light-text hover:text-lighter-text transition-colors'
                >
                  <LinkedinLogo size={32} />
                </a>
                <a
                  target='_blank'
                  href={t.socials.email}
                  className='text-light-text hover:text-lighter-text transition-colors'
                >
                  <Envelope size={32} />
                </a>
              </span>
            </div>
          </div>

          <div className='about-me flex-col justify-between border border-border p-6'>
            <div className='flex-col gap-4'>
              <h2 className='font-poppins font-bold text-4xl'>
                {t.titles.about_me}
              </h2>
              <p className='text-light-text font-Inter text-base'>
                {t.about_me.part_1}
                <strong>{t.about_me.fullstack}</strong> {t.about_me.part_2}{' '}
                <strong>{t.about_me.computer_science}</strong>.
              </p>
              <p className='text-light-text font-Inter text-base'>
                {t.about_me.part_3}
              </p>
            </div>

            <div className='flex-col gap-4 items-start'>
              <h3 className='font-poppins font-bold text-xl'>
                {t.titles.curriculum}
              </h3>
              <button className='flex bg-primary gap-4 px-4 py-2 rounded-lg text-lighter-text '>
                <Download size={20} />
                {t.titles.download}
              </button>
            </div>
          </div>

          <div className='flex-col gap-4 items-start content p-6 border border-border text-yellow-50'>
            <div className='flex text-primary font-poppins text-base font-bold gap-2 justify-center items-center'>
              <Crown size={20} color='var(--lighter-text)' />
              {t.titles.highlight}
            </div>

            <div className='bg-border rounded-lg size-full'></div>
          </div>
          <div className='picture p-6 border border-border text-yellow-50 '>
            <PictureCard />
          </div>
          <div className='projects flex-col p-6 gap-6 items-start border-border border-l border-r border-b'>
            <div className='flex text-lighter-text font-poppins text-base font-bold gap-2 justify-center items-center'>
              <GraduationCap size={20} />
              {t.titles.recent_projects}
            </div>

            <div className='flex gap-6 flex-wrap teste'>
              {t.projects.map(
                ({ description, name, title, tecnologies, url }, index) => (
                  <ProjectCard
                    description={description}
                    name={name}
                    tabIndex={index + 1}
                    tecnologies={tecnologies}
                    title={title}
                    url={url}
                    key={title + index}
                    lang={lang}
                  />
                )
              )}
            </div>
          </div>
          <div className='phrase text-lighter-text flex items-center justify-center border-border border-l border-r border-b'>
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

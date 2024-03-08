'use client'

import { useState } from 'react'

interface IProjectCard {
  name: string
  tabIndex: number
  description: string
  url: string
  title: string
  tecnologies: string[]
  lang: 'pt-BR' | 'en-US'
}

export default function ProjectCard ({
  tabIndex,
  name,
  description,
  tecnologies,
  title,
  url,
  lang
}: IProjectCard) {
  const [flipped, setFlipped] = useState('')
  const base_url = '/images/' + name + '.png'

  function changeAnimation () {
    if (flipped !== 'project-card-up') {
      setFlipped('project-card-up')
    } else {
      setFlipped('project-card-down')
    }
  }

  return (
    <div
      tabIndex={tabIndex}
      onKeyDownCapture={e => e.code === 'Enter' && changeAnimation()}
      className={`project-card ${flipped} 
      transition-all
      bg-border
      hover:shadow-default has-[a:hover]:shadow-none`}
      onClick={() => changeAnimation()}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(23,20,33, 0.24) 0, rgba(23,20,33, 0.24)  100%), url(${base_url})`
        }}
        className='front-card transition-all hover:grayscale-0 hover:opacity-100 grayscale bg-cover bg-blend-screen opacity-70'
      ></div>
      <div className='back-card group: justify-between'>
        <div className='flex-col gap-4'>
          <h6 className='font-poppins text-xl font-bold text-lighter-text'>
            {title}
          </h6>
          <p>{description}</p>
          <div className='flex-col gap-2'>
            <p className=''>
              <strong>
                {' '}
                {lang === 'en-US' ? 'Technologies' : 'Tecnologias'}:
              </strong>{' '}
              {tecnologies.join(' | ')}
            </p>
          </div>
        </div>
        <div className='flex-col gap-4 items-start'>
          <a
            href={url}
            target='_blank'
            className='hover:shadow-button transition-shadow bg-background px-3 py-1 rounded-lg border border-light-text text-lighter-text hover:shadow-lighter-text'
          >
            {lang === 'en-US' ? 'More' : 'Mais'} +
          </a>
        </div>
      </div>
    </div>
  )
}

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import ProjectCard from './project-card'

describe('Project card test', () => {
  const projectData = {
    description: 'Descrição',
    name: 'Nome',
    title: 'Title',
    tecnologies: ['React'],
    url: '#',
    tabIndex: 1,
    lang: 'en-US'
  }

  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    render(
      <ProjectCard
        description={projectData.description}
        name={projectData.name}
        tabIndex={1}
        tecnologies={projectData.tecnologies}
        title={projectData.title}
        url={projectData.url}
        lang='en-US'
      />
    )

    expect(screen.getByTestId('project-card')).toBeDefined()
  })

  it('should render title correctly', () => {
    render(
      <ProjectCard
        description={projectData.description}
        name={projectData.name}
        tabIndex={1}
        tecnologies={projectData.tecnologies}
        title={projectData.title}
        url={projectData.url}
        lang='en-US'
      />
    )

    expect(screen.getByText(projectData.title)).toBeDefined()
  })
})

import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ProjectCard from './project-card'

describe('Project card test', () => {
  it('should render correctly', () => {
    render(
      <ProjectCard
        description='Descricao'
        name='nome'
        tabIndex={1}
        tecnologies={['React']}
        title='Titulo'
        url='#'
      />

      expect()
    )
  })
})

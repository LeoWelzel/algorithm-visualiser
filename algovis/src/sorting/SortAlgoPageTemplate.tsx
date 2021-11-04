import React from 'react'
import FadeIn from 'react-fade-in'
import { Body, Title } from '../common/Text'
import { SelectionPanel } from '../components/SelectionPanel'
import { getSortingAlgorithmPath, getSortingAlgorithmText, SortingAlgorithmEnum } from './algorithm'

import '../styles/Text.scss'
import { PageTextPadding } from '../PageTextPadding'

interface SortAlgoPageTemplateProps {
  selectedIndex: SortingAlgorithmEnum;
}

export const SortAlgoPageTemplate = (props: SortAlgoPageTemplateProps) => {
  const members = [];

  for (let i = 0; i < SortingAlgorithmEnum.NumAlgorithms; i++) {
    members.push({
      text: getSortingAlgorithmText(i),
      path: getSortingAlgorithmPath(i)
    })
  }

  return (
      <FadeIn>
        <PageTextPadding bottom={ false }>
          <Title>
            Sorting algorithm
          </Title>
        </PageTextPadding>
        <PageTextPadding top={ false } bottom={ false }>
          <Body>
            This is a sorting algorithm.
          </Body>
        </PageTextPadding>

      <SelectionPanel
        title={ 'Sorting' }
        members={ members }
        selectedIndex={ props.selectedIndex }
      />
      </FadeIn>
  )
}

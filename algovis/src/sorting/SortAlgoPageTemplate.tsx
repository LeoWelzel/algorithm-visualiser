import React, { useState } from 'react'
import FadeIn from 'react-fade-in'
import { Body, Subtitle, Title } from '../common/Text'
import { SelectionPanel } from '../components/SelectionPanel'
import { getSortingAlgorithmPath, getSortingAlgorithmName, SortingAlgorithmEnum, getSortingAlgorithmDescription } from './algorithm'

import { PageTextPadding } from '../PageTextPadding'
import { SortingCanvas } from './SortingCanvas'
import { Spacer } from '../common/Spacer'
import { HasSize } from '../common/hasSize'
import { Row } from '../common/Row'

import '../styles/Text.scss'
import '../styles/Hover.scss'
import '../styles/Button.scss'
import '../styles/Unselectable.scss'
import './SortAlgoPageTemplate.scss'

interface SortAlgoPageTemplateProps extends HasSize {
  selectedIndex: SortingAlgorithmEnum;
  array: number[];
}

export const SortAlgoPageTemplate = (props: SortAlgoPageTemplateProps) => {
  const members = [];

  const [running, setRunning] = useState(false);

  for (let i = 0; i < SortingAlgorithmEnum.NumAlgorithms; i++) {
    members.push({
      text: getSortingAlgorithmName(i),
      path: getSortingAlgorithmPath(i)
    })
  }

  return (
    <FadeIn>
      <PageTextPadding bottom={ false }>
        <Row className='unselectable'>
          <Title>
            { getSortingAlgorithmName(props.selectedIndex) }
          </Title>
          <Spacer/>
          <button
            className={
              'hover-cursor-pointer sorting-algo-template-button ' +
                (running ? 'button-blue' : 'button-green')
            }
            onClick={ () => setRunning(!running) }
          >
            <Subtitle padBottom={ false }>
            { running ? 'Pause' : 'Start' }
            </Subtitle>
          </button>
        </Row>
      </PageTextPadding>
      <SelectionPanel
        setRunning={ setRunning }
        title={ 'Sorting' }
        members={ members }
        selectedIndex={ props.selectedIndex }
      />
      <PageTextPadding top={ false } bottom={ false }>
        <Body>
          { getSortingAlgorithmDescription(props.selectedIndex) }
        </Body>
      </PageTextPadding>
      <PageTextPadding>
        <Row>
          <Spacer/>
          <SortingCanvas
            maxHeight={500}
            height={ props.height * 0.5 }
            width={ props.width }
            drawingWidthProportion={ 1 }
            drawingHeightProportion={ 1 }
            barProportion={ 0.8 }
            array={ props.array }
          />
          <Spacer/>
        </Row>
      </PageTextPadding>
    </FadeIn>
  )
}

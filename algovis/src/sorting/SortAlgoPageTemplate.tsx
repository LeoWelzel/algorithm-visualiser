import React, { useCallback, useEffect, useMemo, useState } from 'react'
import FadeIn from 'react-fade-in'
import { Body, Subtitle, Title } from '../common/Text'
import { SelectionPanel } from '../components/SelectionPanel'
import { getSortingAlgorithmPath, getSortingAlgorithmName, SortingAlgorithmEnum, getSortingAlgorithmDescription, getSortingAlgorithm } from './algorithmEnum'

import { PageTextPadding } from '../PageTextPadding'
import { SortingCanvas } from './SortingCanvas'
import { Spacer } from '../common/Spacer'
import { HasSize } from '../common/hasSize'
import { Row } from '../common/Row'
import { SortingType } from './sort'

import '../styles/Text.scss'
import '../styles/Hover.scss'
import '../styles/Button.scss'
import '../styles/Unselectable.scss'
import './SortAlgoPageTemplate.scss'

interface SortAlgoPageTemplateProps extends HasSize {
  algorithm: SortingAlgorithmEnum;
  array: SortingType[];
  setArray: (array: SortingType[]) => void;
  resetArray: () => void;

  running: boolean;
  setRunning: (t: boolean) => void;

  interval?: number;
}

export const SortAlgoPageTemplate = (props: SortAlgoPageTemplateProps) => {
  const members = [];

  const defaultRunning = false;
  const defaultSortingComplete = false;
  const defaultSortingStateIndex = 0;
  const defaultSortingStates: SortingType[][] = useMemo(() => [], [])

  const [sortingComplete, setSortingComplete] = useState(defaultSortingComplete);
  const [sortingStateIndex, setSortingStateIndex] = useState(defaultSortingStateIndex);
  const [sortingStates, setSortingStates] = useState<SortingType[][]>(defaultSortingStates);

  for (let i = 0; i < SortingAlgorithmEnum.NumAlgorithms; i++) {
    members.push({
      text: getSortingAlgorithmName(i),
      path: getSortingAlgorithmPath(i)
    })
  }

  const setRunning = props.setRunning;

  const resetHooks = useCallback(() => {
    setRunning(defaultRunning);
    setSortingComplete(defaultSortingComplete);
    setSortingStateIndex(defaultSortingStateIndex);
    setSortingStates(defaultSortingStates);
  }, [defaultRunning, defaultSortingComplete, defaultSortingStates, setRunning])

  const sort = useCallback(() => {
    const sortingAlgorithm = getSortingAlgorithm(props.algorithm);

    const result = sortingAlgorithm(props.array);

    setSortingStates(result);
    setSortingStateIndex(0);
    setSortingComplete(true);

    console.log({ numStates: result.length })

  }, [props.array, props.algorithm])

  const createNewArray = () => {
    props.resetArray();
    resetHooks();
  }

  /* Reset all hooks when this changes. */
  useEffect(() => {
    resetHooks();
  }, [props.algorithm, resetHooks])

  /* Start sorting animation. */
  useEffect(() => {
    const id = setInterval(() => {
      if (props.running) {
        const newIndex = sortingStateIndex + 1;

        if (newIndex < sortingStates.length) {
          setSortingStateIndex(newIndex);
          props.setArray(sortingStates[newIndex]);
        }
        else {
          props.setRunning(false);
          resetHooks();
        }
      }
    }, props.interval ?? 20)

    return () => clearInterval(id);
  }, [props, resetHooks, props.running, sortingStateIndex, sortingStates])

  /* Perform sorting compuation. */
  useEffect(() => {
    if (!sortingComplete)
      sort();
  }, [props.array, props.algorithm, sortingComplete, props.running, sort])

  return (
    <FadeIn>
      <PageTextPadding bottom={ false }>
        <Row className='unselectable'>
          <Title>
            { getSortingAlgorithmName(props.algorithm) }
          </Title>
          <Spacer/>
          <button
            className={
              'hover-cursor-pointer sorting-template-button ' +
                (props.running ? 'button-blue' : 'button-green')
            }
            onClick={ () => props.setRunning(!props.running) }
          >
            <Subtitle padBottom={ false }>
            { props.running ? 'Pause' : 'Start' }
            </Subtitle>
          </button>
          <button
            className={
              'hover-cursor-pointer sorting-template-button sorting-template-margin-left button-blue'
            }
            onClick={ () => createNewArray() }
          >
            <Subtitle padBottom={ false }>
            New
            </Subtitle>
          </button>
        </Row>
      </PageTextPadding>
      <SelectionPanel
        setRunning={ props.setRunning }
        title={ 'Sorting' }
        members={ members }
        selectedIndex={ props.algorithm }
      />
      <PageTextPadding top={ false } bottom={ false }>
        <Body>
          { getSortingAlgorithmDescription(props.algorithm) }
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
            // fillColour={ getSortingAlgorithmColour(props.algorithm) }
          />
          <Spacer/>
        </Row>
      </PageTextPadding>
    </FadeIn>
  )
}

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Column } from '../common/Column'
import { Row } from '../common/Row'
import { Spacer } from '../common/Spacer'
import { Body } from '../common/Text'
import { useComponentSize } from '../common/useComponentSize'
import { Card } from '../components/Card'
import { SortingCanvas } from './SortingCanvas'
import { getSortingAlgorithm, getSortingAlgorithmColour, getSortingAlgorithmName, getSortingAlgorithmPath, SortingAlgorithmEnum } from './algorithmEnum'
import { SortingType } from './sort'
import { useHistory } from 'react-router'

import '../styles/Text.scss'

interface DemoCardProps {
  algorithm: SortingAlgorithmEnum;
  array: SortingType[];
  interval?: number;
  resetInterval?: number;
}

export const DemoCard = (props: DemoCardProps) => {
  const history = useHistory();
  const containerRef = useRef<HTMLDivElement>(null);

  const defaultRunning = false;
  const defaultStateIndex = 0;

  const { width, height } = useComponentSize(containerRef);
  const [running, setRunning] = useState(defaultRunning);
  const [stateIndex, setStateIndex] = useState(defaultStateIndex);
  const sortingStates = getSortingAlgorithm(props.algorithm)(props.array);

  const resetHooks = useCallback(() => {
    setRunning(defaultRunning);
    setStateIndex(defaultStateIndex);
  }, [defaultRunning])

  useEffect(() => {
    const id = setInterval(() => {
      if (running) {
        const nextIndex = stateIndex + 1;

        if (nextIndex < sortingStates.length) 
          setStateIndex(nextIndex)
        else {
          setRunning(false);
          setTimeout(() => {
            resetHooks();
            setRunning(false);
          }, props.resetInterval ?? 1000)
        }
      }
    }, props.interval ?? 250)

    return () => clearInterval(id);

  }, [props.interval, props.resetInterval, running, sortingStates.length, stateIndex, resetHooks])

  return (
    <div
      ref={ containerRef }
      onMouseEnter={ () => setRunning(true) }
      onClick={ () => history.push(getSortingAlgorithmPath(props.algorithm)) }
    >
      <Card>
        <Column>
          <Body className='text-align-center'>
            { getSortingAlgorithmName(props.algorithm) }
          </Body>
          <Row>
            <Spacer/>
            <SortingCanvas
              width={ width * 0.8 }
              height={ 200 }
              drawingWidthProportion={ 0.8 }
              drawingHeightProportion={ 0.8 }
              barProportion={ 0.8 }
              array={ sortingStates[stateIndex] }
              fillColour={ getSortingAlgorithmColour(props.algorithm) }
            />
            <Spacer/>
          </Row>
        </Column>
      </Card>
    </div>
  )
}

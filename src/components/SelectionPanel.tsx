import React from 'react'
import { BasicProps } from '../common/basicProps'
import { Column } from '../common/Column'
import { Row } from '../common/Row'
import { Spacer } from '../common/Spacer'
import { Body, Subtitle } from '../common/Text'
import { Routes } from '../routes'
import { Anchor } from './Anchor'

import '../styles/Unselectable.scss'
import './SelectionPanel.scss'

export type SelectionPanelOption = { text: string, path: string }

interface OptionListProps {
  members: SelectionPanelOption[];
  selectedIndex: number;
}

interface SelectionPanelProps extends BasicProps, OptionListProps {
  title?: string;
  setRunning: (b: boolean) => void;
}

export const SelectionPanel = (props: SelectionPanelProps) => {
  const options: JSX.Element[] = [];

  let keys = 0;

  for (let i = 0; i < props.members.length; i++) {
    const value = props.members[i];

    if (i !== 0)
      options.push(<Spacer key={ keys++ }/>);

    options.push(
      <Column className='unselectable' key={ keys++ }>
        <Spacer/>
        <Body className='selection-panel-padding'>
          {
            i === props.selectedIndex ?
              <div className='selection-panel-selected'>
                { value.text }
              </div>  :
              <Anchor
                action={ () => props.setRunning(false) }
                route={ value.path }
              >
                { value.text }
              </Anchor>
          }
        </Body>
        <Spacer/>
      </Column>
    )
  }
  
  return (
    <div className={ props.className } style={ props.style }>
      <Row>
        <Column className='responsive-hide-children-small'>
          <Spacer/>
          <Subtitle className='selection-panel-padding-sides'>
            <Anchor route={ Routes.sorting }
              color={ false }>
              { props.title }
            </Anchor>
          </Subtitle>
          <Spacer/>
        </Column>
        <Spacer className='responsive-hide-small' flex={ 2 }/>
        { options }
      </Row>
    </div>
  )
}

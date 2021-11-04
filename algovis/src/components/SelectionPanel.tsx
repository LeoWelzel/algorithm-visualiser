import React from 'react'
import { BasicProps } from '../common/basicProps'
import { Column } from '../common/Column'
import { Row } from '../common/Row'
import { Spacer } from '../common/Spacer'
import { Body, Subtitle } from '../common/Text'
import { Routes } from '../routes'
import { Anchor } from './Anchor'

import './SelectionPanel.scss'

export type SelectionPanelOption = { text: string, path: string }

interface OptionListProps {
  members: SelectionPanelOption[];
  selectedIndex: number;
}

interface SelectionPanelProps extends BasicProps, OptionListProps {
  title?: string;
}

export const SelectionPanel = (props: SelectionPanelProps) => {
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
        <Spacer style={{ background: 'green' }} className='responsive-hide-small' flex={ 2 }/>
        {
          props.members.map(
            (value, i) =>
            <>
              {
                i === 0 ? null : <Spacer key={ 2 * i }/>
              }
              <Column key={ 2 * i + 1 }>
                <Spacer/>
                <Body className='selection-panel-padding'>
                  {
                    i === props.selectedIndex ?
                      <div className='selection-panel-selected'>
                        { value.text }
                      </div>  :
                      <Anchor route={ value.path }>
                        { value.text }
                      </Anchor>
                  }
                </Body>
                <Spacer/>
              </Column>
            </>
          )
        }
      </Row>
    </div>
  )
}

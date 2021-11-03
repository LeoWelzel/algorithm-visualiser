import React from 'react'
import { Column } from './common/Column'
import { Row } from './common/Row'
import { Spacer } from './common/Spacer'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

import './Page.scss'

interface PageProps {
  children?: React.ReactNode;
}

export const Page = (props: PageProps) => {
  return (
    <Column className='page-container'>
      <Header/>
      <Spacer>
        <Row>
          <Spacer/>
          <div className='page-body'>
            { props.children }
          </div>
          <Spacer/>
        </Row>
      </Spacer>
      <Footer/>
    </Column>
  )
}

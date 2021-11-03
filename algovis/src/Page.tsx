import React from 'react'
import { Column } from './common/Column'
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
        { props.children }
      </Spacer>
      <Footer/>
    </Column>
  )
}

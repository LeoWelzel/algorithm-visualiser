import React from 'react'
import FadeIn from 'react-fade-in'
import { PageTextPadding } from './PageTextPadding'

import './styles/Text.scss'

export const DefaultPage = () => {
  return (
    <PageTextPadding>
      <div className='text-align-center'>
        <FadeIn>
          <div className='text-vlarge'>404</div>
          <div>This isn't the page you were looking for.</div>
        </FadeIn>
      </div>
    </PageTextPadding>
  )
}

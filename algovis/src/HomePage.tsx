import React from 'react'
import FadeIn from 'react-fade-in';
import { HasChildren } from './common/basicProps';

import './styles/Text.scss'

const Title = (props: HasChildren) => 
  <div className='text-large3 text-pad-small-bottom'>
    { props.children }
  </div>

const Body = (props: HasChildren) => 
  <div className='text-pad-small-bottom'>
    { props.children }
  </div>

export const HomePage = () => {
  return (
    <FadeIn>
      <Title>
        About
      </Title>
      <Body>
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sit, suscipit veritatis.
        Libero dolores consequatur id, repellat
        exercitationem expedita error eligendi
        eius iusto laboriosam distinctio et dicta
        quam fuga nisi odit!
      </Body>
      <Title>
        Lorem ipsum dolor
      </Title>
      <Body>
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit.
        <br/><br/>Sit, suscipit veritatis.
        Libero dolores consequatur id, repellat
        exercitationem expedita error eligendi
        eius iusto laboriosam distinctio et dicta
        quam fuga nisi odit!
      </Body>
    </FadeIn>
  )
}

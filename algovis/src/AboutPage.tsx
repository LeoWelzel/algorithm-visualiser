import React from 'react'
import FadeIn from 'react-fade-in';
import { Body, Title } from './common/Text';

export const AboutPage = () => {
  return (
    <FadeIn>
      <Title>
        About
      </Title>
      <Body>
        We're a fast-paced startup aiming to revolutionise the world of algorithm visualisation.
        By harnessing bleeding-edge graphical tools and the latest advancements in blockchain
        technologies and machine learning frameworks, we firmly believe our innovative solutions will make a difference.
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

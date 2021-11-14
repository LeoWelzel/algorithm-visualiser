import React from 'react'
import { CardPage } from './CardPage';

export const AboutPage = () => {
  return (
    <CardPage
      title='About'
      body={
        `This project was built with intent of visually demonstrating sorting algorithms.

        These algorithms each have their uses, and visualisations can be highly informative.

        I hope you find this project educational and explanatory.`
      }
    />
  )
}

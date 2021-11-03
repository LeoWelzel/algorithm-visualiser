import React from 'react'
import { BasicProps, HasChildren } from './basicProps'

import '../styles/Text.scss'

interface TextProps extends BasicProps, HasChildren {}

const Text = (props: TextProps & { classNamePrefix: string }) => {
  const className = `${ props.classNamePrefix } text-pad-small-bottom ` + props.className ?? '';

  return (
    <div
      className={ className }
      style={ props.style }
    >
      { props.children }
    </div>
  )
}

export const Title = (props: TextProps) =>
  <Text { ...props } classNamePrefix='text-large3 text-pad-small-bottom'>
    { props.children } 
  </Text>

export const Subtitle = (props: TextProps) =>
  <Text { ...props } classNamePrefix='text-large text-pad-small-bottom'>
    { props.children }
  </Text>

export const Body = (props: TextProps) =>
  <Text { ...props } classNamePrefix='text-pad-small-bottom'>
    { props.children } 
  </Text>
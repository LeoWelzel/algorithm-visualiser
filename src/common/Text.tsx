import React from 'react'
import { BasicProps, HasChildren } from './basicProps'

import '../styles/Text.scss'

interface TextProps extends BasicProps, HasChildren {
  padBottom?: boolean;
}

const Text = (props: TextProps & { classNamePrefix: string }) => {
  const className = `${ props.classNamePrefix } ` +
    (props.padBottom ?? 'text-pad-small-bottom ') +
    props.className ?? '';

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
  <Text { ...props } classNamePrefix='text-large3'>
    { props.children } 
  </Text>

export const Subtitle = (props: TextProps) =>
  <Text { ...props } classNamePrefix='text-large'>
    { props.children }
  </Text>

export const Body = (props: TextProps) =>
  <Text { ...props } classNamePrefix=''>
    { props.children } 
  </Text>
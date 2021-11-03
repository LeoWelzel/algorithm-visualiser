import React from 'react';
import { FlexContainer, FlexContainerProps } from './FlexContainer';

export const Column = (props: FlexContainerProps) =>
  <FlexContainer
    { ...props }
    flexDirection='column'
  />

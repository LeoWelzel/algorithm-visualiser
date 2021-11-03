import React from 'react';
import { FlexContainer, FlexContainerProps } from './FlexContainer';

export const Row = (props: FlexContainerProps) =>
  <FlexContainer
    { ...props }
    flexDirection='row'
  />

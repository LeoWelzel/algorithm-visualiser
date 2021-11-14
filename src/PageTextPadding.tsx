import React from 'react'
import { BasicProps, HasChildren } from './common/basicProps'

import './App.scss';

interface PageTextPaddingProps extends BasicProps, HasChildren {
  top?: boolean;
  bottom?: boolean;
}

export const PageTextPadding = (props: PageTextPaddingProps) => {
  const top = (props.top !== false);
  const bottom = (props.bottom !== false);

  const className = (top ? 'page-body-text-padding-top ' : '') +
                    (bottom ? 'page-body-text-padding-bottom ' : '') +
                    'page-body-text-padding-sides ' + props.className ?? '';

  return (
    <div className={ className } style={ props.style }>
      { props.children }
    </div>
  )
}

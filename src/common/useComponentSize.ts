import React, { useEffect, useState } from 'react'
import { useWindowSize } from './useWindowSize';

export const useComponentSize = (ref: React.RefObject<HTMLDivElement>) => {
  const windowSize = useWindowSize();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const height = ref.current?.clientHeight;
    const width = ref.current?.clientWidth;

    if (height)
      setHeight(height);
    if (width)
      setWidth(width);
  }, [windowSize, ref])

  return { width, height };
}
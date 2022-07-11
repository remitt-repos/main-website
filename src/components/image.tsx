import React from 'react';
import { Image as Img } from 'theme-ui';

export default function Image({ src, ...rest }: any) {
  return <Img src={src} {...rest} />;
}

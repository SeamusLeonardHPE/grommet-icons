import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Checkmark = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Checkmark" {...props}>
    <path d="M21.1545 1.4656C21.4495 0.998939 22.0676 0.85929 22.5344 1.15408C23.0011 1.44898 23.1406 2.06711 22.8459 2.53396L10.8459 21.534C10.6899 21.781 10.4329 21.9469 10.1438 21.989C9.85484 22.031 9.56187 21.9448 9.34203 21.7527L1.34203 14.7527C0.926603 14.3891 0.883979 13.7572 1.2473 13.3416C1.61089 12.9263 2.24288 12.8837 2.65844 13.2469L9.77855 19.4763L21.1545 1.4656Z" fill="#555555" />
  </StyledIcon>
));

Checkmark.displayName = 'Checkmark';

export { Checkmark };

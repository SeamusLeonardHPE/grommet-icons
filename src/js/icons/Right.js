import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Right = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Right" {...props}>
    <path d="M6.29308 1.29308C6.6836 0.902552 7.31661 0.902552 7.70714 1.29308L17.7071 11.2931C18.0975 11.6836 18.0976 12.3167 17.7071 12.7071L7.70714 22.7071C7.31666 23.0976 6.68361 23.0975 6.29308 22.7071C5.90255 22.3166 5.90255 21.6836 6.29308 21.2931L15.586 12.0001L6.29308 2.70714C5.90255 2.31661 5.90255 1.6836 6.29308 1.29308Z" fill="#555555" />
  </StyledIcon>
));

Right.displayName = 'Right';

export { Right };

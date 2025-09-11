import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Down = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Down" {...props}>
    <path d="M21.2931 6.29308C21.6836 5.90255 22.3166 5.90255 22.7071 6.29308C23.0975 6.68361 23.0976 7.31666 22.7071 7.70714L12.7071 17.7071C12.5196 17.8946 12.2653 18.0001 12.0001 18.0001C11.735 18.0001 11.4806 17.8946 11.2931 17.7071L1.29308 7.70714C0.902565 7.31662 0.902575 6.6836 1.29308 6.29308C1.68361 5.90255 2.31662 5.90255 2.70715 6.29308L12.0001 15.586L21.2931 6.29308Z" fill="#555555" />
  </StyledIcon>
));

Down.displayName = 'Down';

export { Down };

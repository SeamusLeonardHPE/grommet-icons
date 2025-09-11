import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const StatusWarningStrong = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="StatusWarningStrong" {...props}>
    <path d="M9.31642 4.13051C10.422 1.9194 13.578 1.91937 14.6836 4.13051L21.4473 17.6588C22.4442 19.6534 20.9937 22.0006 18.7637 22.0006H5.23634C3.0064 22.0006 1.55583 19.6534 2.55274 17.6588L9.31642 4.13051Z" fill="#D36D00" />
  </StyledIcon>
));

StatusWarningStrong.displayName = 'StatusWarningStrong';

export { StatusWarningStrong };

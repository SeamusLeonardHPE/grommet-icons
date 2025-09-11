import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Up = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Up" {...props}>
    <path d="M11.3693 6.22497C11.7621 5.90465 12.3411 5.92722 12.7072 6.29333L22.7072 16.2933C23.0975 16.6839 23.0976 17.317 22.7072 17.7074C22.3168 18.0978 21.6837 18.0976 21.2932 17.7074L12.0002 8.41442L2.70722 17.7074C2.31678 18.0978 1.68368 18.0976 1.29316 17.7074C0.902661 17.3169 0.902712 16.6839 1.29316 16.2933L11.2932 6.29333L11.3693 6.22497Z" fill="#555555" />
  </StyledIcon>
));

Up.displayName = 'Up';

export { Up };

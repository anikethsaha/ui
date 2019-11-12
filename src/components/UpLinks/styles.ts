import styled from 'react-emotion';
import { default as MuiListItemText } from '@material-ui/core/ListItemText';

import Text from '../../muiComponents/Text';
import { fontWeight } from '../../utils/styles/sizes';

export const StyledText = styled(Text)`
  font-weight: ${fontWeight.bold};
  color: ${({ theme }) => theme.textColor};
`;

export const Spacer = styled('div')`
  flex: 1 1 auto;
  border-bottom: 1px dotted ${({ theme }) => theme.dottedLines};
  white-space: nowrap;
  height: 0.5em;
`;

export const ListItemText = styled(MuiListItemText)`
  && {
    flex: none;
    color: ${({ theme }) => theme.testColorSecondary};
    opacity: 0.6;
  }
`;

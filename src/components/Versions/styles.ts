import styled from 'react-emotion';
import { default as MuiListItemText } from '@material-ui/core/ListItemText';

import { fontWeight } from '../../utils/styles/sizes';
import Text from '../../muiComponents/Text';

export const StyledText = styled(Text)`
  font-weight: ${fontWeight.bold};
  color: ${({ theme }) => theme.textColor};
`;

export const Spacer = styled('div')`
  flex: 1 1 auto;
  border-bottom: 1px dotted ${({ theme }) => theme.dottedLines};
  white-space: nowrap;
  height: 0.5em;
  margin: 0 16px;
  color: red;
`;

export const ListItemText = styled(MuiListItemText)`
  && {
    flex: none;
    color: ${({ theme }) => theme.testColorSecondary};
    opacity: 0.6;
  }
`;

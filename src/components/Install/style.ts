import styled from 'react-emotion';

import MuiList from '../../muiComponents/List';
import { fontWeight } from '../../utils/styles/sizes';
import Text from '../../muiComponents/Text';

export const List = styled(MuiList)`
  color: ${({ theme }) => theme.textColor};
`;

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

import styled from 'react-emotion';
import ListItemText from '@material-ui/core/ListItemText';

import { fontWeight } from '../../utils/styles/sizes';
import ListItem from '../../muiComponents/ListItem';
import Text from '../../muiComponents/Text';
import MuiList from '../../muiComponents/List';

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

export const AuthorListItem = styled(ListItem)({
  '&&': {
    padding: 0,
  },
  '&&:hover': {
    backgroundColor: 'transparent',
  },
});

export const AuthorListItemText = styled(ListItemText)({
  '&&': {
    padding: '0 10px',
    margin: 0,
  },
});

export const List = styled(MuiList)`
  color: ${({ theme }) => theme.textColor};
`;

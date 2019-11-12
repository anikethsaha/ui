import styled from 'react-emotion';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';

import MuiList from '../../muiComponents/List';
import Github from '../../icons/GitHub';
import colors from '../../utils/styles/colors';
import { fontWeight } from '../../utils/styles/sizes';
import Text from '../../muiComponents/Text';
import ListItem from '../../muiComponents/ListItem';

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

export const GridRepo = styled(Grid)({
  '&&': {
    alignItems: 'center',
  },
});

export const GithubLink = styled('a')`
  && {
    color: ${({ theme }) => theme.textColor};
  }
`;

export const GithubLogo = styled(Github)({
  '&&': {
    fontSize: '40px',
    color: colors.primary,
    backgroundColor: colors.greySuperLight,
  },
});

export const RepositoryListItem = styled(ListItem)({
  '&&': {
    padding: 0,
  },
  '&&:hover': {
    backgroundColor: 'transparent',
  },
});

export const RepositoryListItemText = styled(ListItemText)({
  '&&': {
    padding: '0 10px',
    margin: 0,
  },
});

export const List = styled(MuiList)`
  color: ${({ theme }) => theme.textColor};
`;

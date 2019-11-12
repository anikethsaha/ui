import styled from 'react-emotion';
import ListItemText from '@material-ui/core/ListItemText';

import ListItem from '../../muiComponents/ListItem';
import MuiCard from '../../muiComponents/Card';

export const TitleListItem = styled(ListItem)({
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
});

export const Card = styled(MuiCard)`
  background: ${({ theme }) => theme.secondaryBgColor};
`;

export const TitleListItemText = styled(ListItemText)`
  && {
    padding-left: 0;
    padding-right: 0;
    padding-top: 8px;
    color: ${({ theme }) => theme.textColor};
  }
`;

export const PackageDescription = styled('span')`
  && {
    display: block;
    color: ${({ theme }) => theme.testColorSecondary};
  }
`;

export const PackageVersion = styled('span')`
  && {
    display: block;
    color: ${({ theme }) => theme.testColorSecondary};
  }
`;

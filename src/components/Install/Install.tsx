import React, { useContext } from 'react';

import { DetailContext } from '../../pages/Version';

import { List, StyledText } from './style';
import InstallListItem, { DependencyManager } from './InstallListItem';

const Install: React.FC = () => {
  const detailContext = useContext(DetailContext);

  const { packageMeta, packageName } = detailContext;

  if (!packageMeta || !packageName) {
    return null;
  }

  return (
    <List data-testid={'installList'} subheader={<StyledText variant={'subtitle1'}>{'Installation'}</StyledText>}>
      <InstallListItem dependencyManager={DependencyManager.NPM} packageName={packageName} />
      <InstallListItem dependencyManager={DependencyManager.YARN} packageName={packageName} />
      <InstallListItem dependencyManager={DependencyManager.PNPM} packageName={packageName} />
    </List>
  );
};

export default Install;

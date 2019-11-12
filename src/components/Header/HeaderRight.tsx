/* eslint-disable  react/jsx-max-depth */

import React, { useState, useEffect, MouseEvent, ReactElement } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { css } from 'emotion';

import Button from '../../muiComponents/Button';
import { AppProps, AppContextConsumer } from '../../App/AppContext';

import { RightSide, themeButton } from './styles';
import HeaderToolTip from './HeaderToolTip';
import HeaderMenu from './HeaderMenu';

interface Props {
  withoutSearch?: boolean;
  username?: string;
  onToggleLogin: () => void;
  onOpenRegistryInfoDialog: () => void;
  onToggleMobileNav: () => void;
  onLogout: () => void;
}

const themeButtonComponent = (): ReactElement<HTMLElement> => (
  <AppContextConsumer>
    {({ changeTheme, theme }) => (
      <FormControl>
        <Select
          className={themeButton}
          displayEmpty={true}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={e => changeTheme(e.target.value)}
          required={true}
          value={''}>
          <MenuItem disabled={true} value="">
            {theme.replace('Theme', '')}
          </MenuItem>
          <MenuItem value={'defaultTheme'}>{'Default'}</MenuItem>
          <MenuItem value={'darkTheme'}>{'Dark'}</MenuItem>
        </Select>
      </FormControl>
    )}
  </AppContextConsumer>
);

const HeaderRight: React.FC<Props> = ({
  withoutSearch = false,
  username,
  onToggleLogin,
  onLogout,
  onToggleMobileNav,
  onOpenRegistryInfoDialog,
}) => {
  const [anchorEl, setAnchorEl] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState();

  useEffect(() => {
    setIsMenuOpen(Boolean(anchorEl));
  }, [anchorEl]);

  /**
   * opens popover menu for logged in user.
   */
  const handleLoggedInMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * closes popover menu for logged in user
   */
  const handleLoggedInMenuClose = () => {
    setAnchorEl(null);
  };

  /**
   * close/open popover menu for logged in users.
   */
  const handleToggleLogin = () => {
    setAnchorEl(null);
    onToggleLogin();
  };

  return (
    <RightSide>
      {themeButtonComponent()}
      {!withoutSearch && (
        <HeaderToolTip onClick={onToggleMobileNav} title={'Search packages'} tooltipIconType={'search'} />
      )}
      <HeaderToolTip title={'Documentation'} tooltipIconType={'help'} />
      <HeaderToolTip onClick={onOpenRegistryInfoDialog} title={'Registry Information'} tooltipIconType={'info'} />
      {username ? (
        <HeaderMenu
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          onLoggedInMenu={handleLoggedInMenu}
          onLoggedInMenuClose={handleLoggedInMenuClose}
          onLogout={onLogout}
          username={username}
        />
      ) : (
        <Button color="inherit" data-testid="header--button-login" onClick={handleToggleLogin}>
          {'Login'}
        </Button>
      )}
    </RightSide>
  );
};

export default HeaderRight;

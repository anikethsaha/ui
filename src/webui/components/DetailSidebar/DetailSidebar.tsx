import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';

import ActionBar from '../ActionBar/ActionBar';
import Author from '../Author';
import Developers from '../Developers';
import Dist from '../Dist/Dist';
import Engine from '../Engines/Engines';
import Install from '../Install';
import Repository from '../Repository/Repository';


import { DetailContextConsumer } from '../../pages/version/Version';

import { TitleListItem, TitleListItemText } from './styles';

class DetailSidebar extends Component {
  render() {
    return (
      <DetailContextConsumer>
        {(context) => this.renderSideBar(context!)}
      </DetailContextConsumer>
    );
  };

  renderSideBar = ({packageName, packageMeta}) => {
    return (
      <div className={'sidebar-info'}>
        <Card>
          <CardContent>
            {this.renderTitle(packageName, packageMeta)}
            {this.renderActionBar()}
            {this.renderCopyCLI()}
            {this.renderRepository()}
            {this.renderEngine()}
            {this.renderDist()}
            {this.renderAuthor()}
            {this.renderMaintainers()}
            {this.renderContributors()}
          </CardContent>
        </Card>
      </div>
    );
  }

  renderTitle = (packageName, packageMeta) => {
      return (
        <List className='detail-info'>
          <TitleListItem alignItems='flex-start'>
            <TitleListItemText
              primary={<b>{packageName}</b>}
              secondary={packageMeta.latest.description}
            />
          </TitleListItem>
        </List>
      );
  }

  renderCopyCLI = () => {
    return <Install />;
  }

  renderMaintainers = () => {
    return <Developers type='maintainers' />;
  }

  renderContributors = () => {
    return <Developers type='contributors' />;
  }
  
  renderRepository = () => {
    return <Repository />;
  }

  renderAuthor = () => {
    return <Author />;
  }

  renderEngine = () => {
    return <Engine />;
  }

  renderDist = () => {
    return <Dist />;
  }

  renderActionBar = () => {
    return <ActionBar />;
  }
}

export default DetailSidebar;
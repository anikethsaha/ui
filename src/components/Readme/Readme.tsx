import React, { ReactElement } from 'react';

import 'github-markdown-css';
import { MarkdownBody } from './style';
import { Props } from './types';

const Readme = ({ description }): ReactElement<Props> => (
  <MarkdownBody className="markdown-body" dangerouslySetInnerHTML={{ __html: description }} />
);

export default Readme;

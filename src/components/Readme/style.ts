import styled from 'react-emotion';
export const MarkdownBody = styled('div')`
  color: ${({ theme }) => theme.textColor};
  && {
    pre {
      background-color: ${({ theme }) => theme.codeSnippetBgColor};
    }
  }
`;

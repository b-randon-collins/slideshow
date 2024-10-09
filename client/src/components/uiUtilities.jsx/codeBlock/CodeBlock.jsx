import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose your theme
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { funky } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { solarizeddark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { schoolBook } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlockComponent = ({ code }) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlockComponent;

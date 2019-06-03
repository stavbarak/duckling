import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
/* import withHighlighting from 'components/withHighlighting';
 */
import Paper from '@material-ui/core/Paper';

const NoteThumb = ({title, codeString, date}) => {
  /* const codeString = '(num) => num + 1'; */
  return (
    <Paper className="note-thumb">   
        <div className="note-header">
          <span><h6>{title}</h6></span>
          <span><h6>{`created on ${date}`}</h6></span>
        </div>
        <SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>;
    </Paper>
  );
}

export default NoteThumb;

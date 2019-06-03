import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import withHighlighting from 'components/withHighlighting';


const NoteEdit = ({codeString}) => {
    console.log('hi')
  return (
    <div className="note-thumb" contenteditable="true">    
         <SyntaxHighlighter 
         contenteditable="true"
         language='javascript' 
         style={docco}>
         {codeString}
         </SyntaxHighlighter>; 
    </div>
  );
}

export default withHighlighting(NoteEdit);

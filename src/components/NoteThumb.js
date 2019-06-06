import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
/* import withHighlighting from 'components/withHighlighting';
 */
import NoteMenu from 'components/NoteMenu';
import { Card } from 'antd';
const { Meta } = Card;

const NoteThumb = ({title, codeString, date, file, id}) => {
 
  return (
    <Card className="note-thumb" title={title} >   
        <Meta
          description={`Snipped from ${file} at ${date}`}
        />
        <SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>;

        <div className="additional">
          Quick comment:
          
        </div>
        <div className="additional">
            <textarea className="noteComment"></textarea>
        </div>
        <NoteMenu id={id}/>
    </Card>
  );
}

export default NoteThumb;

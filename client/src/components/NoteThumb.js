import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { connect } from 'react-redux';
import { deleteDataItem } from 'redux/actions';
import Tags from 'components/Tags';
import NoteThumbExtra from 'components/NoteThumbExtra';

import { Card } from 'antd';
const { Meta } = Card;


const NoteThumb = ({ title, codeString, date, file, id, children, thumbView, tags, labels }) => {  
  return (
    <Card className="note-thumb" 
      title={title}  
      extra={
        thumbView ? 
        <NoteThumbExtra id={id} labels={labels} />
          : 
        children
      }
      >   
        <Meta
          description={`Snipped from ${file} at ${date}`}
        />
        
        <SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>

      { thumbView? null : <Tags tags={tags} label={false} color={"purple"} /> }

    </Card>
  );
}


const mapStateToProps = (state) => ({
  currentItem: state.snippets.currentItem
})

const mapDispatchToProps = dispatch => ({
  deleteDataItem: (id) => dispatch(deleteDataItem(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(NoteThumb);

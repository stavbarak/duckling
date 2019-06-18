import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { connect } from 'react-redux';
import { deleteDataItem } from 'redux/actions';
import { Link } from "react-router-dom";
/* import TagsClass from 'components/TagsClass'; */
import Tags from 'components/Tags';

import { Card } from 'antd';
const { Meta } = Card;


const NoteThumb = ({ title, codeString, date, file, id, children, thumbView, tags }) => {  

  return (
    <Card className="note-thumb" 
      title={title}  
      extra={
        thumbView ? 
        <Link to={`/edit/${id}`}>More </Link> : 
        children
      }
      >   
        <Meta
          description={`Snipped from ${file} at ${date}`}
        />
        
        <SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>

      { thumbView? null : <Tags tags={tags}  /> }

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

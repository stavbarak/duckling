import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { connect } from 'react-redux';
import { deleteDataItem, saveComment } from 'redux/actions';
import { Link } from "react-router-dom";


import { Card } from 'antd';
const { Meta } = Card;


class NoteThumb extends Component {



  render(){
    const { title, codeString, date, file, id, children, thumbView } = this.props;
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
          <SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>;

      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  currentComment: state.snippets.currentComment
})

const mapDispatchToProps = dispatch => ({
  saveComment: (comment, id) => dispatch(saveComment(comment, id)),
  deleteDataItem: (id) => dispatch(deleteDataItem(id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(NoteThumb);

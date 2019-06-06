import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { connect } from 'react-redux';
import { saveQuickComment, deleteDataItem, saveComment, clearCurrentComment } from 'redux/actions';

import NoteMenu from 'components/NoteMenu';
import { Card } from 'antd';
const { Meta } = Card;


class NoteThumb extends Component {

  state = { currentCommentLocal: '' };


  addComment = () => {
    const { saveComment, id } = this.props;
    
    const { currentCommentLocal } = this.state;

    
    if (currentCommentLocal!=='') {
      
        saveComment(currentCommentLocal, id);
        /* clearCurrentComment(); */

        this.setState ({
          currentCommentLocal: '',
        })
    } 
    
  }

  deleteDataItem = () => {
    const { id, deleteDataItem } = this.props;
    deleteDataItem(id);
  }


  handleInputChange = (evt) => {
    this.setState({
      currentCommentLocal: evt.target.value
    })
  } 


  render(){
    const { title, codeString, date, file, id } = this.props;
    const { currentCommentLocal } = this.state;
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
              <textarea className="noteComment" onChange={this.handleInputChange} value={currentCommentLocal}>
              </textarea>
          </div>
          <NoteMenu id={id} onDelete={this.deleteDataItem} onSaveComment={this.addComment} />
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  currentComment: state.snippets.currentComment
})

const mapDispatchToProps = dispatch => ({
  /* saveQuickComment: (comment) => dispatch(saveQuickComment(comment)), */
  saveComment: (comment, id) => dispatch(saveComment(comment, id)),
  deleteDataItem: (id) => dispatch(deleteDataItem(id)),
  /* clearCurrentComment: () => dispatch(clearCurrentComment()) */
})


export default connect(mapStateToProps, mapDispatchToProps)(NoteThumb);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteDataItem, clearDataItem, fetchDataItem, saveComment, deleteComment } from 'redux/actions';
import { Skeleton, Icon, Button, Card } from 'antd';
import NoteComment from 'components/NoteComment';
import AddComment from 'components/AddComment';


const CommentsSection = (props) => {

  const [currentCommentLocal, setCurrentCommentLocal] = useState('');

  const handleInputChange = (evt) => {
    setCurrentCommentLocal(evt.target.value);
  } 

  const addComment = () => {
    const { saveComment, currentItem } = props;      
    if (currentCommentLocal!=='') {              
        saveComment(currentCommentLocal, currentItem.snipId);    
        setCurrentCommentLocal('');
    }   
  }  

  const deleteComment = (comments, index) => {
    const { deleteComment } = props;  
    let spliced = [...comments];
    spliced.splice(index, 1);
    deleteComment(spliced);
  }  

  const renderComments = (comments) => {
    let commentsList = comments.map((comment, i) => {
      
      return (   
          <div key={i}>
            <div className="commentContainer">
              <NoteComment comment={comment}></NoteComment>
              <span>
                  <Button size="large" type="link" className="deleteButton" onClick={()=>deleteComment(comments, i)}>
                        <Icon type="delete" />
                  </Button>
              </span>
            </div>
          </div>
      )
    });
    return commentsList;
    }


    const renderData = () => {
      const { currentItem } = props;
  
      if(!currentItem) {
        return (
          <Skeleton active />
          )
        } else {
            const { comments } = currentItem;
            return (
                <div>{renderComments(comments)}</div>
                
            )
        }
    }

    return (
      <Card className="commentsSection">
        <h3>Comments</h3>
        {renderData()}
        <h3>Leave a comment</h3>
        <AddComment onChange={handleInputChange} value={currentCommentLocal} onSubmit={addComment} />
      </Card>
    );
}


const mapStateToProps = (state) => ({
    currentItem: state.snippets.currentItem
  })
  
  const mapDispatchToProps = dispatch => ({
    deleteComment: (comment, id) => dispatch(deleteComment(comment, id)),
    saveComment: (comment, id) => dispatch(saveComment(comment, id)),
    fetchDataItem: (id) => dispatch(fetchDataItem(id)),
    deleteDataItem: (id) => dispatch(deleteDataItem(id)),
    clearDataItem: () => dispatch(clearDataItem())
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(CommentsSection);
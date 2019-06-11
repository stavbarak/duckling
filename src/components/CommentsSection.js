import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteDataItem, clearDataItem, fetchDataItem, saveComment, deleteComment } from 'redux/actions';
import { Skeleton, Icon, Button } from 'antd';
import NoteComment from 'components/NoteComment';
import AddComment from 'components/AddComment';


class CommentsSection extends Component {

    state = { currentCommentLocal: '' };

    handleInputChange = (evt) => {
        this.setState({
          currentCommentLocal: evt.target.value
        })
      } 

    addComment = () => {
        const { saveComment, currentItem } = this.props;      
        const { currentCommentLocal } = this.state;
        if (currentCommentLocal!=='') {   
                 
            saveComment(currentCommentLocal, currentItem.snipId);
        
            this.setState ({
                currentCommentLocal: '',
            })
        }   
    }  

    deleteComment = (comments, index) => {
        const { deleteComment } = this.props;  
        let spliced = [...comments];
        spliced.splice(index, 1);
        deleteComment(spliced);
    }   

    renderComments(comments) {
        let commentsList = comments.map((comment, i) => {
          
          return (   
              <div key={i}>
                <div className="commentContainer">
                  <NoteComment comment={comment}></NoteComment>
                  <span>
                      <Button size="large" type="link" className="deleteButton" onClick={()=>this.deleteComment(comments, i)}>
                            <Icon type="delete" />
                      </Button>
                  </span>
                </div>
              </div>
          )
      });
      return commentsList;
      }

      renderData() {
        const { currentItem } = this.props;
    
        if(!currentItem) {
          return (
            <Skeleton active />
          )
        } else {
            const { comments } = currentItem;
            return (
                <div>{this.renderComments(comments)}</div>
                
            )
        }
      }

      render() {
        const { currentCommentLocal } = this.state;
        return (
          <div>
            {this.renderData()}
            <div>Leave a comment</div>
            <AddComment onChange={this.handleInputChange} value={currentCommentLocal} onSubmit={this.addComment} />
          </div>
        );
      } 

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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteDataItem, clearDataItem, fetchDataItem, saveComment, deleteComment } from 'redux/actions';
import { Skeleton, Icon, Button } from 'antd';
import NoteThumb from 'components/NoteThumb';

class NoteEdit extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchDataItem } = this.props;

    fetchDataItem(id);
  }

  componentWillUnmount = () => {
    const { clearDataItem } = this.props;
    clearDataItem();
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
              <span>{comment}</span>
              <span><Button type="link" onClick={()=>this.deleteComment(comments, i)}><Icon type="delete" /></Button></span>
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
        const { title, snipId, language, comments, content, dateSnipped, file, label } = currentItem;
        return (
          <NoteThumb                       
                id={ snipId } 
                title={ title } 
                date={ dateSnipped }
                codeString ={ content }
                file= {file}
      
                >
               
            {this.renderComments(comments)}    
          </NoteThumb>  
        )
    }
  }

  render() {
    return (
      <div>{this.renderData()}</div>
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


export default connect(mapStateToProps, mapDispatchToProps)(NoteEdit);

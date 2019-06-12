import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteDataItem, clearDataItem, fetchDataItem, saveComment, deleteComment } from 'redux/actions';
import { Skeleton } from 'antd';
import NoteThumb from 'components/NoteThumb';
import NoteMenu from 'components/NoteMenu';
import CommentsSection from 'components/CommentsSection';

class NoteEdit extends Component {

  state = { currentCommentLocal: '' };


  componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchDataItem } = this.props;

    fetchDataItem(id);
  }

  componentWillUnmount = () => {
    const { clearDataItem } = this.props;
    clearDataItem();
  }

  deleteDataItem = () => {   
    const { id } = this.props.match.params;
    const { deleteDataItem, history } = this.props;
    history.push('/');
    deleteDataItem(id);   
  }


  renderData() {
    const { currentItem } = this.props;

    if(!currentItem) {
      return (
        <Skeleton active />
      )
    } else {
        const { title, snipId, content, dateSnipped, file, tags } = currentItem;
        return (
          <div>
          <NoteThumb                       
                id = { snipId } 
                title = { title } 
                date = { dateSnipped }
                codeString = { content }
                file = { file }
                tags = { tags }
                >
            <NoteMenu id={snipId} onDelete={this.deleteDataItem} />
            
          </NoteThumb>  
          
          <CommentsSection />
          </div>

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

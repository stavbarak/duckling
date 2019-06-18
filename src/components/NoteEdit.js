import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteDataItem, clearDataItem, fetchDataItem, saveComment, deleteComment } from 'redux/actions';
import { Skeleton } from 'antd';
import NoteThumb from 'components/NoteThumb';
import NoteMenu from 'components/NoteMenu';
import CommentsSection from 'components/CommentsSection';

const NoteEdit = (props) => {

  const { id } = props.match.params;
  const { fetchDataItem, clearDataItem, history } = props;

  const fetchNote = () => {
    fetchDataItem(id);
  }

  const clearNote = () => {
    clearDataItem();
  }

  useEffect(() => {
    fetchNote();
    return () => {
      clearNote();
    }
  }, []);


  const deleteDataItem = () => {
    history.push('/');
    deleteDataItem(id);
  }

  if (!props.currentItem) {
    return (
      <Skeleton active />
    )
  } else {
    const { title, snipId, content, dateSnipped, file, tags } = props.currentItem;
    return (
      <div>
        <NoteThumb
          id={snipId}
          title={title}
          date={dateSnipped}
          codeString={content}
          file={file}
          tags={tags}
        >
          <NoteMenu id={snipId} onDelete={deleteDataItem} />

        </NoteThumb>

        <CommentsSection />
      </div>

    )
  }
}

const mapStateToProps = ({ snippets: { currentItem } }) => {

  return { currentItem };
}

const mapDispatchToProps = dispatch => ({
  deleteComment: (comment, id) => dispatch(deleteComment(comment, id)),
  saveComment: (comment, id) => dispatch(saveComment(comment, id)),
  fetchDataItem: (id) => dispatch(fetchDataItem(id)),
  deleteDataItem: (id) => dispatch(deleteDataItem(id)),
  clearDataItem: () => dispatch(clearDataItem())
})


export default connect(mapStateToProps, mapDispatchToProps)(NoteEdit);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteDataItem, fetchDataItem } from 'redux/actions';
import { Skeleton } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';



class NoteEdit extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchDataItem } = this.props;

    fetchDataItem(id);
  }

  renderComments(comments) {
    let commentsList = comments.map((comment, i) => {
      return (   
          <div key={i}>
            {comment}
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
        const { title, language, comments, content, dateSnipped, file, label } = currentItem;
        return (
          <div>
            <h1>{title}</h1>
            <SyntaxHighlighter language={language} style={docco}>{content}</SyntaxHighlighter>;
            {this.renderComments(comments)}
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
  fetchDataItem: (id) => dispatch(fetchDataItem(id)),
  deleteDataItem: (id) => dispatch(deleteDataItem(id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(NoteEdit);

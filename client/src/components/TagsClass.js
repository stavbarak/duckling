import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tag, Input, Tooltip, Icon } from 'antd';
import { addTag, deleteTag } from 'redux/actions';

class Tags extends Component {

  constructor(props){
      super(props);
      this.state = {
        inputVisible: false,
        inputValue: '',
      }
  }

  handleClose = (removedTag) => {   
    const { tags, deleteTag } = this.props;
    const newTags = tags.filter(tag => tag !== removedTag);
    deleteTag(newTags);
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    const { tags, addTag } = this.props;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      addTag(inputValue);
    }

    this.setState({
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = input => (this.input = input);

  renderTags = (tags) => {
    return tags.map((tag, index) => {
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag key={tag} color="purple" closable={true} onClose={() => this.handleClose(tag)}>
            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })
  }

  render() {
    const { inputVisible, inputValue } = this.state;
    const { tags } = this.props;

    return (
      <div>       
        { this.renderTags(tags) }
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
            <Icon type="plus" /> New Tag
          </Tag>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    addTag: (tag) => dispatch(addTag(tag)),
    deleteTag: (tag) => dispatch(deleteTag(tag))
  })
  
  
  export default connect(null, mapDispatchToProps)(Tags);
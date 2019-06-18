import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Tag, Input, Tooltip, Icon } from 'antd';
import { addTag, deleteTag } from 'redux/actions';


const Tags = (props) => {
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputEl = useRef(null);

    useEffect(() => {
        setTimeout(() =>{
            inputEl.current && inputEl.current.focus(); 
        })
        
    }, [inputVisible]);


    const handleClose = (removedTag) => {   
        const { tags, deleteTag } = props;
        const newTags = tags.filter(tag => tag !== removedTag);
        deleteTag(newTags);
    };


    const showInput = () => {
        setInputVisible(true);
    };
    
    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        const { tags, addTag } = props;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            addTag(inputValue);
        }

        setInputVisible(false);
        setInputValue('');

    }; 

    const renderTags = (tags) => {
        return tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag key={tag} color="purple" closable={true} onClose={() => handleClose(tag)}>
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

      return (
        <div>       
          { renderTags(props.tags) }
          {inputVisible && (
            <Input
              ref={inputEl}
              type="text"
              size="small"
              style={{ width: 78 }}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputConfirm}
              onPressEnter={handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <Tag onClick={showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
              <Icon type="plus" /> New Tag
            </Tag>
          )}
        </div>
      );
}
  
  const mapDispatchToProps = dispatch => ({
    addTag: (tag) => dispatch(addTag(tag)),
    deleteTag: (tag) => dispatch(deleteTag(tag))
  })
  
  
  export default connect(null, mapDispatchToProps)(Tags);
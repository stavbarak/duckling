import React from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

const NoteComment = ({comment}) => {
    return (
        <Comment
       
        author={<span>Han Solo</span>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        
        content={
          <p>
            {comment}
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
        
    )
}

export default NoteComment;
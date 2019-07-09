import React from 'react';
import { Form, Button, Input } from 'antd';

const { TextArea } = Input;

const AddComment = ({ onChange, onSubmit, submitting, value }) => {
    return (
        <div>
        <Form.Item>
          <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
            Post
          </Button>
        </Form.Item>
      </div>
        
    )
}

export default AddComment;
import React from 'react';
import { Card, Button, Icon } from 'antd';

const NoteMenu = ({ onDelete, onSave, id, thumbView }) => {  
    return (
        <Card className="noteMenu">
            <Button type="link" className="deleteButton" onClick={onDelete}><Icon type="delete" /></Button>
            <Button type="link" onClick={onSave}><Icon type="save" /></Button>      
            <Button type="link"><Icon type="download" /></Button>
            <Button type="link"><Icon type="share-alt" /></Button>
            { !thumbView ? <Button type="link"><Icon type="github" /></Button> : null }
        </Card>
    )
}

export default NoteMenu;



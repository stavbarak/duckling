import React from 'react';
import { Card, Button, Icon } from 'antd';


const NoteMenu = ({ onDelete, onSaveComment }) => {  

    return (
        <Card className="noteMenu">
            <Button type="link" onClick={onSaveComment}><Icon type="save" /></Button>
            <Button type="link"><Icon type="edit" /></Button>
            <Button type="link" onClick={onDelete}><Icon type="delete" /></Button>
            <Button type="link"><Icon type="download" /></Button>
            <Button type="link"><Icon type="share-alt" /></Button>
            <Button type="link"><Icon type="github" /></Button>
        </Card>
    )
}

export default NoteMenu;



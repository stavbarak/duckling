import React from 'react';
import { Card, Button, Icon } from 'antd';
import { Link } from "react-router-dom";


const NoteMenu = ({ onDelete, onSaveComment, id }) => {  

    return (
        <Card className="noteMenu">
            <Button type="link" onClick={onSaveComment}><Icon type="save" /></Button>
            <Button type="link"><Link to={`/edit/${id}`}><Icon type="edit" /></Link></Button>
            <Button type="link" onClick={onDelete}><Icon type="delete" /></Button>
            <Button type="link"><Icon type="download" /></Button>
            <Button type="link"><Icon type="share-alt" /></Button>
            <Button type="link"><Icon type="github" /></Button>
        </Card>
    )
}

export default NoteMenu;



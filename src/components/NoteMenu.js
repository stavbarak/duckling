import React from 'react';

import { Button, Icon } from 'antd';

const NoteMenu = () => {
    return (
        <div className="noteMenu">
            <Button type="link"><Icon type="edit" /></Button>
            <Button type="link"><Icon type="delete" /></Button>
            <Button type="link"><Icon type="download" /></Button>
            <Button type="link"><Icon type="share-alt" /></Button>
            <Button type="link"><Icon type="github" /></Button>
        </div>       
    )
}

export default NoteMenu;
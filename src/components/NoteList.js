import React from 'react';
import { Row, Col } from 'antd';
import NoteThumb from 'components/NoteThumb';

const NoteList = ({ data }) => {
    let noteItem = data.map((item, i) => {
        return (   
            <Col xl={{ span: 8}} md={{ span: 12}} sm={{ span: 12}} xs={{ span: 12}} key={(i)}>
                <NoteThumb                       
                id={ item.snipId } 
                title={ item.title } 
                date={ item.dateSnipped }
                codeString ={ item.content }
                file= {item.file}
                comments = {item.comments}
                />   
            </Col>
        )
    });

    return (
        <Row gutter={16} type="flex" className="noteGrid">
            { noteItem }
        </Row>
    )
}


export default NoteList;

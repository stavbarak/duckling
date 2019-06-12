import React from 'react';
import { Row, Col } from 'antd';
import NoteThumb from 'components/NoteThumb';

const NoteList = ({ data }) => {
    let noteItem = data.map((item, i) => {
        return (   
            <Col xl={{ span: 8}} md={{ span: 12}} sm={{ span: 24}} xs={{ span: 24}} key={(i)}>
                <NoteThumb   
                thumbView = {true}                    
                id={ item.snipId } 
                title={ item.title } 
                date={ item.dateSnipped }
                codeString ={ item.content }
                file= {item.file}
                comments = {item.comments}
                tags = { item.tags }
                >
                {/* <NoteMenu id={id} onDelete={this.deleteDataItem} onSaveComment={this.addComment} expanded={false} /> */}
                </NoteThumb>   
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

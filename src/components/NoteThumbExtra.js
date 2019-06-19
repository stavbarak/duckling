import React from 'react';
import { Button, Icon } from 'antd';
import Tags from 'components/Tags';
import { Link } from "react-router-dom";

const NoteThumbExtra = ({id, labels}) => {
    
    return (
        <>
          <Tags tags={labels} label={true} color={"green"} />
          <Button type="link"><Link to={`/edit/${id}`}><Icon type="edit" /> </Link></Button>
        </>
    )
}

export default NoteThumbExtra;
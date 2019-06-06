import React, { Component } from 'react';
import { Card, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { deleteDataItem } from 'redux/actions';

class NoteMenu extends Component {
    render() {
        const { deleteDataItem, id } = this.props;
        return (
            <Card className="noteMenu">
                 <Button type="link"><Icon type="save" /></Button>
                 <Button type="link"><Icon type="edit" /></Button>
                 <Button type="link" onClick={()=> deleteDataItem(id)}><Icon type="delete" /></Button>
                 <Button type="link"><Icon type="download" /></Button>
                 <Button type="link"><Icon type="share-alt" /></Button>
                 <Button type="link"><Icon type="github" /></Button>
             </Card>
     )
    }

}

const mapStateToProps = (state) => ({
    data: state.snippets.data,
    loaded: state.snippets.loaded
  })
  
  const mapDispatchToProps = dispatch => ({
    deleteDataItem: (id) => dispatch(deleteDataItem(id))
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(NoteMenu);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from 'redux/actions';

/* import { CommentStore } from 'contexts/QuickCommentContext'; */
import NoteList from 'components/NoteList';

import 'App.css';


class App extends Component {

  componentDidMount () {
    const { fetchData, data } = this.props;
    // condition totally temp, until I have real data to fetch from
    if(!data.length > 0) {
      fetchData();
    }
  }

  render () {
    const { loaded, data } = this.props;
    return (    
        <div>
          { loaded ? <NoteList data={data} /> : null }     
        </div>       
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.snippets.data,
  loaded: state.snippets.loaded
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData)
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

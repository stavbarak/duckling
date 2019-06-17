import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from 'redux/actions';
import NoteList from 'components/NoteList';

import 'App.css';


const App = (props) => {
  const { fetchData, data, loaded } = props;
  
  useEffect(() => {
    // condition totally temp, until I have real data to fetch from
    if(!data.length > 0) {
      fetchData();
    }
  }, [data, fetchData]);

  return (    
    <div>
      { loaded ? <NoteList data={data} /> : null }     
    </div>       
  )
}


const mapStateToProps = (state) => ({
  data: state.snippets.data,
  loaded: state.snippets.loaded
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData)
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

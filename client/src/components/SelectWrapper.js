import React from 'react';
import { Select } from 'antd';
import { filterNotesByLabel, fetchData } from 'redux/actions';
import { connect } from 'react-redux';

const { Option } = Select;

const SelectWrapper = (props) => {
    const { labels, placeholder, filterNotesByLabel } = props;

    const handleChange = (values) => {
        //console.log(`selected ${value}`);
        //console.log(value)
        filterNotesByLabel(values)
    }

    const renderOptions = () => {
        return labels.map((label, i) => {
          return (
            <Option value={label} label={label} key={i}>
              {label}
            </Option>
          )
        })
    }

    return (
      <Select
      style={{ width: '30%' }}
      placeholder={placeholder}
      mode="multiple"
      onChange={handleChange}
      optionLabelProp="label"
      >
        {renderOptions()}
      </Select>
      )
}

const mapStateToProps = ({ snippets: { data} }) => {
  return { data };
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData),
  filterNotesByLabel: (labels) => dispatch(filterNotesByLabel(labels))
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectWrapper);



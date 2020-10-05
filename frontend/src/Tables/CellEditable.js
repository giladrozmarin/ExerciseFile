
import React, { useState, useEffect } from 'react'
import MaterialTable, { MTableEditRow, MTableEditField } from "material-table"




function CellEditable(props) {
   


  const [columns, setColumns] = useState([
    {
      title: 'Summary', field: 'summary',
      editComponent: props => (
        <input
          type="text"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      )
    },
    { title: 'Date', field: 'date',  type: 'date' },
    {  title: 'Location', field: 'location' },
    {
      title: 'Liability',
      field: 'liability'
    },
  ]);

  const [data, setData] = useState([
    { summary: 'First Summary', date: 'pick date', location: 'Exercise location', liability: '' },
    { summary: 'Exerciser Unit', date: 'pick date', location:'pick location', liability: '' },
    {summary:'Superior Level', date: 'pick date' ,location:'pick location', liability: '' }
  ]);

  return (
    <MaterialTable
      title="Schedule Summaries"
      columns={columns}
      data={data}
      options={{
        selection: true,
        selectionProps: rowData => ({
          disabled: rowData.summary === 'First Summary',
          color: 'primary'
        })  }}
        actions={[
          {
            icon: 'Edit',
            disabled: false
          }
        ]}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000)
          }),
      }}
    />
  )
}
export default CellEditable
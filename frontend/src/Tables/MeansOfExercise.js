
import React, { useState, useEffect } from 'react'
import MaterialTable, { MTableEditRow, MTableEditField } from "material-table"
import axios from 'axios';
import { useFormikContext } from 'formik'

function MeansOfExercise(props) {

  const { values } = useFormikContext()
  const { exerciseType } = values
  const [columns, setColumns] = useState([
    {
      title: 'Unit Name', field: 'unit', editable: "never",
      editComponent: props => (
        <input
          type="text"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      )
    },
    { title: 'Self-propelled gun', field: 'gun', type: 'numeric' },
    { title: 'M548', field: 'M548', type: 'numeric' },
    { title: 'Track', field: 'Track', type: 'numeric' },
    { title: 'M113', field: 'M113', type: 'numeric' },
    { title: 'BMP-1', field: 'BMP_1', type: 'numeric' },
    { title: 'Rocket', field: 'Rocket', type: 'numeric' },
    { title: 'Artilley', field: 'Artilley', type: 'numeric' },
    { title: 'light vehicle', field: 'light vehicle', type: 'numeric' },
  ]);

  const [data, setData] = useState([
    { unit: 'Artillery battery A' },
    { unit: 'Artillery battery B' },
    { unit: 'Artillery battery C' },
    { unit: 'Artillery battery D' }
  ]);

  return (
    <MaterialTable
      title="Means Of Exercise"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000)
          }),

        onRowUpdate: (newData, oldData) => {
          newData.terrain = exerciseType;

          axios.post('/api/InstructEmphasis/MeansOfExercise', newData)
            .then(function (response) {

              console.log(response)
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
            })
            .catch(function (error) {
              console.log(error);
            })
        },
      }}
    />
  )
}

export default MeansOfExercise

import React, { useState, useEffect } from 'react'
import MaterialTable, { MTableEditRow, MTableEditField } from "material-table"
import axios from 'axios';
import { useFormikContext } from 'formik'
import myErrors from './myErrors'
import { keys } from '@material-ui/core/styles/createBreakpoints';

function MeansOfExercise(props) {

  function fetch(newData, oldData) {
    return (
      axios.post('/api/InstructEmphasis/MeansOfExercise', newData)
        .then((response) => {

          const myP = new Promise((resolve, reject) => {
            if (response.data[0] == null) {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              resolve();
            }
            else {

              errors = response.data
              let errorString = "";
              for (let i = 0; i < errors.length; i++) {
                errorString += "\n" + (i + 1) + ") " + errors[i];
              }
              alert("The following rules has been violated:" + errorString)
              myErrors(errors)
              reject(myErrors(errors))
            }
          })
        },
        ))
  }

  const { values } = useFormikContext()
  const { exerciseType } = values
  let errors = "check"
  const [columns, setColumns] = useState();
  
  useEffect(() =>{
    axios.get('/api/InstructEmphasis/MeansOfExerciseData')
    .then(response => {
     
        setColumns(response.data.MeansOfExerciseData)
        
      })
      .catch(err => console.log(err));
  }, [])


      console.log(columns)



  //columnscolumns.map(column => {column.title=column.s});
   //     
  
        //   [
  //   {
  //     title: 'Unit Name', field: 'unit', editable: "never",
  //     editComponent: props => (
  //       <input
  //         type="text"
  //         value={props.value}
  //         onChange={e => props.onChange(e.target.value)}
  //       />
  //     )
  //   },
  //   { title: 'Self-propelled gun', field: 'gun', type: 'numeric' },
  //   { title: 'M548', field: 'M548', type: 'numeric' },
  //   { title: 'Track', field: 'Track', type: 'numeric' },
  //   { title: 'M113', field: 'M113', type: 'numeric' },
  //   { title: 'BMP-1', field: 'BMP_1', type: 'numeric' },
  //   { title: 'Rocket', field: 'Rocket', type: 'numeric' },
  //   { title: 'Artilley', field: 'Artilley', type: 'numeric' },
  //   { title: 'light vehicle', field: 'light vehicle', type: 'numeric' },

  // ]);

  const [data, setData] = useState([
    { unit: 'Artillery battery A' },
    { unit: 'Artillery battery B' },
    { unit: 'Artillery battery C' },
    { unit: 'Artillery battery D' }
  ]);

  return (
    <>
      <myErrors />

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

          onRowUpdate: (newData, oldData) =>
            fetch(newData, oldData)
              .then(
              )

        }}
      />
    </>
  )
}

export default MeansOfExercise
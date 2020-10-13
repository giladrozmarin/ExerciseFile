import React, {useState,useEffect} from "react";
import MaterialTable, { MTableEditRow, MTableEditField } from "material-table";
import {useFormikContext} from 'formik'
import axios from 'axios'

const API_KEY = "caba7178c08ce271766df16583a1b4e8"




export default function FireAreas(props) {
  const { values } = useFormikContext()
  const { exerciseType } = values
//get table data 
  useEffect(() =>{
   
    if ( exerciseType === 'Open-terrain' ){
      axios.get('/api/InstructEmphasis/fireAreasDataOpen')
      .then(response => {
        

        setData(response.data.MeansOfExerciseData)
       
      }
      )
      .catch(err => console.log(err));
    }
    if ( exerciseType === 'Urban-warfare' ){
      axios.get('/api/InstructEmphasis/fireAreasDataUrban')
      .then(response => {
        //add weather

        setData(response.data.MeansOfExerciseData)
      
      }
      
      ).catch(err => console.log(err));
    }
    
  },[]
   )




   function fetch (evt, data)  {
     
    data.push({'Exercise-type':exerciseType })
         console.table(data)
         return (
          axios.post('/api/InstructEmphasis/FireArea', data)
          .then((response) => {
            delete data['Exercise-type']
            console.table(response.data)
          
            alert(response.data)


          },
         )
         )
   }
  
  


    const [columns, setColumns] = useState([

      {
        title: 'Fire Areas', field: 'unit' ,
      },
      {title: 'Weather', field: 'Weather' }
     
        ]);
    
      const [data, setData] = useState([
        { unit: 'data on the way :)'},
    
      ]);
      console.table("line 81" + data)
  return (
    <>
  <p>{exerciseType }</p> 

    <MaterialTable
     columns={columns}
     data={data}   
      title="FireAreas"
    
      options={{
          paging: false,
          Delete: false,
          selection: true,
          //selectionProps
        
      }}
      actions={[
        {
          tooltip: 'Select these areas and add',
          icon: 'add',
     
          onClick: (evt, data) =>   fetch (evt, data)
          .then(
           
          )
          
          
          
          
  
         
        }
    ]}

    
      
      detailPanel={rowData => {
        return (
          <iframe
            width="100%"
            height="315"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=33%C2%B004'56.1%22N%2035%C2%B015'52.7%22E+(%D7%A9%D7%98%D7%97%20%D7%90%D7%A9%20150)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )
      }}
     
      onRowClick={(event, rowData, togglePanel) => togglePanel(rowData)}
    />
    </>
  )
}



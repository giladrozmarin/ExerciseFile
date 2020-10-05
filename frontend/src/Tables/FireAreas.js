import React, {useState} from "react";
import MaterialTable, { MTableEditRow, MTableEditField } from "material-table";

 
export default function FireAreas(props) {
    const [columns, setColumns] = useState([
        {
          title: 'Fire Areas', field: 'unit' ,
          editComponent: props => (
            <input
              type="text"
              value={props.value,props.lookup}
              onChange={e => props.onChange(e.target.value)}
            />
          )
        },
        
       
        
     
        ]);
    
      const [data, setData] = useState([
        { unit: 'Fire Areas 100' },
        { unit: 'Fire Areas 150' },
       
      ]);
  return (
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
     
          onClick: (evt, data) => alert('You want to add ' + data.length + ' rows')
         
        }
    ]}

    
      
      detailPanel={rowData => {
        return (
          <iframe
            width="100%"
            height="315"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=33%C2%B004'56.1%22N%2035%C2%B015'52.7%22E+(%D7%A9%D7%98%D7%97%20%D7%90%D7%A9%20150)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        )
      }}
     
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
    />
  )
}



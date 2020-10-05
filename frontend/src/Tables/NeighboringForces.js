
import React, { useState, useEffect } from 'react'
import MaterialTable, { MTableEditRow, MTableEditField } from "material-table"




function NeighboringForces(props) {
   


  const [columns, setColumns] = useState([
    {
      title: 'Unit Name', field: 'unit',
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

  ]);

  const [data, setData] = useState([
    { unit: 'Golani ', date: '13/10/2020-17/10/2020', location: 'Fire Area 100', liability: '' },
    { unit: 'Kfir', date: '14/10/2020-18/10/2020', location:'Fire Area 150', liability: '' },
    
  ]);

  return (
    <MaterialTable
      title="Neighboring Forces"
      columns={columns}
      data={data}
      options={{
        selection: false,
        paging: false,  }}

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
    />
  )
}
export default NeighboringForces
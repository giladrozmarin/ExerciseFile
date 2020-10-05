import React,{useState} from "react"
import MaterialTable from "material-table"


function Obdeatail (){


    const [columns, setColumns] = useState([
        {
          title: 'Unit Name', field: 'unit',editable: "never",
          editComponent: props => (
            <input
              type="text"
              value={props.value}
              onChange={e => props.onChange(e.target.value)}
            />
          )
        },
        { title: 'Unit Commander', field: 'Unit Commander',  type: 'string' },
        { title: 'Contact Information', field: 'Contact Information',  type: 'string' } 

        
     
        ]);
    
      const [data, setData] = useState([
        { unit: 'Moran' },
        { unit: 'Rocha"S' },
        { unit:'Artillery Corps 215'} 
      ]);
    
      return (
        <MaterialTable
          title="Order of battle Unit detail"
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
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);
    
                  resolve();
                }, 1000)
              }),
    
    
          }}
          
        />
        
      )

}





export default Obdeatail;
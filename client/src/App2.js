import React, {useCallback, useMemo, useRef, useState} from 'react'



import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';





const App2 = () => {

  //  const [ag, setAg] = useState(true);
  //  const [filter, setFilter] = useState(false);
  //  const [sort, setSort] = useState(false);
  //  const [pagination, setPagination] = useState(false);
  
    const [rowData, setRowData] = useState([
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ]);
  
    const [columnDefs, setColumnDefs ] = useState([
      { field: 'make' },
      { field: 'model' },
      { field: 'price' },
    ]);



    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []); 
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState();
  


    const defaultColDef = useMemo(() => {
        return {
          width: 150,
        };
      }, []);

      const onModelFirst = useCallback(()=> {
          grid.current.columnApi.moveColumns(
              ['gold', ]
          )
      } )
  //  const defaultColDef = {
  //    filter: filter,
  //    flex: 1,
  //    sortable: sort,
  //  };


  return (
    
  )
}

export default App2
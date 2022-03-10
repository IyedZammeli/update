import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  const [ag, setAg] = useState(true);
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const [pagination, setPagination] = useState(false);

  const [rowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ]);

  const defaultColDef = {
    filter: filter,
    flex: 1,
    sortable: sort,
  };

  const sortHandler = () => {
    setSort(prev => !prev);
    setAg(false);
  };

  const filterHandler = () => {
    setFilter(prev => !prev);
    setAg(false);
  };

  const paginationHandler = () => {
    setPagination(prev => !prev);
    setAg(false);
  };

  useEffect(() => {
    setAg(true);
  }, [sort, filter, pagination]);

  return (
    <>
      <div className="mb-5">
        <h1 className="text-center">Paramétrage AG Grid</h1>
      </div>

      <Container fluid className=" my-3">
        <Row className="row h-150">
          <Col sm={2}>
            <div className="border border-black rounded bg-light h-30">
              <div className="m-3">
                <Stack gap={3}>
                  <Button
                    variant={sort ? `primary` : `outline-primary`}
                    size="sm"
                    onClick={sortHandler}
                  >
                    Sortable
                  </Button>
                  <Button
                    variant={filter ? `primary` : `outline-primary`}
                    size="sm"
                    onClick={filterHandler}
                  >
                    Filter
                  </Button>
                  <Button
                    variant={pagination ? `primary` : `outline-primary`}
                    size="sm"
                    onClick={paginationHandler}
                  >
                    Pagination
                  </Button>
                </Stack>
              </div>
            </div>
          </Col>
          <Col sm={10}>
            <div className="ml-2 bg-dark border border-black rounded">
              <div className="ag-theme-alpine m-3 " style={{ height: '400px' }}>
                {ag && (
                  <AgGridReact
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    rowData={rowData}
                    pagination={pagination}
                  />
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

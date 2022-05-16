import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import EnhancedTable from './Table/EnhancedTable';
import Axios from 'axios';
import makeData from './util';
import './TodoList.css';

export default function Price() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Наименование услуги',
        accessor: 'Name',
      },
      {
        Header: 'Исполнитель',
        accessor: 'Executor',
      },
      {
        Header: 'Возраст',
        accessor: 'Age',
      },
      {
        Header: 'Категория',
        accessor: 'Category',
      },
      {
        Header: 'Стоимость',
        accessor: 'Cost',
      },
      {
        Header: 'Стоимость повторной услуги',
        accessor: 'service',
      },
    ],
    [],
  );
  useEffect(() => {
    Axios.get('http://localhost:3003/api/get/Graph').then((response) => {
      setData(response.data);
    });
  }, []);

  const [data, setData] = React.useState([]);
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          console.log('asdasd', row);
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      }),
    );
  };

  return (
    <div className="Table">
      <CssBaseline />
      <EnhancedTable
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  );
}

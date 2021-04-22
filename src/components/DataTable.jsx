import _ from 'lodash';
import React, { useReducer } from 'react';
import { Table } from 'semantic-ui-react';
import DataTableActions from './DataTableActions';

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending'
        };
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending'
      };
    default:
      throw new Error();
  }
}

const DataTable = ({ columnHeaders, columnData }) => {
  const [state, dispatch] = useReducer(exampleReducer, {
    column: null,
    data: columnData,
    direction: null
  });
  const { column, data, direction } = state;
  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          {columnHeaders.map((col, index) => (
            <Table.HeaderCell
              key={index}
              sorted={column === `${col}` ? direction : null}
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: col })}
            >
              {col}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {columnData.map(({ id, title, priority, createdAt, dueDate }) => (
          <Table.Row key={id}>
            <Table.Cell>{title}</Table.Cell>
            <Table.Cell>{priority}</Table.Cell>
            <Table.Cell>{createdAt}</Table.Cell>
            <Table.Cell>{dueDate}</Table.Cell>
            <Table.Cell>
              <DataTableActions itemId={id} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default DataTable;

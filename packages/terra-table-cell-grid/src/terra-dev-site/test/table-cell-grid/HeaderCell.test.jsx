import React from 'react';
import TableCellGrid, {
  HeaderCell, HeaderCellGrid,
} from '../../../index';

const HeaderCellTest = () => (
  <TableCellGrid
    headerCellGrid={(
      <HeaderCellGrid>
        <HeaderCell key="cell-0">Default Cell</HeaderCell>
        <HeaderCell key="cell-1" isSelectable sort="asc">ASC Cell</HeaderCell>
        <HeaderCell key="cell-2" isSelectable sort="desc">DESC Cell</HeaderCell>
        <HeaderCell key="cell-3" width={{ scalar: 2 }}>Scalar 2</HeaderCell>
        <HeaderCell key="cell-4" width={{ scalar: 3 }}>Scalar 3</HeaderCell>
        <HeaderCell key="cell-5" width={{ static: { value: 50, unit: 'px' } }}>Static Cell</HeaderCell>
        <HeaderCell key="cell-7" width={{ percentage: 20 }}>20% Cell</HeaderCell>
      </HeaderCellGrid>
    )}
  />
);

export default HeaderCellTest;

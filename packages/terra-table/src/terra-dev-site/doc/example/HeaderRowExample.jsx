import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { HeaderRow, HeaderCell } from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const HeaderRowExample = () => (
  <React.Fragment>
    <Table
      paddingStyle="standard"
      headerRow={(
        <HeaderRow key="default">
          <HeaderCell key="key-0">Default Header</HeaderCell>
          <HeaderCell key="key-1">Default Header</HeaderCell>
        </HeaderRow>
      )}
    />
    <Table
      paddingStyle="standard"
      headerRow={(
        <HeaderRow selectionStyle="chevron" key="selection-chevron">
          <HeaderCell key="key-0">Selection Style Chevron</HeaderCell>
          <HeaderCell key="key-1">Selection Style Chevron</HeaderCell>
        </HeaderRow>
      )}
    />
    <Table
      paddingStyle="standard"
      headerRow={(
        <HeaderRow selectionStyle="checkmark" key="selection-checkmark">
          <HeaderCell key="key-0">Selection Style Checkmark</HeaderCell>
          <HeaderCell key="key-1">Selection Style Checkmark</HeaderCell>
        </HeaderRow>
      )}
    />
  </React.Fragment>
);

export default HeaderRowExample;

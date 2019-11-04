import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, Cell, Section } from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSectionExample = () => (
  <Table
    paddingStyle="standard"
  >
    <Section title="Default Section">
      <Row>
        <Cell key="cell-0">
          Lorem ipsum dolor
        </Cell>
        <Cell key="cell-1">
          Lorem ipsum dolor
        </Cell>
        <Cell key="cell-2">
          Lorem ipsum dolor
        </Cell>
      </Row>
    </Section>
    <Section isCollapsible title="Collapsible Section">
      <Row>
        <Cell key="cell-0">
          Lorem ipsum dolor
        </Cell>
        <Cell key="cell-1">
          Lorem ipsum dolor
        </Cell>
        <Cell key="cell-2">
          Lorem ipsum dolor
        </Cell>
      </Row>
    </Section>
    <Section isCollapsible isCollapsed title="Collapsed Section">
      <Row>
        <Cell key="cell-0">
          Lorem ipsum dolor
        </Cell>
        <Cell key="cell-1">
          Lorem ipsum dolor
        </Cell>
        <Cell key="cell-2">
          Lorem ipsum dolor
        </Cell>
      </Row>
    </Section>
  </Table>
);

export default TableSectionExample;

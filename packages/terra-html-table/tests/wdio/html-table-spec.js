Terra.describeViewports('HTML Table', ['medium'], () => {
  describe('Non Striped Table', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/no-striped-table'));
    Terra.it.validatesElement();
  });

  describe('Striped', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/striped-table'));
    Terra.it.validatesElement();
  });

  describe('Non Padding', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/no-padding-table'));
    Terra.it.validatesElement();
  });

  describe('Sort Indicator', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table-with-sort-indicator'));
    Terra.it.validatesElement();
  });

  describe('Single Row', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/single-row-table'));
    Terra.it.validatesElement();
  });

  describe('No Rows', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table-no-rows'));
    Terra.it.validatesElement();
  });
});

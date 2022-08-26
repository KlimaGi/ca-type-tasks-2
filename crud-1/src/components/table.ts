type TableProps<Type> = {
  title: string,
  columns: Type,
  rowsData: Type[],
};

class Table<T extends string[]> {
  private static checkColumnsCompatability<Type extends string[]>(
    columns: Type,
    rowsData: Type[],
  ): boolean {
    return rowsData.every((rowData) => rowData.length === columns.length);
  }

  public htmlElement: HTMLTableElement;

  private props: TableProps<T>;

  private thead: HTMLTableSectionElement;

  private tbody: HTMLTableSectionElement;

  constructor(props: TableProps<T>) {
    const columnsIsCompatable = Table.checkColumnsCompatability(props.columns, props.rowsData);
    if (!columnsIsCompatable) {
      throw new Error('Lenteles stulpeliai nesuderinti su lenteles duomenimis');
    }
    this.props = props;
    this.htmlElement = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.initialize();
  }

  private initializeHead() {
    this.thead.className = 'table';

    const columnsHTMLString = this.props.columns
      .map((column) => `<th>${column}</th>`)
      .join('');

    this.thead.innerHTML = `<tr>${columnsHTMLString}</tr>`;
  }

  private initializeBody() {
    const rowsDataHTMLString = this.props.rowsData
      .map((rowData) => {
        const rowHTMLString = rowData
          .map((data) => `<td>${data}</td>`)
          .join('');

        return `<td>${rowHTMLString}</td>`;
      })
      .join('');

    this.tbody.innerHTML = rowsDataHTMLString;
  }

  private initialize() {
    this.htmlElement.className = 'table table-striped';

    this.initializeHead();
    this.initializeBody();

    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
  }
}

export default Table;

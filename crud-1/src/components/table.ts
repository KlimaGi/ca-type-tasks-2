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
    // TODO: patikrinti ar stulpeliu skaicius lygus kiekvienos eilutes stulpeliu skaiciui
    console.log(columns, rowsData);
    console.log(('-').repeat(34));

    return true;
  }

  public htmlElement!: HTMLTableElement;

  private props!: TableProps<T>;

  private thread!: HTMLTableSectionElement;

  private tbody!: HTMLTableSectionElement;

  constructor(props: TableProps<T>) {
    console.log(this.props, this.thread, this.tbody);
    const columnsIsCompatable = Table.checkColumnsCompatability(props.columns, props.rowsData);
    if (!columnsIsCompatable) {
      throw new Error('Lenteles stulpeliai nesuderinti su lenteles duomenimis');
    }
  }
}

export default Table;

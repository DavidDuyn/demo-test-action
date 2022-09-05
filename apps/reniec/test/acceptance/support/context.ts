export class Context {
  public app;
  public response;
  public request;

  public tableToObject(table) {
    return table.rawTable.reduce((result, current) => {
      result[current[0] as string] = JSON.parse(current[1]);
      return result;
    }, {});
  }
}

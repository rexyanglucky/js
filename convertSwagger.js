
var obj = {};
function javaToTypeScript(t) {
  const map = {
    'int16': 'number',
    'int32': 'number',
    'int64': 'number',
    'short': 'number',
    'float': 'number',
    'double': 'number',
    'string': 'string',
    'DictionaryKeyValue«int,string»': '{key: number; value: string}',
    'DictionaryKeyValue«long,string»': '{key: number; value: string}',
    'array': '[]',
    'date-time': 'Date'
  }
  return map[t] || t;
}
var tables = document.querySelectorAll('.confluenceTable.tablesorter.tablesorter-default.stickyTableHeaders');
for (let k = 0; k < tables.length; k++) {
  t = tables[k]
  var vo = t.previousElementSibling.innerText;
  // if (!/[a-zA-Z0-9]+/.test(vo)) {
  //   continue;
  // }
  if (t.tBodies.length <= 0 || t.tBodies[0].rows.length <= 0) {
    continue;
  }
  var objTemp = [];
  [].slice.call(t.tBodies[0].rows).forEach(item => {
    const cells = item.cells;
    if (cells && cells.length > 3) {
      const fieldName = cells[0].innerText;
      const fieldComment = cells[1].innerText;
      const filedType = cells[2].innerText;
      const filedSchema = cells[3].innerText;
      // objTemp[fieldName] = `-${filedType}-`;
      objTemp.push(`${fieldName}: ${javaToTypeScript(filedType)}; // ${fieldComment}`);
    }
  });
  obj[vo] = `\n export interface ${vo} { ${objTemp.join('\n')} \n }`;
}
var r = Object.values(obj).reduce((p, n) => {
  p = p + '\n' + n;
  return p;
}, '')
console.log(r);

// console.log(obj);




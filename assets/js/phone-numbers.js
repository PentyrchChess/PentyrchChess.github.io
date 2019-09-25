function appendTable(containerId,tableData) {
    var table = document.createElement('table');
    table.setAttribute('class', 'phone-numbers');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');

      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });

    table.appendChild(tableBody);

    var holder = document.getElementById(containerId);
    holder.appendChild(table);

  }

  async function getTableRows(password) {
    const response = await fetch('https://europe-west2-pentyrch-chess.cloudfunctions.net/get-phone-numbers/response.json?password=' + encodeURI(password));

    if (response.status === 401)
      throw "PASSWORD";
         
    const tableRows = await response.json();
    return tableRows;
  }


const table = document.getElementById("tableBody");

const makeTable = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    data.map(({verb,about,across,after,along,around,away,back,down,for:_for,in:_in,into,off,on,out,over,through,to,up}) => {
        const newRow = `
            <tr>
                <td>${verb}</td>
                <td>${about}</td>
                <td>${across}</td>
                <td>${after}</td>
                <td>${along}</td>
                <td>${around}</td>
                <td>${away}</td>
                <td>${back}</td>
                <td>${down}</td>
                <td>${_for}</td>
                <td>${_in}</td>
                <td>${into}</td>
                <td>${off}</td>
                <td>${on}</td>
                <td>${out}</td>
                <td>${over}</td>
                <td>${through}</td>
                <td>${to}</td>
                <td>${up}</td>
            </tr>
        `
        table.insertAdjacentHTML("beforeend", newRow)
    })
}

makeTable();
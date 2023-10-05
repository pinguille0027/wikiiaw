
function showData(datosJson) {
    const main = document.getElementById('main');
    datosJson.forEach(item => {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const titleRow = document.createElement('tr')
        const titleCell = document.createElement('th');
        titleCell.innerHTML = item.title;
        titleCell.colspan = "2";
        const imageRow = document.createElement('tr');
        const imageCell = document.createElement('td')
        imageCell.colspan= "2";
        const image = document.createElement('img')
        image.src = item.image
        const tbody = document.createElement('tbody');
        const definitionRow = document.createElement('tr');
        const definitionTitleCell = document.createElement('th');
        definitionTitleCell.innerHTML = "Definición";
        const definitionCell = document.createElement('td');
        definitionCell.innerHTML = item.definition;

        table.appendChild(thead);
        thead.appendChild(titleRow);
        titleRow.appendChild(titleCell)
        thead.appendChild(imageRow);
        imageRow.appendChild(imageCell)
        imageCell.appendChild(image)
        table.appendChild(tbody);
        tbody.appendChild(definitionRow);
        definitionRow.appendChild(definitionCell)
        definitionRow.appendChild(definitionTitleCell)

        if (item.ampliar) {
            const AmpliarRow = document.createElement('tr');
            const AmpliarTitleCell = document.createElement('th');
            AmpliarTitleCell.innerHTML = "Para ampliar";
            const AmpliarCell = document.createElement('td');
            AmpliarCell.innerHTML = item.ampliar;
            tbody.appendChild(AmpliarRow);
            AmpliarRow.appendChild(AmpliarCell)
            AmpliarRow.appendChild(AmpliarTitleCell)
        }

        main.appendChild(table);
    });
};
window.addEventListener('load', async () => {
    const response = await fetch('datos.json');
    if (!response.ok) { return; }
    const datosJson = await response.json();
    console.log(datosJson)
    showData(datosJson);
});
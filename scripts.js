
function showData(datosJson) {
    const main = document.getElementById('main');
    datosJson.forEach(item => {
        const table = document.createElement('table');
        const titleRow = document.createElement('th')
        const titleCell = document.createElement('td');
        titleCell.innerHTML = item.title;
        const imageRow = document.createElement('tr');
        const imageCell = document.createElement('td')
        const image = document.createElement('img')
        image.src = item.image
        const definitionRow = document.createElement('tr');
        const definitionCell = document.createElement('td');
        definitionCell.innerHTML = item.definition;
        fetch('datos.json');
        table.appendChild(titleRow);
        titleRow.appendChild(titleCell)
        table.appendChild(imageRow);
        imageRow.appendChild(imageCell)
        imageCell.appendChild(image)
        table.appendChild(definitionRow);
        definitionRow.appendChild(definitionCell)

        if (item.ampliar) {
            const AmpliarRow = document.createElement('tr');
            const AmpliarCell = document.createElement('td');
            AmpliarCell.innerHTML = item.ampliar;
            table.appendChild(AmpliarRow);
            AmpliarRow.appendChild(AmpliarCell)
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
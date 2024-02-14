
let headmain = document.getElementById("tableBody")
let storedData = localStorage.getItem('itemsJson');
let data;

if (storedData !== null) {
    data = JSON.parse(storedData);
} else {
    console.log('No data found in local storage.');
}

for (let i = 0; i < data.length; i++) {
    console.log(i)
    console.log(data)
    let main = `<tr>
         <th scope="row">${i + 1}</th>
         <td>${data[i][0]}</td>
         <td>${data[i][1]}</td>
         <td>${data[i][2]}</td>
         <td>${data[i][3]}</td>
         <td>${data[i][4]}</td>
         <td>${data[i][5]}</td>
     </tr> `;
    headmain.innerHTML += main;

}

//print
document.getElementById("print").addEventListener("click", function() {
    window.print();
});

//pdf

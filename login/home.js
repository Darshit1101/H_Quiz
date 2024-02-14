
// time
let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date(); 
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br>on " + date;
}, 1000);


// quiz


//open new page
function openNewPage() {
    var newPageUrl = 'add.html';
    window.location.href = newPageUrl;
  }

// push question and mcq
function getAndUpdate(){
    console.log("Updating List...");
    tit0 = document.getElementById('description').value;
    tit1 = document.getElementById('title1').value;
    tit2 = document.getElementById('title2').value;
    tit3 = document.getElementById('title3').value;
    tit4 = document.getElementById('title4').value;
    tit5 = document.getElementById('title5').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit0,tit1,tit2,tit3,tit4,tit5]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit0,tit1,tit2,tit3,tit4,tit5]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}


function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = []; 
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } 
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }


    // Populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td>${element[2]}</td> 
        <td>${element[3]}</td> 
        <td>${element[4]}</td> 
        <td>${element[5]}</td> 
        <td><button class="btn btn-sm btn-danger" onclick= "deleted(${index})">Delete</button></td> 
        <td> <a class="btn btn-sm btn-warning" href="update.html?id=${index}">edit </a> </td> 
        </tr>`; 
    });
    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

// delete 
function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();    

}


// clearlist
function clearStorage(){
    if (confirm("Do you areally want to clear?")){
    console.log('Clearing the storage')
    localStorage.clear();
    update()
    }
}


// logout

function handleLogout(){
    localStorage.removeItem("success");
    localStorage.removeItem("loginType");
    hideShow();

}

function hideShow() {
    if(localStorage.getItem("success") !== "true")
    {
        window.location.href="./index.html"

    }
   
}
hideShow()



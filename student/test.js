//webcam
const video = document.getElementById('video');

async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        console.error('Error accessing webcam:', err);
    }
}

startWebcam();

//logout
function handleLogout(){
    localStorage.removeItem("success");
    localStorage.removeItem("loginType");
    hideShow();

}

function hideShow() {
    if(localStorage.getItem("success") !== "true")
    {
        window.location.href="../login/index.html"

    }
   
}
hideShow()

const quizData =[];

let val = localStorage.getItem("itemsJson")
console.log(JSON.parse(val));
let data = JSON.parse(val);
for(let i =0; i<data.length; i++)
{
     let question=data[i][0]
     let a = data[i][1]
     let b = data[i][2]
     let c = data[i][3]
     let d = data[i][4]
     let correct = data[i][5]

     console.log(question)
     console.log(a)
     console.log(b)
     console.log(c)
     console.log(d)
     console.log(correct)
     quizData.push({question, a,b,c,d, correct})

}

let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
allInputs[4].nextElementSibling.innerText = data.correct
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

// const quizEnd = () => {
// // console.log(document.getElementsByClassName("container"));
// document.getElementsByClassName("container1")[0].innerHTML = `
//     <div class="col">
//         <h3 class="w-100"> you've scored ${correct} / ${total} </h3>
//     </div>
// `
// }
// loadQuestion(index);

const quizEnd = () => {
    const percentage = (correct / total) * 100;
    document.getElementsByClassName("container1")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> You've scored ${correct} / ${total} (${percentage.toFixed(2)}%) </h3>
        </div>
    `
}
loadQuestion(index);




// const quizData = [{
//     question: "Which of the following is a client site language?",
//     a: "Java",
//     b: "C",
//     c: "Python",
//     d: "JavaScript",
//     correct: "d",
// },
// {
//     question: "What does HTML stand for?",
//     a: "Hypertext Markup Language",
//     b: "Cascading Style Sheet",
//     c: "Jason Object Notation",
//     d: "Helicopters Terminals Motorboats Lamborginis",
//     correct: "a",
// },
// {
//     question: "What year was JavaScript launched?",
//     a: "1996",
//     b: "1995",
//     c: "1994",
//     d: "none of the above",
//     correct: "b",
// },
// {
//     question: "What does CSS stands for?",
//     a: "Hypertext Markup Language",
//     b: "Cascading Style Sheet",
//     c: "Jason Object Notation",
//     d: "Helicopters Terminals Motorboats Lamborginis",
//     correct: "b",
// }
// ];
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

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);



var loginText = document.querySelector(".title-text .login");
var loginForm = document.querySelector("form.login");
var loginBtn = document.querySelector("label.login");
var signupBtn = document.querySelector("label.signup");
var signupLink = document.querySelector("form .signup-link a");

let oldData = localStorage.getItem("newUser");
let allData = JSON.parse(oldData)
console.log(allData)
signupBtn.onclick = (() => {
  if(allData ==null){
    console.warn("ok")
  localStorage.setItem("newUser", JSON.stringify([]))
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
   }
   else{
    localStorage.setItem("newUser", JSON.stringify(allData))
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
   }
 
});


loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});

//signup



let type = document.getElementById("upSelect");
let upmail = document.getElementById("upEmail");
let upPass = document.getElementById("upPass");
let upCpass = document.getElementById("upCpass");
let btnup = document.getElementById("btnup");



btnup.addEventListener("click", () => {
  if(upmail.value !== "" && upPass.value !== "" ){
  if (upPass.value === upCpass.value) {
    

    console.log(type.value)
    console.log(upmail.value)

    console.log(upPass.value)
    console.log(upCpass.value)
    let user = {
      type: type.value,
      upmail: upmail.value,
      upPass: upPass.value,
    }
    allData.push(user);
    localStorage.setItem("newUser", JSON.stringify(allData))
    console.log(allData)
    // console.log(user)
    function nav() {
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    }
    nav();
  }

  else {
    alert("please insert correct password!")
  }}
  else{
    alert("Please Fill all Data!")
  }
})


// login

let inmail = document.getElementById("inEmail");
let inPass = document.getElementById("inPass");
let btnin = document.getElementById("btnin");

btnin.addEventListener("click", (e) => {
  e.preventDefault();
  if(inmail.value !== "" && inPass!== "") {
    let oldData = localStorage.getItem("newUser");
    let jsonData = JSON.parse(oldData);
    console.log(jsonData,"data fetch")
    console.log(inmail.value)
    for(let i =0; i<jsonData.length; i++){
      if(inmail.value == jsonData[i].upmail)
      {
        if(inPass.value == jsonData[i].upPass)
        {
           return ( localStorage.setItem("success", "true"),localStorage.setItem("loginType", jsonData[i].type),
                     localStorage.getItem("loginType")!=="user"? window.location.href = "./home.html" : window.location.href = "../student/test.html"
                       )
        }
        else{
          return alert("Invelid creadentials2 !")
        }
      }
      else{
        console.log("not match")
      }
    }
    console.log(inmail.value,inPass.value)

  }
  else{
    alert("Please fill all the data!")
  }

})




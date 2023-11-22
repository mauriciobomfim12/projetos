import axios from "axios";
let botao = document.getElementById("botao")

function login(){
    var emailField = 
    document.getElementById("email");

    var senhaField =  
    document.getElementById("senha");

    var email = emailField.value;
    var senha = senhaField.value;

    axios.post(
    "http://localhost:3000/auth/token",
    {email,senha}).then(res => {

         var token = res.data.token;
         localstorage.setItem("token", token);

    }).catch(err=> {
         alert("Login incorreto....");
    })
} 



var axiosConfig = { 
   headers: {  
        Authorization: "Bearer" + 
        localStorage.getItem("token")   
   }
}

function resultado(){
    axios.get("http://localhost:3000/transactions/data", 
    axiosConfig)
    .then(response => {
        console.log(response)
    }).catch( erro => {
        console.log(erro)
    })
}

botao.addEventListener("click", login)
botaodois.addEventListener("click", resultado)
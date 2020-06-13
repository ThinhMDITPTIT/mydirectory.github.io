import setScreen from "../js/main.js";
import register from "../views/register.js";
import {login} from "../controllers/auth.js";
import directoryScreen from "../views/directory.js";

const content = `
<div id="container1">
            <div class="card1">
                <form id="js-loginForm">
                    <div id="header">
                        <label id="lable">My Directory !!!</label>
                    </div>
                    <div>
                        <input type="email1" name="email" placeholder="Email..." id="email">
                        <i class="fas fa-envelope-open-text"></i> 
                    </div>
                    
                    <div>
                        <input type="password1" name="password" placeholder="Password..." id="password">
                        <i class="fas fa-lock"></i>
                    </div>
                    <hr>
                    <div>
                        <button type="submit1" id="js-btnLogin">Login</button>
                        <button type="button1" id="js-btnRegister">Register</button>
                    </div>
                </form>
            </div>
    </div>
`;

function onload(){
    // const form = document.getElementById("js-loginForm");

    // form
    //     .addEventListener("submit", async function(event){
    //         event.preventDefault();
    //         try{
    //             const result = await login(form.email.value, form.password.value);
    //             if(result){
    //                 setScreen(directoryScreen);
    //             }
    //         }catch(err){
    //             alert("Error: " + err.message);
    //         }
    // });
    document
        .getElementById("js-btnRegister")
        .addEventListener("click", function(){
            setScreen(register);
    });
    document
        .getElementById("js-btnLogin")
        .addEventListener("click", function(){
            event.preventDefault();
            setScreen(directoryScreen);
    });
}

export default {
    content: content,
    onload: onload
};
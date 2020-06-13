import setScreen from "../js/main.js";
import login from "../views/login.js";
import {register} from "../controllers/auth.js";

const content = `
<div id="container1">
    <div class="card1">
        <form id="js-registerForm">
                <div id="header">
                    <label id="lable">My Directory !!!</label>
                </div>
                <div>
                    <input type="text1" name="Name" placeholder="Full name..." id="name">
                    <i class="fas fa-file-signature"></i>
                </div>
                <div>
                    <input type="email1" name="email" placeholder="Email..." id="email">
                    <i class="fas fa-envelope-open-text"></i> 
                </div>
                <div>
                    <input type="password1" name="password" placeholder="Password..." id="password">
                    <i class="fas fa-lock"></i>
                </div>
                <div>
                    <input type="password1" name="ConfirmPassword" placeholder="Confirm Password..." id="retypePassword">
                    <i class="fas fa-lock"></i>
                </div>
                <div>
                    <button type="submit1">Register</button>
                    <button type="button1" id="js-btnBackToLogin">Back to Login!</button>
                </div>
            </div>
        </form>
    </div>
</div>
`;

function onload(){
    const form = document.getElementById("js-registerForm");
    form.addEventListener("submit", async function(event){
        event.preventDefault();
        try{
            const isSuccess = await register(
                form.email.value, 
                form.password.value, 
                form.retypePassword.value
                );
            if(isSuccess) 
            {
                alert("Registered successfully! Check your email to confirm!");
                setScreen(login);
            }
        }catch(err){
            alert("Error: " + err.message);
        }
    });
    document
        .getElementById('js-btnBackToLogin')
        .addEventListener("click", function(){
            alert("Back to login");
            setScreen(login);
    });
}

const registerScreen = {
    content: content,
    onload: onload
};

export default registerScreen;
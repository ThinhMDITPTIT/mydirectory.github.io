import loginScreen from "../views/login.js"
import directoryScreen from "../views/directory.js"

window.onload = init

async function init() {
  let list = await getListProduct()
  console.log('list', list)
}

// console.log('Client JS!')

// // test call api to server
// getListProduct()
//   .then(console.log)
//   .catch(console.error)

function setScreen(screen) {
    document.getElementById('start').innerHTML = screen.content;
    screen.onload();
}

window.onload = function(){
    setScreen(loginScreen)
};

export default setScreen;
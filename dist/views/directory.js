

const content=`
<nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <a class="navbar-brand" href="#">Telephone Directory</a>
      <a class="nav-link" id="js-logout" href="#">Logout</a>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3" id="Add">
          <h1 style="text-align: center; padding-top: 10px;">Add contact</h1>
          <form action=""  class="was-validated" id="form_add">
            <div class="form-group">
              <label for="Name">Name:</label>
                <input type="text" class="form-control" id="Name" placeholder="Enter Name" required>
            </div>
            
            <div class="form-group">
              <label for="Number">Phone number:</label>
                <input type="text" class="form-control" id="Number" placeholder="Enter Phone number" required>
            </div>
            
            <div class="form-group">
              <label for="Address">Address:</label>
                <input type="text" class="form-control" id="Address" placeholder="Enter Address" required>
            </div>

            <div class="form-group">
              <label for="Mail">Mail address:</label>
                <input type="email" class="form-control" id="Mail" placeholder="Enter Mail address" required>
            </div>
            
            <button type="button" class="btn btn-primary btn-block" id="btn_add">Add to list</button>
          </form>
        </div>

        <div class="col-lg-9" id="Direct">
          <h1 style="text-align: center;">Contact</h1>
          <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand">Search Contacts</a>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Enter name/number" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
          <br>
          <div class="container-fluid" style="height: 450px; overflow-y: scroll;" id="js-listContact">
            <div class="card">
              <div class="card-header">
                Thinh Me
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-11">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Name: Thinh Me</li>
                      <li class="list-group-item">Phone number: 07564354</li>
                      <li class="list-group-item">Adress: Viet Nam</li>
                      <li class="list-group-item">Mail adress: mdt@gmail.com</li>
                    </ul>
                  </div>
                  <div class="col-lg-1">
                    <a href=""><i class="fas fa-user-edit fa-2x"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                Baby Shark
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-11">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Name: Baby Shark</li>
                      <li class="list-group-item">Phone number: 07222333</li>
                      <li class="list-group-item">Adress: Viet Nam</li>
                      <li class="list-group-item">Mail adress: bbs@gmail.com</li>
                    </ul>
                  </div>
                  <div class="col-lg-1">
                    <a href=""><i class="fas fa-user-edit fa-2x"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                My Pet
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-11">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Name: My Pet</li>
                      <li class="list-group-item">Phone number: 0726698</li>
                      <li class="list-group-item">Adress: Viet Nam</li>
                      <li class="list-group-item">Mail adress: mp@gmail.com</li>
                    </ul>
                  </div>
                  <div class="col-lg-1">
                    <a href=""><i class="fas fa-user-edit fa-2x"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`

function onload(){
    //Khi bấm log out
    const logOut = document.getElementById("js-logout");
    logOut.addEventListener('click', function (event) {
        event.preventDefault();
        location.reload();
    });
    //Khi bấm Add contact
    const formAddContact = document.getElementById("btn_add");
    formAddContact.addEventListener('click', function (event) {
        event.preventDefault();
        const newContactHtml =`
          <div class="card">
            <div class="card-header">
              New
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-11">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ...</li>
                    <li class="list-group-item">Phone number: ...</li>
                    <li class="list-group-item">Adress: ...</li>
                    <li class="list-group-item">Mail adress: ...@gmail.com</li>
                  </ul>
                </div>
                <div class="col-lg-1">
                  <a href=""><i class="fas fa-user-edit fa-2x"></i></a>
                </div>
              </div>
            </div>
          </div>
        `;
      document
          .getElementById("js-listContact")
          .insertAdjacentHTML("beforeend", newContactHtml);
    });
    $("#btn_add").click(function(){
        var ele_Name = $("#Name");
        var htmlContent = ele_Name.value;
        console.log(htmlContent);
    });
}

export default{
    content: content,
    onload: onload
};
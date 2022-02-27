let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("click", newElement);

const alertDOM = document.querySelector("#alert");

const alertFunction = (className = "success", message) => `
<div class="mr-1">
      <div style="position: absolute; top: 0; right: 0">
        <div
          id="liveToast"
          class="toast ${className} hide"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-delay="4000"
        >
          <div>
            <button
              type="button"
              class="close"
              data-dismiss="toast"
              aria-label="Close"
            >
            </button>
          </div>
          <div class="toast-body">${message}</div>
        </div>
      </div>
    </div>
    `;

function newElement(event) {
  event.preventDefault();
  const TODO = document.querySelector("#task");

  if (TODO.value) {
    addItem(TODO.value);
    TODO.value = "";

    alertDOM.innerHTML = alertFunction("success", "Yeni bir todo oluşturuldu");
  } else {
    alertDOM.innerHTML = alertFunction("error", "Hatalı Veri Girişi Yaptınız");
  }
}

let userListDOM = document.querySelector("#list");

const addItem = (task) => {
  let liDOM = document.createElement("div");
  liDOM.innerHTML = `
    <div class="alert alert-dismissible fade show" style="background-color: rgb(230, 230, 230);" role="alert">
  
    ${task}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>    
  `;
  userListDOM.append(liDOM);
};

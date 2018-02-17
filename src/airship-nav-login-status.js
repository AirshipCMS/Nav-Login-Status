let id_token = localStorage.getItem("id_token");
let elements = document.getElementsByClassName("airship-nav-login-status");
let signInButtonEl = document.createElement("a");
let dropDownContainer = document.createElement("div");
let userEmailEl = document.createElement("span");
let dropDownEl = document.createElement("ul");
let logoutEl = document.createElement("li");

if(elements) {
  if (id_token !== null && window.location.pathname !== '/signin') {
    getProfile((err, xhr) => {
      if (xhr.status === 200) {
        userEmailEl.innerHTML = JSON.parse(xhr.response).auth0_user.email;
        window.airshipToggleStatus();
      }
    });
  }
  Array.prototype.slice.call(elements).forEach((el) => render(el));
}
function render(element) {
  element.appendChild(signInButtonEl);
  signInButtonEl.innerHTML = "Sign In";
  signInButtonEl.href = "/signin";
  signInButtonEl.className = "airship-nav-login-status-signin";
  element.appendChild(dropDownContainer);
  dropDownContainer.appendChild(userEmailEl);
  dropDownContainer.appendChild(dropDownEl);
  dropDownEl.appendChild(logoutEl);
  dropDownEl.className = "airship-nav-login-status-dropdown airship-login-status-hidden";
  dropDownContainer.className = "airship-nav-login-status-logged-in airship-login-status-hidden";
  userEmailEl.className = "airship-nav-login-status-username";
  userEmailEl.addEventListener("click", () => toggleDropdown());
  logoutEl.innerHTML = "Logout";
  logoutEl.className = "airship-nav-login-status-logout";
  logoutEl.addEventListener("click", () => logout());
}

function toggleDropdown() {
  dropDownEl.classList.toggle("airship-login-status-hidden");
}

window.airshipToggleStatus = function toggleStatus(email) {
  if(email) {
    userEmailEl.innerHTML = email;
  }
  signInButtonEl.classList.toggle("airship-login-status-hidden");
  signInButtonEl.classList.toggle("airship-nav-login-status-signin");
  dropDownContainer.classList.toggle("airship-login-status-hidden");
}

function getProfile(done) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", '/api/users/profile');
  xhr.setRequestHeader("Authorization", `bearer ${id_token}`);
  xhr.onload = () => done(null, xhr);
  xhr.onerror = () => done(xhr.xhr);
  xhr.send();
}

function logout() {
  delete localStorage.id_token;
  delete localStorage.account;
  delete localStorage.profile;
  window.airshipToggleStatus();
}
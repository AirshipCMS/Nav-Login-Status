class NavLoginStatus {
  constructor(domain) {
    this.id_token = localStorage.getItem("id_token");
    this.element = document.getElementById("nav-login-status");
    this.domain = domain;

    this.checkContainer();
  }

  render() {
    this.signInButtonEl = document.createElement("a");
    this.element.appendChild(this.signInButtonEl);
    this.signInButtonEl.innerHTML = "Sign In";
    this.signInButtonEl.href = "/signin";
    this.signInButtonEl.className = "nav-login-status-signin";

    this.dropDownEl = document.createElement("ul");
    this.userEmailEl = document.createElement("li");
    let logoutEl = document.createElement("li");

    this.element.appendChild(this.dropDownEl);
    this.dropDownEl.appendChild(this.userEmailEl);
    this.dropDownEl.appendChild(logoutEl);
    this.dropDownEl.className = "nav-login-status-dropdown hidden";

    logoutEl.innerHTML = "Logout";
    logoutEl.className = "nav-login-status-logout";
    logoutEl.addEventListener("click", () => this.logout());

    if (this.id_token !== null) {
      this.getProfile((err, xhr) => {
        if (xhr.status === 200) {
          this.userEmailEl.innerHTML = JSON.parse(xhr.response).email;
          this.toggleElements();
        }
      });
    }
  }

  toggleElements() {
    this.signInButtonEl.classList.toggle("hidden");
    this.dropDownEl.classList.toggle("hidden");
  }

  getProfile(done) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://${this.domain}/api/users/profile`);
    xhr.setRequestHeader("Authorization", `bearer ${this.id_token}`);
    xhr.onload = () => done(null, xhr);
    xhr.onerror = () => done(xhr.xhr);
    xhr.send();
  }

  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('profile')
    localStorage.removeItem('account')
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    this.toggleElements();
  }

  isValidDomain(domain) {
    let valid = false;
    let substring = ".airshipcms.io";
    let substring2 = ".airshipcms-alpha.io";
    if (domain.includes(substring) || domain.includes(substring2)) {
      valid = true;
    }
    return valid;
  }

  checkContainer() {
    if (this.domain === undefined || !this.isValidDomain(this.domain)) {
      throw new Error("valid airship domain required");
    }
    if (this.element === null) {
      throw new Error("Nav Login Status container not found");
    } else {
      this.render();
    }
  }
}

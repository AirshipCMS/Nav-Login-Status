class NavLoginStatus {

  constructor(domain, el = 'nav-login-status') {
    this.id_token = localStorage.getItem('id_token');
    this.element = document.getElementById(el);
    this.domain = domain;
    this.isAuthenticated = false;

    this.checkContainer();
  }

  render() {
    this.signInButton = document.createElement('a')
    this.element.appendChild(this.signInButton)
    this.signInButton.innerHTML = 'Sign In';

    this.dropDown = document.createElement('ul');    
    this.user = document.createElement('li');
    this.logout = document.createElement('li');

    this.element.appendChild(this.dropDown);
    this.dropDown.appendChild(this.user);
    this.dropDown.appendChild(this.logout);
    this.dropDown.className = 'hidden';
    this.logout.innerHTML = 'Logout';

    if(this.id_token !== null) {
      this.getProfile((err, xhr) => {
        if(xhr.status === 200){
          this.user.innerHTML = JSON.parse(xhr.response).email;
          this.showDropdown();
        }
      });
    }
  }

  showDropdown() {
    this.signInButton.className = 'hidden';
    this.dropDown.className = '';
  }

  getProfile(done){
    let authenticated = false;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://${this.domain}/api/users/profile`);
    xhr.setRequestHeader('Authorization', `bearer  ${this.id_token}`);
    xhr.onload = () => done(null, xhr)
    xhr.onerror = () => done(xhr.xhr)
    xhr.send();
  }

  checkContainer() {
    if(this.domain === undefined){
      throw new Error('domain required');
    }
    if(this.element === null){
      throw new Error('Nav Login Status container not found');
    } else {
      this.render();
    }
  }
}
class NavLoginStatus {

  constructor(el = 'nav-login-status') {
    this.id_token = JSON.parse(localStorage.getItem('id_token'));
    this.element = document.getElementById(el);

    this.checkContainer();
  }

  render() {
    this.signInButton = document.createElement('a')
    this.element.appendChild(this.signInButton)
    this.signInButton.innerHTML = 'Sign In';

    let dropDown = document.createElement('ul');    
    let user = document.createElement('li');
    let logout = document.createElement('li');

    this.element.appendChild(dropDown);
    dropDown.appendChild(user);
    dropDown.appendChild(logout);
    dropDown.className = 'hidden';
    user.innerHTML = 'user@email.com';
    logout.innerHTML = 'Logout';
  }

  checkStatus() {
    if(this.id_token !== null) {

    } else {
      this.showSignIn();
    }
  }

  showSignIn() {
    this.signInButton.className = '';
  }

  showDropdown() {

  }

  checkContainer() {
    if(this.element === null){
      throw new Error('Nav Login Stats container not found')
    } else {
      this.render();
    }
  }
}
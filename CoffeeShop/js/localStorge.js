/* This is function for save information of user in local device */
loginInfo =() =>  {
    let myEmail = document.getElementById("email").value;
    localStorage.setItem("myEmail", myEmail);
    let myPassword = document.getElementById("password").value;
    localStorage.setItem("myPassword", myPassword);
    localStorage.getItem('myEmail',"myPassword");
  }
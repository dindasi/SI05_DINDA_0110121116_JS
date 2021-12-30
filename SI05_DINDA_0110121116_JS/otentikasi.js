const login = document.querySelector('#login');
  login.addEventListener('click', function(){
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    
    if(username == "dinda" && password == "12345"){
      alert('benar')
      document.body.innerHTML="<h1>ANDA BERHASIL LOGIN</h1>"
    }else{
      alert('password salah\nmasukkan\nusername: dinda\npassword: 12345')
    }
  })
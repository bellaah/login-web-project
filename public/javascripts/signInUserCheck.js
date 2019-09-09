const isUser = () => {
    const emailInput = document.querySelector("#login_id_input");
    const pwdInput = document.querySelector("#login_pwd_input");
    const errorMsg = document.querySelector("#red_text");

    axios({
        method: 'post',
        url: '/dbCheck/userCheck',
        data: {
          email: emailInput.value,
          password: pwdInput.value
        }
    }).then(res => {
        if(res.data){
            errorMsg.style.display = 'none';
            document.forms[0].submit();
        }else{
            errorMsg.style.display = 'inline';
        }
    }).catch(error => {
        console.log(error);
    });
}

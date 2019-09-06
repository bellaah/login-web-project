const isUser = () => {
    const emailInput = document.querySelector("#login_id_input");
    const pwdInput = document.querySelector("#login_pwd_input");

    axios({
        method: 'post',
        url: '/dbCheck/userCheck',
        data: {
          email: emailInput.value,
          password: pwdInput.value
        }
    }).then(res => {
        console.log(res.data);
        if(res.data){
            document.forms[0].submit();
        }
    }).catch(error => {
        console.log(error);
    });
}

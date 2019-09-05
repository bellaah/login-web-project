const isUser = () => {
    const emailInput = document.querySelector("#login_id_input");
    const pwdInput = document.querySelector("#login_pwd_input");

    axios({
        method: 'post',
        url: '/userCheck',
        data: {
          email: emailInput.value,
          password: pwdInput.value
        }
    }).then(res => {
        console.log(res);
        if(res.data){
            console.log("로그인");
            document.forms[0].submit();
        }else{
            console.log("아이디와 비밀번호를 확인해주세요.");
        }
    }).catch(error => {
        console.log(error);
    });
}

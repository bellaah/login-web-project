const pwdListener = {
    registerEvent() {
        const input = document.querySelector("#pwd_input");
        input.addEventListener("input", () => {
            this.pwdCheck(input.value);
        })
    },
    pwdCheck(pwdInput) {
        const pwdSpan = document.querySelector("#pwd_check");
        if(pwdInput.length < 8 || pwdInput.length > 17){
            pwdSpan.innerHTML = "8자 이상 16자 이하로 입력해주세요.";
            pwdSpan.className = "red_text";
        }else if(!(new RegExp(/[A-Z]/)).test(pwdInput)){
            pwdSpan.innerHTML = "영문 대문자를 최소 1자 이상 포함해주세요.";
            pwdSpan.className = "red_text";
        }else if(!(new RegExp(/[0-9]/)).test(pwdInput)){
            pwdSpan.innerHTML = "숫자를 최소 1자 이상 포함해주세요.";
            pwdSpan.className = "red_text";
        }else if(!(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi)).test(pwdInput)){
            pwdSpan.innerHTML = "특수문자를 최소 1자 이상 포함해주세요.";
            pwdSpan.className = "red_text";
        }else{
            pwdSpan.innerHTML = "안전한 비밀번호입니다.";
            pwdSpan.className = "green_text";
        }
    }
}

const pwdConfirmListener = {
    registerEvent() {
        const input = document.querySelector("#pwd_confirm_input");
        input.addEventListener("input", () => {
            this.pwdConfirm(input.value);
        })
    },
    pwdConfirm(pwdConfirmInput) {
        const pwdConfirmSpan = document.querySelector("#pwd_confirm_check");
        const pwdInput = document.querySelector("#pwd_input");
        if(pwdConfirmInput !== pwdInput.value){
            pwdConfirmSpan.innerHTML = "비밀번호가 일치하지 않습니다.";
            pwdConfirmSpan.className = "red_text";
        }else{
            pwdConfirmSpan.innerHTML = "비밀번호가 일치합니다.";
            pwdConfirmSpan.className = "green_text";
        }
    }
}
  
pwdListener.registerEvent();
pwdConfirmListener.registerEvent();

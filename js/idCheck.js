const idListener = {
    registerEvent() {
        const input = document.querySelector("#id_input");
        input.addEventListener("input", () => {
            this.idCheck(input.value);
        })
    },
    idCheck(idInput) {
        const idSpan = document.querySelector("#id_check");
        if(!(new RegExp(/^[A-Za-z0-9-_]{5,20}$/)).test(idInput)){
            idSpan.innerHTML = "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.";
            idSpan.className = "red_text";
        }else if(false){
            idSpan.innerHTML = "이미 사용중인 아이디입니다.";
        }else{
            idSpan.innerHTML = "사용 가능한 아이디입니다.";
            idSpan.className = "green_text";
        }
    }
}
  
idListener.registerEvent();


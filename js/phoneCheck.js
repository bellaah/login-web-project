const phoneListener = {
    registerEvent() {
        const input = document.querySelector("#phone_input");
        input.addEventListener("input", () => {
            this.phoneCheck(input.value);
        })
    },
    phoneCheck(phoneInput) {
        const phoneSpan = document.querySelector("#phone_check");
        let regExp = /^010\d{3,4}\d{4}$/;
        if(!regExp.test(phoneInput)){
            phoneSpan.innerHTML = "형식에 맞지 않는 번호입니다.";
        }else{
            phoneSpan.innerHTML = "";
        }
    }
}
  
phoneListener.registerEvent();


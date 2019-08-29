const emailListener = {
    registerEvent() {
        const input = document.querySelector("#email_input");
        input.addEventListener("input", () => {
            this.emailCheck(input.value);
        })
    },
    emailCheck(emailInput) {
        const emailSpan = document.querySelector("#email_check");
        let regExp=/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;
        if(!regExp.test(emailInput)){
            emailSpan.innerHTML = "이메일 주소를 다시 확인해주세요.";
        }else{
            emailSpan.innerHTML = "";
        }
    }
}
  
emailListener.registerEvent();


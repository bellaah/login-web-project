const birthListener = {
    registerEvent() {
        const yearInput = document.querySelector("#year_input");
        const monthInput = document.querySelector("#month_input");
        const dayInput = document.querySelector("#day_input");
        yearInput.addEventListener("input", () => {
            this.yearCheck(yearInput);
        })
        monthInput.addEventListener("input", () => {
            this.dayCheck(dayInput);
        })
        dayInput.addEventListener("input", () => {
            this.dayCheck(dayInput);
        })
    },
    yearCheck(yearInput) {
        const birthSpan = document.querySelector("#birth_check");
        let date = new Date();
        if(new RegExp(/[^0-9]/g).test(yearInput.value)){
            birthSpan.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
        }else if(yearInput.value.length >= 4){
            if(yearInput.value < 1921){
                birthSpan.innerHTML = "99세 이하만 가입 가능합니다.";
            }else if(yearInput.value > 2005){
                birthSpan.innerHTML = "만 14세 이상만 가입 가능합니다.";
            }
        }else{
            birthSpan.innerHTML = "";
        }
    },
    dayCheck(dayInput) {
        const birthSpan = document.querySelector("#birth_check");
        let calander = [31,29,31,30,31,30,31,31,30,31,30,31];
        const monthInput = document.querySelector("#month_input");
        if(monthInput.value === "월"){
            return;
        }else if(calander[monthInput.value-1] < dayInput.value){
            birthSpan.innerHTML = "태어난 날짜를 다시 확인해주세요.";
        }else{
            birthSpan.innerHTML = "";
        }
    }
}
  
birthListener.registerEvent();


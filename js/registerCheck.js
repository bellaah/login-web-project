const idChecker = {
    idCheck(idInput) {
        const idSpan = document.querySelector("#id_check");
        const idRegExp = /^[A-Za-z0-9-_]{5,20}$/;

        if(!idRegExp.test(idInput.value)){
            idSpan.className = "red_text";
            idSpan.innerHTML = "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.";
        }else if(false){
            idSpan.className = "red_text";
            idSpan.innerHTML = "이미 사용중인 아이디입니다.";
        }else{
            idSpan.className = "green_text";
            idSpan.innerHTML = "사용 가능한 아이디입니다.";
        }
    }
}

const pwdChecker= {
    registerEvent() {
        const pwdInput = document.querySelector("#pwd_input");
        const pwdConfirmInput = document.querySelector("#pwd_confirm_input");
        pwdInput.addEventListener("input", () => {
            this.pwdCheck(pwdInput);
            if(pwdConfirmInput.value !== ''){
                pwdConfirmListener.pwdConfirmCheck(pwdConfirmInput.value);
            }
        })
        pwdConfirmInput.addEventListener("input", () => {
            this.pwdConfirmCheck(pwdConfirmInput,pwdInput);
        })
    },
    pwdCheck(pwdInput) {
        const pwdSpan = document.querySelector("#pwd_check");
        pwdSpan.className = "red_text";
        if(pwdInput.value.length < 8 || pwdInput.value.length > 17){
            pwdSpan.innerHTML = "8자 이상 16자 이하로 입력해주세요.";
        }else if(!(new RegExp(/[A-Z]/)).test(pwdInput.value)){
            pwdSpan.innerHTML = "영문 대문자를 최소 1자 이상 포함해주세요.";
        }else if(!(new RegExp(/[0-9]/)).test(pwdInput.value)){
            pwdSpan.innerHTML = "숫자를 최소 1자 이상 포함해주세요.";
        }else if(!(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi)).test(pwdInput.value)){
            pwdSpan.innerHTML = "특수문자를 최소 1자 이상 포함해주세요.";
        }else{
            pwdSpan.className = "green_text";
            pwdSpan.innerHTML = "안전한 비밀번호입니다.";
        }
    },
    pwdConfirmCheck(pwdConfirmInput,pwdInput) {
        const pwdConfirmSpan = document.querySelector("#pwd_confirm_check");
        if(pwdConfirmInput.value !== pwdInput.value){
            pwdConfirmSpan.innerHTML = "비밀번호가 일치하지 않습니다.";
            pwdConfirmSpan.className = "red_text";
        }else{
            pwdConfirmSpan.innerHTML = "비밀번호가 일치합니다.";
            pwdConfirmSpan.className = "green_text";
        }
    }
}

const nameChecker = {
    nameCheck(nameInput) {
        const nameSpan = document.querySelector("#name_check");
        if(nameInput.value == ""){
            nameSpan.className = "red_text";
        }else{
            nameSpan.className = "green_text";
        }
    }
}

const genderChecker = {
    genderCheck(genderInput) {
        const genderSpan = document.querySelector("#gender_check");
        if(genderInput.value == "성별"){
            genderSpan.className = "red_text";
        }else{
            genderSpan.className = "green_text";
        }
    }
}

const birthChecker = {
    registerEvent() {
        const monthInput = document.querySelector("#month_input");
        const dayInput = document.querySelector("#day_input");
        const yearInput = document.querySelector("#year_input");

        this.checkAllListener(monthInput,dayInput,yearInput);
        this.checkAllListener(dayInput,dayInput,yearInput);
        this.checkAllListener(yearInput,dayInput,yearInput);
    },
    yearCheck(yearInput) {
        let bool = false;
        const birthSpan = document.querySelector("#birth_check");
        let date = new Date();
        console.log("yearCheck");
        if(yearInput === ""){
            return false;
        }else if(new RegExp(/[^0-9]/g).test(yearInput.value) || yearInput.value.length < 4){
            birthSpan.className = "red_text";
            birthSpan.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
        }else{
            if(date.getFullYear()-yearInput.value > 98){
                birthSpan.className = "red_text";
                birthSpan.innerHTML = "99세 이하만 가입 가능합니다.";
            }else if(date.getFullYear()-yearInput.value < 14){
                birthSpan.className = "red_text";
                birthSpan.innerHTML = "만 14세 이상만 가입 가능합니다.";
            }else{
                bool = true;
            }
        }
        return bool;
    },
    dayCheck(dayInput) {
        let bool = false;
        const birthSpan = document.querySelector("#birth_check");
        let calander = [31,29,31,30,31,30,31,31,30,31,30,31];
        const monthInput = document.querySelector("#month_input");
        console.log("dayCheck");
        if(dayInput === ""){
            return false;
        }else if(new RegExp(/[^0-9]/g).test(dayInput.value)){
            birthSpan.innerHTML = "숫자만 입력가능합니다.";
        }
        if(monthInput.value === "월"){
            birthSpan.className = "red_text";
        }else if(calander[monthInput.value-1] < dayInput.value){
            birthSpan.className = "red_text";
            birthSpan.innerHTML = "태어난 날짜를 다시 확인해주세요.";
        }else{
            bool = true;
        }
        return bool;
    },
    checkAllListener(input,dayInput,yearInput){
        const birthSpan = document.querySelector("#birth_check");
        input.addEventListener("input", () => {
            let dayValue =this.dayCheck(dayInput);
            let yearValue = this.yearCheck(yearInput);
            if(dayValue && yearValue){
                birthSpan.className = "green_text";
                birthSpan.innerHTML = "";
            }
        })
    }
}

const emailChecker = {
    emailCheck(emailInput) {
        const emailSpan = document.querySelector("#email_check");
        let emailRegExp = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;
        if(!emailRegExp.test(emailInput.value)){
            emailSpan.className = "red_text";
            emailSpan.innerHTML = "이메일 주소를 다시 확인해주세요.";
        }else{
            emailSpan.innerHTML = "";
            emailSpan.className = "green_text";
        }
    }
}

const phoneChecker = {
    phoneCheck(phoneInput) {
        const phoneSpan = document.querySelector("#phone_check");
        let numberRegExp = /^010\d{3,4}\d{4}$/;
        if(!numberRegExp.test(phoneInput.value)){
            phoneSpan.className = "green_text";
            phoneSpan.innerHTML = "형식에 맞지 않는 번호입니다.";
        }else{
            phoneSpan.className = "green_text";
            phoneSpan.innerHTML = "";
        }
    }
}

const interestChecker = {
    registerEvent() {
        const input = document.querySelector("#interest_input");
        input.addEventListener("keydown", (event) =>{
            if(input.selectionStart === 0){
                this.back(event);
            }
        })
    },
    interestCheck(interestInput) {
        const interestSpan = document.querySelector("#interest_check");
        const tagList = document.querySelector(".tag_list");

        if(interestInput.value[interestInput.value.length-1] === ","){
            if(interestInput.value.length > 1){
                let tag = interestInput.value.substring(0,interestInput.value.length-1);
                tagList.insertAdjacentHTML('beforeend',`<div class="tag"><span>${tag}</span><button class="tag_btn" onclick="RemoveItself(this)">X</button></div>`);
            }
            interestInput.value = "";
        }
        
        if(tagList.childElementCount < 3){
            interestSpan.className = "red_text";
            interestSpan.innerHTML = "3개 이상의 관심사를 입력하세요.";
        }else{
            interestSpan.className = "green_text";
            interestSpan.innerHTML = "";
        }

    },
    back(event){
        const interestInput = document.querySelector("#interest_input");
        if (event.keyCode == 8 || event.keyCode == 64) {
            const tagList = document.querySelector(".tag_list");
            const lastTagValue = tagList.lastChild.firstChild.innerHTML;
            tagList.removeChild(tagList.lastChild);
            interestInput.value = lastTagValue + interestInput.value + " ";
        }
    }
}

const termsChecker = {
    registerEvent(){
        const termsCheckbox = document.querySelector("#terms_input");
        termsCheckbox.addEventListener("change", (event) =>{
            this.termsCheck(termsCheckbox);
        })
    },
    termsCheck(termsCheckbox){
        const termsSpan = document.querySelector("#terms_check");
        if(termsCheckbox.checked){
            termsSpan.className = "green_text"; 
        }else{
            termsSpan.className = "red_text"; 
        }
    }
}

const registerEventListener = () => {
    //selectorList = 배열 형 배열, 배열에는 id 혹은 class의 이름과 호출해야하는 함수를 담는다.
    const selectorList = [["#id_input","idChecker.idCheck"],
                          ["#name_input","nameChecker.nameCheck"],
                          ["#gender_input","genderChecker.genderCheck"],
                          ["#email_input","emailChecker.emailCheck"],
                          ["#phone_input","phoneChecker.phoneCheck"],
                          ["#interest_input","interestChecker.interestCheck"]];

    selectorList.forEach((list) => {
        const selector = document.querySelector(list[0]);
        selector.addEventListener("input", () => {
            eval(list[1])(selector);
        })
    })
    interestChecker.registerEvent();
    birthChecker.registerEvent();
    pwdChecker.registerEvent();
    termsChecker.registerEvent();
}

registerEventListener();
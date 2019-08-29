const interestListener = {
    registerEvent() {
        const input = document.querySelector("#interest_input");
        input.addEventListener("input", () => {
            this.interestCheck(input);
        })
        document.addEventListener("keydown", (e) =>{
            this.back();
        })
    },
    interestCheck(interestInput) {
        const interestSpan = document.querySelector("#interest_check");
        const tagList = document.querySelector(".tag_list");

        if(interestInput.value[interestInput.value.length-1] === ","){
            let tag = interestInput.value.substring(0,interestInput.value.length-1);
            tagList.insertAdjacentHTML('beforeend',`<p class="tag"><b>${tag}</b><button class="tag_btn">X</button></p>`);
            interestInput.value = "";
        }
        
        if(tagList.childElementCount < 3){
            interestSpan.innerHTML = "3개 이상의 관심사를 입력하세요.";
        }else{
            interestSpan.innerHTML = "";
        }

    },
    back(e){
        
    }
}

interestListener.registerEvent();
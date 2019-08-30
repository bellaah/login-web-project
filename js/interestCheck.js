const interestListener = {
    registerEvent() {
        const input = document.querySelector("#interest_input");
        input.addEventListener("input", () => {
            this.interestCheck(input);
        })
        input.addEventListener("keydown", (event) =>{
            if(input.value === "" || input.selectionStart === 0){
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
                tagList.insertAdjacentHTML('beforeend',`<span class="tag"><span>${tag}</span><button class="tag_btn" onclick="RemoveItself(this)">X</button></span>`);
            }
            interestInput.value = "";
        }
        
        if(tagList.childElementCount < 3){
            interestSpan.innerHTML = "3개 이상의 관심사를 입력하세요.";
        }else{
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

interestListener.registerEvent();
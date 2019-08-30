const layer =  document.querySelector("#pop_layer");
const backgroundDiv =  document.querySelector("#backgound_div");

const popLayer = () => {
    layer.style.display = 'flex';
    layer.style.left = (window.innerWidth-layer.clientWidth)/2+"px";
    layer.style.top = (window.innerHeight-layer.clientHeight)/2+"px";
    backgroundDiv.style.width = window.innerWidth+"px";
    backgroundDiv.style.height = window.innerHeight+"px";
}

const closeLayer = () => {
    document.querySelector("#pop_layer").style.display='none';
}

const focusIn = () => {
    document.querySelector(".tag_div").style.borderColor='#2cb400';
}

const focusOut = () => {
    document.querySelector(".tag_div").style.borderColor='#dadada';
}

const agreeLayer = () => {
    const checkBtn =  document.querySelector("#terms_check");
    checkBtn.disabled = false;
    checkBtn.checked = true;
    layer.style.display = 'none';
    backgroundDiv .style.display = 'none';
}

const RemoveItself = (elem) => {
    let item = elem.parentNode;
    let parent = item.parentNode;
    parent.removeChild(item);
}

const scrolled = (obj) => {
    const agreeBtn =  document.querySelector("#agree_btn");
    if(obj.offsetHeight + obj.scrollTop >= obj.scrollHeight){
        agreeBtn.disabled = false;
    }
}


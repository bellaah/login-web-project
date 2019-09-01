const layer =  document.querySelector("#pop_layer");
const backgroundDiv =  document.querySelector("#backgound_div");
const tagDiv = document.querySelector(".tag_div");

const popLayer = () => {
    layer.style.display = 'flex';
    layer.style.left = (window.innerWidth-layer.clientWidth)/2+"px";
    layer.style.top = (window.innerHeight-layer.clientHeight)/2+"px";
    backgroundDiv.style.width = window.innerWidth+"px";
    backgroundDiv.style.height = window.innerHeight+"px";
}

const closeLayer = () => {
    layer.style.display='none';
}

const focusIn = () => {
    tagDiv.style.borderColor='#2cb400';
}

const focusOut = () => {
    tagDiv.style.borderColor='#dadada';
}

const agreeLayer = () => {
    const checkBtn =  document.querySelector("#terms_check");
    checkBtn.disabled = false;
    checkBtn.checked = true;
    layer.style.display = 'none';
    backgroundDiv.style.display = 'none';
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

const resetTag = () => {
    const redSpan = document.querySelectorAll(".red_text");
    const greenSpan = document.querySelectorAll(".green_text");
    const tagList = document.querySelector(".tag_list");

    while (tagList.hasChildNodes()){
        tagList.removeChild(tagList.firstChild); 
    } 

    redSpan.forEach(elem => {
        elem.innerHTML = "";
    });
    greenSpan.forEach(elem => {
        elem.innerHTML = "";
    });

}

const moveMain = () =>{
    console.log("$");
    const registerDiv = document.querySelectorAll("#register");
    const mainDiv = document.querySelectorAll("#main");

    registerDiv[0].style.display = 'none';
    mainDiv[0].style.display = 'flex';
}


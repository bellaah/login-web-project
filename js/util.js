const popLayer = () => {
    const layer =  document.querySelector("#pop_layer");
    const backgroundDiv =  document.querySelector("#backgound_div");
    layer.style.display = 'flex';
    layer.style.left = (window.innerWidth-layer.clientWidth)/2+"px";
    layer.style.top = (window.innerHeight-layer.clientHeight)/2+"px";
    backgroundDiv.style.width = window.innerWidth+"px";
    backgroundDiv.style.height = window.innerHeight+"px";
}

const closeLayer = () => {
    document.querySelector("#search_layer").style.display='none';
}

const focusIn = () => {
    document.querySelector(".tag_div").style.borderColor='#2cb400';
}

const focusOut = () => {
    document.querySelector(".tag_div").style.borderColor='#dadada';
}

const RemoveItself = (elem) => {
    let item = elem.parentNode;
    let parent = item.parentNode;
    parent.removeChild(item);
}


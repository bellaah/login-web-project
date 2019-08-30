const popLayer = () => {
    document.querySelector("#search_layer").style.display='inline';
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


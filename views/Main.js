const mainHTML = () => {
    return `<div id="main">
    <header class="header">
        <h2 id="register_text">Main</h2>
    </header>
    <div id="main_div">
        <span id="main_text"> Hello! ${myStorage.getItem('name')}</span>
    </div>
</div>`;
}
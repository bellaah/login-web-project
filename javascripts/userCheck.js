const adapter = new FileSync('./db.json')
const db = low(adapter)

const isUser = () => {
    const idInput = document.querySelector("#login_id_input");
    const pwdInput = document.querySelector("#login_pwd_input");
    let userList = db.get('users');
    userList.forEach(elem => {
        if(idInput.value === elem.id){
            console.log("!!");
        }
    });
}
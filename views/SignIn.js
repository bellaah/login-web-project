const signinHTML = () => {
    return `<div id="login">
      <form class="form-signin" action="javascript:loginClick()" method="post">
        <h2 id="login_head">로그인</h2>
        <label for="inputEmail" class="sr-only">아이디</label>
        <input type="email" id="login_id_input" class="form-control" placeholder="아이디" required>
        <label for="inputPassword" class="sr-only">비밀번호</label>
        <input type="password" id="login_pwd_input" class="form-control" placeholder="비밀번호" required>
        <div id="login_btn_div">
            <button class="btn btn-lg btn-success btn-block" type="submit">로그인</button>
            <button class="btn btn-lg btn-success btn-block" type="button" onclick="moveRegister()">회원가입</button>
        </div>
      </form>
</div>`;
}
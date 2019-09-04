const signupHTML = () => {
    return ` <div id="register">
    <header class="header">
        <h2 id="register_text">회원가입</h2>
    </header>

    <form class="register_form" method="post" action="">
        <div class="text_input">
            <label for="id_input">아이디<br/></label>
            <input type="text" name="id" id="id_input">
            <span id="id_check" class="red_text"></span>
        </div>

        <div class="text_input">
            <label for="pwd_input">비밀번호<br/></label>
            <input type="password" name="password" id="pwd_input">
            <span id="pwd_check" class="red_text"></span>
        </div>

        <div class="text_input">
            <label for="pwd_confirm_Input">비밀번호 재확인<br/></label>
            <input type="password" name="pwd_confirm" id="pwd_confirm_input">
            <span id="pwd_confirm_check" class="red_text"></span>
        </div>

        <div class="text_input">
            <label for="name_input">이름<br/></label>
            <input type="text" name="name" id="name_input">
            <span id="name_check" class="red_text"></span>
        </div>

        <div class="birthday">
            <label for="birth_input">생년월일<br/></label>
            <div class="birth_wrap">
                <input type="text" name="year" id="year_input" placeholder="년(4자)">
                <select name="month" id="month_input">
                    <option>월</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <input type="text" name="day" id="day_input" placeholder="일">
            </div>
            <span id="birth_check" class="red_text"></span>
        </div>

        <div class="text_input">
            <label for="gender_input">성별<br/></label>
            <select name="gender" id="gender_input">
                <option>성별</option>
                <option value="male">남자</option>
                <option value="female">여자</option>
            </select>
            <span id="gender_check" class="red_text"></span>
        </div>

        <div class="text_input">
            <label for="email_input">이메일<br/></label>
            <input type="email" name="email" id="email_input">
            <span id="email_check" class="red_text"></span>
        </div>

        <div class="text_input">
            <label for="phone_input">휴대전화<br/></label>
            <input type="text" name="phone" id="phone_input" placeholder="- 없이 입력해주세요. 예)01012341234">
            <span id="phone_check" class="red_text"></span>
        </div>

        <div class="text_input">
            <label for="interest_input">관심사<br/></label>
            <div class="tag_div" onfocusin="focusIn()" onfocusout="focusOut()">
                <div class="tag_list"></div>
                <input type="text" name="interest" id="interest_input">
            </div>
            <span id="interest_check" class="red_text"></span>
        </div>

        <div class="terms">
            <a href='javascript:termsLayer()'>약관에 동의합니다. </a>
            <input type="checkbox" name="terms_input" id="terms_input" disabled="true">
            <span id="terms_check" class="red_text"></span>
        </div>

        <div class="pop_layer">
            <button type="button" onclick="closeLayer()" id="layer_exit_btn"><b id="layer_exit_b">X</b></button>
            <b id="layer_head"></b>
            <pre id="layer_text" onscroll="scrolled(this)"></pre>
            <div id="layer_btn">
            </div>
        </div>

        <div id="backgound_div"></div>
        <div class="green_btn">
            <input type="button" onclick="resetLayer()" value="초기화"/>
            <input type="button" value="가입하기" onclick="checkAll()"/>
        </div>
    </form>
    <footer id="register_footer">
        <div>
            <p>© heessun</p>
        </div>
    </footer>
</div>
`;
} 
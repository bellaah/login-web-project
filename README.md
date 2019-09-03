# 멤버십 WEEK1 - 로그인과 회원가입 저장소

### login.html
- SPA로 동작하기 위해서 <div>태그를 register,login,main으로 나눠 register를 보여줄 땐 register.display만 'flex'로 지정하고 login과 main의 display는 'none'으로 바꾸도록 js에서 구현하였다.
- #login은 bootstrap을 사용하였다.

### registerCheck.js
- input마다 addEventListener를 만들고 각각의 input에서 요구하는 조건에 맞게 작성하였는지 input이 발생할 때마다 확인하여 input 태그 아래에 error 혹은 pass 메세지를 보여준다.

### layer.js
- 약관 동의, 초기화, 가입하기 버튼을 누르면 나오는 layer를 설정한다.
- 약관 동의를 누르면 termsLayer()가 호출되고 layer의 style과 내용을 바꾼다.
- 초기화 버튼을 누르면 resetLayer()가 호출된다.
- 가입하기 버튼을 누르면 registerLayer()가 호출된다.

### util.js
- 여러가지 util 함수를 구현하였다.
- scroll되거나 focus될 때 style을 변경하는 함수를 포함한다.
- 페이지를 이동할 때 moveMain(),moveRegister(),moveLogin()을 정의하여 div의 style들을 바꿔준다.
- removeChildAll(),RemoveItself()등 html의 element를 삭제하는 기능을 함수로 만들었다.
- 초기화 버튼이 click되었을 때 처리해야 할 기능을 customReset(),resetTag(),resetSpan() 함수로 나눠 구현하였다.
- 가입하기 버튼이 click되었을 때 처리해야 할 기능을 checkAll(),checkInputAll()로 구현하였다.
- 로그인 버튼이 click되었을 때 처리할 기능을 loginClick()으로 구현하였다.
- localStorageSetter()를 통해 사용자의 name을 저장하여 main에서 로그인된 것 처럼 사용자의 name을 보여준다.


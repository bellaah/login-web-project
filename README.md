# 멤버십 WEEK1 - 로그인과 회원가입 저장소 (day2)

### idCheck.js
- #id_input에 input이 발생하면 listener가 idCheck라는 메서드를 호출한다.
- #id_check를 가져온다.
- #id_input의 value를 대,소문자,숫자,-,_ 이 외의 문자가 있는지 정규식으로 확인한다.
- 확인하여 다른 문자가 있다면 className을 "red_text"로 바꿔서 css파일에서 res_text라는 class는 color를 red로 설정해주었다.
- 또한, #id_input의 아래에 있는 span태그의 innerHTML을 "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다."로 바꿔준다.
- input의 value가 대,소문자,숫자,_,-만 포함한다면 innerHTML을 사용가능하다는 문자열로 바꿔준다.

### pwdCheck.js
- 위와 같은 방법으로 #pwd_input을 가져와서 정규식을 통해 원하는 조합인지 찾아본다.
- 조합이 다를 때마다 그에 맞는 안내문을 보여준다.
- 맞는 조합이라면 초록색의 문자열을 보여준다.
- 또한, "비밀번호 재확인", "비밀번호" label의 input이 발생할 때마다 "비밀번호","비밀번호 재확인"의 value가 같은지 확인한다.

### emailCheck.js
- 정규식을 사용해 이메일 주소의 맞는 조합인지 확인하고 아니라면 emile input의 아래 span의 innerHTML을 맞는 안내문으로 바꿔준다.

### pheneCheck.js
- 정규식을 사용해 010으로 시작하고 10-11자리의 input인지 확인하고 아니라면 phone input의 아래 span의 innerHTML을 맞는 안내문으로 바꿔준다.

### birthdayCheck.js
- 2개의 input(year,day)와 select(month)를 querySelector로 가져온다.
- year input이 발생하면 yearCheck라는 메서드를 호출하지만 month,day input이 발생하면 모두 dayCheck를 호출한다.
- month가 default값이 아닌 다른 값이 선택되었을 때, day의 값이 어떤 숫자가 있다면 그 달에 해당하는 범위에 들어가는지 확인한다.
- 마찬가지로 day input이 발생하면 month의 값을 가져와 calander라는 배열의 값으로 월마다 유효한 날짜의 범위를 체크한다.

### interestCheck.js
- 관심사를 입력하면 interestCheck 메서드가 호출된다.
- 그 메서드에서는 ,가 들어오는지 확인하여 ,가 들어오면 하나의 tag로 분리한다.
- 그 분리는 tagList라는 div에 <p>태그로 ,전의 문자열을 넣는 것이다.

### util.js
- 팝업 레이어의 기능을 완성시킬 예정이다.
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인</title>
<script type="text/javascript">
function checkFun() {
	if (document.loginForm.id.value == "" || document.loginForm.pw.value == ""){
		alert("아이디 비밀번호는 필수 입력사항입니다.")
		return false;
	}else{
		
	}
	
}

</script>

</head>
<body>
	<h2>아이디와 비밀번호를 입력하세요.</h2>
	<form action="adminLoginOk.jsp" name ="loginForm" onsubmit="return checkFun()">
		ID : <input type="text" name="id"><br><br>	
		PW : <input type="password" name="pw"><br><br>
		<input type="submit" value="로그인">
		<input type="reset" value="취소">

	</form>
</body>
</html>
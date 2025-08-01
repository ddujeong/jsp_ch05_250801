<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>점수를 입력</title>
<script type="text/javascript">
function checkFun() {
	if(document.score.kor.value == ""||document.score.eng.value == ""||document.score.math.value == "" ) {
		alert("세 과목의 점수를 모두 입력해주세요.");
	return false;
	} else{
		alert("국어 : " +document.score.kor.value + "영어 : " + document.score.math.value + "수학 : " +document.score.math.value)
	} 
}

</script>

</head>
<body>
	<h2>과목의 점수를 입력하세요.</h2>
	<form action="scoreOk.jsp" name = "score" onsubmit="return checkFun()">
		국어 : <input type="text" name="kor"><br><br>
		영어 : <input type="text" name="eng"><br><br>
		수학 : <input type="text" name="math"><br><br>
		<input type="submit" value="제출" >
		<input type="reset" value="취소">
	</form>
</body>
</html>
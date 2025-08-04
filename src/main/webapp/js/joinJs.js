/**
 * 
 */
function joinCheck() {
	
	var f = document.joinForm;
	
	var cname = document.joinForm.mname.value;
	var cemail = document.joinForm.memail.value;
	var cage = document.joinForm.mage.value;
	
	var regex1 = /^[가-힣]+$/;
	var regex2 = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
	var regex3 = /^[0-9]+$/;
	var regex4 = /^[a-zA-Z]+$/;
	
	
	if (document.joinForm.mid.value == "") {
			alert ("아이디는 필수 입력 사항입니다.");
			document.joinForm.mid.focus();
			return;
	}if (document.joinForm.mid.value.length < 4 ||  document.joinForm.mid.value.length > 15) {
			alert ("아이디는 4자 이상 15자 이하로 입력 하세요.");
			document.joinForm.mid.focus();
			return;
	}if (document.joinForm.mpw.value == "") {
			alert ("비밀번호는 필수 입력 사항입니다.");
			document.joinForm.mpw.focus();
			return;
	}if (document.joinForm.mpw.value.length < 4 || document.joinForm.mpw.value.length > 15 ) {
			alert ("비밀번호는 4자 이상 15자 이하로 입력 하세요.");
			document.joinForm.mpw.focus();
			return;
	}if (document.joinForm.mpwcheck.value == ""){
			alert("비밀번호 확인은 필수 입력 사항입니다.")
			document.joinForm.mpwcheck.focus();
			return;
	}if (document.joinForm.mpw.value != document.joinForm.mpwcheck.value){
			alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.")
			document.joinForm.mpwcheck.focus();
			return;
	}if (document.joinForm.mname.value == "") {
			alert ("이름은 필수 입력 사항입니다.");
			document.joinForm.mname.focus();
			return;
	}if(!regex1.test(cname)){
			alert("이름은 한글로만 작성 가능합니다.")
			document.joinForm.mname.focus();
			return;
	}if (document.joinForm.memail.value == "") {
			alert ("이메일은 필수 입력 사항입니다.");
			document.joinForm.memail.focus();
			return;
	}if(regex2.test(cemail)){
			alert("이메일은 한글로 입력 할 수 없습니다.")
			document.joinForm.memail.focus();
			return;
	}if(!regex3.test(cage)){
			alert("나이에는 숫자만 입력할 수 있습니다.")
			document.joinForm.mage.focus();
			return;
	}
document.joinForm.submit();

}
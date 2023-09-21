//1.이미지를 동적으로 200개 생성
//2.이미지 소스가 로딩이 될때가 에러가 발생하는 시스템 이벤트설정
//3.브라우저에서 마우스 움직일떄 마우스좌표값구하기
//4.특정 수치값을 백분율화 하는 로직처리
//5.이미지소스가 모두 로딩되는 상태를 백분율로 변환

//img노드생성
//src속성생성
//src속성노드에 value = img/pic0~100.jpg
//위의 100번 반복돌리면서
//append로 section프레임안에 반복추가

//백분율 구하는 공식
// 현재수치 / 전체수칙값 * 100 (백분율)
// 현재수치 / 전체수칙값 * 200 (이백분율)

const section = document.querySelector('section');
const num = 200;
const imgs = createImgs(section, 200);

//activation 함수 추가 :인수로 유사배열,활성화 순번받음
//순번에 대한요소만 보임처리

window.addEventListener('mousemove', (e) => {
	const percent = getPercent(e, num);
	activation(imgs, percent);
});

function getPercent(e, num) {
	const curPos = e.pageX;
	const wid = window.innerWidth;
	return parseInt((curPos / wid) * num);
	//parseInt(숫자) : 실수에서 소수점 아래를 버려서 정수반환
	//parseFLoat(숫자) : 소수점 아래까지 있는 실수 반환
}

//인수로 갯수를 받아서 동적으로 img 생성해 주는 함수
function createImgs(target, num) {
	for (let el = 0; el < num; el++) {
		const img = document.createElement('img');
		const src = document.createAttribute('src');
		src.value = `img/pic${el}.jpg`;
		img.setAttributeNode(src);
		target.append(img);
	}
	return target.querySelectorAll('img');
}

//인수로 그룹유사배열, 활성화요소 받아서
//해당 순번의 요소만 활성화처리
function activation(arr, index) {
	arr.forEach((el) => (el.style.display = 'none'));
	arr.forEach((el) => (arr[index].style.display = 'block'));
}

//1.이미지를 동적으로 200개 생성
//2.이미지 소스가 로딩이 될때가 에러가 발생하는 시스템 이벤트설정
//3.브라우저에서 마우스 움직일떄 마우스좌표값구하기
//4.특정 수치값을 백분율화 하는 로직처리
//5.이미지소스가 모두 로딩되는 상태를 백분율로 변환

const section = document.querySelector('section');
//img노드생성
//src속성생성
//src속성노드에 value = img/pic0~100.jpg
for (let el = 0; el <= 200; el++) {
	const img = document.createElement('img');
	const src = document.createAttribute('src');
	src.value = `img/pic${el}.jpg`;
	img.setAttributeNode(src);
	section.append(img);
}
//위의 100번 반복돌리면서
//append로 이미지 요소 반복추가

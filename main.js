const section = document.querySelector('section');
const num = 200;
const aside = document.querySelector('aside');
const imgs = createImgs(section, 200);
const loadingNum = document.querySelector('aside p span');
const delay = convertspeed(aside);
window.addEventListener('mousemove', (e) => {
	const percent = getPercent(e, num);
	activation(imgs, percent);
});

function getPercent(e, num) {
	const curPos = e.pageX;
	const wid = window.innerWidth;
	return parseInt((curPos / wid) * num);
}

function createImgs(target, num) {
	for (let el = 0; el < num; el++) {
		const img = document.createElement('img');
		const src = document.createAttribute('src');
		src.value = `img/pic${el}.jpg`;
		img.setAttributeNode(src);
		target.append(img);
	}
	const imgs = target.querySelectorAll('img');
	let count = 0;
	imgs.forEach((img) => {
		//만약 이미지요소의 소스이미지에 문제 발생시 대체 이미지처리
		img.onerror = () => {
			img.setAttribute('src', 'img/thumb1.jpg');
		};
		img.onload = () => {
			count++;
			loadingNum.innerText = parseInt(count / 2);
			if (count === num) {
				console.log('모든 소스이미지 로딩완료');
				aside.classList.add('off');
				setTimeout(() => {
					aside.remove();
				}, delay);
			}
		};
	});
	return imgs;
}

function activation(arr, index) {
	arr.forEach((el) => (el.style.display = 'none'));
	arr[index].style.display = 'block';
}
//인수로 Transition-duration값을 구해야하는 DOM요소를 전달받음

function convertspeed(el) {
	//해당요소의 Transition-duration값을 재연산해서 가져온다음
	//숫자로 바꾸고 *1000 해서 밀리세컨트형대로 반환
	const result = getComputedStyle(el).transitionDuration;
	return parseFloat(result) * 1000;
}

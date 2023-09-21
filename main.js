const section = document.querySelector('section');
const num = 200;
const imgs = createImgs(section, 200);
const loadingNum = document.querySelector('aside p span');

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
		//해당 돔에 수반되는 소스이미지가 로딩완료시 실행되는 이벤트
		img.onload = () => {
			count++;
			loadingNum.innerText = parseInt(count / 2);
			console.log('현재 로딩된 소스이미지', count);
			if (count === num) {
				//동적으로 만들어진 img요소에 소스이미지가 렌더링완료된 시점
				console.log('모든 소스이미지 로딩완료');
			}
		};
	});
	return imgs;
}

function activation(arr, index) {
	arr.forEach((el) => (el.style.display = 'none'));
	arr[index].style.display = 'block';
}

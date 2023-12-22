var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(38.02438425125545, 127.07172844948082), //지도의 중심좌표.
	level: 2 //지도의 레벨(확대, 축소 정도)
};

var REST_API_KEY = "592ebfd4cb68194d339cdf2fbe5d1a75"
var FORMAT = `Authorization: KakaoAK ${REST_API_KEY}/category_group_code/FD6`
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var request = new XMLHttpRequest();
request.open('GET', `https://dapi.kakao.com/v2/local/search/keyword.json`)
request.onload = function() {
	console.log(JSON.parse(request.response));
}

function getSickDangData () {
	var Headers = headers = {"Authorization": "KakaoAK {592ebfd4cb68194d339cdf2fbe5d1a75}"}
	var URLSearchParams = {'query' : "홍익대학교 세종캠퍼스 식당", 'x' : "127.28461813707062", 'y' : 
"36.6196348237162", 'radius' : 600, 'category_group_code' : 'FD6', 'page' : 1} 
	var foodData = request.open('GET', 'https://dapi.kakao.com/v2/local/search/keyword.json', URLSearchParams,Headers)
	console.log(foodData)
}

getSickDangData();


document.getElementById('fetchDataBtn').addEventListener('click', function () {
    var libraryName = document.getElementById('libraryName').value;
    fetchAirQualityData(libraryName);
});

function fetchAirQualityData(libraryName) {

    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/6430000/cbLibraryInfoService/getLibraryInfo'; // 실제 API 엔드포인트로 교체
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'FW5DPPM8SSGQ6Ps%2BnXQLxumu9OWwkVONlMBaIWyHQ61xjYxOJYuL0ymuS4qzqYS7YajX1Dkdnn%2FaWtznUwr6rA%3D%3D'; // 실제 서비스 키로 교체
    // 필요한 추가 쿼리 매개변수를 추가하세요.
    queryParams += '&' + encodeURIComponent('currentPage') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('perPage') + '=' + encodeURIComponent('10'); /**/
    queryParams += '&' + encodeURIComponent('FCLTY') + '=' + encodeURIComponent(libraryName); /**/
    queryParams += '&' + encodeURIComponent('')
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        // response에서 미세먼지 및 초미세먼지 데이터 추출
        //var time= response.body[0].OPNNG;//실제 시간 
        var id = response.body[0].FCLTY;
        var location = response.body[0].ADRES;
        var over_floor = response.body[0].FLOOR; // 실제 응답 속성으로 교체
        var under_floor = response.body[0].UNDGRND;
        var width = response.body[0].AR; // 실제 응답 속성으로 교체
       
  
        // HTML 요소에 데이터 삽입
        document.getElementById('id').textContent = id;
        document.getElementById('location').textContent = location;
        document.getElementById('over_floor').textContent = over_floor;
        document.getElementById('under_floor').textContent = under_floor;
        document.getElementById('width').textContent = (width / 3.3058).toFixed(2);

      }
    };
  
    xhr.send('');
}















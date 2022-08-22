/* global kakao */
import React, { useEffect } from 'react';

const { kakao } = window;

const Map = ({ mapx, mapy }) => {
  console.log(typeof mapx);
  console.log(typeof mapy);
  let kakaomap_mapx = 0;
  let kakaomap_mapy = 0;

  if (isNaN(mapx) == true) {
    kakaomap_mapx = parseFloat(mapx);
  } else {
    kakaomap_mapx = mapx;
  }
  if (isNaN(mapy) == true) {
    kakaomap_mapy = parseFloat(mapy);
  } else {
    kakaomap_mapy = mapy;
  }

  console.log(kakaomap_mapx);
  console.log(kakaomap_mapy);

  useEffect(() => {
    // 마커를 담을 배열입니다
    var markers = [];

    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(kakaomap_mapy, kakaomap_mapx),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    //마커표시
    var markerPosition = new kakao.maps.LatLng(kakaomap_mapy, kakaomap_mapx);
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    //검색 후 목록 표시

    // console.log("loading kakaomap");
  }, []);

  return (
    <div align="center">
      <div id="map" style={{ width: '95%', height: '200px' }}></div>
    </div>
  );
};

export default Map;

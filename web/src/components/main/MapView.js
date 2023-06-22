import { useEffect, useRef } from 'react'

const MapView = ({ 
  latitude,
  longitude,
  radius,
  restaurantList, 
}) => {
  const mapElement = useRef(null);
  const markerList = [];

  useEffect(() => {
    const { naver } = window;

    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(latitude, longitude);
    const mapOptions = {
      center: location,
      scaleControl: true,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    
    markerList.push(new naver.maps.Marker({
      position: location,
      map,
      shape: ""
    }))

    new naver.maps.Circle({
      map: map,
      center: location,
      radius,
  
      strokeColor: '#5347AA',
      strokeOpacity: 0.5,
      strokeWeight: 2,
      fillColor: '#E51D1A',
      fillOpacity: 0.3
    });
    
    restaurantList.forEach(restaurant => {
      const rloc = new naver.maps.LatLng(restaurant.x, restaurant.y);
      
      const marker = new naver.maps.Marker({
        position: rloc,
        map
      })

      markerList.push(marker)
    })

    markerList.forEach(marker => {
      naver.maps.Event.addListener(marker, "click", function(e) {
        var latlng = e.coord;
      });
    })
  }, [restaurantList]);
  

  return (
      <div 
        id="map" 
        ref={mapElement}
        style={{ width: "100%", height: "100%" }}
      />
  );

  }
  
export default MapView;
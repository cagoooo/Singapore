import { useEffect, useRef } from 'react';
import { MapView } from '@/components/Map';
import { attractions, restaurants } from '@/lib/littleIndiaData';

export function LittleIndiaMap() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);

  const handleMapReady = async (map: google.maps.Map) => {
    mapRef.current = map;

    // 設置地圖中心在小印度
    const littleIndiaCenter = { lat: 1.3070, lng: 103.8510 };
    map.setCenter(littleIndiaCenter);
    map.setZoom(15);

    // 清除舊標記
    markersRef.current.forEach((marker) => {
      marker.map = null;
    });
    markersRef.current = [];

    // 添加景點標記
    for (const attraction of attractions) {
      try {
        const marker = new google.maps.marker.AdvancedMarkerElement({
          map,
          position: attraction.coordinates,
          title: attraction.name,
          content: createMarkerContent(attraction.name, 'attraction'),
        });

        // 添加點擊事件
        marker.addListener('click', () => {
          showInfoWindow(map, attraction.coordinates, attraction.name, attraction.description);
        });

        markersRef.current.push(marker);
      } catch (error) {
        console.error('Error creating marker:', error);
      }
    }

    // 添加餐廳標記
    for (const restaurant of restaurants) {
      try {
        const marker = new google.maps.marker.AdvancedMarkerElement({
          map,
          position: restaurant.coordinates,
          title: restaurant.name,
          content: createMarkerContent(restaurant.name, 'restaurant'),
        });

        // 添加點擊事件
        marker.addListener('click', () => {
          showInfoWindow(map, restaurant.coordinates, restaurant.name, `${restaurant.type} - ${restaurant.rating}`);
        });

        markersRef.current.push(marker);
      } catch (error) {
        console.error('Error creating marker:', error);
      }
    }
  };

  const createMarkerContent = (title: string, type: 'attraction' | 'restaurant') => {
    const div = document.createElement('div');
    div.className = 'flex items-center justify-center w-10 h-10 rounded-full font-bold text-white cursor-pointer shadow-lg';
    
    if (type === 'attraction') {
      div.className += ' bg-purple-600 hover:bg-purple-700';
      div.textContent = '🎨';
    } else {
      div.className += ' bg-orange-600 hover:bg-orange-700';
      div.textContent = '🍽️';
    }
    
    return div;
  };

  const showInfoWindow = (
    map: google.maps.Map,
    position: { lat: number; lng: number },
    title: string,
    description: string
  ) => {
    // 簡單的信息窗口實現
    const infoWindowContent = document.createElement('div');
    infoWindowContent.className = 'p-3 bg-white rounded-lg shadow-lg max-w-xs';
    infoWindowContent.innerHTML = `
      <h3 class="font-bold text-gray-800 mb-1">${title}</h3>
      <p class="text-sm text-gray-600">${description}</p>
    `;

    // 使用簡單的信息窗口
    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
      position,
    });

    infoWindow.open(map);

    // 3 秒後自動關閉
    setTimeout(() => {
      infoWindow.close();
    }, 3000);
  };

  return (
    <div className="w-full h-full">
      <MapView
        initialCenter={{ lat: 1.3070, lng: 103.8510 }}
        initialZoom={15}
        onMapReady={handleMapReady}
      />
    </div>
  );
}

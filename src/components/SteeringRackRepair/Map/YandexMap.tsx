"use client";
import { FC, useEffect, useRef } from "react";
interface IProps {
  classname: string;
}
const YandexMap: FC<IProps> = ({ classname }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null); // Храним инстанс карты

  useEffect(() => {
    const loadYandexMap = () => {
      if (
        !document.querySelector(
          'script[src="https://api-maps.yandex.ru/2.1/?apikey=ВАШ_API_КЛЮЧ&lang=ru_RU"]'
        )
      ) {
        const script = document.createElement("script");
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=ВАШ_API_КЛЮЧ&lang=ru_RU`;
        script.async = true;
        script.onload = () => {
          if (window.ymaps) {
            window.ymaps.ready(init);
          }
        };
        document.body.appendChild(script);
      } else if (window.ymaps) {
        window.ymaps.ready(init);
      }
    };

    const init = () => {
      if (mapContainer.current && !mapInstance.current) {
        // Проверка, что карты еще нет
        mapInstance.current = new window.ymaps.Map(mapContainer.current, {
          center: [55.016461, 73.318077], // координаты Москвы
          zoom: 15,
          controls: [], // Убираем все контролы
        });

        const placemark = new window.ymaps.Placemark(
          [55.016461, 73.318077],
          {
            hintContent: "Вними Сибирь",
            balloonContent: "Молочная продукция оптом",
          },
          {
            balloonPanelMaxMapArea: 0, // Отключаем панель с кнопками
          }
        );

        mapInstance.current.geoObjects.add(placemark);
      }
    };

    if (typeof window !== "undefined" && !window.ymaps) {
      loadYandexMap();
    } else if (window.ymaps) {
      window.ymaps.ready(init);
    }
  }, []);

  return (
    <div ref={mapContainer} style={{ width: "100%" }} className={classname} />
  );
};

export default YandexMap;

var link = document.querySelector(".btn_show");
var popup = document.querySelector(".feedback_block");
var overlay = document.querySelector(".modal_overlay");
var close = popup.querySelector(".feedback_close");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal_content_show");
	overlay.classList.add("modal_overlay_show");
});
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal_content_show");
	overlay.classList.remove("modal_overlay_show");
});
overlay.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal_content_show");
	overlay.classList.remove("modal_overlay_show");
});

ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
		center: [59.938536, 30.3224549],
		zoom: 16
	}, {
		searchControlProvider: 'yandex#search'
	}),
	myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
		hintContent: 'Glacly',
		balloonContent: 'Раздаем мороженки'
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/map_pin.png',
		iconImageSize: [218, 142],
		iconImageOffset: [-15, -150]
	});

	myMap.behaviors.disable('scrollZoom');
	myMap.geoObjects.add(myPlacemark);
});

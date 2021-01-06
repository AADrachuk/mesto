# Пятый спринт от Яндекса по фронтенд-разразботке 

## Описание
Универсальные функции для попапов и лайков, добавление элементов в DOM через js.

## Ссылка на github pages
https://aadrachuk.github.io/mesto/ 

Не дублировать функционал функции handleOpenFormPopup.
Реализовать логику работы функции закрытия popup так , чтобы она принимала popup.
Искать DOM элементы форм через querySelector.
Задавать модификатор переменной newCard

## Исправление замечаний второго ревью по итогам пятого спринта (06.01.2021)
Исправлено:
* Необходимо исправить:
  * JS:
    * Убрана промежуточная переменная newCard.
    * Устранено дублирование функции handleOpenFormPopup.
    * Прямое обращение к формам заменено на поиск через querySelector по id.
    * В функцию закрытия попапа в качестве аргумента передается заранее найденный попап.
  * CSS: 
    * Поправлены padding кнопки удаления на карточках.
* Можно лучше:
  * JS:
    * Редактирование профиля открывается после заполнения данных инпутов.
    * Поиск переменных для лайка, удаления и открытия картинки вынесены в отдельные переменные.
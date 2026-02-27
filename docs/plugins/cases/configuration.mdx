---
title: "Конфигурация — Cases"
description: "Полный справочник по настройкам конфигурации плагина Cases."
sidebar_position: 3
---

# Конфигурация Cases

Конфигурационный файл находится по пути: `oxide/config/Cases.json`

## Основные параметры

| Параметр | По умолчанию | Описание |
|---|---|---|
| Template | `Fullscreen` | Шаблон интерфейса (Fullscreen / InMenu) |
| Enable item scrolling? | `true` | Включить анимацию прокрутки рулетки |
| Work with Notify? | `true` | Использовать плагин Notify для уведомлений |
| Permission | `""` | Общее право доступа для использования плагина (пусто = все могут) |
| Amount of items in the roulette | `26` | Количество предметов, отображаемых в рулетке при вращении |
| Commands | `["cases", "opencase"]` | Команды для открытия меню кейсов |

## Экономика

Настройки основной валюты для покупки кейсов:

| Параметр | Описание |
|---|---|
| Type (Plugin/Item) | Тип валюты: плагин или внутриигровой предмет |
| Plugin name | Название плагина экономики |
| Balance add hook | Хук добавления средств |
| Balance remove hook | Хук списания средств |
| Balance show hook | Хук проверки баланса |
| ShortName | Короткое имя предмета (при типе Item) |
| Skin | Скин предмета (при типе Item) |
| Show | Показывать баланс в интерфейсе |

## Цвета редкости

Система автоматической цветовой маркировки предметов по шансу выпадения:

```json
"Rarity Colors (chance - color)": {
 "70": { "HEX": "#AFAFAF", "Opacity": 75 },
 "65": { "HEX": "#6496E1", "Opacity": 75 },
 "55": { "HEX": "#4B69CD", "Opacity": 75 },
 "50": { "HEX": "#8847FF", "Opacity": 75 },
 "20": { "HEX": "#D32CE6", "Opacity": 75 },
 "5": { "HEX": "#EB4B4B", "Opacity": 75 }
}
```

Чем ниже шанс — тем реже предмет. Цвет подбирается автоматически по ближайшему порогу.

## Бонусный кейс

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enabled | `true` | Включить бонусный кейс |
| ID | `-1` | Уникальный ID бонусного кейса |
| Title | `"Bonus Case"` | Название |
| Image | URL | Изображение кейса |
| Permission | `""` | Право доступа (пусто = все) |
| CooldownTime | `86400` | Кулдаун между открытиями (секунды) |
| Cost | `0` | Стоимость (0 = бесплатно) |

Бонусный кейс поддерживает собственную валюту (Custom Currency), независимую от основной экономики.

## Кейсы за время игры (PlaytimeTracker)

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enabled | `true` | Включить начисление кейсов за время игры |
| Cases | `{ секунды: ID_кейса }` | Привязка времени к кейсам |

Пример:
```json
"Playtime Tracker Settings": {
 "Enabled": true,
 "Cases": {
 "3600": 1,
 "14400": 2,
 "28800": 3,
 "86400": 4
 }
}
```

## Кейсы по таймеру

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enable | `false` | Включить кейсы по таймеру |
| Cooldown | `14400` | Интервал начисления (секунды) |
| Cases | `[1, 2, 3, 4, 5]` | Список ID кейсов для начисления |

## Настройка кейсов

Каждый кейс включает следующие параметры:

| Параметр | Описание |
|---|---|
| ID | Уникальный числовой идентификатор кейса |
| Title | Название кейса |
| Image | URL изображения кейса |
| Permission | Право доступа (пусто = доступен всем) |
| Cost | Стоимость в основной валюте |
| Custom Currency | Индивидуальная валюта для этого кейса |
| Items | Список предметов с шансами |

### Настройка предметов в кейсе

Каждый предмет в кейсе содержит:

| Параметр | Описание |
|---|---|
| Type | Тип: Item / Command / Plugin |
| ID | Уникальный ID предмета |
| ShortName | Короткое имя предмета |
| Amount | Количество |
| Chance | Шанс выпадения (чем выше — тем чаще) |
| Skin | Скин предмета |
| Display Name | Пользовательское название |
| Image | Пользовательское изображение |
| Title | Отображаемое название |
| Command | Команда для выполнения (при типе Command) |

<details>
<summary>Пример конфигурации по умолчанию</summary>

```json
{
 "Template": "Fullscreen",
 "Enable item scrolling?": true,
 "Work with Notify?": true,
 "Permission (ex: cases.use)": "",
 "Amount of items in the roulette": 26,
 "Commands": ["cases", "opencase"],
 "Economy": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance",
 "ShortName": "scrap",
 "Display Name (empty - default)": "",
 "Skin": 0,
 "Show": true
 },
 "Rarity Colors (chance - color)": {
 "70": { "HEX": "#AFAFAF", "Opacity": 75 },
 "65": { "HEX": "#6496E1", "Opacity": 75 },
 "55": { "HEX": "#4B69CD", "Opacity": 75 },
 "50": { "HEX": "#8847FF", "Opacity": 75 },
 "20": { "HEX": "#D32CE6", "Opacity": 75 },
 "5": { "HEX": "#EB4B4B", "Opacity": 75 }
 },
 "Playtime Tracker Settings": {
 "Enabled": true,
 "Cases": {
 "3600": 1,
 "14400": 2,
 "28800": 3,
 "86400": 4
 }
 },
 "Cases for time settings": {
 "Enable": false,
 "Cooldown": 14400,
 "Cases": [1, 2, 3, 4, 5]
 },
 "Bonus Case": {
 "Enabled": true,
 "ID": -1,
 "Title": "Bonus Case",
 "Image": "https://i.ibb.co/JCWHDmF/n4I3vI0.png",
 "Permission": "",
 "CooldownTime": 86400,
 "Cost": 0
 },
 "Cases": [
 {
 "ID": 1,
 "Title": "ALTAIR",
 "Image": "https://i.ibb.co/2cWDKYL/0p9qwot.png",
 "Permission": "",
 "Cost": 100,
 "Items": [
 {
 "Type": "Item",
 "ID": 11,
 "ShortName": "metalblade",
 "Amount": 40,
 "Chance": 50
 }
 ]
 }
 ]
}
```

</details>

---
title: "Конфигурация Battlepass"
description: "Полное описание всех параметров конфигурации плагина Battlepass"
sidebar_position: 3
---

# Конфигурация Battlepass

Файл конфигурации расположен по пути: `oxide/config/Battlepass.json`

## Основные параметры

| Параметр | По умолчанию | Описание |
|---|---|---|
| Command | `"pass"` | Команда для открытия главного меню |
| Commands for Missions page | `["passmissions", "pmissions"]` | Команды для прямого открытия страницы миссий |
| Commands for Cases page | `["passcase"]` | Команды для прямого открытия страницы кейсов |
| Commands for Inventory page | `["passinv"]` | Команды для прямого открытия инвентаря |
| Permission | `"battlepass.use"` | Право доступа для использования плагина |
| Work with Notify? | `true` | Использовать ли уведомления через Notify/UINotify |
| Reset the quest after completing it? | `false` | Сбрасывать ли прогресс квеста после выполнения |
| Total missions per day | `7` | Количество активных общих миссий одновременно |
| How many hours are missions updated? | `24` | Интервал обновления миссий (в часах) |
| Enable logging to the console? | `true` | Вывод логов действий в консоль сервера |
| Enable logging to the file? | `true` | Запись логов действий в файл |
| Block (NoEscape) | `false` | Блокировать ли действия в инвентаре при блокировке NoEscape |
| Give out case items immediately to the player? | `false` | Выдавать предметы из кейсов сразу в инвентарь игрока (вместо инвентаря плагина) |
| Give an advance reward to the player's inventory? | `false` | Выдавать дополнительную награду за миссии сразу в инвентарь |
| Notify the player when a mission is completed? | `true` | Уведомлять игрока о выполнении миссии |

## Настройки валют

### Первая валюта

| Параметр | По умолчанию | Описание |
|---|---|---|
| Image | URL изображения | Иконка валюты в интерфейсе |
| Use embedded system? | `true` | Использовать встроенную систему (`true`) или внешний плагин (`false`) |
| Plugin name | `"Economics"` | Название внешнего плагина (если встроенная система отключена) |
| Balance add hook | `"Deposit"` | Название функции для начисления |
| Balance remove hook | `"Withdraw"` | Название функции для списания |
| Balance show hook | `"Balance"` | Название функции для проверки баланса |
| Rates for permissions | `{"battlepass.vip": 2, "battlepass.premium": 3}` | Множители заработка по правам доступа |

### Вторая валюта

| Параметр | По умолчанию | Описание |
|---|---|---|
| Use 2nd currency? | `true` | Включить систему второй валюты |
| Permission (empty - all) | `"battlepass.vip"` | Право доступа для использования второй валюты |
| Остальные параметры | — | Аналогичны первой валюте |

## Настройки вайпа

| Параметр | По умолчанию | Описание |
|---|---|---|
| Wipe Players? | `false` | Сбрасывать данные игроков при вайпе карты |
| Wipe Missions? | `false` | Сбрасывать конфигурацию миссий при вайпе карты |

## Задержка после вайпа

| Параметр | По умолчанию | Описание |
|---|---|---|
| Inventory | `0` | Задержка (в секундах) после вайпа, в течение которой игроки не могут забирать предметы из инвентаря. 0 = отключено |

## Настройки контейнеров для лута

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enabled | `true` | Включить отслеживание лута из контейнеров |
| Containers | `{"box.wooden.large": [...]}` | Список контейнеров и их скинов для отслеживания |

## Настройки миссий

Каждая миссия настраивается в разделах `"Settings shared missions"` (общие) и `"Settings challenge of the day"` (персональный вызов дня).

### Параметры миссии

| Параметр | Описание |
|---|---|
| Enabled | Включена ли миссия |
| Mission description | Текст описания миссии для игрока |
| Mission type | Тип задания (Gather, Kill, Craft, Look, Build, Upgrade, Fishing, LootCrate, Swipe, RaidableBases, RecycleItem, HackCrate, PurchaseFromNpc и ивенты) |
| Shortname/prefab | Короткое название предмета или префаб сущности |
| Skin (0 - any item) | Скин предмета (0 = любой) |
| Amount | Необходимое количество для выполнения |
| Amount of main reward | Награда в первой валюте |
| Give extra reward? | Выдавать ли дополнительный предмет |
| Give second currency? | Выдавать ли вторую валюту |
| Amount of second currency | Количество второй валюты |

## Настройки кейсов

Каждый кейс в разделе `"Cases"` содержит:

| Параметр | Описание |
|---|---|
| Case Display Name | Название кейса, видимое игрокам |
| Image | URL изображения кейса |
| Permission | Право доступа (пустое = все игроки) |
| Cost in currency 1 | Стоимость в первой валюте |
| Cost in currency 2 | Стоимость во второй валюте |
| Items | Список возможных наград с шансами |

### Параметры предмета в кейсе

| Параметр | Описание |
|---|---|
| Display Name | Отображаемое название |
| Chance | Шанс выпадения (0-100) |
| Item type | Тип награды: предмет, команда или плагин |
| Shortname | Короткое название предмета |
| Skin | Скин предмета |
| Amount | Количество |
| Command | Команда (для типа «команда») |

## Настройки PlayerDatabase

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enabled | `false` | Использовать PlayerDatabase для хранения данных |
| Table | `"Battlepass"` | Название таблицы |

<details>
<summary>Пример конфигурации по умолчанию (основные параметры)</summary>

```json
{
 "Command": "pass",
 "Commands for Missions page": ["passmissions", "pmissions"],
 "Commands for Cases page": ["passcase"],
 "Commands for Inventory page": ["passinv"],
 "Work with Notify?": true,
 "Permission": "battlepass.use",
 "Reset the quest after completing it?": false,
 "Total missions per day": 7,
 "How many hours are missions updated?": 24,
 "Use 2nd currency?": true,
 "Enable logging to the console?": true,
 "Enable logging to the file?": true,
 "Block (NoEscape)": false,
 "Give out case items immediately to the player?": false,
 "Give an advance reward to the player's inventory?": false,
 "Notify the player when a mission is completed?": true,
 "Wipe Settings": {
 "Wipe Players?": false,
 "Wipe Missions?": false
 },
 "Cooldown After Wipe (0 - disable)": {
 "Inventory": 0
 },
 "Currency 1": {
 "Image": "https://i.ibb.co/ThrdX3r/image.png",
 "Use embedded system?": true,
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance",
 "Rates for permissions": {
 "battlepass.vip": 2.0,
 "battlepass.premium": 3.0
 }
 },
 "Currency 2": {
 "Permission (empty - all)": "battlepass.vip",
 "Image": "https://i.ibb.co/gRbyTFW/image.png",
 "Use embedded system?": true,
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance"
 },
 "Loot Settings (for storage containers)": {
 "Enabled": true,
 "Containers (shortname - skins) [skin 0 = all skins]": {
 "box.wooden.large": [2764183607, 624269671],
 "stocking_small_deployed": [0]
 }
 },
 "PlayerDatabase": {
 "Enabled": false,
 "Table": "Battlepass"
 }
}
```

</details>

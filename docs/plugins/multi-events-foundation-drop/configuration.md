---
title: "Конфигурация"
description: "Полный справочник по параметрам конфигурации плагина Foundation Drop."
sidebar_position: 4
---

# Конфигурация

Файл конфигурации расположен по пути: `oxide/config/MultiEventsFoundationDrop.json`

## Основные параметры

| Параметр | По умолчанию | Описание |
|---|---|---|
| Minimal players to start event | `2` | Минимальное количество игроков для старта (не менее 2) |
| Work with Notify? | `false` | Использовать Notify / UINotify для уведомлений |
| Work with NoEscape? | `false` | Использовать плагин NoEscape для блокировки выхода |
| Allowed commands on event | `["cmd1", "cmd2", "cmd3"]` | Список команд, разрешённых во время ивента |

## Настройки задержек

Секция `"Delay Settings"`:

| Параметр | По умолчанию | Описание |
|---|---|---|
| Voting | `30` | Время фазы голосования (в секундах) |
| Waiting | `15` | Время ожидания перед началом игры (в секундах) |

## Настройки арены

Секция `"Arena Settings"`:

| Параметр | По умолчанию | Описание |
|---|---|---|
| Size (matrix NxN) | `10` | Размер платформы -- сетка фундаментов NxN |

## Настройки разрушения блоков

Секция `"Block Degrade Settings"`:

| Параметр | По умолчанию | Описание |
|---|---|---|
| Delay | `2` | Задержка между разрушениями фундаментов (в секундах) |
| Distance | `0.5` | Дистанция для проверки нахождения игрока на блоке |

## Настройки финальной битвы

Секция `"Last Battle Settings"`:

| Параметр | По умолчанию | Описание |
|---|---|---|
| Radiation | `true` | Включить радиацию в финальной фазе |
| RadiationRadius | `100` | Радиус зоны радиации |
| RadiationIntensity | `5` | Интенсивность радиации |
| GiveItem | `true` | Выдавать предмет для финальной битвы |
| ItemConfig | `salvaged.sword` | Предмет для выдачи |
| GiveKit | `false` | Выдавать кит для финальной битвы |
| KitName | `"kitname"` | Название кита |

## Настройки наград

Секция `"Awards Settings"`:

| Параметр | Описание |
|---|---|
| Give out a reward to all players who stayed on 1 block | Выдавать награду всем выжившим на последнем блоке |
| Reward for the winner | Награда для победителя |
| Maximum number of winners | Максимальное количество победителей |
| Put the reward in the MultiEventsInventory? | Выдавать через MultiEventsInventory |

### Типы наград

| Тип | Описание |
|---|---|
| `Item` | Игровой предмет |
| `Command` | Консольная команда (%steamid%, %username%) |
| `Plugin` | Вызов хука другого плагина |
| `Kit` | Выдача набора |

## Настройки UI

Секция `"UI Settings"`:

| Параметр | Описание |
|---|---|
| Event Icon URL | URL иконки ивента |

## Пример конфигурации

```json
{
 "Minimal players to start event ( 2 or higher )": 2,
 "Allowed commands on event": ["cmd1", "cmd2", "cmd3"],
 "Work with NoEscape?": false,
 "Work with Notify?": false,
 "Last Battle Settings": {
 "Radiation": true,
 "GiveItem": true,
 "ItemConfig": {
 "ShortName": "salvaged.sword",
 "Skin": 0
 },
 "GiveKit": false,
 "KitName": "kitname",
 "RadiationRadius": 100.0,
 "RadiationIntensity": 5.0
 },
 "Arena Settings": {
 "Size (matrix NxN)": 10
 },
 "Delay Settings": {
 "Voting": 30.0,
 "Waiting": 15.0
 },
 "Block Degrade Settings": {
 "Delay": 2.0,
 "Distance": 0.5
 },
 "Awards Settings": {
 "Give out a reward to all players who stayed on 1 block": false,
 "Maximum number of winners": 3,
 "Put the reward in the MultiEventsInventory?": false,
 "Reward for the winner (when there is only one winner)": {
 "Awards": [
 {
 "Type": "Item",
 "Item": {
 "ShortName": "wood",
 "Amount Min": 3500,
 "Amount Max": 3500
 },
 "Chance": 100.0
 }
 ]
 }
 },
 "UI Settings": {
 "Event Icon URL": "https://gitlab.com/TheMevent/PluginsStorage/raw/main/Images/MultiEvents/FoundationDrop-Icon.png"
 }
}
```

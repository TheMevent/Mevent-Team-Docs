---
title: "Конфигурация — Scavenger Hunt"
description: "Подробное описание всех параметров конфигурации режима Scavenger Hunt."
sidebar_position: 4
---

# Конфигурация Scavenger Hunt

Файл конфигурации создаётся автоматически при первой загрузке плагина.

## Основные параметры

### Work with Notify?

Включает или отключает интеграцию с плагинами Notify / UINotify для отправки уведомлений. Если отключено, уведомления будут отправляться в чат.

```json
"Work with Notify?": true
```

### Event Duration

Длительность ивента в секундах. По умолчанию 600 секунд (10 минут).

```json
"Event Duration": 600
```

## Настройки сундука

### Treasure prefab

Префаб сундука, который появляется на карте. По умолчанию используется большой деревянный ящик.

```json
"Treasure prefab": "assets/prefabs/deployable/large wood storage/box.wooden.large.prefab"
```

### Treasure skin id

Скин ID сундука. Позволяет задать уникальный внешний вид сундука.

```json
"Treasure skin id": 1394363785
```

## Настройки UI

### Location Icon URL

URL иконки для отображения местоположения в UI-виджете.

```json
"Location Icon URL": "https://..."
```

### Distance Icon URL

URL иконки для отображения расстояния в UI-виджете.

```json
"Distance Icon URL": "https://..."
```

## Награда для победителя (Reward for the winner)

В отличие от других режимов, Scavenger Hunt выдаёт награду только одному победителю — тому, кто первым найдёт сундук.

### Структура награды

| Параметр | Описание |
|---|---|
| Put the reward in the MultiEventsInventory? | Помещать награду в инвентарь ивентов |
| Award IDs from MultiEventsInventory | Индексы ячеек в инвентаре Multi Events |
| Amount (min/max) | Количество наград для выдачи |
| Awards | Список возможных наград |

### Типы наград

Каждая награда может быть одного из типов:

| Тип | Описание |
|---|---|
| **Item** | Игровой предмет (ShortName, количество, скин) |
| **Command** | Консольная команда (поддержка %steamid%) |
| **Kit** | Набор из плагина Kits |
| **Plugin** | Вызов стороннего плагина (Economics, ServerRewards и др.) |

### Параметры предмета (Item)

```json
{
 "Type": "Item",
 "Item": {
 "ShortName": "wood",
 "Amount min": 3500,
 "Amount max": 3500,
 "DisplayName (empty - default)": "",
 "Skin": 0
 },
 "Chance": 100.0,
 "Command (%steamid%)": "",
 "Kit": "",
 "Plugin": {
 "Hook": "",
 "Plugin Name": "",
 "Amount": 0
 }
}
```

### Параметры вызова плагина

```json
{
 "Type": "Plugin",
 "Plugin": {
 "Hook": "Deposit",
 "Plugin Name": "Economics",
 "Amount": 500
 }
}
```

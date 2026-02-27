---
title: "Конфигурация — Patrol Helicopter Hit"
description: "Подробное описание всех параметров конфигурации режима Patrol Helicopter Hit."
sidebar_position: 4
---

# Конфигурация Patrol Helicopter Hit

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

## Настройки вертолёта

### Heli Init Position

Начальная позиция появления вертолёта на карте. Задаётся координатами (X, Y, Z). При значении (0, 0, 0) вертолёт появится в центре карты.

```json
"Heli Init Position": {
 "x": 0.0,
 "y": 0.0,
 "z": 0.0
}
```

### Heli Height above ground

Высота вертолёта над землёй в метрах. По умолчанию 50 метров.

```json
"Heli Height above ground": 50.0
```

### Helicopter Health

Здоровье вертолёта. Чем больше значение, тем дольше вертолёт будет жить и тем больше попаданий нужно для его уничтожения. По умолчанию 10000.

```json
"Helicopter Health": 10000
```

## Настройки наград (Awards Settings)

Награды настраиваются для каждого места отдельно.

### Структура награды

Каждое место содержит:

| Параметр | Описание |
|---|---|
| Inventory Awards | Индексы ячеек в инвентаре Multi Events |
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

### Put In Events Inventory

Определяет, будут ли награды помещены в инвентарь Multi Events или выданы напрямую игроку.

```json
"Put the reward in the MultiEventsInventory?": true
```

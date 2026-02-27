---
title: "Конфигурация — NPC Missile Silo"
description: "Подробное описание всех параметров конфигурации режима NPC Missile Silo."
sidebar_position: 3
---

# Конфигурация NPC Missile Silo

Файл конфигурации создаётся автоматически при первой загрузке плагина.

## Основные параметры

### Work with Notify?

Включает или отключает интеграцию с плагинами Notify / UINotify.

```json
"Work with Notify?": true
```

### Event Duration

Длительность ивента в секундах.

```json
"Event Duration": 600
```

## Настройки наград (Awards Settings)

Награды настраиваются для каждого призового места отдельно.

### Структура награды

| Параметр | Описание |
|---|---|
| Inventory Awards | Индексы ячеек в инвентаре Multi Events |
| Amount (min/max) | Количество наград для выдачи |
| Awards | Список возможных наград |

### Типы наград

| Тип | Описание |
|---|---|
| **Item** | Игровой предмет (ShortName, количество, скин) |
| **Command** | Консольная команда (поддержка %steamid%) |
| **Kit** | Набор из плагина Kits |
| **Plugin** | Вызов стороннего плагина (Economics, ServerRewards и др.) |

### Пример настройки предмета

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

### Put In Events Inventory

Определяет, будут ли награды помещены в инвентарь Multi Events.

```json
"Put In Events Inventory": true
```

---
title: "Конфигурация — Looking Loot"
description: "Описание всех параметров конфигурации режима Looking Loot"
sidebar_position: 3
---

# Конфигурация

Конфигурационный файл создаётся автоматически при первом запуске плагина.

## Основные параметры

| Параметр | Тип | По умолчанию | Описание |
|---|---|---|---|
| Work with Notify? | bool | `true` | Использовать ли Notify/UINotify для отправки уведомлений |
| Default Score | float | `1` | Базовый множитель очков для предметов, не указанных в таблице |
| Event Duration | int | `600` | Продолжительность ивента в секундах |

## Таблица ценности предметов

Раздел `Score Table (shortname - score)` позволяет задать индивидуальный множитель очков для конкретных предметов.

```json
"Score Table (shortname - score)": {
 "scrap": 2.0,
 "gears": 2.0
}
```

- **Ключ** — короткое имя предмета (shortname)
- **Значение** — множитель очков для этого предмета

Предметы, не указанные в таблице, будут использовать значение `Default Score`.

## Настройки наград

Раздел `Awards Settings` позволяет настроить награды для победителей.

| Параметр | Тип | По умолчанию | Описание |
|---|---|---|---|
| Put the reward in the MultiEventsInventory? | bool | `false` | Выдавать награду через Multi Events Inventory |
| Player Awards (top - award) | object | см. ниже | Настройка наград по местам в рейтинге |

### Настройка наград по местам

Награды настраиваются для каждого места в рейтинге. Ключ — номер места (1, 2, 3 и т.д.):

```json
"Player Awards (top - award)": {
 "1": {
 "Award IDs from MultiEventsInventory": [0, 1, 2, 3],
 "Amount": {
 "Minimal": 1,
 "Maximum": 1
 },
 "Awards": [...]
 }
}
```

### Типы наград

| Параметр | Описание |
|---|---|
| Type | Тип награды: `Item`, `Command`, `Plugin`, `Kit` |
| Chance | Шанс выпадения от 1 до 100 |
| Item | Настройки предмета (ShortName, Amount Min, Amount Max, Skin, DisplayName) |
| Command (%steamid%) | Консольная команда (поддерживает `%steamid%` и `%username%`) |
| Kit | Название кита для выдачи |
| Plugin | Настройки стороннего плагина (Hook, Plugin Name, Amount) |

## Пример конфигурации по умолчанию

```json
{
 "Work with Notify?": true,
 "Default Score": 1.0,
 "Event Duration": 600,
 "Score Table (shortname - score)": {
 "scrap": 2.0,
 "gears": 2.0
 },
 "Awards Settings": {
 "Put the reward in the MultiEventsInventory?": false,
 "Player Awards (top - award)": {
 "1": {
 "Award IDs from MultiEventsInventory": [0, 1, 2, 3],
 "Amount": { "Minimal": 1, "Maximum": 1 },
 "Awards": [
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "wood", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "stones", "Amount Min": 2500, "Amount Max": 2500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "leather", "Amount Min": 1000, "Amount Max": 1000, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "cloth", "Amount Min": 1000, "Amount Max": 1000, "DisplayName (empty - default)": "", "Skin": 0 } }
 ]
 },
 "2": {
 "Award IDs from MultiEventsInventory": [4, 5, 6, 7],
 "Amount": { "Minimal": 1, "Maximum": 1 },
 "Awards": [
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "wood", "Amount Min": 3000, "Amount Max": 3000, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "stones", "Amount Min": 2000, "Amount Max": 2000, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "leather", "Amount Min": 500, "Amount Max": 500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "cloth", "Amount Min": 500, "Amount Max": 500, "DisplayName (empty - default)": "", "Skin": 0 } }
 ]
 }
 }
 }
}
```

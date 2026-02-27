---
title: "Конфигурация"
description: "Полный справочник по параметрам конфигурации плагина Hemp Gather."
sidebar_position: 4
---

# Конфигурация

Файл конфигурации расположен по пути: `oxide/config/MultiEventsHempGather.json`

## Основные параметры

| Параметр | По умолчанию | Описание |
|---|---|---|
| Work with Notify? | `true` | Использовать плагин Notify / UINotify для уведомлений |
| Event Duration | `600` | Длительность ивента в секундах (по умолчанию 10 минут) |

## Настройки наград

Секция `"Awards Settings"` определяет награды для игроков по местам в рейтинге.

| Параметр | Описание |
|---|---|
| Put the reward in the MultiEventsInventory? | Выдавать награду через инвентарь MultiEventsInventory |
| Player Awards (top - award) | Список наград по местам (1 -- первое место, 2 -- второе и т.д.) |

### Параметры каждой награды

| Параметр | Описание |
|---|---|
| Award IDs from MultiEventsInventory | ID наград из инвентаря MultiEventsInventory |
| Awards | Список предметов-наград |
| Amount (Minimal / Maximum) | Количество наград для выдачи |

### Типы наград

| Тип | Описание |
|---|---|
| `Item` | Игровой предмет (ShortName, количество, скин) |
| `Command` | Консольная команда (%steamid%, %username%) |
| `Plugin` | Вызов хука другого плагина (Economics и др.) |
| `Kit` | Выдача набора через плагин Kits |

## Пример конфигурации

```json
{
 "Work with Notify?": true,
 "Event Duration": 600,
 "Awards Settings": {
 "Put the reward in the MultiEventsInventory?": true,
 "Player Awards (top - award)": {
 "1": {
 "Award IDs from MultiEventsInventory": [0, 1, 2, 3],
 "Awards": [
 {
 "Type": "Item",
 "Command (%steamid%)": "",
 "Kit": "",
 "Plugin": { "Hook": "", "Plugin Name": "", "Amount": 0 },
 "Item": {
 "DisplayName (empty - default)": "",
 "ShortName": "wood",
 "Skin": 0,
 "Amount Min": 3500,
 "Amount Max": 3500
 },
 "Chance": 100.0
 }
 ],
 "Amount": { "Minimal": 1, "Maximum": 1 }
 }
 }
 }
}
```

:::tip Совет
Добавьте награды за несколько мест (1, 2, 3), чтобы поощрить соревнование между игроками.
:::

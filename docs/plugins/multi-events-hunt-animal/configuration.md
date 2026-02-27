---
title: "Конфигурация"
description: "Полный справочник по параметрам конфигурации плагина Hunt Animal."
sidebar_position: 4
---

# Конфигурация

Файл конфигурации расположен по пути: `oxide/config/MultiEventsHuntAnimal.json`

## Основные параметры

| Параметр | По умолчанию | Описание |
|---|---|---|
| Work with Notify? | `true` | Использовать Notify / UINotify для уведомлений |
| Event Duration | `600` | Длительность ивента в секундах (10 минут) |

## Таблица очков за животных

Параметр `"Score Table (animal - score)"` определяет количество очков за убийство каждого типа животного.

| Животное (ShortPrefabName) | Очки по умолчанию |
|---|---|
| `chicken` | 1 |
| `zombie` | 2 |
| `wolf2` | 4 |
| `boar` | 4 |
| `horse` | 4 |
| `stag` | 4 |
| `bear` | 10 |
| `polarbear` | 10 |
| `tiger` | 10 |
| `crocodile` | 10 |
| `panther` | 10 |
| `snake` | 10 |
| `snake.entity` | 10 |
| `deer` | 10 |

:::tip Совет
Вы можете добавить любые типы животных в таблицу, используя их ShortPrefabName. Используйте команду `me.hunt.animals.list` из серверной консоли для получения списка доступных животных.
:::

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
 "Score Table (animal - score)": {
 "chicken": 1.0,
 "wolf2": 4.0,
 "boar": 4.0,
 "bear": 10.0,
 "polarbear": 10.0,
 "horse": 4.0,
 "stag": 4.0,
 "zombie": 2.0,
 "tiger": 10.0,
 "crocodile": 10.0,
 "panther": 10.0,
 "snake": 10.0,
 "deer": 10.0,
 "snake.entity": 10.0
 },
 "Awards Settings": {
 "Put the reward in the MultiEventsInventory?": false,
 "Player Awards (top - award)": {
 "1": {
 "Award IDs from MultiEventsInventory": [0, 1, 2, 3],
 "Awards": [
 {
 "Type": "Item",
 "Item": {
 "ShortName": "wood",
 "Amount Min": 3500,
 "Amount Max": 3500
 },
 "Chance": 100.0
 },
 {
 "Type": "Item",
 "Item": {
 "ShortName": "stones",
 "Amount Min": 2500,
 "Amount Max": 2500
 },
 "Chance": 100.0
 },
 {
 "Type": "Item",
 "Item": {
 "ShortName": "leather",
 "Amount Min": 1000,
 "Amount Max": 1000
 },
 "Chance": 100.0
 }
 ],
 "Amount": { "Minimal": 1, "Maximum": 1 }
 },
 "2": {
 "Award IDs from MultiEventsInventory": [4, 5, 6, 7],
 "Awards": [
 {
 "Type": "Item",
 "Item": {
 "ShortName": "wood",
 "Amount Min": 3000,
 "Amount Max": 3000
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
Назначайте больше очков за опасных животных (медведи, тигры) и меньше за безобидных (курицы), чтобы стимулировать рисковую игру.
:::

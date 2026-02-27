---
title: "Конфигурация"
description: "Полный справочник по параметрам конфигурации плагина Gold Rush."
sidebar_position: 4
---

# Конфигурация

Файл конфигурации расположен по пути: `oxide/config/MultiEventsGoldRush.json`

## Основные параметры

| Параметр | По умолчанию | Описание |
|---|---|---|
| Work with Notify? | `true` | Использовать Notify / UINotify для уведомлений |
| Event Duration | `600` | Длительность ивента в секундах (по умолчанию 10 минут) |

## Предметы за руду

Секция `"Ore items"` определяет предметы, которые могут выпасть при добыче руды.

Каждый предмет имеет следующие параметры:

| Параметр | Описание |
|---|---|
| Type | Тип награды: `Item`, `Command`, `Plugin`, `Kit` |
| Item | Настройки предмета (ShortName, количество, скин) |
| Chance | Шанс выпадения (0-100%) |
| Command (%steamid%) | Консольная команда (для типа Command) |
| Plugin | Настройки вызова плагина (для типа Plugin) |
| Kit | Имя кита (для типа Kit) |

### Предметы за руду по умолчанию

| Предмет | Шанс |
|---|---|
| wood (3500-4500) | 50% |
| stones (3500-4500) | 20% |
| scrap (100-200) | 20% |

## Предметы за деревья

Секция `"Tree items"` определяет предметы, которые могут выпасть при добыче деревьев.

### Предметы за деревья по умолчанию

| Предмет | Шанс |
|---|---|
| wood (3500-4500) | 30% |
| stones (3500-4500) | 20% |
| scrap (100-200) | 30% |

## Множители шансов по правам

Секция `"Permissions Multiplier chane"` позволяет настроить множители шансов для игроков с определёнными правами:

```json
"Permissions Multiplier chane [item chance * perm chance]": {
 "MultiEventsGoldRush.vip": 2.0
}
```

- Шанс выпадения предмета умножается на множитель из права
- Если у игрока несколько подходящих прав, используется наибольший множитель
- По умолчанию множитель для обычных игроков равен 1.0

## Пример конфигурации

```json
{
 "Work with Notify?": true,
 "Event Duration": 600,
 "Ore items": [
 {
 "Type": "Item",
 "Command (%steamid%)": "",
 "Kit": "",
 "Plugin": { "Hook": "", "Plugin Name": "", "Amount": 0 },
 "Item": {
 "DisplayName (empty - default)": "",
 "ShortName": "wood",
 "Skin": 0,
 "Amount min": 3500,
 "Amount max": 4500
 },
 "Chance": 50.0
 },
 {
 "Type": "Item",
 "Command (%steamid%)": "",
 "Kit": "",
 "Plugin": { "Hook": "", "Plugin Name": "", "Amount": 0 },
 "Item": {
 "DisplayName (empty - default)": "",
 "ShortName": "stones",
 "Skin": 0,
 "Amount min": 3500,
 "Amount max": 4500
 },
 "Chance": 20.0
 },
 {
 "Type": "Item",
 "Command (%steamid%)": "",
 "Kit": "",
 "Plugin": { "Hook": "", "Plugin Name": "", "Amount": 0 },
 "Item": {
 "DisplayName (empty - default)": "",
 "ShortName": "scrap",
 "Skin": 0,
 "Amount min": 100,
 "Amount max": 200
 },
 "Chance": 20.0
 }
 ],
 "Tree items": [
 {
 "Type": "Item",
 "Item": {
 "ShortName": "wood",
 "Amount min": 3500,
 "Amount max": 4500
 },
 "Chance": 30.0
 },
 {
 "Type": "Item",
 "Item": {
 "ShortName": "stones",
 "Amount min": 3500,
 "Amount max": 4500
 },
 "Chance": 20.0
 },
 {
 "Type": "Item",
 "Item": {
 "ShortName": "scrap",
 "Amount min": 100,
 "Amount max": 200
 },
 "Chance": 30.0
 }
 ],
 "Permissions Multiplier chane [item chance * perm chance]": {
 "MultiEventsGoldRush.vip": 2.0
 }
}
```

:::tip Совет
Вы можете добавить редкие предметы с низким шансом (1-5%), чтобы создать ощущение "джекпота" при добыче ресурсов.
:::

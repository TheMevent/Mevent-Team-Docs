---
title: "Конфигурация — Collection Resources"
description: "Описание всех параметров конфигурации режима Collection Resources"
sidebar_position: 3
---

# Конфигурация

Конфигурационный файл создаётся автоматически при первом запуске плагина.

## Основные параметры

| Параметр | Тип | По умолчанию | Описание |
|---|---|---|---|
| Work with Notify? | bool | `true` | Использовать ли Notify/UINotify для отправки уведомлений |
| Event Duration | int | `600` | Продолжительность ивента в секундах |

## Множители инструментов

Раздел `Tools Multiplier` позволяет задать множители очков в зависимости от используемого инструмента.

```json
"Tools Multiplier": {
 "jackhammer": 0.5,
 "rock": 1.5
}
```

- **Ключ** — короткое имя инструмента (shortname)
- **Значение** — множитель очков (0.5 = половина очков, 1.5 = полторы очков, 1.0 = без изменений)

Инструменты, не указанные в списке, имеют множитель `1.0`.

:::tip Совет
Уменьшайте множитель для мощных инструментов (например, `jackhammer`) и увеличивайте для слабых (например, `rock`), чтобы сбалансировать ивент.
:::

## Множители предметов

Раздел `Items Multiplier` позволяет задать множители для конкретных типов ресурсов с учётом скина.

```json
"Items Multiplier": {
 "metal.ore": {
 "Skin": 0,
 "Multiplier": 1.0
 },
 "sulfur.ore": {
 "Skin": 0,
 "Multiplier": 1.0
 }
}
```

| Параметр | Описание |
|---|---|
| Skin | ID скина предмета (0 — стандартный) |
| Multiplier | Множитель очков для этого предмета |

## Множители по правам доступа

Раздел `Permissions Multiplier` позволяет задать множители очков для игроков с определёнными правами. Все указанные права регистрируются автоматически при загрузке плагина.

```json
"Permissions Multiplier": {
 "MultiEventsCollectionResources.default": 1.0,
 "MultiEventsCollectionResources.vip": 2.0
}
```

- **Ключ** — название права
- **Значение** — множитель очков для игроков с этим правом

Если у игрока несколько прав из списка, будет использован наибольший множитель.

:::info Как работают множители
Итоговое количество очков рассчитывается по формуле:

`очки = базовое_количество * множитель_инструмента * множитель_предмета * множитель_права`

Все три множителя применяются последовательно.
:::

## Настройки наград

Раздел `Awards Settings` позволяет настроить награды для победителей.

| Параметр | Тип | По умолчанию | Описание |
|---|---|---|---|
| Put the reward in the MultiEventsInventory? | bool | `true` | Выдавать награду через Multi Events Inventory |
| Player Awards (top - award) | object | см. ниже | Настройка наград по местам в рейтинге |

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
 "Event Duration": 600,
 "Tools Multiplier": {
 "jackhammer": 0.5,
 "rock": 1.5
 },
 "Items Multiplier": {
 "metal.ore": { "Skin": 0, "Multiplier": 1.0 },
 "sulfur.ore": { "Skin": 0, "Multiplier": 1.0 }
 },
 "Permissions Multiplier": {
 "MultiEventsCollectionResources.default": 1.0,
 "MultiEventsCollectionResources.vip": 2.0
 },
 "Awards Settings": {
 "Put the reward in the MultiEventsInventory?": true,
 "Player Awards (top - award)": {
 "1": {
 "Award IDs from MultiEventsInventory": [0, 1, 2, 3],
 "Amount": { "Minimal": 1, "Maximum": 1 },
 "Awards": [
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "wood", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "stones", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "leather", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "cloth", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } }
 ]
 },
 "2": {
 "Award IDs from MultiEventsInventory": [4, 5, 6, 7],
 "Amount": { "Minimal": 1, "Maximum": 1 },
 "Awards": [
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "wood", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "stones", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "leather", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "cloth", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } }
 ]
 }
 }
 }
}
```

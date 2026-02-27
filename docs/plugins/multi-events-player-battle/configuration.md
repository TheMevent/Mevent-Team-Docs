---
title: "Конфигурация — Player Battle"
description: "Подробное описание всех параметров конфигурации режима Player Battle."
sidebar_position: 4
---

# Конфигурация Player Battle

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

## Настройки PvP

### Disable TruePve

Включает автоматическое отключение TruePve на время проведения ивента, чтобы игроки могли наносить урон друг другу. После завершения ивента TruePve автоматически восстанавливается.

```json
"Disable TruePve (only for player to player) if event start": true
```

### Check player kills

Включает проверку уникальности убийств. Если включено, повторное убийство одного и того же игрока не засчитывается. Каждая жертва даёт максимум 1 очко.

```json
"Check player kills (1 killed person = 1 point)": true
```

:::tip
Эта настройка защищает от фарма очков, когда двое игроков убивают друг друга поочерёдно. Рекомендуется оставить включённой.
:::

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

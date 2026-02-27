---
title: "Конфигурация Statistics"
description: "Полный справочник по всем параметрам конфигурации плагина Statistics."
sidebar_position: 4
---

# Конфигурация Statistics

Файл конфигурации расположен по пути: `oxide/config/Statistics.json`

## Основные параметры

| Параметр | По умолчанию | Описание |
|---|---|---|
| Statistics Commands | `["stats", "statistics"]` | Команды для открытия профиля |
| Leaderboard Commands | `["leaders", "leaderboard"]` | Команды для таблицы лидеров |
| Work with Notify? | `true` | Использовать Notify для уведомлений |
| Work with PlayTimeRewards? | `true` | Интеграция с PlayTimeRewards |
| Work with PlaytimeTracker? | `true` | Интеграция с PlaytimeTracker |
| Enable a Profile? | `true` | Включить профиль игрока |
| Enable a Leaderboard? | `true` | Включить таблицу лидеров |
| Automatic wipe on wipe | `false` | Автоматический сброс при вайпе |
| Access by permission (statistics.use) | `false` | Ограничить доступ правом |
| ServerPanel Template (V1, V2) | `V1` | Шаблон для ServerPanel |

## Настройки просмотра профиля

| Параметр | По умолчанию | Описание |
|---|---|---|
| Open player profile by clicking on leaderboard? | `true` | Открывать профиль при клике на игрока |
| Enable the ability to see another player's profile? | `true` | Разрешить просмотр чужих профилей |
| Permission to view the other player's profile | `""` | Право для просмотра чужих профилей |

## Настройки подсчёта

| Параметр | По умолчанию | Описание |
|---|---|---|
| Count suicide as death | `true` | Считать самоубийство как смерть |
| Count suicide as kill | `true` | Считать самоубийство как убийство |
| Count kills of bots | `true` | Считать убийства ботов |
| Count kills from bots | `true` | Считать смерти от ботов |
| Count deaths from teammates | `true` | Считать смерти от тиммейтов |
| Count bot kills in kills? | `false` | Учитывать убийства ботов в общем счётчике |
| Use value rounding? | `false` | Округлять значения |

## Оружие и ресурсы

### Оружие (Weapons)

Список отслеживаемого оружия:
```json
"Weapons": [
 "rifle.ak", "rifle.bolt", "rifle.l96", "rifle.lr300",
 "rifle.m39", "rifle.semiauto", "pistol.eoka",
 "pistol.m92", "pistol.nailgun", "pistol.python",
 "pistol.revolver", "pistol.semiauto"
]
```

### Ресурсы (Resources)

Список отслеживаемых ресурсов:
```json
"Resources": [
 "stones", "sulfur.ore", "metal.ore", "hq.metal.ore", "wood"
]
```

## Таблица очков

Настройте очки за различные действия в секции `"Score Table (shortname - score)"`:

| Действие | Очки по умолчанию | Описание |
|---|---|---|
| kills | `1` | За убийство игрока |
| deaths | `-1` | За смерть |
| supply_drop | `3` | За сигнальный ящик |
| crate_normal | `0.3` | За обычный ящик |
| crate_elite | `0.5` | За элитный ящик |
| bradley_crate | `5` | За ящик Брэдли |
| heli_crate | `5` | За ящик вертолёта |
| bradley | `10` | За уничтожение Брэдли |
| helicopter | `15` | За уничтожение вертолёта |
| barrel | `0.1` | За бочку |
| scientistnpc | `0.5` | За учёного |
| heavyscientist | `2` | За тяжёлого учёного |

Также есть отдельная таблица `"NPCs Score Table (UserID - score)"` для настройки очков за конкретных NPC по UserID.

## Настройки наград

| Параметр | По умолчанию | Описание |
|---|---|---|
| Use Awards? | `false` | Включить награды за топ-позиции |

Награды настраиваются в секции `"Awards (top position - award)"`, где ключ -- позиция в топе (1, 2, 3...):

```json
"Awards": {
 "1": {
 "Amount": 1,
 "Items": [
 {
 "Type": "Item",
 "ShortName": "wood",
 "Amount": 20000,
 "Chance": 50
 }
 ]
 }
}
```

## Сбор статистики по разрешению

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enable the collection of statistics only for players with permission? | `false` | Собирать статистику только для игроков с правом |
| Permission to collect statistics | `""` | Право для сбора статистики |

## PlayerDatabase

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enabled | `false` | Использовать PlayerDatabase |
| Name | `"Statistics"` | Имя базы данных |

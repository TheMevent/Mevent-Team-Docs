---
title: "Конфигурация Operation Fortress"
description: "Полный справочник по настройкам конфигурации плагина Operation Fortress."
sidebar_position: 4
---

# Конфигурация Operation Fortress

Файл конфигурации расположен по пути: `oxide/config/OperationFortress.json`

## Настройки события

| Параметр | По умолчанию | Описание |
|---|---|---|
| enableAutoTimer | `true` | Автоматический запуск события по таймеру |
| repeatEveryMin | `120` | Минимальный интервал между событиями (минуты) |
| repeatEveryMax | `180` | Максимальный интервал между событиями (минуты) |
| prepairSeconds | `60` | Время подготовки перед началом события (секунды) |
| duration | `65` | Длительность события (минуты) |
| towerNeedActivated | `4` | Количество вышек для захвата крепости |
| ejectType | `Out` | Тип выталкивания игроков после события |
| useNotify | `false` | Использовать Notify |
| announceWinner | `true` | Объявлять победителя |
| redSphere | `true` | Показывать красную сферу вокруг зоны |
| createZonePVP | `false` | Создавать PvP-зону |
| teleportationBlock | `true` | Блокировать телепортацию |
| disableBetterNpc | `true` | Отключить BetterNpc в зоне события |

## Заблокированные команды

```json
"blockCommands": ["tpr", "home", "tpa"]
```

## Настройки PveMode

| Параметр | Описание |
|---|---|
| Enable | Включить PvE-режим для зоны |
| Damage | Урон игрокам (в процентах) |
| ScaleDamage | Множители урона для NPC и турелей |
| LootCrate | Разрешить лутать ящики |
| DamageNpc | Разрешить урон NPC |
| TimeExitOwner | Время до выхода владельца (секунды) |

## Пресеты NPC

Каждый пресет NPC содержит:

| Параметр | Описание |
|---|---|
| presetName | Уникальное имя пресета |
| displayName | Отображаемое имя NPC |
| health | Здоровье |
| wearItems | Экипировка (список предметов со скинами) |
| beltItems | Оружие (список предметов со скинами) |
| speed | Скорость передвижения |
| roamRange | Радиус патрулирования |
| senseRange | Дальность обнаружения |
| damageScale | Множитель урона |
| type | Тип: `Default` или `Stationary` |
| deleteCorpse | Удалять тело после смерти |
| lootPreset | Пресет лута с тела |

## Награды

| Параметр | Описание |
|---|---|
| Enable | Включить систему наград |
| Type | Тип награды: `Economy` или `Command` |
| Economy | Настройки экономической награды |
| Command | Команда для выполнения (`{steamid}` -- ID победителя) |

## Маркеры на карте

| Параметр | Описание |
|---|---|
| vendingMarker.enable | Показывать маркер магазина на карте |
| radiusMarker.enable | Показывать маркер радиуса |
| radiusMarker.radius | Радиус маркера |
| radiusMarker.alpha | Прозрачность маркера |

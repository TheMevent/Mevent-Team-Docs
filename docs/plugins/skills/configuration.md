---
title: "Конфигурация Skills"
description: "Полное описание всех параметров конфигурации плагина Skills"
sidebar_position: 3
---

# Конфигурация Skills

Файл конфигурации расположен по пути: `oxide/config/Skills.json`

## Основные параметры

| Параметр | По умолчанию | Описание |
|---|---|---|
| Permission to use plugin | `""` (пусто) | Право доступа для использования. Если пусто — доступно всем |
| Commands | `["skills", "skill"]` | Чат-команды для открытия меню |
| Work with Notify? | `true` | Использовать Notify для уведомлений |
| Chat Icon | `0` | Steam ID аватара для сообщений в чат (0 = без иконки) |
| Enable Offline Image Mode | `false` | Режим оффлайн-изображений (без ImageLibrary) |
| Template | `"Fullscreen"` | Шаблон интерфейса: Fullscreen, V1, V2, V4 |
| Show Categories | `true` | Показывать категории навыков |
| Show All Skills at Once | `false` | Показывать все навыки на одной странице |
| Cooldown between actions | `0.2` | Задержка между действиями в интерфейсе (секунды) |
| Reset Skills on Death | `false` | Сбрасывать все навыки при смерти игрока |

## Настройки XP-системы

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enabled | `true` | Включить систему начисления XP |
| Count NPC kills as player kills | `false` | Считать убийства NPC как убийства игроков |
| Count damage/kills to teammates | `true` | Учитывать урон и убийства тиммейтов |
| Count damage/kills to clan members | `true` | Учитывать урон и убийства клановых |
| Count damage/kills to friends | `true` | Учитывать урон и убийства друзей |

### Множители XP по правам доступа

| Право | Множитель |
|---|---|
| `skills.xprate.vip` | x1.5 |
| `skills.xprate.premium` | x2.0 |

Вы можете добавить собственные права и множители в разделе «XP Rate Multipliers by Permissions».

### Награды XP за действия

Каждая запись в списке наград содержит:

| Параметр | Описание |
|---|---|
| Prefab | Имя префаба или короткое название (можно несколько через `\|`) |
| Type | Тип действия: Kill, Death, Crate |
| XP Reward | Количество XP за действие |
| Enabled | Включена ли эта награда |

## Передача XP при убийстве

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enabled | `false` | Включить передачу XP при убийстве |
| Default Percentage | `50` | Процент XP, который убийца получает от жертвы |
| Permission Percentages | VIP: 75%, Premium: 100% | Множители по правам |

## Настройки возврата XP

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enable XP Refund | `true` | Включить возврат XP при сбросе навыка |
| Refund Percentage | `50` | Процент возврата (0-100) |
| Minimum Refund XP | `0` | Минимальный возврат |
| Maximum Refund XP | `0` | Максимальный возврат (0 = без ограничений) |

## Настройки авто-вайпа

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enabled | `false` | Автоматический вайп при новом сейве карты |
| Wipe XP Balance | `true` | Сбрасывать баланс XP |
| Wipe Skill Levels | `true` | Сбрасывать уровни навыков |
| Wipe Wipe Protection Used | `true` | Сбрасывать счётчик использования защиты от вайпа |
| Respect Wipe Protection | `true` | Учитывать навык «Защита от вайпа» |

## Настройки уведомлений

### При получении XP
| Параметр | По умолчанию | Описание |
|---|---|---|
| Enabled | `true` | Включить уведомления о получении XP |
| Minimum XP | `1.0` | Минимальное количество XP для показа уведомления |
| Show Chat Message | `true` | Показывать в чате |
| Show In-Game Note | `true` | Показывать всплывающую подсказку |
| Notification Cooldown | `5` | Задержка между уведомлениями (секунды) |

### При изучении навыка
| Параметр | По умолчанию | Описание |
|---|---|---|
| Chat Enabled | `true` | Показывать сообщение в чате |
| Minimum Level | `1` | Минимальный уровень для уведомления |
| Only Max Levels | `false` | Уведомлять только о максимальном уровне |

## Пользовательская экономика

| Параметр | По умолчанию | Описание |
|---|---|---|
| Use Custom Economy | `false` | Использовать стороннюю валюту вместо XP |
| Type | `"Plugin"` | Тип экономики |
| Plugin Name | `"ServerRewards"` | Название плагина |

## Структура навыка

Каждый навык в конфигурации содержит:

| Параметр | Описание |
|---|---|
| Enabled | Включён ли навык |
| ID | Уникальный идентификатор |
| Type | Тип навыка (определяет механику) |
| Title | Название навыка |
| Description | Описание для игрока |
| Image | URL иконки |
| Permission | Право доступа (пусто = доступно всем) |
| Levels | Список уровней с эффектом и стоимостью |

### Структура уровня

| Параметр | Описание |
|---|---|
| Value | Эффект уровня (в процентах) |
| Cost | Стоимость в XP |
| Permission | Право доступа для этого уровня (необязательно) |

<details>
<summary>Пример конфигурации по умолчанию (основные параметры)</summary>

```json
{
 "Permission to use plugin (ex: skills.use)": "",
 "Commands": ["skills", "skill"],
 "Work with Notify?": true,
 "Chat Icon (Steam ID, 0 = no icon)": 0,
 "Enable Offline Image Mode": false,
 "Template": "Fullscreen",
 "Show Categories": true,
 "Show All Skills at Once": false,
 "Cooldown between actions (in seconds)": 0.2,
 "Reset Skills on Death": false,
 "Custom Economy Settings": {
 "Use Custom Economy": false,
 "Type": "Plugin",
 "Plugin Name": "ServerRewards",
 "Plugin Hook Add": "AddPoints",
 "Plugin Hook Remove": "TakePoints",
 "Plugin Hook Balance": "CheckPoints"
 },
 "Auto Wipe on New Save Settings": {
 "Enabled": false,
 "Wipe XP Balance": true,
 "Wipe Skill Levels": true,
 "Wipe Wipe Protection Used counter": true,
 "Respect Wipe Protection skill": true
 },
 "Refund Settings": {
 "Enable XP Refund": true,
 "Refund Percentage (0-100)": 50.0,
 "Minimum Refund XP": 0.0,
 "Maximum Refund XP (0 = unlimited)": 0.0
 },
 "XP Rewards Settings": {
 "Enabled": true,
 "XP Rate Multipliers by Permissions": {
 "skills.xprate.vip": 1.5,
 "skills.xprate.premium": 2.0
 },
 "Count NPC kills as player kills": false,
 "Count damage/kills to teammates": true,
 "Count damage/kills to clan members": true,
 "Count damage/kills to friends": true
 },
 "XP Transfer on Kill Settings": {
 "Enabled": false,
 "Default Percentage": 50.0,
 "Permission Percentages": {
 "skills.xptransfer.vip": 75.0,
 "skills.xptransfer.premium": 100.0
 }
 }
}
```

</details>

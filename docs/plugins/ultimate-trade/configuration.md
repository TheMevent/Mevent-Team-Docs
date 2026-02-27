---
title: "Конфигурация Ultimate Trade"
description: "Полный справочник по всем настройкам конфигурации плагина Ultimate Trade."
sidebar_position: 3
---

# Конфигурация Ultimate Trade

Файл конфигурации находится по пути:
- **Oxide:** `oxide/config/UltimateTrade.json`
- **Carbon:** `carbon/configs/UltimateTrade.json`

## Основные настройки

| Параметр | По умолчанию | Допустимые значения | Описание |
|---|---|---|---|
| Permission to use the trade command | `"ultimatetrade.use"` | Строка | Право доступа для использования обмена |
| Work with Notify? | `true` | `true` / `false` | Использовать плагин Notify для уведомлений |
| Commands to open trade | `["trade", "t"]` | Массив строк | Чат-команды для запуска обмена |

## Настройки обмена (Trade Settings)

| Параметр | По умолчанию | Допустимые значения | Описание |
|---|---|---|---|
| Time to answer trade requests (seconds) | `15` | Целое число > 0 | Время ожидания ответа на запрос обмена |
| Trade cooldown (Cooldown - seconds) | `60.0` | Число >= 0 | Задержка между обменами (в секундах) |
| Allow trade if distance is greater than specified | `50.0` | Число, `-1` для отключения | Максимальная дистанция между игроками для обмена. `-1` = без ограничений |
| Number of active slots for trade | `8` | Целое число > 0 | Количество слотов в окне обмена |
| Block trading if players are not in a team | `false` | `true` / `false` | Требовать нахождение в одной команде для обмена |

:::tip Рекомендация
Значение дистанции `50` означает, что игроки могут обмениваться, только если расстояние между ними **больше** 50 единиц. Это предотвращает обмен на близких дистанциях (например, когда можно просто бросить предмет). Установите `-1`, если хотите разрешить обмен на любом расстоянии.
:::

## Настройки блокировок (Restrictions Settings)

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enabled | `true` | Включить систему блокировок |
| Block accepting requests in BuildingBlock | `true` | Блокировать принятие запроса в зоне чужого шкафа |
| Block sending requests in BuildingBlock | `true` | Блокировать отправку запроса в зоне чужого шкафа |
| Block using trade in flight | `true` | Блокировать обмен в полёте (прыжок, падение) |
| Block using trade in water | `true` | Блокировать обмен в воде |
| Block using trade in dying state | `true` | Блокировать обмен в предсмертном состоянии |

:::info Информация
Блокировки защищают от потенциальных эксплойтов. Рекомендуется оставить все блокировки включёнными, если у вас нет веских причин отключать их.
:::

## Настройки прав доступа (Permission Settings)

Этот раздел позволяет создать несколько уровней прав с разными параметрами обмена:

```json
"Permission Settings": {
 "ultimatetrade.vip": {
 "Slot size for this permission": 12,
 "Cooldown after trade for this permission": 30
 },
 "ultimatetrade.premium": {
 "Slot size for this permission": 16,
 "Cooldown after trade for this permission": 10
 }
}
```

| Поле | Описание |
|---|---|
| Ключ (право) | Название права доступа |
| Slot size for this permission | Количество слотов для обмена |
| Cooldown after trade for this permission | Кулдаун после обмена (в секундах) |

### Как это работает

- Если у игрока есть несколько прав, используется **наибольшее** количество слотов
- Для кулдауна используется **наименьшее** значение среди имеющихся прав
- Базовые значения (8 слотов, 60 секунд) применяются, если ни одно дополнительное право не выдано

### Пример: три уровня

```json
"Permission Settings": {
 "ultimatetrade.basic": {
 "Slot size for this permission": 8,
 "Cooldown after trade for this permission": 60
 },
 "ultimatetrade.vip": {
 "Slot size for this permission": 12,
 "Cooldown after trade for this permission": 30
 },
 "ultimatetrade.premium": {
 "Slot size for this permission": 16,
 "Cooldown after trade for this permission": 0
 }
}
```

<details>
<summary>Полная конфигурация по умолчанию</summary>

```json
{
 "Permission to use the trade command": "ultimatetrade.use",
 "Work with Notify?": true,
 "Commands to open trade": ["trade", "t"],
 "Trade Settings": {
 "Time to answer trade requests (seconds)": 15,
 "Trade cooldown (Cooldown - seconds)": 60.0,
 "Allow trade if the distance between players is greater than the specified (-1 - disable)": 50.0,
 "Number of active slots for trade": 8,
 "Block trading with players if players are not in a team (Standard friend system)": false
 },
 "Restrictions Settings": {
 "Enabled": true,
 "Block accepting requests in BuildingBlock": true,
 "Block sending requests in BuildingBlock": true,
 "Block using trade in flight": true,
 "Block using trade in water": true,
 "Block using trade in dying state": true
 },
 "Permission Settings": {}
}
```

</details>

---
title: "Установка Ultimate Trade"
description: "Пошаговое руководство по установке и настройке плагина Ultimate Trade."
sidebar_position: 2
---

# Установка Ultimate Trade

## Предварительные требования

Перед установкой убедитесь, что у вас есть:

- Сервер Rust с **Oxide** или **Carbon**
- Доступ к файловой системе сервера

:::info Информация
Ultimate Trade не требует обязательных зависимостей. Все необязательные плагины улучшают опыт использования, но не являются критичными.
:::

## Шаг 1: Установка плагина

1. Поместите файл `UltimateTrade.cs` в папку `oxide/plugins` (для Oxide) или `carbon/plugins` (для Carbon).
2. Дождитесь автоматической компиляции плагина.

## Шаг 2: Установка зависимостей (необязательно)

- **Notify / UINotify** -- для визуальных уведомлений вместо чата. Установите и включите `Work with Notify?` в конфиге.
- **Duel** -- если на сервере есть дуэли, плагин автоматически заблокирует обмен во время активной дуэли.
- **SkinBox** -- для корректной работы с кастомизированными предметами.

## Шаг 3: Настройка прав доступа

По умолчанию для использования обмена требуется право `ultimatetrade.use`. Выдайте его всем игрокам:

```
oxide.grant group default ultimatetrade.use
```

### Настройка VIP-прав

Вы можете создать дополнительные права с расширенными возможностями:

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

Затем зарегистрируйте и выдайте права:

```
oxide.grant group vip ultimatetrade.vip
oxide.grant group premium ultimatetrade.premium
```

## Шаг 4: Основная настройка конфигурации

Откройте конфигурационный файл:
- **Oxide:** `oxide/config/UltimateTrade.json`
- **Carbon:** `carbon/configs/UltimateTrade.json`

### Настройки обмена

```json
"Trade Settings": {
 "Time to answer trade requests (seconds)": 15,
 "Trade cooldown (Cooldown - seconds)": 60.0,
 "Allow trade if the distance between players is greater than the specified (-1 - disable)": 50.0,
 "Number of active slots for trade": 8,
 "Block trading with players if players are not in a team": false
}
```

:::tip Рекомендация
- Установите `Time to answer trade requests` на 20-30 секунд, чтобы дать игрокам достаточно времени.
- Значение `Trade cooldown` в 30-60 секунд предотвращает злоупотребления.
- Если хотите ограничить обмен только близко расположенными игроками, уменьшите `Trade distance`.
:::

### Настройки блокировок

```json
"Restrictions Settings": {
 "Enabled": true,
 "Block accepting requests in BuildingBlock": true,
 "Block sending requests in BuildingBlock": true,
 "Block using trade in flight": true,
 "Block using trade in water": true,
 "Block using trade in dying state": true
}
```

## Шаг 5: Перезагрузка

```
o.reload UltimateTrade
```

:::tip Готово!
Теперь игроки могут использовать `/trade ник` для безопасного обмена предметами.
:::

## Как работает обмен

1. **Игрок A** вводит `/trade НикИгрокаB`
2. **Игрок B** получает уведомление и вводит `/trade accept`
3. Открывается интерфейс торговой витрины для обоих игроков
4. Каждый игрок размещает предметы в своей половине витрины
5. Оба игрока подтверждают сделку (блокируют свою сторону)
6. Предметы автоматически обмениваются
7. Витрина закрывается, оба получают уведомление об успехе

:::caution Внимание
Предметы с вложенным содержимым (например, оружие с модулями) будут заблокированы от изменения во время обмена для безопасности.
:::

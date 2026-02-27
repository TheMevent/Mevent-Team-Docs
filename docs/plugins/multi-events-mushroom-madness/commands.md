---
title: "Команды и права — Mushroom Madness"
description: "Список консольных команд и прав доступа для режима Mushroom Madness."
sidebar_position: 3
---

# Команды и права доступа

## Консольные команды

| Команда | Описание | Право доступа |
|---|---|---|
| `mushroomadness.start` | Запуск ивента вручную | `MultiEventsMushroomMadness.start` |
| `mushroomadness.stop` | Остановка текущего ивента | `MultiEventsMushroomMadness.stop` |

:::info
Обычно ивент запускается автоматически через основной плагин Multi Events. Ручные команды предназначены для тестирования и особых случаев.
:::

## Права доступа (Permissions)

| Право | Описание |
|---|---|
| `MultiEventsMushroomMadness.start` | Разрешение на запуск ивента |
| `MultiEventsMushroomMadness.stop` | Разрешение на остановку ивента |

### Назначение прав

Для назначения прав через консоль сервера:

```
oxide.grant group admin MultiEventsMushroomMadness.start
oxide.grant group admin MultiEventsMushroomMadness.stop
```

## Управление UI

Игроки могут скрыть виджет ивента, нажав кнопку закрытия на панели уведомления. Виджет автоматически появится снова при следующем запуске ивента.

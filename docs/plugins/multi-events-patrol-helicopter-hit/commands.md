---
title: "Команды и права — Patrol Helicopter Hit"
description: "Список консольных команд и прав доступа для режима Patrol Helicopter Hit."
sidebar_position: 3
---

# Команды и права доступа

## Консольные команды

| Команда | Описание | Право доступа |
|---|---|---|
| `patrolhelicopterhit.start` | Запуск ивента вручную | `MultiEventsPatrolHelicopterHit.start` |
| `patrolhelicopterhit.stop` | Остановка текущего ивента | `MultiEventsPatrolHelicopterHit.stop` |

:::info
Обычно ивент запускается автоматически через основной плагин Multi Events. Ручные команды предназначены для тестирования и особых случаев.
:::

## Права доступа (Permissions)

| Право | Описание |
|---|---|
| `MultiEventsPatrolHelicopterHit.start` | Разрешение на запуск ивента |
| `MultiEventsPatrolHelicopterHit.stop` | Разрешение на остановку ивента |

### Назначение прав

Для назначения прав через консоль сервера:

```
oxide.grant group admin MultiEventsPatrolHelicopterHit.start
oxide.grant group admin MultiEventsPatrolHelicopterHit.stop
```

## Управление UI

Игроки могут скрыть виджет ивента, нажав кнопку закрытия на панели уведомления. Виджет автоматически появится снова при следующем запуске ивента.

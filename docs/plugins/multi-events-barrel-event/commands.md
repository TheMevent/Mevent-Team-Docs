---
title: "Команды и права — Barrel Event"
description: "Список консольных команд и прав доступа для режима Barrel Event."
sidebar_position: 4
---

# Команды и права доступа

## Консольные команды

| Команда | Описание | Право доступа |
|---|---|---|
| `barrelevent.start` | Запуск ивента вручную | `MultiEventsBarrelEvent.start` |
| `barrelevent.stop` | Остановка текущего ивента | `MultiEventsBarrelEvent.stop` |

:::info
Обычно ивент запускается автоматически через основной плагин Multi Events. Ручные команды предназначены для тестирования и особых случаев.
:::

## Права доступа (Permissions)

| Право | Описание |
|---|---|
| `MultiEventsBarrelEvent.start` | Разрешение на запуск ивента |
| `MultiEventsBarrelEvent.stop` | Разрешение на остановку ивента |

### Назначение прав

Для назначения прав через консоль сервера:

```
oxide.grant group admin MultiEventsBarrelEvent.start
oxide.grant group admin MultiEventsBarrelEvent.stop
```

## Управление UI

Игроки могут скрыть виджет ивента, нажав кнопку закрытия на панели уведомления. Виджет автоматически появится снова при следующем запуске ивента.

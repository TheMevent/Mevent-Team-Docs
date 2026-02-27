---
title: "Команды и права — Player Battle"
description: "Список консольных команд и прав доступа для режима Player Battle."
sidebar_position: 3
---

# Команды и права доступа

## Консольные команды

| Команда | Описание | Право доступа |
|---|---|---|
| `playerbattle.start` | Запуск ивента вручную | `MultiEventsPlayerBattle.start` |
| `playerbattle.stop` | Остановка текущего ивента | `MultiEventsPlayerBattle.stop` |

:::info
Обычно ивент запускается автоматически через основной плагин Multi Events. Ручные команды предназначены для тестирования и особых случаев.
:::

## Права доступа (Permissions)

| Право | Описание |
|---|---|
| `MultiEventsPlayerBattle.start` | Разрешение на запуск ивента |
| `MultiEventsPlayerBattle.stop` | Разрешение на остановку ивента |

### Назначение прав

Для назначения прав через консоль сервера:

```
oxide.grant group admin MultiEventsPlayerBattle.start
oxide.grant group admin MultiEventsPlayerBattle.stop
```

## Управление UI

Игроки могут скрыть виджет ивента, нажав кнопку закрытия на панели уведомления. Виджет автоматически появится снова при следующем запуске ивента.

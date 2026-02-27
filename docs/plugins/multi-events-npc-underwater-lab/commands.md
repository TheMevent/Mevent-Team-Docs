---
title: "Команды и права — Npc Underwater Lab"
description: "Список консольных команд и прав доступа для режима Npc Underwater Lab."
sidebar_position: 3
---

# Команды и права доступа

## Консольные команды

| Команда | Описание | Право доступа |
|---|---|---|
| `npcunderwater.start` | Запуск ивента вручную | `MultiEventsNpcUnderwaterLab.start` |
| `npcunderwater.stop` | Остановка текущего ивента | `MultiEventsNpcUnderwaterLab.stop` |

:::info
Обычно ивент запускается автоматически через основной плагин Multi Events. Ручные команды предназначены для тестирования и особых случаев.
:::

## Права доступа (Permissions)

| Право | Описание |
|---|---|
| `MultiEventsNpcUnderwaterLab.start` | Разрешение на запуск ивента |
| `MultiEventsNpcUnderwaterLab.stop` | Разрешение на остановку ивента |

### Назначение прав

Для назначения прав через консоль сервера:

```
oxide.grant group admin MultiEventsNpcUnderwaterLab.start
oxide.grant group admin MultiEventsNpcUnderwaterLab.stop
```

## Управление UI

Игроки могут скрыть виджет ивента, нажав кнопку закрытия на панели уведомления. Виджет автоматически появится снова при следующем запуске ивента.

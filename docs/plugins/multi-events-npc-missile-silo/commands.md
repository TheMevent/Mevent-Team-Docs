---
title: "Команды и права — NPC Missile Silo"
description: "Список консольных команд и прав доступа для режима NPC Missile Silo."
sidebar_position: 4
---

# Команды и права доступа

## Консольные команды

| Команда | Описание | Право доступа |
|---|---|---|
| `npcmissilesilo.start` | Запуск ивента вручную | `MultiEventsNpcMissileSilo.start` |
| `npcmissilesilo.stop` | Остановка текущего ивента | `MultiEventsNpcMissileSilo.stop` |

:::info
Обычно ивент запускается автоматически через основной плагин Multi Events. Ручные команды предназначены для тестирования и особых случаев.
:::

## Права доступа (Permissions)

| Право | Описание |
|---|---|
| `MultiEventsNpcMissileSilo.start` | Разрешение на запуск ивента |
| `MultiEventsNpcMissileSilo.stop` | Разрешение на остановку ивента |

### Назначение прав

```
oxide.grant group admin MultiEventsNpcMissileSilo.start
oxide.grant group admin MultiEventsNpcMissileSilo.stop
```

## Управление UI

Игроки могут скрыть виджет ивента, нажав кнопку закрытия на панели уведомления.

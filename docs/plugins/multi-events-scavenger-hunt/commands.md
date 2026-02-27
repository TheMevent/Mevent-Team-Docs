---
title: "Команды и права — Scavenger Hunt"
description: "Список консольных команд и прав доступа для режима Scavenger Hunt."
sidebar_position: 3
---

# Команды и права доступа

## Консольные команды

| Команда | Описание | Право доступа |
|---|---|---|
| `scavengerhunt.start` | Запуск ивента вручную | `MultiEventsScavengerHunt.start` |
| `scavengerhunt.stop` | Остановка текущего ивента | `MultiEventsScavengerHunt.stop` |

:::info
Обычно ивент запускается автоматически через основной плагин Multi Events. Ручные команды предназначены для тестирования и особых случаев.
:::

## Права доступа (Permissions)

| Право | Описание |
|---|---|
| `MultiEventsScavengerHunt.start` | Разрешение на запуск ивента |
| `MultiEventsScavengerHunt.stop` | Разрешение на остановку ивента |

### Назначение прав

Для назначения прав через консоль сервера:

```
oxide.grant group admin MultiEventsScavengerHunt.start
oxide.grant group admin MultiEventsScavengerHunt.stop
```

## Управление UI

Игроки могут скрыть виджет ивента, нажав кнопку закрытия на панели уведомления. Виджет автоматически появится снова при следующем запуске ивента.

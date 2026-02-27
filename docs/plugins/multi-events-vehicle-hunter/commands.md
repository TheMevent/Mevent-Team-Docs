---
title: "Команды и права — Vehicle Hunter"
description: "Список консольных команд и прав доступа для режима Vehicle Hunter."
sidebar_position: 3
---

# Команды и права доступа

## Консольные команды

| Команда | Описание | Право доступа |
|---|---|---|
| `vehiclehunter.start` | Запуск ивента вручную | `MultiEventsVehicleHunter.start` |
| `vehiclehunter.stop` | Остановка текущего ивента | `MultiEventsVehicleHunter.stop` |

:::info
Обычно ивент запускается автоматически через основной плагин Multi Events. Ручные команды предназначены для тестирования и особых случаев.
:::

## Права доступа (Permissions)

| Право | Описание |
|---|---|
| `MultiEventsVehicleHunter.start` | Разрешение на запуск ивента |
| `MultiEventsVehicleHunter.stop` | Разрешение на остановку ивента |

### Назначение прав

Для назначения прав через консоль сервера:

```
oxide.grant group admin MultiEventsVehicleHunter.start
oxide.grant group admin MultiEventsVehicleHunter.stop
```

## Управление UI

Игроки могут скрыть виджет ивента, нажав кнопку закрытия на панели уведомления. Виджет автоматически появится снова при следующем запуске ивента.

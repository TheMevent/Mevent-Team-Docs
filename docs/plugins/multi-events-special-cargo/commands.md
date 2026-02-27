---
title: "Команды и права — Special Cargo"
description: "Список консольных команд и прав доступа для режима Special Cargo."
sidebar_position: 3
---

# Команды и права доступа

## Консольные команды

| Команда | Описание | Право доступа |
|---|---|---|
| `specialcargo.start` | Запуск ивента вручную | `MultiEventsSpecialCargo.start` |
| `specialcargo.stop` | Остановка текущего ивента | `MultiEventsSpecialCargo.stop` |

:::info
Обычно ивент запускается автоматически через основной плагин Multi Events. Ручные команды предназначены для тестирования и особых случаев.
:::

## Права доступа (Permissions)

| Право | Описание |
|---|---|
| `MultiEventsSpecialCargo.start` | Разрешение на запуск ивента |
| `MultiEventsSpecialCargo.stop` | Разрешение на остановку ивента |

### Назначение прав

Для назначения прав через консоль сервера:

```
oxide.grant group admin MultiEventsSpecialCargo.start
oxide.grant group admin MultiEventsSpecialCargo.stop
```

## Управление UI

Игроки могут скрыть виджет ивента, нажав кнопку закрытия на панели уведомления. Виджет автоматически появится снова при следующем запуске ивента.

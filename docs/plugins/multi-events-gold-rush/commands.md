---
title: "Команды и права"
description: "Полный список команд и прав доступа плагина Gold Rush для MultiEvents."
sidebar_position: 3
---

# Команды и права

## Команды

### Команды администратора

| Команда | Описание | Право |
|---|---|---|
| `goldrush.start` | Запустить ивент Gold Rush | `MultiEventsGoldRush.start` |
| `goldrush.stop` | Остановить текущий ивент | `MultiEventsGoldRush.stop` |

:::info Примечание
Ивент также может быть запущен автоматически через систему MultiEvents по расписанию.
:::

### Консольные команды (UI)

| Команда | Описание |
|---|---|
| `UI_GoldRush hide` | Скрыть панель ивента с экрана (вызывается через UI) |

## Права (Permissions)

| Право | Описание |
|---|---|
| `MultiEventsGoldRush.start` | Право на запуск ивента |
| `MultiEventsGoldRush.stop` | Право на остановку ивента |
| `MultiEventsGoldRush.vip` | VIP-множитель шансов (по умолчанию x2) |

### Настройка прав

```
oxide.grant group admin MultiEventsGoldRush.start
oxide.grant group admin MultiEventsGoldRush.stop
oxide.grant group vip MultiEventsGoldRush.vip
```

:::tip VIP-множители
Вы можете создать несколько уровней VIP с разными множителями. Добавьте новые права в конфигурации:
```json
"Permissions Multiplier chane [item chance * perm chance]": {
 "MultiEventsGoldRush.vip": 2.0,
 "MultiEventsGoldRush.premium": 3.0
}
```
Не забудьте зарегистрировать каждое право через Oxide.
:::

## Команды игроков

У обычных игроков нет специальных команд. Участие в ивенте автоматическое -- достаточно добывать руду или деревья во время активного ивента.

## Механика

- При каждом бонусе от добычи (OnDispenserBonusReceived) проверяется шанс выпадения дополнительных предметов
- Руда и деревья имеют **раздельные** таблицы наград
- Шанс выпадения каждого предмета умножается на множитель из прав доступа игрока
- Если у игрока несколько множителей, применяется наибольший

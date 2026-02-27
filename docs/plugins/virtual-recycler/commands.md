---
title: "Команды и права"
description: "Полный список команд и прав доступа плагина Virtual Recycler."
sidebar_position: 3
---

# Команды и права

## Команды чата

| Команда | Описание | Право |
|---|---|---|
| `/vrec` | Открыть виртуальный переработчик | `virtualrecycler.use` |
| `/vr` | Короткая команда | `virtualrecycler.use` |
| `/virtualrec` | Полная команда | `virtualrecycler.use` |
| `/vrecycler` | Альтернативная команда | `virtualrecycler.use` |
| `/virtualrecycler` | Полная альтернативная команда | `virtualrecycler.use` |

:::info Примечание
Команды настраиваются в конфигурации в параметре `"Commands"`. По умолчанию: `["vrec", "vr", "virtualrec", "vrecycler", "virtualrecycler"]`.
:::

## Права (Permissions)

### Право на использование

| Право | Описание |
|---|---|
| `virtualrecycler.use` | Базовое право для использования виртуального переработчика |
| `virtualrecycler.raidablebases` | Право для использования в зонах RaidableBases |

### Права скорости (PermissionSpeeds)

Определяют скорость работы виртуального переработчика:

| Право | Скорость | Описание |
|---|---|---|
| `virtualrecycler.admin` | 0.1 | Очень быстрая переработка |
| `virtualrecycler.vip` | 0.5 | Ускоренная переработка |
| `virtualrecycler.raidablebases` | 0.5 | Скорость в RaidableBases |

### Права скорости стационарных переработчиков (StaticRecyclerSpeeds)

Определяют скорость для стационарных переработчиков на карте:

| Право | Скорость |
|---|---|
| `virtualrecycler.static1` | 1.0 |
| `virtualrecycler.static2` | 0.5 |
| `virtualrecycler.vipstatic` | 0.1 |

:::tip Совет
При наличии нескольких прав используется наименьшее значение скорости (самая быстрая переработка).
:::

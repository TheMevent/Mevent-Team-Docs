---
title: "Конфигурация Object Stacks"
description: "Полный справочник по настройкам конфигурации плагина Object Stacks."
sidebar_position: 4
---

# Конфигурация Object Stacks

Файл конфигурации расположен по пути: `oxide/config/ObjectStacks.json`

## Основные параметры

| Параметр | По умолчанию | Описание |
|---|---|---|
| Logging level | `None` | Уровень логирования: `None`, `File`, `Console`, `All` |
| Can stack only in Building Privileged zones? | `true` | Ограничить стакание зоной шкафа (TC) |
| Blacklisted Skins | `[123, 1223]` | Скины, запрещённые для стакания |

## Права и лимиты (Permissions)

Словарь `"Permissions & their amount"` определяет максимальное количество объектов в стопке для каждого права:

```json
"Permissions & their amount of stacked furnaces allowed": {
 "objectstacks.box_wooden.use": 2,
 "objectstacks.box_wooden.vip": 4,
 "objectstacks.box_wooden_large.use": 2,
 "objectstacks.box_wooden_large.vip": 4
}
```

Формат ключа: `objectstacks.[shortname].[уровень]`

При наличии нескольких прав применяется наибольший лимит.

## Объекты и смещения (Objects and offsets)

Словарь `"Objects and offsets"` определяет, какие объекты можно стакать и вертикальное смещение для каждого:

```json
"Objects and offsets": {
 "assets/prefabs/deployable/.../box.wooden.prefab": {
 "YOffset": 0.65,
 "Shortname for permissions": "box_wooden"
 }
}
```

| Поле | Описание |
|---|---|
| Ключ (путь к префабу) | Путь к префабу размещаемого объекта |
| YOffset | Вертикальное смещение при стакании (в метрах) |
| Shortname for permissions | Имя для формирования прав доступа |

### Поддерживаемые объекты по умолчанию

- Деревянные ящики (box_wooden, box_wooden_large)
- Бочки хранения (storage_barrel_b, storage_barrel_c)
- Компостер (composter)
- Электрическая печь (electric_furnace)
- Генераторы (electric_generator_small, electric_fuelgenerator_small)
- Батареи (малые, средние, большие)
- Гроб (coffin_storage)
- Средневековые ящики
- Бамбуковые и плетёные бочки
- DLC-контейнеры (Abyss)

:::tip Совет
Для добавления нового объекта найдите его путь к префабу, определите вертикальное смещение и добавьте запись в конфигурацию с уникальным shortname для прав.
:::

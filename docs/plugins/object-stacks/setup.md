---
title: "Установка Object Stacks"
description: "Пошаговое руководство по установке плагина Object Stacks."
sidebar_position: 2
---

# Установка Object Stacks

## Шаг 1: Установите плагин

1. Скопируйте файл `ObjectStacks.cs` в папку `oxide/plugins/`.
2. Плагин загрузится автоматически.

Файл конфигурации:
```
oxide/config/ObjectStacks.json
```

## Шаг 2: Настройте права доступа

Каждый объект имеет свои права, определяющие максимальное количество в стопке:

```
oxide.grant group default objectstacks.box_wooden.use
oxide.grant group vip objectstacks.box_wooden.vip
```

Формат права: `objectstacks.[shortname].[уровень]`

### Примеры прав по умолчанию

| Право | Макс. стопка |
|---|---|
| `objectstacks.box_wooden.use` | 2 |
| `objectstacks.box_wooden.vip` | 4 |
| `objectstacks.box_wooden_large.use` | 2 |
| `objectstacks.box_wooden_large.vip` | 4 |
| `objectstacks.electric_furnace.use` | 2 |
| `objectstacks.electric_furnace.vip` | 4 |

## Шаг 3: Проверьте работу

1. Зайдите на сервер с нужным правом.
2. Разместите деревянный ящик.
3. Возьмите ещё один ящик в руки.
4. Наведите прицел на размещённый ящик.
5. Нажмите правую кнопку мыши -- ящик поставится сверху.

## Шаг 4: Настройте конфигурацию

Откройте `oxide/config/ObjectStacks.json`:

- **Can stack only in Building Privileged zones?** -- ограничить стакание только зоной шкафа
- **Blacklisted Skins** -- скины, запрещённые для стакания
- **Permissions & their amount** -- права и лимиты стопок
- **Objects and offsets** -- список объектов с вертикальными смещениями

## Шаг 5: Перезагрузите плагин

```
oxide.reload ObjectStacks
```

---
title: "Конфигурация Genie"
description: "Полный справочник по всем параметрам конфигурации плагина Genie."
sidebar_position: 4
---

# Конфигурация Genie

Файл конфигурации расположен по пути: `oxide/config/Genie.json`

## Основные параметры

| Параметр | По умолчанию | Описание |
|---|---|---|
| Work with Notify? | `true` | Использовать плагин Notify для уведомлений |

## Настройки джиннов (Genies)

Каждый джинн (лампа) настраивается отдельно в массиве `"Genies"`:

### Общие параметры лампы

| Параметр | По умолчанию | Описание |
|---|---|---|
| ID | `"default"` | Уникальный идентификатор типа лампы |
| Enabled | `true` | Включён ли данный тип лампы |
| GenieImage | URL | URL изображения джинна в интерфейсе |
| Progress | `true` | Показывать прогресс-бар при открытии |
| Delay | `5` | Время открытия в секундах |
| UpdateFrequency | `0.1` | Частота обновления анимации (в секундах) |
| Permission | `""` | Право для использования (пусто -- доступно всем) |

### Звуковые эффекты

| Параметр | По умолчанию | Описание |
|---|---|---|
| OpeningEffect | `"assets/bundled/prefabs/fx/gestures/lick.prefab"` | Звук при начале открытия |
| ProgressEffect | `"assets/bundled/prefabs/fx/notice/item.select.fx.prefab"` | Звук во время прогресса |
| FinishEffect | `"assets/prefabs/misc/xmas/presents/effects/wrap.prefab"` | Звук при завершении |

### Настройки предмета (Lamp)

| Параметр | По умолчанию | Описание |
|---|---|---|
| ControlStack | `true` | Контролировать стакание ламп |
| DisplayName | `"Lamp"` | Отображаемое название предмета |
| ShortName | `"xmas.present.small"` | ShortName базового предмета |
| Skin | `2540200362` | Скин предмета |

### Настройки наград (Awards)

Каждая награда имеет следующие параметры:

| Параметр | Описание |
|---|---|
| Type | Тип награды: `Item`, `Command`, `Plugin` |
| ShortName | ShortName предмета (для типа Item) |
| Amount | Количество |
| Chance | Шанс выпадения (0-100) |
| Skin | Скин предмета |
| DisplayName | Пользовательское имя предмета |
| Command | Команда для выполнения (для типа Command) |
| Image | URL изображения (для типа Command) |
| Title | Заголовок награды |

#### Настройки содержимого (Content)

Для предметов с вложенным содержимым (например, оружие с обвесами):

| Параметр | Описание |
|---|---|
| Enabled | Включить вложенное содержимое |
| Contents | Список вложенных предметов |

#### Настройки оружия (Weapon)

| Параметр | Описание |
|---|---|
| Enabled | Включить настройки оружия |
| AmmoType | Тип боеприпасов |
| AmmoAmount | Количество боеприпасов |

<details>
<summary>Пример конфигурации лампы</summary>

```json
{
 "Genies": [
 {
 "ID": "default",
 "Enabled": true,
 "GenieImage": "https://i.imgur.com/aNIcQzk.png",
 "Progress": true,
 "Delay": 5,
 "UpdateFrequency": 0.1,
 "OpeningEffect": "assets/bundled/prefabs/fx/gestures/lick.prefab",
 "ProgressEffect": "assets/bundled/prefabs/fx/notice/item.select.fx.prefab",
 "FinishEffect": "assets/prefabs/misc/xmas/presents/effects/wrap.prefab",
 "Permission": "",
 "Lamp": {
 "ControlStack": true,
 "DisplayName": "Lamp",
 "ShortName": "xmas.present.small",
 "Skin": 2540200362
 },
 "Awards": [
 {
 "Type": "Item",
 "ShortName": "wood",
 "Amount": 3500,
 "Chance": 70,
 "Skin": 0
 },
 {
 "Type": "Item",
 "ShortName": "stones",
 "Amount": 2500,
 "Chance": 70,
 "Skin": 0
 },
 {
 "Type": "Item",
 "ShortName": "metal.fragments",
 "Amount": 1500,
 "Chance": 65,
 "Skin": 0
 }
 ]
 }
 ]
}
```

</details>

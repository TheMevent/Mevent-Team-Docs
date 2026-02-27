---
title: "Установка Helpful Supply"
description: "Пошаговое руководство по установке плагина Helpful Supply."
sidebar_position: 2
---

# Установка Helpful Supply

## Шаг 1: Установите плагин

1. Скопируйте файл `HelpfulSupply.cs` в папку `oxide/plugins/`.
2. Плагин загрузится автоматически.
3. Проверьте консоль на наличие ошибок.

Файл конфигурации будет создан автоматически:
```
oxide/config/HelpfulSupply.json
```

## Шаг 2: Установите зависимости (по желанию)

| Плагин | Назначение |
|---|---|
| **Friends** | Позволяет друзьям открывать аирдроп |
| **Clans** | Позволяет членам клана открывать аирдроп |
| **Loottable** | Интеграция с пользовательскими таблицами лута |

## Шаг 3: Настройте типы сигнальных шашек

Откройте `oxide/config/HelpfulSupply.json`. По умолчанию доступны три типа:

- **heal** -- медицинские припасы (аптечки, бинты, шприцы)
- **guns** -- оружие (АК, Bolt, M39, пистолеты)
- **explosive** -- взрывчатка (C4, ракеты, сатчели)

Каждый тип настраивается отдельно:

```json
{
 "Name": "heal",
 "Item": {
 "Display Name": "Medicine Supply Signal",
 "ShortName": "supply.signal",
 "Skin": 2912968568
 },
 "Loot": {
 "Access": {
 "AllPlayers": true,
 "Teammates": true,
 "Friends": true,
 "Clanmates": true
 },
 "Items": [...]
 }
}
```

## Шаг 4: Проверьте работу

Выдайте себе шашку через консоль:

```
hsupply.give ваш_ник heal 1
```

Используйте шашку как обычный Supply Signal. Прилетит аирдроп с настроенным содержимым.

## Шаг 5: Настройте выпадение из контейнеров (по желанию)

Для каждого типа шашки можно настроить выпадение из контейнеров на карте:

```json
"Drop": {
 "Enabled": false,
 "Containers": [
 {
 "Prefab": "assets/bundled/prefabs/radtown/crate_normal.prefab",
 "Chance": 5.0,
 "Amount": {"Min": 1, "Max": 1}
 }
 ]
}
```

## Шаг 6: Перезагрузите плагин

```
oxide.reload HelpfulSupply
```

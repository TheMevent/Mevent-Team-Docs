---
title: "Установка Hit Markers"
description: "Пошаговое руководство по установке плагина Hit Markers."
sidebar_position: 2
---

# Установка Hit Markers

## Шаг 1: Установите зависимости

### ImageLibrary (обязательно)

1. Скачайте **ImageLibrary** с [umod.org](https://umod.org/plugins/image-library).
2. Поместите файл `ImageLibrary.cs` в папку `oxide/plugins/`.

:::warning Важно
Без ImageLibrary плагин Hit Markers не сможет корректно отображать иконки.
:::

## Шаг 2: Установите плагин

1. Скопируйте файл `HitMarkers.cs` в папку `oxide/plugins/`.
2. Плагин загрузится автоматически.

Файл конфигурации:
```
oxide/config/HitMarkers.json
```

## Шаг 3: Проверьте работу

1. Зайдите на сервер.
2. Введите `/marker` в чат.
3. Откроется окно настроек маркеров.
4. Ударьте любого игрока, NPC или строение -- должны появиться маркеры урона.

## Шаг 4: Настройте конфигурацию

Откройте `oxide/config/HitMarkers.json`:

- **Commands** -- чат-команды для открытия настроек
- **Permission** -- право доступа (пустое -- для всех)
- **Show damage to NPC** -- отображать урон по NPC
- **Show damage to animals** -- отображать урон по животным
- **Marker removal time** -- время отображения маркера
- **Buttons** -- включение/отключение режимов (Text, Icon, Health Line, Buildings)
- **Default Values** -- значения по умолчанию для новых игроков

## Шаг 5: Перезагрузите плагин

```
oxide.reload HitMarkers
```

---
title: "Установка Ultimate Leaderboard"
description: "Пошаговое руководство по установке и настройке плагина Ultimate Leaderboard для Rust сервера."
sidebar_position: 2
---

# Установка Ultimate Leaderboard

Это руководство проведёт вас через процесс установки продвинутой таблицы лидеров.

## Шаг 1: Установите зависимости

### ImageLibrary (обязательно)

1. Скачайте **ImageLibrary** с [umod.org](https://umod.org/plugins/image-library).
2. Поместите файл `ImageLibrary.cs` в папку `oxide/plugins/`.
3. Убедитесь, что плагин загрузился без ошибок.

### Дополнительные зависимости (опционально)

- **Notify** -- для графических уведомлений
- **ServerPanel** -- для интеграции в серверное меню
- **LangAPI** -- для мультиязычности
- **Clans** -- для кланового рейтинга
- **Friends** -- для фильтрации друзей

## Шаг 2: Установите плагин

1. Скопируйте файл `UltimateLeaderboard.cs` в папку `oxide/plugins/`.
2. Плагин загрузится автоматически и создаст базу данных SQLite.
3. Проверьте консоль на наличие ошибок.

Файл конфигурации:
```
oxide/config/UltimateLeaderboard.json
```

## Шаг 3: Выберите хранилище данных

По умолчанию используется SQLite. Для MySQL измените настройки хранилища:

```json
{
 "Data Storage Settings": {
 "Storage Type": "MySQL",
 "MySQL": {
 "Host": "localhost",
 "Port": 3306,
 "DatabaseName": "rust",
 "Username": "root",
 "Password": ""
 }
 }
}
```

## Шаг 4: Настройте права (опционально)

Если нужно ограничить доступ:

```json
"Permission to use plugin (ex: ultimateleaderboard.use)": "ultimateleaderboard.use"
```

```
oxide.grant group default ultimateleaderboard.use
```

Дополнительные права:

```
oxide.grant group admin ultimateleaderboard.profile
oxide.grant group admin ultimateleaderboard.hide.self
```

## Шаг 5: Настройте кэширование

Рекомендуемые параметры кэширования:

```json
{
 "Leaderboard Cache Interval (seconds)": 600,
 "Leaderboard Cache Batch Size (players per batch)": 10
}
```

## Шаг 6: Проверьте работу

1. Зайдите на сервер.
2. `/leaderboard` или `/stats` -- откроется интерфейс.

## Шаг 7: Перезагрузите плагин

```
oxide.reload UltimateLeaderboard
```

## Обновление плагина

1. Замените файл `UltimateLeaderboard.cs`.
2. Плагин автоматически обновит конфигурацию.

:::warning Важно
При переходе между SQLite и MySQL используйте команду `leaderboard.migrate` для миграции данных.
:::

:::note Примечание
Рекомендуется сохранять резервную копию базы данных перед обновлением.
:::

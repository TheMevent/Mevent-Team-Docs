---
title: "Установка Coin Flipping"
description: "Пошаговое руководство по установке и настройке плагина Coin Flipping для Rust сервера."
sidebar_position: 2
---

# Установка Coin Flipping

Это руководство проведёт вас через весь процесс установки плагина на вашем сервере.

## Шаг 1: Установите зависимости

### ImageLibrary (обязательно)

Плагин Coin Flipping требует ImageLibrary для работы с изображениями в интерфейсе.

1. Скачайте **ImageLibrary** с [umod.org](https://umod.org/plugins/image-library).
2. Поместите файл `ImageLibrary.cs` в папку `oxide/plugins/`.
3. Убедитесь, что плагин загрузился без ошибок.

### Экономика (по выбору)

Если вы хотите использовать виртуальную валюту, установите один из поддерживаемых плагинов экономики:
- **Economics** -- стандартный плагин экономики
- **ServerRewards** -- система наград сервера
- Любой другой плагин с хуками `Deposit`, `Withdraw`, `Balance`

Если предпочитаете использовать игровые предметы (например, scrap), дополнительный плагин не нужен.

## Шаг 2: Установите плагин

1. Скопируйте файл `CoinFlipping.cs` в папку `oxide/plugins/` вашего сервера.
2. Плагин загрузится автоматически.
3. Проверьте консоль на наличие ошибок.

Файл конфигурации будет автоматически создан по пути:
```
oxide/config/CoinFlipping.json
```

## Шаг 3: Настройте права доступа

Выдайте основные права всем игрокам:

```
oxide.grant group default coinflipping.use
oxide.grant group default coinflipping.npcs
oxide.grant group default coinflipping.players
oxide.grant group default coinflipping.createroom
```

:::info Примечание
Все права настраиваются в конфигурации. Вы можете изменить названия прав по умолчанию.
:::

## Шаг 4: Настройте экономику

Откройте файл `oxide/config/CoinFlipping.json` и настройте секцию `Economy`:

**Для плагина экономики:**
```json
{
 "Economy": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance"
 }
}
```

**Для предметов:**
```json
{
 "Economy": {
 "Type (Plugin/Item)": "Item",
 "ShortName": "scrap",
 "Skin": 0
 }
}
```

## Шаг 5: Проверьте работу

1. Зайдите на сервер.
2. Введите в чат `/flip`.
3. Должен открыться интерфейс с выбором режима игры.

## Шаг 6: Перезагрузите плагин

После изменения конфигурации перезагрузите плагин:

```
oxide.reload CoinFlipping
```

## Обновление плагина

При обновлении плагина:

1. Замените файл `CoinFlipping.cs` новой версией.
2. Плагин автоматически обновит конфигурацию, сохранив ваши настройки.
3. Перезагрузите плагин командой `oxide.reload CoinFlipping`.

:::note Примечание
Рекомендуется сохранять резервную копию конфигурации перед обновлением.
:::

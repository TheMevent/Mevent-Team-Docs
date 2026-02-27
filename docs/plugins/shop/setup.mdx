---
title: "Установка Shop"
description: "Пошаговое руководство по установке и настройке плагина Shop."
sidebar_position: 2
---

# Установка Shop

## Предварительные требования

Перед установкой убедитесь, что у вас есть:

- Сервер Rust с **Oxide** или **Carbon**
- Плагин **ImageLibrary** (обязательно)
- Плагин экономики, например **Economics** или **ServerRewards** (рекомендуется)
- Доступ к файловой системе сервера

:::danger Важно
Без **ImageLibrary** магазин не будет работать. Установите его перед началом.
:::

## Шаг 1: Установка зависимостей

1. Скачайте и установите **ImageLibrary** в папку `oxide/plugins`.
2. (Рекомендуется) Установите **Economics** или другой плагин экономики.
3. (Рекомендуется) Установите **Notify** или **UINotify** для уведомлений.
4. (Опционально) Установите **LangAPI** для мультиязычной поддержки.

## Шаг 2: Установка плагина

1. Поместите файл `Shop.cs` в папку `oxide/plugins` (или `carbon/plugins`).
2. Если у вас есть дополнительные файлы (`ShopConverter.cs`, `ShopMeventTools.cs`), поместите их в ту же папку.
3. Дождитесь автоматической компиляции.

## Шаг 3: Установка шаблона магазина

После первого запуска магазин будет пустым. Необходимо установить шаблон:

1. Зайдите на сервер с правами администратора.
2. Убедитесь, что у вас есть право `shop.admin`:
 ```
 oxide.grant user ВашНик shop.admin
 ```
3. Введите в чат:
 ```
 /shop.install
 ```
4. Следуйте инструкциям для выбора шаблона.

:::tip Совет
Шаблон -- это набор предметов, категорий и цен. Вы можете редактировать его после установки через интерфейс администратора.
:::

## Шаг 4: Настройка экономики

Откройте конфигурационный файл:
- **Oxide:** `oxide/config/Shop.json`
- **Carbon:** `carbon/configs/Shop.json`

### Использование Economics

```json
"Economy": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance",
 "ShortName": "scrap",
 "Display Name (empty - default)": "",
 "Skin": 0
}
```

### Использование предметов как валюты

```json
"Economy": {
 "Type (Plugin/Item)": "Item",
 "ShortName": "scrap",
 "Display Name (empty - default)": "",
 "Skin": 0
}
```

В этом случае валютой будет определённый предмет из инвентаря игрока (например, scrap).

### Дополнительные валюты

Вы можете добавить вторую валюту (например, ServerRewards) в раздел `Additional Economics`:

```json
"Additional Economics": [
 {
 "ID": 1,
 "Enabled": true,
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "ServerRewards",
 "Balance add hook": "AddPoints",
 "Balance remove hook": "TakePoints",
 "Balance show hook": "CheckPoints"
 }
]
```

## Шаг 5: Настройка прав доступа

### Доступ к магазину

Если поле `Permission` пустое, магазин доступен всем. Для ограничения:

```
oxide.grant group default shop.use
```

### Права администраторов

```
oxide.grant user ВашНик shop.admin
oxide.grant user ВашНик shop.setvm
oxide.grant user ВашНик shop.setnpc
```

### Скидки

```
oxide.grant group vip shop.vip
```

## Шаг 6: Привязка к NPC (опционально)

1. Разместите NPC на сервере (через плагин NPC или другой способ).
2. Посмотрите на NPC и выполните:
 ```
 /shop.setnpc
 ```
3. В конфигурации появится запись с ID NPC и категориями магазина.

Можно настроить конкретные категории для каждого NPC:

```json
"NPC Shops (NPC ID - shop categories)": {
 "1234567": {
 "Permission": "",
 "Categories": ["Tool", "Food"]
 },
 "7654321": {
 "Permission": "",
 "Categories": ["Weapon", "Ammunition"]
 }
}
```

Используйте `"*"` в категориях, чтобы показать все категории.

## Шаг 7: Привязка к торговому автомату (опционально)

1. Разместите торговый автомат на сервере.
2. Посмотрите на него и выполните:
 ```
 /shop.setvm
 ```
3. В конфигурации появится запись с Entity ID автомата.

```json
"Custom Vending Machines (Entity ID - settings)": {
 "123343941": {
 "Permission": "",
 "Categories": ["Cars", "Misc"]
 }
}
```

## Шаг 8: Перезагрузка

После завершения настройки:

```
o.reload Shop
```

:::tip Готово!
Теперь игроки могут использовать `/shop` для открытия магазина. Администраторы могут редактировать товары, категории и цены прямо в игровом интерфейсе.
:::

## Настройка Auto-Wipe

```json
"Auto-Wipe Settings": {
 "Cooldown": true,
 "Players": true,
 "Limits": true
}
```

- **Cooldown** -- сбросить кулдауны покупок при вайпе
- **Players** -- сбросить данные игроков
- **Limits** -- сбросить лимиты покупок

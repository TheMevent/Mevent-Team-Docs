---
title: "Конфигурация Shop"
description: "Полный справочник по всем настройкам конфигурации плагина Shop."
sidebar_position: 3
---

# Конфигурация Shop

Файл конфигурации находится по пути:
- **Oxide:** `oxide/config/Shop.json`
- **Carbon:** `carbon/configs/Shop.json`

## Основные настройки

| Параметр | По умолчанию | Допустимые значения | Описание |
|---|---|---|---|
| Permission to use plugin | `""` (пусто) | Строка | Право доступа к магазину. Пусто = доступен всем |
| Commands | `["shop", "shops"]` | Массив строк | Чат-команды для открытия магазина |
| Enable money transfers between players? | `true` | `true` / `false` | Разрешить переводы денег между игроками |
| Allow money transfers to offline players? | `false` | `true` / `false` | Разрешить переводы оффлайн-игрокам |
| Enable selling items? | `true` | `true` / `false` | Разрешить игрокам продавать предметы |
| Enable logging to the console? | `true` | `true` / `false` | Логирование в консоль сервера |
| Enable logging to the file? | `true` | `true` / `false` | Логирование в файл |
| Load images when logging into the server? | `true` | `true` / `false` | Загружать изображения при подключении игрока |
| Work with Notify? | `true` | `true` / `false` | Использовать плагин Notify для уведомлений |
| Enable Offline Image Mode | `false` | `true` / `false` | Режим офлайн-изображений |
| Work with LangAPI? | `true` | `true` / `false` | Поддержка мультиязычности |
| Can admins edit? (by flag) | `false` | `true` / `false` | Разрешить редактирование по флагу admin (вместо права) |
| Block (NoEscape) | `false` | `true` / `false` | Блокировка магазина при активном NoEscape |
| Blocking the opening in duels? | `false` | `true` / `false` | Запретить открытие магазина во время дуэлей |

## Настройки блокировок

| Параметр | По умолчанию | Описание |
|---|---|---|
| Wipe Block | `false` | Блокировка магазина после вайпа |
| Wipe Cooldown | `3600` | Длительность блокировки после вайпа (в секундах) |
| Respawn Block | `true` | Блокировка магазина после респавна |
| Respawn Cooldown | `60` | Длительность блокировки после респавна (в секундах) |
| Cooldown between actions (in seconds) | `0.1` | Задержка между действиями (защита от спама) |
| Delay between loading images | `1.0` | Задержка между загрузкой изображений (в секундах) |

## Настройки экономики (Economy)

| Параметр | По умолчанию | Описание |
|---|---|---|
| Type (Plugin/Item) | `"Plugin"` | Тип экономики: плагин или предмет |
| Plugin name | `"Economics"` | Название плагина экономики |
| Balance add hook | `"Deposit"` | Хук для начисления средств |
| Balance remove hook | `"Withdraw"` | Хук для списания средств |
| Balance show hook | `"Balance"` | Хук для получения баланса |
| ShortName | `"scrap"` | Короткое имя предмета (если тип = Item) |
| Display Name | `""` | Пользовательское название валюты |
| Skin | `0` | Скин предмета (если тип = Item) |

:::info Информация
При типе `Plugin` валюта управляется внешним плагином (Economics, ServerRewards и др.). При типе `Item` валютой служит конкретный предмет из инвентаря игрока.
:::

## Дополнительные валюты (Additional Economics)

Позволяет использовать несколько валют одновременно. Каждая валюта может быть привязана к разным плагинам или предметам.

```json
"Additional Economics": [
 {
 "ID": 1,
 "Enabled": true,
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "ServerRewards",
 "Balance add hook": "AddPoints",
 "Balance remove hook": "TakePoints",
 "Balance show hook": "CheckPoints",
 "ShortName": "scrap",
 "Display Name (empty - default)": "",
 "Skin": 0
 }
]
```

## Система скидок (Discount)

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enabled | `true` | Включить систему скидок |
| Discount (%) | см. ниже | Процент скидки для каждого права |

```json
"Discount": {
 "Enabled": true,
 "Discount (%)": {
 "shop.default": 0,
 "shop.vip": 10
 }
}
```

Игрок с правом `shop.vip` получит скидку 10% на все покупки. Если у игрока несколько прав, применяется наибольшая скидка.

## NPC-магазины

```json
"NPC Shops (NPC ID - shop categories)": {
 "1234567": {
 "Permission": "",
 "Categories": ["Tool", "Food"]
 },
 "7654321": {
 "Permission": "",
 "Categories": ["Weapon", "Ammunition"]
 },
 "4644687478": {
 "Permission": "shop.usenpc",
 "Categories": ["*"]
 }
}
```

| Поле | Описание |
|---|---|
| Ключ (NPC ID) | Steam ID NPC |
| Permission | Право доступа для этого NPC (пусто = для всех) |
| Categories | Список категорий, доступных у этого NPC. `"*"` = все категории |

## Торговые автоматы

```json
"Custom Vending Machines (Entity ID - settings)": {
 "123343941": {
 "Permission": "",
 "Categories": ["Cars", "Misc"]
 }
}
```

Привязка категорий магазина к конкретным торговым автоматам на карте.

## Настройки контейнеров для продажи

```json
"Settings available containers for selling item": {
 "Enabled": true,
 "Available Containers (main, belt, wear)": ["main", "belt"]
}
```

Определяет, из каких контейнеров инвентаря игроки могут продавать предметы.

## Настройки повторной покупки (Buy Again)

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enabled | `false` | Включить функцию повторной покупки |
| Permission | `""` | Право доступа (пусто = для всех) |
| Image | `"assets/icons/history_servers.png"` | Иконка кнопки |

## Настройки форматирования

| Параметр | По умолчанию | Описание |
|---|---|---|
| Buy Price Format | `"G"` | Формат отображения цены покупки |
| Sell Price Format | `"G"` | Формат отображения цены продажи |
| Shopping Bag Cost Format | `"G"` | Формат стоимости в корзине |
| Balance Format | `"G"` | Формат отображения баланса |

## Заблокированные скины

```json
"Blocked skins for sell": {
 "short name": [52, 25],
 "short name 2": [52, 25]
}
```

Предметы с указанными скинами нельзя продать в магазине.

## Настройки Auto-Wipe

| Параметр | По умолчанию | Описание |
|---|---|---|
| Cooldown | `true` | Сбросить кулдауны при вайпе |
| Players | `true` | Сбросить данные игроков при вайпе |
| Limits | `true` | Сбросить лимиты покупок при вайпе |

## Настройки уведомлений

Каждое уведомление можно настроить индивидуально:

```json
"General Notifications (message - settings notification)": {
 "NoPermission": { "Type": 1, "Show notify?": true },
 "ReceivedItems": { "Type": 0, "Show notify?": true },
 "SellNotify": { "Type": 0, "Show notify?": true }
}
```

| Поле | Описание |
|---|---|
| Type | Тип уведомления (0 = успех, 1 = ошибка) |
| Show notify? | Показывать визуальное уведомление (false = только в чат) |

## Настройки Discord-логирования

```json
"Discord Logging Settings": {
 "Buy Settings": {
 "Enabled": false,
 "Discord Webhook URL": "",
 "Color (Decimal format)": 3066993,
 "Title": "Shop Purchase",
 "Footer text": "{username} bought {item} x{amount} for {price}"
 },
 "Sell Settings": {
 "Enabled": false,
 "Discord Webhook URL": "",
 "Color (Decimal format)": 15158332,
 "Title": "Shop Sale",
 "Footer text": "{username} sold {item} x{amount} for {price}"
 },
 "Transfer Settings": {
 "Enabled": false,
 "Discord Webhook URL": "",
 "Color (Decimal format)": 3447003,
 "Title": "Money Transfer",
 "Footer text": "Transferred {amount} from {username} to {targetname}"
 }
}
```

### Переменные для шаблонов

**Покупка/Продажа:** `{username}`, `{steamid}`, `{item}`, `{amount}`, `{price}`

**Переводы:** `{username}`, `{steamid}`, `{targetname}`, `{targetid}`, `{amount}`

## Настройки интерфейса

| Параметр | По умолчанию | Описание |
|---|---|---|
| Display Type | `"OverlayNonScaled"` | Тип отображения интерфейса |
| Round Digits | `5` | Количество знаков после запятой для округления |

Цвета интерфейса настраиваются через HEX-значения с прозрачностью.

<details>
<summary>Полная конфигурация по умолчанию (основные параметры)</summary>

```json
{
 "Permission to use plugin (ex: shop.use)": "",
 "Commands": ["shop", "shops"],
 "Enable money transfers between players?": true,
 "Allow money transfers to offline players?": false,
 "Enable selling items?": true,
 "Enable logging to the console?": true,
 "Enable logging to the file?": true,
 "Load images when logging into the server?": true,
 "Work with Notify?": true,
 "Enable Offline Image Mode": false,
 "Work with LangAPI?": true,
 "Can admins edit? (by flag)": false,
 "Block (NoEscape)": false,
 "Wipe Block": false,
 "Wipe Cooldown": 3600.0,
 "Respawn Block": true,
 "Respawn Cooldown": 60.0,
 "Blocking the opening in duels?": false,
 "Cooldown between actions (in seconds)": 0.1,
 "Delay between loading images": 1.0,
 "Economy": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance",
 "ShortName": "scrap",
 "Display Name (empty - default)": "",
 "Skin": 0
 },
 "Additional Economics": [
 {
 "ID": 1,
 "Enabled": true,
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "ServerRewards",
 "Balance add hook": "AddPoints",
 "Balance remove hook": "TakePoints",
 "Balance show hook": "CheckPoints",
 "ShortName": "scrap",
 "Display Name (empty - default)": "",
 "Skin": 0
 }
 ],
 "NPC Shops (NPC ID - shop categories)": {
 "1234567": {
 "Permission": "",
 "Categories": ["Tool", "Food"]
 }
 },
 "Custom Vending Machines (Entity ID - settings)": {
 "123343941": {
 "Permission": "",
 "Categories": ["Cars", "Misc"]
 }
 },
 "Settings available containers for selling item": {
 "Enabled": true,
 "Available Containers (main, belt, wear)": ["main", "belt"]
 },
 "Buy Again Settings": {
 "Enabled": false,
 "Permission (ex: shop.buyagain)": "",
 "Image": "assets/icons/history_servers.png"
 },
 "Formatting Settings": {
 "Buy Price Format": "G",
 "Sell Price Format": "G",
 "Shopping Bag Cost Format": "G",
 "Balance Format": "G"
 },
 "Discount": {
 "Enabled": true,
 "Discount (%)": {
 "shop.default": 0,
 "shop.vip": 10
 }
 },
 "Auto-Wipe Settings": {
 "Cooldown": true,
 "Players": true,
 "Limits": true
 },
 "Blocked skins for sell": {},
 "Discord Logging Settings": {
 "Buy Settings": {
 "Enabled": false,
 "Discord Webhook URL": "",
 "Color (Decimal format)": 3066993,
 "Title": "Shop Purchase"
 },
 "Sell Settings": {
 "Enabled": false,
 "Discord Webhook URL": "",
 "Color (Decimal format)": 15158332,
 "Title": "Shop Sale"
 },
 "Transfer Settings": {
 "Enabled": false,
 "Discord Webhook URL": "",
 "Color (Decimal format)": 3447003,
 "Title": "Money Transfer"
 }
 }
}
```

</details>

---
title: "Конфигурация Bank System"
description: "Полный справочник по всем настройкам конфигурации плагина Bank System."
sidebar_position: 3
---

# Конфигурация Bank System

Файл конфигурации находится по пути:
- **Oxide:** `oxide/config/BankSystem.json`
- **Carbon:** `carbon/configs/BankSystem.json`

## Основные настройки

| Параметр | По умолчанию | Допустимые значения | Описание |
|---|---|---|---|
| Work with LangAPI? | `true` | `true` / `false` | Включить поддержку мультиязычности через LangAPI |
| Work with Notify? | `true` | `true` / `false` | Использовать плагин Notify для уведомлений |
| Enable Offline Image Mode | `false` | `true` / `false` | Режим офлайн-изображений (если сервер не имеет доступа к интернету) |
| Commands | `["bank"]` | Массив строк | Чат-команды для открытия интерфейса банка |
| Permission | `""` (пусто) | Строка | Право доступа для использования банка. Если пусто -- доступен всем |
| Starting balance | `100` | Целое число >= 0 | Начальный баланс при создании банковской карты |
| Card auto-creation | `false` | `true` / `false` | Автоматически создавать карту при первом подключении |
| Use card expiration date? | `true` | `true` / `false` | Включить срок действия банковской карты |
| Card expiry date (in days) | `7` | Целое число > 0 | Срок действия карты в днях |

:::tip Рекомендация
Установите `Card auto-creation` в `true`, чтобы новые игроки сразу получали карту и могли пользоваться банкоматами без дополнительных действий.
:::

## Настройки валюты (Currency Settings)

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enable item split control? | `true` | Контроль разделения предметов. Отключите, если возникают ошибки с плагинами стакирования |
| Display Name | `"RUSTNote"` | Название валюты в игре |
| Short Name | `"sticks"` | Базовый предмет Rust для создания валюты |
| Skin | `2536195910` | Скин предмета (определяет внешний вид банкноты) |

:::danger Важно
Не меняйте `Short Name` и `Skin` после запуска сервера с активными игроками. Это приведёт к тому, что существующая валюта перестанет распознаваться.
:::

## Настройки банкомата (ATM Settings)

| Параметр | По умолчанию | Описание |
|---|---|---|
| Minimum deposit (amount) | `1` | Минимальная сумма для пополнения |
| Minimum withdrawal (amount) | `1` | Минимальная сумма для снятия |
| Enable Deposit fee? | `true` | Включить комиссию за пополнение |
| Minimum deposit fee | `0` | Минимальная комиссия за пополнение (%) |
| Maximum deposit fee | `10` | Максимальная комиссия за пополнение (%) |
| Default deposit fee | `1` | Комиссия по умолчанию при пополнении (%) |
| Step deposit fee | `0.1` | Шаг изменения комиссии за пополнение |
| Enable Withdrawal fee? | `true` | Включить комиссию за снятие |
| Minimum withdrawal fee | `0` | Минимальная комиссия за снятие (%) |
| Maximum withdrawal fee | `10` | Максимальная комиссия за снятие (%) |
| Default withdrawal fee | `1` | Комиссия по умолчанию при снятии (%) |
| Step withdrawal fee | `0.1` | Шаг изменения комиссии за снятие |
| Enable breakage? | `true` | Включить износ банкомата при использовании |
| Default breakage percentage | `1` | Процент износа за каждую операцию |
| Display Name | `"ATM"` | Название банкомата |
| Skin | `2551771822` | Скин для банкомата (торговый автомат с этим скином = банкомат) |
| Shop Name | `"ATM #{id}"` | Название на карте. Переменные: `{id}`, `{owner}` |
| Commands to open ATM menu | `["secret.open.atm"]` | Команды для открытия меню банкомата |
| Permission to open ATM menu via command | `"banksystem.openatm"` | Право для открытия банкомата через команду |
| Disable the close button in the ATM header | `false` | Скрыть кнопку закрытия в заголовке банкомата |

### Процент износа по правам доступа

```json
"Breakage percentage during operation": {
 "banksystem.vip": 0.7,
 "banksystem.premium": 0.5
}
```

Игроки с соответствующими правами будут вызывать меньший износ банкомата.

### Настройки ремонта

```json
"Repair Settings": {
 "Items (for 1%)": [
 { "Short Name": "scrap", "Amount": 2, "Skin": 0, "Title": "" },
 { "Short Name": "metalpipe", "Amount": 1, "Skin": 0, "Title": "" },
 { "Short Name": "metal.fragments", "Amount": 15, "Skin": 0, "Title": "" }
 ]
}
```

Количество ресурсов указано за 1% ремонта. Если банкомат износился на 30%, потребуется 30x указанных ресурсов.

### Спавн на монументах

```json
"Spawn Settings": {
 "Monuments": {
 "compound": {
 "Enabled": true,
 "Display Name": "ATM",
 "Position": { "x": -3.5, "y": 1.15, "z": 2.7 },
 "Rotation": -90.0,
 "Deposit Fee": 0.0,
 "Withdraw Fee": 0.0
 },
 "bandit": {
 "Enabled": true,
 "Display Name": "ATM",
 "Position": { "x": 34.2, "y": 2.35, "z": -24.7 },
 "Rotation": 135.0,
 "Deposit Fee": 0.0,
 "Withdraw Fee": 0.0
 }
 }
}
```

## Настройки отслеживания (Tracking Settings)

| Параметр | По умолчанию | Описание |
|---|---|---|
| Handing out an award? | `false` | Выдавать валюту за ресурсы на руки (вместо зачисления на счёт) |
| Cost Table | см. ниже | Стоимость за добычу и лут ресурсов |
| Collectible Items Cost Table | см. ниже | Стоимость за сбор предметов на земле |

```json
"Cost Table (shortname - cost)": {
 "sulfur.ore": 5.0,
 "metal.ore": 5.0,
 "hq.metal.ore": 5.0,
 "stone.ore": 5.0,
 "crate_elite": 10.0,
 "crate_normal": 7.0,
 "crate_normal_2": 4.0
},
"Collectible Items Cost Table (shortname - cost)": {
 "sulfur.ore": 0.5,
 "metal.ore": 0.5,
 "hq.metal.ore": 0.5,
 "stones": 0.5
}
```

## Настройки экономики (Economy Settings)

| Параметр | По умолчанию | Описание |
|---|---|---|
| Use own economic system? | `true` | Использовать встроенную экономику плагина |
| Plugin name | `"Economics"` | Название внешнего плагина экономики |
| Balance add hook | `"Deposit"` | Хук для начисления средств |
| Balance remove hook | `"Withdraw"` | Хук для списания средств |
| Balance show hook | `"Balance"` | Хук для получения баланса |

## Настройки дропа (Drop Settings)

```json
"Drop Settings": [
 {
 "Enabled": true,
 "Prefab": "assets/bundled/prefabs/radtown/crate_normal.prefab",
 "Chance": 50,
 "Min Amount": 2,
 "Max Amount": 5
 },
 {
 "Enabled": true,
 "Prefab": "assets/bundled/prefabs/radtown/loot_barrel_2.prefab",
 "Chance": 5,
 "Min Amount": 2,
 "Max Amount": 5
 },
 {
 "Enabled": true,
 "Prefab": "assets/bundled/prefabs/radtown/loot_barrel_1.prefab",
 "Chance": 5,
 "Min Amount": 2,
 "Max Amount": 5
 }
]
```

| Параметр | Описание |
|---|---|
| Enabled | Включить дроп для данного контейнера |
| Prefab | Префаб контейнера (ящик, бочка и т.д.) |
| Chance | Шанс выпадения (0-100) |
| Min Amount | Минимальное количество валюты |
| Max Amount | Максимальное количество валюты |

## Настройки NPC

```json
"NPC Settings": {
 "NPCs": ["1234567", "7654321"]
}
```

Список Steam ID NPC, при взаимодействии с которыми откроется интерфейс банка.

## Настройки вайпа

| Параметр | По умолчанию | Описание |
|---|---|---|
| Wipe Players? | `false` | Очистить данные игроков при вайпе |
| Wipe Logs? | `true` | Очистить логи при вайпе |
| Wipe ATMs? | `true` | Очистить данные банкоматов при вайпе |

## Настройки логирования

| Параметр | По умолчанию | Описание |
|---|---|---|
| Collect Gather logs? | `true` | Собирать логи добычи ресурсов |
| Collect Transfers logs? | `true` | Собирать логи переводов |

## Настройки интерфейса (UI Settings)

| Параметр | По умолчанию | Описание |
|---|---|---|
| Bank \| Width | `900` | Ширина окна банка |
| Bank \| Height | `595` | Высота окна банка |
| Show Transactions history? | `true` | Показывать историю транзакций |
| Show Gather history? | `true` | Показывать историю добычи |
| Show card? | `true` | Показывать банковскую карту в интерфейсе |
| Show Transfers? | `true` | Показывать блок переводов |

## Настройки цветов

Все цвета задаются в HEX-формате с прозрачностью (0-100):

```json
"Colors": {
 "First color": { "HEX": "#0E0E10", "Opacity (0 - 100)": 100 },
 "Second color": { "HEX": "#161617", "Opacity (0 - 100)": 100 },
 "Third color": { "HEX": "#4B68FF", "Opacity (0 - 100)": 100 }
}
```

## Изображения

| Параметр | Описание |
|---|---|
| Card Image | URL изображения банковской карты |
| Transit Image | URL изображения кнопки пополнения |
| Withdraw Image | URL изображения кнопки снятия |
| Transfer Image | URL изображения кнопки перевода |
| Exit Image | URL изображения кнопки выхода |

<details>
<summary>Полная конфигурация по умолчанию</summary>

```json
{
 "Work with LangAPI?": true,
 "Work with Notify?": true,
 "Enable Offline Image Mode": false,
 "Commands": ["bank"],
 "Permission (example: banksystem.use)": "",
 "Starting balance": 100,
 "Card Image": "https://gitlab.com/TheMevent/PluginsStorage/raw/main/Images/BankSystem/card.png",
 "Transit Image": "https://gitlab.com/TheMevent/PluginsStorage/raw/main/Images/BankSystem/deposit.png",
 "Withdraw Image": "https://gitlab.com/TheMevent/PluginsStorage/raw/main/Images/BankSystem/withdraw.png",
 "Transfer Image": "https://gitlab.com/TheMevent/PluginsStorage/raw/main/Images/BankSystem/transfer.png",
 "Exit Image": "https://gitlab.com/TheMevent/PluginsStorage/raw/main/Images/BankSystem/exit.png",
 "Disable the close button in the ATM header": false,
 "Currency Settings": {
 "Enable item split control?": true,
 "Display Name": "RUSTNote",
 "Short Name": "sticks",
 "Skin": 2536195910
 },
 "Card auto-creation": false,
 "Use card expiration date?": true,
 "Card expiry date (in days)": 7,
 "ATM Settings": {
 "Minimum deposit (amount)": 1.0,
 "Minimum withdrawal (amount)": 1.0,
 "Enable Deposit fee?": true,
 "Minimum deposit fee": 0.0,
 "Maximum deposit fee": 10.0,
 "Default deposit fee": 1.0,
 "Step deposit fee": 0.1,
 "Enable Withdrawal fee?": true,
 "Minimum withdrawal fee": 0.0,
 "Maximum withdrawal fee": 10.0,
 "Default withdrawal fee": 1.0,
 "Step withdrawal fee": 0.1,
 "Enable breakage?": true,
 "Default breakage percentage during operation": 1.0,
 "Breakage percentage during operation": {
 "banksystem.vip": 0.7,
 "banksystem.premium": 0.5
 },
 "Repair Settings": {
 "Items (for 1%)": [
 { "Short Name": "scrap", "Amount": 2.0, "Skin": 0, "Title": "" },
 { "Short Name": "metalpipe", "Amount": 1.0, "Skin": 0, "Title": "" },
 { "Short Name": "metal.fragments", "Amount": 15.0, "Skin": 0, "Title": "" }
 ]
 },
 "Display Name": "ATM",
 "Skin": 2551771822,
 "Spawn Settings": {
 "Monuments": {
 "compound": {
 "Enabled": true,
 "Display Name": "ATM",
 "Position": { "x": -3.5, "y": 1.15, "z": 2.7 },
 "Rotation": -90.0,
 "Deposit Fee": 0.0,
 "Withdraw Fee": 0.0
 },
 "bandit": {
 "Enabled": true,
 "Display Name": "ATM",
 "Position": { "x": 34.2, "y": 2.35, "z": -24.7 },
 "Rotation": 135.0,
 "Deposit Fee": 0.0,
 "Withdraw Fee": 0.0
 }
 },
 "Settings for ATMs from MonumentAddons": {
 "Display Name": "ATM",
 "Deposit Fee": 0.0,
 "Withdraw Fee": 0.0
 }
 },
 "Shop Name ({id} {owner})": "ATM #{id}",
 "Commands to open ATM menu": ["secret.open.atm"],
 "Permission to open ATM menu via command": "banksystem.openatm"
 },
 "Tracking Settings": {
 "Handing out an award?": false,
 "Cost Table (shortname - cost)": {
 "sulfur.ore": 5.0,
 "metal.ore": 5.0,
 "hq.metal.ore": 5.0,
 "stone.ore": 5.0,
 "crate_elite": 10.0,
 "crate_normal": 7.0,
 "crate_normal_2": 4.0
 },
 "Collectible Items Cost Table (shortname - cost)": {
 "sulfur.ore": 0.5,
 "metal.ore": 0.5,
 "hq.metal.ore": 0.5,
 "stones": 0.5
 }
 },
 "Wipe Settings": {
 "Wipe Players?": false,
 "Wipe Logs?": true,
 "Wipe ATMs?": true
 },
 "NPC Settings": {
 "NPCs": ["1234567", "7654321", "4644687478"]
 },
 "Economy Settings": {
 "Use own economic system?": true,
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance"
 },
 "Drop Settings": [
 {
 "Enabled": true,
 "Prefab": "assets/bundled/prefabs/radtown/crate_normal.prefab",
 "Chance": 50,
 "Min Amount": 2,
 "Max Amount": 5
 },
 {
 "Enabled": true,
 "Prefab": "assets/bundled/prefabs/radtown/loot_barrel_2.prefab",
 "Chance": 5,
 "Min Amount": 2,
 "Max Amount": 5
 },
 {
 "Enabled": true,
 "Prefab": "assets/bundled/prefabs/radtown/loot_barrel_1.prefab",
 "Chance": 5,
 "Min Amount": 2,
 "Max Amount": 5
 }
 ],
 "Log Settings": {
 "Collect Gather logs?": true,
 "Collect Transfers logs?": true
 }
}
```

</details>

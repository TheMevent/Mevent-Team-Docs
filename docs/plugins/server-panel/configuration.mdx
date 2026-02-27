---
title: "Конфигурация ServerPanel"
description: "Полный справочник по всем параметрам конфигурации плагина ServerPanel."
sidebar_position: 3
---

# Конфигурация ServerPanel

Файл конфигурации расположен по пути: `oxide/config/ServerPanel.json`

## Основные параметры

| Параметр | По умолчанию | Допустимые значения | Описание |
|---|---|---|---|
| Work with Notify? | `true` | `true` / `false` | Использовать ли плагин Notify или UINotify для отображения уведомлений. Если отключено, уведомления будут показываться в чате. |
| Enable Offline Image Mode | `false` | `true` / `false` | Загружать изображения из локальной папки вместо URL. Полезно для серверов без стабильного интернета. |
| Cooldown between actions (in seconds) | `0.2` | Число (секунды) | Минимальный интервал между действиями игрока в интерфейсе. Защита от спама кликами. |

:::tip Рекомендация
Значение "Cooldown between actions" в 0.2 секунды хорошо подходит для большинства серверов. Увеличивайте его только при проблемах с производительностью.
:::

## Экономика в шапке меню

Секция `"Economy Header Fields"` позволяет отображать баланс игрока в верхней части меню.

### Поддерживаемые экономические плагины

По умолчанию настроены три валюты:

| Экономический плагин | Описание |
|---|---|
| Economics | Стандартная валюта ($) |
| ServerRewards | Очки наград (RP) |
| BankSystem | Банковская система ($) |

### Параметры поля экономики

| Параметр | Описание | Рекомендация |
|---|---|---|
| Enabled | Включить отображение данной валюты | Отключите неиспользуемые |
| Type (Plugin/Item) | Тип валюты: плагин или игровой предмет | `Plugin` для большинства случаев |
| Plugin name | Название плагина-экономики | Должно точно совпадать с именем плагина |
| Balance show hook | Название функции для получения баланса | Зависит от плагина |
| Balance add hook | Название функции для добавления баланса | Зависит от плагина |
| Balance remove hook | Название функции для снятия баланса | Зависит от плагина |
| ShortName | Короткое имя предмета (для типа Item) | Например, `scrap` |
| Skin | ID скина предмета (0 -- любой) | 0 для стандартных предметов |
| Lang Key (for Title) | Ключ локализации для названия валюты | Должен быть в языковом файле |
| Lang Key (for Balance) | Ключ локализации для отображения баланса | Используйте `{0}` для подстановки суммы |
| Update key | Уникальный ключ для обновления значения | Должен быть уникальным |

### Добавление собственной валюты

Для добавления поддержки нового экономического плагина добавьте новую запись в массив `"Economy Header Fields"`:

```json
{
 "Enabled": true,
 "Economy Settings": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "ИмяПлагина",
 "Balance add hook": "ФункцияДобавления",
 "Balance remove hook": "ФункцияСнятия",
 "Balance show hook": "ФункцияБаланса",
 "ShortName": "",
 "Display Name (empty - default)": "",
 "Skin": 0,
 "Lang Key (for Title)": "Economy.Custom.Title",
 "Lang Key (for Balance)": "Economy.Custom.Balance"
 },
 "Update key (MUST BE UNIQUE)": "{economy_custom}"
}
```

:::warning Важно
Ключ обновления (Update key) должен быть уникальным для каждого поля экономики. Дублирование приведёт к некорректному обновлению данных.
:::

## Настройки блокировки

Секция `"Block Settings"` контролирует, когда игроки не могут открывать меню.

| Параметр | По умолчанию | Описание |
|---|---|---|
| Block the opening during a building block? | `false` | Запретить открытие меню, когда игрок находится в зоне блокировки строительства |
| Block the opening during a raid block? | `false` | Запретить открытие меню во время рейд-блока (требуется плагин NoEscape) |
| Block the opening during a combat block? | `false` | Запретить открытие меню во время боевого блока (требуется плагин NoEscape) |

:::info Примечание
Для работы блокировок рейд-блока и боевого блока необходимо установить плагин **NoEscape**.
:::

## Настройки автоматического открытия

Секция `"Auto-Open Settings"` управляет автоматическим показом меню.

| Параметр | По умолчанию | Описание |
|---|---|---|
| Show menu every time player connects to server? | `true` | Автоматически показывать меню каждый раз, когда игрок заходит на сервер. Если `false`, меню можно открыть только командой. |

## Данные плагина

Основное содержимое меню хранится не в конфигурации, а в файлах данных:

| Файл данных | Описание |
|---|---|
| `oxide/data/ServerPanel/Categories.json` | Категории меню (названия, команды, права, видимость) |
| `oxide/data/ServerPanel/Template.json` | Шаблон интерфейса (UI-настройки: размеры, цвета, позиции) |
| `oxide/data/ServerPanel/Localization.json` | Настройки локализации |
| `oxide/data/ServerPanel/HeaderFields.json` | Элементы шапки меню |
| `oxide/data/ServerPanel/Players.json` | Данные игроков (открытые меню) |

:::tip Совет
Для резервного копирования и переноса меню на другой сервер достаточно скопировать всю папку `oxide/data/ServerPanel/` вместе с файлом конфигурации.
:::

<details>
<summary>Полная конфигурация по умолчанию</summary>

```json
{
 "Work with Notify?": true,
 "Enable Offline Image Mode": false,
 "Cooldown between actions (in seconds)": 0.2,
 "Economy Header Fields": [
 {
 "Enabled": true,
 "Economy Settings": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance",
 "ShortName": "",
 "Display Name (empty - default)": "",
 "Skin": 0,
 "Lang Key (for Title)": "Economy.Economics.Title",
 "Lang Key (for Balance)": "Economy.Economics.Balance"
 },
 "Update key (MUST BE UNIQUE)": "{economy_economics}"
 },
 {
 "Enabled": true,
 "Economy Settings": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "ServerRewards",
 "Balance add hook": "AddPoints",
 "Balance remove hook": "TakePoints",
 "Balance show hook": "CheckPoints",
 "ShortName": "",
 "Display Name (empty - default)": "",
 "Skin": 0,
 "Lang Key (for Title)": "Economy.ServerRewards.Title",
 "Lang Key (for Balance)": "Economy.ServerRewards.Balance"
 },
 "Update key (MUST BE UNIQUE)": "{economy_server_rewards}"
 },
 {
 "Enabled": true,
 "Economy Settings": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "BankSystem",
 "Balance add hook": "API_BankSystemDeposit",
 "Balance remove hook": "API_BankSystemWithdraw",
 "Balance show hook": "API_BankSystemBalance",
 "ShortName": "",
 "Display Name (empty - default)": "",
 "Skin": 0,
 "Lang Key (for Title)": "Economy.BankSystem.Title",
 "Lang Key (for Balance)": "Economy.BankSystem.Balance"
 },
 "Update key (MUST BE UNIQUE)": "{economy_bank_system}"
 }
 ],
 "Block Settings": {
 "Block the opening during a building block?": false,
 "Block the opening during a raid block?": false,
 "Block the opening during a combat block?": false
 },
 "Auto-Open Settings": {
 "Show menu every time player connects to server?": true
 }
}
```

</details>

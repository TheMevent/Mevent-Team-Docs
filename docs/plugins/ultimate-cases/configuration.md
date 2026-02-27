---
title: "Конфигурация Ultimate Cases"
description: "Полный справочник по параметрам конфигурации плагина Ultimate Cases."
sidebar_position: 4
---

# Конфигурация Ultimate Cases

Файл конфигурации расположен по пути: `oxide/config/UltimateCases.json`

## Основные параметры

| Параметр | По умолчанию | Описание |
|---|---|---|
| Template | `Fullscreen` | Шаблон интерфейса |
| Open UI Commands | `["opencases", "cases"]` | Команды чата |
| Keys Modal Type | `Default` | Тип модального окна ключей |
| Work with Notify? | `true` | Использовать Notify |
| Enable Offline Image Mode | `false` | Режим оффлайн-изображений |
| Wipe on new map save | `false` | Вайп при новом сохранении |
| Work with LangAPI? | `true` | Использовать LangAPI |
| Cooldown between actions (in seconds) | `0.2` | Задержка между действиями |

## Настройки пользовательской экономики

| Параметр | По умолчанию | Описание |
|---|---|---|
| UseCustomEconomy | `false` | Использовать пользовательскую экономику |
| Type | `Plugin` | Тип: `Plugin` или `Item` |
| PluginName | `ServerRewards` | Название плагина экономики |
| PluginHookAdd | `AddPoints` | Хук добавления баланса |
| PluginHookRemove | `TakePoints` | Хук снятия баланса |
| PluginHookBalance | `CheckPoints` | Хук проверки баланса |

## Настройки обмена (Exchange Settings)

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enabled | `true` | Включить обмен валюты на ключи |

### Валюты (Currencies)

Каждая валюта имеет параметры:

| Параметр | Описание |
|---|---|
| ID | Уникальный идентификатор |
| Enabled | Включена ли валюта |
| Title | Отображаемое название |
| Icon | URL иконки |
| Type | Тип: `Plugin` или `Item` |
| PluginName / ItemShortname | Источник валюты |
| BaseExchangeRate | Базовый курс обмена (валюта за 1 ключ) |
| DailyLimit | Дневной лимит ключей |
| MinimumKeys | Минимум ключей за обмен |
| MaximumKeys | Максимум ключей за обмен |

### Скидки за объём (BulkDiscounts)

| Параметр | Описание |
|---|---|
| MinKeys | Минимальное количество ключей для скидки |
| DiscountPercent | Процент скидки |

### VIP-привилегии (PrivilegeSettings)

| Параметр | Описание |
|---|---|
| Permission | Право для VIP-привилегии |
| DiscountPercent | Процент скидки |
| CustomDailyLimit | Индивидуальный дневной лимит (0 -- по умолчанию) |

## Настройки раритета (Rarity Settings)

Раритет определяет визуальное оформление наград в зависимости от шанса выпадения:

| Параметр | Описание |
|---|---|
| Min / Max | Диапазон шанса (%) |
| Image | Фоновое изображение для данного раритета |
| RouletteItemBackgroundImage | Фон предмета в рулетке |

Пример раритетов по умолчанию:
- 0-1% -- легендарный
- 1-5% -- эпический
- 5-15% -- редкий
- 15-50% -- необычный
- 50-100% -- обычный

## NPC-торговцы на монументах

| Параметр | Описание |
|---|---|
| Enabled | Включить NPC-торговцев |
| DefaultCurrencyID | ID валюты по умолчанию |
| Bots | Список NPC с настройками |

Каждый бот настраивается с указанием монумента, позиции, валюты и внешнего вида.

<details>
<summary>Пример базовой конфигурации</summary>

```json
{
 "Template": "Fullscreen",
 "Open UI Commands": ["opencases", "cases"],
 "Work with Notify?": true,
 "Wipe on new map save": false,
 "Exchange Settings": {
 "Enabled": true,
 "Currencies": [
 {
 "ID": 0,
 "Title": "RP",
 "Type": "Plugin",
 "PluginName": "ServerRewards",
 "BaseExchangeRate": 100,
 "DailyLimit": 100
 }
 ],
 "BulkDiscounts": [
 {"MinKeys": 10, "DiscountPercent": 5},
 {"MinKeys": 25, "DiscountPercent": 10}
 ]
 }
}
```

</details>

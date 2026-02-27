---
title: "Конфигурация Vehicle Buy"
description: "Подробное описание всех параметров конфигурации плагина Vehicle Buy"
sidebar_position: 3
---

# Конфигурация Vehicle Buy

Конфигурационный файл расположен по пути:
```
oxide/config/VehicleBuy.json
```

## Основные параметры

| Параметр | Тип | По умолчанию | Описание |
|---|---|---|---|
| Work with Notify? | bool | `true` | Использовать Notify для уведомлений |
| Add log when the player buys a vehicle? | bool | `true` | Логировать покупки транспорта |
| Close UI after purchase? | bool | `false` | Закрывать интерфейс после покупки |
| Commands | массив строк | `["vehiclebuy", "vb", "vehicle"]` | Команды для открытия магазина |
| Callback commands | массив строк | `["callback"]` | Команды для отзыва транспорта |
| Pickup commands | массив строк | `["pickup"]` | Команды для подбора транспорта |
| Pickup distance | число | `5.0` | Дистанция подбора транспорта |
| Disable vehicles damage? | bool | `false` | Отключить урон купленному транспорту |
| Wipe on new map save | bool | `false` | Очищать данные при вайпе карты |
| Enable item split control? | bool | `true` | Контроль разделения предметов |

## Настройки валюты

| Параметр | Описание |
|---|---|
| Currency name economics | Название валюты Economics |
| Currency name Server Rewards | Название валюты Server Rewards |
| Currency name Bank System | Название валюты Bank System |

## Настройки транспорта

Каждый транспорт задаётся по уникальному ключу (например, `copter`, `car2`, `tugboat`) в секции `Vehicles`:

### Основные параметры транспорта

| Параметр | Тип | Описание |
|---|---|---|
| Show | bool | Показывать в магазине |
| Order | число | Порядок отображения |
| Name | строка | Название транспорта |
| Image link | строка | URL изображения для магазина |
| Spawn distance | число | Дистанция спавна от игрока |
| Fuel | число | Количество топлива при покупке |
| Sound on purchase | bool | Проигрывать звук при покупке |

### Настройки стоимости

| Параметр | Тип | Описание |
|---|---|---|
| Currency | число | Тип валюты: `0` -- предмет, `1` -- Economics, `2` -- Server Rewards |
| Price | число | Цена транспорта |
| Shortname | строка | Shortname предмета (если оплата предметом) |
| Skin | число | ID скина предмета |

### Настройки подбора и отзыва

| Параметр | Тип | Описание |
|---|---|---|
| Can pickup? | bool | Разрешить подбор транспорта |
| Pickup type | число | Способ подбора: `0` -- команда, `1` -- молоток |
| Pickup price | число | Стоимость подбора |
| Can recall? | bool | Разрешить отзыв транспорта |
| Recall cost need? | bool | Требуется ли оплата за отзыв |
| Recall price | число | Стоимость отзыва |

### Дополнительные параметры

| Параметр | Тип | Описание |
|---|---|---|
| Enable decay? | bool | Включить распад транспорта |
| Permission | строка | Индивидуальное право для покупки |
| Maximum number of purchases | число | Максимум покупок на игрока (`0` -- без ограничений) |
| Cooldown to buy (in seconds) | число | Кулдаун между покупками (`0` -- без кулдауна) |
| Need add engine parts if it possible? | bool | Добавлять детали двигателя (для модульных машин) |
| Engine parts | массив строк | Список деталей двигателя |

## Торговые автоматы

### Включение автоматов

| Параметр | Описание |
|---|---|
| Bandit Camp vending machine | Включить автомат в Bandit Camp |
| Outpost vending machine | Включить автомат в Outpost |
| Fishing village A/B/C vending machine | Включить автомат в Fishing Village |

### Настройка товаров

Каждый товар в торговом автомате содержит:

| Параметр | Описание |
|---|---|
| Vehicle key from config | Ключ транспорта из конфигурации |
| Item (shortname) | Shortname предмета оплаты |
| Price | Цена |

### Пример товара

```json
{
 "Vehicle key from config": "copter",
 "Item (shortname)": "scrap",
 "Price": 1000
}
```

## Доступный транспорт по умолчанию

| Ключ | Название | Цена | Валюта |
|---|---|---|---|
| copter | Minicopter | 550 | Server Rewards |
| scrapheli | Scrap Transport Helicopter | 850 | Предмет |
| attackheli | Attack Helicopter | 1200 | Предмет |
| car2 | Car 2 (2 модуля) | 300 | Предмет |
| car3 | Car 3 (3 модуля) | 600 | Предмет |
| car4 | Car 4 (4 модуля) | 900 | Предмет |
| tugboat | TugBoat | 1500 | Предмет |
| rowboat | RowBoat | 450 | Server Rewards |
| rhib | RHIB | 585 | Предмет |
| solosub | SoloSub | 555 | Предмет |
| duosub | DuoSub | 750 | Предмет |
| horse | Horse | 150 | Предмет |
| snowmobile | SnowMobile | 600 | Предмет |
| tomaha | Tomaha | 100 | Предмет |
| hotairballoon | HotairBalloon | 300 | Предмет |
| recycler | Recycler | 1000 | Предмет |
| pedalbike | Pedal Bike | 500 | Предмет |
| motorbike | Motorbike | 1000 | Предмет |
| motorbike_sidecar | Motorbike Sidecar | 1500 | Предмет |

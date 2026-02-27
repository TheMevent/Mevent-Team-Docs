---
title: "Конфигурация Portal System"
description: "Полный справочник по настройкам конфигурации плагина Portal System."
sidebar_position: 4
---

# Конфигурация Portal System

Файл конфигурации расположен по пути: `oxide/config/PortalSystem.json`

## Настройки плагина (Plugin Settings)

| Параметр | По умолчанию | Описание |
|---|---|---|
| Prefix text | `[PortalSystem]` | Префикс сообщений в чате |
| Prefix color | `#00FF00` | Цвет префикса |
| Send notifications in chat | `true` | Отправлять уведомления в чат |
| Show notifications as GameTips | `true` | Показывать уведомления как GameTip |
| GameTip display time | `10` | Время отображения GameTip (секунды) |

## Настройки порталов (Portal Settings)

### Телепортация

| Параметр | По умолчанию | Описание |
|---|---|---|
| Teleport cooldown | `10` | Кулдаун между телепортациями (секунды) |
| VIP cooldown overrides | `{"portalsystem.vip1": 5, "portalsystem.vip2": 2}` | VIP-кулдауны |
| Move player forward from exit | `1.0` | Смещение игрока вперёд от выхода (метры) |
| Block arrivals if under foundations | `true` | Блокировка телепортации под фундаментом |

### Размещение

| Параметр | По умолчанию | Описание |
|---|---|---|
| Require TC auth to place | `true` | Требовать авторизацию в шкафе для размещения |
| Require TC auth to pick up | `true` | Требовать авторизацию для сбора |
| Require TC auth to configure | `true` | Требовать авторизацию для настройки |
| Allow pickup with hammer | `true` | Разрешить сбор молотком |
| Right-click hold time for pickup | `0` | Время зажатия ПКМ для сбора (секунды) |

### Лимиты

| Параметр | По умолчанию | Описание |
|---|---|---|
| Default portal limit | `2` | Лимит порталов по умолчанию |
| Extra portal limits from permissions | `[4, 6, 10]` | Дополнительные лимиты через права |

### Стоимость входа

| Параметр | По умолчанию | Описание |
|---|---|---|
| Charge entry price | `true` | Взимать плату за вход |
| Entry price | `{"ShortName": "scrap", "Amount": 0, "SkinID": 0}` | Стоимость входа |
| Free entry permission | `portalsystem.freeuse` | Право для бесплатного входа |

### Покупка

| Параметр | По умолчанию | Описание |
|---|---|---|
| Require buy permission | `true` | Требовать право для покупки |
| Buy prices | Список цен | Стоимость покупки портала |

## Настройки интерфейса (UI Settings)

| Параметр | Описание |
|---|---|
| Menu UI distance | Максимальная дистанция для открытия меню |
| Colors | Цвета интерфейса |
| Skin offset | Скин портала |

## Скины порталов

Для каждого скина можно настроить индивидуальные смещения при размещении:

| Параметр | Описание |
|---|---|
| DoorwayDown | Смещение вниз в дверном проёме |
| UpLift | Смещение вверх вне проёма |

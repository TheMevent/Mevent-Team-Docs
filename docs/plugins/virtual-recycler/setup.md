---
title: "Установка Virtual Recycler"
description: "Пошаговое руководство по установке плагина Virtual Recycler."
sidebar_position: 2
---

# Установка Virtual Recycler

## Шаг 1: Установите плагин

1. Скопируйте файл `VirtualRecycler.cs` в папку `oxide/plugins/`.
2. Плагин загрузится автоматически.

Файл конфигурации:
```
oxide/config/VirtualRecycler.json
```

## Шаг 2: Настройте права доступа

### Базовое право

```
oxide.grant group default virtualrecycler.use
```

### VIP-права с ускоренной переработкой

```
oxide.grant group vip virtualrecycler.vip
oxide.grant group admin virtualrecycler.admin
```

### Права для стационарных переработчиков

```
oxide.grant group vip virtualrecycler.static2
oxide.grant group premium virtualrecycler.vipstatic
```

## Шаг 3: Настройте конфигурацию

Откройте `oxide/config/VirtualRecycler.json`:

```json
{
 "Work with Notify?": false,
 "Commands": ["vrec", "vr", "virtualrec", "vrecycler", "virtualrecycler"],
 "DefaultPermission": "virtualrecycler.use",
 "DefaultSpeed": 1.0,
 "AutoStart": false,
 "PermissionSpeeds": {
 "virtualrecycler.admin": 0.1,
 "virtualrecycler.vip": 0.5,
 "virtualrecycler.raidablebases": 0.5
 },
 "StaticRecyclerSpeeds": {
 "virtualrecycler.static1": 1.0,
 "virtualrecycler.static2": 0.5,
 "virtualrecycler.vipstatic": 0.1
 }
}
```

## Шаг 4: Проверьте работу

1. Зайдите на сервер с правом `virtualrecycler.use`.
2. Введите `/vrec` в чат.
3. Перед вами откроется виртуальный переработчик.
4. Положите предметы для переработки.

## Шаг 5: Перезагрузите плагин

```
oxide.reload VirtualRecycler
```

:::tip Совет
Скорость `0.1` означает очень быструю переработку, а `1.0` -- стандартную скорость. Чем меньше число, тем быстрее работает переработчик.
:::

---
title: "Установка Clans"
description: "Руководство по установке и первоначальной настройке плагина Clans"
sidebar_position: 2
---

# Установка Clans

## Необходимые компоненты

Перед установкой убедитесь, что на вашем сервере присутствует:

- Сервер Rust с фреймворком **Oxide** или **Carbon**
- Плагин **ImageLibrary** (обязательная зависимость)

:::caution Обязательная зависимость
Без плагина **ImageLibrary** интерфейс кланов не будет открываться. Игроки увидят сообщение об ошибке.
:::

## Шаг 1: Установка зависимостей

Скачайте и установите плагин **ImageLibrary**, поместив его в папку:

```
oxide/plugins/ImageLibrary.cs
```

### Опциональные плагины

Для расширенного функционала установите:

| Плагин | Зачем нужен |
|---|---|
| BetterChat / IQChat | Отображение клан-тегов в чате |
| Notify / UINotify | Красивые уведомления для игроков |
| Economics / ServerRewards | Платные функции (создание клана, вступление и т.д.) |
| ZoneManager | Управление дружественным огнём в зонах |
| Skinner | Расширенные скины для кланового снаряжения |

## Шаг 2: Установка плагина

1. Поместите файл плагина в папку `oxide/plugins/`
2. Сервер автоматически загрузит плагин, или выполните:

```
o.reload Clans
```

3. После первой загрузки плагин создаст файл конфигурации:

```
oxide/config/Clans.json
```

:::tip
При первом запуске плагин создаст все необходимые файлы данных автоматически. Дополнительная настройка файлов данных не требуется.
:::

## Шаг 3: Базовая настройка

Откройте `oxide/config/Clans.json` и настройте основные параметры:

### Команды

По умолчанию плагин использует команды `/clan` и `/clans`. Вы можете изменить их:

```json
"Commands": [
 "clan",
 "clans"
]
```

### Лимиты клана

```json
"Limit Settings": {
 "Member Limit": 8,
 "Moderator Limit": 2,
 "Alliances Limit": 2
}
```

### Клан-теги

```json
"Clan Tag Settings": {
 "Tag Min Length": 2,
 "Tag Max Length": 6,
 "Case Sensitive": true,
 "Blocked Words": ["admin", "mod", "owner"],
 "Checking Characters": true
}
```

## Шаг 4: Настройка прав доступа

Выдайте право администрирования доверенным администраторам:

```
o.grant user <steamid> clans.admin
```

:::warning
Право `clans.admin` даёт полный контроль над всеми кланами сервера. Выдавайте его только главным администраторам.
:::

Если вы хотите ограничить создание кланов правом доступа, включите это в конфигурации:

```json
"Permission Settings": {
 "Use permission to create a clan": true,
 "Permission to create a clan": "clans.cancreate"
}
```

Затем выдайте право нужным группам:

```
o.grant group default clans.cancreate
```

## Шаг 5: Настройка чата (опционально)

Если вы используете BetterChat или IQChat, включите интеграцию:

```json
"Chat Settings": {
 "Enable clan tags in chat?": true,
 "Tag format": "<color=#{color}>[{tag}]</color>",
 "Enable clan chat?": true,
 "Clan chat commands": ["c", "cchat"],
 "Enable alliance chat?": true,
 "Alliance chat commands": ["a", "achat"],
 "Working with BetterChat?": true,
 "Working with IQChat?": true
}
```

## Шаг 6: Перезагрузка

После внесения изменений в конфигурацию перезагрузите плагин:

```
o.reload Clans
```

## Проверка установки

Выполните следующие проверки:

1. Введите `/clan` в чат -- должен открыться интерфейс
2. Создайте тестовый клан: `/clan create TEST`
3. Проверьте работу администраторских команд: `clans.manage list`

:::tip Следующий шаг
После успешной установки перейдите к [подробной настройке конфигурации](/plugins/clans/configuration).
:::

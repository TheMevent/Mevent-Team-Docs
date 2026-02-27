---
title: "Конфигурация F1 Item Menu"
description: "Полный справочник по настройкам конфигурации плагина F1 Item Menu."
sidebar_position: 4
---

# Конфигурация F1 Item Menu

Файл конфигурации расположен по пути: `oxide/config/F1ItemMenu.json`

## Параметры

| Параметр | По умолчанию | Описание |
|---|---|---|
| Enable Discord Webhook | `false` | Включить отправку уведомлений в Discord при выдаче предметов |
| Webhook URL | `""` | URL вебхука Discord |
| Username | `"Rust Server"` | Имя бота в Discord |
| Avatar URL | `""` | URL аватара бота в Discord |
| Discord Message Format | `"Player **{playerName}** has taken **{quantity}** of **{itemName}**."` | Формат сообщения в Discord |

## Переменные для формата сообщений

| Переменная | Описание |
|---|---|
| `{playerName}` | Имя игрока, выдавшего предмет |
| `{itemName}` | Название выданного предмета |
| `{quantity}` | Количество выданных предметов |

## Чёрный список предметов

В исходном коде плагина определён встроенный чёрный список предметов, которые нельзя выдать через меню. По умолчанию в него входят транспортные средства:

- `attackhelicopter`
- `minicopter`
- `transporthelicopter`
- `rhib`
- `rowboat`
- `tugboat`
- `submarinesolo`
- `submarineduo`
- `snowmobile`
- `snowmobiletomaha`
- `locomotive`
- `wagon`
- `workcart`

Эти предметы отображаются красным цветом в меню и недоступны для выдачи.

<details>
<summary>Полная конфигурация по умолчанию</summary>

```json
{
 "Enable Discord Webhook": false,
 "Webhook URL": "",
 "Username": "Rust Server",
 "Avatar URL": "",
 "Discord Message Format": "Player **{playerName}** has taken **{quantity}** of **{itemName}**."
}
```

</details>

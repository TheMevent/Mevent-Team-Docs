---
title: "F1 Item Menu Configuration"
description: "Complete reference for F1 Item Menu plugin configuration settings."
sidebar_position: 4
---

# F1 Item Menu Configuration

The configuration file is located at: `oxide/config/F1ItemMenu.json`

## Parameters

| Parameter | Default | Description |
|---|---|---|
| Enable Discord Webhook | `false` | Enable sending notifications to Discord when items are given |
| Webhook URL | `""` | Discord webhook URL |
| Username | `"Rust Server"` | Bot name in Discord |
| Avatar URL | `""` | Bot avatar URL in Discord |
| Discord Message Format | `"Player **{playerName}** has taken **{quantity}** of **{itemName}**."` | Discord message format |

## Message Format Variables

| Variable | Description |
|---|---|
| `{playerName}` | Name of the player who gave the item |
| `{itemName}` | Name of the given item |
| `{quantity}` | Quantity of items given |

## Item Blacklist

The plugin's source code contains a built-in blacklist of items that cannot be given through the menu. By default, it includes vehicles:

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

These items are displayed in red in the menu and are unavailable for giving.

<details>
<summary>Full Default Configuration</summary>

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

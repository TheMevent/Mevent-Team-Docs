---
title: "Commands -- Kits"
description: "Complete list of Kits plugin commands with usage examples."
sidebar_position: 4
---

# Kits Commands

## Player Commands

These commands are available to all players on the server.

| Command | Description |
|---|---|
| `/kit` | Opens the interface with a list of available kits |
| `/kits` | Same as the `/kit` command |
| `/kit <name>` | Claim a specific kit by its name |

:::info Note
The `/kit` and `/kits` commands are configurable in the configuration. The server administrator can change them to any other commands.
:::

### Examples

```
/kit -- opens the kit menu
/kit starter -- claim the "starter" kit
/kit vip -- claim the "vip" kit
```

## Administrator Commands

### Visual Editor

| Command | Description |
|---|---|
| `/editkit` | Opens the visual kit editor in-game (requires `Kits.admin` permission or admin flag) |

### Console Commands

The following commands are executed from the server console or RCON. Administrators with the `Kits.admin` permission can also execute them from the in-game console.

| Command | Description |
|---|---|
| `kits.give <player> <kit>` | Give kit items directly to a player (bypassing cooldown and limits) |
| `kits.givekit <player> <kit> [amount]` | Grant kit uses to a player (they can claim it from the menu) |
| `kits.reset data all` | Reset kit data for all players |
| `kits.reset data <steamid>` | Reset kit data for a specific player |
| `kits.reset data <steamid> <kit>` | Reset a specific kit's data for a player |
| `kits.reset kits` | Delete all created kits (irreversible!) |
| `kits.template <parameters>` | Switch the interface template (server console only) |
| `kits.convert` | Convert data from other plugins |

### Console Command Examples

#### Giving Kits
```
kits.give PlayerName vip_kit
kits.give 76561198000000000 starter
```

#### Granting Uses
```
kits.givekit PlayerName premium 3
kits.givekit 76561198000000000 daily 5
```

#### Resetting Data
```
kits.reset data all
kits.reset data 76561198000000000
kits.reset data 76561198000000000 starter
kits.reset kits
```

#### Switching Interface Template

Available templates:

| Mode | Template | Variants |
|---|---|---|
| Fullscreen | old | Classic style |
| Fullscreen | rust | normal, content, categories, content_categories |
| InMenu | rust | normal (V1/V2), content (V1/V2), categories (V1/V2), content_categories (V1/V2) |

```
kits.template fullscreen old
kits.template fullscreen rust normal
kits.template fullscreen rust content
kits.template fullscreen rust categories
kits.template inmenu rust normal v1
kits.template inmenu rust content v2
```

## Differences Between kits.give and kits.givekit

| | `kits.give` | `kits.givekit` |
|---|---|---|
| **What it does** | Gives kit items directly to the inventory | Adds the ability to claim the kit from the menu |
| **Bypasses cooldown** | Yes | No (player claims it themselves) |
| **Player must be online** | Yes | No (can claim later) |
| **Persists through wipe** | Configurable | Configurable |

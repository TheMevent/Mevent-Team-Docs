---
title: "BattlePass Configuration"
description: "Full reference for all BattlePass configuration settings"
sidebar_position: 3
---

# BattlePass Configuration

The config file is located at: `oxide/config/BattlePass.json`

## Main Settings

| Parameter | Default | Description |
|---|---|---|
| Commands | `["pass"]` | Chat commands to open the interface |
| Work with Notify? | `true` | Use Notify for notifications |
| Permission | `"battlepass.use"` | Permission required to use the battle pass |

## Currency 1 Settings

| Parameter | Description |
|---|---|
| Title | Display name of the first currency |
| Image | URL of the currency icon |
| Prices | Cost table for cases using this currency |

## Currency 2 Settings

| Parameter | Description |
|---|---|
| Title | Display name of the second currency |
| Image | URL of the currency icon |
| Prices | Cost table for cases using this currency |

## Wipe Settings

| Parameter | Default | Description |
|---|---|---|
| Wipe on new map save | `false` | Reset all player progress on map wipe |

## Cooldown After Wipe

| Parameter | Default | Description |
|---|---|---|
| Enabled | `false` | Enable a cooldown period after wipe |
| Cooldown (seconds) | `0` | Duration before the battle pass becomes available after wipe |

## Loot Container Settings

Controls which containers count toward loot-based missions:

```json
"Loot Containers": [
 "crate_normal",
 "crate_normal_2",
 "crate_elite"
]
```

## Mission Settings

Each mission includes:

| Parameter | Description |
|---|---|
| Type | Mission type (Kill, Gather, Craft, Loot, etc.) |
| Target | Specific target (item shortname, NPC type, etc.) |
| Amount | Required amount to complete |
| Currency1Reward | First currency earned |
| Currency2Reward | Second currency earned |
| VIPMultiplier | Reward multiplier for VIP players |

## Case Settings

Each case includes:

| Parameter | Description |
|---|---|
| Name | Case display name |
| Image | Case image URL |
| CurrencyType | Which currency to use (1 or 2) |
| Cost | Price in the selected currency |
| Permission | Required permission (empty = everyone) |
| Items | List of possible rewards |

## Item Settings

Each reward item in a case:

| Parameter | Description |
|---|---|
| Type | `Item`, `Command`, or `Plugin` |
| ShortName | Item short name (for Item type) |
| Amount | Quantity |
| Chance | Drop chance (higher = more likely) |
| Skin | Item skin ID |
| Command | Console command (for Command type, use `%steamid%`) |

## PlayerDatabase

| Parameter | Description |
|---|---|
| Currency1 | Player's first currency balance |
| Currency2 | Player's second currency balance |
| CompletedMissions | List of completed mission IDs |
| Inventory | Unclaimed reward items |

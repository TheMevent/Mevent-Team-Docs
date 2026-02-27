---
title: "BattlePass Commands"
description: "Full list of commands and permissions for the BattlePass plugin"
sidebar_position: 4
---

# BattlePass Commands

## Player Commands

| Command | Description | Permission |
|---|---|---|
| `/pass` | Open the battle pass interface | `battlepass.use` |
| `/passmissions` | Open the missions page directly | `battlepass.use` |
| `/passcase` | Open the cases page directly | `battlepass.use` |
| `/passinv` | Open your reward inventory | `battlepass.use` |

:::tip Tip
Commands are configurable in the config under `Commands`. You can add alternatives like `["pass", "bp", "battlepass"]`.
:::

## Admin Commands

| Command | Description |
|---|---|
| `addfirstcurrency [steamid] [amount]` | Add first currency to a player's balance |
| `addsecondcurrency [steamid] [amount]` | Add second currency to a player's balance |
| `battlepass.wipemissions` | Reset all player mission progress |
| `battlepass.convert.olddata` | Convert data from an older plugin version |

### Examples

```
addfirstcurrency 76561198000000000 500
addsecondcurrency 76561198000000000 200
battlepass.wipemissions
```

## Permissions

| Permission | Description |
|---|---|
| `battlepass.use` | Access to the battle pass interface |
| `battlepass.vip` | VIP multiplier on currency earnings |
| `battlepass.premium` | Access to premium cases |

### Granting Permissions

```
o.grant group default battlepass.use
o.grant group vip battlepass.vip
o.grant group premium battlepass.premium
```

## UI Navigation

| Action | Description |
|---|---|
| Missions tab | View and track daily missions |
| Cases tab | Browse and open reward cases |
| Inventory tab | Claim earned rewards |
| Mission progress | Shows completion percentage for each mission |

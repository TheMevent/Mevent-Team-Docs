---
title: "Ultimate Trade Configuration"
description: "Complete reference for all configuration settings of the Ultimate Trade plugin."
sidebar_position: 3
---

# Ultimate Trade Configuration

The configuration file is located at:
- **Oxide:** `oxide/config/UltimateTrade.json`
- **Carbon:** `carbon/configs/UltimateTrade.json`

## Main Settings

| Parameter | Default | Allowed Values | Description |
|---|---|---|---|
| Permission to use the trade command | `"ultimatetrade.use"` | String | Access permission for using trade |
| Work with Notify? | `true` | `true` / `false` | Use the Notify plugin for notifications |
| Commands to open trade | `["trade", "t"]` | String array | Chat commands to initiate a trade |

## Trade Settings

| Parameter | Default | Allowed Values | Description |
|---|---|---|---|
| Time to answer trade requests (seconds) | `15` | Integer > 0 | Time to wait for a trade request response |
| Trade cooldown (Cooldown - seconds) | `60.0` | Number >= 0 | Delay between trades (in seconds) |
| Allow trade if distance is greater than specified | `50.0` | Number, `-1` to disable | Maximum distance between players for trading. `-1` = no restriction |
| Number of active slots for trade | `8` | Integer > 0 | Number of slots in the trade window |
| Block trading if players are not in a team | `false` | `true` / `false` | Require players to be on the same team to trade |

:::tip Recommendation
A distance value of `50` means that players can trade only if the distance between them is **greater** than 50 units. This prevents trading at close range (e.g., when you could simply drop items). Set to `-1` if you want to allow trading at any distance.
:::

## Restriction Settings

| Parameter | Default | Description |
|---|---|---|
| Enabled | `true` | Enable the restriction system |
| Block accepting requests in BuildingBlock | `true` | Block accepting requests in enemy tool cupboard zones |
| Block sending requests in BuildingBlock | `true` | Block sending requests in enemy tool cupboard zones |
| Block using trade in flight | `true` | Block trading while in the air (jumping, falling) |
| Block using trade in water | `true` | Block trading in water |
| Block using trade in dying state | `true` | Block trading while in a downed state |

:::info Information
Restrictions protect against potential exploits. It is recommended to keep all restrictions enabled unless you have a good reason to disable them.
:::

## Permission Settings

This section allows you to create multiple permission levels with different trade parameters:

```json
"Permission Settings": {
 "ultimatetrade.vip": {
 "Slot size for this permission": 12,
 "Cooldown after trade for this permission": 30
 },
 "ultimatetrade.premium": {
 "Slot size for this permission": 16,
 "Cooldown after trade for this permission": 10
 }
}
```

| Field | Description |
|---|---|
| Key (permission) | Permission name |
| Slot size for this permission | Number of trade slots |
| Cooldown after trade for this permission | Cooldown after trade (in seconds) |

### How It Works

- If a player has multiple permissions, the **highest** slot count is used
- For cooldown, the **lowest** value among held permissions is used
- Base values (8 slots, 60 seconds) apply if no additional permissions are granted

### Example: Three Tiers

```json
"Permission Settings": {
 "ultimatetrade.basic": {
 "Slot size for this permission": 8,
 "Cooldown after trade for this permission": 60
 },
 "ultimatetrade.vip": {
 "Slot size for this permission": 12,
 "Cooldown after trade for this permission": 30
 },
 "ultimatetrade.premium": {
 "Slot size for this permission": 16,
 "Cooldown after trade for this permission": 0
 }
}
```

<details>
<summary>Full default configuration</summary>

```json
{
 "Permission to use the trade command": "ultimatetrade.use",
 "Work with Notify?": true,
 "Commands to open trade": ["trade", "t"],
 "Trade Settings": {
 "Time to answer trade requests (seconds)": 15,
 "Trade cooldown (Cooldown - seconds)": 60.0,
 "Allow trade if the distance between players is greater than the specified (-1 - disable)": 50.0,
 "Number of active slots for trade": 8,
 "Block trading with players if players are not in a team (Standard friend system)": false
 },
 "Restrictions Settings": {
 "Enabled": true,
 "Block accepting requests in BuildingBlock": true,
 "Block sending requests in BuildingBlock": true,
 "Block using trade in flight": true,
 "Block using trade in water": true,
 "Block using trade in dying state": true
 },
 "Permission Settings": {}
}
```

</details>

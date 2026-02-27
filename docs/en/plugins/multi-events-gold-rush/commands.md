---
title: "Commands and Permissions"
description: "Full list of commands and permissions for the Gold Rush plugin."
sidebar_position: 3
---

# Commands and Permissions

## Commands

### Admin Commands

| Command | Description | Permission |
|---|---|---|
| `goldrush.start` | Start the Gold Rush event | `MultiEventsGoldRush.start` |
| `goldrush.stop` | Stop the current event | `MultiEventsGoldRush.stop` |

:::info Note
The event can also start automatically through MultiEvents scheduling.
:::

### Console Commands (UI)

| Command | Description |
|---|---|
| `UI_GoldRush hide` | Hide the event panel (triggered via UI) |

## Permissions

| Permission | Description |
|---|---|
| `MultiEventsGoldRush.start` | Permission to start the event |
| `MultiEventsGoldRush.stop` | Permission to stop the event |
| `MultiEventsGoldRush.vip` | VIP chance multiplier (default x2) |

### Setting Up Permissions

```
oxide.grant group admin MultiEventsGoldRush.start
oxide.grant group admin MultiEventsGoldRush.stop
oxide.grant group vip MultiEventsGoldRush.vip
```

:::tip VIP Multipliers
You can create multiple VIP tiers with different multipliers. Add new permissions in the config:
```json
"Permissions Multiplier chane [item chance * perm chance]": {
 "MultiEventsGoldRush.vip": 2.0,
 "MultiEventsGoldRush.premium": 3.0
}
```
Don't forget to register each permission through Oxide.
:::

## Player Commands

Regular players don't have special commands. Participation is automatic -- just mine ore or chop trees during the active event.

## Mechanics

- On every dispenser bonus (OnDispenserBonusReceived), the system rolls for bonus item drops
- Ore and trees have **separate** drop tables
- Each item's drop chance is multiplied by the player's permission multiplier
- If a player has multiple multipliers, the highest one applies

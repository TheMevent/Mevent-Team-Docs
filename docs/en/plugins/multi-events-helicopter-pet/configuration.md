---
title: "Configuration"
description: "Full reference for all Helicopter Pet configuration options."
sidebar_position: 4
---

# Configuration

Config file location: `oxide/config/MultiEventsHelicopterPet.json`

## Main Settings

| Parameter | Default | Description |
|---|---|---|
| Work with Notify? | `true` | Use Notify / UINotify for notifications |
| Event Duration | `600` | Event duration in seconds (10 minutes) |
| Helicopter Health | `10000` | Patrol helicopter health |

## Helicopter Settings

| Parameter | Default | Description |
|---|---|---|
| Heli Init Position | `(0, 0, 0)` | Helicopter spawn position (X, Y, Z coordinates) |
| Heli Height above ground | `50` | Flight height above ground (in meters) |

:::tip Tip
Set the helicopter health high (10000+) so it doesn't get destroyed before the event ends. If the helicopter is destroyed, the event ends early.
:::

## Award Settings

The `"Awards Settings"` section defines rewards by ranking position.

| Parameter | Description |
|---|---|
| Put the reward in the MultiEventsInventory? | Deliver rewards through MultiEventsInventory |
| Player Awards (top - award) | Reward list by position (1 = first, 2 = second, etc.) |

### Per-Reward Parameters

| Parameter | Description |
|---|---|
| Award IDs from MultiEventsInventory | Reward IDs from MultiEventsInventory |
| Awards | List of reward items |
| Amount (Minimal / Maximum) | Number of rewards to give |

### Reward Types

| Type | Description |
|---|---|
| `Item` | In-game item (ShortName, amount, skin) |
| `Command` | Console command (%steamid%, %username%) |
| `Plugin` | Hook call to another plugin (Economics, etc.) |
| `Kit` | Kit from the Kits plugin |

## Config Example

```json
{
 "Work with Notify?": true,
 "Heli Init Position": { "x": 0.0, "y": 0.0, "z": 0.0 },
 "Heli Height above ground": 50.0,
 "Event Duration": 600,
 "Helicopter Health": 10000,
 "Awards Settings": {
 "Put the reward in the MultiEventsInventory?": false,
 "Player Awards (top - award)": {
 "1": {
 "Award IDs from MultiEventsInventory": [0, 1, 2, 3],
 "Awards": [
 { "Type": "Item", "Item": { "ShortName": "wood", "Amount Min": 500, "Amount Max": 500 }, "Chance": 100.0 },
 { "Type": "Item", "Item": { "ShortName": "stones", "Amount Min": 500, "Amount Max": 500 }, "Chance": 100.0 }
 ],
 "Amount": { "Minimal": 1, "Maximum": 1 }
 },
 "2": {
 "Award IDs from MultiEventsInventory": [4, 5, 6, 7],
 "Awards": [
 { "Type": "Item", "Item": { "ShortName": "wood", "Amount Min": 500, "Amount Max": 500 }, "Chance": 100.0 }
 ],
 "Amount": { "Minimal": 1, "Maximum": 1 }
 }
 }
 }
}
```

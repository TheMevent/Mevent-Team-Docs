---
title: "Configuration -- Collection Resources"
description: "All configuration options for the Collection Resources mode"
sidebar_position: 3
---

# Configuration

The config file is created automatically on first plugin load.

## Main Settings

| Parameter | Type | Default | Description |
|---|---|---|---|
| Work with Notify? | bool | `true` | Use Notify/UINotify for notifications |
| Event Duration | int | `600` | Event duration in seconds |

## Tool Multipliers

The `Tools Multiplier` section lets you set point multipliers based on the tool being used.

```json
"Tools Multiplier": {
 "jackhammer": 0.5,
 "rock": 1.5
}
```

- **Key** -- tool short name
- **Value** -- point multiplier (0.5 = half points, 1.5 = 1.5x points, 1.0 = no change)

Tools not listed default to `1.0`.

:::tip Tip
Lower the multiplier for powerful tools (like `jackhammer`) and raise it for weak ones (like `rock`) to keep the event balanced.
:::

## Item Multipliers

The `Items Multiplier` section lets you set multipliers for specific resource types, including skin variants.

```json
"Items Multiplier": {
 "metal.ore": {
 "Skin": 0,
 "Multiplier": 1.0
 },
 "sulfur.ore": {
 "Skin": 0,
 "Multiplier": 1.0
 }
}
```

| Parameter | Description |
|---|---|
| Skin | Item skin ID (0 = default) |
| Multiplier | Point multiplier for this item |

## Permission Multipliers

The `Permissions Multiplier` section lets you set point multipliers for players with specific permissions. All listed permissions are registered automatically on plugin load.

```json
"Permissions Multiplier": {
 "MultiEventsCollectionResources.default": 1.0,
 "MultiEventsCollectionResources.vip": 2.0
}
```

- **Key** -- permission name
- **Value** -- point multiplier for players with that permission

If a player has multiple permissions from the list, the highest multiplier applies.

:::info How Multipliers Work
Final points are calculated as:

`points = base_amount * tool_multiplier * item_multiplier * permission_multiplier`

All three multipliers stack multiplicatively.
:::

## Award Settings

The `Awards Settings` section configures winner rewards.

| Parameter | Type | Default | Description |
|---|---|---|---|
| Put the reward in the MultiEventsInventory? | bool | `true` | Deliver rewards through Multi Events Inventory |
| Player Awards (top - award) | object | see below | Reward config by ranking position |

### Reward Types

| Parameter | Description |
|---|---|
| Type | Reward type: `Item`, `Command`, `Plugin`, `Kit` |
| Chance | Drop chance from 1 to 100 |
| Item | Item settings (ShortName, Amount Min, Amount Max, Skin, DisplayName) |
| Command (%steamid%) | Console command (supports `%steamid%` and `%username%`) |
| Kit | Kit name to give |
| Plugin | Third-party plugin settings (Hook, Plugin Name, Amount) |

## Default Config Example

```json
{
 "Work with Notify?": true,
 "Event Duration": 600,
 "Tools Multiplier": {
 "jackhammer": 0.5,
 "rock": 1.5
 },
 "Items Multiplier": {
 "metal.ore": { "Skin": 0, "Multiplier": 1.0 },
 "sulfur.ore": { "Skin": 0, "Multiplier": 1.0 }
 },
 "Permissions Multiplier": {
 "MultiEventsCollectionResources.default": 1.0,
 "MultiEventsCollectionResources.vip": 2.0
 },
 "Awards Settings": {
 "Put the reward in the MultiEventsInventory?": true,
 "Player Awards (top - award)": {
 "1": {
 "Award IDs from MultiEventsInventory": [0, 1, 2, 3],
 "Amount": { "Minimal": 1, "Maximum": 1 },
 "Awards": [
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "wood", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "stones", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "leather", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "cloth", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } }
 ]
 },
 "2": {
 "Award IDs from MultiEventsInventory": [4, 5, 6, 7],
 "Amount": { "Minimal": 1, "Maximum": 1 },
 "Awards": [
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "wood", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "stones", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "leather", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } },
 { "Type": "Item", "Chance": 100, "Item": { "ShortName": "cloth", "Amount Min": 3500, "Amount Max": 3500, "DisplayName (empty - default)": "", "Skin": 0 } }
 ]
 }
 }
 }
}
```

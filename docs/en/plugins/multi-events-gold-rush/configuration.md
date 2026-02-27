---
title: "Configuration"
description: "Full reference for all Gold Rush configuration options."
sidebar_position: 4
---

# Configuration

Config file location: `oxide/config/MultiEventsGoldRush.json`

## Main Settings

| Parameter | Default | Description |
|---|---|---|
| Work with Notify? | `true` | Use Notify / UINotify for notifications |
| Event Duration | `600` | Event duration in seconds (default 10 minutes) |

## Ore Items

The `"Ore items"` section defines items that can drop when mining ore.

Each item has:

| Parameter | Description |
|---|---|
| Type | Reward type: `Item`, `Command`, `Plugin`, `Kit` |
| Item | Item settings (ShortName, amount, skin) |
| Chance | Drop chance (0-100%) |
| Command (%steamid%) | Console command (for Command type) |
| Plugin | Plugin call settings (for Plugin type) |
| Kit | Kit name (for Kit type) |

### Default Ore Items

| Item | Chance |
|---|---|
| wood (3500-4500) | 50% |
| stones (3500-4500) | 20% |
| scrap (100-200) | 20% |

## Tree Items

The `"Tree items"` section defines items that can drop when chopping trees.

### Default Tree Items

| Item | Chance |
|---|---|
| wood (3500-4500) | 30% |
| stones (3500-4500) | 20% |
| scrap (100-200) | 30% |

## Permission Chance Multipliers

The `"Permissions Multiplier chane"` section lets you configure chance multipliers for players with specific permissions:

```json
"Permissions Multiplier chane [item chance * perm chance]": {
 "MultiEventsGoldRush.vip": 2.0
}
```

- Item drop chance is multiplied by the permission multiplier
- If a player has multiple matching permissions, the highest multiplier applies
- Default multiplier for regular players is 1.0

## Config Example

```json
{
 "Work with Notify?": true,
 "Event Duration": 600,
 "Ore items": [
 {
 "Type": "Item",
 "Command (%steamid%)": "",
 "Kit": "",
 "Plugin": { "Hook": "", "Plugin Name": "", "Amount": 0 },
 "Item": {
 "DisplayName (empty - default)": "",
 "ShortName": "wood",
 "Skin": 0,
 "Amount min": 3500,
 "Amount max": 4500
 },
 "Chance": 50.0
 },
 {
 "Type": "Item",
 "Command (%steamid%)": "",
 "Kit": "",
 "Plugin": { "Hook": "", "Plugin Name": "", "Amount": 0 },
 "Item": {
 "DisplayName (empty - default)": "",
 "ShortName": "stones",
 "Skin": 0,
 "Amount min": 3500,
 "Amount max": 4500
 },
 "Chance": 20.0
 },
 {
 "Type": "Item",
 "Command (%steamid%)": "",
 "Kit": "",
 "Plugin": { "Hook": "", "Plugin Name": "", "Amount": 0 },
 "Item": {
 "DisplayName (empty - default)": "",
 "ShortName": "scrap",
 "Skin": 0,
 "Amount min": 100,
 "Amount max": 200
 },
 "Chance": 20.0
 }
 ],
 "Tree items": [
 {
 "Type": "Item",
 "Item": { "ShortName": "wood", "Amount min": 3500, "Amount max": 4500 },
 "Chance": 30.0
 },
 {
 "Type": "Item",
 "Item": { "ShortName": "stones", "Amount min": 3500, "Amount max": 4500 },
 "Chance": 20.0
 },
 {
 "Type": "Item",
 "Item": { "ShortName": "scrap", "Amount min": 100, "Amount max": 200 },
 "Chance": 30.0
 }
 ],
 "Permissions Multiplier chane [item chance * perm chance]": {
 "MultiEventsGoldRush.vip": 2.0
 }
}
```

:::tip Tip
Add rare items with a low chance (1-5%) to give players that "jackpot" feeling when they're mining.
:::

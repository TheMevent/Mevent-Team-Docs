---
title: "Configuration -- Barrel Event"
description: "Detailed reference for all Barrel Event configuration options."
sidebar_position: 3
---

# Barrel Event Configuration

The config file is created automatically when the plugin first loads.

## Main Settings

### Work with Notify?

Enables or disables integration with Notify / UINotify for sending notifications. If disabled, notifications go to chat instead.

```json
"Work with Notify?": true
```

### Event Duration

Event duration in seconds. Default is 600 seconds (10 minutes).

```json
"Event Duration": 600
```

## Barrel Points

The `Barrels point` section defines how many points a player gets for destroying each barrel type. The key is the barrel's internal name, the value is the point amount.

```json
"Barrels point": {
 "loot-barrel-1": 1,
 "loot-barrel-2": 2,
 "loot_barrel_1": 1,
 "loot_barrel_2": 2,
 "oil_barrel": 3
}
```

You can add, remove, or change barrel types and their point values.

## Award Settings

Rewards are configured per placement.

### Reward Structure

Each placement contains:

| Parameter | Description |
|---|---|
| Inventory Awards | Cell indices in the Multi Events inventory |
| Amount (min/max) | Number of rewards to give |
| Awards | List of possible rewards |

### Reward Types

Each reward can be one of these types:

| Type | Description |
|---|---|
| **Item** | In-game item (ShortName, amount, skin) |
| **Command** | Console command (supports %steamid%) |
| **Kit** | Kit from the Kits plugin |
| **Plugin** | Third-party plugin call (Economics, ServerRewards, etc.) |

### Item Parameters

```json
{
 "Type": "Item",
 "Item": {
 "ShortName": "wood",
 "Amount min": 3500,
 "Amount max": 3500,
 "DisplayName (empty - default)": "",
 "Skin": 0
 },
 "Chance": 100.0,
 "Command (%steamid%)": "",
 "Kit": "",
 "Plugin": {
 "Hook": "",
 "Plugin Name": "",
 "Amount": 0
 }
}
```

### Plugin Call Parameters

```json
{
 "Type": "Plugin",
 "Plugin": {
 "Hook": "Deposit",
 "Plugin Name": "Economics",
 "Amount": 500
 }
}
```

### Put In Events Inventory

Controls whether rewards go into the Multi Events inventory or are given directly to the player.

```json
"Put In Events Inventory": true
```

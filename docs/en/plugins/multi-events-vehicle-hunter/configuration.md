---
title: "Configuration — Vehicle Hunter"
description: "Detailed description of all configuration options for the Vehicle Hunter mode."
sidebar_position: 4
---

# Vehicle Hunter Configuration

The config file is created automatically when the plugin first loads.

## Main Settings

### Work with Notify?

Enables or disables integration with Notify / UINotify plugins for sending notifications. When disabled, notifications are sent to chat instead.

```json
"Work with Notify?": true
```

### Event Duration

Event duration in seconds. Defaults to 600 seconds (10 minutes).

```json
"Event Duration": 600
```

## Vehicle Points

The `Vehicle point` section defines how many points a player gets for destroying each vehicle type. The key is the vehicle's internal name, and the value is the point amount.

```json
"Vehicle point": {
 "minicopter.entity": 1,
 "attackhelicopter.entity": 1,
 "scraptransporthelicopter": 1,
 "ridablehorse2": 1,
 "rhib": 1,
 "tugboat": 1,
 "submarinesolo.entity": 1,
 "submarineduo.entity": 1,
 "rowboat": 1,
 "kayak": 1,
 "snowmobile": 1,
 "tomahasnowmobile": 1,
 "hotairballoon": 1,
 "sedanrail": 1,
 "pedalbike": 1,
 "pedaltrike": 1,
 "motorbike": 1,
 "motorbike_sidecar": 1,
 "locomotive.entity": 1,
 "workcart.entity": 1,
 "workcart_aboveground": 1,
 "traincaboose.entity": 1,
 "trainwagonc": 1,
 "siegetower": 1,
 "catapult": 1,
 "ballista": 1,
 "ch47": 20,
 "patrolhelicopter": 10,
 "bradleyapc": 10
}
```

### Vehicle Type Reference

| Vehicle | Points | Description |
|---|---|---|
| `minicopter.entity` | 1 | Minicopter |
| `attackhelicopter.entity` | 1 | Attack helicopter |
| `scraptransporthelicopter` | 1 | Scrap transport helicopter |
| `ridablehorse2` | 1 | Horse |
| `rhib` | 1 | RHIB |
| `tugboat` | 1 | Tugboat |
| `submarinesolo.entity` | 1 | Solo submarine |
| `submarineduo.entity` | 1 | Duo submarine |
| `rowboat` | 1 | Rowboat |
| `kayak` | 1 | Kayak |
| `snowmobile` | 1 | Snowmobile |
| `tomahasnowmobile` | 1 | Tomaha snowmobile |
| `hotairballoon` | 1 | Hot air balloon |
| `sedanrail` | 1 | Rail car |
| `pedalbike` | 1 | Bicycle |
| `pedaltrike` | 1 | Tricycle |
| `motorbike` | 1 | Motorbike |
| `motorbike_sidecar` | 1 | Motorbike with sidecar |
| `locomotive.entity` | 1 | Locomotive |
| `workcart.entity` | 1 | Workcart |
| `workcart_aboveground` | 1 | Above-ground workcart |
| `traincaboose.entity` | 1 | Train caboose |
| `trainwagonc` | 1 | Freight wagon |
| `siegetower` | 1 | Siege tower |
| `catapult` | 1 | Catapult |
| `ballista` | 1 | Ballista |
| `ch47` | 20 | Chinook (CH-47) |
| `patrolhelicopter` | 10 | Patrol helicopter |
| `bradleyapc` | 10 | Bradley APC |

You can add or remove vehicle types and change point values as you see fit.

## Awards Settings

Rewards are configured per position.

### Reward Structure

Each position contains:

| Parameter | Description |
|---|---|
| Inventory Awards | Slot indexes in the Multi Events inventory |
| Amount (min/max) | Number of rewards to give out |
| Awards | List of possible rewards |

### Reward Types

Each reward can be one of these types:

| Type | Description |
|---|---|
| **Item** | In-game item (ShortName, amount, skin) |
| **Command** | Console command (supports %steamid%) |
| **Kit** | Kit from the Kits plugin |
| **Plugin** | Third-party plugin call (Economics, ServerRewards, etc.) |

### Item Settings

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

### Plugin Call Settings

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
"Put the reward in the MultiEventsInventory?": true
```

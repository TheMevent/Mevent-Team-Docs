---
title: "Operation Fortress Configuration"
description: "Complete reference for the Operation Fortress plugin configuration settings."
sidebar_position: 4
---

# Operation Fortress Configuration

The configuration file is located at: `oxide/config/OperationFortress.json`

## Event Settings

| Parameter | Default | Description |
|---|---|---|
| enableAutoTimer | `true` | Automatic event launch on a timer |
| repeatEveryMin | `120` | Minimum interval between events (minutes) |
| repeatEveryMax | `180` | Maximum interval between events (minutes) |
| prepairSeconds | `60` | Preparation time before the event starts (seconds) |
| duration | `65` | Event duration (minutes) |
| towerNeedActivated | `4` | Number of towers required to capture the fortress |
| ejectType | `Out` | Player ejection type after the event |
| useNotify | `false` | Use Notify |
| announceWinner | `true` | Announce the winner |
| redSphere | `true` | Show a red sphere around the zone |
| createZonePVP | `false` | Create a PvP zone |
| teleportationBlock | `true` | Block teleportation |
| disableBetterNpc | `true` | Disable BetterNpc in the event zone |

## Blocked Commands

```json
"blockCommands": ["tpr", "home", "tpa"]
```

## PveMode Settings

| Parameter | Description |
|---|---|
| Enable | Enable PvE mode for the zone |
| Damage | Player damage (in percent) |
| ScaleDamage | Damage multipliers for NPCs and turrets |
| LootCrate | Allow looting crates |
| DamageNpc | Allow NPC damage |
| TimeExitOwner | Time until owner exits (seconds) |

## NPC Presets

Each NPC preset contains:

| Parameter | Description |
|---|---|
| presetName | Unique preset name |
| displayName | NPC display name |
| health | Health |
| wearItems | Equipment (list of items with skins) |
| beltItems | Weapons (list of items with skins) |
| speed | Movement speed |
| roamRange | Patrol radius |
| senseRange | Detection range |
| damageScale | Damage multiplier |
| type | Type: `Default` or `Stationary` |
| deleteCorpse | Delete corpse after death |
| lootPreset | Corpse loot preset |

## Rewards

| Parameter | Description |
|---|---|
| Enable | Enable the reward system |
| Type | Reward type: `Economy` or `Command` |
| Economy | Economy reward settings |
| Command | Command to execute (`{steamid}` -- winner's ID) |

## Map Markers

| Parameter | Description |
|---|---|
| vendingMarker.enable | Show a vending marker on the map |
| radiusMarker.enable | Show a radius marker |
| radiusMarker.radius | Marker radius |
| radiusMarker.alpha | Marker transparency |

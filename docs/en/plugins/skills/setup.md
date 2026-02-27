---
title: "Skills Installation"
description: "Step-by-step instructions for installing and initial setup of the Skills plugin"
sidebar_position: 2
---

# Skills Installation

## Pre-installation Requirements

- **Oxide/uMod** or **Carbon** -- plugin framework
- **ImageLibrary** -- required dependency for displaying images

## Step 1: Download Files

Place the `Skills.cs` file in the plugins folder:

```
oxide/plugins/Skills.cs
```

## Step 2: First Launch

Restart the server or run the command:

```
o.reload Skills
```

The plugin will automatically create a configuration file: `oxide/config/Skills.json`

## Step 3: Configure Permissions

By default, the plugin is available to all players (the Permission field is empty). If you want to restrict access:

1. In the configuration, specify a permission, for example: `"skills.use"`
2. Grant it to the desired groups:

```
o.grant group default skills.use
```

For VIP XP multipliers:

```
o.grant group vip skills.xprate.vip
o.grant group premium skills.xprate.premium
```

For access to high skill levels:

```
o.grant group vip skills.gathering.level6
```

For access to the interface editor (administrators only):

```
o.grant group admin skills.edit
```

## Step 4: Configure Categories and Skills

Open `oxide/config/Skills.json` and configure:

### Categories
Each category contains a group of skills. By default, a "Mining" category is configured with skills for different ores.

### Skills
Each skill has:
- **Type** -- determines what the skill does
- **Levels** -- each level has an effect (in percent) and XP cost
- **Permission** (optional) -- for restricting high levels

### Available Skill Types

| Type | Description |
|---|---|
| Resource gathering | Increases the amount of resources gathered |
| Instant ore destruction | Chance to instantly destroy an ore node |
| Tool durability | Reduces tool and weapon wear |
| Instant tree chopping | Chance to instantly chop down a tree |
| Charcoal chance | Chance to obtain charcoal while mining |
| Smelted ore chance | Chance to obtain already smelted ore |
| Animal skinning | Increased resources from animals |
| Instant skinning | Instant carcass skinning |
| Fishing | Fishing bonuses |
| Fire resistance | Reduced fire damage |
| Fall resistance | Reduced fall damage |
| Temperature resistance | Resistance to heat and cold |
| Radiation resistance | Reduced radiation damage |
| Explosion resistance | Reduced explosion damage |
| Downed recovery chance | Chance to get up after being downed |
| Hunger metabolism | Slower hunger rate |
| Thirst metabolism | Slower thirst rate |
| Horse speed | Increased riding speed |
| Animal damage resistance | Reduced damage from animals |
| Craft duplication | Chance to create an additional item |
| Crate opening speed | Faster crate hacking |
| Extra loot from crates | Additional items from crates |
| Upgrade cost | Reduced building upgrade cost |
| Craft speed | Faster item crafting |
| Melee damage resistance | Reduced melee weapon damage |
| Recycler speed | Faster recycler processing |
| Fuel consumption | Reduced fuel consumption |
| Vehicle repair cost | Reduced vehicle repair cost |
| Scientist damage | Increased damage to NPC scientists |
| Animal damage | Increased damage to animals |
| Player damage | Increased damage to players |
| Scientist damage resistance | Reduced incoming NPC damage |
| Player damage resistance | Reduced incoming player damage |
| Smelting speed | Faster furnace processing |
| Component find chance | Chance to find additional components |
| Cooking speed | Faster food cooking |
| Health regeneration | Passive HP recovery |
| Permission grant | Automatic permission grant upon reaching a level |
| Wipe protection | Preserving part of progress after a wipe |

## Step 5: Configure the XP System

In the "XP Rewards Settings" section, configure which actions earn experience points:

- Player and NPC kills
- Deaths (can be set as a penalty)
- Crate looting (supply drop, crate_normal, crate_elite, bradley_crate, heli_crate)
- Destroying barrels, trees, ore
- Resource gathering

## Step 6: Verification

1. Join the server
2. Type `/skills` in chat
3. Verify that categories and skills are displayed
4. Perform an action (mine ore, get a kill) and check XP gain
5. Try leveling up a skill

---
title: "Configuration"
description: "Full reference for all Hunt Animal configuration options."
sidebar_position: 4
---

# Configuration

Config file location: `oxide/config/MultiEventsHuntAnimal.json`

## Main Settings

| Parameter | Default | Description |
|---|---|---|
| Work with Notify? | `true` | Use Notify / UINotify for notifications |
| Event Duration | `600` | Event duration in seconds (10 minutes) |

## Animal Point Table

The `"Score Table (animal - score)"` parameter defines points for killing each animal type.

| Animal (ShortPrefabName) | Default Points |
|---|---|
| `chicken` | 1 |
| `zombie` | 2 |
| `wolf2` | 4 |
| `boar` | 4 |
| `horse` | 4 |
| `stag` | 4 |
| `bear` | 10 |
| `polarbear` | 10 |
| `tiger` | 10 |
| `crocodile` | 10 |
| `panther` | 10 |
| `snake` | 10 |
| `snake.entity` | 10 |
| `deer` | 10 |

:::tip Tip
You can add any animal type to the table using its ShortPrefabName. Run `me.hunt.animals.list` from the server console to get a list of available animals.
:::

## Award Settings

The `"Awards Settings"` section defines rewards by ranking position.

| Parameter | Description |
|---|---|
| Put the reward in the MultiEventsInventory? | Deliver rewards through MultiEventsInventory |
| Player Awards (top - award) | Reward list by position (1 = first, 2 = second, etc.) |

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
 "Event Duration": 600,
 "Score Table (animal - score)": {
 "chicken": 1.0,
 "wolf2": 4.0,
 "boar": 4.0,
 "bear": 10.0,
 "polarbear": 10.0,
 "horse": 4.0,
 "stag": 4.0,
 "zombie": 2.0,
 "tiger": 10.0,
 "crocodile": 10.0,
 "panther": 10.0,
 "snake": 10.0,
 "deer": 10.0,
 "snake.entity": 10.0
 },
 "Awards Settings": {
 "Put the reward in the MultiEventsInventory?": false,
 "Player Awards (top - award)": {
 "1": {
 "Award IDs from MultiEventsInventory": [0, 1, 2, 3],
 "Awards": [
 { "Type": "Item", "Item": { "ShortName": "wood", "Amount Min": 3500, "Amount Max": 3500 }, "Chance": 100.0 },
 { "Type": "Item", "Item": { "ShortName": "stones", "Amount Min": 2500, "Amount Max": 2500 }, "Chance": 100.0 },
 { "Type": "Item", "Item": { "ShortName": "leather", "Amount Min": 1000, "Amount Max": 1000 }, "Chance": 100.0 }
 ],
 "Amount": { "Minimal": 1, "Maximum": 1 }
 },
 "2": {
 "Award IDs from MultiEventsInventory": [4, 5, 6, 7],
 "Awards": [
 { "Type": "Item", "Item": { "ShortName": "wood", "Amount Min": 3000, "Amount Max": 3000 }, "Chance": 100.0 }
 ],
 "Amount": { "Minimal": 1, "Maximum": 1 }
 }
 }
 }
}
```

:::tip Tip
Give more points for dangerous animals (bears, tigers) and fewer for harmless ones (chickens) to reward riskier play.
:::

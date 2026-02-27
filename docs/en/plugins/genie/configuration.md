---
title: "Genie Configuration"
description: "Complete reference for all configuration parameters of the Genie plugin."
sidebar_position: 4
---

# Genie Configuration

The configuration file is located at: `oxide/config/Genie.json`

## Main Parameters

| Parameter | Default | Description |
|---|---|---|
| Work with Notify? | `true` | Use the Notify plugin for notifications |

## Genie Settings (Genies)

Each genie (lamp) is configured separately in the `"Genies"` array:

### General Lamp Parameters

| Parameter | Default | Description |
|---|---|---|
| ID | `"default"` | Unique identifier for the lamp type |
| Enabled | `true` | Whether this lamp type is enabled |
| GenieImage | URL | URL of the genie image in the interface |
| Progress | `true` | Show a progress bar during opening |
| Delay | `5` | Opening time in seconds |
| UpdateFrequency | `0.1` | Animation update frequency (in seconds) |
| Permission | `""` | Permission required for use (empty -- available to all) |

### Sound Effects

| Parameter | Default | Description |
|---|---|---|
| OpeningEffect | `"assets/bundled/prefabs/fx/gestures/lick.prefab"` | Sound when opening starts |
| ProgressEffect | `"assets/bundled/prefabs/fx/notice/item.select.fx.prefab"` | Sound during progress |
| FinishEffect | `"assets/prefabs/misc/xmas/presents/effects/wrap.prefab"` | Sound on completion |

### Item Settings (Lamp)

| Parameter | Default | Description |
|---|---|---|
| ControlStack | `true` | Control lamp stacking |
| DisplayName | `"Lamp"` | Display name of the item |
| ShortName | `"xmas.present.small"` | ShortName of the base item |
| Skin | `2540200362` | Item skin |

### Reward Settings (Awards)

Each reward has the following parameters:

| Parameter | Description |
|---|---|
| Type | Reward type: `Item`, `Command`, `Plugin` |
| ShortName | Item ShortName (for Item type) |
| Amount | Quantity |
| Chance | Drop chance (0-100) |
| Skin | Item skin |
| DisplayName | Custom item name |
| Command | Command to execute (for Command type) |
| Image | Image URL (for Command type) |
| Title | Reward title |

#### Content Settings (Content)

For items with nested content (e.g., weapons with attachments):

| Parameter | Description |
|---|---|
| Enabled | Enable nested content |
| Contents | List of nested items |

#### Weapon Settings (Weapon)

| Parameter | Description |
|---|---|
| Enabled | Enable weapon settings |
| AmmoType | Ammunition type |
| AmmoAmount | Ammunition quantity |

<details>
<summary>Example lamp configuration</summary>

```json
{
 "Genies": [
 {
 "ID": "default",
 "Enabled": true,
 "GenieImage": "https://i.imgur.com/aNIcQzk.png",
 "Progress": true,
 "Delay": 5,
 "UpdateFrequency": 0.1,
 "OpeningEffect": "assets/bundled/prefabs/fx/gestures/lick.prefab",
 "ProgressEffect": "assets/bundled/prefabs/fx/notice/item.select.fx.prefab",
 "FinishEffect": "assets/prefabs/misc/xmas/presents/effects/wrap.prefab",
 "Permission": "",
 "Lamp": {
 "ControlStack": true,
 "DisplayName": "Lamp",
 "ShortName": "xmas.present.small",
 "Skin": 2540200362
 },
 "Awards": [
 {
 "Type": "Item",
 "ShortName": "wood",
 "Amount": 3500,
 "Chance": 70,
 "Skin": 0
 },
 {
 "Type": "Item",
 "ShortName": "stones",
 "Amount": 2500,
 "Chance": 70,
 "Skin": 0
 },
 {
 "Type": "Item",
 "ShortName": "metal.fragments",
 "Amount": 1500,
 "Chance": 65,
 "Skin": 0
 }
 ]
 }
 ]
}
```

</details>

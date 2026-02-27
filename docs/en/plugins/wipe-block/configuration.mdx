---
title: "Configuration - Wipe Block"
description: "Detailed description of all configuration parameters for the Wipe Block plugin"
sidebar_position: 3
---

# Wipe Block Configuration

The configuration file is located at: `oxide/config/WipeBlock.json`

## Main Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| ServerPanel Template (V1, V2) | string | `V1` | Display template in server menu (V1 or V2) |
| Commands | array | `["block", "wipeblock"]` | Chat commands to open the block menu |
| Work with Notify? | boolean | `true` | Use Notify/UINotify for notifications |
| Time Indent (seconds) | number | `0` | Block time offset in seconds (allows accelerating or delaying unlocks) |
| Prevent to use blocked items | boolean | `true` | Prevent use of blocked items (equipping, reloading, placing in turrets) |
| Prevent to craft blocked items | boolean | `false` | Prevent crafting of blocked items |

## Category and Item Configuration

The "Settings" section contains an array of categories. Each category includes:

| Parameter | Description |
|---|---|
| Lang Key | Translation key for the category name (e.g., "Weapons", "Explosives", "Attire") |
| Items | Dictionary where the key is block time in seconds and the value is a list of items |

### Item Format

| Parameter | Description |
|---|---|
| ShortName | System item name in Rust (e.g., `rifle.ak`, `explosive.timed`) |
| Skin | Item skin ID (0 for default) |

### Category Example

```json
{
 "Lang Key": "Weapons",
 "Items": {
 "3600": [
 { "ShortName": "pistol.revolver", "Skin": 0 },
 { "ShortName": "shotgun.double", "Skin": 0 }
 ],
 "7200": [
 { "ShortName": "pistol.semiauto", "Skin": 0 },
 { "ShortName": "pistol.python", "Skin": 0 }
 ],
 "86400": [
 { "ShortName": "lmg.m249", "Skin": 0 }
 ]
 }
}
```

In this example:
- The revolver and double-barrel shotgun unlock 1 hour after wipe
- The semi-automatic pistol and Python -- after 2 hours
- The M249 -- after 24 hours

## Interface Configuration

### Interface Section

| Parameter | Description |
|---|---|
| Gradients | Array of 101 HEX colors for displaying the unlock progress bar. Green -- unlocked, yellow -- partially, red -- blocked |

### OnScreen Settings Section

| Parameter | Type | Default | Description |
|---|---|---|---|
| Show on screen? | boolean | `true` | Show the block widget on screen |
| AnchorMin | string | `"1 1"` | Widget minimum anchor point |
| AnchorMax | string | `"1 1"` | Widget maximum anchor point |
| OffsetMin | string | `"-150 -40"` | Widget minimum offset |
| OffsetMax | string | `"-20 -10"` | Widget maximum offset |

## Language Settings

The plugin supports Russian and English languages. Translation keys for categories are set in the "Lang Key" field of each category. To add a new language for categories, edit the plugin language file in `oxide/lang/`.

## Configuration Recommendations

- For themed servers with short wipe cycles, use timers from 1 to 6 hours.
- For servers with long wipe cycles (a week or more), blocks can be set up to 48-72 hours.
- Enable craft prevention (`Prevent to craft blocked items`) so players do not waste resources on unavailable items.
- Configure notifications through Notify for a better user experience.

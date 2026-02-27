---
title: "AutoRecycler Configuration"
description: "Full reference for all AutoRecycler configuration options"
sidebar_position: 3
---

# Configuration

The config file is created automatically on first launch and located at `oxide/config/AutoRecycler.json`.

## Main Settings

```json
{
 "Virtual recycler commands": ["virtualrec", "vrec", "recvirtual"],
 "Auto recycler UI commands": ["autorec", "ar", "autorecycler"],
 "Crate-recycler settings": {
 "Shortname": "box.wooden.large",
 "DisplayName": "Crate-recycler",
 "SkinID": 3100475476
 },
 "Recbox cost": [
 {
 "Shortname": "scrap",
 "Amount": 100
 }
 ],
 "Items to Recycle": { ... }
}
```

## Parameter Reference

### Virtual recycler commands

List of chat commands for opening the virtual recycler. Default: `["virtualrec", "vrec", "recvirtual"]`.

### Auto recycler UI commands

List of chat commands for opening the auto-recycling interface. Default: `["autorec", "ar", "autorecycler"]`.

### Crate-recycler settings

Settings for the recycler crate item:

| Parameter | Description | Default |
| ----------- | ------------------------------------- | --------------------- |
| Shortname | Base item short name | `box.wooden.large` |
| DisplayName | Display name | `Crate-recycler` |
| SkinID | Skin identifier | `3100475476` |

### Recbox cost

Cost to buy a recycler crate. An array of items the player needs to pay:

```json
"Recbox cost": [
 {
 "Shortname": "scrap",
 "Amount": 100
 }
]
```

You can require multiple items:

```json
"Recbox cost": [
 { "Shortname": "scrap", "Amount": 200 },
 { "Shortname": "metal.fragments", "Amount": 500 }
]
```

### Items to Recycle

A dictionary of all recyclable items with their settings. This is populated automatically on first launch.

Each item has the following structure:

```json
"wood.armor.jacket": {
 "IsEnabled": true,
 "ItemAmount": [
 {
 "Shortname": "wood",
 "Amount": 100,
 "Enabled": true,
 "Chance": 100
 },
 {
 "Shortname": "rope",
 "Amount": 1,
 "Enabled": true,
 "Chance": 50
 }
 ]
}
```

| Field | Description |
| --------- | -------------------------------------------------- |
| IsEnabled | Whether this item can be auto-recycled |
| Shortname | Short name of the output resource |
| Amount | Quantity of the output resource |
| Enabled | Whether this particular output is active |
| Chance | Drop chance (0--100). 100 = guaranteed |

## Recycling Chances

For some items (like weapons), components don't always drop. The chance is in percent:

- `100` -- component always drops
- `50` -- component drops 50% of the time
- `25` -- component drops 25% of the time
- `0` -- component never drops

## Data Files

| File | Description |
| ---- | -------- |
| `oxide/data/AutoRecycler.json` | Player auto-recycling preferences |

:::warning Important
The "Items to Recycle" section is populated automatically on first launch based on in-game recipes. Don't delete it -- just edit existing entries.
:::

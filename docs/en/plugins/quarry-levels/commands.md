---
title: "Commands and Permissions"
description: "Complete list of commands and permissions for the Quarry Levels plugin."
sidebar_position: 3
---

# Commands and Permissions

## Console Commands

| Command | Description |
|---|---|
| `ql reload` | Reload the configuration without restarting the plugin |

## Interface Controls

Interaction with the upgrade system is done through the visual interface when opening a quarry/pumpjack:

| Action | Description |
|---|---|
| "Upgrade" button | Open the level information panel |
| "Confirm Upgrade" button | Confirm the upgrade (green button) |
| "Cancel" button | Cancel and go back (red button) |

### Panel Information

- Current level and maximum level
- Production, Process Rate
- Hopper Capacity
- Fuel Consumption
- Resources at the current level and the next level

## Permissions

| Permission | Description |
|---|---|
| `quarrylevels.use` | Allows using the upgrade system for quarries and pumpjacks |

:::warning Important
Without the `quarrylevels.use` permission, the "Upgrade" button will not appear when opening a quarry.
:::

## Upgrade Cost

By default, upgrading requires:
- **Quarry:** 1 Mining Quarry item
- **Pumpjack:** 1 Pumpjack item

Alternatively, payment can be configured through:
- **Economics** -- deducting currency from the balance
- **ServerRewards** -- deducting reward points

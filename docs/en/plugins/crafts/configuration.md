---
title: "Crafts Configuration"
description: "Complete reference for Crafts plugin configuration settings."
sidebar_position: 4
---

# Crafts Configuration

The configuration file is located at: `oxide/config/Crafts.json`

## Main Parameters

| Parameter | Default | Description |
|---|---|---|
| Commands | `["craft", "crafts"]` | Chat commands for opening the menu |
| Close UI when reusing a command? | `false` | Close the interface when the command is entered again |
| Work with Notify? | `true` | Use Notify for notifications |
| Work with LangAPI? | `true` | Use LangAPI for multilingual support |
| Permission | `""` | Permission to access the menu (empty -- available to everyone) |

## Economy Settings

| Parameter | Description |
|---|---|
| Show | Display balance in the interface |
| Type | Economy type: `Plugin` or `Item` |
| Plugin name | Economy plugin name (e.g., `Economics`) |
| Balance add hook | Balance add function |
| Balance remove hook | Balance deduct function |
| Balance show hook | Balance display function |
| ShortName | Item ShortName (for Item type) |
| Skin | Item skin (for Item type) |

## Categories

Each category contains:

| Parameter | Description |
|---|---|
| Enabled | Whether the category is enabled |
| Permission | Access permission for the category (empty -- available to everyone) |
| Title | Category name |
| Color | Category background color (HEX + transparency) |
| Crafts | List of craft recipes in the category |

## Recipe Settings

| Parameter | Description |
|---|---|
| Enabled | Whether the recipe is enabled |
| Image | Recipe image URL |
| Title | Recipe name |
| Description | Recipe description |
| Permission | Access permission for the recipe |
| Type | Craft type: `Command`, `Vehicle`, `Item`, `Recycler`, `ModularCar` |
| Prefab | Prefab path (for vehicles) |
| CmdToGive | Give command |
| WorkbenchLevel | Required workbench level: `None`, `One`, `Two`, `Three` |
| ReturnItem | Whether to return the item when picked up |
| CustomizeRotation | Allow rotation during placement |

## Craft Types

| Type | Description |
|---|---|
| `Command` | Executes a command on craft |
| `Vehicle` | Spawns a vehicle |
| `Item` | Creates an item in the inventory |
| `Recycler` | Places a recycler |
| `ModularCar` | Spawns a modular car |

## Custom Workbench

The plugin supports placing custom workbenches that can be linked to specific categories and permissions. Configuration is done in the `"Custom Workbench"` section.

:::tip Tip
Use the `crafts.bypass` permission for administrators so they can craft without resources and a workbench.
:::

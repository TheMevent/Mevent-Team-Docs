---
title: "Crafts"
description: "A system for crafting vehicles, items, and recycling resources with a visual interface and categories."
version: "2.10.23"
tags: [rust, plugin, crafts, vehicles, ui]
sidebar_position: 1
---

# Crafts

## What does this plugin do?

**Crafts** adds a full-featured crafting system with a visual interface to the server. Players can open the crafting menu via a chat command and create vehicles (minicopters, boats, helicopters), items, modular cars, and use a built-in recycler. Crafting requires specific resources and can be tied to a workbench level. Administrators can flexibly configure categories, recipes, permissions, and economy.

## Key Features

- Players open a visual crafting menu via a chat command
- Support for vehicle crafting (minicopter, boats, RHIB, helicopters, etc.)
- Support for crafting items, modular cars, and recyclers
- Category system with access permissions for each category
- Workbench level requirement (1, 2, 3)
- Custom Workbench support
- In-interface craft editing (for administrators)
- Integration with economy plugins (Economics, ServerRewards)
- Notify support for notifications
- Compatible with Oxide and Carbon

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **ImageLibrary** | Required | Loading and displaying images in the interface |
| **Notify** / **UINotify** | Optional | Attractive notifications instead of chat messages |
| **SpawnModularCar** | Optional | Spawning modular cars |
| **LangAPI** | Optional | Multilingual support |
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Install **ImageLibrary** on the server.
2. Copy the `Crafts.cs` file to the `oxide/plugins/` folder.
3. Restart the server or run `oxide.reload Crafts`.
4. Use the `/craft` command in chat to open the crafting menu.
5. Configure categories and recipes in the `oxide/config/Crafts.json` file.

## Permissions

| Permission | Who needs it | What it unlocks |
|---|---|---|
| `crafts.edit` | Administrators | Allows editing crafts through the interface |
| `crafts.setworkbench` | Administrators | Allows placing custom workbenches |
| `crafts.bypass` | Administrators | Bypasses permission and workbench checks during crafting |
| Configurable permission | Players | Permission to use the menu (set in configuration) |
| Category permissions | Players | Individual permissions for each category |
| Craft permissions | Players | Individual permissions for each recipe |

## Player Commands

| Command | Description | Example |
|---|---|---|
| `/craft` or `/crafts` | Open the crafting menu | `/craft` |

## Admin Commands

| Command | Description | Example |
|---|---|---|
| `crafts.setwb` | Place a custom workbench | `crafts.setwb` |
| Craft give commands | Give a crafted item (set in configuration) | `givecopter` |

## Troubleshooting

### Menu does not open

**Symptoms:** The `/craft` command does not display the interface.

**Cause:** ImageLibrary is not installed or the player does not have access permission.

**Solution:** Install ImageLibrary. Check that the access permission is granted or the Permission field in the configuration is empty.

---

### Craft unavailable -- "no permission"

**Symptoms:** The player sees the recipe but cannot craft it.

**Cause:** The player does not have the permission for the specific craft or category.

**Solution:** Grant the required permission via `oxide.grant`.

---
title: "Commands and Permissions"
description: "Full list of commands and permissions for the Crafts plugin."
sidebar_position: 3
---

# Commands and Permissions

## Chat Commands

| Command | Description | Permission |
|---|---|---|
| `/craft` or `/crafts` | Open the crafting menu | Configurable (available to everyone by default) |

:::info Note
Commands are configured in the configuration under the `"Commands"` parameter. Default: `["craft", "crafts"]`.
:::

## Console Commands

| Command | Description | Permission |
|---|---|---|
| `crafts.setwb` | Place a custom workbench at the point the player is looking at | `crafts.setworkbench` |

## Give Commands

Each craft recipe can have an individual give command, which is set in the configuration (`CmdToGive` field). For example:

| Command | Description |
|---|---|
| `givecopter` | Give a minicopter |
| `giveattackhelicopter` | Give an attack helicopter |
| `giverowboat` | Give a rowboat |

## Permissions

### System Permissions

| Permission | Description |
|---|---|
| `crafts.edit` | Allows editing crafts through the interface |
| `crafts.setworkbench` | Allows placing custom workbenches |
| `crafts.bypass` | Bypasses all permission and workbench checks |

### Configurable Permissions

| Type | Where it is set | Description |
|---|---|---|
| Menu usage permission | Configuration: `"Permission"` | General permission for opening the crafting menu |
| Category permission | Each category: `"Permission"` | Access to a specific category |
| Craft permission | Each recipe: `"Permission"` | Access to a specific recipe |
| Custom workbench permissions | Workbench configuration | Access to custom workbench levels |

### Permission Setup Example

```
oxide.grant group admin crafts.edit
oxide.grant group default crafts.all
oxide.grant group vip crafts.vip
```

:::tip Tip
If the `Permission` field is left empty, the element will be available to all players without restrictions.
:::

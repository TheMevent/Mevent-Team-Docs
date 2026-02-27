---
title: "Commands and Permissions"
description: "Complete list of commands and permissions for the Object Stacks plugin."
sidebar_position: 3
---

# Commands and Permissions

## Commands

The Object Stacks plugin has no chat commands. Object stacking is performed through game mechanics:

1. Hold a deployable object in your hands.
2. Aim your crosshair at an already placed object of the same type.
3. Right-click (RMB).
4. The new object will be placed on top of the existing one.

## Permissions

Permissions determine the maximum number of objects in a stack. Format: `objectstacks.[shortname].[level]`.

### Default Permissions

| Permission | Max Stack |
|---|---|
| `objectstacks.storage_barrel_b.use` | 2 |
| `objectstacks.storage_barrel_b.vip` | 4 |
| `objectstacks.storage_barrel_c.use` | 2 |
| `objectstacks.storage_barrel_c.vip` | 4 |
| `objectstacks.composter.use` | 2 |
| `objectstacks.composter.vip` | 4 |
| `objectstacks.box_wooden.use` | 2 |
| `objectstacks.box_wooden.vip` | 4 |
| `objectstacks.box_wooden_large.use` | 2 |
| `objectstacks.box_wooden_large.vip` | 4 |
| `objectstacks.coffin_storage.use` | 2 |
| `objectstacks.coffin_storage.vip` | 4 |
| `objectstacks.electric_generator_small.use` | 2 |
| `objectstacks.electric_generator_small.vip` | 4 |
| `objectstacks.electric_furnace.use` | 2 |
| `objectstacks.electric_furnace.vip` | 4 |
| `objectstacks.electric_battery_rechargable_large.use` | 2 |
| `objectstacks.electric_battery_rechargable_large.vip` | 4 |

:::info Note
Permissions and limits are configured in the `"Permissions & their amount of stacked furnaces allowed"` section of the configuration. You can add your own permission levels with any amount.
:::

### Permission Configuration Example

```
oxide.grant group default objectstacks.box_wooden.use
oxide.grant group vip objectstacks.box_wooden.vip
```

A player with the `objectstacks.box_wooden.use` permission can stack a maximum of 2 boxes. With the `objectstacks.box_wooden.vip` permission -- a maximum of 4.

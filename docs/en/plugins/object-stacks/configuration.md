---
title: "Object Stacks Configuration"
description: "Complete reference for the Object Stacks plugin configuration settings."
sidebar_position: 4
---

# Object Stacks Configuration

The configuration file is located at: `oxide/config/ObjectStacks.json`

## Main Parameters

| Parameter | Default | Description |
|---|---|---|
| Logging level | `None` | Logging level: `None`, `File`, `Console`, `All` |
| Can stack only in Building Privileged zones? | `true` | Restrict stacking to TC zones |
| Blacklisted Skins | `[123, 1223]` | Skins prohibited from stacking |

## Permissions and Limits (Permissions)

The `"Permissions & their amount"` dictionary determines the maximum number of objects in a stack for each permission:

```json
"Permissions & their amount of stacked furnaces allowed": {
 "objectstacks.box_wooden.use": 2,
 "objectstacks.box_wooden.vip": 4,
 "objectstacks.box_wooden_large.use": 2,
 "objectstacks.box_wooden_large.vip": 4
}
```

Key format: `objectstacks.[shortname].[level]`

When multiple permissions are present, the highest limit applies.

## Objects and Offsets

The `"Objects and offsets"` dictionary determines which objects can be stacked and the vertical offset for each:

```json
"Objects and offsets": {
 "assets/prefabs/deployable/.../box.wooden.prefab": {
 "YOffset": 0.65,
 "Shortname for permissions": "box_wooden"
 }
}
```

| Field | Description |
|---|---|
| Key (prefab path) | Path to the deployable object prefab |
| YOffset | Vertical offset when stacking (in meters) |
| Shortname for permissions | Name used for forming permissions |

### Default Supported Objects

- Wooden boxes (box_wooden, box_wooden_large)
- Storage barrels (storage_barrel_b, storage_barrel_c)
- Composter (composter)
- Electric furnace (electric_furnace)
- Generators (electric_generator_small, electric_fuelgenerator_small)
- Batteries (small, medium, large)
- Coffin (coffin_storage)
- Medieval boxes
- Bamboo and wicker barrels
- DLC containers (Abyss)

:::tip Tip
To add a new object, find its prefab path, determine the vertical offset, and add an entry in the configuration with a unique shortname for permissions.
:::

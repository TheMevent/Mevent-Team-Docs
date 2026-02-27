---
title: "Object Stacks Setup"
description: "Step-by-step guide for installing the Object Stacks plugin."
sidebar_position: 2
---

# Object Stacks Setup

## Step 1: Install the Plugin

1. Copy the `ObjectStacks.cs` file to the `oxide/plugins/` folder.
2. The plugin will load automatically.

Configuration file:
```
oxide/config/ObjectStacks.json
```

## Step 2: Configure Permissions

Each object has its own permissions that determine the maximum stack size:

```
oxide.grant group default objectstacks.box_wooden.use
oxide.grant group vip objectstacks.box_wooden.vip
```

Permission format: `objectstacks.[shortname].[level]`

### Default Permission Examples

| Permission | Max Stack |
|---|---|
| `objectstacks.box_wooden.use` | 2 |
| `objectstacks.box_wooden.vip` | 4 |
| `objectstacks.box_wooden_large.use` | 2 |
| `objectstacks.box_wooden_large.vip` | 4 |
| `objectstacks.electric_furnace.use` | 2 |
| `objectstacks.electric_furnace.vip` | 4 |

## Step 3: Verify It Works

1. Join the server with the appropriate permission.
2. Place a wooden box.
3. Hold another box in your hands.
4. Aim your crosshair at the placed box.
5. Right-click -- the box will be placed on top.

## Step 4: Configure Settings

Open `oxide/config/ObjectStacks.json`:

- **Can stack only in Building Privileged zones?** -- restrict stacking to TC zones only
- **Blacklisted Skins** -- skins prohibited from stacking
- **Permissions & their amount** -- permissions and stack limits
- **Objects and offsets** -- list of objects with vertical offsets

## Step 5: Reload the Plugin

```
oxide.reload ObjectStacks
```

---
title: "Object Stacks"
description: "A system for stacking deployable objects on top of each other -- boxes, furnaces, generators, and other placeable objects."
version: "1.2.3"
tags: [rust, plugin, stacking, objects, building]
sidebar_position: 1
---

# Object Stacks

## What does this plugin do?

**Object Stacks** allows players to place deployable objects (boxes, barrels, generators, furnaces, batteries, etc.) on top of each other, creating vertical stacks. A player looks at an already placed object and right-clicks with the same item in hand -- the new object is placed on top of the existing one. The maximum number of objects in a stack is determined by permissions.

## Key Features

- Stack objects on top of each other with right-click
- Configurable list of supported objects with individual offsets
- Permission system for limiting the number of objects in a stack
- Restrict stacking to building privilege (TC) zones only
- Skin blacklist to prevent stacking of certain objects
- Works on tugboats
- Automatic stability and collision tracking
- Console and file logging

## Requirements

| Dependency | Required | Description |
|---|---|---|
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Copy the `ObjectStacks.cs` file to the `oxide/plugins/` folder.
2. Restart the server or run `oxide.reload ObjectStacks`.
3. Grant the stacking permission: `oxide.grant group default objectstacks.box_wooden.use`.
4. Hold a box in your hands, aim at a placed box, and right-click.

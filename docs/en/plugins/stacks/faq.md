---
title: "Stacks FAQ"
description: "Frequently asked questions about the Stacks plugin"
sidebar_position: 5
---

# Frequently Asked Questions (FAQ)

## 1. What is a "stack" and a "container multiplier"?

A **stack** is the maximum number of identical items that can be placed in a single inventory slot. For example, the default stack for wood in Rust is 1000 units.

A **container multiplier** is a coefficient applied to the stack size of items inside a specific container. For example, with a multiplier of 2.0 in a large box, wood will stack up to 2000.

## 2. Does the plugin require ImageLibrary?

Yes, **ImageLibrary** is a required dependency. Without it, the plugin cannot display the graphical interface and will produce an error when attempting to open the management panel. Install ImageLibrary before using the plugin.

## 3. How do I change the stack size for a specific item?

There are three ways:

1. **Through the management panel**: type `/stacks`, find the item, and click "Settings".
2. **Through chat**: type `/stacks setstack wood 50000` (replace wood and the number as needed).
3. **Through chat (item in hand)**: pick up the item and type `/stacks sethandstack 5000`.
4. **Through console**: `stacks.manage stack set wood 50000`.

## 4. How do I set a multiplier for a container?

Open the management panel (`/stacks`), go to the "Containers" tab, find the desired container, and click "Settings". You can also enable changing via hammer in the configuration.

## 5. What happens to items if I reduce the stack size?

Items that are already stacked above the new limit will remain in the slot, but when moved they will be automatically split into allowed stacks. If the "Disallow overstack items" option is enabled, items will be automatically split into correct stacks when moved to a player's inventory.

## 6. Can I prevent stack changes for certain items?

Yes, add the item's shortname to the `Blocked List > Items` section of the configuration. You can also block specific skins by adding their IDs to the `Blocked List > Skins` section.

## 7. Does the container multiplier affect all items inside?

Yes, the container multiplier applies to all items inside that container type. For example, if the large box multiplier is set to 3.0, all items in it will stack up to triple their size.

## 8. Are settings preserved across server restarts?

Yes, all stack and container multiplier settings are saved in data files and restored on server restart.

## 9. Is the plugin compatible with FurnaceSplitter?

Yes, the plugin automatically detects FurnaceSplitter and correctly handles item movement in furnaces so that both plugins work without conflicts.

## 10. Is Carbon supported?

Yes, the plugin supports both Oxide/uMod and Carbon.

## 11. What languages is the interface available in?

The plugin interface supports the following languages: English, Russian, Chinese (Simplified), German, and French. The language is selected automatically based on the player's client settings.

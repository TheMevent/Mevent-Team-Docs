---
title: "Stacks"
description: "A plugin for full control over item stack sizes and container multipliers on a Rust server"
version: "1.5.20"
tags: [rust, plugin, "item management"]
sidebar_position: 1
---

# Stacks

## What does this plugin do?

**Stacks** allows your server to flexibly manage stack sizes (the maximum number of items in a single inventory slot) for every item in the game. You can set individual stack sizes for any items, as well as configure multipliers for specific containers (chests, furnaces, tool cupboards, etc.). The plugin provides a convenient graphical interface for administrators.

## Key Features

- Individual stack size configuration for every item in the game
- Container multiplier configuration (chests, furnaces, fridges, etc.)
- Convenient graphical interface (GUI) with search and categories
- Changing container multipliers using a hammer
- Blocking specific items and skins from stack changes
- Protection against "overstack" (stack overflow during movement)
- Compatible with FurnaceSplitter, ImageLibrary, Notify, UINotify, and LangAPI
- Console commands for managing stacks without GUI

## Requirements

| Dependency | Required? | Description |
| -------------- | ------------ | --------------------------------------- |
| ImageLibrary | Yes | Required for displaying images in the interface |
| Notify / UINotify | No | Optional, for sending notifications |
| LangAPI | No | Optional, for localizing item names |
| FurnaceSplitter| No | Taken into account when moving items to furnaces |

## Quick Start

1. Install the **ImageLibrary** plugin on your server (required dependency).
2. Place the plugin file in the `oxide/plugins` folder on your server.
3. Restart the server or run `oxide.reload Stacks`.
4. Grant yourself the access permission: `oxide.grant user your_steamid stacks.admin`.
5. Type `/stacks` in chat to open the management panel.

## Permissions

| Permission | Description |
| ---------------- | --------------------------------------------- |
| `stacks.admin` | Full access to the management panel and commands |

## Player Commands

This plugin has no commands available to regular players. All commands are intended for administrators.

## Administrator Commands

### Chat Commands

| Command | Description |
| ------------------------------------------------ | ------------------------------------------------- |
| `/stacks` | Opens the graphical stack management panel |
| `/stacks sethandstack [size]` | Sets the stack size for the item in your hand |
| `/stacks setstack [shortname] [size]` | Sets the stack size for the specified item |

**Examples:**

```
/stacks
/stacks sethandstack 10000
/stacks setstack wood 50000
```

### Console Commands

| Command | Description |
| ----------------------------------------------------- | ------------------------------------------- |
| `stacks.manage stack set [shortname] [size]` | Sets the stack size (from console) |
| `stacks.manage stack get [shortname]` | Shows the current stack size of an item |
| `stacks.manage stack get all` | Shows stack sizes of all items |

**Examples:**

```
stacks.manage stack set wood 50000
stacks.manage stack get wood
stacks.manage stack get all
```

## Troubleshooting

| Problem | Solution |
| -------- | ------- |
| Plugin does not work, error is displayed | Make sure the **ImageLibrary** plugin is installed and loaded correctly |
| No access to the management panel | Check that you have been granted the `stacks.admin` permission |
| Items do not stack with the new size | Make sure the item or its skin is not added to the block list (Blocked List) in the configuration |
| Stacks are not applied in certain containers | Check the container multiplier in the management panel (Container tab) |
| Items are lost when moving between containers | Enable the overstack prevention option in the configuration (`Disallow overstack items`) |
| Changing stacks via hammer does not work | Make sure the "Changing multiplies in containers using a hammer" option is enabled in the configuration |

---
title: "Stacks Commands"
description: "Complete list of commands and permissions for the Stacks plugin"
sidebar_position: 4
---

# Commands and Permissions

## Permissions

| Permission | Description |
| ---------------- | --------------------------------------------------------- |
| `stacks.admin` | Access to the management panel and all plugin commands |

### Granting Permissions

For a specific player:
```
oxide.grant user <steamid> stacks.admin
```

For a group:
```
oxide.grant group admin stacks.admin
```

## Chat Commands

All chat commands require the `stacks.admin` permission.

### Opening the Management Panel

```
/stacks
```

Opens the graphical management panel with two tabs: "Items" and "Containers". The panel supports search, category filtering, and pagination.

### Setting the Stack for an Item in Hand

```
/stacks sethandstack [size]
```

Sets a new stack size for the item you are holding in your hand.

**Example:**
```
/stacks sethandstack 5000
```

If you are holding wood, its maximum stack will become 5000.

### Setting the Stack for an Item by Name

```
/stacks setstack [shortname] [size]
```

Sets a new stack size for the item with the specified short name.

**Examples:**
```
/stacks setstack wood 50000
/stacks setstack metal.ore 20000
/stacks setstack sulfur 30000
```

## Console Commands

Console commands are executed from the server console (RCON).

### Managing Stacks

```
stacks.manage
```

Displays help for available management commands.

### Setting a Stack Size

```
stacks.manage stack set [shortname] [size]
```

**Example:**
```
stacks.manage stack set wood 50000
```

### Getting the Current Stack Size

```
stacks.manage stack get [shortname]
```

**Example:**
```
stacks.manage stack get wood
```

Response: `Stack size: 50000 (0 -- default)`

### Getting All Stack Sizes

```
stacks.manage stack get all
```

Outputs a complete list of all items and their current stack sizes.

## Graphical Interface

### Items Tab

- **Categories**: filter items by in-game categories
- **Search**: search for items by name or shortname
- **Item list**: displays name, default stack, and current stack
- **Settings**: button to change the stack size of a specific item

### Containers Tab

- **Search**: search for containers by name
- **Container list**: displays container image, default multiplier, and current multiplier
- **Settings**: button to change the multiplier of a specific container

### Changing via Hammer

If the "Changing multiplies in containers using a hammer" option is enabled in the configuration, administrators can hit a container with a hammer to open the multiplier settings window for that container.

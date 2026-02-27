---
title: "Commands - Wipe Block"
description: "Complete list of commands for the Wipe Block plugin for players and administrators"
sidebar_position: 4
---

# Wipe Block Commands

## Player Commands

### Opening the Block Menu

| Command | Description |
|---|---|
| `/block` | Opens the main menu with information about blocked and unlocked items |
| `/wipeblock` | Alternative command to open the same menu |

:::info
These commands are configurable in the configuration. The administrator can change them to any others.
:::

### Menu Navigation

Three tabs are available in the interface:

| Tab | Description |
|---|---|
| Blocked | Shows only blocked items with countdown timers |
| Unlocked | Shows already available items |
| All Items | Shows the full list of items from all categories |

## Administrator Commands

### Block Time Offset

```
/wb.indent [seconds]
```

Changes the block reference point by shifting it by the specified number of seconds.

**Parameters:**
- `seconds` -- an integer (positive to accelerate, negative to delay)

**Examples:**

| Example | Effect |
|---|---|
| `/wb.indent 3600` | Accelerates unlock by 1 hour |
| `/wb.indent 7200` | Accelerates unlock by 2 hours |
| `/wb.indent -1800` | Delays unlock by 30 minutes |
| `/wb.indent 86400` | Accelerates unlock by 24 hours |

:::warning Warning
The `/wb.indent` command is only available to server administrators. The value is saved in the configuration and accumulated on repeated calls.
:::

## On-Screen Widget

If the widget is enabled in the configuration, each player's screen displays a block status indicator:

- **Title:** "BLOCK AFTER WIPE"
- **Description:** "There are restricted items"
- **Position:** Top-right corner of the screen by default

The widget automatically disappears when all items are unlocked.

## Notifications

When an item is unlocked, all players with the `wipeblock.unlocknotify` permission receive a notification:

> "'{item name}' has been unlocked!"

If the Notify or UINotify plugin is installed, the notification is displayed through it. Otherwise, it is shown through standard chat.

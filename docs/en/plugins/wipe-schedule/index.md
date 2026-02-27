---
title: "Wipe Schedule"
description: "Interactive server event calendar with wipe schedules and recurring event configuration"
version: "2.0.19"
tags: [rust, plugin, wipe, schedule, calendar]
sidebar_position: 1
---

# Wipe Schedule

## What does this plugin do?

**Wipe Schedule** allows your server to display a beautiful interactive calendar with wipe schedules, events, and other occurrences. Administrators can configure recurring events (global wipes, map wipes, post-wipe blocks, custom events) through a convenient in-game interface. Players will always know when the next wipe or server event will happen.

## Key Features

- Full-featured interactive calendar with monthly view and current day highlighting
- Support for different event types: global wipe, map wipe, post-wipe block, custom events
- Flexible recurring event configuration (by days, weeks, months, years)
- Visual in-game event editor for administrators
- Customizable icons and colors for each event type
- Time zone support
- Integration with ServerPanel, Notify, and UINotify
- ImageLibrary support for custom icons
- Option to start the week on Sunday or Monday

## Requirements

- Rust server with Oxide/uMod
- **ImageLibrary** (required) -- for displaying event icons
- Recommended plugins (optional): Notify or UINotify, ServerPanel

## Quick Start

1. Install ImageLibrary if it is not already installed.
2. Copy the plugin file to the `oxide/plugins` folder.
3. Load the plugin and wait for images to finish loading.
4. Type `/wipe` in chat to view the calendar.
5. To configure events, use the "Edit Events" button in the interface (administrator permission required).

## Permissions

| Permission | Description |
|---|---|
| `wipeschedule.admin` | Access to editing events and schedules through the interface |

## Player Commands

| Command | Description |
|---|---|
| `/wipe` | Opens the server event calendar |
| `/wipedata` | Alternative command to open the calendar |

:::tip Example
Type `/wipe` in chat to see the calendar with marked wipe dates and events.
:::

## Administrator Commands

| Command | Description |
|---|---|
| `wipeschedule.time` | Console command to view current server time with time zone |

The main event configuration is done through the in-game visual interface ("Edit Events" button in the calendar).

:::tip Example
To create a new event: open the calendar with `/wipe`, click "Edit Events", then "Add Event". Choose the type, specify a name, and configure the repeat schedule.
:::

## Troubleshooting

| Problem | Solution |
|---|---|
| Icons are not displayed | Make sure ImageLibrary is installed and loaded. Reload the plugin. |
| "Edit Events" button is not visible | Check that you have the `wipeschedule.admin` permission. |
| Incorrect time in the calendar | Configure the "Time Zone" parameter in the configuration to match your time zone. |
| Calendar is empty | Add events through the administrator interface or check the schedule data file. |
| Plugin does not load | Make sure ImageLibrary is installed. Check the console for errors. |
| Custom events are not displayed | Check that translation keys for custom events are defined in the configuration. |

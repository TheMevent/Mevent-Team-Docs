---
title: "Commands - Wipe Schedule"
description: "Complete list of commands for the Wipe Schedule plugin for players and administrators"
sidebar_position: 4
---

# Wipe Schedule Commands

## Player Commands

### Opening the Calendar

| Command | Description |
|---|---|
| `/wipe` | Opens the interactive server event calendar |
| `/wipedata` | Alternative command to open the calendar |

:::info
Commands are configurable in the configuration and can be changed by the administrator.
:::

### Calendar Navigation

The following elements are available within the calendar interface:

| Element | Description |
|---|---|
| Navigation arrows (< >) | Switch between months |
| Days with markers | Clicking a day shows detailed event information |
| Event types | Color markers indicate different event types |

## Administrator Commands

### Management through the Interface

The main event management is done through the visual interface:

1. Open the calendar with the `/wipe` command.
2. Click the **"Edit Events"** button (only visible to administrators with the `wipeschedule.admin` permission).
3. In the opened editor, the following actions are available:

| Action | Description |
|---|---|
| Add Event | Create a new event with type, name, color, and schedule selection |
| Delete | Delete the selected event |
| Save | Save changes to the current event |

### Console Commands

| Command | Description |
|---|---|
| `wipeschedule.time` | Shows the current server time with the configured time zone |

:::tip Example
Use `wipeschedule.time` in the server console to verify that the time zone is configured correctly.
:::

### Creating an Event: Step-by-Step Guide

1. Open the calendar (`/wipe`).
2. Click "Edit Events".
3. Click "Add Event".
4. Select the event type (global wipe, map wipe, wipe block, event).
5. Enter a name and description.
6. Choose the date mode:
 - **Once** -- specify a specific date and time.
 - **Repeat** -- configure the repeat interval (days, weeks, months, years).
7. If needed, set a custom color and icon.
8. Click "Save".

### Repeat Configuration: Examples

| Scenario | Configuration |
|---|---|
| Wipe every Thursday | Mode "Repeat", days of week: Thursday |
| Wipe on the 1st of every month | Mode "Repeat", days of month: 1 |
| Raid night every Saturday | Mode "Repeat", days of week: Saturday |
| Global wipe on the first Thursday of the month | Mode "Repeat", days of week: Thursday, interval: first week |

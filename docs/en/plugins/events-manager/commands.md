---
title: "Commands"
description: "Full list of Events Manager commands for administrators"
sidebar_position: 4
---

# Commands

## Chat Commands

| Command | Permission | Description |
|---|---|---|
| `/em` | `EventsManager.use` | Open the visual control panel |

:::note Configurable Commands
The `/em` command is the default command. You can change or add other commands in the configuration ("Commands" parameter).
:::

## Console Commands

| Command | Description |
|---|---|
| `eventmanager.reset.default` | Reset all data (events, schedules, categories) to default values. Server console only. |

## Managing Through the Visual Panel

After opening the panel via `/em`, the following actions are available:

### Event Management

- **Add event** -- create a new event specifying the name, launch command, plugin, and creator category
- **Edit event** -- modify the parameters of an existing event
- **Delete event** -- completely remove an event from the system
- **Launch manually** -- immediately launch an event from the panel

### Schedule Management

- **Create schedule** -- add a new schedule choosing the type (fixed time, interval, or random)
- **Edit schedule** -- modify the parameters of an existing schedule
- **Delete schedule** -- remove a schedule from the list

### Category Management

- **Add category** -- create a new creator category
- **Edit category** -- rename an existing category

## Permissions

| Permission | Description |
|---|---|
| `EventsManager.use` | Full access to the event management panel |

## Usage Example

### Creating an Event with Auto-Launch

1. Open the panel with the `/em` command
2. Navigate to the desired category tab
3. Click **"Add event"**
4. Specify the name, launch command, and plugin
5. Save the event
6. Click on the event to edit it
7. Create a schedule (e.g.: every 60 minutes, with 10+ players online)
8. Save the schedule

### Manually Launching an Event

1. Open the panel with the `/em` command
2. Find the desired event
3. Click the **"Launch"** button next to the schedule

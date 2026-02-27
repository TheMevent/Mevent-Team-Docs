---
title: "Commands"
description: "Full list of Multi Events commands"
sidebar_position: 4
---

# Commands

## Player Commands

| Command | Description |
|---|---|
| `/events` | Open the server events panel |

:::note Customizable Commands
The default command is `/events`. You can change it or add more in the config ("Info Commands" option).
:::

### Using the Player Panel

After opening the panel, players can:

- Browse all server events
- See details about each event (description, banner)
- Open detailed event info
- View the leaderboard (if the module is enabled)
- Open the reward inventory (if the module is enabled)
- Hide notifications for specific events

## Admin Commands

| Command | Permission | Description |
|---|---|---|
| `/ShowUiEditor` | `multievents.edit` | Open the visual UI editor |

### Visual Editor

The editor lets admins:

- **Edit UI elements** -- change position, size, color, and opacity of any element
- **Set anchors** -- configure element alignment (top, bottom, center, corners)
- **Edit colors** -- color picker for any element
- **Edit text** -- change text, fonts, and sizes
- **Start and stop events** -- launch/stop buttons right from the panel

### Event Management via Panel

Admins with `multievents.edit` can:

| Action | Description |
|---|---|
| Start event | "START" button on the event page |
| Stop event | "STOP" button for an active event |
| Random event | "RANDOM" button to launch a random event |
| Edit UI | "UI EDITOR" button to open the visual editor |

## Permissions

| Permission | Description |
|---|---|
| `multievents.edit` | Access to the visual editor and event management |

Additional permissions (configurable):

| Parameter | Description |
|---|---|
| Inventory permission | Access to the reward inventory (if set) |
| Leaderboard permission | Access to the leaderboard (if set) |

## Notification UI

When events start, players get pop-up notifications. Players can:

- Hide all event notifications
- Hide notifications for a specific event

Notification preferences are saved per player.

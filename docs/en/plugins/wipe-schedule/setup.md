---
title: "Setup - Wipe Schedule"
description: "Installation and initial configuration guide for the Wipe Schedule plugin"
sidebar_position: 2
---

# Wipe Schedule Setup

## System Requirements

- Rust server with Oxide/uMod installed
- **ImageLibrary** -- required dependency for displaying icons
- Recommended plugins (optional):
 - **Notify** or **UINotify** -- for player notifications
 - **ServerPanel** -- for server menu integration

## Step-by-Step Installation

### Step 1: Install Dependencies

Make sure the ImageLibrary plugin is installed on the server. Without it, event icons will not be displayed.

### Step 2: Download the Plugin

Copy the plugin file to the directory:

```
oxide/plugins/
```

### Step 3: Automatic Setup

After the first load, the plugin will create:
- Configuration file: `oxide/config/WipeSchedule.json`
- Schedule data file
- Language files for Russian and English

### Step 4: Configure Time Zone

Open the configuration file and set your time zone in the "Time Zone" parameter. The value is specified as a UTC offset in hours:

- Moscow: `3`
- Kyiv: `2`
- Minsk: `3`
- London: `0`
- Berlin: `1`

### Step 5: Create Events

1. Join the server with administrator privileges.
2. Type `/wipe` in chat.
3. Click the "Edit Events" button.
4. Click "Add Event" and configure it through the visual interface.

## Permission Setup

Grant administrator permission for managing the schedule:

```
oxide.grant user <player_name> wipeschedule.admin
oxide.grant group admin wipeschedule.admin
```

## Event Types

The following types are available when creating events:

| Type | Description |
|---|---|
| Global Wipe | Full server wipe (map + blueprints) |
| Map Wipe | Map-only wipe |
| Wipe Block | Post-wipe block period |
| Global Event | Special server events |
| Event | Custom events (raid nights, tournaments, etc.) |

## Repeat Modes

A repeat schedule can be configured for each event:

| Mode | Description |
|---|---|
| Once | Event occurs one time at the specified date and time |
| Days | Repeat every specified number of days |
| Weeks | Repeat on specific days of the week |
| Months | Repeat on specified months and dates |
| Years | Annual repeat |

## ServerPanel Integration

The plugin automatically registers with ServerPanel. Choose the desired template (V1 or V2) in the configuration.

## Verifying Installation

1. Join the server.
2. Type `/wipe` in chat.
3. Make sure the calendar opens and the current day is highlighted.
4. Check that event icons are displayed.

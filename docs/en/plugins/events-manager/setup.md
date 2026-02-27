---
title: "Installation and Setup"
description: "Step-by-step guide for installing and initially configuring Events Manager"
sidebar_position: 2
---

# Installation and Setup

## System Requirements

- A Rust server with **Oxide** or **Carbon** installed
- The **ImageLibrary** plugin (Oxide only)

## Step-by-Step Installation

### Step 1: Download the Plugin

Copy the `EventsManager.cs` file to your server's plugins directory:

```
oxide/plugins/EventsManager.cs
```

### Step 2: Install Dependencies

If you are using **Oxide**, make sure the **ImageLibrary** plugin is installed and working. For **Carbon**, this is not required.

### Step 3: Load the Plugin

Restart the server or run the command in the console:

```
o.reload EventsManager
```

### Step 4: Initial Setup

On first launch, the plugin will automatically:
- Create the configuration file
- Load the default event list with support for dozens of popular plugins
- Load the list of creators (event developers)

### Step 5: Set Up Permissions

Grant access permissions to administrators:

```
o.grant user SteamID64 EventsManager.use
o.grant group admin EventsManager.use
```

### Step 6: Open the Control Panel

Type `/em` in the in-game chat to access the visual control panel.

## Schedule Configuration

Through the control panel, you can create schedules of three types:

### Fixed Time (Static)

The event launches at an exact time (e.g., every day at 14:00).

- **Hour** -- from 0 to 24
- **Minute** -- from 0 to 59
- **Days of the week** -- specific days can be selected (if none selected -- daily)
- **Offset** -- random offset in minutes (from min to max)

### Repeat Every N Minutes (Every)

The event launches at a fixed interval from the last launch.

- **Interval** -- number of minutes between launches

### Random Interval (Random)

The event launches after a random number of minutes within a specified range.

- **Minimum** -- minimum interval in minutes
- **Maximum** -- maximum interval in minutes

## Additional Launch Conditions

For each schedule, you can set:

| Parameter | Description |
|---|---|
| Min players | The event will not launch if fewer than the specified number of players are on the server |
| Max players | The event will not launch if more than the specified number of players are on the server |
| Days of the week | The event will only launch on selected days |

## Vanilla Event Management

The plugin allows you to disable standard vanilla Rust events (helicopter, airdrop, etc.) and manage them through the schedule.

A whitelist is available in the configuration -- events on this list will not be disabled.

## Data Files

The plugin stores data in several files:

| File | Description |
|---|---|
| `EventManager/CreatorsSettings` | List of creator categories |
| `EventManager/EventsSettings` | List of registered events |
| `EventManager/TimesSettings` | Schedule settings |

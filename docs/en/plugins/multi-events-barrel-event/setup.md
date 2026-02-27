---
title: "Setup -- Barrel Event"
description: "Step-by-step guide for installing the Barrel Event mode for Multi Events."
sidebar_position: 2
---

# Barrel Event Setup

## Prerequisites

Before installing, make sure you have:

- **Multi Events** -- the core plugin (required)
- **ImageLibrary** -- for UI elements (required)

### Recommended Plugins

- **Multi Events Inventory** -- for storing rewards in the event inventory
- **Multi Events Leaderboard** -- for an extended leaderboard
- **Notify** or **UINotify** -- for in-game notifications

## Step-by-Step Installation

### Step 1. Download

Download the Barrel Event mode file from Expansion Pack 1.

### Step 2. Place the File

Copy the plugin file to:

```
oxide/plugins/
```

### Step 3. Load the Plugin

The plugin loads automatically. If the server is already running, run in the console:

```
oxide.reload MultiEventsBarrelEvent
```

### Step 4. Verify

After the plugin loads:

1. A config file will appear in `oxide/config/`
2. The mode automatically registers with Multi Events
3. The event becomes available to launch

### Step 5. Configure

Open the config file and set up:

- Points for each barrel type
- Event duration
- Rewards for winners

Reload the plugin after changing the config.

## Testing

Start the event manually:

```
barrelevent.start
```

Make sure:
- The UI widget shows for all players
- Destroying barrels awards points
- The leaderboard updates

To stop the event:

```
barrelevent.stop
```

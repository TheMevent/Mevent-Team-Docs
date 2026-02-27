---
title: "Setup — Vehicle Hunter"
description: "Step-by-step installation guide for the Vehicle Hunter mode for Multi Events."
sidebar_position: 2
---

# Setting Up Vehicle Hunter

## Prerequisites

Before installing, make sure these are on your server:

- **Multi Events** — core plugin (required)
- **ImageLibrary** — for rendering UI elements (required)

### Recommended Plugins

- **Multi Events Inventory** — stores rewards in the event inventory
- **Multi Events Leaderboard** — extended leaderboard
- **Notify** or **UINotify** — in-game notifications

## Step-by-Step Installation

### Step 1. Download

Download the Vehicle Hunter mode file from Expansion Pack 1.

### Step 2. Place the File

Copy the plugin file into:

```
oxide/plugins/
```

### Step 3. Load the Plugin

The plugin loads automatically. If the server is already running, run in console:

```
oxide.reload MultiEventsVehicleHunter
```

### Step 4. Verify

After the plugin loads:

1. A config file will appear in `oxide/config/`
2. The mode registers itself with Multi Events automatically
3. The event becomes available for launch

### Step 5. Configure

Open the config file and set up:

- Points for each vehicle type
- Event duration
- Winner rewards

Reload the plugin after making changes.

## Testing

Start the event manually from the server console:

```
vehiclehunter.start
```

Make sure that:
- The UI widget shows up for all players
- Destroying vehicles awards points
- The leaderboard updates

To stop the event:

```
vehiclehunter.stop
```

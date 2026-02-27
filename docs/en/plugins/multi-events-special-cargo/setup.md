---
title: "Setup — Special Cargo"
description: "Step-by-step installation guide for the Special Cargo mode for Multi Events."
sidebar_position: 2
---

# Setting Up Special Cargo

## Prerequisites

Before installing, make sure these are on your server:

- **Multi Events** — core plugin (required)
- **ImageLibrary** — for rendering UI elements (required)

### Recommended Plugins

- **Multi Events Inventory** — stores rewards in the event inventory
- **Multi Events Leaderboard** — extended leaderboard
- **Notify** or **UINotify** — in-game notifications

### Map Requirements

The map must have at least two monuments that aren't on the blocked list. By default, these are blocked: oilrig, cave, power_sub.

## Step-by-Step Installation

### Step 1. Download

Download the Special Cargo mode file (included in the base MultiEvents package).

### Step 2. Place the File

Copy the plugin file into:

```
oxide/plugins/
```

### Step 3. Load the Plugin

The plugin loads automatically. If the server is already running, run in console:

```
oxide.reload MultiEventsSpecialCargo
```

### Step 4. Verify

After the plugin loads:

1. A config file will appear in `oxide/config/`
2. The mode registers itself with Multi Events automatically
3. The event becomes available for launch

### Step 5. Configure

Open the config file and set up:

- Blocked monument list
- Monument zone radius
- Map marker settings
- Teleportation blocking
- Event duration
- Winner rewards

Reload the plugin after making changes.

## Testing

Start the event manually from the server console:

```
specialcargo.start
```

Make sure that:
- Monument markers show up on the map
- A runner is selected and marked
- The UI widget shows up for all players
- Delivering the cargo ends the event and grants the reward

To stop the event:

```
specialcargo.stop
```

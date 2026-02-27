---
title: "Setup — NPC Missile Silo"
description: "Step-by-step installation guide for the NPC Missile Silo mode for Multi Events."
sidebar_position: 2
---

# Setting Up NPC Missile Silo

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

Download the NPC Missile Silo mode file from Expansion Pack 1.

### Step 2. Place the File

Copy the plugin file into:

```
oxide/plugins/
```

### Step 3. Load the Plugin

The plugin loads automatically. If the server is already running:

```
oxide.reload MultiEventsNpcMissileSilo
```

### Step 4. Verify

After loading:

1. A config file will appear in `oxide/config/`
2. The mode registers itself with Multi Events automatically
3. The event becomes available for launch

### Step 5. Configure

Open the config and set up rewards and event duration. Reload the plugin after making changes.

## Testing

Start the event manually:

```
npcmissilesilo.start
```

Make sure the UI widget shows up and that kills on scientists in the missile silo zone award points.

To stop it:

```
npcmissilesilo.stop
```

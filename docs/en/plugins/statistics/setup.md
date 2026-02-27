---
title: "Statistics Installation"
description: "Step-by-step guide for installing and configuring the Statistics plugin for a Rust server."
sidebar_position: 2
---

# Statistics Installation

This guide will walk you through the process of installing the statistics system.

## Step 1: Install Dependencies

### ImageLibrary (required)

1. Download **ImageLibrary** from [umod.org](https://umod.org/plugins/image-library).
2. Place the `ImageLibrary.cs` file in the `oxide/plugins/` folder.
3. Make sure the plugin loaded without errors.

### Additional Dependencies (optional)

- **PlayTimeRewards** or **PlaytimeTracker** -- for tracking playtime
- **Notify** -- for graphical notifications
- **ServerPanel** -- for server menu integration
- **PlayerDatabase** -- for storing data in a database

## Step 2: Install the Plugin

1. Copy the `Statistics.cs` file into the `oxide/plugins/` folder.
2. The plugin will load automatically.
3. Check the console for errors.

Configuration file:
```
oxide/config/Statistics.json
```

## Step 3: Configure Permissions

Main permissions:

```
oxide.grant group default statistics.use
```

To hide from the leaderboard:

```
oxide.grant group admin statistics.hide
```

## Step 4: Configure the Score Table

In the configuration under the `"Score Table (shortname - score)"` section, configure points for various actions:

```json
{
 "kills": 1,
 "deaths": -1,
 "supply_drop": 3,
 "helicopter": 15,
 "bradley": 10
}
```

## Step 5: Configure the Weapons and Resources Lists

In the `"Weapons"` and `"Resources"` sections, specify which weapons and resources to track:

```json
{
 "Weapons": ["rifle.ak", "rifle.bolt", "rifle.l96"],
 "Resources": ["stones", "sulfur.ore", "metal.ore", "wood"]
}
```

## Step 6: Verify Operation

1. Join the server.
2. `/stats` -- view your profile.
3. `/leaders` -- view the leaderboard.

## Step 7: Reload the Plugin

```
oxide.reload Statistics
```

## Updating the Plugin

1. Replace the `Statistics.cs` file.
2. The plugin will automatically update the configuration.

:::note Note
It is recommended to keep a backup of the configuration and data before updating.
:::

---
title: "Setup and Configuration"
description: "Step-by-step guide for installing and configuring the Bot Purge plugin for MultiEvents."
sidebar_position: 2
---

# Setup and Configuration

This guide walks you through installing the Bot Purge mode for MultiEvents.

## System Requirements

- Rust server with Oxide / uMod / Carbon
- **MultiEvents** plugin installed (required)
- **ImageLibrary** plugin installed (required)

## Step 1: Install Dependencies

### MultiEvents (required)

Bot Purge is an expansion mode and can't work without MultiEvents.

1. Install **MultiEvents** following its documentation.
2. Make sure the plugin loads without errors.

### ImageLibrary (required)

1. Download **ImageLibrary** from [umod.org](https://umod.org/plugins/image-library).
2. Place `ImageLibrary.cs` in the `oxide/plugins/` folder.

:::warning Important
Bot Purge **won't work** without both MultiEvents and ImageLibrary.
:::

## Step 2: Install the Plugin

1. Copy `MultiEventsBotPurge.cs` to your server's `oxide/plugins/` folder.
2. The plugin loads automatically and registers with MultiEvents.
3. Check the console for errors.

The config file is created automatically:
```
oxide/config/MultiEventsBotPurge.json
```

## Step 3: Set Up Permissions

Grant permissions to admins:

```
oxide.grant group admin MultiEventsBotPurge.start
oxide.grant group admin MultiEventsBotPurge.stop
```

## Step 4: Test It

Start the event:

```
botpurge.start
```

Players should see the event panel with a timer and leaderboard. Kill NPC scientists to earn points.

## Step 5: Configure (optional)

Open `oxide/config/MultiEventsBotPurge.json` to adjust:

- **Event duration** -- how long the event runs
- **Bot point table** -- points per NPC type
- **Rewards** -- reward settings for each ranking position
- **Notify integration** -- enable/disable visual notifications

See [Configuration](./configuration) for details.

## Step 6: Reload the Plugin

After changing the config:

```
oxide.reload MultiEventsBotPurge
```

:::tip Tip
The plugin auto-registers with MultiEvents on load. If MultiEvents gets reloaded, Bot Purge re-registers automatically.
:::

## Updating the Plugin

When updating:

1. Replace `MultiEventsBotPurge.cs` with the new version.
2. The plugin reloads automatically.
3. Check the config for new parameters.

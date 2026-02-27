---
title: "Linking System Setup"
description: "Step-by-step guide for installing and configuring the Linking System plugin on your Rust server."
sidebar_position: 2
---

# Linking System Setup

This guide walks you through installing the Discord linking system.

## Step 1: Install Dependencies

### ImageLibrary (required)

1. Download **ImageLibrary** from [umod.org](https://umod.org/plugins/image-library).
2. Place `ImageLibrary.cs` in the `oxide/plugins/` folder.
3. Make sure the plugin loads without errors.

### Discord Bot (LinkBot) (required)

The plugin needs a Discord bot to handle linking on the Discord side. The bot communicates with your server via RCON commands.

1. Set up the bot following the LinkBot instructions.
2. Make sure the bot is connected to your server's RCON.
3. Create a `#verify` channel on your Discord server.

## Step 2: Install the Plugin

1. Copy `LinkingSystem.cs` to the `oxide/plugins/` folder.
2. The plugin will load automatically.
3. Check the console -- when the bot connects, you'll see: `LinkBot is connected`.

Config file location:
```
oxide/config/LinkingSystem.json
```

## Step 3: Set Up Permissions

```
oxide.grant group default linkingsystem.use
```

## Step 4: Configure the Linked Players Group

In the config, specify the group that linked players get added to:

```json
"What group for linked players": "discord"
```

Create the group:
```
oxide.group add discord
```

Set up whatever privileges you want for this group.

## Step 5: Configure Rewards

In the `"Rewards UI elements"` section, set up the visual bonuses displayed for linking:

```json
{
 "text": "MORE HEALTH",
 "textSize": 11,
 "textColor": "#DCDCDC"
}
```

:::info Note
The `Rewards` section only controls what's displayed in the UI. The actual bonuses are set up through the group and other plugins.
:::

## Step 6: Verify It Works

1. Join the server.
2. Type `/link` -- the UI should open.
3. Click "CONNECT DISCORD" and generate a code.
4. Paste the code in the Discord `#verify` channel.
5. Click "CHECK CONNECTION STATUS" to confirm.

## Step 7: Reload the Plugin

```
oxide.reload LinkingSystem
```

## Updating the Plugin

1. Replace the `LinkingSystem.cs` file.
2. The plugin will automatically update the config.
3. You'll see in the console: `Config update detected! Updating config values...`

:::note Note
Back up your data before updating.
:::

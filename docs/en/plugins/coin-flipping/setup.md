---
title: "Coin Flipping Installation"
description: "Step-by-step guide for installing and configuring the Coin Flipping plugin for a Rust server."
sidebar_position: 2
---

# Coin Flipping Installation

This guide will walk you through the entire process of installing the plugin on your server.

## Step 1: Install Dependencies

### ImageLibrary (Required)

The Coin Flipping plugin requires ImageLibrary for working with images in the interface.

1. Download **ImageLibrary** from [umod.org](https://umod.org/plugins/image-library).
2. Place the `ImageLibrary.cs` file in the `oxide/plugins/` folder.
3. Make sure the plugin loaded without errors.

### Economy (Optional)

If you want to use virtual currency, install one of the supported economy plugins:
- **Economics** -- standard economy plugin
- **ServerRewards** -- server rewards system
- Any other plugin with `Deposit`, `Withdraw`, `Balance` hooks

If you prefer to use in-game items (e.g., scrap), no additional plugin is needed.

## Step 2: Install the Plugin

1. Copy the `CoinFlipping.cs` file to your server's `oxide/plugins/` folder.
2. The plugin will load automatically.
3. Check the console for errors.

The configuration file will be automatically created at:
```
oxide/config/CoinFlipping.json
```

## Step 3: Set Up Permissions

Grant the basic permissions to all players:

```
oxide.grant group default coinflipping.use
oxide.grant group default coinflipping.npcs
oxide.grant group default coinflipping.players
oxide.grant group default coinflipping.createroom
```

:::info Note
All permissions are configured in the configuration. You can change the default permission names.
:::

## Step 4: Configure the Economy

Open the `oxide/config/CoinFlipping.json` file and configure the `Economy` section:

**For an economy plugin:**
```json
{
 "Economy": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance"
 }
}
```

**For items:**
```json
{
 "Economy": {
 "Type (Plugin/Item)": "Item",
 "ShortName": "scrap",
 "Skin": 0
 }
}
```

## Step 5: Verify It Works

1. Join the server.
2. Type `/flip` in chat.
3. The interface should open with game mode selection.

## Step 6: Reload the Plugin

After changing the configuration, reload the plugin:

```
oxide.reload CoinFlipping
```

## Updating the Plugin

When updating the plugin:

1. Replace the `CoinFlipping.cs` file with the new version.
2. The plugin will automatically update the configuration while preserving your settings.
3. Reload the plugin with the command `oxide.reload CoinFlipping`.

:::note Note
It is recommended to save a backup of the configuration before updating.
:::

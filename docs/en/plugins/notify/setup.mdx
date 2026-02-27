---
title: "Notify Setup"
description: "Step-by-step guide for installing and configuring the Notify plugin for a Rust server."
sidebar_position: 2
---

# Notify Setup

This guide will walk you through the entire process of installing the notification plugin on your server.

## Step 1: Install Dependencies

### ImageLibrary (required)

The Notify plugin requires ImageLibrary for working with images in notifications.

1. Download **ImageLibrary** from [umod.org](https://umod.org/plugins/image-library).
2. Place the `ImageLibrary.cs` file in the `oxide/plugins/` folder.
3. Make sure the plugin loads without errors.

:::warning Important
Without ImageLibrary, the Notify plugin **will not work**. An error will appear in the console: `IMAGE LIBRARY IS NOT INSTALLED!`
:::

## Step 2: Install the Plugin

1. Copy the `Notify.cs` file to your server's `oxide/plugins/` folder.
2. The plugin will load automatically.
3. Check the console for errors.

The configuration file will be automatically created at:
```
oxide/config/Notify.json
```

## Step 3: Configure Permissions

Grant the notification viewing permission to all players:

```
oxide.grant group default notify.see
```

If you want only a specific group to see notifications:

```
oxide.group add vip
oxide.grant group vip notify.see
```

:::info Note
Players without the `notify.see` permission will receive a text message in chat instead of a graphical notification (if this feature is enabled in settings).
:::

### Administrator Permissions

```
oxide.grant group admin notify.notify
oxide.grant group admin notify.player
oxide.grant group admin notify.allplayer
```

## Step 4: Verify It Works

Join the server and run the command in the console:

```
notify.show 0 Test notification!
```

You should see a blue popup notification in the top right corner of the screen.

To test an "error" type notification:

```
notify.show 1 This is a test error!
```

## Step 5: Configure Settings (optional)

Open the `oxide/config/Notify.json` file for fine-tuning:

- **Screen position** -- top right or bottom left corner
- **Dimensions** -- notification width and height
- **Display time** -- how long the notification stays on screen
- **Maximum count** -- how many notifications to show simultaneously
- **Notification types** -- color, icon, and behavior settings

For details on each parameter, see the [Configuration](./configuration) section.

## Step 6: Reload the Plugin

After changing the configuration, reload the plugin:

```
oxide.reload Notify
```

:::tip Tip
If you are using Notify as a notification system for other plugins (e.g., shop, raids, events), make sure Notify loads **before** those plugins, or simply reload the dependent plugins after installing Notify.
:::

## Updating the Plugin

When updating the plugin:

1. Replace the `Notify.cs` file with the new version.
2. The plugin will automatically update the configuration while preserving your settings.
3. A message will appear in the console: `Config update detected! Updating config values...`
4. After the update: `Config update completed!`

:::note Note
Configuration backups are created automatically before updates. It is also recommended to save a copy manually before major updates.
:::

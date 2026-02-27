---
title: "Genie Setup"
description: "Step-by-step guide for installing and configuring the Genie plugin for a Rust server."
sidebar_position: 2
---

# Genie Setup

This guide will walk you through the installation process of the magic lamp plugin.

## Step 1: Install Dependencies

### ImageLibrary (required)

1. Download **ImageLibrary** from [umod.org](https://umod.org/plugins/image-library).
2. Place the `ImageLibrary.cs` file in the `oxide/plugins/` folder.
3. Make sure the plugin loads without errors.

:::warning Important
Without ImageLibrary, the Genie plugin **will not work correctly**. Players will see an error message.
:::

## Step 2: Install the Plugin

1. Copy the `Genie.cs` file to your server's `oxide/plugins/` folder.
2. The plugin will load automatically.
3. Check the console for errors.

The configuration file will be automatically created at:
```
oxide/config/Genie.json
```

## Step 3: Configure Permissions (if needed)

If a specific lamp type has a Permission specified, grant it to the appropriate players:

```
oxide.grant group vip genie.special
```

:::info Note
If the `Permission` field for a lamp is left empty, it will be available to all players without restrictions.
:::

## Step 4: Configure Lamps

Open the `oxide/config/Genie.json` file and configure the lamp settings:

- **ID** -- unique identifier for the lamp type
- **Lamp** -- item settings (ShortName, skin, name)
- **Awards** -- list of rewards with chances
- **Delay** -- opening time in seconds

## Step 5: Verify It Works

Give yourself a lamp with the command:
```
genie.give <your_steamid> default
```

Use the received item -- the interface with animation should open.

## Step 6: Reload the Plugin

After changing the configuration:

```
oxide.reload Genie
```

## Updating the Plugin

When updating:

1. Replace the `Genie.cs` file with the new version.
2. The plugin will automatically update the configuration.
3. Reload the plugin.

:::note Note
It is recommended to save a backup of the configuration before updating.
:::

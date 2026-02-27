---
title: "Ultimate Leaderboard Setup"
description: "Step-by-step guide for installing and configuring the Ultimate Leaderboard plugin for a Rust server."
sidebar_position: 2
---

# Ultimate Leaderboard Setup

This guide will walk you through the process of installing the advanced leaderboard.

## Step 1: Install Dependencies

### ImageLibrary (required)

1. Download **ImageLibrary** from [umod.org](https://umod.org/plugins/image-library).
2. Place the `ImageLibrary.cs` file in the `oxide/plugins/` folder.
3. Make sure the plugin loaded without errors.

### Additional Dependencies (optional)

- **Notify** -- for graphical notifications
- **ServerPanel** -- for server menu integration
- **LangAPI** -- for multi-language support
- **Clans** -- for clan ranking
- **Friends** -- for friend filtering

## Step 2: Install the Plugin

1. Copy the `UltimateLeaderboard.cs` file to the `oxide/plugins/` folder.
2. The plugin will load automatically and create an SQLite database.
3. Check the console for errors.

Configuration file:
```
oxide/config/UltimateLeaderboard.json
```

## Step 3: Choose Data Storage

SQLite is used by default. To switch to MySQL, change the storage settings:

```json
{
 "Data Storage Settings": {
 "Storage Type": "MySQL",
 "MySQL": {
 "Host": "localhost",
 "Port": 3306,
 "DatabaseName": "rust",
 "Username": "root",
 "Password": ""
 }
 }
}
```

## Step 4: Configure Permissions (optional)

If you need to restrict access:

```json
"Permission to use plugin (ex: ultimateleaderboard.use)": "ultimateleaderboard.use"
```

```
oxide.grant group default ultimateleaderboard.use
```

Additional permissions:

```
oxide.grant group admin ultimateleaderboard.profile
oxide.grant group admin ultimateleaderboard.hide.self
```

## Step 5: Configure Caching

Recommended caching settings:

```json
{
 "Leaderboard Cache Interval (seconds)": 600,
 "Leaderboard Cache Batch Size (players per batch)": 10
}
```

## Step 6: Verify It Works

1. Join the server.
2. `/leaderboard` or `/stats` -- the interface will open.

## Step 7: Reload the Plugin

```
oxide.reload UltimateLeaderboard
```

## Updating the Plugin

1. Replace the `UltimateLeaderboard.cs` file.
2. The plugin will automatically update the configuration.

:::warning Important
When switching between SQLite and MySQL, use the `leaderboard.migrate` command to migrate data.
:::

:::note Note
It is recommended to keep a backup of the database before updating.
:::

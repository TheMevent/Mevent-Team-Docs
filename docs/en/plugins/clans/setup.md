---
title: "Clans Installation"
description: "Guide for installing and initially configuring the Clans plugin"
sidebar_position: 2
---

# Clans Installation

## Prerequisites

Before installing, make sure your server has:

- A Rust server with the **Oxide** or **Carbon** framework
- The **ImageLibrary** plugin (required dependency)

:::caution Required Dependency
Without the **ImageLibrary** plugin, the clan interface will not open. Players will see an error message.
:::

## Step 1: Install Dependencies

Download and install the **ImageLibrary** plugin by placing it in the folder:

```
oxide/plugins/ImageLibrary.cs
```

### Optional Plugins

For extended functionality, install:

| Plugin | Purpose |
|---|---|
| BetterChat / IQChat | Displaying clan tags in chat |
| Notify / UINotify | Attractive player notifications |
| Economics / ServerRewards | Paid features (clan creation, joining, etc.) |
| ZoneManager | Managing friendly fire in zones |
| Skinner | Extended skins for clan equipment |

## Step 2: Install the Plugin

1. Place the plugin file in the `oxide/plugins/` folder
2. The server will automatically load the plugin, or run:

```
o.reload Clans
```

3. After the first load, the plugin will create a configuration file:

```
oxide/config/Clans.json
```

:::tip
On first launch, the plugin will create all necessary data files automatically. No additional data file configuration is required.
:::

## Step 3: Basic Configuration

Open `oxide/config/Clans.json` and configure the main parameters:

### Commands

By default, the plugin uses the `/clan` and `/clans` commands. You can change them:

```json
"Commands": [
 "clan",
 "clans"
]
```

### Clan Limits

```json
"Limit Settings": {
 "Member Limit": 8,
 "Moderator Limit": 2,
 "Alliances Limit": 2
}
```

### Clan Tags

```json
"Clan Tag Settings": {
 "Tag Min Length": 2,
 "Tag Max Length": 6,
 "Case Sensitive": true,
 "Blocked Words": ["admin", "mod", "owner"],
 "Checking Characters": true
}
```

## Step 4: Set Up Permissions

Grant the administration permission to trusted administrators:

```
o.grant user <steamid> clans.admin
```

:::warning
The `clans.admin` permission grants full control over all clans on the server. Only grant it to head administrators.
:::

If you want to restrict clan creation to a specific permission, enable this in the configuration:

```json
"Permission Settings": {
 "Use permission to create a clan": true,
 "Permission to create a clan": "clans.cancreate"
}
```

Then grant the permission to the desired groups:

```
o.grant group default clans.cancreate
```

## Step 5: Configure Chat (Optional)

If you use BetterChat or IQChat, enable the integration:

```json
"Chat Settings": {
 "Enable clan tags in chat?": true,
 "Tag format": "<color=#{color}>[{tag}]</color>",
 "Enable clan chat?": true,
 "Clan chat commands": ["c", "cchat"],
 "Enable alliance chat?": true,
 "Alliance chat commands": ["a", "achat"],
 "Working with BetterChat?": true,
 "Working with IQChat?": true
}
```

## Step 6: Reload

After making changes to the configuration, reload the plugin:

```
o.reload Clans
```

## Verifying the Installation

Perform the following checks:

1. Type `/clan` in chat -- the interface should open
2. Create a test clan: `/clan create TEST`
3. Test the admin commands: `clans.manage list`

:::tip Next Step
After successful installation, proceed to the [detailed configuration guide](/en/plugins/clans/configuration).
:::

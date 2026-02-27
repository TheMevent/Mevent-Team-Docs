---
title: "Servers Setup"
description: "Step-by-step guide to installing the Servers plugin."
sidebar_position: 2
---

# Servers Setup

## Step 1: Install the Plugin

1. Copy `Servers.cs` into your `oxide/plugins/` folder.
2. The plugin will load automatically.

Config file:
```
oxide/config/Servers.json
```

## Step 2: Install Dependencies (optional)

| Plugin | Purpose |
|---|---|
| **ImageLibrary** | For loading server banners |
| **ServerPanel** | For server panel integration |

## Step 3: Configure Your Server List

Open `oxide/config/Servers.json` and set up the `"Servers"` array:

```json
"Servers": [
 {
 "IP": "64.40.9.56",
 "Port": 28014,
 "BmID": "",
 "ScrollDescriptionHeight": 186.0
 }
]
```

| Parameter | Description |
|---|---|
| IP | Server IP address or domain |
| Port | Connection port |
| BmID | BattleMetrics ID (for fetching server info) |
| ScrollDescriptionHeight | Description scroll height |

### Using BattleMetrics

If you set a `BmID`, the plugin will automatically pull:
- Server name
- Description
- Current online count
- Max players
- Map size
- Banner

## Step 4: Set Up Permissions

```
oxide.grant group default servers.use
```

## Step 5: Test It Out

1. Join the server with `servers.use` permission.
2. Type `/servers` in chat.
3. The server list should open with info and connect buttons.

## Step 6: Reload the Plugin

```
oxide.reload Servers
```

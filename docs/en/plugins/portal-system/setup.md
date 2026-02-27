---
title: "Portal System Installation"
description: "Step-by-step guide for installing the Portal System plugin."
sidebar_position: 2
---

# Portal System Installation

## Step 1: Install the Plugin

1. Copy the `PortalSystem.cs` file into the `oxide/plugins/` folder.
2. The plugin will load automatically.

Configuration file:
```
oxide/config/PortalSystem.json
```

Data file:
```
oxide/data/PortalSystem.json
```

## Step 2: Install Dependencies (optional)

| Plugin | Purpose |
|---|---|
| **ImageLibrary** | Icons in the portal interface |
| **Economics** | Purchasing portals with currency |
| **ServerRewards** | Purchasing portals with points |
| **NoEscape** | Blocking teleportation during raids |
| **Clans** | Portal sharing for clan members |

## Step 3: Configure Permissions

```
oxide.grant group default portalsystem.use
oxide.grant group default portalsystem.place
oxide.grant group default portalsystem.buy
oxide.grant group admin portalsystem.admin
oxide.grant group admin portalsystem.give
oxide.grant group admin portalsystem.spawn
```

### VIP Permissions for Portal Limits

```
oxide.grant group vip portalsystem.limit.4
oxide.grant group premium portalsystem.limit.6
```

### VIP Cooldowns

```
oxide.grant group vip portalsystem.vip1
oxide.grant group premium portalsystem.vip2
```

## Step 4: Verify Operation

1. Give yourself portals: `/giveportal your_name 2`.
2. Place the first portal in a doorway.
3. Place the second portal in a different doorway.
4. Approach the portal -- a menu with a link button will appear.
5. Link the portals through the interface.
6. Enter the portal to teleport.

## Step 5: Reload the Plugin

```
oxide.reload PortalSystem
```

---
title: "Virtual Recycler"
description: "Virtual recycler opened via chat command with configurable speed and permissions."
version: "1.0.7"
tags: [rust, plugin, recycler, virtual, recycle]
sidebar_position: 1
---

# Virtual Recycler

## What does this plugin do?

**Virtual Recycler** allows players to open a recycler via a chat command from anywhere, without needing to find a stationary recycler on the map. The player types a command, a virtual recycler appears in front of them, and it can be used like a regular one. Recycling speed is configurable through the permission system, allowing you to create VIP tiers with faster recycling.

## Key Features

- Open a virtual recycler via a chat command
- Configurable recycling speed for each permission
- VIP system with accelerated recycling
- Auto-start recycler on opening (optional)
- Automatic item return on close
- Separate speeds for stationary recyclers
- Notify support for notifications
- RaidableBases integration (permission for use in RaidableBases)

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **Notify** / **UINotify** | Optional | Notifications |
| **RaidableBases** | Optional | Raidable bases integration |
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Copy the `VirtualRecycler.cs` file to the `oxide/plugins/` folder.
2. Restart the server or run `oxide.reload VirtualRecycler`.
3. Grant the permission: `oxide.grant group default virtualrecycler.use`.
4. Type `/vrec` in chat to open the virtual recycler.

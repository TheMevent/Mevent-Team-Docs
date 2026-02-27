---
title: "Linking System"
description: "Link your Steam account to Discord on your Rust server with rewards for linking and a clean UI."
version: "1.1.5"
tags: [rust, plugin, discord, linking, verification]
sidebar_position: 1
---

# Linking System

## What does this plugin do?

**Linking System** lets players link their Steam account to Discord. A player generates a code in-game, enters it in the Discord bot, and the link is confirmed. Players can receive rewards for linking: extra groups, bonuses, and items.

## Key Features

- Link Steam accounts to Discord via code generation
- Automatically add players to a group after linking
- Clean UI showing link status
- Display Discord account info (name, avatar)
- Configurable rewards for linking (shown in the UI)
- Option to unlink accounts
- Cooldown on generating new codes
- Chat commands for managing links
- Discord bot integration via RCON commands
- Integration with ServerPanel, Notify
- Multiple UI templates (V1, V2)

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **ImageLibrary** | Required | For images in the UI |
| **Discord bot (LinkBot)** | Required | Handles linking on the Discord side |
| Notify | Optional | For graphical notifications |
| ServerPanel | Optional | For server menu integration |
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Install the **ImageLibrary** plugin.
2. Copy `LinkingSystem.cs` to the `oxide/plugins/` folder.
3. Set up the Discord bot (LinkBot) for your server.
4. Restart the server or run `oxide.reload LinkingSystem`.
5. Grant the permission:
 ```
 oxide.grant group default linkingsystem.use
 ```
6. Join the server and type `/link` to open the UI.

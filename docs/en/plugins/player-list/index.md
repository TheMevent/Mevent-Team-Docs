---
title: "Player List"
description: "A visual list of online players with profiles, action buttons, and integration with third-party plugins."
version: "2.0.5"
tags: [rust, plugin, playerlist, ui, players]
sidebar_position: 1
---

# Player List

## What does this plugin do?

**Player List** adds a visual list of all online players to your server with a beautiful interface. Players can browse the list, open other players' profiles with additional information (statistics, clan, rating), and perform actions through buttons (teleport, trade, kick). The interface supports pagination, search, and flexible customization.

## Key Features

- Visual list of all online players
- Player profiles with customizable fields (clan, rating, weapon, K/D)
- Action buttons (teleport, trade, statistics, kick)
- Integration with Statistics, Clans, Friends plugins
- Customizable permissions for each button and field
- Hiding players with the `playerlist.hide` permission
- ImageLibrary support for avatars
- Notify integration for notifications

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **ImageLibrary** | Required | Loading player avatars |
| **Notify** / **UINotify** | Optional | Notifications |
| **Friends** | Optional | Displaying friend status |
| **Clans** | Optional | Displaying clan |
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Install **ImageLibrary** on your server.
2. Copy the `PlayerList.cs` file into the `oxide/plugins/` folder.
3. Restart the server or run `oxide.reload PlayerList`.
4. Type `/players` or `/plist` in chat.

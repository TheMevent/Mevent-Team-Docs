---
title: "Hit Markers"
description: "Customizable hit markers with damage display, icons, and enemy health bar."
version: "1.2.3"
tags: [rust, plugin, hitmarkers, damage, ui]
sidebar_position: 1
---

# Hit Markers

## What does this plugin do?

**Hit Markers** adds visual hit markers to your server. Players see the numerical value of damage dealt, icon color changes on headshots, an enemy health bar, and building damage indicators. Each player can customize the markers to their liking: enable/disable individual elements, change the font and text size.

## Key Features

- Display numerical damage on hit (Text)
- Hit icon with color change on headshot (Icon)
- Enemy health bar above the hotbar slots (Health Line)
- Display damage to buildings (Buildings)
- Font, size, and style customization for each player
- Support for NPC and animal damage
- Integration with Notify for notifications
- Compatible with Oxide and Carbon

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **ImageLibrary** | Required | Loading and displaying images |
| **Notify** / **UINotify** | Optional | Styled notifications |
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Install **ImageLibrary** on the server.
2. Copy the `HitMarkers.cs` file to the `oxide/plugins/` folder.
3. Restart the server or run `oxide.reload HitMarkers`.
4. Type `/marker` or `/hits` in chat to open the marker settings.

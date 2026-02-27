---
title: "Special Cargo — Multi Events"
description: "A cargo delivery event mode where a random player must deliver cargo from one monument to another."
version: "1.0.3"
tags: [rust, plugin, multi-events, event-mode]
sidebar_position: 1
---

# Special Cargo

## What does this mode do?

**Special Cargo** is a unique delivery-based event mode for Multi Events. When the event starts, a random player becomes the runner and must deliver special cargo from a starting monument to a destination monument. If the runner dies, the role passes to another random player. Teleportation is blocked for the runner. The first runner to successfully deliver the cargo wins.

## Key Features

- Random runner selection from active players
- Map markers for start and destination monuments
- Real-time runner position tracking on the map
- Teleportation block for the runner
- Runner reassignment on death
- Configurable blocked monument lists
- Configurable monument zone radius
- Notify and UINotify notification support
- Built-in UI widget with countdown and distance to target
- Integration with the event inventory (Multi Events Inventory)

## Requirements

| Dependency | Required? |
|---|---|
| **Multi Events** | Yes |
| **ImageLibrary** | Yes |
| Multi Events Inventory | Recommended |
| Multi Events Leaderboard | Recommended |
| Notify / UINotify | Optional |

## Quick Start

1. Install **Multi Events** on your server
2. Place the Special Cargo mode file in the `oxide/plugins` folder
3. Restart the server or load the plugin
4. The config file will be created automatically
5. Configure monuments, markers, and rewards
6. The event is ready to launch through Multi Events or manually via command

## How the Event Works

1. The event starts automatically through Multi Events or manually by an admin
2. Start and destination monuments are randomly selected
3. Map markers appear for both monuments
4. A random online player is chosen as the runner
5. The runner must travel from the start monument to the destination
6. The runner's position is marked on the map
7. Teleportation is blocked for the runner
8. If the runner dies, a new runner is randomly selected
9. When the runner reaches the destination monument, they win and get rewards
10. The event also ends when the timer expires

## Settings

| Parameter | Description | Default |
|---|---|---|
| Work with Notify? | Whether to use the Notify plugin for notifications | `true` |
| Block TP? | Block teleportation for the runner | `false` |
| Monument Radius | Monument zone radius for delivery confirmation | `50` |
| Event Duration | Event duration in seconds | `600` |
| Blocked Monuments | List of blocked monuments | oilrig, cave, power_sub |
| Monument Marker | Monument marker settings | Color, radius, refresh rate |
| Runner Marker | Runner marker settings | Display name |
| Reward for the winner | Winner's reward | Items |

## Troubleshooting

| Problem | Solution |
|---|---|
| Event won't start | Make sure Multi Events is installed and the map has enough monuments |
| Markers don't show up | Check marker settings in the config |
| No UI notifications | Check that ImageLibrary is installed |
| Rewards aren't given out | Check the reward settings in your config |

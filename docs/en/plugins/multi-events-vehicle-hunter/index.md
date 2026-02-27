---
title: "Vehicle Hunter — Multi Events"
description: "An event mode where players compete for points by destroying vehicles across the map."
version: "1.0.0"
tags: [rust, plugin, multi-events, event-mode]
sidebar_position: 1
---

# Vehicle Hunter

## What does this mode do?

**Vehicle Hunter** is an event mode for Multi Events where players compete by destroying vehicles across the map. Each destroyed vehicle earns a certain number of points based on its type. The player with the most points when the timer runs out wins the rewards.

## Key Features

- Configurable point values for each vehicle type
- Supports all vehicle types: minicopters, boats, horses, helicopters, tanks, and more
- Bonus points for rare and powerful targets (CH-47, Bradley APC, Patrol Helicopter)
- Flexible reward system for multiple leaderboard positions
- Notify and UINotify notification support
- Built-in UI widget with leaderboard and countdown
- Rewards via items, commands, Kits, and third-party plugins
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
2. Place the Vehicle Hunter mode file in the `oxide/plugins` folder
3. Restart the server or load the plugin
4. The config file will be created automatically
5. Configure vehicle points and rewards
6. The event is ready to launch through Multi Events or manually via command

## How the Event Works

1. The event starts automatically through Multi Events or manually by an admin
2. All players see a UI notification with a description and timer
3. Players destroy vehicles across the map, earning points
4. Different vehicle types award different point amounts
5. The leaderboard updates in real time
6. When the timer expires, the event ends
7. Winners receive rewards based on their placement

## Settings

| Parameter | Description | Default |
|---|---|---|
| Work with Notify? | Whether to use the Notify plugin for notifications | `true` |
| Event Duration | Event duration in seconds | `600` |
| Vehicle point | Points for each vehicle type | Various values |
| Awards Settings | Reward settings for each position | Items for places 1-2 |

## Troubleshooting

| Problem | Solution |
|---|---|
| Event won't start | Make sure Multi Events is installed and loaded |
| No UI notifications | Check that ImageLibrary is installed |
| Points aren't being awarded | Make sure the destroyed vehicle type is listed in the config |
| Rewards aren't given out | Check the reward settings in your config |

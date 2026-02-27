---
title: "Patrol Helicopter Hit — Multi Events"
description: "An event mode where players compete for points by dealing damage to a patrol helicopter."
version: "1.0.0"
tags: [rust, plugin, multi-events, event-mode]
sidebar_position: 1
---

# Patrol Helicopter Hit

## What does this mode do?

**Patrol Helicopter Hit** is an event mode for Multi Events. A patrol helicopter with configurable health spawns on the map, and players compete by shooting it. Every hit scores a point. The player with the most hits when the helicopter goes down or the timer expires wins the rewards.

## Key Features

- Spawns a patrol helicopter with configurable health and position
- Automatic hit tracking
- Configurable spawn position and altitude
- Flexible reward system for multiple leaderboard positions
- Notify and UINotify notification support
- Built-in UI widget with leaderboard and countdown
- Auto-ends when the helicopter is destroyed
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
2. Place the Patrol Helicopter Hit mode file in the `oxide/plugins` folder
3. Restart the server or load the plugin
4. The config file will be created automatically
5. Configure helicopter health, position, and rewards
6. The event is ready to launch through Multi Events or manually via command

## How the Event Works

1. The event starts automatically through Multi Events or manually by an admin
2. A patrol helicopter with the configured health spawns on the map
3. All players see a UI notification with a description and timer
4. Players shoot the helicopter, earning points for each hit
5. The leaderboard updates in real time
6. The event ends when the helicopter is destroyed or the timer runs out
7. Winners receive rewards based on their placement

## Settings

| Parameter | Description | Default |
|---|---|---|
| Work with Notify? | Whether to use the Notify plugin for notifications | `true` |
| Event Duration | Event duration in seconds | `600` |
| Heli Init Position | Helicopter spawn position | `(0, 0, 0)` |
| Heli Height above ground | Helicopter altitude above ground | `50` |
| Helicopter Health | Helicopter health | `10000` |
| Awards Settings | Reward settings for each position | Items for places 1-2 |

## Troubleshooting

| Problem | Solution |
|---|---|
| Event won't start | Make sure Multi Events is installed and loaded |
| Helicopter doesn't spawn | Check the position and altitude settings in the config |
| No UI notifications | Check that ImageLibrary is installed |
| Points aren't being awarded | Make sure hits are registering on the event helicopter |
| Rewards aren't given out | Check the reward settings in your config |

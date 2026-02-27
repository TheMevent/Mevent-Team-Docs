---
title: "NPC Missile Silo — Multi Events"
description: "An event mode where players hunt elite scientists at the missile silo for points and rewards."
version: "1.0.0"
tags: [rust, plugin, multi-events, event-mode]
sidebar_position: 1
---

# NPC Missile Silo

## What does this mode do?

**NPC Missile Silo** is an event mode for Multi Events. Players head to the missile silo and take out elite scientists guarding the complex. Each kill earns points, and the player with the most points when the timer runs out gets exclusive rewards.

## Key Features

- Competitive NPC scientist hunt in the missile silo zone
- Real-time leaderboard
- Flexible reward system for multiple prize positions
- Notify and UINotify notification support
- Built-in UI widget with countdown timer
- Integration with Multi Events Inventory and Leaderboard

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
2. Place the NPC Missile Silo mode file in the `oxide/plugins` folder
3. Restart the server or load the plugin
4. Configure rewards in the config if needed
5. The event is ready to launch through Multi Events or manually via command

## How the Event Works

1. The event starts automatically through Multi Events or manually
2. A UI widget with event info and a timer appears on every player's screen
3. Players head to the missile silo and kill NPC scientists
4. Points are awarded for each scientist killed
5. The leaderboard updates in real time
6. When the timer expires, winners receive their rewards

## Settings

| Parameter | Description | Default |
|---|---|---|
| Work with Notify? | Whether to use the Notify plugin for notifications | `true` |
| Event Duration | Event duration in seconds | `600` |
| Awards Settings | Reward settings for each place | Items for places 1-3 |

## Troubleshooting

| Problem | Solution |
|---|---|
| Event won't start | Make sure Multi Events is installed and loaded |
| Points aren't being awarded | Check that the map has a missile silo with scientists |
| No UI notifications | Verify ImageLibrary is installed |
| Rewards aren't given out | Check the reward settings in your config |

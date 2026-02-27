---
title: "Npc Underwater Lab — Multi Events"
description: "An event mode where players compete for points by killing NPCs in underwater labs."
version: "1.0.0"
tags: [rust, plugin, multi-events, event-mode]
sidebar_position: 1
---

# Npc Underwater Lab

## What does this mode do?

**Npc Underwater Lab** is an event mode for Multi Events where players compete by killing underwater dwellers (NPCs) in underwater labs. Every NPC kill earns points. The player with the highest score when time runs out wins the rewards.

## Key Features

- Automatic point tracking for underwater NPC kills (UnderwaterDweller)
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
2. Place the Npc Underwater Lab mode file in the `oxide/plugins` folder
3. Restart the server or load the plugin
4. The config file will be created automatically
5. Set up rewards in the config
6. The event is ready to launch through Multi Events or manually via command

## How the Event Works

1. The event starts automatically through Multi Events or manually by an admin
2. All players on the server see a UI notification with a description and timer
3. Players dive into underwater labs and kill NPC dwellers
4. Points are awarded for each NPC killed
5. The leaderboard updates in real time with current standings
6. When the timer expires, the event ends
7. Winners receive configured rewards based on their placement

## Settings

| Parameter | Description | Default |
|---|---|---|
| Work with Notify? | Whether to use the Notify plugin for notifications | `true` |
| Event Duration | Event duration in seconds | `600` |
| Awards Settings | Reward settings for each position | Items for places 1-2 |

## Troubleshooting

| Problem | Solution |
|---|---|
| Event won't start | Make sure Multi Events is installed and loaded |
| No UI notifications | Check that ImageLibrary is installed |
| Points aren't being awarded | Make sure the map has underwater labs with NPCs |
| Rewards aren't given out | Check the reward settings in your config |

---
title: "Npc Excavator -- Multi Events"
description: "An event mode where players compete for points by killing NPC scientists at the Excavator."
version: "1.0.0"
tags: [rust, plugin, multi-events, event-mode]
sidebar_position: 1
---

# Npc Excavator

## What does this mode do?

**Npc Excavator** is an event mode for Multi Events where players compete for points by killing NPC scientists at the Excavator monument. Points are awarded for each scientist killed at the Excavator. The player with the most points when the timer expires receives rewards.

## Key Features

- Automatic point tracking for killing scientists at the Excavator
- Flexible reward system for multiple leaderboard positions
- Notification support through Notify and UINotify
- Built-in UI widget with leaderboard and countdown
- Reward support through items, commands, kits (Kit), and third-party plugins
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

1. Install **Multi Events** on the server
2. Place the Npc Excavator mode file in the `oxide/plugins` folder
3. Restart the server or load the plugin
4. The configuration file will be created automatically
5. Configure rewards in the configuration
6. The event is ready to launch through Multi Events or manually via command

## How the Event Works

1. The event starts automatically through Multi Events or manually by an administrator
2. All players on the server see a UI notification with a description and timer
3. Players head to the Excavator monument and kill NPC scientists
4. Points are awarded for each scientist killed
5. The leaderboard updates in real time with current standings
6. When the timer expires, the event ends
7. Winners receive configured rewards according to their placement

## Settings

| Parameter | Description | Default |
|---|---|---|
| Work with Notify? | Whether to use the Notify plugin for notifications | `true` |
| Event Duration | Event duration in seconds | `600` |
| Awards Settings | Reward settings for each placement | Items for 1st-2nd place |

## Troubleshooting

| Problem | Solution |
|---|---|
| Event does not start | Make sure Multi Events is installed and loaded |
| No UI notifications | Check if ImageLibrary is installed |
| Points are not awarded | Make sure the Excavator monument with NPC scientists is present on the map |
| Rewards are not given | Check the reward settings in the configuration for correctness |

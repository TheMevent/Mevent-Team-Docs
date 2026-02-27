---
title: "Barrel Event -- Multi Events"
description: "An event mode where players compete for points by destroying barrels across the map."
version: "1.0.2"
tags: [rust, plugin, multi-events, event-mode]
sidebar_position: 1
---

# Barrel Event

## What does this mode do?

**Barrel Event** is an event mode for Multi Events where players compete for points by smashing barrels across the map. Each barrel type awards a different number of points -- rarer barrels give more. The player with the most points when the timer runs out wins.

## Key Features

- Configurable point system for each barrel type (regular, oil, etc.)
- Flexible reward system for multiple leaderboard positions
- Notify and UINotify support for notifications
- Built-in UI widget with leaderboard and countdown
- Rewards via items, commands, kits, and third-party plugins
- Integration with Multi Events Inventory

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
2. Place the Barrel Event file in the `oxide/plugins` folder
3. Restart the server or load the plugin
4. The config file gets created automatically
5. Configure barrel points and rewards in the config
6. The event is ready to launch through Multi Events or manually

## How the Event Works

1. The event starts automatically through Multi Events or manually by an admin
2. All players on the server see a UI notification with the description and timer
3. Players start destroying barrels across the map, earning points
4. The leaderboard updates in real time with current results
5. When the timer expires, the event ends
6. Winners receive rewards based on their placement

## Settings

| Parameter | Description | Default |
|---|---|---|
| Work with Notify? | Whether to use Notify for notifications | `true` |
| Event Duration | Event duration in seconds | `600` |
| Barrels point | Points for each barrel type | Various values |
| Awards Settings | Reward settings for each placement | Items for places 1-3 |

## Troubleshooting

| Problem | Solution |
|---|---|
| Event won't start | Make sure Multi Events is installed and loaded |
| No UI notifications | Check that ImageLibrary is installed |
| Points aren't awarded | Verify the barrel type names match the actual names on the map |
| Rewards aren't given | Check the reward settings in the config |

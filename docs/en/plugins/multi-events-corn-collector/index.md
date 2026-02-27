---
title: "Corn Collector"
description: "MultiEvents expansion mode -- compete to collect the most corn on the map."
sidebar_position: 1
---

# Corn Collector

## Description

**Corn Collector** is an expansion mode for MultiEvents where players compete to pick corn. Each ear of corn you collect earns a point. The player who collects the most corn by the end of the event wins.

## Key Features

- Competitive corn collection mode
- Points for every ear of corn collected
- Real-time leaderboard showing top players
- Configurable rewards by ranking position
- Integration with MultiEventsInventory for reward delivery
- Integration with MultiEventsLeaderboard for global stats
- Notify / UINotify support
- Configurable event duration
- UI panel with countdown timer and current scores

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **MultiEvents** | Required | Core events plugin |
| **ImageLibrary** | Required | Image loading and display |
| MultiEventsInventory | Optional | Event inventory reward delivery |
| MultiEventsLeaderboard | Optional | Global leaderboard tracking |
| Notify / UINotify | Optional | Visual player notifications |

## Quick Start

1. Make sure **MultiEvents** and **ImageLibrary** are installed and running.
2. Copy `MultiEventsCornCollector.cs` to your server's `oxide/plugins/` folder.
3. The plugin automatically registers with MultiEvents.
4. Start the event through MultiEvents or with:
 ```
 corncollector.start
 ```
5. Collect corn on the map to earn points.

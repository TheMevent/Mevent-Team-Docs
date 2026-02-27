---
title: "Ultimate Leaderboard Commands"
description: "Complete list of commands and permissions for the Ultimate Leaderboard plugin for Rust servers."
sidebar_position: 3
---

# Commands and Permissions

## Chat Commands

| Command | Description | Permission |
|---|---|---|
| `/leaderboard` | Open the leaderboard | Configurable |
| `/stats` | Open the leaderboard (alternative) | Configurable |
| `/leaderboard.hide` | Hide/show yourself on the leaderboard | `ultimateleaderboard.hide.self` |

:::tip Tip
Commands are configured in the `Commands` parameter. Default: `["leaderboard", "stats"]`.
:::

## Console Commands

| Command | Description | Who Can Use |
|---|---|---|
| `leaderboard.wipe` | Reset all leaderboard data | Server console only |
| `leaderboard.migrate` | Migrate data between storage types | Server console only |
| `leaderboard.find.short.prefab` | Find the ShortPrefabName for an entity | Server console only |
| `leaderboard.manage` | Manage player data | Server console only |

### Usage Examples

Reset all data:
```
leaderboard.wipe
```

:::warning Warning
The `leaderboard.wipe` command permanently deletes all statistics data. It is recommended to make a backup before executing.
:::

## Permissions

| Permission | Description | Default |
|---|---|---|
| Configurable | Plugin access | Empty (available to all) |
| `ultimateleaderboard.profile` | View other players' profiles | Not granted |
| `ultimateleaderboard.hide.self` | Hide from the leaderboard | Not granted |
| `ultimateleaderboard.ignore.titles` | Ignore titles | Not granted |

### Setting Up Permissions

```
oxide.grant group default ultimateleaderboard.profile
oxide.grant group admin ultimateleaderboard.hide.self
```

## Tracked Statistics

### Main Metrics

- Kills (players, NPCs, animals)
- Deaths
- K/D ratio
- Play time (current and total)
- Longest kill distance
- Total resources gathered
- Favorite resource
- Number of crafted items
- Built structures
- Completed upgrades

### Hit Rate

- Hit statistics by body part (head, chest, arms, legs)

### Building

- Built structures broken down by type and tier

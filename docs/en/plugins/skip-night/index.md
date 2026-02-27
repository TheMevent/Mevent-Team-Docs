---
title: "Skip Night"
description: "A night-skip voting system with a UI, full moon support, and flexible time settings."
version: "1.1.4"
tags: [rust, plugin, skipnight, voting, time, day]
sidebar_position: 1
---

# Skip Night

## What does this plugin do?

**Skip Night** adds a night-skip voting system to your server. When night falls, players are shown an interface with a voting button and a progress bar. If enough players vote, the night is skipped and day begins. Full moons, accelerated night, automatic skip, voting fees, and post-result command execution are supported.

## Key Features

- Vote to skip night via chat command or interface
- Visual interface with a voting button and progress bar
- Configurable vote percentage for skipping
- Full moon on specific dates (cannot be skipped)
- Accelerated night instead of a full skip
- Automatic skip when enough votes are reached
- Voting fee (Economics, ServerRewards, or items)
- Fee refund on failed votes
- Command execution after successful/failed voting
- Configurable day and night duration
- Compatible with Oxide and Carbon

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **ImageLibrary** | Optional | Icon in the interface |
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Copy the `SkipNight.cs` file into the `oxide/plugins/` folder.
2. Restart the server or run `oxide.reload SkipNight`.
3. Wait for night to come -- the voting interface will appear.
4. Use `/voteday` or the button in the interface to vote.

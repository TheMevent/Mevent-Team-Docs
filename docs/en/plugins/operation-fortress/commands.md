---
title: "Commands and Permissions"
description: "Complete list of commands and permissions for the Operation Fortress plugin."
sidebar_position: 3
---

# Commands and Permissions

## Commands

| Command | Description | Permission |
|---|---|---|
| `operation.start` | Start the event manually | `operationfortress.start` |
| `operation.stop` | Stop the current event | `operationfortress.stop` |

:::info Note
Commands are executed via chat or the server console. When executed from the console, permission checks are not required.
:::

## Permissions

| Permission | Description |
|---|---|
| `operationfortress.start` | Allows starting the event |
| `operationfortress.stop` | Allows stopping the event |

## Event Mechanics

1. **Preparation** -- announcement of the event start with a countdown
2. **Active phase** -- players assault the fortress and activate towers
3. **Capture** -- after the required number of towers are activated, the event ends
4. **Rewards** -- the winner receives configured rewards

## Command Blocking

During the event, certain commands are blocked for participants:

- `tpr` -- teleport request
- `home` -- teleport home
- `tpa` -- teleport accept

The list of blocked commands is configurable in the configuration.

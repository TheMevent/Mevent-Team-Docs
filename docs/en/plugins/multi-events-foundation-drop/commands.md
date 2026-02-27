---
title: "Commands and Permissions"
description: "Full list of commands and permissions for the Foundation Drop plugin."
sidebar_position: 3
---

# Commands and Permissions

## Commands

### Admin Commands

| Command | Description | Permission |
|---|---|---|
| `foundationdrop.start` | Start the Foundation Drop event | `MultiEventsFoundationDrop.start` |
| `foundationdrop.stop` | Stop the current event | `MultiEventsFoundationDrop.stop` |

:::info Note
The event can also start automatically through MultiEvents scheduling.
:::

### Console Commands (UI)

| Command | Description |
|---|---|
| `UI_FoundationDrop vote` | Join the event during the voting phase |
| `UI_FoundationDrop hide` | Hide the event panel |

## Permissions

| Permission | Description |
|---|---|
| `MultiEventsFoundationDrop.start` | Permission to start the event |
| `MultiEventsFoundationDrop.stop` | Permission to stop the event |

### Setting Up Permissions

```
oxide.grant group admin MultiEventsFoundationDrop.start
oxide.grant group admin MultiEventsFoundationDrop.stop
```

## Player Commands

Players join the event through the vote button in the UI during the registration phase. There are no special chat commands.

## Event Phases

1. **Voting** -- players click a button to join. Duration set by the `Voting` parameter.
2. **Waiting** -- arena setup and player teleportation. Duration set by the `Waiting` parameter.
3. **Game** -- foundations start crumbling, players must survive.
4. **Final battle** -- when one foundation remains, radiation turns on and weapons are given out.
5. **End** -- last player standing wins.

## Restrictions During the Event

While the event is active, participants can't:
- Use commands not listed in `"Allowed commands on event"`
- Teleport (via NTeleportation)
- Leave the zone (via NoEscape, if enabled)

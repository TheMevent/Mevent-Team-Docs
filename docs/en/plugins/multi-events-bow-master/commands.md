---
title: "Commands and Permissions"
description: "Full list of commands and permissions for the Bow Master plugin."
sidebar_position: 3
---

# Commands and Permissions

## Commands

### Admin Commands

| Command | Description | Permission |
|---|---|---|
| `bowmaster.start` | Start the Bow Master event | `MultiEventsBowMaster.start` |
| `bowmaster.stop` | Stop the current event | `MultiEventsBowMaster.stop` |

:::info Note
The event can also start automatically through MultiEvents scheduling.
:::

### Console Commands (UI)

| Command | Description |
|---|---|
| `UI_BowMaster hide` | Hide the event panel (triggered via UI) |

## Permissions

| Permission | Description |
|---|---|
| `MultiEventsBowMaster.start` | Permission to start the event |
| `MultiEventsBowMaster.stop` | Permission to stop the event |

### Setting Up Permissions

```
oxide.grant group admin MultiEventsBowMaster.start
oxide.grant group admin MultiEventsBowMaster.stop
```

## Player Commands

Regular players don't have special commands. Participation is automatic -- just kill things (players or animals) with a bow or crossbow during the active event.

## Scoring Mechanics

- Only kills with **Arrow** damage type count
- Kills on **players** (BasePlayer) and **animals** (BaseAnimalNPC) both count
- Each arrow kill awards 1 point

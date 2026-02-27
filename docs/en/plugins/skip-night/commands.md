---
title: "Commands and Permissions"
description: "Complete list of commands and permissions for the Skip Night plugin."
sidebar_position: 3
---

# Commands and Permissions

## Chat Commands

| Command | Description | Permission |
|---|---|---|
| `/voteday` or `/vt` | Vote to skip the night | For everyone (during voting) |

:::info Note
Voting commands are configured in the configuration (`"VoteCommands"`). Default: `["voteday", "vt"]`.
:::

## Administrator Commands

| Command | Description | Permission |
|---|---|---|
| `sn.admin` | Show the list of admin commands | `skipnight.admin` |
| `sn.admin start_manually` | Force start a vote | `skipnight.admin` |

## Permissions

| Permission | Description |
|---|---|
| `skipnight.admin` | Access to administrative commands |

:::tip Tip
Voting is available to all players by default. To restrict access, use the settings in the configuration.
:::

## Interface Controls

| Element | Description |
|---|---|
| Voting button | Vote to skip the night |
| Progress bar | Shows the percentage of players who voted |
| Hide button | Hide the interface (if enabled) |
| Close button | Close the interface (if enabled) |

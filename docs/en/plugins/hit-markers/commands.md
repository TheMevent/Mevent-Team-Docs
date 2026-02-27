---
title: "Commands and Permissions"
description: "Complete list of commands and permissions for the Hit Markers plugin."
sidebar_position: 3
---

# Commands and Permissions

## Chat Commands

| Command | Description | Permission |
|---|---|---|
| `/marker` or `/hits` | Open the hit marker settings window | Configurable (available to all by default) |

:::info Note
Commands are configurable in the `"Commands"` parameter. Default: `["marker", "hits"]`.
:::

## Interface Settings

Through the interface, players can manage the following settings:

| Setting | Description |
|---|---|
| Text | Enable/disable numerical damage display |
| Icon | Enable/disable hit icon (with color change on headshot) |
| Health Line | Enable/disable enemy health bar |
| Buildings | Enable/disable building damage display |
| Font | Choose font for numerical damage |
| Font Size | Adjust font size |

## Permissions

| Permission | Description |
|---|---|
| Configurable | General permission for using markers (set in configuration, empty -- for everyone) |
| Font permissions | Individual permissions for each font |
| Mode permissions | Individual permissions for each mode (Text, Icon, Health Line, Buildings) |

:::tip Tip
If the `Permission` field is left empty, the feature will be available to all players.
:::

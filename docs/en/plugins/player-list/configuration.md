---
title: "Player List Configuration"
description: "Complete configuration reference for the Player List plugin."
sidebar_position: 4
---

# Player List Configuration

The configuration file is located at: `oxide/config/PlayerList.json`

## Main Parameters

| Parameter | Default | Description |
|---|---|---|
| Commands | `["players", "plist"]` | Chat commands to open the list |
| Permission | `""` | Access permission (empty -- for everyone) |
| Close UI when reusing a command? | `false` | Close on repeated command input |
| Work with Notify? | `true` | Use Notify |
| Show the player who opened the player list? | `false` | Show yourself in the list |

## Profile Fields

Array of fields displayed in a player's profile. Each field retrieves data from a third-party plugin:

| Parameter | Description |
|---|---|
| Permission | Permission to view the field |
| Lang Key | Key in the language file |
| Plugin | Source plugin name |
| Hook | Function to retrieve data |
| Args | Function arguments (`%steamid%` is replaced with the player's ID) |

## Action Buttons

| Parameter | Description |
|---|---|
| Permission | Permission to display the button |
| Lang Key | Key in the language file |
| Command | Command on click |
| Color | Button color (HEX + Opacity) |

## Profile UI Settings

| Parameter | Description |
|---|---|
| Width / Height | Profile window dimensions |
| FieldWidth / FieldHeight | Field dimensions |
| ButtonWidth / ButtonHeight | Button dimensions |
| FieldsOnString | Number of fields per row |
| ButtonsOnString | Number of buttons per row |

## List UI Settings

| Parameter | Description |
|---|---|
| Colors | Interface colors (4 customizable colors) |
| TableItemsOnString | Number of players per row |
| TableMaxLines | Maximum rows per page |
| TableItemWidth / Height | List item dimensions |
| TableItemMargin | Margins between items |

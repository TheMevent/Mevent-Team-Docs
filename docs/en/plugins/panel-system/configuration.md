---
title: "Panel System Configuration"
description: "Complete configuration reference for the Panel System plugin."
sidebar_position: 4
---

# Panel System Configuration

The configuration file is located at:
- **Oxide:** `oxide/config/PanelSystem.json`
- **Carbon:** `carbon/configs/PanelSystem.json`

## General Parameters

| Parameter | Default | Description |
|---|---|---|
| Work with Notify? | `true` | Use Notify for notifications |
| Display type | `"Overlay"` | Display type: `Overlay` or `Hud` |
| Panel Anchor | `UpperRight` | Main panel position |
| Events Panel Anchor | `UpperLeft` | Events panel position |

## Logo (Logotype)

| Parameter | Description |
|---|---|
| Enabled | Enable the logo |
| Permission | Permission for visibility |
| Image | Logo image URL |
| Command | Command on click (empty -- not clickable) |

## Online (Players Settings)

| Parameter | Description |
|---|---|
| Enabled | Enable the online panel |
| Permission | Permission for visibility |
| Image | Icon URL |
| Settings | User customization settings |
| Size | Available sizes (Big, Medium, Small) |

## Sleepers (Sleepers Settings)

| Parameter | Default | Description |
|---|---|---|
| Enabled | `false` | Enable the sleepers panel (disabled by default) |

## Time (Time Settings)

| Parameter | Description |
|---|---|
| Enabled | Enable the time panel |
| GameUpdate | Show server time instead of real time |
| Permission | Permission for visibility |

## Settings Button

| Parameter | Description |
|---|---|
| Enabled | Enable the settings button |
| Permission | Permission for visibility |
| Image | Icon URL |
| Color | Button color (HEX) |

## Quick Buttons (Buttons Setting)

| Parameter | Description |
|---|---|
| Enabled | Enable the buttons panel |
| Permission | Permission for panel visibility |
| Commands | Chat commands to toggle the buttons panel |
| Buttons | Array of buttons |

### Button Settings

| Parameter | Description |
|---|---|
| Enabled | Enable the button |
| Image | Icon URL |
| Permission | Permission for visibility |
| Lang Key | Text key in the language file |
| Command | Command on click |

## Events

Array of events to track:

| Parameter | Description |
|---|---|
| Enabled | Enable the indicator |
| Image | Icon URL |
| Permission | Permission for visibility |
| Type | Event type (Helicopter, Bradley, Airdrop, CH47, CargoShip, Convoy, ArmoredTrain, Sputnik, SpaceEvent, AirEvent) |
| Settings | User customization settings |
| Size | Available sizes |

## Economy (Economics)

Array of economy indicators:

| Parameter | Description |
|---|---|
| Enabled | Enable the indicator |
| Permission | Permission for visibility |
| Plugin | Economy plugin name |
| Hook | Function to retrieve balance |
| Image | Icon URL |

## Panel Hiding (Hide Settings)

| Parameter | Default | Description |
|---|---|---|
| Enabled | `false` | Enable the ability to hide |
| Command | `"panel"` | Command for hiding/showing |
| Show Logo? | `true` | Show the logo when the panel is hidden |

## User Customization Settings

Each panel element can contain a `"Settings"` object:

| Parameter | Description |
|---|---|
| Enabled | Allow user customization |
| Permission | Permission for customization |
| CanChangeColor1/Color2 | Allow color changes |
| CanChangeVisibility | Allow hiding the element |

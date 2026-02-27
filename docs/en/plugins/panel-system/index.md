---
title: "Panel System"
description: "An information panel in the corner of the screen displaying online players, time, events, economy, and quick buttons."
version: "1.2.2"
tags: [rust, plugin, hud, panel, events, ui]
sidebar_position: 1
---

# Panel System

## What does this plugin do?

**Panel System** allows your server to display a compact information panel in the corner of every player's screen. The panel shows the number of online players, in-game time, server event statuses (helicopter, tank, airdrop, cargo, and others), economy balance, and quick buttons for executing commands. Players can customize the panel themselves: change size, colors, and hide unwanted elements.

## Key Features

- Players see the number of online players in real time
- Players see the current in-game (or real) time
- Players see server event statuses: helicopter, Bradley tank, airdrop, CH47, cargo, convoy, armored train, and others
- Players see their economy balance (Economics, ServerRewards, etc.)
- Players can use quick buttons (shop, statistics, bank, etc.)
- Players can customize the panel: change element sizes, active/inactive indicator colors
- Players can hide individual panel elements or the entire panel
- Administrators configure all elements through the configuration file
- Support for custom events from third-party plugins
- Compatible with Oxide and Carbon

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **ImageLibrary** | Required | Loading and displaying icons in the panel |
| **Notify** / **UINotify** | Optional | Beautiful notifications instead of chat messages |
| **WipeBlock** | Optional | Displaying wipe block status on the panel |
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Install **ImageLibrary** on your server.
2. Copy the `PanelSystem.cs` file into the `oxide/plugins/` folder.
3. Restart the server or run `oxide.reload PanelSystem`.
4. The panel will automatically appear for all connected players.
5. Open the `oxide/config/PanelSystem.json` file to configure elements.

## Permissions

Permissions in Panel System are configured flexibly -- each panel element can have its own permission. By default, all permissions are empty, which means access is granted to everyone.

| Element | Where permission is set | What it controls |
|---|---|---|
| Logo | Logo settings | Who sees the server logo |
| Online | Player panel settings | Who sees the online count |
| Time | Time panel settings | Who sees the in-game time |
| Sleepers | Sleeper panel settings | Who sees the sleeper count |
| Buttons | Button panel settings | Who sees the quick buttons |
| Each button | Specific button settings | Who sees a particular button |
| Each event | Specific event settings | Who sees an event indicator |
| Each economy | Specific economy settings | Who sees a particular currency balance |
| Panel settings | Settings button | Who can open the panel settings window |

:::info Note
If the permission field is left empty, the element is visible to all players. To restrict access, specify the desired permission and register it through Oxide.
:::

## Player Commands

| Command | Description | Example |
|---|---|---|
| `/panelsystem.buttons` | Show/hide the quick buttons panel | `/panelsystem.buttons` |
| `/(hide command)` | Hide or show the entire panel | `/panel hide` or `/panel show` |

:::info Note
The panel hide command is configured in the configuration file (the "Command" parameter in the "Hide Settings" section). Default: `panel`. The feature must be enabled (`"Enabled": true`).
:::

## Administrator Commands

The Panel System plugin has no special administrator commands. All configuration is done through the `oxide/config/PanelSystem.json` configuration file.

## Tracked Events

Panel System automatically tracks the following server events:

| Event | Description |
|---|---|
| Helicopter | Patrol helicopter on the map |
| Bradley | Bradley tank on the map |
| Airdrop | Supply drop from an airplane |
| CH47 (Chinook) | CH47 transport helicopter |
| CargoShip | Cargo ship |
| Convoy | Convoy event |
| ArmoredTrain | Armored train |
| Sputnik | Sputnik event |
| SpaceEvent | Space event |
| AirEvent | Air event |
| WipeBlock | Post-wipe block status |
| Sleepers | Number of sleeping players |

Custom events from third-party plugins are also supported.

## Troubleshooting

### Panel is not displayed

**Symptoms:** Players do not see the information panel.

**Cause:** ImageLibrary is not installed, or the panel is hidden by the player.

**Solution:** Make sure ImageLibrary is installed. Ask the player to enter the panel show command (e.g., `/panel show`). Verify that elements are enabled in the configuration.

---

### Event indicators do not change color

**Symptoms:** Indicators always show the same color, not reacting to events appearing/disappearing.

**Cause:** The plugin is not receiving event information.

**Solution:** Make sure the corresponding events are enabled in the configuration (`"Enabled": true`). For custom events (Convoy, ArmoredTrain, etc.), make sure the event plugin is installed and calls the required hooks.

---

### Economy balance is not displayed

**Symptoms:** The economy indicator does not show a balance or shows 0.

**Cause:** The economy plugin is not installed or is configured incorrectly.

**Solution:** Make sure the specified economy plugin is installed. Check that the plugin name and balance function are correct in the configuration.

---

### Error "IMAGE LIBRARY IS NOT INSTALLED."

**Symptoms:** The error message repeats multiple times in the console.

**Cause:** ImageLibrary is not installed on the server.

**Solution:** Download and install ImageLibrary. Reload Panel System.

---

### Panel interferes with other UI elements

**Symptoms:** The panel overlaps other plugins or HUD elements.

**Cause:** The panel position coincides with other elements.

**Solution:** Change the panel position via the "Panel Anchor" parameter (upper right or upper left corner). You can also change "Events Panel Anchor" for the events panel.

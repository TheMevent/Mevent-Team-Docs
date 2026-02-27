---
title: "Notify"
description: "A visual notification system for Rust server players with full appearance and behavior customization."
version: "1.0.14"
tags: [rust, plugin, notifications, ui]
sidebar_position: 1
---

# Notify

## What does this plugin do?

**Notify** allows your server to display styled popup notifications to players directly on screen. Notifications appear in the corner of the screen, accompanied by sound effects and smooth animations. Other plugins can use Notify as a unified notification system so that all messages on the server share a consistent style.

## Key Features

- Players see styled popup notifications instead of standard chat messages
- Players without the special permission receive messages in chat (configurable)
- Administrators can send notifications to a specific player, to themselves, or to all players on the server
- Full appearance customization: colors, icons, background images, gradients
- Support for multiple notification types (info, error, reward, and more)
- Interactive notifications with buttons that execute commands on click
- Sound effects when notifications appear
- Other plugins can trigger notifications through the built-in API

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **ImageLibrary** | Required | Needed for loading and displaying custom images in notifications |
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Install the **ImageLibrary** plugin if it is not already installed.
2. Copy the `Notify.cs` file to your server's `oxide/plugins/` folder.
3. Restart the server or run the command `oxide.reload Notify`.
4. Grant the notification viewing permission to all players:
 ```
 oxide.grant group default notify.see
 ```
5. Test it by sending a test notification:
 ```
 notify.show 0 Test notification!
 ```

## Permissions

| Permission | Who Needs It | What It Unlocks |
|---|---|---|
| `notify.see` | All players | Allows seeing graphical notifications on screen. Without this permission, the player will receive a text message in chat (if enabled in settings) |
| `notify.notify` | Administrators | Allows using the command to send a notification to yourself |
| `notify.player` | Administrators | Allows sending notifications to a specific player by SteamID |
| `notify.allplayer` | Administrators | Allows sending notifications to all players on the server simultaneously |

## Player Commands

This plugin has no commands for regular players. Players automatically see notifications sent to them by other plugins or administrators.

## Administrator Commands

| Command | Description | Example |
|---|---|---|
| `notify.show [type] [message]` | Send a notification to yourself | `notify.show 0 Server restart in 5 minutes` |
| `notify.player [steamid/name] [type] [message]` | Send a notification to a specific player | `notify.player 76561198012345678 1 You violated the rules!` |
| `notify.allplayers [type] [message]` | Send a notification to all players | `notify.allplayers 0 Wipe in 1 hour!` |

### Default Notification Types

| Type | Description | Icon Color |
|---|---|---|
| `0` | Information notification | Blue (#4B68FF) |
| `1` | Error notification | Red (#FF6060) |

:::tip Tip
You can create your own notification types by adding new entries in the configuration with unique numeric identifiers.
:::

## Troubleshooting

### Notifications are not displayed

**Symptoms:** Players do not see graphical notifications, but messages arrive in chat.

**Cause:** Players have not been granted the `notify.see` permission.

**Solution:** Run the command: `oxide.grant group default notify.see`

---

### Error "IMAGE LIBRARY IS NOT INSTALLED!"

**Symptoms:** An error appears in the server console when the plugin loads.

**Cause:** The ImageLibrary plugin is not installed or not loaded.

**Solution:** Download and install ImageLibrary in the `oxide/plugins/` folder.

---

### Notifications overlap other interface elements

**Symptoms:** Notifications appear on top of important interface elements.

**Cause:** Incorrect position or display type setting.

**Solution:** Change the "Display type" parameter in the configuration to `Hud` instead of `OverlayNonScaled`, or change the notification position by disabling the "Display notifications on the top right" parameter.

---

### Notifications disappear too quickly or too slowly

**Symptoms:** Players cannot read the notification in time, or it stays too long.

**Cause:** The "Notify Cooldown" parameter value does not match your preferences.

**Solution:** Change the "Notify Cooldown" value in the configuration (in seconds). Default: 10 seconds.

---

### Too many notifications on screen at once

**Symptoms:** The player's screen is filled with notifications, interfering with gameplay.

**Cause:** High simultaneous notification limit or frequent sending.

**Solution:** Reduce the "Max Notifications On Screen" value in the configuration. Default: 10.

---

### Notifications without background images look incorrect

**Symptoms:** Background images are not loading, notifications display with errors.

**Cause:** Image URLs are inaccessible or ImageLibrary has not finished loading them.

**Solution:** Check the accessibility of image URLs in the configuration. Reload the plugin after ImageLibrary starts. Make sure your server has internet access.

---
title: "Notify Configuration"
description: "Complete reference for all configuration parameters of the Notify plugin."
sidebar_position: 3
---

# Notify Configuration

The configuration file is located at: `oxide/config/Notify.json`

## Main Parameters

| Parameter | Default | Allowed Values | Description |
|---|---|---|---|
| Display type (Overlay/Hud) | `OverlayNonScaled` | `OverlayNonScaled`, `Overlay`, `Hud` | Interface display type. `OverlayNonScaled` -- on top of everything without scaling. `Hud` -- as part of the game HUD. |
| Height | `50` | Number (pixels) | Notification height in pixels. |
| Width | `260` | Number (pixels) | Notification width in pixels. |
| X Margin | `20` | Number (pixels) | Horizontal offset from the screen edge. |
| Y Margin | `5` | Number (pixels) | Vertical spacing between notifications. |
| Y Indent | `-50` | Number (pixels) | Initial vertical offset from the top/bottom screen edge. |
| Display notifications on the top right? | `true` | `true` / `false` | Notification position: `true` -- top right corner, `false` -- bottom left corner. |
| Notify Cooldown | `10` | Number (seconds) | How long the notification is displayed on screen before disappearing. |
| Max Notifications On Screen | `10` | Number | Maximum number of notifications displayed simultaneously. |
| Send text message to chat if player doesn't have notification permission | `true` | `true` / `false` | If the player does not have the `notify.see` permission, whether to send them a chat message instead of a graphical notification. |

:::tip Recommendation
The optimal value for "Max Notifications On Screen" is 3 to 5. Too many simultaneous notifications can interfere with players.
:::

## Notification Type Settings

Each notification type is configured in the `"Notifications (type - settings)"` section. The key is the numeric type identifier (0, 1, 2130354, etc.).

### Notification Type Parameters

| Parameter | Description | Recommendation |
|---|---|---|
| Enabled | Whether this notification type is enabled | Disable unused types |
| Background Image | Background image URL (empty string -- solid color) | Use PNG with transparency |
| Background Color | Background color (HEX + opacity 0-100) | For dark theme: #000000, 98 |
| Enable Gradient? | Enable a gradient layer over the background | Makes notifications more expressive |
| Gradient Color | Gradient color (HEX + opacity) | Use a color matching the type |
| Sprite | Path to built-in sprite for gradient | Leave default for gradient |
| Material | Path to material | Leave default |
| Icon Color | Icon background color | Match with gradient color |
| Icon Text | Icon text (character) | `!` for info, `X` for errors |
| Title Key (lang) | Language file key for the title | Must match the key in the language file |
| Fade In | Appear animation time (seconds) | 0.1 -- fast but noticeable |
| Fade Out | Disappear animation time (seconds) | 1.0 -- smooth disappearance |
| Sound Effect | Path to sound effect (empty -- disable sound) | Default: `assets/bundled/prefabs/fx/notice/item.select.fx.prefab` |
| Use custom width | Use individual width for this type | Enable for non-standard notifications |
| Custom width | Individual width (pixels) | -- |
| Use custom height | Use individual height for this type | Enable for non-standard notifications |
| Custom height | Individual height (pixels) | -- |
| Use command | Make the notification interactive (clickable) | Useful for reward notifications |
| Command | Command executed on click | For example: `daily` |
| Close after using the command? | Close the notification after click | Recommended: `true` |
| Use custom cooldown | Use custom display time | Enable for important notifications |
| Cooldown | Display time for this type (seconds) | -- |

### Text Settings (icon, title, message)

Each text element has the following parameters:

| Parameter | Description |
|---|---|
| AnchorMin / AnchorMax | Element anchor points (0-1) |
| OffsetMin / OffsetMax | Offset in pixels |
| fontSize | Font size |
| Is Bold? | Bold font |
| Align | Text alignment (`MiddleCenter`, `UpperLeft`, `LowerLeft`, etc.) |
| Color | Text color (HEX + opacity) |

### Image Settings

| Parameter | Description |
|---|---|
| Enabled | Whether to show a custom image instead of the text icon |
| Image | Image URL |
| AnchorMin / AnchorMax | Anchor points |
| OffsetMin / OffsetMax | Offset |

## Color Format

All colors are specified in the format:

```json
{
 "HEX": "#4B68FF",
 "Opacity (0 - 100)": 100
}
```

- **HEX** -- color in HEX format (with the `#` symbol).
- **Opacity** -- transparency from 0 (fully transparent) to 100 (fully opaque).

## Default Notification Types

| ID | Name | Icon | Color | Purpose |
|---|---|---|---|---|
| 0 | Notification | `!` | Blue | Standard information notification |
| 1 | Error | `X` | Red | Error notification |
| 2130354 | AwardAvailable | `!` | Orange | New reward available (clickable) |
| 2130355 | AwardCooldown | `!` | Orange | Reward on cooldown (clickable) |
| 2130356 | AwardReceived | `!` | Orange | Reward received (clickable) |

<details>
<summary>Full default configuration</summary>

```json
{
 "Display type (Overlay/Hud)": "OverlayNonScaled",
 "Height": 50.0,
 "Width": 260.0,
 "X Margin": 20.0,
 "Y Margin": 5.0,
 "Y Indent": -50.0,
 "Display notifications on the top right?": true,
 "Notify Cooldown": 10.0,
 "Max Notifications On Screen": 10,
 "Send text message to chat if player doesn't have notification permission": true,
 "Notifications (type - settings)": {
 "0": {
 "Enabled": true,
 "Background Image": "",
 "Background Color": {
 "HEX": "#000000",
 "Opacity (0 - 100)": 98.0
 },
 "Enable Gradient?": true,
 "Gradient Color": {
 "HEX": "#4B68FF",
 "Opacity (0 - 100)": 35.0
 },
 "Sprite": "assets/content/ui/ui.background.transparent.linearltr.tga",
 "Material": "Assets/Icons/IconMaterial.mat",
 "Icon Color": {
 "HEX": "#4B68FF",
 "Opacity (0 - 100)": 100.0
 },
 "Icon Text": "!",
 "Title Key (lang)": "Notification",
 "Fade Out": 1.0,
 "Fade In": 0.1,
 "Sound Effect (empty - disable)": "assets/bundled/prefabs/fx/notice/item.select.fx.prefab",
 "Image Settings": {
 "Enabled": false,
 "Image": "",
 "AnchorMin": "0 0",
 "AnchorMax": "0 0",
 "OffsetMin": "12.5 12.5",
 "OffsetMax": "37.5 37.5"
 },
 "Use custom width": false,
 "Custom width": 0.0,
 "Use custom height": false,
 "Custom height": 0.0,
 "Use command": false,
 "Command": "",
 "Close after using the command?": false,
 "Icon Settings": {
 "fontSize": 12,
 "Is Bold?": false,
 "Align": "MiddleCenter",
 "Color": {
 "HEX": "#FFFFFF",
 "Opacity (0 - 100)": 100.0
 }
 },
 "Title Settings": {
 "fontSize": 12,
 "Is Bold?": false,
 "Align": "LowerLeft",
 "Color": {
 "HEX": "#FFFFFF",
 "Opacity (0 - 100)": 50.0
 }
 },
 "Text Settings": {
 "fontSize": 10,
 "Is Bold?": false,
 "Align": "UpperLeft",
 "Color": {
 "HEX": "#FFFFFF",
 "Opacity (0 - 100)": 100.0
 }
 },
 "Use custom cooldown": false,
 "Cooldown": 0.0
 },
 "1": {
 "Enabled": true,
 "Background Image": "",
 "Background Color": {
 "HEX": "#000000",
 "Opacity (0 - 100)": 98.0
 },
 "Enable Gradient?": true,
 "Gradient Color": {
 "HEX": "#FF6060",
 "Opacity (0 - 100)": 35.0
 },
 "Sprite": "assets/content/ui/ui.background.transparent.linearltr.tga",
 "Material": "Assets/Icons/IconMaterial.mat",
 "Icon Color": {
 "HEX": "#FF6060",
 "Opacity (0 - 100)": 100.0
 },
 "Icon Text": "X",
 "Title Key (lang)": "Error",
 "Fade Out": 1.0,
 "Fade In": 0.1,
 "Sound Effect (empty - disable)": "assets/bundled/prefabs/fx/notice/item.select.fx.prefab",
 "Image Settings": {
 "Enabled": false,
 "Image": "",
 "AnchorMin": "0 0",
 "AnchorMax": "0 0",
 "OffsetMin": "12.5 12.5",
 "OffsetMax": "37.5 37.5"
 },
 "Use custom width": false,
 "Custom width": 0.0,
 "Use custom height": false,
 "Custom height": 0.0,
 "Use command": false,
 "Command": "",
 "Close after using the command?": false,
 "Icon Settings": {
 "fontSize": 12,
 "Is Bold?": false,
 "Align": "MiddleCenter",
 "Color": {
 "HEX": "#4B68FF",
 "Opacity (0 - 100)": 100.0
 }
 },
 "Title Settings": {
 "fontSize": 12,
 "Is Bold?": false,
 "Align": "LowerLeft",
 "Color": {
 "HEX": "#FFFFFF",
 "Opacity (0 - 100)": 50.0
 }
 },
 "Text Settings": {
 "fontSize": 10,
 "Is Bold?": false,
 "Align": "UpperLeft",
 "Color": {
 "HEX": "#FFFFFF",
 "Opacity (0 - 100)": 100.0
 }
 },
 "Use custom cooldown": false,
 "Cooldown": 0.0
 }
 }
}
```

</details>

:::info Note
Types with IDs 2130354, 2130355, 2130356 are used by the daily rewards plugin and will be added automatically during configuration updates. They can be disabled by setting `"Enabled": false`.
:::

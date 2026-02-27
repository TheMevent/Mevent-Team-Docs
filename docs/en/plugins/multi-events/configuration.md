---
title: "Configuration"
description: "All configuration options for Multi Events"
sidebar_position: 3
---

# Configuration

The config file is located at:
```
oxide/config/MultiEvents.json
```

## Main Settings

| Parameter | Type | Default | Description |
|---|---|---|---|
| Info Commands | String array | `["events"]` | Chat commands to open the events panel |
| ServerPanel Template (V1, V2) | String | `Fullscreen` | Display template for ServerPanel integration |
| Enable Offline Image Mode | bool | `false` | Offline image mode |
| Work with Notify? | bool | `true` | Use Notify/UINotify for notifications |
| Enable notify when event start | bool | `true` | Show notification when an event starts |
| Enable timer to start random event | bool | `true` | Enable auto-start for random events on a timer |
| Min Events Duration | Number | `3600` | Minimum timer interval (in seconds) |
| Max Events Duration | Number | `7200` | Maximum timer interval (in seconds) |

## Notification Settings

| Parameter | Type | Description |
|---|---|---|
| Work with Notify? | bool | Enable Notify/UINotify integration |
| Enable notify when event start | bool | Show notification on event start |
| BlackList of notify to start event | String array | Blacklist of plugins that won't trigger notifications |

## Inventory Settings

| Parameter | Type | Description |
|---|---|---|
| Use Inventory? | bool | Enable the reward inventory module |
| Permission | String | Permission for inventory access (leave empty for everyone) |

## Leaderboard Settings

| Parameter | Type | Description |
|---|---|---|
| Use Leaderboard? | bool | Enable the leaderboard module |
| Permission | String | Permission for leaderboard access (leave empty for everyone) |

## UI Settings

| Parameter | Description |
|---|---|
| No Members Image | Image shown when there are no participants |
| Square Image | Auxiliary square image |
| Default Event Icon | Default event icon |
| Arrow Left Image | Left arrow image |
| Arrow Right Image | Right arrow image |
| Leaderboard Background Image | Background image for the leaderboard |

## Event Configuration

Each event in the "Events" array has these parameters:

| Parameter | Description |
|---|---|
| Enabled | Whether the event is active |
| Plugin Name | Plugin name for status tracking |
| Banner Url | Event banner URL |
| Title | Event title |
| Icon image | Icon URL |
| Short Description | Brief description |
| Background | Background settings (layer, image, click-to-close) |
| Content | Content settings (background, elements, scrolling) |
| Close Button | Close button settings |
| Banner | Banner element settings |

## Visual Editor

Each event has a visual editor that lets you change:

- Element positions and sizes (anchors, offsets)
- Background and text colors
- Fonts and text sizes
- Images and sprites
- Scrollable areas

Open the editor with `/ShowUiEditor`.

## Minimal Event Config Example

```json
{
 "Enabled": true,
 "Plugin Name": "YourPluginName",
 "Banner Url": "https://your-server.com/banner.png",
 "Title": "Event Name",
 "Icon image": "https://your-server.com/icon.png",
 "Short Description": "A short description of your event"
}
```

:::tip Tip
Use the visual editor to fine-tune each event's display -- it's way easier than editing JSON by hand.
:::

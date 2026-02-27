---
title: "Linking System Configuration"
description: "Full reference for all Linking System plugin configuration options."
sidebar_position: 4
---

# Linking System Configuration

The config file is located at: `oxide/config/LinkingSystem.json`

## Main Settings

| Parameter | Default | Description |
|---|---|---|
| Permission (ex: linkingsystem.use) | `linkingsystem.use` | Permission to use the plugin |
| Use Notify? | `true` | Use Notify for notifications |
| Use UI? | `true` | Use the graphical interface |
| What group for linked players | `discord` | Group for linked players |
| ServerPanel Template (V1, V2) | `V2` | UI template for ServerPanel |
| Open UI Commands | `["link"]` | Chat commands to open the UI |
| Code generation delay (sec.) | `60` | Cooldown for generating a new code (seconds) |

## Rewards (Rewards UI elements)

Rewards show up in the UI as visual elements displaying the bonuses for linking:

| Parameter | Description |
|---|---|
| Element color (#HEX) | Background color of the element |
| Element alpha | Opacity (0-100) |
| Element image (assets or url) | Image (URL or asset path) |
| Element itemId | Item ID (if no image is set) |
| Element skinId | Item skin |
| Element text | Element text |
| Element text size | Text size |
| Element text color (#HEX) | Text color |
| Element text Anchor | Text alignment |

### Reward Element Example

```json
{
 "Element color (#HEX)": "#2F2F30",
 "Element alpha": 100,
 "Element image (assets or url)": "",
 "Element itemId": 0,
 "Element skinId": 0,
 "Element text": "MORE HEALTH",
 "Element text size": 11,
 "Element text color (#HEX)": "#DCDCDC",
 "Element text Anchor": "MiddleCenter"
}
```

:::info Note
Reward elements are purely visual -- they just show what bonuses players get in the UI. The actual bonuses are configured through the group (`discord`) and other plugins (e.g., Oxide permissions and group privileges).
:::

<details>
<summary>Full Config Example</summary>

```json
{
 "Permission (ex: linkingsystem.use)": "linkingsystem.use",
 "Use Notify ?": true,
 "Use UI ?": true,
 "What group for linked players": "discord",
 "ServerPanel Template (V1, V2)": "V2",
 "Open UI Commands": ["link"],
 "Code generation delay (sec.)": 60,
 "Rewards UI elements": [
 {
 "Element color (#HEX)": "#2F2F30",
 "Element alpha": 100,
 "Element text": "MORE HEALTH",
 "Element text size": 11,
 "Element text color (#HEX)": "#DCDCDC",
 "Element text Anchor": "MiddleCenter"
 },
 {
 "Element color (#HEX)": "#2F2F30",
 "Element alpha": 100,
 "Element text": "+15% RATES",
 "Element text size": 11,
 "Element text color (#HEX)": "#DCDCDC",
 "Element text Anchor": "MiddleCenter"
 },
 {
 "Element color (#HEX)": "#2F2F30",
 "Element alpha": 100,
 "Element text": "-20% BAGS RESPAWN",
 "Element text size": 11,
 "Element text color (#HEX)": "#DCDCDC",
 "Element text Anchor": "MiddleCenter"
 },
 {
 "Element color (#HEX)": "#2F2F30",
 "Element alpha": 100,
 "Element text": "KIT DISCORD\n>>>",
 "Element text size": 11,
 "Element text color (#HEX)": "#DCDCDC",
 "Element text Anchor": "MiddleCenter"
 }
 ]
}
```

</details>

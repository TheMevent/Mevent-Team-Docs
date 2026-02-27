---
title: "Skills Configuration"
description: "Complete description of all configuration parameters for the Skills plugin"
sidebar_position: 3
---

# Skills Configuration

The configuration file is located at: `oxide/config/Skills.json`

## Main Parameters

| Parameter | Default | Description |
|---|---|---|
| Permission to use plugin | `""` (empty) | Access permission for usage. If empty -- available to everyone |
| Commands | `["skills", "skill"]` | Chat commands to open the menu |
| Work with Notify? | `true` | Use Notify for notifications |
| Chat Icon | `0` | Steam ID avatar for chat messages (0 = no icon) |
| Enable Offline Image Mode | `false` | Offline image mode (without ImageLibrary) |
| Template | `"Fullscreen"` | Interface template: Fullscreen, V1, V2, V4 |
| Show Categories | `true` | Show skill categories |
| Show All Skills at Once | `false` | Show all skills on one page |
| Cooldown between actions | `0.2` | Delay between interface actions (seconds) |
| Reset Skills on Death | `false` | Reset all skills on player death |

## XP System Settings

| Parameter | Default | Description |
|---|---|---|
| Enabled | `true` | Enable XP earning system |
| Count NPC kills as player kills | `false` | Count NPC kills as player kills |
| Count damage/kills to teammates | `true` | Count damage and kills to teammates |
| Count damage/kills to clan members | `true` | Count damage and kills to clan members |
| Count damage/kills to friends | `true` | Count damage and kills to friends |

### XP Multipliers by Permission

| Permission | Multiplier |
|---|---|
| `skills.xprate.vip` | x1.5 |
| `skills.xprate.premium` | x2.0 |

You can add your own permissions and multipliers in the "XP Rate Multipliers by Permissions" section.

### XP Rewards for Actions

Each entry in the rewards list contains:

| Parameter | Description |
|---|---|
| Prefab | Prefab name or short name (multiple can be specified with `\|`) |
| Type | Action type: Kill, Death, Crate |
| XP Reward | XP amount per action |
| Enabled | Whether this reward is enabled |

## XP Transfer on Kill

| Parameter | Default | Description |
|---|---|---|
| Enabled | `false` | Enable XP transfer on kill |
| Default Percentage | `50` | Percentage of XP the killer receives from the victim |
| Permission Percentages | VIP: 75%, Premium: 100% | Multipliers by permission |

## XP Refund Settings

| Parameter | Default | Description |
|---|---|---|
| Enable XP Refund | `true` | Enable XP refund when resetting a skill |
| Refund Percentage | `50` | Refund percentage (0-100) |
| Minimum Refund XP | `0` | Minimum refund |
| Maximum Refund XP | `0` | Maximum refund (0 = unlimited) |

## Auto-Wipe Settings

| Parameter | Default | Description |
|---|---|---|
| Enabled | `false` | Automatic wipe on new map save |
| Wipe XP Balance | `true` | Reset XP balance |
| Wipe Skill Levels | `true` | Reset skill levels |
| Wipe Wipe Protection Used | `true` | Reset wipe protection usage counter |
| Respect Wipe Protection | `true` | Honor the "Wipe Protection" skill |

## Notification Settings

### On XP Gain
| Parameter | Default | Description |
|---|---|---|
| Enabled | `true` | Enable XP gain notifications |
| Minimum XP | `1.0` | Minimum XP amount to show a notification |
| Show Chat Message | `true` | Show in chat |
| Show In-Game Note | `true` | Show a popup tooltip |
| Notification Cooldown | `5` | Delay between notifications (seconds) |

### On Skill Learning
| Parameter | Default | Description |
|---|---|---|
| Chat Enabled | `true` | Show a chat message |
| Minimum Level | `1` | Minimum level for notification |
| Only Max Levels | `false` | Notify only about maximum level |

## Custom Economy

| Parameter | Default | Description |
|---|---|---|
| Use Custom Economy | `false` | Use third-party currency instead of XP |
| Type | `"Plugin"` | Economy type |
| Plugin Name | `"ServerRewards"` | Plugin name |

## Skill Structure

Each skill in the configuration contains:

| Parameter | Description |
|---|---|
| Enabled | Whether the skill is enabled |
| ID | Unique identifier |
| Type | Skill type (determines the mechanic) |
| Title | Skill name |
| Description | Description for the player |
| Image | Icon URL |
| Permission | Access permission (empty = available to everyone) |
| Levels | List of levels with effect and cost |

### Level Structure

| Parameter | Description |
|---|---|
| Value | Level effect (in percent) |
| Cost | Cost in XP |
| Permission | Access permission for this level (optional) |

<details>
<summary>Default configuration example (main parameters)</summary>

```json
{
 "Permission to use plugin (ex: skills.use)": "",
 "Commands": ["skills", "skill"],
 "Work with Notify?": true,
 "Chat Icon (Steam ID, 0 = no icon)": 0,
 "Enable Offline Image Mode": false,
 "Template": "Fullscreen",
 "Show Categories": true,
 "Show All Skills at Once": false,
 "Cooldown between actions (in seconds)": 0.2,
 "Reset Skills on Death": false,
 "Custom Economy Settings": {
 "Use Custom Economy": false,
 "Type": "Plugin",
 "Plugin Name": "ServerRewards",
 "Plugin Hook Add": "AddPoints",
 "Plugin Hook Remove": "TakePoints",
 "Plugin Hook Balance": "CheckPoints"
 },
 "Auto Wipe on New Save Settings": {
 "Enabled": false,
 "Wipe XP Balance": true,
 "Wipe Skill Levels": true,
 "Wipe Wipe Protection Used counter": true,
 "Respect Wipe Protection skill": true
 },
 "Refund Settings": {
 "Enable XP Refund": true,
 "Refund Percentage (0-100)": 50.0,
 "Minimum Refund XP": 0.0,
 "Maximum Refund XP (0 = unlimited)": 0.0
 },
 "XP Rewards Settings": {
 "Enabled": true,
 "XP Rate Multipliers by Permissions": {
 "skills.xprate.vip": 1.5,
 "skills.xprate.premium": 2.0
 },
 "Count NPC kills as player kills": false,
 "Count damage/kills to teammates": true,
 "Count damage/kills to clan members": true,
 "Count damage/kills to friends": true
 },
 "XP Transfer on Kill Settings": {
 "Enabled": false,
 "Default Percentage": 50.0,
 "Permission Percentages": {
 "skills.xptransfer.vip": 75.0,
 "skills.xptransfer.premium": 100.0
 }
 }
}
```

</details>

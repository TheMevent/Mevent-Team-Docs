---
title: "Clans Configuration"
description: "Detailed reference for all Clans plugin settings"
sidebar_position: 3
---

# Clans Configuration

The configuration file is located at: `oxide/config/Clans.json`

After changing the configuration, reload the plugin with the command `o.reload Clans`.

## General Settings

| Parameter | Default | Description |
|---|---|---|
| Work with Notify | `true` | Whether to use the Notify/UINotify plugin for notifications |
| Commands | `["clan", "clans"]` | List of commands for opening the interface |
| Clan info commands | `["cinfo"]` | Commands for viewing clan information |
| Max description characters | `256` | Maximum clan description length |
| Clan tag in player name | `true` | Display clan tag before the player's name |
| Auto-create team | `true` | Automatically create a Rust in-game team for the clan |
| Top refresh rate | `60` | Leaderboard refresh interval (in seconds) |
| Default resource quota value | `100000` | Default value for resource quotas |
| Auto-disband when leader leaves | `false` | Whether to disband the clan if the leader leaves |

## Rust In-Game Team Integration

| Parameter | Default | Description |
|---|---|---|
| Leave clan via team button | `true` | Allows leaving the clan via the "Leave Team" button |
| Kick via team button | `true` | Allows kicking via the in-game "Kick" button |
| Invite via team system | `true` | Allows inviting via the in-game interface |
| Promote via team button | `true` | Allows promoting members via the interface |
| Accept invite via button | `true` | Allows accepting invitations via the in-game interface |
| Show clan creation UI on team creation | `false` | Whether to open the clan creation window when creating a team |

## Avatar Settings

| Parameter | Default | Description |
|---|---|---|
| Default avatar | Image URL | Default image for new clans |
| Leader can change | `true` | Allow the leader to change the clan avatar |
| Moderator can change | `false` | Allow moderators to change the clan avatar |
| Member can change | `false` | Allow members to change the clan avatar |
| Avatar change permission | `""` | Additional permission for changing (empty = not required) |
| Steam API Key | `""` | Steam API key for loading player avatars |

## Clan Tag Settings

| Parameter | Default | Description |
|---|---|---|
| Tag Min Length | `2` | Minimum number of characters in the tag |
| Tag Max Length | `6` | Maximum number of characters in the tag |
| Case Sensitive | `true` | Whether to consider case when checking for duplicates |
| Blocked Words | `["admin", "mod", "owner"]` | List of forbidden words in tags |
| Checking Characters | `true` | Whether to validate characters in the tag |
| Allowed special characters | `"!"` | Additional allowed characters |

### Tag Color

| Parameter | Default | Description |
|---|---|---|
| Enabled | `true` | Allow colored tags |
| Default color | `AAFF55` | Default HEX tag color |
| Leader can change | `true` | Whether the leader can change the tag color |
| Moderator can change | `false` | Whether moderators can change the tag color |
| Member can change | `false` | Whether members can change the tag color |

## Limit Settings

| Parameter | Default | Description |
|---|---|---|
| Member Limit | `8` | Maximum number of members in a clan |
| Moderator Limit | `2` | Maximum number of moderators |
| Alliances Limit | `2` | Maximum number of alliances |

## Chat Settings

| Parameter | Default | Description |
|---|---|---|
| Clan tags in chat | `true` | Whether to display clan tags in general chat |
| Tag format | `<color=#{color}>[{tag}]</color>` | Tag display format |
| Clan chat | `true` | Enable separate clan chat |
| Clan chat commands | `["c", "cchat"]` | Commands for sending messages to the clan |
| Alliance chat | `true` | Enable chat between allied clans |
| Alliance chat commands | `["a", "achat"]` | Commands for chatting with allies |
| Working with BetterChat | `true` | Integration with the BetterChat plugin |
| Working with IQChat | `true` | Integration with the IQChat plugin |
| Working with in-game chat | `false` | Integration with the in-game chat |

## Friendly Fire Settings

| Parameter | Default | Description |
|---|---|---|
| Use Friendly Fire | `true` | Enable the friendly fire system |
| Friendly fire for turrets | `false` | Turrets do not shoot at clan members |
| Shared friendly fire | `false` | Single toggle for the entire clan (controlled by leader) |
| Moderators can toggle shared | `false` | Give moderators the right to control shared FF |
| Players can toggle shared | `false` | Give members the right to control shared FF |
| Default value | `false` | Initial friendly fire state |
| Ignore in arena | `false` | Disable FF in arena (requires ArenaTournament) |

## Alliance Settings

| Parameter | Default | Description |
|---|---|---|
| Enable alliances | `true` | Activate the alliance system |
| Alliance friendly fire | `true` | Allow FF management between allies |
| Default FF value | `false` | Initial alliance FF state |
| Shared alliance FF | `false` | Single FF toggle for the entire alliance |
| Add allies to game teams | `false` | Add allied clan members to Rust teams |

## Permission Settings

| Parameter | Default | Description |
|---|---|---|
| Permission to create a clan | `false` / `clans.cancreate` | Whether to require permission for clan creation |
| Permission to join | `false` / `clans.canjoin` | Whether to require permission for joining |
| Permission to leave | `false` / `clans.canleave` | Whether to require permission for leaving |
| Permission to disband | `false` / `clans.candisband` | Whether to require permission for disbanding |
| Permission to kick | `false` / `clans.cankick` | Whether to require permission for kicking |
| Permission for skins | `false` / `clans.canskins` | Whether to require permission for using skins |
| Authorization level for cinfo | `0` | Minimum level for the cinfo command (0/1/2) |

## Paid Features

| Parameter | Default | Description |
|---|---|---|
| Fee for clan creation | `false` / `100` | Whether to charge for clan creation |
| Fee for joining | `false` / `100` | Whether to charge for joining |
| Fee for kicking | `false` / `100` | Whether to charge for kicking a member |
| Fee for leaving | `false` / `100` | Whether to charge for leaving the clan |
| Fee for disbanding | `false` / `100` | Whether to charge for disbanding |
| Fee for setting a skin | `false` / `100` | Whether to charge for setting a skin |
| Fee for changing avatar | `false` / `100` | Whether to charge for changing the avatar |
| Fee for inviting | `false` / `100` | Whether to charge for sending an invitation |

### Economy Settings

| Parameter | Default | Description |
|---|---|---|
| Type | `Plugin` | Economy type (Plugin or Item) |
| Plugin | `Economics` | Economy plugin name |
| Item (shortname) | `scrap` | Item shortname for payment (if type = Item) |

## Data Purge Settings

| Parameter | Default | Description |
|---|---|---|
| Enabled | `true` | Automatically delete inactive clans |
| Older than N days | `14` | Delete clans inactive for more than the specified number of days |
| Show deleted list | `true` | Output the list of deleted clans to the console |
| Wipe clans on map change | `false` | Delete clans on map change |
| Wipe players on map change | `false` | Delete player data on map change |
| Wipe invitations on map change | `false` | Delete invitations on map change |

## Score and Leaderboard Settings

The scoring system is configured in the "Loot Settings" section. Each entry contains:

| Field | Description |
|---|---|
| Enabled | Whether this entry is active |
| Short Name | Item/entity identifier |
| Type | Category (Kill, Gather, LootCrate, Craft, HackCrate) |
| Score | Points awarded per action |

<details>
<summary>Default Scoring System Configuration Example</summary>

```json
"Loot Settings": {
 "Enabled": true,
 "Loot": [
 { "Enabled": true, "Short Name": "kills", "Loot Type": "Kill", "Score": 1.0 },
 { "Enabled": true, "Short Name": "deaths", "Loot Type": "Kill", "Score": -1.0 },
 { "Enabled": true, "Short Name": "stone-ore", "Loot Type": "Gather", "Score": 0.1 },
 { "Enabled": true, "Short Name": "supply_drop", "Loot Type": "LootCrate", "Score": 3.0 },
 { "Enabled": true, "Short Name": "crate_normal", "Loot Type": "LootCrate", "Score": 0.3 },
 { "Enabled": true, "Short Name": "crate_elite", "Loot Type": "LootCrate", "Score": 0.5 },
 { "Enabled": true, "Short Name": "bradley_crate", "Loot Type": "LootCrate", "Score": 5.0 },
 { "Enabled": true, "Short Name": "heli_crate", "Loot Type": "LootCrate", "Score": 5.0 },
 { "Enabled": true, "Short Name": "bradley", "Loot Type": "Kill", "Score": 10.0 },
 { "Enabled": true, "Short Name": "helicopter", "Loot Type": "Kill", "Score": 15.0 },
 { "Enabled": true, "Short Name": "barrel", "Loot Type": "Kill", "Score": 0.1 },
 { "Enabled": true, "Short Name": "scientistnpc", "Loot Type": "Kill", "Score": 0.5 },
 { "Enabled": true, "Short Name": "heavyscientist", "Loot Type": "Kill", "Score": 2.0 },
 { "Enabled": true, "Short Name": "sulfur.ore", "Loot Type": "Gather", "Score": 0.5 },
 { "Enabled": true, "Short Name": "metal.ore", "Loot Type": "Gather", "Score": 0.5 },
 { "Enabled": true, "Short Name": "hq.metal.ore", "Loot Type": "Gather", "Score": 0.5 },
 { "Enabled": true, "Short Name": "stones", "Loot Type": "Gather", "Score": 0.5 },
 { "Enabled": true, "Short Name": "cupboard.tool.deployed", "Loot Type": "Kill", "Score": 1.0 }
 ]
}
```

</details>

## Role Color Settings

| Parameter | Default | Description |
|---|---|---|
| Member color | `#fcf5cb` | Name color for regular members |
| Moderator color | `#74c6ff` | Name color for moderators |
| Leader color | `#a1ff46` | Name color for the clan leader |

## Skin Settings

| Parameter | Default | Description |
|---|---|---|
| Use Skinner | `false` | Integration with the Skinner plugin |
| Use SkinBox | `false` | Integration with the SkinBox plugin |
| Use player skins | `false` | Allow skins from players' collections |
| Can set custom skins | `true` | Allow custom skins |
| Disable skins | `false` | Allows players to disable clan skins |
| Default value | `true` | Initial state (skins enabled/disabled) |

## Interface Page Settings

Each page can be enabled/disabled and protected with an access permission:

| Page | Description |
|---|---|
| aboutclan | Clan information |
| memberslist | Member list |
| clanstop | Clan leaderboard |
| playerstop | Player leaderboard |
| resources | Resource gathering quotas |
| skins | Clan skins |
| playerslist | Player list |
| alianceslist | Alliance list |

---
title: "Statistics Configuration"
description: "Complete reference for all configuration parameters of the Statistics plugin."
sidebar_position: 4
---

# Statistics Configuration

The configuration file is located at: `oxide/config/Statistics.json`

## Main Parameters

| Parameter | Default | Description |
|---|---|---|
| Statistics Commands | `["stats", "statistics"]` | Commands to open the profile |
| Leaderboard Commands | `["leaders", "leaderboard"]` | Commands for the leaderboard |
| Work with Notify? | `true` | Use Notify for notifications |
| Work with PlayTimeRewards? | `true` | Integration with PlayTimeRewards |
| Work with PlaytimeTracker? | `true` | Integration with PlaytimeTracker |
| Enable a Profile? | `true` | Enable the player profile |
| Enable a Leaderboard? | `true` | Enable the leaderboard |
| Automatic wipe on wipe | `false` | Automatic reset on wipe |
| Access by permission (statistics.use) | `false` | Restrict access by permission |
| ServerPanel Template (V1, V2) | `V1` | Template for ServerPanel |

## Profile Viewing Settings

| Parameter | Default | Description |
|---|---|---|
| Open player profile by clicking on leaderboard? | `true` | Open profile when clicking on a player |
| Enable the ability to see another player's profile? | `true` | Allow viewing other players' profiles |
| Permission to view the other player's profile | `""` | Permission to view other profiles |

## Counting Settings

| Parameter | Default | Description |
|---|---|---|
| Count suicide as death | `true` | Count suicide as a death |
| Count suicide as kill | `true` | Count suicide as a kill |
| Count kills of bots | `true` | Count bot kills |
| Count kills from bots | `true` | Count deaths from bots |
| Count deaths from teammates | `true` | Count deaths from teammates |
| Count bot kills in kills? | `false` | Include bot kills in the total kill count |
| Use value rounding? | `false` | Round values |

## Weapons and Resources

### Weapons

List of tracked weapons:
```json
"Weapons": [
 "rifle.ak", "rifle.bolt", "rifle.l96", "rifle.lr300",
 "rifle.m39", "rifle.semiauto", "pistol.eoka",
 "pistol.m92", "pistol.nailgun", "pistol.python",
 "pistol.revolver", "pistol.semiauto"
]
```

### Resources

List of tracked resources:
```json
"Resources": [
 "stones", "sulfur.ore", "metal.ore", "hq.metal.ore", "wood"
]
```

## Score Table

Configure points for various actions in the `"Score Table (shortname - score)"` section:

| Action | Default Points | Description |
|---|---|---|
| kills | `1` | Per player kill |
| deaths | `-1` | Per death |
| supply_drop | `3` | Per supply crate |
| crate_normal | `0.3` | Per normal crate |
| crate_elite | `0.5` | Per elite crate |
| bradley_crate | `5` | Per Bradley crate |
| heli_crate | `5` | Per helicopter crate |
| bradley | `10` | Per Bradley destroy |
| helicopter | `15` | Per helicopter destroy |
| barrel | `0.1` | Per barrel |
| scientistnpc | `0.5` | Per scientist |
| heavyscientist | `2` | Per heavy scientist |

There is also a separate `"NPCs Score Table (UserID - score)"` table for configuring points for specific NPCs by UserID.

## Reward Settings

| Parameter | Default | Description |
|---|---|---|
| Use Awards? | `false` | Enable rewards for top positions |

Rewards are configured in the `"Awards (top position - award)"` section, where the key is the top position (1, 2, 3...):

```json
"Awards": {
 "1": {
 "Amount": 1,
 "Items": [
 {
 "Type": "Item",
 "ShortName": "wood",
 "Amount": 20000,
 "Chance": 50
 }
 ]
 }
}
```

## Statistics Collection by Permission

| Parameter | Default | Description |
|---|---|---|
| Enable the collection of statistics only for players with permission? | `false` | Collect statistics only for players with the permission |
| Permission to collect statistics | `""` | Permission for statistics collection |

## PlayerDatabase

| Parameter | Default | Description |
|---|---|---|
| Enabled | `false` | Use PlayerDatabase |
| Name | `"Statistics"` | Database name |

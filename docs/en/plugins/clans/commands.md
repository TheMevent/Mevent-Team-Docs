---
title: "Clans Commands"
description: "Full list of Clans plugin commands organized by role"
sidebar_position: 4
---

# Clans Commands

## Commands for All Players

These commands are available to every player on the server.

### Opening the Interface

```
/clan
```

Opens the graphical clan management interface. If the player is in a clan, the leaderboard page opens. If not -- the clan information page.

```
/clans
```

Alternative command, does the same thing.

### Creating a Clan

```
/clan create <tag>
```

Creates a new clan with the specified tag. The tag must contain 2 to 6 characters (configurable) and must not contain forbidden words.

**Example:**
```
/clan create WOLF
```

:::note
If a fee for clan creation is enabled in the settings, the specified amount will be deducted from the player's balance.
:::

### Finding a Clan

```
/clan join
```

Opens the interface for searching and browsing available clans.

### Clan Information

```
/cinfo <tag>
```

Shows detailed information about a clan: description, creation date, member count, and their status.

**Example:**
```
/cinfo WOLF
```

### Friendly Fire

```
/clan ff
/cff
```

Toggles friendly fire against members of your own clan. If shared mode is enabled, only the leader (or moderator, if permitted) can control this.

```
/clan allyff
/aff
```

Toggles friendly fire against members of allied clans.

### Clan Chat

```
/c <message>
/cchat <message>
```

Sends a message visible only to members of your clan.

**Example:**
```
/c Gathering for a raid in 10 minutes
```

### Alliance Chat

```
/a <message>
/achat <message>
```

Sends a message visible to members of your clan and all allied clans.

**Example:**
```
/a Need help at the oil rig
```

### Leaving a Clan

```
/clan leave
```

Leaves the current clan. If the player is the leader and automatic disbanding is enabled -- the clan will be dissolved.

---

## Commands for Clan Moderators

These commands are available to moderators and the clan leader.

### Inviting a Player

```
/clan invite <name or SteamID>
```

Sends an invitation to the specified player to join your clan.

**Example:**
```
/clan invite PlayerName
```

### Withdrawing an Invitation

```
/clan withdraw <name or SteamID>
```

Cancels a previously sent invitation.

**Example:**
```
/clan withdraw PlayerName
```

### Kicking a Member

```
/clan kick <name or SteamID>
```

Kicks the specified member from the clan.

**Example:**
```
/clan kick ToxicPlayer
```

### Managing Alliances

```
/clan allyinvite <tag>
```

Sends an alliance proposal to another clan.

```
/clan allywithdraw <tag>
```

Withdraws an alliance proposal.

```
/clan allyaccept <tag>
```

Accepts an incoming alliance proposal.

```
/clan allycancel <tag>
```

Declines an incoming alliance proposal.

```
/clan allyrevoke <tag>
```

Breaks an existing alliance with a clan.

**Examples:**
```
/clan allyinvite BEARS
/clan allyaccept BEARS
/clan allyrevoke BEARS
```

---

## Commands for the Clan Leader

These commands are available only to the leader (creator) of the clan.

### Appointing a Moderator

```
/clan promote <name or SteamID>
```

Promotes a regular member to moderator.

**Example:**
```
/clan promote TrustedPlayer
```

### Demoting a Moderator

```
/clan demote <name or SteamID>
```

Demotes a moderator to a regular member.

**Example:**
```
/clan demote FormerMod
```

### Clan Description

```
/clan description <text>
```

Sets the clan description (up to 256 characters by default).

**Example:**
```
/clan description Friendly clan! We play every evening. Accepting experienced players.
```

### Clan Tag Color

```
/clan tagcolor <HEX-color>
```

Sets the clan tag color in chat. Use HEX format (6 characters, without #).

**Example:**
```
/clan tagcolor FF5500
```

### Disbanding the Clan

```
/clan disband
```

Completely disbands the clan. All members will be removed, alliances broken.

:::danger
This action is irreversible! All clan data, including statistics and skins, will be deleted.
:::

---

## Admin Commands

All administrative commands use the `clans.manage <action>` format and require the `clans.admin` permission. They can be entered in the server console or in-game chat.

### Viewing Information

```
clans.manage list
```

Displays a list of all clans with tags, leaders, and member counts.

```
clans.manage listex
```

Extended list: all clans, all members, roles, and online status.

```
clans.manage show <tag or player name>
```

Detailed information about a single clan: description, creation date, member list, alliances.

**Example:**
```
clans.manage show WOLF
clans.manage show PlayerName
```

### Sending Messages

```
clans.manage msg <tag> <message>
```

Sends a message to all members of the specified clan.

**Example:**
```
clans.manage msg WOLF Server rule violation!
```

### Managing Clans

```
clans.manage create <player name> <tag>
```

Creates a clan for the specified player with the given tag.

```
clans.manage rename <old tag> <new tag>
```

Renames a clan.

```
clans.manage disband <tag>
```

Disbands the specified clan.

### Managing Members

```
clans.manage invite <tag> <player name>
```

Sends a clan invitation.

```
clans.manage join <tag> <player name>
```

Adds a player to the clan directly, without an invitation.

```
clans.manage kick <tag> <player name>
```

Kicks a player from the clan.

```
clans.manage kick.player <SteamID>
```

Kicks a player from any clan by their SteamID.

```
clans.manage owner <tag> <player name>
```

Assigns a new clan leader.

```
clans.manage promote <tag> <player name>
```

Promotes a member to moderator.

```
clans.manage demote <tag> <player name>
```

Demotes a moderator to member.

### Service Commands

```
clans.refreshtop
```

Force refreshes the leaderboard tables.

```
clans.refreshskins
```

Refreshes the skin cache for all clans.

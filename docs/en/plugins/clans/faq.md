---
title: "Clans FAQ"
description: "Frequently asked questions about the Clans plugin"
sidebar_position: 5
---

# Frequently Asked Questions

## 1. How many members can be in one clan?

By default, the maximum number of members is **8 players**. You can change this value in the configuration, the "Member Limit" parameter in the "Limit Settings" section. The moderator limit is configured separately (default is 2).

## 2. Can clans be preserved between wipes?

Yes. By default, clan data is preserved during map wipes. If clans disappear, check the "Purge Settings" in the configuration -- the "Wipe clans on new map save" and "Wipe players on new map save" parameters should be set to `false`.

## 3. How does the alliance system work?

An alliance is a union between two clans. A moderator or clan leader sends a proposal to another clan with the command `/clan allyinvite <tag>`. If the second clan accepts it with `/clan allyaccept <tag>`, the alliance is established. Members of allied clans can communicate through alliance chat (`/a`), and friendly fire between them can be disabled. The default maximum number of alliances is 2.

## 4. How do I set up a fee for clan creation?

Enable the "Charge a fee to create a clan?" parameter in the "Paid Functionality Settings" section and specify the cost in the "Cost" field. Also configure the "Economy" section -- specify the economy plugin (e.g., Economics) or the item payment type (scrap, metal.fragments, etc.). Make sure the specified economy plugin is installed on the server.

## 5. What happens if the clan leader stops playing?

If the "Automatic disbanding of the clan when the leader leaves the clan" parameter is set to `true`, the clan will be disbanded when the leader leaves. This option is disabled by default. There is also an auto-purge system: if a clan is inactive for more than 14 days (configurable), it will be automatically deleted.

An administrator can manually assign a new leader with the command:
```
clans.manage owner <clan tag> <new leader name>
```

## 6. How does the leaderboard system work?

The leaderboard is calculated based on points awarded for various actions: kills, resource gathering, opening crates, destroying the Bradley and helicopter. Each action has its own point weight, which is configured in the "Loot Settings" section. For example, killing a player awards 1 point, while destroying the helicopter awards 15. Leaderboards are updated automatically at a set interval (every 60 seconds by default).

## 7. Does the plugin support BetterChat / IQChat?

Yes, the plugin has built-in integration with both chat plugins. Enable the corresponding options in the "Chat Settings" section of the configuration. After that, clan tags will automatically be displayed before player names in chat. The tag format is configured through the "Tag format" parameter.

## 8. Can I restrict clan creation to a specific group?

Yes. Enable the "Use permission to create a clan" parameter in the "Permission Settings" section. After that, only players with the `clans.cancreate` permission will be able to create clans. Grant it to the desired group:
```
o.grant group vip clans.cancreate
```

Similar restrictions are available for joining, leaving, kicking, disbanding, and using skins.

## 9. How does friendly fire work?

There are two modes:
- **Individual** (default) -- each player decides for themselves whether to enable friendly fire against clan members using the `/cff` command.
- **Shared** -- a single toggle for the entire clan, controlled by the leader (or moderator, if permitted in settings).

The same applies to alliances: the `/aff` command toggles friendly fire against members of allied clans.

Additionally, you can enable friendly fire for turrets so they do not shoot at clan members.

## 10. How do I transfer clan data to another server?

Clan data is stored in the `oxide/data/Clans/` folder. Copy all files from this folder to the new server, install the plugin, and restart the server. Also make sure the plugin version on the new server is the same or newer.

## 11. What characters are allowed in the clan tag?

By default, Latin letters and digits are allowed. Additional characters are specified in the "Allowed Characters" parameter of the "Clan Tag Settings" section. Words from the "Blocked Words" list (default: admin, mod, owner) are forbidden in any part of the tag.

## 12. How do clan skins work?

The clan leader or moderator can set a unified set of equipment skins through the interface (the "Skins" page). Skins are applied to specific items (mask, chest plate, pants, boots, weapons). Each member can disable clan skins for themselves if the "Disable Skins" parameter is enabled in the configuration. Integration with Skinner and SkinBox plugins extends the available skins.

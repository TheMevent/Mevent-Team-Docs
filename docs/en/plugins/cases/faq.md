---
title: "FAQ -- Cases"
description: "Frequently asked questions about the Cases plugin."
sidebar_position: 5
---

# Frequently Asked Questions -- Cases

### 1. How do I add a new case?

Open the configuration file `Cases.json` and add a new case to the "Cases" array. Specify a unique ID, name, image, cost, and list of items with drop chances. After saving, reload the plugin.

### 2. How do I configure item drop chances?

Each item in a case has a `Chance` parameter. The higher the value -- the more frequently the item drops. For example, an item with a chance of 70 will drop significantly more often than an item with a chance of 5. The chances do not need to add up to 100% -- they determine relative probability.

### 3. How do I make a free daily case?

Configure the bonus case in the configuration:
- `Enabled: true`
- `Cost: 0`
- `CooldownTime: 86400` (24 hours in seconds)

Players will be able to open it for free once per day.

### 4. How do I award cases based on time spent on the server?

1. Install the **PlaytimeTracker** plugin
2. In the configuration, enable `Playtime Tracker Settings`
3. Set up the time-to-case ID mapping:
```json
"Cases": {
 "3600": 1,
 "14400": 2
}
```
In this example: after 1 hour of play the player receives case ID 1, after 4 hours -- case ID 2.

### 5. Can I use different currencies for different cases?

Yes, each case supports a Custom Currency parameter. Enable it and configure an individual currency for a specific case, independent of the main economy.

### 6. How do I give cases to all players on the server?

Use the command from the server console:
```
givecase all <case_id> <amount>
```
For example: `givecase all 1 3` -- gives 3 cases with ID 1 to all online players.

### 7. How do I change the interface appearance?

In the configuration, change the `Template` parameter:
- `Fullscreen` -- fullscreen mode
- `InMenu` -- embedded in the server menu

You can also configure rarity colors for visual display of item value.

### 8. Can I add not only items but also commands to a case?

Yes, each case element supports the `Command` type. Set the type to `"Command"` and in the command field specify the server console command. Use `%steamid%` for player Steam ID substitution.

### 9. How do I disable the roulette animation?

In the configuration, set `"Enable item scrolling?": false`. Items will be awarded instantly without the scrolling animation.

### 10. Is case data reset on wipe?

By default, data is preserved between wipes. The cases themselves and their contents are configured in the configuration and are not affected by wipes. Data about purchased player cases is stored in the data file.

---
title: "Frequently Asked Questions"
description: "FAQ for the Events Manager plugin"
sidebar_position: 5
---

# Frequently Asked Questions

## 1. How do I open the event management panel?

Type `/em` in the in-game chat. Make sure you have the `EventsManager.use` permission. To grant permissions, use:
```
o.grant user your_steamid EventsManager.use
```

## 2. What events are supported out of the box?

The plugin supports dozens of events from various developers:

- **Vanilla events**: helicopter, airdrop, Chinook 47, cargo ship, Santa's sleigh
- **Mevent**: Operation Fortress, Collection Resources, Foundation Drop, Gold Rush, Helicopter Pet, Hunt Animal, King Of Hill, Looking Loot, Special Cargo
- **KpucTaJl**: Air Event, Water Event, Arctic Base Event, Satellite Dish Event, Junkyard Event, Power Plant Event, Harbor Event, and others
- **Adem**: Sputnik, Armored Train, Convoy, Shipwreck, Caravan, and others
- **Nivex**: Dangerous Treasures, Raidable Bases (Easy/Medium/Hard/Nightmare)
- And many others from Mercury, DezLife, Cashr, Bazz3l, Fruster, etc.

## 3. How do I add my own custom event?

1. Open the panel via `/em`
2. Click **"Add event"**
3. Specify:
 - **Name** -- the displayed event name
 - **Command** -- the console command to launch it
 - **Plugin** -- the plugin name (to check if it is loaded)
 - **Creator** -- the category for grouping
4. Save the event

## 4. An event is on the schedule but does not launch. What should I do?

Check the following:
- The number of online players meets the conditions (min/max players)
- The current day of the week is in the list of active days
- The event plugin is installed and loaded (load status is displayed in the panel)
- The schedule was saved correctly

## 5. How do I disable standard vanilla Rust events?

In the configuration, set the `"Disable vanilla auto events?"` parameter to `true`. The plugin will disable automatic launching of all standard events, except those specified in the `"Allowed list of vanilla events"` whitelist.

## 6. How do I set up Discord notifications?

1. Create a webhook in your Discord channel settings
2. Copy the webhook URL
3. Paste the URL into the `"Discord web hook"` parameter in the plugin configuration
4. Reload the plugin

Now, each time an event is automatically launched, a notification will be sent to the Discord channel.

## 7. Can I assign multiple events to one schedule slot?

Yes. When creating a schedule, you can assign multiple events. The system will randomly choose one of them at each launch. This is useful for variety -- players will not know in advance which event will start.

## 8. How do I completely reset all settings to default values?

Use the server console command:
```
eventmanager.reset.default
```
This will delete all custom events, schedules, and categories, and load the default list.

## 9. Is the plugin compatible with Carbon?

Yes, the plugin is fully compatible with both **Oxide** and **Carbon**. On Carbon, ImageLibrary is not required -- the plugin uses the built-in image system.

## 10. How do I find out which events have been launched?

Enable the `"Enable event logging to file"` parameter in the configuration. After that, all event launches will be recorded in a log file with the date and time.

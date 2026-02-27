---
title: "FAQ - Wipe Block"
description: "Frequently asked questions about the Wipe Block plugin"
sidebar_position: 5
---

# FAQ -- Wipe Block

## 1. How does the plugin determine wipe time?

The plugin automatically records the date and time of the last server wipe. All block timers count from that moment. Wipe time data is saved in the plugin data file and restored on server restart.

## 2. Can I add custom item categories?

Yes. In the configuration file, you can create any number of categories. Each category needs a translation key ("Lang Key"), and you must add the corresponding translation to the plugin language files (`oxide/lang/ru/WipeBlock.json` and `oxide/lang/en/WipeBlock.json`).

## 3. What happens if a player tries to equip blocked armor?

If the "Prevent to use blocked items" option is enabled, the player will not be able to equip the blocked item. Blocked items are automatically moved from equipment and hotbar slots to the main inventory. The player will receive a notification that the item is blocked.

## 4. Is placing items in turrets and MLRS blocked?

Yes. The plugin prevents placing blocked items in auto turrets, drone storage systems, and MLRS, even if the item is in the player's inventory.

## 5. How does the "Time Indent" parameter work?

This parameter shifts the block reference point. For example, if you set 3600 seconds, all timers will be calculated as if the wipe occurred 1 hour earlier. This is useful if you want to adjust the unlock schedule without recreating the entire configuration.

## 6. Can I block items with a specific skin?

Yes. For each item in the configuration, a "Skin" field is specified. If you set a specific skin ID, only the item with that skin will be blocked. If you set 0, the standard item without a skin will be blocked.

## 7. Does the plugin affect server performance?

The plugin is optimized for minimal performance impact. It automatically unsubscribes from unused hooks when item blocking is disabled or all items are unlocked. If the "Prevent to use blocked items" option is disabled, the corresponding checks are not performed.

## 8. What happens when the last item is unlocked?

When all items from the configuration are unlocked, the plugin:
- Removes the on-screen widget for all players
- Disables all block checks to save server resources
- Fires a block completion event that other plugins can use

## 9. How do I configure the progress bar colors?

In the "Gradients" section of the configuration, an array of 101 HEX colors is defined. The first color (index 0) corresponds to 0% progress (fully unlocked), the last (index 100) -- 100% progress (fully blocked). A smooth transition from green through yellow to red is recommended.

## 10. Is the plugin compatible with ServerPanel?

Yes. The plugin integrates with ServerPanel and can display block information as a category in the server menu. A display template choice -- V1 or V2 -- is available in the configuration.

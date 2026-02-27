---
title: "AutoRecycler FAQ"
description: "Frequently asked questions about the AutoRecycler plugin"
sidebar_position: 5
---

# Frequently Asked Questions

## 1. What's the difference between auto-recycling and the virtual recycler?

**Auto-recycling** processes items instantly when they enter your inventory. You choose which items get auto-recycled through the `/autorec` interface.

**Virtual recycler** is a regular recycler that you open with `/vrec` from anywhere on the map. You manually place items in it, just like a normal recycler.

## 2. How do I enable auto-recycling for a player?

1. Grant the permission: `oxide.grant user <steamid> autorecycler.autorec`
2. The player types `/autorec` and selects the items they want.
3. Auto-recycling kicks in whenever those items are picked up.

## 3. How does the recycler crate (Recbox) work?

The recycler crate is a special large wooden box with a unique skin. When a player puts items inside, they're automatically recycled. You can place the crate on the ground like any regular storage box.

## 4. How can a player buy a recycler crate?

1. Make sure the player has the `autorecycler.recboxbuy` permission.
2. The player types `/recbox` to see the price.
3. The player types `/recboxbuy` to buy one.
4. Resources are taken from their inventory, and the crate is given to them.

## 5. Can I customize what resources drop from recycling?

Yes. In the config under "Items to Recycle", you can change the recycling output for every item: resource quantities, drop chances, and whether specific outputs are enabled or disabled.

## 6. What happens to items when the virtual recycler is closed?

All items left in the virtual recycler are dropped on the ground next to the player when it's closed. This prevents item loss.

## 7. Is there a quick way to toggle auto-recycling?

Yes, use `/autorectoggle`. It instantly enables or disables all auto-recycling without having to open the interface.

## 8. How can an admin disable recycling of a specific item for everyone?

An admin with `autorecycler.characteristics` can open `/autorec` and click the "ENABLED/DISABLED" button on a specific item. This globally enables or disables that item's recycling for all players.

## 9. The recycling list is missing some items. Why?

The list is generated automatically from in-game crafting recipes on first launch. Items without a crafting recipe (vehicles, some special items) aren't included. Vehicles like helicopters, boats, and cars are intentionally excluded.

## 10. Can I change the recycler crate price?

Yes. Edit the "Recbox cost" section in the config. You can specify any items and quantities. Reload the plugin after making changes.

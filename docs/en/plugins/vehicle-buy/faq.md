---
title: "FAQ - Vehicle Buy"
description: "Frequently asked questions about the Vehicle Buy plugin"
sidebar_position: 5
---

# Frequently Asked Questions (FAQ)

## 1. What vehicle types does the plugin support?

The plugin supports 19+ vehicle types: minicopter, transport helicopter, attack helicopter, modular cars (2/3/4 modules), tugboat, rowboat, RHIB, solo and duo submarines, horse, snowmobile, Tomaha, hot air balloon, recycler, pedal bike, motorbike, and motorbike with sidecar. You can add your own vehicle types through the configuration.

## 2. How do I add a new vehicle type?

Add a new entry to the `Vehicles` section of the configuration. Specify a unique key, name, prefab path, image, price, and other parameters. The full list of settings is described in the configuration documentation.

## 3. How do I set up payment with different currencies?

For each vehicle, you can set its own currency type via the `Currency` parameter:
- `0` -- in-game item (specify shortname)
- `1` -- Economics
- `2` -- Server Rewards

You can also use BankSystem.

## 4. How does the recall system work?

The player types `/callback <key>`, and the purchased vehicle teleports to their location. Optionally, a recall fee can be configured. Recall is not possible if the vehicle is occupied by another player.

## 5. How does hammer pickup work?

If `Pickup type` is set to `1` for a vehicle, the player can pick it up by hitting it with a hammer (3 hits within 2 seconds). The vehicle turns into an item in the inventory. The pickup method can be changed to a command (`/pickup`) by setting the value to `0`.

## 6. How do I set up vending machines in safe zones?

In the `Vending machines` section of the configuration, enable machines for the desired zones (Bandit Camp, Outpost, Fishing Village). For each machine, configure the product list specifying the vehicle key, payment item, and price.

## 7. Can I limit the number of purchases for a single vehicle?

Yes. The `Maximum number of purchases` parameter allows you to set a purchase limit for each vehicle. A value of `0` means no limit.

## 8. How does the purchase cooldown work?

The `Cooldown to buy (in seconds)` parameter sets the wait time between purchases. For example, a value of `300` means that after purchasing a vehicle, the player must wait 5 minutes before purchasing the same vehicle again.

## 9. Is data preserved after a wipe?

By default, data is preserved. To clear data on map change, set the `Wipe on new map save` parameter to `true`.

## 10. How do I disable damage to purchased vehicles?

Set the `Disable vehicles damage?` parameter to `true`. This will make all vehicles purchased through the plugin invulnerable.

## 11. What if a vehicle does not spawn?

Make sure that:
- There is enough free space near the player (spawn distance is configurable)
- The player's inventory is not full (for pickup/delivery)
- For water vehicles, the player is near water

If the vehicle cannot be placed, it is returned to the player's inventory as an item.

## 12. Does the plugin work with Carbon?

Yes, the plugin is fully compatible with Carbon. When using Carbon, the built-in image system is automatically used instead of ImageLibrary.

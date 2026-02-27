---
title: "Frequently Asked Questions"
description: "FAQ for the Capture Zone plugin"
sidebar_position: 5
---

# Frequently Asked Questions

## 1. How do I get the capture zone item?

There are two ways:

1. **Via admin command**: `/give.capturezone [steamid] [amount]`
2. **Via container drops**: if enabled in the configuration, the item can drop from loot crates and barrels with a configurable probability

## 2. What does the capture zone item look like?

The item looks like a regular Tool Cupboard but with a unique skin. It is displayed with a special name -- "Zone Capture" by default. It is placed in exactly the same way as a regular cupboard.

## 3. What is the capture zone radius?

The default radius is 40 meters. You can change this value in the configuration ("Zone Radius" parameter).

## 4. How does the resource tax work?

When a player gathers resources within the zone (wood, ore, stone, plants), a percentage of the yield is automatically transferred to the zone owner's cupboard. The default percentage is 20%. If the cupboard is full, the resources are lost.

## 5. How do I exempt friends from the tax?

In the configuration, there is a "Bypass Settings" section. Enable the desired parameters:
- **Teammates** -- teammates via the Rust in-game team system
- **Friends** -- friends via the Friends plugin
- **Clanmates** -- clan members via the Clans plugin
- **Authorized in the cupboard** -- players authorized in the cupboard

## 6. Can I place multiple zones?

Yes, but the number is limited. The default is 3 zones per player. With the `capturezone.vip` permission -- 5 zones, with `capturezone.deluxe` -- 7 zones. Limits are configurable in the configuration.

## 7. Can all players see the map marker?

By default -- yes. However, you can configure visibility for different groups: owner only, teammates, friends, clan members, cupboard-authorized players, or players with a specific permission.

## 8. Can zones be placed next to each other?

No. There must be a distance of at least twice the zone radius between zones (80 meters by default). If a player attempts to place a cupboard too close to another zone, they will receive a warning.

## 9. What happens to zones on wipe?

Capture zone data is stored in the plugin's data file. When the server wipes with data deletion, all zones will be reset. If the wipe is performed without clearing data, the zones will be restored.

## 10. How do I completely disable item drops from containers?

In the configuration, under the "Drop Settings" section, set the "Enabled" parameter to `false`. After that, the item can only be obtained through the admin command.

## 11. Is the plugin compatible with PvE servers?

Yes. Capture Zone works on any server. On PvE servers, the resource tax is the only "aggressive" mechanic, while the cupboard cannot be destroyed without PvP.

## 12. How do I change the tax percentage for different access levels?

In the configuration, under the "Percent Settings" section, change the values in "Permissions":

```json
"Percent Settings": {
 "Default": 20,
 "Permissions": {
 "capturezone.vip": 25,
 "capturezone.deluxe": 30,
 "capturezone.premium": 40
 }
}
```

Don't forget to register new permissions through the configuration.

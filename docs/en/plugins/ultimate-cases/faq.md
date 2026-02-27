---
title: "FAQ -- Ultimate Cases"
description: "Frequently asked questions about the Ultimate Cases plugin for Rust servers."
sidebar_position: 5
---

# Frequently Asked Questions (FAQ)

## 1. How do I give keys to a player?

Use the console command:
```
cases.give <steamid> keys <amount>
```

For example:
```
cases.give 76561198012345678 keys 10
```

The player will receive a notification about receiving keys.

---

## 2. How do I create a new case?

You can create and edit cases directly in-game if you have the `ultimatecases.edit` permission. Open the cases interface and use the editing mode to add a new case, configure rewards, and set drop chances.

---

## 3. How do I set up scrap-to-keys exchange?

In the `"Exchange Settings" -> "Currencies"` section, add a currency of type `Item`:

```json
{
 "ID": 1,
 "Title": "SCRAP",
 "Type": "Item",
 "ItemShortname": "scrap",
 "ItemSkin": 0,
 "BaseExchangeRate": 200,
 "DailyLimit": 100
}
```

This will allow exchanging 200 scrap for 1 key.

---

## 4. How do I set up discounts for VIP players?

In the `"PrivilegeSettings"` section, configure permissions and discounts:

```json
{
 "Permission": "ultimatecases.vip1",
 "DiscountPercent": 10,
 "CustomDailyLimit": 0
}
```

Then grant the permission:
```
oxide.grant group vip ultimatecases.vip1
```

---

## 5. Can I restrict case opening during combat block?

Yes. The plugin automatically blocks case opening in the following situations (when the corresponding plugins are installed):
- Combat block
- Raid block
- Enemy tool cupboard zone
- Swimming, wounded, in a duel

---

## 6. How do I add an NPC trader at a monument?

In the `"Exchange Settings" -> "MonumentTraders"` section, configure the bot:

```json
{
 "MonumentFilter": "lighthouse",
 "Prefab": "assets/prefabs/npc/bandit/missionproviders/missionprovider_outpost_b.prefab",
 "PositionOffset": {"x": -7, "y": 14, "z": 0},
 "CurrencyID": 1,
 "DefaultKeysAmount": 1
}
```

The **MonumentFinder** plugin is required.

---

## 7. How does the rarity system work?

The rarity system automatically colors the item background based on its drop chance. Configure chance ranges and corresponding images in the `"Rarity Settings"` section.

---

## 8. How do I enable free cases?

Free cases are configured individually for each case through the editing mode. Set the cost to 0 keys and configure a timer for cooldown before the next free claim.

---

## 9. A player cannot collect an item from storage. Why?

Possible reasons:
1. **Wipe block** -- the item is blocked after a wipe.
2. **Raid block / combat block** -- a block is active.
3. **Enemy tool cupboard zone** -- the player is in a Building Blocked zone.
4. **Item not found** -- error in the item configuration.

---

## 10. How do bulk discounts work?

In the `"BulkDiscounts"` section, configure thresholds:
```json
[
 {"MinKeys": 10, "DiscountPercent": 5},
 {"MinKeys": 25, "DiscountPercent": 10},
 {"MinKeys": 50, "DiscountPercent": 15}
]
```

When purchasing 10+ keys -- 5% discount, 25+ -- 10%, and so on. Discounts are applied to the base exchange rate.

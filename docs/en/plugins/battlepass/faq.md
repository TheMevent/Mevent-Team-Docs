---
title: "BattlePass FAQ"
description: "Frequently asked questions about the BattlePass plugin"
sidebar_position: 5
---

# Frequently Asked Questions

### 1. Does progress reset on wipe?

Only if you enable it. Set `Wipe on new map save` to `true` in the config to reset player progress on each map wipe. Otherwise, progress carries over.

### 2. How do I add new missions?

Edit the missions section in `oxide/config/BattlePass.json`. Each mission needs a type, target, required amount, and reward values. Reload the plugin after making changes.

### 3. Can I use Economics as the currency?

Not directly -- the battle pass uses its own dual currency system. However, you can set up cases that reward Economics currency through commands (using the `Command` item type with a `deposit %steamid% [amount]` command).

### 4. How do I make VIP-exclusive cases?

Set a `Permission` on the case (like `battlepass.premium`) and only grant that permission to your VIP group.

### 5. How often do missions refresh?

That's controlled by the refresh settings in the config. You can set missions to refresh daily, every few hours, or at custom intervals. The refresh time uses the configured timezone.

### 6. What's the challenge of the day?

It's a special mission that appears alongside regular ones, usually with bigger rewards. You configure it separately in the config.

### 7. Is the plugin compatible with Carbon?

Yes, it works on both Oxide and Carbon.

### 8. Does it work with NoEscape?

Yes. If NoEscape is installed and enabled in the config, players can't claim rewards or open cases while raid-blocked or combat-blocked.

### 9. Can rewards be given immediately instead of going to the inventory?

Yes. Some reward types (like commands) execute immediately. Item rewards can be configured to go directly to the player's inventory or to the battle pass inventory for later claiming.

### 10. How does the chance system work in cases?

Each item in a case has a `Chance` value. Higher values mean a greater likelihood of dropping. The chances don't need to add up to 100 -- they represent relative weights.

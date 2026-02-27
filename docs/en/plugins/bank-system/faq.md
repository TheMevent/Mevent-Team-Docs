---
title: "Bank System FAQ"
description: "Frequently asked questions about the Bank System plugin"
sidebar_position: 5
---

# Frequently Asked Questions -- Bank System

## 1. How do players get a bank card?

By default, a player opens the bank interface with `/bank` and clicks the create card button. If you want cards created automatically on first join, set `Card auto-creation` to `true` in the config.

## 2. What happens when a card expires?

If `Use card expiration date?` is enabled, the card stops working after the set number of days (7 by default). The player will need to create a new one. The balance is preserved -- it's tied to the account, not the card. To disable expiration, set `Use card expiration date?` to `false`.

## 3. Can I use Bank System alongside Economics?

Yes. There are two options:
- **Built-in economy** (default): Bank System uses its own balance system. Economics isn't needed.
- **External economy**: Set `Use own economic system?` to `false` and specify `Plugin name: "Economics"`. The bank will then work with Economics balances.

You can also run `bank.convert.economics` to migrate data from Economics to Bank System.

## 4. How do ATM fees work?

ATM owners (players who placed the ATM) can set a fee percentage for deposits and withdrawals. For example, with a 5% fee, depositing 100 currency costs 105, and the extra 5 goes to the ATM owner. Fees accumulate and the owner can withdraw them. Monument ATMs have 0% fees by default.

## 5. What does ATM degradation mean?

Every operation (deposit, withdraw, transfer) reduces the ATM's condition by a percentage (1% by default). When it drops too low, the ATM stops working until the owner repairs it. Repair costs scrap, metal pipes, and metal fragments. VIP players cause less degradation (configurable via permissions). Admin ATMs at monuments don't degrade.

## 6. How do I add an ATM to a new monument?

Open the config and add a new monument under `Spawn Settings > Monuments`. You'll need the monument name (like `"gas_station"`) and the position coordinates relative to the monument's center. You can also use the MonumentAddons plugin to place ATMs -- in that case, settings come from the `Settings for ATMs from MonumentAddons` section.

## 7. How do I set up currency drops from containers?

In the `Drop Settings` section of the config, you can configure which containers drop banknotes:
- `Prefab` -- the container path (crate, barrel)
- `Chance` -- drop chance from 0 to 100
- `Min Amount / Max Amount` -- currency amount range

You can add new containers or modify existing ones.

## 8. Is data preserved across wipes?

It depends on the `Wipe Settings`:
- `Wipe Players?` -- if `false`, balances and cards survive wipes
- `Wipe Logs?` -- if `true`, transaction history gets cleared
- `Wipe ATMs?` -- if `true`, ATM data gets cleared

By default, balances are kept while logs and ATMs are wiped.

## 9. What's the NPC banker for?

The NPC banker opens the bank interface when a player interacts with a specific NPC. It's useful if you want to create a bank office on your server. Add the NPC's Steam ID to the `NPC Settings` section of the config.

## 10. Can I track what players earn money for?

Yes. Enable `Collect Gather logs?` and `Collect Transfers logs?` in the `Log Settings`. In the bank interface, players will see their resource gathering history with earned amounts, plus full transaction history (deposits, withdrawals, transfers).

## 11. How do I give an ATM to a player?

Use the console command `bank.giveatm [steamId]`. The player gets an item (a vending machine with a special skin) they can place like a regular vending machine. Once placed, it becomes an ATM.

## 12. How do I migrate data from Economics to Bank System?

Run `bank.convert.economics` in the server console. This transfers all player balances from Economics to Bank System. Make sure Economics is loaded before running the command.

---
title: "Bank System"
description: "Full banking system with ATMs, bank cards, transfers, and resource tracking for Rust servers"
version: "1.3.16"
tags: [rust, plugin, economy, bank]
sidebar_position: 1
---

# Bank System

## What does this plugin do?

**Bank System** adds a full-featured banking system with a visual interface to your server. Players get bank cards, deposit and withdraw funds through ATMs, and transfer money to other players. Admins manage the server economy through console commands. The plugin also tracks resource gathering and pays out currency for it.

## Key Features

- Players can create a bank card and use ATMs to deposit, withdraw, and transfer funds
- Players earn currency by mining resources, opening crates, and killing NPCs
- Admins can place ATMs at monuments (Outpost, Bandit Camp) automatically
- Admins can manage player balances through console commands
- ATM owners can set their own fees for operations
- ATMs degrade with use and need repairs
- Currency can drop from crates and barrels with configurable chances
- NPC banker support for opening the bank interface
- Integration with Economics, ServerRewards, and other economy plugins
- Transaction and resource gathering history in the interface

## Requirements

- **Oxide** or **Carbon** (latest version)
- **ImageLibrary** -- required for the interface to work
- **Notify** or **UINotify** -- recommended for notifications (optional)
- **LangAPI** -- for multi-language support (optional)
- **Economics** -- if you want to use an external economy instead of the built-in one (optional)

## Quick Start

1. Install **ImageLibrary** on your server if you haven't already.
2. Place the `BankSystem.cs` file in the `oxide/plugins` folder (or `carbon/plugins`).
3. Restart the server or run `o.reload BankSystem`.
4. Edit the config file `oxide/config/BankSystem.json` to fit your server.
5. Players can use `/bank` to open the bank interface.

## Permissions

| Permission | Who needs it | What it unlocks |
|---|---|---|
| `banksystem.use` (configurable) | Players | Access to the bank interface (if set in config) |
| `banksystem.openatm` | Players | Open the ATM menu via command |
| `banksystem.vip` | VIP players | Reduced ATM degradation rate (0.7% instead of 1%) |
| `banksystem.premium` | Premium players | Even lower ATM degradation (0.5%) |

## Player Commands

| Command | Description | Example |
|---|---|---|
| `/bank` | Open the bank interface | `/bank` |

:::tip Note
The bank command is configurable in the config. It defaults to `/bank`.
:::

## Admin Commands

| Command | Description | Example |
|---|---|---|
| `bank.givenote [steamId] [amount]` | Give banknotes to a player | `bank.givenote 76561198000000000 100` |
| `bank.giveatm [steamId]` | Give an ATM item to a player | `bank.giveatm 76561198000000000` |
| `bank.setbalance [steamId] [amount]` | Set a player's balance | `bank.setbalance 76561198000000000 5000` |
| `bank.deposit [steamId] [amount]` | Add to a player's balance | `bank.deposit 76561198000000000 1000` |
| `bank.withdraw [steamId] [amount]` | Subtract from a player's balance | `bank.withdraw 76561198000000000 500` |
| `bank.transfer [sender] [receiver] [amount]` | Transfer funds between players | `bank.transfer 7656...1 7656...2 300` |
| `bank.wipe` | Wipe all ATM data | `bank.wipe` |
| `bank.convert.economics` | Convert data from Economics | `bank.convert.economics` |
| `bank.convert.serverrewards` | Convert data from ServerRewards | `bank.convert.serverrewards` |

:::caution Warning
All admin commands are only available to server admins or from the server console.
:::

## Troubleshooting

### Bank interface won't open
**Symptom:** Nothing happens when a player types `/bank`.
**Cause:** ImageLibrary isn't installed.
**Fix:** Install ImageLibrary and restart the server.

### Player can't use the ATM
**Symptom:** An error message appears when interacting with an ATM.
**Cause:** The player doesn't have a bank card.
**Fix:** The player needs to open the bank interface (`/bank`) and create a card.

### ATM is broken
**Symptom:** The ATM shows a broken message.
**Cause:** The ATM's condition dropped too low from use.
**Fix:** The ATM owner needs to repair it using the required resources (scrap, metal pipe, metal fragments).

### Balance shows 0
**Symptom:** The balance in the interface shows 0.
**Cause:** An external economy plugin (Economics) is configured but not installed.
**Fix:** Install Economics or switch `Use own economic system?` to `true` in the config.

### Card expired
**Symptom:** The player can't perform operations even though they have a card.
**Cause:** The card's validity period has expired (7 days by default).
**Fix:** The player needs to create a new card. You can disable expiration by setting `Use card expiration date?` to `false`.

### Currency doesn't drop from containers
**Symptom:** No banknotes appear in crates and barrels.
**Cause:** Drops are disabled or the chance is too low.
**Fix:** Check the `Drop Settings` section in the config and make sure `Enabled` is `true` with a reasonable drop chance.

---
title: "Bank System Setup"
description: "Step-by-step guide for installing and configuring the Bank System plugin"
sidebar_position: 2
---

# Bank System Setup

## Prerequisites

Before installing, make sure you have:

- A Rust server with **Oxide** or **Carbon**
- The **ImageLibrary** plugin (required)
- Access to your server's file system (FTP or control panel)

:::danger Important
Without **ImageLibrary**, the banking system won't work. The interface won't open, and players will see an error message.
:::

## Step 1: Install Dependencies

1. Download **ImageLibrary** and place it in the `oxide/plugins` folder.
2. (Recommended) Install **Notify** or **UINotify** for better notifications.
3. (Optional) Install **LangAPI** for multi-language support.

## Step 2: Install the Plugin

1. Place the `BankSystem.cs` file in `oxide/plugins` (for Oxide) or `carbon/plugins` (for Carbon).
2. The plugin will compile automatically and create the config file.

:::tip Tip
If you're using Carbon, the plugin will work with the ImageDatabase module instead of ImageLibrary.
:::

## Step 3: Basic Configuration

After the first launch, find the config file:
- **Oxide:** `oxide/config/BankSystem.json`
- **Carbon:** `carbon/configs/BankSystem.json`

### Currency Settings

Set the parameters for banknotes used as physical currency:

```json
"Currency Settings": {
 "Enable item split control?": true,
 "Display Name": "RUSTNote",
 "Short Name": "sticks",
 "Skin": 2536195910
}
```

:::info Information
`Short Name` is the base Rust item the currency is built on. `Skin` determines how it looks. Don't change these values after the server goes live -- players will lose their existing currency.
:::

### Starting Balance

```json
"Starting balance": 100
```

Every new player gets this amount when they create a bank card.

### Economy Settings

If you want to use the built-in economy:

```json
"Economy Settings": {
 "Use own economic system?": true
}
```

If you want to use an external plugin (like Economics):

```json
"Economy Settings": {
 "Use own economic system?": false,
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance"
}
```

## Step 4: Configure ATMs

### Automatic Monument Spawns

By default, ATMs spawn at Outpost and Bandit Camp:

```json
"ATM Settings": {
 "Spawn Settings": {
 "Monuments": {
 "compound": {
 "Enabled": true,
 "Display Name": "ATM",
 "Position": { "x": -3.5, "y": 1.15, "z": 2.7 },
 "Rotation": -90.0,
 "Deposit Fee": 0.0,
 "Withdraw Fee": 0.0
 },
 "bandit": {
 "Enabled": true,
 "Display Name": "ATM",
 "Position": { "x": 34.2, "y": 2.35, "z": -24.7 },
 "Rotation": 135.0,
 "Deposit Fee": 0.0,
 "Withdraw Fee": 0.0
 }
 }
 }
}
```

### Player-Placed ATMs

Players can receive an ATM via the `bank.giveatm` command and place it themselves. These ATMs belong to the player, and they can configure the fees.

## Step 5: Set Up Permissions

If you want to restrict bank access to certain groups:

```
oxide.grant group default banksystem.use
```

If the `Permission` field in the config is left empty, the bank is available to everyone.

## Step 6: Set Up NPC Bankers (Optional)

You can bind the bank interface to an NPC:

```json
"NPC Settings": {
 "NPCs": [
 "1234567890"
 ]
}
```

Replace the value with your NPC's Steam ID. When a player interacts with this NPC, the bank interface will open.

## Step 7: Reload

After configuring, reload the plugin:

```
o.reload BankSystem
```

:::tip Done!
Players can now use `/bank` to open the bank and interact with ATMs at monuments.
:::

## Auto-Wipe Settings

The plugin supports automatic data wipes when the server wipes:

```json
"Wipe Settings": {
 "Wipe Players?": false,
 "Wipe Logs?": true,
 "Wipe ATMs?": true
}
```

- **Wipe Players** -- clear player balances and cards
- **Wipe Logs** -- clear transaction history
- **Wipe ATMs** -- clear ATM data

:::caution Warning
If you enable `Wipe Players`, all players will lose their balances and cards on every server wipe.
:::

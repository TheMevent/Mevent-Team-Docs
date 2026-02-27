---
title: "Shop Setup"
description: "Step-by-step guide to installing and configuring the Shop plugin."
sidebar_position: 2
---

# Shop Setup

## Prerequisites

Before installing, make sure you have:

- A Rust server with **Oxide** or **Carbon**
- **ImageLibrary** plugin (required)
- An economy plugin like **Economics** or **ServerRewards** (recommended)
- File system access to your server

:::danger Important
The shop **won't work** without **ImageLibrary**. Install it first.
:::

## Step 1: Install Dependencies

1. Download and install **ImageLibrary** in your `oxide/plugins` folder.
2. (Recommended) Install **Economics** or another economy plugin.
3. (Recommended) Install **Notify** or **UINotify** for notifications.
4. (Optional) Install **LangAPI** for multi-language support.

## Step 2: Install the Plugin

1. Place `Shop.cs` in your `oxide/plugins` (or `carbon/plugins`) folder.
2. If you have extra files (`ShopConverter.cs`, `ShopMeventTools.cs`), place them in the same folder.
3. Wait for automatic compilation.

## Step 3: Install a Shop Template

The shop starts empty after the first run. You need to install a template:

1. Join the server as an admin.
2. Make sure you have `shop.admin` permission:
 ```
 oxide.grant user YourName shop.admin
 ```
3. Type in chat:
 ```
 /shop.install
 ```
4. Follow the instructions to pick a template.

:::tip Tip
A template is a set of items, categories, and prices. You can edit it after installation through the admin UI.
:::

## Step 4: Configure the Economy

Open the config file:
- **Oxide:** `oxide/config/Shop.json`
- **Carbon:** `carbon/configs/Shop.json`

### Using Economics

```json
"Economy": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance",
 "ShortName": "scrap",
 "Display Name (empty - default)": "",
 "Skin": 0
}
```

### Using Items as Currency

```json
"Economy": {
 "Type (Plugin/Item)": "Item",
 "ShortName": "scrap",
 "Display Name (empty - default)": "",
 "Skin": 0
}
```

In this case, a specific item from the player's inventory (e.g., scrap) is used as currency.

### Additional Currencies

You can add a second currency (e.g., ServerRewards) in the `Additional Economics` section:

```json
"Additional Economics": [
 {
 "ID": 1,
 "Enabled": true,
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "ServerRewards",
 "Balance add hook": "AddPoints",
 "Balance remove hook": "TakePoints",
 "Balance show hook": "CheckPoints"
 }
]
```

## Step 5: Set Up Permissions

### Shop access

If the `Permission` field is empty, the shop is open to everyone. To restrict it:

```
oxide.grant group default shop.use
```

### Admin permissions

```
oxide.grant user YourName shop.admin
oxide.grant user YourName shop.setvm
oxide.grant user YourName shop.setnpc
```

### Discounts

```
oxide.grant group vip shop.vip
```

## Step 6: Bind to NPC (optional)

1. Place an NPC on the server (via an NPC plugin or other method).
2. Look at the NPC and run:
 ```
 /shop.setnpc
 ```
3. A config entry will appear with the NPC ID and shop categories.

You can set specific categories per NPC:

```json
"NPC Shops (NPC ID - shop categories)": {
 "1234567": {
 "Permission": "",
 "Categories": ["Tool", "Food"]
 },
 "7654321": {
 "Permission": "",
 "Categories": ["Weapon", "Ammunition"]
 }
}
```

Use `"*"` in categories to show all of them.

## Step 7: Bind to Vending Machine (optional)

1. Place a vending machine on the server.
2. Look at it and run:
 ```
 /shop.setvm
 ```
3. A config entry will appear with the machine's Entity ID.

```json
"Custom Vending Machines (Entity ID - settings)": {
 "123343941": {
 "Permission": "",
 "Categories": ["Cars", "Misc"]
 }
}
```

## Step 8: Reload

After finishing your setup:

```
o.reload Shop
```

:::tip Done!
Players can now use `/shop` to open the store. Admins can edit items, categories, and prices right in the game UI.
:::

## Auto-Wipe Settings

```json
"Auto-Wipe Settings": {
 "Cooldown": true,
 "Players": true,
 "Limits": true
}
```

- **Cooldown** -- reset purchase cooldowns on wipe
- **Players** -- reset player data
- **Limits** -- reset purchase limits

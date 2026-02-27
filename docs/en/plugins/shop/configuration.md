---
title: "Shop Configuration"
description: "Full reference for all Shop plugin configuration options."
sidebar_position: 3
---

# Shop Configuration

Config file location:
- **Oxide:** `oxide/config/Shop.json`
- **Carbon:** `carbon/configs/Shop.json`

## Main Settings

| Parameter | Default | Allowed Values | Description |
|---|---|---|---|
| Permission to use plugin | `""` (empty) | String | Access permission. Empty = open to all |
| Commands | `["shop", "shops"]` | String array | Chat commands to open the shop |
| Enable money transfers between players? | `true` | `true` / `false` | Allow money transfers between players |
| Allow money transfers to offline players? | `false` | `true` / `false` | Allow transfers to offline players |
| Enable selling items? | `true` | `true` / `false` | Allow players to sell items |
| Enable logging to the console? | `true` | `true` / `false` | Log to the server console |
| Enable logging to the file? | `true` | `true` / `false` | Log to file |
| Load images when logging into the server? | `true` | `true` / `false` | Load images when a player connects |
| Work with Notify? | `true` | `true` / `false` | Use the Notify plugin for notifications |
| Enable Offline Image Mode | `false` | `true` / `false` | Offline image mode |
| Work with LangAPI? | `true` | `true` / `false` | Multi-language support |
| Can admins edit? (by flag) | `false` | `true` / `false` | Allow editing by admin flag (instead of permission) |
| Block (NoEscape) | `false` | `true` / `false` | Block the shop during active NoEscape |
| Blocking the opening in duels? | `false` | `true` / `false` | Block the shop during duels |

## Block Settings

| Parameter | Default | Description |
|---|---|---|
| Wipe Block | `false` | Block the shop after wipe |
| Wipe Cooldown | `3600` | Block duration after wipe (seconds) |
| Respawn Block | `true` | Block the shop after respawn |
| Respawn Cooldown | `60` | Block duration after respawn (seconds) |
| Cooldown between actions (in seconds) | `0.1` | Delay between actions (spam protection) |
| Delay between loading images | `1.0` | Delay between image loads (seconds) |

## Economy Settings

| Parameter | Default | Description |
|---|---|---|
| Type (Plugin/Item) | `"Plugin"` | Economy type: plugin or item |
| Plugin name | `"Economics"` | Economy plugin name |
| Balance add hook | `"Deposit"` | Hook for adding funds |
| Balance remove hook | `"Withdraw"` | Hook for removing funds |
| Balance show hook | `"Balance"` | Hook for getting balance |
| ShortName | `"scrap"` | Item short name (for Item type) |
| Display Name | `""` | Custom currency name |
| Skin | `0` | Item skin (for Item type) |

:::info Info
With `Plugin` type, currency is managed by an external plugin (Economics, ServerRewards, etc.). With `Item` type, a specific item from the player's inventory acts as currency.
:::

## Additional Currencies

Lets you use multiple currencies at the same time. Each currency can be tied to different plugins or items.

```json
"Additional Economics": [
 {
 "ID": 1,
 "Enabled": true,
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "ServerRewards",
 "Balance add hook": "AddPoints",
 "Balance remove hook": "TakePoints",
 "Balance show hook": "CheckPoints",
 "ShortName": "scrap",
 "Display Name (empty - default)": "",
 "Skin": 0
 }
]
```

## Discount System

| Parameter | Default | Description |
|---|---|---|
| Enabled | `true` | Enable the discount system |
| Discount (%) | see below | Discount percentage per permission |

```json
"Discount": {
 "Enabled": true,
 "Discount (%)": {
 "shop.default": 0,
 "shop.vip": 10
 }
}
```

A player with `shop.vip` gets a 10% discount on all purchases. If a player has multiple permissions, the highest discount applies.

## NPC Shops

```json
"NPC Shops (NPC ID - shop categories)": {
 "1234567": {
 "Permission": "",
 "Categories": ["Tool", "Food"]
 },
 "7654321": {
 "Permission": "",
 "Categories": ["Weapon", "Ammunition"]
 },
 "4644687478": {
 "Permission": "shop.usenpc",
 "Categories": ["*"]
 }
}
```

| Field | Description |
|---|---|
| Key (NPC ID) | NPC's Steam ID |
| Permission | Access permission for this NPC (empty = everyone) |
| Categories | Categories available at this NPC. `"*"` = all categories |

## Vending Machines

```json
"Custom Vending Machines (Entity ID - settings)": {
 "123343941": {
 "Permission": "",
 "Categories": ["Cars", "Misc"]
 }
}
```

Binds shop categories to specific vending machines on the map.

## Selling Container Settings

```json
"Settings available containers for selling item": {
 "Enabled": true,
 "Available Containers (main, belt, wear)": ["main", "belt"]
}
```

Controls which inventory containers players can sell items from.

## Buy Again Settings

| Parameter | Default | Description |
|---|---|---|
| Enabled | `false` | Enable repeat purchase feature |
| Permission | `""` | Access permission (empty = everyone) |
| Image | `"assets/icons/history_servers.png"` | Button icon |

## Formatting Settings

| Parameter | Default | Description |
|---|---|---|
| Buy Price Format | `"G"` | Buy price display format |
| Sell Price Format | `"G"` | Sell price display format |
| Shopping Bag Cost Format | `"G"` | Cart cost display format |
| Balance Format | `"G"` | Balance display format |

## Blocked Skins

```json
"Blocked skins for sell": {
 "short name": [52, 25],
 "short name 2": [52, 25]
}
```

Items with listed skins can't be sold in the shop.

## Auto-Wipe Settings

| Parameter | Default | Description |
|---|---|---|
| Cooldown | `true` | Reset cooldowns on wipe |
| Players | `true` | Reset player data on wipe |
| Limits | `true` | Reset purchase limits on wipe |

## Discord Logging Settings

```json
"Discord Logging Settings": {
 "Buy Settings": {
 "Enabled": false,
 "Discord Webhook URL": "",
 "Color (Decimal format)": 3066993,
 "Title": "Shop Purchase",
 "Footer text": "{username} bought {item} x{amount} for {price}"
 },
 "Sell Settings": {
 "Enabled": false,
 "Discord Webhook URL": "",
 "Color (Decimal format)": 15158332,
 "Title": "Shop Sale",
 "Footer text": "{username} sold {item} x{amount} for {price}"
 },
 "Transfer Settings": {
 "Enabled": false,
 "Discord Webhook URL": "",
 "Color (Decimal format)": 3447003,
 "Title": "Money Transfer",
 "Footer text": "Transferred {amount} from {username} to {targetname}"
 }
}
```

### Template Variables

**Buy/Sell:** `{username}`, `{steamid}`, `{item}`, `{amount}`, `{price}`

**Transfers:** `{username}`, `{steamid}`, `{targetname}`, `{targetid}`, `{amount}`

## UI Settings

| Parameter | Default | Description |
|---|---|---|
| Display Type | `"OverlayNonScaled"` | UI display type |
| Round Digits | `5` | Decimal places for rounding |

UI colors are configured via HEX values with transparency.

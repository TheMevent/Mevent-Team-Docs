---
title: "Ultimate Cases Configuration"
description: "Complete reference for all configuration settings of the Ultimate Cases plugin."
sidebar_position: 4
---

# Ultimate Cases Configuration

The configuration file is located at: `oxide/config/UltimateCases.json`

## Main Parameters

| Parameter | Default | Description |
|---|---|---|
| Template | `Fullscreen` | Interface template |
| Open UI Commands | `["opencases", "cases"]` | Chat commands |
| Keys Modal Type | `Default` | Keys modal window type |
| Work with Notify? | `true` | Use Notify |
| Enable Offline Image Mode | `false` | Offline image mode |
| Wipe on new map save | `false` | Wipe on new map save |
| Work with LangAPI? | `true` | Use LangAPI |
| Cooldown between actions (in seconds) | `0.2` | Delay between actions |

## Custom Economy Settings

| Parameter | Default | Description |
|---|---|---|
| UseCustomEconomy | `false` | Use custom economy |
| Type | `Plugin` | Type: `Plugin` or `Item` |
| PluginName | `ServerRewards` | Economy plugin name |
| PluginHookAdd | `AddPoints` | Balance add hook |
| PluginHookRemove | `TakePoints` | Balance deduct hook |
| PluginHookBalance | `CheckPoints` | Balance check hook |

## Exchange Settings

| Parameter | Default | Description |
|---|---|---|
| Enabled | `true` | Enable currency-to-keys exchange |

### Currencies

Each currency has the following parameters:

| Parameter | Description |
|---|---|
| ID | Unique identifier |
| Enabled | Whether the currency is enabled |
| Title | Display name |
| Icon | Icon URL |
| Type | Type: `Plugin` or `Item` |
| PluginName / ItemShortname | Currency source |
| BaseExchangeRate | Base exchange rate (currency per 1 key) |
| DailyLimit | Daily key limit |
| MinimumKeys | Minimum keys per exchange |
| MaximumKeys | Maximum keys per exchange |

### Bulk Discounts (BulkDiscounts)

| Parameter | Description |
|---|---|
| MinKeys | Minimum number of keys for the discount |
| DiscountPercent | Discount percentage |

### VIP Privileges (PrivilegeSettings)

| Parameter | Description |
|---|---|
| Permission | Permission for the VIP privilege |
| DiscountPercent | Discount percentage |
| CustomDailyLimit | Custom daily limit (0 -- default) |

## Rarity Settings

Rarity determines the visual styling of rewards based on drop chance:

| Parameter | Description |
|---|---|
| Min / Max | Chance range (%) |
| Image | Background image for this rarity |
| RouletteItemBackgroundImage | Item background in the roulette |

Default rarity tiers:
- 0-1% -- legendary
- 1-5% -- epic
- 5-15% -- rare
- 15-50% -- uncommon
- 50-100% -- common

## NPC Traders at Monuments

| Parameter | Description |
|---|---|
| Enabled | Enable NPC traders |
| DefaultCurrencyID | Default currency ID |
| Bots | List of NPCs with settings |

Each bot is configured with a monument, position, currency, and appearance settings.

<details>
<summary>Basic configuration example</summary>

```json
{
 "Template": "Fullscreen",
 "Open UI Commands": ["opencases", "cases"],
 "Work with Notify?": true,
 "Wipe on new map save": false,
 "Exchange Settings": {
 "Enabled": true,
 "Currencies": [
 {
 "ID": 0,
 "Title": "RP",
 "Type": "Plugin",
 "PluginName": "ServerRewards",
 "BaseExchangeRate": 100,
 "DailyLimit": 100
 }
 ],
 "BulkDiscounts": [
 {"MinKeys": 10, "DiscountPercent": 5},
 {"MinKeys": 25, "DiscountPercent": 10}
 ]
 }
}
```

</details>

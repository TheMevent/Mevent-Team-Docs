---
title: "Ultimate Cases Commands"
description: "Complete list of commands and permissions for the Ultimate Cases plugin for Rust servers."
sidebar_position: 3
---

# Commands and Permissions

## Chat Commands

| Command | Description | Permission |
|---|---|---|
| `/cases` | Open the cases interface | Configurable |
| `/opencases` | Open the cases interface (alternative) | Configurable |
| `/cases.modal.open <id>` | Open a specific case modal | Configurable |

:::tip Tip
Commands are configured in the `Open UI Commands` parameter. Default: `["opencases", "cases"]`.
:::

## Console Commands

| Command | Description | Who Can Use |
|---|---|---|
| `cases.give <steamid> keys <amount>` | Give keys to a player | Administrators / RCON |
| `cases.give <steamid> case <caseId> <amount>` | Give a case to a player | Administrators / RCON |

### Usage Examples

Give 10 keys to a player:
```
cases.give 76561198012345678 keys 10
```

Give a case to a player:
```
cases.give 76561198012345678 case 1 5
```

## Permissions

| Permission | Description | Default |
|---|---|---|
| `ultimatecases.edit` | In-game case editing mode | Not granted |
| `ultimatecases.vip1` | VIP-1 exchange discount (5%) | Not granted |
| `ultimatecases.vip2` | VIP-2 exchange discount (10%) | Not granted |
| `ultimatecases.vip3` | VIP-3 exchange discount (15%) | Not granted |
| `ultimatecases.vip4` | VIP-4 exchange discount (20%) | Not granted |

:::info Note
VIP permissions and discounts are fully configurable in the `"Exchange Settings" -> "PrivilegeSettings"` section.
:::

### Setting Up Permissions

```
oxide.grant group admin ultimatecases.edit
oxide.grant group vip ultimatecases.vip1
oxide.grant group premium ultimatecases.vip2
```

## How It Works

### Opening a Case

1. The player opens the cases interface (`/cases`).
2. Selects a case from the list.
3. Views the possible rewards (Potential Drops).
4. If the player has enough keys, they click "OPEN".
5. The roulette animation plays.
6. The won item goes into the rewards storage.
7. The player collects the item from storage.

### Exchanging Currency for Keys

1. In the interface, a currency for exchange is selected.
2. The number of keys is specified.
3. Bulk and VIP discounts are applied.
4. Keys are credited to the balance.

### Opening Restrictions

Cases may be blocked in the following situations:
- Combat block
- Raid block
- Enemy tool cupboard zone
- Swimming
- Wounded
- In a duel
- Flying a helicopter
- Sleeping

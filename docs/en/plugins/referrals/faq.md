---
title: "FAQ -- Referrals"
description: "Frequently asked questions about the Referrals plugin for Rust servers."
sidebar_position: 5
---

# Frequently Asked Questions (FAQ)

## 1. How do I get my promo code?

Type `/ref` in chat. Your unique promo code will be displayed in the UI. Copy and share it with other players.

---

## 2. Can I change the promo code length or characters?

Yes. In the config, adjust `"Promo Code Chars"` and `"Promo Code Length"`. By default, codes are 8 characters using uppercase letters and digits.

---

## 3. Why can't a player activate a promo code?

Possible reasons:
1. **Not enough playtime** -- the player hasn't met the minimum playtime requirement (default: 1 hour).
2. **Already used a code** -- each player can only activate one promo code.
3. **Own code** -- you can't activate your own code.
4. **No permission** -- if the permission field is set, the player needs it.

---

## 4. How do I set up rewards for invite milestones?

In the `"Awards"` section of the config, add entries with the `"InvitesAmount"` field. For example, if you want a reward at 5 invites, set `"InvitesAmount": 5`.

---

## 5. Can I give a reward to the player who activates the code?

Yes. Set `"Give an award to a player who activates a promo code?"` to `true` and configure the rewards in the corresponding section. Each reward can have a `Chance` value from 0 to 100.

---

## 6. How do I block rewards during raids?

Set these parameters in the config:
```json
"Block Rewards During Raid Block?": true,
"Block Rewards During Combat Block?": true
```

The **NoEscape** plugin must be installed for this to work.

---

## 7. Is the data wiped automatically?

Only if you enable `"Use auto-wipe?"` in the config. By default, data persists through wipes.

---

## 8. How do I add a new reward type?

The plugin supports these reward types: `Item`, `Command`, `Kit`, `Plugin`. For a command reward, specify the command string in `"Command"` -- the `{steamid}` placeholder gets replaced with the player's Steam ID.

---

## 9. Can I restrict access to the referral system?

Yes. Set a permission in the config:
```json
"Permission (example: referrals.use)": "referrals.use"
```

Then grant it:
```
oxide.grant group default referrals.use
```

---

## 10. The UI won't open. What do I do?

Check:
1. **ImageLibrary** is installed and loaded.
2. The player has the required permission (if set).
3. The config has no errors. Reload the plugin after fixing any issues.

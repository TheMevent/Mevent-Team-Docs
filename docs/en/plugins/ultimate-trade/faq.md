---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions about the Ultimate Trade plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Frequently Asked Questions

### 1. How do I start a trade with another player?

Type `/trade player_name` in chat. The other player will receive a notification and must accept the request with `/trade accept`.

---

### 2. How do I increase the number of trade slots?

Create an additional permission in the `"Permission Settings"` section of the configuration with the desired number of slots. Grant this permission to the player or group.

---

### 3. Can I disable the distance restriction?

Yes. Set the value of `"Allow trade if the distance between players is greater than the specified"` to `-1`. This will disable the distance check.

---

### 4. How do I set up trading for teammates only?

Set `"Block trading with players if players are not in a team"` to `true`. After this, trading will only be available between members of the same team.

---

### 5. Can I reduce the cooldown for VIP players?

Yes. Create a VIP permission in `"Permission Settings"` with a lower cooldown value. For example: `"Cooldown after trade for this permission": 10`.

---

### 6. How do I cancel a sent request?

The request is automatically cancelled when the timeout expires (15 seconds by default). To cancel manually, use `/trade cancel` or `/trade no`.

---

## Troubleshooting

### Trade unavailable -- "You don't have permission"

**Cause:** The player does not have the `ultimatetrade.use` permission.

**Solution:** Grant the permission: `oxide.grant group default ultimatetrade.use`.

---

### Trade cancelled -- "timeout expired"

**Cause:** The recipient did not respond within the allotted time.

**Solution:** Ask the recipient to type `/trade accept` more quickly. Or increase the response time in the configuration (`"Time to answer trade requests"`).

---

### Trade blocked in building zone

**Cause:** Trade blocking in enemy tool cupboard zones is enabled.

**Solution:** Move to a safe zone. To disable: change `"Block sending requests in BuildingBlock"` to `false`.

---

### Trade blocked -- "Blocked by Duel"

**Cause:** One of the players is participating in a duel (Duel plugin).

**Solution:** Wait for the duel to end. This is automatic protection to prevent exploits.

---

### Not enough trade slots

**Cause:** The number of slots is limited (8 by default).

**Solution:** Increase `"Number of active slots for trade"` in the configuration, or grant a VIP permission with an increased slot count.

---

### Cooldown after trade is too long

**Cause:** The default cooldown is active (60 seconds).

**Solution:** Reduce `"Trade cooldown"` in the configuration. For VIP: create a permission with a reduced cooldown.

---

### Trade blocked -- "Blocked by another plugin"

**Cause:** Another plugin blocked the trade via the `CanTrade` hook.

**Solution:** Check which plugins use the `CanTrade` hook and configure them accordingly.

---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions about the Skip Night plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Frequently Asked Questions

### 1. How do I start a vote manually?

Use the command `sn.admin start_manually` (requires the `skipnight.admin` permission).

---

### 2. What is a full moon?

On full moon dates (configurable in the configuration), voting to skip the night is unavailable. The night proceeds normally.

---

### 3. Can I make voting cost money?

Yes. Set `"EnabledPay": true` and configure the cost (`"SkipCost"`). Economy plugins and items are supported.

---

### 4. How does accelerated night work?

On a successful vote, instead of completely skipping the night, it can be accelerated. The accelerated night duration is set by the `"LengthFastNight"` parameter.

---

### 5. Can I automatically skip every Nth night?

Yes. Set `"MissedNights"` to the desired value. For example, `2` means every 3rd night will be skipped automatically.

---

## Troubleshooting

### Voting does not appear

**Cause:** The current server time is not within the voting window (`TimeStart` -- `TimeEnd`), or `"Enable Voting System"` is disabled.

**Solution:** Check the time settings in the configuration. Make sure the voting system is enabled.

---

### Vote does not pass

**Cause:** Not enough votes (the percentage of online players was not reached).

**Solution:** Lower the threshold (`"Percent"`) or use a fixed count (`"UsePercent": false`, `"VotesCount": 3`).

---

### Interface is not displayed

**Cause:** The `"InitialDisplay"` parameter is disabled, or ImageLibrary is not installed.

**Solution:** Set `"InitialDisplay": true`. If using an icon, install ImageLibrary.

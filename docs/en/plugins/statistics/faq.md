---
title: "FAQ -- Statistics"
description: "Frequently asked questions about the Statistics plugin for Rust servers."
sidebar_position: 5
---

# Frequently Asked Questions (FAQ)

## 1. How do I reset all player statistics?

Enable the `"Automatic wipe on wipe": true` parameter for automatic reset on server wipe. Or manually delete the plugin's data files.

---

## 2. How do I disable bot kill counting?

Set in the configuration:
```json
"Count kills of bots": false,
"Count bot kills in kills?": false
```

---

## 3. How do I add a new weapon to tracking?

In the `"Weapons"` array, add the ShortName of the desired weapon:
```json
"Weapons": ["rifle.ak", "rifle.bolt", "smg.mp5", "shotgun.pump"]
```

---

## 4. Can I hide myself from the leaderboard?

Yes. The player needs the `statistics.hide` permission. Grant it:
```
oxide.grant user <steamid> statistics.hide
```

---

## 5. How do I configure points for various actions?

In the `"Score Table"` section, specify the number of points for each action. Use negative values for penalties:

```json
{
 "kills": 2,
 "deaths": -1,
 "helicopter": 20,
 "bradley": 15
}
```

---

## 6. How do I restrict access to statistics?

Enable the `"Access by permission (statistics.use)": true` parameter and grant the permission only to the desired groups:
```
oxide.grant group vip statistics.use
```

---

## 7. The interface does not open. What should I do?

Possible causes:
1. **ImageLibrary is not installed** -- install the plugin.
2. **No permission** -- grant `statistics.use`.
3. **Profile or Leaderboard is disabled** -- check the `"Enable a Profile?"` and `"Enable a Leaderboard?"` parameters.

---

## 8. How do I enable rewards for top positions?

1. Set `"Use Awards?": true`.
2. Configure rewards in the `"Awards"` section for each position.
3. Reload the plugin.

---

## 9. Are suicides counted as deaths?

By default, yes (`"Count suicide as death": true`). You can disable this by setting the value to `false`.

---

## 10. How do I view another player's profile?

If the `"Enable the ability to see another player's profile?"` option is enabled, use the command:
```
/stats <steamid>
```

If an additional permission is specified in `"Permission to view the other player's profile"`, it must be granted to the player.

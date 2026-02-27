---
title: "FAQ -- Genie"
description: "Frequently asked questions about the Genie plugin for Rust servers."
sidebar_position: 5
---

# Frequently Asked Questions (FAQ)

## 1. How do I create a new lamp type?

In the configuration, add a new object with a unique `"ID"` to the `"Genies"` array. Copy the structure of an existing lamp and modify the parameters:

```json
{
 "ID": "vip_lamp",
 "Enabled": true,
 "Permission": "genie.vip",
 "Lamp": {
 "DisplayName": "VIP Lamp",
 "ShortName": "xmas.present.small",
 "Skin": 2540200362
 },
 "Awards": [...]
}
```

---

## 2. How do I give a lamp to a player?

Use the console command:
```
genie.give <steamid> <genieId>
```

For example:
```
genie.give 76561198012345678 default
```

---

## 3. How do I configure reward drop chances?

Each reward has a `"Chance"` parameter from 0 to 100. The higher the value, the greater the drop chance:
- `70` -- high chance (70%)
- `50` -- medium chance (50%)
- `10` -- rare item (10%)
- `1` -- very rare item (1%)

---

## 4. Can lamps drop from containers?

Yes. Lamps can be configured to drop from loot containers via the `"Drop"` parameter in the configuration. This allows lamps to appear in crates, barrels, and other containers.

---

## 5. How do I restrict a lamp to VIP players only?

Specify a permission in the lamp settings:
```json
{
 "Permission": "genie.vip"
}
```

Then grant the permission:
```
oxide.grant group vip genie.vip
```

Players without this permission will not be able to use this lamp type.

---

## 6. The interface does not open when using a lamp. What should I do?

Possible causes:
1. **ImageLibrary is not installed** -- install the ImageLibrary plugin.
2. **The lamp is disabled** -- check that `"Enabled": true` in the configuration.
3. **Missing permission** -- if a Permission is specified, make sure the player has the corresponding permission.
4. **Incorrect skin** -- make sure the item skin matches the settings.

---

## 7. How do I change the lamp opening time?

Change the `"Delay"` parameter in the lamp settings. The value is specified in seconds:
- `3` -- fast opening
- `5` -- standard (default)
- `10` -- slow, more dramatic

---

## 8. Can I give commands as rewards?

Yes. Use the `"Command"` reward type:

```json
{
 "Type": "Command",
 "Command": "deposit %steamid% 500",
 "Amount": 1,
 "Image": "https://example.com/coin.png",
 "Title": "500 coins",
 "Chance": 30
}
```

---

## 9. How do I disable sound effects?

Set the effect parameters to empty strings:
```json
{
 "OpeningEffect": "",
 "ProgressEffect": "",
 "FinishEffect": ""
}
```

---

## 10. Lamps stack in inventory. How do I disable this?

In the lamp settings, set `"ControlStack": false`. By default, `"ControlStack": true`, which allows the plugin to control lamp stacking.

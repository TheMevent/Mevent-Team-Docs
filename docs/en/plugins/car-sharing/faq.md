---
title: "FAQ - Car Sharing"
description: "Frequently asked questions about the Car Sharing plugin"
sidebar_position: 5
---

# Frequently Asked Questions (FAQ)

## 1. What plugins are required for Car Sharing to work?

Required dependencies:
- **ImageLibrary** -- for loading and displaying images in the interface
- **SpawnModularCar** -- for creating modular cars

Optional plugins: Economics / ServerRewards / BankSystem (economy), Notify / UINotify (notifications), HumanNPC (NPC bots).

## 2. How do I change the commands for opening the menu?

Open the `oxide/config/CarSharing.json` file and modify the `Commands` array:
```json
"Commands": ["rent", "carsharing", "mycommand"]
```
After saving, reload the plugin with the command `oxide.reload CarSharing`.

## 3. How do I set up per-minute billing?

Each vehicle's settings include a `Cost per minute` parameter. Set the desired value. The plugin will automatically deduct the specified amount for each minute of rental. If the player runs out of funds, the rental ends.

## 4. How do I add a new vehicle?

Open the configuration and add a new object to the `Cars` array with the following settings:
- Specify the name, image, and class
- Set the rental cost per minute
- Define the car modules in the modular car settings section
- If needed, specify the access permission and give command

## 5. How do I link car sharing to an NPC?

1. Create an NPC bot using the **HumanNPC** plugin.
2. Note the bot's ID.
3. In the configuration, add the ID to the `Bots` section:
```json
"Bots": {
 "YOUR_NPC_ID": {
 "Car Classes (* - all)": ["Luxe", "Comfort"]
 }
}
```
When a player clicks the NPC, they will only see vehicles of the specified classes.

## 6. Can I use items instead of an economy plugin?

Yes. In the `Economy` section, change the type to `Item` and specify the item shortname. For example, to pay with scrap:
```json
"Economy": {
 "Type (Plugin/Item)": "Item",
 "ShortName": "scrap",
 "Skin": 0
}
```

## 7. How does the vehicle summon item work?

After renting, the player receives a special item in their inventory. This item has a configurable skin and name (e.g., "RUSTSharing Ferrari"). By using the item, the player summons the rented vehicle near themselves.

## 8. How do I set up a code lock on rented vehicles?

In the modular car settings, set the `CodeLock` parameter to `true`:
```json
"Modular Car Settings": {
 "CodeLock": true,
 "KeyLock": false
}
```
The lock code is generated automatically and will be known only to the renter.

## 9. The vehicle is not being created -- what should I do?

- Make sure the **SpawnModularCar** plugin is installed and loaded.
- Verify that the modules in the configuration are specified correctly (e.g., `vehicle.1mod.engine`).
- Check the server console for errors.

## 10. How do I change the engine parts quality level?

In the `Engine Parts Tier` parameter, specify a value from 1 to 3:
- `1` -- low quality parts
- `2` -- medium quality parts
- `3` -- high quality parts

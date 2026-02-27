---
title: "Car Sharing Installation"
description: "Step-by-step guide for installing and initially configuring the Car Sharing plugin"
sidebar_position: 2
---

# Car Sharing Installation

## System Requirements

- A Rust server with Oxide/uMod
- **ImageLibrary** plugin (required)
- **SpawnModularCar** plugin (required)
- One of the economy plugins (Economics, ServerRewards, BankSystem) or use of in-game items

## Step-by-Step Installation

### Step 1: Download and Install Dependencies

1. Install the **ImageLibrary** plugin into the `oxide/plugins` folder.
2. Install the **SpawnModularCar** plugin into the `oxide/plugins` folder.
3. (Optional) Install one of the economy plugins.
4. (Optional) Install **Notify** or **UINotify** for notifications.
5. (Optional) Install **HumanNPC** for NPC bots.

### Step 2: Install the Plugin

1. Download the `CarSharing.cs` file.
2. Place it in the `oxide/plugins` folder.
3. Restart the server or run the following console command:
 ```
 oxide.reload CarSharing
 ```

### Step 3: Initial Configuration

After the first launch, the plugin will create a configuration file:
```
oxide/config/CarSharing.json
```

Open it and configure:

1. **Commands** -- set chat commands for opening the menu (default: `rent`, `carsharing`).
2. **Economy** -- specify the currency type (plugin or item), plugin name, and hooks.
3. **Summon item** -- configure the item that the player receives to summon the rented vehicle.
4. **Cars** -- add vehicles with their name, image, cost, class, and module settings.
5. **NPC bots** -- link NPC bots to specific car classes.

### Step 4: Set Up Permissions

Assign permissions to players or groups via the console:

```
oxide.grant user <SteamID> <permission>
oxide.grant group <group> <permission>
```

### Step 5: Set Up NPCs (Optional)

1. Create an NPC bot using the **HumanNPC** plugin.
2. Copy its ID.
3. Add the bot's ID to the `Bots` section of the configuration, specifying the available car classes.

## Verifying the Installation

1. Join the server.
2. Type `/rent` in chat.
3. The car sharing menu should open with available vehicles.
4. Select a vehicle and click the rent button.
5. Verify that the cost is deducted and the vehicle appears.

## Updating the Plugin

When updating the plugin, simply replace the `CarSharing.cs` file in the `oxide/plugins` folder. The configuration will be preserved. If the new version introduces new parameters, they will be added automatically.

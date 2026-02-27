---
title: "Ultimate Cars"
description: "Custom vehicle system (jeeps) with Unity physics, wheel colliders, and driver controls."
version: "1.0.0"
tags: [rust, plugin, vehicles, cars, jeep, physics]
sidebar_position: 1
---

# Ultimate Cars

## What does this plugin do?

**Ultimate Cars** adds a custom vehicle system (jeeps) with realistic Unity physics to the server. Vehicles use Rigidbody and WheelCollider for movement simulation. Administrators can spawn jeeps via a chat command. The driver controls the vehicle using standard input keys (WASD), and the car supports acceleration, braking, steering, stabilization, and suspension physics.

## Key Features

- Custom vehicles based on Unity physics (Rigidbody + WheelCollider)
- Realistic controls: acceleration, braking, steering
- Configurable engine parameters (motor torque, brake torque)
- Configurable suspension (spring, damping, travel)
- Vehicle stabilization (anti-roll, anti-flip)
- Wheel collider configuration (positions, radius, friction)
- Driver seat with attachment point
- Configuration loaded from a JSON file

## Requirements

| Dependency | Required | Description |
|---|---|---|
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Copy the `UltimateCars.cs` file to the `oxide/plugins/` folder.
2. Create the configuration file `oxide/data/UltimateCars/JeepJP.json` with vehicle parameters.
3. Restart the server or run `oxide.reload UltimateCars`.
4. Use `/spawnjeep` to spawn a vehicle (administrators only).

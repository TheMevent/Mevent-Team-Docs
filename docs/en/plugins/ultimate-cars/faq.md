---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions about the Ultimate Cars plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Frequently Asked Questions

### 1. How do I spawn a vehicle?

Type `/spawnjeep` in chat. This command is only available to server administrators.

---

### 2. How do I drive the vehicle?

Sit in the driver seat (E) and use WASD to control it. W -- gas, S -- brake, A/D -- turn, Space -- handbrake.

---

### 3. Can I adjust the vehicle speed?

Yes. Change the `MotorTorque` (engine torque) and `MaxSpeed` (maximum speed) parameters in the configuration.

---

### 4. The vehicle keeps flipping over -- what should I do?

Lower the center of mass (`CenterOfMass.Y` -- use a negative value) and increase `AntiRollForce`. You can also increase `Mass` and suspension spring force.

---

## Troubleshooting

### Error "Config file not found"

**Cause:** The vehicle configuration file is missing.

**Solution:** Create the file `oxide/data/UltimateCars/JeepJP.json` with the vehicle parameters.

---

### Vehicle does not move

**Cause:** Incorrect engine parameters or none of the wheels are drive wheels.

**Solution:** Make sure at least some wheels have `"IsMotor": true`. Increase `MotorTorque`.

---

### Vehicle falls through the ground

**Cause:** Wheel radius is too small or mass is too high.

**Solution:** Increase the wheel `Radius` and suspension spring force (`SpringForce`).

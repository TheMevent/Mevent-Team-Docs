---
title: "Ultimate Cars Configuration"
description: "Complete reference for all configuration settings of the Ultimate Cars plugin."
sidebar_position: 4
---

# Ultimate Cars Configuration

The vehicle configuration file is located at:
```
oxide/data/UltimateCars/JeepJP.json
```

## Physics Parameters

| Parameter | Description |
|---|---|
| Mass | Vehicle mass (kg) |
| Drag | Linear drag (air resistance) |
| AngularDrag | Angular drag (rotation stabilization) |
| CenterOfMass | Center of mass (offset by X, Y, Z) |

:::tip Tip
For vehicle stability, it is recommended to lower the center of mass (`Y` < 0).
:::

## Engine Parameters

| Parameter | Description |
|---|---|
| MotorTorque | Engine torque (Nm) |
| BrakeTorque | Brake torque (Nm) |
| MaxSteerAngle | Maximum steering angle (degrees) |
| MaxSpeed | Maximum speed (m/s) |

## Wheel Colliders (WheelColliders)

An array of wheels with parameters for each:

| Parameter | Description |
|---|---|
| Position | Wheel position relative to center (X, Y, Z) |
| Radius | Wheel radius (meters) |
| SuspensionDistance | Suspension travel (meters) |
| SpringForce | Suspension spring force |
| DamperForce | Suspension damper force |
| ForwardFriction | Forward friction coefficient |
| SidewaysFriction | Sideways friction coefficient |
| IsSteering | Whether the wheel is a steering wheel |
| IsMotor | Whether the wheel is a drive wheel |

### Typical 4WD Configuration

```json
"WheelColliders": [
 {"Position": {"x": -0.8, "y": 0, "z": 1.2}, "IsSteering": true, "IsMotor": true},
 {"Position": {"x": 0.8, "y": 0, "z": 1.2}, "IsSteering": true, "IsMotor": true},
 {"Position": {"x": -0.8, "y": 0, "z": -1.2}, "IsSteering": false, "IsMotor": true},
 {"Position": {"x": 0.8, "y": 0, "z": -1.2}, "IsSteering": false, "IsMotor": true}
]
```

## Stabilization

| Parameter | Description |
|---|---|
| AntiRollForce | Anti-roll stabilization force |
| SteeringReturnSpeed | Steering wheel return speed to center |
| FlipRecoveryForce | Force to flip the vehicle back over |

// Device categories
export type DeviceCategory = 'actuator' | 'sensor' | 'controller';

// All possible device types in our fixed library
export type DeviceType =
  | 'smart-tv'
  | 'smart-ac'
  | 'smart-bulb'
  | 'motor'
  | 'speaker'
  | 'temp-sensor'
  | 'motion-sensor'
  | 'light-sensor'
  | 'button'
  | 'hub';

// The state a device can have
export type DeviceState = 'on' | 'off' | 'standby' | 'error';

// Base interface for all IoT devices on the canvas
export interface IoTDeviceData {
  id: string;
  type: DeviceType;
  category: DeviceCategory;
  label: string;
  state: DeviceState;
  powerDraw: number;
  properties: Record<string, number | string | boolean>;
  script: string;
  icon: string;
  color: string;
}

// For the library sidebar — defines what devices can be dragged onto the canvas
export interface DeviceTemplate {
  type: DeviceType;
  category: DeviceCategory;
  label: string;
  icon: string;
  color: string;
  defaultPowerDraw: number;
  defaultProperties: Record<string, number | string | boolean>;
  description: string;
}

// Simulation state
export interface SimulationState {
  isRunning: boolean;
  tickRate: number;
  elapsed: number;
  environment: {
    roomTemperature: number;
    ambientLight: number;
    motionDetected: boolean;
  };
}

// Console log entry
export interface ConsoleEntry {
  id: string;
  timestamp: number;
  level: 'info' | 'warn' | 'error' | 'output';
  deviceId: string | null;
  message: string;
}

import App from '../../app.js';
import moveSensorContact from '../../processes/sensorContacts.js';

export const SensorsQueries = {
  sensors(root, { simulatorId }) {
    return App.systems.filter(system => {
      return system.type === 'Sensors' && system.simulatorId === simulatorId;
    });
  },
  sensorContacts(root, { sensorsId }) {
    const sensors = App.systems.find(system => {
      return system.type === 'Sensors' && system.id === sensorsId;
    });
    return sensors ? sensors.contacts : [];
  },
};

export const SensorsMutations = {
  addSensorsArray(root, { simulatorId }) {
    App.handleEvent({ simulatorId }, 'addSensorsArray', 'addedSensorsArray');
    return '';
  },
  removeSensorsArray(root, { id }) {
    App.handleEvent({ id }, 'removeSensorsArray', 'removedSensorsArray');
    return '';
  },
  sensorScanRequest(root, { id, request }) {
    App.handleEvent({ id, request }, 'sensorScanRequest', 'sensorScanRequested');
    return '';
  },
  sensorScanResult(root, { id, result }) {
    App.handleEvent({ id, result }, 'sensorScanResult', 'sensorScanResulted');
    return '';
  },
  processedData(root, { id, data }) {
    App.handleEvent({ id, data }, 'processedData', 'processedDatad');
    return '';
  },
  sensorScanCancel(root, { id }) {
    App.handleEvent({ id }, 'sensorScanCancel', 'sensorScanCanceled');
    return '';
  },
  createSensorContact(root, { id, contact }) {
    App.handleEvent({ id, contact }, 'createSensorContact', 'createdSensorContact');
    return '';
  },
  moveSensorContact(root, { id, contact }) {
    App.handleEvent({ id, contact }, 'moveSensorContact', 'movedSensorContact');
    return '';
  },
  removeSensorContact(root, { id, contact }) {
    App.handleEvent({ id, contact }, 'removeSensorContact', 'removedSensorContact');
    return '';
  },
  destroySensorContact(root, { id, contact }) {
    App.handleEvent({ id, contact }, 'destroyeSensorContact', 'destroyedSensorContact');
    return '';
  },
  updateSensorContact(root, { id, contact }) {
    App.handleEvent({ id, contact }, 'updateSensorContact', 'updatedSensorContact');
    return '';
  },
  createSensorArmyContact(root, { id, contact }) {
    App.handleEvent({ id, contact }, 'createSensorArmyContact', 'createdSensorArmyContact');
    return '';
  },
  removeSensorArmyContact(root, { id, contact }) {
    App.handleEvent({ id, contact }, 'removeSensorArmyContact', 'removedSensorArmyContact');
    return '';
  },
  updateSensorArmyContact(root, { id, contact }) {
    App.handleEvent({ id, contact }, 'updateSensorArmyContact', 'updatedSensorArmyContact');
    return '';
  },
  animateSensorContacact() {
    moveSensorContact();
  },
};

export const SensorsSubscriptions = {
  sensorsUpdate(root) {
    return root;
  },
  sensorContactUpdate(root, { sensorId }) {
    return root.filter(contact => contact.sensorId === sensorId);
  },
};

function getAsset(assetKey, simulatorId) {
  let returnObj = App.assetObjects.find(obj => {
    return (obj.simulatorId === simulatorId && obj.fullPath === assetKey);
  });
  if (returnObj) {
    return returnObj.url;
  }
  returnObj = App.assetObjects.find(obj => {
    return (obj.simulatorId === 'default' && obj.fullPath === assetKey);
  });
  if (returnObj) {
    return returnObj.url;
  }
  return '';
}
export const SensorsTypes = {
  SensorContact: {
    iconUrl({ icon: assetKey, simulatorId }) {
      return getAsset(assetKey, simulatorId);
    },
    pictureUrl({ picture: assetKey, simulatorId }) {
      return getAsset(assetKey, simulatorId);
    },
  },
};

const fieldIds = [
  "serials",
  "identification",
  "assetTag",
  "assignToUser",
  "groups",
  "deviceName",
  "location",
];

export const elements = {
  serialsField: document.getElementById("serials"),
  identificationField: document.getElementById("identification"),
  assetTagField: document.getElementById("assetTag"),
  assignToUserField: document.getElementById("assignToUser"),
  groupsField: document.getElementById("groups"),
  deviceNameField: document.getElementById("deviceName"),
  locationField: document.getElementById("location"),
  preview: document.getElementById("csvPreview"),
  downloadButton: document.getElementById("downloadCsv"),
  copyButton: document.getElementById("copyCsv"),
};

export function onFieldInput(callback) {
  fieldIds
    .map((id) => document.getElementById(id))
    .filter(Boolean)
    .forEach((field) => field.addEventListener("input", callback));
}

export function getFieldValues() {
  return {
    identification: elements.identificationField.value.trim(),
    assetTag: elements.assetTagField.value.trim(),
    assignToUser: elements.assignToUserField.value.trim(),
    groups: elements.groupsField.value.trim(),
    deviceName: elements.deviceNameField.value.trim(),
    location: elements.locationField.value.trim(),
  };
}

export const CSV_HEADER = "SerialNumber;Identification;AssetTag;AssignToUser;MemberOfGroups;DeviceName;Location";

export function parseSerials(rawSerials) {
  if (!rawSerials) {
    return [];
  }

  return rawSerials
    .split(/\r?\n/)
    .map((serial) => serial.trim())
    .filter((serial) => serial.length >= 5);
}

export function formatIdentification(baseIdentification, index, total) {
  if (!baseIdentification) {
    return "";
  }

  if (total <= 1) {
    return baseIdentification;
  }

  return `${baseIdentification}${String(index + 1).padStart(3, "0")}`;
}

export function createCsvRows(serials, options) {
  const {
    identification = "",
    assetTag = "",
    assignToUser = "",
    groups = "",
    deviceName = "",
    location = "",
  } = options;

  return serials.map((serial, index) => [
    serial,
    formatIdentification(identification, index, serials.length),
    assetTag,
    assignToUser,
    groups,
    deviceName,
    location,
  ].join(";"));
}

export function buildCsv(serials, options) {
  if (serials.length === 0) {
    return "";
  }

  const rows = createCsvRows(serials, options);
  return [CSV_HEADER, ...rows].join("\r\n");
}

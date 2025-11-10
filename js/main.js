import { buildCsv, parseSerials } from "./csvGenerator.js";
import { copyCsvToClipboard, downloadCsvFile } from "./fileActions.js";
import { elements, getFieldValues, onFieldInput } from "./domElements.js";

const EMPTY_MESSAGE = "(Ingen data genererad ännu)";
let currentCsv = "";

function setButtonsEnabled(enabled) {
  elements.downloadButton.disabled = !enabled;
  elements.copyButton.disabled = !enabled;
}

function refreshPreview() {
  const serials = parseSerials(elements.serialsField.value.trim());
  const csv = buildCsv(serials, getFieldValues());

  currentCsv = csv;
  elements.preview.textContent = csv || EMPTY_MESSAGE;
  setButtonsEnabled(Boolean(csv));
}

async function handleCopy() {
  const success = await copyCsvToClipboard(currentCsv);

  if (success) {
    alert("CSV kopierad till urklipp!");
  } else {
    alert("Kunde inte kopiera till urklipp.");
  }
}

function handleDownload() {
  downloadCsvFile(currentCsv);
}

onFieldInput(refreshPreview);
refreshPreview();

elements.copyButton.addEventListener("click", handleCopy);
elements.downloadButton.addEventListener("click", handleDownload);

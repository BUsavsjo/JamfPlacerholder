export function downloadCsvFile(csvContent, filename = "jamf_import.csv") {
  if (!csvContent) {
    return;
  }

  const bom = "\uFEFF";
  const blob = new Blob([bom + csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function copyCsvToClipboard(csvContent) {
  if (!csvContent) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(csvContent);
    return true;
  } catch (error) {
    return false;
  }
}

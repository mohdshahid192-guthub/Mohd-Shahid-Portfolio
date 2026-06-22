import { useState } from "react";

export default function useDownload() {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(null);

  const downloadFile = async (src, filename = "download") => {
    if (!src) {
      setError("No source URL provided");
      return;
    }

    setDownloading(true);
    setError(null);

    try {
      // 1. Fetch the file data
      const response = await fetch(src);
      if (!response.ok) throw new Error("Network response was not ok");

      // 2. Convert the response to a Blob (Binary Large Object)
      const blob = await response.blob();

      // 3. Create a local URL pointing to that Blob object
      const blobUrl = window.URL.createObjectURL(blob);

      // 4. Create a temporary hidden anchor element to trigger the download
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      
      // Extract extension from src or default to nothing if not found
      const extension = src.split('.').pop().split(/[?#]/)[0];
      anchor.download = filename.includes(".") ? filename : `${filename}.${extension}`;

      // 5. Append to DOM, click it programmatically, then clean up
      document.body.appendChild(anchor);
      anchor.click();
      
      // Cleanup memory
      document.body.removeChild(anchor);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download failed:", err);
      setError(err.message || "Failed to download file");
    } finally {
      setDownloading(false);
    }
  };

  return { downloadFile, downloading, error };
}
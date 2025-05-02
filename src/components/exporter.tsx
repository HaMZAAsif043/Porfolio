import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter';
import * as THREE from 'three';


export const handleExportUSDZ = (groupRef) => {
    return new Promise((resolve, reject) => {
        try {
            // Clear cache
            THREE.Cache.clear();

            const exporter = new USDZExporter();

            exporter.parseAsync(groupRef.current)
                .then(async (usdz) => {
                    // Create a Blob from the USDZ data
                    const blob = new Blob([usdz], { type: "application/octet-stream" });

                    // Trigger the download of the USDZ file
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'model.usdz'; // Set the download file name
                    a.click(); // Trigger the download
                    URL.revokeObjectURL(url); // Clean up the URL object

                    console.log("USDZ file is ready for download!");

                    resolve('USDZ file exported and downloaded'); // You can resolve with any message
                })
                .catch((error) => {
                    reject("Error during USDZ export: " + error);
                });
        } catch (error) {
            reject("Error exporting USDZ: " + error);
        }
    });
};

// const convertBlobToBase64 = (blob) => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result);
//         reader.onerror = reject;
//         reader.readAsDataURL(blob);
//     });
// };


export const handleUploadToCloudinary = async (file, fileName) => {
    const formData = new FormData();
    formData.append("file", file); // Key must be "file"
    formData.append("upload_preset", "user_profile");
    console.log(file instanceof Blob); // Should be true
    console.log(file.type); // Should show "application/octet-stream"

    const cloudName = "drf2qiei6";
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`; // Use raw for binary files

    try {
        // if (!cloudName || !process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET) {
        //     throw new Error("Cloudinary environment variables are missing.");
        // }

        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (response.status === 413) {
            throw new Error("File size exceeds Cloudinary's upload limit.");
        }

        if (!response.ok) {
            throw new Error(`Upload failed: ${response.statusText}`);
        }

        const data = await response.json();

        // Generate a directly downloadable URL
        const downloadableUrl = `${data.secure_url}?fl_attachment&attachment=${encodeURIComponent(fileName)}`;
        console.log("Directly downloadable file URL:", downloadableUrl);
        return downloadableUrl;
    } catch (error) {
        console.error("Error uploading file:", error);
        return;
    }
};



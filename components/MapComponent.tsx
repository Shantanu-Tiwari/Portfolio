
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const map = L.map("map").setView([28.5355, 77.3947], 15);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; OpenStreetMap contributors',
            }).addTo(map);

            const icon = new L.Icon({
                iconUrl: "/marker-icon.png",
                iconSize: [40, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
            });

            L.marker([28.5355, 77.3947], { icon })
                .addTo(map)
                .bindPopup("<b>Greater Noida West</b><br>Uttar Pradesh, India.")
                .openPopup();
        }
    }, []);

    return <div id="map" className="w-full h-[400px]"></div>;
};

export default MapComponent;

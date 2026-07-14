const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

const universityLocations = {
    "uoa": { lat: 37.9691, lng: 23.7807, name: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών (Ζωγράφου)", zoom: 14 },
    "ntua": { lat: 37.9941, lng: 23.7321, name: "Οικονομικό Πανεπιστήμιο Αθηνών (ΑΣΟΕΕ)", zoom: 15 }, // Σημείωση: Το value "ntua" αντιστοιχεί στο ΟΠΑ βάσει του option σου
    "panteion": { lat: 37.9595, lng: 23.7194, name: "Πάντειο Πανεπιστήμιο", zoom: 15 },
    "aua": { lat: 37.9834, lng: 23.7038, name: "Γεωπονικό Πανεπιστήμιο Αθηνών", zoom: 15 },
    "hua": { lat: 37.9612, lng: 23.7083, name: "Χαροκόπειο Πανεπιστήμιο", zoom: 15 },
    "unipi": { lat: 37.9416, lng: 23.6530, name: "Πανεπιστήμιο Πειραιώς", zoom: 15 },
    "uniwa": { lat: 38.0025, lng: 23.6749, name: "Πανεπιστήμιο Δυτικής Αττικής", zoom: 14 },
    "asfa": { lat: 37.9621, lng: 23.6906, name: "Ανωτάτη Σχολή Καλών Τεχνών", zoom: 15 },

    "auth": { lat: 40.6322, lng: 22.9515, name: "Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης", zoom: 14 },
    "uom": { lat: 40.6251, lng: 22.9596, name: "Πανεπιστήμιο Μακεδονίας", zoom: 15 },
    "ihu": { lat: 40.6579, lng: 22.8016, name: "Διεθνές Πανεπιστήμιο της Ελλάδος (Σίνδος)", zoom: 14 },
    "duth": { lat: 41.1408, lng: 24.8980, name: "Δημοκρίτειο Πανεπιστήμιο Θράκης", zoom: 14 },
    "uowm": { lat: 40.3182, lng: 21.7946, name: "Πανεπιστήμιο Δυτικής Μακεδονίας (Κοζάνη)", zoom: 14 },

    "upatras": { lat: 38.2879, lng: 21.7874, name: "Πανεπιστήμιο Πατρών (Ρίο)", zoom: 14 },
    "uoi": { lat: 39.6191, lng: 20.8406, name: "Πανεπιστήμιο Ιωαννίνων", zoom: 14 },
    "uoc": { lat: 35.3175, lng: 25.0831, name: "Πανεπιστήμιο Κρήτης (Ηράκλειο)", zoom: 14 },
    "tuc": { lat: 35.5317, lng: 24.0682, name: "Πολυτεχνείο Κρήτης (Χανιά)", zoom: 14 },
    "uth": { lat: 39.3621, lng: 22.9439, name: "Πανεπιστήμιο Θεσσαλίας (Βόλος)", zoom: 14 },
    "aegean": { lat: 39.1092, lng: 26.5554, name: "Πανεπιστήμιο Αιγαίου (Μυτιλήνη)", zoom: 13 },
    "ionio": { lat: 39.6200, lng: 19.9200, name: "Ιόνιο Πανεπιστήμιο (Κέρκυρα)", zoom: 14 },
    "uop": { lat: 37.5100, lng: 22.3700, name: "Πανεπιστήμιο Πελοποννήσου (Τρίπολη)", zoom: 13 }
};

const userUniKey = currentUser.university ? currentUser.university.toLowerCase() : "upatras";
const selectedLocation = universityLocations[userUniKey] || universityLocations["upatras"];
const map = L.map('map').setView([selectedLocation.lat, selectedLocation.lng], selectedLocation.zoom);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const uniMarker = L.marker([selectedLocation.lat, selectedLocation.lng]).addTo(map);
uniMarker.bindPopup(`<b>${selectedLocation.name}</b><br>Το Πανεπιστήμιό σου!`).openPopup();
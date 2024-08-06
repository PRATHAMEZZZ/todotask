function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(new Error(error.message));
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}

const getLocation = async () => {
  try {
    const { latitude, longitude } = await getCurrentLocation();
    return { latitude, longitude };
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default getLocation;

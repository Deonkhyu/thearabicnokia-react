import React, { useEffect, useState } from "react";

interface SensorData {
  sensor: string;
  value: number | string;
  timestamp: string;
}

const IoTPage = () => {
  const [iotData, setIoTData] = useState<SensorData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIoTData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://127.0.0.1:5052/iot/data");
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data: SensorData[] = await response.json();
        setIoTData(data);
        setError(null);
      } catch (err: any) {
        setError("Failed to fetch IoT data. Please check the backend connection.");
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIoTData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">IoT Sensor Data</h1>
      {loading && <p>Loading IoT data...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Sensor</th>
              <th className="border border-gray-300 px-4 py-2">Value</th>
              <th className="border border-gray-300 px-4 py-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {iotData.map((data, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{data.sensor}</td>
                <td className="border border-gray-300 px-4 py-2">{data.value}</td>
                <td className="border border-gray-300 px-4 py-2">{data.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default IoTPage;
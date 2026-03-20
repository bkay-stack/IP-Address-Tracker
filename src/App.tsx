import { useState } from "react";
import "./index.css";
import IPMain from "./component/IPMain";
import IpInfoCard from "./component/IpInfoCard";

export type IPData = {
  ip: string;
  city: string;
  region: string;
  country_name: string;
  timezone: string;
  org: string;
  latitude: number;
  longitude: number;
};

function App(): React.JSX.Element {
  const [ipData, setIpData] = useState<IPData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <IPMain
        onDataFetched={setIpData}
        onLoading={setLoading}
        onError={setError}
      />
      <IpInfoCard data={ipData} loading={loading} error={error} />
    </div>
  );
}

export default App;

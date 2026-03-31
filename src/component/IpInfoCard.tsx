import type { IPData } from "../App";

type IpInfoCardProps = {
  data: IPData | null;
  loading: boolean;
  error: string | null;
};

const IpInfoCard = ({
  data,
  loading,
  error,
}: IpInfoCardProps): React.JSX.Element => {
  const location: string = data
    ? [data.city, data.region, data.country_name].filter(Boolean).join(", ")
    : "—";

  return (
    <section className="relative w-11/12 max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-white rounded-lg shadow-lg p-4 sm:p-6 mx-auto -mt-220 sm:-mt-10 md:-mt-230 z-10">
      {error ? (
        <p className="text-center text-red-500 text-sm">{error}</p>
      ) : (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div>
            <h2 className="text-center text-gray-400 uppercase">IP Address</h2>
            <span className="text-lg font-semibold text-gray-900">
              {loading ? "..." : (data?.ip ?? "—")}
            </span>
          </div>

          <div className="border-l border-gray-300 h-12 hidden md:block" />

          <div>
            <h2 className="text-center text-gray-400 uppercase">Location</h2>
            <span className="text-lg font-semibold text-gray-900">
              {loading ? "..." : location}
            </span>
          </div>

          <div className="border-l border-gray-300 h-12 hidden md:block" />

          <div>
            <h2 className="text-sm text-gray-400 uppercase">Timezone</h2>
            <span className="text-lg font-semibold text-gray-900">
              {loading ? "..." : (data?.timezone ?? "—")}
            </span>
          </div>

          <div className="border-l border-gray-300 h-12 hidden md:block" />

          <div>
            <h2 className="text-sm text-gray-400 uppercase">ISP</h2>
            <span className="text-lg font-semibold text-gray-900">
              {loading ? "..." : (data?.org ?? "—")}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default IpInfoCard;

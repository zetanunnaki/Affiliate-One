interface SpeedTestResult {
  location: string;
  download: string;
  upload: string;
  latency: string;
  retained: string;
}

interface SpeedTestResultsProps {
  provider: string;
  protocol: string;
  results: SpeedTestResult[];
  testDate?: string;
}

export default function SpeedTestResults({
  provider,
  protocol,
  results,
  testDate = "April 2026",
}: SpeedTestResultsProps) {
  return (
    <section className="my-8">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
        {provider} Speed Test Results
      </h3>
      <p className="text-xs text-zinc-500 mb-3">
        Protocol: {protocol} | Base: 1Gbps fiber | Tested: {testDate}
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-zinc-50 dark:bg-zinc-800">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Server</th>
              <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Download</th>
              <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Upload</th>
              <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Ping</th>
              <th className="px-3 py-2 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Speed Kept</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {results.map((r) => (
              <tr key={r.location}>
                <td className="px-3 py-2 font-medium text-zinc-900 dark:text-zinc-100">{r.location}</td>
                <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{r.download}</td>
                <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{r.upload}</td>
                <td className="px-3 py-2 text-center text-zinc-700 dark:text-zinc-300">{r.latency}</td>
                <td className="px-3 py-2 text-center">
                  <span className={`font-semibold ${
                    parseInt(r.retained) >= 80 ? "text-green-600 dark:text-green-400" :
                    parseInt(r.retained) >= 50 ? "text-yellow-600 dark:text-yellow-400" :
                    "text-red-600 dark:text-red-400"
                  }`}>{r.retained}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

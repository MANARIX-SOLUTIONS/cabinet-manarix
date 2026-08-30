import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { SHOW_XAALIS } from "./src/lib/constants";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const localePrefix = "/:locale(en)";

const servicePageRedirects: Array<[string, string]> = [
  ["fintech", "multi-rail"],
  ["audit", "payment-audit"],
  ["integration", "multi-rail"],
  ["reconciliation", "ledger"],
  ["retainer", "engineering-pro"],
  ["architect", "engineering-pro"],
  ["supervision", "engineering-care"],
  ["code-review", "api-audit"],
  ["architecture-workshop", "architecture-review"],
];

const serviceHubRedirects = [
  "advisory",
  "enterprise",
  "cloud",
  "diagnostic",
  "build",
] as const;

const workRedirects: Array<[string, string]> = [
  ["payment-platform", SHOW_XAALIS ? "/work/xaalis" : "/work"],
  ["operations-platform", "/work"],
  ["cloud-modernization", "/work"],
];

function localizedRedirect(source: string, destination: string) {
  return [
    { source, destination, permanent: true },
    {
      source: `${localePrefix}${source}`,
      destination: `/:locale${destination}`,
      permanent: true,
    },
  ];
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...servicePageRedirects.flatMap(([from, to]) =>
        localizedRedirect(`/services/${from}`, `/services/${to}`),
      ),
      ...serviceHubRedirects.flatMap((from) =>
        localizedRedirect(`/services/${from}`, "/services"),
      ),
      ...workRedirects.flatMap(([from, to]) =>
        localizedRedirect(`/work/${from}`, to),
      ),
    ];
  },
};

export default withNextIntl(nextConfig);

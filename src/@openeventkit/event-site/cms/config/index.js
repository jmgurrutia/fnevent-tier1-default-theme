import defaultConfig from "@openeventkit/event-site/src/cms/config";

const config = { ...defaultConfig };
// TODO: move to env var
config.backend.repo = "fntechgit/fnevent-tier1-default-theme";
config.local_backend = {
  url: "http://localhost:8081/api/v1"
};

export default config;
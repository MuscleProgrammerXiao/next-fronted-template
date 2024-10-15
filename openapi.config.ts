const { generateService } = require("@umijs/openapi");
//全局请求配置  2：00
generateService({
  requestLibPath: "import request from '@/libs/request'",
  schemaPath: "http://localhost:8101/api/v2/api-docs",
  serversPath: "./src",
});

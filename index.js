const core = require("@actions/core");
const path = require("path");
const envsub = require("envsub");
const dotenv = require("dotenv");

async function run() {
  try {
    const inFile = core.getInput("in-file");
    const outFile = core.getInput("out-file");
    const envFile = core.getInput("env-file");

    core.debug(`in file: ${inFile}`);
    core.debug(`out file: ${outFile}`);
    core.debug(`env file: ${envFile}`);

    if (envFile) {
      dotenv.config({ path: path.resolve(process.cwd(), envFile) });
    }

    envsub({
      outputFile: outFile,
      templateFile: inFile,
    });

    core.setOutput("out-file-created", "true");
  } catch (error) {
    core.setOutput("out-file-created", "false");
    core.setFailed(error.message);
  }
}

run();

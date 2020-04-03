const core = require("@actions/core");
const envsub = require("envsub");

async function run() {
  try {
    const inFile = core.getInput("in-file");
    const outFile = core.getInput("out-file");

    core.debug(`in file: ${inFile}`);
    core.debug(`out file: ${outFile}`);

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

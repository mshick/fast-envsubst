import * as core from '@actions/core'
import * as path from 'path'
import * as dotenv from 'dotenv'
import envsub from 'envsub'

const run = async (): Promise<void> => {
  try {
    const inFile = core.getInput('in-file')
    const outFile = core.getInput('out-file')
    const envFile = core.getInput('env-file')

    core.debug(`in file: ${inFile}`)
    core.debug(`out file: ${outFile}`)
    core.debug(`env file: ${envFile}`)

    if (envFile) {
      dotenv.config({path: path.resolve(process.cwd(), envFile)})
    }

    await envsub({
      outputFile: outFile,
      templateFile: inFile,
    })

    core.setOutput('out-file-created', 'true')
  } catch (error) {
    core.setOutput('out-file-created', 'false')
    core.setFailed(error.message)
  }
}

// Don't auto-execute in the test environment
if (process.env['NODE_ENV'] !== 'test') {
  run()
}

export default run

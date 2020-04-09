declare module 'envsub' {
  interface EnvsubArguments {
    templateFile: string
    outputFile: string
  }

  interface EnvsubResponse {
    templateFile: string
    templateContents: string
    outputFile: string
    outputContents: string
  }

  export default function (args: EnvsubArguments): Promise<EnvsubResponse>
}

export interface Info {
  address: string,
  name: string,
  license: string,
  proxy: string,
}

export type ContractInfoProps = {
  address: string,
  info: Info,
}

export type UseCaseProps = {
  functions: string[],
  setSelectCase: (caseName: string) => void,
}

export type SequenceGraphProps = {
  code: string,
  selectCase: string,
  setSelectCode: (codeName: string) => void,
}

export type CodeProps = {
  selectCode: string,
}
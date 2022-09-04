export interface Info {
  address: string,
  name: string,
  compiler: string,
}

export type ContractInfoProps = {
  address: string,
  info: Info,
}

export type UseCaseProps = {
  address: string,
  functions: string[],
}

export type SequenceGraphProps = {
  address: string
}

export type CodeProps = {
  address: string,
  code: string,
}
export enum PersistanceKeys {
    "STORE" = "STORE",
  }
  
  const get = <T>({
    key,
    defaultValue,
  }: {
    key: PersistanceKeys;
    defaultValue: T;
  }): T => {
    return defaultValue;
  };
  
  const set = ({
    key,
    value,
    session = false,
  }: {
    key: PersistanceKeys;
    value: unknown;
    session?: boolean;
  }) => {
  };
  
  export default {
    get,
    set,
  };
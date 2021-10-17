export type DynamicChild = JSX.Element | null | undefined;
export type DynamicChildren = DynamicChild | DynamicChild[];

export interface FirestoreSong {
  storagePath: string;
  attribution: string;
  title: string;
}

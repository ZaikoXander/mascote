import { ReactNode, Children } from 'react';

interface MapProps<T> {
  array: T[];
  render: (item: T, index: number) => ReactNode;
}

export default function Map<T>({ array, render }: MapProps<T>) {
  return Children.toArray(array.map((item, index) => render(item, index)));
}

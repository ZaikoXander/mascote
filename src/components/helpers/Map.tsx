import { Fragment } from 'react';

interface MapProps<T> {
  array: T[];
  render: (item: T, index: number) => React.ReactNode;
}

export default function Map<T,>({ array, render }: MapProps<T>) {
  return (
    <>
      {array.map((item, index) => (
        <Fragment key={index}>
          {render(item, index)}
        </Fragment>
      ))}
    </>
  );
};

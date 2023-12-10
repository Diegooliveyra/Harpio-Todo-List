export default function objectToParams<T>(params: T): string {
  const result = params
    ? Object.entries(params)
        .map((e) => e.join('='))
        .join('&')
    : '';

  return result;
}

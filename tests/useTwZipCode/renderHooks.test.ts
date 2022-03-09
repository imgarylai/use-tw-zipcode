import { renderHook } from '@testing-library/react-hooks';
import { useTwZipCode } from '../../src';

test('should return initial city, district and zipcode', () => {
  const { result } = renderHook(() => useTwZipCode());
  expect(result.current.city).toEqual('台北市');
  expect(result.current.district).toEqual('中正區');
  expect(result.current.zipCode).toEqual('100');
});

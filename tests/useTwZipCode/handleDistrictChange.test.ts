import { renderHook, act } from '@testing-library/react';
import { useTwZipCode } from '../../src';

test('should handle district change', async () => {
  const { result } = renderHook(() => useTwZipCode());
  act(() => {
    result.current.handleDistrictChange('大同區');
  });
  expect(result.current.city).toEqual('台北市');
  expect(result.current.district).toEqual('大同區');
  expect(result.current.zipCode).toEqual('103');
});

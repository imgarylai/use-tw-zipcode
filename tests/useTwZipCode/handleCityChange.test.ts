import { renderHook, act } from '@testing-library/react';
import { useTwZipCode } from '../../src';

test('should handle city change', async () => {
  const { result } = renderHook(() => useTwZipCode());
  act(() => {
    result.current.handleCityChange('基隆市');
  });
  // Wait for any state updates to complete
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
  expect(result.current.city).toEqual('基隆市');
  expect(result.current.district).toEqual('仁愛區');
  expect(result.current.zipCode).toEqual('200');
});

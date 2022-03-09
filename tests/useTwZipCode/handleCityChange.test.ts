import { act, renderHook } from '@testing-library/react-hooks';
import { useTwZipCode } from '../../src';

test('should handle city change', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useTwZipCode());
  act(() => {
    result.current.handleCityChange('基隆市');
  });
  await waitForNextUpdate();
  expect(result.current.city).toEqual('基隆市');
  expect(result.current.district).toEqual('仁愛區');
  expect(result.current.zipCode).toEqual('200');
});

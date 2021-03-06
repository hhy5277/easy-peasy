import { createTypedHooks, useActions, useStore, useDispatch } from '../index';

test('exports all hooks', () => {
  // act
  const typedHooks = createTypedHooks();

  // assert
  expect(typedHooks.useActions).toBe(useActions);
  expect(typedHooks.useStore).toBe(useStore);
  expect(typedHooks.useDispatch).toBe(useDispatch);
});

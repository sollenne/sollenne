import { ReverseOrderPipe } from './reverse-order.pipe';

describe('ReverseOrderPipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseOrderPipe();
    expect(pipe).toBeTruthy();
  });
});

import CircularBuffer, {
  BufferFullError,
  BufferEmptyError,
} from "../src/circular-buffer";

describe("CircularBuffer", () => {
  test("reading empty buffer should fail", () => {
    const buffer = new CircularBuffer(1);
    expect(() => buffer.read()).toThrow(BufferEmptyError);
  });

  test("can read an item just written", () => {
    const buffer = new CircularBuffer(1);
    buffer.write("1");
    expect(buffer.read()).toBe("1");
  });

  test("writing to full buffer should fail", () => {
    const buffer = new CircularBuffer(1);
    buffer.write("1");
    expect(() => buffer.write("2")).toThrow(BufferFullError);
  });

  test("clearing and reading buffer should fail", () => {
    const buffer = new CircularBuffer(1);
    buffer.clear();
    expect(() => buffer.read()).toThrow(BufferEmptyError);
  });

  test("overwriting buffer should work", () => {
    const buffer = new CircularBuffer(1);
    buffer.write("1");
    buffer.forceWrite("2");
    expect(buffer.read()).toBe("2");
  });
});

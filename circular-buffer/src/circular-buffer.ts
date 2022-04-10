// Following https://en.wikipedia.org/wiki/Circular_buffer

export default class CircularBuffer {
  array: any[];
  capacity: number; // Stores array size alternatively array.length could be used too.
  noItems: number; // The start and end indexes are not enough to tell buffer full or empty state so used counter
  start: number;
  end: number;

  constructor(capacity: number) {
    if (typeof capacity !== "number") {
      throw new Error("Capacity must a number");
    }
    this.array = new Array(capacity);
    this.capacity = capacity;
    this.start = 0;
    this.noItems = 0;
    this.end = 0;
  }

  write(elem: any) {
    if (this.end >= this.capacity) {
      throw new BufferFullError("Cannot write full buffer");
    }
    this.noItems++;
    this.array[this.end++] = elem;
  }

  read() {
    if (this.noItems > 0) {
      return this.array[this.start++];
    }
    throw new BufferEmptyError("Cannot read empty buffer");
  }

  forceWrite(elem: any) {
    if (this.end >= this.capacity) {
      this.end = 0;
    }
    this.noItems++;
    if (this.noItems > this.capacity) {
      this.noItems = this.capacity;
    }
    this.array[this.end++] = elem;
  }

  clear() {
    this.start = 0;
    this.end = 0;
    this.noItems = 0;
  }
}

export class BufferFullError extends Error {
  constructor(message) {
    super(message);
  }
}

export class BufferEmptyError extends Error {
  constructor(message) {
    super(message);
  }
}

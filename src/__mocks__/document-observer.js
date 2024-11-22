 
class Observer {
    observe = jest.fn();
    disconnect = jest.fn();
    unobserve = jest.fn();
  }
  
  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: Observer,
  });
  
  Object.defineProperty(global, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: Observer,
  });
  
  Object.defineProperty(window, "ResizeObserver", {
    writable: true,
    configurable: true,
    value: Observer,
  });
  
  Object.defineProperty(global, "ResizeObserver", {
    writable: true,
    configurable: true,
    value: Observer,
  });
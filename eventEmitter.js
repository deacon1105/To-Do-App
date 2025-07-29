export default class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, handler) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(handler);
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(handler => handler(data));
    }
  }

  off(eventName, handler) {
    if (!this.events[eventName]) return;
    this.events[eventName] = this.events[eventName].filter(h => h !== handler);
  }
}

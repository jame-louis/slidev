/**
 * Slidev 存储技术交互演示脚本
 * 支持 Monaco Editor 运行和实时演示
 */

// ===== 模拟 LocalStorage（隔离演示环境） =====
class DemoStorage {
  constructor(type = 'local') {
    this.type = type;
    this.data = new Map();
    this.listeners = [];
    
    // 模拟 window 对象
    this.mockWindow = {
      location: { 
        href: 'https://example.com/cart',
        search: '',
        origin: 'https://example.com',
        pathname: '/cart'
      }
    };
  }

  setItem(key, value) {
    this.data.set(key, String(value));
    this._trigger('storage', { key, newValue: value });
    console.log(`[${this.type}Storage] SET ${key}:`, value.substring(0, 50) + '...');
  }

  getItem(key) {
    return this.data.get(key) || null;
  }

  removeItem(key) {
    this.data.delete(key);
    this._trigger('storage', { key, newValue: null });
  }

  clear() {
    this.data.clear();
  }

  key(index) {
    return Array.from(this.data.keys())[index] || null;
  }

  get length() {
    return this.data.size;
  }

  // 监听模拟
  addEventListener(type, handler) {
    if (type === 'storage') this.listeners.push(handler);
  }

  _trigger(type, event) {
    if (type === 'storage') {
      this.listeners.forEach(h => h({
        key: event.key,
        oldValue: this.data.get(event.key),
        newValue: event.newValue,
        url: this.mockWindow.location.href
      }));
    }
  }
}

// 导出供 Monaco Editor 使用
if (typeof window !== 'undefined') {
  window.DemoStorage = DemoStorage;
  window.demoLocalStorage = new DemoStorage('local');
  window.demoSessionStorage = new DemoStorage('session');
}
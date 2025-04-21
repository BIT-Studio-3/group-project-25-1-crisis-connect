// clickOutside.js
export function clickOutside(node, callback) {
    const handleClick = event => {
      if (!node.contains(event.target)) {
        callback(); // You decide what to do
      }
    };
  
    document.addEventListener('click', handleClick, true);
  
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
  
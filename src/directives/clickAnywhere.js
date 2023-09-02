const instances = new Map();

function mounted(element, { value: handler }) {
    const eventHandler = event => handler(event, element);
    document.addEventListener('click', eventHandler, true);
    instances.set(
        element,
        eventHandler
    );
}
  
function unmounted(element) {
    const eventHandler = instances.get(element);
    document.removeEventListener('click', eventHandler, true);
    instances.delete(element);
}

const directive = {
    mounted,
    unmounted
};
  
export default directive;
  
function onClickOutside({ event, element, handler }) {
    const isClickOutside =
      event.target !== element
      && !element.contains(event.target);
    return isClickOutside ? handler(event, element) : null;
}

const instances = new Map();

function mounted(element, { value: handler }) {
    const eventHandler = event => onClickOutside({ element, event, handler });
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
  
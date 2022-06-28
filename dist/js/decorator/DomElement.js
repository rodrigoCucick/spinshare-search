export function domElement(selector) {
    return function (target, propertyKey) {
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}

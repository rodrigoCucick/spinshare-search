export function domElement(selector: string) {
    return function(target: any, propertyKey: string) {
        let element: HTMLElement;

        const getter = function() {
            if (!element) {
                element = document.querySelector(selector);
            }

            return element;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}
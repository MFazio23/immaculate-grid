declare global {
    interface Array<T> {
        any(predicate: (item: T) => boolean): boolean;

        all(predicate: (item: T) => boolean): boolean;

        count(predicate: (item: T) => boolean): number;
    }
}

Array.prototype.any = function (predicate: (item: unknown) => boolean) {
    return this.filter(predicate).length > 0;
}

Array.prototype.all = function (predicate: (item: unknown) => boolean) {
    return this.filter(predicate).length === this.length;
}

Array.prototype.count = function (predicate: (item: unknown) => boolean) {
    return this.filter(predicate).length;
}

export {};
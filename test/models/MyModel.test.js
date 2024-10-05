var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "vitest", "../../src/models/MyModel"], function (require, exports, vitest_1, MyModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MyModel_1 = __importDefault(MyModel_1);
    (0, vitest_1.describe)('MyModel', () => {
        (0, vitest_1.it)('should have default values', () => {
            const model = new MyModel_1.default();
            // Test default values
            (0, vitest_1.expect)(model.get('attributeName')).toBe('defaultValue');
        });
    });
});

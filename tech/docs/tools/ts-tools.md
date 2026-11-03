# Typescript tool 

- [ts-morph](https://github.com/dsherret/ts-morph):	Phân tích AST, symbol, imports, exports
- [dependency-cruiser](https://github.com/sverweij/dependency-cruiser):	Phân tích dependency và circular dependencies
- [Madge](https://www.npmjs.com/package/madge):	Visualize module dependencies
- [Knip](https://www.npmjs.com/package/knip):	Tìm unused files, exports, dependencies
- [ripgrep](https://www.npmjs.com/package/ripgrep):	Tìm kiếm source code nhanh


```json
{
    "scripts": {
        "gen:ts-openapi": "openapi-typescript https://api.example.com/swagger-json -o ./src/types/schema.d.ts --empty-objects-unknown  --root-types  --root-types-no-schema-prefix --make-paths-enum",
        "compress:images:png": "find ./assets -iname \\*.png -exec npx @343dev/optimizt {} +",
        "compress:images:jpg": "find ./assets -iname \\*.jpg -exec npx @343dev/optimizt {} +",
        "knip:check": "knip src --cache",
        "circular:check": "npx madge --ts-config ./tsconfig.json --circular --extensions ts,tsx,js,jsx src/",

    }
}
```

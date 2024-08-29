# b站动态复刻

## 项目目的

本项目以学习·`React·`, `Elecron` 和`puppeter`为主, 使用上述三个技术,动态爬取b站首页的内容, 进行复现.

## 项目结构

```plain
bilibili-dynamic-copy
├─ 📁backend
│  ├─ 📁config
│  │  └─ 📄db.js
│  ├─ 📁crawlers
│  │  ├─ 📄carouselCrawler.js
│  │  ├─ 📄dataCrawler.js
│  │  ├─ 📄downloadImage.js
│  │  └─ 📄videoCardsCrawler.js
│  └─ 📁services
│     └─ 📄dataService.js
├─ 📁frontend
│  ├─ 📁node_modules
│  │  ├─ 📁.bin
│  │  │  ├─ 📄eslint
│  │  │  ├─ 📄eslint.CMD
│  │  │  ├─ 📄eslint.ps1
│  │  │  ├─ 📄tsc
│  │  │  ├─ 📄tsc.CMD
│  │  │  ├─ 📄tsc.ps1
│  │  │  ├─ 📄tsserver
│  │  │  ├─ 📄tsserver.CMD
│  │  │  ├─ 📄tsserver.ps1
│  │  │  ├─ 📄vite
│  │  │  ├─ 📄vite.CMD
│  │  │  └─ 📄vite.ps1
│  │  ├─ 📁.pnpm
│  │  │  ├─ 📁@esbuild+win32-x64@0.21.5
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@esbuild
│  │  │  │        └─ 📁win32-x64
│  │  │  │           ├─ 📄esbuild.exe
│  │  │  │           ├─ 📄package.json
│  │  │  │           └─ 📄README.md
│  │  │  ├─ 📁@eslint+config-array@0.17.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@eslint
│  │  │  │     │  ├─ 📁config-array
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁cjs
│  │  │  │     │  │  │  │  ├─ 📄index.cjs
│  │  │  │     │  │  │  │  ├─ 📄index.d.cts
│  │  │  │     │  │  │  │  └─ 📄types.ts
│  │  │  │     │  │  │  └─ 📁esm
│  │  │  │     │  │  │     ├─ 📄index.d.ts
│  │  │  │     │  │  │     ├─ 📄index.js
│  │  │  │     │  │  │     ├─ 📄types.d.ts
│  │  │  │     │  │  │     └─ 📄types.ts
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁object-schema
│  │  │  │     │     ├─ 📁dist
│  │  │  │     │     │  ├─ 📁cjs
│  │  │  │     │     │  │  ├─ 📄index.cjs
│  │  │  │     │     │  │  ├─ 📄index.d.cts
│  │  │  │     │     │  │  └─ 📄types.ts
│  │  │  │     │     │  └─ 📁esm
│  │  │  │     │     │     ├─ 📄index.d.ts
│  │  │  │     │     │     ├─ 📄index.js
│  │  │  │     │     │     ├─ 📄types.d.ts
│  │  │  │     │     │     └─ 📄types.ts
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁debug
│  │  │  │     │  ├─ 📁src
│  │  │  │     │  │  ├─ 📄browser.js
│  │  │  │     │  │  ├─ 📄common.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄node.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁minimatch
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄minimatch.js
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁@eslint+eslintrc@3.1.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@eslint
│  │  │  │     │  └─ 📁eslintrc
│  │  │  │     │     ├─ 📁conf
│  │  │  │     │     │  ├─ 📄config-schema.js
│  │  │  │     │     │  └─ 📄environments.js
│  │  │  │     │     ├─ 📁dist
│  │  │  │     │     │  ├─ 📄eslintrc-universal.cjs
│  │  │  │     │     │  ├─ 📄eslintrc-universal.cjs.map
│  │  │  │     │     │  ├─ 📄eslintrc.cjs
│  │  │  │     │     │  └─ 📄eslintrc.cjs.map
│  │  │  │     │     ├─ 📁lib
│  │  │  │     │     │  ├─ 📁config-array
│  │  │  │     │     │  │  ├─ 📄config-array.js
│  │  │  │     │     │  │  ├─ 📄config-dependency.js
│  │  │  │     │     │  │  ├─ 📄extracted-config.js
│  │  │  │     │     │  │  ├─ 📄ignore-pattern.js
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  └─ 📄override-tester.js
│  │  │  │     │     │  ├─ 📁shared
│  │  │  │     │     │  │  ├─ 📄ajv.js
│  │  │  │     │     │  │  ├─ 📄config-ops.js
│  │  │  │     │     │  │  ├─ 📄config-validator.js
│  │  │  │     │     │  │  ├─ 📄deprecation-warnings.js
│  │  │  │     │     │  │  ├─ 📄naming.js
│  │  │  │     │     │  │  ├─ 📄relative-module-resolver.js
│  │  │  │     │     │  │  └─ 📄types.js
│  │  │  │     │     │  ├─ 📄cascading-config-array-factory.js
│  │  │  │     │     │  ├─ 📄config-array-factory.js
│  │  │  │     │     │  ├─ 📄flat-compat.js
│  │  │  │     │     │  ├─ 📄index-universal.js
│  │  │  │     │     │  └─ 📄index.js
│  │  │  │     │     ├─ 📁node_modules
│  │  │  │     │     │  └─ 📁.bin
│  │  │  │     │     │     ├─ 📄js-yaml
│  │  │  │     │     │     ├─ 📄js-yaml.CMD
│  │  │  │     │     │     └─ 📄js-yaml.ps1
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     ├─ 📄README.md
│  │  │  │     │     └─ 📄universal.js
│  │  │  │     ├─ 📁ajv
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  ├─ 📄ajv.bundle.js
│  │  │  │     │  │  ├─ 📄ajv.min.js
│  │  │  │     │  │  └─ 📄ajv.min.js.map
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📁compile
│  │  │  │     │  │  │  ├─ 📄async.js
│  │  │  │     │  │  │  ├─ 📄equal.js
│  │  │  │     │  │  │  ├─ 📄error_classes.js
│  │  │  │     │  │  │  ├─ 📄formats.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄resolve.js
│  │  │  │     │  │  │  ├─ 📄rules.js
│  │  │  │     │  │  │  ├─ 📄schema_obj.js
│  │  │  │     │  │  │  ├─ 📄ucs2length.js
│  │  │  │     │  │  │  └─ 📄util.js
│  │  │  │     │  │  ├─ 📁dot
│  │  │  │     │  │  │  ├─ 📄allOf.jst
│  │  │  │     │  │  │  ├─ 📄anyOf.jst
│  │  │  │     │  │  │  ├─ 📄coerce.def
│  │  │  │     │  │  │  ├─ 📄comment.jst
│  │  │  │     │  │  │  ├─ 📄const.jst
│  │  │  │     │  │  │  ├─ 📄contains.jst
│  │  │  │     │  │  │  ├─ 📄custom.jst
│  │  │  │     │  │  │  ├─ 📄defaults.def
│  │  │  │     │  │  │  ├─ 📄definitions.def
│  │  │  │     │  │  │  ├─ 📄dependencies.jst
│  │  │  │     │  │  │  ├─ 📄enum.jst
│  │  │  │     │  │  │  ├─ 📄errors.def
│  │  │  │     │  │  │  ├─ 📄format.jst
│  │  │  │     │  │  │  ├─ 📄if.jst
│  │  │  │     │  │  │  ├─ 📄items.jst
│  │  │  │     │  │  │  ├─ 📄missing.def
│  │  │  │     │  │  │  ├─ 📄multipleOf.jst
│  │  │  │     │  │  │  ├─ 📄not.jst
│  │  │  │     │  │  │  ├─ 📄oneOf.jst
│  │  │  │     │  │  │  ├─ 📄pattern.jst
│  │  │  │     │  │  │  ├─ 📄properties.jst
│  │  │  │     │  │  │  ├─ 📄propertyNames.jst
│  │  │  │     │  │  │  ├─ 📄ref.jst
│  │  │  │     │  │  │  ├─ 📄required.jst
│  │  │  │     │  │  │  ├─ 📄uniqueItems.jst
│  │  │  │     │  │  │  ├─ 📄validate.jst
│  │  │  │     │  │  │  ├─ 📄_limit.jst
│  │  │  │     │  │  │  ├─ 📄_limitItems.jst
│  │  │  │     │  │  │  ├─ 📄_limitLength.jst
│  │  │  │     │  │  │  └─ 📄_limitProperties.jst
│  │  │  │     │  │  ├─ 📁dotjs
│  │  │  │     │  │  │  ├─ 📄allOf.js
│  │  │  │     │  │  │  ├─ 📄anyOf.js
│  │  │  │     │  │  │  ├─ 📄comment.js
│  │  │  │     │  │  │  ├─ 📄const.js
│  │  │  │     │  │  │  ├─ 📄contains.js
│  │  │  │     │  │  │  ├─ 📄custom.js
│  │  │  │     │  │  │  ├─ 📄dependencies.js
│  │  │  │     │  │  │  ├─ 📄enum.js
│  │  │  │     │  │  │  ├─ 📄format.js
│  │  │  │     │  │  │  ├─ 📄if.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄items.js
│  │  │  │     │  │  │  ├─ 📄multipleOf.js
│  │  │  │     │  │  │  ├─ 📄not.js
│  │  │  │     │  │  │  ├─ 📄oneOf.js
│  │  │  │     │  │  │  ├─ 📄pattern.js
│  │  │  │     │  │  │  ├─ 📄properties.js
│  │  │  │     │  │  │  ├─ 📄propertyNames.js
│  │  │  │     │  │  │  ├─ 📄README.md
│  │  │  │     │  │  │  ├─ 📄ref.js
│  │  │  │     │  │  │  ├─ 📄required.js
│  │  │  │     │  │  │  ├─ 📄uniqueItems.js
│  │  │  │     │  │  │  ├─ 📄validate.js
│  │  │  │     │  │  │  ├─ 📄_limit.js
│  │  │  │     │  │  │  ├─ 📄_limitItems.js
│  │  │  │     │  │  │  ├─ 📄_limitLength.js
│  │  │  │     │  │  │  └─ 📄_limitProperties.js
│  │  │  │     │  │  ├─ 📁refs
│  │  │  │     │  │  │  ├─ 📄data.json
│  │  │  │     │  │  │  ├─ 📄json-schema-draft-04.json
│  │  │  │     │  │  │  ├─ 📄json-schema-draft-06.json
│  │  │  │     │  │  │  ├─ 📄json-schema-draft-07.json
│  │  │  │     │  │  │  └─ 📄json-schema-secure.json
│  │  │  │     │  │  ├─ 📄ajv.d.ts
│  │  │  │     │  │  ├─ 📄ajv.js
│  │  │  │     │  │  ├─ 📄cache.js
│  │  │  │     │  │  ├─ 📄data.js
│  │  │  │     │  │  ├─ 📄definition_schema.js
│  │  │  │     │  │  └─ 📄keyword.js
│  │  │  │     │  ├─ 📁scripts
│  │  │  │     │  │  ├─ 📄.eslintrc.yml
│  │  │  │     │  │  ├─ 📄bundle.js
│  │  │  │     │  │  ├─ 📄compile-dots.js
│  │  │  │     │  │  ├─ 📄info
│  │  │  │     │  │  ├─ 📄prepare-tests
│  │  │  │     │  │  ├─ 📄publish-built-version
│  │  │  │     │  │  └─ 📄travis-gh-pages
│  │  │  │     │  ├─ 📄.tonic_example.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁debug
│  │  │  │     │  ├─ 📁src
│  │  │  │     │  │  ├─ 📄browser.js
│  │  │  │     │  │  ├─ 📄common.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄node.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁espree
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  └─ 📄espree.cjs
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄espree.js
│  │  │  │     │  │  ├─ 📄features.js
│  │  │  │     │  │  ├─ 📄options.js
│  │  │  │     │  │  ├─ 📄token-translator.js
│  │  │  │     │  │  └─ 📄version.js
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄acorn
│  │  │  │     │  │     ├─ 📄acorn.CMD
│  │  │  │     │  │     └─ 📄acorn.ps1
│  │  │  │     │  ├─ 📄espree.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁globals
│  │  │  │     │  ├─ 📄globals.json
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     ├─ 📁ignore
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄legacy.js
│  │  │  │     │  ├─ 📄LICENSE-MIT
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁import-fresh
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     ├─ 📁js-yaml
│  │  │  │     │  ├─ 📁bin
│  │  │  │     │  │  └─ 📄js-yaml.js
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  ├─ 📄js-yaml.js
│  │  │  │     │  │  ├─ 📄js-yaml.min.js
│  │  │  │     │  │  └─ 📄js-yaml.mjs
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📁schema
│  │  │  │     │  │  │  ├─ 📄core.js
│  │  │  │     │  │  │  ├─ 📄default.js
│  │  │  │     │  │  │  ├─ 📄failsafe.js
│  │  │  │     │  │  │  └─ 📄json.js
│  │  │  │     │  │  ├─ 📁type
│  │  │  │     │  │  │  ├─ 📄binary.js
│  │  │  │     │  │  │  ├─ 📄bool.js
│  │  │  │     │  │  │  ├─ 📄float.js
│  │  │  │     │  │  │  ├─ 📄int.js
│  │  │  │     │  │  │  ├─ 📄map.js
│  │  │  │     │  │  │  ├─ 📄merge.js
│  │  │  │     │  │  │  ├─ 📄null.js
│  │  │  │     │  │  │  ├─ 📄omap.js
│  │  │  │     │  │  │  ├─ 📄pairs.js
│  │  │  │     │  │  │  ├─ 📄seq.js
│  │  │  │     │  │  │  ├─ 📄set.js
│  │  │  │     │  │  │  ├─ 📄str.js
│  │  │  │     │  │  │  └─ 📄timestamp.js
│  │  │  │     │  │  ├─ 📄common.js
│  │  │  │     │  │  ├─ 📄dumper.js
│  │  │  │     │  │  ├─ 📄exception.js
│  │  │  │     │  │  ├─ 📄loader.js
│  │  │  │     │  │  ├─ 📄schema.js
│  │  │  │     │  │  ├─ 📄snippet.js
│  │  │  │     │  │  └─ 📄type.js
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁minimatch
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄minimatch.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁strip-json-comments
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁@eslint+js@9.9.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@eslint
│  │  │  │        └─ 📁js
│  │  │  │           ├─ 📁src
│  │  │  │           │  ├─ 📁configs
│  │  │  │           │  │  ├─ 📄eslint-all.js
│  │  │  │           │  │  └─ 📄eslint-recommended.js
│  │  │  │           │  └─ 📄index.js
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           └─ 📄README.md
│  │  │  ├─ 📁@eslint+object-schema@2.1.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@eslint
│  │  │  │        └─ 📁object-schema
│  │  │  │           ├─ 📁dist
│  │  │  │           │  ├─ 📁cjs
│  │  │  │           │  │  ├─ 📄index.cjs
│  │  │  │           │  │  ├─ 📄index.d.cts
│  │  │  │           │  │  └─ 📄types.ts
│  │  │  │           │  └─ 📁esm
│  │  │  │           │     ├─ 📄index.d.ts
│  │  │  │           │     ├─ 📄index.js
│  │  │  │           │     ├─ 📄types.d.ts
│  │  │  │           │     └─ 📄types.ts
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           └─ 📄README.md
│  │  │  ├─ 📁@eslint-community+eslint-utils@4.4.0_eslint@9.9.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@eslint-community
│  │  │  │     │  └─ 📁eslint-utils
│  │  │  │     │     ├─ 📁node_modules
│  │  │  │     │     │  └─ 📁.bin
│  │  │  │     │     │     ├─ 📄eslint
│  │  │  │     │     │     ├─ 📄eslint.CMD
│  │  │  │     │     │     └─ 📄eslint.ps1
│  │  │  │     │     ├─ 📄index.js
│  │  │  │     │     ├─ 📄index.js.map
│  │  │  │     │     ├─ 📄index.mjs
│  │  │  │     │     ├─ 📄index.mjs.map
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁eslint
│  │  │  │     │  ├─ 📁bin
│  │  │  │     │  │  └─ 📄eslint.js
│  │  │  │     │  ├─ 📁conf
│  │  │  │     │  │  ├─ 📄default-cli-options.js
│  │  │  │     │  │  ├─ 📄ecma-version.js
│  │  │  │     │  │  ├─ 📄globals.js
│  │  │  │     │  │  ├─ 📄replacements.json
│  │  │  │     │  │  └─ 📄rule-type-list.json
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📁cli-engine
│  │  │  │     │  │  │  ├─ 📁formatters
│  │  │  │     │  │  │  │  ├─ 📄formatters-meta.json
│  │  │  │     │  │  │  │  ├─ 📄html.js
│  │  │  │     │  │  │  │  ├─ 📄json-with-metadata.js
│  │  │  │     │  │  │  │  ├─ 📄json.js
│  │  │  │     │  │  │  │  └─ 📄stylish.js
│  │  │  │     │  │  │  ├─ 📄cli-engine.js
│  │  │  │     │  │  │  ├─ 📄file-enumerator.js
│  │  │  │     │  │  │  ├─ 📄hash.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄lint-result-cache.js
│  │  │  │     │  │  │  └─ 📄load-rules.js
│  │  │  │     │  │  ├─ 📁config
│  │  │  │     │  │  │  ├─ 📄default-config.js
│  │  │  │     │  │  │  ├─ 📄flat-config-array.js
│  │  │  │     │  │  │  ├─ 📄flat-config-helpers.js
│  │  │  │     │  │  │  ├─ 📄flat-config-schema.js
│  │  │  │     │  │  │  └─ 📄rule-validator.js
│  │  │  │     │  │  ├─ 📁eslint
│  │  │  │     │  │  │  ├─ 📄eslint-helpers.js
│  │  │  │     │  │  │  ├─ 📄eslint.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄legacy-eslint.js
│  │  │  │     │  │  ├─ 📁languages
│  │  │  │     │  │  │  └─ 📁js
│  │  │  │     │  │  │     ├─ 📁source-code
│  │  │  │     │  │  │     │  ├─ 📁token-store
│  │  │  │     │  │  │     │  │  ├─ 📄backward-token-comment-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄backward-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄cursors.js
│  │  │  │     │  │  │     │  │  ├─ 📄decorative-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄filter-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄forward-token-comment-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄forward-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  │     │  │  ├─ 📄limit-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄padded-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄skip-cursor.js
│  │  │  │     │  │  │     │  │  └─ 📄utils.js
│  │  │  │     │  │  │     │  ├─ 📄index.js
│  │  │  │     │  │  │     │  └─ 📄source-code.js
│  │  │  │     │  │  │     ├─ 📄index.js
│  │  │  │     │  │  │     └─ 📄validate-language-options.js
│  │  │  │     │  │  ├─ 📁linter
│  │  │  │     │  │  │  ├─ 📁code-path-analysis
│  │  │  │     │  │  │  │  ├─ 📄code-path-analyzer.js
│  │  │  │     │  │  │  │  ├─ 📄code-path-segment.js
│  │  │  │     │  │  │  │  ├─ 📄code-path-state.js
│  │  │  │     │  │  │  │  ├─ 📄code-path.js
│  │  │  │     │  │  │  │  ├─ 📄debug-helpers.js
│  │  │  │     │  │  │  │  ├─ 📄fork-context.js
│  │  │  │     │  │  │  │  └─ 📄id-generator.js
│  │  │  │     │  │  │  ├─ 📄apply-disable-directives.js
│  │  │  │     │  │  │  ├─ 📄config-comment-parser.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄interpolate.js
│  │  │  │     │  │  │  ├─ 📄linter.js
│  │  │  │     │  │  │  ├─ 📄node-event-generator.js
│  │  │  │     │  │  │  ├─ 📄report-translator.js
│  │  │  │     │  │  │  ├─ 📄rule-fixer.js
│  │  │  │     │  │  │  ├─ 📄rules.js
│  │  │  │     │  │  │  ├─ 📄safe-emitter.js
│  │  │  │     │  │  │  ├─ 📄source-code-fixer.js
│  │  │  │     │  │  │  ├─ 📄timing.js
│  │  │  │     │  │  │  └─ 📄vfile.js
│  │  │  │     │  │  ├─ 📁rule-tester
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄rule-tester.js
│  │  │  │     │  │  ├─ 📁rules
│  │  │  │     │  │  │  ├─ 📁utils
│  │  │  │     │  │  │  │  ├─ 📁unicode
│  │  │  │     │  │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-combining-character.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-emoji-modifier.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-regional-indicator-symbol.js
│  │  │  │     │  │  │  │  │  └─ 📄is-surrogate-pair.js
│  │  │  │     │  │  │  │  ├─ 📄ast-utils.js
│  │  │  │     │  │  │  │  ├─ 📄char-source.js
│  │  │  │     │  │  │  │  ├─ 📄fix-tracker.js
│  │  │  │     │  │  │  │  ├─ 📄keywords.js
│  │  │  │     │  │  │  │  ├─ 📄lazy-loading-rule-map.js
│  │  │  │     │  │  │  │  └─ 📄regular-expressions.js
│  │  │  │     │  │  │  ├─ 📄accessor-pairs.js
│  │  │  │     │  │  │  ├─ 📄array-bracket-newline.js
│  │  │  │     │  │  │  ├─ 📄array-bracket-spacing.js
│  │  │  │     │  │  │  ├─ 📄array-callback-return.js
│  │  │  │     │  │  │  ├─ 📄array-element-newline.js
│  │  │  │     │  │  │  ├─ 📄arrow-body-style.js
│  │  │  │     │  │  │  ├─ 📄arrow-parens.js
│  │  │  │     │  │  │  ├─ 📄arrow-spacing.js
│  │  │  │     │  │  │  ├─ 📄block-scoped-var.js
│  │  │  │     │  │  │  ├─ 📄block-spacing.js
│  │  │  │     │  │  │  ├─ 📄brace-style.js
│  │  │  │     │  │  │  ├─ 📄callback-return.js
│  │  │  │     │  │  │  ├─ 📄camelcase.js
│  │  │  │     │  │  │  ├─ 📄capitalized-comments.js
│  │  │  │     │  │  │  ├─ 📄class-methods-use-this.js
│  │  │  │     │  │  │  ├─ 📄comma-dangle.js
│  │  │  │     │  │  │  ├─ 📄comma-spacing.js
│  │  │  │     │  │  │  ├─ 📄comma-style.js
│  │  │  │     │  │  │  ├─ 📄complexity.js
│  │  │  │     │  │  │  ├─ 📄computed-property-spacing.js
│  │  │  │     │  │  │  ├─ 📄consistent-return.js
│  │  │  │     │  │  │  ├─ 📄consistent-this.js
│  │  │  │     │  │  │  ├─ 📄constructor-super.js
│  │  │  │     │  │  │  ├─ 📄curly.js
│  │  │  │     │  │  │  ├─ 📄default-case-last.js
│  │  │  │     │  │  │  ├─ 📄default-case.js
│  │  │  │     │  │  │  ├─ 📄default-param-last.js
│  │  │  │     │  │  │  ├─ 📄dot-location.js
│  │  │  │     │  │  │  ├─ 📄dot-notation.js
│  │  │  │     │  │  │  ├─ 📄eol-last.js
│  │  │  │     │  │  │  ├─ 📄eqeqeq.js
│  │  │  │     │  │  │  ├─ 📄for-direction.js
│  │  │  │     │  │  │  ├─ 📄func-call-spacing.js
│  │  │  │     │  │  │  ├─ 📄func-name-matching.js
│  │  │  │     │  │  │  ├─ 📄func-names.js
│  │  │  │     │  │  │  ├─ 📄func-style.js
│  │  │  │     │  │  │  ├─ 📄function-call-argument-newline.js
│  │  │  │     │  │  │  ├─ 📄function-paren-newline.js
│  │  │  │     │  │  │  ├─ 📄generator-star-spacing.js
│  │  │  │     │  │  │  ├─ 📄getter-return.js
│  │  │  │     │  │  │  ├─ 📄global-require.js
│  │  │  │     │  │  │  ├─ 📄grouped-accessor-pairs.js
│  │  │  │     │  │  │  ├─ 📄guard-for-in.js
│  │  │  │     │  │  │  ├─ 📄handle-callback-err.js
│  │  │  │     │  │  │  ├─ 📄id-blacklist.js
│  │  │  │     │  │  │  ├─ 📄id-denylist.js
│  │  │  │     │  │  │  ├─ 📄id-length.js
│  │  │  │     │  │  │  ├─ 📄id-match.js
│  │  │  │     │  │  │  ├─ 📄implicit-arrow-linebreak.js
│  │  │  │     │  │  │  ├─ 📄indent-legacy.js
│  │  │  │     │  │  │  ├─ 📄indent.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄init-declarations.js
│  │  │  │     │  │  │  ├─ 📄jsx-quotes.js
│  │  │  │     │  │  │  ├─ 📄key-spacing.js
│  │  │  │     │  │  │  ├─ 📄keyword-spacing.js
│  │  │  │     │  │  │  ├─ 📄line-comment-position.js
│  │  │  │     │  │  │  ├─ 📄linebreak-style.js
│  │  │  │     │  │  │  ├─ 📄lines-around-comment.js
│  │  │  │     │  │  │  ├─ 📄lines-around-directive.js
│  │  │  │     │  │  │  ├─ 📄lines-between-class-members.js
│  │  │  │     │  │  │  ├─ 📄logical-assignment-operators.js
│  │  │  │     │  │  │  ├─ 📄max-classes-per-file.js
│  │  │  │     │  │  │  ├─ 📄max-depth.js
│  │  │  │     │  │  │  ├─ 📄max-len.js
│  │  │  │     │  │  │  ├─ 📄max-lines-per-function.js
│  │  │  │     │  │  │  ├─ 📄max-lines.js
│  │  │  │     │  │  │  ├─ 📄max-nested-callbacks.js
│  │  │  │     │  │  │  ├─ 📄max-params.js
│  │  │  │     │  │  │  ├─ 📄max-statements-per-line.js
│  │  │  │     │  │  │  ├─ 📄max-statements.js
│  │  │  │     │  │  │  ├─ 📄multiline-comment-style.js
│  │  │  │     │  │  │  ├─ 📄multiline-ternary.js
│  │  │  │     │  │  │  ├─ 📄new-cap.js
│  │  │  │     │  │  │  ├─ 📄new-parens.js
│  │  │  │     │  │  │  ├─ 📄newline-after-var.js
│  │  │  │     │  │  │  ├─ 📄newline-before-return.js
│  │  │  │     │  │  │  ├─ 📄newline-per-chained-call.js
│  │  │  │     │  │  │  ├─ 📄no-alert.js
│  │  │  │     │  │  │  ├─ 📄no-array-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-async-promise-executor.js
│  │  │  │     │  │  │  ├─ 📄no-await-in-loop.js
│  │  │  │     │  │  │  ├─ 📄no-bitwise.js
│  │  │  │     │  │  │  ├─ 📄no-buffer-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-caller.js
│  │  │  │     │  │  │  ├─ 📄no-case-declarations.js
│  │  │  │     │  │  │  ├─ 📄no-catch-shadow.js
│  │  │  │     │  │  │  ├─ 📄no-class-assign.js
│  │  │  │     │  │  │  ├─ 📄no-compare-neg-zero.js
│  │  │  │     │  │  │  ├─ 📄no-cond-assign.js
│  │  │  │     │  │  │  ├─ 📄no-confusing-arrow.js
│  │  │  │     │  │  │  ├─ 📄no-console.js
│  │  │  │     │  │  │  ├─ 📄no-const-assign.js
│  │  │  │     │  │  │  ├─ 📄no-constant-binary-expression.js
│  │  │  │     │  │  │  ├─ 📄no-constant-condition.js
│  │  │  │     │  │  │  ├─ 📄no-constructor-return.js
│  │  │  │     │  │  │  ├─ 📄no-continue.js
│  │  │  │     │  │  │  ├─ 📄no-control-regex.js
│  │  │  │     │  │  │  ├─ 📄no-debugger.js
│  │  │  │     │  │  │  ├─ 📄no-delete-var.js
│  │  │  │     │  │  │  ├─ 📄no-div-regex.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-args.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-class-members.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-else-if.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-keys.js
│  │  │  │     │  │  │  ├─ 📄no-duplicate-case.js
│  │  │  │     │  │  │  ├─ 📄no-duplicate-imports.js
│  │  │  │     │  │  │  ├─ 📄no-else-return.js
│  │  │  │     │  │  │  ├─ 📄no-empty-character-class.js
│  │  │  │     │  │  │  ├─ 📄no-empty-function.js
│  │  │  │     │  │  │  ├─ 📄no-empty-pattern.js
│  │  │  │     │  │  │  ├─ 📄no-empty-static-block.js
│  │  │  │     │  │  │  ├─ 📄no-empty.js
│  │  │  │     │  │  │  ├─ 📄no-eq-null.js
│  │  │  │     │  │  │  ├─ 📄no-eval.js
│  │  │  │     │  │  │  ├─ 📄no-ex-assign.js
│  │  │  │     │  │  │  ├─ 📄no-extend-native.js
│  │  │  │     │  │  │  ├─ 📄no-extra-bind.js
│  │  │  │     │  │  │  ├─ 📄no-extra-boolean-cast.js
│  │  │  │     │  │  │  ├─ 📄no-extra-label.js
│  │  │  │     │  │  │  ├─ 📄no-extra-parens.js
│  │  │  │     │  │  │  ├─ 📄no-extra-semi.js
│  │  │  │     │  │  │  ├─ 📄no-fallthrough.js
│  │  │  │     │  │  │  ├─ 📄no-floating-decimal.js
│  │  │  │     │  │  │  ├─ 📄no-func-assign.js
│  │  │  │     │  │  │  ├─ 📄no-global-assign.js
│  │  │  │     │  │  │  ├─ 📄no-implicit-coercion.js
│  │  │  │     │  │  │  ├─ 📄no-implicit-globals.js
│  │  │  │     │  │  │  ├─ 📄no-implied-eval.js
│  │  │  │     │  │  │  ├─ 📄no-import-assign.js
│  │  │  │     │  │  │  ├─ 📄no-inline-comments.js
│  │  │  │     │  │  │  ├─ 📄no-inner-declarations.js
│  │  │  │     │  │  │  ├─ 📄no-invalid-regexp.js
│  │  │  │     │  │  │  ├─ 📄no-invalid-this.js
│  │  │  │     │  │  │  ├─ 📄no-irregular-whitespace.js
│  │  │  │     │  │  │  ├─ 📄no-iterator.js
│  │  │  │     │  │  │  ├─ 📄no-label-var.js
│  │  │  │     │  │  │  ├─ 📄no-labels.js
│  │  │  │     │  │  │  ├─ 📄no-lone-blocks.js
│  │  │  │     │  │  │  ├─ 📄no-lonely-if.js
│  │  │  │     │  │  │  ├─ 📄no-loop-func.js
│  │  │  │     │  │  │  ├─ 📄no-loss-of-precision.js
│  │  │  │     │  │  │  ├─ 📄no-magic-numbers.js
│  │  │  │     │  │  │  ├─ 📄no-misleading-character-class.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-operators.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-requires.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-spaces-and-tabs.js
│  │  │  │     │  │  │  ├─ 📄no-multi-assign.js
│  │  │  │     │  │  │  ├─ 📄no-multi-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-multi-str.js
│  │  │  │     │  │  │  ├─ 📄no-multiple-empty-lines.js
│  │  │  │     │  │  │  ├─ 📄no-native-reassign.js
│  │  │  │     │  │  │  ├─ 📄no-negated-condition.js
│  │  │  │     │  │  │  ├─ 📄no-negated-in-lhs.js
│  │  │  │     │  │  │  ├─ 📄no-nested-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-new-func.js
│  │  │  │     │  │  │  ├─ 📄no-new-native-nonconstructor.js
│  │  │  │     │  │  │  ├─ 📄no-new-object.js
│  │  │  │     │  │  │  ├─ 📄no-new-require.js
│  │  │  │     │  │  │  ├─ 📄no-new-symbol.js
│  │  │  │     │  │  │  ├─ 📄no-new-wrappers.js
│  │  │  │     │  │  │  ├─ 📄no-new.js
│  │  │  │     │  │  │  ├─ 📄no-nonoctal-decimal-escape.js
│  │  │  │     │  │  │  ├─ 📄no-obj-calls.js
│  │  │  │     │  │  │  ├─ 📄no-object-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-octal-escape.js
│  │  │  │     │  │  │  ├─ 📄no-octal.js
│  │  │  │     │  │  │  ├─ 📄no-param-reassign.js
│  │  │  │     │  │  │  ├─ 📄no-path-concat.js
│  │  │  │     │  │  │  ├─ 📄no-plusplus.js
│  │  │  │     │  │  │  ├─ 📄no-process-env.js
│  │  │  │     │  │  │  ├─ 📄no-process-exit.js
│  │  │  │     │  │  │  ├─ 📄no-promise-executor-return.js
│  │  │  │     │  │  │  ├─ 📄no-proto.js
│  │  │  │     │  │  │  ├─ 📄no-prototype-builtins.js
│  │  │  │     │  │  │  ├─ 📄no-redeclare.js
│  │  │  │     │  │  │  ├─ 📄no-regex-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-exports.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-globals.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-imports.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-modules.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-properties.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-syntax.js
│  │  │  │     │  │  │  ├─ 📄no-return-assign.js
│  │  │  │     │  │  │  ├─ 📄no-return-await.js
│  │  │  │     │  │  │  ├─ 📄no-script-url.js
│  │  │  │     │  │  │  ├─ 📄no-self-assign.js
│  │  │  │     │  │  │  ├─ 📄no-self-compare.js
│  │  │  │     │  │  │  ├─ 📄no-sequences.js
│  │  │  │     │  │  │  ├─ 📄no-setter-return.js
│  │  │  │     │  │  │  ├─ 📄no-shadow-restricted-names.js
│  │  │  │     │  │  │  ├─ 📄no-shadow.js
│  │  │  │     │  │  │  ├─ 📄no-spaced-func.js
│  │  │  │     │  │  │  ├─ 📄no-sparse-arrays.js
│  │  │  │     │  │  │  ├─ 📄no-sync.js
│  │  │  │     │  │  │  ├─ 📄no-tabs.js
│  │  │  │     │  │  │  ├─ 📄no-template-curly-in-string.js
│  │  │  │     │  │  │  ├─ 📄no-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-this-before-super.js
│  │  │  │     │  │  │  ├─ 📄no-throw-literal.js
│  │  │  │     │  │  │  ├─ 📄no-trailing-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-undef-init.js
│  │  │  │     │  │  │  ├─ 📄no-undef.js
│  │  │  │     │  │  │  ├─ 📄no-undefined.js
│  │  │  │     │  │  │  ├─ 📄no-underscore-dangle.js
│  │  │  │     │  │  │  ├─ 📄no-unexpected-multiline.js
│  │  │  │     │  │  │  ├─ 📄no-unmodified-loop-condition.js
│  │  │  │     │  │  │  ├─ 📄no-unneeded-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-unreachable-loop.js
│  │  │  │     │  │  │  ├─ 📄no-unreachable.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-finally.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-negation.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-optional-chaining.js
│  │  │  │     │  │  │  ├─ 📄no-unused-expressions.js
│  │  │  │     │  │  │  ├─ 📄no-unused-labels.js
│  │  │  │     │  │  │  ├─ 📄no-unused-private-class-members.js
│  │  │  │     │  │  │  ├─ 📄no-unused-vars.js
│  │  │  │     │  │  │  ├─ 📄no-use-before-define.js
│  │  │  │     │  │  │  ├─ 📄no-useless-assignment.js
│  │  │  │     │  │  │  ├─ 📄no-useless-backreference.js
│  │  │  │     │  │  │  ├─ 📄no-useless-call.js
│  │  │  │     │  │  │  ├─ 📄no-useless-catch.js
│  │  │  │     │  │  │  ├─ 📄no-useless-computed-key.js
│  │  │  │     │  │  │  ├─ 📄no-useless-concat.js
│  │  │  │     │  │  │  ├─ 📄no-useless-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-useless-escape.js
│  │  │  │     │  │  │  ├─ 📄no-useless-rename.js
│  │  │  │     │  │  │  ├─ 📄no-useless-return.js
│  │  │  │     │  │  │  ├─ 📄no-var.js
│  │  │  │     │  │  │  ├─ 📄no-void.js
│  │  │  │     │  │  │  ├─ 📄no-warning-comments.js
│  │  │  │     │  │  │  ├─ 📄no-whitespace-before-property.js
│  │  │  │     │  │  │  ├─ 📄no-with.js
│  │  │  │     │  │  │  ├─ 📄nonblock-statement-body-position.js
│  │  │  │     │  │  │  ├─ 📄object-curly-newline.js
│  │  │  │     │  │  │  ├─ 📄object-curly-spacing.js
│  │  │  │     │  │  │  ├─ 📄object-property-newline.js
│  │  │  │     │  │  │  ├─ 📄object-shorthand.js
│  │  │  │     │  │  │  ├─ 📄one-var-declaration-per-line.js
│  │  │  │     │  │  │  ├─ 📄one-var.js
│  │  │  │     │  │  │  ├─ 📄operator-assignment.js
│  │  │  │     │  │  │  ├─ 📄operator-linebreak.js
│  │  │  │     │  │  │  ├─ 📄padded-blocks.js
│  │  │  │     │  │  │  ├─ 📄padding-line-between-statements.js
│  │  │  │     │  │  │  ├─ 📄prefer-arrow-callback.js
│  │  │  │     │  │  │  ├─ 📄prefer-const.js
│  │  │  │     │  │  │  ├─ 📄prefer-destructuring.js
│  │  │  │     │  │  │  ├─ 📄prefer-exponentiation-operator.js
│  │  │  │     │  │  │  ├─ 📄prefer-named-capture-group.js
│  │  │  │     │  │  │  ├─ 📄prefer-numeric-literals.js
│  │  │  │     │  │  │  ├─ 📄prefer-object-has-own.js
│  │  │  │     │  │  │  ├─ 📄prefer-object-spread.js
│  │  │  │     │  │  │  ├─ 📄prefer-promise-reject-errors.js
│  │  │  │     │  │  │  ├─ 📄prefer-reflect.js
│  │  │  │     │  │  │  ├─ 📄prefer-regex-literals.js
│  │  │  │     │  │  │  ├─ 📄prefer-rest-params.js
│  │  │  │     │  │  │  ├─ 📄prefer-spread.js
│  │  │  │     │  │  │  ├─ 📄prefer-template.js
│  │  │  │     │  │  │  ├─ 📄quote-props.js
│  │  │  │     │  │  │  ├─ 📄quotes.js
│  │  │  │     │  │  │  ├─ 📄radix.js
│  │  │  │     │  │  │  ├─ 📄require-atomic-updates.js
│  │  │  │     │  │  │  ├─ 📄require-await.js
│  │  │  │     │  │  │  ├─ 📄require-unicode-regexp.js
│  │  │  │     │  │  │  ├─ 📄require-yield.js
│  │  │  │     │  │  │  ├─ 📄rest-spread-spacing.js
│  │  │  │     │  │  │  ├─ 📄semi-spacing.js
│  │  │  │     │  │  │  ├─ 📄semi-style.js
│  │  │  │     │  │  │  ├─ 📄semi.js
│  │  │  │     │  │  │  ├─ 📄sort-imports.js
│  │  │  │     │  │  │  ├─ 📄sort-keys.js
│  │  │  │     │  │  │  ├─ 📄sort-vars.js
│  │  │  │     │  │  │  ├─ 📄space-before-blocks.js
│  │  │  │     │  │  │  ├─ 📄space-before-function-paren.js
│  │  │  │     │  │  │  ├─ 📄space-in-parens.js
│  │  │  │     │  │  │  ├─ 📄space-infix-ops.js
│  │  │  │     │  │  │  ├─ 📄space-unary-ops.js
│  │  │  │     │  │  │  ├─ 📄spaced-comment.js
│  │  │  │     │  │  │  ├─ 📄strict.js
│  │  │  │     │  │  │  ├─ 📄switch-colon-spacing.js
│  │  │  │     │  │  │  ├─ 📄symbol-description.js
│  │  │  │     │  │  │  ├─ 📄template-curly-spacing.js
│  │  │  │     │  │  │  ├─ 📄template-tag-spacing.js
│  │  │  │     │  │  │  ├─ 📄unicode-bom.js
│  │  │  │     │  │  │  ├─ 📄use-isnan.js
│  │  │  │     │  │  │  ├─ 📄valid-typeof.js
│  │  │  │     │  │  │  ├─ 📄vars-on-top.js
│  │  │  │     │  │  │  ├─ 📄wrap-iife.js
│  │  │  │     │  │  │  ├─ 📄wrap-regex.js
│  │  │  │     │  │  │  ├─ 📄yield-star-spacing.js
│  │  │  │     │  │  │  └─ 📄yoda.js
│  │  │  │     │  │  ├─ 📁shared
│  │  │  │     │  │  │  ├─ 📄ajv.js
│  │  │  │     │  │  │  ├─ 📄ast-utils.js
│  │  │  │     │  │  │  ├─ 📄directives.js
│  │  │  │     │  │  │  ├─ 📄flags.js
│  │  │  │     │  │  │  ├─ 📄logging.js
│  │  │  │     │  │  │  ├─ 📄runtime-info.js
│  │  │  │     │  │  │  ├─ 📄serialization.js
│  │  │  │     │  │  │  ├─ 📄severity.js
│  │  │  │     │  │  │  ├─ 📄stats.js
│  │  │  │     │  │  │  ├─ 📄string-utils.js
│  │  │  │     │  │  │  ├─ 📄traverser.js
│  │  │  │     │  │  │  └─ 📄types.js
│  │  │  │     │  │  ├─ 📄api.js
│  │  │  │     │  │  ├─ 📄cli.js
│  │  │  │     │  │  ├─ 📄options.js
│  │  │  │     │  │  └─ 📄unsupported-api.js
│  │  │  │     │  ├─ 📁messages
│  │  │  │     │  │  ├─ 📄all-files-ignored.js
│  │  │  │     │  │  ├─ 📄all-matched-files-ignored.js
│  │  │  │     │  │  ├─ 📄config-file-missing.js
│  │  │  │     │  │  ├─ 📄eslintrc-incompat.js
│  │  │  │     │  │  ├─ 📄eslintrc-plugins.js
│  │  │  │     │  │  ├─ 📄extend-config-missing.js
│  │  │  │     │  │  ├─ 📄failed-to-read-json.js
│  │  │  │     │  │  ├─ 📄file-not-found.js
│  │  │  │     │  │  ├─ 📄invalid-rule-options.js
│  │  │  │     │  │  ├─ 📄invalid-rule-severity.js
│  │  │  │     │  │  ├─ 📄no-config-found.js
│  │  │  │     │  │  ├─ 📄plugin-conflict.js
│  │  │  │     │  │  ├─ 📄plugin-invalid.js
│  │  │  │     │  │  ├─ 📄plugin-missing.js
│  │  │  │     │  │  ├─ 📄print-config-with-directory-path.js
│  │  │  │     │  │  ├─ 📄shared.js
│  │  │  │     │  │  └─ 📄whitespace-found.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁eslint-visitor-keys
│  │  │  │        ├─ 📁dist
│  │  │  │        │  ├─ 📄eslint-visitor-keys.cjs
│  │  │  │        │  ├─ 📄eslint-visitor-keys.d.cts
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  └─ 📄visitor-keys.d.ts
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  └─ 📄visitor-keys.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁@eslint-community+regexpp@4.11.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@eslint-community
│  │  │  │        └─ 📁regexpp
│  │  │  │           ├─ 📄index.d.ts
│  │  │  │           ├─ 📄index.js
│  │  │  │           ├─ 📄index.js.map
│  │  │  │           ├─ 📄index.mjs
│  │  │  │           ├─ 📄index.mjs.map
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           └─ 📄README.md
│  │  │  ├─ 📁@humanwhocodes+module-importer@1.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@humanwhocodes
│  │  │  │        └─ 📁module-importer
│  │  │  │           ├─ 📁dist
│  │  │  │           │  ├─ 📄module-importer.cjs
│  │  │  │           │  ├─ 📄module-importer.d.cts
│  │  │  │           │  ├─ 📄module-importer.d.ts
│  │  │  │           │  └─ 📄module-importer.js
│  │  │  │           ├─ 📁src
│  │  │  │           │  ├─ 📄module-importer.cjs
│  │  │  │           │  └─ 📄module-importer.js
│  │  │  │           ├─ 📄CHANGELOG.md
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           └─ 📄README.md
│  │  │  ├─ 📁@humanwhocodes+retry@0.3.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@humanwhocodes
│  │  │  │        └─ 📁retry
│  │  │  │           ├─ 📁dist
│  │  │  │           │  ├─ 📄retrier.cjs
│  │  │  │           │  ├─ 📄retrier.d.cts
│  │  │  │           │  ├─ 📄retrier.d.ts
│  │  │  │           │  ├─ 📄retrier.js
│  │  │  │           │  ├─ 📄retrier.min.js
│  │  │  │           │  └─ 📄retrier.mjs
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           └─ 📄README.md
│  │  │  ├─ 📁@nodelib+fs.scandir@2.1.5
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@nodelib
│  │  │  │     │  ├─ 📁fs.scandir
│  │  │  │     │  │  ├─ 📁out
│  │  │  │     │  │  │  ├─ 📁adapters
│  │  │  │     │  │  │  │  ├─ 📄fs.d.ts
│  │  │  │     │  │  │  │  └─ 📄fs.js
│  │  │  │     │  │  │  ├─ 📁providers
│  │  │  │     │  │  │  │  ├─ 📄async.d.ts
│  │  │  │     │  │  │  │  ├─ 📄async.js
│  │  │  │     │  │  │  │  ├─ 📄common.d.ts
│  │  │  │     │  │  │  │  ├─ 📄common.js
│  │  │  │     │  │  │  │  ├─ 📄sync.d.ts
│  │  │  │     │  │  │  │  └─ 📄sync.js
│  │  │  │     │  │  │  ├─ 📁types
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  └─ 📄index.js
│  │  │  │     │  │  │  ├─ 📁utils
│  │  │  │     │  │  │  │  ├─ 📄fs.d.ts
│  │  │  │     │  │  │  │  ├─ 📄fs.js
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  └─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄constants.d.ts
│  │  │  │     │  │  │  ├─ 📄constants.js
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄settings.d.ts
│  │  │  │     │  │  │  └─ 📄settings.js
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁fs.stat
│  │  │  │     │     ├─ 📁out
│  │  │  │     │     │  ├─ 📁adapters
│  │  │  │     │     │  │  ├─ 📄fs.d.ts
│  │  │  │     │     │  │  └─ 📄fs.js
│  │  │  │     │     │  ├─ 📁providers
│  │  │  │     │     │  │  ├─ 📄async.d.ts
│  │  │  │     │     │  │  ├─ 📄async.js
│  │  │  │     │     │  │  ├─ 📄sync.d.ts
│  │  │  │     │     │  │  └─ 📄sync.js
│  │  │  │     │     │  ├─ 📁types
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  └─ 📄index.js
│  │  │  │     │     │  ├─ 📄index.d.ts
│  │  │  │     │     │  ├─ 📄index.js
│  │  │  │     │     │  ├─ 📄settings.d.ts
│  │  │  │     │     │  └─ 📄settings.js
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     └─ 📁run-parallel
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁@nodelib+fs.stat@2.0.5
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@nodelib
│  │  │  │        └─ 📁fs.stat
│  │  │  │           ├─ 📁out
│  │  │  │           │  ├─ 📁adapters
│  │  │  │           │  │  ├─ 📄fs.d.ts
│  │  │  │           │  │  └─ 📄fs.js
│  │  │  │           │  ├─ 📁providers
│  │  │  │           │  │  ├─ 📄async.d.ts
│  │  │  │           │  │  ├─ 📄async.js
│  │  │  │           │  │  ├─ 📄sync.d.ts
│  │  │  │           │  │  └─ 📄sync.js
│  │  │  │           │  ├─ 📁types
│  │  │  │           │  │  ├─ 📄index.d.ts
│  │  │  │           │  │  └─ 📄index.js
│  │  │  │           │  ├─ 📄index.d.ts
│  │  │  │           │  ├─ 📄index.js
│  │  │  │           │  ├─ 📄settings.d.ts
│  │  │  │           │  └─ 📄settings.js
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           └─ 📄README.md
│  │  │  ├─ 📁@nodelib+fs.walk@1.2.8
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@nodelib
│  │  │  │     │  ├─ 📁fs.scandir
│  │  │  │     │  │  ├─ 📁out
│  │  │  │     │  │  │  ├─ 📁adapters
│  │  │  │     │  │  │  │  ├─ 📄fs.d.ts
│  │  │  │     │  │  │  │  └─ 📄fs.js
│  │  │  │     │  │  │  ├─ 📁providers
│  │  │  │     │  │  │  │  ├─ 📄async.d.ts
│  │  │  │     │  │  │  │  ├─ 📄async.js
│  │  │  │     │  │  │  │  ├─ 📄common.d.ts
│  │  │  │     │  │  │  │  ├─ 📄common.js
│  │  │  │     │  │  │  │  ├─ 📄sync.d.ts
│  │  │  │     │  │  │  │  └─ 📄sync.js
│  │  │  │     │  │  │  ├─ 📁types
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  └─ 📄index.js
│  │  │  │     │  │  │  ├─ 📁utils
│  │  │  │     │  │  │  │  ├─ 📄fs.d.ts
│  │  │  │     │  │  │  │  ├─ 📄fs.js
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  └─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄constants.d.ts
│  │  │  │     │  │  │  ├─ 📄constants.js
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄settings.d.ts
│  │  │  │     │  │  │  └─ 📄settings.js
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁fs.walk
│  │  │  │     │     ├─ 📁out
│  │  │  │     │     │  ├─ 📁providers
│  │  │  │     │     │  │  ├─ 📄async.d.ts
│  │  │  │     │     │  │  ├─ 📄async.js
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄stream.d.ts
│  │  │  │     │     │  │  ├─ 📄stream.js
│  │  │  │     │     │  │  ├─ 📄sync.d.ts
│  │  │  │     │     │  │  └─ 📄sync.js
│  │  │  │     │     │  ├─ 📁readers
│  │  │  │     │     │  │  ├─ 📄async.d.ts
│  │  │  │     │     │  │  ├─ 📄async.js
│  │  │  │     │     │  │  ├─ 📄common.d.ts
│  │  │  │     │     │  │  ├─ 📄common.js
│  │  │  │     │     │  │  ├─ 📄reader.d.ts
│  │  │  │     │     │  │  ├─ 📄reader.js
│  │  │  │     │     │  │  ├─ 📄sync.d.ts
│  │  │  │     │     │  │  └─ 📄sync.js
│  │  │  │     │     │  ├─ 📁types
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  └─ 📄index.js
│  │  │  │     │     │  ├─ 📄index.d.ts
│  │  │  │     │     │  ├─ 📄index.js
│  │  │  │     │     │  ├─ 📄settings.d.ts
│  │  │  │     │     │  └─ 📄settings.js
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     └─ 📁fastq
│  │  │  │        ├─ 📁.github
│  │  │  │        │  ├─ 📁workflows
│  │  │  │        │  │  └─ 📄ci.yml
│  │  │  │        │  └─ 📄dependabot.yml
│  │  │  │        ├─ 📁test
│  │  │  │        │  ├─ 📄example.ts
│  │  │  │        │  ├─ 📄promise.js
│  │  │  │        │  ├─ 📄test.js
│  │  │  │        │  └─ 📄tsconfig.json
│  │  │  │        ├─ 📄bench.js
│  │  │  │        ├─ 📄example.js
│  │  │  │        ├─ 📄example.mjs
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄queue.js
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁@rollup+rollup-win32-x64-msvc@4.21.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@rollup
│  │  │  │        └─ 📁rollup-win32-x64-msvc
│  │  │  │           ├─ 📄package.json
│  │  │  │           ├─ 📄README.md
│  │  │  │           └─ 📄rollup.win32-x64-msvc.node
│  │  │  ├─ 📁@swc+core-win32-x64-msvc@1.7.14
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@swc
│  │  │  │        └─ 📁core-win32-x64-msvc
│  │  │  │           ├─ 📄package.json
│  │  │  │           ├─ 📄README.md
│  │  │  │           └─ 📄swc.win32-x64-msvc.node
│  │  │  ├─ 📁@swc+core@1.7.14
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@swc
│  │  │  │        ├─ 📁core
│  │  │  │        │  ├─ 📄binding.d.ts
│  │  │  │        │  ├─ 📄binding.js
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  ├─ 📄package.json
│  │  │  │        │  ├─ 📄postinstall.js
│  │  │  │        │  ├─ 📄spack.d.ts
│  │  │  │        │  ├─ 📄spack.js
│  │  │  │        │  ├─ 📄util.d.ts
│  │  │  │        │  ├─ 📄util.js
│  │  │  │        │  ├─ 📄Visitor.d.ts
│  │  │  │        │  └─ 📄Visitor.js
│  │  │  │        ├─ 📁core-win32-x64-msvc
│  │  │  │        │  ├─ 📄package.json
│  │  │  │        │  ├─ 📄README.md
│  │  │  │        │  └─ 📄swc.win32-x64-msvc.node
│  │  │  │        ├─ 📁counter
│  │  │  │        │  ├─ 📄CHANGELOG.md
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  ├─ 📄package.json
│  │  │  │        │  └─ 📄README.md
│  │  │  │        └─ 📁types
│  │  │  │           ├─ 📄index.d.ts
│  │  │  │           ├─ 📄index.d.ts.map
│  │  │  │           ├─ 📄index.js
│  │  │  │           ├─ 📄index.ts
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           ├─ 📄README.md
│  │  │  │           └─ 📄tsconfig.json
│  │  │  ├─ 📁@swc+counter@0.1.3
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@swc
│  │  │  │        └─ 📁counter
│  │  │  │           ├─ 📄CHANGELOG.md
│  │  │  │           ├─ 📄index.js
│  │  │  │           ├─ 📄package.json
│  │  │  │           └─ 📄README.md
│  │  │  ├─ 📁@swc+types@0.1.12
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@swc
│  │  │  │        ├─ 📁counter
│  │  │  │        │  ├─ 📄CHANGELOG.md
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  ├─ 📄package.json
│  │  │  │        │  └─ 📄README.md
│  │  │  │        └─ 📁types
│  │  │  │           ├─ 📄index.d.ts
│  │  │  │           ├─ 📄index.d.ts.map
│  │  │  │           ├─ 📄index.js
│  │  │  │           ├─ 📄index.ts
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           ├─ 📄README.md
│  │  │  │           └─ 📄tsconfig.json
│  │  │  ├─ 📁@types+estree@1.0.5
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@types
│  │  │  │        └─ 📁estree
│  │  │  │           ├─ 📄flow.d.ts
│  │  │  │           ├─ 📄index.d.ts
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           └─ 📄README.md
│  │  │  ├─ 📁@types+prop-types@15.7.12
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@types
│  │  │  │        └─ 📁prop-types
│  │  │  │           ├─ 📄index.d.ts
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           └─ 📄README.md
│  │  │  ├─ 📁@types+react-dom@18.3.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@types
│  │  │  │        ├─ 📁react
│  │  │  │        │  ├─ 📁ts5.0
│  │  │  │        │  │  ├─ 📄canary.d.ts
│  │  │  │        │  │  ├─ 📄experimental.d.ts
│  │  │  │        │  │  ├─ 📄global.d.ts
│  │  │  │        │  │  ├─ 📄index.d.ts
│  │  │  │        │  │  ├─ 📄jsx-dev-runtime.d.ts
│  │  │  │        │  │  └─ 📄jsx-runtime.d.ts
│  │  │  │        │  ├─ 📄canary.d.ts
│  │  │  │        │  ├─ 📄experimental.d.ts
│  │  │  │        │  ├─ 📄global.d.ts
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  ├─ 📄jsx-dev-runtime.d.ts
│  │  │  │        │  ├─ 📄jsx-runtime.d.ts
│  │  │  │        │  ├─ 📄LICENSE
│  │  │  │        │  ├─ 📄package.json
│  │  │  │        │  └─ 📄README.md
│  │  │  │        └─ 📁react-dom
│  │  │  │           ├─ 📁test-utils
│  │  │  │           │  └─ 📄index.d.ts
│  │  │  │           ├─ 📄canary.d.ts
│  │  │  │           ├─ 📄client.d.ts
│  │  │  │           ├─ 📄experimental.d.ts
│  │  │  │           ├─ 📄index.d.ts
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           ├─ 📄README.md
│  │  │  │           └─ 📄server.d.ts
│  │  │  ├─ 📁@types+react-lazyload@3.2.3
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@types
│  │  │  │        ├─ 📁react
│  │  │  │        │  ├─ 📁ts5.0
│  │  │  │        │  │  ├─ 📄canary.d.ts
│  │  │  │        │  │  ├─ 📄experimental.d.ts
│  │  │  │        │  │  ├─ 📄global.d.ts
│  │  │  │        │  │  ├─ 📄index.d.ts
│  │  │  │        │  │  ├─ 📄jsx-dev-runtime.d.ts
│  │  │  │        │  │  └─ 📄jsx-runtime.d.ts
│  │  │  │        │  ├─ 📄canary.d.ts
│  │  │  │        │  ├─ 📄experimental.d.ts
│  │  │  │        │  ├─ 📄global.d.ts
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  ├─ 📄jsx-dev-runtime.d.ts
│  │  │  │        │  ├─ 📄jsx-runtime.d.ts
│  │  │  │        │  ├─ 📄LICENSE
│  │  │  │        │  ├─ 📄package.json
│  │  │  │        │  └─ 📄README.md
│  │  │  │        └─ 📁react-lazyload
│  │  │  │           ├─ 📄index.d.ts
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           └─ 📄README.md
│  │  │  ├─ 📁@types+react@18.3.3
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@types
│  │  │  │     │  ├─ 📁prop-types
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁react
│  │  │  │     │     ├─ 📁ts5.0
│  │  │  │     │     │  ├─ 📄canary.d.ts
│  │  │  │     │     │  ├─ 📄experimental.d.ts
│  │  │  │     │     │  ├─ 📄global.d.ts
│  │  │  │     │     │  ├─ 📄index.d.ts
│  │  │  │     │     │  ├─ 📄jsx-dev-runtime.d.ts
│  │  │  │     │     │  └─ 📄jsx-runtime.d.ts
│  │  │  │     │     ├─ 📄canary.d.ts
│  │  │  │     │     ├─ 📄experimental.d.ts
│  │  │  │     │     ├─ 📄global.d.ts
│  │  │  │     │     ├─ 📄index.d.ts
│  │  │  │     │     ├─ 📄jsx-dev-runtime.d.ts
│  │  │  │     │     ├─ 📄jsx-runtime.d.ts
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     └─ 📁csstype
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js.flow
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁@typescript-eslint+eslint-plugin@8.2.0_@typescript-eslint+parser@8.2.0_eslint@9.9.0_typescrip_7ujnkkm6ri4qd73lwsqbpg4fv4
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@eslint-community
│  │  │  │     │  └─ 📁regexpp
│  │  │  │     │     ├─ 📄index.d.ts
│  │  │  │     │     ├─ 📄index.js
│  │  │  │     │     ├─ 📄index.js.map
│  │  │  │     │     ├─ 📄index.mjs
│  │  │  │     │     ├─ 📄index.mjs.map
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁@typescript-eslint
│  │  │  │     │  ├─ 📁eslint-plugin
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁configs
│  │  │  │     │  │  │  │  ├─ 📄all.js
│  │  │  │     │  │  │  │  ├─ 📄all.js.map
│  │  │  │     │  │  │  │  ├─ 📄base.js
│  │  │  │     │  │  │  │  ├─ 📄base.js.map
│  │  │  │     │  │  │  │  ├─ 📄disable-type-checked.js
│  │  │  │     │  │  │  │  ├─ 📄disable-type-checked.js.map
│  │  │  │     │  │  │  │  ├─ 📄eslint-recommended-raw.js
│  │  │  │     │  │  │  │  ├─ 📄eslint-recommended-raw.js.map
│  │  │  │     │  │  │  │  ├─ 📄eslint-recommended.js
│  │  │  │     │  │  │  │  ├─ 📄eslint-recommended.js.map
│  │  │  │     │  │  │  │  ├─ 📄recommended-type-checked-only.js
│  │  │  │     │  │  │  │  ├─ 📄recommended-type-checked-only.js.map
│  │  │  │     │  │  │  │  ├─ 📄recommended-type-checked.js
│  │  │  │     │  │  │  │  ├─ 📄recommended-type-checked.js.map
│  │  │  │     │  │  │  │  ├─ 📄recommended.js
│  │  │  │     │  │  │  │  ├─ 📄recommended.js.map
│  │  │  │     │  │  │  │  ├─ 📄strict-type-checked-only.js
│  │  │  │     │  │  │  │  ├─ 📄strict-type-checked-only.js.map
│  │  │  │     │  │  │  │  ├─ 📄strict-type-checked.js
│  │  │  │     │  │  │  │  ├─ 📄strict-type-checked.js.map
│  │  │  │     │  │  │  │  ├─ 📄strict.js
│  │  │  │     │  │  │  │  ├─ 📄strict.js.map
│  │  │  │     │  │  │  │  ├─ 📄stylistic-type-checked-only.js
│  │  │  │     │  │  │  │  ├─ 📄stylistic-type-checked-only.js.map
│  │  │  │     │  │  │  │  ├─ 📄stylistic-type-checked.js
│  │  │  │     │  │  │  │  ├─ 📄stylistic-type-checked.js.map
│  │  │  │     │  │  │  │  ├─ 📄stylistic.js
│  │  │  │     │  │  │  │  └─ 📄stylistic.js.map
│  │  │  │     │  │  │  ├─ 📁rules
│  │  │  │     │  │  │  │  ├─ 📁enum-utils
│  │  │  │     │  │  │  │  │  ├─ 📄shared.js
│  │  │  │     │  │  │  │  │  └─ 📄shared.js.map
│  │  │  │     │  │  │  │  ├─ 📁naming-convention-utils
│  │  │  │     │  │  │  │  │  ├─ 📄enums.js
│  │  │  │     │  │  │  │  │  ├─ 📄enums.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄format.js
│  │  │  │     │  │  │  │  │  ├─ 📄format.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄parse-options.js
│  │  │  │     │  │  │  │  │  ├─ 📄parse-options.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄schema.js
│  │  │  │     │  │  │  │  │  ├─ 📄schema.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄shared.js
│  │  │  │     │  │  │  │  │  ├─ 📄shared.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄types.js
│  │  │  │     │  │  │  │  │  ├─ 📄types.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄validator.js
│  │  │  │     │  │  │  │  │  └─ 📄validator.js.map
│  │  │  │     │  │  │  │  ├─ 📁prefer-optional-chain-utils
│  │  │  │     │  │  │  │  │  ├─ 📄analyzeChain.js
│  │  │  │     │  │  │  │  │  ├─ 📄analyzeChain.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄checkNullishAndReport.js
│  │  │  │     │  │  │  │  │  ├─ 📄checkNullishAndReport.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄compareNodes.js
│  │  │  │     │  │  │  │  │  ├─ 📄compareNodes.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄gatherLogicalOperands.js
│  │  │  │     │  │  │  │  │  ├─ 📄gatherLogicalOperands.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄PreferOptionalChainOptions.js
│  │  │  │     │  │  │  │  │  └─ 📄PreferOptionalChainOptions.js.map
│  │  │  │     │  │  │  │  ├─ 📄adjacent-overload-signatures.js
│  │  │  │     │  │  │  │  ├─ 📄adjacent-overload-signatures.js.map
│  │  │  │     │  │  │  │  ├─ 📄array-type.js
│  │  │  │     │  │  │  │  ├─ 📄array-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄await-thenable.js
│  │  │  │     │  │  │  │  ├─ 📄await-thenable.js.map
│  │  │  │     │  │  │  │  ├─ 📄ban-ts-comment.js
│  │  │  │     │  │  │  │  ├─ 📄ban-ts-comment.js.map
│  │  │  │     │  │  │  │  ├─ 📄ban-tslint-comment.js
│  │  │  │     │  │  │  │  ├─ 📄ban-tslint-comment.js.map
│  │  │  │     │  │  │  │  ├─ 📄class-literal-property-style.js
│  │  │  │     │  │  │  │  ├─ 📄class-literal-property-style.js.map
│  │  │  │     │  │  │  │  ├─ 📄class-methods-use-this.js
│  │  │  │     │  │  │  │  ├─ 📄class-methods-use-this.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-generic-constructors.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-generic-constructors.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-indexed-object-style.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-indexed-object-style.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-return.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-return.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-assertions.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-assertions.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-definitions.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-definitions.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-exports.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-exports.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-imports.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-imports.js.map
│  │  │  │     │  │  │  │  ├─ 📄default-param-last.js
│  │  │  │     │  │  │  │  ├─ 📄default-param-last.js.map
│  │  │  │     │  │  │  │  ├─ 📄dot-notation.js
│  │  │  │     │  │  │  │  ├─ 📄dot-notation.js.map
│  │  │  │     │  │  │  │  ├─ 📄explicit-function-return-type.js
│  │  │  │     │  │  │  │  ├─ 📄explicit-function-return-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄explicit-member-accessibility.js
│  │  │  │     │  │  │  │  ├─ 📄explicit-member-accessibility.js.map
│  │  │  │     │  │  │  │  ├─ 📄explicit-module-boundary-types.js
│  │  │  │     │  │  │  │  ├─ 📄explicit-module-boundary-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄init-declarations.js
│  │  │  │     │  │  │  │  ├─ 📄init-declarations.js.map
│  │  │  │     │  │  │  │  ├─ 📄max-params.js
│  │  │  │     │  │  │  │  ├─ 📄max-params.js.map
│  │  │  │     │  │  │  │  ├─ 📄member-ordering.js
│  │  │  │     │  │  │  │  ├─ 📄member-ordering.js.map
│  │  │  │     │  │  │  │  ├─ 📄method-signature-style.js
│  │  │  │     │  │  │  │  ├─ 📄method-signature-style.js.map
│  │  │  │     │  │  │  │  ├─ 📄naming-convention.js
│  │  │  │     │  │  │  │  ├─ 📄naming-convention.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-array-constructor.js
│  │  │  │     │  │  │  │  ├─ 📄no-array-constructor.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-array-delete.js
│  │  │  │     │  │  │  │  ├─ 📄no-array-delete.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-base-to-string.js
│  │  │  │     │  │  │  │  ├─ 📄no-base-to-string.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-confusing-non-null-assertion.js
│  │  │  │     │  │  │  │  ├─ 📄no-confusing-non-null-assertion.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-confusing-void-expression.js
│  │  │  │     │  │  │  │  ├─ 📄no-confusing-void-expression.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-dupe-class-members.js
│  │  │  │     │  │  │  │  ├─ 📄no-dupe-class-members.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-duplicate-enum-values.js
│  │  │  │     │  │  │  │  ├─ 📄no-duplicate-enum-values.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-duplicate-type-constituents.js
│  │  │  │     │  │  │  │  ├─ 📄no-duplicate-type-constituents.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-dynamic-delete.js
│  │  │  │     │  │  │  │  ├─ 📄no-dynamic-delete.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-empty-function.js
│  │  │  │     │  │  │  │  ├─ 📄no-empty-function.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-empty-interface.js
│  │  │  │     │  │  │  │  ├─ 📄no-empty-interface.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-empty-object-type.js
│  │  │  │     │  │  │  │  ├─ 📄no-empty-object-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-explicit-any.js
│  │  │  │     │  │  │  │  ├─ 📄no-explicit-any.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-extra-non-null-assertion.js
│  │  │  │     │  │  │  │  ├─ 📄no-extra-non-null-assertion.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-extraneous-class.js
│  │  │  │     │  │  │  │  ├─ 📄no-extraneous-class.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-floating-promises.js
│  │  │  │     │  │  │  │  ├─ 📄no-floating-promises.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-for-in-array.js
│  │  │  │     │  │  │  │  ├─ 📄no-for-in-array.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-implied-eval.js
│  │  │  │     │  │  │  │  ├─ 📄no-implied-eval.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-import-type-side-effects.js
│  │  │  │     │  │  │  │  ├─ 📄no-import-type-side-effects.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-inferrable-types.js
│  │  │  │     │  │  │  │  ├─ 📄no-inferrable-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-invalid-this.js
│  │  │  │     │  │  │  │  ├─ 📄no-invalid-this.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-invalid-void-type.js
│  │  │  │     │  │  │  │  ├─ 📄no-invalid-void-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-loop-func.js
│  │  │  │     │  │  │  │  ├─ 📄no-loop-func.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-loss-of-precision.js
│  │  │  │     │  │  │  │  ├─ 📄no-loss-of-precision.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-magic-numbers.js
│  │  │  │     │  │  │  │  ├─ 📄no-magic-numbers.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-meaningless-void-operator.js
│  │  │  │     │  │  │  │  ├─ 📄no-meaningless-void-operator.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-misused-new.js
│  │  │  │     │  │  │  │  ├─ 📄no-misused-new.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-misused-promises.js
│  │  │  │     │  │  │  │  ├─ 📄no-misused-promises.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-mixed-enums.js
│  │  │  │     │  │  │  │  ├─ 📄no-mixed-enums.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-namespace.js
│  │  │  │     │  │  │  │  ├─ 📄no-namespace.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-non-null-asserted-nullish-coalescing.js
│  │  │  │     │  │  │  │  ├─ 📄no-non-null-asserted-nullish-coalescing.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-non-null-asserted-optional-chain.js
│  │  │  │     │  │  │  │  ├─ 📄no-non-null-asserted-optional-chain.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-non-null-assertion.js
│  │  │  │     │  │  │  │  ├─ 📄no-non-null-assertion.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-redeclare.js
│  │  │  │     │  │  │  │  ├─ 📄no-redeclare.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-redundant-type-constituents.js
│  │  │  │     │  │  │  │  ├─ 📄no-redundant-type-constituents.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-require-imports.js
│  │  │  │     │  │  │  │  ├─ 📄no-require-imports.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-restricted-imports.js
│  │  │  │     │  │  │  │  ├─ 📄no-restricted-imports.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-restricted-types.js
│  │  │  │     │  │  │  │  ├─ 📄no-restricted-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-shadow.js
│  │  │  │     │  │  │  │  ├─ 📄no-shadow.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-this-alias.js
│  │  │  │     │  │  │  │  ├─ 📄no-this-alias.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-type-alias.js
│  │  │  │     │  │  │  │  ├─ 📄no-type-alias.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-boolean-literal-compare.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-boolean-literal-compare.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-condition.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-condition.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-parameter-property-assignment.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-parameter-property-assignment.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-qualifier.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-qualifier.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-template-expression.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-template-expression.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-arguments.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-arguments.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-assertion.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-assertion.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-constraint.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-constraint.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-parameters.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-parameters.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-argument.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-argument.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-assignment.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-assignment.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-call.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-call.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-declaration-merging.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-declaration-merging.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-enum-comparison.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-enum-comparison.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-function-type.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-function-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-member-access.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-member-access.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-return.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-return.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-unary-minus.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-unary-minus.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unused-expressions.js
│  │  │  │     │  │  │  │  ├─ 📄no-unused-expressions.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unused-vars.js
│  │  │  │     │  │  │  │  ├─ 📄no-unused-vars.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-use-before-define.js
│  │  │  │     │  │  │  │  ├─ 📄no-use-before-define.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-useless-constructor.js
│  │  │  │     │  │  │  │  ├─ 📄no-useless-constructor.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-useless-empty-export.js
│  │  │  │     │  │  │  │  ├─ 📄no-useless-empty-export.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-var-requires.js
│  │  │  │     │  │  │  │  ├─ 📄no-var-requires.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-wrapper-object-types.js
│  │  │  │     │  │  │  │  ├─ 📄no-wrapper-object-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄non-nullable-type-assertion-style.js
│  │  │  │     │  │  │  │  ├─ 📄non-nullable-type-assertion-style.js.map
│  │  │  │     │  │  │  │  ├─ 📄only-throw-error.js
│  │  │  │     │  │  │  │  ├─ 📄only-throw-error.js.map
│  │  │  │     │  │  │  │  ├─ 📄parameter-properties.js
│  │  │  │     │  │  │  │  ├─ 📄parameter-properties.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-as-const.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-as-const.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-destructuring.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-destructuring.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-enum-initializers.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-enum-initializers.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-find.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-find.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-for-of.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-for-of.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-function-type.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-function-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-includes.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-includes.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-literal-enum-member.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-literal-enum-member.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-namespace-keyword.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-namespace-keyword.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-nullish-coalescing.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-nullish-coalescing.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-optional-chain.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-optional-chain.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-promise-reject-errors.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-promise-reject-errors.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-readonly-parameter-types.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-readonly-parameter-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-readonly.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-readonly.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-reduce-type-parameter.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-reduce-type-parameter.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-regexp-exec.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-regexp-exec.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-return-this-type.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-return-this-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-string-starts-ends-with.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-string-starts-ends-with.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-ts-expect-error.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-ts-expect-error.js.map
│  │  │  │     │  │  │  │  ├─ 📄promise-function-async.js
│  │  │  │     │  │  │  │  ├─ 📄promise-function-async.js.map
│  │  │  │     │  │  │  │  ├─ 📄require-array-sort-compare.js
│  │  │  │     │  │  │  │  ├─ 📄require-array-sort-compare.js.map
│  │  │  │     │  │  │  │  ├─ 📄require-await.js
│  │  │  │     │  │  │  │  ├─ 📄require-await.js.map
│  │  │  │     │  │  │  │  ├─ 📄restrict-plus-operands.js
│  │  │  │     │  │  │  │  ├─ 📄restrict-plus-operands.js.map
│  │  │  │     │  │  │  │  ├─ 📄restrict-template-expressions.js
│  │  │  │     │  │  │  │  ├─ 📄restrict-template-expressions.js.map
│  │  │  │     │  │  │  │  ├─ 📄return-await.js
│  │  │  │     │  │  │  │  ├─ 📄return-await.js.map
│  │  │  │     │  │  │  │  ├─ 📄sort-type-constituents.js
│  │  │  │     │  │  │  │  ├─ 📄sort-type-constituents.js.map
│  │  │  │     │  │  │  │  ├─ 📄strict-boolean-expressions.js
│  │  │  │     │  │  │  │  ├─ 📄strict-boolean-expressions.js.map
│  │  │  │     │  │  │  │  ├─ 📄switch-exhaustiveness-check.js
│  │  │  │     │  │  │  │  ├─ 📄switch-exhaustiveness-check.js.map
│  │  │  │     │  │  │  │  ├─ 📄triple-slash-reference.js
│  │  │  │     │  │  │  │  ├─ 📄triple-slash-reference.js.map
│  │  │  │     │  │  │  │  ├─ 📄typedef.js
│  │  │  │     │  │  │  │  ├─ 📄typedef.js.map
│  │  │  │     │  │  │  │  ├─ 📄unbound-method.js
│  │  │  │     │  │  │  │  ├─ 📄unbound-method.js.map
│  │  │  │     │  │  │  │  ├─ 📄unified-signatures.js
│  │  │  │     │  │  │  │  ├─ 📄unified-signatures.js.map
│  │  │  │     │  │  │  │  ├─ 📄use-unknown-in-catch-callback-variable.js
│  │  │  │     │  │  │  │  └─ 📄use-unknown-in-catch-callback-variable.js.map
│  │  │  │     │  │  │  ├─ 📁util
│  │  │  │     │  │  │  │  ├─ 📄astUtils.js
│  │  │  │     │  │  │  │  ├─ 📄astUtils.js.map
│  │  │  │     │  │  │  │  ├─ 📄collectUnusedVariables.js
│  │  │  │     │  │  │  │  ├─ 📄collectUnusedVariables.js.map
│  │  │  │     │  │  │  │  ├─ 📄createRule.js
│  │  │  │     │  │  │  │  ├─ 📄createRule.js.map
│  │  │  │     │  │  │  │  ├─ 📄escapeRegExp.js
│  │  │  │     │  │  │  │  ├─ 📄escapeRegExp.js.map
│  │  │  │     │  │  │  │  ├─ 📄explicitReturnTypeUtils.js
│  │  │  │     │  │  │  │  ├─ 📄explicitReturnTypeUtils.js.map
│  │  │  │     │  │  │  │  ├─ 📄getESLintCoreRule.js
│  │  │  │     │  │  │  │  ├─ 📄getESLintCoreRule.js.map
│  │  │  │     │  │  │  │  ├─ 📄getFixOrSuggest.js
│  │  │  │     │  │  │  │  ├─ 📄getFixOrSuggest.js.map
│  │  │  │     │  │  │  │  ├─ 📄getForStatementHeadLoc.js
│  │  │  │     │  │  │  │  ├─ 📄getForStatementHeadLoc.js.map
│  │  │  │     │  │  │  │  ├─ 📄getFunctionHeadLoc.js
│  │  │  │     │  │  │  │  ├─ 📄getFunctionHeadLoc.js.map
│  │  │  │     │  │  │  │  ├─ 📄getMemberHeadLoc.js
│  │  │  │     │  │  │  │  ├─ 📄getMemberHeadLoc.js.map
│  │  │  │     │  │  │  │  ├─ 📄getOperatorPrecedence.js
│  │  │  │     │  │  │  │  ├─ 📄getOperatorPrecedence.js.map
│  │  │  │     │  │  │  │  ├─ 📄getStaticStringValue.js
│  │  │  │     │  │  │  │  ├─ 📄getStaticStringValue.js.map
│  │  │  │     │  │  │  │  ├─ 📄getStringLength.js
│  │  │  │     │  │  │  │  ├─ 📄getStringLength.js.map
│  │  │  │     │  │  │  │  ├─ 📄getTextWithParentheses.js
│  │  │  │     │  │  │  │  ├─ 📄getTextWithParentheses.js.map
│  │  │  │     │  │  │  │  ├─ 📄getThisExpression.js
│  │  │  │     │  │  │  │  ├─ 📄getThisExpression.js.map
│  │  │  │     │  │  │  │  ├─ 📄getWrappedCode.js
│  │  │  │     │  │  │  │  ├─ 📄getWrappedCode.js.map
│  │  │  │     │  │  │  │  ├─ 📄getWrappingFixer.js
│  │  │  │     │  │  │  │  ├─ 📄getWrappingFixer.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄isAssignee.js
│  │  │  │     │  │  │  │  ├─ 📄isAssignee.js.map
│  │  │  │     │  │  │  │  ├─ 📄isNodeEqual.js
│  │  │  │     │  │  │  │  ├─ 📄isNodeEqual.js.map
│  │  │  │     │  │  │  │  ├─ 📄isNullLiteral.js
│  │  │  │     │  │  │  │  ├─ 📄isNullLiteral.js.map
│  │  │  │     │  │  │  │  ├─ 📄isStartOfExpressionStatement.js
│  │  │  │     │  │  │  │  ├─ 📄isStartOfExpressionStatement.js.map
│  │  │  │     │  │  │  │  ├─ 📄isTypeImport.js
│  │  │  │     │  │  │  │  ├─ 📄isTypeImport.js.map
│  │  │  │     │  │  │  │  ├─ 📄isUndefinedIdentifier.js
│  │  │  │     │  │  │  │  ├─ 📄isUndefinedIdentifier.js.map
│  │  │  │     │  │  │  │  ├─ 📄misc.js
│  │  │  │     │  │  │  │  ├─ 📄misc.js.map
│  │  │  │     │  │  │  │  ├─ 📄needsPrecedingSemiColon.js
│  │  │  │     │  │  │  │  ├─ 📄needsPrecedingSemiColon.js.map
│  │  │  │     │  │  │  │  ├─ 📄objectIterators.js
│  │  │  │     │  │  │  │  ├─ 📄objectIterators.js.map
│  │  │  │     │  │  │  │  ├─ 📄referenceContainsTypeQuery.js
│  │  │  │     │  │  │  │  ├─ 📄referenceContainsTypeQuery.js.map
│  │  │  │     │  │  │  │  ├─ 📄scopeUtils.js
│  │  │  │     │  │  │  │  ├─ 📄scopeUtils.js.map
│  │  │  │     │  │  │  │  ├─ 📄types.js
│  │  │  │     │  │  │  │  └─ 📄types.js.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄index.js.map
│  │  │  │     │  │  ├─ 📁docs
│  │  │  │     │  │  │  └─ 📁rules
│  │  │  │     │  │  │     ├─ 📄adjacent-overload-signatures.mdx
│  │  │  │     │  │  │     ├─ 📄array-type.mdx
│  │  │  │     │  │  │     ├─ 📄await-thenable.mdx
│  │  │  │     │  │  │     ├─ 📄ban-ts-comment.mdx
│  │  │  │     │  │  │     ├─ 📄ban-tslint-comment.mdx
│  │  │  │     │  │  │     ├─ 📄ban-types.md
│  │  │  │     │  │  │     ├─ 📄block-spacing.md
│  │  │  │     │  │  │     ├─ 📄brace-style.md
│  │  │  │     │  │  │     ├─ 📄camelcase.md
│  │  │  │     │  │  │     ├─ 📄class-literal-property-style.mdx
│  │  │  │     │  │  │     ├─ 📄class-methods-use-this.mdx
│  │  │  │     │  │  │     ├─ 📄comma-dangle.md
│  │  │  │     │  │  │     ├─ 📄comma-spacing.md
│  │  │  │     │  │  │     ├─ 📄consistent-generic-constructors.mdx
│  │  │  │     │  │  │     ├─ 📄consistent-indexed-object-style.mdx
│  │  │  │     │  │  │     ├─ 📄consistent-return.mdx
│  │  │  │     │  │  │     ├─ 📄consistent-type-assertions.mdx
│  │  │  │     │  │  │     ├─ 📄consistent-type-definitions.mdx
│  │  │  │     │  │  │     ├─ 📄consistent-type-exports.mdx
│  │  │  │     │  │  │     ├─ 📄consistent-type-imports.mdx
│  │  │  │     │  │  │     ├─ 📄default-param-last.mdx
│  │  │  │     │  │  │     ├─ 📄dot-notation.mdx
│  │  │  │     │  │  │     ├─ 📄explicit-function-return-type.mdx
│  │  │  │     │  │  │     ├─ 📄explicit-member-accessibility.mdx
│  │  │  │     │  │  │     ├─ 📄explicit-module-boundary-types.mdx
│  │  │  │     │  │  │     ├─ 📄func-call-spacing.md
│  │  │  │     │  │  │     ├─ 📄indent.md
│  │  │  │     │  │  │     ├─ 📄init-declarations.mdx
│  │  │  │     │  │  │     ├─ 📄key-spacing.md
│  │  │  │     │  │  │     ├─ 📄keyword-spacing.md
│  │  │  │     │  │  │     ├─ 📄lines-around-comment.md
│  │  │  │     │  │  │     ├─ 📄lines-between-class-members.md
│  │  │  │     │  │  │     ├─ 📄max-params.mdx
│  │  │  │     │  │  │     ├─ 📄member-delimiter-style.md
│  │  │  │     │  │  │     ├─ 📄member-ordering.mdx
│  │  │  │     │  │  │     ├─ 📄method-signature-style.mdx
│  │  │  │     │  │  │     ├─ 📄naming-convention.mdx
│  │  │  │     │  │  │     ├─ 📄no-array-constructor.mdx
│  │  │  │     │  │  │     ├─ 📄no-array-delete.mdx
│  │  │  │     │  │  │     ├─ 📄no-base-to-string.mdx
│  │  │  │     │  │  │     ├─ 📄no-confusing-non-null-assertion.mdx
│  │  │  │     │  │  │     ├─ 📄no-confusing-void-expression.mdx
│  │  │  │     │  │  │     ├─ 📄no-dupe-class-members.mdx
│  │  │  │     │  │  │     ├─ 📄no-duplicate-enum-values.mdx
│  │  │  │     │  │  │     ├─ 📄no-duplicate-imports.mdx
│  │  │  │     │  │  │     ├─ 📄no-duplicate-type-constituents.mdx
│  │  │  │     │  │  │     ├─ 📄no-dynamic-delete.mdx
│  │  │  │     │  │  │     ├─ 📄no-empty-function.mdx
│  │  │  │     │  │  │     ├─ 📄no-empty-interface.mdx
│  │  │  │     │  │  │     ├─ 📄no-empty-object-type.mdx
│  │  │  │     │  │  │     ├─ 📄no-explicit-any.mdx
│  │  │  │     │  │  │     ├─ 📄no-extra-non-null-assertion.mdx
│  │  │  │     │  │  │     ├─ 📄no-extra-parens.md
│  │  │  │     │  │  │     ├─ 📄no-extra-semi.md
│  │  │  │     │  │  │     ├─ 📄no-extraneous-class.mdx
│  │  │  │     │  │  │     ├─ 📄no-floating-promises.mdx
│  │  │  │     │  │  │     ├─ 📄no-for-in-array.mdx
│  │  │  │     │  │  │     ├─ 📄no-implied-eval.mdx
│  │  │  │     │  │  │     ├─ 📄no-import-type-side-effects.mdx
│  │  │  │     │  │  │     ├─ 📄no-inferrable-types.mdx
│  │  │  │     │  │  │     ├─ 📄no-invalid-this.mdx
│  │  │  │     │  │  │     ├─ 📄no-invalid-void-type.mdx
│  │  │  │     │  │  │     ├─ 📄no-loop-func.mdx
│  │  │  │     │  │  │     ├─ 📄no-loss-of-precision.mdx
│  │  │  │     │  │  │     ├─ 📄no-magic-numbers.mdx
│  │  │  │     │  │  │     ├─ 📄no-meaningless-void-operator.mdx
│  │  │  │     │  │  │     ├─ 📄no-misused-new.mdx
│  │  │  │     │  │  │     ├─ 📄no-misused-promises.mdx
│  │  │  │     │  │  │     ├─ 📄no-mixed-enums.mdx
│  │  │  │     │  │  │     ├─ 📄no-namespace.mdx
│  │  │  │     │  │  │     ├─ 📄no-non-null-asserted-nullish-coalescing.mdx
│  │  │  │     │  │  │     ├─ 📄no-non-null-asserted-optional-chain.mdx
│  │  │  │     │  │  │     ├─ 📄no-non-null-assertion.mdx
│  │  │  │     │  │  │     ├─ 📄no-parameter-properties.mdx
│  │  │  │     │  │  │     ├─ 📄no-redeclare.mdx
│  │  │  │     │  │  │     ├─ 📄no-redundant-type-constituents.mdx
│  │  │  │     │  │  │     ├─ 📄no-require-imports.mdx
│  │  │  │     │  │  │     ├─ 📄no-restricted-imports.mdx
│  │  │  │     │  │  │     ├─ 📄no-restricted-types.mdx
│  │  │  │     │  │  │     ├─ 📄no-shadow.mdx
│  │  │  │     │  │  │     ├─ 📄no-this-alias.mdx
│  │  │  │     │  │  │     ├─ 📄no-type-alias.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-boolean-literal-compare.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-condition.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-parameter-property-assignment.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-qualifier.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-template-expression.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-type-arguments.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-type-assertion.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-type-constraint.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-type-parameters.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-argument.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-assignment.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-call.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-declaration-merging.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-enum-comparison.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-function-type.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-member-access.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-return.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-unary-minus.mdx
│  │  │  │     │  │  │     ├─ 📄no-unused-expressions.mdx
│  │  │  │     │  │  │     ├─ 📄no-unused-vars.mdx
│  │  │  │     │  │  │     ├─ 📄no-use-before-define.mdx
│  │  │  │     │  │  │     ├─ 📄no-useless-constructor.mdx
│  │  │  │     │  │  │     ├─ 📄no-useless-empty-export.mdx
│  │  │  │     │  │  │     ├─ 📄no-useless-template-literals.mdx
│  │  │  │     │  │  │     ├─ 📄no-var-requires.mdx
│  │  │  │     │  │  │     ├─ 📄no-wrapper-object-types.mdx
│  │  │  │     │  │  │     ├─ 📄non-nullable-type-assertion-style.mdx
│  │  │  │     │  │  │     ├─ 📄object-curly-spacing.md
│  │  │  │     │  │  │     ├─ 📄only-throw-error.mdx
│  │  │  │     │  │  │     ├─ 📄padding-line-between-statements.md
│  │  │  │     │  │  │     ├─ 📄parameter-properties.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-as-const.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-destructuring.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-enum-initializers.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-find.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-for-of.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-function-type.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-includes.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-literal-enum-member.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-namespace-keyword.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-nullish-coalescing.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-optional-chain.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-promise-reject-errors.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-readonly-parameter-types.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-readonly.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-reduce-type-parameter.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-regexp-exec.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-return-this-type.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-string-starts-ends-with.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-ts-expect-error.mdx
│  │  │  │     │  │  │     ├─ 📄promise-function-async.mdx
│  │  │  │     │  │  │     ├─ 📄quotes.md
│  │  │  │     │  │  │     ├─ 📄README.md
│  │  │  │     │  │  │     ├─ 📄require-array-sort-compare.mdx
│  │  │  │     │  │  │     ├─ 📄require-await.mdx
│  │  │  │     │  │  │     ├─ 📄restrict-plus-operands.mdx
│  │  │  │     │  │  │     ├─ 📄restrict-template-expressions.mdx
│  │  │  │     │  │  │     ├─ 📄return-await.mdx
│  │  │  │     │  │  │     ├─ 📄semi.md
│  │  │  │     │  │  │     ├─ 📄sort-type-constituents.mdx
│  │  │  │     │  │  │     ├─ 📄sort-type-union-intersection-members.mdx
│  │  │  │     │  │  │     ├─ 📄space-before-blocks.md
│  │  │  │     │  │  │     ├─ 📄space-before-function-paren.md
│  │  │  │     │  │  │     ├─ 📄space-infix-ops.md
│  │  │  │     │  │  │     ├─ 📄strict-boolean-expressions.mdx
│  │  │  │     │  │  │     ├─ 📄switch-exhaustiveness-check.mdx
│  │  │  │     │  │  │     ├─ 📄TEMPLATE.md
│  │  │  │     │  │  │     ├─ 📄triple-slash-reference.mdx
│  │  │  │     │  │  │     ├─ 📄type-annotation-spacing.md
│  │  │  │     │  │  │     ├─ 📄typedef.mdx
│  │  │  │     │  │  │     ├─ 📄unbound-method.mdx
│  │  │  │     │  │  │     ├─ 📄unified-signatures.mdx
│  │  │  │     │  │  │     └─ 📄use-unknown-in-catch-callback-variable.mdx
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄eslint
│  │  │  │     │  │  │     ├─ 📄eslint.CMD
│  │  │  │     │  │  │     ├─ 📄eslint.ps1
│  │  │  │     │  │  │     ├─ 📄tsc
│  │  │  │     │  │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │  │     ├─ 📄tsserver
│  │  │  │     │  │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │  │     └─ 📄tsserver.ps1
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  ├─ 📄README.md
│  │  │  │     │  │  └─ 📄rules.d.ts
│  │  │  │     │  ├─ 📁parser
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄parser.d.ts
│  │  │  │     │  │  │  ├─ 📄parser.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser.js
│  │  │  │     │  │  │  └─ 📄parser.js.map
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄eslint
│  │  │  │     │  │  │     ├─ 📄eslint.CMD
│  │  │  │     │  │  │     ├─ 📄eslint.ps1
│  │  │  │     │  │  │     ├─ 📄tsc
│  │  │  │     │  │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │  │     ├─ 📄tsserver
│  │  │  │     │  │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │  │     └─ 📄tsserver.ps1
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  ├─ 📁scope-manager
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁definition
│  │  │  │     │  │  │  │  ├─ 📄CatchClauseDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄CatchClauseDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄CatchClauseDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄CatchClauseDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄ClassNameDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassNameDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassNameDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄ClassNameDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄Definition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Definition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Definition.js
│  │  │  │     │  │  │  │  ├─ 📄Definition.js.map
│  │  │  │     │  │  │  │  ├─ 📄DefinitionBase.d.ts
│  │  │  │     │  │  │  │  ├─ 📄DefinitionBase.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄DefinitionBase.js
│  │  │  │     │  │  │  │  ├─ 📄DefinitionBase.js.map
│  │  │  │     │  │  │  │  ├─ 📄DefinitionType.d.ts
│  │  │  │     │  │  │  │  ├─ 📄DefinitionType.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄DefinitionType.js
│  │  │  │     │  │  │  │  ├─ 📄DefinitionType.js.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionNameDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄FunctionNameDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionNameDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄FunctionNameDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄ImportBindingDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ImportBindingDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ImportBindingDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄ImportBindingDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄ParameterDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ParameterDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ParameterDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄ParameterDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumMemberDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSEnumMemberDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumMemberDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄TSEnumMemberDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumNameDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSEnumNameDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumNameDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄TSEnumNameDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSModuleNameDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSModuleNameDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSModuleNameDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄TSModuleNameDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄TypeDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TypeDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TypeDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄TypeDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄VariableDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄VariableDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄VariableDefinition.js
│  │  │  │     │  │  │  │  └─ 📄VariableDefinition.js.map
│  │  │  │     │  │  │  ├─ 📁lib
│  │  │  │     │  │  │  │  ├─ 📄base-config.d.ts
│  │  │  │     │  │  │  │  ├─ 📄base-config.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄base-config.js
│  │  │  │     │  │  │  │  ├─ 📄base-config.js.map
│  │  │  │     │  │  │  │  ├─ 📄decorators.d.ts
│  │  │  │     │  │  │  │  ├─ 📄decorators.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄decorators.js
│  │  │  │     │  │  │  │  ├─ 📄decorators.js.map
│  │  │  │     │  │  │  │  ├─ 📄decorators.legacy.d.ts
│  │  │  │     │  │  │  │  ├─ 📄decorators.legacy.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄decorators.legacy.js
│  │  │  │     │  │  │  │  ├─ 📄decorators.legacy.js.map
│  │  │  │     │  │  │  │  ├─ 📄dom.asynciterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄dom.asynciterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄dom.asynciterable.js
│  │  │  │     │  │  │  │  ├─ 📄dom.asynciterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄dom.d.ts
│  │  │  │     │  │  │  │  ├─ 📄dom.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄dom.iterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄dom.iterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄dom.iterable.js
│  │  │  │     │  │  │  │  ├─ 📄dom.iterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄dom.js
│  │  │  │     │  │  │  │  ├─ 📄dom.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.collection.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.collection.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.collection.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.collection.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.core.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.core.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.core.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.core.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.generator.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.generator.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.generator.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.generator.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.iterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.iterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.iterable.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.iterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.promise.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.proxy.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.proxy.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.proxy.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.proxy.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.reflect.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.reflect.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.reflect.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.reflect.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.wellknown.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.wellknown.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.wellknown.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.wellknown.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.array.include.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2016.array.include.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.array.include.js
│  │  │  │     │  │  │  │  ├─ 📄es2016.array.include.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2016.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2016.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2016.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2016.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2016.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.js
│  │  │  │     │  │  │  │  ├─ 📄es2016.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.date.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.date.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.date.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.date.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.object.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.object.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.object.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.object.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.sharedmemory.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.sharedmemory.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.sharedmemory.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.sharedmemory.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.typedarrays.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.typedarrays.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.typedarrays.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.typedarrays.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.asyncgenerator.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.asyncgenerator.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.asyncgenerator.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.asyncgenerator.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.asynciterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.asynciterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.asynciterable.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.asynciterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.promise.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.regexp.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.regexp.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.regexp.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.regexp.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.array.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.array.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.array.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.array.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.object.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.object.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.object.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.object.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.symbol.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.symbol.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.symbol.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.symbol.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.bigint.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.bigint.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.bigint.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.bigint.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.date.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.date.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.date.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.date.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.number.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.number.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.number.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.number.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.promise.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.sharedmemory.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.sharedmemory.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.sharedmemory.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.sharedmemory.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.symbol.wellknown.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.symbol.wellknown.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.symbol.wellknown.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.symbol.wellknown.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.promise.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.weakref.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.weakref.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.weakref.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.weakref.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.array.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.array.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.array.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.array.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.error.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.error.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.error.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.error.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.object.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.object.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.object.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.object.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.regexp.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.regexp.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.regexp.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.regexp.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.sharedmemory.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.sharedmemory.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.sharedmemory.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.sharedmemory.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.array.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.array.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.array.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.array.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.collection.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.collection.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.collection.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.collection.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.js.map
│  │  │  │     │  │  │  │  ├─ 📄es5.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es5.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es5.js
│  │  │  │     │  │  │  │  ├─ 📄es5.js.map
│  │  │  │     │  │  │  │  ├─ 📄es6.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es6.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es6.js
│  │  │  │     │  │  │  │  ├─ 📄es6.js.map
│  │  │  │     │  │  │  │  ├─ 📄es7.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es7.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es7.js
│  │  │  │     │  │  │  │  ├─ 📄es7.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.array.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.array.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.array.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.array.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.asynciterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.asynciterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.asynciterable.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.asynciterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.bigint.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.bigint.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.bigint.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.bigint.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.collection.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.collection.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.collection.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.collection.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.decorators.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.decorators.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.decorators.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.decorators.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.disposable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.disposable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.disposable.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.disposable.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.full.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.intl.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.object.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.object.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.object.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.object.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.promise.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.regexp.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.regexp.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.regexp.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.regexp.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.string.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.symbol.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.symbol.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.symbol.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.symbol.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.weakref.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.weakref.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.weakref.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.weakref.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄lib.d.ts
│  │  │  │     │  │  │  │  ├─ 📄lib.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄lib.js
│  │  │  │     │  │  │  │  ├─ 📄lib.js.map
│  │  │  │     │  │  │  │  ├─ 📄scripthost.d.ts
│  │  │  │     │  │  │  │  ├─ 📄scripthost.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄scripthost.js
│  │  │  │     │  │  │  │  ├─ 📄scripthost.js.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.asynciterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄webworker.asynciterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.asynciterable.js
│  │  │  │     │  │  │  │  ├─ 📄webworker.asynciterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.d.ts
│  │  │  │     │  │  │  │  ├─ 📄webworker.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.importscripts.d.ts
│  │  │  │     │  │  │  │  ├─ 📄webworker.importscripts.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.importscripts.js
│  │  │  │     │  │  │  │  ├─ 📄webworker.importscripts.js.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.iterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄webworker.iterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.iterable.js
│  │  │  │     │  │  │  │  ├─ 📄webworker.iterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.js
│  │  │  │     │  │  │  │  └─ 📄webworker.js.map
│  │  │  │     │  │  │  ├─ 📁referencer
│  │  │  │     │  │  │  │  ├─ 📄ClassVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄ClassVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄ExportVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ExportVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ExportVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄ExportVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄ImportVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ImportVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ImportVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄ImportVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄PatternVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄PatternVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄PatternVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄PatternVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄Reference.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Reference.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Reference.js
│  │  │  │     │  │  │  │  ├─ 📄Reference.js.map
│  │  │  │     │  │  │  │  ├─ 📄Referencer.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Referencer.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Referencer.js
│  │  │  │     │  │  │  │  ├─ 📄Referencer.js.map
│  │  │  │     │  │  │  │  ├─ 📄TypeVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TypeVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TypeVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄TypeVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄Visitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Visitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Visitor.js
│  │  │  │     │  │  │  │  ├─ 📄Visitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄VisitorBase.d.ts
│  │  │  │     │  │  │  │  ├─ 📄VisitorBase.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄VisitorBase.js
│  │  │  │     │  │  │  │  └─ 📄VisitorBase.js.map
│  │  │  │     │  │  │  ├─ 📁scope
│  │  │  │     │  │  │  │  ├─ 📄BlockScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄BlockScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄BlockScope.js
│  │  │  │     │  │  │  │  ├─ 📄BlockScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄CatchScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄CatchScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄CatchScope.js
│  │  │  │     │  │  │  │  ├─ 📄CatchScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ClassFieldInitializerScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassFieldInitializerScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassFieldInitializerScope.js
│  │  │  │     │  │  │  │  ├─ 📄ClassFieldInitializerScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ClassScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassScope.js
│  │  │  │     │  │  │  │  ├─ 📄ClassScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ClassStaticBlockScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassStaticBlockScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassStaticBlockScope.js
│  │  │  │     │  │  │  │  ├─ 📄ClassStaticBlockScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ConditionalTypeScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ConditionalTypeScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ConditionalTypeScope.js
│  │  │  │     │  │  │  │  ├─ 📄ConditionalTypeScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ForScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ForScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ForScope.js
│  │  │  │     │  │  │  │  ├─ 📄ForScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionExpressionNameScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄FunctionExpressionNameScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionExpressionNameScope.js
│  │  │  │     │  │  │  │  ├─ 📄FunctionExpressionNameScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄FunctionScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionScope.js
│  │  │  │     │  │  │  │  ├─ 📄FunctionScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionTypeScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄FunctionTypeScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionTypeScope.js
│  │  │  │     │  │  │  │  ├─ 📄FunctionTypeScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄GlobalScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄GlobalScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄GlobalScope.js
│  │  │  │     │  │  │  │  ├─ 📄GlobalScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄MappedTypeScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄MappedTypeScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄MappedTypeScope.js
│  │  │  │     │  │  │  │  ├─ 📄MappedTypeScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ModuleScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ModuleScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ModuleScope.js
│  │  │  │     │  │  │  │  ├─ 📄ModuleScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄Scope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Scope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Scope.js
│  │  │  │     │  │  │  │  ├─ 📄Scope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ScopeBase.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ScopeBase.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ScopeBase.js
│  │  │  │     │  │  │  │  ├─ 📄ScopeBase.js.map
│  │  │  │     │  │  │  │  ├─ 📄ScopeType.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ScopeType.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ScopeType.js
│  │  │  │     │  │  │  │  ├─ 📄ScopeType.js.map
│  │  │  │     │  │  │  │  ├─ 📄SwitchScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄SwitchScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄SwitchScope.js
│  │  │  │     │  │  │  │  ├─ 📄SwitchScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSEnumScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumScope.js
│  │  │  │     │  │  │  │  ├─ 📄TSEnumScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSModuleScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSModuleScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSModuleScope.js
│  │  │  │     │  │  │  │  ├─ 📄TSModuleScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄TypeScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TypeScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TypeScope.js
│  │  │  │     │  │  │  │  ├─ 📄TypeScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄WithScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄WithScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄WithScope.js
│  │  │  │     │  │  │  │  └─ 📄WithScope.js.map
│  │  │  │     │  │  │  ├─ 📁variable
│  │  │  │     │  │  │  │  ├─ 📄ESLintScopeVariable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ESLintScopeVariable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ESLintScopeVariable.js
│  │  │  │     │  │  │  │  ├─ 📄ESLintScopeVariable.js.map
│  │  │  │     │  │  │  │  ├─ 📄ImplicitLibVariable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ImplicitLibVariable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ImplicitLibVariable.js
│  │  │  │     │  │  │  │  ├─ 📄ImplicitLibVariable.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄Variable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Variable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Variable.js
│  │  │  │     │  │  │  │  ├─ 📄Variable.js.map
│  │  │  │     │  │  │  │  ├─ 📄VariableBase.d.ts
│  │  │  │     │  │  │  │  ├─ 📄VariableBase.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄VariableBase.js
│  │  │  │     │  │  │  │  └─ 📄VariableBase.js.map
│  │  │  │     │  │  │  ├─ 📄analyze.d.ts
│  │  │  │     │  │  │  ├─ 📄analyze.d.ts.map
│  │  │  │     │  │  │  ├─ 📄analyze.js
│  │  │  │     │  │  │  ├─ 📄analyze.js.map
│  │  │  │     │  │  │  ├─ 📄assert.d.ts
│  │  │  │     │  │  │  ├─ 📄assert.d.ts.map
│  │  │  │     │  │  │  ├─ 📄assert.js
│  │  │  │     │  │  │  ├─ 📄assert.js.map
│  │  │  │     │  │  │  ├─ 📄ID.d.ts
│  │  │  │     │  │  │  ├─ 📄ID.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ID.js
│  │  │  │     │  │  │  ├─ 📄ID.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄ScopeManager.d.ts
│  │  │  │     │  │  │  ├─ 📄ScopeManager.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ScopeManager.js
│  │  │  │     │  │  │  └─ 📄ScopeManager.js.map
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  ├─ 📁type-utils
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁typeOrValueSpecifiers
│  │  │  │     │  │  │  │  ├─ 📄specifierNameMatches.d.ts
│  │  │  │     │  │  │  │  ├─ 📄specifierNameMatches.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄specifierNameMatches.js
│  │  │  │     │  │  │  │  ├─ 📄specifierNameMatches.js.map
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInFile.js
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInFile.js.map
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInLib.d.ts
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInLib.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInLib.js
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInLib.js.map
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInPackageDeclarationFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInPackageDeclarationFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInPackageDeclarationFile.js
│  │  │  │     │  │  │  │  └─ 📄typeDeclaredInPackageDeclarationFile.js.map
│  │  │  │     │  │  │  ├─ 📄builtinSymbolLikes.d.ts
│  │  │  │     │  │  │  ├─ 📄builtinSymbolLikes.d.ts.map
│  │  │  │     │  │  │  ├─ 📄builtinSymbolLikes.js
│  │  │  │     │  │  │  ├─ 📄builtinSymbolLikes.js.map
│  │  │  │     │  │  │  ├─ 📄containsAllTypesByName.d.ts
│  │  │  │     │  │  │  ├─ 📄containsAllTypesByName.d.ts.map
│  │  │  │     │  │  │  ├─ 📄containsAllTypesByName.js
│  │  │  │     │  │  │  ├─ 📄containsAllTypesByName.js.map
│  │  │  │     │  │  │  ├─ 📄getConstrainedTypeAtLocation.d.ts
│  │  │  │     │  │  │  ├─ 📄getConstrainedTypeAtLocation.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getConstrainedTypeAtLocation.js
│  │  │  │     │  │  │  ├─ 📄getConstrainedTypeAtLocation.js.map
│  │  │  │     │  │  │  ├─ 📄getContextualType.d.ts
│  │  │  │     │  │  │  ├─ 📄getContextualType.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getContextualType.js
│  │  │  │     │  │  │  ├─ 📄getContextualType.js.map
│  │  │  │     │  │  │  ├─ 📄getDeclaration.d.ts
│  │  │  │     │  │  │  ├─ 📄getDeclaration.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getDeclaration.js
│  │  │  │     │  │  │  ├─ 📄getDeclaration.js.map
│  │  │  │     │  │  │  ├─ 📄getSourceFileOfNode.d.ts
│  │  │  │     │  │  │  ├─ 📄getSourceFileOfNode.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getSourceFileOfNode.js
│  │  │  │     │  │  │  ├─ 📄getSourceFileOfNode.js.map
│  │  │  │     │  │  │  ├─ 📄getTypeName.d.ts
│  │  │  │     │  │  │  ├─ 📄getTypeName.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getTypeName.js
│  │  │  │     │  │  │  ├─ 📄getTypeName.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄isSymbolFromDefaultLibrary.d.ts
│  │  │  │     │  │  │  ├─ 📄isSymbolFromDefaultLibrary.d.ts.map
│  │  │  │     │  │  │  ├─ 📄isSymbolFromDefaultLibrary.js
│  │  │  │     │  │  │  ├─ 📄isSymbolFromDefaultLibrary.js.map
│  │  │  │     │  │  │  ├─ 📄isTypeReadonly.d.ts
│  │  │  │     │  │  │  ├─ 📄isTypeReadonly.d.ts.map
│  │  │  │     │  │  │  ├─ 📄isTypeReadonly.js
│  │  │  │     │  │  │  ├─ 📄isTypeReadonly.js.map
│  │  │  │     │  │  │  ├─ 📄isUnsafeAssignment.d.ts
│  │  │  │     │  │  │  ├─ 📄isUnsafeAssignment.d.ts.map
│  │  │  │     │  │  │  ├─ 📄isUnsafeAssignment.js
│  │  │  │     │  │  │  ├─ 📄isUnsafeAssignment.js.map
│  │  │  │     │  │  │  ├─ 📄predicates.d.ts
│  │  │  │     │  │  │  ├─ 📄predicates.d.ts.map
│  │  │  │     │  │  │  ├─ 📄predicates.js
│  │  │  │     │  │  │  ├─ 📄predicates.js.map
│  │  │  │     │  │  │  ├─ 📄propertyTypes.d.ts
│  │  │  │     │  │  │  ├─ 📄propertyTypes.d.ts.map
│  │  │  │     │  │  │  ├─ 📄propertyTypes.js
│  │  │  │     │  │  │  ├─ 📄propertyTypes.js.map
│  │  │  │     │  │  │  ├─ 📄requiresQuoting.d.ts
│  │  │  │     │  │  │  ├─ 📄requiresQuoting.d.ts.map
│  │  │  │     │  │  │  ├─ 📄requiresQuoting.js
│  │  │  │     │  │  │  ├─ 📄requiresQuoting.js.map
│  │  │  │     │  │  │  ├─ 📄typeFlagUtils.d.ts
│  │  │  │     │  │  │  ├─ 📄typeFlagUtils.d.ts.map
│  │  │  │     │  │  │  ├─ 📄typeFlagUtils.js
│  │  │  │     │  │  │  ├─ 📄typeFlagUtils.js.map
│  │  │  │     │  │  │  ├─ 📄TypeOrValueSpecifier.d.ts
│  │  │  │     │  │  │  ├─ 📄TypeOrValueSpecifier.d.ts.map
│  │  │  │     │  │  │  ├─ 📄TypeOrValueSpecifier.js
│  │  │  │     │  │  │  └─ 📄TypeOrValueSpecifier.js.map
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄tsc
│  │  │  │     │  │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │  │     ├─ 📄tsserver
│  │  │  │     │  │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │  │     └─ 📄tsserver.ps1
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  ├─ 📁utils
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁ast-utils
│  │  │  │     │  │  │  │  ├─ 📁eslint-utils
│  │  │  │     │  │  │  │  │  ├─ 📄astUtilities.d.ts
│  │  │  │     │  │  │  │  │  ├─ 📄astUtilities.d.ts.map
│  │  │  │     │  │  │  │  │  ├─ 📄astUtilities.js
│  │  │  │     │  │  │  │  │  ├─ 📄astUtilities.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄PatternMatcher.d.ts
│  │  │  │     │  │  │  │  │  ├─ 📄PatternMatcher.d.ts.map
│  │  │  │     │  │  │  │  │  ├─ 📄PatternMatcher.js
│  │  │  │     │  │  │  │  │  ├─ 📄PatternMatcher.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄predicates.d.ts
│  │  │  │     │  │  │  │  │  ├─ 📄predicates.d.ts.map
│  │  │  │     │  │  │  │  │  ├─ 📄predicates.js
│  │  │  │     │  │  │  │  │  ├─ 📄predicates.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄ReferenceTracker.d.ts
│  │  │  │     │  │  │  │  │  ├─ 📄ReferenceTracker.d.ts.map
│  │  │  │     │  │  │  │  │  ├─ 📄ReferenceTracker.js
│  │  │  │     │  │  │  │  │  ├─ 📄ReferenceTracker.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄scopeAnalysis.d.ts
│  │  │  │     │  │  │  │  │  ├─ 📄scopeAnalysis.d.ts.map
│  │  │  │     │  │  │  │  │  ├─ 📄scopeAnalysis.js
│  │  │  │     │  │  │  │  │  └─ 📄scopeAnalysis.js.map
│  │  │  │     │  │  │  │  ├─ 📄helpers.d.ts
│  │  │  │     │  │  │  │  ├─ 📄helpers.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄helpers.js
│  │  │  │     │  │  │  │  ├─ 📄helpers.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄misc.d.ts
│  │  │  │     │  │  │  │  ├─ 📄misc.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄misc.js
│  │  │  │     │  │  │  │  ├─ 📄misc.js.map
│  │  │  │     │  │  │  │  ├─ 📄predicates.d.ts
│  │  │  │     │  │  │  │  ├─ 📄predicates.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄predicates.js
│  │  │  │     │  │  │  │  └─ 📄predicates.js.map
│  │  │  │     │  │  │  ├─ 📁eslint-utils
│  │  │  │     │  │  │  │  ├─ 📄applyDefault.d.ts
│  │  │  │     │  │  │  │  ├─ 📄applyDefault.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄applyDefault.js
│  │  │  │     │  │  │  │  ├─ 📄applyDefault.js.map
│  │  │  │     │  │  │  │  ├─ 📄deepMerge.d.ts
│  │  │  │     │  │  │  │  ├─ 📄deepMerge.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄deepMerge.js
│  │  │  │     │  │  │  │  ├─ 📄deepMerge.js.map
│  │  │  │     │  │  │  │  ├─ 📄getParserServices.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getParserServices.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getParserServices.js
│  │  │  │     │  │  │  │  ├─ 📄getParserServices.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄InferTypesFromRule.d.ts
│  │  │  │     │  │  │  │  ├─ 📄InferTypesFromRule.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄InferTypesFromRule.js
│  │  │  │     │  │  │  │  ├─ 📄InferTypesFromRule.js.map
│  │  │  │     │  │  │  │  ├─ 📄nullThrows.d.ts
│  │  │  │     │  │  │  │  ├─ 📄nullThrows.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄nullThrows.js
│  │  │  │     │  │  │  │  ├─ 📄nullThrows.js.map
│  │  │  │     │  │  │  │  ├─ 📄parserSeemsToBeTSESLint.d.ts
│  │  │  │     │  │  │  │  ├─ 📄parserSeemsToBeTSESLint.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄parserSeemsToBeTSESLint.js
│  │  │  │     │  │  │  │  ├─ 📄parserSeemsToBeTSESLint.js.map
│  │  │  │     │  │  │  │  ├─ 📄RuleCreator.d.ts
│  │  │  │     │  │  │  │  ├─ 📄RuleCreator.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄RuleCreator.js
│  │  │  │     │  │  │  │  └─ 📄RuleCreator.js.map
│  │  │  │     │  │  │  ├─ 📁ts-eslint
│  │  │  │     │  │  │  │  ├─ 📁eslint
│  │  │  │     │  │  │  │  │  ├─ 📄ESLintShared.d.ts
│  │  │  │     │  │  │  │  │  ├─ 📄ESLintShared.d.ts.map
│  │  │  │     │  │  │  │  │  ├─ 📄ESLintShared.js
│  │  │  │     │  │  │  │  │  ├─ 📄ESLintShared.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄FlatESLint.d.ts
│  │  │  │     │  │  │  │  │  ├─ 📄FlatESLint.d.ts.map
│  │  │  │     │  │  │  │  │  ├─ 📄FlatESLint.js
│  │  │  │     │  │  │  │  │  ├─ 📄FlatESLint.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄LegacyESLint.d.ts
│  │  │  │     │  │  │  │  │  ├─ 📄LegacyESLint.d.ts.map
│  │  │  │     │  │  │  │  │  ├─ 📄LegacyESLint.js
│  │  │  │     │  │  │  │  │  └─ 📄LegacyESLint.js.map
│  │  │  │     │  │  │  │  ├─ 📄AST.d.ts
│  │  │  │     │  │  │  │  ├─ 📄AST.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄AST.js
│  │  │  │     │  │  │  │  ├─ 📄AST.js.map
│  │  │  │     │  │  │  │  ├─ 📄Config.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Config.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Config.js
│  │  │  │     │  │  │  │  ├─ 📄Config.js.map
│  │  │  │     │  │  │  │  ├─ 📄ESLint.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ESLint.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ESLint.js
│  │  │  │     │  │  │  │  ├─ 📄ESLint.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄Linter.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Linter.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Linter.js
│  │  │  │     │  │  │  │  ├─ 📄Linter.js.map
│  │  │  │     │  │  │  │  ├─ 📄Parser.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Parser.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Parser.js
│  │  │  │     │  │  │  │  ├─ 📄Parser.js.map
│  │  │  │     │  │  │  │  ├─ 📄ParserOptions.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ParserOptions.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ParserOptions.js
│  │  │  │     │  │  │  │  ├─ 📄ParserOptions.js.map
│  │  │  │     │  │  │  │  ├─ 📄Processor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Processor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Processor.js
│  │  │  │     │  │  │  │  ├─ 📄Processor.js.map
│  │  │  │     │  │  │  │  ├─ 📄Rule.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Rule.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Rule.js
│  │  │  │     │  │  │  │  ├─ 📄Rule.js.map
│  │  │  │     │  │  │  │  ├─ 📄RuleTester.d.ts
│  │  │  │     │  │  │  │  ├─ 📄RuleTester.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄RuleTester.js
│  │  │  │     │  │  │  │  ├─ 📄RuleTester.js.map
│  │  │  │     │  │  │  │  ├─ 📄Scope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Scope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Scope.js
│  │  │  │     │  │  │  │  ├─ 📄Scope.js.map
│  │  │  │     │  │  │  │  ├─ 📄SourceCode.d.ts
│  │  │  │     │  │  │  │  ├─ 📄SourceCode.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄SourceCode.js
│  │  │  │     │  │  │  │  └─ 📄SourceCode.js.map
│  │  │  │     │  │  │  ├─ 📁ts-utils
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄isArray.d.ts
│  │  │  │     │  │  │  │  ├─ 📄isArray.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄isArray.js
│  │  │  │     │  │  │  │  └─ 📄isArray.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄json-schema.d.ts
│  │  │  │     │  │  │  ├─ 📄json-schema.d.ts.map
│  │  │  │     │  │  │  ├─ 📄json-schema.js
│  │  │  │     │  │  │  ├─ 📄json-schema.js.map
│  │  │  │     │  │  │  ├─ 📄ts-estree.d.ts
│  │  │  │     │  │  │  ├─ 📄ts-estree.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ts-estree.js
│  │  │  │     │  │  │  └─ 📄ts-estree.js.map
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄eslint
│  │  │  │     │  │  │     ├─ 📄eslint.CMD
│  │  │  │     │  │  │     └─ 📄eslint.ps1
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁visitor-keys
│  │  │  │     │     ├─ 📁dist
│  │  │  │     │     │  ├─ 📄get-keys.d.ts
│  │  │  │     │     │  ├─ 📄get-keys.d.ts.map
│  │  │  │     │     │  ├─ 📄get-keys.js
│  │  │  │     │     │  ├─ 📄get-keys.js.map
│  │  │  │     │     │  ├─ 📄index.d.ts
│  │  │  │     │     │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  ├─ 📄index.js
│  │  │  │     │     │  ├─ 📄index.js.map
│  │  │  │     │     │  ├─ 📄visitor-keys.d.ts
│  │  │  │     │     │  ├─ 📄visitor-keys.d.ts.map
│  │  │  │     │     │  ├─ 📄visitor-keys.js
│  │  │  │     │     │  └─ 📄visitor-keys.js.map
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁eslint
│  │  │  │     │  ├─ 📁bin
│  │  │  │     │  │  └─ 📄eslint.js
│  │  │  │     │  ├─ 📁conf
│  │  │  │     │  │  ├─ 📄default-cli-options.js
│  │  │  │     │  │  ├─ 📄ecma-version.js
│  │  │  │     │  │  ├─ 📄globals.js
│  │  │  │     │  │  ├─ 📄replacements.json
│  │  │  │     │  │  └─ 📄rule-type-list.json
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📁cli-engine
│  │  │  │     │  │  │  ├─ 📁formatters
│  │  │  │     │  │  │  │  ├─ 📄formatters-meta.json
│  │  │  │     │  │  │  │  ├─ 📄html.js
│  │  │  │     │  │  │  │  ├─ 📄json-with-metadata.js
│  │  │  │     │  │  │  │  ├─ 📄json.js
│  │  │  │     │  │  │  │  └─ 📄stylish.js
│  │  │  │     │  │  │  ├─ 📄cli-engine.js
│  │  │  │     │  │  │  ├─ 📄file-enumerator.js
│  │  │  │     │  │  │  ├─ 📄hash.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄lint-result-cache.js
│  │  │  │     │  │  │  └─ 📄load-rules.js
│  │  │  │     │  │  ├─ 📁config
│  │  │  │     │  │  │  ├─ 📄default-config.js
│  │  │  │     │  │  │  ├─ 📄flat-config-array.js
│  │  │  │     │  │  │  ├─ 📄flat-config-helpers.js
│  │  │  │     │  │  │  ├─ 📄flat-config-schema.js
│  │  │  │     │  │  │  └─ 📄rule-validator.js
│  │  │  │     │  │  ├─ 📁eslint
│  │  │  │     │  │  │  ├─ 📄eslint-helpers.js
│  │  │  │     │  │  │  ├─ 📄eslint.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄legacy-eslint.js
│  │  │  │     │  │  ├─ 📁languages
│  │  │  │     │  │  │  └─ 📁js
│  │  │  │     │  │  │     ├─ 📁source-code
│  │  │  │     │  │  │     │  ├─ 📁token-store
│  │  │  │     │  │  │     │  │  ├─ 📄backward-token-comment-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄backward-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄cursors.js
│  │  │  │     │  │  │     │  │  ├─ 📄decorative-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄filter-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄forward-token-comment-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄forward-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  │     │  │  ├─ 📄limit-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄padded-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄skip-cursor.js
│  │  │  │     │  │  │     │  │  └─ 📄utils.js
│  │  │  │     │  │  │     │  ├─ 📄index.js
│  │  │  │     │  │  │     │  └─ 📄source-code.js
│  │  │  │     │  │  │     ├─ 📄index.js
│  │  │  │     │  │  │     └─ 📄validate-language-options.js
│  │  │  │     │  │  ├─ 📁linter
│  │  │  │     │  │  │  ├─ 📁code-path-analysis
│  │  │  │     │  │  │  │  ├─ 📄code-path-analyzer.js
│  │  │  │     │  │  │  │  ├─ 📄code-path-segment.js
│  │  │  │     │  │  │  │  ├─ 📄code-path-state.js
│  │  │  │     │  │  │  │  ├─ 📄code-path.js
│  │  │  │     │  │  │  │  ├─ 📄debug-helpers.js
│  │  │  │     │  │  │  │  ├─ 📄fork-context.js
│  │  │  │     │  │  │  │  └─ 📄id-generator.js
│  │  │  │     │  │  │  ├─ 📄apply-disable-directives.js
│  │  │  │     │  │  │  ├─ 📄config-comment-parser.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄interpolate.js
│  │  │  │     │  │  │  ├─ 📄linter.js
│  │  │  │     │  │  │  ├─ 📄node-event-generator.js
│  │  │  │     │  │  │  ├─ 📄report-translator.js
│  │  │  │     │  │  │  ├─ 📄rule-fixer.js
│  │  │  │     │  │  │  ├─ 📄rules.js
│  │  │  │     │  │  │  ├─ 📄safe-emitter.js
│  │  │  │     │  │  │  ├─ 📄source-code-fixer.js
│  │  │  │     │  │  │  ├─ 📄timing.js
│  │  │  │     │  │  │  └─ 📄vfile.js
│  │  │  │     │  │  ├─ 📁rule-tester
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄rule-tester.js
│  │  │  │     │  │  ├─ 📁rules
│  │  │  │     │  │  │  ├─ 📁utils
│  │  │  │     │  │  │  │  ├─ 📁unicode
│  │  │  │     │  │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-combining-character.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-emoji-modifier.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-regional-indicator-symbol.js
│  │  │  │     │  │  │  │  │  └─ 📄is-surrogate-pair.js
│  │  │  │     │  │  │  │  ├─ 📄ast-utils.js
│  │  │  │     │  │  │  │  ├─ 📄char-source.js
│  │  │  │     │  │  │  │  ├─ 📄fix-tracker.js
│  │  │  │     │  │  │  │  ├─ 📄keywords.js
│  │  │  │     │  │  │  │  ├─ 📄lazy-loading-rule-map.js
│  │  │  │     │  │  │  │  └─ 📄regular-expressions.js
│  │  │  │     │  │  │  ├─ 📄accessor-pairs.js
│  │  │  │     │  │  │  ├─ 📄array-bracket-newline.js
│  │  │  │     │  │  │  ├─ 📄array-bracket-spacing.js
│  │  │  │     │  │  │  ├─ 📄array-callback-return.js
│  │  │  │     │  │  │  ├─ 📄array-element-newline.js
│  │  │  │     │  │  │  ├─ 📄arrow-body-style.js
│  │  │  │     │  │  │  ├─ 📄arrow-parens.js
│  │  │  │     │  │  │  ├─ 📄arrow-spacing.js
│  │  │  │     │  │  │  ├─ 📄block-scoped-var.js
│  │  │  │     │  │  │  ├─ 📄block-spacing.js
│  │  │  │     │  │  │  ├─ 📄brace-style.js
│  │  │  │     │  │  │  ├─ 📄callback-return.js
│  │  │  │     │  │  │  ├─ 📄camelcase.js
│  │  │  │     │  │  │  ├─ 📄capitalized-comments.js
│  │  │  │     │  │  │  ├─ 📄class-methods-use-this.js
│  │  │  │     │  │  │  ├─ 📄comma-dangle.js
│  │  │  │     │  │  │  ├─ 📄comma-spacing.js
│  │  │  │     │  │  │  ├─ 📄comma-style.js
│  │  │  │     │  │  │  ├─ 📄complexity.js
│  │  │  │     │  │  │  ├─ 📄computed-property-spacing.js
│  │  │  │     │  │  │  ├─ 📄consistent-return.js
│  │  │  │     │  │  │  ├─ 📄consistent-this.js
│  │  │  │     │  │  │  ├─ 📄constructor-super.js
│  │  │  │     │  │  │  ├─ 📄curly.js
│  │  │  │     │  │  │  ├─ 📄default-case-last.js
│  │  │  │     │  │  │  ├─ 📄default-case.js
│  │  │  │     │  │  │  ├─ 📄default-param-last.js
│  │  │  │     │  │  │  ├─ 📄dot-location.js
│  │  │  │     │  │  │  ├─ 📄dot-notation.js
│  │  │  │     │  │  │  ├─ 📄eol-last.js
│  │  │  │     │  │  │  ├─ 📄eqeqeq.js
│  │  │  │     │  │  │  ├─ 📄for-direction.js
│  │  │  │     │  │  │  ├─ 📄func-call-spacing.js
│  │  │  │     │  │  │  ├─ 📄func-name-matching.js
│  │  │  │     │  │  │  ├─ 📄func-names.js
│  │  │  │     │  │  │  ├─ 📄func-style.js
│  │  │  │     │  │  │  ├─ 📄function-call-argument-newline.js
│  │  │  │     │  │  │  ├─ 📄function-paren-newline.js
│  │  │  │     │  │  │  ├─ 📄generator-star-spacing.js
│  │  │  │     │  │  │  ├─ 📄getter-return.js
│  │  │  │     │  │  │  ├─ 📄global-require.js
│  │  │  │     │  │  │  ├─ 📄grouped-accessor-pairs.js
│  │  │  │     │  │  │  ├─ 📄guard-for-in.js
│  │  │  │     │  │  │  ├─ 📄handle-callback-err.js
│  │  │  │     │  │  │  ├─ 📄id-blacklist.js
│  │  │  │     │  │  │  ├─ 📄id-denylist.js
│  │  │  │     │  │  │  ├─ 📄id-length.js
│  │  │  │     │  │  │  ├─ 📄id-match.js
│  │  │  │     │  │  │  ├─ 📄implicit-arrow-linebreak.js
│  │  │  │     │  │  │  ├─ 📄indent-legacy.js
│  │  │  │     │  │  │  ├─ 📄indent.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄init-declarations.js
│  │  │  │     │  │  │  ├─ 📄jsx-quotes.js
│  │  │  │     │  │  │  ├─ 📄key-spacing.js
│  │  │  │     │  │  │  ├─ 📄keyword-spacing.js
│  │  │  │     │  │  │  ├─ 📄line-comment-position.js
│  │  │  │     │  │  │  ├─ 📄linebreak-style.js
│  │  │  │     │  │  │  ├─ 📄lines-around-comment.js
│  │  │  │     │  │  │  ├─ 📄lines-around-directive.js
│  │  │  │     │  │  │  ├─ 📄lines-between-class-members.js
│  │  │  │     │  │  │  ├─ 📄logical-assignment-operators.js
│  │  │  │     │  │  │  ├─ 📄max-classes-per-file.js
│  │  │  │     │  │  │  ├─ 📄max-depth.js
│  │  │  │     │  │  │  ├─ 📄max-len.js
│  │  │  │     │  │  │  ├─ 📄max-lines-per-function.js
│  │  │  │     │  │  │  ├─ 📄max-lines.js
│  │  │  │     │  │  │  ├─ 📄max-nested-callbacks.js
│  │  │  │     │  │  │  ├─ 📄max-params.js
│  │  │  │     │  │  │  ├─ 📄max-statements-per-line.js
│  │  │  │     │  │  │  ├─ 📄max-statements.js
│  │  │  │     │  │  │  ├─ 📄multiline-comment-style.js
│  │  │  │     │  │  │  ├─ 📄multiline-ternary.js
│  │  │  │     │  │  │  ├─ 📄new-cap.js
│  │  │  │     │  │  │  ├─ 📄new-parens.js
│  │  │  │     │  │  │  ├─ 📄newline-after-var.js
│  │  │  │     │  │  │  ├─ 📄newline-before-return.js
│  │  │  │     │  │  │  ├─ 📄newline-per-chained-call.js
│  │  │  │     │  │  │  ├─ 📄no-alert.js
│  │  │  │     │  │  │  ├─ 📄no-array-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-async-promise-executor.js
│  │  │  │     │  │  │  ├─ 📄no-await-in-loop.js
│  │  │  │     │  │  │  ├─ 📄no-bitwise.js
│  │  │  │     │  │  │  ├─ 📄no-buffer-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-caller.js
│  │  │  │     │  │  │  ├─ 📄no-case-declarations.js
│  │  │  │     │  │  │  ├─ 📄no-catch-shadow.js
│  │  │  │     │  │  │  ├─ 📄no-class-assign.js
│  │  │  │     │  │  │  ├─ 📄no-compare-neg-zero.js
│  │  │  │     │  │  │  ├─ 📄no-cond-assign.js
│  │  │  │     │  │  │  ├─ 📄no-confusing-arrow.js
│  │  │  │     │  │  │  ├─ 📄no-console.js
│  │  │  │     │  │  │  ├─ 📄no-const-assign.js
│  │  │  │     │  │  │  ├─ 📄no-constant-binary-expression.js
│  │  │  │     │  │  │  ├─ 📄no-constant-condition.js
│  │  │  │     │  │  │  ├─ 📄no-constructor-return.js
│  │  │  │     │  │  │  ├─ 📄no-continue.js
│  │  │  │     │  │  │  ├─ 📄no-control-regex.js
│  │  │  │     │  │  │  ├─ 📄no-debugger.js
│  │  │  │     │  │  │  ├─ 📄no-delete-var.js
│  │  │  │     │  │  │  ├─ 📄no-div-regex.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-args.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-class-members.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-else-if.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-keys.js
│  │  │  │     │  │  │  ├─ 📄no-duplicate-case.js
│  │  │  │     │  │  │  ├─ 📄no-duplicate-imports.js
│  │  │  │     │  │  │  ├─ 📄no-else-return.js
│  │  │  │     │  │  │  ├─ 📄no-empty-character-class.js
│  │  │  │     │  │  │  ├─ 📄no-empty-function.js
│  │  │  │     │  │  │  ├─ 📄no-empty-pattern.js
│  │  │  │     │  │  │  ├─ 📄no-empty-static-block.js
│  │  │  │     │  │  │  ├─ 📄no-empty.js
│  │  │  │     │  │  │  ├─ 📄no-eq-null.js
│  │  │  │     │  │  │  ├─ 📄no-eval.js
│  │  │  │     │  │  │  ├─ 📄no-ex-assign.js
│  │  │  │     │  │  │  ├─ 📄no-extend-native.js
│  │  │  │     │  │  │  ├─ 📄no-extra-bind.js
│  │  │  │     │  │  │  ├─ 📄no-extra-boolean-cast.js
│  │  │  │     │  │  │  ├─ 📄no-extra-label.js
│  │  │  │     │  │  │  ├─ 📄no-extra-parens.js
│  │  │  │     │  │  │  ├─ 📄no-extra-semi.js
│  │  │  │     │  │  │  ├─ 📄no-fallthrough.js
│  │  │  │     │  │  │  ├─ 📄no-floating-decimal.js
│  │  │  │     │  │  │  ├─ 📄no-func-assign.js
│  │  │  │     │  │  │  ├─ 📄no-global-assign.js
│  │  │  │     │  │  │  ├─ 📄no-implicit-coercion.js
│  │  │  │     │  │  │  ├─ 📄no-implicit-globals.js
│  │  │  │     │  │  │  ├─ 📄no-implied-eval.js
│  │  │  │     │  │  │  ├─ 📄no-import-assign.js
│  │  │  │     │  │  │  ├─ 📄no-inline-comments.js
│  │  │  │     │  │  │  ├─ 📄no-inner-declarations.js
│  │  │  │     │  │  │  ├─ 📄no-invalid-regexp.js
│  │  │  │     │  │  │  ├─ 📄no-invalid-this.js
│  │  │  │     │  │  │  ├─ 📄no-irregular-whitespace.js
│  │  │  │     │  │  │  ├─ 📄no-iterator.js
│  │  │  │     │  │  │  ├─ 📄no-label-var.js
│  │  │  │     │  │  │  ├─ 📄no-labels.js
│  │  │  │     │  │  │  ├─ 📄no-lone-blocks.js
│  │  │  │     │  │  │  ├─ 📄no-lonely-if.js
│  │  │  │     │  │  │  ├─ 📄no-loop-func.js
│  │  │  │     │  │  │  ├─ 📄no-loss-of-precision.js
│  │  │  │     │  │  │  ├─ 📄no-magic-numbers.js
│  │  │  │     │  │  │  ├─ 📄no-misleading-character-class.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-operators.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-requires.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-spaces-and-tabs.js
│  │  │  │     │  │  │  ├─ 📄no-multi-assign.js
│  │  │  │     │  │  │  ├─ 📄no-multi-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-multi-str.js
│  │  │  │     │  │  │  ├─ 📄no-multiple-empty-lines.js
│  │  │  │     │  │  │  ├─ 📄no-native-reassign.js
│  │  │  │     │  │  │  ├─ 📄no-negated-condition.js
│  │  │  │     │  │  │  ├─ 📄no-negated-in-lhs.js
│  │  │  │     │  │  │  ├─ 📄no-nested-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-new-func.js
│  │  │  │     │  │  │  ├─ 📄no-new-native-nonconstructor.js
│  │  │  │     │  │  │  ├─ 📄no-new-object.js
│  │  │  │     │  │  │  ├─ 📄no-new-require.js
│  │  │  │     │  │  │  ├─ 📄no-new-symbol.js
│  │  │  │     │  │  │  ├─ 📄no-new-wrappers.js
│  │  │  │     │  │  │  ├─ 📄no-new.js
│  │  │  │     │  │  │  ├─ 📄no-nonoctal-decimal-escape.js
│  │  │  │     │  │  │  ├─ 📄no-obj-calls.js
│  │  │  │     │  │  │  ├─ 📄no-object-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-octal-escape.js
│  │  │  │     │  │  │  ├─ 📄no-octal.js
│  │  │  │     │  │  │  ├─ 📄no-param-reassign.js
│  │  │  │     │  │  │  ├─ 📄no-path-concat.js
│  │  │  │     │  │  │  ├─ 📄no-plusplus.js
│  │  │  │     │  │  │  ├─ 📄no-process-env.js
│  │  │  │     │  │  │  ├─ 📄no-process-exit.js
│  │  │  │     │  │  │  ├─ 📄no-promise-executor-return.js
│  │  │  │     │  │  │  ├─ 📄no-proto.js
│  │  │  │     │  │  │  ├─ 📄no-prototype-builtins.js
│  │  │  │     │  │  │  ├─ 📄no-redeclare.js
│  │  │  │     │  │  │  ├─ 📄no-regex-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-exports.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-globals.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-imports.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-modules.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-properties.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-syntax.js
│  │  │  │     │  │  │  ├─ 📄no-return-assign.js
│  │  │  │     │  │  │  ├─ 📄no-return-await.js
│  │  │  │     │  │  │  ├─ 📄no-script-url.js
│  │  │  │     │  │  │  ├─ 📄no-self-assign.js
│  │  │  │     │  │  │  ├─ 📄no-self-compare.js
│  │  │  │     │  │  │  ├─ 📄no-sequences.js
│  │  │  │     │  │  │  ├─ 📄no-setter-return.js
│  │  │  │     │  │  │  ├─ 📄no-shadow-restricted-names.js
│  │  │  │     │  │  │  ├─ 📄no-shadow.js
│  │  │  │     │  │  │  ├─ 📄no-spaced-func.js
│  │  │  │     │  │  │  ├─ 📄no-sparse-arrays.js
│  │  │  │     │  │  │  ├─ 📄no-sync.js
│  │  │  │     │  │  │  ├─ 📄no-tabs.js
│  │  │  │     │  │  │  ├─ 📄no-template-curly-in-string.js
│  │  │  │     │  │  │  ├─ 📄no-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-this-before-super.js
│  │  │  │     │  │  │  ├─ 📄no-throw-literal.js
│  │  │  │     │  │  │  ├─ 📄no-trailing-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-undef-init.js
│  │  │  │     │  │  │  ├─ 📄no-undef.js
│  │  │  │     │  │  │  ├─ 📄no-undefined.js
│  │  │  │     │  │  │  ├─ 📄no-underscore-dangle.js
│  │  │  │     │  │  │  ├─ 📄no-unexpected-multiline.js
│  │  │  │     │  │  │  ├─ 📄no-unmodified-loop-condition.js
│  │  │  │     │  │  │  ├─ 📄no-unneeded-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-unreachable-loop.js
│  │  │  │     │  │  │  ├─ 📄no-unreachable.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-finally.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-negation.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-optional-chaining.js
│  │  │  │     │  │  │  ├─ 📄no-unused-expressions.js
│  │  │  │     │  │  │  ├─ 📄no-unused-labels.js
│  │  │  │     │  │  │  ├─ 📄no-unused-private-class-members.js
│  │  │  │     │  │  │  ├─ 📄no-unused-vars.js
│  │  │  │     │  │  │  ├─ 📄no-use-before-define.js
│  │  │  │     │  │  │  ├─ 📄no-useless-assignment.js
│  │  │  │     │  │  │  ├─ 📄no-useless-backreference.js
│  │  │  │     │  │  │  ├─ 📄no-useless-call.js
│  │  │  │     │  │  │  ├─ 📄no-useless-catch.js
│  │  │  │     │  │  │  ├─ 📄no-useless-computed-key.js
│  │  │  │     │  │  │  ├─ 📄no-useless-concat.js
│  │  │  │     │  │  │  ├─ 📄no-useless-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-useless-escape.js
│  │  │  │     │  │  │  ├─ 📄no-useless-rename.js
│  │  │  │     │  │  │  ├─ 📄no-useless-return.js
│  │  │  │     │  │  │  ├─ 📄no-var.js
│  │  │  │     │  │  │  ├─ 📄no-void.js
│  │  │  │     │  │  │  ├─ 📄no-warning-comments.js
│  │  │  │     │  │  │  ├─ 📄no-whitespace-before-property.js
│  │  │  │     │  │  │  ├─ 📄no-with.js
│  │  │  │     │  │  │  ├─ 📄nonblock-statement-body-position.js
│  │  │  │     │  │  │  ├─ 📄object-curly-newline.js
│  │  │  │     │  │  │  ├─ 📄object-curly-spacing.js
│  │  │  │     │  │  │  ├─ 📄object-property-newline.js
│  │  │  │     │  │  │  ├─ 📄object-shorthand.js
│  │  │  │     │  │  │  ├─ 📄one-var-declaration-per-line.js
│  │  │  │     │  │  │  ├─ 📄one-var.js
│  │  │  │     │  │  │  ├─ 📄operator-assignment.js
│  │  │  │     │  │  │  ├─ 📄operator-linebreak.js
│  │  │  │     │  │  │  ├─ 📄padded-blocks.js
│  │  │  │     │  │  │  ├─ 📄padding-line-between-statements.js
│  │  │  │     │  │  │  ├─ 📄prefer-arrow-callback.js
│  │  │  │     │  │  │  ├─ 📄prefer-const.js
│  │  │  │     │  │  │  ├─ 📄prefer-destructuring.js
│  │  │  │     │  │  │  ├─ 📄prefer-exponentiation-operator.js
│  │  │  │     │  │  │  ├─ 📄prefer-named-capture-group.js
│  │  │  │     │  │  │  ├─ 📄prefer-numeric-literals.js
│  │  │  │     │  │  │  ├─ 📄prefer-object-has-own.js
│  │  │  │     │  │  │  ├─ 📄prefer-object-spread.js
│  │  │  │     │  │  │  ├─ 📄prefer-promise-reject-errors.js
│  │  │  │     │  │  │  ├─ 📄prefer-reflect.js
│  │  │  │     │  │  │  ├─ 📄prefer-regex-literals.js
│  │  │  │     │  │  │  ├─ 📄prefer-rest-params.js
│  │  │  │     │  │  │  ├─ 📄prefer-spread.js
│  │  │  │     │  │  │  ├─ 📄prefer-template.js
│  │  │  │     │  │  │  ├─ 📄quote-props.js
│  │  │  │     │  │  │  ├─ 📄quotes.js
│  │  │  │     │  │  │  ├─ 📄radix.js
│  │  │  │     │  │  │  ├─ 📄require-atomic-updates.js
│  │  │  │     │  │  │  ├─ 📄require-await.js
│  │  │  │     │  │  │  ├─ 📄require-unicode-regexp.js
│  │  │  │     │  │  │  ├─ 📄require-yield.js
│  │  │  │     │  │  │  ├─ 📄rest-spread-spacing.js
│  │  │  │     │  │  │  ├─ 📄semi-spacing.js
│  │  │  │     │  │  │  ├─ 📄semi-style.js
│  │  │  │     │  │  │  ├─ 📄semi.js
│  │  │  │     │  │  │  ├─ 📄sort-imports.js
│  │  │  │     │  │  │  ├─ 📄sort-keys.js
│  │  │  │     │  │  │  ├─ 📄sort-vars.js
│  │  │  │     │  │  │  ├─ 📄space-before-blocks.js
│  │  │  │     │  │  │  ├─ 📄space-before-function-paren.js
│  │  │  │     │  │  │  ├─ 📄space-in-parens.js
│  │  │  │     │  │  │  ├─ 📄space-infix-ops.js
│  │  │  │     │  │  │  ├─ 📄space-unary-ops.js
│  │  │  │     │  │  │  ├─ 📄spaced-comment.js
│  │  │  │     │  │  │  ├─ 📄strict.js
│  │  │  │     │  │  │  ├─ 📄switch-colon-spacing.js
│  │  │  │     │  │  │  ├─ 📄symbol-description.js
│  │  │  │     │  │  │  ├─ 📄template-curly-spacing.js
│  │  │  │     │  │  │  ├─ 📄template-tag-spacing.js
│  │  │  │     │  │  │  ├─ 📄unicode-bom.js
│  │  │  │     │  │  │  ├─ 📄use-isnan.js
│  │  │  │     │  │  │  ├─ 📄valid-typeof.js
│  │  │  │     │  │  │  ├─ 📄vars-on-top.js
│  │  │  │     │  │  │  ├─ 📄wrap-iife.js
│  │  │  │     │  │  │  ├─ 📄wrap-regex.js
│  │  │  │     │  │  │  ├─ 📄yield-star-spacing.js
│  │  │  │     │  │  │  └─ 📄yoda.js
│  │  │  │     │  │  ├─ 📁shared
│  │  │  │     │  │  │  ├─ 📄ajv.js
│  │  │  │     │  │  │  ├─ 📄ast-utils.js
│  │  │  │     │  │  │  ├─ 📄directives.js
│  │  │  │     │  │  │  ├─ 📄flags.js
│  │  │  │     │  │  │  ├─ 📄logging.js
│  │  │  │     │  │  │  ├─ 📄runtime-info.js
│  │  │  │     │  │  │  ├─ 📄serialization.js
│  │  │  │     │  │  │  ├─ 📄severity.js
│  │  │  │     │  │  │  ├─ 📄stats.js
│  │  │  │     │  │  │  ├─ 📄string-utils.js
│  │  │  │     │  │  │  ├─ 📄traverser.js
│  │  │  │     │  │  │  └─ 📄types.js
│  │  │  │     │  │  ├─ 📄api.js
│  │  │  │     │  │  ├─ 📄cli.js
│  │  │  │     │  │  ├─ 📄options.js
│  │  │  │     │  │  └─ 📄unsupported-api.js
│  │  │  │     │  ├─ 📁messages
│  │  │  │     │  │  ├─ 📄all-files-ignored.js
│  │  │  │     │  │  ├─ 📄all-matched-files-ignored.js
│  │  │  │     │  │  ├─ 📄config-file-missing.js
│  │  │  │     │  │  ├─ 📄eslintrc-incompat.js
│  │  │  │     │  │  ├─ 📄eslintrc-plugins.js
│  │  │  │     │  │  ├─ 📄extend-config-missing.js
│  │  │  │     │  │  ├─ 📄failed-to-read-json.js
│  │  │  │     │  │  ├─ 📄file-not-found.js
│  │  │  │     │  │  ├─ 📄invalid-rule-options.js
│  │  │  │     │  │  ├─ 📄invalid-rule-severity.js
│  │  │  │     │  │  ├─ 📄no-config-found.js
│  │  │  │     │  │  ├─ 📄plugin-conflict.js
│  │  │  │     │  │  ├─ 📄plugin-invalid.js
│  │  │  │     │  │  ├─ 📄plugin-missing.js
│  │  │  │     │  │  ├─ 📄print-config-with-directory-path.js
│  │  │  │     │  │  ├─ 📄shared.js
│  │  │  │     │  │  └─ 📄whitespace-found.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁graphemer
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄boundaries.d.ts
│  │  │  │     │  │  ├─ 📄boundaries.d.ts.map
│  │  │  │     │  │  ├─ 📄boundaries.js
│  │  │  │     │  │  ├─ 📄Graphemer.d.ts
│  │  │  │     │  │  ├─ 📄Graphemer.d.ts.map
│  │  │  │     │  │  ├─ 📄Graphemer.js
│  │  │  │     │  │  ├─ 📄GraphemerHelper.d.ts
│  │  │  │     │  │  ├─ 📄GraphemerHelper.d.ts.map
│  │  │  │     │  │  ├─ 📄GraphemerHelper.js
│  │  │  │     │  │  ├─ 📄GraphemerIterator.d.ts
│  │  │  │     │  │  ├─ 📄GraphemerIterator.d.ts.map
│  │  │  │     │  │  ├─ 📄GraphemerIterator.js
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  └─ 📄index.js
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁ignore
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄legacy.js
│  │  │  │     │  ├─ 📄LICENSE-MIT
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁natural-compare
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁ts-api-utils
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄index.cjs
│  │  │  │     │  │  ├─ 📄index.cjs.map
│  │  │  │     │  │  ├─ 📄index.d.cts
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄index.js.map
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄tsc
│  │  │  │     │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │     ├─ 📄tsserver
│  │  │  │     │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │     └─ 📄tsserver.ps1
│  │  │  │     │  ├─ 📄LICENSE.md
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁typescript
│  │  │  │        ├─ 📁bin
│  │  │  │        │  ├─ 📄tsc
│  │  │  │        │  └─ 📄tsserver
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📁cs
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁de
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁es
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁fr
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁it
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ja
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ko
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁pl
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁pt-br
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ru
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁tr
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁zh-cn
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁zh-tw
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📄cancellationToken.js
│  │  │  │        │  ├─ 📄lib.d.ts
│  │  │  │        │  ├─ 📄lib.decorators.d.ts
│  │  │  │        │  ├─ 📄lib.decorators.legacy.d.ts
│  │  │  │        │  ├─ 📄lib.dom.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.dom.d.ts
│  │  │  │        │  ├─ 📄lib.dom.iterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.collection.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.core.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.generator.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.iterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.proxy.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.reflect.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.symbol.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.symbol.wellknown.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.array.include.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.date.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.typedarrays.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.asyncgenerator.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.symbol.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.bigint.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.date.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.number.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.symbol.wellknown.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.weakref.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.error.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.collection.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es5.d.ts
│  │  │  │        │  ├─ 📄lib.es6.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.array.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.collection.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.decorators.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.disposable.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.full.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.intl.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.object.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.promise.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.string.d.ts
│  │  │  │        │  ├─ 📄lib.scripthost.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.importscripts.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.iterable.d.ts
│  │  │  │        │  ├─ 📄tsc.js
│  │  │  │        │  ├─ 📄tsserver.js
│  │  │  │        │  ├─ 📄tsserverlibrary.d.ts
│  │  │  │        │  ├─ 📄tsserverlibrary.js
│  │  │  │        │  ├─ 📄typescript.d.ts
│  │  │  │        │  ├─ 📄typescript.js
│  │  │  │        │  ├─ 📄typesMap.json
│  │  │  │        │  ├─ 📄typingsInstaller.js
│  │  │  │        │  └─ 📄watchGuard.js
│  │  │  │        ├─ 📄LICENSE.txt
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        ├─ 📄SECURITY.md
│  │  │  │        └─ 📄ThirdPartyNoticeText.txt
│  │  │  ├─ 📁@typescript-eslint+parser@8.2.0_eslint@9.9.0_typescript@5.5.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@typescript-eslint
│  │  │  │     │  ├─ 📁parser
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄parser.d.ts
│  │  │  │     │  │  │  ├─ 📄parser.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser.js
│  │  │  │     │  │  │  └─ 📄parser.js.map
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄eslint
│  │  │  │     │  │  │     ├─ 📄eslint.CMD
│  │  │  │     │  │  │     ├─ 📄eslint.ps1
│  │  │  │     │  │  │     ├─ 📄tsc
│  │  │  │     │  │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │  │     ├─ 📄tsserver
│  │  │  │     │  │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │  │     └─ 📄tsserver.ps1
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  ├─ 📁scope-manager
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁definition
│  │  │  │     │  │  │  │  ├─ 📄CatchClauseDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄CatchClauseDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄CatchClauseDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄CatchClauseDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄ClassNameDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassNameDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassNameDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄ClassNameDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄Definition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Definition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Definition.js
│  │  │  │     │  │  │  │  ├─ 📄Definition.js.map
│  │  │  │     │  │  │  │  ├─ 📄DefinitionBase.d.ts
│  │  │  │     │  │  │  │  ├─ 📄DefinitionBase.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄DefinitionBase.js
│  │  │  │     │  │  │  │  ├─ 📄DefinitionBase.js.map
│  │  │  │     │  │  │  │  ├─ 📄DefinitionType.d.ts
│  │  │  │     │  │  │  │  ├─ 📄DefinitionType.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄DefinitionType.js
│  │  │  │     │  │  │  │  ├─ 📄DefinitionType.js.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionNameDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄FunctionNameDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionNameDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄FunctionNameDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄ImportBindingDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ImportBindingDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ImportBindingDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄ImportBindingDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄ParameterDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ParameterDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ParameterDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄ParameterDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumMemberDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSEnumMemberDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumMemberDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄TSEnumMemberDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumNameDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSEnumNameDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumNameDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄TSEnumNameDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSModuleNameDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSModuleNameDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSModuleNameDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄TSModuleNameDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄TypeDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TypeDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TypeDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄TypeDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄VariableDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄VariableDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄VariableDefinition.js
│  │  │  │     │  │  │  │  └─ 📄VariableDefinition.js.map
│  │  │  │     │  │  │  ├─ 📁lib
│  │  │  │     │  │  │  │  ├─ 📄base-config.d.ts
│  │  │  │     │  │  │  │  ├─ 📄base-config.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄base-config.js
│  │  │  │     │  │  │  │  ├─ 📄base-config.js.map
│  │  │  │     │  │  │  │  ├─ 📄decorators.d.ts
│  │  │  │     │  │  │  │  ├─ 📄decorators.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄decorators.js
│  │  │  │     │  │  │  │  ├─ 📄decorators.js.map
│  │  │  │     │  │  │  │  ├─ 📄decorators.legacy.d.ts
│  │  │  │     │  │  │  │  ├─ 📄decorators.legacy.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄decorators.legacy.js
│  │  │  │     │  │  │  │  ├─ 📄decorators.legacy.js.map
│  │  │  │     │  │  │  │  ├─ 📄dom.asynciterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄dom.asynciterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄dom.asynciterable.js
│  │  │  │     │  │  │  │  ├─ 📄dom.asynciterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄dom.d.ts
│  │  │  │     │  │  │  │  ├─ 📄dom.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄dom.iterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄dom.iterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄dom.iterable.js
│  │  │  │     │  │  │  │  ├─ 📄dom.iterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄dom.js
│  │  │  │     │  │  │  │  ├─ 📄dom.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.collection.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.collection.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.collection.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.collection.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.core.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.core.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.core.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.core.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.generator.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.generator.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.generator.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.generator.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.iterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.iterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.iterable.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.iterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.promise.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.proxy.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.proxy.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.proxy.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.proxy.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.reflect.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.reflect.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.reflect.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.reflect.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.wellknown.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.wellknown.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.wellknown.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.wellknown.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.array.include.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2016.array.include.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.array.include.js
│  │  │  │     │  │  │  │  ├─ 📄es2016.array.include.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2016.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2016.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2016.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2016.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2016.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.js
│  │  │  │     │  │  │  │  ├─ 📄es2016.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.date.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.date.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.date.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.date.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.object.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.object.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.object.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.object.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.sharedmemory.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.sharedmemory.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.sharedmemory.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.sharedmemory.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.typedarrays.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.typedarrays.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.typedarrays.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.typedarrays.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.asyncgenerator.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.asyncgenerator.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.asyncgenerator.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.asyncgenerator.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.asynciterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.asynciterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.asynciterable.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.asynciterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.promise.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.regexp.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.regexp.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.regexp.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.regexp.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.array.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.array.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.array.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.array.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.object.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.object.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.object.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.object.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.symbol.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.symbol.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.symbol.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.symbol.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.bigint.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.bigint.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.bigint.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.bigint.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.date.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.date.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.date.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.date.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.number.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.number.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.number.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.number.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.promise.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.sharedmemory.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.sharedmemory.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.sharedmemory.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.sharedmemory.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.symbol.wellknown.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.symbol.wellknown.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.symbol.wellknown.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.symbol.wellknown.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.promise.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.weakref.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.weakref.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.weakref.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.weakref.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.array.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.array.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.array.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.array.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.error.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.error.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.error.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.error.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.object.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.object.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.object.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.object.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.regexp.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.regexp.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.regexp.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.regexp.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.sharedmemory.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.sharedmemory.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.sharedmemory.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.sharedmemory.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.array.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.array.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.array.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.array.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.collection.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.collection.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.collection.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.collection.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.js.map
│  │  │  │     │  │  │  │  ├─ 📄es5.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es5.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es5.js
│  │  │  │     │  │  │  │  ├─ 📄es5.js.map
│  │  │  │     │  │  │  │  ├─ 📄es6.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es6.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es6.js
│  │  │  │     │  │  │  │  ├─ 📄es6.js.map
│  │  │  │     │  │  │  │  ├─ 📄es7.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es7.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es7.js
│  │  │  │     │  │  │  │  ├─ 📄es7.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.array.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.array.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.array.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.array.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.asynciterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.asynciterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.asynciterable.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.asynciterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.bigint.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.bigint.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.bigint.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.bigint.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.collection.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.collection.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.collection.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.collection.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.decorators.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.decorators.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.decorators.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.decorators.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.disposable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.disposable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.disposable.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.disposable.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.full.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.intl.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.object.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.object.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.object.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.object.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.promise.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.regexp.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.regexp.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.regexp.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.regexp.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.string.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.symbol.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.symbol.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.symbol.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.symbol.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.weakref.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.weakref.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.weakref.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.weakref.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄lib.d.ts
│  │  │  │     │  │  │  │  ├─ 📄lib.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄lib.js
│  │  │  │     │  │  │  │  ├─ 📄lib.js.map
│  │  │  │     │  │  │  │  ├─ 📄scripthost.d.ts
│  │  │  │     │  │  │  │  ├─ 📄scripthost.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄scripthost.js
│  │  │  │     │  │  │  │  ├─ 📄scripthost.js.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.asynciterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄webworker.asynciterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.asynciterable.js
│  │  │  │     │  │  │  │  ├─ 📄webworker.asynciterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.d.ts
│  │  │  │     │  │  │  │  ├─ 📄webworker.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.importscripts.d.ts
│  │  │  │     │  │  │  │  ├─ 📄webworker.importscripts.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.importscripts.js
│  │  │  │     │  │  │  │  ├─ 📄webworker.importscripts.js.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.iterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄webworker.iterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.iterable.js
│  │  │  │     │  │  │  │  ├─ 📄webworker.iterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.js
│  │  │  │     │  │  │  │  └─ 📄webworker.js.map
│  │  │  │     │  │  │  ├─ 📁referencer
│  │  │  │     │  │  │  │  ├─ 📄ClassVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄ClassVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄ExportVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ExportVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ExportVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄ExportVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄ImportVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ImportVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ImportVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄ImportVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄PatternVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄PatternVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄PatternVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄PatternVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄Reference.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Reference.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Reference.js
│  │  │  │     │  │  │  │  ├─ 📄Reference.js.map
│  │  │  │     │  │  │  │  ├─ 📄Referencer.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Referencer.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Referencer.js
│  │  │  │     │  │  │  │  ├─ 📄Referencer.js.map
│  │  │  │     │  │  │  │  ├─ 📄TypeVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TypeVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TypeVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄TypeVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄Visitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Visitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Visitor.js
│  │  │  │     │  │  │  │  ├─ 📄Visitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄VisitorBase.d.ts
│  │  │  │     │  │  │  │  ├─ 📄VisitorBase.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄VisitorBase.js
│  │  │  │     │  │  │  │  └─ 📄VisitorBase.js.map
│  │  │  │     │  │  │  ├─ 📁scope
│  │  │  │     │  │  │  │  ├─ 📄BlockScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄BlockScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄BlockScope.js
│  │  │  │     │  │  │  │  ├─ 📄BlockScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄CatchScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄CatchScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄CatchScope.js
│  │  │  │     │  │  │  │  ├─ 📄CatchScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ClassFieldInitializerScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassFieldInitializerScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassFieldInitializerScope.js
│  │  │  │     │  │  │  │  ├─ 📄ClassFieldInitializerScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ClassScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassScope.js
│  │  │  │     │  │  │  │  ├─ 📄ClassScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ClassStaticBlockScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassStaticBlockScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassStaticBlockScope.js
│  │  │  │     │  │  │  │  ├─ 📄ClassStaticBlockScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ConditionalTypeScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ConditionalTypeScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ConditionalTypeScope.js
│  │  │  │     │  │  │  │  ├─ 📄ConditionalTypeScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ForScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ForScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ForScope.js
│  │  │  │     │  │  │  │  ├─ 📄ForScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionExpressionNameScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄FunctionExpressionNameScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionExpressionNameScope.js
│  │  │  │     │  │  │  │  ├─ 📄FunctionExpressionNameScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄FunctionScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionScope.js
│  │  │  │     │  │  │  │  ├─ 📄FunctionScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionTypeScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄FunctionTypeScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionTypeScope.js
│  │  │  │     │  │  │  │  ├─ 📄FunctionTypeScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄GlobalScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄GlobalScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄GlobalScope.js
│  │  │  │     │  │  │  │  ├─ 📄GlobalScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄MappedTypeScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄MappedTypeScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄MappedTypeScope.js
│  │  │  │     │  │  │  │  ├─ 📄MappedTypeScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ModuleScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ModuleScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ModuleScope.js
│  │  │  │     │  │  │  │  ├─ 📄ModuleScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄Scope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Scope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Scope.js
│  │  │  │     │  │  │  │  ├─ 📄Scope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ScopeBase.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ScopeBase.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ScopeBase.js
│  │  │  │     │  │  │  │  ├─ 📄ScopeBase.js.map
│  │  │  │     │  │  │  │  ├─ 📄ScopeType.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ScopeType.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ScopeType.js
│  │  │  │     │  │  │  │  ├─ 📄ScopeType.js.map
│  │  │  │     │  │  │  │  ├─ 📄SwitchScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄SwitchScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄SwitchScope.js
│  │  │  │     │  │  │  │  ├─ 📄SwitchScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSEnumScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumScope.js
│  │  │  │     │  │  │  │  ├─ 📄TSEnumScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSModuleScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSModuleScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSModuleScope.js
│  │  │  │     │  │  │  │  ├─ 📄TSModuleScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄TypeScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TypeScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TypeScope.js
│  │  │  │     │  │  │  │  ├─ 📄TypeScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄WithScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄WithScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄WithScope.js
│  │  │  │     │  │  │  │  └─ 📄WithScope.js.map
│  │  │  │     │  │  │  ├─ 📁variable
│  │  │  │     │  │  │  │  ├─ 📄ESLintScopeVariable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ESLintScopeVariable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ESLintScopeVariable.js
│  │  │  │     │  │  │  │  ├─ 📄ESLintScopeVariable.js.map
│  │  │  │     │  │  │  │  ├─ 📄ImplicitLibVariable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ImplicitLibVariable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ImplicitLibVariable.js
│  │  │  │     │  │  │  │  ├─ 📄ImplicitLibVariable.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄Variable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Variable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Variable.js
│  │  │  │     │  │  │  │  ├─ 📄Variable.js.map
│  │  │  │     │  │  │  │  ├─ 📄VariableBase.d.ts
│  │  │  │     │  │  │  │  ├─ 📄VariableBase.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄VariableBase.js
│  │  │  │     │  │  │  │  └─ 📄VariableBase.js.map
│  │  │  │     │  │  │  ├─ 📄analyze.d.ts
│  │  │  │     │  │  │  ├─ 📄analyze.d.ts.map
│  │  │  │     │  │  │  ├─ 📄analyze.js
│  │  │  │     │  │  │  ├─ 📄analyze.js.map
│  │  │  │     │  │  │  ├─ 📄assert.d.ts
│  │  │  │     │  │  │  ├─ 📄assert.d.ts.map
│  │  │  │     │  │  │  ├─ 📄assert.js
│  │  │  │     │  │  │  ├─ 📄assert.js.map
│  │  │  │     │  │  │  ├─ 📄ID.d.ts
│  │  │  │     │  │  │  ├─ 📄ID.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ID.js
│  │  │  │     │  │  │  ├─ 📄ID.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄ScopeManager.d.ts
│  │  │  │     │  │  │  ├─ 📄ScopeManager.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ScopeManager.js
│  │  │  │     │  │  │  └─ 📄ScopeManager.js.map
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  ├─ 📁types
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁generated
│  │  │  │     │  │  │  │  ├─ 📄ast-spec.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ast-spec.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ast-spec.js
│  │  │  │     │  │  │  │  └─ 📄ast-spec.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄lib.d.ts
│  │  │  │     │  │  │  ├─ 📄lib.d.ts.map
│  │  │  │     │  │  │  ├─ 📄lib.js
│  │  │  │     │  │  │  ├─ 📄lib.js.map
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser-options.js
│  │  │  │     │  │  │  ├─ 📄parser-options.js.map
│  │  │  │     │  │  │  ├─ 📄ts-estree.d.ts
│  │  │  │     │  │  │  ├─ 📄ts-estree.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ts-estree.js
│  │  │  │     │  │  │  └─ 📄ts-estree.js.map
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  ├─ 📁typescript-estree
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁create-program
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.js
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.js.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.js
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.js.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.js
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.js.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.js
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.js.map
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.js
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.js.map
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.d.ts
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.js
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.js.map
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.js
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.js.map
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.js
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.js.map
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.js
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.js.map
│  │  │  │     │  │  │  │  ├─ 📄shared.d.ts
│  │  │  │     │  │  │  │  ├─ 📄shared.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄shared.js
│  │  │  │     │  │  │  │  ├─ 📄shared.js.map
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.d.ts
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.js
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.js.map
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.d.ts
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.js
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.js.map
│  │  │  │     │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.js
│  │  │  │     │  │  │  │  └─ 📄WatchCompilerHostOfConfigFile.js.map
│  │  │  │     │  │  │  ├─ 📁jsx
│  │  │  │     │  │  │  │  ├─ 📄xhtml-entities.d.ts
│  │  │  │     │  │  │  │  ├─ 📄xhtml-entities.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄xhtml-entities.js
│  │  │  │     │  │  │  │  └─ 📄xhtml-entities.js.map
│  │  │  │     │  │  │  ├─ 📁parseSettings
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.js
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.js.map
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.js
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.js.map
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.js
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.d.ts
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.js
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.js.map
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.d.ts
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.js
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.js.map
│  │  │  │     │  │  │  │  ├─ 📄warnAboutTSVersion.d.ts
│  │  │  │     │  │  │  │  ├─ 📄warnAboutTSVersion.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄warnAboutTSVersion.js
│  │  │  │     │  │  │  │  └─ 📄warnAboutTSVersion.js.map
│  │  │  │     │  │  │  ├─ 📁ts-estree
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.d.ts
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.js
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄ts-nodes.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ts-nodes.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ts-nodes.js
│  │  │  │     │  │  │  │  └─ 📄ts-nodes.js.map
│  │  │  │     │  │  │  ├─ 📄ast-converter.d.ts
│  │  │  │     │  │  │  ├─ 📄ast-converter.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ast-converter.js
│  │  │  │     │  │  │  ├─ 📄ast-converter.js.map
│  │  │  │     │  │  │  ├─ 📄clear-caches.d.ts
│  │  │  │     │  │  │  ├─ 📄clear-caches.d.ts.map
│  │  │  │     │  │  │  ├─ 📄clear-caches.js
│  │  │  │     │  │  │  ├─ 📄clear-caches.js.map
│  │  │  │     │  │  │  ├─ 📄convert-comments.d.ts
│  │  │  │     │  │  │  ├─ 📄convert-comments.d.ts.map
│  │  │  │     │  │  │  ├─ 📄convert-comments.js
│  │  │  │     │  │  │  ├─ 📄convert-comments.js.map
│  │  │  │     │  │  │  ├─ 📄convert.d.ts
│  │  │  │     │  │  │  ├─ 📄convert.d.ts.map
│  │  │  │     │  │  │  ├─ 📄convert.js
│  │  │  │     │  │  │  ├─ 📄convert.js.map
│  │  │  │     │  │  │  ├─ 📄createParserServices.d.ts
│  │  │  │     │  │  │  ├─ 📄createParserServices.d.ts.map
│  │  │  │     │  │  │  ├─ 📄createParserServices.js
│  │  │  │     │  │  │  ├─ 📄createParserServices.js.map
│  │  │  │     │  │  │  ├─ 📄getModifiers.d.ts
│  │  │  │     │  │  │  ├─ 📄getModifiers.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getModifiers.js
│  │  │  │     │  │  │  ├─ 📄getModifiers.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄node-utils.d.ts
│  │  │  │     │  │  │  ├─ 📄node-utils.d.ts.map
│  │  │  │     │  │  │  ├─ 📄node-utils.js
│  │  │  │     │  │  │  ├─ 📄node-utils.js.map
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser-options.js
│  │  │  │     │  │  │  ├─ 📄parser-options.js.map
│  │  │  │     │  │  │  ├─ 📄parser.d.ts
│  │  │  │     │  │  │  ├─ 📄parser.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser.js
│  │  │  │     │  │  │  ├─ 📄parser.js.map
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.d.ts
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.d.ts.map
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.js
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.js.map
│  │  │  │     │  │  │  ├─ 📄simple-traverse.d.ts
│  │  │  │     │  │  │  ├─ 📄simple-traverse.d.ts.map
│  │  │  │     │  │  │  ├─ 📄simple-traverse.js
│  │  │  │     │  │  │  ├─ 📄simple-traverse.js.map
│  │  │  │     │  │  │  ├─ 📄source-files.d.ts
│  │  │  │     │  │  │  ├─ 📄source-files.d.ts.map
│  │  │  │     │  │  │  ├─ 📄source-files.js
│  │  │  │     │  │  │  ├─ 📄source-files.js.map
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.d.ts
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.d.ts.map
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.js
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.js.map
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.d.ts
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.d.ts.map
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.js
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.js.map
│  │  │  │     │  │  │  ├─ 📄version-check.d.ts
│  │  │  │     │  │  │  ├─ 📄version-check.d.ts.map
│  │  │  │     │  │  │  ├─ 📄version-check.js
│  │  │  │     │  │  │  ├─ 📄version-check.js.map
│  │  │  │     │  │  │  ├─ 📄withoutProjectParserOptions.d.ts
│  │  │  │     │  │  │  ├─ 📄withoutProjectParserOptions.d.ts.map
│  │  │  │     │  │  │  ├─ 📄withoutProjectParserOptions.js
│  │  │  │     │  │  │  └─ 📄withoutProjectParserOptions.js.map
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄semver
│  │  │  │     │  │  │     ├─ 📄semver.CMD
│  │  │  │     │  │  │     ├─ 📄semver.ps1
│  │  │  │     │  │  │     ├─ 📄tsc
│  │  │  │     │  │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │  │     ├─ 📄tsserver
│  │  │  │     │  │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │  │     └─ 📄tsserver.ps1
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁visitor-keys
│  │  │  │     │     ├─ 📁dist
│  │  │  │     │     │  ├─ 📄get-keys.d.ts
│  │  │  │     │     │  ├─ 📄get-keys.d.ts.map
│  │  │  │     │     │  ├─ 📄get-keys.js
│  │  │  │     │     │  ├─ 📄get-keys.js.map
│  │  │  │     │     │  ├─ 📄index.d.ts
│  │  │  │     │     │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  ├─ 📄index.js
│  │  │  │     │     │  ├─ 📄index.js.map
│  │  │  │     │     │  ├─ 📄visitor-keys.d.ts
│  │  │  │     │     │  ├─ 📄visitor-keys.d.ts.map
│  │  │  │     │     │  ├─ 📄visitor-keys.js
│  │  │  │     │     │  └─ 📄visitor-keys.js.map
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁debug
│  │  │  │     │  ├─ 📁src
│  │  │  │     │  │  ├─ 📄browser.js
│  │  │  │     │  │  ├─ 📄common.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄node.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁eslint
│  │  │  │     │  ├─ 📁bin
│  │  │  │     │  │  └─ 📄eslint.js
│  │  │  │     │  ├─ 📁conf
│  │  │  │     │  │  ├─ 📄default-cli-options.js
│  │  │  │     │  │  ├─ 📄ecma-version.js
│  │  │  │     │  │  ├─ 📄globals.js
│  │  │  │     │  │  ├─ 📄replacements.json
│  │  │  │     │  │  └─ 📄rule-type-list.json
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📁cli-engine
│  │  │  │     │  │  │  ├─ 📁formatters
│  │  │  │     │  │  │  │  ├─ 📄formatters-meta.json
│  │  │  │     │  │  │  │  ├─ 📄html.js
│  │  │  │     │  │  │  │  ├─ 📄json-with-metadata.js
│  │  │  │     │  │  │  │  ├─ 📄json.js
│  │  │  │     │  │  │  │  └─ 📄stylish.js
│  │  │  │     │  │  │  ├─ 📄cli-engine.js
│  │  │  │     │  │  │  ├─ 📄file-enumerator.js
│  │  │  │     │  │  │  ├─ 📄hash.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄lint-result-cache.js
│  │  │  │     │  │  │  └─ 📄load-rules.js
│  │  │  │     │  │  ├─ 📁config
│  │  │  │     │  │  │  ├─ 📄default-config.js
│  │  │  │     │  │  │  ├─ 📄flat-config-array.js
│  │  │  │     │  │  │  ├─ 📄flat-config-helpers.js
│  │  │  │     │  │  │  ├─ 📄flat-config-schema.js
│  │  │  │     │  │  │  └─ 📄rule-validator.js
│  │  │  │     │  │  ├─ 📁eslint
│  │  │  │     │  │  │  ├─ 📄eslint-helpers.js
│  │  │  │     │  │  │  ├─ 📄eslint.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄legacy-eslint.js
│  │  │  │     │  │  ├─ 📁languages
│  │  │  │     │  │  │  └─ 📁js
│  │  │  │     │  │  │     ├─ 📁source-code
│  │  │  │     │  │  │     │  ├─ 📁token-store
│  │  │  │     │  │  │     │  │  ├─ 📄backward-token-comment-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄backward-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄cursors.js
│  │  │  │     │  │  │     │  │  ├─ 📄decorative-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄filter-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄forward-token-comment-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄forward-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  │     │  │  ├─ 📄limit-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄padded-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄skip-cursor.js
│  │  │  │     │  │  │     │  │  └─ 📄utils.js
│  │  │  │     │  │  │     │  ├─ 📄index.js
│  │  │  │     │  │  │     │  └─ 📄source-code.js
│  │  │  │     │  │  │     ├─ 📄index.js
│  │  │  │     │  │  │     └─ 📄validate-language-options.js
│  │  │  │     │  │  ├─ 📁linter
│  │  │  │     │  │  │  ├─ 📁code-path-analysis
│  │  │  │     │  │  │  │  ├─ 📄code-path-analyzer.js
│  │  │  │     │  │  │  │  ├─ 📄code-path-segment.js
│  │  │  │     │  │  │  │  ├─ 📄code-path-state.js
│  │  │  │     │  │  │  │  ├─ 📄code-path.js
│  │  │  │     │  │  │  │  ├─ 📄debug-helpers.js
│  │  │  │     │  │  │  │  ├─ 📄fork-context.js
│  │  │  │     │  │  │  │  └─ 📄id-generator.js
│  │  │  │     │  │  │  ├─ 📄apply-disable-directives.js
│  │  │  │     │  │  │  ├─ 📄config-comment-parser.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄interpolate.js
│  │  │  │     │  │  │  ├─ 📄linter.js
│  │  │  │     │  │  │  ├─ 📄node-event-generator.js
│  │  │  │     │  │  │  ├─ 📄report-translator.js
│  │  │  │     │  │  │  ├─ 📄rule-fixer.js
│  │  │  │     │  │  │  ├─ 📄rules.js
│  │  │  │     │  │  │  ├─ 📄safe-emitter.js
│  │  │  │     │  │  │  ├─ 📄source-code-fixer.js
│  │  │  │     │  │  │  ├─ 📄timing.js
│  │  │  │     │  │  │  └─ 📄vfile.js
│  │  │  │     │  │  ├─ 📁rule-tester
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄rule-tester.js
│  │  │  │     │  │  ├─ 📁rules
│  │  │  │     │  │  │  ├─ 📁utils
│  │  │  │     │  │  │  │  ├─ 📁unicode
│  │  │  │     │  │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-combining-character.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-emoji-modifier.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-regional-indicator-symbol.js
│  │  │  │     │  │  │  │  │  └─ 📄is-surrogate-pair.js
│  │  │  │     │  │  │  │  ├─ 📄ast-utils.js
│  │  │  │     │  │  │  │  ├─ 📄char-source.js
│  │  │  │     │  │  │  │  ├─ 📄fix-tracker.js
│  │  │  │     │  │  │  │  ├─ 📄keywords.js
│  │  │  │     │  │  │  │  ├─ 📄lazy-loading-rule-map.js
│  │  │  │     │  │  │  │  └─ 📄regular-expressions.js
│  │  │  │     │  │  │  ├─ 📄accessor-pairs.js
│  │  │  │     │  │  │  ├─ 📄array-bracket-newline.js
│  │  │  │     │  │  │  ├─ 📄array-bracket-spacing.js
│  │  │  │     │  │  │  ├─ 📄array-callback-return.js
│  │  │  │     │  │  │  ├─ 📄array-element-newline.js
│  │  │  │     │  │  │  ├─ 📄arrow-body-style.js
│  │  │  │     │  │  │  ├─ 📄arrow-parens.js
│  │  │  │     │  │  │  ├─ 📄arrow-spacing.js
│  │  │  │     │  │  │  ├─ 📄block-scoped-var.js
│  │  │  │     │  │  │  ├─ 📄block-spacing.js
│  │  │  │     │  │  │  ├─ 📄brace-style.js
│  │  │  │     │  │  │  ├─ 📄callback-return.js
│  │  │  │     │  │  │  ├─ 📄camelcase.js
│  │  │  │     │  │  │  ├─ 📄capitalized-comments.js
│  │  │  │     │  │  │  ├─ 📄class-methods-use-this.js
│  │  │  │     │  │  │  ├─ 📄comma-dangle.js
│  │  │  │     │  │  │  ├─ 📄comma-spacing.js
│  │  │  │     │  │  │  ├─ 📄comma-style.js
│  │  │  │     │  │  │  ├─ 📄complexity.js
│  │  │  │     │  │  │  ├─ 📄computed-property-spacing.js
│  │  │  │     │  │  │  ├─ 📄consistent-return.js
│  │  │  │     │  │  │  ├─ 📄consistent-this.js
│  │  │  │     │  │  │  ├─ 📄constructor-super.js
│  │  │  │     │  │  │  ├─ 📄curly.js
│  │  │  │     │  │  │  ├─ 📄default-case-last.js
│  │  │  │     │  │  │  ├─ 📄default-case.js
│  │  │  │     │  │  │  ├─ 📄default-param-last.js
│  │  │  │     │  │  │  ├─ 📄dot-location.js
│  │  │  │     │  │  │  ├─ 📄dot-notation.js
│  │  │  │     │  │  │  ├─ 📄eol-last.js
│  │  │  │     │  │  │  ├─ 📄eqeqeq.js
│  │  │  │     │  │  │  ├─ 📄for-direction.js
│  │  │  │     │  │  │  ├─ 📄func-call-spacing.js
│  │  │  │     │  │  │  ├─ 📄func-name-matching.js
│  │  │  │     │  │  │  ├─ 📄func-names.js
│  │  │  │     │  │  │  ├─ 📄func-style.js
│  │  │  │     │  │  │  ├─ 📄function-call-argument-newline.js
│  │  │  │     │  │  │  ├─ 📄function-paren-newline.js
│  │  │  │     │  │  │  ├─ 📄generator-star-spacing.js
│  │  │  │     │  │  │  ├─ 📄getter-return.js
│  │  │  │     │  │  │  ├─ 📄global-require.js
│  │  │  │     │  │  │  ├─ 📄grouped-accessor-pairs.js
│  │  │  │     │  │  │  ├─ 📄guard-for-in.js
│  │  │  │     │  │  │  ├─ 📄handle-callback-err.js
│  │  │  │     │  │  │  ├─ 📄id-blacklist.js
│  │  │  │     │  │  │  ├─ 📄id-denylist.js
│  │  │  │     │  │  │  ├─ 📄id-length.js
│  │  │  │     │  │  │  ├─ 📄id-match.js
│  │  │  │     │  │  │  ├─ 📄implicit-arrow-linebreak.js
│  │  │  │     │  │  │  ├─ 📄indent-legacy.js
│  │  │  │     │  │  │  ├─ 📄indent.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄init-declarations.js
│  │  │  │     │  │  │  ├─ 📄jsx-quotes.js
│  │  │  │     │  │  │  ├─ 📄key-spacing.js
│  │  │  │     │  │  │  ├─ 📄keyword-spacing.js
│  │  │  │     │  │  │  ├─ 📄line-comment-position.js
│  │  │  │     │  │  │  ├─ 📄linebreak-style.js
│  │  │  │     │  │  │  ├─ 📄lines-around-comment.js
│  │  │  │     │  │  │  ├─ 📄lines-around-directive.js
│  │  │  │     │  │  │  ├─ 📄lines-between-class-members.js
│  │  │  │     │  │  │  ├─ 📄logical-assignment-operators.js
│  │  │  │     │  │  │  ├─ 📄max-classes-per-file.js
│  │  │  │     │  │  │  ├─ 📄max-depth.js
│  │  │  │     │  │  │  ├─ 📄max-len.js
│  │  │  │     │  │  │  ├─ 📄max-lines-per-function.js
│  │  │  │     │  │  │  ├─ 📄max-lines.js
│  │  │  │     │  │  │  ├─ 📄max-nested-callbacks.js
│  │  │  │     │  │  │  ├─ 📄max-params.js
│  │  │  │     │  │  │  ├─ 📄max-statements-per-line.js
│  │  │  │     │  │  │  ├─ 📄max-statements.js
│  │  │  │     │  │  │  ├─ 📄multiline-comment-style.js
│  │  │  │     │  │  │  ├─ 📄multiline-ternary.js
│  │  │  │     │  │  │  ├─ 📄new-cap.js
│  │  │  │     │  │  │  ├─ 📄new-parens.js
│  │  │  │     │  │  │  ├─ 📄newline-after-var.js
│  │  │  │     │  │  │  ├─ 📄newline-before-return.js
│  │  │  │     │  │  │  ├─ 📄newline-per-chained-call.js
│  │  │  │     │  │  │  ├─ 📄no-alert.js
│  │  │  │     │  │  │  ├─ 📄no-array-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-async-promise-executor.js
│  │  │  │     │  │  │  ├─ 📄no-await-in-loop.js
│  │  │  │     │  │  │  ├─ 📄no-bitwise.js
│  │  │  │     │  │  │  ├─ 📄no-buffer-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-caller.js
│  │  │  │     │  │  │  ├─ 📄no-case-declarations.js
│  │  │  │     │  │  │  ├─ 📄no-catch-shadow.js
│  │  │  │     │  │  │  ├─ 📄no-class-assign.js
│  │  │  │     │  │  │  ├─ 📄no-compare-neg-zero.js
│  │  │  │     │  │  │  ├─ 📄no-cond-assign.js
│  │  │  │     │  │  │  ├─ 📄no-confusing-arrow.js
│  │  │  │     │  │  │  ├─ 📄no-console.js
│  │  │  │     │  │  │  ├─ 📄no-const-assign.js
│  │  │  │     │  │  │  ├─ 📄no-constant-binary-expression.js
│  │  │  │     │  │  │  ├─ 📄no-constant-condition.js
│  │  │  │     │  │  │  ├─ 📄no-constructor-return.js
│  │  │  │     │  │  │  ├─ 📄no-continue.js
│  │  │  │     │  │  │  ├─ 📄no-control-regex.js
│  │  │  │     │  │  │  ├─ 📄no-debugger.js
│  │  │  │     │  │  │  ├─ 📄no-delete-var.js
│  │  │  │     │  │  │  ├─ 📄no-div-regex.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-args.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-class-members.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-else-if.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-keys.js
│  │  │  │     │  │  │  ├─ 📄no-duplicate-case.js
│  │  │  │     │  │  │  ├─ 📄no-duplicate-imports.js
│  │  │  │     │  │  │  ├─ 📄no-else-return.js
│  │  │  │     │  │  │  ├─ 📄no-empty-character-class.js
│  │  │  │     │  │  │  ├─ 📄no-empty-function.js
│  │  │  │     │  │  │  ├─ 📄no-empty-pattern.js
│  │  │  │     │  │  │  ├─ 📄no-empty-static-block.js
│  │  │  │     │  │  │  ├─ 📄no-empty.js
│  │  │  │     │  │  │  ├─ 📄no-eq-null.js
│  │  │  │     │  │  │  ├─ 📄no-eval.js
│  │  │  │     │  │  │  ├─ 📄no-ex-assign.js
│  │  │  │     │  │  │  ├─ 📄no-extend-native.js
│  │  │  │     │  │  │  ├─ 📄no-extra-bind.js
│  │  │  │     │  │  │  ├─ 📄no-extra-boolean-cast.js
│  │  │  │     │  │  │  ├─ 📄no-extra-label.js
│  │  │  │     │  │  │  ├─ 📄no-extra-parens.js
│  │  │  │     │  │  │  ├─ 📄no-extra-semi.js
│  │  │  │     │  │  │  ├─ 📄no-fallthrough.js
│  │  │  │     │  │  │  ├─ 📄no-floating-decimal.js
│  │  │  │     │  │  │  ├─ 📄no-func-assign.js
│  │  │  │     │  │  │  ├─ 📄no-global-assign.js
│  │  │  │     │  │  │  ├─ 📄no-implicit-coercion.js
│  │  │  │     │  │  │  ├─ 📄no-implicit-globals.js
│  │  │  │     │  │  │  ├─ 📄no-implied-eval.js
│  │  │  │     │  │  │  ├─ 📄no-import-assign.js
│  │  │  │     │  │  │  ├─ 📄no-inline-comments.js
│  │  │  │     │  │  │  ├─ 📄no-inner-declarations.js
│  │  │  │     │  │  │  ├─ 📄no-invalid-regexp.js
│  │  │  │     │  │  │  ├─ 📄no-invalid-this.js
│  │  │  │     │  │  │  ├─ 📄no-irregular-whitespace.js
│  │  │  │     │  │  │  ├─ 📄no-iterator.js
│  │  │  │     │  │  │  ├─ 📄no-label-var.js
│  │  │  │     │  │  │  ├─ 📄no-labels.js
│  │  │  │     │  │  │  ├─ 📄no-lone-blocks.js
│  │  │  │     │  │  │  ├─ 📄no-lonely-if.js
│  │  │  │     │  │  │  ├─ 📄no-loop-func.js
│  │  │  │     │  │  │  ├─ 📄no-loss-of-precision.js
│  │  │  │     │  │  │  ├─ 📄no-magic-numbers.js
│  │  │  │     │  │  │  ├─ 📄no-misleading-character-class.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-operators.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-requires.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-spaces-and-tabs.js
│  │  │  │     │  │  │  ├─ 📄no-multi-assign.js
│  │  │  │     │  │  │  ├─ 📄no-multi-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-multi-str.js
│  │  │  │     │  │  │  ├─ 📄no-multiple-empty-lines.js
│  │  │  │     │  │  │  ├─ 📄no-native-reassign.js
│  │  │  │     │  │  │  ├─ 📄no-negated-condition.js
│  │  │  │     │  │  │  ├─ 📄no-negated-in-lhs.js
│  │  │  │     │  │  │  ├─ 📄no-nested-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-new-func.js
│  │  │  │     │  │  │  ├─ 📄no-new-native-nonconstructor.js
│  │  │  │     │  │  │  ├─ 📄no-new-object.js
│  │  │  │     │  │  │  ├─ 📄no-new-require.js
│  │  │  │     │  │  │  ├─ 📄no-new-symbol.js
│  │  │  │     │  │  │  ├─ 📄no-new-wrappers.js
│  │  │  │     │  │  │  ├─ 📄no-new.js
│  │  │  │     │  │  │  ├─ 📄no-nonoctal-decimal-escape.js
│  │  │  │     │  │  │  ├─ 📄no-obj-calls.js
│  │  │  │     │  │  │  ├─ 📄no-object-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-octal-escape.js
│  │  │  │     │  │  │  ├─ 📄no-octal.js
│  │  │  │     │  │  │  ├─ 📄no-param-reassign.js
│  │  │  │     │  │  │  ├─ 📄no-path-concat.js
│  │  │  │     │  │  │  ├─ 📄no-plusplus.js
│  │  │  │     │  │  │  ├─ 📄no-process-env.js
│  │  │  │     │  │  │  ├─ 📄no-process-exit.js
│  │  │  │     │  │  │  ├─ 📄no-promise-executor-return.js
│  │  │  │     │  │  │  ├─ 📄no-proto.js
│  │  │  │     │  │  │  ├─ 📄no-prototype-builtins.js
│  │  │  │     │  │  │  ├─ 📄no-redeclare.js
│  │  │  │     │  │  │  ├─ 📄no-regex-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-exports.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-globals.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-imports.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-modules.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-properties.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-syntax.js
│  │  │  │     │  │  │  ├─ 📄no-return-assign.js
│  │  │  │     │  │  │  ├─ 📄no-return-await.js
│  │  │  │     │  │  │  ├─ 📄no-script-url.js
│  │  │  │     │  │  │  ├─ 📄no-self-assign.js
│  │  │  │     │  │  │  ├─ 📄no-self-compare.js
│  │  │  │     │  │  │  ├─ 📄no-sequences.js
│  │  │  │     │  │  │  ├─ 📄no-setter-return.js
│  │  │  │     │  │  │  ├─ 📄no-shadow-restricted-names.js
│  │  │  │     │  │  │  ├─ 📄no-shadow.js
│  │  │  │     │  │  │  ├─ 📄no-spaced-func.js
│  │  │  │     │  │  │  ├─ 📄no-sparse-arrays.js
│  │  │  │     │  │  │  ├─ 📄no-sync.js
│  │  │  │     │  │  │  ├─ 📄no-tabs.js
│  │  │  │     │  │  │  ├─ 📄no-template-curly-in-string.js
│  │  │  │     │  │  │  ├─ 📄no-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-this-before-super.js
│  │  │  │     │  │  │  ├─ 📄no-throw-literal.js
│  │  │  │     │  │  │  ├─ 📄no-trailing-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-undef-init.js
│  │  │  │     │  │  │  ├─ 📄no-undef.js
│  │  │  │     │  │  │  ├─ 📄no-undefined.js
│  │  │  │     │  │  │  ├─ 📄no-underscore-dangle.js
│  │  │  │     │  │  │  ├─ 📄no-unexpected-multiline.js
│  │  │  │     │  │  │  ├─ 📄no-unmodified-loop-condition.js
│  │  │  │     │  │  │  ├─ 📄no-unneeded-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-unreachable-loop.js
│  │  │  │     │  │  │  ├─ 📄no-unreachable.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-finally.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-negation.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-optional-chaining.js
│  │  │  │     │  │  │  ├─ 📄no-unused-expressions.js
│  │  │  │     │  │  │  ├─ 📄no-unused-labels.js
│  │  │  │     │  │  │  ├─ 📄no-unused-private-class-members.js
│  │  │  │     │  │  │  ├─ 📄no-unused-vars.js
│  │  │  │     │  │  │  ├─ 📄no-use-before-define.js
│  │  │  │     │  │  │  ├─ 📄no-useless-assignment.js
│  │  │  │     │  │  │  ├─ 📄no-useless-backreference.js
│  │  │  │     │  │  │  ├─ 📄no-useless-call.js
│  │  │  │     │  │  │  ├─ 📄no-useless-catch.js
│  │  │  │     │  │  │  ├─ 📄no-useless-computed-key.js
│  │  │  │     │  │  │  ├─ 📄no-useless-concat.js
│  │  │  │     │  │  │  ├─ 📄no-useless-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-useless-escape.js
│  │  │  │     │  │  │  ├─ 📄no-useless-rename.js
│  │  │  │     │  │  │  ├─ 📄no-useless-return.js
│  │  │  │     │  │  │  ├─ 📄no-var.js
│  │  │  │     │  │  │  ├─ 📄no-void.js
│  │  │  │     │  │  │  ├─ 📄no-warning-comments.js
│  │  │  │     │  │  │  ├─ 📄no-whitespace-before-property.js
│  │  │  │     │  │  │  ├─ 📄no-with.js
│  │  │  │     │  │  │  ├─ 📄nonblock-statement-body-position.js
│  │  │  │     │  │  │  ├─ 📄object-curly-newline.js
│  │  │  │     │  │  │  ├─ 📄object-curly-spacing.js
│  │  │  │     │  │  │  ├─ 📄object-property-newline.js
│  │  │  │     │  │  │  ├─ 📄object-shorthand.js
│  │  │  │     │  │  │  ├─ 📄one-var-declaration-per-line.js
│  │  │  │     │  │  │  ├─ 📄one-var.js
│  │  │  │     │  │  │  ├─ 📄operator-assignment.js
│  │  │  │     │  │  │  ├─ 📄operator-linebreak.js
│  │  │  │     │  │  │  ├─ 📄padded-blocks.js
│  │  │  │     │  │  │  ├─ 📄padding-line-between-statements.js
│  │  │  │     │  │  │  ├─ 📄prefer-arrow-callback.js
│  │  │  │     │  │  │  ├─ 📄prefer-const.js
│  │  │  │     │  │  │  ├─ 📄prefer-destructuring.js
│  │  │  │     │  │  │  ├─ 📄prefer-exponentiation-operator.js
│  │  │  │     │  │  │  ├─ 📄prefer-named-capture-group.js
│  │  │  │     │  │  │  ├─ 📄prefer-numeric-literals.js
│  │  │  │     │  │  │  ├─ 📄prefer-object-has-own.js
│  │  │  │     │  │  │  ├─ 📄prefer-object-spread.js
│  │  │  │     │  │  │  ├─ 📄prefer-promise-reject-errors.js
│  │  │  │     │  │  │  ├─ 📄prefer-reflect.js
│  │  │  │     │  │  │  ├─ 📄prefer-regex-literals.js
│  │  │  │     │  │  │  ├─ 📄prefer-rest-params.js
│  │  │  │     │  │  │  ├─ 📄prefer-spread.js
│  │  │  │     │  │  │  ├─ 📄prefer-template.js
│  │  │  │     │  │  │  ├─ 📄quote-props.js
│  │  │  │     │  │  │  ├─ 📄quotes.js
│  │  │  │     │  │  │  ├─ 📄radix.js
│  │  │  │     │  │  │  ├─ 📄require-atomic-updates.js
│  │  │  │     │  │  │  ├─ 📄require-await.js
│  │  │  │     │  │  │  ├─ 📄require-unicode-regexp.js
│  │  │  │     │  │  │  ├─ 📄require-yield.js
│  │  │  │     │  │  │  ├─ 📄rest-spread-spacing.js
│  │  │  │     │  │  │  ├─ 📄semi-spacing.js
│  │  │  │     │  │  │  ├─ 📄semi-style.js
│  │  │  │     │  │  │  ├─ 📄semi.js
│  │  │  │     │  │  │  ├─ 📄sort-imports.js
│  │  │  │     │  │  │  ├─ 📄sort-keys.js
│  │  │  │     │  │  │  ├─ 📄sort-vars.js
│  │  │  │     │  │  │  ├─ 📄space-before-blocks.js
│  │  │  │     │  │  │  ├─ 📄space-before-function-paren.js
│  │  │  │     │  │  │  ├─ 📄space-in-parens.js
│  │  │  │     │  │  │  ├─ 📄space-infix-ops.js
│  │  │  │     │  │  │  ├─ 📄space-unary-ops.js
│  │  │  │     │  │  │  ├─ 📄spaced-comment.js
│  │  │  │     │  │  │  ├─ 📄strict.js
│  │  │  │     │  │  │  ├─ 📄switch-colon-spacing.js
│  │  │  │     │  │  │  ├─ 📄symbol-description.js
│  │  │  │     │  │  │  ├─ 📄template-curly-spacing.js
│  │  │  │     │  │  │  ├─ 📄template-tag-spacing.js
│  │  │  │     │  │  │  ├─ 📄unicode-bom.js
│  │  │  │     │  │  │  ├─ 📄use-isnan.js
│  │  │  │     │  │  │  ├─ 📄valid-typeof.js
│  │  │  │     │  │  │  ├─ 📄vars-on-top.js
│  │  │  │     │  │  │  ├─ 📄wrap-iife.js
│  │  │  │     │  │  │  ├─ 📄wrap-regex.js
│  │  │  │     │  │  │  ├─ 📄yield-star-spacing.js
│  │  │  │     │  │  │  └─ 📄yoda.js
│  │  │  │     │  │  ├─ 📁shared
│  │  │  │     │  │  │  ├─ 📄ajv.js
│  │  │  │     │  │  │  ├─ 📄ast-utils.js
│  │  │  │     │  │  │  ├─ 📄directives.js
│  │  │  │     │  │  │  ├─ 📄flags.js
│  │  │  │     │  │  │  ├─ 📄logging.js
│  │  │  │     │  │  │  ├─ 📄runtime-info.js
│  │  │  │     │  │  │  ├─ 📄serialization.js
│  │  │  │     │  │  │  ├─ 📄severity.js
│  │  │  │     │  │  │  ├─ 📄stats.js
│  │  │  │     │  │  │  ├─ 📄string-utils.js
│  │  │  │     │  │  │  ├─ 📄traverser.js
│  │  │  │     │  │  │  └─ 📄types.js
│  │  │  │     │  │  ├─ 📄api.js
│  │  │  │     │  │  ├─ 📄cli.js
│  │  │  │     │  │  ├─ 📄options.js
│  │  │  │     │  │  └─ 📄unsupported-api.js
│  │  │  │     │  ├─ 📁messages
│  │  │  │     │  │  ├─ 📄all-files-ignored.js
│  │  │  │     │  │  ├─ 📄all-matched-files-ignored.js
│  │  │  │     │  │  ├─ 📄config-file-missing.js
│  │  │  │     │  │  ├─ 📄eslintrc-incompat.js
│  │  │  │     │  │  ├─ 📄eslintrc-plugins.js
│  │  │  │     │  │  ├─ 📄extend-config-missing.js
│  │  │  │     │  │  ├─ 📄failed-to-read-json.js
│  │  │  │     │  │  ├─ 📄file-not-found.js
│  │  │  │     │  │  ├─ 📄invalid-rule-options.js
│  │  │  │     │  │  ├─ 📄invalid-rule-severity.js
│  │  │  │     │  │  ├─ 📄no-config-found.js
│  │  │  │     │  │  ├─ 📄plugin-conflict.js
│  │  │  │     │  │  ├─ 📄plugin-invalid.js
│  │  │  │     │  │  ├─ 📄plugin-missing.js
│  │  │  │     │  │  ├─ 📄print-config-with-directory-path.js
│  │  │  │     │  │  ├─ 📄shared.js
│  │  │  │     │  │  └─ 📄whitespace-found.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁typescript
│  │  │  │        ├─ 📁bin
│  │  │  │        │  ├─ 📄tsc
│  │  │  │        │  └─ 📄tsserver
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📁cs
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁de
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁es
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁fr
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁it
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ja
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ko
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁pl
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁pt-br
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ru
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁tr
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁zh-cn
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁zh-tw
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📄cancellationToken.js
│  │  │  │        │  ├─ 📄lib.d.ts
│  │  │  │        │  ├─ 📄lib.decorators.d.ts
│  │  │  │        │  ├─ 📄lib.decorators.legacy.d.ts
│  │  │  │        │  ├─ 📄lib.dom.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.dom.d.ts
│  │  │  │        │  ├─ 📄lib.dom.iterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.collection.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.core.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.generator.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.iterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.proxy.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.reflect.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.symbol.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.symbol.wellknown.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.array.include.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.date.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.typedarrays.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.asyncgenerator.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.symbol.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.bigint.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.date.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.number.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.symbol.wellknown.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.weakref.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.error.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.collection.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es5.d.ts
│  │  │  │        │  ├─ 📄lib.es6.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.array.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.collection.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.decorators.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.disposable.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.full.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.intl.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.object.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.promise.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.string.d.ts
│  │  │  │        │  ├─ 📄lib.scripthost.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.importscripts.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.iterable.d.ts
│  │  │  │        │  ├─ 📄tsc.js
│  │  │  │        │  ├─ 📄tsserver.js
│  │  │  │        │  ├─ 📄tsserverlibrary.d.ts
│  │  │  │        │  ├─ 📄tsserverlibrary.js
│  │  │  │        │  ├─ 📄typescript.d.ts
│  │  │  │        │  ├─ 📄typescript.js
│  │  │  │        │  ├─ 📄typesMap.json
│  │  │  │        │  ├─ 📄typingsInstaller.js
│  │  │  │        │  └─ 📄watchGuard.js
│  │  │  │        ├─ 📄LICENSE.txt
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        ├─ 📄SECURITY.md
│  │  │  │        └─ 📄ThirdPartyNoticeText.txt
│  │  │  ├─ 📁@typescript-eslint+scope-manager@8.2.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@typescript-eslint
│  │  │  │        ├─ 📁scope-manager
│  │  │  │        │  ├─ 📁dist
│  │  │  │        │  │  ├─ 📁definition
│  │  │  │        │  │  │  ├─ 📄CatchClauseDefinition.d.ts
│  │  │  │        │  │  │  ├─ 📄CatchClauseDefinition.d.ts.map
│  │  │  │        │  │  │  ├─ 📄CatchClauseDefinition.js
│  │  │  │        │  │  │  ├─ 📄CatchClauseDefinition.js.map
│  │  │  │        │  │  │  ├─ 📄ClassNameDefinition.d.ts
│  │  │  │        │  │  │  ├─ 📄ClassNameDefinition.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ClassNameDefinition.js
│  │  │  │        │  │  │  ├─ 📄ClassNameDefinition.js.map
│  │  │  │        │  │  │  ├─ 📄Definition.d.ts
│  │  │  │        │  │  │  ├─ 📄Definition.d.ts.map
│  │  │  │        │  │  │  ├─ 📄Definition.js
│  │  │  │        │  │  │  ├─ 📄Definition.js.map
│  │  │  │        │  │  │  ├─ 📄DefinitionBase.d.ts
│  │  │  │        │  │  │  ├─ 📄DefinitionBase.d.ts.map
│  │  │  │        │  │  │  ├─ 📄DefinitionBase.js
│  │  │  │        │  │  │  ├─ 📄DefinitionBase.js.map
│  │  │  │        │  │  │  ├─ 📄DefinitionType.d.ts
│  │  │  │        │  │  │  ├─ 📄DefinitionType.d.ts.map
│  │  │  │        │  │  │  ├─ 📄DefinitionType.js
│  │  │  │        │  │  │  ├─ 📄DefinitionType.js.map
│  │  │  │        │  │  │  ├─ 📄FunctionNameDefinition.d.ts
│  │  │  │        │  │  │  ├─ 📄FunctionNameDefinition.d.ts.map
│  │  │  │        │  │  │  ├─ 📄FunctionNameDefinition.js
│  │  │  │        │  │  │  ├─ 📄FunctionNameDefinition.js.map
│  │  │  │        │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.d.ts
│  │  │  │        │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.js
│  │  │  │        │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.js.map
│  │  │  │        │  │  │  ├─ 📄ImportBindingDefinition.d.ts
│  │  │  │        │  │  │  ├─ 📄ImportBindingDefinition.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ImportBindingDefinition.js
│  │  │  │        │  │  │  ├─ 📄ImportBindingDefinition.js.map
│  │  │  │        │  │  │  ├─ 📄index.d.ts
│  │  │  │        │  │  │  ├─ 📄index.d.ts.map
│  │  │  │        │  │  │  ├─ 📄index.js
│  │  │  │        │  │  │  ├─ 📄index.js.map
│  │  │  │        │  │  │  ├─ 📄ParameterDefinition.d.ts
│  │  │  │        │  │  │  ├─ 📄ParameterDefinition.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ParameterDefinition.js
│  │  │  │        │  │  │  ├─ 📄ParameterDefinition.js.map
│  │  │  │        │  │  │  ├─ 📄TSEnumMemberDefinition.d.ts
│  │  │  │        │  │  │  ├─ 📄TSEnumMemberDefinition.d.ts.map
│  │  │  │        │  │  │  ├─ 📄TSEnumMemberDefinition.js
│  │  │  │        │  │  │  ├─ 📄TSEnumMemberDefinition.js.map
│  │  │  │        │  │  │  ├─ 📄TSEnumNameDefinition.d.ts
│  │  │  │        │  │  │  ├─ 📄TSEnumNameDefinition.d.ts.map
│  │  │  │        │  │  │  ├─ 📄TSEnumNameDefinition.js
│  │  │  │        │  │  │  ├─ 📄TSEnumNameDefinition.js.map
│  │  │  │        │  │  │  ├─ 📄TSModuleNameDefinition.d.ts
│  │  │  │        │  │  │  ├─ 📄TSModuleNameDefinition.d.ts.map
│  │  │  │        │  │  │  ├─ 📄TSModuleNameDefinition.js
│  │  │  │        │  │  │  ├─ 📄TSModuleNameDefinition.js.map
│  │  │  │        │  │  │  ├─ 📄TypeDefinition.d.ts
│  │  │  │        │  │  │  ├─ 📄TypeDefinition.d.ts.map
│  │  │  │        │  │  │  ├─ 📄TypeDefinition.js
│  │  │  │        │  │  │  ├─ 📄TypeDefinition.js.map
│  │  │  │        │  │  │  ├─ 📄VariableDefinition.d.ts
│  │  │  │        │  │  │  ├─ 📄VariableDefinition.d.ts.map
│  │  │  │        │  │  │  ├─ 📄VariableDefinition.js
│  │  │  │        │  │  │  └─ 📄VariableDefinition.js.map
│  │  │  │        │  │  ├─ 📁lib
│  │  │  │        │  │  │  ├─ 📄base-config.d.ts
│  │  │  │        │  │  │  ├─ 📄base-config.d.ts.map
│  │  │  │        │  │  │  ├─ 📄base-config.js
│  │  │  │        │  │  │  ├─ 📄base-config.js.map
│  │  │  │        │  │  │  ├─ 📄decorators.d.ts
│  │  │  │        │  │  │  ├─ 📄decorators.d.ts.map
│  │  │  │        │  │  │  ├─ 📄decorators.js
│  │  │  │        │  │  │  ├─ 📄decorators.js.map
│  │  │  │        │  │  │  ├─ 📄decorators.legacy.d.ts
│  │  │  │        │  │  │  ├─ 📄decorators.legacy.d.ts.map
│  │  │  │        │  │  │  ├─ 📄decorators.legacy.js
│  │  │  │        │  │  │  ├─ 📄decorators.legacy.js.map
│  │  │  │        │  │  │  ├─ 📄dom.asynciterable.d.ts
│  │  │  │        │  │  │  ├─ 📄dom.asynciterable.d.ts.map
│  │  │  │        │  │  │  ├─ 📄dom.asynciterable.js
│  │  │  │        │  │  │  ├─ 📄dom.asynciterable.js.map
│  │  │  │        │  │  │  ├─ 📄dom.d.ts
│  │  │  │        │  │  │  ├─ 📄dom.d.ts.map
│  │  │  │        │  │  │  ├─ 📄dom.iterable.d.ts
│  │  │  │        │  │  │  ├─ 📄dom.iterable.d.ts.map
│  │  │  │        │  │  │  ├─ 📄dom.iterable.js
│  │  │  │        │  │  │  ├─ 📄dom.iterable.js.map
│  │  │  │        │  │  │  ├─ 📄dom.js
│  │  │  │        │  │  │  ├─ 📄dom.js.map
│  │  │  │        │  │  │  ├─ 📄es2015.collection.d.ts
│  │  │  │        │  │  │  ├─ 📄es2015.collection.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2015.collection.js
│  │  │  │        │  │  │  ├─ 📄es2015.collection.js.map
│  │  │  │        │  │  │  ├─ 📄es2015.core.d.ts
│  │  │  │        │  │  │  ├─ 📄es2015.core.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2015.core.js
│  │  │  │        │  │  │  ├─ 📄es2015.core.js.map
│  │  │  │        │  │  │  ├─ 📄es2015.d.ts
│  │  │  │        │  │  │  ├─ 📄es2015.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2015.generator.d.ts
│  │  │  │        │  │  │  ├─ 📄es2015.generator.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2015.generator.js
│  │  │  │        │  │  │  ├─ 📄es2015.generator.js.map
│  │  │  │        │  │  │  ├─ 📄es2015.iterable.d.ts
│  │  │  │        │  │  │  ├─ 📄es2015.iterable.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2015.iterable.js
│  │  │  │        │  │  │  ├─ 📄es2015.iterable.js.map
│  │  │  │        │  │  │  ├─ 📄es2015.js
│  │  │  │        │  │  │  ├─ 📄es2015.js.map
│  │  │  │        │  │  │  ├─ 📄es2015.promise.d.ts
│  │  │  │        │  │  │  ├─ 📄es2015.promise.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2015.promise.js
│  │  │  │        │  │  │  ├─ 📄es2015.promise.js.map
│  │  │  │        │  │  │  ├─ 📄es2015.proxy.d.ts
│  │  │  │        │  │  │  ├─ 📄es2015.proxy.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2015.proxy.js
│  │  │  │        │  │  │  ├─ 📄es2015.proxy.js.map
│  │  │  │        │  │  │  ├─ 📄es2015.reflect.d.ts
│  │  │  │        │  │  │  ├─ 📄es2015.reflect.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2015.reflect.js
│  │  │  │        │  │  │  ├─ 📄es2015.reflect.js.map
│  │  │  │        │  │  │  ├─ 📄es2015.symbol.d.ts
│  │  │  │        │  │  │  ├─ 📄es2015.symbol.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2015.symbol.js
│  │  │  │        │  │  │  ├─ 📄es2015.symbol.js.map
│  │  │  │        │  │  │  ├─ 📄es2015.symbol.wellknown.d.ts
│  │  │  │        │  │  │  ├─ 📄es2015.symbol.wellknown.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2015.symbol.wellknown.js
│  │  │  │        │  │  │  ├─ 📄es2015.symbol.wellknown.js.map
│  │  │  │        │  │  │  ├─ 📄es2016.array.include.d.ts
│  │  │  │        │  │  │  ├─ 📄es2016.array.include.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2016.array.include.js
│  │  │  │        │  │  │  ├─ 📄es2016.array.include.js.map
│  │  │  │        │  │  │  ├─ 📄es2016.d.ts
│  │  │  │        │  │  │  ├─ 📄es2016.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2016.full.d.ts
│  │  │  │        │  │  │  ├─ 📄es2016.full.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2016.full.js
│  │  │  │        │  │  │  ├─ 📄es2016.full.js.map
│  │  │  │        │  │  │  ├─ 📄es2016.intl.d.ts
│  │  │  │        │  │  │  ├─ 📄es2016.intl.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2016.intl.js
│  │  │  │        │  │  │  ├─ 📄es2016.intl.js.map
│  │  │  │        │  │  │  ├─ 📄es2016.js
│  │  │  │        │  │  │  ├─ 📄es2016.js.map
│  │  │  │        │  │  │  ├─ 📄es2017.d.ts
│  │  │  │        │  │  │  ├─ 📄es2017.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2017.date.d.ts
│  │  │  │        │  │  │  ├─ 📄es2017.date.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2017.date.js
│  │  │  │        │  │  │  ├─ 📄es2017.date.js.map
│  │  │  │        │  │  │  ├─ 📄es2017.full.d.ts
│  │  │  │        │  │  │  ├─ 📄es2017.full.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2017.full.js
│  │  │  │        │  │  │  ├─ 📄es2017.full.js.map
│  │  │  │        │  │  │  ├─ 📄es2017.intl.d.ts
│  │  │  │        │  │  │  ├─ 📄es2017.intl.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2017.intl.js
│  │  │  │        │  │  │  ├─ 📄es2017.intl.js.map
│  │  │  │        │  │  │  ├─ 📄es2017.js
│  │  │  │        │  │  │  ├─ 📄es2017.js.map
│  │  │  │        │  │  │  ├─ 📄es2017.object.d.ts
│  │  │  │        │  │  │  ├─ 📄es2017.object.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2017.object.js
│  │  │  │        │  │  │  ├─ 📄es2017.object.js.map
│  │  │  │        │  │  │  ├─ 📄es2017.sharedmemory.d.ts
│  │  │  │        │  │  │  ├─ 📄es2017.sharedmemory.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2017.sharedmemory.js
│  │  │  │        │  │  │  ├─ 📄es2017.sharedmemory.js.map
│  │  │  │        │  │  │  ├─ 📄es2017.string.d.ts
│  │  │  │        │  │  │  ├─ 📄es2017.string.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2017.string.js
│  │  │  │        │  │  │  ├─ 📄es2017.string.js.map
│  │  │  │        │  │  │  ├─ 📄es2017.typedarrays.d.ts
│  │  │  │        │  │  │  ├─ 📄es2017.typedarrays.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2017.typedarrays.js
│  │  │  │        │  │  │  ├─ 📄es2017.typedarrays.js.map
│  │  │  │        │  │  │  ├─ 📄es2018.asyncgenerator.d.ts
│  │  │  │        │  │  │  ├─ 📄es2018.asyncgenerator.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2018.asyncgenerator.js
│  │  │  │        │  │  │  ├─ 📄es2018.asyncgenerator.js.map
│  │  │  │        │  │  │  ├─ 📄es2018.asynciterable.d.ts
│  │  │  │        │  │  │  ├─ 📄es2018.asynciterable.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2018.asynciterable.js
│  │  │  │        │  │  │  ├─ 📄es2018.asynciterable.js.map
│  │  │  │        │  │  │  ├─ 📄es2018.d.ts
│  │  │  │        │  │  │  ├─ 📄es2018.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2018.full.d.ts
│  │  │  │        │  │  │  ├─ 📄es2018.full.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2018.full.js
│  │  │  │        │  │  │  ├─ 📄es2018.full.js.map
│  │  │  │        │  │  │  ├─ 📄es2018.intl.d.ts
│  │  │  │        │  │  │  ├─ 📄es2018.intl.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2018.intl.js
│  │  │  │        │  │  │  ├─ 📄es2018.intl.js.map
│  │  │  │        │  │  │  ├─ 📄es2018.js
│  │  │  │        │  │  │  ├─ 📄es2018.js.map
│  │  │  │        │  │  │  ├─ 📄es2018.promise.d.ts
│  │  │  │        │  │  │  ├─ 📄es2018.promise.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2018.promise.js
│  │  │  │        │  │  │  ├─ 📄es2018.promise.js.map
│  │  │  │        │  │  │  ├─ 📄es2018.regexp.d.ts
│  │  │  │        │  │  │  ├─ 📄es2018.regexp.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2018.regexp.js
│  │  │  │        │  │  │  ├─ 📄es2018.regexp.js.map
│  │  │  │        │  │  │  ├─ 📄es2019.array.d.ts
│  │  │  │        │  │  │  ├─ 📄es2019.array.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2019.array.js
│  │  │  │        │  │  │  ├─ 📄es2019.array.js.map
│  │  │  │        │  │  │  ├─ 📄es2019.d.ts
│  │  │  │        │  │  │  ├─ 📄es2019.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2019.full.d.ts
│  │  │  │        │  │  │  ├─ 📄es2019.full.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2019.full.js
│  │  │  │        │  │  │  ├─ 📄es2019.full.js.map
│  │  │  │        │  │  │  ├─ 📄es2019.intl.d.ts
│  │  │  │        │  │  │  ├─ 📄es2019.intl.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2019.intl.js
│  │  │  │        │  │  │  ├─ 📄es2019.intl.js.map
│  │  │  │        │  │  │  ├─ 📄es2019.js
│  │  │  │        │  │  │  ├─ 📄es2019.js.map
│  │  │  │        │  │  │  ├─ 📄es2019.object.d.ts
│  │  │  │        │  │  │  ├─ 📄es2019.object.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2019.object.js
│  │  │  │        │  │  │  ├─ 📄es2019.object.js.map
│  │  │  │        │  │  │  ├─ 📄es2019.string.d.ts
│  │  │  │        │  │  │  ├─ 📄es2019.string.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2019.string.js
│  │  │  │        │  │  │  ├─ 📄es2019.string.js.map
│  │  │  │        │  │  │  ├─ 📄es2019.symbol.d.ts
│  │  │  │        │  │  │  ├─ 📄es2019.symbol.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2019.symbol.js
│  │  │  │        │  │  │  ├─ 📄es2019.symbol.js.map
│  │  │  │        │  │  │  ├─ 📄es2020.bigint.d.ts
│  │  │  │        │  │  │  ├─ 📄es2020.bigint.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2020.bigint.js
│  │  │  │        │  │  │  ├─ 📄es2020.bigint.js.map
│  │  │  │        │  │  │  ├─ 📄es2020.d.ts
│  │  │  │        │  │  │  ├─ 📄es2020.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2020.date.d.ts
│  │  │  │        │  │  │  ├─ 📄es2020.date.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2020.date.js
│  │  │  │        │  │  │  ├─ 📄es2020.date.js.map
│  │  │  │        │  │  │  ├─ 📄es2020.full.d.ts
│  │  │  │        │  │  │  ├─ 📄es2020.full.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2020.full.js
│  │  │  │        │  │  │  ├─ 📄es2020.full.js.map
│  │  │  │        │  │  │  ├─ 📄es2020.intl.d.ts
│  │  │  │        │  │  │  ├─ 📄es2020.intl.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2020.intl.js
│  │  │  │        │  │  │  ├─ 📄es2020.intl.js.map
│  │  │  │        │  │  │  ├─ 📄es2020.js
│  │  │  │        │  │  │  ├─ 📄es2020.js.map
│  │  │  │        │  │  │  ├─ 📄es2020.number.d.ts
│  │  │  │        │  │  │  ├─ 📄es2020.number.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2020.number.js
│  │  │  │        │  │  │  ├─ 📄es2020.number.js.map
│  │  │  │        │  │  │  ├─ 📄es2020.promise.d.ts
│  │  │  │        │  │  │  ├─ 📄es2020.promise.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2020.promise.js
│  │  │  │        │  │  │  ├─ 📄es2020.promise.js.map
│  │  │  │        │  │  │  ├─ 📄es2020.sharedmemory.d.ts
│  │  │  │        │  │  │  ├─ 📄es2020.sharedmemory.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2020.sharedmemory.js
│  │  │  │        │  │  │  ├─ 📄es2020.sharedmemory.js.map
│  │  │  │        │  │  │  ├─ 📄es2020.string.d.ts
│  │  │  │        │  │  │  ├─ 📄es2020.string.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2020.string.js
│  │  │  │        │  │  │  ├─ 📄es2020.string.js.map
│  │  │  │        │  │  │  ├─ 📄es2020.symbol.wellknown.d.ts
│  │  │  │        │  │  │  ├─ 📄es2020.symbol.wellknown.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2020.symbol.wellknown.js
│  │  │  │        │  │  │  ├─ 📄es2020.symbol.wellknown.js.map
│  │  │  │        │  │  │  ├─ 📄es2021.d.ts
│  │  │  │        │  │  │  ├─ 📄es2021.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2021.full.d.ts
│  │  │  │        │  │  │  ├─ 📄es2021.full.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2021.full.js
│  │  │  │        │  │  │  ├─ 📄es2021.full.js.map
│  │  │  │        │  │  │  ├─ 📄es2021.intl.d.ts
│  │  │  │        │  │  │  ├─ 📄es2021.intl.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2021.intl.js
│  │  │  │        │  │  │  ├─ 📄es2021.intl.js.map
│  │  │  │        │  │  │  ├─ 📄es2021.js
│  │  │  │        │  │  │  ├─ 📄es2021.js.map
│  │  │  │        │  │  │  ├─ 📄es2021.promise.d.ts
│  │  │  │        │  │  │  ├─ 📄es2021.promise.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2021.promise.js
│  │  │  │        │  │  │  ├─ 📄es2021.promise.js.map
│  │  │  │        │  │  │  ├─ 📄es2021.string.d.ts
│  │  │  │        │  │  │  ├─ 📄es2021.string.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2021.string.js
│  │  │  │        │  │  │  ├─ 📄es2021.string.js.map
│  │  │  │        │  │  │  ├─ 📄es2021.weakref.d.ts
│  │  │  │        │  │  │  ├─ 📄es2021.weakref.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2021.weakref.js
│  │  │  │        │  │  │  ├─ 📄es2021.weakref.js.map
│  │  │  │        │  │  │  ├─ 📄es2022.array.d.ts
│  │  │  │        │  │  │  ├─ 📄es2022.array.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2022.array.js
│  │  │  │        │  │  │  ├─ 📄es2022.array.js.map
│  │  │  │        │  │  │  ├─ 📄es2022.d.ts
│  │  │  │        │  │  │  ├─ 📄es2022.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2022.error.d.ts
│  │  │  │        │  │  │  ├─ 📄es2022.error.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2022.error.js
│  │  │  │        │  │  │  ├─ 📄es2022.error.js.map
│  │  │  │        │  │  │  ├─ 📄es2022.full.d.ts
│  │  │  │        │  │  │  ├─ 📄es2022.full.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2022.full.js
│  │  │  │        │  │  │  ├─ 📄es2022.full.js.map
│  │  │  │        │  │  │  ├─ 📄es2022.intl.d.ts
│  │  │  │        │  │  │  ├─ 📄es2022.intl.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2022.intl.js
│  │  │  │        │  │  │  ├─ 📄es2022.intl.js.map
│  │  │  │        │  │  │  ├─ 📄es2022.js
│  │  │  │        │  │  │  ├─ 📄es2022.js.map
│  │  │  │        │  │  │  ├─ 📄es2022.object.d.ts
│  │  │  │        │  │  │  ├─ 📄es2022.object.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2022.object.js
│  │  │  │        │  │  │  ├─ 📄es2022.object.js.map
│  │  │  │        │  │  │  ├─ 📄es2022.regexp.d.ts
│  │  │  │        │  │  │  ├─ 📄es2022.regexp.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2022.regexp.js
│  │  │  │        │  │  │  ├─ 📄es2022.regexp.js.map
│  │  │  │        │  │  │  ├─ 📄es2022.sharedmemory.d.ts
│  │  │  │        │  │  │  ├─ 📄es2022.sharedmemory.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2022.sharedmemory.js
│  │  │  │        │  │  │  ├─ 📄es2022.sharedmemory.js.map
│  │  │  │        │  │  │  ├─ 📄es2022.string.d.ts
│  │  │  │        │  │  │  ├─ 📄es2022.string.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2022.string.js
│  │  │  │        │  │  │  ├─ 📄es2022.string.js.map
│  │  │  │        │  │  │  ├─ 📄es2023.array.d.ts
│  │  │  │        │  │  │  ├─ 📄es2023.array.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2023.array.js
│  │  │  │        │  │  │  ├─ 📄es2023.array.js.map
│  │  │  │        │  │  │  ├─ 📄es2023.collection.d.ts
│  │  │  │        │  │  │  ├─ 📄es2023.collection.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2023.collection.js
│  │  │  │        │  │  │  ├─ 📄es2023.collection.js.map
│  │  │  │        │  │  │  ├─ 📄es2023.d.ts
│  │  │  │        │  │  │  ├─ 📄es2023.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2023.full.d.ts
│  │  │  │        │  │  │  ├─ 📄es2023.full.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2023.full.js
│  │  │  │        │  │  │  ├─ 📄es2023.full.js.map
│  │  │  │        │  │  │  ├─ 📄es2023.intl.d.ts
│  │  │  │        │  │  │  ├─ 📄es2023.intl.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es2023.intl.js
│  │  │  │        │  │  │  ├─ 📄es2023.intl.js.map
│  │  │  │        │  │  │  ├─ 📄es2023.js
│  │  │  │        │  │  │  ├─ 📄es2023.js.map
│  │  │  │        │  │  │  ├─ 📄es5.d.ts
│  │  │  │        │  │  │  ├─ 📄es5.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es5.js
│  │  │  │        │  │  │  ├─ 📄es5.js.map
│  │  │  │        │  │  │  ├─ 📄es6.d.ts
│  │  │  │        │  │  │  ├─ 📄es6.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es6.js
│  │  │  │        │  │  │  ├─ 📄es6.js.map
│  │  │  │        │  │  │  ├─ 📄es7.d.ts
│  │  │  │        │  │  │  ├─ 📄es7.d.ts.map
│  │  │  │        │  │  │  ├─ 📄es7.js
│  │  │  │        │  │  │  ├─ 📄es7.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.array.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.array.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.array.js
│  │  │  │        │  │  │  ├─ 📄esnext.array.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.asynciterable.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.asynciterable.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.asynciterable.js
│  │  │  │        │  │  │  ├─ 📄esnext.asynciterable.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.bigint.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.bigint.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.bigint.js
│  │  │  │        │  │  │  ├─ 📄esnext.bigint.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.collection.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.collection.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.collection.js
│  │  │  │        │  │  │  ├─ 📄esnext.collection.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.decorators.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.decorators.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.decorators.js
│  │  │  │        │  │  │  ├─ 📄esnext.decorators.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.disposable.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.disposable.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.disposable.js
│  │  │  │        │  │  │  ├─ 📄esnext.disposable.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.full.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.full.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.full.js
│  │  │  │        │  │  │  ├─ 📄esnext.full.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.intl.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.intl.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.intl.js
│  │  │  │        │  │  │  ├─ 📄esnext.intl.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.js
│  │  │  │        │  │  │  ├─ 📄esnext.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.object.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.object.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.object.js
│  │  │  │        │  │  │  ├─ 📄esnext.object.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.promise.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.promise.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.promise.js
│  │  │  │        │  │  │  ├─ 📄esnext.promise.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.regexp.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.regexp.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.regexp.js
│  │  │  │        │  │  │  ├─ 📄esnext.regexp.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.string.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.string.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.string.js
│  │  │  │        │  │  │  ├─ 📄esnext.string.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.symbol.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.symbol.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.symbol.js
│  │  │  │        │  │  │  ├─ 📄esnext.symbol.js.map
│  │  │  │        │  │  │  ├─ 📄esnext.weakref.d.ts
│  │  │  │        │  │  │  ├─ 📄esnext.weakref.d.ts.map
│  │  │  │        │  │  │  ├─ 📄esnext.weakref.js
│  │  │  │        │  │  │  ├─ 📄esnext.weakref.js.map
│  │  │  │        │  │  │  ├─ 📄index.d.ts
│  │  │  │        │  │  │  ├─ 📄index.d.ts.map
│  │  │  │        │  │  │  ├─ 📄index.js
│  │  │  │        │  │  │  ├─ 📄index.js.map
│  │  │  │        │  │  │  ├─ 📄lib.d.ts
│  │  │  │        │  │  │  ├─ 📄lib.d.ts.map
│  │  │  │        │  │  │  ├─ 📄lib.js
│  │  │  │        │  │  │  ├─ 📄lib.js.map
│  │  │  │        │  │  │  ├─ 📄scripthost.d.ts
│  │  │  │        │  │  │  ├─ 📄scripthost.d.ts.map
│  │  │  │        │  │  │  ├─ 📄scripthost.js
│  │  │  │        │  │  │  ├─ 📄scripthost.js.map
│  │  │  │        │  │  │  ├─ 📄webworker.asynciterable.d.ts
│  │  │  │        │  │  │  ├─ 📄webworker.asynciterable.d.ts.map
│  │  │  │        │  │  │  ├─ 📄webworker.asynciterable.js
│  │  │  │        │  │  │  ├─ 📄webworker.asynciterable.js.map
│  │  │  │        │  │  │  ├─ 📄webworker.d.ts
│  │  │  │        │  │  │  ├─ 📄webworker.d.ts.map
│  │  │  │        │  │  │  ├─ 📄webworker.importscripts.d.ts
│  │  │  │        │  │  │  ├─ 📄webworker.importscripts.d.ts.map
│  │  │  │        │  │  │  ├─ 📄webworker.importscripts.js
│  │  │  │        │  │  │  ├─ 📄webworker.importscripts.js.map
│  │  │  │        │  │  │  ├─ 📄webworker.iterable.d.ts
│  │  │  │        │  │  │  ├─ 📄webworker.iterable.d.ts.map
│  │  │  │        │  │  │  ├─ 📄webworker.iterable.js
│  │  │  │        │  │  │  ├─ 📄webworker.iterable.js.map
│  │  │  │        │  │  │  ├─ 📄webworker.js
│  │  │  │        │  │  │  └─ 📄webworker.js.map
│  │  │  │        │  │  ├─ 📁referencer
│  │  │  │        │  │  │  ├─ 📄ClassVisitor.d.ts
│  │  │  │        │  │  │  ├─ 📄ClassVisitor.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ClassVisitor.js
│  │  │  │        │  │  │  ├─ 📄ClassVisitor.js.map
│  │  │  │        │  │  │  ├─ 📄ExportVisitor.d.ts
│  │  │  │        │  │  │  ├─ 📄ExportVisitor.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ExportVisitor.js
│  │  │  │        │  │  │  ├─ 📄ExportVisitor.js.map
│  │  │  │        │  │  │  ├─ 📄ImportVisitor.d.ts
│  │  │  │        │  │  │  ├─ 📄ImportVisitor.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ImportVisitor.js
│  │  │  │        │  │  │  ├─ 📄ImportVisitor.js.map
│  │  │  │        │  │  │  ├─ 📄index.d.ts
│  │  │  │        │  │  │  ├─ 📄index.d.ts.map
│  │  │  │        │  │  │  ├─ 📄index.js
│  │  │  │        │  │  │  ├─ 📄index.js.map
│  │  │  │        │  │  │  ├─ 📄PatternVisitor.d.ts
│  │  │  │        │  │  │  ├─ 📄PatternVisitor.d.ts.map
│  │  │  │        │  │  │  ├─ 📄PatternVisitor.js
│  │  │  │        │  │  │  ├─ 📄PatternVisitor.js.map
│  │  │  │        │  │  │  ├─ 📄Reference.d.ts
│  │  │  │        │  │  │  ├─ 📄Reference.d.ts.map
│  │  │  │        │  │  │  ├─ 📄Reference.js
│  │  │  │        │  │  │  ├─ 📄Reference.js.map
│  │  │  │        │  │  │  ├─ 📄Referencer.d.ts
│  │  │  │        │  │  │  ├─ 📄Referencer.d.ts.map
│  │  │  │        │  │  │  ├─ 📄Referencer.js
│  │  │  │        │  │  │  ├─ 📄Referencer.js.map
│  │  │  │        │  │  │  ├─ 📄TypeVisitor.d.ts
│  │  │  │        │  │  │  ├─ 📄TypeVisitor.d.ts.map
│  │  │  │        │  │  │  ├─ 📄TypeVisitor.js
│  │  │  │        │  │  │  ├─ 📄TypeVisitor.js.map
│  │  │  │        │  │  │  ├─ 📄Visitor.d.ts
│  │  │  │        │  │  │  ├─ 📄Visitor.d.ts.map
│  │  │  │        │  │  │  ├─ 📄Visitor.js
│  │  │  │        │  │  │  ├─ 📄Visitor.js.map
│  │  │  │        │  │  │  ├─ 📄VisitorBase.d.ts
│  │  │  │        │  │  │  ├─ 📄VisitorBase.d.ts.map
│  │  │  │        │  │  │  ├─ 📄VisitorBase.js
│  │  │  │        │  │  │  └─ 📄VisitorBase.js.map
│  │  │  │        │  │  ├─ 📁scope
│  │  │  │        │  │  │  ├─ 📄BlockScope.d.ts
│  │  │  │        │  │  │  ├─ 📄BlockScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄BlockScope.js
│  │  │  │        │  │  │  ├─ 📄BlockScope.js.map
│  │  │  │        │  │  │  ├─ 📄CatchScope.d.ts
│  │  │  │        │  │  │  ├─ 📄CatchScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄CatchScope.js
│  │  │  │        │  │  │  ├─ 📄CatchScope.js.map
│  │  │  │        │  │  │  ├─ 📄ClassFieldInitializerScope.d.ts
│  │  │  │        │  │  │  ├─ 📄ClassFieldInitializerScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ClassFieldInitializerScope.js
│  │  │  │        │  │  │  ├─ 📄ClassFieldInitializerScope.js.map
│  │  │  │        │  │  │  ├─ 📄ClassScope.d.ts
│  │  │  │        │  │  │  ├─ 📄ClassScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ClassScope.js
│  │  │  │        │  │  │  ├─ 📄ClassScope.js.map
│  │  │  │        │  │  │  ├─ 📄ClassStaticBlockScope.d.ts
│  │  │  │        │  │  │  ├─ 📄ClassStaticBlockScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ClassStaticBlockScope.js
│  │  │  │        │  │  │  ├─ 📄ClassStaticBlockScope.js.map
│  │  │  │        │  │  │  ├─ 📄ConditionalTypeScope.d.ts
│  │  │  │        │  │  │  ├─ 📄ConditionalTypeScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ConditionalTypeScope.js
│  │  │  │        │  │  │  ├─ 📄ConditionalTypeScope.js.map
│  │  │  │        │  │  │  ├─ 📄ForScope.d.ts
│  │  │  │        │  │  │  ├─ 📄ForScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ForScope.js
│  │  │  │        │  │  │  ├─ 📄ForScope.js.map
│  │  │  │        │  │  │  ├─ 📄FunctionExpressionNameScope.d.ts
│  │  │  │        │  │  │  ├─ 📄FunctionExpressionNameScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄FunctionExpressionNameScope.js
│  │  │  │        │  │  │  ├─ 📄FunctionExpressionNameScope.js.map
│  │  │  │        │  │  │  ├─ 📄FunctionScope.d.ts
│  │  │  │        │  │  │  ├─ 📄FunctionScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄FunctionScope.js
│  │  │  │        │  │  │  ├─ 📄FunctionScope.js.map
│  │  │  │        │  │  │  ├─ 📄FunctionTypeScope.d.ts
│  │  │  │        │  │  │  ├─ 📄FunctionTypeScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄FunctionTypeScope.js
│  │  │  │        │  │  │  ├─ 📄FunctionTypeScope.js.map
│  │  │  │        │  │  │  ├─ 📄GlobalScope.d.ts
│  │  │  │        │  │  │  ├─ 📄GlobalScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄GlobalScope.js
│  │  │  │        │  │  │  ├─ 📄GlobalScope.js.map
│  │  │  │        │  │  │  ├─ 📄index.d.ts
│  │  │  │        │  │  │  ├─ 📄index.d.ts.map
│  │  │  │        │  │  │  ├─ 📄index.js
│  │  │  │        │  │  │  ├─ 📄index.js.map
│  │  │  │        │  │  │  ├─ 📄MappedTypeScope.d.ts
│  │  │  │        │  │  │  ├─ 📄MappedTypeScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄MappedTypeScope.js
│  │  │  │        │  │  │  ├─ 📄MappedTypeScope.js.map
│  │  │  │        │  │  │  ├─ 📄ModuleScope.d.ts
│  │  │  │        │  │  │  ├─ 📄ModuleScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ModuleScope.js
│  │  │  │        │  │  │  ├─ 📄ModuleScope.js.map
│  │  │  │        │  │  │  ├─ 📄Scope.d.ts
│  │  │  │        │  │  │  ├─ 📄Scope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄Scope.js
│  │  │  │        │  │  │  ├─ 📄Scope.js.map
│  │  │  │        │  │  │  ├─ 📄ScopeBase.d.ts
│  │  │  │        │  │  │  ├─ 📄ScopeBase.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ScopeBase.js
│  │  │  │        │  │  │  ├─ 📄ScopeBase.js.map
│  │  │  │        │  │  │  ├─ 📄ScopeType.d.ts
│  │  │  │        │  │  │  ├─ 📄ScopeType.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ScopeType.js
│  │  │  │        │  │  │  ├─ 📄ScopeType.js.map
│  │  │  │        │  │  │  ├─ 📄SwitchScope.d.ts
│  │  │  │        │  │  │  ├─ 📄SwitchScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄SwitchScope.js
│  │  │  │        │  │  │  ├─ 📄SwitchScope.js.map
│  │  │  │        │  │  │  ├─ 📄TSEnumScope.d.ts
│  │  │  │        │  │  │  ├─ 📄TSEnumScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄TSEnumScope.js
│  │  │  │        │  │  │  ├─ 📄TSEnumScope.js.map
│  │  │  │        │  │  │  ├─ 📄TSModuleScope.d.ts
│  │  │  │        │  │  │  ├─ 📄TSModuleScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄TSModuleScope.js
│  │  │  │        │  │  │  ├─ 📄TSModuleScope.js.map
│  │  │  │        │  │  │  ├─ 📄TypeScope.d.ts
│  │  │  │        │  │  │  ├─ 📄TypeScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄TypeScope.js
│  │  │  │        │  │  │  ├─ 📄TypeScope.js.map
│  │  │  │        │  │  │  ├─ 📄WithScope.d.ts
│  │  │  │        │  │  │  ├─ 📄WithScope.d.ts.map
│  │  │  │        │  │  │  ├─ 📄WithScope.js
│  │  │  │        │  │  │  └─ 📄WithScope.js.map
│  │  │  │        │  │  ├─ 📁variable
│  │  │  │        │  │  │  ├─ 📄ESLintScopeVariable.d.ts
│  │  │  │        │  │  │  ├─ 📄ESLintScopeVariable.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ESLintScopeVariable.js
│  │  │  │        │  │  │  ├─ 📄ESLintScopeVariable.js.map
│  │  │  │        │  │  │  ├─ 📄ImplicitLibVariable.d.ts
│  │  │  │        │  │  │  ├─ 📄ImplicitLibVariable.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ImplicitLibVariable.js
│  │  │  │        │  │  │  ├─ 📄ImplicitLibVariable.js.map
│  │  │  │        │  │  │  ├─ 📄index.d.ts
│  │  │  │        │  │  │  ├─ 📄index.d.ts.map
│  │  │  │        │  │  │  ├─ 📄index.js
│  │  │  │        │  │  │  ├─ 📄index.js.map
│  │  │  │        │  │  │  ├─ 📄Variable.d.ts
│  │  │  │        │  │  │  ├─ 📄Variable.d.ts.map
│  │  │  │        │  │  │  ├─ 📄Variable.js
│  │  │  │        │  │  │  ├─ 📄Variable.js.map
│  │  │  │        │  │  │  ├─ 📄VariableBase.d.ts
│  │  │  │        │  │  │  ├─ 📄VariableBase.d.ts.map
│  │  │  │        │  │  │  ├─ 📄VariableBase.js
│  │  │  │        │  │  │  └─ 📄VariableBase.js.map
│  │  │  │        │  │  ├─ 📄analyze.d.ts
│  │  │  │        │  │  ├─ 📄analyze.d.ts.map
│  │  │  │        │  │  ├─ 📄analyze.js
│  │  │  │        │  │  ├─ 📄analyze.js.map
│  │  │  │        │  │  ├─ 📄assert.d.ts
│  │  │  │        │  │  ├─ 📄assert.d.ts.map
│  │  │  │        │  │  ├─ 📄assert.js
│  │  │  │        │  │  ├─ 📄assert.js.map
│  │  │  │        │  │  ├─ 📄ID.d.ts
│  │  │  │        │  │  ├─ 📄ID.d.ts.map
│  │  │  │        │  │  ├─ 📄ID.js
│  │  │  │        │  │  ├─ 📄ID.js.map
│  │  │  │        │  │  ├─ 📄index.d.ts
│  │  │  │        │  │  ├─ 📄index.d.ts.map
│  │  │  │        │  │  ├─ 📄index.js
│  │  │  │        │  │  ├─ 📄index.js.map
│  │  │  │        │  │  ├─ 📄ScopeManager.d.ts
│  │  │  │        │  │  ├─ 📄ScopeManager.d.ts.map
│  │  │  │        │  │  ├─ 📄ScopeManager.js
│  │  │  │        │  │  └─ 📄ScopeManager.js.map
│  │  │  │        │  ├─ 📄LICENSE
│  │  │  │        │  ├─ 📄package.json
│  │  │  │        │  └─ 📄README.md
│  │  │  │        ├─ 📁types
│  │  │  │        │  ├─ 📁dist
│  │  │  │        │  │  ├─ 📁generated
│  │  │  │        │  │  │  ├─ 📄ast-spec.d.ts
│  │  │  │        │  │  │  ├─ 📄ast-spec.d.ts.map
│  │  │  │        │  │  │  ├─ 📄ast-spec.js
│  │  │  │        │  │  │  └─ 📄ast-spec.js.map
│  │  │  │        │  │  ├─ 📄index.d.ts
│  │  │  │        │  │  ├─ 📄index.d.ts.map
│  │  │  │        │  │  ├─ 📄index.js
│  │  │  │        │  │  ├─ 📄index.js.map
│  │  │  │        │  │  ├─ 📄lib.d.ts
│  │  │  │        │  │  ├─ 📄lib.d.ts.map
│  │  │  │        │  │  ├─ 📄lib.js
│  │  │  │        │  │  ├─ 📄lib.js.map
│  │  │  │        │  │  ├─ 📄parser-options.d.ts
│  │  │  │        │  │  ├─ 📄parser-options.d.ts.map
│  │  │  │        │  │  ├─ 📄parser-options.js
│  │  │  │        │  │  ├─ 📄parser-options.js.map
│  │  │  │        │  │  ├─ 📄ts-estree.d.ts
│  │  │  │        │  │  ├─ 📄ts-estree.d.ts.map
│  │  │  │        │  │  ├─ 📄ts-estree.js
│  │  │  │        │  │  └─ 📄ts-estree.js.map
│  │  │  │        │  ├─ 📄LICENSE
│  │  │  │        │  ├─ 📄package.json
│  │  │  │        │  └─ 📄README.md
│  │  │  │        └─ 📁visitor-keys
│  │  │  │           ├─ 📁dist
│  │  │  │           │  ├─ 📄get-keys.d.ts
│  │  │  │           │  ├─ 📄get-keys.d.ts.map
│  │  │  │           │  ├─ 📄get-keys.js
│  │  │  │           │  ├─ 📄get-keys.js.map
│  │  │  │           │  ├─ 📄index.d.ts
│  │  │  │           │  ├─ 📄index.d.ts.map
│  │  │  │           │  ├─ 📄index.js
│  │  │  │           │  ├─ 📄index.js.map
│  │  │  │           │  ├─ 📄visitor-keys.d.ts
│  │  │  │           │  ├─ 📄visitor-keys.d.ts.map
│  │  │  │           │  ├─ 📄visitor-keys.js
│  │  │  │           │  └─ 📄visitor-keys.js.map
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           └─ 📄README.md
│  │  │  ├─ 📁@typescript-eslint+type-utils@8.2.0_eslint@9.9.0_typescript@5.5.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@typescript-eslint
│  │  │  │     │  ├─ 📁type-utils
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁typeOrValueSpecifiers
│  │  │  │     │  │  │  │  ├─ 📄specifierNameMatches.d.ts
│  │  │  │     │  │  │  │  ├─ 📄specifierNameMatches.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄specifierNameMatches.js
│  │  │  │     │  │  │  │  ├─ 📄specifierNameMatches.js.map
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInFile.js
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInFile.js.map
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInLib.d.ts
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInLib.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInLib.js
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInLib.js.map
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInPackageDeclarationFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInPackageDeclarationFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄typeDeclaredInPackageDeclarationFile.js
│  │  │  │     │  │  │  │  └─ 📄typeDeclaredInPackageDeclarationFile.js.map
│  │  │  │     │  │  │  ├─ 📄builtinSymbolLikes.d.ts
│  │  │  │     │  │  │  ├─ 📄builtinSymbolLikes.d.ts.map
│  │  │  │     │  │  │  ├─ 📄builtinSymbolLikes.js
│  │  │  │     │  │  │  ├─ 📄builtinSymbolLikes.js.map
│  │  │  │     │  │  │  ├─ 📄containsAllTypesByName.d.ts
│  │  │  │     │  │  │  ├─ 📄containsAllTypesByName.d.ts.map
│  │  │  │     │  │  │  ├─ 📄containsAllTypesByName.js
│  │  │  │     │  │  │  ├─ 📄containsAllTypesByName.js.map
│  │  │  │     │  │  │  ├─ 📄getConstrainedTypeAtLocation.d.ts
│  │  │  │     │  │  │  ├─ 📄getConstrainedTypeAtLocation.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getConstrainedTypeAtLocation.js
│  │  │  │     │  │  │  ├─ 📄getConstrainedTypeAtLocation.js.map
│  │  │  │     │  │  │  ├─ 📄getContextualType.d.ts
│  │  │  │     │  │  │  ├─ 📄getContextualType.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getContextualType.js
│  │  │  │     │  │  │  ├─ 📄getContextualType.js.map
│  │  │  │     │  │  │  ├─ 📄getDeclaration.d.ts
│  │  │  │     │  │  │  ├─ 📄getDeclaration.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getDeclaration.js
│  │  │  │     │  │  │  ├─ 📄getDeclaration.js.map
│  │  │  │     │  │  │  ├─ 📄getSourceFileOfNode.d.ts
│  │  │  │     │  │  │  ├─ 📄getSourceFileOfNode.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getSourceFileOfNode.js
│  │  │  │     │  │  │  ├─ 📄getSourceFileOfNode.js.map
│  │  │  │     │  │  │  ├─ 📄getTypeName.d.ts
│  │  │  │     │  │  │  ├─ 📄getTypeName.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getTypeName.js
│  │  │  │     │  │  │  ├─ 📄getTypeName.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄isSymbolFromDefaultLibrary.d.ts
│  │  │  │     │  │  │  ├─ 📄isSymbolFromDefaultLibrary.d.ts.map
│  │  │  │     │  │  │  ├─ 📄isSymbolFromDefaultLibrary.js
│  │  │  │     │  │  │  ├─ 📄isSymbolFromDefaultLibrary.js.map
│  │  │  │     │  │  │  ├─ 📄isTypeReadonly.d.ts
│  │  │  │     │  │  │  ├─ 📄isTypeReadonly.d.ts.map
│  │  │  │     │  │  │  ├─ 📄isTypeReadonly.js
│  │  │  │     │  │  │  ├─ 📄isTypeReadonly.js.map
│  │  │  │     │  │  │  ├─ 📄isUnsafeAssignment.d.ts
│  │  │  │     │  │  │  ├─ 📄isUnsafeAssignment.d.ts.map
│  │  │  │     │  │  │  ├─ 📄isUnsafeAssignment.js
│  │  │  │     │  │  │  ├─ 📄isUnsafeAssignment.js.map
│  │  │  │     │  │  │  ├─ 📄predicates.d.ts
│  │  │  │     │  │  │  ├─ 📄predicates.d.ts.map
│  │  │  │     │  │  │  ├─ 📄predicates.js
│  │  │  │     │  │  │  ├─ 📄predicates.js.map
│  │  │  │     │  │  │  ├─ 📄propertyTypes.d.ts
│  │  │  │     │  │  │  ├─ 📄propertyTypes.d.ts.map
│  │  │  │     │  │  │  ├─ 📄propertyTypes.js
│  │  │  │     │  │  │  ├─ 📄propertyTypes.js.map
│  │  │  │     │  │  │  ├─ 📄requiresQuoting.d.ts
│  │  │  │     │  │  │  ├─ 📄requiresQuoting.d.ts.map
│  │  │  │     │  │  │  ├─ 📄requiresQuoting.js
│  │  │  │     │  │  │  ├─ 📄requiresQuoting.js.map
│  │  │  │     │  │  │  ├─ 📄typeFlagUtils.d.ts
│  │  │  │     │  │  │  ├─ 📄typeFlagUtils.d.ts.map
│  │  │  │     │  │  │  ├─ 📄typeFlagUtils.js
│  │  │  │     │  │  │  ├─ 📄typeFlagUtils.js.map
│  │  │  │     │  │  │  ├─ 📄TypeOrValueSpecifier.d.ts
│  │  │  │     │  │  │  ├─ 📄TypeOrValueSpecifier.d.ts.map
│  │  │  │     │  │  │  ├─ 📄TypeOrValueSpecifier.js
│  │  │  │     │  │  │  └─ 📄TypeOrValueSpecifier.js.map
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄tsc
│  │  │  │     │  │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │  │     ├─ 📄tsserver
│  │  │  │     │  │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │  │     └─ 📄tsserver.ps1
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  ├─ 📁typescript-estree
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁create-program
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.js
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.js.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.js
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.js.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.js
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.js.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.js
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.js.map
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.js
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.js.map
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.d.ts
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.js
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.js.map
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.js
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.js.map
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.js
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.js.map
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.js
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.js.map
│  │  │  │     │  │  │  │  ├─ 📄shared.d.ts
│  │  │  │     │  │  │  │  ├─ 📄shared.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄shared.js
│  │  │  │     │  │  │  │  ├─ 📄shared.js.map
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.d.ts
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.js
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.js.map
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.d.ts
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.js
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.js.map
│  │  │  │     │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.js
│  │  │  │     │  │  │  │  └─ 📄WatchCompilerHostOfConfigFile.js.map
│  │  │  │     │  │  │  ├─ 📁jsx
│  │  │  │     │  │  │  │  ├─ 📄xhtml-entities.d.ts
│  │  │  │     │  │  │  │  ├─ 📄xhtml-entities.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄xhtml-entities.js
│  │  │  │     │  │  │  │  └─ 📄xhtml-entities.js.map
│  │  │  │     │  │  │  ├─ 📁parseSettings
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.js
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.js.map
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.js
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.js.map
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.js
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.d.ts
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.js
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.js.map
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.d.ts
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.js
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.js.map
│  │  │  │     │  │  │  │  ├─ 📄warnAboutTSVersion.d.ts
│  │  │  │     │  │  │  │  ├─ 📄warnAboutTSVersion.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄warnAboutTSVersion.js
│  │  │  │     │  │  │  │  └─ 📄warnAboutTSVersion.js.map
│  │  │  │     │  │  │  ├─ 📁ts-estree
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.d.ts
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.js
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄ts-nodes.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ts-nodes.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ts-nodes.js
│  │  │  │     │  │  │  │  └─ 📄ts-nodes.js.map
│  │  │  │     │  │  │  ├─ 📄ast-converter.d.ts
│  │  │  │     │  │  │  ├─ 📄ast-converter.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ast-converter.js
│  │  │  │     │  │  │  ├─ 📄ast-converter.js.map
│  │  │  │     │  │  │  ├─ 📄clear-caches.d.ts
│  │  │  │     │  │  │  ├─ 📄clear-caches.d.ts.map
│  │  │  │     │  │  │  ├─ 📄clear-caches.js
│  │  │  │     │  │  │  ├─ 📄clear-caches.js.map
│  │  │  │     │  │  │  ├─ 📄convert-comments.d.ts
│  │  │  │     │  │  │  ├─ 📄convert-comments.d.ts.map
│  │  │  │     │  │  │  ├─ 📄convert-comments.js
│  │  │  │     │  │  │  ├─ 📄convert-comments.js.map
│  │  │  │     │  │  │  ├─ 📄convert.d.ts
│  │  │  │     │  │  │  ├─ 📄convert.d.ts.map
│  │  │  │     │  │  │  ├─ 📄convert.js
│  │  │  │     │  │  │  ├─ 📄convert.js.map
│  │  │  │     │  │  │  ├─ 📄createParserServices.d.ts
│  │  │  │     │  │  │  ├─ 📄createParserServices.d.ts.map
│  │  │  │     │  │  │  ├─ 📄createParserServices.js
│  │  │  │     │  │  │  ├─ 📄createParserServices.js.map
│  │  │  │     │  │  │  ├─ 📄getModifiers.d.ts
│  │  │  │     │  │  │  ├─ 📄getModifiers.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getModifiers.js
│  │  │  │     │  │  │  ├─ 📄getModifiers.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄node-utils.d.ts
│  │  │  │     │  │  │  ├─ 📄node-utils.d.ts.map
│  │  │  │     │  │  │  ├─ 📄node-utils.js
│  │  │  │     │  │  │  ├─ 📄node-utils.js.map
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser-options.js
│  │  │  │     │  │  │  ├─ 📄parser-options.js.map
│  │  │  │     │  │  │  ├─ 📄parser.d.ts
│  │  │  │     │  │  │  ├─ 📄parser.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser.js
│  │  │  │     │  │  │  ├─ 📄parser.js.map
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.d.ts
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.d.ts.map
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.js
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.js.map
│  │  │  │     │  │  │  ├─ 📄simple-traverse.d.ts
│  │  │  │     │  │  │  ├─ 📄simple-traverse.d.ts.map
│  │  │  │     │  │  │  ├─ 📄simple-traverse.js
│  │  │  │     │  │  │  ├─ 📄simple-traverse.js.map
│  │  │  │     │  │  │  ├─ 📄source-files.d.ts
│  │  │  │     │  │  │  ├─ 📄source-files.d.ts.map
│  │  │  │     │  │  │  ├─ 📄source-files.js
│  │  │  │     │  │  │  ├─ 📄source-files.js.map
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.d.ts
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.d.ts.map
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.js
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.js.map
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.d.ts
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.d.ts.map
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.js
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.js.map
│  │  │  │     │  │  │  ├─ 📄version-check.d.ts
│  │  │  │     │  │  │  ├─ 📄version-check.d.ts.map
│  │  │  │     │  │  │  ├─ 📄version-check.js
│  │  │  │     │  │  │  ├─ 📄version-check.js.map
│  │  │  │     │  │  │  ├─ 📄withoutProjectParserOptions.d.ts
│  │  │  │     │  │  │  ├─ 📄withoutProjectParserOptions.d.ts.map
│  │  │  │     │  │  │  ├─ 📄withoutProjectParserOptions.js
│  │  │  │     │  │  │  └─ 📄withoutProjectParserOptions.js.map
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄semver
│  │  │  │     │  │  │     ├─ 📄semver.CMD
│  │  │  │     │  │  │     ├─ 📄semver.ps1
│  │  │  │     │  │  │     ├─ 📄tsc
│  │  │  │     │  │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │  │     ├─ 📄tsserver
│  │  │  │     │  │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │  │     └─ 📄tsserver.ps1
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁utils
│  │  │  │     │     ├─ 📁dist
│  │  │  │     │     │  ├─ 📁ast-utils
│  │  │  │     │     │  │  ├─ 📁eslint-utils
│  │  │  │     │     │  │  │  ├─ 📄astUtilities.d.ts
│  │  │  │     │     │  │  │  ├─ 📄astUtilities.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄astUtilities.js
│  │  │  │     │     │  │  │  ├─ 📄astUtilities.js.map
│  │  │  │     │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄index.js
│  │  │  │     │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  │  ├─ 📄PatternMatcher.d.ts
│  │  │  │     │     │  │  │  ├─ 📄PatternMatcher.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄PatternMatcher.js
│  │  │  │     │     │  │  │  ├─ 📄PatternMatcher.js.map
│  │  │  │     │     │  │  │  ├─ 📄predicates.d.ts
│  │  │  │     │     │  │  │  ├─ 📄predicates.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄predicates.js
│  │  │  │     │     │  │  │  ├─ 📄predicates.js.map
│  │  │  │     │     │  │  │  ├─ 📄ReferenceTracker.d.ts
│  │  │  │     │     │  │  │  ├─ 📄ReferenceTracker.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄ReferenceTracker.js
│  │  │  │     │     │  │  │  ├─ 📄ReferenceTracker.js.map
│  │  │  │     │     │  │  │  ├─ 📄scopeAnalysis.d.ts
│  │  │  │     │     │  │  │  ├─ 📄scopeAnalysis.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄scopeAnalysis.js
│  │  │  │     │     │  │  │  └─ 📄scopeAnalysis.js.map
│  │  │  │     │     │  │  ├─ 📄helpers.d.ts
│  │  │  │     │     │  │  ├─ 📄helpers.d.ts.map
│  │  │  │     │     │  │  ├─ 📄helpers.js
│  │  │  │     │     │  │  ├─ 📄helpers.js.map
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  ├─ 📄misc.d.ts
│  │  │  │     │     │  │  ├─ 📄misc.d.ts.map
│  │  │  │     │     │  │  ├─ 📄misc.js
│  │  │  │     │     │  │  ├─ 📄misc.js.map
│  │  │  │     │     │  │  ├─ 📄predicates.d.ts
│  │  │  │     │     │  │  ├─ 📄predicates.d.ts.map
│  │  │  │     │     │  │  ├─ 📄predicates.js
│  │  │  │     │     │  │  └─ 📄predicates.js.map
│  │  │  │     │     │  ├─ 📁eslint-utils
│  │  │  │     │     │  │  ├─ 📄applyDefault.d.ts
│  │  │  │     │     │  │  ├─ 📄applyDefault.d.ts.map
│  │  │  │     │     │  │  ├─ 📄applyDefault.js
│  │  │  │     │     │  │  ├─ 📄applyDefault.js.map
│  │  │  │     │     │  │  ├─ 📄deepMerge.d.ts
│  │  │  │     │     │  │  ├─ 📄deepMerge.d.ts.map
│  │  │  │     │     │  │  ├─ 📄deepMerge.js
│  │  │  │     │     │  │  ├─ 📄deepMerge.js.map
│  │  │  │     │     │  │  ├─ 📄getParserServices.d.ts
│  │  │  │     │     │  │  ├─ 📄getParserServices.d.ts.map
│  │  │  │     │     │  │  ├─ 📄getParserServices.js
│  │  │  │     │     │  │  ├─ 📄getParserServices.js.map
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  ├─ 📄InferTypesFromRule.d.ts
│  │  │  │     │     │  │  ├─ 📄InferTypesFromRule.d.ts.map
│  │  │  │     │     │  │  ├─ 📄InferTypesFromRule.js
│  │  │  │     │     │  │  ├─ 📄InferTypesFromRule.js.map
│  │  │  │     │     │  │  ├─ 📄nullThrows.d.ts
│  │  │  │     │     │  │  ├─ 📄nullThrows.d.ts.map
│  │  │  │     │     │  │  ├─ 📄nullThrows.js
│  │  │  │     │     │  │  ├─ 📄nullThrows.js.map
│  │  │  │     │     │  │  ├─ 📄parserSeemsToBeTSESLint.d.ts
│  │  │  │     │     │  │  ├─ 📄parserSeemsToBeTSESLint.d.ts.map
│  │  │  │     │     │  │  ├─ 📄parserSeemsToBeTSESLint.js
│  │  │  │     │     │  │  ├─ 📄parserSeemsToBeTSESLint.js.map
│  │  │  │     │     │  │  ├─ 📄RuleCreator.d.ts
│  │  │  │     │     │  │  ├─ 📄RuleCreator.d.ts.map
│  │  │  │     │     │  │  ├─ 📄RuleCreator.js
│  │  │  │     │     │  │  └─ 📄RuleCreator.js.map
│  │  │  │     │     │  ├─ 📁ts-eslint
│  │  │  │     │     │  │  ├─ 📁eslint
│  │  │  │     │     │  │  │  ├─ 📄ESLintShared.d.ts
│  │  │  │     │     │  │  │  ├─ 📄ESLintShared.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄ESLintShared.js
│  │  │  │     │     │  │  │  ├─ 📄ESLintShared.js.map
│  │  │  │     │     │  │  │  ├─ 📄FlatESLint.d.ts
│  │  │  │     │     │  │  │  ├─ 📄FlatESLint.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄FlatESLint.js
│  │  │  │     │     │  │  │  ├─ 📄FlatESLint.js.map
│  │  │  │     │     │  │  │  ├─ 📄LegacyESLint.d.ts
│  │  │  │     │     │  │  │  ├─ 📄LegacyESLint.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄LegacyESLint.js
│  │  │  │     │     │  │  │  └─ 📄LegacyESLint.js.map
│  │  │  │     │     │  │  ├─ 📄AST.d.ts
│  │  │  │     │     │  │  ├─ 📄AST.d.ts.map
│  │  │  │     │     │  │  ├─ 📄AST.js
│  │  │  │     │     │  │  ├─ 📄AST.js.map
│  │  │  │     │     │  │  ├─ 📄Config.d.ts
│  │  │  │     │     │  │  ├─ 📄Config.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Config.js
│  │  │  │     │     │  │  ├─ 📄Config.js.map
│  │  │  │     │     │  │  ├─ 📄ESLint.d.ts
│  │  │  │     │     │  │  ├─ 📄ESLint.d.ts.map
│  │  │  │     │     │  │  ├─ 📄ESLint.js
│  │  │  │     │     │  │  ├─ 📄ESLint.js.map
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  ├─ 📄Linter.d.ts
│  │  │  │     │     │  │  ├─ 📄Linter.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Linter.js
│  │  │  │     │     │  │  ├─ 📄Linter.js.map
│  │  │  │     │     │  │  ├─ 📄Parser.d.ts
│  │  │  │     │     │  │  ├─ 📄Parser.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Parser.js
│  │  │  │     │     │  │  ├─ 📄Parser.js.map
│  │  │  │     │     │  │  ├─ 📄ParserOptions.d.ts
│  │  │  │     │     │  │  ├─ 📄ParserOptions.d.ts.map
│  │  │  │     │     │  │  ├─ 📄ParserOptions.js
│  │  │  │     │     │  │  ├─ 📄ParserOptions.js.map
│  │  │  │     │     │  │  ├─ 📄Processor.d.ts
│  │  │  │     │     │  │  ├─ 📄Processor.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Processor.js
│  │  │  │     │     │  │  ├─ 📄Processor.js.map
│  │  │  │     │     │  │  ├─ 📄Rule.d.ts
│  │  │  │     │     │  │  ├─ 📄Rule.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Rule.js
│  │  │  │     │     │  │  ├─ 📄Rule.js.map
│  │  │  │     │     │  │  ├─ 📄RuleTester.d.ts
│  │  │  │     │     │  │  ├─ 📄RuleTester.d.ts.map
│  │  │  │     │     │  │  ├─ 📄RuleTester.js
│  │  │  │     │     │  │  ├─ 📄RuleTester.js.map
│  │  │  │     │     │  │  ├─ 📄Scope.d.ts
│  │  │  │     │     │  │  ├─ 📄Scope.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Scope.js
│  │  │  │     │     │  │  ├─ 📄Scope.js.map
│  │  │  │     │     │  │  ├─ 📄SourceCode.d.ts
│  │  │  │     │     │  │  ├─ 📄SourceCode.d.ts.map
│  │  │  │     │     │  │  ├─ 📄SourceCode.js
│  │  │  │     │     │  │  └─ 📄SourceCode.js.map
│  │  │  │     │     │  ├─ 📁ts-utils
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  ├─ 📄isArray.d.ts
│  │  │  │     │     │  │  ├─ 📄isArray.d.ts.map
│  │  │  │     │     │  │  ├─ 📄isArray.js
│  │  │  │     │     │  │  └─ 📄isArray.js.map
│  │  │  │     │     │  ├─ 📄index.d.ts
│  │  │  │     │     │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  ├─ 📄index.js
│  │  │  │     │     │  ├─ 📄index.js.map
│  │  │  │     │     │  ├─ 📄json-schema.d.ts
│  │  │  │     │     │  ├─ 📄json-schema.d.ts.map
│  │  │  │     │     │  ├─ 📄json-schema.js
│  │  │  │     │     │  ├─ 📄json-schema.js.map
│  │  │  │     │     │  ├─ 📄ts-estree.d.ts
│  │  │  │     │     │  ├─ 📄ts-estree.d.ts.map
│  │  │  │     │     │  ├─ 📄ts-estree.js
│  │  │  │     │     │  └─ 📄ts-estree.js.map
│  │  │  │     │     ├─ 📁node_modules
│  │  │  │     │     │  └─ 📁.bin
│  │  │  │     │     │     ├─ 📄eslint
│  │  │  │     │     │     ├─ 📄eslint.CMD
│  │  │  │     │     │     └─ 📄eslint.ps1
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁debug
│  │  │  │     │  ├─ 📁src
│  │  │  │     │  │  ├─ 📄browser.js
│  │  │  │     │  │  ├─ 📄common.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄node.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁ts-api-utils
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄index.cjs
│  │  │  │     │  │  ├─ 📄index.cjs.map
│  │  │  │     │  │  ├─ 📄index.d.cts
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄index.js.map
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄tsc
│  │  │  │     │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │     ├─ 📄tsserver
│  │  │  │     │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │     └─ 📄tsserver.ps1
│  │  │  │     │  ├─ 📄LICENSE.md
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁typescript
│  │  │  │        ├─ 📁bin
│  │  │  │        │  ├─ 📄tsc
│  │  │  │        │  └─ 📄tsserver
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📁cs
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁de
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁es
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁fr
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁it
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ja
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ko
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁pl
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁pt-br
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ru
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁tr
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁zh-cn
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁zh-tw
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📄cancellationToken.js
│  │  │  │        │  ├─ 📄lib.d.ts
│  │  │  │        │  ├─ 📄lib.decorators.d.ts
│  │  │  │        │  ├─ 📄lib.decorators.legacy.d.ts
│  │  │  │        │  ├─ 📄lib.dom.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.dom.d.ts
│  │  │  │        │  ├─ 📄lib.dom.iterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.collection.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.core.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.generator.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.iterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.proxy.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.reflect.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.symbol.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.symbol.wellknown.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.array.include.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.date.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.typedarrays.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.asyncgenerator.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.symbol.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.bigint.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.date.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.number.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.symbol.wellknown.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.weakref.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.error.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.collection.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es5.d.ts
│  │  │  │        │  ├─ 📄lib.es6.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.array.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.collection.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.decorators.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.disposable.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.full.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.intl.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.object.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.promise.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.string.d.ts
│  │  │  │        │  ├─ 📄lib.scripthost.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.importscripts.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.iterable.d.ts
│  │  │  │        │  ├─ 📄tsc.js
│  │  │  │        │  ├─ 📄tsserver.js
│  │  │  │        │  ├─ 📄tsserverlibrary.d.ts
│  │  │  │        │  ├─ 📄tsserverlibrary.js
│  │  │  │        │  ├─ 📄typescript.d.ts
│  │  │  │        │  ├─ 📄typescript.js
│  │  │  │        │  ├─ 📄typesMap.json
│  │  │  │        │  ├─ 📄typingsInstaller.js
│  │  │  │        │  └─ 📄watchGuard.js
│  │  │  │        ├─ 📄LICENSE.txt
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        ├─ 📄SECURITY.md
│  │  │  │        └─ 📄ThirdPartyNoticeText.txt
│  │  │  ├─ 📁@typescript-eslint+types@8.2.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁@typescript-eslint
│  │  │  │        └─ 📁types
│  │  │  │           ├─ 📁dist
│  │  │  │           │  ├─ 📁generated
│  │  │  │           │  │  ├─ 📄ast-spec.d.ts
│  │  │  │           │  │  ├─ 📄ast-spec.d.ts.map
│  │  │  │           │  │  ├─ 📄ast-spec.js
│  │  │  │           │  │  └─ 📄ast-spec.js.map
│  │  │  │           │  ├─ 📄index.d.ts
│  │  │  │           │  ├─ 📄index.d.ts.map
│  │  │  │           │  ├─ 📄index.js
│  │  │  │           │  ├─ 📄index.js.map
│  │  │  │           │  ├─ 📄lib.d.ts
│  │  │  │           │  ├─ 📄lib.d.ts.map
│  │  │  │           │  ├─ 📄lib.js
│  │  │  │           │  ├─ 📄lib.js.map
│  │  │  │           │  ├─ 📄parser-options.d.ts
│  │  │  │           │  ├─ 📄parser-options.d.ts.map
│  │  │  │           │  ├─ 📄parser-options.js
│  │  │  │           │  ├─ 📄parser-options.js.map
│  │  │  │           │  ├─ 📄ts-estree.d.ts
│  │  │  │           │  ├─ 📄ts-estree.d.ts.map
│  │  │  │           │  ├─ 📄ts-estree.js
│  │  │  │           │  └─ 📄ts-estree.js.map
│  │  │  │           ├─ 📄LICENSE
│  │  │  │           ├─ 📄package.json
│  │  │  │           └─ 📄README.md
│  │  │  ├─ 📁@typescript-eslint+typescript-estree@8.2.0_typescript@5.5.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@typescript-eslint
│  │  │  │     │  ├─ 📁types
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁generated
│  │  │  │     │  │  │  │  ├─ 📄ast-spec.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ast-spec.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ast-spec.js
│  │  │  │     │  │  │  │  └─ 📄ast-spec.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄lib.d.ts
│  │  │  │     │  │  │  ├─ 📄lib.d.ts.map
│  │  │  │     │  │  │  ├─ 📄lib.js
│  │  │  │     │  │  │  ├─ 📄lib.js.map
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser-options.js
│  │  │  │     │  │  │  ├─ 📄parser-options.js.map
│  │  │  │     │  │  │  ├─ 📄ts-estree.d.ts
│  │  │  │     │  │  │  ├─ 📄ts-estree.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ts-estree.js
│  │  │  │     │  │  │  └─ 📄ts-estree.js.map
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  ├─ 📁typescript-estree
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁create-program
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.js
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.js.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.js
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.js.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.js
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.js.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.js
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.js.map
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.js
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.js.map
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.d.ts
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.js
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.js.map
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.js
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.js.map
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.js
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.js.map
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.js
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.js.map
│  │  │  │     │  │  │  │  ├─ 📄shared.d.ts
│  │  │  │     │  │  │  │  ├─ 📄shared.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄shared.js
│  │  │  │     │  │  │  │  ├─ 📄shared.js.map
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.d.ts
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.js
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.js.map
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.d.ts
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.js
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.js.map
│  │  │  │     │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.js
│  │  │  │     │  │  │  │  └─ 📄WatchCompilerHostOfConfigFile.js.map
│  │  │  │     │  │  │  ├─ 📁jsx
│  │  │  │     │  │  │  │  ├─ 📄xhtml-entities.d.ts
│  │  │  │     │  │  │  │  ├─ 📄xhtml-entities.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄xhtml-entities.js
│  │  │  │     │  │  │  │  └─ 📄xhtml-entities.js.map
│  │  │  │     │  │  │  ├─ 📁parseSettings
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.js
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.js.map
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.js
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.js.map
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.js
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.d.ts
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.js
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.js.map
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.d.ts
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.js
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.js.map
│  │  │  │     │  │  │  │  ├─ 📄warnAboutTSVersion.d.ts
│  │  │  │     │  │  │  │  ├─ 📄warnAboutTSVersion.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄warnAboutTSVersion.js
│  │  │  │     │  │  │  │  └─ 📄warnAboutTSVersion.js.map
│  │  │  │     │  │  │  ├─ 📁ts-estree
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.d.ts
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.js
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄ts-nodes.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ts-nodes.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ts-nodes.js
│  │  │  │     │  │  │  │  └─ 📄ts-nodes.js.map
│  │  │  │     │  │  │  ├─ 📄ast-converter.d.ts
│  │  │  │     │  │  │  ├─ 📄ast-converter.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ast-converter.js
│  │  │  │     │  │  │  ├─ 📄ast-converter.js.map
│  │  │  │     │  │  │  ├─ 📄clear-caches.d.ts
│  │  │  │     │  │  │  ├─ 📄clear-caches.d.ts.map
│  │  │  │     │  │  │  ├─ 📄clear-caches.js
│  │  │  │     │  │  │  ├─ 📄clear-caches.js.map
│  │  │  │     │  │  │  ├─ 📄convert-comments.d.ts
│  │  │  │     │  │  │  ├─ 📄convert-comments.d.ts.map
│  │  │  │     │  │  │  ├─ 📄convert-comments.js
│  │  │  │     │  │  │  ├─ 📄convert-comments.js.map
│  │  │  │     │  │  │  ├─ 📄convert.d.ts
│  │  │  │     │  │  │  ├─ 📄convert.d.ts.map
│  │  │  │     │  │  │  ├─ 📄convert.js
│  │  │  │     │  │  │  ├─ 📄convert.js.map
│  │  │  │     │  │  │  ├─ 📄createParserServices.d.ts
│  │  │  │     │  │  │  ├─ 📄createParserServices.d.ts.map
│  │  │  │     │  │  │  ├─ 📄createParserServices.js
│  │  │  │     │  │  │  ├─ 📄createParserServices.js.map
│  │  │  │     │  │  │  ├─ 📄getModifiers.d.ts
│  │  │  │     │  │  │  ├─ 📄getModifiers.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getModifiers.js
│  │  │  │     │  │  │  ├─ 📄getModifiers.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄node-utils.d.ts
│  │  │  │     │  │  │  ├─ 📄node-utils.d.ts.map
│  │  │  │     │  │  │  ├─ 📄node-utils.js
│  │  │  │     │  │  │  ├─ 📄node-utils.js.map
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser-options.js
│  │  │  │     │  │  │  ├─ 📄parser-options.js.map
│  │  │  │     │  │  │  ├─ 📄parser.d.ts
│  │  │  │     │  │  │  ├─ 📄parser.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser.js
│  │  │  │     │  │  │  ├─ 📄parser.js.map
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.d.ts
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.d.ts.map
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.js
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.js.map
│  │  │  │     │  │  │  ├─ 📄simple-traverse.d.ts
│  │  │  │     │  │  │  ├─ 📄simple-traverse.d.ts.map
│  │  │  │     │  │  │  ├─ 📄simple-traverse.js
│  │  │  │     │  │  │  ├─ 📄simple-traverse.js.map
│  │  │  │     │  │  │  ├─ 📄source-files.d.ts
│  │  │  │     │  │  │  ├─ 📄source-files.d.ts.map
│  │  │  │     │  │  │  ├─ 📄source-files.js
│  │  │  │     │  │  │  ├─ 📄source-files.js.map
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.d.ts
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.d.ts.map
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.js
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.js.map
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.d.ts
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.d.ts.map
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.js
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.js.map
│  │  │  │     │  │  │  ├─ 📄version-check.d.ts
│  │  │  │     │  │  │  ├─ 📄version-check.d.ts.map
│  │  │  │     │  │  │  ├─ 📄version-check.js
│  │  │  │     │  │  │  ├─ 📄version-check.js.map
│  │  │  │     │  │  │  ├─ 📄withoutProjectParserOptions.d.ts
│  │  │  │     │  │  │  ├─ 📄withoutProjectParserOptions.d.ts.map
│  │  │  │     │  │  │  ├─ 📄withoutProjectParserOptions.js
│  │  │  │     │  │  │  └─ 📄withoutProjectParserOptions.js.map
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄semver
│  │  │  │     │  │  │     ├─ 📄semver.CMD
│  │  │  │     │  │  │     ├─ 📄semver.ps1
│  │  │  │     │  │  │     ├─ 📄tsc
│  │  │  │     │  │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │  │     ├─ 📄tsserver
│  │  │  │     │  │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │  │     └─ 📄tsserver.ps1
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁visitor-keys
│  │  │  │     │     ├─ 📁dist
│  │  │  │     │     │  ├─ 📄get-keys.d.ts
│  │  │  │     │     │  ├─ 📄get-keys.d.ts.map
│  │  │  │     │     │  ├─ 📄get-keys.js
│  │  │  │     │     │  ├─ 📄get-keys.js.map
│  │  │  │     │     │  ├─ 📄index.d.ts
│  │  │  │     │     │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  ├─ 📄index.js
│  │  │  │     │     │  ├─ 📄index.js.map
│  │  │  │     │     │  ├─ 📄visitor-keys.d.ts
│  │  │  │     │     │  ├─ 📄visitor-keys.d.ts.map
│  │  │  │     │     │  ├─ 📄visitor-keys.js
│  │  │  │     │     │  └─ 📄visitor-keys.js.map
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁debug
│  │  │  │     │  ├─ 📁src
│  │  │  │     │  │  ├─ 📄browser.js
│  │  │  │     │  │  ├─ 📄common.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄node.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁globby
│  │  │  │     │  ├─ 📄gitignore.js
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄readme.md
│  │  │  │     │  └─ 📄stream-utils.js
│  │  │  │     ├─ 📁is-glob
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁minimatch
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  ├─ 📁commonjs
│  │  │  │     │  │  │  ├─ 📄assert-valid-pattern.d.ts
│  │  │  │     │  │  │  ├─ 📄assert-valid-pattern.d.ts.map
│  │  │  │     │  │  │  ├─ 📄assert-valid-pattern.js
│  │  │  │     │  │  │  ├─ 📄assert-valid-pattern.js.map
│  │  │  │     │  │  │  ├─ 📄ast.d.ts
│  │  │  │     │  │  │  ├─ 📄ast.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ast.js
│  │  │  │     │  │  │  ├─ 📄ast.js.map
│  │  │  │     │  │  │  ├─ 📄brace-expressions.d.ts
│  │  │  │     │  │  │  ├─ 📄brace-expressions.d.ts.map
│  │  │  │     │  │  │  ├─ 📄brace-expressions.js
│  │  │  │     │  │  │  ├─ 📄brace-expressions.js.map
│  │  │  │     │  │  │  ├─ 📄escape.d.ts
│  │  │  │     │  │  │  ├─ 📄escape.d.ts.map
│  │  │  │     │  │  │  ├─ 📄escape.js
│  │  │  │     │  │  │  ├─ 📄escape.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄package.json
│  │  │  │     │  │  │  ├─ 📄unescape.d.ts
│  │  │  │     │  │  │  ├─ 📄unescape.d.ts.map
│  │  │  │     │  │  │  ├─ 📄unescape.js
│  │  │  │     │  │  │  └─ 📄unescape.js.map
│  │  │  │     │  │  └─ 📁esm
│  │  │  │     │  │     ├─ 📄assert-valid-pattern.d.ts
│  │  │  │     │  │     ├─ 📄assert-valid-pattern.d.ts.map
│  │  │  │     │  │     ├─ 📄assert-valid-pattern.js
│  │  │  │     │  │     ├─ 📄assert-valid-pattern.js.map
│  │  │  │     │  │     ├─ 📄ast.d.ts
│  │  │  │     │  │     ├─ 📄ast.d.ts.map
│  │  │  │     │  │     ├─ 📄ast.js
│  │  │  │     │  │     ├─ 📄ast.js.map
│  │  │  │     │  │     ├─ 📄brace-expressions.d.ts
│  │  │  │     │  │     ├─ 📄brace-expressions.d.ts.map
│  │  │  │     │  │     ├─ 📄brace-expressions.js
│  │  │  │     │  │     ├─ 📄brace-expressions.js.map
│  │  │  │     │  │     ├─ 📄escape.d.ts
│  │  │  │     │  │     ├─ 📄escape.d.ts.map
│  │  │  │     │  │     ├─ 📄escape.js
│  │  │  │     │  │     ├─ 📄escape.js.map
│  │  │  │     │  │     ├─ 📄index.d.ts
│  │  │  │     │  │     ├─ 📄index.d.ts.map
│  │  │  │     │  │     ├─ 📄index.js
│  │  │  │     │  │     ├─ 📄index.js.map
│  │  │  │     │  │     ├─ 📄package.json
│  │  │  │     │  │     ├─ 📄unescape.d.ts
│  │  │  │     │  │     ├─ 📄unescape.d.ts.map
│  │  │  │     │  │     ├─ 📄unescape.js
│  │  │  │     │  │     └─ 📄unescape.js.map
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁semver
│  │  │  │     │  ├─ 📁bin
│  │  │  │     │  │  └─ 📄semver.js
│  │  │  │     │  ├─ 📁classes
│  │  │  │     │  │  ├─ 📄comparator.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄range.js
│  │  │  │     │  │  └─ 📄semver.js
│  │  │  │     │  ├─ 📁functions
│  │  │  │     │  │  ├─ 📄clean.js
│  │  │  │     │  │  ├─ 📄cmp.js
│  │  │  │     │  │  ├─ 📄coerce.js
│  │  │  │     │  │  ├─ 📄compare-build.js
│  │  │  │     │  │  ├─ 📄compare-loose.js
│  │  │  │     │  │  ├─ 📄compare.js
│  │  │  │     │  │  ├─ 📄diff.js
│  │  │  │     │  │  ├─ 📄eq.js
│  │  │  │     │  │  ├─ 📄gt.js
│  │  │  │     │  │  ├─ 📄gte.js
│  │  │  │     │  │  ├─ 📄inc.js
│  │  │  │     │  │  ├─ 📄lt.js
│  │  │  │     │  │  ├─ 📄lte.js
│  │  │  │     │  │  ├─ 📄major.js
│  │  │  │     │  │  ├─ 📄minor.js
│  │  │  │     │  │  ├─ 📄neq.js
│  │  │  │     │  │  ├─ 📄parse.js
│  │  │  │     │  │  ├─ 📄patch.js
│  │  │  │     │  │  ├─ 📄prerelease.js
│  │  │  │     │  │  ├─ 📄rcompare.js
│  │  │  │     │  │  ├─ 📄rsort.js
│  │  │  │     │  │  ├─ 📄satisfies.js
│  │  │  │     │  │  ├─ 📄sort.js
│  │  │  │     │  │  └─ 📄valid.js
│  │  │  │     │  ├─ 📁internal
│  │  │  │     │  │  ├─ 📄constants.js
│  │  │  │     │  │  ├─ 📄debug.js
│  │  │  │     │  │  ├─ 📄identifiers.js
│  │  │  │     │  │  ├─ 📄lrucache.js
│  │  │  │     │  │  ├─ 📄parse-options.js
│  │  │  │     │  │  └─ 📄re.js
│  │  │  │     │  ├─ 📁ranges
│  │  │  │     │  │  ├─ 📄gtr.js
│  │  │  │     │  │  ├─ 📄intersects.js
│  │  │  │     │  │  ├─ 📄ltr.js
│  │  │  │     │  │  ├─ 📄max-satisfying.js
│  │  │  │     │  │  ├─ 📄min-satisfying.js
│  │  │  │     │  │  ├─ 📄min-version.js
│  │  │  │     │  │  ├─ 📄outside.js
│  │  │  │     │  │  ├─ 📄simplify.js
│  │  │  │     │  │  ├─ 📄subset.js
│  │  │  │     │  │  ├─ 📄to-comparators.js
│  │  │  │     │  │  └─ 📄valid.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄preload.js
│  │  │  │     │  ├─ 📄range.bnf
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁ts-api-utils
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄index.cjs
│  │  │  │     │  │  ├─ 📄index.cjs.map
│  │  │  │     │  │  ├─ 📄index.d.cts
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄index.js.map
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄tsc
│  │  │  │     │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │     ├─ 📄tsserver
│  │  │  │     │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │     └─ 📄tsserver.ps1
│  │  │  │     │  ├─ 📄LICENSE.md
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁typescript
│  │  │  │        ├─ 📁bin
│  │  │  │        │  ├─ 📄tsc
│  │  │  │        │  └─ 📄tsserver
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📁cs
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁de
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁es
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁fr
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁it
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ja
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ko
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁pl
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁pt-br
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ru
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁tr
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁zh-cn
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁zh-tw
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📄cancellationToken.js
│  │  │  │        │  ├─ 📄lib.d.ts
│  │  │  │        │  ├─ 📄lib.decorators.d.ts
│  │  │  │        │  ├─ 📄lib.decorators.legacy.d.ts
│  │  │  │        │  ├─ 📄lib.dom.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.dom.d.ts
│  │  │  │        │  ├─ 📄lib.dom.iterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.collection.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.core.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.generator.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.iterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.proxy.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.reflect.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.symbol.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.symbol.wellknown.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.array.include.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.date.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.typedarrays.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.asyncgenerator.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.symbol.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.bigint.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.date.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.number.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.symbol.wellknown.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.weakref.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.error.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.collection.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es5.d.ts
│  │  │  │        │  ├─ 📄lib.es6.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.array.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.collection.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.decorators.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.disposable.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.full.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.intl.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.object.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.promise.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.string.d.ts
│  │  │  │        │  ├─ 📄lib.scripthost.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.importscripts.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.iterable.d.ts
│  │  │  │        │  ├─ 📄tsc.js
│  │  │  │        │  ├─ 📄tsserver.js
│  │  │  │        │  ├─ 📄tsserverlibrary.d.ts
│  │  │  │        │  ├─ 📄tsserverlibrary.js
│  │  │  │        │  ├─ 📄typescript.d.ts
│  │  │  │        │  ├─ 📄typescript.js
│  │  │  │        │  ├─ 📄typesMap.json
│  │  │  │        │  ├─ 📄typingsInstaller.js
│  │  │  │        │  └─ 📄watchGuard.js
│  │  │  │        ├─ 📄LICENSE.txt
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        ├─ 📄SECURITY.md
│  │  │  │        └─ 📄ThirdPartyNoticeText.txt
│  │  │  ├─ 📁@typescript-eslint+utils@8.2.0_eslint@9.9.0_typescript@5.5.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@eslint-community
│  │  │  │     │  └─ 📁eslint-utils
│  │  │  │     │     ├─ 📁node_modules
│  │  │  │     │     │  └─ 📁.bin
│  │  │  │     │     │     ├─ 📄eslint
│  │  │  │     │     │     ├─ 📄eslint.CMD
│  │  │  │     │     │     └─ 📄eslint.ps1
│  │  │  │     │     ├─ 📄index.js
│  │  │  │     │     ├─ 📄index.js.map
│  │  │  │     │     ├─ 📄index.mjs
│  │  │  │     │     ├─ 📄index.mjs.map
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁@typescript-eslint
│  │  │  │     │  ├─ 📁scope-manager
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁definition
│  │  │  │     │  │  │  │  ├─ 📄CatchClauseDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄CatchClauseDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄CatchClauseDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄CatchClauseDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄ClassNameDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassNameDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassNameDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄ClassNameDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄Definition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Definition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Definition.js
│  │  │  │     │  │  │  │  ├─ 📄Definition.js.map
│  │  │  │     │  │  │  │  ├─ 📄DefinitionBase.d.ts
│  │  │  │     │  │  │  │  ├─ 📄DefinitionBase.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄DefinitionBase.js
│  │  │  │     │  │  │  │  ├─ 📄DefinitionBase.js.map
│  │  │  │     │  │  │  │  ├─ 📄DefinitionType.d.ts
│  │  │  │     │  │  │  │  ├─ 📄DefinitionType.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄DefinitionType.js
│  │  │  │     │  │  │  │  ├─ 📄DefinitionType.js.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionNameDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄FunctionNameDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionNameDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄FunctionNameDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄ImportBindingDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ImportBindingDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ImportBindingDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄ImportBindingDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄ParameterDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ParameterDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ParameterDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄ParameterDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumMemberDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSEnumMemberDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumMemberDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄TSEnumMemberDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumNameDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSEnumNameDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumNameDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄TSEnumNameDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSModuleNameDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSModuleNameDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSModuleNameDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄TSModuleNameDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄TypeDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TypeDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TypeDefinition.js
│  │  │  │     │  │  │  │  ├─ 📄TypeDefinition.js.map
│  │  │  │     │  │  │  │  ├─ 📄VariableDefinition.d.ts
│  │  │  │     │  │  │  │  ├─ 📄VariableDefinition.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄VariableDefinition.js
│  │  │  │     │  │  │  │  └─ 📄VariableDefinition.js.map
│  │  │  │     │  │  │  ├─ 📁lib
│  │  │  │     │  │  │  │  ├─ 📄base-config.d.ts
│  │  │  │     │  │  │  │  ├─ 📄base-config.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄base-config.js
│  │  │  │     │  │  │  │  ├─ 📄base-config.js.map
│  │  │  │     │  │  │  │  ├─ 📄decorators.d.ts
│  │  │  │     │  │  │  │  ├─ 📄decorators.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄decorators.js
│  │  │  │     │  │  │  │  ├─ 📄decorators.js.map
│  │  │  │     │  │  │  │  ├─ 📄decorators.legacy.d.ts
│  │  │  │     │  │  │  │  ├─ 📄decorators.legacy.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄decorators.legacy.js
│  │  │  │     │  │  │  │  ├─ 📄decorators.legacy.js.map
│  │  │  │     │  │  │  │  ├─ 📄dom.asynciterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄dom.asynciterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄dom.asynciterable.js
│  │  │  │     │  │  │  │  ├─ 📄dom.asynciterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄dom.d.ts
│  │  │  │     │  │  │  │  ├─ 📄dom.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄dom.iterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄dom.iterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄dom.iterable.js
│  │  │  │     │  │  │  │  ├─ 📄dom.iterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄dom.js
│  │  │  │     │  │  │  │  ├─ 📄dom.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.collection.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.collection.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.collection.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.collection.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.core.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.core.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.core.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.core.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.generator.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.generator.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.generator.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.generator.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.iterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.iterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.iterable.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.iterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.promise.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.proxy.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.proxy.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.proxy.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.proxy.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.reflect.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.reflect.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.reflect.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.reflect.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.wellknown.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.wellknown.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.wellknown.js
│  │  │  │     │  │  │  │  ├─ 📄es2015.symbol.wellknown.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.array.include.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2016.array.include.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.array.include.js
│  │  │  │     │  │  │  │  ├─ 📄es2016.array.include.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2016.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2016.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2016.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2016.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2016.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2016.js
│  │  │  │     │  │  │  │  ├─ 📄es2016.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.date.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.date.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.date.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.date.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.object.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.object.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.object.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.object.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.sharedmemory.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.sharedmemory.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.sharedmemory.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.sharedmemory.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.typedarrays.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2017.typedarrays.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2017.typedarrays.js
│  │  │  │     │  │  │  │  ├─ 📄es2017.typedarrays.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.asyncgenerator.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.asyncgenerator.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.asyncgenerator.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.asyncgenerator.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.asynciterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.asynciterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.asynciterable.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.asynciterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.promise.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.regexp.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2018.regexp.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2018.regexp.js
│  │  │  │     │  │  │  │  ├─ 📄es2018.regexp.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.array.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.array.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.array.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.array.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.object.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.object.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.object.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.object.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.symbol.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2019.symbol.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2019.symbol.js
│  │  │  │     │  │  │  │  ├─ 📄es2019.symbol.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.bigint.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.bigint.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.bigint.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.bigint.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.date.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.date.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.date.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.date.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.number.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.number.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.number.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.number.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.promise.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.sharedmemory.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.sharedmemory.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.sharedmemory.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.sharedmemory.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.symbol.wellknown.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2020.symbol.wellknown.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2020.symbol.wellknown.js
│  │  │  │     │  │  │  │  ├─ 📄es2020.symbol.wellknown.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.promise.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.weakref.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2021.weakref.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2021.weakref.js
│  │  │  │     │  │  │  │  ├─ 📄es2021.weakref.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.array.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.array.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.array.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.array.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.error.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.error.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.error.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.error.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.object.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.object.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.object.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.object.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.regexp.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.regexp.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.regexp.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.regexp.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.sharedmemory.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.sharedmemory.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.sharedmemory.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.sharedmemory.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2022.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2022.string.js
│  │  │  │     │  │  │  │  ├─ 📄es2022.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.array.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.array.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.array.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.array.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.collection.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.collection.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.collection.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.collection.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.full.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es2023.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.intl.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄es2023.js
│  │  │  │     │  │  │  │  ├─ 📄es2023.js.map
│  │  │  │     │  │  │  │  ├─ 📄es5.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es5.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es5.js
│  │  │  │     │  │  │  │  ├─ 📄es5.js.map
│  │  │  │     │  │  │  │  ├─ 📄es6.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es6.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es6.js
│  │  │  │     │  │  │  │  ├─ 📄es6.js.map
│  │  │  │     │  │  │  │  ├─ 📄es7.d.ts
│  │  │  │     │  │  │  │  ├─ 📄es7.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄es7.js
│  │  │  │     │  │  │  │  ├─ 📄es7.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.array.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.array.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.array.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.array.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.asynciterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.asynciterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.asynciterable.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.asynciterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.bigint.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.bigint.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.bigint.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.bigint.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.collection.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.collection.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.collection.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.collection.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.decorators.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.decorators.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.decorators.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.decorators.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.disposable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.disposable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.disposable.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.disposable.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.full.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.full.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.full.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.full.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.intl.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.intl.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.intl.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.intl.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.object.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.object.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.object.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.object.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.promise.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.promise.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.promise.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.promise.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.regexp.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.regexp.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.regexp.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.regexp.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.string.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.string.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.string.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.string.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.symbol.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.symbol.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.symbol.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.symbol.js.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.weakref.d.ts
│  │  │  │     │  │  │  │  ├─ 📄esnext.weakref.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄esnext.weakref.js
│  │  │  │     │  │  │  │  ├─ 📄esnext.weakref.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄lib.d.ts
│  │  │  │     │  │  │  │  ├─ 📄lib.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄lib.js
│  │  │  │     │  │  │  │  ├─ 📄lib.js.map
│  │  │  │     │  │  │  │  ├─ 📄scripthost.d.ts
│  │  │  │     │  │  │  │  ├─ 📄scripthost.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄scripthost.js
│  │  │  │     │  │  │  │  ├─ 📄scripthost.js.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.asynciterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄webworker.asynciterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.asynciterable.js
│  │  │  │     │  │  │  │  ├─ 📄webworker.asynciterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.d.ts
│  │  │  │     │  │  │  │  ├─ 📄webworker.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.importscripts.d.ts
│  │  │  │     │  │  │  │  ├─ 📄webworker.importscripts.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.importscripts.js
│  │  │  │     │  │  │  │  ├─ 📄webworker.importscripts.js.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.iterable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄webworker.iterable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.iterable.js
│  │  │  │     │  │  │  │  ├─ 📄webworker.iterable.js.map
│  │  │  │     │  │  │  │  ├─ 📄webworker.js
│  │  │  │     │  │  │  │  └─ 📄webworker.js.map
│  │  │  │     │  │  │  ├─ 📁referencer
│  │  │  │     │  │  │  │  ├─ 📄ClassVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄ClassVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄ExportVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ExportVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ExportVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄ExportVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄ImportVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ImportVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ImportVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄ImportVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄PatternVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄PatternVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄PatternVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄PatternVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄Reference.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Reference.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Reference.js
│  │  │  │     │  │  │  │  ├─ 📄Reference.js.map
│  │  │  │     │  │  │  │  ├─ 📄Referencer.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Referencer.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Referencer.js
│  │  │  │     │  │  │  │  ├─ 📄Referencer.js.map
│  │  │  │     │  │  │  │  ├─ 📄TypeVisitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TypeVisitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TypeVisitor.js
│  │  │  │     │  │  │  │  ├─ 📄TypeVisitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄Visitor.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Visitor.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Visitor.js
│  │  │  │     │  │  │  │  ├─ 📄Visitor.js.map
│  │  │  │     │  │  │  │  ├─ 📄VisitorBase.d.ts
│  │  │  │     │  │  │  │  ├─ 📄VisitorBase.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄VisitorBase.js
│  │  │  │     │  │  │  │  └─ 📄VisitorBase.js.map
│  │  │  │     │  │  │  ├─ 📁scope
│  │  │  │     │  │  │  │  ├─ 📄BlockScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄BlockScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄BlockScope.js
│  │  │  │     │  │  │  │  ├─ 📄BlockScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄CatchScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄CatchScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄CatchScope.js
│  │  │  │     │  │  │  │  ├─ 📄CatchScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ClassFieldInitializerScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassFieldInitializerScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassFieldInitializerScope.js
│  │  │  │     │  │  │  │  ├─ 📄ClassFieldInitializerScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ClassScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassScope.js
│  │  │  │     │  │  │  │  ├─ 📄ClassScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ClassStaticBlockScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ClassStaticBlockScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ClassStaticBlockScope.js
│  │  │  │     │  │  │  │  ├─ 📄ClassStaticBlockScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ConditionalTypeScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ConditionalTypeScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ConditionalTypeScope.js
│  │  │  │     │  │  │  │  ├─ 📄ConditionalTypeScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ForScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ForScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ForScope.js
│  │  │  │     │  │  │  │  ├─ 📄ForScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionExpressionNameScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄FunctionExpressionNameScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionExpressionNameScope.js
│  │  │  │     │  │  │  │  ├─ 📄FunctionExpressionNameScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄FunctionScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionScope.js
│  │  │  │     │  │  │  │  ├─ 📄FunctionScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionTypeScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄FunctionTypeScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄FunctionTypeScope.js
│  │  │  │     │  │  │  │  ├─ 📄FunctionTypeScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄GlobalScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄GlobalScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄GlobalScope.js
│  │  │  │     │  │  │  │  ├─ 📄GlobalScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄MappedTypeScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄MappedTypeScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄MappedTypeScope.js
│  │  │  │     │  │  │  │  ├─ 📄MappedTypeScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ModuleScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ModuleScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ModuleScope.js
│  │  │  │     │  │  │  │  ├─ 📄ModuleScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄Scope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Scope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Scope.js
│  │  │  │     │  │  │  │  ├─ 📄Scope.js.map
│  │  │  │     │  │  │  │  ├─ 📄ScopeBase.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ScopeBase.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ScopeBase.js
│  │  │  │     │  │  │  │  ├─ 📄ScopeBase.js.map
│  │  │  │     │  │  │  │  ├─ 📄ScopeType.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ScopeType.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ScopeType.js
│  │  │  │     │  │  │  │  ├─ 📄ScopeType.js.map
│  │  │  │     │  │  │  │  ├─ 📄SwitchScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄SwitchScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄SwitchScope.js
│  │  │  │     │  │  │  │  ├─ 📄SwitchScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSEnumScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSEnumScope.js
│  │  │  │     │  │  │  │  ├─ 📄TSEnumScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄TSModuleScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TSModuleScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TSModuleScope.js
│  │  │  │     │  │  │  │  ├─ 📄TSModuleScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄TypeScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄TypeScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄TypeScope.js
│  │  │  │     │  │  │  │  ├─ 📄TypeScope.js.map
│  │  │  │     │  │  │  │  ├─ 📄WithScope.d.ts
│  │  │  │     │  │  │  │  ├─ 📄WithScope.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄WithScope.js
│  │  │  │     │  │  │  │  └─ 📄WithScope.js.map
│  │  │  │     │  │  │  ├─ 📁variable
│  │  │  │     │  │  │  │  ├─ 📄ESLintScopeVariable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ESLintScopeVariable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ESLintScopeVariable.js
│  │  │  │     │  │  │  │  ├─ 📄ESLintScopeVariable.js.map
│  │  │  │     │  │  │  │  ├─ 📄ImplicitLibVariable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ImplicitLibVariable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ImplicitLibVariable.js
│  │  │  │     │  │  │  │  ├─ 📄ImplicitLibVariable.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄Variable.d.ts
│  │  │  │     │  │  │  │  ├─ 📄Variable.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄Variable.js
│  │  │  │     │  │  │  │  ├─ 📄Variable.js.map
│  │  │  │     │  │  │  │  ├─ 📄VariableBase.d.ts
│  │  │  │     │  │  │  │  ├─ 📄VariableBase.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄VariableBase.js
│  │  │  │     │  │  │  │  └─ 📄VariableBase.js.map
│  │  │  │     │  │  │  ├─ 📄analyze.d.ts
│  │  │  │     │  │  │  ├─ 📄analyze.d.ts.map
│  │  │  │     │  │  │  ├─ 📄analyze.js
│  │  │  │     │  │  │  ├─ 📄analyze.js.map
│  │  │  │     │  │  │  ├─ 📄assert.d.ts
│  │  │  │     │  │  │  ├─ 📄assert.d.ts.map
│  │  │  │     │  │  │  ├─ 📄assert.js
│  │  │  │     │  │  │  ├─ 📄assert.js.map
│  │  │  │     │  │  │  ├─ 📄ID.d.ts
│  │  │  │     │  │  │  ├─ 📄ID.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ID.js
│  │  │  │     │  │  │  ├─ 📄ID.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄ScopeManager.d.ts
│  │  │  │     │  │  │  ├─ 📄ScopeManager.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ScopeManager.js
│  │  │  │     │  │  │  └─ 📄ScopeManager.js.map
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  ├─ 📁types
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁generated
│  │  │  │     │  │  │  │  ├─ 📄ast-spec.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ast-spec.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ast-spec.js
│  │  │  │     │  │  │  │  └─ 📄ast-spec.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄lib.d.ts
│  │  │  │     │  │  │  ├─ 📄lib.d.ts.map
│  │  │  │     │  │  │  ├─ 📄lib.js
│  │  │  │     │  │  │  ├─ 📄lib.js.map
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser-options.js
│  │  │  │     │  │  │  ├─ 📄parser-options.js.map
│  │  │  │     │  │  │  ├─ 📄ts-estree.d.ts
│  │  │  │     │  │  │  ├─ 📄ts-estree.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ts-estree.js
│  │  │  │     │  │  │  └─ 📄ts-estree.js.map
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  ├─ 📁typescript-estree
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁create-program
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.js
│  │  │  │     │  │  │  │  ├─ 📄createIsolatedProgram.js.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.js
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgram.js.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.js
│  │  │  │     │  │  │  │  ├─ 📄createProjectProgramError.js.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.js
│  │  │  │     │  │  │  │  ├─ 📄createProjectService.js.map
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.js
│  │  │  │     │  │  │  │  ├─ 📄createSourceFile.js.map
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.d.ts
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.js
│  │  │  │     │  │  │  │  ├─ 📄describeFilePath.js.map
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.js
│  │  │  │     │  │  │  │  ├─ 📄getParsedConfigFile.js.map
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.js
│  │  │  │     │  │  │  │  ├─ 📄getScriptKind.js.map
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.js
│  │  │  │     │  │  │  │  ├─ 📄getWatchProgramsForProjects.js.map
│  │  │  │     │  │  │  │  ├─ 📄shared.d.ts
│  │  │  │     │  │  │  │  ├─ 📄shared.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄shared.js
│  │  │  │     │  │  │  │  ├─ 📄shared.js.map
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.d.ts
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.js
│  │  │  │     │  │  │  │  ├─ 📄useProvidedPrograms.js.map
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.d.ts
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.js
│  │  │  │     │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.js.map
│  │  │  │     │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.d.ts
│  │  │  │     │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.js
│  │  │  │     │  │  │  │  └─ 📄WatchCompilerHostOfConfigFile.js.map
│  │  │  │     │  │  │  ├─ 📁jsx
│  │  │  │     │  │  │  │  ├─ 📄xhtml-entities.d.ts
│  │  │  │     │  │  │  │  ├─ 📄xhtml-entities.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄xhtml-entities.js
│  │  │  │     │  │  │  │  └─ 📄xhtml-entities.js.map
│  │  │  │     │  │  │  ├─ 📁parseSettings
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.d.ts
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.js
│  │  │  │     │  │  │  │  ├─ 📄createParseSettings.js.map
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.js
│  │  │  │     │  │  │  │  ├─ 📄ExpiringCache.js.map
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.d.ts
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.js
│  │  │  │     │  │  │  │  ├─ 📄getProjectConfigFiles.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.d.ts
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.js
│  │  │  │     │  │  │  │  ├─ 📄inferSingleRun.js.map
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.d.ts
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.js
│  │  │  │     │  │  │  │  ├─ 📄resolveProjectList.js.map
│  │  │  │     │  │  │  │  ├─ 📄warnAboutTSVersion.d.ts
│  │  │  │     │  │  │  │  ├─ 📄warnAboutTSVersion.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄warnAboutTSVersion.js
│  │  │  │     │  │  │  │  └─ 📄warnAboutTSVersion.js.map
│  │  │  │     │  │  │  ├─ 📁ts-estree
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.d.ts
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.js
│  │  │  │     │  │  │  │  ├─ 📄estree-to-ts-node-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄ts-nodes.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ts-nodes.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ts-nodes.js
│  │  │  │     │  │  │  │  └─ 📄ts-nodes.js.map
│  │  │  │     │  │  │  ├─ 📄ast-converter.d.ts
│  │  │  │     │  │  │  ├─ 📄ast-converter.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ast-converter.js
│  │  │  │     │  │  │  ├─ 📄ast-converter.js.map
│  │  │  │     │  │  │  ├─ 📄clear-caches.d.ts
│  │  │  │     │  │  │  ├─ 📄clear-caches.d.ts.map
│  │  │  │     │  │  │  ├─ 📄clear-caches.js
│  │  │  │     │  │  │  ├─ 📄clear-caches.js.map
│  │  │  │     │  │  │  ├─ 📄convert-comments.d.ts
│  │  │  │     │  │  │  ├─ 📄convert-comments.d.ts.map
│  │  │  │     │  │  │  ├─ 📄convert-comments.js
│  │  │  │     │  │  │  ├─ 📄convert-comments.js.map
│  │  │  │     │  │  │  ├─ 📄convert.d.ts
│  │  │  │     │  │  │  ├─ 📄convert.d.ts.map
│  │  │  │     │  │  │  ├─ 📄convert.js
│  │  │  │     │  │  │  ├─ 📄convert.js.map
│  │  │  │     │  │  │  ├─ 📄createParserServices.d.ts
│  │  │  │     │  │  │  ├─ 📄createParserServices.d.ts.map
│  │  │  │     │  │  │  ├─ 📄createParserServices.js
│  │  │  │     │  │  │  ├─ 📄createParserServices.js.map
│  │  │  │     │  │  │  ├─ 📄getModifiers.d.ts
│  │  │  │     │  │  │  ├─ 📄getModifiers.d.ts.map
│  │  │  │     │  │  │  ├─ 📄getModifiers.js
│  │  │  │     │  │  │  ├─ 📄getModifiers.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄node-utils.d.ts
│  │  │  │     │  │  │  ├─ 📄node-utils.d.ts.map
│  │  │  │     │  │  │  ├─ 📄node-utils.js
│  │  │  │     │  │  │  ├─ 📄node-utils.js.map
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser-options.js
│  │  │  │     │  │  │  ├─ 📄parser-options.js.map
│  │  │  │     │  │  │  ├─ 📄parser.d.ts
│  │  │  │     │  │  │  ├─ 📄parser.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser.js
│  │  │  │     │  │  │  ├─ 📄parser.js.map
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.d.ts
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.d.ts.map
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.js
│  │  │  │     │  │  │  ├─ 📄semantic-or-syntactic-errors.js.map
│  │  │  │     │  │  │  ├─ 📄simple-traverse.d.ts
│  │  │  │     │  │  │  ├─ 📄simple-traverse.d.ts.map
│  │  │  │     │  │  │  ├─ 📄simple-traverse.js
│  │  │  │     │  │  │  ├─ 📄simple-traverse.js.map
│  │  │  │     │  │  │  ├─ 📄source-files.d.ts
│  │  │  │     │  │  │  ├─ 📄source-files.d.ts.map
│  │  │  │     │  │  │  ├─ 📄source-files.js
│  │  │  │     │  │  │  ├─ 📄source-files.js.map
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.d.ts
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.d.ts.map
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.js
│  │  │  │     │  │  │  ├─ 📄use-at-your-own-risk.js.map
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.d.ts
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.d.ts.map
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.js
│  │  │  │     │  │  │  ├─ 📄useProgramFromProjectService.js.map
│  │  │  │     │  │  │  ├─ 📄version-check.d.ts
│  │  │  │     │  │  │  ├─ 📄version-check.d.ts.map
│  │  │  │     │  │  │  ├─ 📄version-check.js
│  │  │  │     │  │  │  ├─ 📄version-check.js.map
│  │  │  │     │  │  │  ├─ 📄withoutProjectParserOptions.d.ts
│  │  │  │     │  │  │  ├─ 📄withoutProjectParserOptions.d.ts.map
│  │  │  │     │  │  │  ├─ 📄withoutProjectParserOptions.js
│  │  │  │     │  │  │  └─ 📄withoutProjectParserOptions.js.map
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄semver
│  │  │  │     │  │  │     ├─ 📄semver.CMD
│  │  │  │     │  │  │     ├─ 📄semver.ps1
│  │  │  │     │  │  │     ├─ 📄tsc
│  │  │  │     │  │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │  │     ├─ 📄tsserver
│  │  │  │     │  │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │  │     └─ 📄tsserver.ps1
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁utils
│  │  │  │     │     ├─ 📁dist
│  │  │  │     │     │  ├─ 📁ast-utils
│  │  │  │     │     │  │  ├─ 📁eslint-utils
│  │  │  │     │     │  │  │  ├─ 📄astUtilities.d.ts
│  │  │  │     │     │  │  │  ├─ 📄astUtilities.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄astUtilities.js
│  │  │  │     │     │  │  │  ├─ 📄astUtilities.js.map
│  │  │  │     │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄index.js
│  │  │  │     │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  │  ├─ 📄PatternMatcher.d.ts
│  │  │  │     │     │  │  │  ├─ 📄PatternMatcher.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄PatternMatcher.js
│  │  │  │     │     │  │  │  ├─ 📄PatternMatcher.js.map
│  │  │  │     │     │  │  │  ├─ 📄predicates.d.ts
│  │  │  │     │     │  │  │  ├─ 📄predicates.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄predicates.js
│  │  │  │     │     │  │  │  ├─ 📄predicates.js.map
│  │  │  │     │     │  │  │  ├─ 📄ReferenceTracker.d.ts
│  │  │  │     │     │  │  │  ├─ 📄ReferenceTracker.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄ReferenceTracker.js
│  │  │  │     │     │  │  │  ├─ 📄ReferenceTracker.js.map
│  │  │  │     │     │  │  │  ├─ 📄scopeAnalysis.d.ts
│  │  │  │     │     │  │  │  ├─ 📄scopeAnalysis.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄scopeAnalysis.js
│  │  │  │     │     │  │  │  └─ 📄scopeAnalysis.js.map
│  │  │  │     │     │  │  ├─ 📄helpers.d.ts
│  │  │  │     │     │  │  ├─ 📄helpers.d.ts.map
│  │  │  │     │     │  │  ├─ 📄helpers.js
│  │  │  │     │     │  │  ├─ 📄helpers.js.map
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  ├─ 📄misc.d.ts
│  │  │  │     │     │  │  ├─ 📄misc.d.ts.map
│  │  │  │     │     │  │  ├─ 📄misc.js
│  │  │  │     │     │  │  ├─ 📄misc.js.map
│  │  │  │     │     │  │  ├─ 📄predicates.d.ts
│  │  │  │     │     │  │  ├─ 📄predicates.d.ts.map
│  │  │  │     │     │  │  ├─ 📄predicates.js
│  │  │  │     │     │  │  └─ 📄predicates.js.map
│  │  │  │     │     │  ├─ 📁eslint-utils
│  │  │  │     │     │  │  ├─ 📄applyDefault.d.ts
│  │  │  │     │     │  │  ├─ 📄applyDefault.d.ts.map
│  │  │  │     │     │  │  ├─ 📄applyDefault.js
│  │  │  │     │     │  │  ├─ 📄applyDefault.js.map
│  │  │  │     │     │  │  ├─ 📄deepMerge.d.ts
│  │  │  │     │     │  │  ├─ 📄deepMerge.d.ts.map
│  │  │  │     │     │  │  ├─ 📄deepMerge.js
│  │  │  │     │     │  │  ├─ 📄deepMerge.js.map
│  │  │  │     │     │  │  ├─ 📄getParserServices.d.ts
│  │  │  │     │     │  │  ├─ 📄getParserServices.d.ts.map
│  │  │  │     │     │  │  ├─ 📄getParserServices.js
│  │  │  │     │     │  │  ├─ 📄getParserServices.js.map
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  ├─ 📄InferTypesFromRule.d.ts
│  │  │  │     │     │  │  ├─ 📄InferTypesFromRule.d.ts.map
│  │  │  │     │     │  │  ├─ 📄InferTypesFromRule.js
│  │  │  │     │     │  │  ├─ 📄InferTypesFromRule.js.map
│  │  │  │     │     │  │  ├─ 📄nullThrows.d.ts
│  │  │  │     │     │  │  ├─ 📄nullThrows.d.ts.map
│  │  │  │     │     │  │  ├─ 📄nullThrows.js
│  │  │  │     │     │  │  ├─ 📄nullThrows.js.map
│  │  │  │     │     │  │  ├─ 📄parserSeemsToBeTSESLint.d.ts
│  │  │  │     │     │  │  ├─ 📄parserSeemsToBeTSESLint.d.ts.map
│  │  │  │     │     │  │  ├─ 📄parserSeemsToBeTSESLint.js
│  │  │  │     │     │  │  ├─ 📄parserSeemsToBeTSESLint.js.map
│  │  │  │     │     │  │  ├─ 📄RuleCreator.d.ts
│  │  │  │     │     │  │  ├─ 📄RuleCreator.d.ts.map
│  │  │  │     │     │  │  ├─ 📄RuleCreator.js
│  │  │  │     │     │  │  └─ 📄RuleCreator.js.map
│  │  │  │     │     │  ├─ 📁ts-eslint
│  │  │  │     │     │  │  ├─ 📁eslint
│  │  │  │     │     │  │  │  ├─ 📄ESLintShared.d.ts
│  │  │  │     │     │  │  │  ├─ 📄ESLintShared.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄ESLintShared.js
│  │  │  │     │     │  │  │  ├─ 📄ESLintShared.js.map
│  │  │  │     │     │  │  │  ├─ 📄FlatESLint.d.ts
│  │  │  │     │     │  │  │  ├─ 📄FlatESLint.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄FlatESLint.js
│  │  │  │     │     │  │  │  ├─ 📄FlatESLint.js.map
│  │  │  │     │     │  │  │  ├─ 📄LegacyESLint.d.ts
│  │  │  │     │     │  │  │  ├─ 📄LegacyESLint.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄LegacyESLint.js
│  │  │  │     │     │  │  │  └─ 📄LegacyESLint.js.map
│  │  │  │     │     │  │  ├─ 📄AST.d.ts
│  │  │  │     │     │  │  ├─ 📄AST.d.ts.map
│  │  │  │     │     │  │  ├─ 📄AST.js
│  │  │  │     │     │  │  ├─ 📄AST.js.map
│  │  │  │     │     │  │  ├─ 📄Config.d.ts
│  │  │  │     │     │  │  ├─ 📄Config.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Config.js
│  │  │  │     │     │  │  ├─ 📄Config.js.map
│  │  │  │     │     │  │  ├─ 📄ESLint.d.ts
│  │  │  │     │     │  │  ├─ 📄ESLint.d.ts.map
│  │  │  │     │     │  │  ├─ 📄ESLint.js
│  │  │  │     │     │  │  ├─ 📄ESLint.js.map
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  ├─ 📄Linter.d.ts
│  │  │  │     │     │  │  ├─ 📄Linter.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Linter.js
│  │  │  │     │     │  │  ├─ 📄Linter.js.map
│  │  │  │     │     │  │  ├─ 📄Parser.d.ts
│  │  │  │     │     │  │  ├─ 📄Parser.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Parser.js
│  │  │  │     │     │  │  ├─ 📄Parser.js.map
│  │  │  │     │     │  │  ├─ 📄ParserOptions.d.ts
│  │  │  │     │     │  │  ├─ 📄ParserOptions.d.ts.map
│  │  │  │     │     │  │  ├─ 📄ParserOptions.js
│  │  │  │     │     │  │  ├─ 📄ParserOptions.js.map
│  │  │  │     │     │  │  ├─ 📄Processor.d.ts
│  │  │  │     │     │  │  ├─ 📄Processor.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Processor.js
│  │  │  │     │     │  │  ├─ 📄Processor.js.map
│  │  │  │     │     │  │  ├─ 📄Rule.d.ts
│  │  │  │     │     │  │  ├─ 📄Rule.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Rule.js
│  │  │  │     │     │  │  ├─ 📄Rule.js.map
│  │  │  │     │     │  │  ├─ 📄RuleTester.d.ts
│  │  │  │     │     │  │  ├─ 📄RuleTester.d.ts.map
│  │  │  │     │     │  │  ├─ 📄RuleTester.js
│  │  │  │     │     │  │  ├─ 📄RuleTester.js.map
│  │  │  │     │     │  │  ├─ 📄Scope.d.ts
│  │  │  │     │     │  │  ├─ 📄Scope.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Scope.js
│  │  │  │     │     │  │  ├─ 📄Scope.js.map
│  │  │  │     │     │  │  ├─ 📄SourceCode.d.ts
│  │  │  │     │     │  │  ├─ 📄SourceCode.d.ts.map
│  │  │  │     │     │  │  ├─ 📄SourceCode.js
│  │  │  │     │     │  │  └─ 📄SourceCode.js.map
│  │  │  │     │     │  ├─ 📁ts-utils
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  ├─ 📄isArray.d.ts
│  │  │  │     │     │  │  ├─ 📄isArray.d.ts.map
│  │  │  │     │     │  │  ├─ 📄isArray.js
│  │  │  │     │     │  │  └─ 📄isArray.js.map
│  │  │  │     │     │  ├─ 📄index.d.ts
│  │  │  │     │     │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  ├─ 📄index.js
│  │  │  │     │     │  ├─ 📄index.js.map
│  │  │  │     │     │  ├─ 📄json-schema.d.ts
│  │  │  │     │     │  ├─ 📄json-schema.d.ts.map
│  │  │  │     │     │  ├─ 📄json-schema.js
│  │  │  │     │     │  ├─ 📄json-schema.js.map
│  │  │  │     │     │  ├─ 📄ts-estree.d.ts
│  │  │  │     │     │  ├─ 📄ts-estree.d.ts.map
│  │  │  │     │     │  ├─ 📄ts-estree.js
│  │  │  │     │     │  └─ 📄ts-estree.js.map
│  │  │  │     │     ├─ 📁node_modules
│  │  │  │     │     │  └─ 📁.bin
│  │  │  │     │     │     ├─ 📄eslint
│  │  │  │     │     │     ├─ 📄eslint.CMD
│  │  │  │     │     │     └─ 📄eslint.ps1
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     └─ 📁eslint
│  │  │  │        ├─ 📁bin
│  │  │  │        │  └─ 📄eslint.js
│  │  │  │        ├─ 📁conf
│  │  │  │        │  ├─ 📄default-cli-options.js
│  │  │  │        │  ├─ 📄ecma-version.js
│  │  │  │        │  ├─ 📄globals.js
│  │  │  │        │  ├─ 📄replacements.json
│  │  │  │        │  └─ 📄rule-type-list.json
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📁cli-engine
│  │  │  │        │  │  ├─ 📁formatters
│  │  │  │        │  │  │  ├─ 📄formatters-meta.json
│  │  │  │        │  │  │  ├─ 📄html.js
│  │  │  │        │  │  │  ├─ 📄json-with-metadata.js
│  │  │  │        │  │  │  ├─ 📄json.js
│  │  │  │        │  │  │  └─ 📄stylish.js
│  │  │  │        │  │  ├─ 📄cli-engine.js
│  │  │  │        │  │  ├─ 📄file-enumerator.js
│  │  │  │        │  │  ├─ 📄hash.js
│  │  │  │        │  │  ├─ 📄index.js
│  │  │  │        │  │  ├─ 📄lint-result-cache.js
│  │  │  │        │  │  └─ 📄load-rules.js
│  │  │  │        │  ├─ 📁config
│  │  │  │        │  │  ├─ 📄default-config.js
│  │  │  │        │  │  ├─ 📄flat-config-array.js
│  │  │  │        │  │  ├─ 📄flat-config-helpers.js
│  │  │  │        │  │  ├─ 📄flat-config-schema.js
│  │  │  │        │  │  └─ 📄rule-validator.js
│  │  │  │        │  ├─ 📁eslint
│  │  │  │        │  │  ├─ 📄eslint-helpers.js
│  │  │  │        │  │  ├─ 📄eslint.js
│  │  │  │        │  │  ├─ 📄index.js
│  │  │  │        │  │  └─ 📄legacy-eslint.js
│  │  │  │        │  ├─ 📁languages
│  │  │  │        │  │  └─ 📁js
│  │  │  │        │  │     ├─ 📁source-code
│  │  │  │        │  │     │  ├─ 📁token-store
│  │  │  │        │  │     │  │  ├─ 📄backward-token-comment-cursor.js
│  │  │  │        │  │     │  │  ├─ 📄backward-token-cursor.js
│  │  │  │        │  │     │  │  ├─ 📄cursor.js
│  │  │  │        │  │     │  │  ├─ 📄cursors.js
│  │  │  │        │  │     │  │  ├─ 📄decorative-cursor.js
│  │  │  │        │  │     │  │  ├─ 📄filter-cursor.js
│  │  │  │        │  │     │  │  ├─ 📄forward-token-comment-cursor.js
│  │  │  │        │  │     │  │  ├─ 📄forward-token-cursor.js
│  │  │  │        │  │     │  │  ├─ 📄index.js
│  │  │  │        │  │     │  │  ├─ 📄limit-cursor.js
│  │  │  │        │  │     │  │  ├─ 📄padded-token-cursor.js
│  │  │  │        │  │     │  │  ├─ 📄skip-cursor.js
│  │  │  │        │  │     │  │  └─ 📄utils.js
│  │  │  │        │  │     │  ├─ 📄index.js
│  │  │  │        │  │     │  └─ 📄source-code.js
│  │  │  │        │  │     ├─ 📄index.js
│  │  │  │        │  │     └─ 📄validate-language-options.js
│  │  │  │        │  ├─ 📁linter
│  │  │  │        │  │  ├─ 📁code-path-analysis
│  │  │  │        │  │  │  ├─ 📄code-path-analyzer.js
│  │  │  │        │  │  │  ├─ 📄code-path-segment.js
│  │  │  │        │  │  │  ├─ 📄code-path-state.js
│  │  │  │        │  │  │  ├─ 📄code-path.js
│  │  │  │        │  │  │  ├─ 📄debug-helpers.js
│  │  │  │        │  │  │  ├─ 📄fork-context.js
│  │  │  │        │  │  │  └─ 📄id-generator.js
│  │  │  │        │  │  ├─ 📄apply-disable-directives.js
│  │  │  │        │  │  ├─ 📄config-comment-parser.js
│  │  │  │        │  │  ├─ 📄index.js
│  │  │  │        │  │  ├─ 📄interpolate.js
│  │  │  │        │  │  ├─ 📄linter.js
│  │  │  │        │  │  ├─ 📄node-event-generator.js
│  │  │  │        │  │  ├─ 📄report-translator.js
│  │  │  │        │  │  ├─ 📄rule-fixer.js
│  │  │  │        │  │  ├─ 📄rules.js
│  │  │  │        │  │  ├─ 📄safe-emitter.js
│  │  │  │        │  │  ├─ 📄source-code-fixer.js
│  │  │  │        │  │  ├─ 📄timing.js
│  │  │  │        │  │  └─ 📄vfile.js
│  │  │  │        │  ├─ 📁rule-tester
│  │  │  │        │  │  ├─ 📄index.js
│  │  │  │        │  │  └─ 📄rule-tester.js
│  │  │  │        │  ├─ 📁rules
│  │  │  │        │  │  ├─ 📁utils
│  │  │  │        │  │  │  ├─ 📁unicode
│  │  │  │        │  │  │  │  ├─ 📄index.js
│  │  │  │        │  │  │  │  ├─ 📄is-combining-character.js
│  │  │  │        │  │  │  │  ├─ 📄is-emoji-modifier.js
│  │  │  │        │  │  │  │  ├─ 📄is-regional-indicator-symbol.js
│  │  │  │        │  │  │  │  └─ 📄is-surrogate-pair.js
│  │  │  │        │  │  │  ├─ 📄ast-utils.js
│  │  │  │        │  │  │  ├─ 📄char-source.js
│  │  │  │        │  │  │  ├─ 📄fix-tracker.js
│  │  │  │        │  │  │  ├─ 📄keywords.js
│  │  │  │        │  │  │  ├─ 📄lazy-loading-rule-map.js
│  │  │  │        │  │  │  └─ 📄regular-expressions.js
│  │  │  │        │  │  ├─ 📄accessor-pairs.js
│  │  │  │        │  │  ├─ 📄array-bracket-newline.js
│  │  │  │        │  │  ├─ 📄array-bracket-spacing.js
│  │  │  │        │  │  ├─ 📄array-callback-return.js
│  │  │  │        │  │  ├─ 📄array-element-newline.js
│  │  │  │        │  │  ├─ 📄arrow-body-style.js
│  │  │  │        │  │  ├─ 📄arrow-parens.js
│  │  │  │        │  │  ├─ 📄arrow-spacing.js
│  │  │  │        │  │  ├─ 📄block-scoped-var.js
│  │  │  │        │  │  ├─ 📄block-spacing.js
│  │  │  │        │  │  ├─ 📄brace-style.js
│  │  │  │        │  │  ├─ 📄callback-return.js
│  │  │  │        │  │  ├─ 📄camelcase.js
│  │  │  │        │  │  ├─ 📄capitalized-comments.js
│  │  │  │        │  │  ├─ 📄class-methods-use-this.js
│  │  │  │        │  │  ├─ 📄comma-dangle.js
│  │  │  │        │  │  ├─ 📄comma-spacing.js
│  │  │  │        │  │  ├─ 📄comma-style.js
│  │  │  │        │  │  ├─ 📄complexity.js
│  │  │  │        │  │  ├─ 📄computed-property-spacing.js
│  │  │  │        │  │  ├─ 📄consistent-return.js
│  │  │  │        │  │  ├─ 📄consistent-this.js
│  │  │  │        │  │  ├─ 📄constructor-super.js
│  │  │  │        │  │  ├─ 📄curly.js
│  │  │  │        │  │  ├─ 📄default-case-last.js
│  │  │  │        │  │  ├─ 📄default-case.js
│  │  │  │        │  │  ├─ 📄default-param-last.js
│  │  │  │        │  │  ├─ 📄dot-location.js
│  │  │  │        │  │  ├─ 📄dot-notation.js
│  │  │  │        │  │  ├─ 📄eol-last.js
│  │  │  │        │  │  ├─ 📄eqeqeq.js
│  │  │  │        │  │  ├─ 📄for-direction.js
│  │  │  │        │  │  ├─ 📄func-call-spacing.js
│  │  │  │        │  │  ├─ 📄func-name-matching.js
│  │  │  │        │  │  ├─ 📄func-names.js
│  │  │  │        │  │  ├─ 📄func-style.js
│  │  │  │        │  │  ├─ 📄function-call-argument-newline.js
│  │  │  │        │  │  ├─ 📄function-paren-newline.js
│  │  │  │        │  │  ├─ 📄generator-star-spacing.js
│  │  │  │        │  │  ├─ 📄getter-return.js
│  │  │  │        │  │  ├─ 📄global-require.js
│  │  │  │        │  │  ├─ 📄grouped-accessor-pairs.js
│  │  │  │        │  │  ├─ 📄guard-for-in.js
│  │  │  │        │  │  ├─ 📄handle-callback-err.js
│  │  │  │        │  │  ├─ 📄id-blacklist.js
│  │  │  │        │  │  ├─ 📄id-denylist.js
│  │  │  │        │  │  ├─ 📄id-length.js
│  │  │  │        │  │  ├─ 📄id-match.js
│  │  │  │        │  │  ├─ 📄implicit-arrow-linebreak.js
│  │  │  │        │  │  ├─ 📄indent-legacy.js
│  │  │  │        │  │  ├─ 📄indent.js
│  │  │  │        │  │  ├─ 📄index.js
│  │  │  │        │  │  ├─ 📄init-declarations.js
│  │  │  │        │  │  ├─ 📄jsx-quotes.js
│  │  │  │        │  │  ├─ 📄key-spacing.js
│  │  │  │        │  │  ├─ 📄keyword-spacing.js
│  │  │  │        │  │  ├─ 📄line-comment-position.js
│  │  │  │        │  │  ├─ 📄linebreak-style.js
│  │  │  │        │  │  ├─ 📄lines-around-comment.js
│  │  │  │        │  │  ├─ 📄lines-around-directive.js
│  │  │  │        │  │  ├─ 📄lines-between-class-members.js
│  │  │  │        │  │  ├─ 📄logical-assignment-operators.js
│  │  │  │        │  │  ├─ 📄max-classes-per-file.js
│  │  │  │        │  │  ├─ 📄max-depth.js
│  │  │  │        │  │  ├─ 📄max-len.js
│  │  │  │        │  │  ├─ 📄max-lines-per-function.js
│  │  │  │        │  │  ├─ 📄max-lines.js
│  │  │  │        │  │  ├─ 📄max-nested-callbacks.js
│  │  │  │        │  │  ├─ 📄max-params.js
│  │  │  │        │  │  ├─ 📄max-statements-per-line.js
│  │  │  │        │  │  ├─ 📄max-statements.js
│  │  │  │        │  │  ├─ 📄multiline-comment-style.js
│  │  │  │        │  │  ├─ 📄multiline-ternary.js
│  │  │  │        │  │  ├─ 📄new-cap.js
│  │  │  │        │  │  ├─ 📄new-parens.js
│  │  │  │        │  │  ├─ 📄newline-after-var.js
│  │  │  │        │  │  ├─ 📄newline-before-return.js
│  │  │  │        │  │  ├─ 📄newline-per-chained-call.js
│  │  │  │        │  │  ├─ 📄no-alert.js
│  │  │  │        │  │  ├─ 📄no-array-constructor.js
│  │  │  │        │  │  ├─ 📄no-async-promise-executor.js
│  │  │  │        │  │  ├─ 📄no-await-in-loop.js
│  │  │  │        │  │  ├─ 📄no-bitwise.js
│  │  │  │        │  │  ├─ 📄no-buffer-constructor.js
│  │  │  │        │  │  ├─ 📄no-caller.js
│  │  │  │        │  │  ├─ 📄no-case-declarations.js
│  │  │  │        │  │  ├─ 📄no-catch-shadow.js
│  │  │  │        │  │  ├─ 📄no-class-assign.js
│  │  │  │        │  │  ├─ 📄no-compare-neg-zero.js
│  │  │  │        │  │  ├─ 📄no-cond-assign.js
│  │  │  │        │  │  ├─ 📄no-confusing-arrow.js
│  │  │  │        │  │  ├─ 📄no-console.js
│  │  │  │        │  │  ├─ 📄no-const-assign.js
│  │  │  │        │  │  ├─ 📄no-constant-binary-expression.js
│  │  │  │        │  │  ├─ 📄no-constant-condition.js
│  │  │  │        │  │  ├─ 📄no-constructor-return.js
│  │  │  │        │  │  ├─ 📄no-continue.js
│  │  │  │        │  │  ├─ 📄no-control-regex.js
│  │  │  │        │  │  ├─ 📄no-debugger.js
│  │  │  │        │  │  ├─ 📄no-delete-var.js
│  │  │  │        │  │  ├─ 📄no-div-regex.js
│  │  │  │        │  │  ├─ 📄no-dupe-args.js
│  │  │  │        │  │  ├─ 📄no-dupe-class-members.js
│  │  │  │        │  │  ├─ 📄no-dupe-else-if.js
│  │  │  │        │  │  ├─ 📄no-dupe-keys.js
│  │  │  │        │  │  ├─ 📄no-duplicate-case.js
│  │  │  │        │  │  ├─ 📄no-duplicate-imports.js
│  │  │  │        │  │  ├─ 📄no-else-return.js
│  │  │  │        │  │  ├─ 📄no-empty-character-class.js
│  │  │  │        │  │  ├─ 📄no-empty-function.js
│  │  │  │        │  │  ├─ 📄no-empty-pattern.js
│  │  │  │        │  │  ├─ 📄no-empty-static-block.js
│  │  │  │        │  │  ├─ 📄no-empty.js
│  │  │  │        │  │  ├─ 📄no-eq-null.js
│  │  │  │        │  │  ├─ 📄no-eval.js
│  │  │  │        │  │  ├─ 📄no-ex-assign.js
│  │  │  │        │  │  ├─ 📄no-extend-native.js
│  │  │  │        │  │  ├─ 📄no-extra-bind.js
│  │  │  │        │  │  ├─ 📄no-extra-boolean-cast.js
│  │  │  │        │  │  ├─ 📄no-extra-label.js
│  │  │  │        │  │  ├─ 📄no-extra-parens.js
│  │  │  │        │  │  ├─ 📄no-extra-semi.js
│  │  │  │        │  │  ├─ 📄no-fallthrough.js
│  │  │  │        │  │  ├─ 📄no-floating-decimal.js
│  │  │  │        │  │  ├─ 📄no-func-assign.js
│  │  │  │        │  │  ├─ 📄no-global-assign.js
│  │  │  │        │  │  ├─ 📄no-implicit-coercion.js
│  │  │  │        │  │  ├─ 📄no-implicit-globals.js
│  │  │  │        │  │  ├─ 📄no-implied-eval.js
│  │  │  │        │  │  ├─ 📄no-import-assign.js
│  │  │  │        │  │  ├─ 📄no-inline-comments.js
│  │  │  │        │  │  ├─ 📄no-inner-declarations.js
│  │  │  │        │  │  ├─ 📄no-invalid-regexp.js
│  │  │  │        │  │  ├─ 📄no-invalid-this.js
│  │  │  │        │  │  ├─ 📄no-irregular-whitespace.js
│  │  │  │        │  │  ├─ 📄no-iterator.js
│  │  │  │        │  │  ├─ 📄no-label-var.js
│  │  │  │        │  │  ├─ 📄no-labels.js
│  │  │  │        │  │  ├─ 📄no-lone-blocks.js
│  │  │  │        │  │  ├─ 📄no-lonely-if.js
│  │  │  │        │  │  ├─ 📄no-loop-func.js
│  │  │  │        │  │  ├─ 📄no-loss-of-precision.js
│  │  │  │        │  │  ├─ 📄no-magic-numbers.js
│  │  │  │        │  │  ├─ 📄no-misleading-character-class.js
│  │  │  │        │  │  ├─ 📄no-mixed-operators.js
│  │  │  │        │  │  ├─ 📄no-mixed-requires.js
│  │  │  │        │  │  ├─ 📄no-mixed-spaces-and-tabs.js
│  │  │  │        │  │  ├─ 📄no-multi-assign.js
│  │  │  │        │  │  ├─ 📄no-multi-spaces.js
│  │  │  │        │  │  ├─ 📄no-multi-str.js
│  │  │  │        │  │  ├─ 📄no-multiple-empty-lines.js
│  │  │  │        │  │  ├─ 📄no-native-reassign.js
│  │  │  │        │  │  ├─ 📄no-negated-condition.js
│  │  │  │        │  │  ├─ 📄no-negated-in-lhs.js
│  │  │  │        │  │  ├─ 📄no-nested-ternary.js
│  │  │  │        │  │  ├─ 📄no-new-func.js
│  │  │  │        │  │  ├─ 📄no-new-native-nonconstructor.js
│  │  │  │        │  │  ├─ 📄no-new-object.js
│  │  │  │        │  │  ├─ 📄no-new-require.js
│  │  │  │        │  │  ├─ 📄no-new-symbol.js
│  │  │  │        │  │  ├─ 📄no-new-wrappers.js
│  │  │  │        │  │  ├─ 📄no-new.js
│  │  │  │        │  │  ├─ 📄no-nonoctal-decimal-escape.js
│  │  │  │        │  │  ├─ 📄no-obj-calls.js
│  │  │  │        │  │  ├─ 📄no-object-constructor.js
│  │  │  │        │  │  ├─ 📄no-octal-escape.js
│  │  │  │        │  │  ├─ 📄no-octal.js
│  │  │  │        │  │  ├─ 📄no-param-reassign.js
│  │  │  │        │  │  ├─ 📄no-path-concat.js
│  │  │  │        │  │  ├─ 📄no-plusplus.js
│  │  │  │        │  │  ├─ 📄no-process-env.js
│  │  │  │        │  │  ├─ 📄no-process-exit.js
│  │  │  │        │  │  ├─ 📄no-promise-executor-return.js
│  │  │  │        │  │  ├─ 📄no-proto.js
│  │  │  │        │  │  ├─ 📄no-prototype-builtins.js
│  │  │  │        │  │  ├─ 📄no-redeclare.js
│  │  │  │        │  │  ├─ 📄no-regex-spaces.js
│  │  │  │        │  │  ├─ 📄no-restricted-exports.js
│  │  │  │        │  │  ├─ 📄no-restricted-globals.js
│  │  │  │        │  │  ├─ 📄no-restricted-imports.js
│  │  │  │        │  │  ├─ 📄no-restricted-modules.js
│  │  │  │        │  │  ├─ 📄no-restricted-properties.js
│  │  │  │        │  │  ├─ 📄no-restricted-syntax.js
│  │  │  │        │  │  ├─ 📄no-return-assign.js
│  │  │  │        │  │  ├─ 📄no-return-await.js
│  │  │  │        │  │  ├─ 📄no-script-url.js
│  │  │  │        │  │  ├─ 📄no-self-assign.js
│  │  │  │        │  │  ├─ 📄no-self-compare.js
│  │  │  │        │  │  ├─ 📄no-sequences.js
│  │  │  │        │  │  ├─ 📄no-setter-return.js
│  │  │  │        │  │  ├─ 📄no-shadow-restricted-names.js
│  │  │  │        │  │  ├─ 📄no-shadow.js
│  │  │  │        │  │  ├─ 📄no-spaced-func.js
│  │  │  │        │  │  ├─ 📄no-sparse-arrays.js
│  │  │  │        │  │  ├─ 📄no-sync.js
│  │  │  │        │  │  ├─ 📄no-tabs.js
│  │  │  │        │  │  ├─ 📄no-template-curly-in-string.js
│  │  │  │        │  │  ├─ 📄no-ternary.js
│  │  │  │        │  │  ├─ 📄no-this-before-super.js
│  │  │  │        │  │  ├─ 📄no-throw-literal.js
│  │  │  │        │  │  ├─ 📄no-trailing-spaces.js
│  │  │  │        │  │  ├─ 📄no-undef-init.js
│  │  │  │        │  │  ├─ 📄no-undef.js
│  │  │  │        │  │  ├─ 📄no-undefined.js
│  │  │  │        │  │  ├─ 📄no-underscore-dangle.js
│  │  │  │        │  │  ├─ 📄no-unexpected-multiline.js
│  │  │  │        │  │  ├─ 📄no-unmodified-loop-condition.js
│  │  │  │        │  │  ├─ 📄no-unneeded-ternary.js
│  │  │  │        │  │  ├─ 📄no-unreachable-loop.js
│  │  │  │        │  │  ├─ 📄no-unreachable.js
│  │  │  │        │  │  ├─ 📄no-unsafe-finally.js
│  │  │  │        │  │  ├─ 📄no-unsafe-negation.js
│  │  │  │        │  │  ├─ 📄no-unsafe-optional-chaining.js
│  │  │  │        │  │  ├─ 📄no-unused-expressions.js
│  │  │  │        │  │  ├─ 📄no-unused-labels.js
│  │  │  │        │  │  ├─ 📄no-unused-private-class-members.js
│  │  │  │        │  │  ├─ 📄no-unused-vars.js
│  │  │  │        │  │  ├─ 📄no-use-before-define.js
│  │  │  │        │  │  ├─ 📄no-useless-assignment.js
│  │  │  │        │  │  ├─ 📄no-useless-backreference.js
│  │  │  │        │  │  ├─ 📄no-useless-call.js
│  │  │  │        │  │  ├─ 📄no-useless-catch.js
│  │  │  │        │  │  ├─ 📄no-useless-computed-key.js
│  │  │  │        │  │  ├─ 📄no-useless-concat.js
│  │  │  │        │  │  ├─ 📄no-useless-constructor.js
│  │  │  │        │  │  ├─ 📄no-useless-escape.js
│  │  │  │        │  │  ├─ 📄no-useless-rename.js
│  │  │  │        │  │  ├─ 📄no-useless-return.js
│  │  │  │        │  │  ├─ 📄no-var.js
│  │  │  │        │  │  ├─ 📄no-void.js
│  │  │  │        │  │  ├─ 📄no-warning-comments.js
│  │  │  │        │  │  ├─ 📄no-whitespace-before-property.js
│  │  │  │        │  │  ├─ 📄no-with.js
│  │  │  │        │  │  ├─ 📄nonblock-statement-body-position.js
│  │  │  │        │  │  ├─ 📄object-curly-newline.js
│  │  │  │        │  │  ├─ 📄object-curly-spacing.js
│  │  │  │        │  │  ├─ 📄object-property-newline.js
│  │  │  │        │  │  ├─ 📄object-shorthand.js
│  │  │  │        │  │  ├─ 📄one-var-declaration-per-line.js
│  │  │  │        │  │  ├─ 📄one-var.js
│  │  │  │        │  │  ├─ 📄operator-assignment.js
│  │  │  │        │  │  ├─ 📄operator-linebreak.js
│  │  │  │        │  │  ├─ 📄padded-blocks.js
│  │  │  │        │  │  ├─ 📄padding-line-between-statements.js
│  │  │  │        │  │  ├─ 📄prefer-arrow-callback.js
│  │  │  │        │  │  ├─ 📄prefer-const.js
│  │  │  │        │  │  ├─ 📄prefer-destructuring.js
│  │  │  │        │  │  ├─ 📄prefer-exponentiation-operator.js
│  │  │  │        │  │  ├─ 📄prefer-named-capture-group.js
│  │  │  │        │  │  ├─ 📄prefer-numeric-literals.js
│  │  │  │        │  │  ├─ 📄prefer-object-has-own.js
│  │  │  │        │  │  ├─ 📄prefer-object-spread.js
│  │  │  │        │  │  ├─ 📄prefer-promise-reject-errors.js
│  │  │  │        │  │  ├─ 📄prefer-reflect.js
│  │  │  │        │  │  ├─ 📄prefer-regex-literals.js
│  │  │  │        │  │  ├─ 📄prefer-rest-params.js
│  │  │  │        │  │  ├─ 📄prefer-spread.js
│  │  │  │        │  │  ├─ 📄prefer-template.js
│  │  │  │        │  │  ├─ 📄quote-props.js
│  │  │  │        │  │  ├─ 📄quotes.js
│  │  │  │        │  │  ├─ 📄radix.js
│  │  │  │        │  │  ├─ 📄require-atomic-updates.js
│  │  │  │        │  │  ├─ 📄require-await.js
│  │  │  │        │  │  ├─ 📄require-unicode-regexp.js
│  │  │  │        │  │  ├─ 📄require-yield.js
│  │  │  │        │  │  ├─ 📄rest-spread-spacing.js
│  │  │  │        │  │  ├─ 📄semi-spacing.js
│  │  │  │        │  │  ├─ 📄semi-style.js
│  │  │  │        │  │  ├─ 📄semi.js
│  │  │  │        │  │  ├─ 📄sort-imports.js
│  │  │  │        │  │  ├─ 📄sort-keys.js
│  │  │  │        │  │  ├─ 📄sort-vars.js
│  │  │  │        │  │  ├─ 📄space-before-blocks.js
│  │  │  │        │  │  ├─ 📄space-before-function-paren.js
│  │  │  │        │  │  ├─ 📄space-in-parens.js
│  │  │  │        │  │  ├─ 📄space-infix-ops.js
│  │  │  │        │  │  ├─ 📄space-unary-ops.js
│  │  │  │        │  │  ├─ 📄spaced-comment.js
│  │  │  │        │  │  ├─ 📄strict.js
│  │  │  │        │  │  ├─ 📄switch-colon-spacing.js
│  │  │  │        │  │  ├─ 📄symbol-description.js
│  │  │  │        │  │  ├─ 📄template-curly-spacing.js
│  │  │  │        │  │  ├─ 📄template-tag-spacing.js
│  │  │  │        │  │  ├─ 📄unicode-bom.js
│  │  │  │        │  │  ├─ 📄use-isnan.js
│  │  │  │        │  │  ├─ 📄valid-typeof.js
│  │  │  │        │  │  ├─ 📄vars-on-top.js
│  │  │  │        │  │  ├─ 📄wrap-iife.js
│  │  │  │        │  │  ├─ 📄wrap-regex.js
│  │  │  │        │  │  ├─ 📄yield-star-spacing.js
│  │  │  │        │  │  └─ 📄yoda.js
│  │  │  │        │  ├─ 📁shared
│  │  │  │        │  │  ├─ 📄ajv.js
│  │  │  │        │  │  ├─ 📄ast-utils.js
│  │  │  │        │  │  ├─ 📄directives.js
│  │  │  │        │  │  ├─ 📄flags.js
│  │  │  │        │  │  ├─ 📄logging.js
│  │  │  │        │  │  ├─ 📄runtime-info.js
│  │  │  │        │  │  ├─ 📄serialization.js
│  │  │  │        │  │  ├─ 📄severity.js
│  │  │  │        │  │  ├─ 📄stats.js
│  │  │  │        │  │  ├─ 📄string-utils.js
│  │  │  │        │  │  ├─ 📄traverser.js
│  │  │  │        │  │  └─ 📄types.js
│  │  │  │        │  ├─ 📄api.js
│  │  │  │        │  ├─ 📄cli.js
│  │  │  │        │  ├─ 📄options.js
│  │  │  │        │  └─ 📄unsupported-api.js
│  │  │  │        ├─ 📁messages
│  │  │  │        │  ├─ 📄all-files-ignored.js
│  │  │  │        │  ├─ 📄all-matched-files-ignored.js
│  │  │  │        │  ├─ 📄config-file-missing.js
│  │  │  │        │  ├─ 📄eslintrc-incompat.js
│  │  │  │        │  ├─ 📄eslintrc-plugins.js
│  │  │  │        │  ├─ 📄extend-config-missing.js
│  │  │  │        │  ├─ 📄failed-to-read-json.js
│  │  │  │        │  ├─ 📄file-not-found.js
│  │  │  │        │  ├─ 📄invalid-rule-options.js
│  │  │  │        │  ├─ 📄invalid-rule-severity.js
│  │  │  │        │  ├─ 📄no-config-found.js
│  │  │  │        │  ├─ 📄plugin-conflict.js
│  │  │  │        │  ├─ 📄plugin-invalid.js
│  │  │  │        │  ├─ 📄plugin-missing.js
│  │  │  │        │  ├─ 📄print-config-with-directory-path.js
│  │  │  │        │  ├─ 📄shared.js
│  │  │  │        │  └─ 📄whitespace-found.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁@typescript-eslint+visitor-keys@8.2.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@typescript-eslint
│  │  │  │     │  ├─ 📁types
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁generated
│  │  │  │     │  │  │  │  ├─ 📄ast-spec.d.ts
│  │  │  │     │  │  │  │  ├─ 📄ast-spec.d.ts.map
│  │  │  │     │  │  │  │  ├─ 📄ast-spec.js
│  │  │  │     │  │  │  │  └─ 📄ast-spec.js.map
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄lib.d.ts
│  │  │  │     │  │  │  ├─ 📄lib.d.ts.map
│  │  │  │     │  │  │  ├─ 📄lib.js
│  │  │  │     │  │  │  ├─ 📄lib.js.map
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts
│  │  │  │     │  │  │  ├─ 📄parser-options.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser-options.js
│  │  │  │     │  │  │  ├─ 📄parser-options.js.map
│  │  │  │     │  │  │  ├─ 📄ts-estree.d.ts
│  │  │  │     │  │  │  ├─ 📄ts-estree.d.ts.map
│  │  │  │     │  │  │  ├─ 📄ts-estree.js
│  │  │  │     │  │  │  └─ 📄ts-estree.js.map
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁visitor-keys
│  │  │  │     │     ├─ 📁dist
│  │  │  │     │     │  ├─ 📄get-keys.d.ts
│  │  │  │     │     │  ├─ 📄get-keys.d.ts.map
│  │  │  │     │     │  ├─ 📄get-keys.js
│  │  │  │     │     │  ├─ 📄get-keys.js.map
│  │  │  │     │     │  ├─ 📄index.d.ts
│  │  │  │     │     │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  ├─ 📄index.js
│  │  │  │     │     │  ├─ 📄index.js.map
│  │  │  │     │     │  ├─ 📄visitor-keys.d.ts
│  │  │  │     │     │  ├─ 📄visitor-keys.d.ts.map
│  │  │  │     │     │  ├─ 📄visitor-keys.js
│  │  │  │     │     │  └─ 📄visitor-keys.js.map
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     └─ 📁eslint-visitor-keys
│  │  │  │        ├─ 📁dist
│  │  │  │        │  ├─ 📄eslint-visitor-keys.cjs
│  │  │  │        │  ├─ 📄eslint-visitor-keys.d.cts
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  └─ 📄visitor-keys.d.ts
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  └─ 📄visitor-keys.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁@vitejs+plugin-react-swc@3.7.0_vite@5.4.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@swc
│  │  │  │     │  └─ 📁core
│  │  │  │     │     ├─ 📄binding.d.ts
│  │  │  │     │     ├─ 📄binding.js
│  │  │  │     │     ├─ 📄index.d.ts
│  │  │  │     │     ├─ 📄index.js
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     ├─ 📄postinstall.js
│  │  │  │     │     ├─ 📄spack.d.ts
│  │  │  │     │     ├─ 📄spack.js
│  │  │  │     │     ├─ 📄util.d.ts
│  │  │  │     │     ├─ 📄util.js
│  │  │  │     │     ├─ 📄Visitor.d.ts
│  │  │  │     │     └─ 📄Visitor.js
│  │  │  │     ├─ 📁@vitejs
│  │  │  │     │  └─ 📁plugin-react-swc
│  │  │  │     │     ├─ 📁node_modules
│  │  │  │     │     │  └─ 📁.bin
│  │  │  │     │     │     ├─ 📄vite
│  │  │  │     │     │     ├─ 📄vite.CMD
│  │  │  │     │     │     └─ 📄vite.ps1
│  │  │  │     │     ├─ 📄index.cjs
│  │  │  │     │     ├─ 📄index.d.ts
│  │  │  │     │     ├─ 📄index.mjs
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     ├─ 📄README.md
│  │  │  │     │     └─ 📄refresh-runtime.js
│  │  │  │     └─ 📁vite
│  │  │  │        ├─ 📁bin
│  │  │  │        │  ├─ 📄openChrome.applescript
│  │  │  │        │  └─ 📄vite.js
│  │  │  │        ├─ 📁dist
│  │  │  │        │  ├─ 📁client
│  │  │  │        │  │  ├─ 📄client.mjs
│  │  │  │        │  │  └─ 📄env.mjs
│  │  │  │        │  ├─ 📁node
│  │  │  │        │  │  ├─ 📁chunks
│  │  │  │        │  │  │  ├─ 📄dep-BkYu-SNl.js
│  │  │  │        │  │  │  ├─ 📄dep-Cy9twKMn.js
│  │  │  │        │  │  │  ├─ 📄dep-D-7KCb9p.js
│  │  │  │        │  │  │  ├─ 📄dep-IQS-Za7F.js
│  │  │  │        │  │  │  └─ 📄dep-SDtFYyy1.js
│  │  │  │        │  │  ├─ 📄cli.js
│  │  │  │        │  │  ├─ 📄constants.js
│  │  │  │        │  │  ├─ 📄index.d.ts
│  │  │  │        │  │  ├─ 📄index.js
│  │  │  │        │  │  ├─ 📄runtime.d.ts
│  │  │  │        │  │  ├─ 📄runtime.js
│  │  │  │        │  │  └─ 📄types.d-aGj9QkWt.d.ts
│  │  │  │        │  └─ 📁node-cjs
│  │  │  │        │     └─ 📄publicUtils.cjs
│  │  │  │        ├─ 📁node_modules
│  │  │  │        │  └─ 📁.bin
│  │  │  │        │     ├─ 📄esbuild
│  │  │  │        │     ├─ 📄esbuild.CMD
│  │  │  │        │     ├─ 📄esbuild.ps1
│  │  │  │        │     ├─ 📄rollup
│  │  │  │        │     ├─ 📄rollup.CMD
│  │  │  │        │     └─ 📄rollup.ps1
│  │  │  │        ├─ 📁types
│  │  │  │        │  ├─ 📄customEvent.d.ts
│  │  │  │        │  ├─ 📄hmrPayload.d.ts
│  │  │  │        │  ├─ 📄hot.d.ts
│  │  │  │        │  ├─ 📄import-meta.d.ts
│  │  │  │        │  ├─ 📄importGlob.d.ts
│  │  │  │        │  ├─ 📄importMeta.d.ts
│  │  │  │        │  ├─ 📄metadata.d.ts
│  │  │  │        │  └─ 📄package.json
│  │  │  │        ├─ 📄client.d.ts
│  │  │  │        ├─ 📄index.cjs
│  │  │  │        ├─ 📄index.d.cts
│  │  │  │        ├─ 📄LICENSE.md
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁acorn-jsx@5.3.2_acorn@8.12.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁acorn
│  │  │  │     │  ├─ 📁bin
│  │  │  │     │  │  └─ 📄acorn
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  ├─ 📄acorn.d.mts
│  │  │  │     │  │  ├─ 📄acorn.d.ts
│  │  │  │     │  │  ├─ 📄acorn.js
│  │  │  │     │  │  ├─ 📄acorn.mjs
│  │  │  │     │  │  └─ 📄bin.js
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁acorn-jsx
│  │  │  │        ├─ 📁node_modules
│  │  │  │        │  └─ 📁.bin
│  │  │  │        │     ├─ 📄acorn
│  │  │  │        │     ├─ 📄acorn.CMD
│  │  │  │        │     └─ 📄acorn.ps1
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        └─ 📄xhtml.js
│  │  │  ├─ 📁acorn@8.12.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁acorn
│  │  │  │        ├─ 📁bin
│  │  │  │        │  └─ 📄acorn
│  │  │  │        ├─ 📁dist
│  │  │  │        │  ├─ 📄acorn.d.mts
│  │  │  │        │  ├─ 📄acorn.d.ts
│  │  │  │        │  ├─ 📄acorn.js
│  │  │  │        │  ├─ 📄acorn.mjs
│  │  │  │        │  └─ 📄bin.js
│  │  │  │        ├─ 📄CHANGELOG.md
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁ajv@6.12.6
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁ajv
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  ├─ 📄ajv.bundle.js
│  │  │  │     │  │  ├─ 📄ajv.min.js
│  │  │  │     │  │  └─ 📄ajv.min.js.map
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📁compile
│  │  │  │     │  │  │  ├─ 📄async.js
│  │  │  │     │  │  │  ├─ 📄equal.js
│  │  │  │     │  │  │  ├─ 📄error_classes.js
│  │  │  │     │  │  │  ├─ 📄formats.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄resolve.js
│  │  │  │     │  │  │  ├─ 📄rules.js
│  │  │  │     │  │  │  ├─ 📄schema_obj.js
│  │  │  │     │  │  │  ├─ 📄ucs2length.js
│  │  │  │     │  │  │  └─ 📄util.js
│  │  │  │     │  │  ├─ 📁dot
│  │  │  │     │  │  │  ├─ 📄allOf.jst
│  │  │  │     │  │  │  ├─ 📄anyOf.jst
│  │  │  │     │  │  │  ├─ 📄coerce.def
│  │  │  │     │  │  │  ├─ 📄comment.jst
│  │  │  │     │  │  │  ├─ 📄const.jst
│  │  │  │     │  │  │  ├─ 📄contains.jst
│  │  │  │     │  │  │  ├─ 📄custom.jst
│  │  │  │     │  │  │  ├─ 📄defaults.def
│  │  │  │     │  │  │  ├─ 📄definitions.def
│  │  │  │     │  │  │  ├─ 📄dependencies.jst
│  │  │  │     │  │  │  ├─ 📄enum.jst
│  │  │  │     │  │  │  ├─ 📄errors.def
│  │  │  │     │  │  │  ├─ 📄format.jst
│  │  │  │     │  │  │  ├─ 📄if.jst
│  │  │  │     │  │  │  ├─ 📄items.jst
│  │  │  │     │  │  │  ├─ 📄missing.def
│  │  │  │     │  │  │  ├─ 📄multipleOf.jst
│  │  │  │     │  │  │  ├─ 📄not.jst
│  │  │  │     │  │  │  ├─ 📄oneOf.jst
│  │  │  │     │  │  │  ├─ 📄pattern.jst
│  │  │  │     │  │  │  ├─ 📄properties.jst
│  │  │  │     │  │  │  ├─ 📄propertyNames.jst
│  │  │  │     │  │  │  ├─ 📄ref.jst
│  │  │  │     │  │  │  ├─ 📄required.jst
│  │  │  │     │  │  │  ├─ 📄uniqueItems.jst
│  │  │  │     │  │  │  ├─ 📄validate.jst
│  │  │  │     │  │  │  ├─ 📄_limit.jst
│  │  │  │     │  │  │  ├─ 📄_limitItems.jst
│  │  │  │     │  │  │  ├─ 📄_limitLength.jst
│  │  │  │     │  │  │  └─ 📄_limitProperties.jst
│  │  │  │     │  │  ├─ 📁dotjs
│  │  │  │     │  │  │  ├─ 📄allOf.js
│  │  │  │     │  │  │  ├─ 📄anyOf.js
│  │  │  │     │  │  │  ├─ 📄comment.js
│  │  │  │     │  │  │  ├─ 📄const.js
│  │  │  │     │  │  │  ├─ 📄contains.js
│  │  │  │     │  │  │  ├─ 📄custom.js
│  │  │  │     │  │  │  ├─ 📄dependencies.js
│  │  │  │     │  │  │  ├─ 📄enum.js
│  │  │  │     │  │  │  ├─ 📄format.js
│  │  │  │     │  │  │  ├─ 📄if.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄items.js
│  │  │  │     │  │  │  ├─ 📄multipleOf.js
│  │  │  │     │  │  │  ├─ 📄not.js
│  │  │  │     │  │  │  ├─ 📄oneOf.js
│  │  │  │     │  │  │  ├─ 📄pattern.js
│  │  │  │     │  │  │  ├─ 📄properties.js
│  │  │  │     │  │  │  ├─ 📄propertyNames.js
│  │  │  │     │  │  │  ├─ 📄README.md
│  │  │  │     │  │  │  ├─ 📄ref.js
│  │  │  │     │  │  │  ├─ 📄required.js
│  │  │  │     │  │  │  ├─ 📄uniqueItems.js
│  │  │  │     │  │  │  ├─ 📄validate.js
│  │  │  │     │  │  │  ├─ 📄_limit.js
│  │  │  │     │  │  │  ├─ 📄_limitItems.js
│  │  │  │     │  │  │  ├─ 📄_limitLength.js
│  │  │  │     │  │  │  └─ 📄_limitProperties.js
│  │  │  │     │  │  ├─ 📁refs
│  │  │  │     │  │  │  ├─ 📄data.json
│  │  │  │     │  │  │  ├─ 📄json-schema-draft-04.json
│  │  │  │     │  │  │  ├─ 📄json-schema-draft-06.json
│  │  │  │     │  │  │  ├─ 📄json-schema-draft-07.json
│  │  │  │     │  │  │  └─ 📄json-schema-secure.json
│  │  │  │     │  │  ├─ 📄ajv.d.ts
│  │  │  │     │  │  ├─ 📄ajv.js
│  │  │  │     │  │  ├─ 📄cache.js
│  │  │  │     │  │  ├─ 📄data.js
│  │  │  │     │  │  ├─ 📄definition_schema.js
│  │  │  │     │  │  └─ 📄keyword.js
│  │  │  │     │  ├─ 📁scripts
│  │  │  │     │  │  ├─ 📄.eslintrc.yml
│  │  │  │     │  │  ├─ 📄bundle.js
│  │  │  │     │  │  ├─ 📄compile-dots.js
│  │  │  │     │  │  ├─ 📄info
│  │  │  │     │  │  ├─ 📄prepare-tests
│  │  │  │     │  │  ├─ 📄publish-built-version
│  │  │  │     │  │  └─ 📄travis-gh-pages
│  │  │  │     │  ├─ 📄.tonic_example.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁fast-deep-equal
│  │  │  │     │  ├─ 📁es6
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄react.d.ts
│  │  │  │     │  │  └─ 📄react.js
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄react.d.ts
│  │  │  │     │  ├─ 📄react.js
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁fast-json-stable-stringify
│  │  │  │     │  ├─ 📁.github
│  │  │  │     │  │  └─ 📄FUNDING.yml
│  │  │  │     │  ├─ 📁benchmark
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄test.json
│  │  │  │     │  ├─ 📁example
│  │  │  │     │  │  ├─ 📄key_cmp.js
│  │  │  │     │  │  ├─ 📄nested.js
│  │  │  │     │  │  ├─ 📄str.js
│  │  │  │     │  │  └─ 📄value_cmp.js
│  │  │  │     │  ├─ 📁test
│  │  │  │     │  │  ├─ 📄cmp.js
│  │  │  │     │  │  ├─ 📄nested.js
│  │  │  │     │  │  ├─ 📄str.js
│  │  │  │     │  │  └─ 📄to-json.js
│  │  │  │     │  ├─ 📄.eslintrc.yml
│  │  │  │     │  ├─ 📄.travis.yml
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁json-schema-traverse
│  │  │  │     │  ├─ 📁spec
│  │  │  │     │  │  ├─ 📁fixtures
│  │  │  │     │  │  │  └─ 📄schema.js
│  │  │  │     │  │  ├─ 📄.eslintrc.yml
│  │  │  │     │  │  └─ 📄index.spec.js
│  │  │  │     │  ├─ 📄.eslintrc.yml
│  │  │  │     │  ├─ 📄.travis.yml
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁uri-js
│  │  │  │        ├─ 📁dist
│  │  │  │        │  ├─ 📁es5
│  │  │  │        │  │  ├─ 📄uri.all.d.ts
│  │  │  │        │  │  ├─ 📄uri.all.js
│  │  │  │        │  │  ├─ 📄uri.all.js.map
│  │  │  │        │  │  ├─ 📄uri.all.min.d.ts
│  │  │  │        │  │  ├─ 📄uri.all.min.js
│  │  │  │        │  │  └─ 📄uri.all.min.js.map
│  │  │  │        │  └─ 📁esnext
│  │  │  │        │     ├─ 📁schemes
│  │  │  │        │     │  ├─ 📄http.d.ts
│  │  │  │        │     │  ├─ 📄http.js
│  │  │  │        │     │  ├─ 📄http.js.map
│  │  │  │        │     │  ├─ 📄https.d.ts
│  │  │  │        │     │  ├─ 📄https.js
│  │  │  │        │     │  ├─ 📄https.js.map
│  │  │  │        │     │  ├─ 📄mailto.d.ts
│  │  │  │        │     │  ├─ 📄mailto.js
│  │  │  │        │     │  ├─ 📄mailto.js.map
│  │  │  │        │     │  ├─ 📄urn-uuid.d.ts
│  │  │  │        │     │  ├─ 📄urn-uuid.js
│  │  │  │        │     │  ├─ 📄urn-uuid.js.map
│  │  │  │        │     │  ├─ 📄urn.d.ts
│  │  │  │        │     │  ├─ 📄urn.js
│  │  │  │        │     │  ├─ 📄urn.js.map
│  │  │  │        │     │  ├─ 📄ws.d.ts
│  │  │  │        │     │  ├─ 📄ws.js
│  │  │  │        │     │  ├─ 📄ws.js.map
│  │  │  │        │     │  ├─ 📄wss.d.ts
│  │  │  │        │     │  ├─ 📄wss.js
│  │  │  │        │     │  └─ 📄wss.js.map
│  │  │  │        │     ├─ 📄index.d.ts
│  │  │  │        │     ├─ 📄index.js
│  │  │  │        │     ├─ 📄index.js.map
│  │  │  │        │     ├─ 📄regexps-iri.d.ts
│  │  │  │        │     ├─ 📄regexps-iri.js
│  │  │  │        │     ├─ 📄regexps-iri.js.map
│  │  │  │        │     ├─ 📄regexps-uri.d.ts
│  │  │  │        │     ├─ 📄regexps-uri.js
│  │  │  │        │     ├─ 📄regexps-uri.js.map
│  │  │  │        │     ├─ 📄uri.d.ts
│  │  │  │        │     ├─ 📄uri.js
│  │  │  │        │     ├─ 📄uri.js.map
│  │  │  │        │     ├─ 📄util.d.ts
│  │  │  │        │     ├─ 📄util.js
│  │  │  │        │     └─ 📄util.js.map
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        └─ 📄yarn.lock
│  │  │  ├─ 📁ansi-regex@5.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁ansi-regex
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁ansi-styles@4.3.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁ansi-styles
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁color-convert
│  │  │  │        ├─ 📄CHANGELOG.md
│  │  │  │        ├─ 📄conversions.js
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        └─ 📄route.js
│  │  │  ├─ 📁argparse@2.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁argparse
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄sub.js
│  │  │  │        │  └─ 📄textwrap.js
│  │  │  │        ├─ 📄argparse.js
│  │  │  │        ├─ 📄CHANGELOG.md
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁array-union@2.1.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁array-union
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁balanced-match@1.0.2
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁balanced-match
│  │  │  │        ├─ 📁.github
│  │  │  │        │  └─ 📄FUNDING.yml
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE.md
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁brace-expansion@1.1.11
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁balanced-match
│  │  │  │     │  ├─ 📁.github
│  │  │  │     │  │  └─ 📄FUNDING.yml
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE.md
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁brace-expansion
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁concat-map
│  │  │  │        ├─ 📁example
│  │  │  │        │  └─ 📄map.js
│  │  │  │        ├─ 📁test
│  │  │  │        │  └─ 📄map.js
│  │  │  │        ├─ 📄.travis.yml
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.markdown
│  │  │  ├─ 📁brace-expansion@2.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁balanced-match
│  │  │  │     │  ├─ 📁.github
│  │  │  │     │  │  └─ 📄FUNDING.yml
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE.md
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁brace-expansion
│  │  │  │        ├─ 📁.github
│  │  │  │        │  └─ 📄FUNDING.yml
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁braces@3.0.3
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁braces
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄compile.js
│  │  │  │     │  │  ├─ 📄constants.js
│  │  │  │     │  │  ├─ 📄expand.js
│  │  │  │     │  │  ├─ 📄parse.js
│  │  │  │     │  │  ├─ 📄stringify.js
│  │  │  │     │  │  └─ 📄utils.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁fill-range
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁callsites@3.1.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁callsites
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁chalk@4.1.2
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁ansi-styles
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     ├─ 📁chalk
│  │  │  │     │  ├─ 📁source
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄templates.js
│  │  │  │     │  │  └─ 📄util.js
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁supports-color
│  │  │  │        ├─ 📄browser.js
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁color-convert@2.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁color-convert
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄conversions.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄README.md
│  │  │  │     │  └─ 📄route.js
│  │  │  │     └─ 📁color-name
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁color-name@1.1.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁color-name
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁concat-map@0.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁concat-map
│  │  │  │        ├─ 📁example
│  │  │  │        │  └─ 📄map.js
│  │  │  │        ├─ 📁test
│  │  │  │        │  └─ 📄map.js
│  │  │  │        ├─ 📄.travis.yml
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.markdown
│  │  │  ├─ 📁cross-spawn@7.0.3
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁cross-spawn
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📁util
│  │  │  │     │  │  │  ├─ 📄escape.js
│  │  │  │     │  │  │  ├─ 📄readShebang.js
│  │  │  │     │  │  │  └─ 📄resolveCommand.js
│  │  │  │     │  │  ├─ 📄enoent.js
│  │  │  │     │  │  └─ 📄parse.js
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄node-which
│  │  │  │     │  │     ├─ 📄node-which.CMD
│  │  │  │     │  │     └─ 📄node-which.ps1
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁path-key
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     ├─ 📁shebang-command
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁which
│  │  │  │        ├─ 📁bin
│  │  │  │        │  └─ 📄node-which
│  │  │  │        ├─ 📄CHANGELOG.md
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        └─ 📄which.js
│  │  │  ├─ 📁csstype@3.1.3
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁csstype
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js.flow
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁debug@4.3.6
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁debug
│  │  │  │     │  ├─ 📁src
│  │  │  │     │  │  ├─ 📄browser.js
│  │  │  │     │  │  ├─ 📄common.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄node.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁ms
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license.md
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁deep-is@0.1.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁deep-is
│  │  │  │        ├─ 📁example
│  │  │  │        │  └─ 📄cmp.js
│  │  │  │        ├─ 📁test
│  │  │  │        │  ├─ 📄cmp.js
│  │  │  │        │  ├─ 📄NaN.js
│  │  │  │        │  └─ 📄neg-vs-pos-0.js
│  │  │  │        ├─ 📄.travis.yml
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.markdown
│  │  │  ├─ 📁dir-glob@3.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁dir-glob
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁path-type
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁esbuild@0.21.5
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@esbuild
│  │  │  │     │  └─ 📁win32-x64
│  │  │  │     │     ├─ 📄esbuild.exe
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     └─ 📁esbuild
│  │  │  │        ├─ 📁bin
│  │  │  │        │  └─ 📄esbuild
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄main.d.ts
│  │  │  │        │  └─ 📄main.js
│  │  │  │        ├─ 📁node_modules
│  │  │  │        │  └─ 📁.bin
│  │  │  │        │     ├─ 📄esbuild
│  │  │  │        │     ├─ 📄esbuild.CMD
│  │  │  │        │     └─ 📄esbuild.ps1
│  │  │  │        ├─ 📄install.js
│  │  │  │        ├─ 📄LICENSE.md
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁escape-string-regexp@4.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁escape-string-regexp
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁eslint-plugin-react-hooks@5.1.0-rc-fb9a90fa48-20240614_eslint@9.9.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁eslint
│  │  │  │     │  ├─ 📁bin
│  │  │  │     │  │  └─ 📄eslint.js
│  │  │  │     │  ├─ 📁conf
│  │  │  │     │  │  ├─ 📄default-cli-options.js
│  │  │  │     │  │  ├─ 📄ecma-version.js
│  │  │  │     │  │  ├─ 📄globals.js
│  │  │  │     │  │  ├─ 📄replacements.json
│  │  │  │     │  │  └─ 📄rule-type-list.json
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📁cli-engine
│  │  │  │     │  │  │  ├─ 📁formatters
│  │  │  │     │  │  │  │  ├─ 📄formatters-meta.json
│  │  │  │     │  │  │  │  ├─ 📄html.js
│  │  │  │     │  │  │  │  ├─ 📄json-with-metadata.js
│  │  │  │     │  │  │  │  ├─ 📄json.js
│  │  │  │     │  │  │  │  └─ 📄stylish.js
│  │  │  │     │  │  │  ├─ 📄cli-engine.js
│  │  │  │     │  │  │  ├─ 📄file-enumerator.js
│  │  │  │     │  │  │  ├─ 📄hash.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄lint-result-cache.js
│  │  │  │     │  │  │  └─ 📄load-rules.js
│  │  │  │     │  │  ├─ 📁config
│  │  │  │     │  │  │  ├─ 📄default-config.js
│  │  │  │     │  │  │  ├─ 📄flat-config-array.js
│  │  │  │     │  │  │  ├─ 📄flat-config-helpers.js
│  │  │  │     │  │  │  ├─ 📄flat-config-schema.js
│  │  │  │     │  │  │  └─ 📄rule-validator.js
│  │  │  │     │  │  ├─ 📁eslint
│  │  │  │     │  │  │  ├─ 📄eslint-helpers.js
│  │  │  │     │  │  │  ├─ 📄eslint.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄legacy-eslint.js
│  │  │  │     │  │  ├─ 📁languages
│  │  │  │     │  │  │  └─ 📁js
│  │  │  │     │  │  │     ├─ 📁source-code
│  │  │  │     │  │  │     │  ├─ 📁token-store
│  │  │  │     │  │  │     │  │  ├─ 📄backward-token-comment-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄backward-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄cursors.js
│  │  │  │     │  │  │     │  │  ├─ 📄decorative-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄filter-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄forward-token-comment-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄forward-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  │     │  │  ├─ 📄limit-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄padded-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄skip-cursor.js
│  │  │  │     │  │  │     │  │  └─ 📄utils.js
│  │  │  │     │  │  │     │  ├─ 📄index.js
│  │  │  │     │  │  │     │  └─ 📄source-code.js
│  │  │  │     │  │  │     ├─ 📄index.js
│  │  │  │     │  │  │     └─ 📄validate-language-options.js
│  │  │  │     │  │  ├─ 📁linter
│  │  │  │     │  │  │  ├─ 📁code-path-analysis
│  │  │  │     │  │  │  │  ├─ 📄code-path-analyzer.js
│  │  │  │     │  │  │  │  ├─ 📄code-path-segment.js
│  │  │  │     │  │  │  │  ├─ 📄code-path-state.js
│  │  │  │     │  │  │  │  ├─ 📄code-path.js
│  │  │  │     │  │  │  │  ├─ 📄debug-helpers.js
│  │  │  │     │  │  │  │  ├─ 📄fork-context.js
│  │  │  │     │  │  │  │  └─ 📄id-generator.js
│  │  │  │     │  │  │  ├─ 📄apply-disable-directives.js
│  │  │  │     │  │  │  ├─ 📄config-comment-parser.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄interpolate.js
│  │  │  │     │  │  │  ├─ 📄linter.js
│  │  │  │     │  │  │  ├─ 📄node-event-generator.js
│  │  │  │     │  │  │  ├─ 📄report-translator.js
│  │  │  │     │  │  │  ├─ 📄rule-fixer.js
│  │  │  │     │  │  │  ├─ 📄rules.js
│  │  │  │     │  │  │  ├─ 📄safe-emitter.js
│  │  │  │     │  │  │  ├─ 📄source-code-fixer.js
│  │  │  │     │  │  │  ├─ 📄timing.js
│  │  │  │     │  │  │  └─ 📄vfile.js
│  │  │  │     │  │  ├─ 📁rule-tester
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄rule-tester.js
│  │  │  │     │  │  ├─ 📁rules
│  │  │  │     │  │  │  ├─ 📁utils
│  │  │  │     │  │  │  │  ├─ 📁unicode
│  │  │  │     │  │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-combining-character.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-emoji-modifier.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-regional-indicator-symbol.js
│  │  │  │     │  │  │  │  │  └─ 📄is-surrogate-pair.js
│  │  │  │     │  │  │  │  ├─ 📄ast-utils.js
│  │  │  │     │  │  │  │  ├─ 📄char-source.js
│  │  │  │     │  │  │  │  ├─ 📄fix-tracker.js
│  │  │  │     │  │  │  │  ├─ 📄keywords.js
│  │  │  │     │  │  │  │  ├─ 📄lazy-loading-rule-map.js
│  │  │  │     │  │  │  │  └─ 📄regular-expressions.js
│  │  │  │     │  │  │  ├─ 📄accessor-pairs.js
│  │  │  │     │  │  │  ├─ 📄array-bracket-newline.js
│  │  │  │     │  │  │  ├─ 📄array-bracket-spacing.js
│  │  │  │     │  │  │  ├─ 📄array-callback-return.js
│  │  │  │     │  │  │  ├─ 📄array-element-newline.js
│  │  │  │     │  │  │  ├─ 📄arrow-body-style.js
│  │  │  │     │  │  │  ├─ 📄arrow-parens.js
│  │  │  │     │  │  │  ├─ 📄arrow-spacing.js
│  │  │  │     │  │  │  ├─ 📄block-scoped-var.js
│  │  │  │     │  │  │  ├─ 📄block-spacing.js
│  │  │  │     │  │  │  ├─ 📄brace-style.js
│  │  │  │     │  │  │  ├─ 📄callback-return.js
│  │  │  │     │  │  │  ├─ 📄camelcase.js
│  │  │  │     │  │  │  ├─ 📄capitalized-comments.js
│  │  │  │     │  │  │  ├─ 📄class-methods-use-this.js
│  │  │  │     │  │  │  ├─ 📄comma-dangle.js
│  │  │  │     │  │  │  ├─ 📄comma-spacing.js
│  │  │  │     │  │  │  ├─ 📄comma-style.js
│  │  │  │     │  │  │  ├─ 📄complexity.js
│  │  │  │     │  │  │  ├─ 📄computed-property-spacing.js
│  │  │  │     │  │  │  ├─ 📄consistent-return.js
│  │  │  │     │  │  │  ├─ 📄consistent-this.js
│  │  │  │     │  │  │  ├─ 📄constructor-super.js
│  │  │  │     │  │  │  ├─ 📄curly.js
│  │  │  │     │  │  │  ├─ 📄default-case-last.js
│  │  │  │     │  │  │  ├─ 📄default-case.js
│  │  │  │     │  │  │  ├─ 📄default-param-last.js
│  │  │  │     │  │  │  ├─ 📄dot-location.js
│  │  │  │     │  │  │  ├─ 📄dot-notation.js
│  │  │  │     │  │  │  ├─ 📄eol-last.js
│  │  │  │     │  │  │  ├─ 📄eqeqeq.js
│  │  │  │     │  │  │  ├─ 📄for-direction.js
│  │  │  │     │  │  │  ├─ 📄func-call-spacing.js
│  │  │  │     │  │  │  ├─ 📄func-name-matching.js
│  │  │  │     │  │  │  ├─ 📄func-names.js
│  │  │  │     │  │  │  ├─ 📄func-style.js
│  │  │  │     │  │  │  ├─ 📄function-call-argument-newline.js
│  │  │  │     │  │  │  ├─ 📄function-paren-newline.js
│  │  │  │     │  │  │  ├─ 📄generator-star-spacing.js
│  │  │  │     │  │  │  ├─ 📄getter-return.js
│  │  │  │     │  │  │  ├─ 📄global-require.js
│  │  │  │     │  │  │  ├─ 📄grouped-accessor-pairs.js
│  │  │  │     │  │  │  ├─ 📄guard-for-in.js
│  │  │  │     │  │  │  ├─ 📄handle-callback-err.js
│  │  │  │     │  │  │  ├─ 📄id-blacklist.js
│  │  │  │     │  │  │  ├─ 📄id-denylist.js
│  │  │  │     │  │  │  ├─ 📄id-length.js
│  │  │  │     │  │  │  ├─ 📄id-match.js
│  │  │  │     │  │  │  ├─ 📄implicit-arrow-linebreak.js
│  │  │  │     │  │  │  ├─ 📄indent-legacy.js
│  │  │  │     │  │  │  ├─ 📄indent.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄init-declarations.js
│  │  │  │     │  │  │  ├─ 📄jsx-quotes.js
│  │  │  │     │  │  │  ├─ 📄key-spacing.js
│  │  │  │     │  │  │  ├─ 📄keyword-spacing.js
│  │  │  │     │  │  │  ├─ 📄line-comment-position.js
│  │  │  │     │  │  │  ├─ 📄linebreak-style.js
│  │  │  │     │  │  │  ├─ 📄lines-around-comment.js
│  │  │  │     │  │  │  ├─ 📄lines-around-directive.js
│  │  │  │     │  │  │  ├─ 📄lines-between-class-members.js
│  │  │  │     │  │  │  ├─ 📄logical-assignment-operators.js
│  │  │  │     │  │  │  ├─ 📄max-classes-per-file.js
│  │  │  │     │  │  │  ├─ 📄max-depth.js
│  │  │  │     │  │  │  ├─ 📄max-len.js
│  │  │  │     │  │  │  ├─ 📄max-lines-per-function.js
│  │  │  │     │  │  │  ├─ 📄max-lines.js
│  │  │  │     │  │  │  ├─ 📄max-nested-callbacks.js
│  │  │  │     │  │  │  ├─ 📄max-params.js
│  │  │  │     │  │  │  ├─ 📄max-statements-per-line.js
│  │  │  │     │  │  │  ├─ 📄max-statements.js
│  │  │  │     │  │  │  ├─ 📄multiline-comment-style.js
│  │  │  │     │  │  │  ├─ 📄multiline-ternary.js
│  │  │  │     │  │  │  ├─ 📄new-cap.js
│  │  │  │     │  │  │  ├─ 📄new-parens.js
│  │  │  │     │  │  │  ├─ 📄newline-after-var.js
│  │  │  │     │  │  │  ├─ 📄newline-before-return.js
│  │  │  │     │  │  │  ├─ 📄newline-per-chained-call.js
│  │  │  │     │  │  │  ├─ 📄no-alert.js
│  │  │  │     │  │  │  ├─ 📄no-array-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-async-promise-executor.js
│  │  │  │     │  │  │  ├─ 📄no-await-in-loop.js
│  │  │  │     │  │  │  ├─ 📄no-bitwise.js
│  │  │  │     │  │  │  ├─ 📄no-buffer-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-caller.js
│  │  │  │     │  │  │  ├─ 📄no-case-declarations.js
│  │  │  │     │  │  │  ├─ 📄no-catch-shadow.js
│  │  │  │     │  │  │  ├─ 📄no-class-assign.js
│  │  │  │     │  │  │  ├─ 📄no-compare-neg-zero.js
│  │  │  │     │  │  │  ├─ 📄no-cond-assign.js
│  │  │  │     │  │  │  ├─ 📄no-confusing-arrow.js
│  │  │  │     │  │  │  ├─ 📄no-console.js
│  │  │  │     │  │  │  ├─ 📄no-const-assign.js
│  │  │  │     │  │  │  ├─ 📄no-constant-binary-expression.js
│  │  │  │     │  │  │  ├─ 📄no-constant-condition.js
│  │  │  │     │  │  │  ├─ 📄no-constructor-return.js
│  │  │  │     │  │  │  ├─ 📄no-continue.js
│  │  │  │     │  │  │  ├─ 📄no-control-regex.js
│  │  │  │     │  │  │  ├─ 📄no-debugger.js
│  │  │  │     │  │  │  ├─ 📄no-delete-var.js
│  │  │  │     │  │  │  ├─ 📄no-div-regex.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-args.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-class-members.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-else-if.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-keys.js
│  │  │  │     │  │  │  ├─ 📄no-duplicate-case.js
│  │  │  │     │  │  │  ├─ 📄no-duplicate-imports.js
│  │  │  │     │  │  │  ├─ 📄no-else-return.js
│  │  │  │     │  │  │  ├─ 📄no-empty-character-class.js
│  │  │  │     │  │  │  ├─ 📄no-empty-function.js
│  │  │  │     │  │  │  ├─ 📄no-empty-pattern.js
│  │  │  │     │  │  │  ├─ 📄no-empty-static-block.js
│  │  │  │     │  │  │  ├─ 📄no-empty.js
│  │  │  │     │  │  │  ├─ 📄no-eq-null.js
│  │  │  │     │  │  │  ├─ 📄no-eval.js
│  │  │  │     │  │  │  ├─ 📄no-ex-assign.js
│  │  │  │     │  │  │  ├─ 📄no-extend-native.js
│  │  │  │     │  │  │  ├─ 📄no-extra-bind.js
│  │  │  │     │  │  │  ├─ 📄no-extra-boolean-cast.js
│  │  │  │     │  │  │  ├─ 📄no-extra-label.js
│  │  │  │     │  │  │  ├─ 📄no-extra-parens.js
│  │  │  │     │  │  │  ├─ 📄no-extra-semi.js
│  │  │  │     │  │  │  ├─ 📄no-fallthrough.js
│  │  │  │     │  │  │  ├─ 📄no-floating-decimal.js
│  │  │  │     │  │  │  ├─ 📄no-func-assign.js
│  │  │  │     │  │  │  ├─ 📄no-global-assign.js
│  │  │  │     │  │  │  ├─ 📄no-implicit-coercion.js
│  │  │  │     │  │  │  ├─ 📄no-implicit-globals.js
│  │  │  │     │  │  │  ├─ 📄no-implied-eval.js
│  │  │  │     │  │  │  ├─ 📄no-import-assign.js
│  │  │  │     │  │  │  ├─ 📄no-inline-comments.js
│  │  │  │     │  │  │  ├─ 📄no-inner-declarations.js
│  │  │  │     │  │  │  ├─ 📄no-invalid-regexp.js
│  │  │  │     │  │  │  ├─ 📄no-invalid-this.js
│  │  │  │     │  │  │  ├─ 📄no-irregular-whitespace.js
│  │  │  │     │  │  │  ├─ 📄no-iterator.js
│  │  │  │     │  │  │  ├─ 📄no-label-var.js
│  │  │  │     │  │  │  ├─ 📄no-labels.js
│  │  │  │     │  │  │  ├─ 📄no-lone-blocks.js
│  │  │  │     │  │  │  ├─ 📄no-lonely-if.js
│  │  │  │     │  │  │  ├─ 📄no-loop-func.js
│  │  │  │     │  │  │  ├─ 📄no-loss-of-precision.js
│  │  │  │     │  │  │  ├─ 📄no-magic-numbers.js
│  │  │  │     │  │  │  ├─ 📄no-misleading-character-class.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-operators.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-requires.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-spaces-and-tabs.js
│  │  │  │     │  │  │  ├─ 📄no-multi-assign.js
│  │  │  │     │  │  │  ├─ 📄no-multi-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-multi-str.js
│  │  │  │     │  │  │  ├─ 📄no-multiple-empty-lines.js
│  │  │  │     │  │  │  ├─ 📄no-native-reassign.js
│  │  │  │     │  │  │  ├─ 📄no-negated-condition.js
│  │  │  │     │  │  │  ├─ 📄no-negated-in-lhs.js
│  │  │  │     │  │  │  ├─ 📄no-nested-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-new-func.js
│  │  │  │     │  │  │  ├─ 📄no-new-native-nonconstructor.js
│  │  │  │     │  │  │  ├─ 📄no-new-object.js
│  │  │  │     │  │  │  ├─ 📄no-new-require.js
│  │  │  │     │  │  │  ├─ 📄no-new-symbol.js
│  │  │  │     │  │  │  ├─ 📄no-new-wrappers.js
│  │  │  │     │  │  │  ├─ 📄no-new.js
│  │  │  │     │  │  │  ├─ 📄no-nonoctal-decimal-escape.js
│  │  │  │     │  │  │  ├─ 📄no-obj-calls.js
│  │  │  │     │  │  │  ├─ 📄no-object-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-octal-escape.js
│  │  │  │     │  │  │  ├─ 📄no-octal.js
│  │  │  │     │  │  │  ├─ 📄no-param-reassign.js
│  │  │  │     │  │  │  ├─ 📄no-path-concat.js
│  │  │  │     │  │  │  ├─ 📄no-plusplus.js
│  │  │  │     │  │  │  ├─ 📄no-process-env.js
│  │  │  │     │  │  │  ├─ 📄no-process-exit.js
│  │  │  │     │  │  │  ├─ 📄no-promise-executor-return.js
│  │  │  │     │  │  │  ├─ 📄no-proto.js
│  │  │  │     │  │  │  ├─ 📄no-prototype-builtins.js
│  │  │  │     │  │  │  ├─ 📄no-redeclare.js
│  │  │  │     │  │  │  ├─ 📄no-regex-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-exports.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-globals.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-imports.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-modules.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-properties.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-syntax.js
│  │  │  │     │  │  │  ├─ 📄no-return-assign.js
│  │  │  │     │  │  │  ├─ 📄no-return-await.js
│  │  │  │     │  │  │  ├─ 📄no-script-url.js
│  │  │  │     │  │  │  ├─ 📄no-self-assign.js
│  │  │  │     │  │  │  ├─ 📄no-self-compare.js
│  │  │  │     │  │  │  ├─ 📄no-sequences.js
│  │  │  │     │  │  │  ├─ 📄no-setter-return.js
│  │  │  │     │  │  │  ├─ 📄no-shadow-restricted-names.js
│  │  │  │     │  │  │  ├─ 📄no-shadow.js
│  │  │  │     │  │  │  ├─ 📄no-spaced-func.js
│  │  │  │     │  │  │  ├─ 📄no-sparse-arrays.js
│  │  │  │     │  │  │  ├─ 📄no-sync.js
│  │  │  │     │  │  │  ├─ 📄no-tabs.js
│  │  │  │     │  │  │  ├─ 📄no-template-curly-in-string.js
│  │  │  │     │  │  │  ├─ 📄no-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-this-before-super.js
│  │  │  │     │  │  │  ├─ 📄no-throw-literal.js
│  │  │  │     │  │  │  ├─ 📄no-trailing-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-undef-init.js
│  │  │  │     │  │  │  ├─ 📄no-undef.js
│  │  │  │     │  │  │  ├─ 📄no-undefined.js
│  │  │  │     │  │  │  ├─ 📄no-underscore-dangle.js
│  │  │  │     │  │  │  ├─ 📄no-unexpected-multiline.js
│  │  │  │     │  │  │  ├─ 📄no-unmodified-loop-condition.js
│  │  │  │     │  │  │  ├─ 📄no-unneeded-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-unreachable-loop.js
│  │  │  │     │  │  │  ├─ 📄no-unreachable.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-finally.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-negation.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-optional-chaining.js
│  │  │  │     │  │  │  ├─ 📄no-unused-expressions.js
│  │  │  │     │  │  │  ├─ 📄no-unused-labels.js
│  │  │  │     │  │  │  ├─ 📄no-unused-private-class-members.js
│  │  │  │     │  │  │  ├─ 📄no-unused-vars.js
│  │  │  │     │  │  │  ├─ 📄no-use-before-define.js
│  │  │  │     │  │  │  ├─ 📄no-useless-assignment.js
│  │  │  │     │  │  │  ├─ 📄no-useless-backreference.js
│  │  │  │     │  │  │  ├─ 📄no-useless-call.js
│  │  │  │     │  │  │  ├─ 📄no-useless-catch.js
│  │  │  │     │  │  │  ├─ 📄no-useless-computed-key.js
│  │  │  │     │  │  │  ├─ 📄no-useless-concat.js
│  │  │  │     │  │  │  ├─ 📄no-useless-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-useless-escape.js
│  │  │  │     │  │  │  ├─ 📄no-useless-rename.js
│  │  │  │     │  │  │  ├─ 📄no-useless-return.js
│  │  │  │     │  │  │  ├─ 📄no-var.js
│  │  │  │     │  │  │  ├─ 📄no-void.js
│  │  │  │     │  │  │  ├─ 📄no-warning-comments.js
│  │  │  │     │  │  │  ├─ 📄no-whitespace-before-property.js
│  │  │  │     │  │  │  ├─ 📄no-with.js
│  │  │  │     │  │  │  ├─ 📄nonblock-statement-body-position.js
│  │  │  │     │  │  │  ├─ 📄object-curly-newline.js
│  │  │  │     │  │  │  ├─ 📄object-curly-spacing.js
│  │  │  │     │  │  │  ├─ 📄object-property-newline.js
│  │  │  │     │  │  │  ├─ 📄object-shorthand.js
│  │  │  │     │  │  │  ├─ 📄one-var-declaration-per-line.js
│  │  │  │     │  │  │  ├─ 📄one-var.js
│  │  │  │     │  │  │  ├─ 📄operator-assignment.js
│  │  │  │     │  │  │  ├─ 📄operator-linebreak.js
│  │  │  │     │  │  │  ├─ 📄padded-blocks.js
│  │  │  │     │  │  │  ├─ 📄padding-line-between-statements.js
│  │  │  │     │  │  │  ├─ 📄prefer-arrow-callback.js
│  │  │  │     │  │  │  ├─ 📄prefer-const.js
│  │  │  │     │  │  │  ├─ 📄prefer-destructuring.js
│  │  │  │     │  │  │  ├─ 📄prefer-exponentiation-operator.js
│  │  │  │     │  │  │  ├─ 📄prefer-named-capture-group.js
│  │  │  │     │  │  │  ├─ 📄prefer-numeric-literals.js
│  │  │  │     │  │  │  ├─ 📄prefer-object-has-own.js
│  │  │  │     │  │  │  ├─ 📄prefer-object-spread.js
│  │  │  │     │  │  │  ├─ 📄prefer-promise-reject-errors.js
│  │  │  │     │  │  │  ├─ 📄prefer-reflect.js
│  │  │  │     │  │  │  ├─ 📄prefer-regex-literals.js
│  │  │  │     │  │  │  ├─ 📄prefer-rest-params.js
│  │  │  │     │  │  │  ├─ 📄prefer-spread.js
│  │  │  │     │  │  │  ├─ 📄prefer-template.js
│  │  │  │     │  │  │  ├─ 📄quote-props.js
│  │  │  │     │  │  │  ├─ 📄quotes.js
│  │  │  │     │  │  │  ├─ 📄radix.js
│  │  │  │     │  │  │  ├─ 📄require-atomic-updates.js
│  │  │  │     │  │  │  ├─ 📄require-await.js
│  │  │  │     │  │  │  ├─ 📄require-unicode-regexp.js
│  │  │  │     │  │  │  ├─ 📄require-yield.js
│  │  │  │     │  │  │  ├─ 📄rest-spread-spacing.js
│  │  │  │     │  │  │  ├─ 📄semi-spacing.js
│  │  │  │     │  │  │  ├─ 📄semi-style.js
│  │  │  │     │  │  │  ├─ 📄semi.js
│  │  │  │     │  │  │  ├─ 📄sort-imports.js
│  │  │  │     │  │  │  ├─ 📄sort-keys.js
│  │  │  │     │  │  │  ├─ 📄sort-vars.js
│  │  │  │     │  │  │  ├─ 📄space-before-blocks.js
│  │  │  │     │  │  │  ├─ 📄space-before-function-paren.js
│  │  │  │     │  │  │  ├─ 📄space-in-parens.js
│  │  │  │     │  │  │  ├─ 📄space-infix-ops.js
│  │  │  │     │  │  │  ├─ 📄space-unary-ops.js
│  │  │  │     │  │  │  ├─ 📄spaced-comment.js
│  │  │  │     │  │  │  ├─ 📄strict.js
│  │  │  │     │  │  │  ├─ 📄switch-colon-spacing.js
│  │  │  │     │  │  │  ├─ 📄symbol-description.js
│  │  │  │     │  │  │  ├─ 📄template-curly-spacing.js
│  │  │  │     │  │  │  ├─ 📄template-tag-spacing.js
│  │  │  │     │  │  │  ├─ 📄unicode-bom.js
│  │  │  │     │  │  │  ├─ 📄use-isnan.js
│  │  │  │     │  │  │  ├─ 📄valid-typeof.js
│  │  │  │     │  │  │  ├─ 📄vars-on-top.js
│  │  │  │     │  │  │  ├─ 📄wrap-iife.js
│  │  │  │     │  │  │  ├─ 📄wrap-regex.js
│  │  │  │     │  │  │  ├─ 📄yield-star-spacing.js
│  │  │  │     │  │  │  └─ 📄yoda.js
│  │  │  │     │  │  ├─ 📁shared
│  │  │  │     │  │  │  ├─ 📄ajv.js
│  │  │  │     │  │  │  ├─ 📄ast-utils.js
│  │  │  │     │  │  │  ├─ 📄directives.js
│  │  │  │     │  │  │  ├─ 📄flags.js
│  │  │  │     │  │  │  ├─ 📄logging.js
│  │  │  │     │  │  │  ├─ 📄runtime-info.js
│  │  │  │     │  │  │  ├─ 📄serialization.js
│  │  │  │     │  │  │  ├─ 📄severity.js
│  │  │  │     │  │  │  ├─ 📄stats.js
│  │  │  │     │  │  │  ├─ 📄string-utils.js
│  │  │  │     │  │  │  ├─ 📄traverser.js
│  │  │  │     │  │  │  └─ 📄types.js
│  │  │  │     │  │  ├─ 📄api.js
│  │  │  │     │  │  ├─ 📄cli.js
│  │  │  │     │  │  ├─ 📄options.js
│  │  │  │     │  │  └─ 📄unsupported-api.js
│  │  │  │     │  ├─ 📁messages
│  │  │  │     │  │  ├─ 📄all-files-ignored.js
│  │  │  │     │  │  ├─ 📄all-matched-files-ignored.js
│  │  │  │     │  │  ├─ 📄config-file-missing.js
│  │  │  │     │  │  ├─ 📄eslintrc-incompat.js
│  │  │  │     │  │  ├─ 📄eslintrc-plugins.js
│  │  │  │     │  │  ├─ 📄extend-config-missing.js
│  │  │  │     │  │  ├─ 📄failed-to-read-json.js
│  │  │  │     │  │  ├─ 📄file-not-found.js
│  │  │  │     │  │  ├─ 📄invalid-rule-options.js
│  │  │  │     │  │  ├─ 📄invalid-rule-severity.js
│  │  │  │     │  │  ├─ 📄no-config-found.js
│  │  │  │     │  │  ├─ 📄plugin-conflict.js
│  │  │  │     │  │  ├─ 📄plugin-invalid.js
│  │  │  │     │  │  ├─ 📄plugin-missing.js
│  │  │  │     │  │  ├─ 📄print-config-with-directory-path.js
│  │  │  │     │  │  ├─ 📄shared.js
│  │  │  │     │  │  └─ 📄whitespace-found.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁eslint-plugin-react-hooks
│  │  │  │        ├─ 📁cjs
│  │  │  │        │  ├─ 📄eslint-plugin-react-hooks.development.js
│  │  │  │        │  └─ 📄eslint-plugin-react-hooks.production.js
│  │  │  │        ├─ 📁node_modules
│  │  │  │        │  └─ 📁.bin
│  │  │  │        │     ├─ 📄eslint
│  │  │  │        │     ├─ 📄eslint.CMD
│  │  │  │        │     └─ 📄eslint.ps1
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁eslint-plugin-react-refresh@0.4.9_eslint@9.9.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁eslint
│  │  │  │     │  ├─ 📁bin
│  │  │  │     │  │  └─ 📄eslint.js
│  │  │  │     │  ├─ 📁conf
│  │  │  │     │  │  ├─ 📄default-cli-options.js
│  │  │  │     │  │  ├─ 📄ecma-version.js
│  │  │  │     │  │  ├─ 📄globals.js
│  │  │  │     │  │  ├─ 📄replacements.json
│  │  │  │     │  │  └─ 📄rule-type-list.json
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📁cli-engine
│  │  │  │     │  │  │  ├─ 📁formatters
│  │  │  │     │  │  │  │  ├─ 📄formatters-meta.json
│  │  │  │     │  │  │  │  ├─ 📄html.js
│  │  │  │     │  │  │  │  ├─ 📄json-with-metadata.js
│  │  │  │     │  │  │  │  ├─ 📄json.js
│  │  │  │     │  │  │  │  └─ 📄stylish.js
│  │  │  │     │  │  │  ├─ 📄cli-engine.js
│  │  │  │     │  │  │  ├─ 📄file-enumerator.js
│  │  │  │     │  │  │  ├─ 📄hash.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄lint-result-cache.js
│  │  │  │     │  │  │  └─ 📄load-rules.js
│  │  │  │     │  │  ├─ 📁config
│  │  │  │     │  │  │  ├─ 📄default-config.js
│  │  │  │     │  │  │  ├─ 📄flat-config-array.js
│  │  │  │     │  │  │  ├─ 📄flat-config-helpers.js
│  │  │  │     │  │  │  ├─ 📄flat-config-schema.js
│  │  │  │     │  │  │  └─ 📄rule-validator.js
│  │  │  │     │  │  ├─ 📁eslint
│  │  │  │     │  │  │  ├─ 📄eslint-helpers.js
│  │  │  │     │  │  │  ├─ 📄eslint.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄legacy-eslint.js
│  │  │  │     │  │  ├─ 📁languages
│  │  │  │     │  │  │  └─ 📁js
│  │  │  │     │  │  │     ├─ 📁source-code
│  │  │  │     │  │  │     │  ├─ 📁token-store
│  │  │  │     │  │  │     │  │  ├─ 📄backward-token-comment-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄backward-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄cursors.js
│  │  │  │     │  │  │     │  │  ├─ 📄decorative-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄filter-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄forward-token-comment-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄forward-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  │     │  │  ├─ 📄limit-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄padded-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄skip-cursor.js
│  │  │  │     │  │  │     │  │  └─ 📄utils.js
│  │  │  │     │  │  │     │  ├─ 📄index.js
│  │  │  │     │  │  │     │  └─ 📄source-code.js
│  │  │  │     │  │  │     ├─ 📄index.js
│  │  │  │     │  │  │     └─ 📄validate-language-options.js
│  │  │  │     │  │  ├─ 📁linter
│  │  │  │     │  │  │  ├─ 📁code-path-analysis
│  │  │  │     │  │  │  │  ├─ 📄code-path-analyzer.js
│  │  │  │     │  │  │  │  ├─ 📄code-path-segment.js
│  │  │  │     │  │  │  │  ├─ 📄code-path-state.js
│  │  │  │     │  │  │  │  ├─ 📄code-path.js
│  │  │  │     │  │  │  │  ├─ 📄debug-helpers.js
│  │  │  │     │  │  │  │  ├─ 📄fork-context.js
│  │  │  │     │  │  │  │  └─ 📄id-generator.js
│  │  │  │     │  │  │  ├─ 📄apply-disable-directives.js
│  │  │  │     │  │  │  ├─ 📄config-comment-parser.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄interpolate.js
│  │  │  │     │  │  │  ├─ 📄linter.js
│  │  │  │     │  │  │  ├─ 📄node-event-generator.js
│  │  │  │     │  │  │  ├─ 📄report-translator.js
│  │  │  │     │  │  │  ├─ 📄rule-fixer.js
│  │  │  │     │  │  │  ├─ 📄rules.js
│  │  │  │     │  │  │  ├─ 📄safe-emitter.js
│  │  │  │     │  │  │  ├─ 📄source-code-fixer.js
│  │  │  │     │  │  │  ├─ 📄timing.js
│  │  │  │     │  │  │  └─ 📄vfile.js
│  │  │  │     │  │  ├─ 📁rule-tester
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄rule-tester.js
│  │  │  │     │  │  ├─ 📁rules
│  │  │  │     │  │  │  ├─ 📁utils
│  │  │  │     │  │  │  │  ├─ 📁unicode
│  │  │  │     │  │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-combining-character.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-emoji-modifier.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-regional-indicator-symbol.js
│  │  │  │     │  │  │  │  │  └─ 📄is-surrogate-pair.js
│  │  │  │     │  │  │  │  ├─ 📄ast-utils.js
│  │  │  │     │  │  │  │  ├─ 📄char-source.js
│  │  │  │     │  │  │  │  ├─ 📄fix-tracker.js
│  │  │  │     │  │  │  │  ├─ 📄keywords.js
│  │  │  │     │  │  │  │  ├─ 📄lazy-loading-rule-map.js
│  │  │  │     │  │  │  │  └─ 📄regular-expressions.js
│  │  │  │     │  │  │  ├─ 📄accessor-pairs.js
│  │  │  │     │  │  │  ├─ 📄array-bracket-newline.js
│  │  │  │     │  │  │  ├─ 📄array-bracket-spacing.js
│  │  │  │     │  │  │  ├─ 📄array-callback-return.js
│  │  │  │     │  │  │  ├─ 📄array-element-newline.js
│  │  │  │     │  │  │  ├─ 📄arrow-body-style.js
│  │  │  │     │  │  │  ├─ 📄arrow-parens.js
│  │  │  │     │  │  │  ├─ 📄arrow-spacing.js
│  │  │  │     │  │  │  ├─ 📄block-scoped-var.js
│  │  │  │     │  │  │  ├─ 📄block-spacing.js
│  │  │  │     │  │  │  ├─ 📄brace-style.js
│  │  │  │     │  │  │  ├─ 📄callback-return.js
│  │  │  │     │  │  │  ├─ 📄camelcase.js
│  │  │  │     │  │  │  ├─ 📄capitalized-comments.js
│  │  │  │     │  │  │  ├─ 📄class-methods-use-this.js
│  │  │  │     │  │  │  ├─ 📄comma-dangle.js
│  │  │  │     │  │  │  ├─ 📄comma-spacing.js
│  │  │  │     │  │  │  ├─ 📄comma-style.js
│  │  │  │     │  │  │  ├─ 📄complexity.js
│  │  │  │     │  │  │  ├─ 📄computed-property-spacing.js
│  │  │  │     │  │  │  ├─ 📄consistent-return.js
│  │  │  │     │  │  │  ├─ 📄consistent-this.js
│  │  │  │     │  │  │  ├─ 📄constructor-super.js
│  │  │  │     │  │  │  ├─ 📄curly.js
│  │  │  │     │  │  │  ├─ 📄default-case-last.js
│  │  │  │     │  │  │  ├─ 📄default-case.js
│  │  │  │     │  │  │  ├─ 📄default-param-last.js
│  │  │  │     │  │  │  ├─ 📄dot-location.js
│  │  │  │     │  │  │  ├─ 📄dot-notation.js
│  │  │  │     │  │  │  ├─ 📄eol-last.js
│  │  │  │     │  │  │  ├─ 📄eqeqeq.js
│  │  │  │     │  │  │  ├─ 📄for-direction.js
│  │  │  │     │  │  │  ├─ 📄func-call-spacing.js
│  │  │  │     │  │  │  ├─ 📄func-name-matching.js
│  │  │  │     │  │  │  ├─ 📄func-names.js
│  │  │  │     │  │  │  ├─ 📄func-style.js
│  │  │  │     │  │  │  ├─ 📄function-call-argument-newline.js
│  │  │  │     │  │  │  ├─ 📄function-paren-newline.js
│  │  │  │     │  │  │  ├─ 📄generator-star-spacing.js
│  │  │  │     │  │  │  ├─ 📄getter-return.js
│  │  │  │     │  │  │  ├─ 📄global-require.js
│  │  │  │     │  │  │  ├─ 📄grouped-accessor-pairs.js
│  │  │  │     │  │  │  ├─ 📄guard-for-in.js
│  │  │  │     │  │  │  ├─ 📄handle-callback-err.js
│  │  │  │     │  │  │  ├─ 📄id-blacklist.js
│  │  │  │     │  │  │  ├─ 📄id-denylist.js
│  │  │  │     │  │  │  ├─ 📄id-length.js
│  │  │  │     │  │  │  ├─ 📄id-match.js
│  │  │  │     │  │  │  ├─ 📄implicit-arrow-linebreak.js
│  │  │  │     │  │  │  ├─ 📄indent-legacy.js
│  │  │  │     │  │  │  ├─ 📄indent.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄init-declarations.js
│  │  │  │     │  │  │  ├─ 📄jsx-quotes.js
│  │  │  │     │  │  │  ├─ 📄key-spacing.js
│  │  │  │     │  │  │  ├─ 📄keyword-spacing.js
│  │  │  │     │  │  │  ├─ 📄line-comment-position.js
│  │  │  │     │  │  │  ├─ 📄linebreak-style.js
│  │  │  │     │  │  │  ├─ 📄lines-around-comment.js
│  │  │  │     │  │  │  ├─ 📄lines-around-directive.js
│  │  │  │     │  │  │  ├─ 📄lines-between-class-members.js
│  │  │  │     │  │  │  ├─ 📄logical-assignment-operators.js
│  │  │  │     │  │  │  ├─ 📄max-classes-per-file.js
│  │  │  │     │  │  │  ├─ 📄max-depth.js
│  │  │  │     │  │  │  ├─ 📄max-len.js
│  │  │  │     │  │  │  ├─ 📄max-lines-per-function.js
│  │  │  │     │  │  │  ├─ 📄max-lines.js
│  │  │  │     │  │  │  ├─ 📄max-nested-callbacks.js
│  │  │  │     │  │  │  ├─ 📄max-params.js
│  │  │  │     │  │  │  ├─ 📄max-statements-per-line.js
│  │  │  │     │  │  │  ├─ 📄max-statements.js
│  │  │  │     │  │  │  ├─ 📄multiline-comment-style.js
│  │  │  │     │  │  │  ├─ 📄multiline-ternary.js
│  │  │  │     │  │  │  ├─ 📄new-cap.js
│  │  │  │     │  │  │  ├─ 📄new-parens.js
│  │  │  │     │  │  │  ├─ 📄newline-after-var.js
│  │  │  │     │  │  │  ├─ 📄newline-before-return.js
│  │  │  │     │  │  │  ├─ 📄newline-per-chained-call.js
│  │  │  │     │  │  │  ├─ 📄no-alert.js
│  │  │  │     │  │  │  ├─ 📄no-array-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-async-promise-executor.js
│  │  │  │     │  │  │  ├─ 📄no-await-in-loop.js
│  │  │  │     │  │  │  ├─ 📄no-bitwise.js
│  │  │  │     │  │  │  ├─ 📄no-buffer-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-caller.js
│  │  │  │     │  │  │  ├─ 📄no-case-declarations.js
│  │  │  │     │  │  │  ├─ 📄no-catch-shadow.js
│  │  │  │     │  │  │  ├─ 📄no-class-assign.js
│  │  │  │     │  │  │  ├─ 📄no-compare-neg-zero.js
│  │  │  │     │  │  │  ├─ 📄no-cond-assign.js
│  │  │  │     │  │  │  ├─ 📄no-confusing-arrow.js
│  │  │  │     │  │  │  ├─ 📄no-console.js
│  │  │  │     │  │  │  ├─ 📄no-const-assign.js
│  │  │  │     │  │  │  ├─ 📄no-constant-binary-expression.js
│  │  │  │     │  │  │  ├─ 📄no-constant-condition.js
│  │  │  │     │  │  │  ├─ 📄no-constructor-return.js
│  │  │  │     │  │  │  ├─ 📄no-continue.js
│  │  │  │     │  │  │  ├─ 📄no-control-regex.js
│  │  │  │     │  │  │  ├─ 📄no-debugger.js
│  │  │  │     │  │  │  ├─ 📄no-delete-var.js
│  │  │  │     │  │  │  ├─ 📄no-div-regex.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-args.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-class-members.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-else-if.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-keys.js
│  │  │  │     │  │  │  ├─ 📄no-duplicate-case.js
│  │  │  │     │  │  │  ├─ 📄no-duplicate-imports.js
│  │  │  │     │  │  │  ├─ 📄no-else-return.js
│  │  │  │     │  │  │  ├─ 📄no-empty-character-class.js
│  │  │  │     │  │  │  ├─ 📄no-empty-function.js
│  │  │  │     │  │  │  ├─ 📄no-empty-pattern.js
│  │  │  │     │  │  │  ├─ 📄no-empty-static-block.js
│  │  │  │     │  │  │  ├─ 📄no-empty.js
│  │  │  │     │  │  │  ├─ 📄no-eq-null.js
│  │  │  │     │  │  │  ├─ 📄no-eval.js
│  │  │  │     │  │  │  ├─ 📄no-ex-assign.js
│  │  │  │     │  │  │  ├─ 📄no-extend-native.js
│  │  │  │     │  │  │  ├─ 📄no-extra-bind.js
│  │  │  │     │  │  │  ├─ 📄no-extra-boolean-cast.js
│  │  │  │     │  │  │  ├─ 📄no-extra-label.js
│  │  │  │     │  │  │  ├─ 📄no-extra-parens.js
│  │  │  │     │  │  │  ├─ 📄no-extra-semi.js
│  │  │  │     │  │  │  ├─ 📄no-fallthrough.js
│  │  │  │     │  │  │  ├─ 📄no-floating-decimal.js
│  │  │  │     │  │  │  ├─ 📄no-func-assign.js
│  │  │  │     │  │  │  ├─ 📄no-global-assign.js
│  │  │  │     │  │  │  ├─ 📄no-implicit-coercion.js
│  │  │  │     │  │  │  ├─ 📄no-implicit-globals.js
│  │  │  │     │  │  │  ├─ 📄no-implied-eval.js
│  │  │  │     │  │  │  ├─ 📄no-import-assign.js
│  │  │  │     │  │  │  ├─ 📄no-inline-comments.js
│  │  │  │     │  │  │  ├─ 📄no-inner-declarations.js
│  │  │  │     │  │  │  ├─ 📄no-invalid-regexp.js
│  │  │  │     │  │  │  ├─ 📄no-invalid-this.js
│  │  │  │     │  │  │  ├─ 📄no-irregular-whitespace.js
│  │  │  │     │  │  │  ├─ 📄no-iterator.js
│  │  │  │     │  │  │  ├─ 📄no-label-var.js
│  │  │  │     │  │  │  ├─ 📄no-labels.js
│  │  │  │     │  │  │  ├─ 📄no-lone-blocks.js
│  │  │  │     │  │  │  ├─ 📄no-lonely-if.js
│  │  │  │     │  │  │  ├─ 📄no-loop-func.js
│  │  │  │     │  │  │  ├─ 📄no-loss-of-precision.js
│  │  │  │     │  │  │  ├─ 📄no-magic-numbers.js
│  │  │  │     │  │  │  ├─ 📄no-misleading-character-class.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-operators.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-requires.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-spaces-and-tabs.js
│  │  │  │     │  │  │  ├─ 📄no-multi-assign.js
│  │  │  │     │  │  │  ├─ 📄no-multi-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-multi-str.js
│  │  │  │     │  │  │  ├─ 📄no-multiple-empty-lines.js
│  │  │  │     │  │  │  ├─ 📄no-native-reassign.js
│  │  │  │     │  │  │  ├─ 📄no-negated-condition.js
│  │  │  │     │  │  │  ├─ 📄no-negated-in-lhs.js
│  │  │  │     │  │  │  ├─ 📄no-nested-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-new-func.js
│  │  │  │     │  │  │  ├─ 📄no-new-native-nonconstructor.js
│  │  │  │     │  │  │  ├─ 📄no-new-object.js
│  │  │  │     │  │  │  ├─ 📄no-new-require.js
│  │  │  │     │  │  │  ├─ 📄no-new-symbol.js
│  │  │  │     │  │  │  ├─ 📄no-new-wrappers.js
│  │  │  │     │  │  │  ├─ 📄no-new.js
│  │  │  │     │  │  │  ├─ 📄no-nonoctal-decimal-escape.js
│  │  │  │     │  │  │  ├─ 📄no-obj-calls.js
│  │  │  │     │  │  │  ├─ 📄no-object-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-octal-escape.js
│  │  │  │     │  │  │  ├─ 📄no-octal.js
│  │  │  │     │  │  │  ├─ 📄no-param-reassign.js
│  │  │  │     │  │  │  ├─ 📄no-path-concat.js
│  │  │  │     │  │  │  ├─ 📄no-plusplus.js
│  │  │  │     │  │  │  ├─ 📄no-process-env.js
│  │  │  │     │  │  │  ├─ 📄no-process-exit.js
│  │  │  │     │  │  │  ├─ 📄no-promise-executor-return.js
│  │  │  │     │  │  │  ├─ 📄no-proto.js
│  │  │  │     │  │  │  ├─ 📄no-prototype-builtins.js
│  │  │  │     │  │  │  ├─ 📄no-redeclare.js
│  │  │  │     │  │  │  ├─ 📄no-regex-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-exports.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-globals.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-imports.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-modules.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-properties.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-syntax.js
│  │  │  │     │  │  │  ├─ 📄no-return-assign.js
│  │  │  │     │  │  │  ├─ 📄no-return-await.js
│  │  │  │     │  │  │  ├─ 📄no-script-url.js
│  │  │  │     │  │  │  ├─ 📄no-self-assign.js
│  │  │  │     │  │  │  ├─ 📄no-self-compare.js
│  │  │  │     │  │  │  ├─ 📄no-sequences.js
│  │  │  │     │  │  │  ├─ 📄no-setter-return.js
│  │  │  │     │  │  │  ├─ 📄no-shadow-restricted-names.js
│  │  │  │     │  │  │  ├─ 📄no-shadow.js
│  │  │  │     │  │  │  ├─ 📄no-spaced-func.js
│  │  │  │     │  │  │  ├─ 📄no-sparse-arrays.js
│  │  │  │     │  │  │  ├─ 📄no-sync.js
│  │  │  │     │  │  │  ├─ 📄no-tabs.js
│  │  │  │     │  │  │  ├─ 📄no-template-curly-in-string.js
│  │  │  │     │  │  │  ├─ 📄no-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-this-before-super.js
│  │  │  │     │  │  │  ├─ 📄no-throw-literal.js
│  │  │  │     │  │  │  ├─ 📄no-trailing-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-undef-init.js
│  │  │  │     │  │  │  ├─ 📄no-undef.js
│  │  │  │     │  │  │  ├─ 📄no-undefined.js
│  │  │  │     │  │  │  ├─ 📄no-underscore-dangle.js
│  │  │  │     │  │  │  ├─ 📄no-unexpected-multiline.js
│  │  │  │     │  │  │  ├─ 📄no-unmodified-loop-condition.js
│  │  │  │     │  │  │  ├─ 📄no-unneeded-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-unreachable-loop.js
│  │  │  │     │  │  │  ├─ 📄no-unreachable.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-finally.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-negation.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-optional-chaining.js
│  │  │  │     │  │  │  ├─ 📄no-unused-expressions.js
│  │  │  │     │  │  │  ├─ 📄no-unused-labels.js
│  │  │  │     │  │  │  ├─ 📄no-unused-private-class-members.js
│  │  │  │     │  │  │  ├─ 📄no-unused-vars.js
│  │  │  │     │  │  │  ├─ 📄no-use-before-define.js
│  │  │  │     │  │  │  ├─ 📄no-useless-assignment.js
│  │  │  │     │  │  │  ├─ 📄no-useless-backreference.js
│  │  │  │     │  │  │  ├─ 📄no-useless-call.js
│  │  │  │     │  │  │  ├─ 📄no-useless-catch.js
│  │  │  │     │  │  │  ├─ 📄no-useless-computed-key.js
│  │  │  │     │  │  │  ├─ 📄no-useless-concat.js
│  │  │  │     │  │  │  ├─ 📄no-useless-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-useless-escape.js
│  │  │  │     │  │  │  ├─ 📄no-useless-rename.js
│  │  │  │     │  │  │  ├─ 📄no-useless-return.js
│  │  │  │     │  │  │  ├─ 📄no-var.js
│  │  │  │     │  │  │  ├─ 📄no-void.js
│  │  │  │     │  │  │  ├─ 📄no-warning-comments.js
│  │  │  │     │  │  │  ├─ 📄no-whitespace-before-property.js
│  │  │  │     │  │  │  ├─ 📄no-with.js
│  │  │  │     │  │  │  ├─ 📄nonblock-statement-body-position.js
│  │  │  │     │  │  │  ├─ 📄object-curly-newline.js
│  │  │  │     │  │  │  ├─ 📄object-curly-spacing.js
│  │  │  │     │  │  │  ├─ 📄object-property-newline.js
│  │  │  │     │  │  │  ├─ 📄object-shorthand.js
│  │  │  │     │  │  │  ├─ 📄one-var-declaration-per-line.js
│  │  │  │     │  │  │  ├─ 📄one-var.js
│  │  │  │     │  │  │  ├─ 📄operator-assignment.js
│  │  │  │     │  │  │  ├─ 📄operator-linebreak.js
│  │  │  │     │  │  │  ├─ 📄padded-blocks.js
│  │  │  │     │  │  │  ├─ 📄padding-line-between-statements.js
│  │  │  │     │  │  │  ├─ 📄prefer-arrow-callback.js
│  │  │  │     │  │  │  ├─ 📄prefer-const.js
│  │  │  │     │  │  │  ├─ 📄prefer-destructuring.js
│  │  │  │     │  │  │  ├─ 📄prefer-exponentiation-operator.js
│  │  │  │     │  │  │  ├─ 📄prefer-named-capture-group.js
│  │  │  │     │  │  │  ├─ 📄prefer-numeric-literals.js
│  │  │  │     │  │  │  ├─ 📄prefer-object-has-own.js
│  │  │  │     │  │  │  ├─ 📄prefer-object-spread.js
│  │  │  │     │  │  │  ├─ 📄prefer-promise-reject-errors.js
│  │  │  │     │  │  │  ├─ 📄prefer-reflect.js
│  │  │  │     │  │  │  ├─ 📄prefer-regex-literals.js
│  │  │  │     │  │  │  ├─ 📄prefer-rest-params.js
│  │  │  │     │  │  │  ├─ 📄prefer-spread.js
│  │  │  │     │  │  │  ├─ 📄prefer-template.js
│  │  │  │     │  │  │  ├─ 📄quote-props.js
│  │  │  │     │  │  │  ├─ 📄quotes.js
│  │  │  │     │  │  │  ├─ 📄radix.js
│  │  │  │     │  │  │  ├─ 📄require-atomic-updates.js
│  │  │  │     │  │  │  ├─ 📄require-await.js
│  │  │  │     │  │  │  ├─ 📄require-unicode-regexp.js
│  │  │  │     │  │  │  ├─ 📄require-yield.js
│  │  │  │     │  │  │  ├─ 📄rest-spread-spacing.js
│  │  │  │     │  │  │  ├─ 📄semi-spacing.js
│  │  │  │     │  │  │  ├─ 📄semi-style.js
│  │  │  │     │  │  │  ├─ 📄semi.js
│  │  │  │     │  │  │  ├─ 📄sort-imports.js
│  │  │  │     │  │  │  ├─ 📄sort-keys.js
│  │  │  │     │  │  │  ├─ 📄sort-vars.js
│  │  │  │     │  │  │  ├─ 📄space-before-blocks.js
│  │  │  │     │  │  │  ├─ 📄space-before-function-paren.js
│  │  │  │     │  │  │  ├─ 📄space-in-parens.js
│  │  │  │     │  │  │  ├─ 📄space-infix-ops.js
│  │  │  │     │  │  │  ├─ 📄space-unary-ops.js
│  │  │  │     │  │  │  ├─ 📄spaced-comment.js
│  │  │  │     │  │  │  ├─ 📄strict.js
│  │  │  │     │  │  │  ├─ 📄switch-colon-spacing.js
│  │  │  │     │  │  │  ├─ 📄symbol-description.js
│  │  │  │     │  │  │  ├─ 📄template-curly-spacing.js
│  │  │  │     │  │  │  ├─ 📄template-tag-spacing.js
│  │  │  │     │  │  │  ├─ 📄unicode-bom.js
│  │  │  │     │  │  │  ├─ 📄use-isnan.js
│  │  │  │     │  │  │  ├─ 📄valid-typeof.js
│  │  │  │     │  │  │  ├─ 📄vars-on-top.js
│  │  │  │     │  │  │  ├─ 📄wrap-iife.js
│  │  │  │     │  │  │  ├─ 📄wrap-regex.js
│  │  │  │     │  │  │  ├─ 📄yield-star-spacing.js
│  │  │  │     │  │  │  └─ 📄yoda.js
│  │  │  │     │  │  ├─ 📁shared
│  │  │  │     │  │  │  ├─ 📄ajv.js
│  │  │  │     │  │  │  ├─ 📄ast-utils.js
│  │  │  │     │  │  │  ├─ 📄directives.js
│  │  │  │     │  │  │  ├─ 📄flags.js
│  │  │  │     │  │  │  ├─ 📄logging.js
│  │  │  │     │  │  │  ├─ 📄runtime-info.js
│  │  │  │     │  │  │  ├─ 📄serialization.js
│  │  │  │     │  │  │  ├─ 📄severity.js
│  │  │  │     │  │  │  ├─ 📄stats.js
│  │  │  │     │  │  │  ├─ 📄string-utils.js
│  │  │  │     │  │  │  ├─ 📄traverser.js
│  │  │  │     │  │  │  └─ 📄types.js
│  │  │  │     │  │  ├─ 📄api.js
│  │  │  │     │  │  ├─ 📄cli.js
│  │  │  │     │  │  ├─ 📄options.js
│  │  │  │     │  │  └─ 📄unsupported-api.js
│  │  │  │     │  ├─ 📁messages
│  │  │  │     │  │  ├─ 📄all-files-ignored.js
│  │  │  │     │  │  ├─ 📄all-matched-files-ignored.js
│  │  │  │     │  │  ├─ 📄config-file-missing.js
│  │  │  │     │  │  ├─ 📄eslintrc-incompat.js
│  │  │  │     │  │  ├─ 📄eslintrc-plugins.js
│  │  │  │     │  │  ├─ 📄extend-config-missing.js
│  │  │  │     │  │  ├─ 📄failed-to-read-json.js
│  │  │  │     │  │  ├─ 📄file-not-found.js
│  │  │  │     │  │  ├─ 📄invalid-rule-options.js
│  │  │  │     │  │  ├─ 📄invalid-rule-severity.js
│  │  │  │     │  │  ├─ 📄no-config-found.js
│  │  │  │     │  │  ├─ 📄plugin-conflict.js
│  │  │  │     │  │  ├─ 📄plugin-invalid.js
│  │  │  │     │  │  ├─ 📄plugin-missing.js
│  │  │  │     │  │  ├─ 📄print-config-with-directory-path.js
│  │  │  │     │  │  ├─ 📄shared.js
│  │  │  │     │  │  └─ 📄whitespace-found.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁eslint-plugin-react-refresh
│  │  │  │        ├─ 📁node_modules
│  │  │  │        │  └─ 📁.bin
│  │  │  │        │     ├─ 📄eslint
│  │  │  │        │     ├─ 📄eslint.CMD
│  │  │  │        │     └─ 📄eslint.ps1
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁eslint-scope@8.0.2
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁eslint-scope
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  └─ 📄eslint-scope.cjs
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄definition.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄pattern-visitor.js
│  │  │  │     │  │  ├─ 📄reference.js
│  │  │  │     │  │  ├─ 📄referencer.js
│  │  │  │     │  │  ├─ 📄scope-manager.js
│  │  │  │     │  │  ├─ 📄scope.js
│  │  │  │     │  │  ├─ 📄variable.js
│  │  │  │     │  │  └─ 📄version.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁esrecurse
│  │  │  │     │  ├─ 📄.babelrc
│  │  │  │     │  ├─ 📄esrecurse.js
│  │  │  │     │  ├─ 📄gulpfile.babel.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁estraverse
│  │  │  │        ├─ 📄.jshintrc
│  │  │  │        ├─ 📄estraverse.js
│  │  │  │        ├─ 📄gulpfile.js
│  │  │  │        ├─ 📄LICENSE.BSD
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁eslint-visitor-keys@3.4.3
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁eslint-visitor-keys
│  │  │  │        ├─ 📁dist
│  │  │  │        │  ├─ 📄eslint-visitor-keys.cjs
│  │  │  │        │  ├─ 📄eslint-visitor-keys.d.cts
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  └─ 📄visitor-keys.d.ts
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  └─ 📄visitor-keys.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁eslint-visitor-keys@4.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁eslint-visitor-keys
│  │  │  │        ├─ 📁dist
│  │  │  │        │  ├─ 📄eslint-visitor-keys.cjs
│  │  │  │        │  ├─ 📄eslint-visitor-keys.d.cts
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  └─ 📄visitor-keys.d.ts
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  └─ 📄visitor-keys.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁eslint@9.9.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@eslint
│  │  │  │     │  ├─ 📁config-array
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁cjs
│  │  │  │     │  │  │  │  ├─ 📄index.cjs
│  │  │  │     │  │  │  │  ├─ 📄index.d.cts
│  │  │  │     │  │  │  │  └─ 📄types.ts
│  │  │  │     │  │  │  └─ 📁esm
│  │  │  │     │  │  │     ├─ 📄index.d.ts
│  │  │  │     │  │  │     ├─ 📄index.js
│  │  │  │     │  │  │     ├─ 📄types.d.ts
│  │  │  │     │  │  │     └─ 📄types.ts
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  ├─ 📁eslintrc
│  │  │  │     │  │  ├─ 📁conf
│  │  │  │     │  │  │  ├─ 📄config-schema.js
│  │  │  │     │  │  │  └─ 📄environments.js
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📄eslintrc-universal.cjs
│  │  │  │     │  │  │  ├─ 📄eslintrc-universal.cjs.map
│  │  │  │     │  │  │  ├─ 📄eslintrc.cjs
│  │  │  │     │  │  │  └─ 📄eslintrc.cjs.map
│  │  │  │     │  │  ├─ 📁lib
│  │  │  │     │  │  │  ├─ 📁config-array
│  │  │  │     │  │  │  │  ├─ 📄config-array.js
│  │  │  │     │  │  │  │  ├─ 📄config-dependency.js
│  │  │  │     │  │  │  │  ├─ 📄extracted-config.js
│  │  │  │     │  │  │  │  ├─ 📄ignore-pattern.js
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  └─ 📄override-tester.js
│  │  │  │     │  │  │  ├─ 📁shared
│  │  │  │     │  │  │  │  ├─ 📄ajv.js
│  │  │  │     │  │  │  │  ├─ 📄config-ops.js
│  │  │  │     │  │  │  │  ├─ 📄config-validator.js
│  │  │  │     │  │  │  │  ├─ 📄deprecation-warnings.js
│  │  │  │     │  │  │  │  ├─ 📄naming.js
│  │  │  │     │  │  │  │  ├─ 📄relative-module-resolver.js
│  │  │  │     │  │  │  │  └─ 📄types.js
│  │  │  │     │  │  │  ├─ 📄cascading-config-array-factory.js
│  │  │  │     │  │  │  ├─ 📄config-array-factory.js
│  │  │  │     │  │  │  ├─ 📄flat-compat.js
│  │  │  │     │  │  │  ├─ 📄index-universal.js
│  │  │  │     │  │  │  └─ 📄index.js
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄js-yaml
│  │  │  │     │  │  │     ├─ 📄js-yaml.CMD
│  │  │  │     │  │  │     └─ 📄js-yaml.ps1
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  ├─ 📄README.md
│  │  │  │     │  │  └─ 📄universal.js
│  │  │  │     │  └─ 📁js
│  │  │  │     │     ├─ 📁src
│  │  │  │     │     │  ├─ 📁configs
│  │  │  │     │     │  │  ├─ 📄eslint-all.js
│  │  │  │     │     │  │  └─ 📄eslint-recommended.js
│  │  │  │     │     │  └─ 📄index.js
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁@eslint-community
│  │  │  │     │  ├─ 📁eslint-utils
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄eslint
│  │  │  │     │  │  │     ├─ 📄eslint.CMD
│  │  │  │     │  │  │     └─ 📄eslint.ps1
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄index.js.map
│  │  │  │     │  │  ├─ 📄index.mjs
│  │  │  │     │  │  ├─ 📄index.mjs.map
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁regexpp
│  │  │  │     │     ├─ 📄index.d.ts
│  │  │  │     │     ├─ 📄index.js
│  │  │  │     │     ├─ 📄index.js.map
│  │  │  │     │     ├─ 📄index.mjs
│  │  │  │     │     ├─ 📄index.mjs.map
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁@humanwhocodes
│  │  │  │     │  ├─ 📁module-importer
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📄module-importer.cjs
│  │  │  │     │  │  │  ├─ 📄module-importer.d.cts
│  │  │  │     │  │  │  ├─ 📄module-importer.d.ts
│  │  │  │     │  │  │  └─ 📄module-importer.js
│  │  │  │     │  │  ├─ 📁src
│  │  │  │     │  │  │  ├─ 📄module-importer.cjs
│  │  │  │     │  │  │  └─ 📄module-importer.js
│  │  │  │     │  │  ├─ 📄CHANGELOG.md
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁retry
│  │  │  │     │     ├─ 📁dist
│  │  │  │     │     │  ├─ 📄retrier.cjs
│  │  │  │     │     │  ├─ 📄retrier.d.cts
│  │  │  │     │     │  ├─ 📄retrier.d.ts
│  │  │  │     │     │  ├─ 📄retrier.js
│  │  │  │     │     │  ├─ 📄retrier.min.js
│  │  │  │     │     │  └─ 📄retrier.mjs
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁@nodelib
│  │  │  │     │  └─ 📁fs.walk
│  │  │  │     │     ├─ 📁out
│  │  │  │     │     │  ├─ 📁providers
│  │  │  │     │     │  │  ├─ 📄async.d.ts
│  │  │  │     │     │  │  ├─ 📄async.js
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄stream.d.ts
│  │  │  │     │     │  │  ├─ 📄stream.js
│  │  │  │     │     │  │  ├─ 📄sync.d.ts
│  │  │  │     │     │  │  └─ 📄sync.js
│  │  │  │     │     │  ├─ 📁readers
│  │  │  │     │     │  │  ├─ 📄async.d.ts
│  │  │  │     │     │  │  ├─ 📄async.js
│  │  │  │     │     │  │  ├─ 📄common.d.ts
│  │  │  │     │     │  │  ├─ 📄common.js
│  │  │  │     │     │  │  ├─ 📄reader.d.ts
│  │  │  │     │     │  │  ├─ 📄reader.js
│  │  │  │     │     │  │  ├─ 📄sync.d.ts
│  │  │  │     │     │  │  └─ 📄sync.js
│  │  │  │     │     │  ├─ 📁types
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  └─ 📄index.js
│  │  │  │     │     │  ├─ 📄index.d.ts
│  │  │  │     │     │  ├─ 📄index.js
│  │  │  │     │     │  ├─ 📄settings.d.ts
│  │  │  │     │     │  └─ 📄settings.js
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁ajv
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  ├─ 📄ajv.bundle.js
│  │  │  │     │  │  ├─ 📄ajv.min.js
│  │  │  │     │  │  └─ 📄ajv.min.js.map
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📁compile
│  │  │  │     │  │  │  ├─ 📄async.js
│  │  │  │     │  │  │  ├─ 📄equal.js
│  │  │  │     │  │  │  ├─ 📄error_classes.js
│  │  │  │     │  │  │  ├─ 📄formats.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄resolve.js
│  │  │  │     │  │  │  ├─ 📄rules.js
│  │  │  │     │  │  │  ├─ 📄schema_obj.js
│  │  │  │     │  │  │  ├─ 📄ucs2length.js
│  │  │  │     │  │  │  └─ 📄util.js
│  │  │  │     │  │  ├─ 📁dot
│  │  │  │     │  │  │  ├─ 📄allOf.jst
│  │  │  │     │  │  │  ├─ 📄anyOf.jst
│  │  │  │     │  │  │  ├─ 📄coerce.def
│  │  │  │     │  │  │  ├─ 📄comment.jst
│  │  │  │     │  │  │  ├─ 📄const.jst
│  │  │  │     │  │  │  ├─ 📄contains.jst
│  │  │  │     │  │  │  ├─ 📄custom.jst
│  │  │  │     │  │  │  ├─ 📄defaults.def
│  │  │  │     │  │  │  ├─ 📄definitions.def
│  │  │  │     │  │  │  ├─ 📄dependencies.jst
│  │  │  │     │  │  │  ├─ 📄enum.jst
│  │  │  │     │  │  │  ├─ 📄errors.def
│  │  │  │     │  │  │  ├─ 📄format.jst
│  │  │  │     │  │  │  ├─ 📄if.jst
│  │  │  │     │  │  │  ├─ 📄items.jst
│  │  │  │     │  │  │  ├─ 📄missing.def
│  │  │  │     │  │  │  ├─ 📄multipleOf.jst
│  │  │  │     │  │  │  ├─ 📄not.jst
│  │  │  │     │  │  │  ├─ 📄oneOf.jst
│  │  │  │     │  │  │  ├─ 📄pattern.jst
│  │  │  │     │  │  │  ├─ 📄properties.jst
│  │  │  │     │  │  │  ├─ 📄propertyNames.jst
│  │  │  │     │  │  │  ├─ 📄ref.jst
│  │  │  │     │  │  │  ├─ 📄required.jst
│  │  │  │     │  │  │  ├─ 📄uniqueItems.jst
│  │  │  │     │  │  │  ├─ 📄validate.jst
│  │  │  │     │  │  │  ├─ 📄_limit.jst
│  │  │  │     │  │  │  ├─ 📄_limitItems.jst
│  │  │  │     │  │  │  ├─ 📄_limitLength.jst
│  │  │  │     │  │  │  └─ 📄_limitProperties.jst
│  │  │  │     │  │  ├─ 📁dotjs
│  │  │  │     │  │  │  ├─ 📄allOf.js
│  │  │  │     │  │  │  ├─ 📄anyOf.js
│  │  │  │     │  │  │  ├─ 📄comment.js
│  │  │  │     │  │  │  ├─ 📄const.js
│  │  │  │     │  │  │  ├─ 📄contains.js
│  │  │  │     │  │  │  ├─ 📄custom.js
│  │  │  │     │  │  │  ├─ 📄dependencies.js
│  │  │  │     │  │  │  ├─ 📄enum.js
│  │  │  │     │  │  │  ├─ 📄format.js
│  │  │  │     │  │  │  ├─ 📄if.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄items.js
│  │  │  │     │  │  │  ├─ 📄multipleOf.js
│  │  │  │     │  │  │  ├─ 📄not.js
│  │  │  │     │  │  │  ├─ 📄oneOf.js
│  │  │  │     │  │  │  ├─ 📄pattern.js
│  │  │  │     │  │  │  ├─ 📄properties.js
│  │  │  │     │  │  │  ├─ 📄propertyNames.js
│  │  │  │     │  │  │  ├─ 📄README.md
│  │  │  │     │  │  │  ├─ 📄ref.js
│  │  │  │     │  │  │  ├─ 📄required.js
│  │  │  │     │  │  │  ├─ 📄uniqueItems.js
│  │  │  │     │  │  │  ├─ 📄validate.js
│  │  │  │     │  │  │  ├─ 📄_limit.js
│  │  │  │     │  │  │  ├─ 📄_limitItems.js
│  │  │  │     │  │  │  ├─ 📄_limitLength.js
│  │  │  │     │  │  │  └─ 📄_limitProperties.js
│  │  │  │     │  │  ├─ 📁refs
│  │  │  │     │  │  │  ├─ 📄data.json
│  │  │  │     │  │  │  ├─ 📄json-schema-draft-04.json
│  │  │  │     │  │  │  ├─ 📄json-schema-draft-06.json
│  │  │  │     │  │  │  ├─ 📄json-schema-draft-07.json
│  │  │  │     │  │  │  └─ 📄json-schema-secure.json
│  │  │  │     │  │  ├─ 📄ajv.d.ts
│  │  │  │     │  │  ├─ 📄ajv.js
│  │  │  │     │  │  ├─ 📄cache.js
│  │  │  │     │  │  ├─ 📄data.js
│  │  │  │     │  │  ├─ 📄definition_schema.js
│  │  │  │     │  │  └─ 📄keyword.js
│  │  │  │     │  ├─ 📁scripts
│  │  │  │     │  │  ├─ 📄.eslintrc.yml
│  │  │  │     │  │  ├─ 📄bundle.js
│  │  │  │     │  │  ├─ 📄compile-dots.js
│  │  │  │     │  │  ├─ 📄info
│  │  │  │     │  │  ├─ 📄prepare-tests
│  │  │  │     │  │  ├─ 📄publish-built-version
│  │  │  │     │  │  └─ 📄travis-gh-pages
│  │  │  │     │  ├─ 📄.tonic_example.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁chalk
│  │  │  │     │  ├─ 📁source
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄templates.js
│  │  │  │     │  │  └─ 📄util.js
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     ├─ 📁cross-spawn
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📁util
│  │  │  │     │  │  │  ├─ 📄escape.js
│  │  │  │     │  │  │  ├─ 📄readShebang.js
│  │  │  │     │  │  │  └─ 📄resolveCommand.js
│  │  │  │     │  │  ├─ 📄enoent.js
│  │  │  │     │  │  └─ 📄parse.js
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄node-which
│  │  │  │     │  │     ├─ 📄node-which.CMD
│  │  │  │     │  │     └─ 📄node-which.ps1
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁debug
│  │  │  │     │  ├─ 📁src
│  │  │  │     │  │  ├─ 📄browser.js
│  │  │  │     │  │  ├─ 📄common.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄node.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁escape-string-regexp
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     ├─ 📁eslint
│  │  │  │     │  ├─ 📁bin
│  │  │  │     │  │  └─ 📄eslint.js
│  │  │  │     │  ├─ 📁conf
│  │  │  │     │  │  ├─ 📄default-cli-options.js
│  │  │  │     │  │  ├─ 📄ecma-version.js
│  │  │  │     │  │  ├─ 📄globals.js
│  │  │  │     │  │  ├─ 📄replacements.json
│  │  │  │     │  │  └─ 📄rule-type-list.json
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📁cli-engine
│  │  │  │     │  │  │  ├─ 📁formatters
│  │  │  │     │  │  │  │  ├─ 📄formatters-meta.json
│  │  │  │     │  │  │  │  ├─ 📄html.js
│  │  │  │     │  │  │  │  ├─ 📄json-with-metadata.js
│  │  │  │     │  │  │  │  ├─ 📄json.js
│  │  │  │     │  │  │  │  └─ 📄stylish.js
│  │  │  │     │  │  │  ├─ 📄cli-engine.js
│  │  │  │     │  │  │  ├─ 📄file-enumerator.js
│  │  │  │     │  │  │  ├─ 📄hash.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄lint-result-cache.js
│  │  │  │     │  │  │  └─ 📄load-rules.js
│  │  │  │     │  │  ├─ 📁config
│  │  │  │     │  │  │  ├─ 📄default-config.js
│  │  │  │     │  │  │  ├─ 📄flat-config-array.js
│  │  │  │     │  │  │  ├─ 📄flat-config-helpers.js
│  │  │  │     │  │  │  ├─ 📄flat-config-schema.js
│  │  │  │     │  │  │  └─ 📄rule-validator.js
│  │  │  │     │  │  ├─ 📁eslint
│  │  │  │     │  │  │  ├─ 📄eslint-helpers.js
│  │  │  │     │  │  │  ├─ 📄eslint.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄legacy-eslint.js
│  │  │  │     │  │  ├─ 📁languages
│  │  │  │     │  │  │  └─ 📁js
│  │  │  │     │  │  │     ├─ 📁source-code
│  │  │  │     │  │  │     │  ├─ 📁token-store
│  │  │  │     │  │  │     │  │  ├─ 📄backward-token-comment-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄backward-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄cursors.js
│  │  │  │     │  │  │     │  │  ├─ 📄decorative-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄filter-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄forward-token-comment-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄forward-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  │     │  │  ├─ 📄limit-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄padded-token-cursor.js
│  │  │  │     │  │  │     │  │  ├─ 📄skip-cursor.js
│  │  │  │     │  │  │     │  │  └─ 📄utils.js
│  │  │  │     │  │  │     │  ├─ 📄index.js
│  │  │  │     │  │  │     │  └─ 📄source-code.js
│  │  │  │     │  │  │     ├─ 📄index.js
│  │  │  │     │  │  │     └─ 📄validate-language-options.js
│  │  │  │     │  │  ├─ 📁linter
│  │  │  │     │  │  │  ├─ 📁code-path-analysis
│  │  │  │     │  │  │  │  ├─ 📄code-path-analyzer.js
│  │  │  │     │  │  │  │  ├─ 📄code-path-segment.js
│  │  │  │     │  │  │  │  ├─ 📄code-path-state.js
│  │  │  │     │  │  │  │  ├─ 📄code-path.js
│  │  │  │     │  │  │  │  ├─ 📄debug-helpers.js
│  │  │  │     │  │  │  │  ├─ 📄fork-context.js
│  │  │  │     │  │  │  │  └─ 📄id-generator.js
│  │  │  │     │  │  │  ├─ 📄apply-disable-directives.js
│  │  │  │     │  │  │  ├─ 📄config-comment-parser.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄interpolate.js
│  │  │  │     │  │  │  ├─ 📄linter.js
│  │  │  │     │  │  │  ├─ 📄node-event-generator.js
│  │  │  │     │  │  │  ├─ 📄report-translator.js
│  │  │  │     │  │  │  ├─ 📄rule-fixer.js
│  │  │  │     │  │  │  ├─ 📄rules.js
│  │  │  │     │  │  │  ├─ 📄safe-emitter.js
│  │  │  │     │  │  │  ├─ 📄source-code-fixer.js
│  │  │  │     │  │  │  ├─ 📄timing.js
│  │  │  │     │  │  │  └─ 📄vfile.js
│  │  │  │     │  │  ├─ 📁rule-tester
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄rule-tester.js
│  │  │  │     │  │  ├─ 📁rules
│  │  │  │     │  │  │  ├─ 📁utils
│  │  │  │     │  │  │  │  ├─ 📁unicode
│  │  │  │     │  │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-combining-character.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-emoji-modifier.js
│  │  │  │     │  │  │  │  │  ├─ 📄is-regional-indicator-symbol.js
│  │  │  │     │  │  │  │  │  └─ 📄is-surrogate-pair.js
│  │  │  │     │  │  │  │  ├─ 📄ast-utils.js
│  │  │  │     │  │  │  │  ├─ 📄char-source.js
│  │  │  │     │  │  │  │  ├─ 📄fix-tracker.js
│  │  │  │     │  │  │  │  ├─ 📄keywords.js
│  │  │  │     │  │  │  │  ├─ 📄lazy-loading-rule-map.js
│  │  │  │     │  │  │  │  └─ 📄regular-expressions.js
│  │  │  │     │  │  │  ├─ 📄accessor-pairs.js
│  │  │  │     │  │  │  ├─ 📄array-bracket-newline.js
│  │  │  │     │  │  │  ├─ 📄array-bracket-spacing.js
│  │  │  │     │  │  │  ├─ 📄array-callback-return.js
│  │  │  │     │  │  │  ├─ 📄array-element-newline.js
│  │  │  │     │  │  │  ├─ 📄arrow-body-style.js
│  │  │  │     │  │  │  ├─ 📄arrow-parens.js
│  │  │  │     │  │  │  ├─ 📄arrow-spacing.js
│  │  │  │     │  │  │  ├─ 📄block-scoped-var.js
│  │  │  │     │  │  │  ├─ 📄block-spacing.js
│  │  │  │     │  │  │  ├─ 📄brace-style.js
│  │  │  │     │  │  │  ├─ 📄callback-return.js
│  │  │  │     │  │  │  ├─ 📄camelcase.js
│  │  │  │     │  │  │  ├─ 📄capitalized-comments.js
│  │  │  │     │  │  │  ├─ 📄class-methods-use-this.js
│  │  │  │     │  │  │  ├─ 📄comma-dangle.js
│  │  │  │     │  │  │  ├─ 📄comma-spacing.js
│  │  │  │     │  │  │  ├─ 📄comma-style.js
│  │  │  │     │  │  │  ├─ 📄complexity.js
│  │  │  │     │  │  │  ├─ 📄computed-property-spacing.js
│  │  │  │     │  │  │  ├─ 📄consistent-return.js
│  │  │  │     │  │  │  ├─ 📄consistent-this.js
│  │  │  │     │  │  │  ├─ 📄constructor-super.js
│  │  │  │     │  │  │  ├─ 📄curly.js
│  │  │  │     │  │  │  ├─ 📄default-case-last.js
│  │  │  │     │  │  │  ├─ 📄default-case.js
│  │  │  │     │  │  │  ├─ 📄default-param-last.js
│  │  │  │     │  │  │  ├─ 📄dot-location.js
│  │  │  │     │  │  │  ├─ 📄dot-notation.js
│  │  │  │     │  │  │  ├─ 📄eol-last.js
│  │  │  │     │  │  │  ├─ 📄eqeqeq.js
│  │  │  │     │  │  │  ├─ 📄for-direction.js
│  │  │  │     │  │  │  ├─ 📄func-call-spacing.js
│  │  │  │     │  │  │  ├─ 📄func-name-matching.js
│  │  │  │     │  │  │  ├─ 📄func-names.js
│  │  │  │     │  │  │  ├─ 📄func-style.js
│  │  │  │     │  │  │  ├─ 📄function-call-argument-newline.js
│  │  │  │     │  │  │  ├─ 📄function-paren-newline.js
│  │  │  │     │  │  │  ├─ 📄generator-star-spacing.js
│  │  │  │     │  │  │  ├─ 📄getter-return.js
│  │  │  │     │  │  │  ├─ 📄global-require.js
│  │  │  │     │  │  │  ├─ 📄grouped-accessor-pairs.js
│  │  │  │     │  │  │  ├─ 📄guard-for-in.js
│  │  │  │     │  │  │  ├─ 📄handle-callback-err.js
│  │  │  │     │  │  │  ├─ 📄id-blacklist.js
│  │  │  │     │  │  │  ├─ 📄id-denylist.js
│  │  │  │     │  │  │  ├─ 📄id-length.js
│  │  │  │     │  │  │  ├─ 📄id-match.js
│  │  │  │     │  │  │  ├─ 📄implicit-arrow-linebreak.js
│  │  │  │     │  │  │  ├─ 📄indent-legacy.js
│  │  │  │     │  │  │  ├─ 📄indent.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄init-declarations.js
│  │  │  │     │  │  │  ├─ 📄jsx-quotes.js
│  │  │  │     │  │  │  ├─ 📄key-spacing.js
│  │  │  │     │  │  │  ├─ 📄keyword-spacing.js
│  │  │  │     │  │  │  ├─ 📄line-comment-position.js
│  │  │  │     │  │  │  ├─ 📄linebreak-style.js
│  │  │  │     │  │  │  ├─ 📄lines-around-comment.js
│  │  │  │     │  │  │  ├─ 📄lines-around-directive.js
│  │  │  │     │  │  │  ├─ 📄lines-between-class-members.js
│  │  │  │     │  │  │  ├─ 📄logical-assignment-operators.js
│  │  │  │     │  │  │  ├─ 📄max-classes-per-file.js
│  │  │  │     │  │  │  ├─ 📄max-depth.js
│  │  │  │     │  │  │  ├─ 📄max-len.js
│  │  │  │     │  │  │  ├─ 📄max-lines-per-function.js
│  │  │  │     │  │  │  ├─ 📄max-lines.js
│  │  │  │     │  │  │  ├─ 📄max-nested-callbacks.js
│  │  │  │     │  │  │  ├─ 📄max-params.js
│  │  │  │     │  │  │  ├─ 📄max-statements-per-line.js
│  │  │  │     │  │  │  ├─ 📄max-statements.js
│  │  │  │     │  │  │  ├─ 📄multiline-comment-style.js
│  │  │  │     │  │  │  ├─ 📄multiline-ternary.js
│  │  │  │     │  │  │  ├─ 📄new-cap.js
│  │  │  │     │  │  │  ├─ 📄new-parens.js
│  │  │  │     │  │  │  ├─ 📄newline-after-var.js
│  │  │  │     │  │  │  ├─ 📄newline-before-return.js
│  │  │  │     │  │  │  ├─ 📄newline-per-chained-call.js
│  │  │  │     │  │  │  ├─ 📄no-alert.js
│  │  │  │     │  │  │  ├─ 📄no-array-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-async-promise-executor.js
│  │  │  │     │  │  │  ├─ 📄no-await-in-loop.js
│  │  │  │     │  │  │  ├─ 📄no-bitwise.js
│  │  │  │     │  │  │  ├─ 📄no-buffer-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-caller.js
│  │  │  │     │  │  │  ├─ 📄no-case-declarations.js
│  │  │  │     │  │  │  ├─ 📄no-catch-shadow.js
│  │  │  │     │  │  │  ├─ 📄no-class-assign.js
│  │  │  │     │  │  │  ├─ 📄no-compare-neg-zero.js
│  │  │  │     │  │  │  ├─ 📄no-cond-assign.js
│  │  │  │     │  │  │  ├─ 📄no-confusing-arrow.js
│  │  │  │     │  │  │  ├─ 📄no-console.js
│  │  │  │     │  │  │  ├─ 📄no-const-assign.js
│  │  │  │     │  │  │  ├─ 📄no-constant-binary-expression.js
│  │  │  │     │  │  │  ├─ 📄no-constant-condition.js
│  │  │  │     │  │  │  ├─ 📄no-constructor-return.js
│  │  │  │     │  │  │  ├─ 📄no-continue.js
│  │  │  │     │  │  │  ├─ 📄no-control-regex.js
│  │  │  │     │  │  │  ├─ 📄no-debugger.js
│  │  │  │     │  │  │  ├─ 📄no-delete-var.js
│  │  │  │     │  │  │  ├─ 📄no-div-regex.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-args.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-class-members.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-else-if.js
│  │  │  │     │  │  │  ├─ 📄no-dupe-keys.js
│  │  │  │     │  │  │  ├─ 📄no-duplicate-case.js
│  │  │  │     │  │  │  ├─ 📄no-duplicate-imports.js
│  │  │  │     │  │  │  ├─ 📄no-else-return.js
│  │  │  │     │  │  │  ├─ 📄no-empty-character-class.js
│  │  │  │     │  │  │  ├─ 📄no-empty-function.js
│  │  │  │     │  │  │  ├─ 📄no-empty-pattern.js
│  │  │  │     │  │  │  ├─ 📄no-empty-static-block.js
│  │  │  │     │  │  │  ├─ 📄no-empty.js
│  │  │  │     │  │  │  ├─ 📄no-eq-null.js
│  │  │  │     │  │  │  ├─ 📄no-eval.js
│  │  │  │     │  │  │  ├─ 📄no-ex-assign.js
│  │  │  │     │  │  │  ├─ 📄no-extend-native.js
│  │  │  │     │  │  │  ├─ 📄no-extra-bind.js
│  │  │  │     │  │  │  ├─ 📄no-extra-boolean-cast.js
│  │  │  │     │  │  │  ├─ 📄no-extra-label.js
│  │  │  │     │  │  │  ├─ 📄no-extra-parens.js
│  │  │  │     │  │  │  ├─ 📄no-extra-semi.js
│  │  │  │     │  │  │  ├─ 📄no-fallthrough.js
│  │  │  │     │  │  │  ├─ 📄no-floating-decimal.js
│  │  │  │     │  │  │  ├─ 📄no-func-assign.js
│  │  │  │     │  │  │  ├─ 📄no-global-assign.js
│  │  │  │     │  │  │  ├─ 📄no-implicit-coercion.js
│  │  │  │     │  │  │  ├─ 📄no-implicit-globals.js
│  │  │  │     │  │  │  ├─ 📄no-implied-eval.js
│  │  │  │     │  │  │  ├─ 📄no-import-assign.js
│  │  │  │     │  │  │  ├─ 📄no-inline-comments.js
│  │  │  │     │  │  │  ├─ 📄no-inner-declarations.js
│  │  │  │     │  │  │  ├─ 📄no-invalid-regexp.js
│  │  │  │     │  │  │  ├─ 📄no-invalid-this.js
│  │  │  │     │  │  │  ├─ 📄no-irregular-whitespace.js
│  │  │  │     │  │  │  ├─ 📄no-iterator.js
│  │  │  │     │  │  │  ├─ 📄no-label-var.js
│  │  │  │     │  │  │  ├─ 📄no-labels.js
│  │  │  │     │  │  │  ├─ 📄no-lone-blocks.js
│  │  │  │     │  │  │  ├─ 📄no-lonely-if.js
│  │  │  │     │  │  │  ├─ 📄no-loop-func.js
│  │  │  │     │  │  │  ├─ 📄no-loss-of-precision.js
│  │  │  │     │  │  │  ├─ 📄no-magic-numbers.js
│  │  │  │     │  │  │  ├─ 📄no-misleading-character-class.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-operators.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-requires.js
│  │  │  │     │  │  │  ├─ 📄no-mixed-spaces-and-tabs.js
│  │  │  │     │  │  │  ├─ 📄no-multi-assign.js
│  │  │  │     │  │  │  ├─ 📄no-multi-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-multi-str.js
│  │  │  │     │  │  │  ├─ 📄no-multiple-empty-lines.js
│  │  │  │     │  │  │  ├─ 📄no-native-reassign.js
│  │  │  │     │  │  │  ├─ 📄no-negated-condition.js
│  │  │  │     │  │  │  ├─ 📄no-negated-in-lhs.js
│  │  │  │     │  │  │  ├─ 📄no-nested-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-new-func.js
│  │  │  │     │  │  │  ├─ 📄no-new-native-nonconstructor.js
│  │  │  │     │  │  │  ├─ 📄no-new-object.js
│  │  │  │     │  │  │  ├─ 📄no-new-require.js
│  │  │  │     │  │  │  ├─ 📄no-new-symbol.js
│  │  │  │     │  │  │  ├─ 📄no-new-wrappers.js
│  │  │  │     │  │  │  ├─ 📄no-new.js
│  │  │  │     │  │  │  ├─ 📄no-nonoctal-decimal-escape.js
│  │  │  │     │  │  │  ├─ 📄no-obj-calls.js
│  │  │  │     │  │  │  ├─ 📄no-object-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-octal-escape.js
│  │  │  │     │  │  │  ├─ 📄no-octal.js
│  │  │  │     │  │  │  ├─ 📄no-param-reassign.js
│  │  │  │     │  │  │  ├─ 📄no-path-concat.js
│  │  │  │     │  │  │  ├─ 📄no-plusplus.js
│  │  │  │     │  │  │  ├─ 📄no-process-env.js
│  │  │  │     │  │  │  ├─ 📄no-process-exit.js
│  │  │  │     │  │  │  ├─ 📄no-promise-executor-return.js
│  │  │  │     │  │  │  ├─ 📄no-proto.js
│  │  │  │     │  │  │  ├─ 📄no-prototype-builtins.js
│  │  │  │     │  │  │  ├─ 📄no-redeclare.js
│  │  │  │     │  │  │  ├─ 📄no-regex-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-exports.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-globals.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-imports.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-modules.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-properties.js
│  │  │  │     │  │  │  ├─ 📄no-restricted-syntax.js
│  │  │  │     │  │  │  ├─ 📄no-return-assign.js
│  │  │  │     │  │  │  ├─ 📄no-return-await.js
│  │  │  │     │  │  │  ├─ 📄no-script-url.js
│  │  │  │     │  │  │  ├─ 📄no-self-assign.js
│  │  │  │     │  │  │  ├─ 📄no-self-compare.js
│  │  │  │     │  │  │  ├─ 📄no-sequences.js
│  │  │  │     │  │  │  ├─ 📄no-setter-return.js
│  │  │  │     │  │  │  ├─ 📄no-shadow-restricted-names.js
│  │  │  │     │  │  │  ├─ 📄no-shadow.js
│  │  │  │     │  │  │  ├─ 📄no-spaced-func.js
│  │  │  │     │  │  │  ├─ 📄no-sparse-arrays.js
│  │  │  │     │  │  │  ├─ 📄no-sync.js
│  │  │  │     │  │  │  ├─ 📄no-tabs.js
│  │  │  │     │  │  │  ├─ 📄no-template-curly-in-string.js
│  │  │  │     │  │  │  ├─ 📄no-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-this-before-super.js
│  │  │  │     │  │  │  ├─ 📄no-throw-literal.js
│  │  │  │     │  │  │  ├─ 📄no-trailing-spaces.js
│  │  │  │     │  │  │  ├─ 📄no-undef-init.js
│  │  │  │     │  │  │  ├─ 📄no-undef.js
│  │  │  │     │  │  │  ├─ 📄no-undefined.js
│  │  │  │     │  │  │  ├─ 📄no-underscore-dangle.js
│  │  │  │     │  │  │  ├─ 📄no-unexpected-multiline.js
│  │  │  │     │  │  │  ├─ 📄no-unmodified-loop-condition.js
│  │  │  │     │  │  │  ├─ 📄no-unneeded-ternary.js
│  │  │  │     │  │  │  ├─ 📄no-unreachable-loop.js
│  │  │  │     │  │  │  ├─ 📄no-unreachable.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-finally.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-negation.js
│  │  │  │     │  │  │  ├─ 📄no-unsafe-optional-chaining.js
│  │  │  │     │  │  │  ├─ 📄no-unused-expressions.js
│  │  │  │     │  │  │  ├─ 📄no-unused-labels.js
│  │  │  │     │  │  │  ├─ 📄no-unused-private-class-members.js
│  │  │  │     │  │  │  ├─ 📄no-unused-vars.js
│  │  │  │     │  │  │  ├─ 📄no-use-before-define.js
│  │  │  │     │  │  │  ├─ 📄no-useless-assignment.js
│  │  │  │     │  │  │  ├─ 📄no-useless-backreference.js
│  │  │  │     │  │  │  ├─ 📄no-useless-call.js
│  │  │  │     │  │  │  ├─ 📄no-useless-catch.js
│  │  │  │     │  │  │  ├─ 📄no-useless-computed-key.js
│  │  │  │     │  │  │  ├─ 📄no-useless-concat.js
│  │  │  │     │  │  │  ├─ 📄no-useless-constructor.js
│  │  │  │     │  │  │  ├─ 📄no-useless-escape.js
│  │  │  │     │  │  │  ├─ 📄no-useless-rename.js
│  │  │  │     │  │  │  ├─ 📄no-useless-return.js
│  │  │  │     │  │  │  ├─ 📄no-var.js
│  │  │  │     │  │  │  ├─ 📄no-void.js
│  │  │  │     │  │  │  ├─ 📄no-warning-comments.js
│  │  │  │     │  │  │  ├─ 📄no-whitespace-before-property.js
│  │  │  │     │  │  │  ├─ 📄no-with.js
│  │  │  │     │  │  │  ├─ 📄nonblock-statement-body-position.js
│  │  │  │     │  │  │  ├─ 📄object-curly-newline.js
│  │  │  │     │  │  │  ├─ 📄object-curly-spacing.js
│  │  │  │     │  │  │  ├─ 📄object-property-newline.js
│  │  │  │     │  │  │  ├─ 📄object-shorthand.js
│  │  │  │     │  │  │  ├─ 📄one-var-declaration-per-line.js
│  │  │  │     │  │  │  ├─ 📄one-var.js
│  │  │  │     │  │  │  ├─ 📄operator-assignment.js
│  │  │  │     │  │  │  ├─ 📄operator-linebreak.js
│  │  │  │     │  │  │  ├─ 📄padded-blocks.js
│  │  │  │     │  │  │  ├─ 📄padding-line-between-statements.js
│  │  │  │     │  │  │  ├─ 📄prefer-arrow-callback.js
│  │  │  │     │  │  │  ├─ 📄prefer-const.js
│  │  │  │     │  │  │  ├─ 📄prefer-destructuring.js
│  │  │  │     │  │  │  ├─ 📄prefer-exponentiation-operator.js
│  │  │  │     │  │  │  ├─ 📄prefer-named-capture-group.js
│  │  │  │     │  │  │  ├─ 📄prefer-numeric-literals.js
│  │  │  │     │  │  │  ├─ 📄prefer-object-has-own.js
│  │  │  │     │  │  │  ├─ 📄prefer-object-spread.js
│  │  │  │     │  │  │  ├─ 📄prefer-promise-reject-errors.js
│  │  │  │     │  │  │  ├─ 📄prefer-reflect.js
│  │  │  │     │  │  │  ├─ 📄prefer-regex-literals.js
│  │  │  │     │  │  │  ├─ 📄prefer-rest-params.js
│  │  │  │     │  │  │  ├─ 📄prefer-spread.js
│  │  │  │     │  │  │  ├─ 📄prefer-template.js
│  │  │  │     │  │  │  ├─ 📄quote-props.js
│  │  │  │     │  │  │  ├─ 📄quotes.js
│  │  │  │     │  │  │  ├─ 📄radix.js
│  │  │  │     │  │  │  ├─ 📄require-atomic-updates.js
│  │  │  │     │  │  │  ├─ 📄require-await.js
│  │  │  │     │  │  │  ├─ 📄require-unicode-regexp.js
│  │  │  │     │  │  │  ├─ 📄require-yield.js
│  │  │  │     │  │  │  ├─ 📄rest-spread-spacing.js
│  │  │  │     │  │  │  ├─ 📄semi-spacing.js
│  │  │  │     │  │  │  ├─ 📄semi-style.js
│  │  │  │     │  │  │  ├─ 📄semi.js
│  │  │  │     │  │  │  ├─ 📄sort-imports.js
│  │  │  │     │  │  │  ├─ 📄sort-keys.js
│  │  │  │     │  │  │  ├─ 📄sort-vars.js
│  │  │  │     │  │  │  ├─ 📄space-before-blocks.js
│  │  │  │     │  │  │  ├─ 📄space-before-function-paren.js
│  │  │  │     │  │  │  ├─ 📄space-in-parens.js
│  │  │  │     │  │  │  ├─ 📄space-infix-ops.js
│  │  │  │     │  │  │  ├─ 📄space-unary-ops.js
│  │  │  │     │  │  │  ├─ 📄spaced-comment.js
│  │  │  │     │  │  │  ├─ 📄strict.js
│  │  │  │     │  │  │  ├─ 📄switch-colon-spacing.js
│  │  │  │     │  │  │  ├─ 📄symbol-description.js
│  │  │  │     │  │  │  ├─ 📄template-curly-spacing.js
│  │  │  │     │  │  │  ├─ 📄template-tag-spacing.js
│  │  │  │     │  │  │  ├─ 📄unicode-bom.js
│  │  │  │     │  │  │  ├─ 📄use-isnan.js
│  │  │  │     │  │  │  ├─ 📄valid-typeof.js
│  │  │  │     │  │  │  ├─ 📄vars-on-top.js
│  │  │  │     │  │  │  ├─ 📄wrap-iife.js
│  │  │  │     │  │  │  ├─ 📄wrap-regex.js
│  │  │  │     │  │  │  ├─ 📄yield-star-spacing.js
│  │  │  │     │  │  │  └─ 📄yoda.js
│  │  │  │     │  │  ├─ 📁shared
│  │  │  │     │  │  │  ├─ 📄ajv.js
│  │  │  │     │  │  │  ├─ 📄ast-utils.js
│  │  │  │     │  │  │  ├─ 📄directives.js
│  │  │  │     │  │  │  ├─ 📄flags.js
│  │  │  │     │  │  │  ├─ 📄logging.js
│  │  │  │     │  │  │  ├─ 📄runtime-info.js
│  │  │  │     │  │  │  ├─ 📄serialization.js
│  │  │  │     │  │  │  ├─ 📄severity.js
│  │  │  │     │  │  │  ├─ 📄stats.js
│  │  │  │     │  │  │  ├─ 📄string-utils.js
│  │  │  │     │  │  │  ├─ 📄traverser.js
│  │  │  │     │  │  │  └─ 📄types.js
│  │  │  │     │  │  ├─ 📄api.js
│  │  │  │     │  │  ├─ 📄cli.js
│  │  │  │     │  │  ├─ 📄options.js
│  │  │  │     │  │  └─ 📄unsupported-api.js
│  │  │  │     │  ├─ 📁messages
│  │  │  │     │  │  ├─ 📄all-files-ignored.js
│  │  │  │     │  │  ├─ 📄all-matched-files-ignored.js
│  │  │  │     │  │  ├─ 📄config-file-missing.js
│  │  │  │     │  │  ├─ 📄eslintrc-incompat.js
│  │  │  │     │  │  ├─ 📄eslintrc-plugins.js
│  │  │  │     │  │  ├─ 📄extend-config-missing.js
│  │  │  │     │  │  ├─ 📄failed-to-read-json.js
│  │  │  │     │  │  ├─ 📄file-not-found.js
│  │  │  │     │  │  ├─ 📄invalid-rule-options.js
│  │  │  │     │  │  ├─ 📄invalid-rule-severity.js
│  │  │  │     │  │  ├─ 📄no-config-found.js
│  │  │  │     │  │  ├─ 📄plugin-conflict.js
│  │  │  │     │  │  ├─ 📄plugin-invalid.js
│  │  │  │     │  │  ├─ 📄plugin-missing.js
│  │  │  │     │  │  ├─ 📄print-config-with-directory-path.js
│  │  │  │     │  │  ├─ 📄shared.js
│  │  │  │     │  │  └─ 📄whitespace-found.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁eslint-scope
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  └─ 📄eslint-scope.cjs
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄definition.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄pattern-visitor.js
│  │  │  │     │  │  ├─ 📄reference.js
│  │  │  │     │  │  ├─ 📄referencer.js
│  │  │  │     │  │  ├─ 📄scope-manager.js
│  │  │  │     │  │  ├─ 📄scope.js
│  │  │  │     │  │  ├─ 📄variable.js
│  │  │  │     │  │  └─ 📄version.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁eslint-visitor-keys
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  ├─ 📄eslint-visitor-keys.cjs
│  │  │  │     │  │  ├─ 📄eslint-visitor-keys.d.cts
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  └─ 📄visitor-keys.d.ts
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄visitor-keys.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁espree
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  └─ 📄espree.cjs
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄espree.js
│  │  │  │     │  │  ├─ 📄features.js
│  │  │  │     │  │  ├─ 📄options.js
│  │  │  │     │  │  ├─ 📄token-translator.js
│  │  │  │     │  │  └─ 📄version.js
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄acorn
│  │  │  │     │  │     ├─ 📄acorn.CMD
│  │  │  │     │  │     └─ 📄acorn.ps1
│  │  │  │     │  ├─ 📄espree.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁esquery
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  ├─ 📄esquery.esm.js
│  │  │  │     │  │  ├─ 📄esquery.esm.min.js
│  │  │  │     │  │  ├─ 📄esquery.esm.min.js.map
│  │  │  │     │  │  ├─ 📄esquery.js
│  │  │  │     │  │  ├─ 📄esquery.lite.js
│  │  │  │     │  │  ├─ 📄esquery.lite.min.js
│  │  │  │     │  │  ├─ 📄esquery.lite.min.js.map
│  │  │  │     │  │  ├─ 📄esquery.min.js
│  │  │  │     │  │  └─ 📄esquery.min.js.map
│  │  │  │     │  ├─ 📄license.txt
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄parser.js
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁esutils
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄ast.js
│  │  │  │     │  │  ├─ 📄code.js
│  │  │  │     │  │  ├─ 📄keyword.js
│  │  │  │     │  │  └─ 📄utils.js
│  │  │  │     │  ├─ 📄LICENSE.BSD
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁fast-deep-equal
│  │  │  │     │  ├─ 📁es6
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄react.d.ts
│  │  │  │     │  │  └─ 📄react.js
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄react.d.ts
│  │  │  │     │  ├─ 📄react.js
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁file-entry-cache
│  │  │  │     │  ├─ 📄cache.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁find-up
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     ├─ 📁glob-parent
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁ignore
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄legacy.js
│  │  │  │     │  ├─ 📄LICENSE-MIT
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁imurmurhash
│  │  │  │     │  ├─ 📄imurmurhash.js
│  │  │  │     │  ├─ 📄imurmurhash.min.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁is-glob
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁is-path-inside
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     ├─ 📁json-stable-stringify-without-jsonify
│  │  │  │     │  ├─ 📁example
│  │  │  │     │  │  ├─ 📄key_cmp.js
│  │  │  │     │  │  ├─ 📄nested.js
│  │  │  │     │  │  ├─ 📄str.js
│  │  │  │     │  │  └─ 📄value_cmp.js
│  │  │  │     │  ├─ 📁test
│  │  │  │     │  │  ├─ 📄cmp.js
│  │  │  │     │  │  ├─ 📄nested.js
│  │  │  │     │  │  ├─ 📄replacer.js
│  │  │  │     │  │  ├─ 📄space.js
│  │  │  │     │  │  ├─ 📄str.js
│  │  │  │     │  │  └─ 📄to-json.js
│  │  │  │     │  ├─ 📄.npmignore
│  │  │  │     │  ├─ 📄.travis.yml
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.markdown
│  │  │  │     ├─ 📁levn
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄cast.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄parse-string.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁lodash.merge
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁minimatch
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄minimatch.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁natural-compare
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁optionator
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄help.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄util.js
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁strip-ansi
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁text-table
│  │  │  │        ├─ 📁example
│  │  │  │        │  ├─ 📄align.js
│  │  │  │        │  ├─ 📄center.js
│  │  │  │        │  ├─ 📄dotalign.js
│  │  │  │        │  ├─ 📄doubledot.js
│  │  │  │        │  └─ 📄table.js
│  │  │  │        ├─ 📁test
│  │  │  │        │  ├─ 📄align.js
│  │  │  │        │  ├─ 📄ansi-colors.js
│  │  │  │        │  ├─ 📄center.js
│  │  │  │        │  ├─ 📄dotalign.js
│  │  │  │        │  ├─ 📄doubledot.js
│  │  │  │        │  └─ 📄table.js
│  │  │  │        ├─ 📄.travis.yml
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.markdown
│  │  │  ├─ 📁espree@10.1.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁acorn
│  │  │  │     │  ├─ 📁bin
│  │  │  │     │  │  └─ 📄acorn
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  ├─ 📄acorn.d.mts
│  │  │  │     │  │  ├─ 📄acorn.d.ts
│  │  │  │     │  │  ├─ 📄acorn.js
│  │  │  │     │  │  ├─ 📄acorn.mjs
│  │  │  │     │  │  └─ 📄bin.js
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁acorn-jsx
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄acorn
│  │  │  │     │  │     ├─ 📄acorn.CMD
│  │  │  │     │  │     └─ 📄acorn.ps1
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄README.md
│  │  │  │     │  └─ 📄xhtml.js
│  │  │  │     ├─ 📁eslint-visitor-keys
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  ├─ 📄eslint-visitor-keys.cjs
│  │  │  │     │  │  ├─ 📄eslint-visitor-keys.d.cts
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  └─ 📄visitor-keys.d.ts
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄visitor-keys.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁espree
│  │  │  │        ├─ 📁dist
│  │  │  │        │  └─ 📄espree.cjs
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄espree.js
│  │  │  │        │  ├─ 📄features.js
│  │  │  │        │  ├─ 📄options.js
│  │  │  │        │  ├─ 📄token-translator.js
│  │  │  │        │  └─ 📄version.js
│  │  │  │        ├─ 📁node_modules
│  │  │  │        │  └─ 📁.bin
│  │  │  │        │     ├─ 📄acorn
│  │  │  │        │     ├─ 📄acorn.CMD
│  │  │  │        │     └─ 📄acorn.ps1
│  │  │  │        ├─ 📄espree.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁esquery@1.6.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁esquery
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  ├─ 📄esquery.esm.js
│  │  │  │     │  │  ├─ 📄esquery.esm.min.js
│  │  │  │     │  │  ├─ 📄esquery.esm.min.js.map
│  │  │  │     │  │  ├─ 📄esquery.js
│  │  │  │     │  │  ├─ 📄esquery.lite.js
│  │  │  │     │  │  ├─ 📄esquery.lite.min.js
│  │  │  │     │  │  ├─ 📄esquery.lite.min.js.map
│  │  │  │     │  │  ├─ 📄esquery.min.js
│  │  │  │     │  │  └─ 📄esquery.min.js.map
│  │  │  │     │  ├─ 📄license.txt
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄parser.js
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁estraverse
│  │  │  │        ├─ 📄.jshintrc
│  │  │  │        ├─ 📄estraverse.js
│  │  │  │        ├─ 📄gulpfile.js
│  │  │  │        ├─ 📄LICENSE.BSD
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁esrecurse@4.3.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁esrecurse
│  │  │  │     │  ├─ 📄.babelrc
│  │  │  │     │  ├─ 📄esrecurse.js
│  │  │  │     │  ├─ 📄gulpfile.babel.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁estraverse
│  │  │  │        ├─ 📄.jshintrc
│  │  │  │        ├─ 📄estraverse.js
│  │  │  │        ├─ 📄gulpfile.js
│  │  │  │        ├─ 📄LICENSE.BSD
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁estraverse@5.3.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁estraverse
│  │  │  │        ├─ 📄.jshintrc
│  │  │  │        ├─ 📄estraverse.js
│  │  │  │        ├─ 📄gulpfile.js
│  │  │  │        ├─ 📄LICENSE.BSD
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁esutils@2.0.3
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁esutils
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄ast.js
│  │  │  │        │  ├─ 📄code.js
│  │  │  │        │  ├─ 📄keyword.js
│  │  │  │        │  └─ 📄utils.js
│  │  │  │        ├─ 📄LICENSE.BSD
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁fast-deep-equal@3.1.3
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁fast-deep-equal
│  │  │  │        ├─ 📁es6
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  ├─ 📄react.d.ts
│  │  │  │        │  └─ 📄react.js
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄react.d.ts
│  │  │  │        ├─ 📄react.js
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁fast-glob@3.3.2
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@nodelib
│  │  │  │     │  ├─ 📁fs.stat
│  │  │  │     │  │  ├─ 📁out
│  │  │  │     │  │  │  ├─ 📁adapters
│  │  │  │     │  │  │  │  ├─ 📄fs.d.ts
│  │  │  │     │  │  │  │  └─ 📄fs.js
│  │  │  │     │  │  │  ├─ 📁providers
│  │  │  │     │  │  │  │  ├─ 📄async.d.ts
│  │  │  │     │  │  │  │  ├─ 📄async.js
│  │  │  │     │  │  │  │  ├─ 📄sync.d.ts
│  │  │  │     │  │  │  │  └─ 📄sync.js
│  │  │  │     │  │  │  ├─ 📁types
│  │  │  │     │  │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  │  └─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄settings.d.ts
│  │  │  │     │  │  │  └─ 📄settings.js
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁fs.walk
│  │  │  │     │     ├─ 📁out
│  │  │  │     │     │  ├─ 📁providers
│  │  │  │     │     │  │  ├─ 📄async.d.ts
│  │  │  │     │     │  │  ├─ 📄async.js
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄stream.d.ts
│  │  │  │     │     │  │  ├─ 📄stream.js
│  │  │  │     │     │  │  ├─ 📄sync.d.ts
│  │  │  │     │     │  │  └─ 📄sync.js
│  │  │  │     │     │  ├─ 📁readers
│  │  │  │     │     │  │  ├─ 📄async.d.ts
│  │  │  │     │     │  │  ├─ 📄async.js
│  │  │  │     │     │  │  ├─ 📄common.d.ts
│  │  │  │     │     │  │  ├─ 📄common.js
│  │  │  │     │     │  │  ├─ 📄reader.d.ts
│  │  │  │     │     │  │  ├─ 📄reader.js
│  │  │  │     │     │  │  ├─ 📄sync.d.ts
│  │  │  │     │     │  │  └─ 📄sync.js
│  │  │  │     │     │  ├─ 📁types
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  └─ 📄index.js
│  │  │  │     │     │  ├─ 📄index.d.ts
│  │  │  │     │     │  ├─ 📄index.js
│  │  │  │     │     │  ├─ 📄settings.d.ts
│  │  │  │     │     │  └─ 📄settings.js
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁fast-glob
│  │  │  │     │  ├─ 📁out
│  │  │  │     │  │  ├─ 📁managers
│  │  │  │     │  │  │  ├─ 📄tasks.d.ts
│  │  │  │     │  │  │  └─ 📄tasks.js
│  │  │  │     │  │  ├─ 📁providers
│  │  │  │     │  │  │  ├─ 📁filters
│  │  │  │     │  │  │  │  ├─ 📄deep.d.ts
│  │  │  │     │  │  │  │  ├─ 📄deep.js
│  │  │  │     │  │  │  │  ├─ 📄entry.d.ts
│  │  │  │     │  │  │  │  ├─ 📄entry.js
│  │  │  │     │  │  │  │  ├─ 📄error.d.ts
│  │  │  │     │  │  │  │  └─ 📄error.js
│  │  │  │     │  │  │  ├─ 📁matchers
│  │  │  │     │  │  │  │  ├─ 📄matcher.d.ts
│  │  │  │     │  │  │  │  ├─ 📄matcher.js
│  │  │  │     │  │  │  │  ├─ 📄partial.d.ts
│  │  │  │     │  │  │  │  └─ 📄partial.js
│  │  │  │     │  │  │  ├─ 📁transformers
│  │  │  │     │  │  │  │  ├─ 📄entry.d.ts
│  │  │  │     │  │  │  │  └─ 📄entry.js
│  │  │  │     │  │  │  ├─ 📄async.d.ts
│  │  │  │     │  │  │  ├─ 📄async.js
│  │  │  │     │  │  │  ├─ 📄provider.d.ts
│  │  │  │     │  │  │  ├─ 📄provider.js
│  │  │  │     │  │  │  ├─ 📄stream.d.ts
│  │  │  │     │  │  │  ├─ 📄stream.js
│  │  │  │     │  │  │  ├─ 📄sync.d.ts
│  │  │  │     │  │  │  └─ 📄sync.js
│  │  │  │     │  │  ├─ 📁readers
│  │  │  │     │  │  │  ├─ 📄async.d.ts
│  │  │  │     │  │  │  ├─ 📄async.js
│  │  │  │     │  │  │  ├─ 📄reader.d.ts
│  │  │  │     │  │  │  ├─ 📄reader.js
│  │  │  │     │  │  │  ├─ 📄stream.d.ts
│  │  │  │     │  │  │  ├─ 📄stream.js
│  │  │  │     │  │  │  ├─ 📄sync.d.ts
│  │  │  │     │  │  │  └─ 📄sync.js
│  │  │  │     │  │  ├─ 📁types
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  └─ 📄index.js
│  │  │  │     │  │  ├─ 📁utils
│  │  │  │     │  │  │  ├─ 📄array.d.ts
│  │  │  │     │  │  │  ├─ 📄array.js
│  │  │  │     │  │  │  ├─ 📄errno.d.ts
│  │  │  │     │  │  │  ├─ 📄errno.js
│  │  │  │     │  │  │  ├─ 📄fs.d.ts
│  │  │  │     │  │  │  ├─ 📄fs.js
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄path.d.ts
│  │  │  │     │  │  │  ├─ 📄path.js
│  │  │  │     │  │  │  ├─ 📄pattern.d.ts
│  │  │  │     │  │  │  ├─ 📄pattern.js
│  │  │  │     │  │  │  ├─ 📄stream.d.ts
│  │  │  │     │  │  │  ├─ 📄stream.js
│  │  │  │     │  │  │  ├─ 📄string.d.ts
│  │  │  │     │  │  │  └─ 📄string.js
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄settings.d.ts
│  │  │  │     │  │  └─ 📄settings.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁glob-parent
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁merge2
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁micromatch
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁fast-json-stable-stringify@2.1.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁fast-json-stable-stringify
│  │  │  │        ├─ 📁.github
│  │  │  │        │  └─ 📄FUNDING.yml
│  │  │  │        ├─ 📁benchmark
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  └─ 📄test.json
│  │  │  │        ├─ 📁example
│  │  │  │        │  ├─ 📄key_cmp.js
│  │  │  │        │  ├─ 📄nested.js
│  │  │  │        │  ├─ 📄str.js
│  │  │  │        │  └─ 📄value_cmp.js
│  │  │  │        ├─ 📁test
│  │  │  │        │  ├─ 📄cmp.js
│  │  │  │        │  ├─ 📄nested.js
│  │  │  │        │  ├─ 📄str.js
│  │  │  │        │  └─ 📄to-json.js
│  │  │  │        ├─ 📄.eslintrc.yml
│  │  │  │        ├─ 📄.travis.yml
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁fast-levenshtein@2.0.6
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁fast-levenshtein
│  │  │  │        ├─ 📄levenshtein.js
│  │  │  │        ├─ 📄LICENSE.md
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁fastq@1.17.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁fastq
│  │  │  │     │  ├─ 📁.github
│  │  │  │     │  │  ├─ 📁workflows
│  │  │  │     │  │  │  └─ 📄ci.yml
│  │  │  │     │  │  └─ 📄dependabot.yml
│  │  │  │     │  ├─ 📁test
│  │  │  │     │  │  ├─ 📄example.ts
│  │  │  │     │  │  ├─ 📄promise.js
│  │  │  │     │  │  ├─ 📄test.js
│  │  │  │     │  │  └─ 📄tsconfig.json
│  │  │  │     │  ├─ 📄bench.js
│  │  │  │     │  ├─ 📄example.js
│  │  │  │     │  ├─ 📄example.mjs
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄queue.js
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁reusify
│  │  │  │        ├─ 📁benchmarks
│  │  │  │        │  ├─ 📄createNoCodeFunction.js
│  │  │  │        │  ├─ 📄fib.js
│  │  │  │        │  └─ 📄reuseNoCodeFunction.js
│  │  │  │        ├─ 📄.coveralls.yml
│  │  │  │        ├─ 📄.travis.yml
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        ├─ 📄reusify.js
│  │  │  │        └─ 📄test.js
│  │  │  ├─ 📁file-entry-cache@8.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁file-entry-cache
│  │  │  │     │  ├─ 📄cache.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁flat-cache
│  │  │  │        ├─ 📁src
│  │  │  │        │  ├─ 📄cache.js
│  │  │  │        │  ├─ 📄del.js
│  │  │  │        │  └─ 📄utils.js
│  │  │  │        ├─ 📄changelog.md
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁fill-range@7.1.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁fill-range
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁to-regex-range
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁find-up@5.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁find-up
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     ├─ 📁locate-path
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁path-exists
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁flat-cache@4.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁flat-cache
│  │  │  │     │  ├─ 📁src
│  │  │  │     │  │  ├─ 📄cache.js
│  │  │  │     │  │  ├─ 📄del.js
│  │  │  │     │  │  └─ 📄utils.js
│  │  │  │     │  ├─ 📄changelog.md
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁flatted
│  │  │  │     │  ├─ 📁cjs
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄package.json
│  │  │  │     │  ├─ 📁esm
│  │  │  │     │  │  └─ 📄index.js
│  │  │  │     │  ├─ 📁php
│  │  │  │     │  │  └─ 📄flatted.php
│  │  │  │     │  ├─ 📁python
│  │  │  │     │  │  ├─ 📁__pycache__
│  │  │  │     │  │  │  └─ 📄flatted.cpython-311.pyc
│  │  │  │     │  │  ├─ 📄flatted.py
│  │  │  │     │  │  └─ 📄test.py
│  │  │  │     │  ├─ 📁types
│  │  │  │     │  │  └─ 📄index.d.ts
│  │  │  │     │  ├─ 📄es.js
│  │  │  │     │  ├─ 📄esm.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄min.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁keyv
│  │  │  │        ├─ 📁src
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  └─ 📄index.js
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁flatted@3.3.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁flatted
│  │  │  │        ├─ 📁cjs
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  └─ 📄package.json
│  │  │  │        ├─ 📁esm
│  │  │  │        │  └─ 📄index.js
│  │  │  │        ├─ 📁php
│  │  │  │        │  └─ 📄flatted.php
│  │  │  │        ├─ 📁python
│  │  │  │        │  ├─ 📁__pycache__
│  │  │  │        │  │  └─ 📄flatted.cpython-311.pyc
│  │  │  │        │  ├─ 📄flatted.py
│  │  │  │        │  └─ 📄test.py
│  │  │  │        ├─ 📁types
│  │  │  │        │  └─ 📄index.d.ts
│  │  │  │        ├─ 📄es.js
│  │  │  │        ├─ 📄esm.js
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄min.js
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁glob-parent@5.1.2
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁glob-parent
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁is-glob
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁glob-parent@6.0.2
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁glob-parent
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁is-glob
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁globals@14.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁globals
│  │  │  │        ├─ 📄globals.json
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁globals@15.9.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁globals
│  │  │  │        ├─ 📄globals.json
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁globby@11.1.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁array-union
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     ├─ 📁dir-glob
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     ├─ 📁fast-glob
│  │  │  │     │  ├─ 📁out
│  │  │  │     │  │  ├─ 📁managers
│  │  │  │     │  │  │  ├─ 📄tasks.d.ts
│  │  │  │     │  │  │  └─ 📄tasks.js
│  │  │  │     │  │  ├─ 📁providers
│  │  │  │     │  │  │  ├─ 📁filters
│  │  │  │     │  │  │  │  ├─ 📄deep.d.ts
│  │  │  │     │  │  │  │  ├─ 📄deep.js
│  │  │  │     │  │  │  │  ├─ 📄entry.d.ts
│  │  │  │     │  │  │  │  ├─ 📄entry.js
│  │  │  │     │  │  │  │  ├─ 📄error.d.ts
│  │  │  │     │  │  │  │  └─ 📄error.js
│  │  │  │     │  │  │  ├─ 📁matchers
│  │  │  │     │  │  │  │  ├─ 📄matcher.d.ts
│  │  │  │     │  │  │  │  ├─ 📄matcher.js
│  │  │  │     │  │  │  │  ├─ 📄partial.d.ts
│  │  │  │     │  │  │  │  └─ 📄partial.js
│  │  │  │     │  │  │  ├─ 📁transformers
│  │  │  │     │  │  │  │  ├─ 📄entry.d.ts
│  │  │  │     │  │  │  │  └─ 📄entry.js
│  │  │  │     │  │  │  ├─ 📄async.d.ts
│  │  │  │     │  │  │  ├─ 📄async.js
│  │  │  │     │  │  │  ├─ 📄provider.d.ts
│  │  │  │     │  │  │  ├─ 📄provider.js
│  │  │  │     │  │  │  ├─ 📄stream.d.ts
│  │  │  │     │  │  │  ├─ 📄stream.js
│  │  │  │     │  │  │  ├─ 📄sync.d.ts
│  │  │  │     │  │  │  └─ 📄sync.js
│  │  │  │     │  │  ├─ 📁readers
│  │  │  │     │  │  │  ├─ 📄async.d.ts
│  │  │  │     │  │  │  ├─ 📄async.js
│  │  │  │     │  │  │  ├─ 📄reader.d.ts
│  │  │  │     │  │  │  ├─ 📄reader.js
│  │  │  │     │  │  │  ├─ 📄stream.d.ts
│  │  │  │     │  │  │  ├─ 📄stream.js
│  │  │  │     │  │  │  ├─ 📄sync.d.ts
│  │  │  │     │  │  │  └─ 📄sync.js
│  │  │  │     │  │  ├─ 📁types
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  └─ 📄index.js
│  │  │  │     │  │  ├─ 📁utils
│  │  │  │     │  │  │  ├─ 📄array.d.ts
│  │  │  │     │  │  │  ├─ 📄array.js
│  │  │  │     │  │  │  ├─ 📄errno.d.ts
│  │  │  │     │  │  │  ├─ 📄errno.js
│  │  │  │     │  │  │  ├─ 📄fs.d.ts
│  │  │  │     │  │  │  ├─ 📄fs.js
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄path.d.ts
│  │  │  │     │  │  │  ├─ 📄path.js
│  │  │  │     │  │  │  ├─ 📄pattern.d.ts
│  │  │  │     │  │  │  ├─ 📄pattern.js
│  │  │  │     │  │  │  ├─ 📄stream.d.ts
│  │  │  │     │  │  │  ├─ 📄stream.js
│  │  │  │     │  │  │  ├─ 📄string.d.ts
│  │  │  │     │  │  │  └─ 📄string.js
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄settings.d.ts
│  │  │  │     │  │  └─ 📄settings.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁globby
│  │  │  │     │  ├─ 📄gitignore.js
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄readme.md
│  │  │  │     │  └─ 📄stream-utils.js
│  │  │  │     ├─ 📁ignore
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄legacy.js
│  │  │  │     │  ├─ 📄LICENSE-MIT
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁merge2
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁slash
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁graphemer@1.4.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁graphemer
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄boundaries.d.ts
│  │  │  │        │  ├─ 📄boundaries.d.ts.map
│  │  │  │        │  ├─ 📄boundaries.js
│  │  │  │        │  ├─ 📄Graphemer.d.ts
│  │  │  │        │  ├─ 📄Graphemer.d.ts.map
│  │  │  │        │  ├─ 📄Graphemer.js
│  │  │  │        │  ├─ 📄GraphemerHelper.d.ts
│  │  │  │        │  ├─ 📄GraphemerHelper.d.ts.map
│  │  │  │        │  ├─ 📄GraphemerHelper.js
│  │  │  │        │  ├─ 📄GraphemerIterator.d.ts
│  │  │  │        │  ├─ 📄GraphemerIterator.d.ts.map
│  │  │  │        │  ├─ 📄GraphemerIterator.js
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  ├─ 📄index.d.ts.map
│  │  │  │        │  └─ 📄index.js
│  │  │  │        ├─ 📄CHANGELOG.md
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁has-flag@4.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁has-flag
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁ignore@5.3.2
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁ignore
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄legacy.js
│  │  │  │        ├─ 📄LICENSE-MIT
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁import-fresh@3.3.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁import-fresh
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     ├─ 📁parent-module
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁resolve-from
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁imurmurhash@0.1.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁imurmurhash
│  │  │  │        ├─ 📄imurmurhash.js
│  │  │  │        ├─ 📄imurmurhash.min.js
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁is-extglob@2.1.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁is-extglob
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁is-glob@4.0.3
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁is-extglob
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁is-glob
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁is-number@7.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁is-number
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁is-path-inside@3.0.3
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁is-path-inside
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁isexe@2.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁isexe
│  │  │  │        ├─ 📁test
│  │  │  │        │  └─ 📄basic.js
│  │  │  │        ├─ 📄.npmignore
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄mode.js
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        └─ 📄windows.js
│  │  │  ├─ 📁js-tokens@4.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁js-tokens
│  │  │  │        ├─ 📄CHANGELOG.md
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁js-yaml@4.1.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁argparse
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄sub.js
│  │  │  │     │  │  └─ 📄textwrap.js
│  │  │  │     │  ├─ 📄argparse.js
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁js-yaml
│  │  │  │        ├─ 📁bin
│  │  │  │        │  └─ 📄js-yaml.js
│  │  │  │        ├─ 📁dist
│  │  │  │        │  ├─ 📄js-yaml.js
│  │  │  │        │  ├─ 📄js-yaml.min.js
│  │  │  │        │  └─ 📄js-yaml.mjs
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📁schema
│  │  │  │        │  │  ├─ 📄core.js
│  │  │  │        │  │  ├─ 📄default.js
│  │  │  │        │  │  ├─ 📄failsafe.js
│  │  │  │        │  │  └─ 📄json.js
│  │  │  │        │  ├─ 📁type
│  │  │  │        │  │  ├─ 📄binary.js
│  │  │  │        │  │  ├─ 📄bool.js
│  │  │  │        │  │  ├─ 📄float.js
│  │  │  │        │  │  ├─ 📄int.js
│  │  │  │        │  │  ├─ 📄map.js
│  │  │  │        │  │  ├─ 📄merge.js
│  │  │  │        │  │  ├─ 📄null.js
│  │  │  │        │  │  ├─ 📄omap.js
│  │  │  │        │  │  ├─ 📄pairs.js
│  │  │  │        │  │  ├─ 📄seq.js
│  │  │  │        │  │  ├─ 📄set.js
│  │  │  │        │  │  ├─ 📄str.js
│  │  │  │        │  │  └─ 📄timestamp.js
│  │  │  │        │  ├─ 📄common.js
│  │  │  │        │  ├─ 📄dumper.js
│  │  │  │        │  ├─ 📄exception.js
│  │  │  │        │  ├─ 📄loader.js
│  │  │  │        │  ├─ 📄schema.js
│  │  │  │        │  ├─ 📄snippet.js
│  │  │  │        │  └─ 📄type.js
│  │  │  │        ├─ 📄CHANGELOG.md
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁json-buffer@3.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁json-buffer
│  │  │  │        ├─ 📁test
│  │  │  │        │  └─ 📄index.js
│  │  │  │        ├─ 📄.travis.yml
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁json-schema-traverse@0.4.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁json-schema-traverse
│  │  │  │        ├─ 📁spec
│  │  │  │        │  ├─ 📁fixtures
│  │  │  │        │  │  └─ 📄schema.js
│  │  │  │        │  ├─ 📄.eslintrc.yml
│  │  │  │        │  └─ 📄index.spec.js
│  │  │  │        ├─ 📄.eslintrc.yml
│  │  │  │        ├─ 📄.travis.yml
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁json-stable-stringify-without-jsonify@1.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁json-stable-stringify-without-jsonify
│  │  │  │        ├─ 📁example
│  │  │  │        │  ├─ 📄key_cmp.js
│  │  │  │        │  ├─ 📄nested.js
│  │  │  │        │  ├─ 📄str.js
│  │  │  │        │  └─ 📄value_cmp.js
│  │  │  │        ├─ 📁test
│  │  │  │        │  ├─ 📄cmp.js
│  │  │  │        │  ├─ 📄nested.js
│  │  │  │        │  ├─ 📄replacer.js
│  │  │  │        │  ├─ 📄space.js
│  │  │  │        │  ├─ 📄str.js
│  │  │  │        │  └─ 📄to-json.js
│  │  │  │        ├─ 📄.npmignore
│  │  │  │        ├─ 📄.travis.yml
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.markdown
│  │  │  ├─ 📁keyv@4.5.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁json-buffer
│  │  │  │     │  ├─ 📁test
│  │  │  │     │  │  └─ 📄index.js
│  │  │  │     │  ├─ 📄.travis.yml
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁keyv
│  │  │  │        ├─ 📁src
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  └─ 📄index.js
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁levn@0.4.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁levn
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄cast.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄parse-string.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁prelude-ls
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄Func.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄List.js
│  │  │  │     │  │  ├─ 📄Num.js
│  │  │  │     │  │  ├─ 📄Obj.js
│  │  │  │     │  │  └─ 📄Str.js
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁type-check
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄check.js
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  └─ 📄parse-type.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁locate-path@6.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁locate-path
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁p-locate
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁lodash.merge@4.6.2
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁lodash.merge
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁loose-envify@1.4.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁js-tokens
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁loose-envify
│  │  │  │        ├─ 📄cli.js
│  │  │  │        ├─ 📄custom.js
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄loose-envify.js
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        └─ 📄replace.js
│  │  │  ├─ 📁merge2@1.4.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁merge2
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁micromatch@4.0.7
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁braces
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄compile.js
│  │  │  │     │  │  ├─ 📄constants.js
│  │  │  │     │  │  ├─ 📄expand.js
│  │  │  │     │  │  ├─ 📄parse.js
│  │  │  │     │  │  ├─ 📄stringify.js
│  │  │  │     │  │  └─ 📄utils.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁micromatch
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁picomatch
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄constants.js
│  │  │  │        │  ├─ 📄parse.js
│  │  │  │        │  ├─ 📄picomatch.js
│  │  │  │        │  ├─ 📄scan.js
│  │  │  │        │  └─ 📄utils.js
│  │  │  │        ├─ 📄CHANGELOG.md
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁minimatch@3.1.2
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁brace-expansion
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁minimatch
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄minimatch.js
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁minimatch@9.0.5
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁brace-expansion
│  │  │  │     │  ├─ 📁.github
│  │  │  │     │  │  └─ 📄FUNDING.yml
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁minimatch
│  │  │  │        ├─ 📁dist
│  │  │  │        │  ├─ 📁commonjs
│  │  │  │        │  │  ├─ 📄assert-valid-pattern.d.ts
│  │  │  │        │  │  ├─ 📄assert-valid-pattern.d.ts.map
│  │  │  │        │  │  ├─ 📄assert-valid-pattern.js
│  │  │  │        │  │  ├─ 📄assert-valid-pattern.js.map
│  │  │  │        │  │  ├─ 📄ast.d.ts
│  │  │  │        │  │  ├─ 📄ast.d.ts.map
│  │  │  │        │  │  ├─ 📄ast.js
│  │  │  │        │  │  ├─ 📄ast.js.map
│  │  │  │        │  │  ├─ 📄brace-expressions.d.ts
│  │  │  │        │  │  ├─ 📄brace-expressions.d.ts.map
│  │  │  │        │  │  ├─ 📄brace-expressions.js
│  │  │  │        │  │  ├─ 📄brace-expressions.js.map
│  │  │  │        │  │  ├─ 📄escape.d.ts
│  │  │  │        │  │  ├─ 📄escape.d.ts.map
│  │  │  │        │  │  ├─ 📄escape.js
│  │  │  │        │  │  ├─ 📄escape.js.map
│  │  │  │        │  │  ├─ 📄index.d.ts
│  │  │  │        │  │  ├─ 📄index.d.ts.map
│  │  │  │        │  │  ├─ 📄index.js
│  │  │  │        │  │  ├─ 📄index.js.map
│  │  │  │        │  │  ├─ 📄package.json
│  │  │  │        │  │  ├─ 📄unescape.d.ts
│  │  │  │        │  │  ├─ 📄unescape.d.ts.map
│  │  │  │        │  │  ├─ 📄unescape.js
│  │  │  │        │  │  └─ 📄unescape.js.map
│  │  │  │        │  └─ 📁esm
│  │  │  │        │     ├─ 📄assert-valid-pattern.d.ts
│  │  │  │        │     ├─ 📄assert-valid-pattern.d.ts.map
│  │  │  │        │     ├─ 📄assert-valid-pattern.js
│  │  │  │        │     ├─ 📄assert-valid-pattern.js.map
│  │  │  │        │     ├─ 📄ast.d.ts
│  │  │  │        │     ├─ 📄ast.d.ts.map
│  │  │  │        │     ├─ 📄ast.js
│  │  │  │        │     ├─ 📄ast.js.map
│  │  │  │        │     ├─ 📄brace-expressions.d.ts
│  │  │  │        │     ├─ 📄brace-expressions.d.ts.map
│  │  │  │        │     ├─ 📄brace-expressions.js
│  │  │  │        │     ├─ 📄brace-expressions.js.map
│  │  │  │        │     ├─ 📄escape.d.ts
│  │  │  │        │     ├─ 📄escape.d.ts.map
│  │  │  │        │     ├─ 📄escape.js
│  │  │  │        │     ├─ 📄escape.js.map
│  │  │  │        │     ├─ 📄index.d.ts
│  │  │  │        │     ├─ 📄index.d.ts.map
│  │  │  │        │     ├─ 📄index.js
│  │  │  │        │     ├─ 📄index.js.map
│  │  │  │        │     ├─ 📄package.json
│  │  │  │        │     ├─ 📄unescape.d.ts
│  │  │  │        │     ├─ 📄unescape.d.ts.map
│  │  │  │        │     ├─ 📄unescape.js
│  │  │  │        │     └─ 📄unescape.js.map
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁ms@2.1.2
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁ms
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license.md
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁nanoid@3.3.7
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁nanoid
│  │  │  │        ├─ 📁async
│  │  │  │        │  ├─ 📄index.browser.cjs
│  │  │  │        │  ├─ 📄index.browser.js
│  │  │  │        │  ├─ 📄index.cjs
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  ├─ 📄index.native.js
│  │  │  │        │  └─ 📄package.json
│  │  │  │        ├─ 📁bin
│  │  │  │        │  └─ 📄nanoid.cjs
│  │  │  │        ├─ 📁non-secure
│  │  │  │        │  ├─ 📄index.cjs
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  └─ 📄package.json
│  │  │  │        ├─ 📁url-alphabet
│  │  │  │        │  ├─ 📄index.cjs
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  └─ 📄package.json
│  │  │  │        ├─ 📄index.browser.cjs
│  │  │  │        ├─ 📄index.browser.js
│  │  │  │        ├─ 📄index.cjs
│  │  │  │        ├─ 📄index.d.cts
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄nanoid.js
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁natural-compare@1.4.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁natural-compare
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁node_modules
│  │  │  │  ├─ 📁.bin
│  │  │  │  │  ├─ 📄acorn
│  │  │  │  │  ├─ 📄acorn.CMD
│  │  │  │  │  ├─ 📄acorn.ps1
│  │  │  │  │  ├─ 📄esbuild
│  │  │  │  │  ├─ 📄esbuild.CMD
│  │  │  │  │  ├─ 📄esbuild.ps1
│  │  │  │  │  ├─ 📄js-yaml
│  │  │  │  │  ├─ 📄js-yaml.CMD
│  │  │  │  │  ├─ 📄js-yaml.ps1
│  │  │  │  │  ├─ 📄loose-envify
│  │  │  │  │  ├─ 📄loose-envify.CMD
│  │  │  │  │  ├─ 📄loose-envify.ps1
│  │  │  │  │  ├─ 📄nanoid
│  │  │  │  │  ├─ 📄nanoid.CMD
│  │  │  │  │  ├─ 📄nanoid.ps1
│  │  │  │  │  ├─ 📄node-which
│  │  │  │  │  ├─ 📄node-which.CMD
│  │  │  │  │  ├─ 📄node-which.ps1
│  │  │  │  │  ├─ 📄rollup
│  │  │  │  │  ├─ 📄rollup.CMD
│  │  │  │  │  ├─ 📄rollup.ps1
│  │  │  │  │  ├─ 📄semver
│  │  │  │  │  ├─ 📄semver.CMD
│  │  │  │  │  └─ 📄semver.ps1
│  │  │  │  ├─ 📁@esbuild
│  │  │  │  │  └─ 📁win32-x64
│  │  │  │  │     ├─ 📄esbuild.exe
│  │  │  │  │     ├─ 📄package.json
│  │  │  │  │     └─ 📄README.md
│  │  │  │  ├─ 📁@humanwhocodes
│  │  │  │  │  ├─ 📁module-importer
│  │  │  │  │  │  ├─ 📁dist
│  │  │  │  │  │  │  ├─ 📄module-importer.cjs
│  │  │  │  │  │  │  ├─ 📄module-importer.d.cts
│  │  │  │  │  │  │  ├─ 📄module-importer.d.ts
│  │  │  │  │  │  │  └─ 📄module-importer.js
│  │  │  │  │  │  ├─ 📁src
│  │  │  │  │  │  │  ├─ 📄module-importer.cjs
│  │  │  │  │  │  │  └─ 📄module-importer.js
│  │  │  │  │  │  ├─ 📄CHANGELOG.md
│  │  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  │  └─ 📄README.md
│  │  │  │  │  └─ 📁retry
│  │  │  │  │     ├─ 📁dist
│  │  │  │  │     │  ├─ 📄retrier.cjs
│  │  │  │  │     │  ├─ 📄retrier.d.cts
│  │  │  │  │     │  ├─ 📄retrier.d.ts
│  │  │  │  │     │  ├─ 📄retrier.js
│  │  │  │  │     │  ├─ 📄retrier.min.js
│  │  │  │  │     │  └─ 📄retrier.mjs
│  │  │  │  │     ├─ 📄LICENSE
│  │  │  │  │     ├─ 📄package.json
│  │  │  │  │     └─ 📄README.md
│  │  │  │  ├─ 📁@nodelib
│  │  │  │  │  ├─ 📁fs.scandir
│  │  │  │  │  │  ├─ 📁out
│  │  │  │  │  │  │  ├─ 📁adapters
│  │  │  │  │  │  │  │  ├─ 📄fs.d.ts
│  │  │  │  │  │  │  │  └─ 📄fs.js
│  │  │  │  │  │  │  ├─ 📁providers
│  │  │  │  │  │  │  │  ├─ 📄async.d.ts
│  │  │  │  │  │  │  │  ├─ 📄async.js
│  │  │  │  │  │  │  │  ├─ 📄common.d.ts
│  │  │  │  │  │  │  │  ├─ 📄common.js
│  │  │  │  │  │  │  │  ├─ 📄sync.d.ts
│  │  │  │  │  │  │  │  └─ 📄sync.js
│  │  │  │  │  │  │  ├─ 📁types
│  │  │  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  │  │  └─ 📄index.js
│  │  │  │  │  │  │  ├─ 📁utils
│  │  │  │  │  │  │  │  ├─ 📄fs.d.ts
│  │  │  │  │  │  │  │  ├─ 📄fs.js
│  │  │  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  │  │  └─ 📄index.js
│  │  │  │  │  │  │  ├─ 📄constants.d.ts
│  │  │  │  │  │  │  ├─ 📄constants.js
│  │  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  │  ├─ 📄settings.d.ts
│  │  │  │  │  │  │  └─ 📄settings.js
│  │  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  │  └─ 📄README.md
│  │  │  │  │  ├─ 📁fs.stat
│  │  │  │  │  │  ├─ 📁out
│  │  │  │  │  │  │  ├─ 📁adapters
│  │  │  │  │  │  │  │  ├─ 📄fs.d.ts
│  │  │  │  │  │  │  │  └─ 📄fs.js
│  │  │  │  │  │  │  ├─ 📁providers
│  │  │  │  │  │  │  │  ├─ 📄async.d.ts
│  │  │  │  │  │  │  │  ├─ 📄async.js
│  │  │  │  │  │  │  │  ├─ 📄sync.d.ts
│  │  │  │  │  │  │  │  └─ 📄sync.js
│  │  │  │  │  │  │  ├─ 📁types
│  │  │  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  │  │  └─ 📄index.js
│  │  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  │  ├─ 📄settings.d.ts
│  │  │  │  │  │  │  └─ 📄settings.js
│  │  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  │  └─ 📄README.md
│  │  │  │  │  └─ 📁fs.walk
│  │  │  │  │     ├─ 📁out
│  │  │  │  │     │  ├─ 📁providers
│  │  │  │  │     │  │  ├─ 📄async.d.ts
│  │  │  │  │     │  │  ├─ 📄async.js
│  │  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │  │     │  │  ├─ 📄index.js
│  │  │  │  │     │  │  ├─ 📄stream.d.ts
│  │  │  │  │     │  │  ├─ 📄stream.js
│  │  │  │  │     │  │  ├─ 📄sync.d.ts
│  │  │  │  │     │  │  └─ 📄sync.js
│  │  │  │  │     │  ├─ 📁readers
│  │  │  │  │     │  │  ├─ 📄async.d.ts
│  │  │  │  │     │  │  ├─ 📄async.js
│  │  │  │  │     │  │  ├─ 📄common.d.ts
│  │  │  │  │     │  │  ├─ 📄common.js
│  │  │  │  │     │  │  ├─ 📄reader.d.ts
│  │  │  │  │     │  │  ├─ 📄reader.js
│  │  │  │  │     │  │  ├─ 📄sync.d.ts
│  │  │  │  │     │  │  └─ 📄sync.js
│  │  │  │  │     │  ├─ 📁types
│  │  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │  │     │  │  └─ 📄index.js
│  │  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │  │     │  ├─ 📄index.js
│  │  │  │  │     │  ├─ 📄settings.d.ts
│  │  │  │  │     │  └─ 📄settings.js
│  │  │  │  │     ├─ 📄LICENSE
│  │  │  │  │     ├─ 📄package.json
│  │  │  │  │     └─ 📄README.md
│  │  │  │  ├─ 📁@rollup
│  │  │  │  │  └─ 📁rollup-win32-x64-msvc
│  │  │  │  │     ├─ 📄package.json
│  │  │  │  │     ├─ 📄README.md
│  │  │  │  │     └─ 📄rollup.win32-x64-msvc.node
│  │  │  │  ├─ 📁@swc
│  │  │  │  │  ├─ 📁core
│  │  │  │  │  │  ├─ 📄binding.d.ts
│  │  │  │  │  │  ├─ 📄binding.js
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  │  ├─ 📄postinstall.js
│  │  │  │  │  │  ├─ 📄spack.d.ts
│  │  │  │  │  │  ├─ 📄spack.js
│  │  │  │  │  │  ├─ 📄util.d.ts
│  │  │  │  │  │  ├─ 📄util.js
│  │  │  │  │  │  ├─ 📄Visitor.d.ts
│  │  │  │  │  │  └─ 📄Visitor.js
│  │  │  │  │  ├─ 📁core-win32-x64-msvc
│  │  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  │  ├─ 📄README.md
│  │  │  │  │  │  └─ 📄swc.win32-x64-msvc.node
│  │  │  │  │  ├─ 📁counter
│  │  │  │  │  │  ├─ 📄CHANGELOG.md
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  │  └─ 📄README.md
│  │  │  │  │  └─ 📁types
│  │  │  │  │     ├─ 📄index.d.ts
│  │  │  │  │     ├─ 📄index.d.ts.map
│  │  │  │  │     ├─ 📄index.js
│  │  │  │  │     ├─ 📄index.ts
│  │  │  │  │     ├─ 📄LICENSE
│  │  │  │  │     ├─ 📄package.json
│  │  │  │  │     ├─ 📄README.md
│  │  │  │  │     └─ 📄tsconfig.json
│  │  │  │  ├─ 📁@types
│  │  │  │  │  ├─ 📁estree
│  │  │  │  │  │  ├─ 📄flow.d.ts
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  │  └─ 📄README.md
│  │  │  │  │  └─ 📁prop-types
│  │  │  │  │     ├─ 📄index.d.ts
│  │  │  │  │     ├─ 📄LICENSE
│  │  │  │  │     ├─ 📄package.json
│  │  │  │  │     └─ 📄README.md
│  │  │  │  ├─ 📁acorn
│  │  │  │  │  ├─ 📁bin
│  │  │  │  │  │  └─ 📄acorn
│  │  │  │  │  ├─ 📁dist
│  │  │  │  │  │  ├─ 📄acorn.d.mts
│  │  │  │  │  │  ├─ 📄acorn.d.ts
│  │  │  │  │  │  ├─ 📄acorn.js
│  │  │  │  │  │  ├─ 📄acorn.mjs
│  │  │  │  │  │  └─ 📄bin.js
│  │  │  │  │  ├─ 📄CHANGELOG.md
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁acorn-jsx
│  │  │  │  │  ├─ 📁node_modules
│  │  │  │  │  │  └─ 📁.bin
│  │  │  │  │  │     ├─ 📄acorn
│  │  │  │  │  │     ├─ 📄acorn.CMD
│  │  │  │  │  │     └─ 📄acorn.ps1
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄README.md
│  │  │  │  │  └─ 📄xhtml.js
│  │  │  │  ├─ 📁ajv
│  │  │  │  │  ├─ 📁dist
│  │  │  │  │  │  ├─ 📄ajv.bundle.js
│  │  │  │  │  │  ├─ 📄ajv.min.js
│  │  │  │  │  │  └─ 📄ajv.min.js.map
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📁compile
│  │  │  │  │  │  │  ├─ 📄async.js
│  │  │  │  │  │  │  ├─ 📄equal.js
│  │  │  │  │  │  │  ├─ 📄error_classes.js
│  │  │  │  │  │  │  ├─ 📄formats.js
│  │  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  │  ├─ 📄resolve.js
│  │  │  │  │  │  │  ├─ 📄rules.js
│  │  │  │  │  │  │  ├─ 📄schema_obj.js
│  │  │  │  │  │  │  ├─ 📄ucs2length.js
│  │  │  │  │  │  │  └─ 📄util.js
│  │  │  │  │  │  ├─ 📁dot
│  │  │  │  │  │  │  ├─ 📄allOf.jst
│  │  │  │  │  │  │  ├─ 📄anyOf.jst
│  │  │  │  │  │  │  ├─ 📄coerce.def
│  │  │  │  │  │  │  ├─ 📄comment.jst
│  │  │  │  │  │  │  ├─ 📄const.jst
│  │  │  │  │  │  │  ├─ 📄contains.jst
│  │  │  │  │  │  │  ├─ 📄custom.jst
│  │  │  │  │  │  │  ├─ 📄defaults.def
│  │  │  │  │  │  │  ├─ 📄definitions.def
│  │  │  │  │  │  │  ├─ 📄dependencies.jst
│  │  │  │  │  │  │  ├─ 📄enum.jst
│  │  │  │  │  │  │  ├─ 📄errors.def
│  │  │  │  │  │  │  ├─ 📄format.jst
│  │  │  │  │  │  │  ├─ 📄if.jst
│  │  │  │  │  │  │  ├─ 📄items.jst
│  │  │  │  │  │  │  ├─ 📄missing.def
│  │  │  │  │  │  │  ├─ 📄multipleOf.jst
│  │  │  │  │  │  │  ├─ 📄not.jst
│  │  │  │  │  │  │  ├─ 📄oneOf.jst
│  │  │  │  │  │  │  ├─ 📄pattern.jst
│  │  │  │  │  │  │  ├─ 📄properties.jst
│  │  │  │  │  │  │  ├─ 📄propertyNames.jst
│  │  │  │  │  │  │  ├─ 📄ref.jst
│  │  │  │  │  │  │  ├─ 📄required.jst
│  │  │  │  │  │  │  ├─ 📄uniqueItems.jst
│  │  │  │  │  │  │  ├─ 📄validate.jst
│  │  │  │  │  │  │  ├─ 📄_limit.jst
│  │  │  │  │  │  │  ├─ 📄_limitItems.jst
│  │  │  │  │  │  │  ├─ 📄_limitLength.jst
│  │  │  │  │  │  │  └─ 📄_limitProperties.jst
│  │  │  │  │  │  ├─ 📁dotjs
│  │  │  │  │  │  │  ├─ 📄allOf.js
│  │  │  │  │  │  │  ├─ 📄anyOf.js
│  │  │  │  │  │  │  ├─ 📄comment.js
│  │  │  │  │  │  │  ├─ 📄const.js
│  │  │  │  │  │  │  ├─ 📄contains.js
│  │  │  │  │  │  │  ├─ 📄custom.js
│  │  │  │  │  │  │  ├─ 📄dependencies.js
│  │  │  │  │  │  │  ├─ 📄enum.js
│  │  │  │  │  │  │  ├─ 📄format.js
│  │  │  │  │  │  │  ├─ 📄if.js
│  │  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  │  ├─ 📄items.js
│  │  │  │  │  │  │  ├─ 📄multipleOf.js
│  │  │  │  │  │  │  ├─ 📄not.js
│  │  │  │  │  │  │  ├─ 📄oneOf.js
│  │  │  │  │  │  │  ├─ 📄pattern.js
│  │  │  │  │  │  │  ├─ 📄properties.js
│  │  │  │  │  │  │  ├─ 📄propertyNames.js
│  │  │  │  │  │  │  ├─ 📄README.md
│  │  │  │  │  │  │  ├─ 📄ref.js
│  │  │  │  │  │  │  ├─ 📄required.js
│  │  │  │  │  │  │  ├─ 📄uniqueItems.js
│  │  │  │  │  │  │  ├─ 📄validate.js
│  │  │  │  │  │  │  ├─ 📄_limit.js
│  │  │  │  │  │  │  ├─ 📄_limitItems.js
│  │  │  │  │  │  │  ├─ 📄_limitLength.js
│  │  │  │  │  │  │  └─ 📄_limitProperties.js
│  │  │  │  │  │  ├─ 📁refs
│  │  │  │  │  │  │  ├─ 📄data.json
│  │  │  │  │  │  │  ├─ 📄json-schema-draft-04.json
│  │  │  │  │  │  │  ├─ 📄json-schema-draft-06.json
│  │  │  │  │  │  │  ├─ 📄json-schema-draft-07.json
│  │  │  │  │  │  │  └─ 📄json-schema-secure.json
│  │  │  │  │  │  ├─ 📄ajv.d.ts
│  │  │  │  │  │  ├─ 📄ajv.js
│  │  │  │  │  │  ├─ 📄cache.js
│  │  │  │  │  │  ├─ 📄data.js
│  │  │  │  │  │  ├─ 📄definition_schema.js
│  │  │  │  │  │  └─ 📄keyword.js
│  │  │  │  │  ├─ 📁scripts
│  │  │  │  │  │  ├─ 📄.eslintrc.yml
│  │  │  │  │  │  ├─ 📄bundle.js
│  │  │  │  │  │  ├─ 📄compile-dots.js
│  │  │  │  │  │  ├─ 📄info
│  │  │  │  │  │  ├─ 📄prepare-tests
│  │  │  │  │  │  ├─ 📄publish-built-version
│  │  │  │  │  │  └─ 📄travis-gh-pages
│  │  │  │  │  ├─ 📄.tonic_example.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁ansi-regex
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁ansi-styles
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁argparse
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄sub.js
│  │  │  │  │  │  └─ 📄textwrap.js
│  │  │  │  │  ├─ 📄argparse.js
│  │  │  │  │  ├─ 📄CHANGELOG.md
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁array-union
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁balanced-match
│  │  │  │  │  ├─ 📁.github
│  │  │  │  │  │  └─ 📄FUNDING.yml
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE.md
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁brace-expansion
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁braces
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄compile.js
│  │  │  │  │  │  ├─ 📄constants.js
│  │  │  │  │  │  ├─ 📄expand.js
│  │  │  │  │  │  ├─ 📄parse.js
│  │  │  │  │  │  ├─ 📄stringify.js
│  │  │  │  │  │  └─ 📄utils.js
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁callsites
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁chalk
│  │  │  │  │  ├─ 📁source
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄templates.js
│  │  │  │  │  │  └─ 📄util.js
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁color-convert
│  │  │  │  │  ├─ 📄CHANGELOG.md
│  │  │  │  │  ├─ 📄conversions.js
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄README.md
│  │  │  │  │  └─ 📄route.js
│  │  │  │  ├─ 📁color-name
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁concat-map
│  │  │  │  │  ├─ 📁example
│  │  │  │  │  │  └─ 📄map.js
│  │  │  │  │  ├─ 📁test
│  │  │  │  │  │  └─ 📄map.js
│  │  │  │  │  ├─ 📄.travis.yml
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.markdown
│  │  │  │  ├─ 📁cross-spawn
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📁util
│  │  │  │  │  │  │  ├─ 📄escape.js
│  │  │  │  │  │  │  ├─ 📄readShebang.js
│  │  │  │  │  │  │  └─ 📄resolveCommand.js
│  │  │  │  │  │  ├─ 📄enoent.js
│  │  │  │  │  │  └─ 📄parse.js
│  │  │  │  │  ├─ 📁node_modules
│  │  │  │  │  │  └─ 📁.bin
│  │  │  │  │  │     ├─ 📄node-which
│  │  │  │  │  │     ├─ 📄node-which.CMD
│  │  │  │  │  │     └─ 📄node-which.ps1
│  │  │  │  │  ├─ 📄CHANGELOG.md
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁csstype
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js.flow
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁debug
│  │  │  │  │  ├─ 📁src
│  │  │  │  │  │  ├─ 📄browser.js
│  │  │  │  │  │  ├─ 📄common.js
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  └─ 📄node.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁deep-is
│  │  │  │  │  ├─ 📁example
│  │  │  │  │  │  └─ 📄cmp.js
│  │  │  │  │  ├─ 📁test
│  │  │  │  │  │  ├─ 📄cmp.js
│  │  │  │  │  │  ├─ 📄NaN.js
│  │  │  │  │  │  └─ 📄neg-vs-pos-0.js
│  │  │  │  │  ├─ 📄.travis.yml
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.markdown
│  │  │  │  ├─ 📁dir-glob
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁esbuild
│  │  │  │  │  ├─ 📁bin
│  │  │  │  │  │  └─ 📄esbuild
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄main.d.ts
│  │  │  │  │  │  └─ 📄main.js
│  │  │  │  │  ├─ 📁node_modules
│  │  │  │  │  │  └─ 📁.bin
│  │  │  │  │  │     ├─ 📄esbuild
│  │  │  │  │  │     ├─ 📄esbuild.CMD
│  │  │  │  │  │     └─ 📄esbuild.ps1
│  │  │  │  │  ├─ 📄install.js
│  │  │  │  │  ├─ 📄LICENSE.md
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁escape-string-regexp
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁espree
│  │  │  │  │  ├─ 📁dist
│  │  │  │  │  │  └─ 📄espree.cjs
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄espree.js
│  │  │  │  │  │  ├─ 📄features.js
│  │  │  │  │  │  ├─ 📄options.js
│  │  │  │  │  │  ├─ 📄token-translator.js
│  │  │  │  │  │  └─ 📄version.js
│  │  │  │  │  ├─ 📁node_modules
│  │  │  │  │  │  └─ 📁.bin
│  │  │  │  │  │     ├─ 📄acorn
│  │  │  │  │  │     ├─ 📄acorn.CMD
│  │  │  │  │  │     └─ 📄acorn.ps1
│  │  │  │  │  ├─ 📄espree.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁esquery
│  │  │  │  │  ├─ 📁dist
│  │  │  │  │  │  ├─ 📄esquery.esm.js
│  │  │  │  │  │  ├─ 📄esquery.esm.min.js
│  │  │  │  │  │  ├─ 📄esquery.esm.min.js.map
│  │  │  │  │  │  ├─ 📄esquery.js
│  │  │  │  │  │  ├─ 📄esquery.lite.js
│  │  │  │  │  │  ├─ 📄esquery.lite.min.js
│  │  │  │  │  │  ├─ 📄esquery.lite.min.js.map
│  │  │  │  │  │  ├─ 📄esquery.min.js
│  │  │  │  │  │  └─ 📄esquery.min.js.map
│  │  │  │  │  ├─ 📄license.txt
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄parser.js
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁esrecurse
│  │  │  │  │  ├─ 📄.babelrc
│  │  │  │  │  ├─ 📄esrecurse.js
│  │  │  │  │  ├─ 📄gulpfile.babel.js
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁estraverse
│  │  │  │  │  ├─ 📄.jshintrc
│  │  │  │  │  ├─ 📄estraverse.js
│  │  │  │  │  ├─ 📄gulpfile.js
│  │  │  │  │  ├─ 📄LICENSE.BSD
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁esutils
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄ast.js
│  │  │  │  │  │  ├─ 📄code.js
│  │  │  │  │  │  ├─ 📄keyword.js
│  │  │  │  │  │  └─ 📄utils.js
│  │  │  │  │  ├─ 📄LICENSE.BSD
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁fast-deep-equal
│  │  │  │  │  ├─ 📁es6
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄react.d.ts
│  │  │  │  │  │  └─ 📄react.js
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄react.d.ts
│  │  │  │  │  ├─ 📄react.js
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁fast-glob
│  │  │  │  │  ├─ 📁out
│  │  │  │  │  │  ├─ 📁managers
│  │  │  │  │  │  │  ├─ 📄tasks.d.ts
│  │  │  │  │  │  │  └─ 📄tasks.js
│  │  │  │  │  │  ├─ 📁providers
│  │  │  │  │  │  │  ├─ 📁filters
│  │  │  │  │  │  │  │  ├─ 📄deep.d.ts
│  │  │  │  │  │  │  │  ├─ 📄deep.js
│  │  │  │  │  │  │  │  ├─ 📄entry.d.ts
│  │  │  │  │  │  │  │  ├─ 📄entry.js
│  │  │  │  │  │  │  │  ├─ 📄error.d.ts
│  │  │  │  │  │  │  │  └─ 📄error.js
│  │  │  │  │  │  │  ├─ 📁matchers
│  │  │  │  │  │  │  │  ├─ 📄matcher.d.ts
│  │  │  │  │  │  │  │  ├─ 📄matcher.js
│  │  │  │  │  │  │  │  ├─ 📄partial.d.ts
│  │  │  │  │  │  │  │  └─ 📄partial.js
│  │  │  │  │  │  │  ├─ 📁transformers
│  │  │  │  │  │  │  │  ├─ 📄entry.d.ts
│  │  │  │  │  │  │  │  └─ 📄entry.js
│  │  │  │  │  │  │  ├─ 📄async.d.ts
│  │  │  │  │  │  │  ├─ 📄async.js
│  │  │  │  │  │  │  ├─ 📄provider.d.ts
│  │  │  │  │  │  │  ├─ 📄provider.js
│  │  │  │  │  │  │  ├─ 📄stream.d.ts
│  │  │  │  │  │  │  ├─ 📄stream.js
│  │  │  │  │  │  │  ├─ 📄sync.d.ts
│  │  │  │  │  │  │  └─ 📄sync.js
│  │  │  │  │  │  ├─ 📁readers
│  │  │  │  │  │  │  ├─ 📄async.d.ts
│  │  │  │  │  │  │  ├─ 📄async.js
│  │  │  │  │  │  │  ├─ 📄reader.d.ts
│  │  │  │  │  │  │  ├─ 📄reader.js
│  │  │  │  │  │  │  ├─ 📄stream.d.ts
│  │  │  │  │  │  │  ├─ 📄stream.js
│  │  │  │  │  │  │  ├─ 📄sync.d.ts
│  │  │  │  │  │  │  └─ 📄sync.js
│  │  │  │  │  │  ├─ 📁types
│  │  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  │  └─ 📄index.js
│  │  │  │  │  │  ├─ 📁utils
│  │  │  │  │  │  │  ├─ 📄array.d.ts
│  │  │  │  │  │  │  ├─ 📄array.js
│  │  │  │  │  │  │  ├─ 📄errno.d.ts
│  │  │  │  │  │  │  ├─ 📄errno.js
│  │  │  │  │  │  │  ├─ 📄fs.d.ts
│  │  │  │  │  │  │  ├─ 📄fs.js
│  │  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  │  ├─ 📄path.d.ts
│  │  │  │  │  │  │  ├─ 📄path.js
│  │  │  │  │  │  │  ├─ 📄pattern.d.ts
│  │  │  │  │  │  │  ├─ 📄pattern.js
│  │  │  │  │  │  │  ├─ 📄stream.d.ts
│  │  │  │  │  │  │  ├─ 📄stream.js
│  │  │  │  │  │  │  ├─ 📄string.d.ts
│  │  │  │  │  │  │  └─ 📄string.js
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄settings.d.ts
│  │  │  │  │  │  └─ 📄settings.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁fast-json-stable-stringify
│  │  │  │  │  ├─ 📁.github
│  │  │  │  │  │  └─ 📄FUNDING.yml
│  │  │  │  │  ├─ 📁benchmark
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  └─ 📄test.json
│  │  │  │  │  ├─ 📁example
│  │  │  │  │  │  ├─ 📄key_cmp.js
│  │  │  │  │  │  ├─ 📄nested.js
│  │  │  │  │  │  ├─ 📄str.js
│  │  │  │  │  │  └─ 📄value_cmp.js
│  │  │  │  │  ├─ 📁test
│  │  │  │  │  │  ├─ 📄cmp.js
│  │  │  │  │  │  ├─ 📄nested.js
│  │  │  │  │  │  ├─ 📄str.js
│  │  │  │  │  │  └─ 📄to-json.js
│  │  │  │  │  ├─ 📄.eslintrc.yml
│  │  │  │  │  ├─ 📄.travis.yml
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁fast-levenshtein
│  │  │  │  │  ├─ 📄levenshtein.js
│  │  │  │  │  ├─ 📄LICENSE.md
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁fastq
│  │  │  │  │  ├─ 📁.github
│  │  │  │  │  │  ├─ 📁workflows
│  │  │  │  │  │  │  └─ 📄ci.yml
│  │  │  │  │  │  └─ 📄dependabot.yml
│  │  │  │  │  ├─ 📁test
│  │  │  │  │  │  ├─ 📄example.ts
│  │  │  │  │  │  ├─ 📄promise.js
│  │  │  │  │  │  ├─ 📄test.js
│  │  │  │  │  │  └─ 📄tsconfig.json
│  │  │  │  │  ├─ 📄bench.js
│  │  │  │  │  ├─ 📄example.js
│  │  │  │  │  ├─ 📄example.mjs
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄queue.js
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁file-entry-cache
│  │  │  │  │  ├─ 📄cache.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁fill-range
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁find-up
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁flat-cache
│  │  │  │  │  ├─ 📁src
│  │  │  │  │  │  ├─ 📄cache.js
│  │  │  │  │  │  ├─ 📄del.js
│  │  │  │  │  │  └─ 📄utils.js
│  │  │  │  │  ├─ 📄changelog.md
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁flatted
│  │  │  │  │  ├─ 📁cjs
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  └─ 📄package.json
│  │  │  │  │  ├─ 📁esm
│  │  │  │  │  │  └─ 📄index.js
│  │  │  │  │  ├─ 📁php
│  │  │  │  │  │  └─ 📄flatted.php
│  │  │  │  │  ├─ 📁python
│  │  │  │  │  │  ├─ 📁__pycache__
│  │  │  │  │  │  │  └─ 📄flatted.cpython-311.pyc
│  │  │  │  │  │  ├─ 📄flatted.py
│  │  │  │  │  │  └─ 📄test.py
│  │  │  │  │  ├─ 📁types
│  │  │  │  │  │  └─ 📄index.d.ts
│  │  │  │  │  ├─ 📄es.js
│  │  │  │  │  ├─ 📄esm.js
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄min.js
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁glob-parent
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁globby
│  │  │  │  │  ├─ 📄gitignore.js
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄readme.md
│  │  │  │  │  └─ 📄stream-utils.js
│  │  │  │  ├─ 📁graphemer
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄boundaries.d.ts
│  │  │  │  │  │  ├─ 📄boundaries.d.ts.map
│  │  │  │  │  │  ├─ 📄boundaries.js
│  │  │  │  │  │  ├─ 📄Graphemer.d.ts
│  │  │  │  │  │  ├─ 📄Graphemer.d.ts.map
│  │  │  │  │  │  ├─ 📄Graphemer.js
│  │  │  │  │  │  ├─ 📄GraphemerHelper.d.ts
│  │  │  │  │  │  ├─ 📄GraphemerHelper.d.ts.map
│  │  │  │  │  │  ├─ 📄GraphemerHelper.js
│  │  │  │  │  │  ├─ 📄GraphemerIterator.d.ts
│  │  │  │  │  │  ├─ 📄GraphemerIterator.d.ts.map
│  │  │  │  │  │  ├─ 📄GraphemerIterator.js
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  │  └─ 📄index.js
│  │  │  │  │  ├─ 📄CHANGELOG.md
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁has-flag
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁ignore
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄legacy.js
│  │  │  │  │  ├─ 📄LICENSE-MIT
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁import-fresh
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁imurmurhash
│  │  │  │  │  ├─ 📄imurmurhash.js
│  │  │  │  │  ├─ 📄imurmurhash.min.js
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁is-extglob
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁is-glob
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁is-number
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁is-path-inside
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁isexe
│  │  │  │  │  ├─ 📁test
│  │  │  │  │  │  └─ 📄basic.js
│  │  │  │  │  ├─ 📄.npmignore
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄mode.js
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄README.md
│  │  │  │  │  └─ 📄windows.js
│  │  │  │  ├─ 📁js-tokens
│  │  │  │  │  ├─ 📄CHANGELOG.md
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁js-yaml
│  │  │  │  │  ├─ 📁bin
│  │  │  │  │  │  └─ 📄js-yaml.js
│  │  │  │  │  ├─ 📁dist
│  │  │  │  │  │  ├─ 📄js-yaml.js
│  │  │  │  │  │  ├─ 📄js-yaml.min.js
│  │  │  │  │  │  └─ 📄js-yaml.mjs
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📁schema
│  │  │  │  │  │  │  ├─ 📄core.js
│  │  │  │  │  │  │  ├─ 📄default.js
│  │  │  │  │  │  │  ├─ 📄failsafe.js
│  │  │  │  │  │  │  └─ 📄json.js
│  │  │  │  │  │  ├─ 📁type
│  │  │  │  │  │  │  ├─ 📄binary.js
│  │  │  │  │  │  │  ├─ 📄bool.js
│  │  │  │  │  │  │  ├─ 📄float.js
│  │  │  │  │  │  │  ├─ 📄int.js
│  │  │  │  │  │  │  ├─ 📄map.js
│  │  │  │  │  │  │  ├─ 📄merge.js
│  │  │  │  │  │  │  ├─ 📄null.js
│  │  │  │  │  │  │  ├─ 📄omap.js
│  │  │  │  │  │  │  ├─ 📄pairs.js
│  │  │  │  │  │  │  ├─ 📄seq.js
│  │  │  │  │  │  │  ├─ 📄set.js
│  │  │  │  │  │  │  ├─ 📄str.js
│  │  │  │  │  │  │  └─ 📄timestamp.js
│  │  │  │  │  │  ├─ 📄common.js
│  │  │  │  │  │  ├─ 📄dumper.js
│  │  │  │  │  │  ├─ 📄exception.js
│  │  │  │  │  │  ├─ 📄loader.js
│  │  │  │  │  │  ├─ 📄schema.js
│  │  │  │  │  │  ├─ 📄snippet.js
│  │  │  │  │  │  └─ 📄type.js
│  │  │  │  │  ├─ 📄CHANGELOG.md
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁json-buffer
│  │  │  │  │  ├─ 📁test
│  │  │  │  │  │  └─ 📄index.js
│  │  │  │  │  ├─ 📄.travis.yml
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁json-schema-traverse
│  │  │  │  │  ├─ 📁spec
│  │  │  │  │  │  ├─ 📁fixtures
│  │  │  │  │  │  │  └─ 📄schema.js
│  │  │  │  │  │  ├─ 📄.eslintrc.yml
│  │  │  │  │  │  └─ 📄index.spec.js
│  │  │  │  │  ├─ 📄.eslintrc.yml
│  │  │  │  │  ├─ 📄.travis.yml
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁json-stable-stringify-without-jsonify
│  │  │  │  │  ├─ 📁example
│  │  │  │  │  │  ├─ 📄key_cmp.js
│  │  │  │  │  │  ├─ 📄nested.js
│  │  │  │  │  │  ├─ 📄str.js
│  │  │  │  │  │  └─ 📄value_cmp.js
│  │  │  │  │  ├─ 📁test
│  │  │  │  │  │  ├─ 📄cmp.js
│  │  │  │  │  │  ├─ 📄nested.js
│  │  │  │  │  │  ├─ 📄replacer.js
│  │  │  │  │  │  ├─ 📄space.js
│  │  │  │  │  │  ├─ 📄str.js
│  │  │  │  │  │  └─ 📄to-json.js
│  │  │  │  │  ├─ 📄.npmignore
│  │  │  │  │  ├─ 📄.travis.yml
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.markdown
│  │  │  │  ├─ 📁keyv
│  │  │  │  │  ├─ 📁src
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  └─ 📄index.js
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁levn
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄cast.js
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  └─ 📄parse-string.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁locate-path
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁lodash.merge
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁loose-envify
│  │  │  │  │  ├─ 📄cli.js
│  │  │  │  │  ├─ 📄custom.js
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄loose-envify.js
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄README.md
│  │  │  │  │  └─ 📄replace.js
│  │  │  │  ├─ 📁merge2
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁micromatch
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁minimatch
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄minimatch.js
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁ms
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license.md
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁nanoid
│  │  │  │  │  ├─ 📁async
│  │  │  │  │  │  ├─ 📄index.browser.cjs
│  │  │  │  │  │  ├─ 📄index.browser.js
│  │  │  │  │  │  ├─ 📄index.cjs
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.native.js
│  │  │  │  │  │  └─ 📄package.json
│  │  │  │  │  ├─ 📁bin
│  │  │  │  │  │  └─ 📄nanoid.cjs
│  │  │  │  │  ├─ 📁non-secure
│  │  │  │  │  │  ├─ 📄index.cjs
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  └─ 📄package.json
│  │  │  │  │  ├─ 📁url-alphabet
│  │  │  │  │  │  ├─ 📄index.cjs
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  └─ 📄package.json
│  │  │  │  │  ├─ 📄index.browser.cjs
│  │  │  │  │  ├─ 📄index.browser.js
│  │  │  │  │  ├─ 📄index.cjs
│  │  │  │  │  ├─ 📄index.d.cts
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄nanoid.js
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁natural-compare
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁optionator
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄help.js
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  └─ 📄util.js
│  │  │  │  │  ├─ 📄CHANGELOG.md
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁p-limit
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁p-locate
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁parent-module
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁path-exists
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁path-key
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁path-type
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁picocolors
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄picocolors.browser.js
│  │  │  │  │  ├─ 📄picocolors.d.ts
│  │  │  │  │  ├─ 📄picocolors.js
│  │  │  │  │  ├─ 📄README.md
│  │  │  │  │  └─ 📄types.ts
│  │  │  │  ├─ 📁picomatch
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄constants.js
│  │  │  │  │  │  ├─ 📄parse.js
│  │  │  │  │  │  ├─ 📄picomatch.js
│  │  │  │  │  │  ├─ 📄scan.js
│  │  │  │  │  │  └─ 📄utils.js
│  │  │  │  │  ├─ 📄CHANGELOG.md
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁postcss
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄at-rule.d.ts
│  │  │  │  │  │  ├─ 📄at-rule.js
│  │  │  │  │  │  ├─ 📄comment.d.ts
│  │  │  │  │  │  ├─ 📄comment.js
│  │  │  │  │  │  ├─ 📄container.d.ts
│  │  │  │  │  │  ├─ 📄container.js
│  │  │  │  │  │  ├─ 📄css-syntax-error.d.ts
│  │  │  │  │  │  ├─ 📄css-syntax-error.js
│  │  │  │  │  │  ├─ 📄declaration.d.ts
│  │  │  │  │  │  ├─ 📄declaration.js
│  │  │  │  │  │  ├─ 📄document.d.ts
│  │  │  │  │  │  ├─ 📄document.js
│  │  │  │  │  │  ├─ 📄fromJSON.d.ts
│  │  │  │  │  │  ├─ 📄fromJSON.js
│  │  │  │  │  │  ├─ 📄input.d.ts
│  │  │  │  │  │  ├─ 📄input.js
│  │  │  │  │  │  ├─ 📄lazy-result.d.ts
│  │  │  │  │  │  ├─ 📄lazy-result.js
│  │  │  │  │  │  ├─ 📄list.d.ts
│  │  │  │  │  │  ├─ 📄list.js
│  │  │  │  │  │  ├─ 📄map-generator.js
│  │  │  │  │  │  ├─ 📄no-work-result.d.ts
│  │  │  │  │  │  ├─ 📄no-work-result.js
│  │  │  │  │  │  ├─ 📄node.d.ts
│  │  │  │  │  │  ├─ 📄node.js
│  │  │  │  │  │  ├─ 📄parse.d.ts
│  │  │  │  │  │  ├─ 📄parse.js
│  │  │  │  │  │  ├─ 📄parser.js
│  │  │  │  │  │  ├─ 📄postcss.d.mts
│  │  │  │  │  │  ├─ 📄postcss.d.ts
│  │  │  │  │  │  ├─ 📄postcss.js
│  │  │  │  │  │  ├─ 📄postcss.mjs
│  │  │  │  │  │  ├─ 📄previous-map.d.ts
│  │  │  │  │  │  ├─ 📄previous-map.js
│  │  │  │  │  │  ├─ 📄processor.d.ts
│  │  │  │  │  │  ├─ 📄processor.js
│  │  │  │  │  │  ├─ 📄result.d.ts
│  │  │  │  │  │  ├─ 📄result.js
│  │  │  │  │  │  ├─ 📄root.d.ts
│  │  │  │  │  │  ├─ 📄root.js
│  │  │  │  │  │  ├─ 📄rule.d.ts
│  │  │  │  │  │  ├─ 📄rule.js
│  │  │  │  │  │  ├─ 📄stringifier.d.ts
│  │  │  │  │  │  ├─ 📄stringifier.js
│  │  │  │  │  │  ├─ 📄stringify.d.ts
│  │  │  │  │  │  ├─ 📄stringify.js
│  │  │  │  │  │  ├─ 📄symbols.js
│  │  │  │  │  │  ├─ 📄terminal-highlight.js
│  │  │  │  │  │  ├─ 📄tokenize.js
│  │  │  │  │  │  ├─ 📄warn-once.js
│  │  │  │  │  │  ├─ 📄warning.d.ts
│  │  │  │  │  │  └─ 📄warning.js
│  │  │  │  │  ├─ 📁node_modules
│  │  │  │  │  │  └─ 📁.bin
│  │  │  │  │  │     ├─ 📄nanoid
│  │  │  │  │  │     ├─ 📄nanoid.CMD
│  │  │  │  │  │     └─ 📄nanoid.ps1
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁prelude-ls
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄Func.js
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄List.js
│  │  │  │  │  │  ├─ 📄Num.js
│  │  │  │  │  │  ├─ 📄Obj.js
│  │  │  │  │  │  └─ 📄Str.js
│  │  │  │  │  ├─ 📄CHANGELOG.md
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁punycode
│  │  │  │  │  ├─ 📄LICENSE-MIT.txt
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄punycode.es6.js
│  │  │  │  │  ├─ 📄punycode.js
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁queue-microtask
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁resolve-from
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁reusify
│  │  │  │  │  ├─ 📁benchmarks
│  │  │  │  │  │  ├─ 📄createNoCodeFunction.js
│  │  │  │  │  │  ├─ 📄fib.js
│  │  │  │  │  │  └─ 📄reuseNoCodeFunction.js
│  │  │  │  │  ├─ 📄.coveralls.yml
│  │  │  │  │  ├─ 📄.travis.yml
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄README.md
│  │  │  │  │  ├─ 📄reusify.js
│  │  │  │  │  └─ 📄test.js
│  │  │  │  ├─ 📁rollup
│  │  │  │  │  ├─ 📁dist
│  │  │  │  │  │  ├─ 📁bin
│  │  │  │  │  │  │  └─ 📄rollup
│  │  │  │  │  │  ├─ 📁es
│  │  │  │  │  │  │  ├─ 📁shared
│  │  │  │  │  │  │  │  ├─ 📄node-entry.js
│  │  │  │  │  │  │  │  ├─ 📄parseAst.js
│  │  │  │  │  │  │  │  └─ 📄watch.js
│  │  │  │  │  │  │  ├─ 📄getLogFilter.js
│  │  │  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  │  │  ├─ 📄parseAst.js
│  │  │  │  │  │  │  └─ 📄rollup.js
│  │  │  │  │  │  ├─ 📁shared
│  │  │  │  │  │  │  ├─ 📄fsevents-importer.js
│  │  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  │  ├─ 📄loadConfigFile.js
│  │  │  │  │  │  │  ├─ 📄parseAst.js
│  │  │  │  │  │  │  ├─ 📄rollup.js
│  │  │  │  │  │  │  ├─ 📄watch-cli.js
│  │  │  │  │  │  │  └─ 📄watch.js
│  │  │  │  │  │  ├─ 📄getLogFilter.d.ts
│  │  │  │  │  │  ├─ 📄getLogFilter.js
│  │  │  │  │  │  ├─ 📄loadConfigFile.d.ts
│  │  │  │  │  │  ├─ 📄loadConfigFile.js
│  │  │  │  │  │  ├─ 📄native.js
│  │  │  │  │  │  ├─ 📄parseAst.d.ts
│  │  │  │  │  │  ├─ 📄parseAst.js
│  │  │  │  │  │  ├─ 📄rollup.d.ts
│  │  │  │  │  │  └─ 📄rollup.js
│  │  │  │  │  ├─ 📄LICENSE.md
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁run-parallel
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁scheduler
│  │  │  │  │  ├─ 📁cjs
│  │  │  │  │  │  ├─ 📄scheduler-unstable_mock.development.js
│  │  │  │  │  │  ├─ 📄scheduler-unstable_mock.production.min.js
│  │  │  │  │  │  ├─ 📄scheduler-unstable_post_task.development.js
│  │  │  │  │  │  ├─ 📄scheduler-unstable_post_task.production.min.js
│  │  │  │  │  │  ├─ 📄scheduler.development.js
│  │  │  │  │  │  └─ 📄scheduler.production.min.js
│  │  │  │  │  ├─ 📁node_modules
│  │  │  │  │  │  └─ 📁.bin
│  │  │  │  │  │     ├─ 📄loose-envify
│  │  │  │  │  │     ├─ 📄loose-envify.CMD
│  │  │  │  │  │     └─ 📄loose-envify.ps1
│  │  │  │  │  ├─ 📁umd
│  │  │  │  │  │  ├─ 📄scheduler-unstable_mock.development.js
│  │  │  │  │  │  ├─ 📄scheduler-unstable_mock.production.min.js
│  │  │  │  │  │  ├─ 📄scheduler.development.js
│  │  │  │  │  │  ├─ 📄scheduler.production.min.js
│  │  │  │  │  │  └─ 📄scheduler.profiling.min.js
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄README.md
│  │  │  │  │  ├─ 📄unstable_mock.js
│  │  │  │  │  └─ 📄unstable_post_task.js
│  │  │  │  ├─ 📁semver
│  │  │  │  │  ├─ 📁bin
│  │  │  │  │  │  └─ 📄semver.js
│  │  │  │  │  ├─ 📁classes
│  │  │  │  │  │  ├─ 📄comparator.js
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄range.js
│  │  │  │  │  │  └─ 📄semver.js
│  │  │  │  │  ├─ 📁functions
│  │  │  │  │  │  ├─ 📄clean.js
│  │  │  │  │  │  ├─ 📄cmp.js
│  │  │  │  │  │  ├─ 📄coerce.js
│  │  │  │  │  │  ├─ 📄compare-build.js
│  │  │  │  │  │  ├─ 📄compare-loose.js
│  │  │  │  │  │  ├─ 📄compare.js
│  │  │  │  │  │  ├─ 📄diff.js
│  │  │  │  │  │  ├─ 📄eq.js
│  │  │  │  │  │  ├─ 📄gt.js
│  │  │  │  │  │  ├─ 📄gte.js
│  │  │  │  │  │  ├─ 📄inc.js
│  │  │  │  │  │  ├─ 📄lt.js
│  │  │  │  │  │  ├─ 📄lte.js
│  │  │  │  │  │  ├─ 📄major.js
│  │  │  │  │  │  ├─ 📄minor.js
│  │  │  │  │  │  ├─ 📄neq.js
│  │  │  │  │  │  ├─ 📄parse.js
│  │  │  │  │  │  ├─ 📄patch.js
│  │  │  │  │  │  ├─ 📄prerelease.js
│  │  │  │  │  │  ├─ 📄rcompare.js
│  │  │  │  │  │  ├─ 📄rsort.js
│  │  │  │  │  │  ├─ 📄satisfies.js
│  │  │  │  │  │  ├─ 📄sort.js
│  │  │  │  │  │  └─ 📄valid.js
│  │  │  │  │  ├─ 📁internal
│  │  │  │  │  │  ├─ 📄constants.js
│  │  │  │  │  │  ├─ 📄debug.js
│  │  │  │  │  │  ├─ 📄identifiers.js
│  │  │  │  │  │  ├─ 📄lrucache.js
│  │  │  │  │  │  ├─ 📄parse-options.js
│  │  │  │  │  │  └─ 📄re.js
│  │  │  │  │  ├─ 📁ranges
│  │  │  │  │  │  ├─ 📄gtr.js
│  │  │  │  │  │  ├─ 📄intersects.js
│  │  │  │  │  │  ├─ 📄ltr.js
│  │  │  │  │  │  ├─ 📄max-satisfying.js
│  │  │  │  │  │  ├─ 📄min-satisfying.js
│  │  │  │  │  │  ├─ 📄min-version.js
│  │  │  │  │  │  ├─ 📄outside.js
│  │  │  │  │  │  ├─ 📄simplify.js
│  │  │  │  │  │  ├─ 📄subset.js
│  │  │  │  │  │  ├─ 📄to-comparators.js
│  │  │  │  │  │  └─ 📄valid.js
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄preload.js
│  │  │  │  │  ├─ 📄range.bnf
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁shebang-command
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁shebang-regex
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁slash
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁source-map-js
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄array-set.js
│  │  │  │  │  │  ├─ 📄base64-vlq.js
│  │  │  │  │  │  ├─ 📄base64.js
│  │  │  │  │  │  ├─ 📄binary-search.js
│  │  │  │  │  │  ├─ 📄mapping-list.js
│  │  │  │  │  │  ├─ 📄quick-sort.js
│  │  │  │  │  │  ├─ 📄source-map-consumer.js
│  │  │  │  │  │  ├─ 📄source-map-generator.js
│  │  │  │  │  │  ├─ 📄source-node.js
│  │  │  │  │  │  └─ 📄util.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄README.md
│  │  │  │  │  ├─ 📄source-map.d.ts
│  │  │  │  │  └─ 📄source-map.js
│  │  │  │  ├─ 📁strip-ansi
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁strip-json-comments
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁supports-color
│  │  │  │  │  ├─ 📄browser.js
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄license
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.md
│  │  │  │  ├─ 📁text-table
│  │  │  │  │  ├─ 📁example
│  │  │  │  │  │  ├─ 📄align.js
│  │  │  │  │  │  ├─ 📄center.js
│  │  │  │  │  │  ├─ 📄dotalign.js
│  │  │  │  │  │  ├─ 📄doubledot.js
│  │  │  │  │  │  └─ 📄table.js
│  │  │  │  │  ├─ 📁test
│  │  │  │  │  │  ├─ 📄align.js
│  │  │  │  │  │  ├─ 📄ansi-colors.js
│  │  │  │  │  │  ├─ 📄center.js
│  │  │  │  │  │  ├─ 📄dotalign.js
│  │  │  │  │  │  ├─ 📄doubledot.js
│  │  │  │  │  │  └─ 📄table.js
│  │  │  │  │  ├─ 📄.travis.yml
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄readme.markdown
│  │  │  │  ├─ 📁to-regex-range
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁ts-api-utils
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄index.cjs
│  │  │  │  │  │  ├─ 📄index.cjs.map
│  │  │  │  │  │  ├─ 📄index.d.cts
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  └─ 📄index.js.map
│  │  │  │  │  ├─ 📁node_modules
│  │  │  │  │  │  └─ 📁.bin
│  │  │  │  │  │     ├─ 📄tsc
│  │  │  │  │  │     ├─ 📄tsc.CMD
│  │  │  │  │  │     ├─ 📄tsc.ps1
│  │  │  │  │  │     ├─ 📄tsserver
│  │  │  │  │  │     ├─ 📄tsserver.CMD
│  │  │  │  │  │     └─ 📄tsserver.ps1
│  │  │  │  │  ├─ 📄LICENSE.md
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁type-check
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄check.js
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  └─ 📄parse-type.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  ├─ 📁uri-js
│  │  │  │  │  ├─ 📁dist
│  │  │  │  │  │  ├─ 📁es5
│  │  │  │  │  │  │  ├─ 📄uri.all.d.ts
│  │  │  │  │  │  │  ├─ 📄uri.all.js
│  │  │  │  │  │  │  ├─ 📄uri.all.js.map
│  │  │  │  │  │  │  ├─ 📄uri.all.min.d.ts
│  │  │  │  │  │  │  ├─ 📄uri.all.min.js
│  │  │  │  │  │  │  └─ 📄uri.all.min.js.map
│  │  │  │  │  │  └─ 📁esnext
│  │  │  │  │  │     ├─ 📁schemes
│  │  │  │  │  │     │  ├─ 📄http.d.ts
│  │  │  │  │  │     │  ├─ 📄http.js
│  │  │  │  │  │     │  ├─ 📄http.js.map
│  │  │  │  │  │     │  ├─ 📄https.d.ts
│  │  │  │  │  │     │  ├─ 📄https.js
│  │  │  │  │  │     │  ├─ 📄https.js.map
│  │  │  │  │  │     │  ├─ 📄mailto.d.ts
│  │  │  │  │  │     │  ├─ 📄mailto.js
│  │  │  │  │  │     │  ├─ 📄mailto.js.map
│  │  │  │  │  │     │  ├─ 📄urn-uuid.d.ts
│  │  │  │  │  │     │  ├─ 📄urn-uuid.js
│  │  │  │  │  │     │  ├─ 📄urn-uuid.js.map
│  │  │  │  │  │     │  ├─ 📄urn.d.ts
│  │  │  │  │  │     │  ├─ 📄urn.js
│  │  │  │  │  │     │  ├─ 📄urn.js.map
│  │  │  │  │  │     │  ├─ 📄ws.d.ts
│  │  │  │  │  │     │  ├─ 📄ws.js
│  │  │  │  │  │     │  ├─ 📄ws.js.map
│  │  │  │  │  │     │  ├─ 📄wss.d.ts
│  │  │  │  │  │     │  ├─ 📄wss.js
│  │  │  │  │  │     │  └─ 📄wss.js.map
│  │  │  │  │  │     ├─ 📄index.d.ts
│  │  │  │  │  │     ├─ 📄index.js
│  │  │  │  │  │     ├─ 📄index.js.map
│  │  │  │  │  │     ├─ 📄regexps-iri.d.ts
│  │  │  │  │  │     ├─ 📄regexps-iri.js
│  │  │  │  │  │     ├─ 📄regexps-iri.js.map
│  │  │  │  │  │     ├─ 📄regexps-uri.d.ts
│  │  │  │  │  │     ├─ 📄regexps-uri.js
│  │  │  │  │  │     ├─ 📄regexps-uri.js.map
│  │  │  │  │  │     ├─ 📄uri.d.ts
│  │  │  │  │  │     ├─ 📄uri.js
│  │  │  │  │  │     ├─ 📄uri.js.map
│  │  │  │  │  │     ├─ 📄util.d.ts
│  │  │  │  │  │     ├─ 📄util.js
│  │  │  │  │  │     └─ 📄util.js.map
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄README.md
│  │  │  │  │  └─ 📄yarn.lock
│  │  │  │  ├─ 📁which
│  │  │  │  │  ├─ 📁bin
│  │  │  │  │  │  └─ 📄node-which
│  │  │  │  │  ├─ 📄CHANGELOG.md
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  ├─ 📄README.md
│  │  │  │  │  └─ 📄which.js
│  │  │  │  ├─ 📁word-wrap
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄LICENSE
│  │  │  │  │  ├─ 📄package.json
│  │  │  │  │  └─ 📄README.md
│  │  │  │  └─ 📁yocto-queue
│  │  │  │     ├─ 📄index.d.ts
│  │  │  │     ├─ 📄index.js
│  │  │  │     ├─ 📄license
│  │  │  │     ├─ 📄package.json
│  │  │  │     └─ 📄readme.md
│  │  │  ├─ 📁object-assign@4.1.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁object-assign
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁optionator@0.9.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁deep-is
│  │  │  │     │  ├─ 📁example
│  │  │  │     │  │  └─ 📄cmp.js
│  │  │  │     │  ├─ 📁test
│  │  │  │     │  │  ├─ 📄cmp.js
│  │  │  │     │  │  ├─ 📄NaN.js
│  │  │  │     │  │  └─ 📄neg-vs-pos-0.js
│  │  │  │     │  ├─ 📄.travis.yml
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.markdown
│  │  │  │     ├─ 📁fast-levenshtein
│  │  │  │     │  ├─ 📄levenshtein.js
│  │  │  │     │  ├─ 📄LICENSE.md
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁levn
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄cast.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄parse-string.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁optionator
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄help.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄util.js
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁prelude-ls
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄Func.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄List.js
│  │  │  │     │  │  ├─ 📄Num.js
│  │  │  │     │  │  ├─ 📄Obj.js
│  │  │  │     │  │  └─ 📄Str.js
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁type-check
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄check.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄parse-type.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁word-wrap
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁p-limit@3.1.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁p-limit
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁yocto-queue
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁p-locate@5.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁p-limit
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁p-locate
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁parent-module@1.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁callsites
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁parent-module
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁path-exists@4.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁path-exists
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁path-key@3.1.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁path-key
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁path-type@4.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁path-type
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁picocolors@1.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁picocolors
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄picocolors.browser.js
│  │  │  │        ├─ 📄picocolors.d.ts
│  │  │  │        ├─ 📄picocolors.js
│  │  │  │        ├─ 📄README.md
│  │  │  │        └─ 📄types.ts
│  │  │  ├─ 📁picomatch@2.3.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁picomatch
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄constants.js
│  │  │  │        │  ├─ 📄parse.js
│  │  │  │        │  ├─ 📄picomatch.js
│  │  │  │        │  ├─ 📄scan.js
│  │  │  │        │  └─ 📄utils.js
│  │  │  │        ├─ 📄CHANGELOG.md
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁postcss@8.4.41
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁nanoid
│  │  │  │     │  ├─ 📁async
│  │  │  │     │  │  ├─ 📄index.browser.cjs
│  │  │  │     │  │  ├─ 📄index.browser.js
│  │  │  │     │  │  ├─ 📄index.cjs
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄index.native.js
│  │  │  │     │  │  └─ 📄package.json
│  │  │  │     │  ├─ 📁bin
│  │  │  │     │  │  └─ 📄nanoid.cjs
│  │  │  │     │  ├─ 📁non-secure
│  │  │  │     │  │  ├─ 📄index.cjs
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄package.json
│  │  │  │     │  ├─ 📁url-alphabet
│  │  │  │     │  │  ├─ 📄index.cjs
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄package.json
│  │  │  │     │  ├─ 📄index.browser.cjs
│  │  │  │     │  ├─ 📄index.browser.js
│  │  │  │     │  ├─ 📄index.cjs
│  │  │  │     │  ├─ 📄index.d.cts
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄nanoid.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁picocolors
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄picocolors.browser.js
│  │  │  │     │  ├─ 📄picocolors.d.ts
│  │  │  │     │  ├─ 📄picocolors.js
│  │  │  │     │  ├─ 📄README.md
│  │  │  │     │  └─ 📄types.ts
│  │  │  │     ├─ 📁postcss
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄at-rule.d.ts
│  │  │  │     │  │  ├─ 📄at-rule.js
│  │  │  │     │  │  ├─ 📄comment.d.ts
│  │  │  │     │  │  ├─ 📄comment.js
│  │  │  │     │  │  ├─ 📄container.d.ts
│  │  │  │     │  │  ├─ 📄container.js
│  │  │  │     │  │  ├─ 📄css-syntax-error.d.ts
│  │  │  │     │  │  ├─ 📄css-syntax-error.js
│  │  │  │     │  │  ├─ 📄declaration.d.ts
│  │  │  │     │  │  ├─ 📄declaration.js
│  │  │  │     │  │  ├─ 📄document.d.ts
│  │  │  │     │  │  ├─ 📄document.js
│  │  │  │     │  │  ├─ 📄fromJSON.d.ts
│  │  │  │     │  │  ├─ 📄fromJSON.js
│  │  │  │     │  │  ├─ 📄input.d.ts
│  │  │  │     │  │  ├─ 📄input.js
│  │  │  │     │  │  ├─ 📄lazy-result.d.ts
│  │  │  │     │  │  ├─ 📄lazy-result.js
│  │  │  │     │  │  ├─ 📄list.d.ts
│  │  │  │     │  │  ├─ 📄list.js
│  │  │  │     │  │  ├─ 📄map-generator.js
│  │  │  │     │  │  ├─ 📄no-work-result.d.ts
│  │  │  │     │  │  ├─ 📄no-work-result.js
│  │  │  │     │  │  ├─ 📄node.d.ts
│  │  │  │     │  │  ├─ 📄node.js
│  │  │  │     │  │  ├─ 📄parse.d.ts
│  │  │  │     │  │  ├─ 📄parse.js
│  │  │  │     │  │  ├─ 📄parser.js
│  │  │  │     │  │  ├─ 📄postcss.d.mts
│  │  │  │     │  │  ├─ 📄postcss.d.ts
│  │  │  │     │  │  ├─ 📄postcss.js
│  │  │  │     │  │  ├─ 📄postcss.mjs
│  │  │  │     │  │  ├─ 📄previous-map.d.ts
│  │  │  │     │  │  ├─ 📄previous-map.js
│  │  │  │     │  │  ├─ 📄processor.d.ts
│  │  │  │     │  │  ├─ 📄processor.js
│  │  │  │     │  │  ├─ 📄result.d.ts
│  │  │  │     │  │  ├─ 📄result.js
│  │  │  │     │  │  ├─ 📄root.d.ts
│  │  │  │     │  │  ├─ 📄root.js
│  │  │  │     │  │  ├─ 📄rule.d.ts
│  │  │  │     │  │  ├─ 📄rule.js
│  │  │  │     │  │  ├─ 📄stringifier.d.ts
│  │  │  │     │  │  ├─ 📄stringifier.js
│  │  │  │     │  │  ├─ 📄stringify.d.ts
│  │  │  │     │  │  ├─ 📄stringify.js
│  │  │  │     │  │  ├─ 📄symbols.js
│  │  │  │     │  │  ├─ 📄terminal-highlight.js
│  │  │  │     │  │  ├─ 📄tokenize.js
│  │  │  │     │  │  ├─ 📄warn-once.js
│  │  │  │     │  │  ├─ 📄warning.d.ts
│  │  │  │     │  │  └─ 📄warning.js
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄nanoid
│  │  │  │     │  │     ├─ 📄nanoid.CMD
│  │  │  │     │  │     └─ 📄nanoid.ps1
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁source-map-js
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄array-set.js
│  │  │  │        │  ├─ 📄base64-vlq.js
│  │  │  │        │  ├─ 📄base64.js
│  │  │  │        │  ├─ 📄binary-search.js
│  │  │  │        │  ├─ 📄mapping-list.js
│  │  │  │        │  ├─ 📄quick-sort.js
│  │  │  │        │  ├─ 📄source-map-consumer.js
│  │  │  │        │  ├─ 📄source-map-generator.js
│  │  │  │        │  ├─ 📄source-node.js
│  │  │  │        │  └─ 📄util.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        ├─ 📄source-map.d.ts
│  │  │  │        └─ 📄source-map.js
│  │  │  ├─ 📁prelude-ls@1.2.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁prelude-ls
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄Func.js
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  ├─ 📄List.js
│  │  │  │        │  ├─ 📄Num.js
│  │  │  │        │  ├─ 📄Obj.js
│  │  │  │        │  └─ 📄Str.js
│  │  │  │        ├─ 📄CHANGELOG.md
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁prop-types@15.8.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁loose-envify
│  │  │  │     │  ├─ 📄cli.js
│  │  │  │     │  ├─ 📄custom.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄loose-envify.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄README.md
│  │  │  │     │  └─ 📄replace.js
│  │  │  │     ├─ 📁object-assign
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     ├─ 📁prop-types
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄has.js
│  │  │  │     │  │  └─ 📄ReactPropTypesSecret.js
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄loose-envify
│  │  │  │     │  │     ├─ 📄loose-envify.CMD
│  │  │  │     │  │     └─ 📄loose-envify.ps1
│  │  │  │     │  ├─ 📄checkPropTypes.js
│  │  │  │     │  ├─ 📄factory.js
│  │  │  │     │  ├─ 📄factoryWithThrowingShims.js
│  │  │  │     │  ├─ 📄factoryWithTypeCheckers.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄prop-types.js
│  │  │  │     │  ├─ 📄prop-types.min.js
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁react-is
│  │  │  │        ├─ 📁cjs
│  │  │  │        │  ├─ 📄react-is.development.js
│  │  │  │        │  └─ 📄react-is.production.min.js
│  │  │  │        ├─ 📁umd
│  │  │  │        │  ├─ 📄react-is.development.js
│  │  │  │        │  └─ 📄react-is.production.min.js
│  │  │  │        ├─ 📄build-info.json
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁punycode@2.3.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁punycode
│  │  │  │        ├─ 📄LICENSE-MIT.txt
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄punycode.es6.js
│  │  │  │        ├─ 📄punycode.js
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁queue-microtask@1.2.3
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁queue-microtask
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁react-dom@18.3.1_react@18.3.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁loose-envify
│  │  │  │     │  ├─ 📄cli.js
│  │  │  │     │  ├─ 📄custom.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄loose-envify.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄README.md
│  │  │  │     │  └─ 📄replace.js
│  │  │  │     ├─ 📁react
│  │  │  │     │  ├─ 📁cjs
│  │  │  │     │  │  ├─ 📄react-jsx-dev-runtime.development.js
│  │  │  │     │  │  ├─ 📄react-jsx-dev-runtime.production.min.js
│  │  │  │     │  │  ├─ 📄react-jsx-dev-runtime.profiling.min.js
│  │  │  │     │  │  ├─ 📄react-jsx-runtime.development.js
│  │  │  │     │  │  ├─ 📄react-jsx-runtime.production.min.js
│  │  │  │     │  │  ├─ 📄react-jsx-runtime.profiling.min.js
│  │  │  │     │  │  ├─ 📄react.development.js
│  │  │  │     │  │  ├─ 📄react.production.min.js
│  │  │  │     │  │  ├─ 📄react.shared-subset.development.js
│  │  │  │     │  │  └─ 📄react.shared-subset.production.min.js
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄loose-envify
│  │  │  │     │  │     ├─ 📄loose-envify.CMD
│  │  │  │     │  │     └─ 📄loose-envify.ps1
│  │  │  │     │  ├─ 📁umd
│  │  │  │     │  │  ├─ 📄react.development.js
│  │  │  │     │  │  ├─ 📄react.production.min.js
│  │  │  │     │  │  └─ 📄react.profiling.min.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄jsx-dev-runtime.js
│  │  │  │     │  ├─ 📄jsx-runtime.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄react.shared-subset.js
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁react-dom
│  │  │  │     │  ├─ 📁cjs
│  │  │  │     │  │  ├─ 📄react-dom-server-legacy.browser.development.js
│  │  │  │     │  │  ├─ 📄react-dom-server-legacy.browser.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom-server-legacy.node.development.js
│  │  │  │     │  │  ├─ 📄react-dom-server-legacy.node.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom-server.browser.development.js
│  │  │  │     │  │  ├─ 📄react-dom-server.browser.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom-server.node.development.js
│  │  │  │     │  │  ├─ 📄react-dom-server.node.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom-test-utils.development.js
│  │  │  │     │  │  ├─ 📄react-dom-test-utils.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom.development.js
│  │  │  │     │  │  ├─ 📄react-dom.production.min.js
│  │  │  │     │  │  └─ 📄react-dom.profiling.min.js
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄loose-envify
│  │  │  │     │  │     ├─ 📄loose-envify.CMD
│  │  │  │     │  │     └─ 📄loose-envify.ps1
│  │  │  │     │  ├─ 📁umd
│  │  │  │     │  │  ├─ 📄react-dom-server-legacy.browser.development.js
│  │  │  │     │  │  ├─ 📄react-dom-server-legacy.browser.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom-server.browser.development.js
│  │  │  │     │  │  ├─ 📄react-dom-server.browser.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom-test-utils.development.js
│  │  │  │     │  │  ├─ 📄react-dom-test-utils.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom.development.js
│  │  │  │     │  │  ├─ 📄react-dom.production.min.js
│  │  │  │     │  │  └─ 📄react-dom.profiling.min.js
│  │  │  │     │  ├─ 📄client.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄profiling.js
│  │  │  │     │  ├─ 📄README.md
│  │  │  │     │  ├─ 📄server.browser.js
│  │  │  │     │  ├─ 📄server.js
│  │  │  │     │  ├─ 📄server.node.js
│  │  │  │     │  └─ 📄test-utils.js
│  │  │  │     └─ 📁scheduler
│  │  │  │        ├─ 📁cjs
│  │  │  │        │  ├─ 📄scheduler-unstable_mock.development.js
│  │  │  │        │  ├─ 📄scheduler-unstable_mock.production.min.js
│  │  │  │        │  ├─ 📄scheduler-unstable_post_task.development.js
│  │  │  │        │  ├─ 📄scheduler-unstable_post_task.production.min.js
│  │  │  │        │  ├─ 📄scheduler.development.js
│  │  │  │        │  └─ 📄scheduler.production.min.js
│  │  │  │        ├─ 📁node_modules
│  │  │  │        │  └─ 📁.bin
│  │  │  │        │     ├─ 📄loose-envify
│  │  │  │        │     ├─ 📄loose-envify.CMD
│  │  │  │        │     └─ 📄loose-envify.ps1
│  │  │  │        ├─ 📁umd
│  │  │  │        │  ├─ 📄scheduler-unstable_mock.development.js
│  │  │  │        │  ├─ 📄scheduler-unstable_mock.production.min.js
│  │  │  │        │  ├─ 📄scheduler.development.js
│  │  │  │        │  ├─ 📄scheduler.production.min.js
│  │  │  │        │  └─ 📄scheduler.profiling.min.js
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        ├─ 📄unstable_mock.js
│  │  │  │        └─ 📄unstable_post_task.js
│  │  │  ├─ 📁react-is@16.13.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁react-is
│  │  │  │        ├─ 📁cjs
│  │  │  │        │  ├─ 📄react-is.development.js
│  │  │  │        │  └─ 📄react-is.production.min.js
│  │  │  │        ├─ 📁umd
│  │  │  │        │  ├─ 📄react-is.development.js
│  │  │  │        │  └─ 📄react-is.production.min.js
│  │  │  │        ├─ 📄build-info.json
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁react-lazyload@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁react
│  │  │  │     │  ├─ 📁cjs
│  │  │  │     │  │  ├─ 📄react-jsx-dev-runtime.development.js
│  │  │  │     │  │  ├─ 📄react-jsx-dev-runtime.production.min.js
│  │  │  │     │  │  ├─ 📄react-jsx-dev-runtime.profiling.min.js
│  │  │  │     │  │  ├─ 📄react-jsx-runtime.development.js
│  │  │  │     │  │  ├─ 📄react-jsx-runtime.production.min.js
│  │  │  │     │  │  ├─ 📄react-jsx-runtime.profiling.min.js
│  │  │  │     │  │  ├─ 📄react.development.js
│  │  │  │     │  │  ├─ 📄react.production.min.js
│  │  │  │     │  │  ├─ 📄react.shared-subset.development.js
│  │  │  │     │  │  └─ 📄react.shared-subset.production.min.js
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄loose-envify
│  │  │  │     │  │     ├─ 📄loose-envify.CMD
│  │  │  │     │  │     └─ 📄loose-envify.ps1
│  │  │  │     │  ├─ 📁umd
│  │  │  │     │  │  ├─ 📄react.development.js
│  │  │  │     │  │  ├─ 📄react.production.min.js
│  │  │  │     │  │  └─ 📄react.profiling.min.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄jsx-dev-runtime.js
│  │  │  │     │  ├─ 📄jsx-runtime.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄react.shared-subset.js
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁react-dom
│  │  │  │     │  ├─ 📁cjs
│  │  │  │     │  │  ├─ 📄react-dom-server-legacy.browser.development.js
│  │  │  │     │  │  ├─ 📄react-dom-server-legacy.browser.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom-server-legacy.node.development.js
│  │  │  │     │  │  ├─ 📄react-dom-server-legacy.node.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom-server.browser.development.js
│  │  │  │     │  │  ├─ 📄react-dom-server.browser.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom-server.node.development.js
│  │  │  │     │  │  ├─ 📄react-dom-server.node.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom-test-utils.development.js
│  │  │  │     │  │  ├─ 📄react-dom-test-utils.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom.development.js
│  │  │  │     │  │  ├─ 📄react-dom.production.min.js
│  │  │  │     │  │  └─ 📄react-dom.profiling.min.js
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄loose-envify
│  │  │  │     │  │     ├─ 📄loose-envify.CMD
│  │  │  │     │  │     └─ 📄loose-envify.ps1
│  │  │  │     │  ├─ 📁umd
│  │  │  │     │  │  ├─ 📄react-dom-server-legacy.browser.development.js
│  │  │  │     │  │  ├─ 📄react-dom-server-legacy.browser.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom-server.browser.development.js
│  │  │  │     │  │  ├─ 📄react-dom-server.browser.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom-test-utils.development.js
│  │  │  │     │  │  ├─ 📄react-dom-test-utils.production.min.js
│  │  │  │     │  │  ├─ 📄react-dom.development.js
│  │  │  │     │  │  ├─ 📄react-dom.production.min.js
│  │  │  │     │  │  └─ 📄react-dom.profiling.min.js
│  │  │  │     │  ├─ 📄client.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄profiling.js
│  │  │  │     │  ├─ 📄README.md
│  │  │  │     │  ├─ 📄server.browser.js
│  │  │  │     │  ├─ 📄server.js
│  │  │  │     │  ├─ 📄server.node.js
│  │  │  │     │  └─ 📄test-utils.js
│  │  │  │     └─ 📁react-lazyload
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📁utils
│  │  │  │        │  │  ├─ 📄debounce.js
│  │  │  │        │  │  ├─ 📄event.js
│  │  │  │        │  │  ├─ 📄scrollParent.js
│  │  │  │        │  │  └─ 📄throttle.js
│  │  │  │        │  ├─ 📄decorator.js
│  │  │  │        │  └─ 📄index.js
│  │  │  │        ├─ 📄.editorconfig
│  │  │  │        ├─ 📄.travis.yml
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁react@18.3.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁loose-envify
│  │  │  │     │  ├─ 📄cli.js
│  │  │  │     │  ├─ 📄custom.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄loose-envify.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄README.md
│  │  │  │     │  └─ 📄replace.js
│  │  │  │     └─ 📁react
│  │  │  │        ├─ 📁cjs
│  │  │  │        │  ├─ 📄react-jsx-dev-runtime.development.js
│  │  │  │        │  ├─ 📄react-jsx-dev-runtime.production.min.js
│  │  │  │        │  ├─ 📄react-jsx-dev-runtime.profiling.min.js
│  │  │  │        │  ├─ 📄react-jsx-runtime.development.js
│  │  │  │        │  ├─ 📄react-jsx-runtime.production.min.js
│  │  │  │        │  ├─ 📄react-jsx-runtime.profiling.min.js
│  │  │  │        │  ├─ 📄react.development.js
│  │  │  │        │  ├─ 📄react.production.min.js
│  │  │  │        │  ├─ 📄react.shared-subset.development.js
│  │  │  │        │  └─ 📄react.shared-subset.production.min.js
│  │  │  │        ├─ 📁node_modules
│  │  │  │        │  └─ 📁.bin
│  │  │  │        │     ├─ 📄loose-envify
│  │  │  │        │     ├─ 📄loose-envify.CMD
│  │  │  │        │     └─ 📄loose-envify.ps1
│  │  │  │        ├─ 📁umd
│  │  │  │        │  ├─ 📄react.development.js
│  │  │  │        │  ├─ 📄react.production.min.js
│  │  │  │        │  └─ 📄react.profiling.min.js
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄jsx-dev-runtime.js
│  │  │  │        ├─ 📄jsx-runtime.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄react.shared-subset.js
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁resolve-from@4.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁resolve-from
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁reusify@1.0.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁reusify
│  │  │  │        ├─ 📁benchmarks
│  │  │  │        │  ├─ 📄createNoCodeFunction.js
│  │  │  │        │  ├─ 📄fib.js
│  │  │  │        │  └─ 📄reuseNoCodeFunction.js
│  │  │  │        ├─ 📄.coveralls.yml
│  │  │  │        ├─ 📄.travis.yml
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        ├─ 📄reusify.js
│  │  │  │        └─ 📄test.js
│  │  │  ├─ 📁rollup@4.21.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@rollup
│  │  │  │     │  └─ 📁rollup-win32-x64-msvc
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     ├─ 📄README.md
│  │  │  │     │     └─ 📄rollup.win32-x64-msvc.node
│  │  │  │     ├─ 📁@types
│  │  │  │     │  └─ 📁estree
│  │  │  │     │     ├─ 📄flow.d.ts
│  │  │  │     │     ├─ 📄index.d.ts
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     └─ 📁rollup
│  │  │  │        ├─ 📁dist
│  │  │  │        │  ├─ 📁bin
│  │  │  │        │  │  └─ 📄rollup
│  │  │  │        │  ├─ 📁es
│  │  │  │        │  │  ├─ 📁shared
│  │  │  │        │  │  │  ├─ 📄node-entry.js
│  │  │  │        │  │  │  ├─ 📄parseAst.js
│  │  │  │        │  │  │  └─ 📄watch.js
│  │  │  │        │  │  ├─ 📄getLogFilter.js
│  │  │  │        │  │  ├─ 📄package.json
│  │  │  │        │  │  ├─ 📄parseAst.js
│  │  │  │        │  │  └─ 📄rollup.js
│  │  │  │        │  ├─ 📁shared
│  │  │  │        │  │  ├─ 📄fsevents-importer.js
│  │  │  │        │  │  ├─ 📄index.js
│  │  │  │        │  │  ├─ 📄loadConfigFile.js
│  │  │  │        │  │  ├─ 📄parseAst.js
│  │  │  │        │  │  ├─ 📄rollup.js
│  │  │  │        │  │  ├─ 📄watch-cli.js
│  │  │  │        │  │  └─ 📄watch.js
│  │  │  │        │  ├─ 📄getLogFilter.d.ts
│  │  │  │        │  ├─ 📄getLogFilter.js
│  │  │  │        │  ├─ 📄loadConfigFile.d.ts
│  │  │  │        │  ├─ 📄loadConfigFile.js
│  │  │  │        │  ├─ 📄native.js
│  │  │  │        │  ├─ 📄parseAst.d.ts
│  │  │  │        │  ├─ 📄parseAst.js
│  │  │  │        │  ├─ 📄rollup.d.ts
│  │  │  │        │  └─ 📄rollup.js
│  │  │  │        ├─ 📄LICENSE.md
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁run-parallel@1.2.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁queue-microtask
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁run-parallel
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁scheduler@0.23.2
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁loose-envify
│  │  │  │     │  ├─ 📄cli.js
│  │  │  │     │  ├─ 📄custom.js
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄loose-envify.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄README.md
│  │  │  │     │  └─ 📄replace.js
│  │  │  │     └─ 📁scheduler
│  │  │  │        ├─ 📁cjs
│  │  │  │        │  ├─ 📄scheduler-unstable_mock.development.js
│  │  │  │        │  ├─ 📄scheduler-unstable_mock.production.min.js
│  │  │  │        │  ├─ 📄scheduler-unstable_post_task.development.js
│  │  │  │        │  ├─ 📄scheduler-unstable_post_task.production.min.js
│  │  │  │        │  ├─ 📄scheduler.development.js
│  │  │  │        │  └─ 📄scheduler.production.min.js
│  │  │  │        ├─ 📁node_modules
│  │  │  │        │  └─ 📁.bin
│  │  │  │        │     ├─ 📄loose-envify
│  │  │  │        │     ├─ 📄loose-envify.CMD
│  │  │  │        │     └─ 📄loose-envify.ps1
│  │  │  │        ├─ 📁umd
│  │  │  │        │  ├─ 📄scheduler-unstable_mock.development.js
│  │  │  │        │  ├─ 📄scheduler-unstable_mock.production.min.js
│  │  │  │        │  ├─ 📄scheduler.development.js
│  │  │  │        │  ├─ 📄scheduler.production.min.js
│  │  │  │        │  └─ 📄scheduler.profiling.min.js
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        ├─ 📄unstable_mock.js
│  │  │  │        └─ 📄unstable_post_task.js
│  │  │  ├─ 📁semver@7.6.3
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁semver
│  │  │  │        ├─ 📁bin
│  │  │  │        │  └─ 📄semver.js
│  │  │  │        ├─ 📁classes
│  │  │  │        │  ├─ 📄comparator.js
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  ├─ 📄range.js
│  │  │  │        │  └─ 📄semver.js
│  │  │  │        ├─ 📁functions
│  │  │  │        │  ├─ 📄clean.js
│  │  │  │        │  ├─ 📄cmp.js
│  │  │  │        │  ├─ 📄coerce.js
│  │  │  │        │  ├─ 📄compare-build.js
│  │  │  │        │  ├─ 📄compare-loose.js
│  │  │  │        │  ├─ 📄compare.js
│  │  │  │        │  ├─ 📄diff.js
│  │  │  │        │  ├─ 📄eq.js
│  │  │  │        │  ├─ 📄gt.js
│  │  │  │        │  ├─ 📄gte.js
│  │  │  │        │  ├─ 📄inc.js
│  │  │  │        │  ├─ 📄lt.js
│  │  │  │        │  ├─ 📄lte.js
│  │  │  │        │  ├─ 📄major.js
│  │  │  │        │  ├─ 📄minor.js
│  │  │  │        │  ├─ 📄neq.js
│  │  │  │        │  ├─ 📄parse.js
│  │  │  │        │  ├─ 📄patch.js
│  │  │  │        │  ├─ 📄prerelease.js
│  │  │  │        │  ├─ 📄rcompare.js
│  │  │  │        │  ├─ 📄rsort.js
│  │  │  │        │  ├─ 📄satisfies.js
│  │  │  │        │  ├─ 📄sort.js
│  │  │  │        │  └─ 📄valid.js
│  │  │  │        ├─ 📁internal
│  │  │  │        │  ├─ 📄constants.js
│  │  │  │        │  ├─ 📄debug.js
│  │  │  │        │  ├─ 📄identifiers.js
│  │  │  │        │  ├─ 📄lrucache.js
│  │  │  │        │  ├─ 📄parse-options.js
│  │  │  │        │  └─ 📄re.js
│  │  │  │        ├─ 📁ranges
│  │  │  │        │  ├─ 📄gtr.js
│  │  │  │        │  ├─ 📄intersects.js
│  │  │  │        │  ├─ 📄ltr.js
│  │  │  │        │  ├─ 📄max-satisfying.js
│  │  │  │        │  ├─ 📄min-satisfying.js
│  │  │  │        │  ├─ 📄min-version.js
│  │  │  │        │  ├─ 📄outside.js
│  │  │  │        │  ├─ 📄simplify.js
│  │  │  │        │  ├─ 📄subset.js
│  │  │  │        │  ├─ 📄to-comparators.js
│  │  │  │        │  └─ 📄valid.js
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄preload.js
│  │  │  │        ├─ 📄range.bnf
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁shebang-command@2.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁shebang-command
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁shebang-regex
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁shebang-regex@3.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁shebang-regex
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁slash@3.0.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁slash
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁source-map-js@1.2.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁source-map-js
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄array-set.js
│  │  │  │        │  ├─ 📄base64-vlq.js
│  │  │  │        │  ├─ 📄base64.js
│  │  │  │        │  ├─ 📄binary-search.js
│  │  │  │        │  ├─ 📄mapping-list.js
│  │  │  │        │  ├─ 📄quick-sort.js
│  │  │  │        │  ├─ 📄source-map-consumer.js
│  │  │  │        │  ├─ 📄source-map-generator.js
│  │  │  │        │  ├─ 📄source-node.js
│  │  │  │        │  └─ 📄util.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        ├─ 📄source-map.d.ts
│  │  │  │        └─ 📄source-map.js
│  │  │  ├─ 📁strip-ansi@6.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁ansi-regex
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁strip-ansi
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁strip-json-comments@3.1.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁strip-json-comments
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁supports-color@7.2.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁has-flag
│  │  │  │     │  ├─ 📄index.d.ts
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄license
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄readme.md
│  │  │  │     └─ 📁supports-color
│  │  │  │        ├─ 📄browser.js
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  ├─ 📁text-table@0.2.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁text-table
│  │  │  │        ├─ 📁example
│  │  │  │        │  ├─ 📄align.js
│  │  │  │        │  ├─ 📄center.js
│  │  │  │        │  ├─ 📄dotalign.js
│  │  │  │        │  ├─ 📄doubledot.js
│  │  │  │        │  └─ 📄table.js
│  │  │  │        ├─ 📁test
│  │  │  │        │  ├─ 📄align.js
│  │  │  │        │  ├─ 📄ansi-colors.js
│  │  │  │        │  ├─ 📄center.js
│  │  │  │        │  ├─ 📄dotalign.js
│  │  │  │        │  ├─ 📄doubledot.js
│  │  │  │        │  └─ 📄table.js
│  │  │  │        ├─ 📄.travis.yml
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.markdown
│  │  │  ├─ 📁to-regex-range@5.0.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁is-number
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁to-regex-range
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁ts-api-utils@1.3.0_typescript@5.5.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁ts-api-utils
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄index.cjs
│  │  │  │     │  │  ├─ 📄index.cjs.map
│  │  │  │     │  │  ├─ 📄index.d.cts
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  └─ 📄index.js.map
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄tsc
│  │  │  │     │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │     ├─ 📄tsserver
│  │  │  │     │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │     └─ 📄tsserver.ps1
│  │  │  │     │  ├─ 📄LICENSE.md
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁typescript
│  │  │  │        ├─ 📁bin
│  │  │  │        │  ├─ 📄tsc
│  │  │  │        │  └─ 📄tsserver
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📁cs
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁de
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁es
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁fr
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁it
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ja
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ko
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁pl
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁pt-br
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ru
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁tr
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁zh-cn
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁zh-tw
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📄cancellationToken.js
│  │  │  │        │  ├─ 📄lib.d.ts
│  │  │  │        │  ├─ 📄lib.decorators.d.ts
│  │  │  │        │  ├─ 📄lib.decorators.legacy.d.ts
│  │  │  │        │  ├─ 📄lib.dom.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.dom.d.ts
│  │  │  │        │  ├─ 📄lib.dom.iterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.collection.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.core.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.generator.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.iterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.proxy.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.reflect.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.symbol.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.symbol.wellknown.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.array.include.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.date.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.typedarrays.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.asyncgenerator.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.symbol.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.bigint.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.date.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.number.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.symbol.wellknown.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.weakref.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.error.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.collection.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es5.d.ts
│  │  │  │        │  ├─ 📄lib.es6.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.array.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.collection.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.decorators.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.disposable.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.full.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.intl.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.object.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.promise.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.string.d.ts
│  │  │  │        │  ├─ 📄lib.scripthost.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.importscripts.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.iterable.d.ts
│  │  │  │        │  ├─ 📄tsc.js
│  │  │  │        │  ├─ 📄tsserver.js
│  │  │  │        │  ├─ 📄tsserverlibrary.d.ts
│  │  │  │        │  ├─ 📄tsserverlibrary.js
│  │  │  │        │  ├─ 📄typescript.d.ts
│  │  │  │        │  ├─ 📄typescript.js
│  │  │  │        │  ├─ 📄typesMap.json
│  │  │  │        │  ├─ 📄typingsInstaller.js
│  │  │  │        │  └─ 📄watchGuard.js
│  │  │  │        ├─ 📄LICENSE.txt
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        ├─ 📄SECURITY.md
│  │  │  │        └─ 📄ThirdPartyNoticeText.txt
│  │  │  ├─ 📁type-check@0.4.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁prelude-ls
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄Func.js
│  │  │  │     │  │  ├─ 📄index.js
│  │  │  │     │  │  ├─ 📄List.js
│  │  │  │     │  │  ├─ 📄Num.js
│  │  │  │     │  │  ├─ 📄Obj.js
│  │  │  │     │  │  └─ 📄Str.js
│  │  │  │     │  ├─ 📄CHANGELOG.md
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁type-check
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📄check.js
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  └─ 📄parse-type.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁typescript-eslint@8.2.0_eslint@9.9.0_typescript@5.5.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁@typescript-eslint
│  │  │  │     │  ├─ 📁eslint-plugin
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📁configs
│  │  │  │     │  │  │  │  ├─ 📄all.js
│  │  │  │     │  │  │  │  ├─ 📄all.js.map
│  │  │  │     │  │  │  │  ├─ 📄base.js
│  │  │  │     │  │  │  │  ├─ 📄base.js.map
│  │  │  │     │  │  │  │  ├─ 📄disable-type-checked.js
│  │  │  │     │  │  │  │  ├─ 📄disable-type-checked.js.map
│  │  │  │     │  │  │  │  ├─ 📄eslint-recommended-raw.js
│  │  │  │     │  │  │  │  ├─ 📄eslint-recommended-raw.js.map
│  │  │  │     │  │  │  │  ├─ 📄eslint-recommended.js
│  │  │  │     │  │  │  │  ├─ 📄eslint-recommended.js.map
│  │  │  │     │  │  │  │  ├─ 📄recommended-type-checked-only.js
│  │  │  │     │  │  │  │  ├─ 📄recommended-type-checked-only.js.map
│  │  │  │     │  │  │  │  ├─ 📄recommended-type-checked.js
│  │  │  │     │  │  │  │  ├─ 📄recommended-type-checked.js.map
│  │  │  │     │  │  │  │  ├─ 📄recommended.js
│  │  │  │     │  │  │  │  ├─ 📄recommended.js.map
│  │  │  │     │  │  │  │  ├─ 📄strict-type-checked-only.js
│  │  │  │     │  │  │  │  ├─ 📄strict-type-checked-only.js.map
│  │  │  │     │  │  │  │  ├─ 📄strict-type-checked.js
│  │  │  │     │  │  │  │  ├─ 📄strict-type-checked.js.map
│  │  │  │     │  │  │  │  ├─ 📄strict.js
│  │  │  │     │  │  │  │  ├─ 📄strict.js.map
│  │  │  │     │  │  │  │  ├─ 📄stylistic-type-checked-only.js
│  │  │  │     │  │  │  │  ├─ 📄stylistic-type-checked-only.js.map
│  │  │  │     │  │  │  │  ├─ 📄stylistic-type-checked.js
│  │  │  │     │  │  │  │  ├─ 📄stylistic-type-checked.js.map
│  │  │  │     │  │  │  │  ├─ 📄stylistic.js
│  │  │  │     │  │  │  │  └─ 📄stylistic.js.map
│  │  │  │     │  │  │  ├─ 📁rules
│  │  │  │     │  │  │  │  ├─ 📁enum-utils
│  │  │  │     │  │  │  │  │  ├─ 📄shared.js
│  │  │  │     │  │  │  │  │  └─ 📄shared.js.map
│  │  │  │     │  │  │  │  ├─ 📁naming-convention-utils
│  │  │  │     │  │  │  │  │  ├─ 📄enums.js
│  │  │  │     │  │  │  │  │  ├─ 📄enums.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄format.js
│  │  │  │     │  │  │  │  │  ├─ 📄format.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄parse-options.js
│  │  │  │     │  │  │  │  │  ├─ 📄parse-options.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄schema.js
│  │  │  │     │  │  │  │  │  ├─ 📄schema.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄shared.js
│  │  │  │     │  │  │  │  │  ├─ 📄shared.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄types.js
│  │  │  │     │  │  │  │  │  ├─ 📄types.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄validator.js
│  │  │  │     │  │  │  │  │  └─ 📄validator.js.map
│  │  │  │     │  │  │  │  ├─ 📁prefer-optional-chain-utils
│  │  │  │     │  │  │  │  │  ├─ 📄analyzeChain.js
│  │  │  │     │  │  │  │  │  ├─ 📄analyzeChain.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄checkNullishAndReport.js
│  │  │  │     │  │  │  │  │  ├─ 📄checkNullishAndReport.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄compareNodes.js
│  │  │  │     │  │  │  │  │  ├─ 📄compareNodes.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄gatherLogicalOperands.js
│  │  │  │     │  │  │  │  │  ├─ 📄gatherLogicalOperands.js.map
│  │  │  │     │  │  │  │  │  ├─ 📄PreferOptionalChainOptions.js
│  │  │  │     │  │  │  │  │  └─ 📄PreferOptionalChainOptions.js.map
│  │  │  │     │  │  │  │  ├─ 📄adjacent-overload-signatures.js
│  │  │  │     │  │  │  │  ├─ 📄adjacent-overload-signatures.js.map
│  │  │  │     │  │  │  │  ├─ 📄array-type.js
│  │  │  │     │  │  │  │  ├─ 📄array-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄await-thenable.js
│  │  │  │     │  │  │  │  ├─ 📄await-thenable.js.map
│  │  │  │     │  │  │  │  ├─ 📄ban-ts-comment.js
│  │  │  │     │  │  │  │  ├─ 📄ban-ts-comment.js.map
│  │  │  │     │  │  │  │  ├─ 📄ban-tslint-comment.js
│  │  │  │     │  │  │  │  ├─ 📄ban-tslint-comment.js.map
│  │  │  │     │  │  │  │  ├─ 📄class-literal-property-style.js
│  │  │  │     │  │  │  │  ├─ 📄class-literal-property-style.js.map
│  │  │  │     │  │  │  │  ├─ 📄class-methods-use-this.js
│  │  │  │     │  │  │  │  ├─ 📄class-methods-use-this.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-generic-constructors.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-generic-constructors.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-indexed-object-style.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-indexed-object-style.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-return.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-return.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-assertions.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-assertions.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-definitions.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-definitions.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-exports.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-exports.js.map
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-imports.js
│  │  │  │     │  │  │  │  ├─ 📄consistent-type-imports.js.map
│  │  │  │     │  │  │  │  ├─ 📄default-param-last.js
│  │  │  │     │  │  │  │  ├─ 📄default-param-last.js.map
│  │  │  │     │  │  │  │  ├─ 📄dot-notation.js
│  │  │  │     │  │  │  │  ├─ 📄dot-notation.js.map
│  │  │  │     │  │  │  │  ├─ 📄explicit-function-return-type.js
│  │  │  │     │  │  │  │  ├─ 📄explicit-function-return-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄explicit-member-accessibility.js
│  │  │  │     │  │  │  │  ├─ 📄explicit-member-accessibility.js.map
│  │  │  │     │  │  │  │  ├─ 📄explicit-module-boundary-types.js
│  │  │  │     │  │  │  │  ├─ 📄explicit-module-boundary-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄init-declarations.js
│  │  │  │     │  │  │  │  ├─ 📄init-declarations.js.map
│  │  │  │     │  │  │  │  ├─ 📄max-params.js
│  │  │  │     │  │  │  │  ├─ 📄max-params.js.map
│  │  │  │     │  │  │  │  ├─ 📄member-ordering.js
│  │  │  │     │  │  │  │  ├─ 📄member-ordering.js.map
│  │  │  │     │  │  │  │  ├─ 📄method-signature-style.js
│  │  │  │     │  │  │  │  ├─ 📄method-signature-style.js.map
│  │  │  │     │  │  │  │  ├─ 📄naming-convention.js
│  │  │  │     │  │  │  │  ├─ 📄naming-convention.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-array-constructor.js
│  │  │  │     │  │  │  │  ├─ 📄no-array-constructor.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-array-delete.js
│  │  │  │     │  │  │  │  ├─ 📄no-array-delete.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-base-to-string.js
│  │  │  │     │  │  │  │  ├─ 📄no-base-to-string.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-confusing-non-null-assertion.js
│  │  │  │     │  │  │  │  ├─ 📄no-confusing-non-null-assertion.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-confusing-void-expression.js
│  │  │  │     │  │  │  │  ├─ 📄no-confusing-void-expression.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-dupe-class-members.js
│  │  │  │     │  │  │  │  ├─ 📄no-dupe-class-members.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-duplicate-enum-values.js
│  │  │  │     │  │  │  │  ├─ 📄no-duplicate-enum-values.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-duplicate-type-constituents.js
│  │  │  │     │  │  │  │  ├─ 📄no-duplicate-type-constituents.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-dynamic-delete.js
│  │  │  │     │  │  │  │  ├─ 📄no-dynamic-delete.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-empty-function.js
│  │  │  │     │  │  │  │  ├─ 📄no-empty-function.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-empty-interface.js
│  │  │  │     │  │  │  │  ├─ 📄no-empty-interface.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-empty-object-type.js
│  │  │  │     │  │  │  │  ├─ 📄no-empty-object-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-explicit-any.js
│  │  │  │     │  │  │  │  ├─ 📄no-explicit-any.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-extra-non-null-assertion.js
│  │  │  │     │  │  │  │  ├─ 📄no-extra-non-null-assertion.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-extraneous-class.js
│  │  │  │     │  │  │  │  ├─ 📄no-extraneous-class.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-floating-promises.js
│  │  │  │     │  │  │  │  ├─ 📄no-floating-promises.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-for-in-array.js
│  │  │  │     │  │  │  │  ├─ 📄no-for-in-array.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-implied-eval.js
│  │  │  │     │  │  │  │  ├─ 📄no-implied-eval.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-import-type-side-effects.js
│  │  │  │     │  │  │  │  ├─ 📄no-import-type-side-effects.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-inferrable-types.js
│  │  │  │     │  │  │  │  ├─ 📄no-inferrable-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-invalid-this.js
│  │  │  │     │  │  │  │  ├─ 📄no-invalid-this.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-invalid-void-type.js
│  │  │  │     │  │  │  │  ├─ 📄no-invalid-void-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-loop-func.js
│  │  │  │     │  │  │  │  ├─ 📄no-loop-func.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-loss-of-precision.js
│  │  │  │     │  │  │  │  ├─ 📄no-loss-of-precision.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-magic-numbers.js
│  │  │  │     │  │  │  │  ├─ 📄no-magic-numbers.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-meaningless-void-operator.js
│  │  │  │     │  │  │  │  ├─ 📄no-meaningless-void-operator.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-misused-new.js
│  │  │  │     │  │  │  │  ├─ 📄no-misused-new.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-misused-promises.js
│  │  │  │     │  │  │  │  ├─ 📄no-misused-promises.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-mixed-enums.js
│  │  │  │     │  │  │  │  ├─ 📄no-mixed-enums.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-namespace.js
│  │  │  │     │  │  │  │  ├─ 📄no-namespace.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-non-null-asserted-nullish-coalescing.js
│  │  │  │     │  │  │  │  ├─ 📄no-non-null-asserted-nullish-coalescing.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-non-null-asserted-optional-chain.js
│  │  │  │     │  │  │  │  ├─ 📄no-non-null-asserted-optional-chain.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-non-null-assertion.js
│  │  │  │     │  │  │  │  ├─ 📄no-non-null-assertion.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-redeclare.js
│  │  │  │     │  │  │  │  ├─ 📄no-redeclare.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-redundant-type-constituents.js
│  │  │  │     │  │  │  │  ├─ 📄no-redundant-type-constituents.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-require-imports.js
│  │  │  │     │  │  │  │  ├─ 📄no-require-imports.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-restricted-imports.js
│  │  │  │     │  │  │  │  ├─ 📄no-restricted-imports.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-restricted-types.js
│  │  │  │     │  │  │  │  ├─ 📄no-restricted-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-shadow.js
│  │  │  │     │  │  │  │  ├─ 📄no-shadow.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-this-alias.js
│  │  │  │     │  │  │  │  ├─ 📄no-this-alias.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-type-alias.js
│  │  │  │     │  │  │  │  ├─ 📄no-type-alias.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-boolean-literal-compare.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-boolean-literal-compare.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-condition.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-condition.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-parameter-property-assignment.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-parameter-property-assignment.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-qualifier.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-qualifier.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-template-expression.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-template-expression.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-arguments.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-arguments.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-assertion.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-assertion.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-constraint.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-constraint.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-parameters.js
│  │  │  │     │  │  │  │  ├─ 📄no-unnecessary-type-parameters.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-argument.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-argument.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-assignment.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-assignment.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-call.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-call.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-declaration-merging.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-declaration-merging.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-enum-comparison.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-enum-comparison.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-function-type.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-function-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-member-access.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-member-access.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-return.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-return.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-unary-minus.js
│  │  │  │     │  │  │  │  ├─ 📄no-unsafe-unary-minus.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unused-expressions.js
│  │  │  │     │  │  │  │  ├─ 📄no-unused-expressions.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-unused-vars.js
│  │  │  │     │  │  │  │  ├─ 📄no-unused-vars.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-use-before-define.js
│  │  │  │     │  │  │  │  ├─ 📄no-use-before-define.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-useless-constructor.js
│  │  │  │     │  │  │  │  ├─ 📄no-useless-constructor.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-useless-empty-export.js
│  │  │  │     │  │  │  │  ├─ 📄no-useless-empty-export.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-var-requires.js
│  │  │  │     │  │  │  │  ├─ 📄no-var-requires.js.map
│  │  │  │     │  │  │  │  ├─ 📄no-wrapper-object-types.js
│  │  │  │     │  │  │  │  ├─ 📄no-wrapper-object-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄non-nullable-type-assertion-style.js
│  │  │  │     │  │  │  │  ├─ 📄non-nullable-type-assertion-style.js.map
│  │  │  │     │  │  │  │  ├─ 📄only-throw-error.js
│  │  │  │     │  │  │  │  ├─ 📄only-throw-error.js.map
│  │  │  │     │  │  │  │  ├─ 📄parameter-properties.js
│  │  │  │     │  │  │  │  ├─ 📄parameter-properties.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-as-const.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-as-const.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-destructuring.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-destructuring.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-enum-initializers.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-enum-initializers.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-find.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-find.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-for-of.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-for-of.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-function-type.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-function-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-includes.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-includes.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-literal-enum-member.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-literal-enum-member.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-namespace-keyword.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-namespace-keyword.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-nullish-coalescing.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-nullish-coalescing.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-optional-chain.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-optional-chain.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-promise-reject-errors.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-promise-reject-errors.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-readonly-parameter-types.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-readonly-parameter-types.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-readonly.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-readonly.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-reduce-type-parameter.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-reduce-type-parameter.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-regexp-exec.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-regexp-exec.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-return-this-type.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-return-this-type.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-string-starts-ends-with.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-string-starts-ends-with.js.map
│  │  │  │     │  │  │  │  ├─ 📄prefer-ts-expect-error.js
│  │  │  │     │  │  │  │  ├─ 📄prefer-ts-expect-error.js.map
│  │  │  │     │  │  │  │  ├─ 📄promise-function-async.js
│  │  │  │     │  │  │  │  ├─ 📄promise-function-async.js.map
│  │  │  │     │  │  │  │  ├─ 📄require-array-sort-compare.js
│  │  │  │     │  │  │  │  ├─ 📄require-array-sort-compare.js.map
│  │  │  │     │  │  │  │  ├─ 📄require-await.js
│  │  │  │     │  │  │  │  ├─ 📄require-await.js.map
│  │  │  │     │  │  │  │  ├─ 📄restrict-plus-operands.js
│  │  │  │     │  │  │  │  ├─ 📄restrict-plus-operands.js.map
│  │  │  │     │  │  │  │  ├─ 📄restrict-template-expressions.js
│  │  │  │     │  │  │  │  ├─ 📄restrict-template-expressions.js.map
│  │  │  │     │  │  │  │  ├─ 📄return-await.js
│  │  │  │     │  │  │  │  ├─ 📄return-await.js.map
│  │  │  │     │  │  │  │  ├─ 📄sort-type-constituents.js
│  │  │  │     │  │  │  │  ├─ 📄sort-type-constituents.js.map
│  │  │  │     │  │  │  │  ├─ 📄strict-boolean-expressions.js
│  │  │  │     │  │  │  │  ├─ 📄strict-boolean-expressions.js.map
│  │  │  │     │  │  │  │  ├─ 📄switch-exhaustiveness-check.js
│  │  │  │     │  │  │  │  ├─ 📄switch-exhaustiveness-check.js.map
│  │  │  │     │  │  │  │  ├─ 📄triple-slash-reference.js
│  │  │  │     │  │  │  │  ├─ 📄triple-slash-reference.js.map
│  │  │  │     │  │  │  │  ├─ 📄typedef.js
│  │  │  │     │  │  │  │  ├─ 📄typedef.js.map
│  │  │  │     │  │  │  │  ├─ 📄unbound-method.js
│  │  │  │     │  │  │  │  ├─ 📄unbound-method.js.map
│  │  │  │     │  │  │  │  ├─ 📄unified-signatures.js
│  │  │  │     │  │  │  │  ├─ 📄unified-signatures.js.map
│  │  │  │     │  │  │  │  ├─ 📄use-unknown-in-catch-callback-variable.js
│  │  │  │     │  │  │  │  └─ 📄use-unknown-in-catch-callback-variable.js.map
│  │  │  │     │  │  │  ├─ 📁util
│  │  │  │     │  │  │  │  ├─ 📄astUtils.js
│  │  │  │     │  │  │  │  ├─ 📄astUtils.js.map
│  │  │  │     │  │  │  │  ├─ 📄collectUnusedVariables.js
│  │  │  │     │  │  │  │  ├─ 📄collectUnusedVariables.js.map
│  │  │  │     │  │  │  │  ├─ 📄createRule.js
│  │  │  │     │  │  │  │  ├─ 📄createRule.js.map
│  │  │  │     │  │  │  │  ├─ 📄escapeRegExp.js
│  │  │  │     │  │  │  │  ├─ 📄escapeRegExp.js.map
│  │  │  │     │  │  │  │  ├─ 📄explicitReturnTypeUtils.js
│  │  │  │     │  │  │  │  ├─ 📄explicitReturnTypeUtils.js.map
│  │  │  │     │  │  │  │  ├─ 📄getESLintCoreRule.js
│  │  │  │     │  │  │  │  ├─ 📄getESLintCoreRule.js.map
│  │  │  │     │  │  │  │  ├─ 📄getFixOrSuggest.js
│  │  │  │     │  │  │  │  ├─ 📄getFixOrSuggest.js.map
│  │  │  │     │  │  │  │  ├─ 📄getForStatementHeadLoc.js
│  │  │  │     │  │  │  │  ├─ 📄getForStatementHeadLoc.js.map
│  │  │  │     │  │  │  │  ├─ 📄getFunctionHeadLoc.js
│  │  │  │     │  │  │  │  ├─ 📄getFunctionHeadLoc.js.map
│  │  │  │     │  │  │  │  ├─ 📄getMemberHeadLoc.js
│  │  │  │     │  │  │  │  ├─ 📄getMemberHeadLoc.js.map
│  │  │  │     │  │  │  │  ├─ 📄getOperatorPrecedence.js
│  │  │  │     │  │  │  │  ├─ 📄getOperatorPrecedence.js.map
│  │  │  │     │  │  │  │  ├─ 📄getStaticStringValue.js
│  │  │  │     │  │  │  │  ├─ 📄getStaticStringValue.js.map
│  │  │  │     │  │  │  │  ├─ 📄getStringLength.js
│  │  │  │     │  │  │  │  ├─ 📄getStringLength.js.map
│  │  │  │     │  │  │  │  ├─ 📄getTextWithParentheses.js
│  │  │  │     │  │  │  │  ├─ 📄getTextWithParentheses.js.map
│  │  │  │     │  │  │  │  ├─ 📄getThisExpression.js
│  │  │  │     │  │  │  │  ├─ 📄getThisExpression.js.map
│  │  │  │     │  │  │  │  ├─ 📄getWrappedCode.js
│  │  │  │     │  │  │  │  ├─ 📄getWrappedCode.js.map
│  │  │  │     │  │  │  │  ├─ 📄getWrappingFixer.js
│  │  │  │     │  │  │  │  ├─ 📄getWrappingFixer.js.map
│  │  │  │     │  │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  │  ├─ 📄isAssignee.js
│  │  │  │     │  │  │  │  ├─ 📄isAssignee.js.map
│  │  │  │     │  │  │  │  ├─ 📄isNodeEqual.js
│  │  │  │     │  │  │  │  ├─ 📄isNodeEqual.js.map
│  │  │  │     │  │  │  │  ├─ 📄isNullLiteral.js
│  │  │  │     │  │  │  │  ├─ 📄isNullLiteral.js.map
│  │  │  │     │  │  │  │  ├─ 📄isStartOfExpressionStatement.js
│  │  │  │     │  │  │  │  ├─ 📄isStartOfExpressionStatement.js.map
│  │  │  │     │  │  │  │  ├─ 📄isTypeImport.js
│  │  │  │     │  │  │  │  ├─ 📄isTypeImport.js.map
│  │  │  │     │  │  │  │  ├─ 📄isUndefinedIdentifier.js
│  │  │  │     │  │  │  │  ├─ 📄isUndefinedIdentifier.js.map
│  │  │  │     │  │  │  │  ├─ 📄misc.js
│  │  │  │     │  │  │  │  ├─ 📄misc.js.map
│  │  │  │     │  │  │  │  ├─ 📄needsPrecedingSemiColon.js
│  │  │  │     │  │  │  │  ├─ 📄needsPrecedingSemiColon.js.map
│  │  │  │     │  │  │  │  ├─ 📄objectIterators.js
│  │  │  │     │  │  │  │  ├─ 📄objectIterators.js.map
│  │  │  │     │  │  │  │  ├─ 📄referenceContainsTypeQuery.js
│  │  │  │     │  │  │  │  ├─ 📄referenceContainsTypeQuery.js.map
│  │  │  │     │  │  │  │  ├─ 📄scopeUtils.js
│  │  │  │     │  │  │  │  ├─ 📄scopeUtils.js.map
│  │  │  │     │  │  │  │  ├─ 📄types.js
│  │  │  │     │  │  │  │  └─ 📄types.js.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  └─ 📄index.js.map
│  │  │  │     │  │  ├─ 📁docs
│  │  │  │     │  │  │  └─ 📁rules
│  │  │  │     │  │  │     ├─ 📄adjacent-overload-signatures.mdx
│  │  │  │     │  │  │     ├─ 📄array-type.mdx
│  │  │  │     │  │  │     ├─ 📄await-thenable.mdx
│  │  │  │     │  │  │     ├─ 📄ban-ts-comment.mdx
│  │  │  │     │  │  │     ├─ 📄ban-tslint-comment.mdx
│  │  │  │     │  │  │     ├─ 📄ban-types.md
│  │  │  │     │  │  │     ├─ 📄block-spacing.md
│  │  │  │     │  │  │     ├─ 📄brace-style.md
│  │  │  │     │  │  │     ├─ 📄camelcase.md
│  │  │  │     │  │  │     ├─ 📄class-literal-property-style.mdx
│  │  │  │     │  │  │     ├─ 📄class-methods-use-this.mdx
│  │  │  │     │  │  │     ├─ 📄comma-dangle.md
│  │  │  │     │  │  │     ├─ 📄comma-spacing.md
│  │  │  │     │  │  │     ├─ 📄consistent-generic-constructors.mdx
│  │  │  │     │  │  │     ├─ 📄consistent-indexed-object-style.mdx
│  │  │  │     │  │  │     ├─ 📄consistent-return.mdx
│  │  │  │     │  │  │     ├─ 📄consistent-type-assertions.mdx
│  │  │  │     │  │  │     ├─ 📄consistent-type-definitions.mdx
│  │  │  │     │  │  │     ├─ 📄consistent-type-exports.mdx
│  │  │  │     │  │  │     ├─ 📄consistent-type-imports.mdx
│  │  │  │     │  │  │     ├─ 📄default-param-last.mdx
│  │  │  │     │  │  │     ├─ 📄dot-notation.mdx
│  │  │  │     │  │  │     ├─ 📄explicit-function-return-type.mdx
│  │  │  │     │  │  │     ├─ 📄explicit-member-accessibility.mdx
│  │  │  │     │  │  │     ├─ 📄explicit-module-boundary-types.mdx
│  │  │  │     │  │  │     ├─ 📄func-call-spacing.md
│  │  │  │     │  │  │     ├─ 📄indent.md
│  │  │  │     │  │  │     ├─ 📄init-declarations.mdx
│  │  │  │     │  │  │     ├─ 📄key-spacing.md
│  │  │  │     │  │  │     ├─ 📄keyword-spacing.md
│  │  │  │     │  │  │     ├─ 📄lines-around-comment.md
│  │  │  │     │  │  │     ├─ 📄lines-between-class-members.md
│  │  │  │     │  │  │     ├─ 📄max-params.mdx
│  │  │  │     │  │  │     ├─ 📄member-delimiter-style.md
│  │  │  │     │  │  │     ├─ 📄member-ordering.mdx
│  │  │  │     │  │  │     ├─ 📄method-signature-style.mdx
│  │  │  │     │  │  │     ├─ 📄naming-convention.mdx
│  │  │  │     │  │  │     ├─ 📄no-array-constructor.mdx
│  │  │  │     │  │  │     ├─ 📄no-array-delete.mdx
│  │  │  │     │  │  │     ├─ 📄no-base-to-string.mdx
│  │  │  │     │  │  │     ├─ 📄no-confusing-non-null-assertion.mdx
│  │  │  │     │  │  │     ├─ 📄no-confusing-void-expression.mdx
│  │  │  │     │  │  │     ├─ 📄no-dupe-class-members.mdx
│  │  │  │     │  │  │     ├─ 📄no-duplicate-enum-values.mdx
│  │  │  │     │  │  │     ├─ 📄no-duplicate-imports.mdx
│  │  │  │     │  │  │     ├─ 📄no-duplicate-type-constituents.mdx
│  │  │  │     │  │  │     ├─ 📄no-dynamic-delete.mdx
│  │  │  │     │  │  │     ├─ 📄no-empty-function.mdx
│  │  │  │     │  │  │     ├─ 📄no-empty-interface.mdx
│  │  │  │     │  │  │     ├─ 📄no-empty-object-type.mdx
│  │  │  │     │  │  │     ├─ 📄no-explicit-any.mdx
│  │  │  │     │  │  │     ├─ 📄no-extra-non-null-assertion.mdx
│  │  │  │     │  │  │     ├─ 📄no-extra-parens.md
│  │  │  │     │  │  │     ├─ 📄no-extra-semi.md
│  │  │  │     │  │  │     ├─ 📄no-extraneous-class.mdx
│  │  │  │     │  │  │     ├─ 📄no-floating-promises.mdx
│  │  │  │     │  │  │     ├─ 📄no-for-in-array.mdx
│  │  │  │     │  │  │     ├─ 📄no-implied-eval.mdx
│  │  │  │     │  │  │     ├─ 📄no-import-type-side-effects.mdx
│  │  │  │     │  │  │     ├─ 📄no-inferrable-types.mdx
│  │  │  │     │  │  │     ├─ 📄no-invalid-this.mdx
│  │  │  │     │  │  │     ├─ 📄no-invalid-void-type.mdx
│  │  │  │     │  │  │     ├─ 📄no-loop-func.mdx
│  │  │  │     │  │  │     ├─ 📄no-loss-of-precision.mdx
│  │  │  │     │  │  │     ├─ 📄no-magic-numbers.mdx
│  │  │  │     │  │  │     ├─ 📄no-meaningless-void-operator.mdx
│  │  │  │     │  │  │     ├─ 📄no-misused-new.mdx
│  │  │  │     │  │  │     ├─ 📄no-misused-promises.mdx
│  │  │  │     │  │  │     ├─ 📄no-mixed-enums.mdx
│  │  │  │     │  │  │     ├─ 📄no-namespace.mdx
│  │  │  │     │  │  │     ├─ 📄no-non-null-asserted-nullish-coalescing.mdx
│  │  │  │     │  │  │     ├─ 📄no-non-null-asserted-optional-chain.mdx
│  │  │  │     │  │  │     ├─ 📄no-non-null-assertion.mdx
│  │  │  │     │  │  │     ├─ 📄no-parameter-properties.mdx
│  │  │  │     │  │  │     ├─ 📄no-redeclare.mdx
│  │  │  │     │  │  │     ├─ 📄no-redundant-type-constituents.mdx
│  │  │  │     │  │  │     ├─ 📄no-require-imports.mdx
│  │  │  │     │  │  │     ├─ 📄no-restricted-imports.mdx
│  │  │  │     │  │  │     ├─ 📄no-restricted-types.mdx
│  │  │  │     │  │  │     ├─ 📄no-shadow.mdx
│  │  │  │     │  │  │     ├─ 📄no-this-alias.mdx
│  │  │  │     │  │  │     ├─ 📄no-type-alias.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-boolean-literal-compare.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-condition.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-parameter-property-assignment.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-qualifier.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-template-expression.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-type-arguments.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-type-assertion.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-type-constraint.mdx
│  │  │  │     │  │  │     ├─ 📄no-unnecessary-type-parameters.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-argument.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-assignment.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-call.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-declaration-merging.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-enum-comparison.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-function-type.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-member-access.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-return.mdx
│  │  │  │     │  │  │     ├─ 📄no-unsafe-unary-minus.mdx
│  │  │  │     │  │  │     ├─ 📄no-unused-expressions.mdx
│  │  │  │     │  │  │     ├─ 📄no-unused-vars.mdx
│  │  │  │     │  │  │     ├─ 📄no-use-before-define.mdx
│  │  │  │     │  │  │     ├─ 📄no-useless-constructor.mdx
│  │  │  │     │  │  │     ├─ 📄no-useless-empty-export.mdx
│  │  │  │     │  │  │     ├─ 📄no-useless-template-literals.mdx
│  │  │  │     │  │  │     ├─ 📄no-var-requires.mdx
│  │  │  │     │  │  │     ├─ 📄no-wrapper-object-types.mdx
│  │  │  │     │  │  │     ├─ 📄non-nullable-type-assertion-style.mdx
│  │  │  │     │  │  │     ├─ 📄object-curly-spacing.md
│  │  │  │     │  │  │     ├─ 📄only-throw-error.mdx
│  │  │  │     │  │  │     ├─ 📄padding-line-between-statements.md
│  │  │  │     │  │  │     ├─ 📄parameter-properties.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-as-const.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-destructuring.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-enum-initializers.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-find.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-for-of.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-function-type.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-includes.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-literal-enum-member.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-namespace-keyword.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-nullish-coalescing.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-optional-chain.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-promise-reject-errors.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-readonly-parameter-types.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-readonly.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-reduce-type-parameter.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-regexp-exec.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-return-this-type.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-string-starts-ends-with.mdx
│  │  │  │     │  │  │     ├─ 📄prefer-ts-expect-error.mdx
│  │  │  │     │  │  │     ├─ 📄promise-function-async.mdx
│  │  │  │     │  │  │     ├─ 📄quotes.md
│  │  │  │     │  │  │     ├─ 📄README.md
│  │  │  │     │  │  │     ├─ 📄require-array-sort-compare.mdx
│  │  │  │     │  │  │     ├─ 📄require-await.mdx
│  │  │  │     │  │  │     ├─ 📄restrict-plus-operands.mdx
│  │  │  │     │  │  │     ├─ 📄restrict-template-expressions.mdx
│  │  │  │     │  │  │     ├─ 📄return-await.mdx
│  │  │  │     │  │  │     ├─ 📄semi.md
│  │  │  │     │  │  │     ├─ 📄sort-type-constituents.mdx
│  │  │  │     │  │  │     ├─ 📄sort-type-union-intersection-members.mdx
│  │  │  │     │  │  │     ├─ 📄space-before-blocks.md
│  │  │  │     │  │  │     ├─ 📄space-before-function-paren.md
│  │  │  │     │  │  │     ├─ 📄space-infix-ops.md
│  │  │  │     │  │  │     ├─ 📄strict-boolean-expressions.mdx
│  │  │  │     │  │  │     ├─ 📄switch-exhaustiveness-check.mdx
│  │  │  │     │  │  │     ├─ 📄TEMPLATE.md
│  │  │  │     │  │  │     ├─ 📄triple-slash-reference.mdx
│  │  │  │     │  │  │     ├─ 📄type-annotation-spacing.md
│  │  │  │     │  │  │     ├─ 📄typedef.mdx
│  │  │  │     │  │  │     ├─ 📄unbound-method.mdx
│  │  │  │     │  │  │     ├─ 📄unified-signatures.mdx
│  │  │  │     │  │  │     └─ 📄use-unknown-in-catch-callback-variable.mdx
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄eslint
│  │  │  │     │  │  │     ├─ 📄eslint.CMD
│  │  │  │     │  │  │     ├─ 📄eslint.ps1
│  │  │  │     │  │  │     ├─ 📄tsc
│  │  │  │     │  │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │  │     ├─ 📄tsserver
│  │  │  │     │  │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │  │     └─ 📄tsserver.ps1
│  │  │  │     │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  ├─ 📄README.md
│  │  │  │     │  │  └─ 📄rules.d.ts
│  │  │  │     │  ├─ 📁parser
│  │  │  │     │  │  ├─ 📁dist
│  │  │  │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │  │  │  ├─ 📄parser.d.ts
│  │  │  │     │  │  │  ├─ 📄parser.d.ts.map
│  │  │  │     │  │  │  ├─ 📄parser.js
│  │  │  │     │  │  │  └─ 📄parser.js.map
│  │  │  │     │  │  ├─ 📁node_modules
│  │  │  │     │  │  │  └─ 📁.bin
│  │  │  │     │  │  │     ├─ 📄eslint
│  │  │  │     │  │  │     ├─ 📄eslint.CMD
│  │  │  │     │  │  │     ├─ 📄eslint.ps1
│  │  │  │     │  │  │     ├─ 📄tsc
│  │  │  │     │  │  │     ├─ 📄tsc.CMD
│  │  │  │     │  │  │     ├─ 📄tsc.ps1
│  │  │  │     │  │  │     ├─ 📄tsserver
│  │  │  │     │  │  │     ├─ 📄tsserver.CMD
│  │  │  │     │  │  │     └─ 📄tsserver.ps1
│  │  │  │     │  │  ├─ 📄LICENSE
│  │  │  │     │  │  ├─ 📄package.json
│  │  │  │     │  │  └─ 📄README.md
│  │  │  │     │  └─ 📁utils
│  │  │  │     │     ├─ 📁dist
│  │  │  │     │     │  ├─ 📁ast-utils
│  │  │  │     │     │  │  ├─ 📁eslint-utils
│  │  │  │     │     │  │  │  ├─ 📄astUtilities.d.ts
│  │  │  │     │     │  │  │  ├─ 📄astUtilities.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄astUtilities.js
│  │  │  │     │     │  │  │  ├─ 📄astUtilities.js.map
│  │  │  │     │     │  │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄index.js
│  │  │  │     │     │  │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  │  ├─ 📄PatternMatcher.d.ts
│  │  │  │     │     │  │  │  ├─ 📄PatternMatcher.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄PatternMatcher.js
│  │  │  │     │     │  │  │  ├─ 📄PatternMatcher.js.map
│  │  │  │     │     │  │  │  ├─ 📄predicates.d.ts
│  │  │  │     │     │  │  │  ├─ 📄predicates.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄predicates.js
│  │  │  │     │     │  │  │  ├─ 📄predicates.js.map
│  │  │  │     │     │  │  │  ├─ 📄ReferenceTracker.d.ts
│  │  │  │     │     │  │  │  ├─ 📄ReferenceTracker.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄ReferenceTracker.js
│  │  │  │     │     │  │  │  ├─ 📄ReferenceTracker.js.map
│  │  │  │     │     │  │  │  ├─ 📄scopeAnalysis.d.ts
│  │  │  │     │     │  │  │  ├─ 📄scopeAnalysis.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄scopeAnalysis.js
│  │  │  │     │     │  │  │  └─ 📄scopeAnalysis.js.map
│  │  │  │     │     │  │  ├─ 📄helpers.d.ts
│  │  │  │     │     │  │  ├─ 📄helpers.d.ts.map
│  │  │  │     │     │  │  ├─ 📄helpers.js
│  │  │  │     │     │  │  ├─ 📄helpers.js.map
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  ├─ 📄misc.d.ts
│  │  │  │     │     │  │  ├─ 📄misc.d.ts.map
│  │  │  │     │     │  │  ├─ 📄misc.js
│  │  │  │     │     │  │  ├─ 📄misc.js.map
│  │  │  │     │     │  │  ├─ 📄predicates.d.ts
│  │  │  │     │     │  │  ├─ 📄predicates.d.ts.map
│  │  │  │     │     │  │  ├─ 📄predicates.js
│  │  │  │     │     │  │  └─ 📄predicates.js.map
│  │  │  │     │     │  ├─ 📁eslint-utils
│  │  │  │     │     │  │  ├─ 📄applyDefault.d.ts
│  │  │  │     │     │  │  ├─ 📄applyDefault.d.ts.map
│  │  │  │     │     │  │  ├─ 📄applyDefault.js
│  │  │  │     │     │  │  ├─ 📄applyDefault.js.map
│  │  │  │     │     │  │  ├─ 📄deepMerge.d.ts
│  │  │  │     │     │  │  ├─ 📄deepMerge.d.ts.map
│  │  │  │     │     │  │  ├─ 📄deepMerge.js
│  │  │  │     │     │  │  ├─ 📄deepMerge.js.map
│  │  │  │     │     │  │  ├─ 📄getParserServices.d.ts
│  │  │  │     │     │  │  ├─ 📄getParserServices.d.ts.map
│  │  │  │     │     │  │  ├─ 📄getParserServices.js
│  │  │  │     │     │  │  ├─ 📄getParserServices.js.map
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  ├─ 📄InferTypesFromRule.d.ts
│  │  │  │     │     │  │  ├─ 📄InferTypesFromRule.d.ts.map
│  │  │  │     │     │  │  ├─ 📄InferTypesFromRule.js
│  │  │  │     │     │  │  ├─ 📄InferTypesFromRule.js.map
│  │  │  │     │     │  │  ├─ 📄nullThrows.d.ts
│  │  │  │     │     │  │  ├─ 📄nullThrows.d.ts.map
│  │  │  │     │     │  │  ├─ 📄nullThrows.js
│  │  │  │     │     │  │  ├─ 📄nullThrows.js.map
│  │  │  │     │     │  │  ├─ 📄parserSeemsToBeTSESLint.d.ts
│  │  │  │     │     │  │  ├─ 📄parserSeemsToBeTSESLint.d.ts.map
│  │  │  │     │     │  │  ├─ 📄parserSeemsToBeTSESLint.js
│  │  │  │     │     │  │  ├─ 📄parserSeemsToBeTSESLint.js.map
│  │  │  │     │     │  │  ├─ 📄RuleCreator.d.ts
│  │  │  │     │     │  │  ├─ 📄RuleCreator.d.ts.map
│  │  │  │     │     │  │  ├─ 📄RuleCreator.js
│  │  │  │     │     │  │  └─ 📄RuleCreator.js.map
│  │  │  │     │     │  ├─ 📁ts-eslint
│  │  │  │     │     │  │  ├─ 📁eslint
│  │  │  │     │     │  │  │  ├─ 📄ESLintShared.d.ts
│  │  │  │     │     │  │  │  ├─ 📄ESLintShared.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄ESLintShared.js
│  │  │  │     │     │  │  │  ├─ 📄ESLintShared.js.map
│  │  │  │     │     │  │  │  ├─ 📄FlatESLint.d.ts
│  │  │  │     │     │  │  │  ├─ 📄FlatESLint.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄FlatESLint.js
│  │  │  │     │     │  │  │  ├─ 📄FlatESLint.js.map
│  │  │  │     │     │  │  │  ├─ 📄LegacyESLint.d.ts
│  │  │  │     │     │  │  │  ├─ 📄LegacyESLint.d.ts.map
│  │  │  │     │     │  │  │  ├─ 📄LegacyESLint.js
│  │  │  │     │     │  │  │  └─ 📄LegacyESLint.js.map
│  │  │  │     │     │  │  ├─ 📄AST.d.ts
│  │  │  │     │     │  │  ├─ 📄AST.d.ts.map
│  │  │  │     │     │  │  ├─ 📄AST.js
│  │  │  │     │     │  │  ├─ 📄AST.js.map
│  │  │  │     │     │  │  ├─ 📄Config.d.ts
│  │  │  │     │     │  │  ├─ 📄Config.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Config.js
│  │  │  │     │     │  │  ├─ 📄Config.js.map
│  │  │  │     │     │  │  ├─ 📄ESLint.d.ts
│  │  │  │     │     │  │  ├─ 📄ESLint.d.ts.map
│  │  │  │     │     │  │  ├─ 📄ESLint.js
│  │  │  │     │     │  │  ├─ 📄ESLint.js.map
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  ├─ 📄Linter.d.ts
│  │  │  │     │     │  │  ├─ 📄Linter.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Linter.js
│  │  │  │     │     │  │  ├─ 📄Linter.js.map
│  │  │  │     │     │  │  ├─ 📄Parser.d.ts
│  │  │  │     │     │  │  ├─ 📄Parser.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Parser.js
│  │  │  │     │     │  │  ├─ 📄Parser.js.map
│  │  │  │     │     │  │  ├─ 📄ParserOptions.d.ts
│  │  │  │     │     │  │  ├─ 📄ParserOptions.d.ts.map
│  │  │  │     │     │  │  ├─ 📄ParserOptions.js
│  │  │  │     │     │  │  ├─ 📄ParserOptions.js.map
│  │  │  │     │     │  │  ├─ 📄Processor.d.ts
│  │  │  │     │     │  │  ├─ 📄Processor.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Processor.js
│  │  │  │     │     │  │  ├─ 📄Processor.js.map
│  │  │  │     │     │  │  ├─ 📄Rule.d.ts
│  │  │  │     │     │  │  ├─ 📄Rule.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Rule.js
│  │  │  │     │     │  │  ├─ 📄Rule.js.map
│  │  │  │     │     │  │  ├─ 📄RuleTester.d.ts
│  │  │  │     │     │  │  ├─ 📄RuleTester.d.ts.map
│  │  │  │     │     │  │  ├─ 📄RuleTester.js
│  │  │  │     │     │  │  ├─ 📄RuleTester.js.map
│  │  │  │     │     │  │  ├─ 📄Scope.d.ts
│  │  │  │     │     │  │  ├─ 📄Scope.d.ts.map
│  │  │  │     │     │  │  ├─ 📄Scope.js
│  │  │  │     │     │  │  ├─ 📄Scope.js.map
│  │  │  │     │     │  │  ├─ 📄SourceCode.d.ts
│  │  │  │     │     │  │  ├─ 📄SourceCode.d.ts.map
│  │  │  │     │     │  │  ├─ 📄SourceCode.js
│  │  │  │     │     │  │  └─ 📄SourceCode.js.map
│  │  │  │     │     │  ├─ 📁ts-utils
│  │  │  │     │     │  │  ├─ 📄index.d.ts
│  │  │  │     │     │  │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  │  ├─ 📄index.js
│  │  │  │     │     │  │  ├─ 📄index.js.map
│  │  │  │     │     │  │  ├─ 📄isArray.d.ts
│  │  │  │     │     │  │  ├─ 📄isArray.d.ts.map
│  │  │  │     │     │  │  ├─ 📄isArray.js
│  │  │  │     │     │  │  └─ 📄isArray.js.map
│  │  │  │     │     │  ├─ 📄index.d.ts
│  │  │  │     │     │  ├─ 📄index.d.ts.map
│  │  │  │     │     │  ├─ 📄index.js
│  │  │  │     │     │  ├─ 📄index.js.map
│  │  │  │     │     │  ├─ 📄json-schema.d.ts
│  │  │  │     │     │  ├─ 📄json-schema.d.ts.map
│  │  │  │     │     │  ├─ 📄json-schema.js
│  │  │  │     │     │  ├─ 📄json-schema.js.map
│  │  │  │     │     │  ├─ 📄ts-estree.d.ts
│  │  │  │     │     │  ├─ 📄ts-estree.d.ts.map
│  │  │  │     │     │  ├─ 📄ts-estree.js
│  │  │  │     │     │  └─ 📄ts-estree.js.map
│  │  │  │     │     ├─ 📁node_modules
│  │  │  │     │     │  └─ 📁.bin
│  │  │  │     │     │     ├─ 📄eslint
│  │  │  │     │     │     ├─ 📄eslint.CMD
│  │  │  │     │     │     └─ 📄eslint.ps1
│  │  │  │     │     ├─ 📄LICENSE
│  │  │  │     │     ├─ 📄package.json
│  │  │  │     │     └─ 📄README.md
│  │  │  │     ├─ 📁typescript
│  │  │  │     │  ├─ 📁bin
│  │  │  │     │  │  ├─ 📄tsc
│  │  │  │     │  │  └─ 📄tsserver
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📁cs
│  │  │  │     │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │     │  │  ├─ 📁de
│  │  │  │     │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │     │  │  ├─ 📁es
│  │  │  │     │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │     │  │  ├─ 📁fr
│  │  │  │     │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │     │  │  ├─ 📁it
│  │  │  │     │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │     │  │  ├─ 📁ja
│  │  │  │     │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │     │  │  ├─ 📁ko
│  │  │  │     │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │     │  │  ├─ 📁pl
│  │  │  │     │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │     │  │  ├─ 📁pt-br
│  │  │  │     │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │     │  │  ├─ 📁ru
│  │  │  │     │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │     │  │  ├─ 📁tr
│  │  │  │     │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │     │  │  ├─ 📁zh-cn
│  │  │  │     │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │     │  │  ├─ 📁zh-tw
│  │  │  │     │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │     │  │  ├─ 📄cancellationToken.js
│  │  │  │     │  │  ├─ 📄lib.d.ts
│  │  │  │     │  │  ├─ 📄lib.decorators.d.ts
│  │  │  │     │  │  ├─ 📄lib.decorators.legacy.d.ts
│  │  │  │     │  │  ├─ 📄lib.dom.asynciterable.d.ts
│  │  │  │     │  │  ├─ 📄lib.dom.d.ts
│  │  │  │     │  │  ├─ 📄lib.dom.iterable.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2015.collection.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2015.core.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2015.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2015.generator.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2015.iterable.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2015.promise.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2015.proxy.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2015.reflect.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2015.symbol.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2015.symbol.wellknown.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2016.array.include.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2016.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2016.full.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2016.intl.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2017.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2017.date.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2017.full.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2017.intl.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2017.object.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2017.sharedmemory.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2017.string.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2017.typedarrays.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2018.asyncgenerator.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2018.asynciterable.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2018.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2018.full.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2018.intl.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2018.promise.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2018.regexp.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2019.array.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2019.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2019.full.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2019.intl.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2019.object.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2019.string.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2019.symbol.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2020.bigint.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2020.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2020.date.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2020.full.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2020.intl.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2020.number.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2020.promise.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2020.sharedmemory.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2020.string.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2020.symbol.wellknown.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2021.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2021.full.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2021.intl.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2021.promise.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2021.string.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2021.weakref.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2022.array.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2022.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2022.error.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2022.full.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2022.intl.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2022.object.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2022.regexp.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2022.sharedmemory.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2022.string.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2023.array.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2023.collection.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2023.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2023.full.d.ts
│  │  │  │     │  │  ├─ 📄lib.es2023.intl.d.ts
│  │  │  │     │  │  ├─ 📄lib.es5.d.ts
│  │  │  │     │  │  ├─ 📄lib.es6.d.ts
│  │  │  │     │  │  ├─ 📄lib.esnext.array.d.ts
│  │  │  │     │  │  ├─ 📄lib.esnext.collection.d.ts
│  │  │  │     │  │  ├─ 📄lib.esnext.d.ts
│  │  │  │     │  │  ├─ 📄lib.esnext.decorators.d.ts
│  │  │  │     │  │  ├─ 📄lib.esnext.disposable.d.ts
│  │  │  │     │  │  ├─ 📄lib.esnext.full.d.ts
│  │  │  │     │  │  ├─ 📄lib.esnext.intl.d.ts
│  │  │  │     │  │  ├─ 📄lib.esnext.object.d.ts
│  │  │  │     │  │  ├─ 📄lib.esnext.promise.d.ts
│  │  │  │     │  │  ├─ 📄lib.esnext.regexp.d.ts
│  │  │  │     │  │  ├─ 📄lib.esnext.string.d.ts
│  │  │  │     │  │  ├─ 📄lib.scripthost.d.ts
│  │  │  │     │  │  ├─ 📄lib.webworker.asynciterable.d.ts
│  │  │  │     │  │  ├─ 📄lib.webworker.d.ts
│  │  │  │     │  │  ├─ 📄lib.webworker.importscripts.d.ts
│  │  │  │     │  │  ├─ 📄lib.webworker.iterable.d.ts
│  │  │  │     │  │  ├─ 📄tsc.js
│  │  │  │     │  │  ├─ 📄tsserver.js
│  │  │  │     │  │  ├─ 📄tsserverlibrary.d.ts
│  │  │  │     │  │  ├─ 📄tsserverlibrary.js
│  │  │  │     │  │  ├─ 📄typescript.d.ts
│  │  │  │     │  │  ├─ 📄typescript.js
│  │  │  │     │  │  ├─ 📄typesMap.json
│  │  │  │     │  │  ├─ 📄typingsInstaller.js
│  │  │  │     │  │  └─ 📄watchGuard.js
│  │  │  │     │  ├─ 📄LICENSE.txt
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄README.md
│  │  │  │     │  ├─ 📄SECURITY.md
│  │  │  │     │  └─ 📄ThirdPartyNoticeText.txt
│  │  │  │     └─ 📁typescript-eslint
│  │  │  │        ├─ 📁dist
│  │  │  │        │  ├─ 📁configs
│  │  │  │        │  │  ├─ 📄all.d.ts
│  │  │  │        │  │  ├─ 📄all.d.ts.map
│  │  │  │        │  │  ├─ 📄all.js
│  │  │  │        │  │  ├─ 📄all.js.map
│  │  │  │        │  │  ├─ 📄base.d.ts
│  │  │  │        │  │  ├─ 📄base.d.ts.map
│  │  │  │        │  │  ├─ 📄base.js
│  │  │  │        │  │  ├─ 📄base.js.map
│  │  │  │        │  │  ├─ 📄disable-type-checked.d.ts
│  │  │  │        │  │  ├─ 📄disable-type-checked.d.ts.map
│  │  │  │        │  │  ├─ 📄disable-type-checked.js
│  │  │  │        │  │  ├─ 📄disable-type-checked.js.map
│  │  │  │        │  │  ├─ 📄eslint-recommended.d.ts
│  │  │  │        │  │  ├─ 📄eslint-recommended.d.ts.map
│  │  │  │        │  │  ├─ 📄eslint-recommended.js
│  │  │  │        │  │  ├─ 📄eslint-recommended.js.map
│  │  │  │        │  │  ├─ 📄recommended-type-checked-only.d.ts
│  │  │  │        │  │  ├─ 📄recommended-type-checked-only.d.ts.map
│  │  │  │        │  │  ├─ 📄recommended-type-checked-only.js
│  │  │  │        │  │  ├─ 📄recommended-type-checked-only.js.map
│  │  │  │        │  │  ├─ 📄recommended-type-checked.d.ts
│  │  │  │        │  │  ├─ 📄recommended-type-checked.d.ts.map
│  │  │  │        │  │  ├─ 📄recommended-type-checked.js
│  │  │  │        │  │  ├─ 📄recommended-type-checked.js.map
│  │  │  │        │  │  ├─ 📄recommended.d.ts
│  │  │  │        │  │  ├─ 📄recommended.d.ts.map
│  │  │  │        │  │  ├─ 📄recommended.js
│  │  │  │        │  │  ├─ 📄recommended.js.map
│  │  │  │        │  │  ├─ 📄strict-type-checked-only.d.ts
│  │  │  │        │  │  ├─ 📄strict-type-checked-only.d.ts.map
│  │  │  │        │  │  ├─ 📄strict-type-checked-only.js
│  │  │  │        │  │  ├─ 📄strict-type-checked-only.js.map
│  │  │  │        │  │  ├─ 📄strict-type-checked.d.ts
│  │  │  │        │  │  ├─ 📄strict-type-checked.d.ts.map
│  │  │  │        │  │  ├─ 📄strict-type-checked.js
│  │  │  │        │  │  ├─ 📄strict-type-checked.js.map
│  │  │  │        │  │  ├─ 📄strict.d.ts
│  │  │  │        │  │  ├─ 📄strict.d.ts.map
│  │  │  │        │  │  ├─ 📄strict.js
│  │  │  │        │  │  ├─ 📄strict.js.map
│  │  │  │        │  │  ├─ 📄stylistic-type-checked-only.d.ts
│  │  │  │        │  │  ├─ 📄stylistic-type-checked-only.d.ts.map
│  │  │  │        │  │  ├─ 📄stylistic-type-checked-only.js
│  │  │  │        │  │  ├─ 📄stylistic-type-checked-only.js.map
│  │  │  │        │  │  ├─ 📄stylistic-type-checked.d.ts
│  │  │  │        │  │  ├─ 📄stylistic-type-checked.d.ts.map
│  │  │  │        │  │  ├─ 📄stylistic-type-checked.js
│  │  │  │        │  │  ├─ 📄stylistic-type-checked.js.map
│  │  │  │        │  │  ├─ 📄stylistic.d.ts
│  │  │  │        │  │  ├─ 📄stylistic.d.ts.map
│  │  │  │        │  │  ├─ 📄stylistic.js
│  │  │  │        │  │  └─ 📄stylistic.js.map
│  │  │  │        │  ├─ 📄config-helper.d.ts
│  │  │  │        │  ├─ 📄config-helper.d.ts.map
│  │  │  │        │  ├─ 📄config-helper.js
│  │  │  │        │  ├─ 📄config-helper.js.map
│  │  │  │        │  ├─ 📄index.d.ts
│  │  │  │        │  ├─ 📄index.d.ts.map
│  │  │  │        │  ├─ 📄index.js
│  │  │  │        │  └─ 📄index.js.map
│  │  │  │        ├─ 📁node_modules
│  │  │  │        │  └─ 📁.bin
│  │  │  │        │     ├─ 📄tsc
│  │  │  │        │     ├─ 📄tsc.CMD
│  │  │  │        │     ├─ 📄tsc.ps1
│  │  │  │        │     ├─ 📄tsserver
│  │  │  │        │     ├─ 📄tsserver.CMD
│  │  │  │        │     └─ 📄tsserver.ps1
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁typescript@5.5.4
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁typescript
│  │  │  │        ├─ 📁bin
│  │  │  │        │  ├─ 📄tsc
│  │  │  │        │  └─ 📄tsserver
│  │  │  │        ├─ 📁lib
│  │  │  │        │  ├─ 📁cs
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁de
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁es
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁fr
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁it
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ja
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ko
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁pl
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁pt-br
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁ru
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁tr
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁zh-cn
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📁zh-tw
│  │  │  │        │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │        │  ├─ 📄cancellationToken.js
│  │  │  │        │  ├─ 📄lib.d.ts
│  │  │  │        │  ├─ 📄lib.decorators.d.ts
│  │  │  │        │  ├─ 📄lib.decorators.legacy.d.ts
│  │  │  │        │  ├─ 📄lib.dom.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.dom.d.ts
│  │  │  │        │  ├─ 📄lib.dom.iterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.collection.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.core.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.generator.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.iterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.proxy.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.reflect.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.symbol.d.ts
│  │  │  │        │  ├─ 📄lib.es2015.symbol.wellknown.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.array.include.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2016.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.date.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2017.typedarrays.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.asyncgenerator.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2018.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2019.symbol.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.bigint.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.date.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.number.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2020.symbol.wellknown.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.promise.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2021.weakref.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.error.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.object.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.sharedmemory.d.ts
│  │  │  │        │  ├─ 📄lib.es2022.string.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.array.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.collection.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.full.d.ts
│  │  │  │        │  ├─ 📄lib.es2023.intl.d.ts
│  │  │  │        │  ├─ 📄lib.es5.d.ts
│  │  │  │        │  ├─ 📄lib.es6.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.array.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.collection.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.decorators.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.disposable.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.full.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.intl.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.object.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.promise.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.regexp.d.ts
│  │  │  │        │  ├─ 📄lib.esnext.string.d.ts
│  │  │  │        │  ├─ 📄lib.scripthost.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.asynciterable.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.importscripts.d.ts
│  │  │  │        │  ├─ 📄lib.webworker.iterable.d.ts
│  │  │  │        │  ├─ 📄tsc.js
│  │  │  │        │  ├─ 📄tsserver.js
│  │  │  │        │  ├─ 📄tsserverlibrary.d.ts
│  │  │  │        │  ├─ 📄tsserverlibrary.js
│  │  │  │        │  ├─ 📄typescript.d.ts
│  │  │  │        │  ├─ 📄typescript.js
│  │  │  │        │  ├─ 📄typesMap.json
│  │  │  │        │  ├─ 📄typingsInstaller.js
│  │  │  │        │  └─ 📄watchGuard.js
│  │  │  │        ├─ 📄LICENSE.txt
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        ├─ 📄SECURITY.md
│  │  │  │        └─ 📄ThirdPartyNoticeText.txt
│  │  │  ├─ 📁uri-js@4.4.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁punycode
│  │  │  │     │  ├─ 📄LICENSE-MIT.txt
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄punycode.es6.js
│  │  │  │     │  ├─ 📄punycode.js
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁uri-js
│  │  │  │        ├─ 📁dist
│  │  │  │        │  ├─ 📁es5
│  │  │  │        │  │  ├─ 📄uri.all.d.ts
│  │  │  │        │  │  ├─ 📄uri.all.js
│  │  │  │        │  │  ├─ 📄uri.all.js.map
│  │  │  │        │  │  ├─ 📄uri.all.min.d.ts
│  │  │  │        │  │  ├─ 📄uri.all.min.js
│  │  │  │        │  │  └─ 📄uri.all.min.js.map
│  │  │  │        │  └─ 📁esnext
│  │  │  │        │     ├─ 📁schemes
│  │  │  │        │     │  ├─ 📄http.d.ts
│  │  │  │        │     │  ├─ 📄http.js
│  │  │  │        │     │  ├─ 📄http.js.map
│  │  │  │        │     │  ├─ 📄https.d.ts
│  │  │  │        │     │  ├─ 📄https.js
│  │  │  │        │     │  ├─ 📄https.js.map
│  │  │  │        │     │  ├─ 📄mailto.d.ts
│  │  │  │        │     │  ├─ 📄mailto.js
│  │  │  │        │     │  ├─ 📄mailto.js.map
│  │  │  │        │     │  ├─ 📄urn-uuid.d.ts
│  │  │  │        │     │  ├─ 📄urn-uuid.js
│  │  │  │        │     │  ├─ 📄urn-uuid.js.map
│  │  │  │        │     │  ├─ 📄urn.d.ts
│  │  │  │        │     │  ├─ 📄urn.js
│  │  │  │        │     │  ├─ 📄urn.js.map
│  │  │  │        │     │  ├─ 📄ws.d.ts
│  │  │  │        │     │  ├─ 📄ws.js
│  │  │  │        │     │  ├─ 📄ws.js.map
│  │  │  │        │     │  ├─ 📄wss.d.ts
│  │  │  │        │     │  ├─ 📄wss.js
│  │  │  │        │     │  └─ 📄wss.js.map
│  │  │  │        │     ├─ 📄index.d.ts
│  │  │  │        │     ├─ 📄index.js
│  │  │  │        │     ├─ 📄index.js.map
│  │  │  │        │     ├─ 📄regexps-iri.d.ts
│  │  │  │        │     ├─ 📄regexps-iri.js
│  │  │  │        │     ├─ 📄regexps-iri.js.map
│  │  │  │        │     ├─ 📄regexps-uri.d.ts
│  │  │  │        │     ├─ 📄regexps-uri.js
│  │  │  │        │     ├─ 📄regexps-uri.js.map
│  │  │  │        │     ├─ 📄uri.d.ts
│  │  │  │        │     ├─ 📄uri.js
│  │  │  │        │     ├─ 📄uri.js.map
│  │  │  │        │     ├─ 📄util.d.ts
│  │  │  │        │     ├─ 📄util.js
│  │  │  │        │     └─ 📄util.js.map
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        └─ 📄yarn.lock
│  │  │  ├─ 📁vite@5.4.1
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁esbuild
│  │  │  │     │  ├─ 📁bin
│  │  │  │     │  │  └─ 📄esbuild
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄main.d.ts
│  │  │  │     │  │  └─ 📄main.js
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄esbuild
│  │  │  │     │  │     ├─ 📄esbuild.CMD
│  │  │  │     │  │     └─ 📄esbuild.ps1
│  │  │  │     │  ├─ 📄install.js
│  │  │  │     │  ├─ 📄LICENSE.md
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁postcss
│  │  │  │     │  ├─ 📁lib
│  │  │  │     │  │  ├─ 📄at-rule.d.ts
│  │  │  │     │  │  ├─ 📄at-rule.js
│  │  │  │     │  │  ├─ 📄comment.d.ts
│  │  │  │     │  │  ├─ 📄comment.js
│  │  │  │     │  │  ├─ 📄container.d.ts
│  │  │  │     │  │  ├─ 📄container.js
│  │  │  │     │  │  ├─ 📄css-syntax-error.d.ts
│  │  │  │     │  │  ├─ 📄css-syntax-error.js
│  │  │  │     │  │  ├─ 📄declaration.d.ts
│  │  │  │     │  │  ├─ 📄declaration.js
│  │  │  │     │  │  ├─ 📄document.d.ts
│  │  │  │     │  │  ├─ 📄document.js
│  │  │  │     │  │  ├─ 📄fromJSON.d.ts
│  │  │  │     │  │  ├─ 📄fromJSON.js
│  │  │  │     │  │  ├─ 📄input.d.ts
│  │  │  │     │  │  ├─ 📄input.js
│  │  │  │     │  │  ├─ 📄lazy-result.d.ts
│  │  │  │     │  │  ├─ 📄lazy-result.js
│  │  │  │     │  │  ├─ 📄list.d.ts
│  │  │  │     │  │  ├─ 📄list.js
│  │  │  │     │  │  ├─ 📄map-generator.js
│  │  │  │     │  │  ├─ 📄no-work-result.d.ts
│  │  │  │     │  │  ├─ 📄no-work-result.js
│  │  │  │     │  │  ├─ 📄node.d.ts
│  │  │  │     │  │  ├─ 📄node.js
│  │  │  │     │  │  ├─ 📄parse.d.ts
│  │  │  │     │  │  ├─ 📄parse.js
│  │  │  │     │  │  ├─ 📄parser.js
│  │  │  │     │  │  ├─ 📄postcss.d.mts
│  │  │  │     │  │  ├─ 📄postcss.d.ts
│  │  │  │     │  │  ├─ 📄postcss.js
│  │  │  │     │  │  ├─ 📄postcss.mjs
│  │  │  │     │  │  ├─ 📄previous-map.d.ts
│  │  │  │     │  │  ├─ 📄previous-map.js
│  │  │  │     │  │  ├─ 📄processor.d.ts
│  │  │  │     │  │  ├─ 📄processor.js
│  │  │  │     │  │  ├─ 📄result.d.ts
│  │  │  │     │  │  ├─ 📄result.js
│  │  │  │     │  │  ├─ 📄root.d.ts
│  │  │  │     │  │  ├─ 📄root.js
│  │  │  │     │  │  ├─ 📄rule.d.ts
│  │  │  │     │  │  ├─ 📄rule.js
│  │  │  │     │  │  ├─ 📄stringifier.d.ts
│  │  │  │     │  │  ├─ 📄stringifier.js
│  │  │  │     │  │  ├─ 📄stringify.d.ts
│  │  │  │     │  │  ├─ 📄stringify.js
│  │  │  │     │  │  ├─ 📄symbols.js
│  │  │  │     │  │  ├─ 📄terminal-highlight.js
│  │  │  │     │  │  ├─ 📄tokenize.js
│  │  │  │     │  │  ├─ 📄warn-once.js
│  │  │  │     │  │  ├─ 📄warning.d.ts
│  │  │  │     │  │  └─ 📄warning.js
│  │  │  │     │  ├─ 📁node_modules
│  │  │  │     │  │  └─ 📁.bin
│  │  │  │     │  │     ├─ 📄nanoid
│  │  │  │     │  │     ├─ 📄nanoid.CMD
│  │  │  │     │  │     └─ 📄nanoid.ps1
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     ├─ 📁rollup
│  │  │  │     │  ├─ 📁dist
│  │  │  │     │  │  ├─ 📁bin
│  │  │  │     │  │  │  └─ 📄rollup
│  │  │  │     │  │  ├─ 📁es
│  │  │  │     │  │  │  ├─ 📁shared
│  │  │  │     │  │  │  │  ├─ 📄node-entry.js
│  │  │  │     │  │  │  │  ├─ 📄parseAst.js
│  │  │  │     │  │  │  │  └─ 📄watch.js
│  │  │  │     │  │  │  ├─ 📄getLogFilter.js
│  │  │  │     │  │  │  ├─ 📄package.json
│  │  │  │     │  │  │  ├─ 📄parseAst.js
│  │  │  │     │  │  │  └─ 📄rollup.js
│  │  │  │     │  │  ├─ 📁shared
│  │  │  │     │  │  │  ├─ 📄fsevents-importer.js
│  │  │  │     │  │  │  ├─ 📄index.js
│  │  │  │     │  │  │  ├─ 📄loadConfigFile.js
│  │  │  │     │  │  │  ├─ 📄parseAst.js
│  │  │  │     │  │  │  ├─ 📄rollup.js
│  │  │  │     │  │  │  ├─ 📄watch-cli.js
│  │  │  │     │  │  │  └─ 📄watch.js
│  │  │  │     │  │  ├─ 📄getLogFilter.d.ts
│  │  │  │     │  │  ├─ 📄getLogFilter.js
│  │  │  │     │  │  ├─ 📄loadConfigFile.d.ts
│  │  │  │     │  │  ├─ 📄loadConfigFile.js
│  │  │  │     │  │  ├─ 📄native.js
│  │  │  │     │  │  ├─ 📄parseAst.d.ts
│  │  │  │     │  │  ├─ 📄parseAst.js
│  │  │  │     │  │  ├─ 📄rollup.d.ts
│  │  │  │     │  │  └─ 📄rollup.js
│  │  │  │     │  ├─ 📄LICENSE.md
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  └─ 📄README.md
│  │  │  │     └─ 📁vite
│  │  │  │        ├─ 📁bin
│  │  │  │        │  ├─ 📄openChrome.applescript
│  │  │  │        │  └─ 📄vite.js
│  │  │  │        ├─ 📁dist
│  │  │  │        │  ├─ 📁client
│  │  │  │        │  │  ├─ 📄client.mjs
│  │  │  │        │  │  └─ 📄env.mjs
│  │  │  │        │  ├─ 📁node
│  │  │  │        │  │  ├─ 📁chunks
│  │  │  │        │  │  │  ├─ 📄dep-BkYu-SNl.js
│  │  │  │        │  │  │  ├─ 📄dep-Cy9twKMn.js
│  │  │  │        │  │  │  ├─ 📄dep-D-7KCb9p.js
│  │  │  │        │  │  │  ├─ 📄dep-IQS-Za7F.js
│  │  │  │        │  │  │  └─ 📄dep-SDtFYyy1.js
│  │  │  │        │  │  ├─ 📄cli.js
│  │  │  │        │  │  ├─ 📄constants.js
│  │  │  │        │  │  ├─ 📄index.d.ts
│  │  │  │        │  │  ├─ 📄index.js
│  │  │  │        │  │  ├─ 📄runtime.d.ts
│  │  │  │        │  │  ├─ 📄runtime.js
│  │  │  │        │  │  └─ 📄types.d-aGj9QkWt.d.ts
│  │  │  │        │  └─ 📁node-cjs
│  │  │  │        │     └─ 📄publicUtils.cjs
│  │  │  │        ├─ 📁node_modules
│  │  │  │        │  └─ 📁.bin
│  │  │  │        │     ├─ 📄esbuild
│  │  │  │        │     ├─ 📄esbuild.CMD
│  │  │  │        │     ├─ 📄esbuild.ps1
│  │  │  │        │     ├─ 📄rollup
│  │  │  │        │     ├─ 📄rollup.CMD
│  │  │  │        │     └─ 📄rollup.ps1
│  │  │  │        ├─ 📁types
│  │  │  │        │  ├─ 📄customEvent.d.ts
│  │  │  │        │  ├─ 📄hmrPayload.d.ts
│  │  │  │        │  ├─ 📄hot.d.ts
│  │  │  │        │  ├─ 📄import-meta.d.ts
│  │  │  │        │  ├─ 📄importGlob.d.ts
│  │  │  │        │  ├─ 📄importMeta.d.ts
│  │  │  │        │  ├─ 📄metadata.d.ts
│  │  │  │        │  └─ 📄package.json
│  │  │  │        ├─ 📄client.d.ts
│  │  │  │        ├─ 📄index.cjs
│  │  │  │        ├─ 📄index.d.cts
│  │  │  │        ├─ 📄LICENSE.md
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁which@2.0.2
│  │  │  │  └─ 📁node_modules
│  │  │  │     ├─ 📁isexe
│  │  │  │     │  ├─ 📁test
│  │  │  │     │  │  └─ 📄basic.js
│  │  │  │     │  ├─ 📄.npmignore
│  │  │  │     │  ├─ 📄index.js
│  │  │  │     │  ├─ 📄LICENSE
│  │  │  │     │  ├─ 📄mode.js
│  │  │  │     │  ├─ 📄package.json
│  │  │  │     │  ├─ 📄README.md
│  │  │  │     │  └─ 📄windows.js
│  │  │  │     └─ 📁which
│  │  │  │        ├─ 📁bin
│  │  │  │        │  └─ 📄node-which
│  │  │  │        ├─ 📄CHANGELOG.md
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        ├─ 📄README.md
│  │  │  │        └─ 📄which.js
│  │  │  ├─ 📁word-wrap@1.2.5
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁word-wrap
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄LICENSE
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄README.md
│  │  │  ├─ 📁yocto-queue@0.1.0
│  │  │  │  └─ 📁node_modules
│  │  │  │     └─ 📁yocto-queue
│  │  │  │        ├─ 📄index.d.ts
│  │  │  │        ├─ 📄index.js
│  │  │  │        ├─ 📄license
│  │  │  │        ├─ 📄package.json
│  │  │  │        └─ 📄readme.md
│  │  │  └─ 📄lock.yaml
│  │  ├─ 📁.vite
│  │  │  ├─ 📁deps
│  │  │  │  ├─ 📄chunk-IZZUN6UV.js
│  │  │  │  ├─ 📄chunk-IZZUN6UV.js.map
│  │  │  │  ├─ 📄package.json
│  │  │  │  ├─ 📄react-dom_client.js
│  │  │  │  ├─ 📄react-dom_client.js.map
│  │  │  │  ├─ 📄react-lazyload.js
│  │  │  │  ├─ 📄react-lazyload.js.map
│  │  │  │  ├─ 📄react.js
│  │  │  │  ├─ 📄react.js.map
│  │  │  │  ├─ 📄react_jsx-dev-runtime.js
│  │  │  │  ├─ 📄react_jsx-dev-runtime.js.map
│  │  │  │  ├─ 📄react_jsx-runtime.js
│  │  │  │  ├─ 📄react_jsx-runtime.js.map
│  │  │  │  └─ 📄_metadata.json
│  │  │  └─ 📁deps_temp_0ec3cd28
│  │  │     ├─ 📄chunk-IZZUN6UV.js
│  │  │     ├─ 📄chunk-IZZUN6UV.js.map
│  │  │     ├─ 📄package.json
│  │  │     ├─ 📄react-dom_client.js
│  │  │     ├─ 📄react-dom_client.js.map
│  │  │     ├─ 📄react-lazyload.js
│  │  │     ├─ 📄react-lazyload.js.map
│  │  │     ├─ 📄react.js
│  │  │     ├─ 📄react.js.map
│  │  │     ├─ 📄react_jsx-dev-runtime.js
│  │  │     ├─ 📄react_jsx-dev-runtime.js.map
│  │  │     ├─ 📄react_jsx-runtime.js
│  │  │     └─ 📄react_jsx-runtime.js.map
│  │  ├─ 📁@eslint
│  │  │  ├─ 📁config-array
│  │  │  │  ├─ 📁dist
│  │  │  │  │  ├─ 📁cjs
│  │  │  │  │  │  ├─ 📄index.cjs
│  │  │  │  │  │  ├─ 📄index.d.cts
│  │  │  │  │  │  └─ 📄types.ts
│  │  │  │  │  └─ 📁esm
│  │  │  │  │     ├─ 📄index.d.ts
│  │  │  │  │     ├─ 📄index.js
│  │  │  │  │     ├─ 📄types.d.ts
│  │  │  │  │     └─ 📄types.ts
│  │  │  │  ├─ 📄LICENSE
│  │  │  │  ├─ 📄package.json
│  │  │  │  └─ 📄README.md
│  │  │  ├─ 📁eslintrc
│  │  │  │  ├─ 📁conf
│  │  │  │  │  ├─ 📄config-schema.js
│  │  │  │  │  └─ 📄environments.js
│  │  │  │  ├─ 📁dist
│  │  │  │  │  ├─ 📄eslintrc-universal.cjs
│  │  │  │  │  ├─ 📄eslintrc-universal.cjs.map
│  │  │  │  │  ├─ 📄eslintrc.cjs
│  │  │  │  │  └─ 📄eslintrc.cjs.map
│  │  │  │  ├─ 📁lib
│  │  │  │  │  ├─ 📁config-array
│  │  │  │  │  │  ├─ 📄config-array.js
│  │  │  │  │  │  ├─ 📄config-dependency.js
│  │  │  │  │  │  ├─ 📄extracted-config.js
│  │  │  │  │  │  ├─ 📄ignore-pattern.js
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  └─ 📄override-tester.js
│  │  │  │  │  ├─ 📁shared
│  │  │  │  │  │  ├─ 📄ajv.js
│  │  │  │  │  │  ├─ 📄config-ops.js
│  │  │  │  │  │  ├─ 📄config-validator.js
│  │  │  │  │  │  ├─ 📄deprecation-warnings.js
│  │  │  │  │  │  ├─ 📄naming.js
│  │  │  │  │  │  ├─ 📄relative-module-resolver.js
│  │  │  │  │  │  └─ 📄types.js
│  │  │  │  │  ├─ 📄cascading-config-array-factory.js
│  │  │  │  │  ├─ 📄config-array-factory.js
│  │  │  │  │  ├─ 📄flat-compat.js
│  │  │  │  │  ├─ 📄index-universal.js
│  │  │  │  │  └─ 📄index.js
│  │  │  │  ├─ 📁node_modules
│  │  │  │  │  └─ 📁.bin
│  │  │  │  │     ├─ 📄js-yaml
│  │  │  │  │     ├─ 📄js-yaml.CMD
│  │  │  │  │     └─ 📄js-yaml.ps1
│  │  │  │  ├─ 📄LICENSE
│  │  │  │  ├─ 📄package.json
│  │  │  │  ├─ 📄README.md
│  │  │  │  └─ 📄universal.js
│  │  │  ├─ 📁js
│  │  │  │  ├─ 📁src
│  │  │  │  │  ├─ 📁configs
│  │  │  │  │  │  ├─ 📄eslint-all.js
│  │  │  │  │  │  └─ 📄eslint-recommended.js
│  │  │  │  │  └─ 📄index.js
│  │  │  │  ├─ 📄LICENSE
│  │  │  │  ├─ 📄package.json
│  │  │  │  └─ 📄README.md
│  │  │  └─ 📁object-schema
│  │  │     ├─ 📁dist
│  │  │     │  ├─ 📁cjs
│  │  │     │  │  ├─ 📄index.cjs
│  │  │     │  │  ├─ 📄index.d.cts
│  │  │     │  │  └─ 📄types.ts
│  │  │     │  └─ 📁esm
│  │  │     │     ├─ 📄index.d.ts
│  │  │     │     ├─ 📄index.js
│  │  │     │     ├─ 📄types.d.ts
│  │  │     │     └─ 📄types.ts
│  │  │     ├─ 📄LICENSE
│  │  │     ├─ 📄package.json
│  │  │     └─ 📄README.md
│  │  ├─ 📁@eslint-community
│  │  │  ├─ 📁eslint-utils
│  │  │  │  ├─ 📁node_modules
│  │  │  │  │  └─ 📁.bin
│  │  │  │  │     ├─ 📄eslint
│  │  │  │  │     ├─ 📄eslint.CMD
│  │  │  │  │     └─ 📄eslint.ps1
│  │  │  │  ├─ 📄index.js
│  │  │  │  ├─ 📄index.js.map
│  │  │  │  ├─ 📄index.mjs
│  │  │  │  ├─ 📄index.mjs.map
│  │  │  │  ├─ 📄LICENSE
│  │  │  │  ├─ 📄package.json
│  │  │  │  └─ 📄README.md
│  │  │  └─ 📁regexpp
│  │  │     ├─ 📄index.d.ts
│  │  │     ├─ 📄index.js
│  │  │     ├─ 📄index.js.map
│  │  │     ├─ 📄index.mjs
│  │  │     ├─ 📄index.mjs.map
│  │  │     ├─ 📄LICENSE
│  │  │     ├─ 📄package.json
│  │  │     └─ 📄README.md
│  │  ├─ 📁@types
│  │  │  ├─ 📁react
│  │  │  │  ├─ 📁ts5.0
│  │  │  │  │  ├─ 📄canary.d.ts
│  │  │  │  │  ├─ 📄experimental.d.ts
│  │  │  │  │  ├─ 📄global.d.ts
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄jsx-dev-runtime.d.ts
│  │  │  │  │  └─ 📄jsx-runtime.d.ts
│  │  │  │  ├─ 📄canary.d.ts
│  │  │  │  ├─ 📄experimental.d.ts
│  │  │  │  ├─ 📄global.d.ts
│  │  │  │  ├─ 📄index.d.ts
│  │  │  │  ├─ 📄jsx-dev-runtime.d.ts
│  │  │  │  ├─ 📄jsx-runtime.d.ts
│  │  │  │  ├─ 📄LICENSE
│  │  │  │  ├─ 📄package.json
│  │  │  │  └─ 📄README.md
│  │  │  └─ 📁react-dom
│  │  │     ├─ 📁test-utils
│  │  │     │  └─ 📄index.d.ts
│  │  │     ├─ 📄canary.d.ts
│  │  │     ├─ 📄client.d.ts
│  │  │     ├─ 📄experimental.d.ts
│  │  │     ├─ 📄index.d.ts
│  │  │     ├─ 📄LICENSE
│  │  │     ├─ 📄package.json
│  │  │     ├─ 📄README.md
│  │  │     └─ 📄server.d.ts
│  │  ├─ 📁@typescript-eslint
│  │  │  ├─ 📁eslint-plugin
│  │  │  │  ├─ 📁dist
│  │  │  │  │  ├─ 📁configs
│  │  │  │  │  │  ├─ 📄all.js
│  │  │  │  │  │  ├─ 📄all.js.map
│  │  │  │  │  │  ├─ 📄base.js
│  │  │  │  │  │  ├─ 📄base.js.map
│  │  │  │  │  │  ├─ 📄disable-type-checked.js
│  │  │  │  │  │  ├─ 📄disable-type-checked.js.map
│  │  │  │  │  │  ├─ 📄eslint-recommended-raw.js
│  │  │  │  │  │  ├─ 📄eslint-recommended-raw.js.map
│  │  │  │  │  │  ├─ 📄eslint-recommended.js
│  │  │  │  │  │  ├─ 📄eslint-recommended.js.map
│  │  │  │  │  │  ├─ 📄recommended-type-checked-only.js
│  │  │  │  │  │  ├─ 📄recommended-type-checked-only.js.map
│  │  │  │  │  │  ├─ 📄recommended-type-checked.js
│  │  │  │  │  │  ├─ 📄recommended-type-checked.js.map
│  │  │  │  │  │  ├─ 📄recommended.js
│  │  │  │  │  │  ├─ 📄recommended.js.map
│  │  │  │  │  │  ├─ 📄strict-type-checked-only.js
│  │  │  │  │  │  ├─ 📄strict-type-checked-only.js.map
│  │  │  │  │  │  ├─ 📄strict-type-checked.js
│  │  │  │  │  │  ├─ 📄strict-type-checked.js.map
│  │  │  │  │  │  ├─ 📄strict.js
│  │  │  │  │  │  ├─ 📄strict.js.map
│  │  │  │  │  │  ├─ 📄stylistic-type-checked-only.js
│  │  │  │  │  │  ├─ 📄stylistic-type-checked-only.js.map
│  │  │  │  │  │  ├─ 📄stylistic-type-checked.js
│  │  │  │  │  │  ├─ 📄stylistic-type-checked.js.map
│  │  │  │  │  │  ├─ 📄stylistic.js
│  │  │  │  │  │  └─ 📄stylistic.js.map
│  │  │  │  │  ├─ 📁rules
│  │  │  │  │  │  ├─ 📁enum-utils
│  │  │  │  │  │  │  ├─ 📄shared.js
│  │  │  │  │  │  │  └─ 📄shared.js.map
│  │  │  │  │  │  ├─ 📁naming-convention-utils
│  │  │  │  │  │  │  ├─ 📄enums.js
│  │  │  │  │  │  │  ├─ 📄enums.js.map
│  │  │  │  │  │  │  ├─ 📄format.js
│  │  │  │  │  │  │  ├─ 📄format.js.map
│  │  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  │  ├─ 📄parse-options.js
│  │  │  │  │  │  │  ├─ 📄parse-options.js.map
│  │  │  │  │  │  │  ├─ 📄schema.js
│  │  │  │  │  │  │  ├─ 📄schema.js.map
│  │  │  │  │  │  │  ├─ 📄shared.js
│  │  │  │  │  │  │  ├─ 📄shared.js.map
│  │  │  │  │  │  │  ├─ 📄types.js
│  │  │  │  │  │  │  ├─ 📄types.js.map
│  │  │  │  │  │  │  ├─ 📄validator.js
│  │  │  │  │  │  │  └─ 📄validator.js.map
│  │  │  │  │  │  ├─ 📁prefer-optional-chain-utils
│  │  │  │  │  │  │  ├─ 📄analyzeChain.js
│  │  │  │  │  │  │  ├─ 📄analyzeChain.js.map
│  │  │  │  │  │  │  ├─ 📄checkNullishAndReport.js
│  │  │  │  │  │  │  ├─ 📄checkNullishAndReport.js.map
│  │  │  │  │  │  │  ├─ 📄compareNodes.js
│  │  │  │  │  │  │  ├─ 📄compareNodes.js.map
│  │  │  │  │  │  │  ├─ 📄gatherLogicalOperands.js
│  │  │  │  │  │  │  ├─ 📄gatherLogicalOperands.js.map
│  │  │  │  │  │  │  ├─ 📄PreferOptionalChainOptions.js
│  │  │  │  │  │  │  └─ 📄PreferOptionalChainOptions.js.map
│  │  │  │  │  │  ├─ 📄adjacent-overload-signatures.js
│  │  │  │  │  │  ├─ 📄adjacent-overload-signatures.js.map
│  │  │  │  │  │  ├─ 📄array-type.js
│  │  │  │  │  │  ├─ 📄array-type.js.map
│  │  │  │  │  │  ├─ 📄await-thenable.js
│  │  │  │  │  │  ├─ 📄await-thenable.js.map
│  │  │  │  │  │  ├─ 📄ban-ts-comment.js
│  │  │  │  │  │  ├─ 📄ban-ts-comment.js.map
│  │  │  │  │  │  ├─ 📄ban-tslint-comment.js
│  │  │  │  │  │  ├─ 📄ban-tslint-comment.js.map
│  │  │  │  │  │  ├─ 📄class-literal-property-style.js
│  │  │  │  │  │  ├─ 📄class-literal-property-style.js.map
│  │  │  │  │  │  ├─ 📄class-methods-use-this.js
│  │  │  │  │  │  ├─ 📄class-methods-use-this.js.map
│  │  │  │  │  │  ├─ 📄consistent-generic-constructors.js
│  │  │  │  │  │  ├─ 📄consistent-generic-constructors.js.map
│  │  │  │  │  │  ├─ 📄consistent-indexed-object-style.js
│  │  │  │  │  │  ├─ 📄consistent-indexed-object-style.js.map
│  │  │  │  │  │  ├─ 📄consistent-return.js
│  │  │  │  │  │  ├─ 📄consistent-return.js.map
│  │  │  │  │  │  ├─ 📄consistent-type-assertions.js
│  │  │  │  │  │  ├─ 📄consistent-type-assertions.js.map
│  │  │  │  │  │  ├─ 📄consistent-type-definitions.js
│  │  │  │  │  │  ├─ 📄consistent-type-definitions.js.map
│  │  │  │  │  │  ├─ 📄consistent-type-exports.js
│  │  │  │  │  │  ├─ 📄consistent-type-exports.js.map
│  │  │  │  │  │  ├─ 📄consistent-type-imports.js
│  │  │  │  │  │  ├─ 📄consistent-type-imports.js.map
│  │  │  │  │  │  ├─ 📄default-param-last.js
│  │  │  │  │  │  ├─ 📄default-param-last.js.map
│  │  │  │  │  │  ├─ 📄dot-notation.js
│  │  │  │  │  │  ├─ 📄dot-notation.js.map
│  │  │  │  │  │  ├─ 📄explicit-function-return-type.js
│  │  │  │  │  │  ├─ 📄explicit-function-return-type.js.map
│  │  │  │  │  │  ├─ 📄explicit-member-accessibility.js
│  │  │  │  │  │  ├─ 📄explicit-member-accessibility.js.map
│  │  │  │  │  │  ├─ 📄explicit-module-boundary-types.js
│  │  │  │  │  │  ├─ 📄explicit-module-boundary-types.js.map
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  ├─ 📄init-declarations.js
│  │  │  │  │  │  ├─ 📄init-declarations.js.map
│  │  │  │  │  │  ├─ 📄max-params.js
│  │  │  │  │  │  ├─ 📄max-params.js.map
│  │  │  │  │  │  ├─ 📄member-ordering.js
│  │  │  │  │  │  ├─ 📄member-ordering.js.map
│  │  │  │  │  │  ├─ 📄method-signature-style.js
│  │  │  │  │  │  ├─ 📄method-signature-style.js.map
│  │  │  │  │  │  ├─ 📄naming-convention.js
│  │  │  │  │  │  ├─ 📄naming-convention.js.map
│  │  │  │  │  │  ├─ 📄no-array-constructor.js
│  │  │  │  │  │  ├─ 📄no-array-constructor.js.map
│  │  │  │  │  │  ├─ 📄no-array-delete.js
│  │  │  │  │  │  ├─ 📄no-array-delete.js.map
│  │  │  │  │  │  ├─ 📄no-base-to-string.js
│  │  │  │  │  │  ├─ 📄no-base-to-string.js.map
│  │  │  │  │  │  ├─ 📄no-confusing-non-null-assertion.js
│  │  │  │  │  │  ├─ 📄no-confusing-non-null-assertion.js.map
│  │  │  │  │  │  ├─ 📄no-confusing-void-expression.js
│  │  │  │  │  │  ├─ 📄no-confusing-void-expression.js.map
│  │  │  │  │  │  ├─ 📄no-dupe-class-members.js
│  │  │  │  │  │  ├─ 📄no-dupe-class-members.js.map
│  │  │  │  │  │  ├─ 📄no-duplicate-enum-values.js
│  │  │  │  │  │  ├─ 📄no-duplicate-enum-values.js.map
│  │  │  │  │  │  ├─ 📄no-duplicate-type-constituents.js
│  │  │  │  │  │  ├─ 📄no-duplicate-type-constituents.js.map
│  │  │  │  │  │  ├─ 📄no-dynamic-delete.js
│  │  │  │  │  │  ├─ 📄no-dynamic-delete.js.map
│  │  │  │  │  │  ├─ 📄no-empty-function.js
│  │  │  │  │  │  ├─ 📄no-empty-function.js.map
│  │  │  │  │  │  ├─ 📄no-empty-interface.js
│  │  │  │  │  │  ├─ 📄no-empty-interface.js.map
│  │  │  │  │  │  ├─ 📄no-empty-object-type.js
│  │  │  │  │  │  ├─ 📄no-empty-object-type.js.map
│  │  │  │  │  │  ├─ 📄no-explicit-any.js
│  │  │  │  │  │  ├─ 📄no-explicit-any.js.map
│  │  │  │  │  │  ├─ 📄no-extra-non-null-assertion.js
│  │  │  │  │  │  ├─ 📄no-extra-non-null-assertion.js.map
│  │  │  │  │  │  ├─ 📄no-extraneous-class.js
│  │  │  │  │  │  ├─ 📄no-extraneous-class.js.map
│  │  │  │  │  │  ├─ 📄no-floating-promises.js
│  │  │  │  │  │  ├─ 📄no-floating-promises.js.map
│  │  │  │  │  │  ├─ 📄no-for-in-array.js
│  │  │  │  │  │  ├─ 📄no-for-in-array.js.map
│  │  │  │  │  │  ├─ 📄no-implied-eval.js
│  │  │  │  │  │  ├─ 📄no-implied-eval.js.map
│  │  │  │  │  │  ├─ 📄no-import-type-side-effects.js
│  │  │  │  │  │  ├─ 📄no-import-type-side-effects.js.map
│  │  │  │  │  │  ├─ 📄no-inferrable-types.js
│  │  │  │  │  │  ├─ 📄no-inferrable-types.js.map
│  │  │  │  │  │  ├─ 📄no-invalid-this.js
│  │  │  │  │  │  ├─ 📄no-invalid-this.js.map
│  │  │  │  │  │  ├─ 📄no-invalid-void-type.js
│  │  │  │  │  │  ├─ 📄no-invalid-void-type.js.map
│  │  │  │  │  │  ├─ 📄no-loop-func.js
│  │  │  │  │  │  ├─ 📄no-loop-func.js.map
│  │  │  │  │  │  ├─ 📄no-loss-of-precision.js
│  │  │  │  │  │  ├─ 📄no-loss-of-precision.js.map
│  │  │  │  │  │  ├─ 📄no-magic-numbers.js
│  │  │  │  │  │  ├─ 📄no-magic-numbers.js.map
│  │  │  │  │  │  ├─ 📄no-meaningless-void-operator.js
│  │  │  │  │  │  ├─ 📄no-meaningless-void-operator.js.map
│  │  │  │  │  │  ├─ 📄no-misused-new.js
│  │  │  │  │  │  ├─ 📄no-misused-new.js.map
│  │  │  │  │  │  ├─ 📄no-misused-promises.js
│  │  │  │  │  │  ├─ 📄no-misused-promises.js.map
│  │  │  │  │  │  ├─ 📄no-mixed-enums.js
│  │  │  │  │  │  ├─ 📄no-mixed-enums.js.map
│  │  │  │  │  │  ├─ 📄no-namespace.js
│  │  │  │  │  │  ├─ 📄no-namespace.js.map
│  │  │  │  │  │  ├─ 📄no-non-null-asserted-nullish-coalescing.js
│  │  │  │  │  │  ├─ 📄no-non-null-asserted-nullish-coalescing.js.map
│  │  │  │  │  │  ├─ 📄no-non-null-asserted-optional-chain.js
│  │  │  │  │  │  ├─ 📄no-non-null-asserted-optional-chain.js.map
│  │  │  │  │  │  ├─ 📄no-non-null-assertion.js
│  │  │  │  │  │  ├─ 📄no-non-null-assertion.js.map
│  │  │  │  │  │  ├─ 📄no-redeclare.js
│  │  │  │  │  │  ├─ 📄no-redeclare.js.map
│  │  │  │  │  │  ├─ 📄no-redundant-type-constituents.js
│  │  │  │  │  │  ├─ 📄no-redundant-type-constituents.js.map
│  │  │  │  │  │  ├─ 📄no-require-imports.js
│  │  │  │  │  │  ├─ 📄no-require-imports.js.map
│  │  │  │  │  │  ├─ 📄no-restricted-imports.js
│  │  │  │  │  │  ├─ 📄no-restricted-imports.js.map
│  │  │  │  │  │  ├─ 📄no-restricted-types.js
│  │  │  │  │  │  ├─ 📄no-restricted-types.js.map
│  │  │  │  │  │  ├─ 📄no-shadow.js
│  │  │  │  │  │  ├─ 📄no-shadow.js.map
│  │  │  │  │  │  ├─ 📄no-this-alias.js
│  │  │  │  │  │  ├─ 📄no-this-alias.js.map
│  │  │  │  │  │  ├─ 📄no-type-alias.js
│  │  │  │  │  │  ├─ 📄no-type-alias.js.map
│  │  │  │  │  │  ├─ 📄no-unnecessary-boolean-literal-compare.js
│  │  │  │  │  │  ├─ 📄no-unnecessary-boolean-literal-compare.js.map
│  │  │  │  │  │  ├─ 📄no-unnecessary-condition.js
│  │  │  │  │  │  ├─ 📄no-unnecessary-condition.js.map
│  │  │  │  │  │  ├─ 📄no-unnecessary-parameter-property-assignment.js
│  │  │  │  │  │  ├─ 📄no-unnecessary-parameter-property-assignment.js.map
│  │  │  │  │  │  ├─ 📄no-unnecessary-qualifier.js
│  │  │  │  │  │  ├─ 📄no-unnecessary-qualifier.js.map
│  │  │  │  │  │  ├─ 📄no-unnecessary-template-expression.js
│  │  │  │  │  │  ├─ 📄no-unnecessary-template-expression.js.map
│  │  │  │  │  │  ├─ 📄no-unnecessary-type-arguments.js
│  │  │  │  │  │  ├─ 📄no-unnecessary-type-arguments.js.map
│  │  │  │  │  │  ├─ 📄no-unnecessary-type-assertion.js
│  │  │  │  │  │  ├─ 📄no-unnecessary-type-assertion.js.map
│  │  │  │  │  │  ├─ 📄no-unnecessary-type-constraint.js
│  │  │  │  │  │  ├─ 📄no-unnecessary-type-constraint.js.map
│  │  │  │  │  │  ├─ 📄no-unnecessary-type-parameters.js
│  │  │  │  │  │  ├─ 📄no-unnecessary-type-parameters.js.map
│  │  │  │  │  │  ├─ 📄no-unsafe-argument.js
│  │  │  │  │  │  ├─ 📄no-unsafe-argument.js.map
│  │  │  │  │  │  ├─ 📄no-unsafe-assignment.js
│  │  │  │  │  │  ├─ 📄no-unsafe-assignment.js.map
│  │  │  │  │  │  ├─ 📄no-unsafe-call.js
│  │  │  │  │  │  ├─ 📄no-unsafe-call.js.map
│  │  │  │  │  │  ├─ 📄no-unsafe-declaration-merging.js
│  │  │  │  │  │  ├─ 📄no-unsafe-declaration-merging.js.map
│  │  │  │  │  │  ├─ 📄no-unsafe-enum-comparison.js
│  │  │  │  │  │  ├─ 📄no-unsafe-enum-comparison.js.map
│  │  │  │  │  │  ├─ 📄no-unsafe-function-type.js
│  │  │  │  │  │  ├─ 📄no-unsafe-function-type.js.map
│  │  │  │  │  │  ├─ 📄no-unsafe-member-access.js
│  │  │  │  │  │  ├─ 📄no-unsafe-member-access.js.map
│  │  │  │  │  │  ├─ 📄no-unsafe-return.js
│  │  │  │  │  │  ├─ 📄no-unsafe-return.js.map
│  │  │  │  │  │  ├─ 📄no-unsafe-unary-minus.js
│  │  │  │  │  │  ├─ 📄no-unsafe-unary-minus.js.map
│  │  │  │  │  │  ├─ 📄no-unused-expressions.js
│  │  │  │  │  │  ├─ 📄no-unused-expressions.js.map
│  │  │  │  │  │  ├─ 📄no-unused-vars.js
│  │  │  │  │  │  ├─ 📄no-unused-vars.js.map
│  │  │  │  │  │  ├─ 📄no-use-before-define.js
│  │  │  │  │  │  ├─ 📄no-use-before-define.js.map
│  │  │  │  │  │  ├─ 📄no-useless-constructor.js
│  │  │  │  │  │  ├─ 📄no-useless-constructor.js.map
│  │  │  │  │  │  ├─ 📄no-useless-empty-export.js
│  │  │  │  │  │  ├─ 📄no-useless-empty-export.js.map
│  │  │  │  │  │  ├─ 📄no-var-requires.js
│  │  │  │  │  │  ├─ 📄no-var-requires.js.map
│  │  │  │  │  │  ├─ 📄no-wrapper-object-types.js
│  │  │  │  │  │  ├─ 📄no-wrapper-object-types.js.map
│  │  │  │  │  │  ├─ 📄non-nullable-type-assertion-style.js
│  │  │  │  │  │  ├─ 📄non-nullable-type-assertion-style.js.map
│  │  │  │  │  │  ├─ 📄only-throw-error.js
│  │  │  │  │  │  ├─ 📄only-throw-error.js.map
│  │  │  │  │  │  ├─ 📄parameter-properties.js
│  │  │  │  │  │  ├─ 📄parameter-properties.js.map
│  │  │  │  │  │  ├─ 📄prefer-as-const.js
│  │  │  │  │  │  ├─ 📄prefer-as-const.js.map
│  │  │  │  │  │  ├─ 📄prefer-destructuring.js
│  │  │  │  │  │  ├─ 📄prefer-destructuring.js.map
│  │  │  │  │  │  ├─ 📄prefer-enum-initializers.js
│  │  │  │  │  │  ├─ 📄prefer-enum-initializers.js.map
│  │  │  │  │  │  ├─ 📄prefer-find.js
│  │  │  │  │  │  ├─ 📄prefer-find.js.map
│  │  │  │  │  │  ├─ 📄prefer-for-of.js
│  │  │  │  │  │  ├─ 📄prefer-for-of.js.map
│  │  │  │  │  │  ├─ 📄prefer-function-type.js
│  │  │  │  │  │  ├─ 📄prefer-function-type.js.map
│  │  │  │  │  │  ├─ 📄prefer-includes.js
│  │  │  │  │  │  ├─ 📄prefer-includes.js.map
│  │  │  │  │  │  ├─ 📄prefer-literal-enum-member.js
│  │  │  │  │  │  ├─ 📄prefer-literal-enum-member.js.map
│  │  │  │  │  │  ├─ 📄prefer-namespace-keyword.js
│  │  │  │  │  │  ├─ 📄prefer-namespace-keyword.js.map
│  │  │  │  │  │  ├─ 📄prefer-nullish-coalescing.js
│  │  │  │  │  │  ├─ 📄prefer-nullish-coalescing.js.map
│  │  │  │  │  │  ├─ 📄prefer-optional-chain.js
│  │  │  │  │  │  ├─ 📄prefer-optional-chain.js.map
│  │  │  │  │  │  ├─ 📄prefer-promise-reject-errors.js
│  │  │  │  │  │  ├─ 📄prefer-promise-reject-errors.js.map
│  │  │  │  │  │  ├─ 📄prefer-readonly-parameter-types.js
│  │  │  │  │  │  ├─ 📄prefer-readonly-parameter-types.js.map
│  │  │  │  │  │  ├─ 📄prefer-readonly.js
│  │  │  │  │  │  ├─ 📄prefer-readonly.js.map
│  │  │  │  │  │  ├─ 📄prefer-reduce-type-parameter.js
│  │  │  │  │  │  ├─ 📄prefer-reduce-type-parameter.js.map
│  │  │  │  │  │  ├─ 📄prefer-regexp-exec.js
│  │  │  │  │  │  ├─ 📄prefer-regexp-exec.js.map
│  │  │  │  │  │  ├─ 📄prefer-return-this-type.js
│  │  │  │  │  │  ├─ 📄prefer-return-this-type.js.map
│  │  │  │  │  │  ├─ 📄prefer-string-starts-ends-with.js
│  │  │  │  │  │  ├─ 📄prefer-string-starts-ends-with.js.map
│  │  │  │  │  │  ├─ 📄prefer-ts-expect-error.js
│  │  │  │  │  │  ├─ 📄prefer-ts-expect-error.js.map
│  │  │  │  │  │  ├─ 📄promise-function-async.js
│  │  │  │  │  │  ├─ 📄promise-function-async.js.map
│  │  │  │  │  │  ├─ 📄require-array-sort-compare.js
│  │  │  │  │  │  ├─ 📄require-array-sort-compare.js.map
│  │  │  │  │  │  ├─ 📄require-await.js
│  │  │  │  │  │  ├─ 📄require-await.js.map
│  │  │  │  │  │  ├─ 📄restrict-plus-operands.js
│  │  │  │  │  │  ├─ 📄restrict-plus-operands.js.map
│  │  │  │  │  │  ├─ 📄restrict-template-expressions.js
│  │  │  │  │  │  ├─ 📄restrict-template-expressions.js.map
│  │  │  │  │  │  ├─ 📄return-await.js
│  │  │  │  │  │  ├─ 📄return-await.js.map
│  │  │  │  │  │  ├─ 📄sort-type-constituents.js
│  │  │  │  │  │  ├─ 📄sort-type-constituents.js.map
│  │  │  │  │  │  ├─ 📄strict-boolean-expressions.js
│  │  │  │  │  │  ├─ 📄strict-boolean-expressions.js.map
│  │  │  │  │  │  ├─ 📄switch-exhaustiveness-check.js
│  │  │  │  │  │  ├─ 📄switch-exhaustiveness-check.js.map
│  │  │  │  │  │  ├─ 📄triple-slash-reference.js
│  │  │  │  │  │  ├─ 📄triple-slash-reference.js.map
│  │  │  │  │  │  ├─ 📄typedef.js
│  │  │  │  │  │  ├─ 📄typedef.js.map
│  │  │  │  │  │  ├─ 📄unbound-method.js
│  │  │  │  │  │  ├─ 📄unbound-method.js.map
│  │  │  │  │  │  ├─ 📄unified-signatures.js
│  │  │  │  │  │  ├─ 📄unified-signatures.js.map
│  │  │  │  │  │  ├─ 📄use-unknown-in-catch-callback-variable.js
│  │  │  │  │  │  └─ 📄use-unknown-in-catch-callback-variable.js.map
│  │  │  │  │  ├─ 📁util
│  │  │  │  │  │  ├─ 📄astUtils.js
│  │  │  │  │  │  ├─ 📄astUtils.js.map
│  │  │  │  │  │  ├─ 📄collectUnusedVariables.js
│  │  │  │  │  │  ├─ 📄collectUnusedVariables.js.map
│  │  │  │  │  │  ├─ 📄createRule.js
│  │  │  │  │  │  ├─ 📄createRule.js.map
│  │  │  │  │  │  ├─ 📄escapeRegExp.js
│  │  │  │  │  │  ├─ 📄escapeRegExp.js.map
│  │  │  │  │  │  ├─ 📄explicitReturnTypeUtils.js
│  │  │  │  │  │  ├─ 📄explicitReturnTypeUtils.js.map
│  │  │  │  │  │  ├─ 📄getESLintCoreRule.js
│  │  │  │  │  │  ├─ 📄getESLintCoreRule.js.map
│  │  │  │  │  │  ├─ 📄getFixOrSuggest.js
│  │  │  │  │  │  ├─ 📄getFixOrSuggest.js.map
│  │  │  │  │  │  ├─ 📄getForStatementHeadLoc.js
│  │  │  │  │  │  ├─ 📄getForStatementHeadLoc.js.map
│  │  │  │  │  │  ├─ 📄getFunctionHeadLoc.js
│  │  │  │  │  │  ├─ 📄getFunctionHeadLoc.js.map
│  │  │  │  │  │  ├─ 📄getMemberHeadLoc.js
│  │  │  │  │  │  ├─ 📄getMemberHeadLoc.js.map
│  │  │  │  │  │  ├─ 📄getOperatorPrecedence.js
│  │  │  │  │  │  ├─ 📄getOperatorPrecedence.js.map
│  │  │  │  │  │  ├─ 📄getStaticStringValue.js
│  │  │  │  │  │  ├─ 📄getStaticStringValue.js.map
│  │  │  │  │  │  ├─ 📄getStringLength.js
│  │  │  │  │  │  ├─ 📄getStringLength.js.map
│  │  │  │  │  │  ├─ 📄getTextWithParentheses.js
│  │  │  │  │  │  ├─ 📄getTextWithParentheses.js.map
│  │  │  │  │  │  ├─ 📄getThisExpression.js
│  │  │  │  │  │  ├─ 📄getThisExpression.js.map
│  │  │  │  │  │  ├─ 📄getWrappedCode.js
│  │  │  │  │  │  ├─ 📄getWrappedCode.js.map
│  │  │  │  │  │  ├─ 📄getWrappingFixer.js
│  │  │  │  │  │  ├─ 📄getWrappingFixer.js.map
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  ├─ 📄isAssignee.js
│  │  │  │  │  │  ├─ 📄isAssignee.js.map
│  │  │  │  │  │  ├─ 📄isNodeEqual.js
│  │  │  │  │  │  ├─ 📄isNodeEqual.js.map
│  │  │  │  │  │  ├─ 📄isNullLiteral.js
│  │  │  │  │  │  ├─ 📄isNullLiteral.js.map
│  │  │  │  │  │  ├─ 📄isStartOfExpressionStatement.js
│  │  │  │  │  │  ├─ 📄isStartOfExpressionStatement.js.map
│  │  │  │  │  │  ├─ 📄isTypeImport.js
│  │  │  │  │  │  ├─ 📄isTypeImport.js.map
│  │  │  │  │  │  ├─ 📄isUndefinedIdentifier.js
│  │  │  │  │  │  ├─ 📄isUndefinedIdentifier.js.map
│  │  │  │  │  │  ├─ 📄misc.js
│  │  │  │  │  │  ├─ 📄misc.js.map
│  │  │  │  │  │  ├─ 📄needsPrecedingSemiColon.js
│  │  │  │  │  │  ├─ 📄needsPrecedingSemiColon.js.map
│  │  │  │  │  │  ├─ 📄objectIterators.js
│  │  │  │  │  │  ├─ 📄objectIterators.js.map
│  │  │  │  │  │  ├─ 📄referenceContainsTypeQuery.js
│  │  │  │  │  │  ├─ 📄referenceContainsTypeQuery.js.map
│  │  │  │  │  │  ├─ 📄scopeUtils.js
│  │  │  │  │  │  ├─ 📄scopeUtils.js.map
│  │  │  │  │  │  ├─ 📄types.js
│  │  │  │  │  │  └─ 📄types.js.map
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  └─ 📄index.js.map
│  │  │  │  ├─ 📁docs
│  │  │  │  │  └─ 📁rules
│  │  │  │  │     ├─ 📄adjacent-overload-signatures.mdx
│  │  │  │  │     ├─ 📄array-type.mdx
│  │  │  │  │     ├─ 📄await-thenable.mdx
│  │  │  │  │     ├─ 📄ban-ts-comment.mdx
│  │  │  │  │     ├─ 📄ban-tslint-comment.mdx
│  │  │  │  │     ├─ 📄ban-types.md
│  │  │  │  │     ├─ 📄block-spacing.md
│  │  │  │  │     ├─ 📄brace-style.md
│  │  │  │  │     ├─ 📄camelcase.md
│  │  │  │  │     ├─ 📄class-literal-property-style.mdx
│  │  │  │  │     ├─ 📄class-methods-use-this.mdx
│  │  │  │  │     ├─ 📄comma-dangle.md
│  │  │  │  │     ├─ 📄comma-spacing.md
│  │  │  │  │     ├─ 📄consistent-generic-constructors.mdx
│  │  │  │  │     ├─ 📄consistent-indexed-object-style.mdx
│  │  │  │  │     ├─ 📄consistent-return.mdx
│  │  │  │  │     ├─ 📄consistent-type-assertions.mdx
│  │  │  │  │     ├─ 📄consistent-type-definitions.mdx
│  │  │  │  │     ├─ 📄consistent-type-exports.mdx
│  │  │  │  │     ├─ 📄consistent-type-imports.mdx
│  │  │  │  │     ├─ 📄default-param-last.mdx
│  │  │  │  │     ├─ 📄dot-notation.mdx
│  │  │  │  │     ├─ 📄explicit-function-return-type.mdx
│  │  │  │  │     ├─ 📄explicit-member-accessibility.mdx
│  │  │  │  │     ├─ 📄explicit-module-boundary-types.mdx
│  │  │  │  │     ├─ 📄func-call-spacing.md
│  │  │  │  │     ├─ 📄indent.md
│  │  │  │  │     ├─ 📄init-declarations.mdx
│  │  │  │  │     ├─ 📄key-spacing.md
│  │  │  │  │     ├─ 📄keyword-spacing.md
│  │  │  │  │     ├─ 📄lines-around-comment.md
│  │  │  │  │     ├─ 📄lines-between-class-members.md
│  │  │  │  │     ├─ 📄max-params.mdx
│  │  │  │  │     ├─ 📄member-delimiter-style.md
│  │  │  │  │     ├─ 📄member-ordering.mdx
│  │  │  │  │     ├─ 📄method-signature-style.mdx
│  │  │  │  │     ├─ 📄naming-convention.mdx
│  │  │  │  │     ├─ 📄no-array-constructor.mdx
│  │  │  │  │     ├─ 📄no-array-delete.mdx
│  │  │  │  │     ├─ 📄no-base-to-string.mdx
│  │  │  │  │     ├─ 📄no-confusing-non-null-assertion.mdx
│  │  │  │  │     ├─ 📄no-confusing-void-expression.mdx
│  │  │  │  │     ├─ 📄no-dupe-class-members.mdx
│  │  │  │  │     ├─ 📄no-duplicate-enum-values.mdx
│  │  │  │  │     ├─ 📄no-duplicate-imports.mdx
│  │  │  │  │     ├─ 📄no-duplicate-type-constituents.mdx
│  │  │  │  │     ├─ 📄no-dynamic-delete.mdx
│  │  │  │  │     ├─ 📄no-empty-function.mdx
│  │  │  │  │     ├─ 📄no-empty-interface.mdx
│  │  │  │  │     ├─ 📄no-empty-object-type.mdx
│  │  │  │  │     ├─ 📄no-explicit-any.mdx
│  │  │  │  │     ├─ 📄no-extra-non-null-assertion.mdx
│  │  │  │  │     ├─ 📄no-extra-parens.md
│  │  │  │  │     ├─ 📄no-extra-semi.md
│  │  │  │  │     ├─ 📄no-extraneous-class.mdx
│  │  │  │  │     ├─ 📄no-floating-promises.mdx
│  │  │  │  │     ├─ 📄no-for-in-array.mdx
│  │  │  │  │     ├─ 📄no-implied-eval.mdx
│  │  │  │  │     ├─ 📄no-import-type-side-effects.mdx
│  │  │  │  │     ├─ 📄no-inferrable-types.mdx
│  │  │  │  │     ├─ 📄no-invalid-this.mdx
│  │  │  │  │     ├─ 📄no-invalid-void-type.mdx
│  │  │  │  │     ├─ 📄no-loop-func.mdx
│  │  │  │  │     ├─ 📄no-loss-of-precision.mdx
│  │  │  │  │     ├─ 📄no-magic-numbers.mdx
│  │  │  │  │     ├─ 📄no-meaningless-void-operator.mdx
│  │  │  │  │     ├─ 📄no-misused-new.mdx
│  │  │  │  │     ├─ 📄no-misused-promises.mdx
│  │  │  │  │     ├─ 📄no-mixed-enums.mdx
│  │  │  │  │     ├─ 📄no-namespace.mdx
│  │  │  │  │     ├─ 📄no-non-null-asserted-nullish-coalescing.mdx
│  │  │  │  │     ├─ 📄no-non-null-asserted-optional-chain.mdx
│  │  │  │  │     ├─ 📄no-non-null-assertion.mdx
│  │  │  │  │     ├─ 📄no-parameter-properties.mdx
│  │  │  │  │     ├─ 📄no-redeclare.mdx
│  │  │  │  │     ├─ 📄no-redundant-type-constituents.mdx
│  │  │  │  │     ├─ 📄no-require-imports.mdx
│  │  │  │  │     ├─ 📄no-restricted-imports.mdx
│  │  │  │  │     ├─ 📄no-restricted-types.mdx
│  │  │  │  │     ├─ 📄no-shadow.mdx
│  │  │  │  │     ├─ 📄no-this-alias.mdx
│  │  │  │  │     ├─ 📄no-type-alias.mdx
│  │  │  │  │     ├─ 📄no-unnecessary-boolean-literal-compare.mdx
│  │  │  │  │     ├─ 📄no-unnecessary-condition.mdx
│  │  │  │  │     ├─ 📄no-unnecessary-parameter-property-assignment.mdx
│  │  │  │  │     ├─ 📄no-unnecessary-qualifier.mdx
│  │  │  │  │     ├─ 📄no-unnecessary-template-expression.mdx
│  │  │  │  │     ├─ 📄no-unnecessary-type-arguments.mdx
│  │  │  │  │     ├─ 📄no-unnecessary-type-assertion.mdx
│  │  │  │  │     ├─ 📄no-unnecessary-type-constraint.mdx
│  │  │  │  │     ├─ 📄no-unnecessary-type-parameters.mdx
│  │  │  │  │     ├─ 📄no-unsafe-argument.mdx
│  │  │  │  │     ├─ 📄no-unsafe-assignment.mdx
│  │  │  │  │     ├─ 📄no-unsafe-call.mdx
│  │  │  │  │     ├─ 📄no-unsafe-declaration-merging.mdx
│  │  │  │  │     ├─ 📄no-unsafe-enum-comparison.mdx
│  │  │  │  │     ├─ 📄no-unsafe-function-type.mdx
│  │  │  │  │     ├─ 📄no-unsafe-member-access.mdx
│  │  │  │  │     ├─ 📄no-unsafe-return.mdx
│  │  │  │  │     ├─ 📄no-unsafe-unary-minus.mdx
│  │  │  │  │     ├─ 📄no-unused-expressions.mdx
│  │  │  │  │     ├─ 📄no-unused-vars.mdx
│  │  │  │  │     ├─ 📄no-use-before-define.mdx
│  │  │  │  │     ├─ 📄no-useless-constructor.mdx
│  │  │  │  │     ├─ 📄no-useless-empty-export.mdx
│  │  │  │  │     ├─ 📄no-useless-template-literals.mdx
│  │  │  │  │     ├─ 📄no-var-requires.mdx
│  │  │  │  │     ├─ 📄no-wrapper-object-types.mdx
│  │  │  │  │     ├─ 📄non-nullable-type-assertion-style.mdx
│  │  │  │  │     ├─ 📄object-curly-spacing.md
│  │  │  │  │     ├─ 📄only-throw-error.mdx
│  │  │  │  │     ├─ 📄padding-line-between-statements.md
│  │  │  │  │     ├─ 📄parameter-properties.mdx
│  │  │  │  │     ├─ 📄prefer-as-const.mdx
│  │  │  │  │     ├─ 📄prefer-destructuring.mdx
│  │  │  │  │     ├─ 📄prefer-enum-initializers.mdx
│  │  │  │  │     ├─ 📄prefer-find.mdx
│  │  │  │  │     ├─ 📄prefer-for-of.mdx
│  │  │  │  │     ├─ 📄prefer-function-type.mdx
│  │  │  │  │     ├─ 📄prefer-includes.mdx
│  │  │  │  │     ├─ 📄prefer-literal-enum-member.mdx
│  │  │  │  │     ├─ 📄prefer-namespace-keyword.mdx
│  │  │  │  │     ├─ 📄prefer-nullish-coalescing.mdx
│  │  │  │  │     ├─ 📄prefer-optional-chain.mdx
│  │  │  │  │     ├─ 📄prefer-promise-reject-errors.mdx
│  │  │  │  │     ├─ 📄prefer-readonly-parameter-types.mdx
│  │  │  │  │     ├─ 📄prefer-readonly.mdx
│  │  │  │  │     ├─ 📄prefer-reduce-type-parameter.mdx
│  │  │  │  │     ├─ 📄prefer-regexp-exec.mdx
│  │  │  │  │     ├─ 📄prefer-return-this-type.mdx
│  │  │  │  │     ├─ 📄prefer-string-starts-ends-with.mdx
│  │  │  │  │     ├─ 📄prefer-ts-expect-error.mdx
│  │  │  │  │     ├─ 📄promise-function-async.mdx
│  │  │  │  │     ├─ 📄quotes.md
│  │  │  │  │     ├─ 📄README.md
│  │  │  │  │     ├─ 📄require-array-sort-compare.mdx
│  │  │  │  │     ├─ 📄require-await.mdx
│  │  │  │  │     ├─ 📄restrict-plus-operands.mdx
│  │  │  │  │     ├─ 📄restrict-template-expressions.mdx
│  │  │  │  │     ├─ 📄return-await.mdx
│  │  │  │  │     ├─ 📄semi.md
│  │  │  │  │     ├─ 📄sort-type-constituents.mdx
│  │  │  │  │     ├─ 📄sort-type-union-intersection-members.mdx
│  │  │  │  │     ├─ 📄space-before-blocks.md
│  │  │  │  │     ├─ 📄space-before-function-paren.md
│  │  │  │  │     ├─ 📄space-infix-ops.md
│  │  │  │  │     ├─ 📄strict-boolean-expressions.mdx
│  │  │  │  │     ├─ 📄switch-exhaustiveness-check.mdx
│  │  │  │  │     ├─ 📄TEMPLATE.md
│  │  │  │  │     ├─ 📄triple-slash-reference.mdx
│  │  │  │  │     ├─ 📄type-annotation-spacing.md
│  │  │  │  │     ├─ 📄typedef.mdx
│  │  │  │  │     ├─ 📄unbound-method.mdx
│  │  │  │  │     ├─ 📄unified-signatures.mdx
│  │  │  │  │     └─ 📄use-unknown-in-catch-callback-variable.mdx
│  │  │  │  ├─ 📁node_modules
│  │  │  │  │  └─ 📁.bin
│  │  │  │  │     ├─ 📄eslint
│  │  │  │  │     ├─ 📄eslint.CMD
│  │  │  │  │     ├─ 📄eslint.ps1
│  │  │  │  │     ├─ 📄tsc
│  │  │  │  │     ├─ 📄tsc.CMD
│  │  │  │  │     ├─ 📄tsc.ps1
│  │  │  │  │     ├─ 📄tsserver
│  │  │  │  │     ├─ 📄tsserver.CMD
│  │  │  │  │     └─ 📄tsserver.ps1
│  │  │  │  ├─ 📄index.d.ts
│  │  │  │  ├─ 📄LICENSE
│  │  │  │  ├─ 📄package.json
│  │  │  │  ├─ 📄README.md
│  │  │  │  └─ 📄rules.d.ts
│  │  │  ├─ 📁parser
│  │  │  │  ├─ 📁dist
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  ├─ 📄parser.d.ts
│  │  │  │  │  ├─ 📄parser.d.ts.map
│  │  │  │  │  ├─ 📄parser.js
│  │  │  │  │  └─ 📄parser.js.map
│  │  │  │  ├─ 📁node_modules
│  │  │  │  │  └─ 📁.bin
│  │  │  │  │     ├─ 📄eslint
│  │  │  │  │     ├─ 📄eslint.CMD
│  │  │  │  │     ├─ 📄eslint.ps1
│  │  │  │  │     ├─ 📄tsc
│  │  │  │  │     ├─ 📄tsc.CMD
│  │  │  │  │     ├─ 📄tsc.ps1
│  │  │  │  │     ├─ 📄tsserver
│  │  │  │  │     ├─ 📄tsserver.CMD
│  │  │  │  │     └─ 📄tsserver.ps1
│  │  │  │  ├─ 📄LICENSE
│  │  │  │  ├─ 📄package.json
│  │  │  │  └─ 📄README.md
│  │  │  ├─ 📁scope-manager
│  │  │  │  ├─ 📁dist
│  │  │  │  │  ├─ 📁definition
│  │  │  │  │  │  ├─ 📄CatchClauseDefinition.d.ts
│  │  │  │  │  │  ├─ 📄CatchClauseDefinition.d.ts.map
│  │  │  │  │  │  ├─ 📄CatchClauseDefinition.js
│  │  │  │  │  │  ├─ 📄CatchClauseDefinition.js.map
│  │  │  │  │  │  ├─ 📄ClassNameDefinition.d.ts
│  │  │  │  │  │  ├─ 📄ClassNameDefinition.d.ts.map
│  │  │  │  │  │  ├─ 📄ClassNameDefinition.js
│  │  │  │  │  │  ├─ 📄ClassNameDefinition.js.map
│  │  │  │  │  │  ├─ 📄Definition.d.ts
│  │  │  │  │  │  ├─ 📄Definition.d.ts.map
│  │  │  │  │  │  ├─ 📄Definition.js
│  │  │  │  │  │  ├─ 📄Definition.js.map
│  │  │  │  │  │  ├─ 📄DefinitionBase.d.ts
│  │  │  │  │  │  ├─ 📄DefinitionBase.d.ts.map
│  │  │  │  │  │  ├─ 📄DefinitionBase.js
│  │  │  │  │  │  ├─ 📄DefinitionBase.js.map
│  │  │  │  │  │  ├─ 📄DefinitionType.d.ts
│  │  │  │  │  │  ├─ 📄DefinitionType.d.ts.map
│  │  │  │  │  │  ├─ 📄DefinitionType.js
│  │  │  │  │  │  ├─ 📄DefinitionType.js.map
│  │  │  │  │  │  ├─ 📄FunctionNameDefinition.d.ts
│  │  │  │  │  │  ├─ 📄FunctionNameDefinition.d.ts.map
│  │  │  │  │  │  ├─ 📄FunctionNameDefinition.js
│  │  │  │  │  │  ├─ 📄FunctionNameDefinition.js.map
│  │  │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.d.ts
│  │  │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.d.ts.map
│  │  │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.js
│  │  │  │  │  │  ├─ 📄ImplicitGlobalVariableDefinition.js.map
│  │  │  │  │  │  ├─ 📄ImportBindingDefinition.d.ts
│  │  │  │  │  │  ├─ 📄ImportBindingDefinition.d.ts.map
│  │  │  │  │  │  ├─ 📄ImportBindingDefinition.js
│  │  │  │  │  │  ├─ 📄ImportBindingDefinition.js.map
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  ├─ 📄ParameterDefinition.d.ts
│  │  │  │  │  │  ├─ 📄ParameterDefinition.d.ts.map
│  │  │  │  │  │  ├─ 📄ParameterDefinition.js
│  │  │  │  │  │  ├─ 📄ParameterDefinition.js.map
│  │  │  │  │  │  ├─ 📄TSEnumMemberDefinition.d.ts
│  │  │  │  │  │  ├─ 📄TSEnumMemberDefinition.d.ts.map
│  │  │  │  │  │  ├─ 📄TSEnumMemberDefinition.js
│  │  │  │  │  │  ├─ 📄TSEnumMemberDefinition.js.map
│  │  │  │  │  │  ├─ 📄TSEnumNameDefinition.d.ts
│  │  │  │  │  │  ├─ 📄TSEnumNameDefinition.d.ts.map
│  │  │  │  │  │  ├─ 📄TSEnumNameDefinition.js
│  │  │  │  │  │  ├─ 📄TSEnumNameDefinition.js.map
│  │  │  │  │  │  ├─ 📄TSModuleNameDefinition.d.ts
│  │  │  │  │  │  ├─ 📄TSModuleNameDefinition.d.ts.map
│  │  │  │  │  │  ├─ 📄TSModuleNameDefinition.js
│  │  │  │  │  │  ├─ 📄TSModuleNameDefinition.js.map
│  │  │  │  │  │  ├─ 📄TypeDefinition.d.ts
│  │  │  │  │  │  ├─ 📄TypeDefinition.d.ts.map
│  │  │  │  │  │  ├─ 📄TypeDefinition.js
│  │  │  │  │  │  ├─ 📄TypeDefinition.js.map
│  │  │  │  │  │  ├─ 📄VariableDefinition.d.ts
│  │  │  │  │  │  ├─ 📄VariableDefinition.d.ts.map
│  │  │  │  │  │  ├─ 📄VariableDefinition.js
│  │  │  │  │  │  └─ 📄VariableDefinition.js.map
│  │  │  │  │  ├─ 📁lib
│  │  │  │  │  │  ├─ 📄base-config.d.ts
│  │  │  │  │  │  ├─ 📄base-config.d.ts.map
│  │  │  │  │  │  ├─ 📄base-config.js
│  │  │  │  │  │  ├─ 📄base-config.js.map
│  │  │  │  │  │  ├─ 📄decorators.d.ts
│  │  │  │  │  │  ├─ 📄decorators.d.ts.map
│  │  │  │  │  │  ├─ 📄decorators.js
│  │  │  │  │  │  ├─ 📄decorators.js.map
│  │  │  │  │  │  ├─ 📄decorators.legacy.d.ts
│  │  │  │  │  │  ├─ 📄decorators.legacy.d.ts.map
│  │  │  │  │  │  ├─ 📄decorators.legacy.js
│  │  │  │  │  │  ├─ 📄decorators.legacy.js.map
│  │  │  │  │  │  ├─ 📄dom.asynciterable.d.ts
│  │  │  │  │  │  ├─ 📄dom.asynciterable.d.ts.map
│  │  │  │  │  │  ├─ 📄dom.asynciterable.js
│  │  │  │  │  │  ├─ 📄dom.asynciterable.js.map
│  │  │  │  │  │  ├─ 📄dom.d.ts
│  │  │  │  │  │  ├─ 📄dom.d.ts.map
│  │  │  │  │  │  ├─ 📄dom.iterable.d.ts
│  │  │  │  │  │  ├─ 📄dom.iterable.d.ts.map
│  │  │  │  │  │  ├─ 📄dom.iterable.js
│  │  │  │  │  │  ├─ 📄dom.iterable.js.map
│  │  │  │  │  │  ├─ 📄dom.js
│  │  │  │  │  │  ├─ 📄dom.js.map
│  │  │  │  │  │  ├─ 📄es2015.collection.d.ts
│  │  │  │  │  │  ├─ 📄es2015.collection.d.ts.map
│  │  │  │  │  │  ├─ 📄es2015.collection.js
│  │  │  │  │  │  ├─ 📄es2015.collection.js.map
│  │  │  │  │  │  ├─ 📄es2015.core.d.ts
│  │  │  │  │  │  ├─ 📄es2015.core.d.ts.map
│  │  │  │  │  │  ├─ 📄es2015.core.js
│  │  │  │  │  │  ├─ 📄es2015.core.js.map
│  │  │  │  │  │  ├─ 📄es2015.d.ts
│  │  │  │  │  │  ├─ 📄es2015.d.ts.map
│  │  │  │  │  │  ├─ 📄es2015.generator.d.ts
│  │  │  │  │  │  ├─ 📄es2015.generator.d.ts.map
│  │  │  │  │  │  ├─ 📄es2015.generator.js
│  │  │  │  │  │  ├─ 📄es2015.generator.js.map
│  │  │  │  │  │  ├─ 📄es2015.iterable.d.ts
│  │  │  │  │  │  ├─ 📄es2015.iterable.d.ts.map
│  │  │  │  │  │  ├─ 📄es2015.iterable.js
│  │  │  │  │  │  ├─ 📄es2015.iterable.js.map
│  │  │  │  │  │  ├─ 📄es2015.js
│  │  │  │  │  │  ├─ 📄es2015.js.map
│  │  │  │  │  │  ├─ 📄es2015.promise.d.ts
│  │  │  │  │  │  ├─ 📄es2015.promise.d.ts.map
│  │  │  │  │  │  ├─ 📄es2015.promise.js
│  │  │  │  │  │  ├─ 📄es2015.promise.js.map
│  │  │  │  │  │  ├─ 📄es2015.proxy.d.ts
│  │  │  │  │  │  ├─ 📄es2015.proxy.d.ts.map
│  │  │  │  │  │  ├─ 📄es2015.proxy.js
│  │  │  │  │  │  ├─ 📄es2015.proxy.js.map
│  │  │  │  │  │  ├─ 📄es2015.reflect.d.ts
│  │  │  │  │  │  ├─ 📄es2015.reflect.d.ts.map
│  │  │  │  │  │  ├─ 📄es2015.reflect.js
│  │  │  │  │  │  ├─ 📄es2015.reflect.js.map
│  │  │  │  │  │  ├─ 📄es2015.symbol.d.ts
│  │  │  │  │  │  ├─ 📄es2015.symbol.d.ts.map
│  │  │  │  │  │  ├─ 📄es2015.symbol.js
│  │  │  │  │  │  ├─ 📄es2015.symbol.js.map
│  │  │  │  │  │  ├─ 📄es2015.symbol.wellknown.d.ts
│  │  │  │  │  │  ├─ 📄es2015.symbol.wellknown.d.ts.map
│  │  │  │  │  │  ├─ 📄es2015.symbol.wellknown.js
│  │  │  │  │  │  ├─ 📄es2015.symbol.wellknown.js.map
│  │  │  │  │  │  ├─ 📄es2016.array.include.d.ts
│  │  │  │  │  │  ├─ 📄es2016.array.include.d.ts.map
│  │  │  │  │  │  ├─ 📄es2016.array.include.js
│  │  │  │  │  │  ├─ 📄es2016.array.include.js.map
│  │  │  │  │  │  ├─ 📄es2016.d.ts
│  │  │  │  │  │  ├─ 📄es2016.d.ts.map
│  │  │  │  │  │  ├─ 📄es2016.full.d.ts
│  │  │  │  │  │  ├─ 📄es2016.full.d.ts.map
│  │  │  │  │  │  ├─ 📄es2016.full.js
│  │  │  │  │  │  ├─ 📄es2016.full.js.map
│  │  │  │  │  │  ├─ 📄es2016.intl.d.ts
│  │  │  │  │  │  ├─ 📄es2016.intl.d.ts.map
│  │  │  │  │  │  ├─ 📄es2016.intl.js
│  │  │  │  │  │  ├─ 📄es2016.intl.js.map
│  │  │  │  │  │  ├─ 📄es2016.js
│  │  │  │  │  │  ├─ 📄es2016.js.map
│  │  │  │  │  │  ├─ 📄es2017.d.ts
│  │  │  │  │  │  ├─ 📄es2017.d.ts.map
│  │  │  │  │  │  ├─ 📄es2017.date.d.ts
│  │  │  │  │  │  ├─ 📄es2017.date.d.ts.map
│  │  │  │  │  │  ├─ 📄es2017.date.js
│  │  │  │  │  │  ├─ 📄es2017.date.js.map
│  │  │  │  │  │  ├─ 📄es2017.full.d.ts
│  │  │  │  │  │  ├─ 📄es2017.full.d.ts.map
│  │  │  │  │  │  ├─ 📄es2017.full.js
│  │  │  │  │  │  ├─ 📄es2017.full.js.map
│  │  │  │  │  │  ├─ 📄es2017.intl.d.ts
│  │  │  │  │  │  ├─ 📄es2017.intl.d.ts.map
│  │  │  │  │  │  ├─ 📄es2017.intl.js
│  │  │  │  │  │  ├─ 📄es2017.intl.js.map
│  │  │  │  │  │  ├─ 📄es2017.js
│  │  │  │  │  │  ├─ 📄es2017.js.map
│  │  │  │  │  │  ├─ 📄es2017.object.d.ts
│  │  │  │  │  │  ├─ 📄es2017.object.d.ts.map
│  │  │  │  │  │  ├─ 📄es2017.object.js
│  │  │  │  │  │  ├─ 📄es2017.object.js.map
│  │  │  │  │  │  ├─ 📄es2017.sharedmemory.d.ts
│  │  │  │  │  │  ├─ 📄es2017.sharedmemory.d.ts.map
│  │  │  │  │  │  ├─ 📄es2017.sharedmemory.js
│  │  │  │  │  │  ├─ 📄es2017.sharedmemory.js.map
│  │  │  │  │  │  ├─ 📄es2017.string.d.ts
│  │  │  │  │  │  ├─ 📄es2017.string.d.ts.map
│  │  │  │  │  │  ├─ 📄es2017.string.js
│  │  │  │  │  │  ├─ 📄es2017.string.js.map
│  │  │  │  │  │  ├─ 📄es2017.typedarrays.d.ts
│  │  │  │  │  │  ├─ 📄es2017.typedarrays.d.ts.map
│  │  │  │  │  │  ├─ 📄es2017.typedarrays.js
│  │  │  │  │  │  ├─ 📄es2017.typedarrays.js.map
│  │  │  │  │  │  ├─ 📄es2018.asyncgenerator.d.ts
│  │  │  │  │  │  ├─ 📄es2018.asyncgenerator.d.ts.map
│  │  │  │  │  │  ├─ 📄es2018.asyncgenerator.js
│  │  │  │  │  │  ├─ 📄es2018.asyncgenerator.js.map
│  │  │  │  │  │  ├─ 📄es2018.asynciterable.d.ts
│  │  │  │  │  │  ├─ 📄es2018.asynciterable.d.ts.map
│  │  │  │  │  │  ├─ 📄es2018.asynciterable.js
│  │  │  │  │  │  ├─ 📄es2018.asynciterable.js.map
│  │  │  │  │  │  ├─ 📄es2018.d.ts
│  │  │  │  │  │  ├─ 📄es2018.d.ts.map
│  │  │  │  │  │  ├─ 📄es2018.full.d.ts
│  │  │  │  │  │  ├─ 📄es2018.full.d.ts.map
│  │  │  │  │  │  ├─ 📄es2018.full.js
│  │  │  │  │  │  ├─ 📄es2018.full.js.map
│  │  │  │  │  │  ├─ 📄es2018.intl.d.ts
│  │  │  │  │  │  ├─ 📄es2018.intl.d.ts.map
│  │  │  │  │  │  ├─ 📄es2018.intl.js
│  │  │  │  │  │  ├─ 📄es2018.intl.js.map
│  │  │  │  │  │  ├─ 📄es2018.js
│  │  │  │  │  │  ├─ 📄es2018.js.map
│  │  │  │  │  │  ├─ 📄es2018.promise.d.ts
│  │  │  │  │  │  ├─ 📄es2018.promise.d.ts.map
│  │  │  │  │  │  ├─ 📄es2018.promise.js
│  │  │  │  │  │  ├─ 📄es2018.promise.js.map
│  │  │  │  │  │  ├─ 📄es2018.regexp.d.ts
│  │  │  │  │  │  ├─ 📄es2018.regexp.d.ts.map
│  │  │  │  │  │  ├─ 📄es2018.regexp.js
│  │  │  │  │  │  ├─ 📄es2018.regexp.js.map
│  │  │  │  │  │  ├─ 📄es2019.array.d.ts
│  │  │  │  │  │  ├─ 📄es2019.array.d.ts.map
│  │  │  │  │  │  ├─ 📄es2019.array.js
│  │  │  │  │  │  ├─ 📄es2019.array.js.map
│  │  │  │  │  │  ├─ 📄es2019.d.ts
│  │  │  │  │  │  ├─ 📄es2019.d.ts.map
│  │  │  │  │  │  ├─ 📄es2019.full.d.ts
│  │  │  │  │  │  ├─ 📄es2019.full.d.ts.map
│  │  │  │  │  │  ├─ 📄es2019.full.js
│  │  │  │  │  │  ├─ 📄es2019.full.js.map
│  │  │  │  │  │  ├─ 📄es2019.intl.d.ts
│  │  │  │  │  │  ├─ 📄es2019.intl.d.ts.map
│  │  │  │  │  │  ├─ 📄es2019.intl.js
│  │  │  │  │  │  ├─ 📄es2019.intl.js.map
│  │  │  │  │  │  ├─ 📄es2019.js
│  │  │  │  │  │  ├─ 📄es2019.js.map
│  │  │  │  │  │  ├─ 📄es2019.object.d.ts
│  │  │  │  │  │  ├─ 📄es2019.object.d.ts.map
│  │  │  │  │  │  ├─ 📄es2019.object.js
│  │  │  │  │  │  ├─ 📄es2019.object.js.map
│  │  │  │  │  │  ├─ 📄es2019.string.d.ts
│  │  │  │  │  │  ├─ 📄es2019.string.d.ts.map
│  │  │  │  │  │  ├─ 📄es2019.string.js
│  │  │  │  │  │  ├─ 📄es2019.string.js.map
│  │  │  │  │  │  ├─ 📄es2019.symbol.d.ts
│  │  │  │  │  │  ├─ 📄es2019.symbol.d.ts.map
│  │  │  │  │  │  ├─ 📄es2019.symbol.js
│  │  │  │  │  │  ├─ 📄es2019.symbol.js.map
│  │  │  │  │  │  ├─ 📄es2020.bigint.d.ts
│  │  │  │  │  │  ├─ 📄es2020.bigint.d.ts.map
│  │  │  │  │  │  ├─ 📄es2020.bigint.js
│  │  │  │  │  │  ├─ 📄es2020.bigint.js.map
│  │  │  │  │  │  ├─ 📄es2020.d.ts
│  │  │  │  │  │  ├─ 📄es2020.d.ts.map
│  │  │  │  │  │  ├─ 📄es2020.date.d.ts
│  │  │  │  │  │  ├─ 📄es2020.date.d.ts.map
│  │  │  │  │  │  ├─ 📄es2020.date.js
│  │  │  │  │  │  ├─ 📄es2020.date.js.map
│  │  │  │  │  │  ├─ 📄es2020.full.d.ts
│  │  │  │  │  │  ├─ 📄es2020.full.d.ts.map
│  │  │  │  │  │  ├─ 📄es2020.full.js
│  │  │  │  │  │  ├─ 📄es2020.full.js.map
│  │  │  │  │  │  ├─ 📄es2020.intl.d.ts
│  │  │  │  │  │  ├─ 📄es2020.intl.d.ts.map
│  │  │  │  │  │  ├─ 📄es2020.intl.js
│  │  │  │  │  │  ├─ 📄es2020.intl.js.map
│  │  │  │  │  │  ├─ 📄es2020.js
│  │  │  │  │  │  ├─ 📄es2020.js.map
│  │  │  │  │  │  ├─ 📄es2020.number.d.ts
│  │  │  │  │  │  ├─ 📄es2020.number.d.ts.map
│  │  │  │  │  │  ├─ 📄es2020.number.js
│  │  │  │  │  │  ├─ 📄es2020.number.js.map
│  │  │  │  │  │  ├─ 📄es2020.promise.d.ts
│  │  │  │  │  │  ├─ 📄es2020.promise.d.ts.map
│  │  │  │  │  │  ├─ 📄es2020.promise.js
│  │  │  │  │  │  ├─ 📄es2020.promise.js.map
│  │  │  │  │  │  ├─ 📄es2020.sharedmemory.d.ts
│  │  │  │  │  │  ├─ 📄es2020.sharedmemory.d.ts.map
│  │  │  │  │  │  ├─ 📄es2020.sharedmemory.js
│  │  │  │  │  │  ├─ 📄es2020.sharedmemory.js.map
│  │  │  │  │  │  ├─ 📄es2020.string.d.ts
│  │  │  │  │  │  ├─ 📄es2020.string.d.ts.map
│  │  │  │  │  │  ├─ 📄es2020.string.js
│  │  │  │  │  │  ├─ 📄es2020.string.js.map
│  │  │  │  │  │  ├─ 📄es2020.symbol.wellknown.d.ts
│  │  │  │  │  │  ├─ 📄es2020.symbol.wellknown.d.ts.map
│  │  │  │  │  │  ├─ 📄es2020.symbol.wellknown.js
│  │  │  │  │  │  ├─ 📄es2020.symbol.wellknown.js.map
│  │  │  │  │  │  ├─ 📄es2021.d.ts
│  │  │  │  │  │  ├─ 📄es2021.d.ts.map
│  │  │  │  │  │  ├─ 📄es2021.full.d.ts
│  │  │  │  │  │  ├─ 📄es2021.full.d.ts.map
│  │  │  │  │  │  ├─ 📄es2021.full.js
│  │  │  │  │  │  ├─ 📄es2021.full.js.map
│  │  │  │  │  │  ├─ 📄es2021.intl.d.ts
│  │  │  │  │  │  ├─ 📄es2021.intl.d.ts.map
│  │  │  │  │  │  ├─ 📄es2021.intl.js
│  │  │  │  │  │  ├─ 📄es2021.intl.js.map
│  │  │  │  │  │  ├─ 📄es2021.js
│  │  │  │  │  │  ├─ 📄es2021.js.map
│  │  │  │  │  │  ├─ 📄es2021.promise.d.ts
│  │  │  │  │  │  ├─ 📄es2021.promise.d.ts.map
│  │  │  │  │  │  ├─ 📄es2021.promise.js
│  │  │  │  │  │  ├─ 📄es2021.promise.js.map
│  │  │  │  │  │  ├─ 📄es2021.string.d.ts
│  │  │  │  │  │  ├─ 📄es2021.string.d.ts.map
│  │  │  │  │  │  ├─ 📄es2021.string.js
│  │  │  │  │  │  ├─ 📄es2021.string.js.map
│  │  │  │  │  │  ├─ 📄es2021.weakref.d.ts
│  │  │  │  │  │  ├─ 📄es2021.weakref.d.ts.map
│  │  │  │  │  │  ├─ 📄es2021.weakref.js
│  │  │  │  │  │  ├─ 📄es2021.weakref.js.map
│  │  │  │  │  │  ├─ 📄es2022.array.d.ts
│  │  │  │  │  │  ├─ 📄es2022.array.d.ts.map
│  │  │  │  │  │  ├─ 📄es2022.array.js
│  │  │  │  │  │  ├─ 📄es2022.array.js.map
│  │  │  │  │  │  ├─ 📄es2022.d.ts
│  │  │  │  │  │  ├─ 📄es2022.d.ts.map
│  │  │  │  │  │  ├─ 📄es2022.error.d.ts
│  │  │  │  │  │  ├─ 📄es2022.error.d.ts.map
│  │  │  │  │  │  ├─ 📄es2022.error.js
│  │  │  │  │  │  ├─ 📄es2022.error.js.map
│  │  │  │  │  │  ├─ 📄es2022.full.d.ts
│  │  │  │  │  │  ├─ 📄es2022.full.d.ts.map
│  │  │  │  │  │  ├─ 📄es2022.full.js
│  │  │  │  │  │  ├─ 📄es2022.full.js.map
│  │  │  │  │  │  ├─ 📄es2022.intl.d.ts
│  │  │  │  │  │  ├─ 📄es2022.intl.d.ts.map
│  │  │  │  │  │  ├─ 📄es2022.intl.js
│  │  │  │  │  │  ├─ 📄es2022.intl.js.map
│  │  │  │  │  │  ├─ 📄es2022.js
│  │  │  │  │  │  ├─ 📄es2022.js.map
│  │  │  │  │  │  ├─ 📄es2022.object.d.ts
│  │  │  │  │  │  ├─ 📄es2022.object.d.ts.map
│  │  │  │  │  │  ├─ 📄es2022.object.js
│  │  │  │  │  │  ├─ 📄es2022.object.js.map
│  │  │  │  │  │  ├─ 📄es2022.regexp.d.ts
│  │  │  │  │  │  ├─ 📄es2022.regexp.d.ts.map
│  │  │  │  │  │  ├─ 📄es2022.regexp.js
│  │  │  │  │  │  ├─ 📄es2022.regexp.js.map
│  │  │  │  │  │  ├─ 📄es2022.sharedmemory.d.ts
│  │  │  │  │  │  ├─ 📄es2022.sharedmemory.d.ts.map
│  │  │  │  │  │  ├─ 📄es2022.sharedmemory.js
│  │  │  │  │  │  ├─ 📄es2022.sharedmemory.js.map
│  │  │  │  │  │  ├─ 📄es2022.string.d.ts
│  │  │  │  │  │  ├─ 📄es2022.string.d.ts.map
│  │  │  │  │  │  ├─ 📄es2022.string.js
│  │  │  │  │  │  ├─ 📄es2022.string.js.map
│  │  │  │  │  │  ├─ 📄es2023.array.d.ts
│  │  │  │  │  │  ├─ 📄es2023.array.d.ts.map
│  │  │  │  │  │  ├─ 📄es2023.array.js
│  │  │  │  │  │  ├─ 📄es2023.array.js.map
│  │  │  │  │  │  ├─ 📄es2023.collection.d.ts
│  │  │  │  │  │  ├─ 📄es2023.collection.d.ts.map
│  │  │  │  │  │  ├─ 📄es2023.collection.js
│  │  │  │  │  │  ├─ 📄es2023.collection.js.map
│  │  │  │  │  │  ├─ 📄es2023.d.ts
│  │  │  │  │  │  ├─ 📄es2023.d.ts.map
│  │  │  │  │  │  ├─ 📄es2023.full.d.ts
│  │  │  │  │  │  ├─ 📄es2023.full.d.ts.map
│  │  │  │  │  │  ├─ 📄es2023.full.js
│  │  │  │  │  │  ├─ 📄es2023.full.js.map
│  │  │  │  │  │  ├─ 📄es2023.intl.d.ts
│  │  │  │  │  │  ├─ 📄es2023.intl.d.ts.map
│  │  │  │  │  │  ├─ 📄es2023.intl.js
│  │  │  │  │  │  ├─ 📄es2023.intl.js.map
│  │  │  │  │  │  ├─ 📄es2023.js
│  │  │  │  │  │  ├─ 📄es2023.js.map
│  │  │  │  │  │  ├─ 📄es5.d.ts
│  │  │  │  │  │  ├─ 📄es5.d.ts.map
│  │  │  │  │  │  ├─ 📄es5.js
│  │  │  │  │  │  ├─ 📄es5.js.map
│  │  │  │  │  │  ├─ 📄es6.d.ts
│  │  │  │  │  │  ├─ 📄es6.d.ts.map
│  │  │  │  │  │  ├─ 📄es6.js
│  │  │  │  │  │  ├─ 📄es6.js.map
│  │  │  │  │  │  ├─ 📄es7.d.ts
│  │  │  │  │  │  ├─ 📄es7.d.ts.map
│  │  │  │  │  │  ├─ 📄es7.js
│  │  │  │  │  │  ├─ 📄es7.js.map
│  │  │  │  │  │  ├─ 📄esnext.array.d.ts
│  │  │  │  │  │  ├─ 📄esnext.array.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.array.js
│  │  │  │  │  │  ├─ 📄esnext.array.js.map
│  │  │  │  │  │  ├─ 📄esnext.asynciterable.d.ts
│  │  │  │  │  │  ├─ 📄esnext.asynciterable.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.asynciterable.js
│  │  │  │  │  │  ├─ 📄esnext.asynciterable.js.map
│  │  │  │  │  │  ├─ 📄esnext.bigint.d.ts
│  │  │  │  │  │  ├─ 📄esnext.bigint.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.bigint.js
│  │  │  │  │  │  ├─ 📄esnext.bigint.js.map
│  │  │  │  │  │  ├─ 📄esnext.collection.d.ts
│  │  │  │  │  │  ├─ 📄esnext.collection.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.collection.js
│  │  │  │  │  │  ├─ 📄esnext.collection.js.map
│  │  │  │  │  │  ├─ 📄esnext.d.ts
│  │  │  │  │  │  ├─ 📄esnext.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.decorators.d.ts
│  │  │  │  │  │  ├─ 📄esnext.decorators.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.decorators.js
│  │  │  │  │  │  ├─ 📄esnext.decorators.js.map
│  │  │  │  │  │  ├─ 📄esnext.disposable.d.ts
│  │  │  │  │  │  ├─ 📄esnext.disposable.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.disposable.js
│  │  │  │  │  │  ├─ 📄esnext.disposable.js.map
│  │  │  │  │  │  ├─ 📄esnext.full.d.ts
│  │  │  │  │  │  ├─ 📄esnext.full.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.full.js
│  │  │  │  │  │  ├─ 📄esnext.full.js.map
│  │  │  │  │  │  ├─ 📄esnext.intl.d.ts
│  │  │  │  │  │  ├─ 📄esnext.intl.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.intl.js
│  │  │  │  │  │  ├─ 📄esnext.intl.js.map
│  │  │  │  │  │  ├─ 📄esnext.js
│  │  │  │  │  │  ├─ 📄esnext.js.map
│  │  │  │  │  │  ├─ 📄esnext.object.d.ts
│  │  │  │  │  │  ├─ 📄esnext.object.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.object.js
│  │  │  │  │  │  ├─ 📄esnext.object.js.map
│  │  │  │  │  │  ├─ 📄esnext.promise.d.ts
│  │  │  │  │  │  ├─ 📄esnext.promise.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.promise.js
│  │  │  │  │  │  ├─ 📄esnext.promise.js.map
│  │  │  │  │  │  ├─ 📄esnext.regexp.d.ts
│  │  │  │  │  │  ├─ 📄esnext.regexp.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.regexp.js
│  │  │  │  │  │  ├─ 📄esnext.regexp.js.map
│  │  │  │  │  │  ├─ 📄esnext.string.d.ts
│  │  │  │  │  │  ├─ 📄esnext.string.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.string.js
│  │  │  │  │  │  ├─ 📄esnext.string.js.map
│  │  │  │  │  │  ├─ 📄esnext.symbol.d.ts
│  │  │  │  │  │  ├─ 📄esnext.symbol.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.symbol.js
│  │  │  │  │  │  ├─ 📄esnext.symbol.js.map
│  │  │  │  │  │  ├─ 📄esnext.weakref.d.ts
│  │  │  │  │  │  ├─ 📄esnext.weakref.d.ts.map
│  │  │  │  │  │  ├─ 📄esnext.weakref.js
│  │  │  │  │  │  ├─ 📄esnext.weakref.js.map
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  ├─ 📄lib.d.ts
│  │  │  │  │  │  ├─ 📄lib.d.ts.map
│  │  │  │  │  │  ├─ 📄lib.js
│  │  │  │  │  │  ├─ 📄lib.js.map
│  │  │  │  │  │  ├─ 📄scripthost.d.ts
│  │  │  │  │  │  ├─ 📄scripthost.d.ts.map
│  │  │  │  │  │  ├─ 📄scripthost.js
│  │  │  │  │  │  ├─ 📄scripthost.js.map
│  │  │  │  │  │  ├─ 📄webworker.asynciterable.d.ts
│  │  │  │  │  │  ├─ 📄webworker.asynciterable.d.ts.map
│  │  │  │  │  │  ├─ 📄webworker.asynciterable.js
│  │  │  │  │  │  ├─ 📄webworker.asynciterable.js.map
│  │  │  │  │  │  ├─ 📄webworker.d.ts
│  │  │  │  │  │  ├─ 📄webworker.d.ts.map
│  │  │  │  │  │  ├─ 📄webworker.importscripts.d.ts
│  │  │  │  │  │  ├─ 📄webworker.importscripts.d.ts.map
│  │  │  │  │  │  ├─ 📄webworker.importscripts.js
│  │  │  │  │  │  ├─ 📄webworker.importscripts.js.map
│  │  │  │  │  │  ├─ 📄webworker.iterable.d.ts
│  │  │  │  │  │  ├─ 📄webworker.iterable.d.ts.map
│  │  │  │  │  │  ├─ 📄webworker.iterable.js
│  │  │  │  │  │  ├─ 📄webworker.iterable.js.map
│  │  │  │  │  │  ├─ 📄webworker.js
│  │  │  │  │  │  └─ 📄webworker.js.map
│  │  │  │  │  ├─ 📁referencer
│  │  │  │  │  │  ├─ 📄ClassVisitor.d.ts
│  │  │  │  │  │  ├─ 📄ClassVisitor.d.ts.map
│  │  │  │  │  │  ├─ 📄ClassVisitor.js
│  │  │  │  │  │  ├─ 📄ClassVisitor.js.map
│  │  │  │  │  │  ├─ 📄ExportVisitor.d.ts
│  │  │  │  │  │  ├─ 📄ExportVisitor.d.ts.map
│  │  │  │  │  │  ├─ 📄ExportVisitor.js
│  │  │  │  │  │  ├─ 📄ExportVisitor.js.map
│  │  │  │  │  │  ├─ 📄ImportVisitor.d.ts
│  │  │  │  │  │  ├─ 📄ImportVisitor.d.ts.map
│  │  │  │  │  │  ├─ 📄ImportVisitor.js
│  │  │  │  │  │  ├─ 📄ImportVisitor.js.map
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  ├─ 📄PatternVisitor.d.ts
│  │  │  │  │  │  ├─ 📄PatternVisitor.d.ts.map
│  │  │  │  │  │  ├─ 📄PatternVisitor.js
│  │  │  │  │  │  ├─ 📄PatternVisitor.js.map
│  │  │  │  │  │  ├─ 📄Reference.d.ts
│  │  │  │  │  │  ├─ 📄Reference.d.ts.map
│  │  │  │  │  │  ├─ 📄Reference.js
│  │  │  │  │  │  ├─ 📄Reference.js.map
│  │  │  │  │  │  ├─ 📄Referencer.d.ts
│  │  │  │  │  │  ├─ 📄Referencer.d.ts.map
│  │  │  │  │  │  ├─ 📄Referencer.js
│  │  │  │  │  │  ├─ 📄Referencer.js.map
│  │  │  │  │  │  ├─ 📄TypeVisitor.d.ts
│  │  │  │  │  │  ├─ 📄TypeVisitor.d.ts.map
│  │  │  │  │  │  ├─ 📄TypeVisitor.js
│  │  │  │  │  │  ├─ 📄TypeVisitor.js.map
│  │  │  │  │  │  ├─ 📄Visitor.d.ts
│  │  │  │  │  │  ├─ 📄Visitor.d.ts.map
│  │  │  │  │  │  ├─ 📄Visitor.js
│  │  │  │  │  │  ├─ 📄Visitor.js.map
│  │  │  │  │  │  ├─ 📄VisitorBase.d.ts
│  │  │  │  │  │  ├─ 📄VisitorBase.d.ts.map
│  │  │  │  │  │  ├─ 📄VisitorBase.js
│  │  │  │  │  │  └─ 📄VisitorBase.js.map
│  │  │  │  │  ├─ 📁scope
│  │  │  │  │  │  ├─ 📄BlockScope.d.ts
│  │  │  │  │  │  ├─ 📄BlockScope.d.ts.map
│  │  │  │  │  │  ├─ 📄BlockScope.js
│  │  │  │  │  │  ├─ 📄BlockScope.js.map
│  │  │  │  │  │  ├─ 📄CatchScope.d.ts
│  │  │  │  │  │  ├─ 📄CatchScope.d.ts.map
│  │  │  │  │  │  ├─ 📄CatchScope.js
│  │  │  │  │  │  ├─ 📄CatchScope.js.map
│  │  │  │  │  │  ├─ 📄ClassFieldInitializerScope.d.ts
│  │  │  │  │  │  ├─ 📄ClassFieldInitializerScope.d.ts.map
│  │  │  │  │  │  ├─ 📄ClassFieldInitializerScope.js
│  │  │  │  │  │  ├─ 📄ClassFieldInitializerScope.js.map
│  │  │  │  │  │  ├─ 📄ClassScope.d.ts
│  │  │  │  │  │  ├─ 📄ClassScope.d.ts.map
│  │  │  │  │  │  ├─ 📄ClassScope.js
│  │  │  │  │  │  ├─ 📄ClassScope.js.map
│  │  │  │  │  │  ├─ 📄ClassStaticBlockScope.d.ts
│  │  │  │  │  │  ├─ 📄ClassStaticBlockScope.d.ts.map
│  │  │  │  │  │  ├─ 📄ClassStaticBlockScope.js
│  │  │  │  │  │  ├─ 📄ClassStaticBlockScope.js.map
│  │  │  │  │  │  ├─ 📄ConditionalTypeScope.d.ts
│  │  │  │  │  │  ├─ 📄ConditionalTypeScope.d.ts.map
│  │  │  │  │  │  ├─ 📄ConditionalTypeScope.js
│  │  │  │  │  │  ├─ 📄ConditionalTypeScope.js.map
│  │  │  │  │  │  ├─ 📄ForScope.d.ts
│  │  │  │  │  │  ├─ 📄ForScope.d.ts.map
│  │  │  │  │  │  ├─ 📄ForScope.js
│  │  │  │  │  │  ├─ 📄ForScope.js.map
│  │  │  │  │  │  ├─ 📄FunctionExpressionNameScope.d.ts
│  │  │  │  │  │  ├─ 📄FunctionExpressionNameScope.d.ts.map
│  │  │  │  │  │  ├─ 📄FunctionExpressionNameScope.js
│  │  │  │  │  │  ├─ 📄FunctionExpressionNameScope.js.map
│  │  │  │  │  │  ├─ 📄FunctionScope.d.ts
│  │  │  │  │  │  ├─ 📄FunctionScope.d.ts.map
│  │  │  │  │  │  ├─ 📄FunctionScope.js
│  │  │  │  │  │  ├─ 📄FunctionScope.js.map
│  │  │  │  │  │  ├─ 📄FunctionTypeScope.d.ts
│  │  │  │  │  │  ├─ 📄FunctionTypeScope.d.ts.map
│  │  │  │  │  │  ├─ 📄FunctionTypeScope.js
│  │  │  │  │  │  ├─ 📄FunctionTypeScope.js.map
│  │  │  │  │  │  ├─ 📄GlobalScope.d.ts
│  │  │  │  │  │  ├─ 📄GlobalScope.d.ts.map
│  │  │  │  │  │  ├─ 📄GlobalScope.js
│  │  │  │  │  │  ├─ 📄GlobalScope.js.map
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  ├─ 📄MappedTypeScope.d.ts
│  │  │  │  │  │  ├─ 📄MappedTypeScope.d.ts.map
│  │  │  │  │  │  ├─ 📄MappedTypeScope.js
│  │  │  │  │  │  ├─ 📄MappedTypeScope.js.map
│  │  │  │  │  │  ├─ 📄ModuleScope.d.ts
│  │  │  │  │  │  ├─ 📄ModuleScope.d.ts.map
│  │  │  │  │  │  ├─ 📄ModuleScope.js
│  │  │  │  │  │  ├─ 📄ModuleScope.js.map
│  │  │  │  │  │  ├─ 📄Scope.d.ts
│  │  │  │  │  │  ├─ 📄Scope.d.ts.map
│  │  │  │  │  │  ├─ 📄Scope.js
│  │  │  │  │  │  ├─ 📄Scope.js.map
│  │  │  │  │  │  ├─ 📄ScopeBase.d.ts
│  │  │  │  │  │  ├─ 📄ScopeBase.d.ts.map
│  │  │  │  │  │  ├─ 📄ScopeBase.js
│  │  │  │  │  │  ├─ 📄ScopeBase.js.map
│  │  │  │  │  │  ├─ 📄ScopeType.d.ts
│  │  │  │  │  │  ├─ 📄ScopeType.d.ts.map
│  │  │  │  │  │  ├─ 📄ScopeType.js
│  │  │  │  │  │  ├─ 📄ScopeType.js.map
│  │  │  │  │  │  ├─ 📄SwitchScope.d.ts
│  │  │  │  │  │  ├─ 📄SwitchScope.d.ts.map
│  │  │  │  │  │  ├─ 📄SwitchScope.js
│  │  │  │  │  │  ├─ 📄SwitchScope.js.map
│  │  │  │  │  │  ├─ 📄TSEnumScope.d.ts
│  │  │  │  │  │  ├─ 📄TSEnumScope.d.ts.map
│  │  │  │  │  │  ├─ 📄TSEnumScope.js
│  │  │  │  │  │  ├─ 📄TSEnumScope.js.map
│  │  │  │  │  │  ├─ 📄TSModuleScope.d.ts
│  │  │  │  │  │  ├─ 📄TSModuleScope.d.ts.map
│  │  │  │  │  │  ├─ 📄TSModuleScope.js
│  │  │  │  │  │  ├─ 📄TSModuleScope.js.map
│  │  │  │  │  │  ├─ 📄TypeScope.d.ts
│  │  │  │  │  │  ├─ 📄TypeScope.d.ts.map
│  │  │  │  │  │  ├─ 📄TypeScope.js
│  │  │  │  │  │  ├─ 📄TypeScope.js.map
│  │  │  │  │  │  ├─ 📄WithScope.d.ts
│  │  │  │  │  │  ├─ 📄WithScope.d.ts.map
│  │  │  │  │  │  ├─ 📄WithScope.js
│  │  │  │  │  │  └─ 📄WithScope.js.map
│  │  │  │  │  ├─ 📁variable
│  │  │  │  │  │  ├─ 📄ESLintScopeVariable.d.ts
│  │  │  │  │  │  ├─ 📄ESLintScopeVariable.d.ts.map
│  │  │  │  │  │  ├─ 📄ESLintScopeVariable.js
│  │  │  │  │  │  ├─ 📄ESLintScopeVariable.js.map
│  │  │  │  │  │  ├─ 📄ImplicitLibVariable.d.ts
│  │  │  │  │  │  ├─ 📄ImplicitLibVariable.d.ts.map
│  │  │  │  │  │  ├─ 📄ImplicitLibVariable.js
│  │  │  │  │  │  ├─ 📄ImplicitLibVariable.js.map
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  ├─ 📄Variable.d.ts
│  │  │  │  │  │  ├─ 📄Variable.d.ts.map
│  │  │  │  │  │  ├─ 📄Variable.js
│  │  │  │  │  │  ├─ 📄Variable.js.map
│  │  │  │  │  │  ├─ 📄VariableBase.d.ts
│  │  │  │  │  │  ├─ 📄VariableBase.d.ts.map
│  │  │  │  │  │  ├─ 📄VariableBase.js
│  │  │  │  │  │  └─ 📄VariableBase.js.map
│  │  │  │  │  ├─ 📄analyze.d.ts
│  │  │  │  │  ├─ 📄analyze.d.ts.map
│  │  │  │  │  ├─ 📄analyze.js
│  │  │  │  │  ├─ 📄analyze.js.map
│  │  │  │  │  ├─ 📄assert.d.ts
│  │  │  │  │  ├─ 📄assert.d.ts.map
│  │  │  │  │  ├─ 📄assert.js
│  │  │  │  │  ├─ 📄assert.js.map
│  │  │  │  │  ├─ 📄ID.d.ts
│  │  │  │  │  ├─ 📄ID.d.ts.map
│  │  │  │  │  ├─ 📄ID.js
│  │  │  │  │  ├─ 📄ID.js.map
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  ├─ 📄ScopeManager.d.ts
│  │  │  │  │  ├─ 📄ScopeManager.d.ts.map
│  │  │  │  │  ├─ 📄ScopeManager.js
│  │  │  │  │  └─ 📄ScopeManager.js.map
│  │  │  │  ├─ 📄LICENSE
│  │  │  │  ├─ 📄package.json
│  │  │  │  └─ 📄README.md
│  │  │  ├─ 📁type-utils
│  │  │  │  ├─ 📁dist
│  │  │  │  │  ├─ 📁typeOrValueSpecifiers
│  │  │  │  │  │  ├─ 📄specifierNameMatches.d.ts
│  │  │  │  │  │  ├─ 📄specifierNameMatches.d.ts.map
│  │  │  │  │  │  ├─ 📄specifierNameMatches.js
│  │  │  │  │  │  ├─ 📄specifierNameMatches.js.map
│  │  │  │  │  │  ├─ 📄typeDeclaredInFile.d.ts
│  │  │  │  │  │  ├─ 📄typeDeclaredInFile.d.ts.map
│  │  │  │  │  │  ├─ 📄typeDeclaredInFile.js
│  │  │  │  │  │  ├─ 📄typeDeclaredInFile.js.map
│  │  │  │  │  │  ├─ 📄typeDeclaredInLib.d.ts
│  │  │  │  │  │  ├─ 📄typeDeclaredInLib.d.ts.map
│  │  │  │  │  │  ├─ 📄typeDeclaredInLib.js
│  │  │  │  │  │  ├─ 📄typeDeclaredInLib.js.map
│  │  │  │  │  │  ├─ 📄typeDeclaredInPackageDeclarationFile.d.ts
│  │  │  │  │  │  ├─ 📄typeDeclaredInPackageDeclarationFile.d.ts.map
│  │  │  │  │  │  ├─ 📄typeDeclaredInPackageDeclarationFile.js
│  │  │  │  │  │  └─ 📄typeDeclaredInPackageDeclarationFile.js.map
│  │  │  │  │  ├─ 📄builtinSymbolLikes.d.ts
│  │  │  │  │  ├─ 📄builtinSymbolLikes.d.ts.map
│  │  │  │  │  ├─ 📄builtinSymbolLikes.js
│  │  │  │  │  ├─ 📄builtinSymbolLikes.js.map
│  │  │  │  │  ├─ 📄containsAllTypesByName.d.ts
│  │  │  │  │  ├─ 📄containsAllTypesByName.d.ts.map
│  │  │  │  │  ├─ 📄containsAllTypesByName.js
│  │  │  │  │  ├─ 📄containsAllTypesByName.js.map
│  │  │  │  │  ├─ 📄getConstrainedTypeAtLocation.d.ts
│  │  │  │  │  ├─ 📄getConstrainedTypeAtLocation.d.ts.map
│  │  │  │  │  ├─ 📄getConstrainedTypeAtLocation.js
│  │  │  │  │  ├─ 📄getConstrainedTypeAtLocation.js.map
│  │  │  │  │  ├─ 📄getContextualType.d.ts
│  │  │  │  │  ├─ 📄getContextualType.d.ts.map
│  │  │  │  │  ├─ 📄getContextualType.js
│  │  │  │  │  ├─ 📄getContextualType.js.map
│  │  │  │  │  ├─ 📄getDeclaration.d.ts
│  │  │  │  │  ├─ 📄getDeclaration.d.ts.map
│  │  │  │  │  ├─ 📄getDeclaration.js
│  │  │  │  │  ├─ 📄getDeclaration.js.map
│  │  │  │  │  ├─ 📄getSourceFileOfNode.d.ts
│  │  │  │  │  ├─ 📄getSourceFileOfNode.d.ts.map
│  │  │  │  │  ├─ 📄getSourceFileOfNode.js
│  │  │  │  │  ├─ 📄getSourceFileOfNode.js.map
│  │  │  │  │  ├─ 📄getTypeName.d.ts
│  │  │  │  │  ├─ 📄getTypeName.d.ts.map
│  │  │  │  │  ├─ 📄getTypeName.js
│  │  │  │  │  ├─ 📄getTypeName.js.map
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  ├─ 📄isSymbolFromDefaultLibrary.d.ts
│  │  │  │  │  ├─ 📄isSymbolFromDefaultLibrary.d.ts.map
│  │  │  │  │  ├─ 📄isSymbolFromDefaultLibrary.js
│  │  │  │  │  ├─ 📄isSymbolFromDefaultLibrary.js.map
│  │  │  │  │  ├─ 📄isTypeReadonly.d.ts
│  │  │  │  │  ├─ 📄isTypeReadonly.d.ts.map
│  │  │  │  │  ├─ 📄isTypeReadonly.js
│  │  │  │  │  ├─ 📄isTypeReadonly.js.map
│  │  │  │  │  ├─ 📄isUnsafeAssignment.d.ts
│  │  │  │  │  ├─ 📄isUnsafeAssignment.d.ts.map
│  │  │  │  │  ├─ 📄isUnsafeAssignment.js
│  │  │  │  │  ├─ 📄isUnsafeAssignment.js.map
│  │  │  │  │  ├─ 📄predicates.d.ts
│  │  │  │  │  ├─ 📄predicates.d.ts.map
│  │  │  │  │  ├─ 📄predicates.js
│  │  │  │  │  ├─ 📄predicates.js.map
│  │  │  │  │  ├─ 📄propertyTypes.d.ts
│  │  │  │  │  ├─ 📄propertyTypes.d.ts.map
│  │  │  │  │  ├─ 📄propertyTypes.js
│  │  │  │  │  ├─ 📄propertyTypes.js.map
│  │  │  │  │  ├─ 📄requiresQuoting.d.ts
│  │  │  │  │  ├─ 📄requiresQuoting.d.ts.map
│  │  │  │  │  ├─ 📄requiresQuoting.js
│  │  │  │  │  ├─ 📄requiresQuoting.js.map
│  │  │  │  │  ├─ 📄typeFlagUtils.d.ts
│  │  │  │  │  ├─ 📄typeFlagUtils.d.ts.map
│  │  │  │  │  ├─ 📄typeFlagUtils.js
│  │  │  │  │  ├─ 📄typeFlagUtils.js.map
│  │  │  │  │  ├─ 📄TypeOrValueSpecifier.d.ts
│  │  │  │  │  ├─ 📄TypeOrValueSpecifier.d.ts.map
│  │  │  │  │  ├─ 📄TypeOrValueSpecifier.js
│  │  │  │  │  └─ 📄TypeOrValueSpecifier.js.map
│  │  │  │  ├─ 📁node_modules
│  │  │  │  │  └─ 📁.bin
│  │  │  │  │     ├─ 📄tsc
│  │  │  │  │     ├─ 📄tsc.CMD
│  │  │  │  │     ├─ 📄tsc.ps1
│  │  │  │  │     ├─ 📄tsserver
│  │  │  │  │     ├─ 📄tsserver.CMD
│  │  │  │  │     └─ 📄tsserver.ps1
│  │  │  │  ├─ 📄LICENSE
│  │  │  │  ├─ 📄package.json
│  │  │  │  └─ 📄README.md
│  │  │  ├─ 📁types
│  │  │  │  ├─ 📁dist
│  │  │  │  │  ├─ 📁generated
│  │  │  │  │  │  ├─ 📄ast-spec.d.ts
│  │  │  │  │  │  ├─ 📄ast-spec.d.ts.map
│  │  │  │  │  │  ├─ 📄ast-spec.js
│  │  │  │  │  │  └─ 📄ast-spec.js.map
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  ├─ 📄lib.d.ts
│  │  │  │  │  ├─ 📄lib.d.ts.map
│  │  │  │  │  ├─ 📄lib.js
│  │  │  │  │  ├─ 📄lib.js.map
│  │  │  │  │  ├─ 📄parser-options.d.ts
│  │  │  │  │  ├─ 📄parser-options.d.ts.map
│  │  │  │  │  ├─ 📄parser-options.js
│  │  │  │  │  ├─ 📄parser-options.js.map
│  │  │  │  │  ├─ 📄ts-estree.d.ts
│  │  │  │  │  ├─ 📄ts-estree.d.ts.map
│  │  │  │  │  ├─ 📄ts-estree.js
│  │  │  │  │  └─ 📄ts-estree.js.map
│  │  │  │  ├─ 📄LICENSE
│  │  │  │  ├─ 📄package.json
│  │  │  │  └─ 📄README.md
│  │  │  ├─ 📁typescript-estree
│  │  │  │  ├─ 📁dist
│  │  │  │  │  ├─ 📁create-program
│  │  │  │  │  │  ├─ 📄createIsolatedProgram.d.ts
│  │  │  │  │  │  ├─ 📄createIsolatedProgram.d.ts.map
│  │  │  │  │  │  ├─ 📄createIsolatedProgram.js
│  │  │  │  │  │  ├─ 📄createIsolatedProgram.js.map
│  │  │  │  │  │  ├─ 📄createProjectProgram.d.ts
│  │  │  │  │  │  ├─ 📄createProjectProgram.d.ts.map
│  │  │  │  │  │  ├─ 📄createProjectProgram.js
│  │  │  │  │  │  ├─ 📄createProjectProgram.js.map
│  │  │  │  │  │  ├─ 📄createProjectProgramError.d.ts
│  │  │  │  │  │  ├─ 📄createProjectProgramError.d.ts.map
│  │  │  │  │  │  ├─ 📄createProjectProgramError.js
│  │  │  │  │  │  ├─ 📄createProjectProgramError.js.map
│  │  │  │  │  │  ├─ 📄createProjectService.d.ts
│  │  │  │  │  │  ├─ 📄createProjectService.d.ts.map
│  │  │  │  │  │  ├─ 📄createProjectService.js
│  │  │  │  │  │  ├─ 📄createProjectService.js.map
│  │  │  │  │  │  ├─ 📄createSourceFile.d.ts
│  │  │  │  │  │  ├─ 📄createSourceFile.d.ts.map
│  │  │  │  │  │  ├─ 📄createSourceFile.js
│  │  │  │  │  │  ├─ 📄createSourceFile.js.map
│  │  │  │  │  │  ├─ 📄describeFilePath.d.ts
│  │  │  │  │  │  ├─ 📄describeFilePath.d.ts.map
│  │  │  │  │  │  ├─ 📄describeFilePath.js
│  │  │  │  │  │  ├─ 📄describeFilePath.js.map
│  │  │  │  │  │  ├─ 📄getParsedConfigFile.d.ts
│  │  │  │  │  │  ├─ 📄getParsedConfigFile.d.ts.map
│  │  │  │  │  │  ├─ 📄getParsedConfigFile.js
│  │  │  │  │  │  ├─ 📄getParsedConfigFile.js.map
│  │  │  │  │  │  ├─ 📄getScriptKind.d.ts
│  │  │  │  │  │  ├─ 📄getScriptKind.d.ts.map
│  │  │  │  │  │  ├─ 📄getScriptKind.js
│  │  │  │  │  │  ├─ 📄getScriptKind.js.map
│  │  │  │  │  │  ├─ 📄getWatchProgramsForProjects.d.ts
│  │  │  │  │  │  ├─ 📄getWatchProgramsForProjects.d.ts.map
│  │  │  │  │  │  ├─ 📄getWatchProgramsForProjects.js
│  │  │  │  │  │  ├─ 📄getWatchProgramsForProjects.js.map
│  │  │  │  │  │  ├─ 📄shared.d.ts
│  │  │  │  │  │  ├─ 📄shared.d.ts.map
│  │  │  │  │  │  ├─ 📄shared.js
│  │  │  │  │  │  ├─ 📄shared.js.map
│  │  │  │  │  │  ├─ 📄useProvidedPrograms.d.ts
│  │  │  │  │  │  ├─ 📄useProvidedPrograms.d.ts.map
│  │  │  │  │  │  ├─ 📄useProvidedPrograms.js
│  │  │  │  │  │  ├─ 📄useProvidedPrograms.js.map
│  │  │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.d.ts
│  │  │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.d.ts.map
│  │  │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.js
│  │  │  │  │  │  ├─ 📄validateDefaultProjectForFilesGlob.js.map
│  │  │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.d.ts
│  │  │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.d.ts.map
│  │  │  │  │  │  ├─ 📄WatchCompilerHostOfConfigFile.js
│  │  │  │  │  │  └─ 📄WatchCompilerHostOfConfigFile.js.map
│  │  │  │  │  ├─ 📁jsx
│  │  │  │  │  │  ├─ 📄xhtml-entities.d.ts
│  │  │  │  │  │  ├─ 📄xhtml-entities.d.ts.map
│  │  │  │  │  │  ├─ 📄xhtml-entities.js
│  │  │  │  │  │  └─ 📄xhtml-entities.js.map
│  │  │  │  │  ├─ 📁parseSettings
│  │  │  │  │  │  ├─ 📄createParseSettings.d.ts
│  │  │  │  │  │  ├─ 📄createParseSettings.d.ts.map
│  │  │  │  │  │  ├─ 📄createParseSettings.js
│  │  │  │  │  │  ├─ 📄createParseSettings.js.map
│  │  │  │  │  │  ├─ 📄ExpiringCache.d.ts
│  │  │  │  │  │  ├─ 📄ExpiringCache.d.ts.map
│  │  │  │  │  │  ├─ 📄ExpiringCache.js
│  │  │  │  │  │  ├─ 📄ExpiringCache.js.map
│  │  │  │  │  │  ├─ 📄getProjectConfigFiles.d.ts
│  │  │  │  │  │  ├─ 📄getProjectConfigFiles.d.ts.map
│  │  │  │  │  │  ├─ 📄getProjectConfigFiles.js
│  │  │  │  │  │  ├─ 📄getProjectConfigFiles.js.map
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  ├─ 📄inferSingleRun.d.ts
│  │  │  │  │  │  ├─ 📄inferSingleRun.d.ts.map
│  │  │  │  │  │  ├─ 📄inferSingleRun.js
│  │  │  │  │  │  ├─ 📄inferSingleRun.js.map
│  │  │  │  │  │  ├─ 📄resolveProjectList.d.ts
│  │  │  │  │  │  ├─ 📄resolveProjectList.d.ts.map
│  │  │  │  │  │  ├─ 📄resolveProjectList.js
│  │  │  │  │  │  ├─ 📄resolveProjectList.js.map
│  │  │  │  │  │  ├─ 📄warnAboutTSVersion.d.ts
│  │  │  │  │  │  ├─ 📄warnAboutTSVersion.d.ts.map
│  │  │  │  │  │  ├─ 📄warnAboutTSVersion.js
│  │  │  │  │  │  └─ 📄warnAboutTSVersion.js.map
│  │  │  │  │  ├─ 📁ts-estree
│  │  │  │  │  │  ├─ 📄estree-to-ts-node-types.d.ts
│  │  │  │  │  │  ├─ 📄estree-to-ts-node-types.d.ts.map
│  │  │  │  │  │  ├─ 📄estree-to-ts-node-types.js
│  │  │  │  │  │  ├─ 📄estree-to-ts-node-types.js.map
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  ├─ 📄ts-nodes.d.ts
│  │  │  │  │  │  ├─ 📄ts-nodes.d.ts.map
│  │  │  │  │  │  ├─ 📄ts-nodes.js
│  │  │  │  │  │  └─ 📄ts-nodes.js.map
│  │  │  │  │  ├─ 📄ast-converter.d.ts
│  │  │  │  │  ├─ 📄ast-converter.d.ts.map
│  │  │  │  │  ├─ 📄ast-converter.js
│  │  │  │  │  ├─ 📄ast-converter.js.map
│  │  │  │  │  ├─ 📄clear-caches.d.ts
│  │  │  │  │  ├─ 📄clear-caches.d.ts.map
│  │  │  │  │  ├─ 📄clear-caches.js
│  │  │  │  │  ├─ 📄clear-caches.js.map
│  │  │  │  │  ├─ 📄convert-comments.d.ts
│  │  │  │  │  ├─ 📄convert-comments.d.ts.map
│  │  │  │  │  ├─ 📄convert-comments.js
│  │  │  │  │  ├─ 📄convert-comments.js.map
│  │  │  │  │  ├─ 📄convert.d.ts
│  │  │  │  │  ├─ 📄convert.d.ts.map
│  │  │  │  │  ├─ 📄convert.js
│  │  │  │  │  ├─ 📄convert.js.map
│  │  │  │  │  ├─ 📄createParserServices.d.ts
│  │  │  │  │  ├─ 📄createParserServices.d.ts.map
│  │  │  │  │  ├─ 📄createParserServices.js
│  │  │  │  │  ├─ 📄createParserServices.js.map
│  │  │  │  │  ├─ 📄getModifiers.d.ts
│  │  │  │  │  ├─ 📄getModifiers.d.ts.map
│  │  │  │  │  ├─ 📄getModifiers.js
│  │  │  │  │  ├─ 📄getModifiers.js.map
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  ├─ 📄node-utils.d.ts
│  │  │  │  │  ├─ 📄node-utils.d.ts.map
│  │  │  │  │  ├─ 📄node-utils.js
│  │  │  │  │  ├─ 📄node-utils.js.map
│  │  │  │  │  ├─ 📄parser-options.d.ts
│  │  │  │  │  ├─ 📄parser-options.d.ts.map
│  │  │  │  │  ├─ 📄parser-options.js
│  │  │  │  │  ├─ 📄parser-options.js.map
│  │  │  │  │  ├─ 📄parser.d.ts
│  │  │  │  │  ├─ 📄parser.d.ts.map
│  │  │  │  │  ├─ 📄parser.js
│  │  │  │  │  ├─ 📄parser.js.map
│  │  │  │  │  ├─ 📄semantic-or-syntactic-errors.d.ts
│  │  │  │  │  ├─ 📄semantic-or-syntactic-errors.d.ts.map
│  │  │  │  │  ├─ 📄semantic-or-syntactic-errors.js
│  │  │  │  │  ├─ 📄semantic-or-syntactic-errors.js.map
│  │  │  │  │  ├─ 📄simple-traverse.d.ts
│  │  │  │  │  ├─ 📄simple-traverse.d.ts.map
│  │  │  │  │  ├─ 📄simple-traverse.js
│  │  │  │  │  ├─ 📄simple-traverse.js.map
│  │  │  │  │  ├─ 📄source-files.d.ts
│  │  │  │  │  ├─ 📄source-files.d.ts.map
│  │  │  │  │  ├─ 📄source-files.js
│  │  │  │  │  ├─ 📄source-files.js.map
│  │  │  │  │  ├─ 📄use-at-your-own-risk.d.ts
│  │  │  │  │  ├─ 📄use-at-your-own-risk.d.ts.map
│  │  │  │  │  ├─ 📄use-at-your-own-risk.js
│  │  │  │  │  ├─ 📄use-at-your-own-risk.js.map
│  │  │  │  │  ├─ 📄useProgramFromProjectService.d.ts
│  │  │  │  │  ├─ 📄useProgramFromProjectService.d.ts.map
│  │  │  │  │  ├─ 📄useProgramFromProjectService.js
│  │  │  │  │  ├─ 📄useProgramFromProjectService.js.map
│  │  │  │  │  ├─ 📄version-check.d.ts
│  │  │  │  │  ├─ 📄version-check.d.ts.map
│  │  │  │  │  ├─ 📄version-check.js
│  │  │  │  │  ├─ 📄version-check.js.map
│  │  │  │  │  ├─ 📄withoutProjectParserOptions.d.ts
│  │  │  │  │  ├─ 📄withoutProjectParserOptions.d.ts.map
│  │  │  │  │  ├─ 📄withoutProjectParserOptions.js
│  │  │  │  │  └─ 📄withoutProjectParserOptions.js.map
│  │  │  │  ├─ 📁node_modules
│  │  │  │  │  └─ 📁.bin
│  │  │  │  │     ├─ 📄semver
│  │  │  │  │     ├─ 📄semver.CMD
│  │  │  │  │     ├─ 📄semver.ps1
│  │  │  │  │     ├─ 📄tsc
│  │  │  │  │     ├─ 📄tsc.CMD
│  │  │  │  │     ├─ 📄tsc.ps1
│  │  │  │  │     ├─ 📄tsserver
│  │  │  │  │     ├─ 📄tsserver.CMD
│  │  │  │  │     └─ 📄tsserver.ps1
│  │  │  │  ├─ 📄LICENSE
│  │  │  │  ├─ 📄package.json
│  │  │  │  └─ 📄README.md
│  │  │  ├─ 📁utils
│  │  │  │  ├─ 📁dist
│  │  │  │  │  ├─ 📁ast-utils
│  │  │  │  │  │  ├─ 📁eslint-utils
│  │  │  │  │  │  │  ├─ 📄astUtilities.d.ts
│  │  │  │  │  │  │  ├─ 📄astUtilities.d.ts.map
│  │  │  │  │  │  │  ├─ 📄astUtilities.js
│  │  │  │  │  │  │  ├─ 📄astUtilities.js.map
│  │  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  │  ├─ 📄PatternMatcher.d.ts
│  │  │  │  │  │  │  ├─ 📄PatternMatcher.d.ts.map
│  │  │  │  │  │  │  ├─ 📄PatternMatcher.js
│  │  │  │  │  │  │  ├─ 📄PatternMatcher.js.map
│  │  │  │  │  │  │  ├─ 📄predicates.d.ts
│  │  │  │  │  │  │  ├─ 📄predicates.d.ts.map
│  │  │  │  │  │  │  ├─ 📄predicates.js
│  │  │  │  │  │  │  ├─ 📄predicates.js.map
│  │  │  │  │  │  │  ├─ 📄ReferenceTracker.d.ts
│  │  │  │  │  │  │  ├─ 📄ReferenceTracker.d.ts.map
│  │  │  │  │  │  │  ├─ 📄ReferenceTracker.js
│  │  │  │  │  │  │  ├─ 📄ReferenceTracker.js.map
│  │  │  │  │  │  │  ├─ 📄scopeAnalysis.d.ts
│  │  │  │  │  │  │  ├─ 📄scopeAnalysis.d.ts.map
│  │  │  │  │  │  │  ├─ 📄scopeAnalysis.js
│  │  │  │  │  │  │  └─ 📄scopeAnalysis.js.map
│  │  │  │  │  │  ├─ 📄helpers.d.ts
│  │  │  │  │  │  ├─ 📄helpers.d.ts.map
│  │  │  │  │  │  ├─ 📄helpers.js
│  │  │  │  │  │  ├─ 📄helpers.js.map
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  ├─ 📄misc.d.ts
│  │  │  │  │  │  ├─ 📄misc.d.ts.map
│  │  │  │  │  │  ├─ 📄misc.js
│  │  │  │  │  │  ├─ 📄misc.js.map
│  │  │  │  │  │  ├─ 📄predicates.d.ts
│  │  │  │  │  │  ├─ 📄predicates.d.ts.map
│  │  │  │  │  │  ├─ 📄predicates.js
│  │  │  │  │  │  └─ 📄predicates.js.map
│  │  │  │  │  ├─ 📁eslint-utils
│  │  │  │  │  │  ├─ 📄applyDefault.d.ts
│  │  │  │  │  │  ├─ 📄applyDefault.d.ts.map
│  │  │  │  │  │  ├─ 📄applyDefault.js
│  │  │  │  │  │  ├─ 📄applyDefault.js.map
│  │  │  │  │  │  ├─ 📄deepMerge.d.ts
│  │  │  │  │  │  ├─ 📄deepMerge.d.ts.map
│  │  │  │  │  │  ├─ 📄deepMerge.js
│  │  │  │  │  │  ├─ 📄deepMerge.js.map
│  │  │  │  │  │  ├─ 📄getParserServices.d.ts
│  │  │  │  │  │  ├─ 📄getParserServices.d.ts.map
│  │  │  │  │  │  ├─ 📄getParserServices.js
│  │  │  │  │  │  ├─ 📄getParserServices.js.map
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  ├─ 📄InferTypesFromRule.d.ts
│  │  │  │  │  │  ├─ 📄InferTypesFromRule.d.ts.map
│  │  │  │  │  │  ├─ 📄InferTypesFromRule.js
│  │  │  │  │  │  ├─ 📄InferTypesFromRule.js.map
│  │  │  │  │  │  ├─ 📄nullThrows.d.ts
│  │  │  │  │  │  ├─ 📄nullThrows.d.ts.map
│  │  │  │  │  │  ├─ 📄nullThrows.js
│  │  │  │  │  │  ├─ 📄nullThrows.js.map
│  │  │  │  │  │  ├─ 📄parserSeemsToBeTSESLint.d.ts
│  │  │  │  │  │  ├─ 📄parserSeemsToBeTSESLint.d.ts.map
│  │  │  │  │  │  ├─ 📄parserSeemsToBeTSESLint.js
│  │  │  │  │  │  ├─ 📄parserSeemsToBeTSESLint.js.map
│  │  │  │  │  │  ├─ 📄RuleCreator.d.ts
│  │  │  │  │  │  ├─ 📄RuleCreator.d.ts.map
│  │  │  │  │  │  ├─ 📄RuleCreator.js
│  │  │  │  │  │  └─ 📄RuleCreator.js.map
│  │  │  │  │  ├─ 📁ts-eslint
│  │  │  │  │  │  ├─ 📁eslint
│  │  │  │  │  │  │  ├─ 📄ESLintShared.d.ts
│  │  │  │  │  │  │  ├─ 📄ESLintShared.d.ts.map
│  │  │  │  │  │  │  ├─ 📄ESLintShared.js
│  │  │  │  │  │  │  ├─ 📄ESLintShared.js.map
│  │  │  │  │  │  │  ├─ 📄FlatESLint.d.ts
│  │  │  │  │  │  │  ├─ 📄FlatESLint.d.ts.map
│  │  │  │  │  │  │  ├─ 📄FlatESLint.js
│  │  │  │  │  │  │  ├─ 📄FlatESLint.js.map
│  │  │  │  │  │  │  ├─ 📄LegacyESLint.d.ts
│  │  │  │  │  │  │  ├─ 📄LegacyESLint.d.ts.map
│  │  │  │  │  │  │  ├─ 📄LegacyESLint.js
│  │  │  │  │  │  │  └─ 📄LegacyESLint.js.map
│  │  │  │  │  │  ├─ 📄AST.d.ts
│  │  │  │  │  │  ├─ 📄AST.d.ts.map
│  │  │  │  │  │  ├─ 📄AST.js
│  │  │  │  │  │  ├─ 📄AST.js.map
│  │  │  │  │  │  ├─ 📄Config.d.ts
│  │  │  │  │  │  ├─ 📄Config.d.ts.map
│  │  │  │  │  │  ├─ 📄Config.js
│  │  │  │  │  │  ├─ 📄Config.js.map
│  │  │  │  │  │  ├─ 📄ESLint.d.ts
│  │  │  │  │  │  ├─ 📄ESLint.d.ts.map
│  │  │  │  │  │  ├─ 📄ESLint.js
│  │  │  │  │  │  ├─ 📄ESLint.js.map
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  ├─ 📄Linter.d.ts
│  │  │  │  │  │  ├─ 📄Linter.d.ts.map
│  │  │  │  │  │  ├─ 📄Linter.js
│  │  │  │  │  │  ├─ 📄Linter.js.map
│  │  │  │  │  │  ├─ 📄Parser.d.ts
│  │  │  │  │  │  ├─ 📄Parser.d.ts.map
│  │  │  │  │  │  ├─ 📄Parser.js
│  │  │  │  │  │  ├─ 📄Parser.js.map
│  │  │  │  │  │  ├─ 📄ParserOptions.d.ts
│  │  │  │  │  │  ├─ 📄ParserOptions.d.ts.map
│  │  │  │  │  │  ├─ 📄ParserOptions.js
│  │  │  │  │  │  ├─ 📄ParserOptions.js.map
│  │  │  │  │  │  ├─ 📄Processor.d.ts
│  │  │  │  │  │  ├─ 📄Processor.d.ts.map
│  │  │  │  │  │  ├─ 📄Processor.js
│  │  │  │  │  │  ├─ 📄Processor.js.map
│  │  │  │  │  │  ├─ 📄Rule.d.ts
│  │  │  │  │  │  ├─ 📄Rule.d.ts.map
│  │  │  │  │  │  ├─ 📄Rule.js
│  │  │  │  │  │  ├─ 📄Rule.js.map
│  │  │  │  │  │  ├─ 📄RuleTester.d.ts
│  │  │  │  │  │  ├─ 📄RuleTester.d.ts.map
│  │  │  │  │  │  ├─ 📄RuleTester.js
│  │  │  │  │  │  ├─ 📄RuleTester.js.map
│  │  │  │  │  │  ├─ 📄Scope.d.ts
│  │  │  │  │  │  ├─ 📄Scope.d.ts.map
│  │  │  │  │  │  ├─ 📄Scope.js
│  │  │  │  │  │  ├─ 📄Scope.js.map
│  │  │  │  │  │  ├─ 📄SourceCode.d.ts
│  │  │  │  │  │  ├─ 📄SourceCode.d.ts.map
│  │  │  │  │  │  ├─ 📄SourceCode.js
│  │  │  │  │  │  └─ 📄SourceCode.js.map
│  │  │  │  │  ├─ 📁ts-utils
│  │  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  │  ├─ 📄isArray.d.ts
│  │  │  │  │  │  ├─ 📄isArray.d.ts.map
│  │  │  │  │  │  ├─ 📄isArray.js
│  │  │  │  │  │  └─ 📄isArray.js.map
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄index.js.map
│  │  │  │  │  ├─ 📄json-schema.d.ts
│  │  │  │  │  ├─ 📄json-schema.d.ts.map
│  │  │  │  │  ├─ 📄json-schema.js
│  │  │  │  │  ├─ 📄json-schema.js.map
│  │  │  │  │  ├─ 📄ts-estree.d.ts
│  │  │  │  │  ├─ 📄ts-estree.d.ts.map
│  │  │  │  │  ├─ 📄ts-estree.js
│  │  │  │  │  └─ 📄ts-estree.js.map
│  │  │  │  ├─ 📁node_modules
│  │  │  │  │  └─ 📁.bin
│  │  │  │  │     ├─ 📄eslint
│  │  │  │  │     ├─ 📄eslint.CMD
│  │  │  │  │     └─ 📄eslint.ps1
│  │  │  │  ├─ 📄LICENSE
│  │  │  │  ├─ 📄package.json
│  │  │  │  └─ 📄README.md
│  │  │  └─ 📁visitor-keys
│  │  │     ├─ 📁dist
│  │  │     │  ├─ 📄get-keys.d.ts
│  │  │     │  ├─ 📄get-keys.d.ts.map
│  │  │     │  ├─ 📄get-keys.js
│  │  │     │  ├─ 📄get-keys.js.map
│  │  │     │  ├─ 📄index.d.ts
│  │  │     │  ├─ 📄index.d.ts.map
│  │  │     │  ├─ 📄index.js
│  │  │     │  ├─ 📄index.js.map
│  │  │     │  ├─ 📄visitor-keys.d.ts
│  │  │     │  ├─ 📄visitor-keys.d.ts.map
│  │  │     │  ├─ 📄visitor-keys.js
│  │  │     │  └─ 📄visitor-keys.js.map
│  │  │     ├─ 📄LICENSE
│  │  │     ├─ 📄package.json
│  │  │     └─ 📄README.md
│  │  ├─ 📁@vitejs
│  │  │  └─ 📁plugin-react-swc
│  │  │     ├─ 📁node_modules
│  │  │     │  └─ 📁.bin
│  │  │     │     ├─ 📄vite
│  │  │     │     ├─ 📄vite.CMD
│  │  │     │     └─ 📄vite.ps1
│  │  │     ├─ 📄index.cjs
│  │  │     ├─ 📄index.d.ts
│  │  │     ├─ 📄index.mjs
│  │  │     ├─ 📄LICENSE
│  │  │     ├─ 📄package.json
│  │  │     ├─ 📄README.md
│  │  │     └─ 📄refresh-runtime.js
│  │  ├─ 📁eslint
│  │  │  ├─ 📁bin
│  │  │  │  └─ 📄eslint.js
│  │  │  ├─ 📁conf
│  │  │  │  ├─ 📄default-cli-options.js
│  │  │  │  ├─ 📄ecma-version.js
│  │  │  │  ├─ 📄globals.js
│  │  │  │  ├─ 📄replacements.json
│  │  │  │  └─ 📄rule-type-list.json
│  │  │  ├─ 📁lib
│  │  │  │  ├─ 📁cli-engine
│  │  │  │  │  ├─ 📁formatters
│  │  │  │  │  │  ├─ 📄formatters-meta.json
│  │  │  │  │  │  ├─ 📄html.js
│  │  │  │  │  │  ├─ 📄json-with-metadata.js
│  │  │  │  │  │  ├─ 📄json.js
│  │  │  │  │  │  └─ 📄stylish.js
│  │  │  │  │  ├─ 📄cli-engine.js
│  │  │  │  │  ├─ 📄file-enumerator.js
│  │  │  │  │  ├─ 📄hash.js
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄lint-result-cache.js
│  │  │  │  │  └─ 📄load-rules.js
│  │  │  │  ├─ 📁config
│  │  │  │  │  ├─ 📄default-config.js
│  │  │  │  │  ├─ 📄flat-config-array.js
│  │  │  │  │  ├─ 📄flat-config-helpers.js
│  │  │  │  │  ├─ 📄flat-config-schema.js
│  │  │  │  │  └─ 📄rule-validator.js
│  │  │  │  ├─ 📁eslint
│  │  │  │  │  ├─ 📄eslint-helpers.js
│  │  │  │  │  ├─ 📄eslint.js
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  └─ 📄legacy-eslint.js
│  │  │  │  ├─ 📁languages
│  │  │  │  │  └─ 📁js
│  │  │  │  │     ├─ 📁source-code
│  │  │  │  │     │  ├─ 📁token-store
│  │  │  │  │     │  │  ├─ 📄backward-token-comment-cursor.js
│  │  │  │  │     │  │  ├─ 📄backward-token-cursor.js
│  │  │  │  │     │  │  ├─ 📄cursor.js
│  │  │  │  │     │  │  ├─ 📄cursors.js
│  │  │  │  │     │  │  ├─ 📄decorative-cursor.js
│  │  │  │  │     │  │  ├─ 📄filter-cursor.js
│  │  │  │  │     │  │  ├─ 📄forward-token-comment-cursor.js
│  │  │  │  │     │  │  ├─ 📄forward-token-cursor.js
│  │  │  │  │     │  │  ├─ 📄index.js
│  │  │  │  │     │  │  ├─ 📄limit-cursor.js
│  │  │  │  │     │  │  ├─ 📄padded-token-cursor.js
│  │  │  │  │     │  │  ├─ 📄skip-cursor.js
│  │  │  │  │     │  │  └─ 📄utils.js
│  │  │  │  │     │  ├─ 📄index.js
│  │  │  │  │     │  └─ 📄source-code.js
│  │  │  │  │     ├─ 📄index.js
│  │  │  │  │     └─ 📄validate-language-options.js
│  │  │  │  ├─ 📁linter
│  │  │  │  │  ├─ 📁code-path-analysis
│  │  │  │  │  │  ├─ 📄code-path-analyzer.js
│  │  │  │  │  │  ├─ 📄code-path-segment.js
│  │  │  │  │  │  ├─ 📄code-path-state.js
│  │  │  │  │  │  ├─ 📄code-path.js
│  │  │  │  │  │  ├─ 📄debug-helpers.js
│  │  │  │  │  │  ├─ 📄fork-context.js
│  │  │  │  │  │  └─ 📄id-generator.js
│  │  │  │  │  ├─ 📄apply-disable-directives.js
│  │  │  │  │  ├─ 📄config-comment-parser.js
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄interpolate.js
│  │  │  │  │  ├─ 📄linter.js
│  │  │  │  │  ├─ 📄node-event-generator.js
│  │  │  │  │  ├─ 📄report-translator.js
│  │  │  │  │  ├─ 📄rule-fixer.js
│  │  │  │  │  ├─ 📄rules.js
│  │  │  │  │  ├─ 📄safe-emitter.js
│  │  │  │  │  ├─ 📄source-code-fixer.js
│  │  │  │  │  ├─ 📄timing.js
│  │  │  │  │  └─ 📄vfile.js
│  │  │  │  ├─ 📁rule-tester
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  └─ 📄rule-tester.js
│  │  │  │  ├─ 📁rules
│  │  │  │  │  ├─ 📁utils
│  │  │  │  │  │  ├─ 📁unicode
│  │  │  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  │  │  ├─ 📄is-combining-character.js
│  │  │  │  │  │  │  ├─ 📄is-emoji-modifier.js
│  │  │  │  │  │  │  ├─ 📄is-regional-indicator-symbol.js
│  │  │  │  │  │  │  └─ 📄is-surrogate-pair.js
│  │  │  │  │  │  ├─ 📄ast-utils.js
│  │  │  │  │  │  ├─ 📄char-source.js
│  │  │  │  │  │  ├─ 📄fix-tracker.js
│  │  │  │  │  │  ├─ 📄keywords.js
│  │  │  │  │  │  ├─ 📄lazy-loading-rule-map.js
│  │  │  │  │  │  └─ 📄regular-expressions.js
│  │  │  │  │  ├─ 📄accessor-pairs.js
│  │  │  │  │  ├─ 📄array-bracket-newline.js
│  │  │  │  │  ├─ 📄array-bracket-spacing.js
│  │  │  │  │  ├─ 📄array-callback-return.js
│  │  │  │  │  ├─ 📄array-element-newline.js
│  │  │  │  │  ├─ 📄arrow-body-style.js
│  │  │  │  │  ├─ 📄arrow-parens.js
│  │  │  │  │  ├─ 📄arrow-spacing.js
│  │  │  │  │  ├─ 📄block-scoped-var.js
│  │  │  │  │  ├─ 📄block-spacing.js
│  │  │  │  │  ├─ 📄brace-style.js
│  │  │  │  │  ├─ 📄callback-return.js
│  │  │  │  │  ├─ 📄camelcase.js
│  │  │  │  │  ├─ 📄capitalized-comments.js
│  │  │  │  │  ├─ 📄class-methods-use-this.js
│  │  │  │  │  ├─ 📄comma-dangle.js
│  │  │  │  │  ├─ 📄comma-spacing.js
│  │  │  │  │  ├─ 📄comma-style.js
│  │  │  │  │  ├─ 📄complexity.js
│  │  │  │  │  ├─ 📄computed-property-spacing.js
│  │  │  │  │  ├─ 📄consistent-return.js
│  │  │  │  │  ├─ 📄consistent-this.js
│  │  │  │  │  ├─ 📄constructor-super.js
│  │  │  │  │  ├─ 📄curly.js
│  │  │  │  │  ├─ 📄default-case-last.js
│  │  │  │  │  ├─ 📄default-case.js
│  │  │  │  │  ├─ 📄default-param-last.js
│  │  │  │  │  ├─ 📄dot-location.js
│  │  │  │  │  ├─ 📄dot-notation.js
│  │  │  │  │  ├─ 📄eol-last.js
│  │  │  │  │  ├─ 📄eqeqeq.js
│  │  │  │  │  ├─ 📄for-direction.js
│  │  │  │  │  ├─ 📄func-call-spacing.js
│  │  │  │  │  ├─ 📄func-name-matching.js
│  │  │  │  │  ├─ 📄func-names.js
│  │  │  │  │  ├─ 📄func-style.js
│  │  │  │  │  ├─ 📄function-call-argument-newline.js
│  │  │  │  │  ├─ 📄function-paren-newline.js
│  │  │  │  │  ├─ 📄generator-star-spacing.js
│  │  │  │  │  ├─ 📄getter-return.js
│  │  │  │  │  ├─ 📄global-require.js
│  │  │  │  │  ├─ 📄grouped-accessor-pairs.js
│  │  │  │  │  ├─ 📄guard-for-in.js
│  │  │  │  │  ├─ 📄handle-callback-err.js
│  │  │  │  │  ├─ 📄id-blacklist.js
│  │  │  │  │  ├─ 📄id-denylist.js
│  │  │  │  │  ├─ 📄id-length.js
│  │  │  │  │  ├─ 📄id-match.js
│  │  │  │  │  ├─ 📄implicit-arrow-linebreak.js
│  │  │  │  │  ├─ 📄indent-legacy.js
│  │  │  │  │  ├─ 📄indent.js
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄init-declarations.js
│  │  │  │  │  ├─ 📄jsx-quotes.js
│  │  │  │  │  ├─ 📄key-spacing.js
│  │  │  │  │  ├─ 📄keyword-spacing.js
│  │  │  │  │  ├─ 📄line-comment-position.js
│  │  │  │  │  ├─ 📄linebreak-style.js
│  │  │  │  │  ├─ 📄lines-around-comment.js
│  │  │  │  │  ├─ 📄lines-around-directive.js
│  │  │  │  │  ├─ 📄lines-between-class-members.js
│  │  │  │  │  ├─ 📄logical-assignment-operators.js
│  │  │  │  │  ├─ 📄max-classes-per-file.js
│  │  │  │  │  ├─ 📄max-depth.js
│  │  │  │  │  ├─ 📄max-len.js
│  │  │  │  │  ├─ 📄max-lines-per-function.js
│  │  │  │  │  ├─ 📄max-lines.js
│  │  │  │  │  ├─ 📄max-nested-callbacks.js
│  │  │  │  │  ├─ 📄max-params.js
│  │  │  │  │  ├─ 📄max-statements-per-line.js
│  │  │  │  │  ├─ 📄max-statements.js
│  │  │  │  │  ├─ 📄multiline-comment-style.js
│  │  │  │  │  ├─ 📄multiline-ternary.js
│  │  │  │  │  ├─ 📄new-cap.js
│  │  │  │  │  ├─ 📄new-parens.js
│  │  │  │  │  ├─ 📄newline-after-var.js
│  │  │  │  │  ├─ 📄newline-before-return.js
│  │  │  │  │  ├─ 📄newline-per-chained-call.js
│  │  │  │  │  ├─ 📄no-alert.js
│  │  │  │  │  ├─ 📄no-array-constructor.js
│  │  │  │  │  ├─ 📄no-async-promise-executor.js
│  │  │  │  │  ├─ 📄no-await-in-loop.js
│  │  │  │  │  ├─ 📄no-bitwise.js
│  │  │  │  │  ├─ 📄no-buffer-constructor.js
│  │  │  │  │  ├─ 📄no-caller.js
│  │  │  │  │  ├─ 📄no-case-declarations.js
│  │  │  │  │  ├─ 📄no-catch-shadow.js
│  │  │  │  │  ├─ 📄no-class-assign.js
│  │  │  │  │  ├─ 📄no-compare-neg-zero.js
│  │  │  │  │  ├─ 📄no-cond-assign.js
│  │  │  │  │  ├─ 📄no-confusing-arrow.js
│  │  │  │  │  ├─ 📄no-console.js
│  │  │  │  │  ├─ 📄no-const-assign.js
│  │  │  │  │  ├─ 📄no-constant-binary-expression.js
│  │  │  │  │  ├─ 📄no-constant-condition.js
│  │  │  │  │  ├─ 📄no-constructor-return.js
│  │  │  │  │  ├─ 📄no-continue.js
│  │  │  │  │  ├─ 📄no-control-regex.js
│  │  │  │  │  ├─ 📄no-debugger.js
│  │  │  │  │  ├─ 📄no-delete-var.js
│  │  │  │  │  ├─ 📄no-div-regex.js
│  │  │  │  │  ├─ 📄no-dupe-args.js
│  │  │  │  │  ├─ 📄no-dupe-class-members.js
│  │  │  │  │  ├─ 📄no-dupe-else-if.js
│  │  │  │  │  ├─ 📄no-dupe-keys.js
│  │  │  │  │  ├─ 📄no-duplicate-case.js
│  │  │  │  │  ├─ 📄no-duplicate-imports.js
│  │  │  │  │  ├─ 📄no-else-return.js
│  │  │  │  │  ├─ 📄no-empty-character-class.js
│  │  │  │  │  ├─ 📄no-empty-function.js
│  │  │  │  │  ├─ 📄no-empty-pattern.js
│  │  │  │  │  ├─ 📄no-empty-static-block.js
│  │  │  │  │  ├─ 📄no-empty.js
│  │  │  │  │  ├─ 📄no-eq-null.js
│  │  │  │  │  ├─ 📄no-eval.js
│  │  │  │  │  ├─ 📄no-ex-assign.js
│  │  │  │  │  ├─ 📄no-extend-native.js
│  │  │  │  │  ├─ 📄no-extra-bind.js
│  │  │  │  │  ├─ 📄no-extra-boolean-cast.js
│  │  │  │  │  ├─ 📄no-extra-label.js
│  │  │  │  │  ├─ 📄no-extra-parens.js
│  │  │  │  │  ├─ 📄no-extra-semi.js
│  │  │  │  │  ├─ 📄no-fallthrough.js
│  │  │  │  │  ├─ 📄no-floating-decimal.js
│  │  │  │  │  ├─ 📄no-func-assign.js
│  │  │  │  │  ├─ 📄no-global-assign.js
│  │  │  │  │  ├─ 📄no-implicit-coercion.js
│  │  │  │  │  ├─ 📄no-implicit-globals.js
│  │  │  │  │  ├─ 📄no-implied-eval.js
│  │  │  │  │  ├─ 📄no-import-assign.js
│  │  │  │  │  ├─ 📄no-inline-comments.js
│  │  │  │  │  ├─ 📄no-inner-declarations.js
│  │  │  │  │  ├─ 📄no-invalid-regexp.js
│  │  │  │  │  ├─ 📄no-invalid-this.js
│  │  │  │  │  ├─ 📄no-irregular-whitespace.js
│  │  │  │  │  ├─ 📄no-iterator.js
│  │  │  │  │  ├─ 📄no-label-var.js
│  │  │  │  │  ├─ 📄no-labels.js
│  │  │  │  │  ├─ 📄no-lone-blocks.js
│  │  │  │  │  ├─ 📄no-lonely-if.js
│  │  │  │  │  ├─ 📄no-loop-func.js
│  │  │  │  │  ├─ 📄no-loss-of-precision.js
│  │  │  │  │  ├─ 📄no-magic-numbers.js
│  │  │  │  │  ├─ 📄no-misleading-character-class.js
│  │  │  │  │  ├─ 📄no-mixed-operators.js
│  │  │  │  │  ├─ 📄no-mixed-requires.js
│  │  │  │  │  ├─ 📄no-mixed-spaces-and-tabs.js
│  │  │  │  │  ├─ 📄no-multi-assign.js
│  │  │  │  │  ├─ 📄no-multi-spaces.js
│  │  │  │  │  ├─ 📄no-multi-str.js
│  │  │  │  │  ├─ 📄no-multiple-empty-lines.js
│  │  │  │  │  ├─ 📄no-native-reassign.js
│  │  │  │  │  ├─ 📄no-negated-condition.js
│  │  │  │  │  ├─ 📄no-negated-in-lhs.js
│  │  │  │  │  ├─ 📄no-nested-ternary.js
│  │  │  │  │  ├─ 📄no-new-func.js
│  │  │  │  │  ├─ 📄no-new-native-nonconstructor.js
│  │  │  │  │  ├─ 📄no-new-object.js
│  │  │  │  │  ├─ 📄no-new-require.js
│  │  │  │  │  ├─ 📄no-new-symbol.js
│  │  │  │  │  ├─ 📄no-new-wrappers.js
│  │  │  │  │  ├─ 📄no-new.js
│  │  │  │  │  ├─ 📄no-nonoctal-decimal-escape.js
│  │  │  │  │  ├─ 📄no-obj-calls.js
│  │  │  │  │  ├─ 📄no-object-constructor.js
│  │  │  │  │  ├─ 📄no-octal-escape.js
│  │  │  │  │  ├─ 📄no-octal.js
│  │  │  │  │  ├─ 📄no-param-reassign.js
│  │  │  │  │  ├─ 📄no-path-concat.js
│  │  │  │  │  ├─ 📄no-plusplus.js
│  │  │  │  │  ├─ 📄no-process-env.js
│  │  │  │  │  ├─ 📄no-process-exit.js
│  │  │  │  │  ├─ 📄no-promise-executor-return.js
│  │  │  │  │  ├─ 📄no-proto.js
│  │  │  │  │  ├─ 📄no-prototype-builtins.js
│  │  │  │  │  ├─ 📄no-redeclare.js
│  │  │  │  │  ├─ 📄no-regex-spaces.js
│  │  │  │  │  ├─ 📄no-restricted-exports.js
│  │  │  │  │  ├─ 📄no-restricted-globals.js
│  │  │  │  │  ├─ 📄no-restricted-imports.js
│  │  │  │  │  ├─ 📄no-restricted-modules.js
│  │  │  │  │  ├─ 📄no-restricted-properties.js
│  │  │  │  │  ├─ 📄no-restricted-syntax.js
│  │  │  │  │  ├─ 📄no-return-assign.js
│  │  │  │  │  ├─ 📄no-return-await.js
│  │  │  │  │  ├─ 📄no-script-url.js
│  │  │  │  │  ├─ 📄no-self-assign.js
│  │  │  │  │  ├─ 📄no-self-compare.js
│  │  │  │  │  ├─ 📄no-sequences.js
│  │  │  │  │  ├─ 📄no-setter-return.js
│  │  │  │  │  ├─ 📄no-shadow-restricted-names.js
│  │  │  │  │  ├─ 📄no-shadow.js
│  │  │  │  │  ├─ 📄no-spaced-func.js
│  │  │  │  │  ├─ 📄no-sparse-arrays.js
│  │  │  │  │  ├─ 📄no-sync.js
│  │  │  │  │  ├─ 📄no-tabs.js
│  │  │  │  │  ├─ 📄no-template-curly-in-string.js
│  │  │  │  │  ├─ 📄no-ternary.js
│  │  │  │  │  ├─ 📄no-this-before-super.js
│  │  │  │  │  ├─ 📄no-throw-literal.js
│  │  │  │  │  ├─ 📄no-trailing-spaces.js
│  │  │  │  │  ├─ 📄no-undef-init.js
│  │  │  │  │  ├─ 📄no-undef.js
│  │  │  │  │  ├─ 📄no-undefined.js
│  │  │  │  │  ├─ 📄no-underscore-dangle.js
│  │  │  │  │  ├─ 📄no-unexpected-multiline.js
│  │  │  │  │  ├─ 📄no-unmodified-loop-condition.js
│  │  │  │  │  ├─ 📄no-unneeded-ternary.js
│  │  │  │  │  ├─ 📄no-unreachable-loop.js
│  │  │  │  │  ├─ 📄no-unreachable.js
│  │  │  │  │  ├─ 📄no-unsafe-finally.js
│  │  │  │  │  ├─ 📄no-unsafe-negation.js
│  │  │  │  │  ├─ 📄no-unsafe-optional-chaining.js
│  │  │  │  │  ├─ 📄no-unused-expressions.js
│  │  │  │  │  ├─ 📄no-unused-labels.js
│  │  │  │  │  ├─ 📄no-unused-private-class-members.js
│  │  │  │  │  ├─ 📄no-unused-vars.js
│  │  │  │  │  ├─ 📄no-use-before-define.js
│  │  │  │  │  ├─ 📄no-useless-assignment.js
│  │  │  │  │  ├─ 📄no-useless-backreference.js
│  │  │  │  │  ├─ 📄no-useless-call.js
│  │  │  │  │  ├─ 📄no-useless-catch.js
│  │  │  │  │  ├─ 📄no-useless-computed-key.js
│  │  │  │  │  ├─ 📄no-useless-concat.js
│  │  │  │  │  ├─ 📄no-useless-constructor.js
│  │  │  │  │  ├─ 📄no-useless-escape.js
│  │  │  │  │  ├─ 📄no-useless-rename.js
│  │  │  │  │  ├─ 📄no-useless-return.js
│  │  │  │  │  ├─ 📄no-var.js
│  │  │  │  │  ├─ 📄no-void.js
│  │  │  │  │  ├─ 📄no-warning-comments.js
│  │  │  │  │  ├─ 📄no-whitespace-before-property.js
│  │  │  │  │  ├─ 📄no-with.js
│  │  │  │  │  ├─ 📄nonblock-statement-body-position.js
│  │  │  │  │  ├─ 📄object-curly-newline.js
│  │  │  │  │  ├─ 📄object-curly-spacing.js
│  │  │  │  │  ├─ 📄object-property-newline.js
│  │  │  │  │  ├─ 📄object-shorthand.js
│  │  │  │  │  ├─ 📄one-var-declaration-per-line.js
│  │  │  │  │  ├─ 📄one-var.js
│  │  │  │  │  ├─ 📄operator-assignment.js
│  │  │  │  │  ├─ 📄operator-linebreak.js
│  │  │  │  │  ├─ 📄padded-blocks.js
│  │  │  │  │  ├─ 📄padding-line-between-statements.js
│  │  │  │  │  ├─ 📄prefer-arrow-callback.js
│  │  │  │  │  ├─ 📄prefer-const.js
│  │  │  │  │  ├─ 📄prefer-destructuring.js
│  │  │  │  │  ├─ 📄prefer-exponentiation-operator.js
│  │  │  │  │  ├─ 📄prefer-named-capture-group.js
│  │  │  │  │  ├─ 📄prefer-numeric-literals.js
│  │  │  │  │  ├─ 📄prefer-object-has-own.js
│  │  │  │  │  ├─ 📄prefer-object-spread.js
│  │  │  │  │  ├─ 📄prefer-promise-reject-errors.js
│  │  │  │  │  ├─ 📄prefer-reflect.js
│  │  │  │  │  ├─ 📄prefer-regex-literals.js
│  │  │  │  │  ├─ 📄prefer-rest-params.js
│  │  │  │  │  ├─ 📄prefer-spread.js
│  │  │  │  │  ├─ 📄prefer-template.js
│  │  │  │  │  ├─ 📄quote-props.js
│  │  │  │  │  ├─ 📄quotes.js
│  │  │  │  │  ├─ 📄radix.js
│  │  │  │  │  ├─ 📄require-atomic-updates.js
│  │  │  │  │  ├─ 📄require-await.js
│  │  │  │  │  ├─ 📄require-unicode-regexp.js
│  │  │  │  │  ├─ 📄require-yield.js
│  │  │  │  │  ├─ 📄rest-spread-spacing.js
│  │  │  │  │  ├─ 📄semi-spacing.js
│  │  │  │  │  ├─ 📄semi-style.js
│  │  │  │  │  ├─ 📄semi.js
│  │  │  │  │  ├─ 📄sort-imports.js
│  │  │  │  │  ├─ 📄sort-keys.js
│  │  │  │  │  ├─ 📄sort-vars.js
│  │  │  │  │  ├─ 📄space-before-blocks.js
│  │  │  │  │  ├─ 📄space-before-function-paren.js
│  │  │  │  │  ├─ 📄space-in-parens.js
│  │  │  │  │  ├─ 📄space-infix-ops.js
│  │  │  │  │  ├─ 📄space-unary-ops.js
│  │  │  │  │  ├─ 📄spaced-comment.js
│  │  │  │  │  ├─ 📄strict.js
│  │  │  │  │  ├─ 📄switch-colon-spacing.js
│  │  │  │  │  ├─ 📄symbol-description.js
│  │  │  │  │  ├─ 📄template-curly-spacing.js
│  │  │  │  │  ├─ 📄template-tag-spacing.js
│  │  │  │  │  ├─ 📄unicode-bom.js
│  │  │  │  │  ├─ 📄use-isnan.js
│  │  │  │  │  ├─ 📄valid-typeof.js
│  │  │  │  │  ├─ 📄vars-on-top.js
│  │  │  │  │  ├─ 📄wrap-iife.js
│  │  │  │  │  ├─ 📄wrap-regex.js
│  │  │  │  │  ├─ 📄yield-star-spacing.js
│  │  │  │  │  └─ 📄yoda.js
│  │  │  │  ├─ 📁shared
│  │  │  │  │  ├─ 📄ajv.js
│  │  │  │  │  ├─ 📄ast-utils.js
│  │  │  │  │  ├─ 📄directives.js
│  │  │  │  │  ├─ 📄flags.js
│  │  │  │  │  ├─ 📄logging.js
│  │  │  │  │  ├─ 📄runtime-info.js
│  │  │  │  │  ├─ 📄serialization.js
│  │  │  │  │  ├─ 📄severity.js
│  │  │  │  │  ├─ 📄stats.js
│  │  │  │  │  ├─ 📄string-utils.js
│  │  │  │  │  ├─ 📄traverser.js
│  │  │  │  │  └─ 📄types.js
│  │  │  │  ├─ 📄api.js
│  │  │  │  ├─ 📄cli.js
│  │  │  │  ├─ 📄options.js
│  │  │  │  └─ 📄unsupported-api.js
│  │  │  ├─ 📁messages
│  │  │  │  ├─ 📄all-files-ignored.js
│  │  │  │  ├─ 📄all-matched-files-ignored.js
│  │  │  │  ├─ 📄config-file-missing.js
│  │  │  │  ├─ 📄eslintrc-incompat.js
│  │  │  │  ├─ 📄eslintrc-plugins.js
│  │  │  │  ├─ 📄extend-config-missing.js
│  │  │  │  ├─ 📄failed-to-read-json.js
│  │  │  │  ├─ 📄file-not-found.js
│  │  │  │  ├─ 📄invalid-rule-options.js
│  │  │  │  ├─ 📄invalid-rule-severity.js
│  │  │  │  ├─ 📄no-config-found.js
│  │  │  │  ├─ 📄plugin-conflict.js
│  │  │  │  ├─ 📄plugin-invalid.js
│  │  │  │  ├─ 📄plugin-missing.js
│  │  │  │  ├─ 📄print-config-with-directory-path.js
│  │  │  │  ├─ 📄shared.js
│  │  │  │  └─ 📄whitespace-found.js
│  │  │  ├─ 📄LICENSE
│  │  │  ├─ 📄package.json
│  │  │  └─ 📄README.md
│  │  ├─ 📁eslint-plugin-react-hooks
│  │  │  ├─ 📁cjs
│  │  │  │  ├─ 📄eslint-plugin-react-hooks.development.js
│  │  │  │  └─ 📄eslint-plugin-react-hooks.production.js
│  │  │  ├─ 📁node_modules
│  │  │  │  └─ 📁.bin
│  │  │  │     ├─ 📄eslint
│  │  │  │     ├─ 📄eslint.CMD
│  │  │  │     └─ 📄eslint.ps1
│  │  │  ├─ 📄index.js
│  │  │  ├─ 📄LICENSE
│  │  │  ├─ 📄package.json
│  │  │  └─ 📄README.md
│  │  ├─ 📁eslint-plugin-react-refresh
│  │  │  ├─ 📁node_modules
│  │  │  │  └─ 📁.bin
│  │  │  │     ├─ 📄eslint
│  │  │  │     ├─ 📄eslint.CMD
│  │  │  │     └─ 📄eslint.ps1
│  │  │  ├─ 📄index.js
│  │  │  ├─ 📄LICENSE
│  │  │  ├─ 📄package.json
│  │  │  └─ 📄README.md
│  │  ├─ 📁eslint-scope
│  │  │  ├─ 📁dist
│  │  │  │  └─ 📄eslint-scope.cjs
│  │  │  ├─ 📁lib
│  │  │  │  ├─ 📄definition.js
│  │  │  │  ├─ 📄index.js
│  │  │  │  ├─ 📄pattern-visitor.js
│  │  │  │  ├─ 📄reference.js
│  │  │  │  ├─ 📄referencer.js
│  │  │  │  ├─ 📄scope-manager.js
│  │  │  │  ├─ 📄scope.js
│  │  │  │  ├─ 📄variable.js
│  │  │  │  └─ 📄version.js
│  │  │  ├─ 📄LICENSE
│  │  │  ├─ 📄package.json
│  │  │  └─ 📄README.md
│  │  ├─ 📁eslint-visitor-keys
│  │  │  ├─ 📁dist
│  │  │  │  ├─ 📄eslint-visitor-keys.cjs
│  │  │  │  ├─ 📄eslint-visitor-keys.d.cts
│  │  │  │  ├─ 📄index.d.ts
│  │  │  │  └─ 📄visitor-keys.d.ts
│  │  │  ├─ 📁lib
│  │  │  │  ├─ 📄index.js
│  │  │  │  └─ 📄visitor-keys.js
│  │  │  ├─ 📄LICENSE
│  │  │  ├─ 📄package.json
│  │  │  └─ 📄README.md
│  │  ├─ 📁globals
│  │  │  ├─ 📄globals.json
│  │  │  ├─ 📄index.d.ts
│  │  │  ├─ 📄index.js
│  │  │  ├─ 📄license
│  │  │  ├─ 📄package.json
│  │  │  └─ 📄readme.md
│  │  ├─ 📁react
│  │  │  ├─ 📁cjs
│  │  │  │  ├─ 📄react-jsx-dev-runtime.development.js
│  │  │  │  ├─ 📄react-jsx-dev-runtime.production.min.js
│  │  │  │  ├─ 📄react-jsx-dev-runtime.profiling.min.js
│  │  │  │  ├─ 📄react-jsx-runtime.development.js
│  │  │  │  ├─ 📄react-jsx-runtime.production.min.js
│  │  │  │  ├─ 📄react-jsx-runtime.profiling.min.js
│  │  │  │  ├─ 📄react.development.js
│  │  │  │  ├─ 📄react.production.min.js
│  │  │  │  ├─ 📄react.shared-subset.development.js
│  │  │  │  └─ 📄react.shared-subset.production.min.js
│  │  │  ├─ 📁node_modules
│  │  │  │  └─ 📁.bin
│  │  │  │     ├─ 📄loose-envify
│  │  │  │     ├─ 📄loose-envify.CMD
│  │  │  │     └─ 📄loose-envify.ps1
│  │  │  ├─ 📁umd
│  │  │  │  ├─ 📄react.development.js
│  │  │  │  ├─ 📄react.production.min.js
│  │  │  │  └─ 📄react.profiling.min.js
│  │  │  ├─ 📄index.js
│  │  │  ├─ 📄jsx-dev-runtime.js
│  │  │  ├─ 📄jsx-runtime.js
│  │  │  ├─ 📄LICENSE
│  │  │  ├─ 📄package.json
│  │  │  ├─ 📄react.shared-subset.js
│  │  │  └─ 📄README.md
│  │  ├─ 📁react-dom
│  │  │  ├─ 📁cjs
│  │  │  │  ├─ 📄react-dom-server-legacy.browser.development.js
│  │  │  │  ├─ 📄react-dom-server-legacy.browser.production.min.js
│  │  │  │  ├─ 📄react-dom-server-legacy.node.development.js
│  │  │  │  ├─ 📄react-dom-server-legacy.node.production.min.js
│  │  │  │  ├─ 📄react-dom-server.browser.development.js
│  │  │  │  ├─ 📄react-dom-server.browser.production.min.js
│  │  │  │  ├─ 📄react-dom-server.node.development.js
│  │  │  │  ├─ 📄react-dom-server.node.production.min.js
│  │  │  │  ├─ 📄react-dom-test-utils.development.js
│  │  │  │  ├─ 📄react-dom-test-utils.production.min.js
│  │  │  │  ├─ 📄react-dom.development.js
│  │  │  │  ├─ 📄react-dom.production.min.js
│  │  │  │  └─ 📄react-dom.profiling.min.js
│  │  │  ├─ 📁node_modules
│  │  │  │  └─ 📁.bin
│  │  │  │     ├─ 📄loose-envify
│  │  │  │     ├─ 📄loose-envify.CMD
│  │  │  │     └─ 📄loose-envify.ps1
│  │  │  ├─ 📁umd
│  │  │  │  ├─ 📄react-dom-server-legacy.browser.development.js
│  │  │  │  ├─ 📄react-dom-server-legacy.browser.production.min.js
│  │  │  │  ├─ 📄react-dom-server.browser.development.js
│  │  │  │  ├─ 📄react-dom-server.browser.production.min.js
│  │  │  │  ├─ 📄react-dom-test-utils.development.js
│  │  │  │  ├─ 📄react-dom-test-utils.production.min.js
│  │  │  │  ├─ 📄react-dom.development.js
│  │  │  │  ├─ 📄react-dom.production.min.js
│  │  │  │  └─ 📄react-dom.profiling.min.js
│  │  │  ├─ 📄client.js
│  │  │  ├─ 📄index.js
│  │  │  ├─ 📄LICENSE
│  │  │  ├─ 📄package.json
│  │  │  ├─ 📄profiling.js
│  │  │  ├─ 📄README.md
│  │  │  ├─ 📄server.browser.js
│  │  │  ├─ 📄server.js
│  │  │  ├─ 📄server.node.js
│  │  │  └─ 📄test-utils.js
│  │  ├─ 📁typescript
│  │  │  ├─ 📁bin
│  │  │  │  ├─ 📄tsc
│  │  │  │  └─ 📄tsserver
│  │  │  ├─ 📁lib
│  │  │  │  ├─ 📁cs
│  │  │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │  ├─ 📁de
│  │  │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │  ├─ 📁es
│  │  │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │  ├─ 📁fr
│  │  │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │  ├─ 📁it
│  │  │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │  ├─ 📁ja
│  │  │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │  ├─ 📁ko
│  │  │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │  ├─ 📁pl
│  │  │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │  ├─ 📁pt-br
│  │  │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │  ├─ 📁ru
│  │  │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │  ├─ 📁tr
│  │  │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │  ├─ 📁zh-cn
│  │  │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │  ├─ 📁zh-tw
│  │  │  │  │  └─ 📄diagnosticMessages.generated.json
│  │  │  │  ├─ 📄cancellationToken.js
│  │  │  │  ├─ 📄lib.d.ts
│  │  │  │  ├─ 📄lib.decorators.d.ts
│  │  │  │  ├─ 📄lib.decorators.legacy.d.ts
│  │  │  │  ├─ 📄lib.dom.asynciterable.d.ts
│  │  │  │  ├─ 📄lib.dom.d.ts
│  │  │  │  ├─ 📄lib.dom.iterable.d.ts
│  │  │  │  ├─ 📄lib.es2015.collection.d.ts
│  │  │  │  ├─ 📄lib.es2015.core.d.ts
│  │  │  │  ├─ 📄lib.es2015.d.ts
│  │  │  │  ├─ 📄lib.es2015.generator.d.ts
│  │  │  │  ├─ 📄lib.es2015.iterable.d.ts
│  │  │  │  ├─ 📄lib.es2015.promise.d.ts
│  │  │  │  ├─ 📄lib.es2015.proxy.d.ts
│  │  │  │  ├─ 📄lib.es2015.reflect.d.ts
│  │  │  │  ├─ 📄lib.es2015.symbol.d.ts
│  │  │  │  ├─ 📄lib.es2015.symbol.wellknown.d.ts
│  │  │  │  ├─ 📄lib.es2016.array.include.d.ts
│  │  │  │  ├─ 📄lib.es2016.d.ts
│  │  │  │  ├─ 📄lib.es2016.full.d.ts
│  │  │  │  ├─ 📄lib.es2016.intl.d.ts
│  │  │  │  ├─ 📄lib.es2017.d.ts
│  │  │  │  ├─ 📄lib.es2017.date.d.ts
│  │  │  │  ├─ 📄lib.es2017.full.d.ts
│  │  │  │  ├─ 📄lib.es2017.intl.d.ts
│  │  │  │  ├─ 📄lib.es2017.object.d.ts
│  │  │  │  ├─ 📄lib.es2017.sharedmemory.d.ts
│  │  │  │  ├─ 📄lib.es2017.string.d.ts
│  │  │  │  ├─ 📄lib.es2017.typedarrays.d.ts
│  │  │  │  ├─ 📄lib.es2018.asyncgenerator.d.ts
│  │  │  │  ├─ 📄lib.es2018.asynciterable.d.ts
│  │  │  │  ├─ 📄lib.es2018.d.ts
│  │  │  │  ├─ 📄lib.es2018.full.d.ts
│  │  │  │  ├─ 📄lib.es2018.intl.d.ts
│  │  │  │  ├─ 📄lib.es2018.promise.d.ts
│  │  │  │  ├─ 📄lib.es2018.regexp.d.ts
│  │  │  │  ├─ 📄lib.es2019.array.d.ts
│  │  │  │  ├─ 📄lib.es2019.d.ts
│  │  │  │  ├─ 📄lib.es2019.full.d.ts
│  │  │  │  ├─ 📄lib.es2019.intl.d.ts
│  │  │  │  ├─ 📄lib.es2019.object.d.ts
│  │  │  │  ├─ 📄lib.es2019.string.d.ts
│  │  │  │  ├─ 📄lib.es2019.symbol.d.ts
│  │  │  │  ├─ 📄lib.es2020.bigint.d.ts
│  │  │  │  ├─ 📄lib.es2020.d.ts
│  │  │  │  ├─ 📄lib.es2020.date.d.ts
│  │  │  │  ├─ 📄lib.es2020.full.d.ts
│  │  │  │  ├─ 📄lib.es2020.intl.d.ts
│  │  │  │  ├─ 📄lib.es2020.number.d.ts
│  │  │  │  ├─ 📄lib.es2020.promise.d.ts
│  │  │  │  ├─ 📄lib.es2020.sharedmemory.d.ts
│  │  │  │  ├─ 📄lib.es2020.string.d.ts
│  │  │  │  ├─ 📄lib.es2020.symbol.wellknown.d.ts
│  │  │  │  ├─ 📄lib.es2021.d.ts
│  │  │  │  ├─ 📄lib.es2021.full.d.ts
│  │  │  │  ├─ 📄lib.es2021.intl.d.ts
│  │  │  │  ├─ 📄lib.es2021.promise.d.ts
│  │  │  │  ├─ 📄lib.es2021.string.d.ts
│  │  │  │  ├─ 📄lib.es2021.weakref.d.ts
│  │  │  │  ├─ 📄lib.es2022.array.d.ts
│  │  │  │  ├─ 📄lib.es2022.d.ts
│  │  │  │  ├─ 📄lib.es2022.error.d.ts
│  │  │  │  ├─ 📄lib.es2022.full.d.ts
│  │  │  │  ├─ 📄lib.es2022.intl.d.ts
│  │  │  │  ├─ 📄lib.es2022.object.d.ts
│  │  │  │  ├─ 📄lib.es2022.regexp.d.ts
│  │  │  │  ├─ 📄lib.es2022.sharedmemory.d.ts
│  │  │  │  ├─ 📄lib.es2022.string.d.ts
│  │  │  │  ├─ 📄lib.es2023.array.d.ts
│  │  │  │  ├─ 📄lib.es2023.collection.d.ts
│  │  │  │  ├─ 📄lib.es2023.d.ts
│  │  │  │  ├─ 📄lib.es2023.full.d.ts
│  │  │  │  ├─ 📄lib.es2023.intl.d.ts
│  │  │  │  ├─ 📄lib.es5.d.ts
│  │  │  │  ├─ 📄lib.es6.d.ts
│  │  │  │  ├─ 📄lib.esnext.array.d.ts
│  │  │  │  ├─ 📄lib.esnext.collection.d.ts
│  │  │  │  ├─ 📄lib.esnext.d.ts
│  │  │  │  ├─ 📄lib.esnext.decorators.d.ts
│  │  │  │  ├─ 📄lib.esnext.disposable.d.ts
│  │  │  │  ├─ 📄lib.esnext.full.d.ts
│  │  │  │  ├─ 📄lib.esnext.intl.d.ts
│  │  │  │  ├─ 📄lib.esnext.object.d.ts
│  │  │  │  ├─ 📄lib.esnext.promise.d.ts
│  │  │  │  ├─ 📄lib.esnext.regexp.d.ts
│  │  │  │  ├─ 📄lib.esnext.string.d.ts
│  │  │  │  ├─ 📄lib.scripthost.d.ts
│  │  │  │  ├─ 📄lib.webworker.asynciterable.d.ts
│  │  │  │  ├─ 📄lib.webworker.d.ts
│  │  │  │  ├─ 📄lib.webworker.importscripts.d.ts
│  │  │  │  ├─ 📄lib.webworker.iterable.d.ts
│  │  │  │  ├─ 📄tsc.js
│  │  │  │  ├─ 📄tsserver.js
│  │  │  │  ├─ 📄tsserverlibrary.d.ts
│  │  │  │  ├─ 📄tsserverlibrary.js
│  │  │  │  ├─ 📄typescript.d.ts
│  │  │  │  ├─ 📄typescript.js
│  │  │  │  ├─ 📄typesMap.json
│  │  │  │  ├─ 📄typingsInstaller.js
│  │  │  │  └─ 📄watchGuard.js
│  │  │  ├─ 📄LICENSE.txt
│  │  │  ├─ 📄package.json
│  │  │  ├─ 📄README.md
│  │  │  ├─ 📄SECURITY.md
│  │  │  └─ 📄ThirdPartyNoticeText.txt
│  │  ├─ 📁typescript-eslint
│  │  │  ├─ 📁dist
│  │  │  │  ├─ 📁configs
│  │  │  │  │  ├─ 📄all.d.ts
│  │  │  │  │  ├─ 📄all.d.ts.map
│  │  │  │  │  ├─ 📄all.js
│  │  │  │  │  ├─ 📄all.js.map
│  │  │  │  │  ├─ 📄base.d.ts
│  │  │  │  │  ├─ 📄base.d.ts.map
│  │  │  │  │  ├─ 📄base.js
│  │  │  │  │  ├─ 📄base.js.map
│  │  │  │  │  ├─ 📄disable-type-checked.d.ts
│  │  │  │  │  ├─ 📄disable-type-checked.d.ts.map
│  │  │  │  │  ├─ 📄disable-type-checked.js
│  │  │  │  │  ├─ 📄disable-type-checked.js.map
│  │  │  │  │  ├─ 📄eslint-recommended.d.ts
│  │  │  │  │  ├─ 📄eslint-recommended.d.ts.map
│  │  │  │  │  ├─ 📄eslint-recommended.js
│  │  │  │  │  ├─ 📄eslint-recommended.js.map
│  │  │  │  │  ├─ 📄recommended-type-checked-only.d.ts
│  │  │  │  │  ├─ 📄recommended-type-checked-only.d.ts.map
│  │  │  │  │  ├─ 📄recommended-type-checked-only.js
│  │  │  │  │  ├─ 📄recommended-type-checked-only.js.map
│  │  │  │  │  ├─ 📄recommended-type-checked.d.ts
│  │  │  │  │  ├─ 📄recommended-type-checked.d.ts.map
│  │  │  │  │  ├─ 📄recommended-type-checked.js
│  │  │  │  │  ├─ 📄recommended-type-checked.js.map
│  │  │  │  │  ├─ 📄recommended.d.ts
│  │  │  │  │  ├─ 📄recommended.d.ts.map
│  │  │  │  │  ├─ 📄recommended.js
│  │  │  │  │  ├─ 📄recommended.js.map
│  │  │  │  │  ├─ 📄strict-type-checked-only.d.ts
│  │  │  │  │  ├─ 📄strict-type-checked-only.d.ts.map
│  │  │  │  │  ├─ 📄strict-type-checked-only.js
│  │  │  │  │  ├─ 📄strict-type-checked-only.js.map
│  │  │  │  │  ├─ 📄strict-type-checked.d.ts
│  │  │  │  │  ├─ 📄strict-type-checked.d.ts.map
│  │  │  │  │  ├─ 📄strict-type-checked.js
│  │  │  │  │  ├─ 📄strict-type-checked.js.map
│  │  │  │  │  ├─ 📄strict.d.ts
│  │  │  │  │  ├─ 📄strict.d.ts.map
│  │  │  │  │  ├─ 📄strict.js
│  │  │  │  │  ├─ 📄strict.js.map
│  │  │  │  │  ├─ 📄stylistic-type-checked-only.d.ts
│  │  │  │  │  ├─ 📄stylistic-type-checked-only.d.ts.map
│  │  │  │  │  ├─ 📄stylistic-type-checked-only.js
│  │  │  │  │  ├─ 📄stylistic-type-checked-only.js.map
│  │  │  │  │  ├─ 📄stylistic-type-checked.d.ts
│  │  │  │  │  ├─ 📄stylistic-type-checked.d.ts.map
│  │  │  │  │  ├─ 📄stylistic-type-checked.js
│  │  │  │  │  ├─ 📄stylistic-type-checked.js.map
│  │  │  │  │  ├─ 📄stylistic.d.ts
│  │  │  │  │  ├─ 📄stylistic.d.ts.map
│  │  │  │  │  ├─ 📄stylistic.js
│  │  │  │  │  └─ 📄stylistic.js.map
│  │  │  │  ├─ 📄config-helper.d.ts
│  │  │  │  ├─ 📄config-helper.d.ts.map
│  │  │  │  ├─ 📄config-helper.js
│  │  │  │  ├─ 📄config-helper.js.map
│  │  │  │  ├─ 📄index.d.ts
│  │  │  │  ├─ 📄index.d.ts.map
│  │  │  │  ├─ 📄index.js
│  │  │  │  └─ 📄index.js.map
│  │  │  ├─ 📁node_modules
│  │  │  │  └─ 📁.bin
│  │  │  │     ├─ 📄tsc
│  │  │  │     ├─ 📄tsc.CMD
│  │  │  │     ├─ 📄tsc.ps1
│  │  │  │     ├─ 📄tsserver
│  │  │  │     ├─ 📄tsserver.CMD
│  │  │  │     └─ 📄tsserver.ps1
│  │  │  ├─ 📄LICENSE
│  │  │  ├─ 📄package.json
│  │  │  └─ 📄README.md
│  │  ├─ 📁vite
│  │  │  ├─ 📁bin
│  │  │  │  ├─ 📄openChrome.applescript
│  │  │  │  └─ 📄vite.js
│  │  │  ├─ 📁dist
│  │  │  │  ├─ 📁client
│  │  │  │  │  ├─ 📄client.mjs
│  │  │  │  │  └─ 📄env.mjs
│  │  │  │  ├─ 📁node
│  │  │  │  │  ├─ 📁chunks
│  │  │  │  │  │  ├─ 📄dep-BkYu-SNl.js
│  │  │  │  │  │  ├─ 📄dep-Cy9twKMn.js
│  │  │  │  │  │  ├─ 📄dep-D-7KCb9p.js
│  │  │  │  │  │  ├─ 📄dep-IQS-Za7F.js
│  │  │  │  │  │  └─ 📄dep-SDtFYyy1.js
│  │  │  │  │  ├─ 📄cli.js
│  │  │  │  │  ├─ 📄constants.js
│  │  │  │  │  ├─ 📄index.d.ts
│  │  │  │  │  ├─ 📄index.js
│  │  │  │  │  ├─ 📄runtime.d.ts
│  │  │  │  │  ├─ 📄runtime.js
│  │  │  │  │  └─ 📄types.d-aGj9QkWt.d.ts
│  │  │  │  └─ 📁node-cjs
│  │  │  │     └─ 📄publicUtils.cjs
│  │  │  ├─ 📁node_modules
│  │  │  │  └─ 📁.bin
│  │  │  │     ├─ 📄esbuild
│  │  │  │     ├─ 📄esbuild.CMD
│  │  │  │     ├─ 📄esbuild.ps1
│  │  │  │     ├─ 📄rollup
│  │  │  │     ├─ 📄rollup.CMD
│  │  │  │     └─ 📄rollup.ps1
│  │  │  ├─ 📁types
│  │  │  │  ├─ 📄customEvent.d.ts
│  │  │  │  ├─ 📄hmrPayload.d.ts
│  │  │  │  ├─ 📄hot.d.ts
│  │  │  │  ├─ 📄import-meta.d.ts
│  │  │  │  ├─ 📄importGlob.d.ts
│  │  │  │  ├─ 📄importMeta.d.ts
│  │  │  │  ├─ 📄metadata.d.ts
│  │  │  │  └─ 📄package.json
│  │  │  ├─ 📄client.d.ts
│  │  │  ├─ 📄index.cjs
│  │  │  ├─ 📄index.d.cts
│  │  │  ├─ 📄LICENSE.md
│  │  │  ├─ 📄package.json
│  │  │  └─ 📄README.md
│  │  └─ 📄.modules.yaml
│  ├─ 📁public
│  │  └─ 📄vite.svg
│  ├─ 📁src
│  │  ├─ 📁assets
│  │  │  ├─ 📁backgrounds
│  │  │  │  ├─ 📄image1.png
│  │  │  │  ├─ 📄image10.png
│  │  │  │  ├─ 📄image11.png
│  │  │  │  ├─ 📄image12.png
│  │  │  │  ├─ 📄image13.png
│  │  │  │  ├─ 📄image14.png
│  │  │  │  ├─ 📄image15.png
│  │  │  │  ├─ 📄image16.png
│  │  │  │  ├─ 📄image17.png
│  │  │  │  ├─ 📄image18.png
│  │  │  │  ├─ 📄image2.png
│  │  │  │  ├─ 📄image3.png
│  │  │  │  ├─ 📄image4.png
│  │  │  │  ├─ 📄image5.png
│  │  │  │  ├─ 📄image6.png
│  │  │  │  ├─ 📄image7.png
│  │  │  │  ├─ 📄image8.png
│  │  │  │  └─ 📄image9.png
│  │  │  ├─ 📁carousel
│  │  │  │  ├─ 📄image1.png
│  │  │  │  ├─ 📄image2.png
│  │  │  │  ├─ 📄image3.png
│  │  │  │  ├─ 📄image4.png
│  │  │  │  ├─ 📄image5.png
│  │  │  │  ├─ 📄image6.png
│  │  │  │  ├─ 📄image7.png
│  │  │  │  ├─ 📄image8.png
│  │  │  │  ├─ 📄image9.png
│  │  │  │  └─ 📄index.ts
│  │  │  ├─ 📁videoCardDatas
│  │  │  │  ├─ 📄data.ts
│  │  │  │  ├─ 📄image1.png
│  │  │  │  ├─ 📄image10.png
│  │  │  │  ├─ 📄image11.png
│  │  │  │  ├─ 📄image12.png
│  │  │  │  ├─ 📄image13.png
│  │  │  │  ├─ 📄image14.png
│  │  │  │  ├─ 📄image15.png
│  │  │  │  ├─ 📄image16.png
│  │  │  │  ├─ 📄image17.png
│  │  │  │  ├─ 📄image18.png
│  │  │  │  ├─ 📄image19.png
│  │  │  │  ├─ 📄image2.png
│  │  │  │  ├─ 📄image20.png
│  │  │  │  ├─ 📄image21.png
│  │  │  │  ├─ 📄image3.png
│  │  │  │  ├─ 📄image4.png
│  │  │  │  ├─ 📄image5.png
│  │  │  │  ├─ 📄image6.png
│  │  │  │  ├─ 📄image7.png
│  │  │  │  ├─ 📄image8.png
│  │  │  │  └─ 📄image9.png
│  │  │  ├─ 📄logo.png
│  │  │  └─ 📄react.svg
│  │  ├─ 📁components
│  │  │  ├─ 📄Carousel.css
│  │  │  ├─ 📄Carousel.tsx
│  │  │  ├─ 📄Header.tsx
│  │  │  ├─ 📄HeaderBanner.css
│  │  │  ├─ 📄HeaderBanner.tsx
│  │  │  ├─ 📄HeaderBar.css
│  │  │  ├─ 📄HeaderBar.tsx
│  │  │  ├─ 📄HeaderChannel.css
│  │  │  ├─ 📄HeaderChannel.tsx
│  │  │  ├─ 📄Main.css
│  │  │  ├─ 📄Main.tsx
│  │  │  ├─ 📄VideoCard.css
│  │  │  └─ 📄VideoCard.tsx
│  │  ├─ 📁types
│  │  │  └─ 📄VideoCard.tsx
│  │  ├─ 📄App.css
│  │  ├─ 📄App.tsx
│  │  ├─ 📄index.css
│  │  ├─ 📄main.tsx
│  │  ├─ 📄png.d.ts
│  │  └─ 📄vite-env.d.ts
│  ├─ 📄.gitignore
│  ├─ 📄eslint.config.js
│  ├─ 📄index.html
│  ├─ 📄package.json
│  ├─ 📄pnpm-lock.yaml
│  ├─ 📄tsconfig.app.json
│  ├─ 📄tsconfig.json
│  ├─ 📄tsconfig.node.json
│  └─ 📄vite.config.ts
├─ 📁node_modules
├─ 📄.env
├─ 📄.gitignore
├─ 📄main.js
├─ 📄package.json
├─ 📄pnpm-lock.yaml
├─ 📄preload.js
└─ 📄readme.md
```

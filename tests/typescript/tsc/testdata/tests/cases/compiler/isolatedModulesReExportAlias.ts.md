__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "events",
        "raw": "\"events\"",
        "start": 15,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventEmitterOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 57
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "captureRejections",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 81
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 84,
                      "end": 91
                    },
                    "start": 82,
                    "end": 91
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 64,
                  "end": 92
                }
              ],
              "start": 58,
              "end": 96
            },
            "declare": false,
            "start": 28,
            "end": 96
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventEmitter",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 117
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 135
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "EventEmitterOptions",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 146,
                              "end": 165
                            },
                            "typeArguments": null,
                            "start": 146,
                            "end": 165
                          },
                          "start": 144,
                          "end": 165
                        },
                        "start": 136,
                        "end": 165
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 135,
                    "end": 167
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 124,
                  "end": 167
                }
              ],
              "start": 118,
              "end": 171
            },
            "abstract": false,
            "declare": false,
            "start": 99,
            "end": 171
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventEmitter",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 195
            },
            "start": 174,
            "end": 196
          }
        ],
        "start": 24,
        "end": 198
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 198
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "node:events",
        "raw": "\"node:events\"",
        "start": 214,
        "end": 227
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "events",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 245
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "events",
                "raw": "\"events\"",
                "start": 256,
                "end": 264
              },
              "start": 248,
              "end": 265
            },
            "importKind": "value",
            "start": 232,
            "end": 266
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "events",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 284
            },
            "start": 269,
            "end": 285
          }
        ],
        "start": 228,
        "end": 287
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 199,
      "end": 287
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 288
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"events\"",
    "start": 15,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 28,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "EventEmitterOptions",
    "start": 38,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "captureRejections",
    "start": 64,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 84,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 99,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "EventEmitter",
    "start": 105,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 124,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 136,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "EventEmitterOptions",
    "start": 146,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "EventEmitter",
    "start": 183,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 199,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 207,
    "end": 213
  },
  {
    "type": "String",
    "value": "\"node:events\"",
    "start": 214,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 232,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 248,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "String",
    "value": "\"events\"",
    "start": 256,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 278,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "events",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 13
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "events",
          "raw": "\"events\"",
          "start": 24,
          "end": 32
        },
        "start": 16,
        "end": 33
      },
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "events",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 50
      },
      "start": 35,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 7,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 16,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "String",
    "value": "\"events\"",
    "start": 24,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "script",
  "hashbang": null,
  "start": 83,
  "end": 83
}
```
__ESTREE_TEST__:TOKENS:
```json
[]
```

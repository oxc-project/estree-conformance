__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PkgType",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 110
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "esm",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 120
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 122,
                    "end": 126
                  },
                  "start": 122,
                  "end": 126
                },
                "start": 120,
                "end": 126
              },
              "accessibility": null,
              "static": false,
              "start": 117,
              "end": 127
            }
          ],
          "start": 111,
          "end": 129
        },
        "declare": false,
        "start": 93,
        "end": 129
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 86,
      "end": 129
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 144
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "expectedCondition",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "import",
                        "raw": "\"import\"",
                        "start": 174,
                        "end": 182
                      },
                      "start": 174,
                      "end": 182
                    },
                    "start": 172,
                    "end": 182
                  },
                  "start": 155,
                  "end": 182
                },
                "init": null,
                "definite": false,
                "start": 155,
                "end": 182
              }
            ],
            "declare": false,
            "start": 151,
            "end": 183
          }
        ],
        "start": 145,
        "end": 185
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 130,
      "end": 185
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 86,
  "end": 186
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 86,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 93,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "PkgType",
    "start": 103,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "esm",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 130,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "expectedCondition",
    "start": 155,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 174,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PkgType",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 100
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "cjs",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 110
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 112,
                    "end": 116
                  },
                  "start": 112,
                  "end": 116
                },
                "start": 110,
                "end": 116
              },
              "accessibility": null,
              "static": false,
              "start": 107,
              "end": 117
            }
          ],
          "start": 101,
          "end": 180
        },
        "declare": false,
        "start": 83,
        "end": 180
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 76,
      "end": 180
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 195
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "expectedCondition",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "default",
                        "raw": "\"default\"",
                        "start": 225,
                        "end": 234
                      },
                      "start": 225,
                      "end": 234
                    },
                    "start": 223,
                    "end": 234
                  },
                  "start": 206,
                  "end": 234
                },
                "init": null,
                "definite": false,
                "start": 206,
                "end": 234
              }
            ],
            "declare": false,
            "start": 202,
            "end": 235
          }
        ],
        "start": 196,
        "end": 285
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 181,
      "end": 285
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 76,
  "end": 286
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 76,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 83,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "PkgType",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 181,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "expectedCondition",
    "start": 206,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "String",
    "value": "\"default\"",
    "start": 225,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "PkgType",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 248
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "PkgType",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 248
          },
          "importKind": "value",
          "start": 241,
          "end": 248
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 256,
        "end": 261
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 227,
      "end": 262
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PkgType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 335
                },
                "typeArguments": null,
                "start": 328,
                "end": 335
              },
              "start": 326,
              "end": 335
            },
            "start": 325,
            "end": 335
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "esm",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 343
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 345,
                  "end": 349
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 340,
                "end": 349
              }
            ],
            "start": 338,
            "end": 351
          },
          "definite": false,
          "start": 325,
          "end": 351
        }
      ],
      "declare": false,
      "start": 319,
      "end": 352
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 227,
  "end": 352
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 227,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "PkgType",
    "start": 241,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 251,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 319,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "PkgType",
    "start": 328,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "esm",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 345,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  }
]
```

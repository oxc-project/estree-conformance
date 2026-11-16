__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 321,
      "end": 331
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 332
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
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
            "name": "Sig",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Sig",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 17
          },
          "importKind": "value",
          "start": 14,
          "end": 17
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Flat",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 23
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Flat",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 23
          },
          "importKind": "value",
          "start": 19,
          "end": 23
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a.js",
        "raw": "\"./a.js\"",
        "start": 31,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 40
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 63,
                    "end": 68
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Sig",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 75,
                              "end": 78
                            },
                            "typeArguments": null,
                            "start": 75,
                            "end": 78
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "Args",
                              "raw": "\"Args\"",
                              "start": 79,
                              "end": 85
                            },
                            "start": 79,
                            "end": 85
                          },
                          "start": 75,
                          "end": 86
                        },
                        "start": 69,
                        "end": 86
                      }
                    ],
                    "start": 68,
                    "end": 87
                  },
                  "start": 63,
                  "end": 87
                },
                "start": 61,
                "end": 87
              },
              "start": 55,
              "end": 87
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "name",
                  "raw": "\"name\"",
                  "start": 91,
                  "end": 97
                },
                {
                  "type": "Literal",
                  "value": "onCancel",
                  "raw": "\"onCancel\"",
                  "start": 99,
                  "end": 109
                }
              ],
              "start": 90,
              "end": 110
            },
            "definite": false,
            "start": 55,
            "end": 110
          }
        ],
        "declare": false,
        "start": 49,
        "end": 111
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 42,
      "end": 111
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "flat",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 136
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Flat",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 143,
                            "end": 147
                          },
                          "typeArguments": null,
                          "start": 143,
                          "end": 147
                        },
                        "start": 137,
                        "end": 147
                      }
                    ],
                    "start": 136,
                    "end": 148
                  },
                  "start": 131,
                  "end": 148
                },
                "start": 129,
                "end": 148
              },
              "start": 125,
              "end": 148
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "name",
                  "raw": "\"name\"",
                  "start": 152,
                  "end": 158
                },
                {
                  "type": "Literal",
                  "value": "onCancel",
                  "raw": "\"onCancel\"",
                  "start": 160,
                  "end": 170
                }
              ],
              "start": 151,
              "end": 171
            },
            "definite": false,
            "start": 125,
            "end": 171
          }
        ],
        "declare": false,
        "start": 119,
        "end": 172
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 112,
      "end": 172
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "onCancel",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Sig",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 199
                      },
                      "typeArguments": null,
                      "start": 196,
                      "end": 199
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "Args",
                        "raw": "\"Args\"",
                        "start": 200,
                        "end": 206
                      },
                      "start": 200,
                      "end": 206
                    },
                    "start": 196,
                    "end": 207
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "onCancel",
                      "raw": "\"onCancel\"",
                      "start": 208,
                      "end": 218
                    },
                    "start": 208,
                    "end": 218
                  },
                  "start": 196,
                  "end": 219
                },
                "start": 194,
                "end": 219
              },
              "start": 186,
              "end": 219
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 226,
                      "end": 232
                    },
                    "start": 224,
                    "end": 232
                  },
                  "start": 223,
                  "end": 232
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 237,
                "end": 239
              },
              "id": null,
              "generator": false,
              "start": 222,
              "end": 239
            },
            "definite": false,
            "start": 186,
            "end": 239
          }
        ],
        "declare": false,
        "start": 180,
        "end": 240
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 173,
      "end": 240
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 240
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
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Sig",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "Flat",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 26,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"./a.js\"",
    "start": 31,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 42,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 63,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Sig",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"Args\"",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 90,
    "end": 91
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "String",
    "value": "\"onCancel\"",
    "start": 99,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 112,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "Flat",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 151,
    "end": 152
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 158,
    "end": 159
  },
  {
    "type": "String",
    "value": "\"onCancel\"",
    "start": 160,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 173,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 180,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "onCancel",
    "start": 186,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "Sig",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 199,
    "end": 200
  },
  {
    "type": "String",
    "value": "\"Args\"",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 207,
    "end": 208
  },
  {
    "type": "String",
    "value": "\"onCancel\"",
    "start": 208,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 234,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  }
]
```

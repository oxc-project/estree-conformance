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
            "name": "dropPrivateProps1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 25
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "dropPrivateProps1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 25
          },
          "importKind": "value",
          "start": 8,
          "end": 25
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "dropPrivateProps2",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 44
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "dropPrivateProps2",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 44
          },
          "importKind": "value",
          "start": 27,
          "end": 44
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./api",
        "raw": "'./api'",
        "start": 51,
        "end": 58
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 59
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 67
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dropPrivateProps1",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 87
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 92
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 94,
                      "end": 96
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 89,
                    "end": 96
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 102
                    },
                    "value": {
                      "type": "Literal",
                      "value": "secret",
                      "raw": "'secret'",
                      "start": 104,
                      "end": 112
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 98,
                    "end": 112
                  }
                ],
                "start": 88,
                "end": 113
              }
            ],
            "optional": false,
            "start": 70,
            "end": 114
          },
          "definite": false,
          "start": 66,
          "end": 114
        }
      ],
      "declare": false,
      "start": 60,
      "end": 115
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 263
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dropPrivateProps2",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 283
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 288
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 290,
                      "end": 292
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 285,
                    "end": 292
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 298
                    },
                    "value": {
                      "type": "Literal",
                      "value": "secret",
                      "raw": "'secret'",
                      "start": 300,
                      "end": 308
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 294,
                    "end": 308
                  }
                ],
                "start": 284,
                "end": 309
              }
            ],
            "optional": false,
            "start": 266,
            "end": 310
          },
          "definite": false,
          "start": 262,
          "end": 310
        }
      ],
      "declare": false,
      "start": 256,
      "end": 311
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 467
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "dropPrivateProps1",
    "start": 8,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "dropPrivateProps2",
    "start": 27,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 46,
    "end": 50
  },
  {
    "type": "String",
    "value": "'./api'",
    "start": 51,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "dropPrivateProps1",
    "start": 70,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "_bar",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "String",
    "value": "'secret'",
    "start": 104,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 256,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "dropPrivateProps2",
    "start": 266,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 285,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 290,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "_bar",
    "start": 294,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "String",
    "value": "'secret'",
    "start": 300,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
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
            "name": "excludePrivateKeys1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 27
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "excludePrivateKeys1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 27
          },
          "importKind": "value",
          "start": 8,
          "end": 27
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "excludePrivateKeys2",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "excludePrivateKeys2",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 48
          },
          "importKind": "value",
          "start": 29,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./internal",
        "raw": "'./internal'",
        "start": 55,
        "end": 67
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 68
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
              "name": "dropPrivateProps1",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 99
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 106
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 103,
                    "end": 106
                  }
                ],
                "start": 102,
                "end": 107
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 113,
                        "end": 116
                      },
                      "typeArguments": null,
                      "start": 113,
                      "end": 116
                    },
                    "start": 111,
                    "end": 116
                  },
                  "start": 108,
                  "end": 116
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "excludePrivateKeys1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 140
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 144
                  }
                ],
                "optional": false,
                "start": 121,
                "end": 145
              },
              "id": null,
              "generator": false,
              "start": 102,
              "end": 145
            },
            "definite": false,
            "start": 82,
            "end": 145
          }
        ],
        "declare": false,
        "start": 76,
        "end": 146
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 69,
      "end": 146
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
              "name": "dropPrivateProps2",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 177
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 184
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 181,
                    "end": 184
                  }
                ],
                "start": 180,
                "end": 185
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 194
                      },
                      "typeArguments": null,
                      "start": 191,
                      "end": 194
                    },
                    "start": 189,
                    "end": 194
                  },
                  "start": 186,
                  "end": 194
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "excludePrivateKeys2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 218
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 222
                  }
                ],
                "optional": false,
                "start": 199,
                "end": 223
              },
              "id": null,
              "generator": false,
              "start": 180,
              "end": 223
            },
            "definite": false,
            "start": 160,
            "end": 223
          }
        ],
        "declare": false,
        "start": 154,
        "end": 224
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 147,
      "end": 224
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 225
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "excludePrivateKeys1",
    "start": 8,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "excludePrivateKeys2",
    "start": 29,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 50,
    "end": 54
  },
  {
    "type": "String",
    "value": "'./internal'",
    "start": 55,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 69,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 76,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "dropPrivateProps1",
    "start": 82,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 118,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "excludePrivateKeys1",
    "start": 121,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 147,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "dropPrivateProps2",
    "start": 160,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 196,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "excludePrivateKeys2",
    "start": 199,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
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
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "excludePrivateKeys1",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 43
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 47
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 44,
              "end": 47
            }
          ],
          "start": 43,
          "end": 48
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 57
                },
                "typeArguments": null,
                "start": 54,
                "end": 57
              },
              "start": 52,
              "end": 57
            },
            "start": 49,
            "end": 57
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PublicKeys1",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 78
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
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 88
                      },
                      "typeArguments": null,
                      "start": 85,
                      "end": 88
                    },
                    "start": 79,
                    "end": 88
                  }
                ],
                "start": 78,
                "end": 89
              },
              "start": 67,
              "end": 89
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 95
                },
                "typeArguments": null,
                "start": 92,
                "end": 95
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 97
                },
                "typeArguments": null,
                "start": 96,
                "end": 97
              },
              "start": 92,
              "end": 98
            },
            "optional": false,
            "readonly": null,
            "start": 60,
            "end": 99
          },
          "start": 58,
          "end": 99
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 100
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 100
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "excludePrivateKeys2",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 144
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 148
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 145,
              "end": 148
            }
          ],
          "start": 144,
          "end": 149
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 158
                },
                "typeArguments": null,
                "start": 155,
                "end": 158
              },
              "start": 153,
              "end": 158
            },
            "start": 150,
            "end": 158
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PublicKeys2",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 179
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
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 186,
                        "end": 189
                      },
                      "typeArguments": null,
                      "start": 186,
                      "end": 189
                    },
                    "start": 180,
                    "end": 189
                  }
                ],
                "start": 179,
                "end": 190
              },
              "start": 168,
              "end": 190
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 196
                },
                "typeArguments": null,
                "start": 193,
                "end": 196
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 198
                },
                "typeArguments": null,
                "start": 197,
                "end": 198
              },
              "start": 193,
              "end": 199
            },
            "optional": false,
            "readonly": null,
            "start": 161,
            "end": 200
          },
          "start": 159,
          "end": 200
        },
        "body": null,
        "expression": false,
        "start": 108,
        "end": 201
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 101,
      "end": 201
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PublicKeys1",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 225
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 227
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 226,
              "end": 227
            }
          ],
          "start": 225,
          "end": 228
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 232
            },
            "typeArguments": null,
            "start": 231,
            "end": 232
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "_",
                  "cooked": "_"
                },
                "tail": false,
                "start": 241,
                "end": 245
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 251,
                "end": 253
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 245,
                "end": 251
              }
            ],
            "start": 241,
            "end": 253
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 256,
            "end": 261
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 265
            },
            "typeArguments": null,
            "start": 264,
            "end": 265
          },
          "start": 231,
          "end": 265
        },
        "declare": false,
        "start": 209,
        "end": 266
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 202,
      "end": 266
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PublicKeys2",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 283
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 285
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 284,
            "end": 285
          }
        ],
        "start": 283,
        "end": 286
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 297
          },
          "typeArguments": null,
          "start": 296,
          "end": 297
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "_",
                "cooked": "_"
              },
              "tail": false,
              "start": 306,
              "end": 310
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 316,
              "end": 318
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 310,
              "end": 316
            }
          ],
          "start": 306,
          "end": 318
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 321,
          "end": 326
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 330
          },
          "typeArguments": null,
          "start": 329,
          "end": 330
        },
        "start": 296,
        "end": 330
      },
      "declare": false,
      "start": 267,
      "end": 331
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 331
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "excludePrivateKeys1",
    "start": 24,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "PublicKeys1",
    "start": 67,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 101,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 108,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 116,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "excludePrivateKeys2",
    "start": 125,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 165,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "PublicKeys2",
    "start": 168,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 180,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 202,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 209,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "PublicKeys1",
    "start": 214,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 233,
    "end": 240
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 241,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "type",
    "start": 267,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "PublicKeys2",
    "start": 272,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 298,
    "end": 305
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 306,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 310,
    "end": 316
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 321,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "T",
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

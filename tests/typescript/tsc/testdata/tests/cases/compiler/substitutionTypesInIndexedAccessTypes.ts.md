__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UserArgs",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 35
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 48
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 51,
                "end": 58
              },
              "start": 49,
              "end": 58
            },
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 58
          }
        ],
        "start": 38,
        "end": 60
      },
      "declare": false,
      "start": 22,
      "end": 61
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Subset",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 74
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
              "start": 75,
              "end": 76
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 75,
            "end": 76
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 78,
            "end": 79
          }
        ],
        "start": 74,
        "end": 80
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 89
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "typeArguments": null,
            "start": 99,
            "end": 100
          },
          "start": 93,
          "end": 100
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 106
            },
            "typeArguments": null,
            "start": 103,
            "end": 106
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 122
              },
              "typeArguments": null,
              "start": 121,
              "end": 122
            },
            "start": 115,
            "end": 122
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 126
              },
              "typeArguments": null,
              "start": 125,
              "end": 126
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 130
              },
              "typeArguments": null,
              "start": 127,
              "end": 130
            },
            "start": 125,
            "end": 131
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 134,
            "end": 139
          },
          "start": 103,
          "end": 139
        },
        "optional": false,
        "readonly": null,
        "start": 83,
        "end": 141
      },
      "declare": false,
      "start": 63,
      "end": 142
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withBoundary",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 173
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 175
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UserArgs",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 192
              },
              "typeArguments": null,
              "start": 184,
              "end": 192
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 174,
            "end": 192
          }
        ],
        "start": 173,
        "end": 193
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Subset",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 207
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 209
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 209
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UserArgs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 211,
                      "end": 219
                    },
                    "typeArguments": null,
                    "start": 211,
                    "end": 219
                  }
                ],
                "start": 207,
                "end": 220
              },
              "start": 201,
              "end": 220
            },
            "start": 199,
            "end": 220
          },
          "start": 194,
          "end": 220
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 224
          },
          "typeArguments": null,
          "start": 223,
          "end": 224
        },
        "start": 221,
        "end": 224
      },
      "body": null,
      "expression": false,
      "start": 144,
      "end": 225
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withoutBoundary",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 258
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 260
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UserArgs",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 277
              },
              "typeArguments": null,
              "start": 269,
              "end": 277
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 259,
            "end": 277
          }
        ],
        "start": 258,
        "end": 278
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 287
              },
              "typeArguments": null,
              "start": 286,
              "end": 287
            },
            "start": 284,
            "end": 287
          },
          "start": 279,
          "end": 287
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 291
          },
          "typeArguments": null,
          "start": 290,
          "end": 291
        },
        "start": 288,
        "end": 291
      },
      "body": null,
      "expression": false,
      "start": 226,
      "end": 292
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
            "name": "boundaryResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 314
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withBoundary",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 329
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
                      "name": "select",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 340
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 342,
                      "end": 346
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 334,
                    "end": 346
                  }
                ],
                "start": 330,
                "end": 349
              }
            ],
            "optional": false,
            "start": 317,
            "end": 350
          },
          "definite": false,
          "start": 300,
          "end": 350
        }
      ],
      "declare": false,
      "start": 294,
      "end": 351
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
            "name": "withoutBoundaryResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 380
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withoutBoundary",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 398
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
                      "name": "select",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 403,
                      "end": 409
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 411,
                      "end": 415
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 403,
                    "end": 415
                  }
                ],
                "start": 399,
                "end": 418
              }
            ],
            "optional": false,
            "start": 383,
            "end": 419
          },
          "definite": false,
          "start": 359,
          "end": 419
        }
      ],
      "declare": false,
      "start": 353,
      "end": 420
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 420
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "UserArgs",
    "start": 27,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 51,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 63,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "Subset",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 86,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 90,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 93,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 103,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 107,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 115,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 144,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 152,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "withBoundary",
    "start": 161,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 176,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "UserArgs",
    "start": 184,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Subset",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "UserArgs",
    "start": 211,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 226,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 234,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "withoutBoundary",
    "start": 243,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 261,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "UserArgs",
    "start": 269,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 294,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "boundaryResult",
    "start": 300,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "withBoundary",
    "start": 317,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 334,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 353,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "withoutBoundaryResult",
    "start": 359,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "withoutBoundary",
    "start": 383,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  }
]
```

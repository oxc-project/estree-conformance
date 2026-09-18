__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 171
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
              "name": "Columns",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 184
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 177,
            "end": 184
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Refinements",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 201
            },
            "constraint": null,
            "default": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 208
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Columns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 225
                  },
                  "typeArguments": null,
                  "start": 218,
                  "end": 225
                },
                "start": 212,
                "end": 225
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 229,
                "end": 236
              },
              "optional": true,
              "readonly": null,
              "start": 204,
              "end": 238
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 190,
            "end": 238
          }
        ],
        "start": 171,
        "end": 241
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "columns",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Columns",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 263
              },
              "typeArguments": null,
              "start": 256,
              "end": 263
            },
            "start": 254,
            "end": 263
          },
          "start": 247,
          "end": 263
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "refinements",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 294
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Refinements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 315
                  },
                  "typeArguments": null,
                  "start": 304,
                  "end": 315
                },
                "start": 298,
                "end": 315
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 319
                  },
                  "typeArguments": null,
                  "start": 318,
                  "end": 319
                },
                "extendsType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Columns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 341
                    },
                    "typeArguments": null,
                    "start": 334,
                    "end": 341
                  },
                  "start": 328,
                  "end": 341
                },
                "trueType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Refinements",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 344,
                      "end": 355
                    },
                    "typeArguments": null,
                    "start": 344,
                    "end": 355
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 356,
                      "end": 357
                    },
                    "typeArguments": null,
                    "start": 356,
                    "end": 357
                  },
                  "start": 344,
                  "end": 358
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 361,
                  "end": 366
                },
                "start": 318,
                "end": 366
              },
              "optional": false,
              "readonly": null,
              "start": 282,
              "end": 373
            },
            "start": 280,
            "end": 373
          },
          "start": 269,
          "end": 373
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Refinements",
            "optional": false,
            "typeAnnotation": null,
            "start": 378,
            "end": 389
          },
          "typeArguments": null,
          "start": 378,
          "end": 389
        },
        "start": 376,
        "end": 389
      },
      "body": null,
      "expression": false,
      "start": 142,
      "end": 390
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
            "name": "schema",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 404
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 419
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 427,
                      "end": 432
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 434,
                      "end": 435
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 427,
                    "end": 435
                  }
                ],
                "start": 425,
                "end": 437
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 450
                    },
                    "value": {
                      "type": "Literal",
                      "value": "refined",
                      "raw": "\"refined\"",
                      "start": 452,
                      "end": 461
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 445,
                    "end": 461
                  }
                ],
                "start": 443,
                "end": 463
              }
            ],
            "optional": false,
            "start": 407,
            "end": 466
          },
          "definite": false,
          "start": 398,
          "end": 466
        }
      ],
      "declare": false,
      "start": 392,
      "end": 467
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
            "name": "refined",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 484,
                "end": 490
              },
              "start": 482,
              "end": 490
            },
            "start": 475,
            "end": 490
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "schema",
              "optional": false,
              "typeAnnotation": null,
              "start": 493,
              "end": 499
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 500,
              "end": 505
            },
            "optional": false,
            "computed": false,
            "start": 493,
            "end": 505
          },
          "definite": false,
          "start": 475,
          "end": 505
        }
      ],
      "declare": false,
      "start": 469,
      "end": 506
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 142,
  "end": 506
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 142,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 150,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "createSchema",
    "start": 159,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Columns",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "Refinements",
    "start": 190,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 209,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 212,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Columns",
    "start": 218,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 229,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "columns",
    "start": 247,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "Columns",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "refinements",
    "start": 269,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 295,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 298,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "Refinements",
    "start": 304,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 320,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 328,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "Columns",
    "start": 334,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Refinements",
    "start": 344,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 361,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "Refinements",
    "start": 378,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 392,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "createSchema",
    "start": 407,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 445,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "String",
    "value": "\"refined\"",
    "start": 452,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 469,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "refined",
    "start": 475,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  }
]
```

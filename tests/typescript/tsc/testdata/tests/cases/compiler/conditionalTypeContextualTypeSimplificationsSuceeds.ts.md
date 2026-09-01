__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 82
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
              "name": "when",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 103,
                        "end": 109
                      },
                      "start": 101,
                      "end": 109
                    },
                    "start": 96,
                    "end": 109
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 114,
                    "end": 121
                  },
                  "start": 111,
                  "end": 121
                },
                "start": 95,
                "end": 121
              },
              "start": 93,
              "end": 121
            },
            "accessibility": null,
            "static": false,
            "start": 89,
            "end": 122
          }
        ],
        "start": 83,
        "end": 124
      },
      "declare": false,
      "start": 67,
      "end": 124
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bad",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 138
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 140
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 154
              },
              "typeArguments": null,
              "start": 149,
              "end": 154
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 139,
            "end": 154
          }
        ],
        "start": 138,
        "end": 155
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attrs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSStringKeyword",
                "start": 168,
                "end": 174
              },
              "extendsType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 190
                  },
                  "typeArguments": null,
                  "start": 189,
                  "end": 190
                },
                "start": 183,
                "end": 190
              },
              "trueType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 197
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 208
                    },
                    "typeArguments": null,
                    "start": 207,
                    "end": 208
                  },
                  "start": 201,
                  "end": 208
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 211,
                      "end": 212
                    },
                    "typeArguments": null,
                    "start": 211,
                    "end": 212
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 213,
                    "end": 214
                  },
                  "start": 211,
                  "end": 215
                },
                "optional": false,
                "readonly": null,
                "start": 193,
                "end": 217
              },
              "falseType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 224
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 235
                    },
                    "typeArguments": null,
                    "start": 234,
                    "end": 235
                  },
                  "start": 228,
                  "end": 235
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 239
                    },
                    "typeArguments": null,
                    "start": 238,
                    "end": 239
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 240,
                      "end": 241
                    },
                    "typeArguments": null,
                    "start": 240,
                    "end": 241
                  },
                  "start": 238,
                  "end": 242
                },
                "optional": false,
                "readonly": null,
                "start": 220,
                "end": 244
              },
              "start": 168,
              "end": 244
            },
            "start": 166,
            "end": 244
          },
          "start": 161,
          "end": 244
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 246,
        "end": 249
      },
      "expression": false,
      "start": 126,
      "end": 249
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "good1",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 264
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 266
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 280
              },
              "typeArguments": null,
              "start": 275,
              "end": 280
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 265,
            "end": 280
          }
        ],
        "start": 264,
        "end": 281
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attrs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSStringKeyword",
                "start": 294,
                "end": 300
              },
              "extendsType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 316
                  },
                  "typeArguments": null,
                  "start": 315,
                  "end": 316
                },
                "start": 309,
                "end": 316
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 320
                },
                "typeArguments": null,
                "start": 319,
                "end": 320
              },
              "falseType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 327
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 338
                    },
                    "typeArguments": null,
                    "start": 337,
                    "end": 338
                  },
                  "start": 331,
                  "end": 338
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 341,
                      "end": 342
                    },
                    "typeArguments": null,
                    "start": 341,
                    "end": 342
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 343,
                      "end": 344
                    },
                    "typeArguments": null,
                    "start": 343,
                    "end": 344
                  },
                  "start": 341,
                  "end": 345
                },
                "optional": false,
                "readonly": null,
                "start": 323,
                "end": 347
              },
              "start": 294,
              "end": 347
            },
            "start": 292,
            "end": 347
          },
          "start": 287,
          "end": 347
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 349,
        "end": 352
      },
      "expression": false,
      "start": 250,
      "end": 352
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "good2",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 367
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 369
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 383
              },
              "typeArguments": null,
              "start": 378,
              "end": 383
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 368,
            "end": 383
          }
        ],
        "start": 367,
        "end": 384
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attrs",
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
                "start": 400,
                "end": 401
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 411,
                    "end": 412
                  },
                  "typeArguments": null,
                  "start": 411,
                  "end": 412
                },
                "start": 405,
                "end": 412
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 415,
                    "end": 416
                  },
                  "typeArguments": null,
                  "start": 415,
                  "end": 416
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
                  },
                  "typeArguments": null,
                  "start": 417,
                  "end": 418
                },
                "start": 415,
                "end": 419
              },
              "optional": false,
              "readonly": null,
              "start": 397,
              "end": 421
            },
            "start": 395,
            "end": 421
          },
          "start": 390,
          "end": 421
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 423,
        "end": 426
      },
      "expression": false,
      "start": 353,
      "end": 426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bad",
          "optional": false,
          "typeAnnotation": null,
          "start": 428,
          "end": 431
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
                  "name": "when",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 438
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 445
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 449,
                    "end": 454
                  },
                  "id": null,
                  "generator": false,
                  "start": 440,
                  "end": 454
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 434,
                "end": 454
              }
            ],
            "start": 432,
            "end": 456
          }
        ],
        "optional": false,
        "start": 428,
        "end": 457
      },
      "directive": null,
      "start": 428,
      "end": 458
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "good1",
          "optional": false,
          "typeAnnotation": null,
          "start": 459,
          "end": 464
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
                  "name": "when",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 471
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 478
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 482,
                    "end": 487
                  },
                  "id": null,
                  "generator": false,
                  "start": 473,
                  "end": 487
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 467,
                "end": 487
              }
            ],
            "start": 465,
            "end": 489
          }
        ],
        "optional": false,
        "start": 459,
        "end": 490
      },
      "directive": null,
      "start": 459,
      "end": 491
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "good2",
          "optional": false,
          "typeAnnotation": null,
          "start": 492,
          "end": 497
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
                  "name": "when",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 500,
                  "end": 504
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 506,
                      "end": 511
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 515,
                    "end": 520
                  },
                  "id": null,
                  "generator": false,
                  "start": 506,
                  "end": 520
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 500,
                "end": 520
              }
            ],
            "start": 498,
            "end": 522
          }
        ],
        "optional": false,
        "start": 492,
        "end": 523
      },
      "directive": null,
      "start": 492,
      "end": 524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 67,
  "end": 524
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 67,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 77,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "when",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 96,
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
    "value": "string",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 111,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 114,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 126,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 141,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "attrs",
    "start": 161,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 168,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 175,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 183,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 198,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 201,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 225,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 228,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 250,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "good1",
    "start": 259,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 267,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 275,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "attrs",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 294,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 301,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 309,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 328,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 331,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 353,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "good2",
    "start": 362,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 370,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "attrs",
    "start": 390,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 402,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 405,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 428,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "when",
    "start": 434,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 440,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 446,
    "end": 448
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 449,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "good1",
    "start": 459,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "when",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 473,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 479,
    "end": 481
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 482,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "good2",
    "start": 492,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "when",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 506,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 512,
    "end": 514
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 515,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  }
]
```

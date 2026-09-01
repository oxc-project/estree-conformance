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
        "name": "Lower",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 206
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
              "start": 207,
              "end": 208
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 207,
            "end": 208
          }
        ],
        "start": 206,
        "end": 209
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 216
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
              "start": 226,
              "end": 227
            },
            "typeArguments": null,
            "start": 226,
            "end": 227
          },
          "start": 220,
          "end": 227
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "typeArguments": null,
            "start": 230,
            "end": 231
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 233
            },
            "typeArguments": null,
            "start": 232,
            "end": 233
          },
          "start": 230,
          "end": 234
        },
        "optional": false,
        "readonly": null,
        "start": 212,
        "end": 236
      },
      "declare": false,
      "start": 196,
      "end": 237
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 276
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
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 281
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 290,
                    "end": 296
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 299,
                    "end": 305
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 308,
                    "end": 314
                  }
                ],
                "start": 290,
                "end": 314
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 280,
              "end": 314
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 319
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 318,
              "end": 319
            }
          ],
          "start": 276,
          "end": 321
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 337
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 342
                  },
                  "typeArguments": null,
                  "start": 341,
                  "end": 342
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Lower",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 346,
                      "end": 351
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
                            "start": 352,
                            "end": 353
                          },
                          "typeArguments": null,
                          "start": 352,
                          "end": 353
                        }
                      ],
                      "start": 351,
                      "end": 354
                    },
                    "start": 346,
                    "end": 354
                  },
                  "start": 346,
                  "end": 356
                },
                "optional": true,
                "readonly": null,
                "start": 333,
                "end": 358
              },
              "start": 331,
              "end": 358
            },
            "start": 325,
            "end": 358
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 368
                },
                "typeArguments": null,
                "start": 367,
                "end": 368
              },
              "start": 365,
              "end": 368
            },
            "start": 362,
            "end": 368
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
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
                  "start": 379,
                  "end": 380
                },
                "typeArguments": null,
                "start": 379,
                "end": 380
              },
              "start": 377,
              "end": 380
            },
            "start": 372,
            "end": 380
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 398
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 401,
                      "end": 407
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 408,
                      "end": 411
                    },
                    "optional": false,
                    "computed": true,
                    "start": 401,
                    "end": 412
                  },
                  "definite": false,
                  "start": 393,
                  "end": 412
                }
              ],
              "declare": false,
              "start": 387,
              "end": 413
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 425
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 433,
                          "end": 438
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 439,
                          "end": 443
                        },
                        "optional": false,
                        "computed": false,
                        "start": 433,
                        "end": 443
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 444,
                          "end": 449
                        }
                      ],
                      "optional": false,
                      "start": 433,
                      "end": 450
                    },
                    "directive": null,
                    "start": 433,
                    "end": 451
                  }
                ],
                "start": 427,
                "end": 455
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 467,
                          "end": 473
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 474,
                          "end": 477
                        },
                        "optional": false,
                        "computed": true,
                        "start": 467,
                        "end": 478
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 482,
                            "end": 487
                          }
                        ],
                        "start": 481,
                        "end": 488
                      },
                      "start": 467,
                      "end": 488
                    },
                    "directive": null,
                    "start": 467,
                    "end": 489
                  }
                ],
                "start": 461,
                "end": 493
              },
              "start": 416,
              "end": 493
            }
          ],
          "start": 383,
          "end": 495
        },
        "expression": false,
        "start": 246,
        "end": 495
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 239,
      "end": 495
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 517,
                      "end": 518
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 521,
                          "end": 527
                        },
                        "start": 521,
                        "end": 529
                      },
                      "start": 519,
                      "end": 529
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 517,
                    "end": 530
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 531,
                      "end": 532
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 535,
                          "end": 541
                        },
                        "start": 535,
                        "end": 543
                      },
                      "start": 533,
                      "end": 543
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 531,
                    "end": 544
                  }
                ],
                "start": 516,
                "end": 546
              },
              "start": 514,
              "end": 546
            },
            "start": 511,
            "end": 546
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 549,
            "end": 551
          },
          "definite": false,
          "start": 511,
          "end": 551
        }
      ],
      "declare": false,
      "start": 505,
      "end": 552
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 553,
          "end": 574
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 578
          },
          {
            "type": "Literal",
            "value": "x",
            "raw": "'x'",
            "start": 580,
            "end": 583
          },
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 585,
            "end": 588
          }
        ],
        "optional": false,
        "start": 553,
        "end": 589
      },
      "directive": null,
      "start": 553,
      "end": 590
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 599,
          "end": 620
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 624
          },
          {
            "type": "Literal",
            "value": "y",
            "raw": "'y'",
            "start": 626,
            "end": 629
          },
          {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 631,
            "end": 636
          }
        ],
        "optional": false,
        "start": 599,
        "end": 637
      },
      "directive": null,
      "start": 599,
      "end": 638
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 645,
          "end": 666
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 667,
            "end": 670
          },
          {
            "type": "Literal",
            "value": "y",
            "raw": "'y'",
            "start": 672,
            "end": 675
          },
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 677,
            "end": 679
          }
        ],
        "optional": false,
        "start": 645,
        "end": 680
      },
      "directive": null,
      "start": 645,
      "end": 681
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 700,
          "end": 721
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 725
          },
          {
            "type": "Literal",
            "value": "x",
            "raw": "'x'",
            "start": 727,
            "end": 730
          },
          {
            "type": "Literal",
            "value": "no",
            "raw": "\"no\"",
            "start": 732,
            "end": 736
          }
        ],
        "optional": false,
        "start": 700,
        "end": 737
      },
      "directive": null,
      "start": 700,
      "end": 738
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 196,
  "end": 754
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 196,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Lower",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 217,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 220,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 239,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 246,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "appendToOptionalArray",
    "start": 255,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 282,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 338,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "Lower",
    "start": 346,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 387,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 393,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 408,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 420,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 433,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 439,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 444,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 467,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 482,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 505,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 511,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 535,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "appendToOptionalArray",
    "start": 553,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 575,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 578,
    "end": 579
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 583,
    "end": 584
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 585,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "appendToOptionalArray",
    "start": 599,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 621,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 624,
    "end": 625
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 626,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 629,
    "end": 630
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 631,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "appendToOptionalArray",
    "start": 645,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 667,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 670,
    "end": 671
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 675,
    "end": 676
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 677,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "appendToOptionalArray",
    "start": 700,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 722,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 730,
    "end": 731
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 732,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  }
]
```

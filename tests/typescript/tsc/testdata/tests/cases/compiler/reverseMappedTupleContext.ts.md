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
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 79
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
              "start": 80,
              "end": 81
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 81
          }
        ],
        "start": 79,
        "end": 82
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 93,
                "end": 94
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
                    "start": 104,
                    "end": 105
                  },
                  "typeArguments": null,
                  "start": 104,
                  "end": 105
                },
                "start": 98,
                "end": 105
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
                    "start": 108,
                    "end": 109
                  },
                  "typeArguments": null,
                  "start": 108,
                  "end": 109
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 111
                  },
                  "typeArguments": null,
                  "start": 110,
                  "end": 111
                },
                "start": 108,
                "end": 112
              },
              "optional": false,
              "readonly": null,
              "start": 88,
              "end": 115
            },
            "start": 86,
            "end": 115
          },
          "start": 83,
          "end": 115
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
            "start": 118,
            "end": 119
          },
          "typeArguments": null,
          "start": 118,
          "end": 119
        },
        "start": 116,
        "end": 119
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 120
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 134
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 142
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 144,
                    "end": 149
                  },
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 151,
                    "end": 153
                  }
                ],
                "start": 143,
                "end": 154
              }
            ],
            "optional": false,
            "start": 137,
            "end": 155
          },
          "definite": false,
          "start": 127,
          "end": 155
        }
      ],
      "declare": false,
      "start": 121,
      "end": 156
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 180
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
              "start": 181,
              "end": 182
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 200,
                  "end": 207
                },
                "start": 200,
                "end": 209
              },
              "start": 191,
              "end": 209
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 181,
            "end": 209
          }
        ],
        "start": 180,
        "end": 210
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 221,
                "end": 222
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
                    "start": 232,
                    "end": 233
                  },
                  "typeArguments": null,
                  "start": 232,
                  "end": 233
                },
                "start": 226,
                "end": 233
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
                    "start": 236,
                    "end": 237
                  },
                  "typeArguments": null,
                  "start": 236,
                  "end": 237
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 239
                  },
                  "typeArguments": null,
                  "start": 238,
                  "end": 239
                },
                "start": 236,
                "end": 240
              },
              "optional": false,
              "readonly": null,
              "start": 216,
              "end": 243
            },
            "start": 214,
            "end": 243
          },
          "start": 211,
          "end": 243
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
            "start": 246,
            "end": 247
          },
          "typeArguments": null,
          "start": 246,
          "end": 247
        },
        "start": 244,
        "end": 247
      },
      "body": null,
      "expression": false,
      "start": 158,
      "end": 248
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 262
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 270
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 272,
                    "end": 277
                  },
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 279,
                    "end": 281
                  }
                ],
                "start": 271,
                "end": 282
              }
            ],
            "optional": false,
            "start": 265,
            "end": 283
          },
          "definite": false,
          "start": 255,
          "end": 283
        }
      ],
      "declare": false,
      "start": 249,
      "end": 284
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 297
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 306
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 307,
                  "end": 313
                },
                {
                  "type": "TSUnknownKeyword",
                  "start": 315,
                  "end": 322
                }
              ],
              "start": 306,
              "end": 323
            },
            "start": 300,
            "end": 323
          },
          {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 335,
                "end": 342
              },
              "start": 335,
              "end": 344
            },
            "start": 326,
            "end": 344
          }
        ],
        "start": 300,
        "end": 344
      },
      "declare": false,
      "start": 286,
      "end": 345
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Definition",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 361
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
              "start": 362,
              "end": 363
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 362,
            "end": 363
          }
        ],
        "start": 361,
        "end": 364
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 373
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
              "start": 383,
              "end": 384
            },
            "typeArguments": null,
            "start": 383,
            "end": 384
          },
          "start": 377,
          "end": 384
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
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
                      "start": 394,
                      "end": 395
                    },
                    "typeArguments": null,
                    "start": 394,
                    "end": 395
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 396,
                      "end": 397
                    },
                    "typeArguments": null,
                    "start": 396,
                    "end": 397
                  },
                  "start": 394,
                  "end": 398
                },
                "start": 391,
                "end": 398
              },
              "start": 388,
              "end": 398
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Definition",
                "optional": false,
                "typeAnnotation": null,
                "start": 402,
                "end": 412
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 413,
                        "end": 414
                      },
                      "typeArguments": null,
                      "start": 413,
                      "end": 414
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 415,
                        "end": 416
                      },
                      "typeArguments": null,
                      "start": 415,
                      "end": 416
                    },
                    "start": 413,
                    "end": 417
                  }
                ],
                "start": 412,
                "end": 418
              },
              "start": 402,
              "end": 418
            }
          ],
          "start": 387,
          "end": 418
        },
        "optional": false,
        "readonly": null,
        "start": 367,
        "end": 421
      },
      "declare": false,
      "start": 346,
      "end": 422
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "create",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 446
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
              "start": 447,
              "end": 448
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 463
              },
              "typeArguments": null,
              "start": 457,
              "end": 463
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 447,
            "end": 463
          }
        ],
        "start": 446,
        "end": 464
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "definition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Definition",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 487
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
                      "start": 488,
                      "end": 489
                    },
                    "typeArguments": null,
                    "start": 488,
                    "end": 489
                  }
                ],
                "start": 487,
                "end": 490
              },
              "start": 477,
              "end": 490
            },
            "start": 475,
            "end": 490
          },
          "start": 465,
          "end": 490
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
            "start": 493,
            "end": 494
          },
          "typeArguments": null,
          "start": 493,
          "end": 494
        },
        "start": 491,
        "end": 494
      },
      "body": null,
      "expression": false,
      "start": 423,
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
            "name": "created1",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 510
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 519
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 527,
                      "end": 528
                    },
                    "id": null,
                    "generator": false,
                    "start": 521,
                    "end": 528
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 537,
                          "end": 539
                        },
                        "id": null,
                        "generator": false,
                        "start": 531,
                        "end": 539
                      }
                    ],
                    "start": 530,
                    "end": 540
                  }
                ],
                "start": 520,
                "end": 541
              }
            ],
            "optional": false,
            "start": 513,
            "end": 542
          },
          "definite": false,
          "start": 502,
          "end": 542
        }
      ],
      "declare": false,
      "start": 496,
      "end": 543
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
            "name": "created2",
            "optional": false,
            "typeAnnotation": null,
            "start": 550,
            "end": 558
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 561,
              "end": 567
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 572,
                      "end": 573
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 581,
                        "end": 582
                      },
                      "id": null,
                      "generator": false,
                      "start": 575,
                      "end": 582
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 572,
                    "end": 582
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 586,
                      "end": 587
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 596,
                            "end": 598
                          },
                          "id": null,
                          "generator": false,
                          "start": 590,
                          "end": 598
                        }
                      ],
                      "start": 589,
                      "end": 599
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 586,
                    "end": 599
                  }
                ],
                "start": 568,
                "end": 602
              }
            ],
            "optional": false,
            "start": 561,
            "end": 603
          },
          "definite": false,
          "start": 550,
          "end": 603
        }
      ],
      "declare": false,
      "start": 544,
      "end": 604
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CompilerOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 616,
        "end": 631
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
              "name": "allowUnreachableCode",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 656
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 659,
                "end": 666
              },
              "start": 657,
              "end": 666
            },
            "accessibility": null,
            "static": false,
            "start": 636,
            "end": 667
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "allowUnusedLabels",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 687
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 690,
                "end": 697
              },
              "start": 688,
              "end": 697
            },
            "accessibility": null,
            "static": false,
            "start": 670,
            "end": 698
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "alwaysStrict",
              "optional": false,
              "typeAnnotation": null,
              "start": 701,
              "end": 713
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 716,
                "end": 723
              },
              "start": 714,
              "end": 723
            },
            "accessibility": null,
            "static": false,
            "start": 701,
            "end": 724
          }
        ],
        "start": 632,
        "end": 726
      },
      "declare": false,
      "start": 606,
      "end": 726
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeepLiteralStrings",
        "optional": false,
        "typeAnnotation": null,
        "start": 732,
        "end": 750
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
              "start": 751,
              "end": 752
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 761,
                "end": 767
              },
              "start": 761,
              "end": 769
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 751,
            "end": 769
          }
        ],
        "start": 750,
        "end": 770
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 778,
          "end": 779
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
              "start": 789,
              "end": 790
            },
            "typeArguments": null,
            "start": 789,
            "end": 790
          },
          "start": 783,
          "end": 790
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
              "start": 793,
              "end": 794
            },
            "typeArguments": null,
            "start": 793,
            "end": 794
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 796
            },
            "typeArguments": null,
            "start": 795,
            "end": 796
          },
          "start": 793,
          "end": 797
        },
        "optional": false,
        "readonly": null,
        "start": 773,
        "end": 800
      },
      "declare": false,
      "start": 727,
      "end": 801
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 819,
        "end": 824
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
              "start": 825,
              "end": 826
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 841
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 842,
                    "end": 848
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 850,
                      "end": 856
                    },
                    "start": 850,
                    "end": 858
                  }
                ],
                "start": 841,
                "end": 859
              },
              "start": 835,
              "end": 859
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 825,
            "end": 859
          }
        ],
        "start": 824,
        "end": 860
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 871,
                "end": 872
              },
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
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
                        "start": 882,
                        "end": 883
                      },
                      "typeArguments": null,
                      "start": 882,
                      "end": 883
                    },
                    "start": 876,
                    "end": 883
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CompilerOptions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 892,
                        "end": 907
                      },
                      "typeArguments": null,
                      "start": 892,
                      "end": 907
                    },
                    "start": 886,
                    "end": 907
                  }
                ],
                "start": 876,
                "end": 907
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dependencies",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 916,
                      "end": 928
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KeepLiteralStrings",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 930,
                          "end": 948
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 949,
                                  "end": 950
                                },
                                "typeArguments": null,
                                "start": 949,
                                "end": 950
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 951,
                                  "end": 952
                                },
                                "typeArguments": null,
                                "start": 951,
                                "end": 952
                              },
                              "start": 949,
                              "end": 953
                            }
                          ],
                          "start": 948,
                          "end": 954
                        },
                        "start": 930,
                        "end": 954
                      },
                      "start": 928,
                      "end": 954
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 916,
                    "end": 955
                  }
                ],
                "start": 910,
                "end": 959
              },
              "optional": false,
              "readonly": null,
              "start": 866,
              "end": 962
            },
            "start": 864,
            "end": 962
          },
          "start": 861,
          "end": 962
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
            "start": 965,
            "end": 966
          },
          "typeArguments": null,
          "start": 965,
          "end": 966
        },
        "start": 963,
        "end": 966
      },
      "body": null,
      "expression": false,
      "start": 802,
      "end": 967
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
            "name": "result4",
            "optional": false,
            "typeAnnotation": null,
            "start": 974,
            "end": 981
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test4",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 989
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
                      "name": "alwaysStrict",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 994,
                      "end": 1006
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dependencies",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1014,
                            "end": 1026
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "\"foo\"",
                                "start": 1029,
                                "end": 1034
                              },
                              {
                                "type": "Literal",
                                "value": "bar",
                                "raw": "\"bar\"",
                                "start": 1036,
                                "end": 1041
                              }
                            ],
                            "start": 1028,
                            "end": 1042
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1014,
                          "end": 1042
                        }
                      ],
                      "start": 1008,
                      "end": 1047
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 994,
                    "end": 1047
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "allowUnusedLabels",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1051,
                      "end": 1068
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dependencies",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1076,
                            "end": 1088
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "baz",
                                "raw": "\"baz\"",
                                "start": 1091,
                                "end": 1096
                              },
                              {
                                "type": "Literal",
                                "value": "qwe",
                                "raw": "\"qwe\"",
                                "start": 1098,
                                "end": 1103
                              }
                            ],
                            "start": 1090,
                            "end": 1104
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1076,
                          "end": 1104
                        }
                      ],
                      "start": 1070,
                      "end": 1109
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1051,
                    "end": 1109
                  }
                ],
                "start": 990,
                "end": 1112
              }
            ],
            "optional": false,
            "start": 984,
            "end": 1113
          },
          "definite": false,
          "start": 974,
          "end": 1113
        }
      ],
      "declare": false,
      "start": 968,
      "end": 1114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1114
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 65,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 98,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 121,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 127,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 137,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 143,
    "end": 144
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 144,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 158,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 166,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 183,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 191,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ">",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 223,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 226,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 249,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 265,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 271,
    "end": 272
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 286,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 315,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 326,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 335,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 346,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "Definition",
    "start": 351,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 374,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 377,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 391,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "Definition",
    "start": 402,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 423,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 431,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 449,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 457,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "definition",
    "start": 465,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Definition",
    "start": 477,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 496,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "created1",
    "start": 502,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 524,
    "end": 526
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 534,
    "end": 536
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 544,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "created2",
    "start": 550,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 561,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 578,
    "end": 580
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 593,
    "end": 595
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 596,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 606,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "CompilerOptions",
    "start": 616,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "allowUnreachableCode",
    "start": 636,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 659,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "allowUnusedLabels",
    "start": 670,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 690,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "alwaysStrict",
    "start": 701,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 716,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 727,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "KeepLiteralStrings",
    "start": 732,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 751,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 753,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 761,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 780,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 783,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 802,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 810,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 819,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 827,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 835,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 842,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 850,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 861,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 871,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 873,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 876,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 886,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "CompilerOptions",
    "start": 892,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "dependencies",
    "start": 916,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "KeepLiteralStrings",
    "start": 930,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 968,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "result4",
    "start": 974,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 984,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "alwaysStrict",
    "start": 994,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "dependencies",
    "start": 1014,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1029,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 1036,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "allowUnusedLabels",
    "start": 1051,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "dependencies",
    "start": 1076,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 1091,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "String",
    "value": "\"qwe\"",
    "start": 1098,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1113,
    "end": 1114
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 15,
                  "end": 16
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 18,
                  "end": 19
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 15,
                "end": 19
              }
            ],
            "start": 13,
            "end": 21
          },
          "definite": false,
          "start": 6,
          "end": 21
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
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
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 33
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
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 42,
                          "end": 43
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 45,
                              "end": 49
                            },
                            "start": 45,
                            "end": 49
                          },
                          "start": 43,
                          "end": 49
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 42,
                        "end": 49
                      }
                    ],
                    "start": 40,
                    "end": 51
                  },
                  "start": 38,
                  "end": 51
                },
                "start": 37,
                "end": 51
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 56,
              "end": 58
            },
            "id": null,
            "generator": false,
            "start": 36,
            "end": 58
          },
          "definite": false,
          "start": 30,
          "end": 58
        }
      ],
      "declare": false,
      "start": 24,
      "end": 59
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 60,
          "end": 63
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 64,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 77,
              "end": 84
            },
            "start": 64,
            "end": 84
          }
        ],
        "optional": false,
        "start": 60,
        "end": 85
      },
      "directive": null,
      "start": 60,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 90
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
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
                    "start": 93,
                    "end": 94
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 96,
                    "end": 97
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 93,
                  "end": 97
                }
              ],
              "start": 91,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 110,
              "end": 117
            },
            "start": 91,
            "end": 117
          }
        ],
        "optional": false,
        "start": 87,
        "end": 118
      },
      "directive": null,
      "start": 87,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 123
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 139,
              "end": 146
            },
            "start": 124,
            "end": 146
          }
        ],
        "optional": false,
        "start": 120,
        "end": 147
      },
      "directive": null,
      "start": 120,
      "end": 148
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls1",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 160
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
              "start": 165,
              "end": 176
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 183
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 185,
                                "end": 189
                              },
                              "start": 185,
                              "end": 189
                            },
                            "start": 183,
                            "end": 189
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 182,
                          "end": 189
                        }
                      ],
                      "start": 180,
                      "end": 191
                    },
                    "start": 178,
                    "end": 191
                  },
                  "start": 177,
                  "end": 191
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 193,
                "end": 195
              },
              "expression": false,
              "start": 176,
              "end": 195
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 165,
            "end": 195
          }
        ],
        "start": 161,
        "end": 197
      },
      "abstract": false,
      "declare": false,
      "start": 150,
      "end": 197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls1",
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 206
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 207,
              "end": 209
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 220,
              "end": 227
            },
            "start": 207,
            "end": 227
          }
        ],
        "start": 198,
        "end": 228
      },
      "directive": null,
      "start": 198,
      "end": 229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls1",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 238
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
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
                    "start": 241,
                    "end": 242
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 244,
                    "end": 245
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 241,
                  "end": 245
                }
              ],
              "start": 239,
              "end": 247
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 258,
              "end": 265
            },
            "start": 239,
            "end": 265
          }
        ],
        "start": 230,
        "end": 266
      },
      "directive": null,
      "start": 230,
      "end": 267
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls1",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 276
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 281
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 292,
              "end": 299
            },
            "start": 277,
            "end": 299
          }
        ],
        "start": 268,
        "end": 300
      },
      "directive": null,
      "start": 268,
      "end": 301
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 312,
        "end": 315
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 317
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 328,
                      "end": 329
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 331,
                          "end": 335
                        },
                        "start": 331,
                        "end": 335
                      },
                      "start": 329,
                      "end": 335
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 328,
                    "end": 335
                  }
                ],
                "start": 326,
                "end": 337
              },
              "start": 326,
              "end": 339
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 316,
            "end": 339
          }
        ],
        "start": 315,
        "end": 340
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 348,
                    "end": 352
                  },
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
                        "start": 354,
                        "end": 355
                      },
                      "typeArguments": null,
                      "start": 354,
                      "end": 355
                    },
                    "start": 352,
                    "end": 355
                  },
                  "value": null,
                  "start": 345,
                  "end": 355
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 360,
                  "end": 364
                },
                "start": 357,
                "end": 364
              },
              "start": 344,
              "end": 364
            },
            "start": 342,
            "end": 364
          },
          "start": 341,
          "end": 364
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 371
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSSatisfiesExpression",
                  "expression": {
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
                          "start": 374,
                          "end": 375
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 377,
                          "end": 381
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 374,
                        "end": 381
                      }
                    ],
                    "start": 372,
                    "end": 383
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 394,
                    "end": 401
                  },
                  "start": 372,
                  "end": 401
                }
              ],
              "optional": false,
              "start": 370,
              "end": 402
            },
            "directive": null,
            "start": 370,
            "end": 403
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 413
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 418,
                        "end": 419
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 421,
                          "end": 425
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 429,
                            "end": 434
                          },
                          "typeArguments": null,
                          "start": 429,
                          "end": 434
                        },
                        "start": 421,
                        "end": 434
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 418,
                      "end": 434
                    }
                  ],
                  "start": 416,
                  "end": 436
                },
                "definite": false,
                "start": 412,
                "end": 436
              }
            ],
            "declare": false,
            "start": 406,
            "end": 437
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 441
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 443
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 454,
                    "end": 461
                  },
                  "start": 442,
                  "end": 461
                }
              ],
              "optional": false,
              "start": 440,
              "end": 462
            },
            "directive": null,
            "start": 440,
            "end": 463
          }
        ],
        "start": 366,
        "end": 465
      },
      "expression": false,
      "start": 303,
      "end": 465
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
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 482,
                    "end": 489
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 491,
                    "end": 498
                  }
                ],
                "start": 481,
                "end": 499
              },
              "start": 479,
              "end": 499
            },
            "start": 473,
            "end": 499
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 503,
                "end": 507
              },
              {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 509,
                  "end": 512
                },
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 523,
                  "end": 530
                },
                "start": 509,
                "end": 530
              }
            ],
            "start": 502,
            "end": 531
          },
          "definite": false,
          "start": 473,
          "end": 531
        }
      ],
      "declare": false,
      "start": 467,
      "end": 532
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 544
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
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
                    "start": 549,
                    "end": 550
                  },
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 552,
                    "end": 554
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 549,
                  "end": 554
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
                    "start": 556,
                    "end": 557
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 559,
                    "end": 563
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 556,
                  "end": 563
                }
              ],
              "start": 547,
              "end": 565
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 582
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 583,
                    "end": 589
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 591,
                    "end": 597
                  }
                ],
                "start": 582,
                "end": 598
              },
              "start": 576,
              "end": 598
            },
            "start": 547,
            "end": 598
          },
          "definite": false,
          "start": 540,
          "end": 598
        }
      ],
      "declare": false,
      "start": 534,
      "end": 599
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
            "name": "literal1",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 615
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 618,
              "end": 619
            },
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 630,
              "end": 637
            },
            "start": 618,
            "end": 637
          },
          "definite": false,
          "start": 607,
          "end": 637
        }
      ],
      "declare": false,
      "start": 601,
      "end": 638
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
            "name": "literal2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 655,
                  "end": 659
                },
                "start": 655,
                "end": 659
              },
              "start": 653,
              "end": 659
            },
            "start": 645,
            "end": 659
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 662,
              "end": 663
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 674,
              "end": 680
            },
            "start": 662,
            "end": 680
          },
          "definite": false,
          "start": 645,
          "end": 680
        }
      ],
      "declare": false,
      "start": 639,
      "end": 681
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 700,
        "end": 703
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 707,
            "end": 711
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 713,
                "end": 720
              },
              "start": 713,
              "end": 722
            },
            "start": 711,
            "end": 722
          },
          "value": null,
          "start": 704,
          "end": 722
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 725,
          "end": 729
        },
        "start": 723,
        "end": 729
      },
      "body": null,
      "expression": false,
      "start": 683,
      "end": 730
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 731,
          "end": 734
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 735,
            "end": 737
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 744,
                    "end": 746
                  },
                  {
                    "type": "Literal",
                    "value": "20",
                    "raw": "\"20\"",
                    "start": 748,
                    "end": 752
                  }
                ],
                "start": 743,
                "end": 753
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 764,
                  "end": 770
                },
                "start": 764,
                "end": 772
              },
              "start": 743,
              "end": 772
            },
            "start": 739,
            "end": 773
          }
        ],
        "optional": false,
        "start": 731,
        "end": 774
      },
      "directive": null,
      "start": 731,
      "end": 775
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
            "name": "tuple2",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 788
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 792,
                  "end": 794
                },
                {
                  "type": "Literal",
                  "value": "20",
                  "raw": "\"20\"",
                  "start": 796,
                  "end": 800
                }
              ],
              "start": 791,
              "end": 801
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 810
              },
              "typeArguments": null,
              "start": 805,
              "end": 810
            },
            "start": 791,
            "end": 810
          },
          "definite": false,
          "start": 782,
          "end": 810
        }
      ],
      "declare": false,
      "start": 776,
      "end": 811
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 812,
          "end": 815
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 816,
            "end": 818
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "tuple2",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 830
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 841,
                  "end": 847
                },
                "start": 841,
                "end": 849
              },
              "start": 824,
              "end": 849
            },
            "start": 820,
            "end": 850
          }
        ],
        "optional": false,
        "start": 812,
        "end": 851
      },
      "directive": null,
      "start": 812,
      "end": 852
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 871,
        "end": 874
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 878,
            "end": 882
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 884,
                "end": 890
              },
              "start": 884,
              "end": 892
            },
            "start": 882,
            "end": 892
          },
          "value": null,
          "start": 875,
          "end": 892
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 895,
          "end": 899
        },
        "start": 893,
        "end": 899
      },
      "body": null,
      "expression": false,
      "start": 854,
      "end": 900
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 901,
          "end": 904
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 905,
            "end": 907
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "10",
                    "raw": "\"10\"",
                    "start": 914,
                    "end": 918
                  },
                  {
                    "type": "Literal",
                    "value": "20",
                    "raw": "\"20\"",
                    "start": 920,
                    "end": 924
                  }
                ],
                "start": 913,
                "end": 925
              },
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 945,
                    "end": 951
                  },
                  "start": 945,
                  "end": 953
                },
                "start": 936,
                "end": 953
              },
              "start": 913,
              "end": 953
            },
            "start": 909,
            "end": 954
          }
        ],
        "optional": false,
        "start": 901,
        "end": 955
      },
      "directive": null,
      "start": 901,
      "end": 956
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
            "name": "tuple3",
            "optional": false,
            "typeAnnotation": null,
            "start": 963,
            "end": 969
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "10",
                  "raw": "\"10\"",
                  "start": 973,
                  "end": 977
                },
                {
                  "type": "Literal",
                  "value": "20",
                  "raw": "\"20\"",
                  "start": 979,
                  "end": 983
                }
              ],
              "start": 972,
              "end": 984
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 988,
                "end": 993
              },
              "typeArguments": null,
              "start": 988,
              "end": 993
            },
            "start": 972,
            "end": 993
          },
          "definite": false,
          "start": 963,
          "end": 993
        }
      ],
      "declare": false,
      "start": 957,
      "end": 994
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 995,
          "end": 998
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 999,
            "end": 1001
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "tuple3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1007,
                "end": 1013
              },
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 1033,
                    "end": 1039
                  },
                  "start": 1033,
                  "end": 1041
                },
                "start": 1024,
                "end": 1041
              },
              "start": 1007,
              "end": 1041
            },
            "start": 1003,
            "end": 1042
          }
        ],
        "optional": false,
        "start": 995,
        "end": 1043
      },
      "directive": null,
      "start": 995,
      "end": 1044
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1055,
        "end": 1058
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1062,
          "end": 1068
        },
        "start": 1060,
        "end": 1068
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 1080,
                "end": 1085
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1096,
                "end": 1103
              },
              "start": 1080,
              "end": 1103
            },
            "start": 1073,
            "end": 1104
          }
        ],
        "start": 1069,
        "end": 1106
      },
      "expression": false,
      "start": 1046,
      "end": 1106
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1117,
        "end": 1120
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1124,
          "end": 1130
        },
        "start": 1122,
        "end": 1130
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 1142,
                "end": 1147
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1158,
                "end": 1164
              },
              "start": 1142,
              "end": 1164
            },
            "start": 1135,
            "end": 1165
          }
        ],
        "start": 1131,
        "end": 1167
      },
      "expression": false,
      "start": 1108,
      "end": 1167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1176,
                    "end": 1177
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1179,
                        "end": 1183
                      },
                      "start": 1179,
                      "end": 1183
                    },
                    "start": 1177,
                    "end": 1183
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1176,
                  "end": 1183
                }
              ],
              "start": 1174,
              "end": 1185
            },
            "start": 1172,
            "end": 1185
          },
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1190,
              "end": 1192
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1204,
              "end": 1211
            },
            "start": 1189,
            "end": 1211
          },
          "id": null,
          "generator": false,
          "start": 1170,
          "end": 1211
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1169,
        "end": 1214
      },
      "directive": null,
      "start": 1169,
      "end": 1215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1223,
                    "end": 1224
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1226,
                        "end": 1230
                      },
                      "start": 1226,
                      "end": 1230
                    },
                    "start": 1224,
                    "end": 1230
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1223,
                  "end": 1230
                }
              ],
              "start": 1221,
              "end": 1232
            },
            "start": 1219,
            "end": 1232
          },
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
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
                    "start": 1239,
                    "end": 1240
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1242,
                    "end": 1243
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1239,
                  "end": 1243
                }
              ],
              "start": 1237,
              "end": 1245
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1257,
              "end": 1264
            },
            "start": 1236,
            "end": 1264
          },
          "id": null,
          "generator": false,
          "start": 1217,
          "end": 1264
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1216,
        "end": 1267
      },
      "directive": null,
      "start": 1216,
      "end": 1268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1276,
                    "end": 1277
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1279,
                        "end": 1283
                      },
                      "start": 1279,
                      "end": 1283
                    },
                    "start": 1277,
                    "end": 1283
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1276,
                  "end": 1283
                }
              ],
              "start": 1274,
              "end": 1285
            },
            "start": 1272,
            "end": 1285
          },
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1289,
              "end": 1293
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1304,
              "end": 1311
            },
            "start": 1289,
            "end": 1311
          },
          "id": null,
          "generator": false,
          "start": 1270,
          "end": 1311
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1269,
        "end": 1314
      },
      "directive": null,
      "start": 1269,
      "end": 1315
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1324,
                    "end": 1325
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1327,
                        "end": 1331
                      },
                      "start": 1327,
                      "end": 1331
                    },
                    "start": 1325,
                    "end": 1331
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1324,
                  "end": 1331
                }
              ],
              "start": 1322,
              "end": 1333
            },
            "start": 1320,
            "end": 1333
          },
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1339,
                "end": 1341
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1353,
                "end": 1360
              },
              "start": 1338,
              "end": 1360
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1372,
              "end": 1379
            },
            "start": 1337,
            "end": 1379
          },
          "id": null,
          "generator": false,
          "start": 1318,
          "end": 1379
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1317,
        "end": 1382
      },
      "directive": null,
      "start": 1317,
      "end": 1383
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1391,
                    "end": 1392
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1394,
                        "end": 1398
                      },
                      "start": 1394,
                      "end": 1398
                    },
                    "start": 1392,
                    "end": 1398
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1391,
                  "end": 1398
                }
              ],
              "start": 1389,
              "end": 1400
            },
            "start": 1387,
            "end": 1400
          },
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1407,
                "end": 1409
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1421,
                "end": 1428
              },
              "start": 1406,
              "end": 1428
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1441,
              "end": 1448
            },
            "start": 1404,
            "end": 1448
          },
          "id": null,
          "generator": false,
          "start": 1385,
          "end": 1448
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1384,
        "end": 1451
      },
      "directive": null,
      "start": 1384,
      "end": 1452
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1452
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 24,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 67,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 77,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 100,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 110,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 124,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 129,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 139,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 150,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Cls1",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 165,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 198,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Cls1",
    "start": 202,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 210,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 220,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 230,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "Cls1",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 248,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "Cls1",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 277,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 282,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 292,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 303,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 312,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 318,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 331,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ">",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 345,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 348,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 357,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 377,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 384,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 394,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 406,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 421,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 426,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 429,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 444,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 454,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 467,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "tuple1",
    "start": 473,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "boolean",
    "start": 482,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 491,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 502,
    "end": 503
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 503,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 507,
    "end": 508
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 509,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 513,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 523,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 534,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 540,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 552,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 559,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 566,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 583,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 591,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 601,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "literal1",
    "start": 607,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 620,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 630,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 639,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "literal2",
    "start": 645,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 664,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 674,
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
    "value": "declare",
    "start": 683,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 691,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 700,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 704,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 707,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 713,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 725,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 731,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 734,
    "end": 735
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 735,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 739,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 743,
    "end": 744
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 744,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 746,
    "end": 747
  },
  {
    "type": "String",
    "value": "\"20\"",
    "start": 748,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 754,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 764,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 776,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "tuple2",
    "start": 782,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 791,
    "end": 792
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 792,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 794,
    "end": 795
  },
  {
    "type": "String",
    "value": "\"20\"",
    "start": 796,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 802,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 805,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 812,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 815,
    "end": 816
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 816,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 820,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "tuple2",
    "start": 824,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 831,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 854,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 862,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 871,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 875,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 878,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 884,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 895,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 901,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 904,
    "end": 905
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 905,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 909,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 913,
    "end": 914
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 914,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 918,
    "end": 919
  },
  {
    "type": "String",
    "value": "\"20\"",
    "start": 920,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 926,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 936,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 945,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ")",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 957,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "tuple3",
    "start": 963,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 972,
    "end": 973
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 973,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 977,
    "end": 978
  },
  {
    "type": "String",
    "value": "\"20\"",
    "start": 979,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 985,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 988,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 995,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1003,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "tuple3",
    "start": 1007,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1014,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1024,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1033,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1046,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 1055,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1062,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1073,
    "end": 1079
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1080,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1086,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1096,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1108,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "fn6",
    "start": 1117,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1124,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1135,
    "end": 1141
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1142,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1148,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1158,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1179,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1186,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1194,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1204,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1226,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1233,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1247,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1257,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1279,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1286,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1289,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1294,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1304,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1327,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1334,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1343,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1353,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1362,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1372,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1394,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1401,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1411,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1421,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1431,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1441,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1451,
    "end": 1452
  }
]
```

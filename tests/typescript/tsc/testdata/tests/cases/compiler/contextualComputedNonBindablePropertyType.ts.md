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
        "name": "testD",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 39
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "d",
            "raw": "\"d\"",
            "start": 43,
            "end": 46
          },
          "start": 43,
          "end": 46
        },
        "start": 41,
        "end": 46
      },
      "body": null,
      "expression": false,
      "start": 17,
      "end": 47
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forceMatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 76
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
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 78
          }
        ],
        "start": 76,
        "end": 79
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "matched",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 97
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
                    "start": 107,
                    "end": 108
                  },
                  "typeArguments": null,
                  "start": 107,
                  "end": 108
                },
                "start": 101,
                "end": 108
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 114
                },
                "typeArguments": null,
                "start": 111,
                "end": 114
              },
              "optional": false,
              "readonly": null,
              "start": 89,
              "end": 117
            },
            "start": 87,
            "end": 117
          },
          "start": 80,
          "end": 117
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 120,
          "end": 124
        },
        "start": 118,
        "end": 124
      },
      "body": null,
      "expression": false,
      "start": 49,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "forceMatch",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 137
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 148
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 143,
                  "end": 150
                },
                "value": {
                  "type": "Literal",
                  "value": "d",
                  "raw": "\"d\"",
                  "start": 153,
                  "end": 156
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 142,
                "end": 156
              }
            ],
            "start": 138,
            "end": 159
          }
        ],
        "optional": false,
        "start": 127,
        "end": 160
      },
      "directive": null,
      "start": 127,
      "end": 161
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forceMatch2",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 191
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
              "start": 192,
              "end": 193
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 192,
            "end": 193
          }
        ],
        "start": 191,
        "end": 194
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "matched",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 212
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
                    "start": 222,
                    "end": 223
                  },
                  "typeArguments": null,
                  "start": 222,
                  "end": 223
                },
                "start": 216,
                "end": 223
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 229,
                          "end": 232
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 229,
                          "end": 232
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 229,
                        "end": 232
                      }
                    ],
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
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 238,
                              "end": 241
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 243,
                                  "end": 246
                                },
                                "typeArguments": null,
                                "start": 243,
                                "end": 246
                              },
                              "start": 241,
                              "end": 246
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 238,
                            "end": 246
                          }
                        ],
                        "start": 236,
                        "end": 248
                      },
                      "start": 234,
                      "end": 248
                    },
                    "start": 227,
                    "end": 248
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 253,
                    "end": 257
                  },
                  "start": 250,
                  "end": 257
                },
                "start": 226,
                "end": 257
              },
              "optional": false,
              "readonly": null,
              "start": 204,
              "end": 260
            },
            "start": 202,
            "end": 260
          },
          "start": 195,
          "end": 260
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 263,
          "end": 267
        },
        "start": 261,
        "end": 267
      },
      "body": null,
      "expression": false,
      "start": 163,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "forceMatch2",
          "optional": false,
          "typeAnnotation": null,
          "start": 270,
          "end": 281
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 287,
                    "end": 292
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 287,
                  "end": 294
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 300,
                            "end": 303
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 300,
                            "end": 303
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 300,
                          "end": 303
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 305
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 310,
                    "end": 312
                  },
                  "id": null,
                  "generator": false,
                  "start": 297,
                  "end": 312
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 286,
                "end": 312
              }
            ],
            "start": 282,
            "end": 315
          }
        ],
        "optional": false,
        "start": 270,
        "end": 316
      },
      "directive": null,
      "start": 270,
      "end": 317
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Original",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 349
      },
      "typeParameters": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 357
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "expects a string literal",
                  "raw": "'expects a string literal'",
                  "start": 359,
                  "end": 385
                },
                "start": 359,
                "end": 385
              },
              "start": 357,
              "end": 385
            },
            "accessibility": null,
            "static": false,
            "start": 354,
            "end": 386
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 390
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 392,
                "end": 399
              },
              "start": 390,
              "end": 399
            },
            "accessibility": null,
            "static": false,
            "start": 387,
            "end": 400
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 404
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 406,
                "end": 412
              },
              "start": 404,
              "end": 412
            },
            "accessibility": null,
            "static": false,
            "start": 401,
            "end": 412
          }
        ],
        "start": 352,
        "end": 414
      },
      "declare": false,
      "start": 336,
      "end": 414
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 427
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 435,
          "end": 439
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Original",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 457
            },
            "typeArguments": null,
            "start": 449,
            "end": 457
          },
          "start": 443,
          "end": 457
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Original",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 466,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 466,
                    "end": 474
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 475,
                      "end": 479
                    },
                    "typeArguments": null,
                    "start": 475,
                    "end": 479
                  },
                  "start": 466,
                  "end": 480
                },
                "start": 464,
                "end": 480
              },
              "start": 461,
              "end": 480
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Original",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 493
                },
                "typeArguments": null,
                "start": 485,
                "end": 493
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 498
                },
                "typeArguments": null,
                "start": 494,
                "end": 498
              },
              "start": 485,
              "end": 499
            },
            "start": 482,
            "end": 499
          },
          "start": 460,
          "end": 499
        },
        "optional": false,
        "readonly": null,
        "start": 430,
        "end": 501
      },
      "declare": false,
      "start": 416,
      "end": 501
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
            "name": "propSelector",
            "optional": false,
            "typeAnnotation": null,
            "start": 509,
            "end": 521
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
                    "name": "propName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 534
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 543,
                    "end": 549
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 526,
                  "end": 549
                }
              ],
              "start": 525,
              "end": 550
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "propName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 561,
                      "end": 569
                    },
                    "typeArguments": null,
                    "start": 561,
                    "end": 569
                  },
                  "start": 559,
                  "end": 569
                },
                "start": 551,
                "end": 569
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 580
                },
                "typeArguments": null,
                "start": 572,
                "end": 580
              },
              "start": 570,
              "end": 580
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "propName",
              "optional": false,
              "typeAnnotation": null,
              "start": 584,
              "end": 592
            },
            "id": null,
            "generator": false,
            "start": 525,
            "end": 592
          },
          "definite": false,
          "start": 509,
          "end": 592
        }
      ],
      "declare": false,
      "start": 503,
      "end": 593
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
            "name": "unexpectedlyFailingExample",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapped",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 629,
                  "end": 635
                },
                "typeArguments": null,
                "start": 629,
                "end": 635
              },
              "start": 627,
              "end": 635
            },
            "start": 601,
            "end": 635
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 642,
                  "end": 645
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
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 648,
                      "end": 651
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "expects a string literal",
                    "raw": "'expects a string literal'",
                    "start": 656,
                    "end": 682
                  },
                  "id": null,
                  "generator": false,
                  "start": 647,
                  "end": 682
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 642,
                "end": 682
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 686,
                  "end": 689
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
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 692,
                      "end": 695
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 700,
                    "end": 704
                  },
                  "id": null,
                  "generator": false,
                  "start": 691,
                  "end": 704
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 686,
                "end": 704
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "propSelector",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 709,
                    "end": 721
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "'bar'",
                      "start": 722,
                      "end": 727
                    }
                  ],
                  "optional": false,
                  "start": 709,
                  "end": 728
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
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 732,
                      "end": 735
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 51345,
                    "raw": "51345",
                    "start": 740,
                    "end": 745
                  },
                  "id": null,
                  "generator": false,
                  "start": 731,
                  "end": 745
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 708,
                "end": 745
              }
            ],
            "start": 638,
            "end": 747
          },
          "definite": false,
          "start": 601,
          "end": 747
        }
      ],
      "declare": false,
      "start": 595,
      "end": 747
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 747
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 17,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 25,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "testD",
    "start": 34,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "String",
    "value": "\"d\"",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 49,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 57,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "forceMatch",
    "start": 66,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "matched",
    "start": 80,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 94,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 98,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
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
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "forceMatch",
    "start": 127,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "testD",
    "start": 143,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "String",
    "value": "\"d\"",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 163,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 171,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "forceMatch2",
    "start": 180,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "matched",
    "start": 195,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 209,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 213,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 216,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 238,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 243,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 250,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "forceMatch2",
    "start": 270,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
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
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "testD",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 336,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Original",
    "start": 341,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "String",
    "value": "'expects a string literal'",
    "start": 359,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 387,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 392,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 401,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 406,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 416,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "Mapped",
    "start": 421,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 435,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 440,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 443,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "Original",
    "start": 449,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "Original",
    "start": 466,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 475,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 482,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "Original",
    "start": 485,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 494,
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
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 503,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "propSelector",
    "start": 509,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 526,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 535,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 543,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 551,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 561,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 572,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 581,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 584,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 595,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "unexpectedlyFailingExample",
    "start": 601,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "Mapped",
    "start": 629,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 642,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 648,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 653,
    "end": 655
  },
  {
    "type": "String",
    "value": "'expects a string literal'",
    "start": 656,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 686,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 692,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 697,
    "end": 699
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 700,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "propSelector",
    "start": 709,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 722,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 732,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 737,
    "end": 739
  },
  {
    "type": "Numeric",
    "value": "51345",
    "start": 740,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 746,
    "end": 747
  }
]
```

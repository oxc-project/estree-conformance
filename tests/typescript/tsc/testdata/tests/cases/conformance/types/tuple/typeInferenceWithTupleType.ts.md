__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "combine",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
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
              "start": 17,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 18
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 16,
        "end": 22
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 27
              },
              "typeArguments": null,
              "start": 26,
              "end": 27
            },
            "start": 24,
            "end": 27
          },
          "start": 23,
          "end": 27
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
              },
              "typeArguments": null,
              "start": 32,
              "end": 33
            },
            "start": 30,
            "end": 33
          },
          "start": 29,
          "end": 33
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 38
              },
              "typeArguments": null,
              "start": 37,
              "end": 38
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 41
              },
              "typeArguments": null,
              "start": 40,
              "end": 41
            }
          ],
          "start": 36,
          "end": 42
        },
        "start": 34,
        "end": 42
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 58
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 61
                }
              ],
              "start": 56,
              "end": 62
            },
            "start": 49,
            "end": 63
          }
        ],
        "start": 43,
        "end": 65
      },
      "expression": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "combineResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 84
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "combine",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 94
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 95,
                "end": 103
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 105,
                "end": 107
              }
            ],
            "optional": false,
            "start": 87,
            "end": 108
          },
          "definite": false,
          "start": 71,
          "end": 108
        }
      ],
      "declare": false,
      "start": 67,
      "end": 109
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "combineEle1",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 125
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combineResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 141
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 142,
              "end": 143
            },
            "optional": false,
            "computed": true,
            "start": 128,
            "end": 144
          },
          "definite": false,
          "start": 114,
          "end": 144
        }
      ],
      "declare": false,
      "start": 110,
      "end": 145
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "combineEle2",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 171
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combineResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 187
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 188,
              "end": 189
            },
            "optional": false,
            "computed": true,
            "start": 174,
            "end": 190
          },
          "definite": false,
          "start": 160,
          "end": 190
        }
      ],
      "declare": false,
      "start": 156,
      "end": 191
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "zip",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 215
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
              "start": 216,
              "end": 217
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 216,
            "end": 217
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 219,
            "end": 220
          }
        ],
        "start": 215,
        "end": 221
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
              "start": 230,
              "end": 233
            },
            "start": 228,
            "end": 233
          },
          "start": 222,
          "end": 233
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 244
                },
                "typeArguments": null,
                "start": 243,
                "end": 244
              },
              "start": 243,
              "end": 246
            },
            "start": 241,
            "end": 246
          },
          "start": 235,
          "end": 246
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 252
                  },
                  "typeArguments": null,
                  "start": 251,
                  "end": 252
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 254,
                    "end": 255
                  },
                  "typeArguments": null,
                  "start": 254,
                  "end": 255
                }
              ],
              "start": 250,
              "end": 256
            }
          ],
          "start": 249,
          "end": 257
        },
        "start": 247,
        "end": 257
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 274
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 281
                },
                "optional": false,
                "computed": false,
                "start": 268,
                "end": 281
              },
              "operator": "!=",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 291
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 298
                },
                "optional": false,
                "computed": false,
                "start": 285,
                "end": 298
              },
              "start": 268,
              "end": 298
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 319,
                            "end": 328
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 330,
                            "end": 339
                          }
                        ],
                        "start": 318,
                        "end": 340
                      }
                    ],
                    "start": 317,
                    "end": 341
                  },
                  "start": 310,
                  "end": 342
                }
              ],
              "start": 300,
              "end": 348
            },
            "alternate": null,
            "start": 264,
            "end": 348
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 357,
                  "end": 363
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "array1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 372
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 379
                  },
                  "optional": false,
                  "computed": false,
                  "start": 366,
                  "end": 379
                },
                "definite": false,
                "start": 357,
                "end": 379
              }
            ],
            "declare": false,
            "start": 353,
            "end": 380
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "zipResult",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 402,
                                "end": 403
                              },
                              "typeArguments": null,
                              "start": 402,
                              "end": 403
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 405,
                                "end": 406
                              },
                              "typeArguments": null,
                              "start": 405,
                              "end": 406
                            }
                          ],
                          "start": 401,
                          "end": 407
                        }
                      ],
                      "start": 400,
                      "end": 408
                    },
                    "start": 398,
                    "end": 408
                  },
                  "start": 389,
                  "end": 408
                },
                "init": null,
                "definite": false,
                "start": 389,
                "end": 408
              }
            ],
            "declare": false,
            "start": 385,
            "end": 409
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 423,
                    "end": 424
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 427,
                    "end": 428
                  },
                  "definite": false,
                  "start": 423,
                  "end": 428
                }
              ],
              "declare": false,
              "start": 419,
              "end": 428
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 431
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 440
              },
              "start": 430,
              "end": 440
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 445
              },
              "start": 442,
              "end": 445
            },
            "body": {
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
                        "name": "zipResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 457,
                        "end": 466
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 467,
                        "end": 471
                      },
                      "optional": false,
                      "computed": false,
                      "start": 457,
                      "end": 471
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "array1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 473,
                              "end": 479
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 480,
                              "end": 481
                            },
                            "optional": false,
                            "computed": true,
                            "start": 473,
                            "end": 482
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "array2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 484,
                              "end": 490
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 491,
                              "end": 492
                            },
                            "optional": false,
                            "computed": true,
                            "start": 484,
                            "end": 493
                          }
                        ],
                        "start": 472,
                        "end": 494
                      }
                    ],
                    "optional": false,
                    "start": 457,
                    "end": 495
                  },
                  "directive": null,
                  "start": 457,
                  "end": 496
                }
              ],
              "start": 447,
              "end": 502
            },
            "start": 414,
            "end": 502
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "zipResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 514,
              "end": 523
            },
            "start": 507,
            "end": 524
          }
        ],
        "start": 258,
        "end": 526
      },
      "expression": false,
      "start": 203,
      "end": 526
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zipResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 532,
            "end": 541
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 547
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
                    "start": 549,
                    "end": 554
                  },
                  {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 556,
                    "end": 561
                  }
                ],
                "start": 548,
                "end": 562
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 565,
                    "end": 566
                  },
                  {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 568,
                    "end": 569
                  }
                ],
                "start": 564,
                "end": 570
              }
            ],
            "optional": false,
            "start": 544,
            "end": 571
          },
          "definite": false,
          "start": 532,
          "end": 571
        }
      ],
      "declare": false,
      "start": 528,
      "end": 572
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zipResultEle",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 589
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "zipResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 601
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 602,
              "end": 603
            },
            "optional": false,
            "computed": true,
            "start": 592,
            "end": 604
          },
          "definite": false,
          "start": 577,
          "end": 604
        }
      ],
      "declare": false,
      "start": 573,
      "end": 605
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zipResultEleEle",
            "optional": false,
            "typeAnnotation": null,
            "start": 630,
            "end": 645
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "zipResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 648,
                "end": 657
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 658,
                "end": 659
              },
              "optional": false,
              "computed": true,
              "start": 648,
              "end": 660
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 661,
              "end": 662
            },
            "optional": false,
            "computed": true,
            "start": 648,
            "end": 663
          },
          "definite": false,
          "start": 630,
          "end": 663
        }
      ],
      "declare": false,
      "start": 626,
      "end": 664
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 715,
        "end": 717
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 720
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 718,
            "end": 720
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 724
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 722,
            "end": 724
          }
        ],
        "start": 717,
        "end": 725
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 735,
                      "end": 737
                    },
                    "typeArguments": null,
                    "start": 735,
                    "end": 737
                  },
                  "start": 735,
                  "end": 739
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 741,
                      "end": 743
                    },
                    "typeArguments": null,
                    "start": 741,
                    "end": 743
                  },
                  "start": 741,
                  "end": 745
                }
              ],
              "start": 734,
              "end": 746
            },
            "start": 732,
            "end": 746
          },
          "start": 726,
          "end": 746
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 749,
            "end": 751
          },
          "typeArguments": null,
          "start": 749,
          "end": 751
        },
        "start": 747,
        "end": 751
      },
      "body": null,
      "expression": false,
      "start": 698,
      "end": 752
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 770,
        "end": 772
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 773,
              "end": 775
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 773,
            "end": 775
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 777,
              "end": 779
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 777,
            "end": 779
          }
        ],
        "start": 772,
        "end": 780
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 799,
                        "end": 801
                      },
                      "typeArguments": null,
                      "start": 799,
                      "end": 801
                    },
                    "start": 799,
                    "end": 803
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 805,
                        "end": 807
                      },
                      "typeArguments": null,
                      "start": 805,
                      "end": 807
                    },
                    "start": 805,
                    "end": 809
                  }
                ],
                "start": 798,
                "end": 810
              },
              "start": 789,
              "end": 810
            },
            "start": 787,
            "end": 810
          },
          "start": 781,
          "end": 810
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 813,
            "end": 815
          },
          "typeArguments": null,
          "start": 813,
          "end": 815
        },
        "start": 811,
        "end": 815
      },
      "body": null,
      "expression": false,
      "start": 753,
      "end": 816
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "expected",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 832,
                  "end": 835
                },
                "start": 832,
                "end": 835
              },
              "start": 830,
              "end": 835
            },
            "start": 822,
            "end": 835
          },
          "init": null,
          "definite": false,
          "start": 822,
          "end": 835
        }
      ],
      "declare": false,
      "start": 818,
      "end": 836
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "expected",
          "optional": false,
          "typeAnnotation": null,
          "start": 837,
          "end": 845
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 848,
            "end": 850
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 851,
                "end": 860
              },
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 865,
                        "end": 868
                      },
                      "start": 865,
                      "end": 868
                    },
                    "start": 865,
                    "end": 870
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 872,
                        "end": 875
                      },
                      "start": 872,
                      "end": 875
                    },
                    "start": 872,
                    "end": 877
                  }
                ],
                "start": 864,
                "end": 878
              },
              "start": 851,
              "end": 878
            }
          ],
          "optional": false,
          "start": 848,
          "end": 879
        },
        "start": 837,
        "end": 879
      },
      "directive": null,
      "start": 837,
      "end": 880
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "expected",
          "optional": false,
          "typeAnnotation": null,
          "start": 881,
          "end": 889
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 892,
            "end": 894
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 895,
                "end": 904
              },
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 909,
                        "end": 912
                      },
                      "start": 909,
                      "end": 912
                    },
                    "start": 909,
                    "end": 914
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 916,
                        "end": 919
                      },
                      "start": 916,
                      "end": 919
                    },
                    "start": 916,
                    "end": 921
                  }
                ],
                "start": 908,
                "end": 922
              },
              "start": 895,
              "end": 922
            }
          ],
          "optional": false,
          "start": 892,
          "end": 923
        },
        "start": 881,
        "end": 923
      },
      "directive": null,
      "start": 881,
      "end": 924
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 924
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "combine",
    "start": 9,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 26,
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
    "value": "y",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "combineResult",
    "start": 71,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "combine",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 95,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 110,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "combineEle1",
    "start": 114,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "combineResult",
    "start": 128,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 141,
    "end": 142
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 156,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "combineEle2",
    "start": 160,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "combineResult",
    "start": 174,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 203,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "zip",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 222,
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
    "type": "Punctuator",
    "value": "]",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "array2",
    "start": 235,
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
    "value": "U",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 282,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "array2",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 292,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 319,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 330,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 353,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 385,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "zipResult",
    "start": 389,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 419,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 442,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "zipResult",
    "start": 457,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 473,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "array2",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 507,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "zipResult",
    "start": 514,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 528,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "zipResult",
    "start": 532,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "zip",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 548,
    "end": 549
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 549,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 554,
    "end": 555
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 556,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 564,
    "end": 565
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 566,
    "end": 567
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 573,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "zipResultEle",
    "start": 577,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "zipResult",
    "start": 592,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 601,
    "end": 602
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 626,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "zipResultEleEle",
    "start": 630,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "zipResult",
    "start": 648,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 657,
    "end": 658
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 660,
    "end": 661
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 698,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 706,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 715,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 718,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 722,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 726,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 735,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 741,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 749,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 753,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 761,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 770,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 773,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 777,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 781,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 789,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 799,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 805,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 813,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 818,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 822,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 832,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 837,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 848,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 851,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 861,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 864,
    "end": 865
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 865,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 870,
    "end": 871
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 872,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 881,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 892,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 895,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 905,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 908,
    "end": 909
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 909,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 914,
    "end": 915
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 916,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  }
]
```

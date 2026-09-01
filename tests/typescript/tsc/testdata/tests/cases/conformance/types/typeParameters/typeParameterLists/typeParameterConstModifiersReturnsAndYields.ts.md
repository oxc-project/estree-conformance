__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Val",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 12
            },
            "initializer": null,
            "computed": false,
            "start": 9,
            "end": 12
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Val2",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 18
            },
            "initializer": null,
            "computed": false,
            "start": 14,
            "end": 18
          }
        ],
        "start": 7,
        "end": 20
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 44
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
              "start": 51,
              "end": 52
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 45,
            "end": 52
          }
        ],
        "start": 44,
        "end": 53
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 68,
                    "end": 69
                  },
                  "typeArguments": null,
                  "start": 68,
                  "end": 69
                },
                "start": 65,
                "end": 69
              },
              "start": 62,
              "end": 69
            },
            "start": 60,
            "end": 69
          },
          "start": 54,
          "end": 69
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
            "start": 72,
            "end": 73
          },
          "typeArguments": null,
          "start": 72,
          "end": 73
        },
        "start": 70,
        "end": 73
      },
      "body": null,
      "expression": false,
      "start": 22,
      "end": 74
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
            "start": 82,
            "end": 89
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 97
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 105,
                      "end": 108
                    }
                  ],
                  "start": 104,
                  "end": 109
                },
                "id": null,
                "generator": false,
                "start": 98,
                "end": 109
              }
            ],
            "optional": false,
            "start": 92,
            "end": 110
          },
          "definite": false,
          "start": 82,
          "end": 110
        }
      ],
      "declare": false,
      "start": 76,
      "end": 111
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
            "start": 118,
            "end": 125
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 133
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "a",
                        "cooked": "a"
                      },
                      "tail": false,
                      "start": 140,
                      "end": 144
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 157,
                      "end": 159
                    }
                  ],
                  "expressions": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 148
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 149,
                          "end": 155
                        },
                        "optional": false,
                        "computed": false,
                        "start": 144,
                        "end": 155
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 144,
                      "end": 157
                    }
                  ],
                  "start": 140,
                  "end": 159
                },
                "id": null,
                "generator": false,
                "start": 134,
                "end": 159
              }
            ],
            "optional": false,
            "start": 128,
            "end": 160
          },
          "definite": false,
          "start": 118,
          "end": 160
        }
      ],
      "declare": false,
      "start": 112,
      "end": 161
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
            "name": "result3",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 175
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 183
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 190,
                  "end": 193
                },
                "id": null,
                "generator": false,
                "start": 184,
                "end": 193
              }
            ],
            "optional": false,
            "start": 178,
            "end": 194
          },
          "definite": false,
          "start": 168,
          "end": 194
        }
      ],
      "declare": false,
      "start": 162,
      "end": 195
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
            "start": 202,
            "end": 209
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 217
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 224,
                  "end": 228
                },
                "id": null,
                "generator": false,
                "start": 218,
                "end": 228
              }
            ],
            "optional": false,
            "start": 212,
            "end": 229
          },
          "definite": false,
          "start": 202,
          "end": 229
        }
      ],
      "declare": false,
      "start": 196,
      "end": 230
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
            "name": "result5",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 244
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 252
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "101n",
                  "bigint": "101",
                  "start": 259,
                  "end": 263
                },
                "id": null,
                "generator": false,
                "start": 253,
                "end": 263
              }
            ],
            "optional": false,
            "start": 247,
            "end": 264
          },
          "definite": false,
          "start": 237,
          "end": 264
        }
      ],
      "declare": false,
      "start": 231,
      "end": 265
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
            "name": "result6",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 279
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 287
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 294,
                  "end": 299
                },
                "id": null,
                "generator": false,
                "start": 288,
                "end": 299
              }
            ],
            "optional": false,
            "start": 282,
            "end": 300
          },
          "definite": false,
          "start": 272,
          "end": 300
        }
      ],
      "declare": false,
      "start": 266,
      "end": 301
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
            "name": "result7",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 315
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 323
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 11111,
                  "raw": "11111",
                  "start": 330,
                  "end": 335
                },
                "id": null,
                "generator": false,
                "start": 324,
                "end": 335
              }
            ],
            "optional": false,
            "start": 318,
            "end": 336
          },
          "definite": false,
          "start": 308,
          "end": 336
        }
      ],
      "declare": false,
      "start": 302,
      "end": 337
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
            "name": "result8",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 351
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 359
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 367
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 371
                  },
                  "optional": false,
                  "computed": false,
                  "start": 366,
                  "end": 371
                },
                "id": null,
                "generator": false,
                "start": 360,
                "end": 371
              }
            ],
            "optional": false,
            "start": 354,
            "end": 372
          },
          "definite": false,
          "start": 344,
          "end": 372
        }
      ],
      "declare": false,
      "start": 338,
      "end": 373
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
            "name": "result9",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 388
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 396
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 413,
                            "end": 416
                          }
                        ],
                        "start": 412,
                        "end": 417
                      },
                      "start": 405,
                      "end": 418
                    }
                  ],
                  "start": 403,
                  "end": 420
                },
                "id": null,
                "generator": false,
                "start": 397,
                "end": 420
              }
            ],
            "optional": false,
            "start": 391,
            "end": 421
          },
          "definite": false,
          "start": 381,
          "end": 421
        }
      ],
      "declare": false,
      "start": 375,
      "end": 422
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
            "name": "result10",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 437
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 445
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "a",
                              "cooked": "a"
                            },
                            "tail": false,
                            "start": 461,
                            "end": 465
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 478,
                            "end": 480
                          }
                        ],
                        "expressions": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Math",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 465,
                                "end": 469
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "random",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 470,
                                "end": 476
                              },
                              "optional": false,
                              "computed": false,
                              "start": 465,
                              "end": 476
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 465,
                            "end": 478
                          }
                        ],
                        "start": 461,
                        "end": 480
                      },
                      "start": 454,
                      "end": 481
                    }
                  ],
                  "start": 452,
                  "end": 483
                },
                "id": null,
                "generator": false,
                "start": 446,
                "end": 483
              }
            ],
            "optional": false,
            "start": 440,
            "end": 484
          },
          "definite": false,
          "start": 429,
          "end": 484
        }
      ],
      "declare": false,
      "start": 423,
      "end": 485
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
            "name": "result11",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 500
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 508
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 524,
                        "end": 527
                      },
                      "start": 517,
                      "end": 528
                    }
                  ],
                  "start": 515,
                  "end": 530
                },
                "id": null,
                "generator": false,
                "start": 509,
                "end": 530
              }
            ],
            "optional": false,
            "start": 503,
            "end": 531
          },
          "definite": false,
          "start": 492,
          "end": 531
        }
      ],
      "declare": false,
      "start": 486,
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
            "name": "result12",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 547
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 550,
              "end": 555
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 571,
                        "end": 575
                      },
                      "start": 564,
                      "end": 576
                    }
                  ],
                  "start": 562,
                  "end": 578
                },
                "id": null,
                "generator": false,
                "start": 556,
                "end": 578
              }
            ],
            "optional": false,
            "start": 550,
            "end": 579
          },
          "definite": false,
          "start": 539,
          "end": 579
        }
      ],
      "declare": false,
      "start": 533,
      "end": 580
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
            "name": "result13",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 595
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 598,
              "end": 603
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "101n",
                        "bigint": "101",
                        "start": 619,
                        "end": 623
                      },
                      "start": 612,
                      "end": 624
                    }
                  ],
                  "start": 610,
                  "end": 626
                },
                "id": null,
                "generator": false,
                "start": 604,
                "end": 626
              }
            ],
            "optional": false,
            "start": 598,
            "end": 627
          },
          "definite": false,
          "start": 587,
          "end": 627
        }
      ],
      "declare": false,
      "start": 581,
      "end": 628
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
            "name": "result14",
            "optional": false,
            "typeAnnotation": null,
            "start": 635,
            "end": 643
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 651
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 667,
                        "end": 672
                      },
                      "start": 660,
                      "end": 673
                    }
                  ],
                  "start": 658,
                  "end": 675
                },
                "id": null,
                "generator": false,
                "start": 652,
                "end": 675
              }
            ],
            "optional": false,
            "start": 646,
            "end": 676
          },
          "definite": false,
          "start": 635,
          "end": 676
        }
      ],
      "declare": false,
      "start": 629,
      "end": 677
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
            "name": "result15",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 692
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 700
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 11111,
                        "raw": "11111",
                        "start": 716,
                        "end": 721
                      },
                      "start": 709,
                      "end": 722
                    }
                  ],
                  "start": 707,
                  "end": 724
                },
                "id": null,
                "generator": false,
                "start": 701,
                "end": 724
              }
            ],
            "optional": false,
            "start": 695,
            "end": 725
          },
          "definite": false,
          "start": 684,
          "end": 725
        }
      ],
      "declare": false,
      "start": 678,
      "end": 726
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
            "name": "result16",
            "optional": false,
            "typeAnnotation": null,
            "start": 733,
            "end": 741
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 749
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 765,
                          "end": 766
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 767,
                          "end": 770
                        },
                        "optional": false,
                        "computed": false,
                        "start": 765,
                        "end": 770
                      },
                      "start": 758,
                      "end": 771
                    }
                  ],
                  "start": 756,
                  "end": 773
                },
                "id": null,
                "generator": false,
                "start": 750,
                "end": 773
              }
            ],
            "optional": false,
            "start": 744,
            "end": 774
          },
          "definite": false,
          "start": 733,
          "end": 774
        }
      ],
      "declare": false,
      "start": 727,
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
            "name": "result17",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 791
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 799
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 812,
                  "end": 817
                },
                "id": null,
                "generator": false,
                "start": 800,
                "end": 817
              }
            ],
            "optional": false,
            "start": 794,
            "end": 818
          },
          "definite": false,
          "start": 783,
          "end": 818
        }
      ],
      "declare": false,
      "start": 777,
      "end": 819
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
            "name": "result18",
            "optional": false,
            "typeAnnotation": null,
            "start": 826,
            "end": 834
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 837,
              "end": 842
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "'foo'",
                        "start": 864,
                        "end": 869
                      },
                      "start": 857,
                      "end": 870
                    }
                  ],
                  "start": 855,
                  "end": 872
                },
                "id": null,
                "generator": false,
                "start": 843,
                "end": 872
              }
            ],
            "optional": false,
            "start": 837,
            "end": 873
          },
          "definite": false,
          "start": 826,
          "end": 873
        }
      ],
      "declare": false,
      "start": 820,
      "end": 874
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 893,
        "end": 898
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
              "start": 905,
              "end": 906
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 899,
            "end": 906
          }
        ],
        "start": 898,
        "end": 907
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 922,
                    "end": 929
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
                          "start": 930,
                          "end": 931
                        },
                        "typeArguments": null,
                        "start": 930,
                        "end": 931
                      }
                    ],
                    "start": 929,
                    "end": 932
                  },
                  "start": 922,
                  "end": 932
                },
                "start": 919,
                "end": 932
              },
              "start": 916,
              "end": 932
            },
            "start": 914,
            "end": 932
          },
          "start": 908,
          "end": 932
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
            "start": 935,
            "end": 936
          },
          "typeArguments": null,
          "start": 935,
          "end": 936
        },
        "start": 933,
        "end": 936
      },
      "body": null,
      "expression": false,
      "start": 876,
      "end": 937
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
            "name": "result19",
            "optional": false,
            "typeAnnotation": null,
            "start": 945,
            "end": 953
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null,
              "start": 956,
              "end": 961
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 974,
                  "end": 979
                },
                "id": null,
                "generator": false,
                "start": 962,
                "end": 979
              }
            ],
            "optional": false,
            "start": 956,
            "end": 980
          },
          "definite": false,
          "start": 945,
          "end": 980
        }
      ],
      "declare": false,
      "start": 939,
      "end": 981
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
            "name": "result20",
            "optional": false,
            "typeAnnotation": null,
            "start": 988,
            "end": 996
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1004
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "'foo'",
                        "start": 1026,
                        "end": 1031
                      },
                      "start": 1019,
                      "end": 1032
                    }
                  ],
                  "start": 1017,
                  "end": 1034
                },
                "id": null,
                "generator": false,
                "start": 1005,
                "end": 1034
              }
            ],
            "optional": false,
            "start": 999,
            "end": 1035
          },
          "definite": false,
          "start": 988,
          "end": 1035
        }
      ],
      "declare": false,
      "start": 982,
      "end": 1036
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1055,
        "end": 1060
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
              "start": 1067,
              "end": 1068
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1061,
            "end": 1068
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1077
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1070,
            "end": 1077
          }
        ],
        "start": 1060,
        "end": 1078
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
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1090,
                    "end": 1099
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
                          "start": 1100,
                          "end": 1101
                        },
                        "typeArguments": null,
                        "start": 1100,
                        "end": 1101
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1103,
                          "end": 1104
                        },
                        "typeArguments": null,
                        "start": 1103,
                        "end": 1104
                      }
                    ],
                    "start": 1099,
                    "end": 1105
                  },
                  "start": 1090,
                  "end": 1105
                },
                "start": 1087,
                "end": 1105
              },
              "start": 1084,
              "end": 1105
            },
            "start": 1082,
            "end": 1105
          },
          "start": 1079,
          "end": 1105
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
                "start": 1109,
                "end": 1110
              },
              "typeArguments": null,
              "start": 1109,
              "end": 1110
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 1112,
                "end": 1113
              },
              "typeArguments": null,
              "start": 1112,
              "end": 1113
            }
          ],
          "start": 1108,
          "end": 1114
        },
        "start": 1106,
        "end": 1114
      },
      "body": null,
      "expression": false,
      "start": 1038,
      "end": 1114
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
            "name": "result21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1122,
            "end": 1130
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1133,
              "end": 1138
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 1163,
                          "end": 1165
                        },
                        "start": 1157,
                        "end": 1165
                      },
                      "directive": null,
                      "start": 1157,
                      "end": 1166
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "'1'",
                        "start": 1178,
                        "end": 1181
                      },
                      "start": 1171,
                      "end": 1182
                    }
                  ],
                  "start": 1151,
                  "end": 1184
                },
                "expression": false,
                "start": 1139,
                "end": 1184
              }
            ],
            "optional": false,
            "start": 1133,
            "end": 1185
          },
          "definite": false,
          "start": 1122,
          "end": 1185
        }
      ],
      "declare": false,
      "start": 1116,
      "end": 1186
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1205,
        "end": 1210
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
              "start": 1217,
              "end": 1218
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1211,
            "end": 1218
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1226,
              "end": 1227
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1220,
            "end": 1227
          }
        ],
        "start": 1210,
        "end": 1228
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
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AsyncGenerator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1240,
                    "end": 1254
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
                          "start": 1255,
                          "end": 1256
                        },
                        "typeArguments": null,
                        "start": 1255,
                        "end": 1256
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1258,
                          "end": 1259
                        },
                        "typeArguments": null,
                        "start": 1258,
                        "end": 1259
                      }
                    ],
                    "start": 1254,
                    "end": 1260
                  },
                  "start": 1240,
                  "end": 1260
                },
                "start": 1237,
                "end": 1260
              },
              "start": 1234,
              "end": 1260
            },
            "start": 1232,
            "end": 1260
          },
          "start": 1229,
          "end": 1260
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
                "start": 1264,
                "end": 1265
              },
              "typeArguments": null,
              "start": 1264,
              "end": 1265
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 1267,
                "end": 1268
              },
              "typeArguments": null,
              "start": 1267,
              "end": 1268
            }
          ],
          "start": 1263,
          "end": 1269
        },
        "start": 1261,
        "end": 1269
      },
      "body": null,
      "expression": false,
      "start": 1188,
      "end": 1269
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
            "name": "result22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1277,
            "end": 1285
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1288,
              "end": 1293
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": true,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 1324,
                          "end": 1326
                        },
                        "start": 1318,
                        "end": 1326
                      },
                      "directive": null,
                      "start": 1318,
                      "end": 1327
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "'1'",
                        "start": 1339,
                        "end": 1342
                      },
                      "start": 1332,
                      "end": 1343
                    }
                  ],
                  "start": 1312,
                  "end": 1345
                },
                "expression": false,
                "start": 1294,
                "end": 1345
              }
            ],
            "optional": false,
            "start": 1288,
            "end": 1346
          },
          "definite": false,
          "start": 1277,
          "end": 1346
        }
      ],
      "declare": false,
      "start": 1271,
      "end": 1347
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
            "name": "UploadThingServerHelper",
            "optional": false,
            "typeAnnotation": null,
            "start": 1411,
            "end": 1434
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ValidRoutes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1444,
                    "end": 1455
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1438,
                  "end": 1455
                }
              ],
              "start": 1437,
              "end": 1457
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "route",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Route",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1479,
                      "end": 1484
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ValidRoutes",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1494,
                          "end": 1505
                        },
                        "typeArguments": null,
                        "start": 1494,
                        "end": 1505
                      },
                      "start": 1488,
                      "end": 1505
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
                            "name": "middleware",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1514,
                            "end": 1524
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
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
                                      "name": "ValidRoutes",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1532,
                                      "end": 1543
                                    },
                                    "typeArguments": null,
                                    "start": 1532,
                                    "end": 1543
                                  },
                                  "indexType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Route",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1544,
                                      "end": 1549
                                    },
                                    "typeArguments": null,
                                    "start": 1544,
                                    "end": 1549
                                  },
                                  "start": 1532,
                                  "end": 1550
                                },
                                "start": 1529,
                                "end": 1550
                              },
                              "start": 1526,
                              "end": 1550
                            },
                            "start": 1524,
                            "end": 1550
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1514,
                          "end": 1551
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "onUpload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1556,
                            "end": 1564
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
                                  "name": "response",
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
                                            "name": "metadata",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1579,
                                            "end": 1587
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSIndexedAccessType",
                                              "objectType": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "ValidRoutes",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1589,
                                                  "end": 1600
                                                },
                                                "typeArguments": null,
                                                "start": 1589,
                                                "end": 1600
                                              },
                                              "indexType": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Route",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1601,
                                                  "end": 1606
                                                },
                                                "typeArguments": null,
                                                "start": 1601,
                                                "end": 1606
                                              },
                                              "start": 1589,
                                              "end": 1607
                                            },
                                            "start": 1587,
                                            "end": 1607
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1579,
                                          "end": 1607
                                        }
                                      ],
                                      "start": 1577,
                                      "end": 1609
                                    },
                                    "start": 1575,
                                    "end": 1609
                                  },
                                  "start": 1567,
                                  "end": 1609
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 1614,
                                  "end": 1618
                                },
                                "start": 1611,
                                "end": 1618
                              },
                              "start": 1566,
                              "end": 1618
                            },
                            "start": 1564,
                            "end": 1618
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1556,
                          "end": 1619
                        }
                      ],
                      "start": 1508,
                      "end": 1623
                    },
                    "optional": false,
                    "readonly": true,
                    "start": 1465,
                    "end": 1626
                  },
                  "start": 1463,
                  "end": 1626
                },
                "start": 1458,
                "end": 1626
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1631,
              "end": 1633
            },
            "id": null,
            "generator": false,
            "start": 1437,
            "end": 1633
          },
          "definite": false,
          "start": 1411,
          "end": 1633
        }
      ],
      "declare": false,
      "start": 1405,
      "end": 1634
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
            "name": "FileRouter",
            "optional": false,
            "typeAnnotation": null,
            "start": 1642,
            "end": 1652
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "UploadThingServerHelper",
              "optional": false,
              "typeAnnotation": null,
              "start": 1655,
              "end": 1678
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
                      "name": "example",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1683,
                      "end": 1690
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
                            "name": "middleware",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1698,
                            "end": 1708
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
                              "value": "someValue",
                              "raw": "\"someValue\"",
                              "start": 1716,
                              "end": 1727
                            },
                            "id": null,
                            "generator": false,
                            "start": 1710,
                            "end": 1727
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1698,
                          "end": 1727
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "onUpload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1733,
                            "end": 1741
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "response",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1744,
                                "end": 1752
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
                                        "name": "v",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSLiteralType",
                                            "literal": {
                                              "type": "Literal",
                                              "value": "someValue",
                                              "raw": "\"someValue\"",
                                              "start": 1774,
                                              "end": 1785
                                            },
                                            "start": 1774,
                                            "end": 1785
                                          },
                                          "start": 1772,
                                          "end": 1785
                                        },
                                        "start": 1771,
                                        "end": 1785
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "response",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1788,
                                          "end": 1796
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "metadata",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1797,
                                          "end": 1805
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1788,
                                        "end": 1805
                                      },
                                      "definite": false,
                                      "start": 1771,
                                      "end": 1805
                                    }
                                  ],
                                  "declare": false,
                                  "start": 1765,
                                  "end": 1806
                                }
                              ],
                              "start": 1757,
                              "end": 1812
                            },
                            "id": null,
                            "generator": false,
                            "start": 1743,
                            "end": 1812
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1733,
                          "end": 1812
                        }
                      ],
                      "start": 1692,
                      "end": 1817
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1683,
                    "end": 1817
                  }
                ],
                "start": 1679,
                "end": 1820
              }
            ],
            "optional": false,
            "start": 1655,
            "end": 1821
          },
          "definite": false,
          "start": 1642,
          "end": 1821
        }
      ],
      "declare": false,
      "start": 1636,
      "end": 1822
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1833,
        "end": 1839
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
              "start": 1846,
              "end": 1847
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1840,
            "end": 1847
          }
        ],
        "start": 1839,
        "end": 1848
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 1859,
                    "end": 1860
                  },
                  "typeArguments": null,
                  "start": 1859,
                  "end": 1860
                },
                "start": 1856,
                "end": 1860
              },
              "start": 1853,
              "end": 1860
            },
            "start": 1851,
            "end": 1860
          },
          "start": 1849,
          "end": 1860
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1875,
              "end": 1881
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1888,
                    "end": 1889
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1882,
                  "end": 1889
                }
              ],
              "start": 1881,
              "end": 1890
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1902,
                          "end": 1903
                        },
                        "typeArguments": null,
                        "start": 1902,
                        "end": 1903
                      },
                      "start": 1899,
                      "end": 1903
                    },
                    "start": 1896,
                    "end": 1903
                  },
                  "start": 1894,
                  "end": 1903
                },
                "start": 1891,
                "end": 1903
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1919,
                          "end": 1921
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1919,
                        "end": 1923
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1925,
                          "end": 1928
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1925,
                        "end": 1930
                      }
                    ],
                    "start": 1918,
                    "end": 1931
                  },
                  "start": 1911,
                  "end": 1932
                }
              ],
              "start": 1905,
              "end": 1936
            },
            "expression": false,
            "start": 1866,
            "end": 1936
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1946,
              "end": 1952
            },
            "start": 1939,
            "end": 1953
          }
        ],
        "start": 1862,
        "end": 1955
      },
      "expression": false,
      "start": 1824,
      "end": 1955
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
            "name": "nestedResult1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1962,
            "end": 1975
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "outer1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1978,
                "end": 1984
              },
              "typeArguments": null,
              "arguments": [
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
                    "start": 1991,
                    "end": 1992
                  },
                  "id": null,
                  "generator": false,
                  "start": 1985,
                  "end": 1992
                }
              ],
              "optional": false,
              "start": 1978,
              "end": 1993
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 2000,
                  "end": 2005
                },
                "id": null,
                "generator": false,
                "start": 1994,
                "end": 2005
              }
            ],
            "optional": false,
            "start": 1978,
            "end": 2006
          },
          "definite": false,
          "start": 1962,
          "end": 2006
        }
      ],
      "declare": false,
      "start": 1956,
      "end": 2007
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2018,
        "end": 2024
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
              "start": 2025,
              "end": 2026
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2025,
            "end": 2026
          }
        ],
        "start": 2024,
        "end": 2027
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 2038,
                    "end": 2039
                  },
                  "typeArguments": null,
                  "start": 2038,
                  "end": 2039
                },
                "start": 2035,
                "end": 2039
              },
              "start": 2032,
              "end": 2039
            },
            "start": 2030,
            "end": 2039
          },
          "start": 2028,
          "end": 2039
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2054,
              "end": 2060
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2067,
                    "end": 2068
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 2061,
                  "end": 2068
                }
              ],
              "start": 2060,
              "end": 2069
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2081,
                          "end": 2082
                        },
                        "typeArguments": null,
                        "start": 2081,
                        "end": 2082
                      },
                      "start": 2078,
                      "end": 2082
                    },
                    "start": 2075,
                    "end": 2082
                  },
                  "start": 2073,
                  "end": 2082
                },
                "start": 2070,
                "end": 2082
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2098,
                          "end": 2100
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 2098,
                        "end": 2102
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2104,
                          "end": 2107
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 2104,
                        "end": 2109
                      }
                    ],
                    "start": 2097,
                    "end": 2110
                  },
                  "start": 2090,
                  "end": 2111
                }
              ],
              "start": 2084,
              "end": 2115
            },
            "expression": false,
            "start": 2045,
            "end": 2115
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2125,
              "end": 2131
            },
            "start": 2118,
            "end": 2132
          }
        ],
        "start": 2041,
        "end": 2134
      },
      "expression": false,
      "start": 2009,
      "end": 2134
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
            "name": "nestedResult2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2141,
            "end": 2154
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "outer2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2157,
                "end": 2163
              },
              "typeArguments": null,
              "arguments": [
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
                    "start": 2170,
                    "end": 2171
                  },
                  "id": null,
                  "generator": false,
                  "start": 2164,
                  "end": 2171
                }
              ],
              "optional": false,
              "start": 2157,
              "end": 2172
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 2179,
                  "end": 2184
                },
                "id": null,
                "generator": false,
                "start": 2173,
                "end": 2184
              }
            ],
            "optional": false,
            "start": 2157,
            "end": 2185
          },
          "definite": false,
          "start": 2141,
          "end": 2185
        }
      ],
      "declare": false,
      "start": 2135,
      "end": 2186
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2197,
        "end": 2203
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
              "start": 2210,
              "end": 2211
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2204,
            "end": 2211
          }
        ],
        "start": 2203,
        "end": 2212
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 2223,
                    "end": 2224
                  },
                  "typeArguments": null,
                  "start": 2223,
                  "end": 2224
                },
                "start": 2220,
                "end": 2224
              },
              "start": 2217,
              "end": 2224
            },
            "start": 2215,
            "end": 2224
          },
          "start": 2213,
          "end": 2224
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2239,
              "end": 2245
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2246,
                    "end": 2247
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2246,
                  "end": 2247
                }
              ],
              "start": 2245,
              "end": 2248
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2260,
                          "end": 2261
                        },
                        "typeArguments": null,
                        "start": 2260,
                        "end": 2261
                      },
                      "start": 2257,
                      "end": 2261
                    },
                    "start": 2254,
                    "end": 2261
                  },
                  "start": 2252,
                  "end": 2261
                },
                "start": 2249,
                "end": 2261
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2277,
                          "end": 2279
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 2277,
                        "end": 2281
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2283,
                          "end": 2286
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 2283,
                        "end": 2288
                      }
                    ],
                    "start": 2276,
                    "end": 2289
                  },
                  "start": 2269,
                  "end": 2290
                }
              ],
              "start": 2263,
              "end": 2294
            },
            "expression": false,
            "start": 2230,
            "end": 2294
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2304,
              "end": 2310
            },
            "start": 2297,
            "end": 2311
          }
        ],
        "start": 2226,
        "end": 2313
      },
      "expression": false,
      "start": 2188,
      "end": 2313
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
            "name": "nestedResult3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2320,
            "end": 2333
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "outer3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2336,
                "end": 2342
              },
              "typeArguments": null,
              "arguments": [
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
                    "start": 2349,
                    "end": 2350
                  },
                  "id": null,
                  "generator": false,
                  "start": 2343,
                  "end": 2350
                }
              ],
              "optional": false,
              "start": 2336,
              "end": 2351
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 2358,
                  "end": 2363
                },
                "id": null,
                "generator": false,
                "start": 2352,
                "end": 2363
              }
            ],
            "optional": false,
            "start": 2336,
            "end": 2364
          },
          "definite": false,
          "start": 2320,
          "end": 2364
        }
      ],
      "declare": false,
      "start": 2314,
      "end": 2365
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2384,
        "end": 2395
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
              "start": 2402,
              "end": 2403
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2396,
            "end": 2403
          }
        ],
        "start": 2395,
        "end": 2404
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 2415,
                    "end": 2416
                  },
                  "typeArguments": null,
                  "start": 2415,
                  "end": 2416
                },
                "start": 2412,
                "end": 2416
              },
              "start": 2409,
              "end": 2416
            },
            "start": 2407,
            "end": 2416
          },
          "start": 2405,
          "end": 2416
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
            "start": 2419,
            "end": 2420
          },
          "typeArguments": null,
          "start": 2419,
          "end": 2420
        },
        "start": 2417,
        "end": 2420
      },
      "body": null,
      "expression": false,
      "start": 2367,
      "end": 2421
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2439,
        "end": 2450
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
              "start": 2457,
              "end": 2458
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2451,
            "end": 2458
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2466,
              "end": 2467
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2460,
            "end": 2467
          }
        ],
        "start": 2450,
        "end": 2468
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 2479,
                    "end": 2480
                  },
                  "typeArguments": null,
                  "start": 2479,
                  "end": 2480
                },
                "start": 2476,
                "end": 2480
              },
              "start": 2473,
              "end": 2480
            },
            "start": 2471,
            "end": 2480
          },
          "start": 2469,
          "end": 2480
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2493,
                    "end": 2494
                  },
                  "typeArguments": null,
                  "start": 2493,
                  "end": 2494
                },
                "start": 2490,
                "end": 2494
              },
              "start": 2487,
              "end": 2494
            },
            "start": 2485,
            "end": 2494
          },
          "start": 2482,
          "end": 2494
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
                "start": 2498,
                "end": 2499
              },
              "typeArguments": null,
              "start": 2498,
              "end": 2499
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2501,
                "end": 2502
              },
              "typeArguments": null,
              "start": 2501,
              "end": 2502
            }
          ],
          "start": 2497,
          "end": 2503
        },
        "start": 2495,
        "end": 2503
      },
      "body": null,
      "expression": false,
      "start": 2422,
      "end": 2504
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
            "name": "overloadA",
            "optional": false,
            "typeAnnotation": null,
            "start": 2511,
            "end": 2520
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2523,
              "end": 2534
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 2541,
                  "end": 2543
                },
                "id": null,
                "generator": false,
                "start": 2535,
                "end": 2543
              }
            ],
            "optional": false,
            "start": 2523,
            "end": 2544
          },
          "definite": false,
          "start": 2511,
          "end": 2544
        }
      ],
      "declare": false,
      "start": 2505,
      "end": 2545
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
            "name": "overloadB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2552,
            "end": 2561
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2564,
              "end": 2575
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 2582,
                  "end": 2586
                },
                "id": null,
                "generator": false,
                "start": 2576,
                "end": 2586
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2594,
                  "end": 2598
                },
                "id": null,
                "generator": false,
                "start": 2588,
                "end": 2598
              }
            ],
            "optional": false,
            "start": 2564,
            "end": 2599
          },
          "definite": false,
          "start": 2552,
          "end": 2599
        }
      ],
      "declare": false,
      "start": 2546,
      "end": 2600
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2619,
        "end": 2630
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
              "start": 2631,
              "end": 2632
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2631,
            "end": 2632
          }
        ],
        "start": 2630,
        "end": 2633
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 2644,
                    "end": 2645
                  },
                  "typeArguments": null,
                  "start": 2644,
                  "end": 2645
                },
                "start": 2641,
                "end": 2645
              },
              "start": 2638,
              "end": 2645
            },
            "start": 2636,
            "end": 2645
          },
          "start": 2634,
          "end": 2645
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
            "start": 2648,
            "end": 2649
          },
          "typeArguments": null,
          "start": 2648,
          "end": 2649
        },
        "start": 2646,
        "end": 2649
      },
      "body": null,
      "expression": false,
      "start": 2602,
      "end": 2650
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2668,
        "end": 2679
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
              "start": 2680,
              "end": 2681
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2680,
            "end": 2681
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2689,
              "end": 2690
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2683,
            "end": 2690
          }
        ],
        "start": 2679,
        "end": 2691
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 2702,
                    "end": 2703
                  },
                  "typeArguments": null,
                  "start": 2702,
                  "end": 2703
                },
                "start": 2699,
                "end": 2703
              },
              "start": 2696,
              "end": 2703
            },
            "start": 2694,
            "end": 2703
          },
          "start": 2692,
          "end": 2703
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2716,
                    "end": 2717
                  },
                  "typeArguments": null,
                  "start": 2716,
                  "end": 2717
                },
                "start": 2713,
                "end": 2717
              },
              "start": 2710,
              "end": 2717
            },
            "start": 2708,
            "end": 2717
          },
          "start": 2705,
          "end": 2717
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
                "start": 2721,
                "end": 2722
              },
              "typeArguments": null,
              "start": 2721,
              "end": 2722
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2724,
                "end": 2725
              },
              "typeArguments": null,
              "start": 2724,
              "end": 2725
            }
          ],
          "start": 2720,
          "end": 2726
        },
        "start": 2718,
        "end": 2726
      },
      "body": null,
      "expression": false,
      "start": 2651,
      "end": 2727
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
            "name": "overloadC",
            "optional": false,
            "typeAnnotation": null,
            "start": 2734,
            "end": 2743
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2746,
              "end": 2757
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 2764,
                  "end": 2766
                },
                "id": null,
                "generator": false,
                "start": 2758,
                "end": 2766
              }
            ],
            "optional": false,
            "start": 2746,
            "end": 2767
          },
          "definite": false,
          "start": 2734,
          "end": 2767
        }
      ],
      "declare": false,
      "start": 2728,
      "end": 2768
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
            "name": "overloadD",
            "optional": false,
            "typeAnnotation": null,
            "start": 2775,
            "end": 2784
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2787,
              "end": 2798
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 2805,
                  "end": 2809
                },
                "id": null,
                "generator": false,
                "start": 2799,
                "end": 2809
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2817,
                  "end": 2821
                },
                "id": null,
                "generator": false,
                "start": 2811,
                "end": 2821
              }
            ],
            "optional": false,
            "start": 2787,
            "end": 2822
          },
          "definite": false,
          "start": 2775,
          "end": 2822
        }
      ],
      "declare": false,
      "start": 2769,
      "end": 2823
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2842,
        "end": 2853
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
              "start": 2860,
              "end": 2861
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2854,
            "end": 2861
          }
        ],
        "start": 2853,
        "end": 2862
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 2873,
                    "end": 2874
                  },
                  "typeArguments": null,
                  "start": 2873,
                  "end": 2874
                },
                "start": 2870,
                "end": 2874
              },
              "start": 2867,
              "end": 2874
            },
            "start": 2865,
            "end": 2874
          },
          "start": 2863,
          "end": 2874
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
            "start": 2877,
            "end": 2878
          },
          "typeArguments": null,
          "start": 2877,
          "end": 2878
        },
        "start": 2875,
        "end": 2878
      },
      "body": null,
      "expression": false,
      "start": 2825,
      "end": 2879
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2897,
        "end": 2908
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
              "start": 2915,
              "end": 2916
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2909,
            "end": 2916
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2918,
              "end": 2919
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2918,
            "end": 2919
          }
        ],
        "start": 2908,
        "end": 2920
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 2931,
                    "end": 2932
                  },
                  "typeArguments": null,
                  "start": 2931,
                  "end": 2932
                },
                "start": 2928,
                "end": 2932
              },
              "start": 2925,
              "end": 2932
            },
            "start": 2923,
            "end": 2932
          },
          "start": 2921,
          "end": 2932
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2945,
                    "end": 2946
                  },
                  "typeArguments": null,
                  "start": 2945,
                  "end": 2946
                },
                "start": 2942,
                "end": 2946
              },
              "start": 2939,
              "end": 2946
            },
            "start": 2937,
            "end": 2946
          },
          "start": 2934,
          "end": 2946
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
                "start": 2950,
                "end": 2951
              },
              "typeArguments": null,
              "start": 2950,
              "end": 2951
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2953,
                "end": 2954
              },
              "typeArguments": null,
              "start": 2953,
              "end": 2954
            }
          ],
          "start": 2949,
          "end": 2955
        },
        "start": 2947,
        "end": 2955
      },
      "body": null,
      "expression": false,
      "start": 2880,
      "end": 2956
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
            "name": "overloadE",
            "optional": false,
            "typeAnnotation": null,
            "start": 2963,
            "end": 2972
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2975,
              "end": 2986
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 2993,
                  "end": 2995
                },
                "id": null,
                "generator": false,
                "start": 2987,
                "end": 2995
              }
            ],
            "optional": false,
            "start": 2975,
            "end": 2996
          },
          "definite": false,
          "start": 2963,
          "end": 2996
        }
      ],
      "declare": false,
      "start": 2957,
      "end": 2997
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
            "name": "overloadF",
            "optional": false,
            "typeAnnotation": null,
            "start": 3004,
            "end": 3013
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3016,
              "end": 3027
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 3034,
                  "end": 3038
                },
                "id": null,
                "generator": false,
                "start": 3028,
                "end": 3038
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 3046,
                  "end": 3050
                },
                "id": null,
                "generator": false,
                "start": 3040,
                "end": 3050
              }
            ],
            "optional": false,
            "start": 3016,
            "end": 3051
          },
          "definite": false,
          "start": 3004,
          "end": 3051
        }
      ],
      "declare": false,
      "start": 2998,
      "end": 3052
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3071,
        "end": 3082
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
              "start": 3089,
              "end": 3090
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 3083,
            "end": 3090
          }
        ],
        "start": 3082,
        "end": 3091
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 3102,
                    "end": 3103
                  },
                  "typeArguments": null,
                  "start": 3102,
                  "end": 3103
                },
                "start": 3099,
                "end": 3103
              },
              "start": 3096,
              "end": 3103
            },
            "start": 3094,
            "end": 3103
          },
          "start": 3092,
          "end": 3103
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
            "start": 3106,
            "end": 3107
          },
          "typeArguments": null,
          "start": 3106,
          "end": 3107
        },
        "start": 3104,
        "end": 3107
      },
      "body": null,
      "expression": false,
      "start": 3054,
      "end": 3108
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3126,
        "end": 3137
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
              "start": 3138,
              "end": 3139
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3138,
            "end": 3139
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3141,
              "end": 3142
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3141,
            "end": 3142
          }
        ],
        "start": 3137,
        "end": 3143
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 3154,
                    "end": 3155
                  },
                  "typeArguments": null,
                  "start": 3154,
                  "end": 3155
                },
                "start": 3151,
                "end": 3155
              },
              "start": 3148,
              "end": 3155
            },
            "start": 3146,
            "end": 3155
          },
          "start": 3144,
          "end": 3155
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3168,
                    "end": 3169
                  },
                  "typeArguments": null,
                  "start": 3168,
                  "end": 3169
                },
                "start": 3165,
                "end": 3169
              },
              "start": 3162,
              "end": 3169
            },
            "start": 3160,
            "end": 3169
          },
          "start": 3157,
          "end": 3169
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
                "start": 3173,
                "end": 3174
              },
              "typeArguments": null,
              "start": 3173,
              "end": 3174
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3176,
                "end": 3177
              },
              "typeArguments": null,
              "start": 3176,
              "end": 3177
            }
          ],
          "start": 3172,
          "end": 3178
        },
        "start": 3170,
        "end": 3178
      },
      "body": null,
      "expression": false,
      "start": 3109,
      "end": 3179
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
            "name": "overloadG",
            "optional": false,
            "typeAnnotation": null,
            "start": 3186,
            "end": 3195
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3198,
              "end": 3209
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 3216,
                  "end": 3218
                },
                "id": null,
                "generator": false,
                "start": 3210,
                "end": 3218
              }
            ],
            "optional": false,
            "start": 3198,
            "end": 3219
          },
          "definite": false,
          "start": 3186,
          "end": 3219
        }
      ],
      "declare": false,
      "start": 3180,
      "end": 3220
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
            "name": "overloadH",
            "optional": false,
            "typeAnnotation": null,
            "start": 3227,
            "end": 3236
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3239,
              "end": 3250
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 3257,
                  "end": 3261
                },
                "id": null,
                "generator": false,
                "start": 3251,
                "end": 3261
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 3269,
                  "end": 3273
                },
                "id": null,
                "generator": false,
                "start": 3263,
                "end": 3273
              }
            ],
            "optional": false,
            "start": 3239,
            "end": 3274
          },
          "definite": false,
          "start": 3227,
          "end": 3274
        }
      ],
      "declare": false,
      "start": 3221,
      "end": 3275
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3294,
        "end": 3305
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
              "start": 3306,
              "end": 3307
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3306,
            "end": 3307
          }
        ],
        "start": 3305,
        "end": 3308
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 3319,
                    "end": 3320
                  },
                  "typeArguments": null,
                  "start": 3319,
                  "end": 3320
                },
                "start": 3316,
                "end": 3320
              },
              "start": 3313,
              "end": 3320
            },
            "start": 3311,
            "end": 3320
          },
          "start": 3309,
          "end": 3320
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
            "start": 3323,
            "end": 3324
          },
          "typeArguments": null,
          "start": 3323,
          "end": 3324
        },
        "start": 3321,
        "end": 3324
      },
      "body": null,
      "expression": false,
      "start": 3277,
      "end": 3325
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3343,
        "end": 3354
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
              "start": 3361,
              "end": 3362
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 3355,
            "end": 3362
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3364,
              "end": 3365
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3364,
            "end": 3365
          }
        ],
        "start": 3354,
        "end": 3366
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 3377,
                    "end": 3378
                  },
                  "typeArguments": null,
                  "start": 3377,
                  "end": 3378
                },
                "start": 3374,
                "end": 3378
              },
              "start": 3371,
              "end": 3378
            },
            "start": 3369,
            "end": 3378
          },
          "start": 3367,
          "end": 3378
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3391,
                    "end": 3392
                  },
                  "typeArguments": null,
                  "start": 3391,
                  "end": 3392
                },
                "start": 3388,
                "end": 3392
              },
              "start": 3385,
              "end": 3392
            },
            "start": 3383,
            "end": 3392
          },
          "start": 3380,
          "end": 3392
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
                "start": 3396,
                "end": 3397
              },
              "typeArguments": null,
              "start": 3396,
              "end": 3397
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3399,
                "end": 3400
              },
              "typeArguments": null,
              "start": 3399,
              "end": 3400
            }
          ],
          "start": 3395,
          "end": 3401
        },
        "start": 3393,
        "end": 3401
      },
      "body": null,
      "expression": false,
      "start": 3326,
      "end": 3402
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
            "name": "overloadI",
            "optional": false,
            "typeAnnotation": null,
            "start": 3409,
            "end": 3418
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3421,
              "end": 3432
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 3439,
                  "end": 3441
                },
                "id": null,
                "generator": false,
                "start": 3433,
                "end": 3441
              }
            ],
            "optional": false,
            "start": 3421,
            "end": 3442
          },
          "definite": false,
          "start": 3409,
          "end": 3442
        }
      ],
      "declare": false,
      "start": 3403,
      "end": 3443
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
            "name": "overloadJ",
            "optional": false,
            "typeAnnotation": null,
            "start": 3450,
            "end": 3459
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3462,
              "end": 3473
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 3480,
                  "end": 3484
                },
                "id": null,
                "generator": false,
                "start": 3474,
                "end": 3484
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 3492,
                  "end": 3496
                },
                "id": null,
                "generator": false,
                "start": 3486,
                "end": 3496
              }
            ],
            "optional": false,
            "start": 3462,
            "end": 3497
          },
          "definite": false,
          "start": 3450,
          "end": 3497
        }
      ],
      "declare": false,
      "start": 3444,
      "end": 3498
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3498
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 5,
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
    "value": "Val",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Val2",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 30,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 65,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 76,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 82,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 104,
    "end": 105
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 105,
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
    "value": ")",
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
    "value": "const",
    "start": 112,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 118,
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
    "value": "test1",
    "start": 128,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 137,
    "end": 139
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 140,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 144,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 157,
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
    "type": "Keyword",
    "value": "const",
    "start": 162,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "result3",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 178,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 187,
    "end": 189
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 190,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 196,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "result4",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 221,
    "end": 223
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 231,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "result5",
    "start": 237,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 247,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 256,
    "end": 258
  },
  {
    "type": "Numeric",
    "value": "101n",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 266,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "result6",
    "start": 272,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 282,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 291,
    "end": 293
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 294,
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
    "value": "const",
    "start": 302,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "result7",
    "start": 308,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 318,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 327,
    "end": 329
  },
  {
    "type": "Numeric",
    "value": "11111",
    "start": 330,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 338,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "result8",
    "start": 344,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 354,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 363,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "Val",
    "start": 368,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 375,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "result9",
    "start": 381,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 391,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 412,
    "end": 413
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 413,
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
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 423,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "result10",
    "start": 429,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 440,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 449,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 454,
    "end": 460
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 461,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 465,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 470,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 486,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "result11",
    "start": 492,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 503,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 512,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 517,
    "end": 523
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 533,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "result12",
    "start": 539,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 550,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 559,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 564,
    "end": 570
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 571,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 581,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "result13",
    "start": 587,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 598,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 607,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 612,
    "end": 618
  },
  {
    "type": "Numeric",
    "value": "101n",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 629,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "result14",
    "start": 635,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 646,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 655,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 660,
    "end": 666
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 667,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 678,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "result15",
    "start": 684,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 695,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 704,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 709,
    "end": 715
  },
  {
    "type": "Numeric",
    "value": "11111",
    "start": 716,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 727,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "result16",
    "start": 733,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 744,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 753,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 758,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "Val",
    "start": 767,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 777,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "result17",
    "start": 783,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 794,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 800,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 809,
    "end": 811
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 812,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 820,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "result18",
    "start": 826,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 837,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 843,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 852,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 857,
    "end": 863
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 864,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 876,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 884,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 893,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 898,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 899,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 908,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 919,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 922,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 939,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "result19",
    "start": 945,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 956,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 962,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 971,
    "end": 973
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 974,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 980,
    "end": 981
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 982,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "result20",
    "start": 988,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 999,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1005,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1014,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1019,
    "end": 1025
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1026,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1038,
    "end": 1045
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1046,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 1055,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1061,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1070,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1079,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1087,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 1090,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1116,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "result21",
    "start": 1122,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 1133,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1139,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1157,
    "end": 1162
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1163,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1171,
    "end": 1177
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1178,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1188,
    "end": 1195
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1196,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 1205,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1211,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1220,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1229,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1237,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 1240,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1271,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "result22",
    "start": 1277,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 1288,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1294,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1300,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1318,
    "end": 1323
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1324,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1332,
    "end": 1338
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1339,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1405,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "UploadThingServerHelper",
    "start": 1411,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1438,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "ValidRoutes",
    "start": 1444,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "route",
    "start": 1458,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1469,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "Route",
    "start": 1479,
    "end": 1484
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1485,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1488,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "ValidRoutes",
    "start": 1494,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 1514,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1529,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "ValidRoutes",
    "start": 1532,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "Route",
    "start": 1544,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "onUpload",
    "start": 1556,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 1567,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "metadata",
    "start": 1579,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "ValidRoutes",
    "start": 1589,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "Route",
    "start": 1601,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1611,
    "end": 1613
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1614,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1628,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1636,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "FileRouter",
    "start": 1642,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "UploadThingServerHelper",
    "start": 1655,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 1683,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 1698,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1713,
    "end": 1715
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 1716,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "onUpload",
    "start": 1733,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 1744,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1754,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1765,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "String",
    "value": "\"someValue\"",
    "start": 1774,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 1788,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "metadata",
    "start": 1797,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1824,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "outer1",
    "start": 1833,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1840,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1849,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1856,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1866,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "inner1",
    "start": 1875,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1882,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 1891,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1899,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1911,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1919,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 1925,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1939,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "inner1",
    "start": 1946,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1956,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "nestedResult1",
    "start": 1962,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "outer1",
    "start": 1978,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1988,
    "end": 1990
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1997,
    "end": 1999
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2000,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2009,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "outer2",
    "start": 2018,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2028,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2035,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2045,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "inner2",
    "start": 2054,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2061,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2070,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2078,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2090,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2098,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2104,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2118,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "inner2",
    "start": 2125,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2135,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "nestedResult2",
    "start": 2141,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "outer2",
    "start": 2157,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2167,
    "end": 2169
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2176,
    "end": 2178
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2179,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2188,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "outer3",
    "start": 2197,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2204,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2213,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2220,
    "end": 2222
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2230,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "inner3",
    "start": 2239,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2249,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2257,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2269,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2277,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2283,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2297,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "inner3",
    "start": 2304,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2314,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "nestedResult3",
    "start": 2320,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "outer3",
    "start": 2336,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2346,
    "end": 2348
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2355,
    "end": 2357
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2358,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2367,
    "end": 2374
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2375,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "overloaded1",
    "start": 2384,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2396,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2405,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2412,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2422,
    "end": 2429
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2430,
    "end": 2438
  },
  {
    "type": "Identifier",
    "value": "overloaded1",
    "start": 2439,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2451,
    "end": 2456
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2460,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2469,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2476,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2482,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2490,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2505,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "overloadA",
    "start": 2511,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "overloaded1",
    "start": 2523,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2538,
    "end": 2540
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2541,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2546,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "overloadB",
    "start": 2552,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "overloaded1",
    "start": 2564,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2579,
    "end": 2581
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 2582,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2591,
    "end": 2593
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2594,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2602,
    "end": 2609
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2610,
    "end": 2618
  },
  {
    "type": "Identifier",
    "value": "overloaded2",
    "start": 2619,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2634,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2641,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2651,
    "end": 2658
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2659,
    "end": 2667
  },
  {
    "type": "Identifier",
    "value": "overloaded2",
    "start": 2668,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2683,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2692,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2699,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2705,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2713,
    "end": 2715
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2728,
    "end": 2733
  },
  {
    "type": "Identifier",
    "value": "overloadC",
    "start": 2734,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "overloaded2",
    "start": 2746,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2761,
    "end": 2763
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2764,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2769,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "overloadD",
    "start": 2775,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "overloaded2",
    "start": 2787,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2802,
    "end": 2804
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 2805,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2814,
    "end": 2816
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2817,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2825,
    "end": 2832
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2833,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "overloaded3",
    "start": 2842,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2854,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2863,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2870,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2880,
    "end": 2887
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2888,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "overloaded3",
    "start": 2897,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2909,
    "end": 2914
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2921,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2928,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 2934,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2942,
    "end": 2944
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2957,
    "end": 2962
  },
  {
    "type": "Identifier",
    "value": "overloadE",
    "start": 2963,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "overloaded3",
    "start": 2975,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2990,
    "end": 2992
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2993,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2998,
    "end": 3003
  },
  {
    "type": "Identifier",
    "value": "overloadF",
    "start": 3004,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Identifier",
    "value": "overloaded3",
    "start": 3016,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3031,
    "end": 3033
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 3034,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3043,
    "end": 3045
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3046,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3054,
    "end": 3061
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3062,
    "end": 3070
  },
  {
    "type": "Identifier",
    "value": "overloaded4",
    "start": 3071,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3083,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3092,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3099,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3109,
    "end": 3116
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3117,
    "end": 3125
  },
  {
    "type": "Identifier",
    "value": "overloaded4",
    "start": 3126,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3144,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3151,
    "end": 3153
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 3157,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3165,
    "end": 3167
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3180,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "overloadG",
    "start": 3186,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Identifier",
    "value": "overloaded4",
    "start": 3198,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3213,
    "end": 3215
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3216,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3221,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "overloadH",
    "start": 3227,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Identifier",
    "value": "overloaded4",
    "start": 3239,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3254,
    "end": 3256
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 3257,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3266,
    "end": 3268
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3269,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3277,
    "end": 3284
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3285,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "overloaded5",
    "start": 3294,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3309,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3316,
    "end": 3318
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3326,
    "end": 3333
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3334,
    "end": 3342
  },
  {
    "type": "Identifier",
    "value": "overloaded5",
    "start": 3343,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3355,
    "end": 3360
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3367,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3374,
    "end": 3376
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 3380,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3388,
    "end": 3390
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3403,
    "end": 3408
  },
  {
    "type": "Identifier",
    "value": "overloadI",
    "start": 3409,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Identifier",
    "value": "overloaded5",
    "start": 3421,
    "end": 3432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3436,
    "end": 3438
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3439,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3444,
    "end": 3449
  },
  {
    "type": "Identifier",
    "value": "overloadJ",
    "start": 3450,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Identifier",
    "value": "overloaded5",
    "start": 3462,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3477,
    "end": 3479
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 3480,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3489,
    "end": 3491
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3492,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3497,
    "end": 3498
  }
]
```

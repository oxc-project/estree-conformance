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
            "name": "log",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 11,
                  "end": 17
                },
                "start": 11,
                "end": 19
              },
              "start": 9,
              "end": 19
            },
            "start": 6,
            "end": 19
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 22,
            "end": 24
          },
          "definite": false,
          "start": 6,
          "end": 24
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rhs",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 38
      },
      "generator": false,
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
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 50
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 55
                },
                "optional": false,
                "computed": false,
                "start": 47,
                "end": 55
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "rhs",
                  "raw": "\"rhs\"",
                  "start": 56,
                  "end": 61
                }
              ],
              "optional": false,
              "start": 47,
              "end": 62
            },
            "directive": null,
            "start": 47,
            "end": 63
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 75,
              "end": 76
            },
            "start": 68,
            "end": 77
          }
        ],
        "start": 41,
        "end": 79
      },
      "expression": false,
      "start": 26,
      "end": 79
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 88
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 100
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 102,
                    "end": 108
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 111,
                    "end": 115
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 118,
                    "end": 127
                  }
                ],
                "start": 102,
                "end": 127
              },
              "start": 100,
              "end": 127
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 130,
              "end": 131
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 95,
            "end": 132
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "f",
              "start": 141,
              "end": 143
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 156,
                          "end": 159
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 160,
                          "end": 164
                        },
                        "optional": false,
                        "computed": false,
                        "start": 156,
                        "end": 164
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "get",
                          "raw": "\"get\"",
                          "start": 165,
                          "end": 170
                        }
                      ],
                      "optional": false,
                      "start": 156,
                      "end": 171
                    },
                    "directive": null,
                    "start": 156,
                    "end": 172
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 188,
                        "end": 192
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 193,
                        "end": 198
                      },
                      "optional": false,
                      "computed": false,
                      "start": 188,
                      "end": 198
                    },
                    "start": 181,
                    "end": 199
                  }
                ],
                "start": 146,
                "end": 205
              },
              "expression": false,
              "start": 143,
              "end": 205
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 137,
            "end": 205
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "f",
              "start": 214,
              "end": 216
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 224,
                          "end": 230
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 233,
                          "end": 237
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 240,
                          "end": 249
                        }
                      ],
                      "start": 224,
                      "end": 249
                    },
                    "start": 222,
                    "end": 249
                  },
                  "start": 217,
                  "end": 249
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 261,
                          "end": 264
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 265,
                          "end": 269
                        },
                        "optional": false,
                        "computed": false,
                        "start": 261,
                        "end": 269
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": "set ",
                            "raw": "\"set \"",
                            "start": 270,
                            "end": 276
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 279,
                            "end": 284
                          },
                          "start": 270,
                          "end": 284
                        }
                      ],
                      "optional": false,
                      "start": 261,
                      "end": 285
                    },
                    "directive": null,
                    "start": 261,
                    "end": 286
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 295,
                          "end": 299
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 300,
                          "end": 305
                        },
                        "optional": false,
                        "computed": false,
                        "start": 295,
                        "end": 305
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 308,
                        "end": 313
                      },
                      "start": 295,
                      "end": 313
                    },
                    "directive": null,
                    "start": 295,
                    "end": 314
                  }
                ],
                "start": 251,
                "end": 320
              },
              "expression": false,
              "start": 216,
              "end": 320
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 210,
            "end": 320
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "and",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 328
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "&&=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 348,
                          "end": 352
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "f",
                          "start": 353,
                          "end": 355
                        },
                        "optional": false,
                        "computed": false,
                        "start": 348,
                        "end": 355
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 360,
                          "end": 363
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 360,
                        "end": 365
                      },
                      "start": 348,
                      "end": 365
                    },
                    "start": 341,
                    "end": 366
                  }
                ],
                "start": 331,
                "end": 372
              },
              "expression": false,
              "start": 328,
              "end": 372
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 325,
            "end": 372
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "or",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 379
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "||=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 400,
                          "end": 404
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "f",
                          "start": 405,
                          "end": 407
                        },
                        "optional": false,
                        "computed": false,
                        "start": 400,
                        "end": 407
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 413,
                          "end": 416
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 413,
                        "end": 418
                      },
                      "start": 399,
                      "end": 418
                    },
                    "start": 392,
                    "end": 419
                  }
                ],
                "start": 382,
                "end": 425
              },
              "expression": false,
              "start": 379,
              "end": 425
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 377,
            "end": 425
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "orWithComment",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 443
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "||=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 463,
                          "end": 467
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "f",
                          "start": 491,
                          "end": 493
                        },
                        "optional": false,
                        "computed": false,
                        "start": 463,
                        "end": 493
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 498,
                          "end": 501
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 498,
                        "end": 503
                      },
                      "start": 463,
                      "end": 503
                    },
                    "start": 456,
                    "end": 504
                  }
                ],
                "start": 446,
                "end": 510
              },
              "expression": false,
              "start": 443,
              "end": 510
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 430,
            "end": 510
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "coalesce",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 523
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "??=",
                      "left": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 544,
                            "end": 548
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "f",
                            "start": 549,
                            "end": 551
                          },
                          "optional": false,
                          "computed": false,
                          "start": 544,
                          "end": 551
                        },
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 555,
                              "end": 561
                            },
                            {
                              "type": "TSNullKeyword",
                              "start": 564,
                              "end": 568
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 571,
                              "end": 580
                            }
                          ],
                          "start": 555,
                          "end": 580
                        },
                        "start": 544,
                        "end": 580
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 586,
                          "end": 589
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 586,
                        "end": 591
                      },
                      "start": 543,
                      "end": 591
                    },
                    "start": 536,
                    "end": 592
                  }
                ],
                "start": 526,
                "end": 598
              },
              "expression": false,
              "start": 523,
              "end": 598
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 515,
            "end": 598
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "and",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 613
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
                  "name": "receiver",
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
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 630,
                            "end": 631
                          },
                          "typeArguments": null,
                          "start": 630,
                          "end": 631
                        },
                        "start": 627,
                        "end": 631
                      },
                      "start": 624,
                      "end": 631
                    },
                    "start": 622,
                    "end": 631
                  },
                  "start": 614,
                  "end": 631
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "&&=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "receiver",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 650,
                            "end": 658
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 650,
                          "end": 660
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "f",
                          "start": 661,
                          "end": 663
                        },
                        "optional": false,
                        "computed": false,
                        "start": 650,
                        "end": 663
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 668,
                          "end": 671
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 668,
                        "end": 673
                      },
                      "start": 650,
                      "end": 673
                    },
                    "start": 643,
                    "end": 674
                  }
                ],
                "start": 633,
                "end": 680
              },
              "expression": false,
              "start": 613,
              "end": 680
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 603,
            "end": 680
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "or",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 694
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
                  "name": "receiver",
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
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 711,
                            "end": 712
                          },
                          "typeArguments": null,
                          "start": 711,
                          "end": 712
                        },
                        "start": 708,
                        "end": 712
                      },
                      "start": 705,
                      "end": 712
                    },
                    "start": 703,
                    "end": 712
                  },
                  "start": 695,
                  "end": 712
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "||=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "receiver",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 731,
                            "end": 739
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 731,
                          "end": 741
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "f",
                          "start": 742,
                          "end": 744
                        },
                        "optional": false,
                        "computed": false,
                        "start": 731,
                        "end": 744
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 749,
                          "end": 752
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 749,
                        "end": 754
                      },
                      "start": 731,
                      "end": 754
                    },
                    "start": 724,
                    "end": 755
                  }
                ],
                "start": 714,
                "end": 761
              },
              "expression": false,
              "start": 694,
              "end": 761
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 685,
            "end": 761
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "coalesce",
              "optional": false,
              "typeAnnotation": null,
              "start": 773,
              "end": 781
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
                  "name": "receiver",
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
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 798,
                            "end": 799
                          },
                          "typeArguments": null,
                          "start": 798,
                          "end": 799
                        },
                        "start": 795,
                        "end": 799
                      },
                      "start": 792,
                      "end": 799
                    },
                    "start": 790,
                    "end": 799
                  },
                  "start": 782,
                  "end": 799
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "??=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "receiver",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 818,
                            "end": 826
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 818,
                          "end": 828
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "f",
                          "start": 829,
                          "end": 831
                        },
                        "optional": false,
                        "computed": false,
                        "start": 818,
                        "end": 831
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 836,
                          "end": 839
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 836,
                        "end": 841
                      },
                      "start": 818,
                      "end": 841
                    },
                    "start": 811,
                    "end": 842
                  }
                ],
                "start": 801,
                "end": 848
              },
              "expression": false,
              "start": 781,
              "end": 848
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 766,
            "end": 848
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "andIdentifier",
              "optional": false,
              "typeAnnotation": null,
              "start": 860,
              "end": 873
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
                  "name": "receiver",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 884,
                        "end": 885
                      },
                      "typeArguments": null,
                      "start": 884,
                      "end": 885
                    },
                    "start": 882,
                    "end": 885
                  },
                  "start": 874,
                  "end": 885
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "&&=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receiver",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 904,
                          "end": 912
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "f",
                          "start": 913,
                          "end": 915
                        },
                        "optional": false,
                        "computed": false,
                        "start": 904,
                        "end": 915
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 920,
                          "end": 923
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 920,
                        "end": 925
                      },
                      "start": 904,
                      "end": 925
                    },
                    "start": 897,
                    "end": 926
                  }
                ],
                "start": 887,
                "end": 932
              },
              "expression": false,
              "start": 873,
              "end": 932
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 853,
            "end": 932
          }
        ],
        "start": 89,
        "end": 934
      },
      "abstract": false,
      "declare": false,
      "start": 81,
      "end": 934
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 942,
        "end": 943
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 962
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 964,
                    "end": 970
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 973,
                    "end": 977
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 980,
                    "end": 989
                  }
                ],
                "start": 964,
                "end": 989
              },
              "start": 962,
              "end": 989
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 992,
              "end": 993
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 950,
            "end": 994
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "f",
              "start": 1010,
              "end": 1012
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1025,
                          "end": 1028
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1029,
                          "end": 1033
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1025,
                        "end": 1033
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "get",
                          "raw": "\"get\"",
                          "start": 1034,
                          "end": 1039
                        }
                      ],
                      "optional": false,
                      "start": 1025,
                      "end": 1040
                    },
                    "directive": null,
                    "start": 1025,
                    "end": 1041
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1057,
                        "end": 1061
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1062,
                        "end": 1067
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1057,
                      "end": 1067
                    },
                    "start": 1050,
                    "end": 1068
                  }
                ],
                "start": 1015,
                "end": 1074
              },
              "expression": false,
              "start": 1012,
              "end": 1074
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 999,
            "end": 1074
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "f",
              "start": 1090,
              "end": 1092
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1100,
                          "end": 1106
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 1109,
                          "end": 1113
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1116,
                          "end": 1125
                        }
                      ],
                      "start": 1100,
                      "end": 1125
                    },
                    "start": 1098,
                    "end": 1125
                  },
                  "start": 1093,
                  "end": 1125
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1137,
                          "end": 1140
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1141,
                          "end": 1145
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1137,
                        "end": 1145
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": "set ",
                            "raw": "\"set \"",
                            "start": 1146,
                            "end": 1152
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1155,
                            "end": 1160
                          },
                          "start": 1146,
                          "end": 1160
                        }
                      ],
                      "optional": false,
                      "start": 1137,
                      "end": 1161
                    },
                    "directive": null,
                    "start": 1137,
                    "end": 1162
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1171,
                          "end": 1175
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1176,
                          "end": 1181
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1171,
                        "end": 1181
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1184,
                        "end": 1189
                      },
                      "start": 1171,
                      "end": 1189
                    },
                    "directive": null,
                    "start": 1171,
                    "end": 1190
                  }
                ],
                "start": 1127,
                "end": 1196
              },
              "expression": false,
              "start": 1092,
              "end": 1196
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1079,
            "end": 1196
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "and",
              "optional": false,
              "typeAnnotation": null,
              "start": 1208,
              "end": 1211
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "&&=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1231,
                          "end": 1235
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "f",
                          "start": 1236,
                          "end": 1238
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1231,
                        "end": 1238
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1243,
                          "end": 1246
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1243,
                        "end": 1248
                      },
                      "start": 1231,
                      "end": 1248
                    },
                    "start": 1224,
                    "end": 1249
                  }
                ],
                "start": 1214,
                "end": 1255
              },
              "expression": false,
              "start": 1211,
              "end": 1255
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1201,
            "end": 1255
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "or",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1269
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "||=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1289,
                          "end": 1293
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "f",
                          "start": 1294,
                          "end": 1296
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1289,
                        "end": 1296
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1301,
                          "end": 1304
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1301,
                        "end": 1306
                      },
                      "start": 1289,
                      "end": 1306
                    },
                    "start": 1282,
                    "end": 1307
                  }
                ],
                "start": 1272,
                "end": 1313
              },
              "expression": false,
              "start": 1269,
              "end": 1313
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1260,
            "end": 1313
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "coalesce",
              "optional": false,
              "typeAnnotation": null,
              "start": 1325,
              "end": 1333
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "??=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1353,
                          "end": 1357
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "f",
                          "start": 1358,
                          "end": 1360
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1353,
                        "end": 1360
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1365,
                          "end": 1368
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1365,
                        "end": 1370
                      },
                      "start": 1353,
                      "end": 1370
                    },
                    "start": 1346,
                    "end": 1371
                  }
                ],
                "start": 1336,
                "end": 1377
              },
              "expression": false,
              "start": 1333,
              "end": 1377
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1318,
            "end": 1377
          }
        ],
        "start": 944,
        "end": 1379
      },
      "abstract": false,
      "declare": false,
      "start": 936,
      "end": 1379
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReadOnly",
        "optional": false,
        "typeAnnotation": null,
        "start": 1387,
        "end": 1395
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
              "type": "PrivateIdentifier",
              "name": "f",
              "start": 1406,
              "end": 1408
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "value": 0,
                      "raw": "0",
                      "start": 1420,
                      "end": 1421
                    },
                    "start": 1413,
                    "end": 1422
                  }
                ],
                "start": 1411,
                "end": 1424
              },
              "expression": false,
              "start": 1408,
              "end": 1424
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1402,
            "end": 1424
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "m",
              "start": 1429,
              "end": 1431
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1434,
                "end": 1436
              },
              "expression": false,
              "start": 1431,
              "end": 1436
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1429,
            "end": 1436
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "run",
              "optional": false,
              "typeAnnotation": null,
              "start": 1441,
              "end": 1444
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
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
                      "type": "AssignmentExpression",
                      "operator": "&&=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1485,
                          "end": 1489
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "f",
                          "start": 1490,
                          "end": 1492
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1485,
                        "end": 1492
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1497,
                          "end": 1500
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1497,
                        "end": 1502
                      },
                      "start": 1485,
                      "end": 1502
                    },
                    "directive": null,
                    "start": 1485,
                    "end": 1503
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "||=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1540,
                          "end": 1544
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "m",
                          "start": 1545,
                          "end": 1547
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1540,
                        "end": 1547
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1552,
                          "end": 1555
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1552,
                        "end": 1557
                      },
                      "start": 1540,
                      "end": 1557
                    },
                    "directive": null,
                    "start": 1540,
                    "end": 1558
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "??=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1595,
                          "end": 1599
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "m",
                          "start": 1600,
                          "end": 1602
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1595,
                        "end": 1602
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rhs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1607,
                          "end": 1610
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1607,
                        "end": 1612
                      },
                      "start": 1595,
                      "end": 1612
                    },
                    "directive": null,
                    "start": 1595,
                    "end": 1613
                  }
                ],
                "start": 1447,
                "end": 1619
              },
              "expression": false,
              "start": 1444,
              "end": 1619
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1441,
            "end": 1619
          }
        ],
        "start": 1396,
        "end": 1621
      },
      "abstract": false,
      "declare": false,
      "start": 1381,
      "end": 1621
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1621
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
    "value": "log",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 26,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "String",
    "value": "\"rhs\"",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 68,
    "end": 74
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 81,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Identifier",
    "value": "value",
    "start": 95,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 109,
    "end": 110
  },
  {
    "type": "Null",
    "value": "null",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 118,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 137,
    "end": 140
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
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
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 156,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "String",
    "value": "\"get\"",
    "start": 165,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 181,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 188,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 193,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 210,
    "end": 213
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 217,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 231,
    "end": 232
  },
  {
    "type": "Null",
    "value": "null",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 240,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "String",
    "value": "\"set \"",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 295,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 308,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "and",
    "start": 325,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 341,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 348,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 352,
    "end": 353
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 353,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 356,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
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
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "or",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 404,
    "end": 405
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 409,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "orWithComment",
    "start": 430,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 456,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 463,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 491,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 494,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 498,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "coalesce",
    "start": 515,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 536,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 549,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 552,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 555,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 562,
    "end": 563
  },
  {
    "type": "Null",
    "value": "null",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 571,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 582,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 586,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 603,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "and",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 614,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 627,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 643,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 650,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 660,
    "end": 661
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 661,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 664,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 685,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "or",
    "start": 692,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 695,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 708,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 724,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 731,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 741,
    "end": 742
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 742,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 745,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 749,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 766,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "coalesce",
    "start": 773,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 782,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 795,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 811,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 818,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 828,
    "end": 829
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 829,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 832,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 836,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 847,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 853,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "andIdentifier",
    "start": 860,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 874,
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
    "value": "C",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 897,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 904,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 912,
    "end": 913
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 916,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 920,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 936,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 950,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 957,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 964,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 971,
    "end": 972
  },
  {
    "type": "Null",
    "value": "null",
    "start": 973,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 980,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 999,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 1010,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1025,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1029,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "String",
    "value": "\"get\"",
    "start": 1034,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1050,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1057,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1062,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1079,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1086,
    "end": 1089
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 1090,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1093,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1100,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1109,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1116,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1137,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1141,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "String",
    "value": "\"set \"",
    "start": 1146,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1155,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1171,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1176,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1184,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1201,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "and",
    "start": 1208,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1224,
    "end": 1230
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1231,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 1236,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 1239,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 1243,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1260,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "or",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1282,
    "end": 1288
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1289,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 1294,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 1297,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 1301,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1318,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "coalesce",
    "start": 1325,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1346,
    "end": 1352
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1353,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 1358,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1361,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 1365,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1381,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "ReadOnly",
    "start": 1387,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1402,
    "end": 1405
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 1406,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1413,
    "end": 1419
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "PrivateIdentifier",
    "value": "m",
    "start": 1429,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "run",
    "start": 1441,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1485,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "PrivateIdentifier",
    "value": "f",
    "start": 1490,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 1493,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 1497,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1540,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "PrivateIdentifier",
    "value": "m",
    "start": 1545,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 1548,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 1552,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1595,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "PrivateIdentifier",
    "value": "m",
    "start": 1600,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1603,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "rhs",
    "start": 1607,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1620,
    "end": 1621
  }
]
```

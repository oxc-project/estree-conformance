__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "FileManager",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 104,
                "end": 107
              },
              "start": 102,
              "end": 107
            },
            "start": 91,
            "end": 107
          },
          "init": null,
          "definite": false,
          "start": 91,
          "end": 107
        }
      ],
      "declare": true,
      "start": 79,
      "end": 108
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
            "name": "App",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 126,
                "end": 129
              },
              "start": 124,
              "end": 129
            },
            "start": 121,
            "end": 129
          },
          "init": null,
          "definite": false,
          "start": 121,
          "end": 129
        }
      ],
      "declare": true,
      "start": 109,
      "end": 130
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
            "name": "TestFileDir",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 147
          },
          "init": {
            "type": "Literal",
            "value": ".\\TempTestFiles",
            "raw": "\".\\\\TempTestFiles\"",
            "start": 150,
            "end": 168
          },
          "definite": false,
          "start": 136,
          "end": 168
        }
      ],
      "declare": false,
      "start": 132,
      "end": 169
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestCase",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 192
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
                "start": 199,
                "end": 210
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
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 225,
                          "end": 231
                        },
                        "start": 223,
                        "end": 231
                      },
                      "start": 219,
                      "end": 231
                    },
                    "readonly": false,
                    "static": false,
                    "start": 212,
                    "end": 231
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
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
                              "type": "TSBooleanKeyword",
                              "start": 250,
                              "end": 257
                            },
                            "start": 248,
                            "end": 257
                          },
                          "start": 246,
                          "end": 257
                        },
                        "start": 244,
                        "end": 257
                      },
                      "start": 240,
                      "end": 257
                    },
                    "readonly": false,
                    "static": false,
                    "start": 233,
                    "end": 257
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "errorMessageRegEx",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 286,
                          "end": 292
                        },
                        "start": 284,
                        "end": 292
                      },
                      "start": 266,
                      "end": 292
                    },
                    "readonly": false,
                    "static": false,
                    "start": 259,
                    "end": 292
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 294,
                  "end": 301
                },
                "expression": false,
                "start": 211,
                "end": 301
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 199,
              "end": 301
            }
          ],
          "start": 193,
          "end": 303
        },
        "abstract": false,
        "declare": false,
        "start": 178,
        "end": 303
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 171,
      "end": 303
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestRunner",
          "optional": false,
          "typeAnnotation": null,
          "start": 317,
          "end": 327
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
                "name": "tests",
                "optional": false,
                "typeAnnotation": null,
                "start": 343,
                "end": 348
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TestCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 358
                    },
                    "typeArguments": null,
                    "start": 350,
                    "end": 358
                  },
                  "start": 350,
                  "end": 360
                },
                "start": 348,
                "end": 360
              },
              "value": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 363,
                "end": 365
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 335,
              "end": 366
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayCompare",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 391
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
                    "name": "arg1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 398,
                          "end": 401
                        },
                        "start": 398,
                        "end": 403
                      },
                      "start": 396,
                      "end": 403
                    },
                    "start": 392,
                    "end": 403
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 411,
                          "end": 414
                        },
                        "start": 411,
                        "end": 416
                      },
                      "start": 409,
                      "end": 416
                    },
                    "start": 405,
                    "end": 416
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 419,
                    "end": 426
                  },
                  "start": 417,
                  "end": 426
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 445,
                            "end": 449
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "every",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 450,
                            "end": 455
                          },
                          "optional": false,
                          "computed": false,
                          "start": 445,
                          "end": 455
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
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
                                "name": "val",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 466,
                                "end": 469
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 471,
                                "end": 476
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "val",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 487,
                                      "end": 490
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 495,
                                        "end": 499
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 500,
                                        "end": 505
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 495,
                                      "end": 506
                                    },
                                    "start": 487,
                                    "end": 506
                                  },
                                  "start": 480,
                                  "end": 506
                                }
                              ],
                              "start": 478,
                              "end": 508
                            },
                            "expression": false,
                            "start": 456,
                            "end": 508
                          }
                        ],
                        "optional": false,
                        "start": 445,
                        "end": 509
                      },
                      "start": 437,
                      "end": 511
                    }
                  ],
                  "start": 427,
                  "end": 517
                },
                "expression": false,
                "start": 391,
                "end": 517
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 372,
              "end": 517
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "addTest",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 537
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
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TestCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 544,
                          "end": 552
                        },
                        "typeArguments": null,
                        "start": 544,
                        "end": 552
                      },
                      "start": 542,
                      "end": 552
                    },
                    "start": 538,
                    "end": 552
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 564,
                              "end": 568
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "tests",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 569,
                              "end": 574
                            },
                            "optional": false,
                            "computed": false,
                            "start": 564,
                            "end": 574
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "push",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 575,
                            "end": 579
                          },
                          "optional": false,
                          "computed": false,
                          "start": 564,
                          "end": 579
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 580,
                            "end": 584
                          }
                        ],
                        "optional": false,
                        "start": 564,
                        "end": 585
                      },
                      "directive": null,
                      "start": 564,
                      "end": 586
                    }
                  ],
                  "start": 554,
                  "end": 592
                },
                "expression": false,
                "start": 537,
                "end": 592
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 523,
              "end": 592
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
                "start": 604,
                "end": 607
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
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "success",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 624,
                            "end": 631
                          },
                          "init": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 634,
                            "end": 638
                          },
                          "definite": false,
                          "start": 624,
                          "end": 638
                        }
                      ],
                      "declare": false,
                      "start": 620,
                      "end": 639
                    },
                    {
                      "type": "ForInStatement",
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 657,
                              "end": 661
                            },
                            "init": null,
                            "definite": false,
                            "start": 657,
                            "end": 661
                          }
                        ],
                        "declare": false,
                        "start": 653,
                        "end": 661
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 665,
                          "end": 669
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tests",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 670,
                          "end": 675
                        },
                        "optional": false,
                        "computed": false,
                        "start": 665,
                        "end": 675
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "exception",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 695,
                                  "end": 704
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false",
                                  "start": 707,
                                  "end": 712
                                },
                                "definite": false,
                                "start": 695,
                                "end": 712
                              }
                            ],
                            "declare": false,
                            "start": 691,
                            "end": 713
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
                                  "name": "testcase",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 730,
                                  "end": 738
                                },
                                "init": {
                                  "type": "TSTypeAssertion",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TestCase",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 742,
                                      "end": 750
                                    },
                                    "typeArguments": null,
                                    "start": 742,
                                    "end": 750
                                  },
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 751,
                                        "end": 755
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "tests",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 756,
                                        "end": 761
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 751,
                                      "end": 761
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "test",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 762,
                                      "end": 766
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 751,
                                    "end": 767
                                  },
                                  "start": 741,
                                  "end": 767
                                },
                                "definite": false,
                                "start": 730,
                                "end": 767
                              }
                            ],
                            "declare": false,
                            "start": 726,
                            "end": 767
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
                                  "name": "testResult",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSBooleanKeyword",
                                      "start": 796,
                                      "end": 803
                                    },
                                    "start": 794,
                                    "end": 803
                                  },
                                  "start": 784,
                                  "end": 803
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false",
                                  "start": 806,
                                  "end": 811
                                },
                                "definite": false,
                                "start": 784,
                                "end": 811
                              }
                            ],
                            "declare": false,
                            "start": 780,
                            "end": 812
                          },
                          {
                            "type": "TryStatement",
                            "block": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "testResult",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 847,
                                      "end": 857
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "testcase",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 860,
                                          "end": 868
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "test",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 869,
                                          "end": 873
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 860,
                                        "end": 873
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 860,
                                      "end": 875
                                    },
                                    "start": 847,
                                    "end": 875
                                  },
                                  "directive": null,
                                  "start": 847,
                                  "end": 876
                                }
                              ],
                              "start": 829,
                              "end": 890
                            },
                            "handler": {
                              "type": "CatchClause",
                              "param": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 913,
                                    "end": 916
                                  },
                                  "start": 911,
                                  "end": 916
                                },
                                "start": 910,
                                "end": 916
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "exception",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 936,
                                        "end": 945
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 948,
                                        "end": 952
                                      },
                                      "start": 936,
                                      "end": 952
                                    },
                                    "directive": null,
                                    "start": 936,
                                    "end": 953
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "testResult",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 970,
                                        "end": 980
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false",
                                        "start": 983,
                                        "end": 988
                                      },
                                      "start": 970,
                                      "end": 988
                                    },
                                    "directive": null,
                                    "start": 970,
                                    "end": 989
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "UnaryExpression",
                                        "operator": "typeof",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "testcase",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1017,
                                            "end": 1025
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "errorMessageRegEx",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1026,
                                            "end": 1043
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1017,
                                          "end": 1043
                                        },
                                        "prefix": true,
                                        "start": 1010,
                                        "end": 1043
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Literal",
                                        "value": "string",
                                        "raw": "\"string\"",
                                        "start": 1048,
                                        "end": 1056
                                      },
                                      "start": 1010,
                                      "end": 1056
                                    },
                                    "consequent": {
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
                                                "name": "testcase",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1084,
                                                "end": 1092
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "errorMessageRegEx",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1093,
                                                "end": 1110
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1084,
                                              "end": 1110
                                            },
                                            "operator": "===",
                                            "right": {
                                              "type": "Literal",
                                              "value": "",
                                              "raw": "\"\"",
                                              "start": 1115,
                                              "end": 1117
                                            },
                                            "start": 1084,
                                            "end": 1117
                                          },
                                          "consequent": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "AssignmentExpression",
                                                  "operator": "=",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "testResult",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1166,
                                                    "end": 1176
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": true,
                                                    "raw": "true",
                                                    "start": 1179,
                                                    "end": 1183
                                                  },
                                                  "start": 1166,
                                                  "end": 1183
                                                },
                                                "directive": null,
                                                "start": 1166,
                                                "end": 1184
                                              }
                                            ],
                                            "start": 1119,
                                            "end": 1206
                                          },
                                          "alternate": {
                                            "type": "IfStatement",
                                            "test": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "e",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1216,
                                                "end": 1217
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "message",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1218,
                                                "end": 1225
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1216,
                                              "end": 1225
                                            },
                                            "consequent": {
                                              "type": "BlockStatement",
                                              "body": [
                                                {
                                                  "type": "VariableDeclaration",
                                                  "kind": "var",
                                                  "declarations": [
                                                    {
                                                      "type": "VariableDeclarator",
                                                      "id": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "regex",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1257,
                                                        "end": 1262
                                                      },
                                                      "init": {
                                                        "type": "NewExpression",
                                                        "callee": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "RegExp",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1269,
                                                          "end": 1275
                                                        },
                                                        "typeArguments": null,
                                                        "arguments": [
                                                          {
                                                            "type": "MemberExpression",
                                                            "object": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "testcase",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 1276,
                                                              "end": 1284
                                                            },
                                                            "property": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "errorMessageRegEx",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 1285,
                                                              "end": 1302
                                                            },
                                                            "optional": false,
                                                            "computed": false,
                                                            "start": 1276,
                                                            "end": 1302
                                                          }
                                                        ],
                                                        "start": 1265,
                                                        "end": 1303
                                                      },
                                                      "definite": false,
                                                      "start": 1257,
                                                      "end": 1303
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 1253,
                                                  "end": 1304
                                                },
                                                {
                                                  "type": "ExpressionStatement",
                                                  "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "testResult",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1329,
                                                      "end": 1339
                                                    },
                                                    "right": {
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "MemberExpression",
                                                        "object": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "regex",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1342,
                                                          "end": 1347
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "test",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1348,
                                                          "end": 1352
                                                        },
                                                        "optional": false,
                                                        "computed": false,
                                                        "start": 1342,
                                                        "end": 1352
                                                      },
                                                      "typeArguments": null,
                                                      "arguments": [
                                                        {
                                                          "type": "MemberExpression",
                                                          "object": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "e",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1353,
                                                            "end": 1354
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "message",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1355,
                                                            "end": 1362
                                                          },
                                                          "optional": false,
                                                          "computed": false,
                                                          "start": 1353,
                                                          "end": 1362
                                                        }
                                                      ],
                                                      "optional": false,
                                                      "start": 1342,
                                                      "end": 1363
                                                    },
                                                    "start": 1329,
                                                    "end": 1363
                                                  },
                                                  "directive": null,
                                                  "start": 1329,
                                                  "end": 1364
                                                }
                                              ],
                                              "start": 1227,
                                              "end": 1386
                                            },
                                            "alternate": null,
                                            "start": 1212,
                                            "end": 1386
                                          },
                                          "start": 1080,
                                          "end": 1386
                                        }
                                      ],
                                      "start": 1058,
                                      "end": 1404
                                    },
                                    "alternate": null,
                                    "start": 1006,
                                    "end": 1404
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "testResult",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1426,
                                        "end": 1436
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false",
                                        "start": 1441,
                                        "end": 1446
                                      },
                                      "start": 1426,
                                      "end": 1446
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [],
                                      "start": 1448,
                                      "end": 1513
                                    },
                                    "alternate": null,
                                    "start": 1422,
                                    "end": 1513
                                  }
                                ],
                                "start": 918,
                                "end": 1527
                              },
                              "start": 903,
                              "end": 1527
                            },
                            "finalizer": null,
                            "start": 825,
                            "end": 1527
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "testcase",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1545,
                                    "end": 1553
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "errorMessageRegEx",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1554,
                                    "end": 1571
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1545,
                                  "end": 1571
                                },
                                "operator": "!==",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1576,
                                  "end": 1585
                                },
                                "start": 1545,
                                "end": 1585
                              },
                              "operator": "&&",
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "exception",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1591,
                                  "end": 1600
                                },
                                "prefix": true,
                                "start": 1590,
                                "end": 1600
                              },
                              "start": 1544,
                              "end": 1600
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "success",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1620,
                                      "end": 1627
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 1630,
                                      "end": 1635
                                    },
                                    "start": 1620,
                                    "end": 1635
                                  },
                                  "directive": null,
                                  "start": 1620,
                                  "end": 1636
                                }
                              ],
                              "start": 1602,
                              "end": 1650
                            },
                            "alternate": {
                              "type": "IfStatement",
                              "test": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "testResult",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1661,
                                  "end": 1671
                                },
                                "prefix": true,
                                "start": 1660,
                                "end": 1671
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "success",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1691,
                                        "end": 1698
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false",
                                        "start": 1701,
                                        "end": 1706
                                      },
                                      "start": 1691,
                                      "end": 1706
                                    },
                                    "directive": null,
                                    "start": 1691,
                                    "end": 1707
                                  }
                                ],
                                "start": 1673,
                                "end": 1721
                              },
                              "alternate": null,
                              "start": 1656,
                              "end": 1721
                            },
                            "start": 1540,
                            "end": 1721
                          }
                        ],
                        "start": 677,
                        "end": 1731
                      },
                      "start": 648,
                      "end": 1731
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "success",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1744,
                        "end": 1751
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1753,
                        "end": 1764
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1770,
                        "end": 1781
                      },
                      "start": 1740,
                      "end": 1781
                    }
                  ],
                  "start": 610,
                  "end": 1787
                },
                "expression": false,
                "start": 607,
                "end": 1787
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 597,
              "end": 1787
            }
          ],
          "start": 328,
          "end": 1789
        },
        "abstract": false,
        "declare": false,
        "start": 311,
        "end": 1789
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 304,
      "end": 1789
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "tests",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TestRunner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1809,
                    "end": 1819
                  },
                  "typeArguments": null,
                  "start": 1809,
                  "end": 1819
                },
                "start": 1807,
                "end": 1819
              },
              "start": 1802,
              "end": 1819
            },
            "init": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1845,
                            "end": 1855
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestRunner",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1862,
                              "end": 1872
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1858,
                            "end": 1874
                          },
                          "definite": false,
                          "start": 1845,
                          "end": 1874
                        }
                      ],
                      "declare": false,
                      "start": 1841,
                      "end": 1875
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1929,
                            "end": 1939
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1940,
                            "end": 1947
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1929,
                          "end": 1947
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1952,
                              "end": 1960
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Basic test",
                                "raw": "\"Basic test\"",
                                "start": 1961,
                                "end": 1973
                              },
                              {
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
                                        "value": true,
                                        "raw": "true",
                                        "start": 1996,
                                        "end": 2000
                                      },
                                      "start": 1989,
                                      "end": 2001
                                    }
                                  ],
                                  "start": 1987,
                                  "end": 2003
                                },
                                "expression": false,
                                "start": 1975,
                                "end": 2003
                              }
                            ],
                            "start": 1948,
                            "end": 2004
                          }
                        ],
                        "optional": false,
                        "start": 1929,
                        "end": 2005
                      },
                      "directive": null,
                      "start": 1929,
                      "end": 2006
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2011,
                            "end": 2021
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2022,
                            "end": 2029
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2011,
                          "end": 2029
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2034,
                              "end": 2042
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test for any error",
                                "raw": "\"Test for any error\"",
                                "start": 2043,
                                "end": 2063
                              },
                              {
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
                                      "type": "ThrowStatement",
                                      "argument": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Error",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2089,
                                          "end": 2094
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 2085,
                                        "end": 2096
                                      },
                                      "start": 2079,
                                      "end": 2097
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false",
                                        "start": 2105,
                                        "end": 2110
                                      },
                                      "start": 2098,
                                      "end": 2111
                                    }
                                  ],
                                  "start": 2077,
                                  "end": 2113
                                },
                                "expression": false,
                                "start": 2065,
                                "end": 2113
                              },
                              {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\"",
                                "start": 2115,
                                "end": 2117
                              }
                            ],
                            "start": 2030,
                            "end": 2118
                          }
                        ],
                        "optional": false,
                        "start": 2011,
                        "end": 2119
                      },
                      "directive": null,
                      "start": 2011,
                      "end": 2120
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2125,
                            "end": 2135
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2136,
                            "end": 2143
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2125,
                          "end": 2143
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2148,
                              "end": 2156
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test RegEx error message match",
                                "raw": "\"Test RegEx error message match\"",
                                "start": 2157,
                                "end": 2189
                              },
                              {
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
                                      "type": "ThrowStatement",
                                      "argument": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Error",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2215,
                                          "end": 2220
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": "Should also pass",
                                            "raw": "\"Should also pass\"",
                                            "start": 2221,
                                            "end": 2239
                                          }
                                        ],
                                        "start": 2211,
                                        "end": 2240
                                      },
                                      "start": 2205,
                                      "end": 2241
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false",
                                        "start": 2249,
                                        "end": 2254
                                      },
                                      "start": 2242,
                                      "end": 2255
                                    }
                                  ],
                                  "start": 2203,
                                  "end": 2257
                                },
                                "expression": false,
                                "start": 2191,
                                "end": 2257
                              },
                              {
                                "type": "Literal",
                                "value": "Should [also]+ pass",
                                "raw": "\"Should [also]+ pass\"",
                                "start": 2259,
                                "end": 2280
                              }
                            ],
                            "start": 2144,
                            "end": 2281
                          }
                        ],
                        "optional": false,
                        "start": 2125,
                        "end": 2282
                      },
                      "directive": null,
                      "start": 2125,
                      "end": 2283
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2288,
                            "end": 2298
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2299,
                            "end": 2306
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2288,
                          "end": 2306
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2311,
                              "end": 2319
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test array compare true",
                                "raw": "\"Test array compare true\"",
                                "start": 2320,
                                "end": 2345
                              },
                              {
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2368,
                                            "end": 2378
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2379,
                                            "end": 2391
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 2368,
                                          "end": 2391
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 2393,
                                                "end": 2394
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2",
                                                "start": 2396,
                                                "end": 2397
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 3,
                                                "raw": "3",
                                                "start": 2399,
                                                "end": 2400
                                              }
                                            ],
                                            "start": 2392,
                                            "end": 2401
                                          },
                                          {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 2404,
                                                "end": 2405
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2",
                                                "start": 2407,
                                                "end": 2408
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 3,
                                                "raw": "3",
                                                "start": 2410,
                                                "end": 2411
                                              }
                                            ],
                                            "start": 2403,
                                            "end": 2412
                                          }
                                        ],
                                        "optional": false,
                                        "start": 2368,
                                        "end": 2413
                                      },
                                      "start": 2361,
                                      "end": 2414
                                    }
                                  ],
                                  "start": 2359,
                                  "end": 2416
                                },
                                "expression": false,
                                "start": 2347,
                                "end": 2416
                              }
                            ],
                            "start": 2307,
                            "end": 2417
                          }
                        ],
                        "optional": false,
                        "start": 2288,
                        "end": 2418
                      },
                      "directive": null,
                      "start": 2288,
                      "end": 2419
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2424,
                            "end": 2434
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2435,
                            "end": 2442
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2424,
                          "end": 2442
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2447,
                              "end": 2455
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test array compare false",
                                "raw": "\"Test array compare false\"",
                                "start": 2456,
                                "end": 2482
                              },
                              {
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
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestRunner",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2506,
                                              "end": 2516
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "arrayCompare",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2517,
                                              "end": 2529
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 2506,
                                            "end": 2529
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "Literal",
                                                  "value": 3,
                                                  "raw": "3",
                                                  "start": 2531,
                                                  "end": 2532
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": 2,
                                                  "raw": "2",
                                                  "start": 2534,
                                                  "end": 2535
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": 3,
                                                  "raw": "3",
                                                  "start": 2537,
                                                  "end": 2538
                                                }
                                              ],
                                              "start": 2530,
                                              "end": 2539
                                            },
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "Literal",
                                                  "value": 1,
                                                  "raw": "1",
                                                  "start": 2542,
                                                  "end": 2543
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": 2,
                                                  "raw": "2",
                                                  "start": 2545,
                                                  "end": 2546
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": 3,
                                                  "raw": "3",
                                                  "start": 2548,
                                                  "end": 2549
                                                }
                                              ],
                                              "start": 2541,
                                              "end": 2550
                                            }
                                          ],
                                          "optional": false,
                                          "start": 2506,
                                          "end": 2551
                                        },
                                        "prefix": true,
                                        "start": 2505,
                                        "end": 2551
                                      },
                                      "start": 2498,
                                      "end": 2552
                                    }
                                  ],
                                  "start": 2496,
                                  "end": 2554
                                },
                                "expression": false,
                                "start": 2484,
                                "end": 2554
                              }
                            ],
                            "start": 2443,
                            "end": 2555
                          }
                        ],
                        "optional": false,
                        "start": 2424,
                        "end": 2556
                      },
                      "directive": null,
                      "start": 2424,
                      "end": 2557
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2591,
                            "end": 2601
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2602,
                            "end": 2609
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2591,
                          "end": 2609
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2614,
                              "end": 2622
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check file exists",
                                "raw": "\"Check file exists\"",
                                "start": 2623,
                                "end": 2642
                              },
                              {
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "FileManager",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2685,
                                              "end": 2696
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "DirectoryManager",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2697,
                                              "end": 2713
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 2685,
                                            "end": 2713
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fileExists",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2714,
                                            "end": 2724
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 2685,
                                          "end": 2724
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2725,
                                              "end": 2736
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\Test.txt",
                                              "raw": "\"\\\\Test.txt\"",
                                              "start": 2739,
                                              "end": 2751
                                            },
                                            "start": 2725,
                                            "end": 2751
                                          }
                                        ],
                                        "optional": false,
                                        "start": 2685,
                                        "end": 2752
                                      },
                                      "start": 2678,
                                      "end": 2753
                                    }
                                  ],
                                  "start": 2664,
                                  "end": 2763
                                },
                                "expression": false,
                                "start": 2652,
                                "end": 2763
                              }
                            ],
                            "start": 2610,
                            "end": 2764
                          }
                        ],
                        "optional": false,
                        "start": 2591,
                        "end": 2765
                      },
                      "directive": null,
                      "start": 2591,
                      "end": 2766
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2771,
                            "end": 2781
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2782,
                            "end": 2789
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2771,
                          "end": 2789
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2794,
                              "end": 2802
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check file doesn't exist",
                                "raw": "\"Check file doesn't exist\"",
                                "start": 2803,
                                "end": 2829
                              },
                              {
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
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2873,
                                                "end": 2884
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "DirectoryManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2885,
                                                "end": 2901
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 2873,
                                              "end": 2901
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fileExists",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2902,
                                              "end": 2912
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 2873,
                                            "end": 2912
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "TestFileDir",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2913,
                                                "end": 2924
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "Literal",
                                                "value": "\\Test2.txt",
                                                "raw": "\"\\\\Test2.txt\"",
                                                "start": 2927,
                                                "end": 2940
                                              },
                                              "start": 2913,
                                              "end": 2940
                                            }
                                          ],
                                          "optional": false,
                                          "start": 2873,
                                          "end": 2941
                                        },
                                        "prefix": true,
                                        "start": 2872,
                                        "end": 2941
                                      },
                                      "start": 2865,
                                      "end": 2942
                                    }
                                  ],
                                  "start": 2851,
                                  "end": 2952
                                },
                                "expression": false,
                                "start": 2839,
                                "end": 2952
                              }
                            ],
                            "start": 2790,
                            "end": 2953
                          }
                        ],
                        "optional": false,
                        "start": 2771,
                        "end": 2954
                      },
                      "directive": null,
                      "start": 2771,
                      "end": 2955
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2996,
                            "end": 3006
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3007,
                            "end": 3014
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2996,
                          "end": 3014
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3019,
                              "end": 3027
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check text file match",
                                "raw": "\"Check text file match\"",
                                "start": 3028,
                                "end": 3051
                              },
                              {
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
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "LogicalExpression",
                                          "left": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileManager",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3095,
                                                  "end": 3106
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileBuffer",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3107,
                                                  "end": 3117
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3095,
                                                "end": 3117
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "isTextFile",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3118,
                                                "end": 3128
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3095,
                                              "end": 3128
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": "C:\\somedir\\readme.txt",
                                                "raw": "\"C:\\\\somedir\\\\readme.txt\"",
                                                "start": 3129,
                                                "end": 3154
                                              }
                                            ],
                                            "optional": false,
                                            "start": 3095,
                                            "end": 3155
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileManager",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3175,
                                                  "end": 3186
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileBuffer",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3187,
                                                  "end": 3197
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3175,
                                                "end": 3197
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "isTextFile",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3198,
                                                "end": 3208
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3175,
                                              "end": 3208
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": "C:\\spaces path\\myapp.str",
                                                "raw": "\"C:\\\\spaces path\\\\myapp.str\"",
                                                "start": 3209,
                                                "end": 3237
                                              }
                                            ],
                                            "optional": false,
                                            "start": 3175,
                                            "end": 3238
                                          },
                                          "start": 3095,
                                          "end": 3238
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3258,
                                                "end": 3269
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3270,
                                                "end": 3280
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3258,
                                              "end": 3280
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "isTextFile",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3281,
                                              "end": 3291
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 3258,
                                            "end": 3291
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": "C:\\somedir\\code.js",
                                              "raw": "\"C:\\\\somedir\\\\code.js\"",
                                              "start": 3292,
                                              "end": 3314
                                            }
                                          ],
                                          "optional": false,
                                          "start": 3258,
                                          "end": 3315
                                        },
                                        "start": 3095,
                                        "end": 3315
                                      },
                                      "start": 3087,
                                      "end": 3316
                                    }
                                  ],
                                  "start": 3073,
                                  "end": 3326
                                },
                                "expression": false,
                                "start": 3061,
                                "end": 3326
                              }
                            ],
                            "start": 3015,
                            "end": 3327
                          }
                        ],
                        "optional": false,
                        "start": 2996,
                        "end": 3328
                      },
                      "directive": null,
                      "start": 2996,
                      "end": 3329
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3334,
                            "end": 3344
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3345,
                            "end": 3352
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3334,
                          "end": 3352
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3357,
                              "end": 3365
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check makefile match",
                                "raw": "\"Check makefile match\"",
                                "start": 3366,
                                "end": 3388
                              },
                              {
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "FileManager",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3431,
                                              "end": 3442
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "FileBuffer",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3443,
                                              "end": 3453
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 3431,
                                            "end": 3453
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "isTextFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3454,
                                            "end": 3464
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 3431,
                                          "end": 3464
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": "C:\\some dir\\makefile",
                                            "raw": "\"C:\\\\some dir\\\\makefile\"",
                                            "start": 3465,
                                            "end": 3489
                                          }
                                        ],
                                        "optional": false,
                                        "start": 3431,
                                        "end": 3490
                                      },
                                      "start": 3424,
                                      "end": 3491
                                    }
                                  ],
                                  "start": 3410,
                                  "end": 3501
                                },
                                "expression": false,
                                "start": 3398,
                                "end": 3501
                              }
                            ],
                            "start": 3353,
                            "end": 3502
                          }
                        ],
                        "optional": false,
                        "start": 3334,
                        "end": 3503
                      },
                      "directive": null,
                      "start": 3334,
                      "end": 3504
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3509,
                            "end": 3519
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3520,
                            "end": 3527
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3509,
                          "end": 3527
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3532,
                              "end": 3540
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check binary file doesn't match",
                                "raw": "\"Check binary file doesn't match\"",
                                "start": 3541,
                                "end": 3574
                              },
                              {
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
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "UnaryExpression",
                                          "operator": "!",
                                          "argument": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileManager",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3619,
                                                  "end": 3630
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileBuffer",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3631,
                                                  "end": 3641
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3619,
                                                "end": 3641
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "isTextFile",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3642,
                                                "end": 3652
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3619,
                                              "end": 3652
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": "C:\\somedir\\app.exe",
                                                "raw": "\"C:\\\\somedir\\\\app.exe\"",
                                                "start": 3653,
                                                "end": 3675
                                              }
                                            ],
                                            "optional": false,
                                            "start": 3619,
                                            "end": 3676
                                          },
                                          "prefix": true,
                                          "start": 3618,
                                          "end": 3676
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "UnaryExpression",
                                          "operator": "!",
                                          "argument": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileManager",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3693,
                                                  "end": 3704
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileBuffer",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3705,
                                                  "end": 3715
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3693,
                                                "end": 3715
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "isTextFile",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3716,
                                                "end": 3726
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3693,
                                              "end": 3726
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": "C:\\somedir\\my lib.dll",
                                                "raw": "\"C:\\\\somedir\\\\my lib.dll\"",
                                                "start": 3727,
                                                "end": 3752
                                              }
                                            ],
                                            "optional": false,
                                            "start": 3693,
                                            "end": 3753
                                          },
                                          "prefix": true,
                                          "start": 3692,
                                          "end": 3753
                                        },
                                        "start": 3618,
                                        "end": 3753
                                      },
                                      "start": 3610,
                                      "end": 3755
                                    }
                                  ],
                                  "start": 3596,
                                  "end": 3765
                                },
                                "expression": false,
                                "start": 3584,
                                "end": 3765
                              }
                            ],
                            "start": 3528,
                            "end": 3766
                          }
                        ],
                        "optional": false,
                        "start": 3509,
                        "end": 3767
                      },
                      "directive": null,
                      "start": 3509,
                      "end": 3768
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3810,
                            "end": 3820
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3821,
                            "end": 3828
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3810,
                          "end": 3828
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3833,
                              "end": 3841
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check App defaults",
                                "raw": "\"Check App defaults\"",
                                "start": 3842,
                                "end": 3862
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "app",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3902,
                                            "end": 3905
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "App",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3912,
                                                "end": 3915
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "App",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3916,
                                                "end": 3919
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3912,
                                              "end": 3919
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "ArrayExpression",
                                                "elements": [],
                                                "start": 3920,
                                                "end": 3922
                                              }
                                            ],
                                            "start": 3908,
                                            "end": 3923
                                          },
                                          "definite": false,
                                          "start": 3902,
                                          "end": 3923
                                        }
                                      ],
                                      "declare": false,
                                      "start": 3898,
                                      "end": 3924
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "LogicalExpression",
                                          "left": {
                                            "type": "LogicalExpression",
                                            "left": {
                                              "type": "LogicalExpression",
                                              "left": {
                                                "type": "LogicalExpression",
                                                "left": {
                                                  "type": "LogicalExpression",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "object": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "app",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3945,
                                                        "end": 3948
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "fixLines",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3949,
                                                        "end": 3957
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 3945,
                                                      "end": 3957
                                                    },
                                                    "operator": "===",
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": false,
                                                      "raw": "false",
                                                      "start": 3962,
                                                      "end": 3967
                                                    },
                                                    "start": 3945,
                                                    "end": 3967
                                                  },
                                                  "operator": "&&",
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "object": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "app",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3990,
                                                        "end": 3993
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "recurse",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3994,
                                                        "end": 4001
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 3990,
                                                      "end": 4001
                                                    },
                                                    "operator": "===",
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": true,
                                                      "raw": "true",
                                                      "start": 4006,
                                                      "end": 4010
                                                    },
                                                    "start": 3990,
                                                    "end": 4010
                                                  },
                                                  "start": 3945,
                                                  "end": 4010
                                                },
                                                "operator": "&&",
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "app",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 4033,
                                                      "end": 4036
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "lineEndings",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 4037,
                                                      "end": 4048
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 4033,
                                                    "end": 4048
                                                  },
                                                  "operator": "===",
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": "CRLF",
                                                    "raw": "\"CRLF\"",
                                                    "start": 4053,
                                                    "end": 4059
                                                  },
                                                  "start": 4033,
                                                  "end": 4059
                                                },
                                                "start": 3945,
                                                "end": 4059
                                              },
                                              "operator": "&&",
                                              "right": {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "app",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4082,
                                                    "end": 4085
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "matchPattern",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4086,
                                                    "end": 4098
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 4082,
                                                  "end": 4098
                                                },
                                                "operator": "===",
                                                "right": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "undefined",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4103,
                                                  "end": 4112
                                                },
                                                "start": 4082,
                                                "end": 4112
                                              },
                                              "start": 3945,
                                              "end": 4112
                                            },
                                            "operator": "&&",
                                            "right": {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "app",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4135,
                                                  "end": 4138
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "rootDirectory",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4139,
                                                  "end": 4152
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 4135,
                                                "end": 4152
                                              },
                                              "operator": "===",
                                              "right": {
                                                "type": "Literal",
                                                "value": ".\\",
                                                "raw": "\".\\\\\"",
                                                "start": 4157,
                                                "end": 4162
                                              },
                                              "start": 4135,
                                              "end": 4162
                                            },
                                            "start": 3945,
                                            "end": 4162
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "app",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4185,
                                                  "end": 4188
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "encodings",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4189,
                                                  "end": 4198
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 4185,
                                                "end": 4198
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0",
                                                "start": 4199,
                                                "end": 4200
                                              },
                                              "optional": false,
                                              "computed": true,
                                              "start": 4185,
                                              "end": 4201
                                            },
                                            "operator": "===",
                                            "right": {
                                              "type": "Literal",
                                              "value": "ascii",
                                              "raw": "\"ascii\"",
                                              "start": 4206,
                                              "end": 4213
                                            },
                                            "start": 4185,
                                            "end": 4213
                                          },
                                          "start": 3945,
                                          "end": 4213
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "app",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4236,
                                                "end": 4239
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "encodings",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4240,
                                                "end": 4249
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 4236,
                                              "end": 4249
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1",
                                              "start": 4250,
                                              "end": 4251
                                            },
                                            "optional": false,
                                            "computed": true,
                                            "start": 4236,
                                            "end": 4252
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf8nobom",
                                            "raw": "\"utf8nobom\"",
                                            "start": 4257,
                                            "end": 4268
                                          },
                                          "start": 4236,
                                          "end": 4268
                                        },
                                        "start": 3945,
                                        "end": 4268
                                      },
                                      "start": 3937,
                                      "end": 4270
                                    }
                                  ],
                                  "start": 3884,
                                  "end": 4280
                                },
                                "expression": false,
                                "start": 3872,
                                "end": 4280
                              }
                            ],
                            "start": 3829,
                            "end": 4281
                          }
                        ],
                        "optional": false,
                        "start": 3810,
                        "end": 4282
                      },
                      "directive": null,
                      "start": 3810,
                      "end": 4283
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4288,
                            "end": 4298
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4299,
                            "end": 4306
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4288,
                          "end": 4306
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4311,
                              "end": 4319
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check App params",
                                "raw": "\"Check App params\"",
                                "start": 4320,
                                "end": 4338
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "app",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4378,
                                            "end": 4381
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "App",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4388,
                                                "end": 4391
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "App",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4392,
                                                "end": 4395
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 4388,
                                              "end": 4395
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "ArrayExpression",
                                                "elements": [
                                                  {
                                                    "type": "Literal",
                                                    "value": "-dir=C:\\test dir",
                                                    "raw": "\"-dir=C:\\\\test dir\"",
                                                    "start": 4397,
                                                    "end": 4416
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "value": "-lineEndings=LF",
                                                    "raw": "\"-lineEndings=LF\"",
                                                    "start": 4418,
                                                    "end": 4435
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "value": "-encodings=utf16be,ascii",
                                                    "raw": "\"-encodings=utf16be,ascii\"",
                                                    "start": 4437,
                                                    "end": 4463
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "value": "-recurse=false",
                                                    "raw": "\"-recurse=false\"",
                                                    "start": 4465,
                                                    "end": 4481
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "value": "-fixlines",
                                                    "raw": "\"-fixlines\"",
                                                    "start": 4483,
                                                    "end": 4494
                                                  }
                                                ],
                                                "start": 4396,
                                                "end": 4495
                                              }
                                            ],
                                            "start": 4384,
                                            "end": 4496
                                          },
                                          "definite": false,
                                          "start": 4378,
                                          "end": 4496
                                        }
                                      ],
                                      "declare": false,
                                      "start": 4374,
                                      "end": 4497
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "LogicalExpression",
                                          "left": {
                                            "type": "LogicalExpression",
                                            "left": {
                                              "type": "LogicalExpression",
                                              "left": {
                                                "type": "LogicalExpression",
                                                "left": {
                                                  "type": "LogicalExpression",
                                                  "left": {
                                                    "type": "LogicalExpression",
                                                    "left": {
                                                      "type": "BinaryExpression",
                                                      "left": {
                                                        "type": "MemberExpression",
                                                        "object": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "app",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 4518,
                                                          "end": 4521
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "fixLines",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 4522,
                                                          "end": 4530
                                                        },
                                                        "optional": false,
                                                        "computed": false,
                                                        "start": 4518,
                                                        "end": 4530
                                                      },
                                                      "operator": "===",
                                                      "right": {
                                                        "type": "Literal",
                                                        "value": true,
                                                        "raw": "true",
                                                        "start": 4535,
                                                        "end": 4539
                                                      },
                                                      "start": 4518,
                                                      "end": 4539
                                                    },
                                                    "operator": "&&",
                                                    "right": {
                                                      "type": "BinaryExpression",
                                                      "left": {
                                                        "type": "MemberExpression",
                                                        "object": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "app",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 4562,
                                                          "end": 4565
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "lineEndings",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 4566,
                                                          "end": 4577
                                                        },
                                                        "optional": false,
                                                        "computed": false,
                                                        "start": 4562,
                                                        "end": 4577
                                                      },
                                                      "operator": "===",
                                                      "right": {
                                                        "type": "Literal",
                                                        "value": "LF",
                                                        "raw": "\"LF\"",
                                                        "start": 4582,
                                                        "end": 4586
                                                      },
                                                      "start": 4562,
                                                      "end": 4586
                                                    },
                                                    "start": 4518,
                                                    "end": 4586
                                                  },
                                                  "operator": "&&",
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "object": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "app",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 4609,
                                                        "end": 4612
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "recurse",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 4613,
                                                        "end": 4620
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 4609,
                                                      "end": 4620
                                                    },
                                                    "operator": "===",
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": false,
                                                      "raw": "false",
                                                      "start": 4625,
                                                      "end": 4630
                                                    },
                                                    "start": 4609,
                                                    "end": 4630
                                                  },
                                                  "start": 4518,
                                                  "end": 4630
                                                },
                                                "operator": "&&",
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "app",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 4653,
                                                      "end": 4656
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "matchPattern",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 4657,
                                                      "end": 4669
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 4653,
                                                    "end": 4669
                                                  },
                                                  "operator": "===",
                                                  "right": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "undefined",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4674,
                                                    "end": 4683
                                                  },
                                                  "start": 4653,
                                                  "end": 4683
                                                },
                                                "start": 4518,
                                                "end": 4683
                                              },
                                              "operator": "&&",
                                              "right": {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "app",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4706,
                                                    "end": 4709
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "rootDirectory",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4710,
                                                    "end": 4723
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 4706,
                                                  "end": 4723
                                                },
                                                "operator": "===",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "C:\\test dir",
                                                  "raw": "\"C:\\\\test dir\"",
                                                  "start": 4728,
                                                  "end": 4742
                                                },
                                                "start": 4706,
                                                "end": 4742
                                              },
                                              "start": 4518,
                                              "end": 4742
                                            },
                                            "operator": "&&",
                                            "right": {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "app",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4765,
                                                    "end": 4768
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "encodings",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4769,
                                                    "end": 4778
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 4765,
                                                  "end": 4778
                                                },
                                                "property": {
                                                  "type": "Literal",
                                                  "value": 0,
                                                  "raw": "0",
                                                  "start": 4779,
                                                  "end": 4780
                                                },
                                                "optional": false,
                                                "computed": true,
                                                "start": 4765,
                                                "end": 4781
                                              },
                                              "operator": "===",
                                              "right": {
                                                "type": "Literal",
                                                "value": "utf16be",
                                                "raw": "\"utf16be\"",
                                                "start": 4786,
                                                "end": 4795
                                              },
                                              "start": 4765,
                                              "end": 4795
                                            },
                                            "start": 4518,
                                            "end": 4795
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "app",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4818,
                                                  "end": 4821
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "encodings",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4822,
                                                  "end": 4831
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 4818,
                                                "end": 4831
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 4832,
                                                "end": 4833
                                              },
                                              "optional": false,
                                              "computed": true,
                                              "start": 4818,
                                              "end": 4834
                                            },
                                            "operator": "===",
                                            "right": {
                                              "type": "Literal",
                                              "value": "ascii",
                                              "raw": "\"ascii\"",
                                              "start": 4839,
                                              "end": 4846
                                            },
                                            "start": 4818,
                                            "end": 4846
                                          },
                                          "start": 4518,
                                          "end": 4846
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "app",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4869,
                                                "end": 4872
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "encodings",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4873,
                                                "end": 4882
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 4869,
                                              "end": 4882
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "length",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 4883,
                                              "end": 4889
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 4869,
                                            "end": 4889
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2",
                                            "start": 4894,
                                            "end": 4895
                                          },
                                          "start": 4869,
                                          "end": 4895
                                        },
                                        "start": 4518,
                                        "end": 4895
                                      },
                                      "start": 4510,
                                      "end": 4897
                                    }
                                  ],
                                  "start": 4360,
                                  "end": 4907
                                },
                                "expression": false,
                                "start": 4348,
                                "end": 4907
                              }
                            ],
                            "start": 4307,
                            "end": 4908
                          }
                        ],
                        "optional": false,
                        "start": 4288,
                        "end": 4909
                      },
                      "directive": null,
                      "start": 4288,
                      "end": 4910
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4948,
                            "end": 4958
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4959,
                            "end": 4966
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4948,
                          "end": 4966
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4971,
                              "end": 4979
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check encoding detection no BOM",
                                "raw": "\"Check encoding detection no BOM\"",
                                "start": 4980,
                                "end": 5013
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5053,
                                            "end": 5055
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5062,
                                                "end": 5073
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5074,
                                                "end": 5084
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 5062,
                                              "end": 5084
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 5085,
                                                  "end": 5096
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\noBOM.txt",
                                                  "raw": "\"\\\\noBOM.txt\"",
                                                  "start": 5099,
                                                  "end": 5112
                                                },
                                                "start": 5085,
                                                "end": 5112
                                              }
                                            ],
                                            "start": 5058,
                                            "end": 5113
                                          },
                                          "definite": false,
                                          "start": 5053,
                                          "end": 5113
                                        }
                                      ],
                                      "declare": false,
                                      "start": 5049,
                                      "end": 5114
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5134,
                                              "end": 5136
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5137,
                                              "end": 5140
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5134,
                                            "end": 5140
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "none",
                                            "raw": "'none'",
                                            "start": 5145,
                                            "end": 5151
                                          },
                                          "start": 5134,
                                          "end": 5151
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5155,
                                              "end": 5157
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5158,
                                              "end": 5166
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5155,
                                            "end": 5166
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf8",
                                            "raw": "'utf8'",
                                            "start": 5171,
                                            "end": 5177
                                          },
                                          "start": 5155,
                                          "end": 5177
                                        },
                                        "start": 5134,
                                        "end": 5177
                                      },
                                      "start": 5127,
                                      "end": 5178
                                    }
                                  ],
                                  "start": 5035,
                                  "end": 5188
                                },
                                "expression": false,
                                "start": 5023,
                                "end": 5188
                              }
                            ],
                            "start": 4967,
                            "end": 5189
                          }
                        ],
                        "optional": false,
                        "start": 4948,
                        "end": 5190
                      },
                      "directive": null,
                      "start": 4948,
                      "end": 5191
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5196,
                            "end": 5206
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5207,
                            "end": 5214
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5196,
                          "end": 5214
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5219,
                              "end": 5227
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check encoding detection UTF8 BOM",
                                "raw": "\"Check encoding detection UTF8 BOM\"",
                                "start": 5228,
                                "end": 5263
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5303,
                                            "end": 5305
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5312,
                                                "end": 5323
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5324,
                                                "end": 5334
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 5312,
                                              "end": 5334
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 5335,
                                                  "end": 5346
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\"",
                                                  "start": 5349,
                                                  "end": 5364
                                                },
                                                "start": 5335,
                                                "end": 5364
                                              }
                                            ],
                                            "start": 5308,
                                            "end": 5365
                                          },
                                          "definite": false,
                                          "start": 5303,
                                          "end": 5365
                                        }
                                      ],
                                      "declare": false,
                                      "start": 5299,
                                      "end": 5366
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5386,
                                              "end": 5388
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5389,
                                              "end": 5392
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5386,
                                            "end": 5392
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf8",
                                            "raw": "'utf8'",
                                            "start": 5397,
                                            "end": 5403
                                          },
                                          "start": 5386,
                                          "end": 5403
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5407,
                                              "end": 5409
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5410,
                                              "end": 5418
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5407,
                                            "end": 5418
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf8",
                                            "raw": "'utf8'",
                                            "start": 5423,
                                            "end": 5429
                                          },
                                          "start": 5407,
                                          "end": 5429
                                        },
                                        "start": 5386,
                                        "end": 5429
                                      },
                                      "start": 5379,
                                      "end": 5430
                                    }
                                  ],
                                  "start": 5285,
                                  "end": 5440
                                },
                                "expression": false,
                                "start": 5273,
                                "end": 5440
                              }
                            ],
                            "start": 5215,
                            "end": 5441
                          }
                        ],
                        "optional": false,
                        "start": 5196,
                        "end": 5442
                      },
                      "directive": null,
                      "start": 5196,
                      "end": 5443
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5448,
                            "end": 5458
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5459,
                            "end": 5466
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5448,
                          "end": 5466
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5471,
                              "end": 5479
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check encoding detection UTF16be BOM",
                                "raw": "\"Check encoding detection UTF16be BOM\"",
                                "start": 5480,
                                "end": 5518
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5558,
                                            "end": 5560
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5567,
                                                "end": 5578
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5579,
                                                "end": 5589
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 5567,
                                              "end": 5589
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 5590,
                                                  "end": 5601
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF16BE.txt",
                                                  "raw": "\"\\\\UTF16BE.txt\"",
                                                  "start": 5604,
                                                  "end": 5619
                                                },
                                                "start": 5590,
                                                "end": 5619
                                              }
                                            ],
                                            "start": 5563,
                                            "end": 5620
                                          },
                                          "definite": false,
                                          "start": 5558,
                                          "end": 5620
                                        }
                                      ],
                                      "declare": false,
                                      "start": 5554,
                                      "end": 5621
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5641,
                                              "end": 5643
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5644,
                                              "end": 5647
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5641,
                                            "end": 5647
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf16be",
                                            "raw": "'utf16be'",
                                            "start": 5652,
                                            "end": 5661
                                          },
                                          "start": 5641,
                                          "end": 5661
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5665,
                                              "end": 5667
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5668,
                                              "end": 5676
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5665,
                                            "end": 5676
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf16be",
                                            "raw": "'utf16be'",
                                            "start": 5681,
                                            "end": 5690
                                          },
                                          "start": 5665,
                                          "end": 5690
                                        },
                                        "start": 5641,
                                        "end": 5690
                                      },
                                      "start": 5634,
                                      "end": 5691
                                    }
                                  ],
                                  "start": 5540,
                                  "end": 5701
                                },
                                "expression": false,
                                "start": 5528,
                                "end": 5701
                              }
                            ],
                            "start": 5467,
                            "end": 5702
                          }
                        ],
                        "optional": false,
                        "start": 5448,
                        "end": 5703
                      },
                      "directive": null,
                      "start": 5448,
                      "end": 5704
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5709,
                            "end": 5719
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5720,
                            "end": 5727
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5709,
                          "end": 5727
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5732,
                              "end": 5740
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check encoding detection UTF16le BOM",
                                "raw": "\"Check encoding detection UTF16le BOM\"",
                                "start": 5741,
                                "end": 5779
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5819,
                                            "end": 5821
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5828,
                                                "end": 5839
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5840,
                                                "end": 5850
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 5828,
                                              "end": 5850
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 5851,
                                                  "end": 5862
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF16LE.txt",
                                                  "raw": "\"\\\\UTF16LE.txt\"",
                                                  "start": 5865,
                                                  "end": 5880
                                                },
                                                "start": 5851,
                                                "end": 5880
                                              }
                                            ],
                                            "start": 5824,
                                            "end": 5881
                                          },
                                          "definite": false,
                                          "start": 5819,
                                          "end": 5881
                                        }
                                      ],
                                      "declare": false,
                                      "start": 5815,
                                      "end": 5882
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5902,
                                              "end": 5904
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5905,
                                              "end": 5908
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5902,
                                            "end": 5908
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf16le",
                                            "raw": "'utf16le'",
                                            "start": 5913,
                                            "end": 5922
                                          },
                                          "start": 5902,
                                          "end": 5922
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5926,
                                              "end": 5928
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5929,
                                              "end": 5937
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5926,
                                            "end": 5937
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf16le",
                                            "raw": "'utf16le'",
                                            "start": 5942,
                                            "end": 5951
                                          },
                                          "start": 5926,
                                          "end": 5951
                                        },
                                        "start": 5902,
                                        "end": 5951
                                      },
                                      "start": 5895,
                                      "end": 5952
                                    }
                                  ],
                                  "start": 5801,
                                  "end": 5962
                                },
                                "expression": false,
                                "start": 5789,
                                "end": 5962
                              }
                            ],
                            "start": 5728,
                            "end": 5963
                          }
                        ],
                        "optional": false,
                        "start": 5709,
                        "end": 5964
                      },
                      "directive": null,
                      "start": 5709,
                      "end": 5965
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5970,
                            "end": 5980
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5981,
                            "end": 5988
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5970,
                          "end": 5988
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5993,
                              "end": 6001
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check encoding on 1 bytes file",
                                "raw": "\"Check encoding on 1 bytes file\"",
                                "start": 6002,
                                "end": 6034
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6074,
                                            "end": 6076
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 6083,
                                                "end": 6094
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 6095,
                                                "end": 6105
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 6083,
                                              "end": 6105
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 6106,
                                                  "end": 6117
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\1bytefile.txt",
                                                  "raw": "\"\\\\1bytefile.txt\"",
                                                  "start": 6120,
                                                  "end": 6137
                                                },
                                                "start": 6106,
                                                "end": 6137
                                              }
                                            ],
                                            "start": 6079,
                                            "end": 6138
                                          },
                                          "definite": false,
                                          "start": 6074,
                                          "end": 6138
                                        }
                                      ],
                                      "declare": false,
                                      "start": 6070,
                                      "end": 6139
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6159,
                                              "end": 6161
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6162,
                                              "end": 6165
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 6159,
                                            "end": 6165
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "none",
                                            "raw": "'none'",
                                            "start": 6170,
                                            "end": 6176
                                          },
                                          "start": 6159,
                                          "end": 6176
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6180,
                                              "end": 6182
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6183,
                                              "end": 6191
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 6180,
                                            "end": 6191
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf8",
                                            "raw": "'utf8'",
                                            "start": 6196,
                                            "end": 6202
                                          },
                                          "start": 6180,
                                          "end": 6202
                                        },
                                        "start": 6159,
                                        "end": 6202
                                      },
                                      "start": 6152,
                                      "end": 6203
                                    }
                                  ],
                                  "start": 6056,
                                  "end": 6213
                                },
                                "expression": false,
                                "start": 6044,
                                "end": 6213
                              }
                            ],
                            "start": 5989,
                            "end": 6214
                          }
                        ],
                        "optional": false,
                        "start": 5970,
                        "end": 6215
                      },
                      "directive": null,
                      "start": 5970,
                      "end": 6216
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6221,
                            "end": 6231
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6232,
                            "end": 6239
                          },
                          "optional": false,
                          "computed": false,
                          "start": 6221,
                          "end": 6239
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6244,
                              "end": 6252
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check encoding on 0 bytes file",
                                "raw": "\"Check encoding on 0 bytes file\"",
                                "start": 6253,
                                "end": 6285
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6325,
                                            "end": 6327
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 6334,
                                                "end": 6345
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 6346,
                                                "end": 6356
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 6334,
                                              "end": 6356
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 6357,
                                                  "end": 6368
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\0bytefile.txt",
                                                  "raw": "\"\\\\0bytefile.txt\"",
                                                  "start": 6371,
                                                  "end": 6388
                                                },
                                                "start": 6357,
                                                "end": 6388
                                              }
                                            ],
                                            "start": 6330,
                                            "end": 6389
                                          },
                                          "definite": false,
                                          "start": 6325,
                                          "end": 6389
                                        }
                                      ],
                                      "declare": false,
                                      "start": 6321,
                                      "end": 6390
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6410,
                                              "end": 6412
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6413,
                                              "end": 6416
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 6410,
                                            "end": 6416
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "none",
                                            "raw": "'none'",
                                            "start": 6421,
                                            "end": 6427
                                          },
                                          "start": 6410,
                                          "end": 6427
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6431,
                                              "end": 6433
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6434,
                                              "end": 6442
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 6431,
                                            "end": 6442
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf8",
                                            "raw": "'utf8'",
                                            "start": 6447,
                                            "end": 6453
                                          },
                                          "start": 6431,
                                          "end": 6453
                                        },
                                        "start": 6410,
                                        "end": 6453
                                      },
                                      "start": 6403,
                                      "end": 6454
                                    }
                                  ],
                                  "start": 6307,
                                  "end": 6464
                                },
                                "expression": false,
                                "start": 6295,
                                "end": 6464
                              }
                            ],
                            "start": 6240,
                            "end": 6465
                          }
                        ],
                        "optional": false,
                        "start": 6221,
                        "end": 6466
                      },
                      "directive": null,
                      "start": 6221,
                      "end": 6467
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6500,
                            "end": 6510
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6511,
                            "end": 6518
                          },
                          "optional": false,
                          "computed": false,
                          "start": 6500,
                          "end": 6518
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6523,
                              "end": 6531
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check byte reader",
                                "raw": "\"Check byte reader\"",
                                "start": 6532,
                                "end": 6551
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6591,
                                            "end": 6593
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 6600,
                                                "end": 6611
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 6612,
                                                "end": 6622
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 6600,
                                              "end": 6622
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 6623,
                                                  "end": 6634
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\"",
                                                  "start": 6637,
                                                  "end": 6652
                                                },
                                                "start": 6623,
                                                "end": 6652
                                              }
                                            ],
                                            "start": 6596,
                                            "end": 6653
                                          },
                                          "definite": false,
                                          "start": 6591,
                                          "end": 6653
                                        }
                                      ],
                                      "declare": false,
                                      "start": 6587,
                                      "end": 6654
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
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6671,
                                            "end": 6676
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [],
                                            "start": 6679,
                                            "end": 6681
                                          },
                                          "definite": false,
                                          "start": 6671,
                                          "end": 6681
                                        }
                                      ],
                                      "declare": false,
                                      "start": 6667,
                                      "end": 6682
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
                                              "start": 6704,
                                              "end": 6705
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0",
                                              "start": 6708,
                                              "end": 6709
                                            },
                                            "definite": false,
                                            "start": 6704,
                                            "end": 6709
                                          }
                                        ],
                                        "declare": false,
                                        "start": 6700,
                                        "end": 6709
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 6711,
                                          "end": 6712
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "value": 11,
                                          "raw": "11",
                                          "start": 6715,
                                          "end": 6717
                                        },
                                        "start": 6711,
                                        "end": 6717
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 6719,
                                          "end": 6720
                                        },
                                        "start": 6719,
                                        "end": 6722
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
                                                  "name": "chars",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 6742,
                                                  "end": 6747
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 6748,
                                                  "end": 6752
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 6742,
                                                "end": 6752
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 6753,
                                                      "end": 6755
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "readByte",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 6756,
                                                      "end": 6764
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 6753,
                                                    "end": 6764
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false,
                                                  "start": 6753,
                                                  "end": 6766
                                                }
                                              ],
                                              "optional": false,
                                              "start": 6742,
                                              "end": 6767
                                            },
                                            "directive": null,
                                            "start": 6742,
                                            "end": 6768
                                          }
                                        ],
                                        "start": 6724,
                                        "end": 6782
                                      },
                                      "start": 6695,
                                      "end": 6782
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6802,
                                            "end": 6812
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6813,
                                            "end": 6825
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 6802,
                                          "end": 6825
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6826,
                                            "end": 6831
                                          },
                                          {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 6834,
                                                "end": 6838
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 195,
                                                "raw": "0xC3",
                                                "start": 6840,
                                                "end": 6844
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 168,
                                                "raw": "0xA8",
                                                "start": 6846,
                                                "end": 6850
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 225,
                                                "raw": "0xE1",
                                                "start": 6852,
                                                "end": 6856
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 180,
                                                "raw": "0xB4",
                                                "start": 6858,
                                                "end": 6862
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 163,
                                                "raw": "0xA3",
                                                "start": 6864,
                                                "end": 6868
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 226,
                                                "raw": "0xE2",
                                                "start": 6870,
                                                "end": 6874
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 128,
                                                "raw": "0x80",
                                                "start": 6876,
                                                "end": 6880
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 160,
                                                "raw": "0xA0",
                                                "start": 6882,
                                                "end": 6886
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 13,
                                                "raw": "0x0D",
                                                "start": 6888,
                                                "end": 6892
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 10,
                                                "raw": "0x0A",
                                                "start": 6894,
                                                "end": 6898
                                              }
                                            ],
                                            "start": 6833,
                                            "end": 6899
                                          }
                                        ],
                                        "optional": false,
                                        "start": 6802,
                                        "end": 6900
                                      },
                                      "start": 6795,
                                      "end": 6901
                                    }
                                  ],
                                  "start": 6573,
                                  "end": 6911
                                },
                                "expression": false,
                                "start": 6561,
                                "end": 6911
                              }
                            ],
                            "start": 6519,
                            "end": 6912
                          }
                        ],
                        "optional": false,
                        "start": 6500,
                        "end": 6913
                      },
                      "directive": null,
                      "start": 6500,
                      "end": 6914
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6921,
                            "end": 6931
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6932,
                            "end": 6939
                          },
                          "optional": false,
                          "computed": false,
                          "start": 6921,
                          "end": 6939
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6944,
                              "end": 6952
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check UTF8 decoding",
                                "raw": "\"Check UTF8 decoding\"",
                                "start": 6953,
                                "end": 6974
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7014,
                                            "end": 7016
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 7023,
                                                "end": 7034
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 7035,
                                                "end": 7045
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 7023,
                                              "end": 7045
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7046,
                                                  "end": 7057
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\"",
                                                  "start": 7060,
                                                  "end": 7075
                                                },
                                                "start": 7046,
                                                "end": 7075
                                              }
                                            ],
                                            "start": 7019,
                                            "end": 7076
                                          },
                                          "definite": false,
                                          "start": 7014,
                                          "end": 7076
                                        }
                                      ],
                                      "declare": false,
                                      "start": 7010,
                                      "end": 7077
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
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7094,
                                            "end": 7099
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [],
                                            "start": 7102,
                                            "end": 7104
                                          },
                                          "definite": false,
                                          "start": 7094,
                                          "end": 7104
                                        }
                                      ],
                                      "declare": false,
                                      "start": 7090,
                                      "end": 7105
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
                                              "start": 7127,
                                              "end": 7128
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0",
                                              "start": 7131,
                                              "end": 7132
                                            },
                                            "definite": false,
                                            "start": 7127,
                                            "end": 7132
                                          }
                                        ],
                                        "declare": false,
                                        "start": 7123,
                                        "end": 7132
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 7134,
                                          "end": 7135
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "value": 6,
                                          "raw": "6",
                                          "start": 7138,
                                          "end": 7139
                                        },
                                        "start": 7134,
                                        "end": 7139
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 7141,
                                          "end": 7142
                                        },
                                        "start": 7141,
                                        "end": 7144
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
                                                  "name": "chars",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7164,
                                                  "end": 7169
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7170,
                                                  "end": 7174
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 7164,
                                                "end": 7174
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 7175,
                                                      "end": 7177
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "readUtf8CodePoint",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 7178,
                                                      "end": 7195
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 7175,
                                                    "end": 7195
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false,
                                                  "start": 7175,
                                                  "end": 7197
                                                }
                                              ],
                                              "optional": false,
                                              "start": 7164,
                                              "end": 7198
                                            },
                                            "directive": null,
                                            "start": 7164,
                                            "end": 7199
                                          }
                                        ],
                                        "start": 7146,
                                        "end": 7213
                                      },
                                      "start": 7118,
                                      "end": 7213
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7233,
                                            "end": 7243
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7244,
                                            "end": 7256
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7233,
                                          "end": 7256
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7257,
                                            "end": 7262
                                          },
                                          {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x0054",
                                                "start": 7265,
                                                "end": 7271
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 232,
                                                "raw": "0x00E8",
                                                "start": 7273,
                                                "end": 7279
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 7459,
                                                "raw": "0x1D23",
                                                "start": 7281,
                                                "end": 7287
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 8224,
                                                "raw": "0x2020",
                                                "start": 7289,
                                                "end": 7295
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 13,
                                                "raw": "0x000D",
                                                "start": 7297,
                                                "end": 7303
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 10,
                                                "raw": "0x000A",
                                                "start": 7305,
                                                "end": 7311
                                              }
                                            ],
                                            "start": 7264,
                                            "end": 7312
                                          }
                                        ],
                                        "optional": false,
                                        "start": 7233,
                                        "end": 7313
                                      },
                                      "start": 7226,
                                      "end": 7314
                                    }
                                  ],
                                  "start": 6996,
                                  "end": 7324
                                },
                                "expression": false,
                                "start": 6984,
                                "end": 7324
                              }
                            ],
                            "start": 6940,
                            "end": 7325
                          }
                        ],
                        "optional": false,
                        "start": 6921,
                        "end": 7326
                      },
                      "directive": null,
                      "start": 6921,
                      "end": 7327
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7333,
                            "end": 7343
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7344,
                            "end": 7351
                          },
                          "optional": false,
                          "computed": false,
                          "start": 7333,
                          "end": 7351
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7356,
                              "end": 7364
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check UTF8 encoding",
                                "raw": "\"Check UTF8 encoding\"",
                                "start": 7365,
                                "end": 7386
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7426,
                                            "end": 7428
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 7435,
                                                "end": 7446
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 7447,
                                                "end": 7457
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 7435,
                                              "end": 7457
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": 20,
                                                "raw": "20",
                                                "start": 7458,
                                                "end": 7460
                                              }
                                            ],
                                            "start": 7431,
                                            "end": 7461
                                          },
                                          "definite": false,
                                          "start": 7426,
                                          "end": 7461
                                        }
                                      ],
                                      "declare": false,
                                      "start": 7422,
                                      "end": 7462
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7475,
                                            "end": 7477
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "writeUtf8Bom",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7478,
                                            "end": 7490
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7475,
                                          "end": 7490
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 7475,
                                        "end": 7492
                                      },
                                      "directive": null,
                                      "start": 7475,
                                      "end": 7493
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
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7510,
                                            "end": 7515
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x0054",
                                                "start": 7519,
                                                "end": 7525
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 232,
                                                "raw": "0x00E8",
                                                "start": 7527,
                                                "end": 7533
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 7459,
                                                "raw": "0x1D23",
                                                "start": 7535,
                                                "end": 7541
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 8224,
                                                "raw": "0x2020",
                                                "start": 7543,
                                                "end": 7549
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 13,
                                                "raw": "0x000D",
                                                "start": 7551,
                                                "end": 7557
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 10,
                                                "raw": "0x000A",
                                                "start": 7559,
                                                "end": 7565
                                              }
                                            ],
                                            "start": 7518,
                                            "end": 7566
                                          },
                                          "definite": false,
                                          "start": 7510,
                                          "end": 7566
                                        }
                                      ],
                                      "declare": false,
                                      "start": 7506,
                                      "end": 7567
                                    },
                                    {
                                      "type": "ForInStatement",
                                      "left": {
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
                                              "start": 7589,
                                              "end": 7590
                                            },
                                            "init": null,
                                            "definite": false,
                                            "start": 7589,
                                            "end": 7590
                                          }
                                        ],
                                        "declare": false,
                                        "start": 7585,
                                        "end": 7590
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "chars",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 7594,
                                        "end": 7599
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
                                                  "name": "fb",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7619,
                                                  "end": 7621
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "writeUtf8CodePoint",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7622,
                                                  "end": 7640
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 7619,
                                                "end": 7640
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "chars",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 7641,
                                                    "end": 7646
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "i",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 7647,
                                                    "end": 7648
                                                  },
                                                  "optional": false,
                                                  "computed": true,
                                                  "start": 7641,
                                                  "end": 7649
                                                }
                                              ],
                                              "optional": false,
                                              "start": 7619,
                                              "end": 7650
                                            },
                                            "directive": null,
                                            "start": 7619,
                                            "end": 7651
                                          }
                                        ],
                                        "start": 7601,
                                        "end": 7665
                                      },
                                      "start": 7580,
                                      "end": 7665
                                    },
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7678,
                                            "end": 7680
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7681,
                                            "end": 7686
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7678,
                                          "end": 7686
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 7689,
                                          "end": 7690
                                        },
                                        "start": 7678,
                                        "end": 7690
                                      },
                                      "directive": null,
                                      "start": 7678,
                                      "end": 7691
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
                                            "name": "bytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7708,
                                            "end": 7713
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [],
                                            "start": 7716,
                                            "end": 7718
                                          },
                                          "definite": false,
                                          "start": 7708,
                                          "end": 7718
                                        }
                                      ],
                                      "declare": false,
                                      "start": 7704,
                                      "end": 7719
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
                                              "start": 7741,
                                              "end": 7742
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0",
                                              "start": 7745,
                                              "end": 7746
                                            },
                                            "definite": false,
                                            "start": 7741,
                                            "end": 7746
                                          }
                                        ],
                                        "declare": false,
                                        "start": 7737,
                                        "end": 7746
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 7748,
                                          "end": 7749
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "value": 14,
                                          "raw": "14",
                                          "start": 7752,
                                          "end": 7754
                                        },
                                        "start": 7748,
                                        "end": 7754
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 7756,
                                          "end": 7757
                                        },
                                        "start": 7756,
                                        "end": 7759
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
                                                  "name": "bytes",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7779,
                                                  "end": 7784
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7785,
                                                  "end": 7789
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 7779,
                                                "end": 7789
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 7790,
                                                      "end": 7792
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "readByte",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 7793,
                                                      "end": 7801
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 7790,
                                                    "end": 7801
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false,
                                                  "start": 7790,
                                                  "end": 7803
                                                }
                                              ],
                                              "optional": false,
                                              "start": 7779,
                                              "end": 7804
                                            },
                                            "directive": null,
                                            "start": 7779,
                                            "end": 7805
                                          }
                                        ],
                                        "start": 7761,
                                        "end": 7819
                                      },
                                      "start": 7732,
                                      "end": 7819
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
                                            "name": "expected",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7836,
                                            "end": 7844
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 239,
                                                "raw": "0xEF",
                                                "start": 7848,
                                                "end": 7852
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 187,
                                                "raw": "0xBB",
                                                "start": 7854,
                                                "end": 7858
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 191,
                                                "raw": "0xBF",
                                                "start": 7860,
                                                "end": 7864
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 7866,
                                                "end": 7870
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 195,
                                                "raw": "0xC3",
                                                "start": 7872,
                                                "end": 7876
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 168,
                                                "raw": "0xA8",
                                                "start": 7878,
                                                "end": 7882
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 225,
                                                "raw": "0xE1",
                                                "start": 7884,
                                                "end": 7888
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 180,
                                                "raw": "0xB4",
                                                "start": 7890,
                                                "end": 7894
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 163,
                                                "raw": "0xA3",
                                                "start": 7896,
                                                "end": 7900
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 226,
                                                "raw": "0xE2",
                                                "start": 7902,
                                                "end": 7906
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 128,
                                                "raw": "0x80",
                                                "start": 7908,
                                                "end": 7912
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 160,
                                                "raw": "0xA0",
                                                "start": 7914,
                                                "end": 7918
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 13,
                                                "raw": "0x0D",
                                                "start": 7920,
                                                "end": 7924
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 10,
                                                "raw": "0x0A",
                                                "start": 7926,
                                                "end": 7930
                                              }
                                            ],
                                            "start": 7847,
                                            "end": 7931
                                          },
                                          "definite": false,
                                          "start": 7836,
                                          "end": 7931
                                        }
                                      ],
                                      "declare": false,
                                      "start": 7832,
                                      "end": 7932
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7952,
                                            "end": 7962
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7963,
                                            "end": 7975
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7952,
                                          "end": 7975
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "bytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7976,
                                            "end": 7981
                                          },
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "expected",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7983,
                                            "end": 7991
                                          }
                                        ],
                                        "optional": false,
                                        "start": 7952,
                                        "end": 7992
                                      },
                                      "start": 7945,
                                      "end": 7993
                                    }
                                  ],
                                  "start": 7408,
                                  "end": 8003
                                },
                                "expression": false,
                                "start": 7396,
                                "end": 8003
                              }
                            ],
                            "start": 7352,
                            "end": 8004
                          }
                        ],
                        "optional": false,
                        "start": 7333,
                        "end": 8005
                      },
                      "directive": null,
                      "start": 7333,
                      "end": 8006
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8050,
                            "end": 8060
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8061,
                            "end": 8068
                          },
                          "optional": false,
                          "computed": false,
                          "start": 8050,
                          "end": 8068
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8073,
                              "end": 8081
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check saving a file",
                                "raw": "\"Check saving a file\"",
                                "start": 8082,
                                "end": 8103
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8143,
                                            "end": 8151
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8154,
                                              "end": 8165
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\tmpUTF16LE.txt",
                                              "raw": "\"\\\\tmpUTF16LE.txt\"",
                                              "start": 8168,
                                              "end": 8186
                                            },
                                            "start": 8154,
                                            "end": 8186
                                          },
                                          "definite": false,
                                          "start": 8143,
                                          "end": 8186
                                        }
                                      ],
                                      "declare": false,
                                      "start": 8139,
                                      "end": 8187
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8204,
                                            "end": 8206
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8213,
                                                "end": 8224
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8225,
                                                "end": 8235
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 8213,
                                              "end": 8235
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": 14,
                                                "raw": "14",
                                                "start": 8236,
                                                "end": 8238
                                              }
                                            ],
                                            "start": 8209,
                                            "end": 8239
                                          },
                                          "definite": false,
                                          "start": 8204,
                                          "end": 8239
                                        }
                                      ],
                                      "declare": false,
                                      "start": 8200,
                                      "end": 8240
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8253,
                                            "end": 8255
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "writeUtf16leBom",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8256,
                                            "end": 8271
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8253,
                                          "end": 8271
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 8253,
                                        "end": 8273
                                      },
                                      "directive": null,
                                      "start": 8253,
                                      "end": 8274
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
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8291,
                                            "end": 8296
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x0054",
                                                "start": 8300,
                                                "end": 8306
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 232,
                                                "raw": "0x00E8",
                                                "start": 8308,
                                                "end": 8314
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 7459,
                                                "raw": "0x1D23",
                                                "start": 8316,
                                                "end": 8322
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 8224,
                                                "raw": "0x2020",
                                                "start": 8324,
                                                "end": 8330
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 13,
                                                "raw": "0x000D",
                                                "start": 8332,
                                                "end": 8338
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 10,
                                                "raw": "0x000A",
                                                "start": 8340,
                                                "end": 8346
                                              }
                                            ],
                                            "start": 8299,
                                            "end": 8347
                                          },
                                          "definite": false,
                                          "start": 8291,
                                          "end": 8347
                                        }
                                      ],
                                      "declare": false,
                                      "start": 8287,
                                      "end": 8348
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8361,
                                            "end": 8366
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "forEach",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8367,
                                            "end": 8374
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8361,
                                          "end": 8374
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
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
                                                "name": "val",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8385,
                                                "end": 8388
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
                                                        "name": "fb",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 8392,
                                                        "end": 8394
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "writeUtf16CodePoint",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 8395,
                                                        "end": 8414
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 8392,
                                                      "end": 8414
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "val",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 8415,
                                                        "end": 8418
                                                      },
                                                      {
                                                        "type": "Literal",
                                                        "value": false,
                                                        "raw": "false",
                                                        "start": 8420,
                                                        "end": 8425
                                                      }
                                                    ],
                                                    "optional": false,
                                                    "start": 8392,
                                                    "end": 8426
                                                  },
                                                  "directive": null,
                                                  "start": 8392,
                                                  "end": 8427
                                                }
                                              ],
                                              "start": 8390,
                                              "end": 8429
                                            },
                                            "expression": false,
                                            "start": 8375,
                                            "end": 8429
                                          }
                                        ],
                                        "optional": false,
                                        "start": 8361,
                                        "end": 8430
                                      },
                                      "directive": null,
                                      "start": 8361,
                                      "end": 8431
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8444,
                                            "end": 8446
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "save",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8447,
                                            "end": 8451
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8444,
                                          "end": 8451
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8452,
                                            "end": 8460
                                          }
                                        ],
                                        "optional": false,
                                        "start": 8444,
                                        "end": 8461
                                      },
                                      "directive": null,
                                      "start": 8444,
                                      "end": 8462
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
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8480,
                                            "end": 8489
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8496,
                                                "end": 8507
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8508,
                                                "end": 8518
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 8496,
                                              "end": 8518
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8519,
                                                "end": 8527
                                              }
                                            ],
                                            "start": 8492,
                                            "end": 8528
                                          },
                                          "definite": false,
                                          "start": 8480,
                                          "end": 8528
                                        }
                                      ],
                                      "declare": false,
                                      "start": 8476,
                                      "end": 8529
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8546,
                                            "end": 8555
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "encoding",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8556,
                                            "end": 8564
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8546,
                                          "end": 8564
                                        },
                                        "operator": "!==",
                                        "right": {
                                          "type": "Literal",
                                          "value": "utf16le",
                                          "raw": "'utf16le'",
                                          "start": 8569,
                                          "end": 8578
                                        },
                                        "start": 8546,
                                        "end": 8578
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ThrowStatement",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Error",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8604,
                                                "end": 8609
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "Incorrect encoding",
                                                  "raw": "\"Incorrect encoding\"",
                                                  "start": 8610,
                                                  "end": 8630
                                                }
                                              ],
                                              "optional": false,
                                              "start": 8604,
                                              "end": 8631
                                            },
                                            "start": 8598,
                                            "end": 8632
                                          }
                                        ],
                                        "start": 8580,
                                        "end": 8646
                                      },
                                      "alternate": null,
                                      "start": 8542,
                                      "end": 8646
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
                                            "name": "expectedBytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8663,
                                            "end": 8676
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 255,
                                                "raw": "0xFF",
                                                "start": 8680,
                                                "end": 8684
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 254,
                                                "raw": "0xFE",
                                                "start": 8686,
                                                "end": 8690
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 8692,
                                                "end": 8696
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0x00",
                                                "start": 8698,
                                                "end": 8702
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 232,
                                                "raw": "0xE8",
                                                "start": 8704,
                                                "end": 8708
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0x00",
                                                "start": 8710,
                                                "end": 8714
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 35,
                                                "raw": "0x23",
                                                "start": 8716,
                                                "end": 8720
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 29,
                                                "raw": "0x1D",
                                                "start": 8722,
                                                "end": 8726
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 32,
                                                "raw": "0x20",
                                                "start": 8728,
                                                "end": 8732
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 32,
                                                "raw": "0x20",
                                                "start": 8734,
                                                "end": 8738
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 13,
                                                "raw": "0x0D",
                                                "start": 8740,
                                                "end": 8744
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0x00",
                                                "start": 8746,
                                                "end": 8750
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 10,
                                                "raw": "0x0A",
                                                "start": 8752,
                                                "end": 8756
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0x00",
                                                "start": 8758,
                                                "end": 8762
                                              }
                                            ],
                                            "start": 8679,
                                            "end": 8763
                                          },
                                          "definite": false,
                                          "start": 8663,
                                          "end": 8763
                                        }
                                      ],
                                      "declare": false,
                                      "start": 8659,
                                      "end": 8763
                                    },
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
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8776,
                                            "end": 8785
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8786,
                                            "end": 8791
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8776,
                                          "end": 8791
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 8794,
                                          "end": 8795
                                        },
                                        "start": 8776,
                                        "end": 8795
                                      },
                                      "directive": null,
                                      "start": 8776,
                                      "end": 8796
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "expectedBytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8809,
                                            "end": 8822
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "forEach",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8823,
                                            "end": 8830
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8809,
                                          "end": 8830
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
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
                                                "name": "val",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8841,
                                                "end": 8844
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "BlockStatement",
                                              "body": [
                                                {
                                                  "type": "VariableDeclaration",
                                                  "kind": "var",
                                                  "declarations": [
                                                    {
                                                      "type": "VariableDeclarator",
                                                      "id": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "byteVal",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 8868,
                                                        "end": 8875
                                                      },
                                                      "init": {
                                                        "type": "CallExpression",
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "object": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "savedFile",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 8878,
                                                            "end": 8887
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "readByte",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 8888,
                                                            "end": 8896
                                                          },
                                                          "optional": false,
                                                          "computed": false,
                                                          "start": 8878,
                                                          "end": 8896
                                                        },
                                                        "typeArguments": null,
                                                        "arguments": [],
                                                        "optional": false,
                                                        "start": 8878,
                                                        "end": 8898
                                                      },
                                                      "definite": false,
                                                      "start": 8868,
                                                      "end": 8898
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 8864,
                                                  "end": 8899
                                                },
                                                {
                                                  "type": "IfStatement",
                                                  "test": {
                                                    "type": "BinaryExpression",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "byteVal",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 8920,
                                                      "end": 8927
                                                    },
                                                    "operator": "!==",
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "val",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 8932,
                                                      "end": 8935
                                                    },
                                                    "start": 8920,
                                                    "end": 8935
                                                  },
                                                  "consequent": {
                                                    "type": "BlockStatement",
                                                    "body": [
                                                      {
                                                        "type": "ThrowStatement",
                                                        "argument": {
                                                          "type": "CallExpression",
                                                          "callee": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "Error",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 8965,
                                                            "end": 8970
                                                          },
                                                          "typeArguments": null,
                                                          "arguments": [
                                                            {
                                                              "type": "Literal",
                                                              "value": "Incorrect byte value",
                                                              "raw": "\"Incorrect byte value\"",
                                                              "start": 8971,
                                                              "end": 8993
                                                            }
                                                          ],
                                                          "optional": false,
                                                          "start": 8965,
                                                          "end": 8994
                                                        },
                                                        "start": 8959,
                                                        "end": 8995
                                                      }
                                                    ],
                                                    "start": 8937,
                                                    "end": 9013
                                                  },
                                                  "alternate": null,
                                                  "start": 8916,
                                                  "end": 9013
                                                }
                                              ],
                                              "start": 8846,
                                              "end": 9027
                                            },
                                            "expression": false,
                                            "start": 8831,
                                            "end": 9027
                                          }
                                        ],
                                        "optional": false,
                                        "start": 8809,
                                        "end": 9028
                                      },
                                      "directive": null,
                                      "start": 8809,
                                      "end": 9029
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 9049,
                                        "end": 9053
                                      },
                                      "start": 9042,
                                      "end": 9054
                                    }
                                  ],
                                  "start": 8125,
                                  "end": 9064
                                },
                                "expression": false,
                                "start": 8113,
                                "end": 9064
                              }
                            ],
                            "start": 8069,
                            "end": 9065
                          }
                        ],
                        "optional": false,
                        "start": 8050,
                        "end": 9066
                      },
                      "directive": null,
                      "start": 8050,
                      "end": 9067
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9073,
                            "end": 9083
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9084,
                            "end": 9091
                          },
                          "optional": false,
                          "computed": false,
                          "start": 9073,
                          "end": 9091
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9096,
                              "end": 9104
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check reading past buffer asserts",
                                "raw": "\"Check reading past buffer asserts\"",
                                "start": 9105,
                                "end": 9140
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9172,
                                            "end": 9174
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9181,
                                                "end": 9192
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9193,
                                                "end": 9203
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 9181,
                                              "end": 9203
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 9204,
                                                  "end": 9215
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\"",
                                                  "start": 9218,
                                                  "end": 9233
                                                },
                                                "start": 9204,
                                                "end": 9233
                                              }
                                            ],
                                            "start": 9177,
                                            "end": 9234
                                          },
                                          "definite": false,
                                          "start": 9172,
                                          "end": 9234
                                        }
                                      ],
                                      "declare": false,
                                      "start": 9168,
                                      "end": 9235
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
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9248,
                                            "end": 9254
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "fb",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9257,
                                                "end": 9259
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "readByte",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9260,
                                                "end": 9268
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 9257,
                                              "end": 9268
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": 200,
                                                "raw": "200",
                                                "start": 9269,
                                                "end": 9272
                                              }
                                            ],
                                            "optional": false,
                                            "start": 9257,
                                            "end": 9273
                                          },
                                          "definite": false,
                                          "start": 9248,
                                          "end": 9273
                                        }
                                      ],
                                      "declare": false,
                                      "start": 9244,
                                      "end": 9274
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 9290,
                                        "end": 9294
                                      },
                                      "start": 9283,
                                      "end": 9295
                                    }
                                  ],
                                  "start": 9158,
                                  "end": 9301
                                },
                                "expression": false,
                                "start": 9146,
                                "end": 9301
                              },
                              {
                                "type": "Literal",
                                "value": "read beyond buffer length",
                                "raw": "\"read beyond buffer length\"",
                                "start": 9303,
                                "end": 9330
                              }
                            ],
                            "start": 9092,
                            "end": 9331
                          }
                        ],
                        "optional": false,
                        "start": 9073,
                        "end": 9332
                      },
                      "directive": null,
                      "start": 9073,
                      "end": 9333
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9338,
                            "end": 9348
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9349,
                            "end": 9356
                          },
                          "optional": false,
                          "computed": false,
                          "start": 9338,
                          "end": 9356
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9361,
                              "end": 9369
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check writing past buffer asserts",
                                "raw": "\"Check writing past buffer asserts\"",
                                "start": 9370,
                                "end": 9405
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9437,
                                            "end": 9439
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9446,
                                                "end": 9457
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9458,
                                                "end": 9468
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 9446,
                                              "end": 9468
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 9469,
                                                  "end": 9480
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\"",
                                                  "start": 9483,
                                                  "end": 9498
                                                },
                                                "start": 9469,
                                                "end": 9498
                                              }
                                            ],
                                            "start": 9442,
                                            "end": 9499
                                          },
                                          "definite": false,
                                          "start": 9437,
                                          "end": 9499
                                        }
                                      ],
                                      "declare": false,
                                      "start": 9433,
                                      "end": 9500
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9509,
                                            "end": 9511
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "writeByte",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9512,
                                            "end": 9521
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 9509,
                                          "end": 9521
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": 5,
                                            "raw": "5",
                                            "start": 9522,
                                            "end": 9523
                                          },
                                          {
                                            "type": "Literal",
                                            "value": 200,
                                            "raw": "200",
                                            "start": 9525,
                                            "end": 9528
                                          }
                                        ],
                                        "optional": false,
                                        "start": 9509,
                                        "end": 9529
                                      },
                                      "directive": null,
                                      "start": 9509,
                                      "end": 9530
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 9546,
                                        "end": 9550
                                      },
                                      "start": 9539,
                                      "end": 9551
                                    }
                                  ],
                                  "start": 9423,
                                  "end": 9557
                                },
                                "expression": false,
                                "start": 9411,
                                "end": 9557
                              },
                              {
                                "type": "Literal",
                                "value": "write beyond buffer length",
                                "raw": "\"write beyond buffer length\"",
                                "start": 9559,
                                "end": 9587
                              }
                            ],
                            "start": 9357,
                            "end": 9588
                          }
                        ],
                        "optional": false,
                        "start": 9338,
                        "end": 9589
                      },
                      "directive": null,
                      "start": 9338,
                      "end": 9590
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9630,
                            "end": 9640
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9641,
                            "end": 9648
                          },
                          "optional": false,
                          "computed": false,
                          "start": 9630,
                          "end": 9648
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9653,
                              "end": 9661
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Read non-BMP utf16 chars",
                                "raw": "\"Read non-BMP utf16 chars\"",
                                "start": 9662,
                                "end": 9688
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9728,
                                            "end": 9737
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9744,
                                                "end": 9755
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9756,
                                                "end": 9766
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 9744,
                                              "end": 9766
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 9767,
                                                  "end": 9778
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\utf16leNonBmp.txt",
                                                  "raw": "\"\\\\utf16leNonBmp.txt\"",
                                                  "start": 9781,
                                                  "end": 9802
                                                },
                                                "start": 9767,
                                                "end": 9802
                                              }
                                            ],
                                            "start": 9740,
                                            "end": 9803
                                          },
                                          "definite": false,
                                          "start": 9728,
                                          "end": 9803
                                        }
                                      ],
                                      "declare": false,
                                      "start": 9724,
                                      "end": 9804
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9821,
                                            "end": 9830
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "encoding",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9831,
                                            "end": 9839
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 9821,
                                          "end": 9839
                                        },
                                        "operator": "!==",
                                        "right": {
                                          "type": "Literal",
                                          "value": "utf16le",
                                          "raw": "'utf16le'",
                                          "start": 9844,
                                          "end": 9853
                                        },
                                        "start": 9821,
                                        "end": 9853
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ThrowStatement",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Error",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9879,
                                                "end": 9884
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "Incorrect encoding",
                                                  "raw": "\"Incorrect encoding\"",
                                                  "start": 9885,
                                                  "end": 9905
                                                }
                                              ],
                                              "optional": false,
                                              "start": 9879,
                                              "end": 9906
                                            },
                                            "start": 9873,
                                            "end": 9907
                                          }
                                        ],
                                        "start": 9855,
                                        "end": 9921
                                      },
                                      "alternate": null,
                                      "start": 9817,
                                      "end": 9921
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
                                            "name": "codePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9939,
                                            "end": 9949
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [],
                                            "start": 9952,
                                            "end": 9954
                                          },
                                          "definite": false,
                                          "start": 9939,
                                          "end": 9954
                                        }
                                      ],
                                      "declare": false,
                                      "start": 9935,
                                      "end": 9955
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
                                              "start": 9977,
                                              "end": 9978
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0",
                                              "start": 9981,
                                              "end": 9982
                                            },
                                            "definite": false,
                                            "start": 9977,
                                            "end": 9982
                                          }
                                        ],
                                        "declare": false,
                                        "start": 9973,
                                        "end": 9982
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 9984,
                                          "end": 9985
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "value": 6,
                                          "raw": "6",
                                          "start": 9988,
                                          "end": 9989
                                        },
                                        "start": 9984,
                                        "end": 9989
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 9991,
                                          "end": 9992
                                        },
                                        "start": 9991,
                                        "end": 9994
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
                                                  "name": "codePoints",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 10014,
                                                  "end": 10024
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 10025,
                                                  "end": 10029
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 10014,
                                                "end": 10029
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "savedFile",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 10030,
                                                      "end": 10039
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "readUtf16CodePoint",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 10040,
                                                      "end": 10058
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 10030,
                                                    "end": 10058
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": false,
                                                      "raw": "false",
                                                      "start": 10059,
                                                      "end": 10064
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "start": 10030,
                                                  "end": 10065
                                                }
                                              ],
                                              "optional": false,
                                              "start": 10014,
                                              "end": 10066
                                            },
                                            "directive": null,
                                            "start": 10014,
                                            "end": 10067
                                          }
                                        ],
                                        "start": 9996,
                                        "end": 10081
                                      },
                                      "start": 9968,
                                      "end": 10081
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
                                            "name": "expectedCodePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10098,
                                            "end": 10116
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 66688,
                                                "raw": "0x10480",
                                                "start": 10120,
                                                "end": 10127
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 66689,
                                                "raw": "0x10481",
                                                "start": 10129,
                                                "end": 10136
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 66690,
                                                "raw": "0x10482",
                                                "start": 10138,
                                                "end": 10145
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 10147,
                                                "end": 10151
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 104,
                                                "raw": "0x68",
                                                "start": 10153,
                                                "end": 10157
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 105,
                                                "raw": "0x69",
                                                "start": 10159,
                                                "end": 10163
                                              }
                                            ],
                                            "start": 10119,
                                            "end": 10164
                                          },
                                          "definite": false,
                                          "start": 10098,
                                          "end": 10164
                                        }
                                      ],
                                      "declare": false,
                                      "start": 10094,
                                      "end": 10165
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10185,
                                            "end": 10195
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10196,
                                            "end": 10208
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10185,
                                          "end": 10208
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "codePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10209,
                                            "end": 10219
                                          },
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "expectedCodePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10221,
                                            "end": 10239
                                          }
                                        ],
                                        "optional": false,
                                        "start": 10185,
                                        "end": 10240
                                      },
                                      "start": 10178,
                                      "end": 10241
                                    }
                                  ],
                                  "start": 9710,
                                  "end": 10251
                                },
                                "expression": false,
                                "start": 9698,
                                "end": 10251
                              }
                            ],
                            "start": 9649,
                            "end": 10252
                          }
                        ],
                        "optional": false,
                        "start": 9630,
                        "end": 10253
                      },
                      "directive": null,
                      "start": 9630,
                      "end": 10254
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10260,
                            "end": 10270
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10271,
                            "end": 10278
                          },
                          "optional": false,
                          "computed": false,
                          "start": 10260,
                          "end": 10278
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10283,
                              "end": 10291
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Read non-BMP utf8 chars",
                                "raw": "\"Read non-BMP utf8 chars\"",
                                "start": 10292,
                                "end": 10317
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10357,
                                            "end": 10366
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10373,
                                                "end": 10384
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10385,
                                                "end": 10395
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 10373,
                                              "end": 10395
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 10396,
                                                  "end": 10407
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\utf8NonBmp.txt",
                                                  "raw": "\"\\\\utf8NonBmp.txt\"",
                                                  "start": 10410,
                                                  "end": 10428
                                                },
                                                "start": 10396,
                                                "end": 10428
                                              }
                                            ],
                                            "start": 10369,
                                            "end": 10429
                                          },
                                          "definite": false,
                                          "start": 10357,
                                          "end": 10429
                                        }
                                      ],
                                      "declare": false,
                                      "start": 10353,
                                      "end": 10430
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10447,
                                            "end": 10456
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "encoding",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10457,
                                            "end": 10465
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10447,
                                          "end": 10465
                                        },
                                        "operator": "!==",
                                        "right": {
                                          "type": "Literal",
                                          "value": "utf8",
                                          "raw": "'utf8'",
                                          "start": 10470,
                                          "end": 10476
                                        },
                                        "start": 10447,
                                        "end": 10476
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ThrowStatement",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Error",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10502,
                                                "end": 10507
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "Incorrect encoding",
                                                  "raw": "\"Incorrect encoding\"",
                                                  "start": 10508,
                                                  "end": 10528
                                                }
                                              ],
                                              "optional": false,
                                              "start": 10502,
                                              "end": 10529
                                            },
                                            "start": 10496,
                                            "end": 10530
                                          }
                                        ],
                                        "start": 10478,
                                        "end": 10544
                                      },
                                      "alternate": null,
                                      "start": 10443,
                                      "end": 10544
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
                                            "name": "codePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10562,
                                            "end": 10572
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [],
                                            "start": 10575,
                                            "end": 10577
                                          },
                                          "definite": false,
                                          "start": 10562,
                                          "end": 10577
                                        }
                                      ],
                                      "declare": false,
                                      "start": 10558,
                                      "end": 10578
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
                                              "start": 10600,
                                              "end": 10601
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0",
                                              "start": 10604,
                                              "end": 10605
                                            },
                                            "definite": false,
                                            "start": 10600,
                                            "end": 10605
                                          }
                                        ],
                                        "declare": false,
                                        "start": 10596,
                                        "end": 10605
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10607,
                                          "end": 10608
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "value": 6,
                                          "raw": "6",
                                          "start": 10611,
                                          "end": 10612
                                        },
                                        "start": 10607,
                                        "end": 10612
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10614,
                                          "end": 10615
                                        },
                                        "start": 10614,
                                        "end": 10617
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
                                                  "name": "codePoints",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 10637,
                                                  "end": 10647
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 10648,
                                                  "end": 10652
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 10637,
                                                "end": 10652
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "savedFile",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 10653,
                                                      "end": 10662
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "readUtf8CodePoint",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 10663,
                                                      "end": 10680
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 10653,
                                                    "end": 10680
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false,
                                                  "start": 10653,
                                                  "end": 10682
                                                }
                                              ],
                                              "optional": false,
                                              "start": 10637,
                                              "end": 10683
                                            },
                                            "directive": null,
                                            "start": 10637,
                                            "end": 10684
                                          }
                                        ],
                                        "start": 10619,
                                        "end": 10698
                                      },
                                      "start": 10591,
                                      "end": 10698
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
                                            "name": "expectedCodePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10715,
                                            "end": 10733
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 66688,
                                                "raw": "0x10480",
                                                "start": 10737,
                                                "end": 10744
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 66689,
                                                "raw": "0x10481",
                                                "start": 10746,
                                                "end": 10753
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 66690,
                                                "raw": "0x10482",
                                                "start": 10755,
                                                "end": 10762
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 10764,
                                                "end": 10768
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 104,
                                                "raw": "0x68",
                                                "start": 10770,
                                                "end": 10774
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 105,
                                                "raw": "0x69",
                                                "start": 10776,
                                                "end": 10780
                                              }
                                            ],
                                            "start": 10736,
                                            "end": 10781
                                          },
                                          "definite": false,
                                          "start": 10715,
                                          "end": 10781
                                        }
                                      ],
                                      "declare": false,
                                      "start": 10711,
                                      "end": 10782
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10802,
                                            "end": 10812
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10813,
                                            "end": 10825
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10802,
                                          "end": 10825
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "codePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10826,
                                            "end": 10836
                                          },
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "expectedCodePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10838,
                                            "end": 10856
                                          }
                                        ],
                                        "optional": false,
                                        "start": 10802,
                                        "end": 10857
                                      },
                                      "start": 10795,
                                      "end": 10858
                                    }
                                  ],
                                  "start": 10339,
                                  "end": 10868
                                },
                                "expression": false,
                                "start": 10327,
                                "end": 10868
                              }
                            ],
                            "start": 10279,
                            "end": 10869
                          }
                        ],
                        "optional": false,
                        "start": 10260,
                        "end": 10870
                      },
                      "directive": null,
                      "start": 10260,
                      "end": 10871
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10877,
                            "end": 10887
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10888,
                            "end": 10895
                          },
                          "optional": false,
                          "computed": false,
                          "start": 10877,
                          "end": 10895
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10900,
                              "end": 10908
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Write non-BMP utf8 chars",
                                "raw": "\"Write non-BMP utf8 chars\"",
                                "start": 10909,
                                "end": 10935
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10975,
                                            "end": 10983
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10986,
                                              "end": 10997
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\tmpUTF8nonBmp.txt",
                                              "raw": "\"\\\\tmpUTF8nonBmp.txt\"",
                                              "start": 11000,
                                              "end": 11021
                                            },
                                            "start": 10986,
                                            "end": 11021
                                          },
                                          "definite": false,
                                          "start": 10975,
                                          "end": 11021
                                        }
                                      ],
                                      "declare": false,
                                      "start": 10971,
                                      "end": 11022
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11039,
                                            "end": 11041
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11048,
                                                "end": 11059
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11060,
                                                "end": 11070
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 11048,
                                              "end": 11070
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": 15,
                                                "raw": "15",
                                                "start": 11071,
                                                "end": 11073
                                              }
                                            ],
                                            "start": 11044,
                                            "end": 11074
                                          },
                                          "definite": false,
                                          "start": 11039,
                                          "end": 11074
                                        }
                                      ],
                                      "declare": false,
                                      "start": 11035,
                                      "end": 11075
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
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11092,
                                            "end": 11097
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 66688,
                                                "raw": "0x10480",
                                                "start": 11101,
                                                "end": 11108
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 66689,
                                                "raw": "0x10481",
                                                "start": 11110,
                                                "end": 11117
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 66690,
                                                "raw": "0x10482",
                                                "start": 11119,
                                                "end": 11126
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 11128,
                                                "end": 11132
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 104,
                                                "raw": "0x68",
                                                "start": 11134,
                                                "end": 11138
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 105,
                                                "raw": "0x69",
                                                "start": 11140,
                                                "end": 11144
                                              }
                                            ],
                                            "start": 11100,
                                            "end": 11145
                                          },
                                          "definite": false,
                                          "start": 11092,
                                          "end": 11145
                                        }
                                      ],
                                      "declare": false,
                                      "start": 11088,
                                      "end": 11146
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11159,
                                            "end": 11164
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "forEach",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11165,
                                            "end": 11172
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 11159,
                                          "end": 11172
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
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
                                                "name": "val",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11183,
                                                "end": 11186
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
                                                        "name": "fb",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 11190,
                                                        "end": 11192
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "writeUtf8CodePoint",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 11193,
                                                        "end": 11211
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 11190,
                                                      "end": 11211
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "val",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 11212,
                                                        "end": 11215
                                                      }
                                                    ],
                                                    "optional": false,
                                                    "start": 11190,
                                                    "end": 11216
                                                  },
                                                  "directive": null,
                                                  "start": 11190,
                                                  "end": 11217
                                                }
                                              ],
                                              "start": 11188,
                                              "end": 11219
                                            },
                                            "expression": false,
                                            "start": 11173,
                                            "end": 11219
                                          }
                                        ],
                                        "optional": false,
                                        "start": 11159,
                                        "end": 11220
                                      },
                                      "directive": null,
                                      "start": 11159,
                                      "end": 11221
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11234,
                                            "end": 11236
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "save",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11237,
                                            "end": 11241
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 11234,
                                          "end": 11241
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11242,
                                            "end": 11250
                                          }
                                        ],
                                        "optional": false,
                                        "start": 11234,
                                        "end": 11251
                                      },
                                      "directive": null,
                                      "start": 11234,
                                      "end": 11252
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
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11270,
                                            "end": 11279
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11286,
                                                "end": 11297
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11298,
                                                "end": 11308
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 11286,
                                              "end": 11308
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11309,
                                                "end": 11317
                                              }
                                            ],
                                            "start": 11282,
                                            "end": 11318
                                          },
                                          "definite": false,
                                          "start": 11270,
                                          "end": 11318
                                        }
                                      ],
                                      "declare": false,
                                      "start": 11266,
                                      "end": 11319
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11336,
                                            "end": 11345
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "encoding",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11346,
                                            "end": 11354
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 11336,
                                          "end": 11354
                                        },
                                        "operator": "!==",
                                        "right": {
                                          "type": "Literal",
                                          "value": "utf8",
                                          "raw": "'utf8'",
                                          "start": 11359,
                                          "end": 11365
                                        },
                                        "start": 11336,
                                        "end": 11365
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ThrowStatement",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Error",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11391,
                                                "end": 11396
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "Incorrect encoding",
                                                  "raw": "\"Incorrect encoding\"",
                                                  "start": 11397,
                                                  "end": 11417
                                                }
                                              ],
                                              "optional": false,
                                              "start": 11391,
                                              "end": 11418
                                            },
                                            "start": 11385,
                                            "end": 11419
                                          }
                                        ],
                                        "start": 11367,
                                        "end": 11433
                                      },
                                      "alternate": null,
                                      "start": 11332,
                                      "end": 11433
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
                                            "name": "expectedBytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11450,
                                            "end": 11463
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 240,
                                                "raw": "0xF0",
                                                "start": 11467,
                                                "end": 11471
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 144,
                                                "raw": "0x90",
                                                "start": 11473,
                                                "end": 11477
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 146,
                                                "raw": "0x92",
                                                "start": 11479,
                                                "end": 11483
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 128,
                                                "raw": "0x80",
                                                "start": 11485,
                                                "end": 11489
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 240,
                                                "raw": "0xF0",
                                                "start": 11491,
                                                "end": 11495
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 144,
                                                "raw": "0x90",
                                                "start": 11497,
                                                "end": 11501
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 146,
                                                "raw": "0x92",
                                                "start": 11503,
                                                "end": 11507
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 129,
                                                "raw": "0x81",
                                                "start": 11509,
                                                "end": 11513
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 240,
                                                "raw": "0xF0",
                                                "start": 11515,
                                                "end": 11519
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 144,
                                                "raw": "0x90",
                                                "start": 11521,
                                                "end": 11525
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 146,
                                                "raw": "0x92",
                                                "start": 11527,
                                                "end": 11531
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 130,
                                                "raw": "0x82",
                                                "start": 11533,
                                                "end": 11537
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 11539,
                                                "end": 11543
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 104,
                                                "raw": "0x68",
                                                "start": 11545,
                                                "end": 11549
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 105,
                                                "raw": "0x69",
                                                "start": 11551,
                                                "end": 11555
                                              }
                                            ],
                                            "start": 11466,
                                            "end": 11556
                                          },
                                          "definite": false,
                                          "start": 11450,
                                          "end": 11556
                                        }
                                      ],
                                      "declare": false,
                                      "start": 11446,
                                      "end": 11557
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "expectedBytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11570,
                                            "end": 11583
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "forEach",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11584,
                                            "end": 11591
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 11570,
                                          "end": 11591
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
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
                                                "name": "val",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11602,
                                                "end": 11605
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "BlockStatement",
                                              "body": [
                                                {
                                                  "type": "VariableDeclaration",
                                                  "kind": "var",
                                                  "declarations": [
                                                    {
                                                      "type": "VariableDeclarator",
                                                      "id": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "byteVal",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 11629,
                                                        "end": 11636
                                                      },
                                                      "init": {
                                                        "type": "CallExpression",
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "object": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "savedFile",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 11639,
                                                            "end": 11648
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "readByte",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 11649,
                                                            "end": 11657
                                                          },
                                                          "optional": false,
                                                          "computed": false,
                                                          "start": 11639,
                                                          "end": 11657
                                                        },
                                                        "typeArguments": null,
                                                        "arguments": [],
                                                        "optional": false,
                                                        "start": 11639,
                                                        "end": 11659
                                                      },
                                                      "definite": false,
                                                      "start": 11629,
                                                      "end": 11659
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 11625,
                                                  "end": 11660
                                                },
                                                {
                                                  "type": "IfStatement",
                                                  "test": {
                                                    "type": "BinaryExpression",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "byteVal",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 11681,
                                                      "end": 11688
                                                    },
                                                    "operator": "!==",
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "val",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 11693,
                                                      "end": 11696
                                                    },
                                                    "start": 11681,
                                                    "end": 11696
                                                  },
                                                  "consequent": {
                                                    "type": "BlockStatement",
                                                    "body": [
                                                      {
                                                        "type": "ThrowStatement",
                                                        "argument": {
                                                          "type": "CallExpression",
                                                          "callee": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "Error",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 11726,
                                                            "end": 11731
                                                          },
                                                          "typeArguments": null,
                                                          "arguments": [
                                                            {
                                                              "type": "Literal",
                                                              "value": "Incorrect byte value",
                                                              "raw": "\"Incorrect byte value\"",
                                                              "start": 11732,
                                                              "end": 11754
                                                            }
                                                          ],
                                                          "optional": false,
                                                          "start": 11726,
                                                          "end": 11755
                                                        },
                                                        "start": 11720,
                                                        "end": 11756
                                                      }
                                                    ],
                                                    "start": 11698,
                                                    "end": 11774
                                                  },
                                                  "alternate": null,
                                                  "start": 11677,
                                                  "end": 11774
                                                }
                                              ],
                                              "start": 11607,
                                              "end": 11788
                                            },
                                            "expression": false,
                                            "start": 11592,
                                            "end": 11788
                                          }
                                        ],
                                        "optional": false,
                                        "start": 11570,
                                        "end": 11789
                                      },
                                      "directive": null,
                                      "start": 11570,
                                      "end": 11790
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 11810,
                                        "end": 11814
                                      },
                                      "start": 11803,
                                      "end": 11815
                                    }
                                  ],
                                  "start": 10957,
                                  "end": 11825
                                },
                                "expression": false,
                                "start": 10945,
                                "end": 11825
                              }
                            ],
                            "start": 10896,
                            "end": 11826
                          }
                        ],
                        "optional": false,
                        "start": 10877,
                        "end": 11827
                      },
                      "directive": null,
                      "start": 10877,
                      "end": 11828
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 11834,
                            "end": 11844
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 11845,
                            "end": 11852
                          },
                          "optional": false,
                          "computed": false,
                          "start": 11834,
                          "end": 11852
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11857,
                              "end": 11865
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test invalid lead UTF8 byte",
                                "raw": "\"Test invalid lead UTF8 byte\"",
                                "start": 11866,
                                "end": 11895
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11935,
                                            "end": 11943
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 11946,
                                              "end": 11957
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\utf8BadLeadByte.txt",
                                              "raw": "\"\\\\utf8BadLeadByte.txt\"",
                                              "start": 11960,
                                              "end": 11983
                                            },
                                            "start": 11946,
                                            "end": 11983
                                          },
                                          "definite": false,
                                          "start": 11935,
                                          "end": 11983
                                        }
                                      ],
                                      "declare": false,
                                      "start": 11931,
                                      "end": 11984
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12001,
                                            "end": 12003
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12010,
                                                "end": 12021
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12022,
                                                "end": 12032
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 12010,
                                              "end": 12032
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12033,
                                                "end": 12041
                                              }
                                            ],
                                            "start": 12006,
                                            "end": 12042
                                          },
                                          "definite": false,
                                          "start": 12001,
                                          "end": 12042
                                        }
                                      ],
                                      "declare": false,
                                      "start": 11997,
                                      "end": 12043
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 12063,
                                        "end": 12067
                                      },
                                      "start": 12056,
                                      "end": 12068
                                    }
                                  ],
                                  "start": 11917,
                                  "end": 12078
                                },
                                "expression": false,
                                "start": 11905,
                                "end": 12078
                              },
                              {
                                "type": "Literal",
                                "value": "Invalid UTF8 byte sequence at index: 4",
                                "raw": "\"Invalid UTF8 byte sequence at index: 4\"",
                                "start": 12080,
                                "end": 12120
                              }
                            ],
                            "start": 11853,
                            "end": 12121
                          }
                        ],
                        "optional": false,
                        "start": 11834,
                        "end": 12122
                      },
                      "directive": null,
                      "start": 11834,
                      "end": 12123
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12129,
                            "end": 12139
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12140,
                            "end": 12147
                          },
                          "optional": false,
                          "computed": false,
                          "start": 12129,
                          "end": 12147
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12152,
                              "end": 12160
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test invalid tail UTF8 byte",
                                "raw": "\"Test invalid tail UTF8 byte\"",
                                "start": 12161,
                                "end": 12190
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12230,
                                            "end": 12238
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 12241,
                                              "end": 12252
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\utf8InvalidTail.txt",
                                              "raw": "\"\\\\utf8InvalidTail.txt\"",
                                              "start": 12255,
                                              "end": 12278
                                            },
                                            "start": 12241,
                                            "end": 12278
                                          },
                                          "definite": false,
                                          "start": 12230,
                                          "end": 12278
                                        }
                                      ],
                                      "declare": false,
                                      "start": 12226,
                                      "end": 12279
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12296,
                                            "end": 12298
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12305,
                                                "end": 12316
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12317,
                                                "end": 12327
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 12305,
                                              "end": 12327
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12328,
                                                "end": 12336
                                              }
                                            ],
                                            "start": 12301,
                                            "end": 12337
                                          },
                                          "definite": false,
                                          "start": 12296,
                                          "end": 12337
                                        }
                                      ],
                                      "declare": false,
                                      "start": 12292,
                                      "end": 12338
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 12358,
                                        "end": 12362
                                      },
                                      "start": 12351,
                                      "end": 12363
                                    }
                                  ],
                                  "start": 12212,
                                  "end": 12373
                                },
                                "expression": false,
                                "start": 12200,
                                "end": 12373
                              },
                              {
                                "type": "Literal",
                                "value": "Trailing byte invalid at index: 8",
                                "raw": "\"Trailing byte invalid at index: 8\"",
                                "start": 12375,
                                "end": 12410
                              }
                            ],
                            "start": 12148,
                            "end": 12411
                          }
                        ],
                        "optional": false,
                        "start": 12129,
                        "end": 12412
                      },
                      "directive": null,
                      "start": 12129,
                      "end": 12413
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12419,
                            "end": 12429
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12430,
                            "end": 12437
                          },
                          "optional": false,
                          "computed": false,
                          "start": 12419,
                          "end": 12437
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12442,
                              "end": 12450
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test ANSI fails validation",
                                "raw": "\"Test ANSI fails validation\"",
                                "start": 12451,
                                "end": 12479
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12519,
                                            "end": 12527
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 12530,
                                              "end": 12541
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\ansi.txt",
                                              "raw": "\"\\\\ansi.txt\"",
                                              "start": 12544,
                                              "end": 12556
                                            },
                                            "start": 12530,
                                            "end": 12556
                                          },
                                          "definite": false,
                                          "start": 12519,
                                          "end": 12556
                                        }
                                      ],
                                      "declare": false,
                                      "start": 12515,
                                      "end": 12557
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12574,
                                            "end": 12576
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12583,
                                                "end": 12594
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12595,
                                                "end": 12605
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 12583,
                                              "end": 12605
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12606,
                                                "end": 12614
                                              }
                                            ],
                                            "start": 12579,
                                            "end": 12615
                                          },
                                          "definite": false,
                                          "start": 12574,
                                          "end": 12615
                                        }
                                      ],
                                      "declare": false,
                                      "start": 12570,
                                      "end": 12616
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 12636,
                                        "end": 12640
                                      },
                                      "start": 12629,
                                      "end": 12641
                                    }
                                  ],
                                  "start": 12501,
                                  "end": 12651
                                },
                                "expression": false,
                                "start": 12489,
                                "end": 12651
                              },
                              {
                                "type": "Literal",
                                "value": "Trailing byte invalid at index: 6",
                                "raw": "\"Trailing byte invalid at index: 6\"",
                                "start": 12653,
                                "end": 12688
                              }
                            ],
                            "start": 12438,
                            "end": 12689
                          }
                        ],
                        "optional": false,
                        "start": 12419,
                        "end": 12690
                      },
                      "directive": null,
                      "start": 12419,
                      "end": 12691
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12697,
                            "end": 12707
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12708,
                            "end": 12715
                          },
                          "optional": false,
                          "computed": false,
                          "start": 12697,
                          "end": 12715
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12720,
                              "end": 12728
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test UTF-16LE with invalid surrogate trail fails",
                                "raw": "\"Test UTF-16LE with invalid surrogate trail fails\"",
                                "start": 12729,
                                "end": 12779
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12819,
                                            "end": 12827
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 12830,
                                              "end": 12841
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\utf16leInvalidSurrogate.txt",
                                              "raw": "\"\\\\utf16leInvalidSurrogate.txt\"",
                                              "start": 12844,
                                              "end": 12875
                                            },
                                            "start": 12830,
                                            "end": 12875
                                          },
                                          "definite": false,
                                          "start": 12819,
                                          "end": 12875
                                        }
                                      ],
                                      "declare": false,
                                      "start": 12815,
                                      "end": 12876
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12893,
                                            "end": 12895
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12902,
                                                "end": 12913
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12914,
                                                "end": 12924
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 12902,
                                              "end": 12924
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12925,
                                                "end": 12933
                                              }
                                            ],
                                            "start": 12898,
                                            "end": 12934
                                          },
                                          "definite": false,
                                          "start": 12893,
                                          "end": 12934
                                        }
                                      ],
                                      "declare": false,
                                      "start": 12889,
                                      "end": 12935
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 12955,
                                        "end": 12959
                                      },
                                      "start": 12948,
                                      "end": 12960
                                    }
                                  ],
                                  "start": 12801,
                                  "end": 12970
                                },
                                "expression": false,
                                "start": 12789,
                                "end": 12970
                              },
                              {
                                "type": "Literal",
                                "value": "Trail surrogate has an invalid value",
                                "raw": "\"Trail surrogate has an invalid value\"",
                                "start": 12972,
                                "end": 13010
                              }
                            ],
                            "start": 12716,
                            "end": 13011
                          }
                        ],
                        "optional": false,
                        "start": 12697,
                        "end": 13012
                      },
                      "directive": null,
                      "start": 12697,
                      "end": 13013
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13019,
                            "end": 13029
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13030,
                            "end": 13037
                          },
                          "optional": false,
                          "computed": false,
                          "start": 13019,
                          "end": 13037
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13042,
                              "end": 13050
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test UTF-16BE with invalid surrogate head fails",
                                "raw": "\"Test UTF-16BE with invalid surrogate head fails\"",
                                "start": 13051,
                                "end": 13100
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13140,
                                            "end": 13148
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 13151,
                                              "end": 13162
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\UTF16BEInvalidSurrogate.txt",
                                              "raw": "\"\\\\UTF16BEInvalidSurrogate.txt\"",
                                              "start": 13165,
                                              "end": 13196
                                            },
                                            "start": 13151,
                                            "end": 13196
                                          },
                                          "definite": false,
                                          "start": 13140,
                                          "end": 13196
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13136,
                                      "end": 13197
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13214,
                                            "end": 13216
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13223,
                                                "end": 13234
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13235,
                                                "end": 13245
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 13223,
                                              "end": 13245
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13246,
                                                "end": 13254
                                              }
                                            ],
                                            "start": 13219,
                                            "end": 13255
                                          },
                                          "definite": false,
                                          "start": 13214,
                                          "end": 13255
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13210,
                                      "end": 13256
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 13276,
                                        "end": 13280
                                      },
                                      "start": 13269,
                                      "end": 13281
                                    }
                                  ],
                                  "start": 13122,
                                  "end": 13291
                                },
                                "expression": false,
                                "start": 13110,
                                "end": 13291
                              },
                              {
                                "type": "Literal",
                                "value": "Byte sequence starts with a trail surrogate",
                                "raw": "\"Byte sequence starts with a trail surrogate\"",
                                "start": 13293,
                                "end": 13338
                              }
                            ],
                            "start": 13038,
                            "end": 13339
                          }
                        ],
                        "optional": false,
                        "start": 13019,
                        "end": 13340
                      },
                      "directive": null,
                      "start": 13019,
                      "end": 13341
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13347,
                            "end": 13357
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13358,
                            "end": 13365
                          },
                          "optional": false,
                          "computed": false,
                          "start": 13347,
                          "end": 13365
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13370,
                              "end": 13378
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test UTF-16LE with missing trail surrogate fails",
                                "raw": "\"Test UTF-16LE with missing trail surrogate fails\"",
                                "start": 13379,
                                "end": 13429
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13469,
                                            "end": 13477
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 13480,
                                              "end": 13491
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\utf16leMissingTrailSurrogate.txt",
                                              "raw": "\"\\\\utf16leMissingTrailSurrogate.txt\"",
                                              "start": 13494,
                                              "end": 13530
                                            },
                                            "start": 13480,
                                            "end": 13530
                                          },
                                          "definite": false,
                                          "start": 13469,
                                          "end": 13530
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13465,
                                      "end": 13531
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13548,
                                            "end": 13550
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13557,
                                                "end": 13568
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13569,
                                                "end": 13579
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 13557,
                                              "end": 13579
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13580,
                                                "end": 13588
                                              }
                                            ],
                                            "start": 13553,
                                            "end": 13589
                                          },
                                          "definite": false,
                                          "start": 13548,
                                          "end": 13589
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13544,
                                      "end": 13590
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 13610,
                                        "end": 13614
                                      },
                                      "start": 13603,
                                      "end": 13615
                                    }
                                  ],
                                  "start": 13451,
                                  "end": 13625
                                },
                                "expression": false,
                                "start": 13439,
                                "end": 13625
                              },
                              {
                                "type": "Literal",
                                "value": "Trail surrogate has an invalid value",
                                "raw": "\"Trail surrogate has an invalid value\"",
                                "start": 13627,
                                "end": 13665
                              }
                            ],
                            "start": 13366,
                            "end": 13666
                          }
                        ],
                        "optional": false,
                        "start": 13347,
                        "end": 13667
                      },
                      "directive": null,
                      "start": 13347,
                      "end": 13668
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13700,
                            "end": 13710
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13711,
                            "end": 13718
                          },
                          "optional": false,
                          "computed": false,
                          "start": 13700,
                          "end": 13718
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13723,
                              "end": 13731
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Count character occurrences",
                                "raw": "\"Count character occurrences\"",
                                "start": 13732,
                                "end": 13761
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13801,
                                            "end": 13809
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 13812,
                                              "end": 13823
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\charCountASCII.txt",
                                              "raw": "\"\\\\charCountASCII.txt\"",
                                              "start": 13826,
                                              "end": 13848
                                            },
                                            "start": 13812,
                                            "end": 13848
                                          },
                                          "definite": false,
                                          "start": 13801,
                                          "end": 13848
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13797,
                                      "end": 13849
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13866,
                                            "end": 13868
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13875,
                                                "end": 13886
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13887,
                                                "end": 13897
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 13875,
                                              "end": 13897
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13898,
                                                "end": 13906
                                              }
                                            ],
                                            "start": 13871,
                                            "end": 13907
                                          },
                                          "definite": false,
                                          "start": 13866,
                                          "end": 13907
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13862,
                                      "end": 13908
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
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13925,
                                            "end": 13931
                                          },
                                          "init": {
                                            "type": "LogicalExpression",
                                            "left": {
                                              "type": "LogicalExpression",
                                              "left": {
                                                "type": "LogicalExpression",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 13935,
                                                      "end": 13937
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "countCR",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 13938,
                                                      "end": 13945
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 13935,
                                                    "end": 13945
                                                  },
                                                  "operator": "===",
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 5,
                                                    "raw": "5",
                                                    "start": 13950,
                                                    "end": 13951
                                                  },
                                                  "start": 13935,
                                                  "end": 13951
                                                },
                                                "operator": "&&",
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 13955,
                                                      "end": 13957
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "countLF",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 13958,
                                                      "end": 13965
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 13955,
                                                    "end": 13965
                                                  },
                                                  "operator": "===",
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 4,
                                                    "raw": "4",
                                                    "start": 13970,
                                                    "end": 13971
                                                  },
                                                  "start": 13955,
                                                  "end": 13971
                                                },
                                                "start": 13935,
                                                "end": 13971
                                              },
                                              "operator": "&&",
                                              "right": {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "fb",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 13975,
                                                    "end": 13977
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "countCRLF",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 13978,
                                                    "end": 13987
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 13975,
                                                  "end": 13987
                                                },
                                                "operator": "===",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": 5,
                                                  "raw": "5",
                                                  "start": 13992,
                                                  "end": 13993
                                                },
                                                "start": 13975,
                                                "end": 13993
                                              },
                                              "start": 13935,
                                              "end": 13993
                                            },
                                            "operator": "&&",
                                            "right": {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "fb",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 13997,
                                                  "end": 13999
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "countHT",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 14000,
                                                  "end": 14007
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 13997,
                                                "end": 14007
                                              },
                                              "operator": "===",
                                              "right": {
                                                "type": "Literal",
                                                "value": 3,
                                                "raw": "3",
                                                "start": 14012,
                                                "end": 14013
                                              },
                                              "start": 13997,
                                              "end": 14013
                                            },
                                            "start": 13935,
                                            "end": 14013
                                          },
                                          "definite": false,
                                          "start": 13925,
                                          "end": 14014
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13921,
                                      "end": 14015
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 14035,
                                        "end": 14041
                                      },
                                      "start": 14028,
                                      "end": 14042
                                    }
                                  ],
                                  "start": 13783,
                                  "end": 14052
                                },
                                "expression": false,
                                "start": 13771,
                                "end": 14052
                              }
                            ],
                            "start": 13719,
                            "end": 14053
                          }
                        ],
                        "optional": false,
                        "start": 13700,
                        "end": 14054
                      },
                      "directive": null,
                      "start": 13700,
                      "end": 14055
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 14095,
                            "end": 14105
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 14106,
                            "end": 14113
                          },
                          "optional": false,
                          "computed": false,
                          "start": 14095,
                          "end": 14113
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14118,
                              "end": 14126
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test file with control character",
                                "raw": "\"Test file with control character\"",
                                "start": 14127,
                                "end": 14161
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 14201,
                                            "end": 14209
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 14212,
                                              "end": 14223
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\controlChar.txt",
                                              "raw": "\"\\\\controlChar.txt\"",
                                              "start": 14226,
                                              "end": 14245
                                            },
                                            "start": 14212,
                                            "end": 14245
                                          },
                                          "definite": false,
                                          "start": 14201,
                                          "end": 14245
                                        }
                                      ],
                                      "declare": false,
                                      "start": 14197,
                                      "end": 14246
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 14263,
                                            "end": 14265
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 14272,
                                                "end": 14283
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 14284,
                                                "end": 14294
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 14272,
                                              "end": 14294
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 14295,
                                                "end": 14303
                                              }
                                            ],
                                            "start": 14268,
                                            "end": 14304
                                          },
                                          "definite": false,
                                          "start": 14263,
                                          "end": 14304
                                        }
                                      ],
                                      "declare": false,
                                      "start": 14259,
                                      "end": 14305
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 14325,
                                        "end": 14329
                                      },
                                      "start": 14318,
                                      "end": 14330
                                    }
                                  ],
                                  "start": 14183,
                                  "end": 14340
                                },
                                "expression": false,
                                "start": 14171,
                                "end": 14340
                              },
                              {
                                "type": "Literal",
                                "value": "Codepoint at index: 3 has control value: 8",
                                "raw": "\"Codepoint at index: 3 has control value: 8\"",
                                "start": 14342,
                                "end": 14386
                              }
                            ],
                            "start": 14114,
                            "end": 14387
                          }
                        ],
                        "optional": false,
                        "start": 14095,
                        "end": 14388
                      },
                      "directive": null,
                      "start": 14095,
                      "end": 14389
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "testRunner",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 14402,
                        "end": 14412
                      },
                      "start": 14395,
                      "end": 14413
                    }
                  ],
                  "start": 1835,
                  "end": 14415
                },
                "expression": false,
                "start": 1823,
                "end": 14415
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1822,
              "end": 14418
            },
            "definite": false,
            "start": 1802,
            "end": 14418
          }
        ],
        "declare": false,
        "start": 1798,
        "end": 14419
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1791,
      "end": 14419
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 79,
  "end": 14419
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 79,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 91,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 109,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 136,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "String",
    "value": "\".\\\\TempTestFiles\"",
    "start": 150,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 171,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 184,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 199,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 212,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 233,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 248,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 250,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 259,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "errorMessageRegEx",
    "start": 266,
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
    "value": "string",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 304,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 311,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 317,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 335,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "tests",
    "start": 343,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 350,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "static",
    "start": 372,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 379,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 392,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "arg2",
    "start": 405,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 419,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 445,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 456,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 466,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 480,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 523,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 530,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 538,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 544,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "tests",
    "start": 569,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 575,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 580,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 597,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "run",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 608,
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
    "value": "var",
    "start": 620,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 624,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 634,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 648,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 653,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 657,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 662,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 665,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "tests",
    "start": 670,
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
    "value": "{",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 691,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "exception",
    "start": 695,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 707,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 726,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 730,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 742,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 751,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "tests",
    "start": 756,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 762,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 780,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 784,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 796,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 806,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 847,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 860,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 869,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 903,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 913,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "exception",
    "start": 936,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 946,
    "end": 947
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 948,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 970,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 981,
    "end": 982
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 983,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 988,
    "end": 989
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1006,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1010,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 1017,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "errorMessageRegEx",
    "start": 1026,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1044,
    "end": 1047
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1048,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1080,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 1084,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "errorMessageRegEx",
    "start": 1093,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1111,
    "end": 1114
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1115,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 1166,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": ";",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1207,
    "end": 1211
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1212,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1218,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1253,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "regex",
    "start": 1257,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1265,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 1269,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 1276,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "errorMessageRegEx",
    "start": 1285,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 1329,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "regex",
    "start": 1342,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1348,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1355,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1422,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 1426,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1437,
    "end": 1440
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1441,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1540,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 1545,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "errorMessageRegEx",
    "start": 1554,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1576,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1587,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "exception",
    "start": 1591,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 1620,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1630,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1651,
    "end": 1655
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1656,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 1661,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 1691,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1701,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1740,
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
    "value": "success",
    "start": 1744,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1765,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1791,
    "end": 1797
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1798,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "tests",
    "start": 1802,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 1809,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1823,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1841,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 1845,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1858,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 1862,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 1929,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 1940,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1948,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 1952,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "String",
    "value": "\"Basic test\"",
    "start": 1961,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1975,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1989,
    "end": 1995
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1996,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2011,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 2022,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2030,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 2034,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "String",
    "value": "\"Test for any error\"",
    "start": 2043,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2065,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2079,
    "end": 2084
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2085,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2089,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2098,
    "end": 2104
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2105,
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
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2115,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2125,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 2136,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2144,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 2148,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "String",
    "value": "\"Test RegEx error message match\"",
    "start": 2157,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2191,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2205,
    "end": 2210
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2211,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2215,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "String",
    "value": "\"Should also pass\"",
    "start": 2221,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2242,
    "end": 2248
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2249,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "String",
    "value": "\"Should [also]+ pass\"",
    "start": 2259,
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
    "value": ")",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2288,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 2299,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2307,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 2311,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "String",
    "value": "\"Test array compare true\"",
    "start": 2320,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2347,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2361,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 2368,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 2379,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ")",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2424,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 2435,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2443,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 2447,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "String",
    "value": "\"Test array compare false\"",
    "start": 2456,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2484,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2498,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 2506,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 2517,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2591,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 2602,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2610,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 2614,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "String",
    "value": "\"Check file exists\"",
    "start": 2623,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2652,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2678,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 2685,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "DirectoryManager",
    "start": 2697,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Identifier",
    "value": "fileExists",
    "start": 2714,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 2725,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "String",
    "value": "\"\\\\Test.txt\"",
    "start": 2739,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2771,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 2782,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2790,
    "end": 2793
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 2794,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "String",
    "value": "\"Check file doesn't exist\"",
    "start": 2803,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2839,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2865,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 2873,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Identifier",
    "value": "DirectoryManager",
    "start": 2885,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "fileExists",
    "start": 2902,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 2913,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "String",
    "value": "\"\\\\Test2.txt\"",
    "start": 2927,
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
    "value": ";",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2996,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 3007,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3015,
    "end": 3018
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 3019,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "String",
    "value": "\"Check text file match\"",
    "start": 3028,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3061,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3087,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 3095,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 3107,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "isTextFile",
    "start": 3118,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "String",
    "value": "\"C:\\\\somedir\\\\readme.txt\"",
    "start": 3129,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3156,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 3175,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 3187,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Identifier",
    "value": "isTextFile",
    "start": 3198,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "String",
    "value": "\"C:\\\\spaces path\\\\myapp.str\"",
    "start": 3209,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3239,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 3258,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 3270,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Identifier",
    "value": "isTextFile",
    "start": 3281,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "String",
    "value": "\"C:\\\\somedir\\\\code.js\"",
    "start": 3292,
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
    "value": ")",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 3334,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 3345,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3353,
    "end": 3356
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 3357,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "String",
    "value": "\"Check makefile match\"",
    "start": 3366,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3398,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3410,
    "end": 3411
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3424,
    "end": 3430
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 3431,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 3443,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Identifier",
    "value": "isTextFile",
    "start": 3454,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "String",
    "value": "\"C:\\\\some dir\\\\makefile\"",
    "start": 3465,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3502,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 3509,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 3520,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3528,
    "end": 3531
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 3532,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "String",
    "value": "\"Check binary file doesn't match\"",
    "start": 3541,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3584,
    "end": 3592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3593,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3610,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 3619,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3630,
    "end": 3631
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 3631,
    "end": 3641
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Identifier",
    "value": "isTextFile",
    "start": 3642,
    "end": 3652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3652,
    "end": 3653
  },
  {
    "type": "String",
    "value": "\"C:\\\\somedir\\\\app.exe\"",
    "start": 3653,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3677,
    "end": 3679
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 3693,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 3705,
    "end": 3715
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3715,
    "end": 3716
  },
  {
    "type": "Identifier",
    "value": "isTextFile",
    "start": 3716,
    "end": 3726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3726,
    "end": 3727
  },
  {
    "type": "String",
    "value": "\"C:\\\\somedir\\\\my lib.dll\"",
    "start": 3727,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3752,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3767,
    "end": 3768
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 3810,
    "end": 3820
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 3821,
    "end": 3828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3829,
    "end": 3832
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 3833,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "String",
    "value": "\"Check App defaults\"",
    "start": 3842,
    "end": 3862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3872,
    "end": 3880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3881,
    "end": 3882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3898,
    "end": 3901
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 3902,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3906,
    "end": 3907
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3908,
    "end": 3911
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 3912,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 3916,
    "end": 3919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3919,
    "end": 3920
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3920,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3921,
    "end": 3922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3937,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 3945,
    "end": 3948
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3948,
    "end": 3949
  },
  {
    "type": "Identifier",
    "value": "fixLines",
    "start": 3949,
    "end": 3957
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3958,
    "end": 3961
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3962,
    "end": 3967
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3968,
    "end": 3970
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 3990,
    "end": 3993
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3993,
    "end": 3994
  },
  {
    "type": "Identifier",
    "value": "recurse",
    "start": 3994,
    "end": 4001
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4002,
    "end": 4005
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4006,
    "end": 4010
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4011,
    "end": 4013
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4033,
    "end": 4036
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4036,
    "end": 4037
  },
  {
    "type": "Identifier",
    "value": "lineEndings",
    "start": 4037,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4049,
    "end": 4052
  },
  {
    "type": "String",
    "value": "\"CRLF\"",
    "start": 4053,
    "end": 4059
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4060,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4082,
    "end": 4085
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4085,
    "end": 4086
  },
  {
    "type": "Identifier",
    "value": "matchPattern",
    "start": 4086,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4099,
    "end": 4102
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4103,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4113,
    "end": 4115
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4135,
    "end": 4138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Identifier",
    "value": "rootDirectory",
    "start": 4139,
    "end": 4152
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4153,
    "end": 4156
  },
  {
    "type": "String",
    "value": "\".\\\\\"",
    "start": 4157,
    "end": 4162
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4163,
    "end": 4165
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4185,
    "end": 4188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4188,
    "end": 4189
  },
  {
    "type": "Identifier",
    "value": "encodings",
    "start": 4189,
    "end": 4198
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4198,
    "end": 4199
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4199,
    "end": 4200
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4202,
    "end": 4205
  },
  {
    "type": "String",
    "value": "\"ascii\"",
    "start": 4206,
    "end": 4213
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4214,
    "end": 4216
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4236,
    "end": 4239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4239,
    "end": 4240
  },
  {
    "type": "Identifier",
    "value": "encodings",
    "start": 4240,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4249,
    "end": 4250
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4250,
    "end": 4251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4251,
    "end": 4252
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4253,
    "end": 4256
  },
  {
    "type": "String",
    "value": "\"utf8nobom\"",
    "start": 4257,
    "end": 4268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4268,
    "end": 4269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4269,
    "end": 4270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4279,
    "end": 4280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4280,
    "end": 4281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 4288,
    "end": 4298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4298,
    "end": 4299
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 4299,
    "end": 4306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4306,
    "end": 4307
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4307,
    "end": 4310
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 4311,
    "end": 4319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4319,
    "end": 4320
  },
  {
    "type": "String",
    "value": "\"Check App params\"",
    "start": 4320,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4348,
    "end": 4356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4358,
    "end": 4359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4374,
    "end": 4377
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4378,
    "end": 4381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4382,
    "end": 4383
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4384,
    "end": 4387
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 4388,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 4392,
    "end": 4395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4395,
    "end": 4396
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4396,
    "end": 4397
  },
  {
    "type": "String",
    "value": "\"-dir=C:\\\\test dir\"",
    "start": 4397,
    "end": 4416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4416,
    "end": 4417
  },
  {
    "type": "String",
    "value": "\"-lineEndings=LF\"",
    "start": 4418,
    "end": 4435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "String",
    "value": "\"-encodings=utf16be,ascii\"",
    "start": 4437,
    "end": 4463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "String",
    "value": "\"-recurse=false\"",
    "start": 4465,
    "end": 4481
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4481,
    "end": 4482
  },
  {
    "type": "String",
    "value": "\"-fixlines\"",
    "start": 4483,
    "end": 4494
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4494,
    "end": 4495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4495,
    "end": 4496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4496,
    "end": 4497
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4510,
    "end": 4516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4517,
    "end": 4518
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4518,
    "end": 4521
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Identifier",
    "value": "fixLines",
    "start": 4522,
    "end": 4530
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4531,
    "end": 4534
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4535,
    "end": 4539
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4540,
    "end": 4542
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4562,
    "end": 4565
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4565,
    "end": 4566
  },
  {
    "type": "Identifier",
    "value": "lineEndings",
    "start": 4566,
    "end": 4577
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4578,
    "end": 4581
  },
  {
    "type": "String",
    "value": "\"LF\"",
    "start": 4582,
    "end": 4586
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4587,
    "end": 4589
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4609,
    "end": 4612
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Identifier",
    "value": "recurse",
    "start": 4613,
    "end": 4620
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4621,
    "end": 4624
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 4625,
    "end": 4630
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4631,
    "end": 4633
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4653,
    "end": 4656
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4656,
    "end": 4657
  },
  {
    "type": "Identifier",
    "value": "matchPattern",
    "start": 4657,
    "end": 4669
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4670,
    "end": 4673
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4674,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4684,
    "end": 4686
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4706,
    "end": 4709
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4709,
    "end": 4710
  },
  {
    "type": "Identifier",
    "value": "rootDirectory",
    "start": 4710,
    "end": 4723
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4724,
    "end": 4727
  },
  {
    "type": "String",
    "value": "\"C:\\\\test dir\"",
    "start": 4728,
    "end": 4742
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4743,
    "end": 4745
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4765,
    "end": 4768
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4768,
    "end": 4769
  },
  {
    "type": "Identifier",
    "value": "encodings",
    "start": 4769,
    "end": 4778
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4778,
    "end": 4779
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4779,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4780,
    "end": 4781
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4782,
    "end": 4785
  },
  {
    "type": "String",
    "value": "\"utf16be\"",
    "start": 4786,
    "end": 4795
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4796,
    "end": 4798
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4818,
    "end": 4821
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "Identifier",
    "value": "encodings",
    "start": 4822,
    "end": 4831
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4831,
    "end": 4832
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4832,
    "end": 4833
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4833,
    "end": 4834
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4835,
    "end": 4838
  },
  {
    "type": "String",
    "value": "\"ascii\"",
    "start": 4839,
    "end": 4846
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4847,
    "end": 4849
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4869,
    "end": 4872
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4872,
    "end": 4873
  },
  {
    "type": "Identifier",
    "value": "encodings",
    "start": 4873,
    "end": 4882
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4882,
    "end": 4883
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4883,
    "end": 4889
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4890,
    "end": 4893
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4894,
    "end": 4895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4895,
    "end": 4896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4896,
    "end": 4897
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4906,
    "end": 4907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4907,
    "end": 4908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4908,
    "end": 4909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4909,
    "end": 4910
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 4948,
    "end": 4958
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4958,
    "end": 4959
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 4959,
    "end": 4966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4966,
    "end": 4967
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4967,
    "end": 4970
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 4971,
    "end": 4979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4979,
    "end": 4980
  },
  {
    "type": "String",
    "value": "\"Check encoding detection no BOM\"",
    "start": 4980,
    "end": 5013
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5013,
    "end": 5014
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5023,
    "end": 5031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5032,
    "end": 5033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5033,
    "end": 5034
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5035,
    "end": 5036
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5049,
    "end": 5052
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5053,
    "end": 5055
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5056,
    "end": 5057
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5058,
    "end": 5061
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 5062,
    "end": 5073
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5073,
    "end": 5074
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 5074,
    "end": 5084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5084,
    "end": 5085
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 5085,
    "end": 5096
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5097,
    "end": 5098
  },
  {
    "type": "String",
    "value": "\"\\\\noBOM.txt\"",
    "start": 5099,
    "end": 5112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5112,
    "end": 5113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5113,
    "end": 5114
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5127,
    "end": 5133
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5134,
    "end": 5136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5136,
    "end": 5137
  },
  {
    "type": "Identifier",
    "value": "bom",
    "start": 5137,
    "end": 5140
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5141,
    "end": 5144
  },
  {
    "type": "String",
    "value": "'none'",
    "start": 5145,
    "end": 5151
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5152,
    "end": 5154
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5155,
    "end": 5157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5157,
    "end": 5158
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 5158,
    "end": 5166
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5167,
    "end": 5170
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 5171,
    "end": 5177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5177,
    "end": 5178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5187,
    "end": 5188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5189,
    "end": 5190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5190,
    "end": 5191
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 5196,
    "end": 5206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5206,
    "end": 5207
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 5207,
    "end": 5214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5214,
    "end": 5215
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5215,
    "end": 5218
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 5219,
    "end": 5227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5227,
    "end": 5228
  },
  {
    "type": "String",
    "value": "\"Check encoding detection UTF8 BOM\"",
    "start": 5228,
    "end": 5263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5263,
    "end": 5264
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5273,
    "end": 5281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5282,
    "end": 5283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5283,
    "end": 5284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5285,
    "end": 5286
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5299,
    "end": 5302
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5303,
    "end": 5305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5306,
    "end": 5307
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5308,
    "end": 5311
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 5312,
    "end": 5323
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5323,
    "end": 5324
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 5324,
    "end": 5334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5334,
    "end": 5335
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 5335,
    "end": 5346
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5347,
    "end": 5348
  },
  {
    "type": "String",
    "value": "\"\\\\UTF8BOM.txt\"",
    "start": 5349,
    "end": 5364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5364,
    "end": 5365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5365,
    "end": 5366
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5379,
    "end": 5385
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5386,
    "end": 5388
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5388,
    "end": 5389
  },
  {
    "type": "Identifier",
    "value": "bom",
    "start": 5389,
    "end": 5392
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5393,
    "end": 5396
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 5397,
    "end": 5403
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5404,
    "end": 5406
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5407,
    "end": 5409
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5409,
    "end": 5410
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 5410,
    "end": 5418
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5419,
    "end": 5422
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 5423,
    "end": 5429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5429,
    "end": 5430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5439,
    "end": 5440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5440,
    "end": 5441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5441,
    "end": 5442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5442,
    "end": 5443
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 5448,
    "end": 5458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5458,
    "end": 5459
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 5459,
    "end": 5466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5466,
    "end": 5467
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5467,
    "end": 5470
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 5471,
    "end": 5479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5479,
    "end": 5480
  },
  {
    "type": "String",
    "value": "\"Check encoding detection UTF16be BOM\"",
    "start": 5480,
    "end": 5518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5518,
    "end": 5519
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5528,
    "end": 5536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5537,
    "end": 5538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5538,
    "end": 5539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5540,
    "end": 5541
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5554,
    "end": 5557
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5558,
    "end": 5560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5561,
    "end": 5562
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5563,
    "end": 5566
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 5567,
    "end": 5578
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5578,
    "end": 5579
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 5579,
    "end": 5589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5589,
    "end": 5590
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 5590,
    "end": 5601
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5602,
    "end": 5603
  },
  {
    "type": "String",
    "value": "\"\\\\UTF16BE.txt\"",
    "start": 5604,
    "end": 5619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5619,
    "end": 5620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5620,
    "end": 5621
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5634,
    "end": 5640
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5641,
    "end": 5643
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5643,
    "end": 5644
  },
  {
    "type": "Identifier",
    "value": "bom",
    "start": 5644,
    "end": 5647
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5648,
    "end": 5651
  },
  {
    "type": "String",
    "value": "'utf16be'",
    "start": 5652,
    "end": 5661
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5662,
    "end": 5664
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5665,
    "end": 5667
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5667,
    "end": 5668
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 5668,
    "end": 5676
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5677,
    "end": 5680
  },
  {
    "type": "String",
    "value": "'utf16be'",
    "start": 5681,
    "end": 5690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5690,
    "end": 5691
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5700,
    "end": 5701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5701,
    "end": 5702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5702,
    "end": 5703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5703,
    "end": 5704
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 5709,
    "end": 5719
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5719,
    "end": 5720
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 5720,
    "end": 5727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5727,
    "end": 5728
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5728,
    "end": 5731
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 5732,
    "end": 5740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5740,
    "end": 5741
  },
  {
    "type": "String",
    "value": "\"Check encoding detection UTF16le BOM\"",
    "start": 5741,
    "end": 5779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5779,
    "end": 5780
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5789,
    "end": 5797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5798,
    "end": 5799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5799,
    "end": 5800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5801,
    "end": 5802
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5815,
    "end": 5818
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5819,
    "end": 5821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5822,
    "end": 5823
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5824,
    "end": 5827
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 5828,
    "end": 5839
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5839,
    "end": 5840
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 5840,
    "end": 5850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5850,
    "end": 5851
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 5851,
    "end": 5862
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5863,
    "end": 5864
  },
  {
    "type": "String",
    "value": "\"\\\\UTF16LE.txt\"",
    "start": 5865,
    "end": 5880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5880,
    "end": 5881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5881,
    "end": 5882
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5895,
    "end": 5901
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5902,
    "end": 5904
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5904,
    "end": 5905
  },
  {
    "type": "Identifier",
    "value": "bom",
    "start": 5905,
    "end": 5908
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5909,
    "end": 5912
  },
  {
    "type": "String",
    "value": "'utf16le'",
    "start": 5913,
    "end": 5922
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5923,
    "end": 5925
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5926,
    "end": 5928
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5928,
    "end": 5929
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 5929,
    "end": 5937
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5938,
    "end": 5941
  },
  {
    "type": "String",
    "value": "'utf16le'",
    "start": 5942,
    "end": 5951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5951,
    "end": 5952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5961,
    "end": 5962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5962,
    "end": 5963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5963,
    "end": 5964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5964,
    "end": 5965
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 5970,
    "end": 5980
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5980,
    "end": 5981
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 5981,
    "end": 5988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5988,
    "end": 5989
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5989,
    "end": 5992
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 5993,
    "end": 6001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6001,
    "end": 6002
  },
  {
    "type": "String",
    "value": "\"Check encoding on 1 bytes file\"",
    "start": 6002,
    "end": 6034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6034,
    "end": 6035
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6044,
    "end": 6052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6053,
    "end": 6054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6054,
    "end": 6055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6056,
    "end": 6057
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6070,
    "end": 6073
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6074,
    "end": 6076
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6077,
    "end": 6078
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6079,
    "end": 6082
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 6083,
    "end": 6094
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6094,
    "end": 6095
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 6095,
    "end": 6105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6105,
    "end": 6106
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 6106,
    "end": 6117
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 6118,
    "end": 6119
  },
  {
    "type": "String",
    "value": "\"\\\\1bytefile.txt\"",
    "start": 6120,
    "end": 6137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6137,
    "end": 6138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6138,
    "end": 6139
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6152,
    "end": 6158
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6159,
    "end": 6161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6161,
    "end": 6162
  },
  {
    "type": "Identifier",
    "value": "bom",
    "start": 6162,
    "end": 6165
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6166,
    "end": 6169
  },
  {
    "type": "String",
    "value": "'none'",
    "start": 6170,
    "end": 6176
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 6177,
    "end": 6179
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6180,
    "end": 6182
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6182,
    "end": 6183
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 6183,
    "end": 6191
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6192,
    "end": 6195
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 6196,
    "end": 6202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6202,
    "end": 6203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6212,
    "end": 6213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6213,
    "end": 6214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6214,
    "end": 6215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6215,
    "end": 6216
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 6221,
    "end": 6231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6231,
    "end": 6232
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 6232,
    "end": 6239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6239,
    "end": 6240
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6240,
    "end": 6243
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 6244,
    "end": 6252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6252,
    "end": 6253
  },
  {
    "type": "String",
    "value": "\"Check encoding on 0 bytes file\"",
    "start": 6253,
    "end": 6285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6285,
    "end": 6286
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6295,
    "end": 6303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6304,
    "end": 6305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6305,
    "end": 6306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6307,
    "end": 6308
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6321,
    "end": 6324
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6325,
    "end": 6327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6328,
    "end": 6329
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6330,
    "end": 6333
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 6334,
    "end": 6345
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6345,
    "end": 6346
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 6346,
    "end": 6356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6356,
    "end": 6357
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 6357,
    "end": 6368
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 6369,
    "end": 6370
  },
  {
    "type": "String",
    "value": "\"\\\\0bytefile.txt\"",
    "start": 6371,
    "end": 6388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6388,
    "end": 6389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6389,
    "end": 6390
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6403,
    "end": 6409
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6410,
    "end": 6412
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6412,
    "end": 6413
  },
  {
    "type": "Identifier",
    "value": "bom",
    "start": 6413,
    "end": 6416
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6417,
    "end": 6420
  },
  {
    "type": "String",
    "value": "'none'",
    "start": 6421,
    "end": 6427
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 6428,
    "end": 6430
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6431,
    "end": 6433
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6433,
    "end": 6434
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 6434,
    "end": 6442
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6443,
    "end": 6446
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 6447,
    "end": 6453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6453,
    "end": 6454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6463,
    "end": 6464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6464,
    "end": 6465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6465,
    "end": 6466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6466,
    "end": 6467
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 6500,
    "end": 6510
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6510,
    "end": 6511
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 6511,
    "end": 6518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6518,
    "end": 6519
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6519,
    "end": 6522
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 6523,
    "end": 6531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6531,
    "end": 6532
  },
  {
    "type": "String",
    "value": "\"Check byte reader\"",
    "start": 6532,
    "end": 6551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6551,
    "end": 6552
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6561,
    "end": 6569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6570,
    "end": 6571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6571,
    "end": 6572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6573,
    "end": 6574
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6587,
    "end": 6590
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6591,
    "end": 6593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6594,
    "end": 6595
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6596,
    "end": 6599
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 6600,
    "end": 6611
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6611,
    "end": 6612
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 6612,
    "end": 6622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6622,
    "end": 6623
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 6623,
    "end": 6634
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 6635,
    "end": 6636
  },
  {
    "type": "String",
    "value": "\"\\\\UTF8BOM.txt\"",
    "start": 6637,
    "end": 6652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6652,
    "end": 6653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6653,
    "end": 6654
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6667,
    "end": 6670
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 6671,
    "end": 6676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6677,
    "end": 6678
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6679,
    "end": 6680
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6680,
    "end": 6681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6681,
    "end": 6682
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 6695,
    "end": 6698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6699,
    "end": 6700
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6700,
    "end": 6703
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 6704,
    "end": 6705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6706,
    "end": 6707
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6708,
    "end": 6709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6709,
    "end": 6710
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 6711,
    "end": 6712
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6713,
    "end": 6714
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 6715,
    "end": 6717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6717,
    "end": 6718
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 6719,
    "end": 6720
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 6720,
    "end": 6722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6722,
    "end": 6723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6724,
    "end": 6725
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 6742,
    "end": 6747
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6747,
    "end": 6748
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 6748,
    "end": 6752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6752,
    "end": 6753
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6753,
    "end": 6755
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6755,
    "end": 6756
  },
  {
    "type": "Identifier",
    "value": "readByte",
    "start": 6756,
    "end": 6764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6764,
    "end": 6765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6765,
    "end": 6766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6766,
    "end": 6767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6767,
    "end": 6768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6781,
    "end": 6782
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6795,
    "end": 6801
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 6802,
    "end": 6812
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6812,
    "end": 6813
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 6813,
    "end": 6825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6825,
    "end": 6826
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 6826,
    "end": 6831
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6831,
    "end": 6832
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6833,
    "end": 6834
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 6834,
    "end": 6838
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6838,
    "end": 6839
  },
  {
    "type": "Numeric",
    "value": "0xC3",
    "start": 6840,
    "end": 6844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6844,
    "end": 6845
  },
  {
    "type": "Numeric",
    "value": "0xA8",
    "start": 6846,
    "end": 6850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6850,
    "end": 6851
  },
  {
    "type": "Numeric",
    "value": "0xE1",
    "start": 6852,
    "end": 6856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6856,
    "end": 6857
  },
  {
    "type": "Numeric",
    "value": "0xB4",
    "start": 6858,
    "end": 6862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6862,
    "end": 6863
  },
  {
    "type": "Numeric",
    "value": "0xA3",
    "start": 6864,
    "end": 6868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6868,
    "end": 6869
  },
  {
    "type": "Numeric",
    "value": "0xE2",
    "start": 6870,
    "end": 6874
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6874,
    "end": 6875
  },
  {
    "type": "Numeric",
    "value": "0x80",
    "start": 6876,
    "end": 6880
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6880,
    "end": 6881
  },
  {
    "type": "Numeric",
    "value": "0xA0",
    "start": 6882,
    "end": 6886
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6886,
    "end": 6887
  },
  {
    "type": "Numeric",
    "value": "0x0D",
    "start": 6888,
    "end": 6892
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6892,
    "end": 6893
  },
  {
    "type": "Numeric",
    "value": "0x0A",
    "start": 6894,
    "end": 6898
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6898,
    "end": 6899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6899,
    "end": 6900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6900,
    "end": 6901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6910,
    "end": 6911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6911,
    "end": 6912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6912,
    "end": 6913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6913,
    "end": 6914
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 6921,
    "end": 6931
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6931,
    "end": 6932
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 6932,
    "end": 6939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6939,
    "end": 6940
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6940,
    "end": 6943
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 6944,
    "end": 6952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6952,
    "end": 6953
  },
  {
    "type": "String",
    "value": "\"Check UTF8 decoding\"",
    "start": 6953,
    "end": 6974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6974,
    "end": 6975
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6984,
    "end": 6992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6993,
    "end": 6994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6994,
    "end": 6995
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6996,
    "end": 6997
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7010,
    "end": 7013
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7014,
    "end": 7016
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7017,
    "end": 7018
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7019,
    "end": 7022
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 7023,
    "end": 7034
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7034,
    "end": 7035
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 7035,
    "end": 7045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7045,
    "end": 7046
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 7046,
    "end": 7057
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 7058,
    "end": 7059
  },
  {
    "type": "String",
    "value": "\"\\\\UTF8BOM.txt\"",
    "start": 7060,
    "end": 7075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7075,
    "end": 7076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7076,
    "end": 7077
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7090,
    "end": 7093
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 7094,
    "end": 7099
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7100,
    "end": 7101
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7102,
    "end": 7103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7103,
    "end": 7104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7104,
    "end": 7105
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 7118,
    "end": 7121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7122,
    "end": 7123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7123,
    "end": 7126
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7127,
    "end": 7128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7129,
    "end": 7130
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7131,
    "end": 7132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7132,
    "end": 7133
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7134,
    "end": 7135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7136,
    "end": 7137
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 7138,
    "end": 7139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7139,
    "end": 7140
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7141,
    "end": 7142
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 7142,
    "end": 7144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7144,
    "end": 7145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7146,
    "end": 7147
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 7164,
    "end": 7169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7169,
    "end": 7170
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 7170,
    "end": 7174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7174,
    "end": 7175
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7175,
    "end": 7177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7177,
    "end": 7178
  },
  {
    "type": "Identifier",
    "value": "readUtf8CodePoint",
    "start": 7178,
    "end": 7195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7195,
    "end": 7196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7196,
    "end": 7197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7197,
    "end": 7198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7198,
    "end": 7199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7212,
    "end": 7213
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7226,
    "end": 7232
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 7233,
    "end": 7243
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7243,
    "end": 7244
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 7244,
    "end": 7256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7256,
    "end": 7257
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 7257,
    "end": 7262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7262,
    "end": 7263
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7264,
    "end": 7265
  },
  {
    "type": "Numeric",
    "value": "0x0054",
    "start": 7265,
    "end": 7271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7271,
    "end": 7272
  },
  {
    "type": "Numeric",
    "value": "0x00E8",
    "start": 7273,
    "end": 7279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7279,
    "end": 7280
  },
  {
    "type": "Numeric",
    "value": "0x1D23",
    "start": 7281,
    "end": 7287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7287,
    "end": 7288
  },
  {
    "type": "Numeric",
    "value": "0x2020",
    "start": 7289,
    "end": 7295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7295,
    "end": 7296
  },
  {
    "type": "Numeric",
    "value": "0x000D",
    "start": 7297,
    "end": 7303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7303,
    "end": 7304
  },
  {
    "type": "Numeric",
    "value": "0x000A",
    "start": 7305,
    "end": 7311
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7311,
    "end": 7312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7312,
    "end": 7313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7313,
    "end": 7314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7323,
    "end": 7324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7324,
    "end": 7325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7325,
    "end": 7326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7326,
    "end": 7327
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 7333,
    "end": 7343
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7343,
    "end": 7344
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 7344,
    "end": 7351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7351,
    "end": 7352
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7352,
    "end": 7355
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 7356,
    "end": 7364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7364,
    "end": 7365
  },
  {
    "type": "String",
    "value": "\"Check UTF8 encoding\"",
    "start": 7365,
    "end": 7386
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7386,
    "end": 7387
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7396,
    "end": 7404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7405,
    "end": 7406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7406,
    "end": 7407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7408,
    "end": 7409
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7422,
    "end": 7425
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7426,
    "end": 7428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7429,
    "end": 7430
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7431,
    "end": 7434
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 7435,
    "end": 7446
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7446,
    "end": 7447
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 7447,
    "end": 7457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7457,
    "end": 7458
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 7458,
    "end": 7460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7460,
    "end": 7461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7461,
    "end": 7462
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7475,
    "end": 7477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7477,
    "end": 7478
  },
  {
    "type": "Identifier",
    "value": "writeUtf8Bom",
    "start": 7478,
    "end": 7490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7490,
    "end": 7491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7491,
    "end": 7492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7492,
    "end": 7493
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7506,
    "end": 7509
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 7510,
    "end": 7515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7516,
    "end": 7517
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7518,
    "end": 7519
  },
  {
    "type": "Numeric",
    "value": "0x0054",
    "start": 7519,
    "end": 7525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7525,
    "end": 7526
  },
  {
    "type": "Numeric",
    "value": "0x00E8",
    "start": 7527,
    "end": 7533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7533,
    "end": 7534
  },
  {
    "type": "Numeric",
    "value": "0x1D23",
    "start": 7535,
    "end": 7541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7541,
    "end": 7542
  },
  {
    "type": "Numeric",
    "value": "0x2020",
    "start": 7543,
    "end": 7549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7549,
    "end": 7550
  },
  {
    "type": "Numeric",
    "value": "0x000D",
    "start": 7551,
    "end": 7557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7557,
    "end": 7558
  },
  {
    "type": "Numeric",
    "value": "0x000A",
    "start": 7559,
    "end": 7565
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7565,
    "end": 7566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7566,
    "end": 7567
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 7580,
    "end": 7583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7584,
    "end": 7585
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7585,
    "end": 7588
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7589,
    "end": 7590
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 7591,
    "end": 7593
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 7594,
    "end": 7599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7599,
    "end": 7600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7601,
    "end": 7602
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7619,
    "end": 7621
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7621,
    "end": 7622
  },
  {
    "type": "Identifier",
    "value": "writeUtf8CodePoint",
    "start": 7622,
    "end": 7640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7640,
    "end": 7641
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 7641,
    "end": 7646
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7646,
    "end": 7647
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7647,
    "end": 7648
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7648,
    "end": 7649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7649,
    "end": 7650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7650,
    "end": 7651
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7664,
    "end": 7665
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7678,
    "end": 7680
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7680,
    "end": 7681
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 7681,
    "end": 7686
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7687,
    "end": 7688
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7689,
    "end": 7690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7690,
    "end": 7691
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7704,
    "end": 7707
  },
  {
    "type": "Identifier",
    "value": "bytes",
    "start": 7708,
    "end": 7713
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7714,
    "end": 7715
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7716,
    "end": 7717
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7717,
    "end": 7718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7718,
    "end": 7719
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 7732,
    "end": 7735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7736,
    "end": 7737
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7737,
    "end": 7740
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7741,
    "end": 7742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7743,
    "end": 7744
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7745,
    "end": 7746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7746,
    "end": 7747
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7748,
    "end": 7749
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7750,
    "end": 7751
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 7752,
    "end": 7754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7754,
    "end": 7755
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7756,
    "end": 7757
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 7757,
    "end": 7759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7759,
    "end": 7760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7761,
    "end": 7762
  },
  {
    "type": "Identifier",
    "value": "bytes",
    "start": 7779,
    "end": 7784
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7784,
    "end": 7785
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 7785,
    "end": 7789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7789,
    "end": 7790
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7790,
    "end": 7792
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7792,
    "end": 7793
  },
  {
    "type": "Identifier",
    "value": "readByte",
    "start": 7793,
    "end": 7801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7801,
    "end": 7802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7802,
    "end": 7803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7803,
    "end": 7804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7804,
    "end": 7805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7818,
    "end": 7819
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7832,
    "end": 7835
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 7836,
    "end": 7844
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7845,
    "end": 7846
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7847,
    "end": 7848
  },
  {
    "type": "Numeric",
    "value": "0xEF",
    "start": 7848,
    "end": 7852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7852,
    "end": 7853
  },
  {
    "type": "Numeric",
    "value": "0xBB",
    "start": 7854,
    "end": 7858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7858,
    "end": 7859
  },
  {
    "type": "Numeric",
    "value": "0xBF",
    "start": 7860,
    "end": 7864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7864,
    "end": 7865
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 7866,
    "end": 7870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7870,
    "end": 7871
  },
  {
    "type": "Numeric",
    "value": "0xC3",
    "start": 7872,
    "end": 7876
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7876,
    "end": 7877
  },
  {
    "type": "Numeric",
    "value": "0xA8",
    "start": 7878,
    "end": 7882
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7882,
    "end": 7883
  },
  {
    "type": "Numeric",
    "value": "0xE1",
    "start": 7884,
    "end": 7888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7888,
    "end": 7889
  },
  {
    "type": "Numeric",
    "value": "0xB4",
    "start": 7890,
    "end": 7894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7894,
    "end": 7895
  },
  {
    "type": "Numeric",
    "value": "0xA3",
    "start": 7896,
    "end": 7900
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7900,
    "end": 7901
  },
  {
    "type": "Numeric",
    "value": "0xE2",
    "start": 7902,
    "end": 7906
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7906,
    "end": 7907
  },
  {
    "type": "Numeric",
    "value": "0x80",
    "start": 7908,
    "end": 7912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7912,
    "end": 7913
  },
  {
    "type": "Numeric",
    "value": "0xA0",
    "start": 7914,
    "end": 7918
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7918,
    "end": 7919
  },
  {
    "type": "Numeric",
    "value": "0x0D",
    "start": 7920,
    "end": 7924
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7924,
    "end": 7925
  },
  {
    "type": "Numeric",
    "value": "0x0A",
    "start": 7926,
    "end": 7930
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7930,
    "end": 7931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7931,
    "end": 7932
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7945,
    "end": 7951
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 7952,
    "end": 7962
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7962,
    "end": 7963
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 7963,
    "end": 7975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7975,
    "end": 7976
  },
  {
    "type": "Identifier",
    "value": "bytes",
    "start": 7976,
    "end": 7981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7981,
    "end": 7982
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 7983,
    "end": 7991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7991,
    "end": 7992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7992,
    "end": 7993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8002,
    "end": 8003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8003,
    "end": 8004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8004,
    "end": 8005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8005,
    "end": 8006
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 8050,
    "end": 8060
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8060,
    "end": 8061
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 8061,
    "end": 8068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8068,
    "end": 8069
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8069,
    "end": 8072
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 8073,
    "end": 8081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8081,
    "end": 8082
  },
  {
    "type": "String",
    "value": "\"Check saving a file\"",
    "start": 8082,
    "end": 8103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8103,
    "end": 8104
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8113,
    "end": 8121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8122,
    "end": 8123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8123,
    "end": 8124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8125,
    "end": 8126
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8139,
    "end": 8142
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 8143,
    "end": 8151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8152,
    "end": 8153
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 8154,
    "end": 8165
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 8166,
    "end": 8167
  },
  {
    "type": "String",
    "value": "\"\\\\tmpUTF16LE.txt\"",
    "start": 8168,
    "end": 8186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8186,
    "end": 8187
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8200,
    "end": 8203
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 8204,
    "end": 8206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8207,
    "end": 8208
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8209,
    "end": 8212
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 8213,
    "end": 8224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8224,
    "end": 8225
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 8225,
    "end": 8235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8235,
    "end": 8236
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 8236,
    "end": 8238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8238,
    "end": 8239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8239,
    "end": 8240
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 8253,
    "end": 8255
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8255,
    "end": 8256
  },
  {
    "type": "Identifier",
    "value": "writeUtf16leBom",
    "start": 8256,
    "end": 8271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8271,
    "end": 8272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8272,
    "end": 8273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8273,
    "end": 8274
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8287,
    "end": 8290
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 8291,
    "end": 8296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8297,
    "end": 8298
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8299,
    "end": 8300
  },
  {
    "type": "Numeric",
    "value": "0x0054",
    "start": 8300,
    "end": 8306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8306,
    "end": 8307
  },
  {
    "type": "Numeric",
    "value": "0x00E8",
    "start": 8308,
    "end": 8314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8314,
    "end": 8315
  },
  {
    "type": "Numeric",
    "value": "0x1D23",
    "start": 8316,
    "end": 8322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8322,
    "end": 8323
  },
  {
    "type": "Numeric",
    "value": "0x2020",
    "start": 8324,
    "end": 8330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8330,
    "end": 8331
  },
  {
    "type": "Numeric",
    "value": "0x000D",
    "start": 8332,
    "end": 8338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8338,
    "end": 8339
  },
  {
    "type": "Numeric",
    "value": "0x000A",
    "start": 8340,
    "end": 8346
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8346,
    "end": 8347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8347,
    "end": 8348
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 8361,
    "end": 8366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8366,
    "end": 8367
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 8367,
    "end": 8374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8374,
    "end": 8375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8375,
    "end": 8383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8384,
    "end": 8385
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 8385,
    "end": 8388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8388,
    "end": 8389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8390,
    "end": 8391
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 8392,
    "end": 8394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8394,
    "end": 8395
  },
  {
    "type": "Identifier",
    "value": "writeUtf16CodePoint",
    "start": 8395,
    "end": 8414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8414,
    "end": 8415
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 8415,
    "end": 8418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8418,
    "end": 8419
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 8420,
    "end": 8425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8425,
    "end": 8426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8426,
    "end": 8427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8428,
    "end": 8429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8429,
    "end": 8430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8430,
    "end": 8431
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 8444,
    "end": 8446
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8446,
    "end": 8447
  },
  {
    "type": "Identifier",
    "value": "save",
    "start": 8447,
    "end": 8451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8451,
    "end": 8452
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 8452,
    "end": 8460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8460,
    "end": 8461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8461,
    "end": 8462
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8476,
    "end": 8479
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 8480,
    "end": 8489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8490,
    "end": 8491
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8492,
    "end": 8495
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 8496,
    "end": 8507
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8507,
    "end": 8508
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 8508,
    "end": 8518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8518,
    "end": 8519
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 8519,
    "end": 8527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8527,
    "end": 8528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8528,
    "end": 8529
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8542,
    "end": 8544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8545,
    "end": 8546
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 8546,
    "end": 8555
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8555,
    "end": 8556
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 8556,
    "end": 8564
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 8565,
    "end": 8568
  },
  {
    "type": "String",
    "value": "'utf16le'",
    "start": 8569,
    "end": 8578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8578,
    "end": 8579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8580,
    "end": 8581
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 8598,
    "end": 8603
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 8604,
    "end": 8609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8609,
    "end": 8610
  },
  {
    "type": "String",
    "value": "\"Incorrect encoding\"",
    "start": 8610,
    "end": 8630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8630,
    "end": 8631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8631,
    "end": 8632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8645,
    "end": 8646
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8659,
    "end": 8662
  },
  {
    "type": "Identifier",
    "value": "expectedBytes",
    "start": 8663,
    "end": 8676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8677,
    "end": 8678
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8679,
    "end": 8680
  },
  {
    "type": "Numeric",
    "value": "0xFF",
    "start": 8680,
    "end": 8684
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8684,
    "end": 8685
  },
  {
    "type": "Numeric",
    "value": "0xFE",
    "start": 8686,
    "end": 8690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8690,
    "end": 8691
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 8692,
    "end": 8696
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8696,
    "end": 8697
  },
  {
    "type": "Numeric",
    "value": "0x00",
    "start": 8698,
    "end": 8702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8702,
    "end": 8703
  },
  {
    "type": "Numeric",
    "value": "0xE8",
    "start": 8704,
    "end": 8708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8708,
    "end": 8709
  },
  {
    "type": "Numeric",
    "value": "0x00",
    "start": 8710,
    "end": 8714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8714,
    "end": 8715
  },
  {
    "type": "Numeric",
    "value": "0x23",
    "start": 8716,
    "end": 8720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8720,
    "end": 8721
  },
  {
    "type": "Numeric",
    "value": "0x1D",
    "start": 8722,
    "end": 8726
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8726,
    "end": 8727
  },
  {
    "type": "Numeric",
    "value": "0x20",
    "start": 8728,
    "end": 8732
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8732,
    "end": 8733
  },
  {
    "type": "Numeric",
    "value": "0x20",
    "start": 8734,
    "end": 8738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8738,
    "end": 8739
  },
  {
    "type": "Numeric",
    "value": "0x0D",
    "start": 8740,
    "end": 8744
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8744,
    "end": 8745
  },
  {
    "type": "Numeric",
    "value": "0x00",
    "start": 8746,
    "end": 8750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8750,
    "end": 8751
  },
  {
    "type": "Numeric",
    "value": "0x0A",
    "start": 8752,
    "end": 8756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8756,
    "end": 8757
  },
  {
    "type": "Numeric",
    "value": "0x00",
    "start": 8758,
    "end": 8762
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8762,
    "end": 8763
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 8776,
    "end": 8785
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8785,
    "end": 8786
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 8786,
    "end": 8791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8792,
    "end": 8793
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 8794,
    "end": 8795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8795,
    "end": 8796
  },
  {
    "type": "Identifier",
    "value": "expectedBytes",
    "start": 8809,
    "end": 8822
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8822,
    "end": 8823
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 8823,
    "end": 8830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8830,
    "end": 8831
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8831,
    "end": 8839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8840,
    "end": 8841
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 8841,
    "end": 8844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8844,
    "end": 8845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8846,
    "end": 8847
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8864,
    "end": 8867
  },
  {
    "type": "Identifier",
    "value": "byteVal",
    "start": 8868,
    "end": 8875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8876,
    "end": 8877
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 8878,
    "end": 8887
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8887,
    "end": 8888
  },
  {
    "type": "Identifier",
    "value": "readByte",
    "start": 8888,
    "end": 8896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8896,
    "end": 8897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8897,
    "end": 8898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8898,
    "end": 8899
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8916,
    "end": 8918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8919,
    "end": 8920
  },
  {
    "type": "Identifier",
    "value": "byteVal",
    "start": 8920,
    "end": 8927
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 8928,
    "end": 8931
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 8932,
    "end": 8935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8935,
    "end": 8936
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8937,
    "end": 8938
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 8959,
    "end": 8964
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 8965,
    "end": 8970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8970,
    "end": 8971
  },
  {
    "type": "String",
    "value": "\"Incorrect byte value\"",
    "start": 8971,
    "end": 8993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8993,
    "end": 8994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8994,
    "end": 8995
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9012,
    "end": 9013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9026,
    "end": 9027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9027,
    "end": 9028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9028,
    "end": 9029
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9042,
    "end": 9048
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 9049,
    "end": 9053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9053,
    "end": 9054
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9063,
    "end": 9064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9064,
    "end": 9065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9065,
    "end": 9066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9066,
    "end": 9067
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 9073,
    "end": 9083
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9083,
    "end": 9084
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 9084,
    "end": 9091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9091,
    "end": 9092
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9092,
    "end": 9095
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 9096,
    "end": 9104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9104,
    "end": 9105
  },
  {
    "type": "String",
    "value": "\"Check reading past buffer asserts\"",
    "start": 9105,
    "end": 9140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9140,
    "end": 9141
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9146,
    "end": 9154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9155,
    "end": 9156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9156,
    "end": 9157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9158,
    "end": 9159
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9168,
    "end": 9171
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 9172,
    "end": 9174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9175,
    "end": 9176
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9177,
    "end": 9180
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 9181,
    "end": 9192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9192,
    "end": 9193
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 9193,
    "end": 9203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9203,
    "end": 9204
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 9204,
    "end": 9215
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 9216,
    "end": 9217
  },
  {
    "type": "String",
    "value": "\"\\\\UTF8BOM.txt\"",
    "start": 9218,
    "end": 9233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9233,
    "end": 9234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9234,
    "end": 9235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9244,
    "end": 9247
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 9248,
    "end": 9254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9255,
    "end": 9256
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 9257,
    "end": 9259
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9259,
    "end": 9260
  },
  {
    "type": "Identifier",
    "value": "readByte",
    "start": 9260,
    "end": 9268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9268,
    "end": 9269
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 9269,
    "end": 9272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9272,
    "end": 9273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9273,
    "end": 9274
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9283,
    "end": 9289
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 9290,
    "end": 9294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9294,
    "end": 9295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9300,
    "end": 9301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9301,
    "end": 9302
  },
  {
    "type": "String",
    "value": "\"read beyond buffer length\"",
    "start": 9303,
    "end": 9330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9330,
    "end": 9331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9331,
    "end": 9332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9332,
    "end": 9333
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 9338,
    "end": 9348
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9348,
    "end": 9349
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 9349,
    "end": 9356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9356,
    "end": 9357
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9357,
    "end": 9360
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 9361,
    "end": 9369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9369,
    "end": 9370
  },
  {
    "type": "String",
    "value": "\"Check writing past buffer asserts\"",
    "start": 9370,
    "end": 9405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9405,
    "end": 9406
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9411,
    "end": 9419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9420,
    "end": 9421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9421,
    "end": 9422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9423,
    "end": 9424
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9433,
    "end": 9436
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 9437,
    "end": 9439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9440,
    "end": 9441
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9442,
    "end": 9445
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 9446,
    "end": 9457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9457,
    "end": 9458
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 9458,
    "end": 9468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9468,
    "end": 9469
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 9469,
    "end": 9480
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 9481,
    "end": 9482
  },
  {
    "type": "String",
    "value": "\"\\\\UTF8BOM.txt\"",
    "start": 9483,
    "end": 9498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9498,
    "end": 9499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9499,
    "end": 9500
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 9509,
    "end": 9511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9511,
    "end": 9512
  },
  {
    "type": "Identifier",
    "value": "writeByte",
    "start": 9512,
    "end": 9521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9521,
    "end": 9522
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 9522,
    "end": 9523
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9523,
    "end": 9524
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 9525,
    "end": 9528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9528,
    "end": 9529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9529,
    "end": 9530
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9539,
    "end": 9545
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 9546,
    "end": 9550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9550,
    "end": 9551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9556,
    "end": 9557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9557,
    "end": 9558
  },
  {
    "type": "String",
    "value": "\"write beyond buffer length\"",
    "start": 9559,
    "end": 9587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9587,
    "end": 9588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9588,
    "end": 9589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9589,
    "end": 9590
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 9630,
    "end": 9640
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9640,
    "end": 9641
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 9641,
    "end": 9648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9648,
    "end": 9649
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9649,
    "end": 9652
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 9653,
    "end": 9661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9661,
    "end": 9662
  },
  {
    "type": "String",
    "value": "\"Read non-BMP utf16 chars\"",
    "start": 9662,
    "end": 9688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9688,
    "end": 9689
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9698,
    "end": 9706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9707,
    "end": 9708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9708,
    "end": 9709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9710,
    "end": 9711
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9724,
    "end": 9727
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 9728,
    "end": 9737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9738,
    "end": 9739
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9740,
    "end": 9743
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 9744,
    "end": 9755
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9755,
    "end": 9756
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 9756,
    "end": 9766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9766,
    "end": 9767
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 9767,
    "end": 9778
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 9779,
    "end": 9780
  },
  {
    "type": "String",
    "value": "\"\\\\utf16leNonBmp.txt\"",
    "start": 9781,
    "end": 9802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9802,
    "end": 9803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9803,
    "end": 9804
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 9817,
    "end": 9819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9820,
    "end": 9821
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 9821,
    "end": 9830
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9830,
    "end": 9831
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 9831,
    "end": 9839
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 9840,
    "end": 9843
  },
  {
    "type": "String",
    "value": "'utf16le'",
    "start": 9844,
    "end": 9853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9853,
    "end": 9854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9855,
    "end": 9856
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 9873,
    "end": 9878
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 9879,
    "end": 9884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9884,
    "end": 9885
  },
  {
    "type": "String",
    "value": "\"Incorrect encoding\"",
    "start": 9885,
    "end": 9905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9905,
    "end": 9906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9906,
    "end": 9907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9920,
    "end": 9921
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9935,
    "end": 9938
  },
  {
    "type": "Identifier",
    "value": "codePoints",
    "start": 9939,
    "end": 9949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9950,
    "end": 9951
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9952,
    "end": 9953
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9953,
    "end": 9954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9954,
    "end": 9955
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 9968,
    "end": 9971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9972,
    "end": 9973
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9973,
    "end": 9976
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 9977,
    "end": 9978
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9979,
    "end": 9980
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 9981,
    "end": 9982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9982,
    "end": 9983
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 9984,
    "end": 9985
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9986,
    "end": 9987
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 9988,
    "end": 9989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9989,
    "end": 9990
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 9991,
    "end": 9992
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 9992,
    "end": 9994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9994,
    "end": 9995
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9996,
    "end": 9997
  },
  {
    "type": "Identifier",
    "value": "codePoints",
    "start": 10014,
    "end": 10024
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10024,
    "end": 10025
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 10025,
    "end": 10029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10029,
    "end": 10030
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 10030,
    "end": 10039
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10039,
    "end": 10040
  },
  {
    "type": "Identifier",
    "value": "readUtf16CodePoint",
    "start": 10040,
    "end": 10058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10058,
    "end": 10059
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 10059,
    "end": 10064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10064,
    "end": 10065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10065,
    "end": 10066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10066,
    "end": 10067
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10080,
    "end": 10081
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10094,
    "end": 10097
  },
  {
    "type": "Identifier",
    "value": "expectedCodePoints",
    "start": 10098,
    "end": 10116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10117,
    "end": 10118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10119,
    "end": 10120
  },
  {
    "type": "Numeric",
    "value": "0x10480",
    "start": 10120,
    "end": 10127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10127,
    "end": 10128
  },
  {
    "type": "Numeric",
    "value": "0x10481",
    "start": 10129,
    "end": 10136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10136,
    "end": 10137
  },
  {
    "type": "Numeric",
    "value": "0x10482",
    "start": 10138,
    "end": 10145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10145,
    "end": 10146
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 10147,
    "end": 10151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10151,
    "end": 10152
  },
  {
    "type": "Numeric",
    "value": "0x68",
    "start": 10153,
    "end": 10157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10157,
    "end": 10158
  },
  {
    "type": "Numeric",
    "value": "0x69",
    "start": 10159,
    "end": 10163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 10163,
    "end": 10164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10164,
    "end": 10165
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10178,
    "end": 10184
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 10185,
    "end": 10195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10195,
    "end": 10196
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 10196,
    "end": 10208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10208,
    "end": 10209
  },
  {
    "type": "Identifier",
    "value": "codePoints",
    "start": 10209,
    "end": 10219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10219,
    "end": 10220
  },
  {
    "type": "Identifier",
    "value": "expectedCodePoints",
    "start": 10221,
    "end": 10239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10239,
    "end": 10240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10240,
    "end": 10241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10250,
    "end": 10251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10251,
    "end": 10252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10252,
    "end": 10253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10253,
    "end": 10254
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 10260,
    "end": 10270
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10270,
    "end": 10271
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 10271,
    "end": 10278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10278,
    "end": 10279
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10279,
    "end": 10282
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 10283,
    "end": 10291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10291,
    "end": 10292
  },
  {
    "type": "String",
    "value": "\"Read non-BMP utf8 chars\"",
    "start": 10292,
    "end": 10317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10317,
    "end": 10318
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10327,
    "end": 10335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10336,
    "end": 10337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10337,
    "end": 10338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10339,
    "end": 10340
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10353,
    "end": 10356
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 10357,
    "end": 10366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10367,
    "end": 10368
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10369,
    "end": 10372
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 10373,
    "end": 10384
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10384,
    "end": 10385
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 10385,
    "end": 10395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10395,
    "end": 10396
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 10396,
    "end": 10407
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 10408,
    "end": 10409
  },
  {
    "type": "String",
    "value": "\"\\\\utf8NonBmp.txt\"",
    "start": 10410,
    "end": 10428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10428,
    "end": 10429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10429,
    "end": 10430
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 10443,
    "end": 10445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10446,
    "end": 10447
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 10447,
    "end": 10456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10456,
    "end": 10457
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 10457,
    "end": 10465
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 10466,
    "end": 10469
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 10470,
    "end": 10476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10476,
    "end": 10477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10478,
    "end": 10479
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 10496,
    "end": 10501
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 10502,
    "end": 10507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10507,
    "end": 10508
  },
  {
    "type": "String",
    "value": "\"Incorrect encoding\"",
    "start": 10508,
    "end": 10528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10528,
    "end": 10529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10529,
    "end": 10530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10543,
    "end": 10544
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10558,
    "end": 10561
  },
  {
    "type": "Identifier",
    "value": "codePoints",
    "start": 10562,
    "end": 10572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10573,
    "end": 10574
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10575,
    "end": 10576
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 10576,
    "end": 10577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10577,
    "end": 10578
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 10591,
    "end": 10594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10595,
    "end": 10596
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10596,
    "end": 10599
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 10600,
    "end": 10601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10602,
    "end": 10603
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 10604,
    "end": 10605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10605,
    "end": 10606
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 10607,
    "end": 10608
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10609,
    "end": 10610
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 10611,
    "end": 10612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10612,
    "end": 10613
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 10614,
    "end": 10615
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 10615,
    "end": 10617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10617,
    "end": 10618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10619,
    "end": 10620
  },
  {
    "type": "Identifier",
    "value": "codePoints",
    "start": 10637,
    "end": 10647
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10647,
    "end": 10648
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 10648,
    "end": 10652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10652,
    "end": 10653
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 10653,
    "end": 10662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10662,
    "end": 10663
  },
  {
    "type": "Identifier",
    "value": "readUtf8CodePoint",
    "start": 10663,
    "end": 10680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10680,
    "end": 10681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10681,
    "end": 10682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10682,
    "end": 10683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10683,
    "end": 10684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10697,
    "end": 10698
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10711,
    "end": 10714
  },
  {
    "type": "Identifier",
    "value": "expectedCodePoints",
    "start": 10715,
    "end": 10733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10734,
    "end": 10735
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10736,
    "end": 10737
  },
  {
    "type": "Numeric",
    "value": "0x10480",
    "start": 10737,
    "end": 10744
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10744,
    "end": 10745
  },
  {
    "type": "Numeric",
    "value": "0x10481",
    "start": 10746,
    "end": 10753
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10753,
    "end": 10754
  },
  {
    "type": "Numeric",
    "value": "0x10482",
    "start": 10755,
    "end": 10762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10762,
    "end": 10763
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 10764,
    "end": 10768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10768,
    "end": 10769
  },
  {
    "type": "Numeric",
    "value": "0x68",
    "start": 10770,
    "end": 10774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10774,
    "end": 10775
  },
  {
    "type": "Numeric",
    "value": "0x69",
    "start": 10776,
    "end": 10780
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 10780,
    "end": 10781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10781,
    "end": 10782
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10795,
    "end": 10801
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 10802,
    "end": 10812
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10812,
    "end": 10813
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 10813,
    "end": 10825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10825,
    "end": 10826
  },
  {
    "type": "Identifier",
    "value": "codePoints",
    "start": 10826,
    "end": 10836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10836,
    "end": 10837
  },
  {
    "type": "Identifier",
    "value": "expectedCodePoints",
    "start": 10838,
    "end": 10856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10856,
    "end": 10857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10857,
    "end": 10858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10867,
    "end": 10868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10868,
    "end": 10869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10869,
    "end": 10870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10870,
    "end": 10871
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 10877,
    "end": 10887
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10887,
    "end": 10888
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 10888,
    "end": 10895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10895,
    "end": 10896
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10896,
    "end": 10899
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 10900,
    "end": 10908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10908,
    "end": 10909
  },
  {
    "type": "String",
    "value": "\"Write non-BMP utf8 chars\"",
    "start": 10909,
    "end": 10935
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10935,
    "end": 10936
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10945,
    "end": 10953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10954,
    "end": 10955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10955,
    "end": 10956
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10957,
    "end": 10958
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10971,
    "end": 10974
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 10975,
    "end": 10983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10984,
    "end": 10985
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 10986,
    "end": 10997
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 10998,
    "end": 10999
  },
  {
    "type": "String",
    "value": "\"\\\\tmpUTF8nonBmp.txt\"",
    "start": 11000,
    "end": 11021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11021,
    "end": 11022
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11035,
    "end": 11038
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 11039,
    "end": 11041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11042,
    "end": 11043
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 11044,
    "end": 11047
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 11048,
    "end": 11059
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11059,
    "end": 11060
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 11060,
    "end": 11070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11070,
    "end": 11071
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 11071,
    "end": 11073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11073,
    "end": 11074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11074,
    "end": 11075
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11088,
    "end": 11091
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 11092,
    "end": 11097
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11098,
    "end": 11099
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 11100,
    "end": 11101
  },
  {
    "type": "Numeric",
    "value": "0x10480",
    "start": 11101,
    "end": 11108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11108,
    "end": 11109
  },
  {
    "type": "Numeric",
    "value": "0x10481",
    "start": 11110,
    "end": 11117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11117,
    "end": 11118
  },
  {
    "type": "Numeric",
    "value": "0x10482",
    "start": 11119,
    "end": 11126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11126,
    "end": 11127
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 11128,
    "end": 11132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11132,
    "end": 11133
  },
  {
    "type": "Numeric",
    "value": "0x68",
    "start": 11134,
    "end": 11138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11138,
    "end": 11139
  },
  {
    "type": "Numeric",
    "value": "0x69",
    "start": 11140,
    "end": 11144
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 11144,
    "end": 11145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11145,
    "end": 11146
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 11159,
    "end": 11164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11164,
    "end": 11165
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 11165,
    "end": 11172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11172,
    "end": 11173
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 11173,
    "end": 11181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11182,
    "end": 11183
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 11183,
    "end": 11186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11186,
    "end": 11187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11188,
    "end": 11189
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 11190,
    "end": 11192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11192,
    "end": 11193
  },
  {
    "type": "Identifier",
    "value": "writeUtf8CodePoint",
    "start": 11193,
    "end": 11211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11211,
    "end": 11212
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 11212,
    "end": 11215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11215,
    "end": 11216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11216,
    "end": 11217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11218,
    "end": 11219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11219,
    "end": 11220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11220,
    "end": 11221
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 11234,
    "end": 11236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11236,
    "end": 11237
  },
  {
    "type": "Identifier",
    "value": "save",
    "start": 11237,
    "end": 11241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11241,
    "end": 11242
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 11242,
    "end": 11250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11250,
    "end": 11251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11251,
    "end": 11252
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11266,
    "end": 11269
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 11270,
    "end": 11279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11280,
    "end": 11281
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 11282,
    "end": 11285
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 11286,
    "end": 11297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11297,
    "end": 11298
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 11298,
    "end": 11308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11308,
    "end": 11309
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 11309,
    "end": 11317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11317,
    "end": 11318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11318,
    "end": 11319
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 11332,
    "end": 11334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11335,
    "end": 11336
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 11336,
    "end": 11345
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11345,
    "end": 11346
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 11346,
    "end": 11354
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 11355,
    "end": 11358
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 11359,
    "end": 11365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11365,
    "end": 11366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11367,
    "end": 11368
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 11385,
    "end": 11390
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 11391,
    "end": 11396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11396,
    "end": 11397
  },
  {
    "type": "String",
    "value": "\"Incorrect encoding\"",
    "start": 11397,
    "end": 11417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11417,
    "end": 11418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11418,
    "end": 11419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11432,
    "end": 11433
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11446,
    "end": 11449
  },
  {
    "type": "Identifier",
    "value": "expectedBytes",
    "start": 11450,
    "end": 11463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11464,
    "end": 11465
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 11466,
    "end": 11467
  },
  {
    "type": "Numeric",
    "value": "0xF0",
    "start": 11467,
    "end": 11471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11471,
    "end": 11472
  },
  {
    "type": "Numeric",
    "value": "0x90",
    "start": 11473,
    "end": 11477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11477,
    "end": 11478
  },
  {
    "type": "Numeric",
    "value": "0x92",
    "start": 11479,
    "end": 11483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11483,
    "end": 11484
  },
  {
    "type": "Numeric",
    "value": "0x80",
    "start": 11485,
    "end": 11489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11489,
    "end": 11490
  },
  {
    "type": "Numeric",
    "value": "0xF0",
    "start": 11491,
    "end": 11495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11495,
    "end": 11496
  },
  {
    "type": "Numeric",
    "value": "0x90",
    "start": 11497,
    "end": 11501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11501,
    "end": 11502
  },
  {
    "type": "Numeric",
    "value": "0x92",
    "start": 11503,
    "end": 11507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11507,
    "end": 11508
  },
  {
    "type": "Numeric",
    "value": "0x81",
    "start": 11509,
    "end": 11513
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11513,
    "end": 11514
  },
  {
    "type": "Numeric",
    "value": "0xF0",
    "start": 11515,
    "end": 11519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11519,
    "end": 11520
  },
  {
    "type": "Numeric",
    "value": "0x90",
    "start": 11521,
    "end": 11525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11525,
    "end": 11526
  },
  {
    "type": "Numeric",
    "value": "0x92",
    "start": 11527,
    "end": 11531
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11531,
    "end": 11532
  },
  {
    "type": "Numeric",
    "value": "0x82",
    "start": 11533,
    "end": 11537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11537,
    "end": 11538
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 11539,
    "end": 11543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11543,
    "end": 11544
  },
  {
    "type": "Numeric",
    "value": "0x68",
    "start": 11545,
    "end": 11549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11549,
    "end": 11550
  },
  {
    "type": "Numeric",
    "value": "0x69",
    "start": 11551,
    "end": 11555
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 11555,
    "end": 11556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11556,
    "end": 11557
  },
  {
    "type": "Identifier",
    "value": "expectedBytes",
    "start": 11570,
    "end": 11583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11583,
    "end": 11584
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 11584,
    "end": 11591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11591,
    "end": 11592
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 11592,
    "end": 11600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11601,
    "end": 11602
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 11602,
    "end": 11605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11605,
    "end": 11606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11607,
    "end": 11608
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11625,
    "end": 11628
  },
  {
    "type": "Identifier",
    "value": "byteVal",
    "start": 11629,
    "end": 11636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11637,
    "end": 11638
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 11639,
    "end": 11648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11648,
    "end": 11649
  },
  {
    "type": "Identifier",
    "value": "readByte",
    "start": 11649,
    "end": 11657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11657,
    "end": 11658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11658,
    "end": 11659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11659,
    "end": 11660
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 11677,
    "end": 11679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11680,
    "end": 11681
  },
  {
    "type": "Identifier",
    "value": "byteVal",
    "start": 11681,
    "end": 11688
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 11689,
    "end": 11692
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 11693,
    "end": 11696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11696,
    "end": 11697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11698,
    "end": 11699
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 11720,
    "end": 11725
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 11726,
    "end": 11731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11731,
    "end": 11732
  },
  {
    "type": "String",
    "value": "\"Incorrect byte value\"",
    "start": 11732,
    "end": 11754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11754,
    "end": 11755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11755,
    "end": 11756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11773,
    "end": 11774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11787,
    "end": 11788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11788,
    "end": 11789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11789,
    "end": 11790
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 11803,
    "end": 11809
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 11810,
    "end": 11814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11814,
    "end": 11815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11824,
    "end": 11825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11825,
    "end": 11826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11826,
    "end": 11827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11827,
    "end": 11828
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 11834,
    "end": 11844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11844,
    "end": 11845
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 11845,
    "end": 11852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11852,
    "end": 11853
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 11853,
    "end": 11856
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 11857,
    "end": 11865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11865,
    "end": 11866
  },
  {
    "type": "String",
    "value": "\"Test invalid lead UTF8 byte\"",
    "start": 11866,
    "end": 11895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11895,
    "end": 11896
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 11905,
    "end": 11913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11914,
    "end": 11915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11915,
    "end": 11916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11917,
    "end": 11918
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11931,
    "end": 11934
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 11935,
    "end": 11943
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11944,
    "end": 11945
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 11946,
    "end": 11957
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 11958,
    "end": 11959
  },
  {
    "type": "String",
    "value": "\"\\\\utf8BadLeadByte.txt\"",
    "start": 11960,
    "end": 11983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11983,
    "end": 11984
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11997,
    "end": 12000
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 12001,
    "end": 12003
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12004,
    "end": 12005
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12006,
    "end": 12009
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 12010,
    "end": 12021
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12021,
    "end": 12022
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 12022,
    "end": 12032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12032,
    "end": 12033
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12033,
    "end": 12041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12041,
    "end": 12042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12042,
    "end": 12043
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 12056,
    "end": 12062
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 12063,
    "end": 12067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12067,
    "end": 12068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12077,
    "end": 12078
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12078,
    "end": 12079
  },
  {
    "type": "String",
    "value": "\"Invalid UTF8 byte sequence at index: 4\"",
    "start": 12080,
    "end": 12120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12120,
    "end": 12121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12121,
    "end": 12122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12122,
    "end": 12123
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 12129,
    "end": 12139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12139,
    "end": 12140
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 12140,
    "end": 12147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12147,
    "end": 12148
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12148,
    "end": 12151
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 12152,
    "end": 12160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12160,
    "end": 12161
  },
  {
    "type": "String",
    "value": "\"Test invalid tail UTF8 byte\"",
    "start": 12161,
    "end": 12190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12190,
    "end": 12191
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 12200,
    "end": 12208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12209,
    "end": 12210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12210,
    "end": 12211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12212,
    "end": 12213
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12226,
    "end": 12229
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12230,
    "end": 12238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12239,
    "end": 12240
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 12241,
    "end": 12252
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 12253,
    "end": 12254
  },
  {
    "type": "String",
    "value": "\"\\\\utf8InvalidTail.txt\"",
    "start": 12255,
    "end": 12278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12278,
    "end": 12279
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12292,
    "end": 12295
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 12296,
    "end": 12298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12299,
    "end": 12300
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12301,
    "end": 12304
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 12305,
    "end": 12316
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12316,
    "end": 12317
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 12317,
    "end": 12327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12327,
    "end": 12328
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12328,
    "end": 12336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12336,
    "end": 12337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12337,
    "end": 12338
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 12351,
    "end": 12357
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 12358,
    "end": 12362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12362,
    "end": 12363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12372,
    "end": 12373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12373,
    "end": 12374
  },
  {
    "type": "String",
    "value": "\"Trailing byte invalid at index: 8\"",
    "start": 12375,
    "end": 12410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12410,
    "end": 12411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12411,
    "end": 12412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12412,
    "end": 12413
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 12419,
    "end": 12429
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12429,
    "end": 12430
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 12430,
    "end": 12437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12437,
    "end": 12438
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12438,
    "end": 12441
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 12442,
    "end": 12450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12450,
    "end": 12451
  },
  {
    "type": "String",
    "value": "\"Test ANSI fails validation\"",
    "start": 12451,
    "end": 12479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12479,
    "end": 12480
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 12489,
    "end": 12497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12498,
    "end": 12499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12499,
    "end": 12500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12501,
    "end": 12502
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12515,
    "end": 12518
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12519,
    "end": 12527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12528,
    "end": 12529
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 12530,
    "end": 12541
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 12542,
    "end": 12543
  },
  {
    "type": "String",
    "value": "\"\\\\ansi.txt\"",
    "start": 12544,
    "end": 12556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12556,
    "end": 12557
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12570,
    "end": 12573
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 12574,
    "end": 12576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12577,
    "end": 12578
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12579,
    "end": 12582
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 12583,
    "end": 12594
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12594,
    "end": 12595
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 12595,
    "end": 12605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12605,
    "end": 12606
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12606,
    "end": 12614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12614,
    "end": 12615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12615,
    "end": 12616
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 12629,
    "end": 12635
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 12636,
    "end": 12640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12640,
    "end": 12641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12650,
    "end": 12651
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12651,
    "end": 12652
  },
  {
    "type": "String",
    "value": "\"Trailing byte invalid at index: 6\"",
    "start": 12653,
    "end": 12688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12688,
    "end": 12689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12689,
    "end": 12690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12690,
    "end": 12691
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 12697,
    "end": 12707
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12707,
    "end": 12708
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 12708,
    "end": 12715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12715,
    "end": 12716
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12716,
    "end": 12719
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 12720,
    "end": 12728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12728,
    "end": 12729
  },
  {
    "type": "String",
    "value": "\"Test UTF-16LE with invalid surrogate trail fails\"",
    "start": 12729,
    "end": 12779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12779,
    "end": 12780
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 12789,
    "end": 12797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12798,
    "end": 12799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12799,
    "end": 12800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12801,
    "end": 12802
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12815,
    "end": 12818
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12819,
    "end": 12827
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12828,
    "end": 12829
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 12830,
    "end": 12841
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 12842,
    "end": 12843
  },
  {
    "type": "String",
    "value": "\"\\\\utf16leInvalidSurrogate.txt\"",
    "start": 12844,
    "end": 12875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12875,
    "end": 12876
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12889,
    "end": 12892
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 12893,
    "end": 12895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12896,
    "end": 12897
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12898,
    "end": 12901
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 12902,
    "end": 12913
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12913,
    "end": 12914
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 12914,
    "end": 12924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12924,
    "end": 12925
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12925,
    "end": 12933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12933,
    "end": 12934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12934,
    "end": 12935
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 12948,
    "end": 12954
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 12955,
    "end": 12959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12959,
    "end": 12960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12969,
    "end": 12970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12970,
    "end": 12971
  },
  {
    "type": "String",
    "value": "\"Trail surrogate has an invalid value\"",
    "start": 12972,
    "end": 13010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13010,
    "end": 13011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13011,
    "end": 13012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13012,
    "end": 13013
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 13019,
    "end": 13029
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13029,
    "end": 13030
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 13030,
    "end": 13037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13037,
    "end": 13038
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13038,
    "end": 13041
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 13042,
    "end": 13050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13050,
    "end": 13051
  },
  {
    "type": "String",
    "value": "\"Test UTF-16BE with invalid surrogate head fails\"",
    "start": 13051,
    "end": 13100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13100,
    "end": 13101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 13110,
    "end": 13118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13119,
    "end": 13120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13120,
    "end": 13121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13122,
    "end": 13123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13136,
    "end": 13139
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 13140,
    "end": 13148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13149,
    "end": 13150
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 13151,
    "end": 13162
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 13163,
    "end": 13164
  },
  {
    "type": "String",
    "value": "\"\\\\UTF16BEInvalidSurrogate.txt\"",
    "start": 13165,
    "end": 13196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13196,
    "end": 13197
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13210,
    "end": 13213
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13214,
    "end": 13216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13217,
    "end": 13218
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13219,
    "end": 13222
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 13223,
    "end": 13234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13234,
    "end": 13235
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 13235,
    "end": 13245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13245,
    "end": 13246
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 13246,
    "end": 13254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13254,
    "end": 13255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13255,
    "end": 13256
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 13269,
    "end": 13275
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 13276,
    "end": 13280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13280,
    "end": 13281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13290,
    "end": 13291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13291,
    "end": 13292
  },
  {
    "type": "String",
    "value": "\"Byte sequence starts with a trail surrogate\"",
    "start": 13293,
    "end": 13338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13338,
    "end": 13339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13339,
    "end": 13340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13340,
    "end": 13341
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 13347,
    "end": 13357
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13357,
    "end": 13358
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 13358,
    "end": 13365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13365,
    "end": 13366
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13366,
    "end": 13369
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 13370,
    "end": 13378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13378,
    "end": 13379
  },
  {
    "type": "String",
    "value": "\"Test UTF-16LE with missing trail surrogate fails\"",
    "start": 13379,
    "end": 13429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13429,
    "end": 13430
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 13439,
    "end": 13447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13448,
    "end": 13449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13449,
    "end": 13450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13451,
    "end": 13452
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13465,
    "end": 13468
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 13469,
    "end": 13477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13478,
    "end": 13479
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 13480,
    "end": 13491
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 13492,
    "end": 13493
  },
  {
    "type": "String",
    "value": "\"\\\\utf16leMissingTrailSurrogate.txt\"",
    "start": 13494,
    "end": 13530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13530,
    "end": 13531
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13544,
    "end": 13547
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13548,
    "end": 13550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13551,
    "end": 13552
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13553,
    "end": 13556
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 13557,
    "end": 13568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13568,
    "end": 13569
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 13569,
    "end": 13579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13579,
    "end": 13580
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 13580,
    "end": 13588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13588,
    "end": 13589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13589,
    "end": 13590
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 13603,
    "end": 13609
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 13610,
    "end": 13614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13614,
    "end": 13615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13624,
    "end": 13625
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13625,
    "end": 13626
  },
  {
    "type": "String",
    "value": "\"Trail surrogate has an invalid value\"",
    "start": 13627,
    "end": 13665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13665,
    "end": 13666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13666,
    "end": 13667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13667,
    "end": 13668
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 13700,
    "end": 13710
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13710,
    "end": 13711
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 13711,
    "end": 13718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13718,
    "end": 13719
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13719,
    "end": 13722
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 13723,
    "end": 13731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13731,
    "end": 13732
  },
  {
    "type": "String",
    "value": "\"Count character occurrences\"",
    "start": 13732,
    "end": 13761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13761,
    "end": 13762
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 13771,
    "end": 13779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13780,
    "end": 13781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13781,
    "end": 13782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13783,
    "end": 13784
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13797,
    "end": 13800
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 13801,
    "end": 13809
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13810,
    "end": 13811
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 13812,
    "end": 13823
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 13824,
    "end": 13825
  },
  {
    "type": "String",
    "value": "\"\\\\charCountASCII.txt\"",
    "start": 13826,
    "end": 13848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13848,
    "end": 13849
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13862,
    "end": 13865
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13866,
    "end": 13868
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13869,
    "end": 13870
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13871,
    "end": 13874
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 13875,
    "end": 13886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13886,
    "end": 13887
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 13887,
    "end": 13897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13897,
    "end": 13898
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 13898,
    "end": 13906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13906,
    "end": 13907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13907,
    "end": 13908
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13921,
    "end": 13924
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 13925,
    "end": 13931
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13932,
    "end": 13933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13934,
    "end": 13935
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13935,
    "end": 13937
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13937,
    "end": 13938
  },
  {
    "type": "Identifier",
    "value": "countCR",
    "start": 13938,
    "end": 13945
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 13946,
    "end": 13949
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 13950,
    "end": 13951
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 13952,
    "end": 13954
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13955,
    "end": 13957
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13957,
    "end": 13958
  },
  {
    "type": "Identifier",
    "value": "countLF",
    "start": 13958,
    "end": 13965
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 13966,
    "end": 13969
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 13970,
    "end": 13971
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 13972,
    "end": 13974
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13975,
    "end": 13977
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13977,
    "end": 13978
  },
  {
    "type": "Identifier",
    "value": "countCRLF",
    "start": 13978,
    "end": 13987
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 13988,
    "end": 13991
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 13992,
    "end": 13993
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 13994,
    "end": 13996
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13997,
    "end": 13999
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13999,
    "end": 14000
  },
  {
    "type": "Identifier",
    "value": "countHT",
    "start": 14000,
    "end": 14007
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 14008,
    "end": 14011
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 14012,
    "end": 14013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14013,
    "end": 14014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14014,
    "end": 14015
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 14028,
    "end": 14034
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 14035,
    "end": 14041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14041,
    "end": 14042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14051,
    "end": 14052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14052,
    "end": 14053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14053,
    "end": 14054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14054,
    "end": 14055
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 14095,
    "end": 14105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14105,
    "end": 14106
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 14106,
    "end": 14113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14113,
    "end": 14114
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 14114,
    "end": 14117
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 14118,
    "end": 14126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14126,
    "end": 14127
  },
  {
    "type": "String",
    "value": "\"Test file with control character\"",
    "start": 14127,
    "end": 14161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14161,
    "end": 14162
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 14171,
    "end": 14179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14180,
    "end": 14181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14181,
    "end": 14182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14183,
    "end": 14184
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 14197,
    "end": 14200
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 14201,
    "end": 14209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14210,
    "end": 14211
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 14212,
    "end": 14223
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 14224,
    "end": 14225
  },
  {
    "type": "String",
    "value": "\"\\\\controlChar.txt\"",
    "start": 14226,
    "end": 14245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14245,
    "end": 14246
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 14259,
    "end": 14262
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 14263,
    "end": 14265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14266,
    "end": 14267
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 14268,
    "end": 14271
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 14272,
    "end": 14283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14283,
    "end": 14284
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 14284,
    "end": 14294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14294,
    "end": 14295
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 14295,
    "end": 14303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14303,
    "end": 14304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14304,
    "end": 14305
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 14318,
    "end": 14324
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 14325,
    "end": 14329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14329,
    "end": 14330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14339,
    "end": 14340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14340,
    "end": 14341
  },
  {
    "type": "String",
    "value": "\"Codepoint at index: 3 has control value: 8\"",
    "start": 14342,
    "end": 14386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14386,
    "end": 14387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14387,
    "end": 14388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14388,
    "end": 14389
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 14395,
    "end": 14401
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 14402,
    "end": 14412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14412,
    "end": 14413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14414,
    "end": 14415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14415,
    "end": 14416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14416,
    "end": 14417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14417,
    "end": 14418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14418,
    "end": 14419
  }
]
```

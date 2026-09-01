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
        "name": "FooNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 34
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 47
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 49,
                  "end": 54
                },
                "start": 49,
                "end": 54
              },
              "start": 47,
              "end": 54
            },
            "accessibility": null,
            "static": false,
            "start": 43,
            "end": 55
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 68
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
                    "name": "Node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 74
                  },
                  "typeArguments": null,
                  "start": 70,
                  "end": 74
                },
                "start": 70,
                "end": 76
              },
              "start": 68,
              "end": 76
            },
            "accessibility": null,
            "static": false,
            "start": 60,
            "end": 77
          }
        ],
        "start": 37,
        "end": 79
      },
      "declare": false,
      "start": 22,
      "end": 80
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BarNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 94
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 109,
                  "end": 114
                },
                "start": 109,
                "end": 114
              },
              "start": 107,
              "end": 114
            },
            "accessibility": null,
            "static": false,
            "start": 103,
            "end": 115
          }
        ],
        "start": 97,
        "end": 117
      },
      "declare": false,
      "start": 82,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 128
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
              "name": "FooNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 138
            },
            "typeArguments": null,
            "start": 131,
            "end": 138
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BarNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 148
            },
            "typeArguments": null,
            "start": 141,
            "end": 148
          }
        ],
        "start": 131,
        "end": 148
      },
      "declare": false,
      "start": 119,
      "end": 149
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 164
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "document",
                  "raw": "'document'",
                  "start": 179,
                  "end": 189
                },
                "start": 179,
                "end": 189
              },
              "start": 177,
              "end": 189
            },
            "accessibility": null,
            "static": false,
            "start": 173,
            "end": 190
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 203
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
                    "name": "Node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 209
                  },
                  "typeArguments": null,
                  "start": 205,
                  "end": 209
                },
                "start": 205,
                "end": 211
              },
              "start": 203,
              "end": 211
            },
            "accessibility": null,
            "static": false,
            "start": 195,
            "end": 212
          }
        ],
        "start": 167,
        "end": 214
      },
      "declare": false,
      "start": 151,
      "end": 215
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 240
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 247,
              "end": 254
            },
            "start": 245,
            "end": 254
          },
          "start": 241,
          "end": 254
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 261
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 269
              },
              "typeArguments": null,
              "start": 265,
              "end": 269
            },
            "start": 265,
            "end": 269
          },
          "start": 257,
          "end": 269
        },
        "start": 255,
        "end": 269
      },
      "body": null,
      "expression": false,
      "start": 217,
      "end": 270
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 293
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 300,
                "end": 304
              },
              "typeArguments": null,
              "start": 300,
              "end": 304
            },
            "start": 298,
            "end": 304
          },
          "start": 294,
          "end": 304
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 311
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BarNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 322
              },
              "typeArguments": null,
              "start": 315,
              "end": 322
            },
            "start": 315,
            "end": 322
          },
          "start": 307,
          "end": 322
        },
        "start": 305,
        "end": 322
      },
      "body": null,
      "expression": false,
      "start": 271,
      "end": 323
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "visitNodes",
          "optional": false,
          "typeAnnotation": null,
          "start": 341,
          "end": 351
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
                "start": 352,
                "end": 353
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 366
                },
                "typeArguments": null,
                "start": 362,
                "end": 366
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 352,
              "end": 366
            }
          ],
          "start": 351,
          "end": 367
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Document",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 374,
                      "end": 382
                    },
                    "typeArguments": null,
                    "start": 374,
                    "end": 382
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 385,
                      "end": 389
                    },
                    "typeArguments": null,
                    "start": 385,
                    "end": 389
                  }
                ],
                "start": 374,
                "end": 389
              },
              "start": 372,
              "end": 389
            },
            "start": 368,
            "end": 389
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "predicate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testNode",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 413,
                          "end": 417
                        },
                        "typeArguments": null,
                        "start": 413,
                        "end": 417
                      },
                      "start": 411,
                      "end": 417
                    },
                    "start": 403,
                    "end": 417
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 422,
                      "end": 430
                    },
                    "asserts": false,
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
                          "start": 434,
                          "end": 435
                        },
                        "typeArguments": null,
                        "start": 434,
                        "end": 435
                      },
                      "start": 434,
                      "end": 435
                    },
                    "start": 422,
                    "end": 435
                  },
                  "start": 419,
                  "end": 435
                },
                "start": 402,
                "end": 435
              },
              "start": 400,
              "end": 435
            },
            "start": 391,
            "end": 435
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 438,
            "end": 442
          },
          "start": 436,
          "end": 442
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "LogicalExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 449,
                    "end": 455
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 456,
                      "end": 460
                    }
                  ],
                  "optional": false,
                  "start": 449,
                  "end": 461
                },
                "operator": "&&",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "predicate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 474
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 475,
                      "end": 479
                    }
                  ],
                  "optional": false,
                  "start": 465,
                  "end": 480
                },
                "start": 449,
                "end": 480
              },
              "directive": null,
              "start": 449,
              "end": 481
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "LogicalExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 491,
                      "end": 497
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 498,
                        "end": 502
                      }
                    ],
                    "optional": false,
                    "start": 491,
                    "end": 503
                  },
                  "prefix": true,
                  "start": 490,
                  "end": 503
                },
                "operator": "||",
                "right": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isBar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 508,
                      "end": 513
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 518
                      }
                    ],
                    "optional": false,
                    "start": 508,
                    "end": 519
                  },
                  "prefix": true,
                  "start": 507,
                  "end": 519
                },
                "start": 490,
                "end": 519
              },
              "consequent": {
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
                          "name": "nodes",
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
                                  "name": "Node",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 544,
                                  "end": 548
                                },
                                "typeArguments": null,
                                "start": 544,
                                "end": 548
                              },
                              "start": 544,
                              "end": 550
                            },
                            "start": 542,
                            "end": 550
                          },
                          "start": 537,
                          "end": 550
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "node",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 553,
                            "end": 557
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 558,
                            "end": 566
                          },
                          "optional": false,
                          "computed": false,
                          "start": 553,
                          "end": 566
                        },
                        "definite": false,
                        "start": 537,
                        "end": 566
                      }
                    ],
                    "declare": false,
                    "start": 531,
                    "end": 567
                  }
                ],
                "start": 521,
                "end": 573
              },
              "alternate": null,
              "start": 486,
              "end": 573
            }
          ],
          "start": 443,
          "end": 575
        },
        "expression": false,
        "start": 332,
        "end": 575
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 325,
      "end": 575
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 604,
        "end": 605
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 611
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 613,
                "end": 619
              },
              "start": 611,
              "end": 619
            },
            "accessibility": null,
            "static": false,
            "start": 610,
            "end": 619
          }
        ],
        "start": 608,
        "end": 621
      },
      "declare": false,
      "start": 599,
      "end": 622
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 628,
        "end": 629
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 635
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 637,
                "end": 643
              },
              "start": 635,
              "end": 643
            },
            "accessibility": null,
            "static": false,
            "start": 634,
            "end": 643
          }
        ],
        "start": 632,
        "end": 645
      },
      "declare": false,
      "start": 623,
      "end": 646
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 657,
        "end": 659
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
              "start": 660,
              "end": 661
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 670,
                    "end": 671
                  },
                  "typeArguments": null,
                  "start": 670,
                  "end": 671
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 674,
                    "end": 675
                  },
                  "typeArguments": null,
                  "start": 674,
                  "end": 675
                }
              ],
              "start": 670,
              "end": 675
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 660,
            "end": 675
          }
        ],
        "start": 659,
        "end": 676
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 680,
                "end": 681
              },
              "typeArguments": null,
              "start": 680,
              "end": 681
            },
            "start": 678,
            "end": 681
          },
          "start": 677,
          "end": 681
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 686,
                    "end": 687
                  },
                  "typeArguments": null,
                  "start": 686,
                  "end": 687
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 690,
                    "end": 691
                  },
                  "typeArguments": null,
                  "start": 690,
                  "end": 691
                }
              ],
              "start": 686,
              "end": 691
            },
            "start": 684,
            "end": 691
          },
          "start": 683,
          "end": 691
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 706
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 710,
                      "end": 711
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 713,
                      "end": 714
                    }
                  ],
                  "start": 709,
                  "end": 715
                },
                "definite": false,
                "start": 705,
                "end": 715
              }
            ],
            "declare": false,
            "start": 699,
            "end": 716
          }
        ],
        "start": 693,
        "end": 753
      },
      "expression": false,
      "start": 648,
      "end": 753
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 753
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "FooNode",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 60,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 82,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "BarNode",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 103,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 109,
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
    "type": "Identifier",
    "value": "type",
    "start": 119,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "FooNode",
    "start": 131,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "BarNode",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 151,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Document",
    "start": 156,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "String",
    "value": "'document'",
    "start": 179,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 195,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 205,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 217,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 225,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "isNode",
    "start": 234,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 247,
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
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 257,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 262,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 271,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 279,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "isBar",
    "start": 288,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 294,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 300,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 307,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 312,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "BarNode",
    "start": 315,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 325,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 332,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "visitNodes",
    "start": 341,
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
    "type": "Keyword",
    "value": "extends",
    "start": 354,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 368,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "Document",
    "start": 374,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 391,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "testNode",
    "start": 403,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 413,
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
    "value": "=>",
    "start": 419,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "testNode",
    "start": 422,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 431,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "isNode",
    "start": 449,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 462,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 465,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 475,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 486,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "isNode",
    "start": 491,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 498,
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
    "value": "||",
    "start": 504,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "isBar",
    "start": 508,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 514,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 531,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "nodes",
    "start": 537,
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
    "value": "Node",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 553,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 558,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 599,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 613,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 623,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
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
    "value": "b",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 637,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 648,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 657,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 662,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 699,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 752,
    "end": 753
  }
]
```

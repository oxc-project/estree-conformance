__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 18
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 28
              },
              "initializer": {
                "type": "Literal",
                "value": "FooValue",
                "raw": "\"FooValue\"",
                "start": 31,
                "end": 41
              },
              "computed": false,
              "start": 25,
              "end": 41
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 50
              },
              "initializer": {
                "type": "Literal",
                "value": "BarValue",
                "raw": "\"BarValue\"",
                "start": 53,
                "end": 63
              },
              "computed": false,
              "start": 47,
              "end": 63
            }
          ],
          "start": 19,
          "end": 66
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 66
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myDecorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 88
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 97,
              "end": 100
            },
            "start": 95,
            "end": 100
          },
          "start": 89,
          "end": 100
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 121
            },
            "start": 108,
            "end": 122
          }
        ],
        "start": 102,
        "end": 124
      },
      "expression": false,
      "start": 68,
      "end": 124
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "myDecorator",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 182
            },
            "start": 170,
            "end": 182
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 196,
          "end": 199
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 210
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 218
                  },
                  "typeArguments": null,
                  "start": 212,
                  "end": 218
                },
                "start": 210,
                "end": 218
              },
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 227
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 231
                },
                "optional": false,
                "computed": false,
                "start": 221,
                "end": 231
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 206,
              "end": 232
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getType",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 245
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 255
                    },
                    "typeArguments": null,
                    "start": 249,
                    "end": 255
                  },
                  "start": 247,
                  "end": 255
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 273,
                            "end": 277
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 278,
                            "end": 282
                          },
                          "optional": false,
                          "computed": false,
                          "start": 273,
                          "end": 282
                        },
                        "operator": "||",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyEnum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 286,
                            "end": 292
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 293,
                            "end": 296
                          },
                          "optional": false,
                          "computed": false,
                          "start": 286,
                          "end": 296
                        },
                        "start": 273,
                        "end": 296
                      },
                      "start": 266,
                      "end": 297
                    }
                  ],
                  "start": 256,
                  "end": 303
                },
                "expression": false,
                "start": 245,
                "end": 303
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 238,
              "end": 303
            }
          ],
          "start": 200,
          "end": 305
        },
        "abstract": false,
        "declare": false,
        "start": 190,
        "end": 305
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 183,
      "end": 305
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
            "name": "obj",
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
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 393,
                      "end": 396
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 398,
                        "end": 404
                      },
                      "start": 396,
                      "end": 404
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 393,
                    "end": 404
                  }
                ],
                "start": 391,
                "end": 406
              },
              "start": 389,
              "end": 406
            },
            "start": 386,
            "end": 406
          },
          "init": null,
          "definite": false,
          "start": 386,
          "end": 406
        }
      ],
      "declare": true,
      "start": 372,
      "end": 407
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "myDecorator",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 421
            },
            "start": 409,
            "end": 421
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 435,
          "end": 438
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
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 445,
                "end": 449
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 452,
                  "end": 455
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 456,
                  "end": 459
                },
                "optional": false,
                "computed": false,
                "start": 452,
                "end": 459
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 445,
              "end": 460
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 472
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 492,
                          "end": 495
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 496,
                          "end": 499
                        },
                        "optional": false,
                        "computed": false,
                        "start": 492,
                        "end": 499
                      },
                      "start": 485,
                      "end": 500
                    }
                  ],
                  "start": 475,
                  "end": 506
                },
                "expression": false,
                "start": 472,
                "end": 506
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 466,
              "end": 506
            }
          ],
          "start": 439,
          "end": 508
        },
        "abstract": false,
        "declare": false,
        "start": 429,
        "end": 508
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 422,
      "end": 508
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
            "name": "nested",
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
                      "start": 597,
                      "end": 598
                    },
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
                              "name": "Baz",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 602,
                              "end": 605
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 607,
                                "end": 613
                              },
                              "start": 605,
                              "end": 613
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 602,
                            "end": 613
                          }
                        ],
                        "start": 600,
                        "end": 615
                      },
                      "start": 598,
                      "end": 615
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 597,
                    "end": 615
                  }
                ],
                "start": 595,
                "end": 617
              },
              "start": 593,
              "end": 617
            },
            "start": 587,
            "end": 617
          },
          "init": null,
          "definite": false,
          "start": 587,
          "end": 617
        }
      ],
      "declare": true,
      "start": 573,
      "end": 618
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "myDecorator",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 632
            },
            "start": 620,
            "end": 632
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 646,
          "end": 649
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
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 660
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 663,
                    "end": 669
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 670,
                    "end": 671
                  },
                  "optional": false,
                  "computed": false,
                  "start": 663,
                  "end": 671
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 672,
                  "end": 675
                },
                "optional": false,
                "computed": false,
                "start": 663,
                "end": 675
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 656,
              "end": 676
            }
          ],
          "start": 650,
          "end": 678
        },
        "abstract": false,
        "declare": false,
        "start": 640,
        "end": 678
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 633,
      "end": 678
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Other",
        "optional": false,
        "typeAnnotation": null,
        "start": 756,
        "end": 761
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
              "name": "Qux",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 778
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 781,
              "end": 783
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 768,
            "end": 784
          }
        ],
        "start": 762,
        "end": 786
      },
      "abstract": false,
      "declare": false,
      "start": 750,
      "end": 786
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "myDecorator",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 800
            },
            "start": 788,
            "end": 800
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Qux",
          "optional": false,
          "typeAnnotation": null,
          "start": 814,
          "end": 817
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
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 828
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Other",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 831,
                  "end": 836
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Qux",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 837,
                  "end": 840
                },
                "optional": false,
                "computed": false,
                "start": 831,
                "end": 840
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 824,
              "end": 841
            }
          ],
          "start": 818,
          "end": 843
        },
        "abstract": false,
        "declare": false,
        "start": 808,
        "end": 843
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 801,
      "end": 843
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "myDecorator",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 935
            },
            "start": 923,
            "end": 935
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SelfRef",
          "optional": false,
          "typeAnnotation": null,
          "start": 949,
          "end": 956
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
                "name": "instance",
                "optional": false,
                "typeAnnotation": null,
                "start": 970,
                "end": 978
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SelfRef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 985,
                  "end": 992
                },
                "typeArguments": null,
                "arguments": [],
                "start": 981,
                "end": 994
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 963,
              "end": 995
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 1000,
                "end": 1006
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SelfRef",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1026,
                        "end": 1033
                      },
                      "start": 1019,
                      "end": 1034
                    }
                  ],
                  "start": 1009,
                  "end": 1040
                },
                "expression": false,
                "start": 1006,
                "end": 1040
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1000,
              "end": 1040
            }
          ],
          "start": 957,
          "end": 1042
        },
        "abstract": false,
        "declare": false,
        "start": 943,
        "end": 1042
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 936,
      "end": 1042
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1042
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 12,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"FooValue\"",
    "start": 31,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"BarValue\"",
    "start": 53,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "myDecorator",
    "start": 77,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 108,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 115,
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
    "type": "Punctuator",
    "value": "@",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "myDecorator",
    "start": 171,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 183,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 190,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "getType",
    "start": 238,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "MyEnum",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 266,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 278,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 283,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 293,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 372,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 380,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 386,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 393,
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
    "value": "string",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "myDecorator",
    "start": 410,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 422,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 429,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 445,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 456,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 466,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 485,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 496,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "declare",
    "start": 573,
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
    "value": "nested",
    "start": 587,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 602,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 607,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "myDecorator",
    "start": 621,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 633,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 640,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 646,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 656,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 663,
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
    "value": "a",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 750,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 756,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 768,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "Qux",
    "start": 775,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 779,
    "end": 780
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 781,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "myDecorator",
    "start": 789,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 801,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 808,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "Qux",
    "start": 814,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 824,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 831,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "Qux",
    "start": 837,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "myDecorator",
    "start": 924,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 936,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 943,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "SelfRef",
    "start": 949,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 957,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 963,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 970,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 981,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "SelfRef",
    "start": 985,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1000,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1019,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "SelfRef",
    "start": 1026,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1041,
    "end": 1042
  }
]
```

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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 213
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
                "start": 227,
                "end": 235
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 245
                },
                "typeArguments": null,
                "arguments": [],
                "start": 238,
                "end": 247
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 220,
              "end": 248
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 257
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
                    "start": 259,
                    "end": 265
                  },
                  "typeArguments": null,
                  "start": 259,
                  "end": 265
                },
                "start": 257,
                "end": 265
              },
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 274
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 278
                },
                "optional": false,
                "computed": false,
                "start": 268,
                "end": 278
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 253,
              "end": 279
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
                "start": 285,
                "end": 292
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
                      "start": 296,
                      "end": 302
                    },
                    "typeArguments": null,
                    "start": 296,
                    "end": 302
                  },
                  "start": 294,
                  "end": 302
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
                            "start": 320,
                            "end": 324
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 325,
                            "end": 329
                          },
                          "optional": false,
                          "computed": false,
                          "start": 320,
                          "end": 329
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
                            "start": 333,
                            "end": 339
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 340,
                            "end": 343
                          },
                          "optional": false,
                          "computed": false,
                          "start": 333,
                          "end": 343
                        },
                        "start": 320,
                        "end": 343
                      },
                      "start": 313,
                      "end": 344
                    }
                  ],
                  "start": 303,
                  "end": 350
                },
                "expression": false,
                "start": 292,
                "end": 350
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 285,
              "end": 350
            }
          ],
          "start": 214,
          "end": 352
        },
        "abstract": false,
        "declare": false,
        "start": 204,
        "end": 352
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 197,
      "end": 352
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
                      "start": 375,
                      "end": 378
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 380,
                        "end": 386
                      },
                      "start": 378,
                      "end": 386
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 375,
                    "end": 386
                  }
                ],
                "start": 373,
                "end": 388
              },
              "start": 371,
              "end": 388
            },
            "start": 368,
            "end": 388
          },
          "init": null,
          "definite": false,
          "start": 368,
          "end": 388
        }
      ],
      "declare": true,
      "start": 354,
      "end": 389
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 404,
          "end": 407
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
                "start": 421,
                "end": 429
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 439
                },
                "typeArguments": null,
                "arguments": [],
                "start": 432,
                "end": 441
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 414,
              "end": 442
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 451
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
                  "start": 454,
                  "end": 457
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 461
                },
                "optional": false,
                "computed": false,
                "start": 454,
                "end": 461
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 447,
              "end": 462
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
                "start": 468,
                "end": 474
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
                          "start": 494,
                          "end": 497
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 498,
                          "end": 501
                        },
                        "optional": false,
                        "computed": false,
                        "start": 494,
                        "end": 501
                      },
                      "start": 487,
                      "end": 502
                    }
                  ],
                  "start": 477,
                  "end": 508
                },
                "expression": false,
                "start": 474,
                "end": 508
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 468,
              "end": 508
            }
          ],
          "start": 408,
          "end": 510
        },
        "abstract": false,
        "declare": false,
        "start": 398,
        "end": 510
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 391,
      "end": 510
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
        "start": 518,
        "end": 523
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
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 540
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 543,
              "end": 545
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 530,
            "end": 546
          }
        ],
        "start": 524,
        "end": 548
      },
      "abstract": false,
      "declare": false,
      "start": 512,
      "end": 548
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 563,
          "end": 566
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
                "start": 580,
                "end": 588
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 598
                },
                "typeArguments": null,
                "arguments": [],
                "start": 591,
                "end": 600
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 573,
              "end": 601
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 610
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
                  "start": 613,
                  "end": 618
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 622
                },
                "optional": false,
                "computed": false,
                "start": 613,
                "end": 622
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 606,
              "end": 623
            }
          ],
          "start": 567,
          "end": 625
        },
        "abstract": false,
        "declare": false,
        "start": 557,
        "end": 625
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 550,
      "end": 625
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
                      "name": "Qux",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 870,
                      "end": 873
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 875,
                        "end": 881
                      },
                      "start": 873,
                      "end": 881
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 870,
                    "end": 881
                  }
                ],
                "start": 868,
                "end": 883
              },
              "start": 866,
              "end": 883
            },
            "start": 862,
            "end": 883
          },
          "init": null,
          "definite": false,
          "start": 862,
          "end": 883
        }
      ],
      "declare": true,
      "start": 848,
      "end": 884
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
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 892,
            "end": 899
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Qux",
              "optional": false,
              "typeAnnotation": null,
              "start": 908,
              "end": 911
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
                    "name": "ref",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 925,
                    "end": 928
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Qux",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 935,
                      "end": 938
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 931,
                    "end": 940
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 918,
                  "end": 941
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 953,
                    "end": 958
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Qux",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 961,
                        "end": 964
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ref",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 965,
                        "end": 968
                      },
                      "optional": false,
                      "computed": false,
                      "start": 961,
                      "end": 968
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 971,
                      "end": 972
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 975,
                      "end": 976
                    },
                    "start": 961,
                    "end": 976
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 946,
                  "end": 977
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 982,
                    "end": 986
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 989,
                      "end": 993
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Qux",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 994,
                      "end": 997
                    },
                    "optional": false,
                    "computed": false,
                    "start": 989,
                    "end": 997
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 982,
                  "end": 998
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
                    "start": 1003,
                    "end": 1009
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
                              "name": "MyEnum",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1029,
                              "end": 1035
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1036,
                              "end": 1039
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1029,
                            "end": 1039
                          },
                          "start": 1022,
                          "end": 1040
                        }
                      ],
                      "start": 1012,
                      "end": 1046
                    },
                    "expression": false,
                    "start": 1009,
                    "end": 1046
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1003,
                  "end": 1046
                }
              ],
              "start": 912,
              "end": 1048
            },
            "abstract": false,
            "declare": false,
            "start": 902,
            "end": 1048
          },
          "definite": false,
          "start": 892,
          "end": 1048
        }
      ],
      "declare": false,
      "start": 886,
      "end": 1048
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1049
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
    "value": "export",
    "start": 197,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 204,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 220,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 227,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 242,
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
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 259,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
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
    "value": "Foo",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "getType",
    "start": 285,
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
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 313,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 325,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 330,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 333,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 354,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 362,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 368,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 375,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 380,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 391,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 398,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 404,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 414,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 421,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 436,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 447,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 454,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 458,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 468,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 487,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 494,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 498,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 512,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 518,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 530,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 537,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 543,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 550,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 557,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 563,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 573,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 580,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 591,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 606,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 613,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 619,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 848,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 856,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 862,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "Qux",
    "start": 870,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 875,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 886,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 892,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 900,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 902,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "Qux",
    "start": 908,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 918,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 925,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 929,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 931,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "Qux",
    "start": 935,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 946,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 953,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "Qux",
    "start": 961,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 965,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 969,
    "end": 970
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 982,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 989,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "Qux",
    "start": 994,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1003,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1022,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 1029,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1036,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1047,
    "end": 1048
  }
]
```

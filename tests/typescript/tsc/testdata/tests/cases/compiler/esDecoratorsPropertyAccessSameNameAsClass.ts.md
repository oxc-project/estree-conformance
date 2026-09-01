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
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassDecoratorContext",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 132
              },
              "typeArguments": null,
              "start": 111,
              "end": 132
            },
            "start": 109,
            "end": 132
          },
          "start": 102,
          "end": 132
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
              "start": 147,
              "end": 153
            },
            "start": 140,
            "end": 154
          }
        ],
        "start": 134,
        "end": 156
      },
      "expression": false,
      "start": 68,
      "end": 156
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
              "start": 221,
              "end": 232
            },
            "start": 220,
            "end": 232
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 246,
          "end": 249
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
                "start": 256,
                "end": 260
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
                    "start": 262,
                    "end": 268
                  },
                  "typeArguments": null,
                  "start": 262,
                  "end": 268
                },
                "start": 260,
                "end": 268
              },
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 277
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 281
                },
                "optional": false,
                "computed": false,
                "start": 271,
                "end": 281
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 256,
              "end": 282
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
                "start": 288,
                "end": 295
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
                      "start": 299,
                      "end": 305
                    },
                    "typeArguments": null,
                    "start": 299,
                    "end": 305
                  },
                  "start": 297,
                  "end": 305
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
                            "start": 323,
                            "end": 327
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 328,
                            "end": 332
                          },
                          "optional": false,
                          "computed": false,
                          "start": 323,
                          "end": 332
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
                            "start": 336,
                            "end": 342
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 343,
                            "end": 346
                          },
                          "optional": false,
                          "computed": false,
                          "start": 336,
                          "end": 346
                        },
                        "start": 323,
                        "end": 346
                      },
                      "start": 316,
                      "end": 347
                    }
                  ],
                  "start": 306,
                  "end": 353
                },
                "expression": false,
                "start": 295,
                "end": 353
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 288,
              "end": 353
            }
          ],
          "start": 250,
          "end": 355
        },
        "abstract": false,
        "declare": false,
        "start": 240,
        "end": 355
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 233,
      "end": 355
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
                      "start": 408,
                      "end": 411
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 413,
                        "end": 419
                      },
                      "start": 411,
                      "end": 419
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 408,
                    "end": 419
                  }
                ],
                "start": 406,
                "end": 421
              },
              "start": 404,
              "end": 421
            },
            "start": 401,
            "end": 421
          },
          "init": null,
          "definite": false,
          "start": 401,
          "end": 421
        }
      ],
      "declare": true,
      "start": 387,
      "end": 422
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
              "start": 425,
              "end": 436
            },
            "start": 424,
            "end": 436
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 450,
          "end": 453
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
                "start": 460,
                "end": 464
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
                  "start": 467,
                  "end": 470
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 474
                },
                "optional": false,
                "computed": false,
                "start": 467,
                "end": 474
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 460,
              "end": 475
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
                "start": 481,
                "end": 487
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
                          "start": 507,
                          "end": 510
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 511,
                          "end": 514
                        },
                        "optional": false,
                        "computed": false,
                        "start": 507,
                        "end": 514
                      },
                      "start": 500,
                      "end": 515
                    }
                  ],
                  "start": 490,
                  "end": 521
                },
                "expression": false,
                "start": 487,
                "end": 521
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 481,
              "end": 521
            }
          ],
          "start": 454,
          "end": 523
        },
        "abstract": false,
        "declare": false,
        "start": 444,
        "end": 523
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 437,
      "end": 523
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
        "start": 565,
        "end": 570
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
              "start": 584,
              "end": 587
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 590,
              "end": 592
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 577,
            "end": 593
          }
        ],
        "start": 571,
        "end": 595
      },
      "abstract": false,
      "declare": false,
      "start": 559,
      "end": 595
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
              "start": 598,
              "end": 609
            },
            "start": 597,
            "end": 609
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 623,
          "end": 626
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
                "start": 633,
                "end": 637
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
                  "start": 640,
                  "end": 645
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 646,
                  "end": 649
                },
                "optional": false,
                "computed": false,
                "start": 640,
                "end": 649
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 633,
              "end": 650
            }
          ],
          "start": 627,
          "end": 652
        },
        "abstract": false,
        "declare": false,
        "start": 617,
        "end": 652
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 610,
      "end": 652
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
                      "name": "Quux",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 865,
                      "end": 869
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 871,
                        "end": 877
                      },
                      "start": 869,
                      "end": 877
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 865,
                    "end": 877
                  }
                ],
                "start": 863,
                "end": 879
              },
              "start": 861,
              "end": 879
            },
            "start": 857,
            "end": 879
          },
          "init": null,
          "definite": false,
          "start": 857,
          "end": 879
        }
      ],
      "declare": true,
      "start": 843,
      "end": 880
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
              "start": 883,
              "end": 894
            },
            "start": 882,
            "end": 894
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Quux",
          "optional": false,
          "typeAnnotation": null,
          "start": 908,
          "end": 912
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
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 926,
                "end": 931
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 934,
                "end": 935
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 919,
              "end": 936
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
                "start": 941,
                "end": 945
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
                  "start": 948,
                  "end": 952
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Quux",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 953,
                  "end": 957
                },
                "optional": false,
                "computed": false,
                "start": 948,
                "end": 957
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 941,
              "end": 958
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
                "start": 963,
                "end": 969
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
                          "name": "obj2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 989,
                          "end": 993
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Quux",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 994,
                          "end": 998
                        },
                        "optional": false,
                        "computed": false,
                        "start": 989,
                        "end": 998
                      },
                      "start": 982,
                      "end": 999
                    }
                  ],
                  "start": 972,
                  "end": 1005
                },
                "expression": false,
                "start": 969,
                "end": 1005
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 963,
              "end": 1005
            }
          ],
          "start": 913,
          "end": 1007
        },
        "abstract": false,
        "declare": false,
        "start": 902,
        "end": 1007
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 895,
      "end": 1007
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1007
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
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 102,
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
    "value": "ClassDecoratorContext",
    "start": 111,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 140,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "myDecorator",
    "start": 221,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 233,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 240,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 271,
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
    "value": "Foo",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "getType",
    "start": 288,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 316,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 323,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 328,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 333,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 387,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 395,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "obj",
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
    "type": "Punctuator",
    "value": "{",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 408,
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
    "value": "string",
    "start": 413,
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
    "type": "Punctuator",
    "value": "@",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "myDecorator",
    "start": 425,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 437,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 444,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 450,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 460,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 471,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 481,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 500,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 507,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 511,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 559,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 565,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 577,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 590,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "myDecorator",
    "start": 598,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 610,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 617,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 623,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 633,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 640,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 646,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 843,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 851,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "Quux",
    "start": 865,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 871,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "@",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "myDecorator",
    "start": 883,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 895,
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
    "value": "Quux",
    "start": 908,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 919,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 926,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 932,
    "end": 933
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 941,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 948,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "Quux",
    "start": 953,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 963,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 972,
    "end": 973
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 982,
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
    "value": "Quux",
    "start": 994,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1006,
    "end": 1007
  }
]
```

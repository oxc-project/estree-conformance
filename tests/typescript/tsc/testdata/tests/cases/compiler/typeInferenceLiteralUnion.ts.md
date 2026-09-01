__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Primitive",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 104
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 107,
              "end": 113
            },
            {
              "type": "TSStringKeyword",
              "start": 116,
              "end": 122
            },
            {
              "type": "TSBooleanKeyword",
              "start": 125,
              "end": 132
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 139
              },
              "typeArguments": null,
              "start": 135,
              "end": 139
            }
          ],
          "start": 107,
          "end": 139
        },
        "declare": false,
        "start": 90,
        "end": 140
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 83,
      "end": 140
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Numeric",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 278
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 292
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 296,
                "end": 302
              },
              "start": 294,
              "end": 302
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 285,
            "end": 303
          }
        ],
        "start": 279,
        "end": 305
      },
      "declare": false,
      "start": 261,
      "end": 305
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumCoercible",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 363
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 378
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 380,
                "end": 386
              },
              "start": 378,
              "end": 386
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 370,
            "end": 387
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 404
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 408,
                      "end": 414
                    },
                    "start": 406,
                    "end": 414
                  },
                  "start": 405,
                  "end": 414
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 426,
                          "end": 430
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 431,
                          "end": 432
                        },
                        "optional": false,
                        "computed": false,
                        "start": 426,
                        "end": 432
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 436
                      },
                      "start": 426,
                      "end": 436
                    },
                    "directive": null,
                    "start": 426,
                    "end": 437
                  }
                ],
                "start": 416,
                "end": 443
              },
              "expression": false,
              "start": 404,
              "end": 443
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 393,
            "end": 443
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 462
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
                        "type": "ThisExpression",
                        "start": 482,
                        "end": 486
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 487,
                        "end": 488
                      },
                      "optional": false,
                      "computed": false,
                      "start": 482,
                      "end": 488
                    },
                    "start": 475,
                    "end": 489
                  }
                ],
                "start": 465,
                "end": 495
              },
              "expression": false,
              "start": 462,
              "end": 495
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 448,
            "end": 495
          }
        ],
        "start": 364,
        "end": 497
      },
      "abstract": false,
      "declare": false,
      "start": 345,
      "end": 497
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "extent",
          "optional": false,
          "typeAnnotation": null,
          "start": 565,
          "end": 571
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
                "start": 572,
                "end": 573
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Numeric",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 582,
                  "end": 589
                },
                "typeArguments": null,
                "start": 582,
                "end": 589
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 572,
              "end": 589
            }
          ],
          "start": 571,
          "end": 590
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 598,
                  "end": 603
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 604,
                            "end": 605
                          },
                          "typeArguments": null,
                          "start": 604,
                          "end": 605
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Primitive",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 608,
                            "end": 617
                          },
                          "typeArguments": null,
                          "start": 608,
                          "end": 617
                        }
                      ],
                      "start": 604,
                      "end": 617
                    }
                  ],
                  "start": 603,
                  "end": 618
                },
                "start": 598,
                "end": 618
              },
              "start": 596,
              "end": 618
            },
            "start": 591,
            "end": 618
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 622,
                          "end": 623
                        },
                        "typeArguments": null,
                        "start": 622,
                        "end": 623
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Primitive",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 626,
                          "end": 635
                        },
                        "typeArguments": null,
                        "start": 626,
                        "end": 635
                      }
                    ],
                    "start": 622,
                    "end": 635
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 637,
                          "end": 638
                        },
                        "typeArguments": null,
                        "start": 637,
                        "end": 638
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Primitive",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 641,
                          "end": 650
                        },
                        "typeArguments": null,
                        "start": 641,
                        "end": 650
                      }
                    ],
                    "start": 637,
                    "end": 650
                  }
                ],
                "start": 621,
                "end": 651
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 655,
                    "end": 664
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 666,
                    "end": 675
                  }
                ],
                "start": 654,
                "end": 676
              }
            ],
            "start": 621,
            "end": 676
          },
          "start": 619,
          "end": 676
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
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 691,
                    "end": 700
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 702,
                    "end": 711
                  }
                ],
                "start": 690,
                "end": 712
              },
              "start": 683,
              "end": 713
            }
          ],
          "start": 677,
          "end": 715
        },
        "expression": false,
        "start": 556,
        "end": 715
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 549,
      "end": 715
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
            "name": "extentMixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Primitive",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 736,
                              "end": 745
                            },
                            "typeArguments": null,
                            "start": 736,
                            "end": 745
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NumCoercible",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 748,
                              "end": 760
                            },
                            "typeArguments": null,
                            "start": 748,
                            "end": 760
                          }
                        ],
                        "start": 736,
                        "end": 760
                      },
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Primitive",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 762,
                              "end": 771
                            },
                            "typeArguments": null,
                            "start": 762,
                            "end": 771
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NumCoercible",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 774,
                              "end": 786
                            },
                            "typeArguments": null,
                            "start": 774,
                            "end": 786
                          }
                        ],
                        "start": 762,
                        "end": 786
                      }
                    ],
                    "start": 735,
                    "end": 787
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 791,
                        "end": 800
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 802,
                        "end": 811
                      }
                    ],
                    "start": 790,
                    "end": 812
                  }
                ],
                "start": 735,
                "end": 812
              },
              "start": 733,
              "end": 812
            },
            "start": 722,
            "end": 812
          },
          "init": null,
          "definite": false,
          "start": 722,
          "end": 812
        }
      ],
      "declare": false,
      "start": 718,
      "end": 813
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "extentMixed",
          "optional": false,
          "typeAnnotation": null,
          "start": 814,
          "end": 825
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "extent",
            "optional": false,
            "typeAnnotation": null,
            "start": 828,
            "end": 834
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumCoercible",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 840,
                    "end": 852
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 853,
                      "end": 855
                    }
                  ],
                  "start": 836,
                  "end": 856
                },
                {
                  "type": "Literal",
                  "value": 13,
                  "raw": "13",
                  "start": 858,
                  "end": 860
                },
                {
                  "type": "Literal",
                  "value": "12",
                  "raw": "'12'",
                  "start": 862,
                  "end": 866
                },
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 868,
                  "end": 872
                }
              ],
              "start": 835,
              "end": 873
            }
          ],
          "optional": false,
          "start": 828,
          "end": 874
        },
        "start": 814,
        "end": 874
      },
      "directive": null,
      "start": 814,
      "end": 875
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 83,
  "end": 875
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 83,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 90,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 95,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 261,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "Numeric",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "valueOf",
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
    "value": "number",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "class",
    "start": 345,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "NumCoercible",
    "start": 351,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 370,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 377,
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
    "value": "number",
    "start": 380,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 393,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "this",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 448,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "valueOf",
    "start": 455,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 475,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 482,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 549,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 556,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "extent",
    "start": 565,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 574,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "Numeric",
    "start": 582,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 591,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 598,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 608,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 626,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 641,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 655,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 666,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "return",
    "start": 683,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 691,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 702,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 718,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "extentMixed",
    "start": 722,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 736,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "NumCoercible",
    "start": 748,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 762,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "NumCoercible",
    "start": 774,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 791,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 802,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "extentMixed",
    "start": 814,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "extent",
    "start": 828,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 836,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "NumCoercible",
    "start": 840,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 853,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 856,
    "end": 857
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 858,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 860,
    "end": 861
  },
  {
    "type": "String",
    "value": "'12'",
    "start": 862,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 866,
    "end": 867
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 868,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875
  }
]
```

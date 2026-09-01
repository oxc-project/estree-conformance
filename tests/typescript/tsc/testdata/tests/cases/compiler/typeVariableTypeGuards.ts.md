__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 35
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 45
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 49,
                "end": 53
              },
              "start": 47,
              "end": 53
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 42,
            "end": 53
          }
        ],
        "start": 36,
        "end": 55
      },
      "declare": false,
      "start": 22,
      "end": 55
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 64
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 82
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 83,
                      "end": 86
                    },
                    "typeArguments": null,
                    "start": 83,
                    "end": 86
                  }
                ],
                "start": 82,
                "end": 87
              },
              "start": 75,
              "end": 87
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 65,
            "end": 87
          }
        ],
        "start": 64,
        "end": 88
      },
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
              "start": 95,
              "end": 106
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Readonly",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 121,
                          "end": 129
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 130,
                                "end": 131
                              },
                              "typeArguments": null,
                              "start": 130,
                              "end": 131
                            }
                          ],
                          "start": 129,
                          "end": 132
                        },
                        "start": 121,
                        "end": 132
                      },
                      "start": 119,
                      "end": 132
                    },
                    "start": 114,
                    "end": 132
                  },
                  "readonly": false,
                  "static": false,
                  "start": 107,
                  "end": 132
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 134,
                "end": 136
              },
              "expression": false,
              "start": 106,
              "end": 136
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 95,
            "end": 136
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 152
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
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 165,
                            "end": 169
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 170,
                            "end": 175
                          },
                          "optional": false,
                          "computed": false,
                          "start": 165,
                          "end": 175
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 176,
                          "end": 179
                        },
                        "optional": false,
                        "computed": false,
                        "start": 165,
                        "end": 179
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 183,
                              "end": 187
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 188,
                              "end": 193
                            },
                            "optional": false,
                            "computed": false,
                            "start": 183,
                            "end": 193
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 194,
                            "end": 197
                          },
                          "optional": false,
                          "computed": false,
                          "start": 183,
                          "end": 197
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 183,
                        "end": 199
                      },
                      "start": 165,
                      "end": 199
                    },
                    "directive": null,
                    "start": 165,
                    "end": 199
                  }
                ],
                "start": 155,
                "end": 205
              },
              "expression": false,
              "start": 152,
              "end": 205
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 141,
            "end": 205
          }
        ],
        "start": 89,
        "end": 207
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 207
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Banana",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 247
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 259
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "yellow",
                  "raw": "'yellow'",
                  "start": 261,
                  "end": 269
                },
                "start": 261,
                "end": 269
              },
              "start": 259,
              "end": 269
            },
            "accessibility": null,
            "static": false,
            "start": 254,
            "end": 270
          }
        ],
        "start": 248,
        "end": 272
      },
      "declare": false,
      "start": 231,
      "end": 272
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Monkey",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 286
      },
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
              "start": 287,
              "end": 288
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Banana",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 297,
                    "end": 303
                  },
                  "typeArguments": null,
                  "start": 297,
                  "end": 303
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 306,
                  "end": 315
                }
              ],
              "start": 297,
              "end": 315
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 287,
            "end": 315
          }
        ],
        "start": 286,
        "end": 316
      },
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
              "start": 323,
              "end": 334
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
                    "name": "a",
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
                          "start": 345,
                          "end": 346
                        },
                        "typeArguments": null,
                        "start": 345,
                        "end": 346
                      },
                      "start": 343,
                      "end": 346
                    },
                    "start": 342,
                    "end": 346
                  },
                  "readonly": false,
                  "static": false,
                  "start": 335,
                  "end": 346
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 348,
                "end": 350
              },
              "expression": false,
              "start": 334,
              "end": 350
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 323,
            "end": 350
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 361
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
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 378,
                        "end": 382
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 383,
                        "end": 384
                      },
                      "optional": false,
                      "computed": false,
                      "start": 378,
                      "end": 384
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 400,
                                "end": 404
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 405,
                                "end": 406
                              },
                              "optional": false,
                              "computed": false,
                              "start": 400,
                              "end": 406
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "color",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 407,
                              "end": 412
                            },
                            "optional": false,
                            "computed": false,
                            "start": 400,
                            "end": 412
                          },
                          "directive": null,
                          "start": 400,
                          "end": 413
                        }
                      ],
                      "start": 386,
                      "end": 423
                    },
                    "alternate": null,
                    "start": 374,
                    "end": 423
                  }
                ],
                "start": 364,
                "end": 429
              },
              "expression": false,
              "start": 361,
              "end": 429
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 355,
            "end": 429
          }
        ],
        "start": 317,
        "end": 431
      },
      "abstract": false,
      "declare": false,
      "start": 274,
      "end": 431
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BigBanana",
        "optional": false,
        "typeAnnotation": null,
        "start": 443,
        "end": 452
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Banana",
            "optional": false,
            "typeAnnotation": null,
            "start": 461,
            "end": 467
          },
          "typeArguments": null,
          "start": 461,
          "end": 467
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 468,
        "end": 471
      },
      "declare": false,
      "start": 433,
      "end": 471
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BigMonkey",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 488
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Monkey",
        "optional": false,
        "typeAnnotation": null,
        "start": 497,
        "end": 503
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigBanana",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 513
            },
            "typeArguments": null,
            "start": 504,
            "end": 513
          }
        ],
        "start": 503,
        "end": 514
      },
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
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 527
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
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 544,
                        "end": 548
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 549,
                        "end": 550
                      },
                      "optional": false,
                      "computed": false,
                      "start": 544,
                      "end": 550
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 566,
                                "end": 570
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 571,
                                "end": 572
                              },
                              "optional": false,
                              "computed": false,
                              "start": 566,
                              "end": 572
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "color",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 573,
                              "end": 578
                            },
                            "optional": false,
                            "computed": false,
                            "start": 566,
                            "end": 578
                          },
                          "directive": null,
                          "start": 566,
                          "end": 579
                        }
                      ],
                      "start": 552,
                      "end": 589
                    },
                    "alternate": null,
                    "start": 540,
                    "end": 589
                  }
                ],
                "start": 530,
                "end": 595
              },
              "expression": false,
              "start": 527,
              "end": 595
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 521,
            "end": 595
          }
        ],
        "start": 515,
        "end": 597
      },
      "abstract": false,
      "declare": false,
      "start": 473,
      "end": 597
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 626
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 639,
                "end": 645
              },
              "start": 637,
              "end": 645
            },
            "start": 635,
            "end": 646
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 652
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 654,
                "end": 660
              },
              "start": 652,
              "end": 660
            },
            "accessibility": null,
            "static": false,
            "start": 651,
            "end": 661
          }
        ],
        "start": 629,
        "end": 663
      },
      "declare": false,
      "start": 617,
      "end": 663
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 674,
        "end": 676
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
              "start": 677,
              "end": 678
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 687,
                    "end": 691
                  },
                  "typeArguments": null,
                  "start": 687,
                  "end": 691
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 694,
                  "end": 703
                }
              ],
              "start": 687,
              "end": 703
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 677,
            "end": 703
          }
        ],
        "start": 676,
        "end": 704
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 710,
                "end": 711
              },
              "typeArguments": null,
              "start": 710,
              "end": 711
            },
            "start": 708,
            "end": 711
          },
          "start": 705,
          "end": 711
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 726
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 738,
                      "end": 741
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 742,
                      "end": 743
                    },
                    "optional": false,
                    "computed": false,
                    "start": 738,
                    "end": 743
                  },
                  "directive": null,
                  "start": 738,
                  "end": 744
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 753,
                      "end": 756
                    },
                    "property": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 757,
                      "end": 760
                    },
                    "optional": false,
                    "computed": true,
                    "start": 753,
                    "end": 761
                  },
                  "directive": null,
                  "start": 753,
                  "end": 762
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 771,
                      "end": 774
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 771,
                    "end": 776
                  },
                  "directive": null,
                  "start": 771,
                  "end": 777
                }
              ],
              "start": 728,
              "end": 783
            },
            "alternate": null,
            "start": 719,
            "end": 783
          }
        ],
        "start": 713,
        "end": 785
      },
      "expression": false,
      "start": 665,
      "end": 785
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 796,
        "end": 798
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
              "start": 799,
              "end": 800
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 809,
                    "end": 813
                  },
                  "typeArguments": null,
                  "start": 809,
                  "end": 813
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 816,
                  "end": 825
                }
              ],
              "start": 809,
              "end": 825
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 799,
            "end": 825
          }
        ],
        "start": 798,
        "end": 826
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 832,
                    "end": 833
                  },
                  "typeArguments": null,
                  "start": 832,
                  "end": 833
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 836,
                  "end": 845
                }
              ],
              "start": 832,
              "end": 845
            },
            "start": 830,
            "end": 845
          },
          "start": 827,
          "end": 845
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 857,
              "end": 860
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 872,
                      "end": 875
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 876,
                      "end": 877
                    },
                    "optional": false,
                    "computed": false,
                    "start": 872,
                    "end": 877
                  },
                  "directive": null,
                  "start": 872,
                  "end": 878
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 887,
                      "end": 890
                    },
                    "property": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 891,
                      "end": 894
                    },
                    "optional": false,
                    "computed": true,
                    "start": 887,
                    "end": 895
                  },
                  "directive": null,
                  "start": 887,
                  "end": 896
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 905,
                      "end": 908
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 905,
                    "end": 910
                  },
                  "directive": null,
                  "start": 905,
                  "end": 911
                }
              ],
              "start": 862,
              "end": 917
            },
            "alternate": null,
            "start": 853,
            "end": 917
          }
        ],
        "start": 847,
        "end": 919
      },
      "expression": false,
      "start": 787,
      "end": 919
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 930,
        "end": 932
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
              "start": 933,
              "end": 934
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 943,
                    "end": 947
                  },
                  "typeArguments": null,
                  "start": 943,
                  "end": 947
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 950,
                  "end": 959
                }
              ],
              "start": 943,
              "end": 959
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 933,
            "end": 959
          }
        ],
        "start": 932,
        "end": 960
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 966,
                    "end": 967
                  },
                  "typeArguments": null,
                  "start": 966,
                  "end": 967
                },
                {
                  "type": "TSNullKeyword",
                  "start": 970,
                  "end": 974
                }
              ],
              "start": 966,
              "end": 974
            },
            "start": 964,
            "end": 974
          },
          "start": 961,
          "end": 974
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 986,
              "end": 989
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1001,
                      "end": 1004
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1005,
                      "end": 1006
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1001,
                    "end": 1006
                  },
                  "directive": null,
                  "start": 1001,
                  "end": 1007
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1016,
                      "end": 1019
                    },
                    "property": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 1020,
                      "end": 1023
                    },
                    "optional": false,
                    "computed": true,
                    "start": 1016,
                    "end": 1024
                  },
                  "directive": null,
                  "start": 1016,
                  "end": 1025
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1034,
                      "end": 1037
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1034,
                    "end": 1039
                  },
                  "directive": null,
                  "start": 1034,
                  "end": 1040
                }
              ],
              "start": 991,
              "end": 1046
            },
            "alternate": null,
            "start": 982,
            "end": 1046
          }
        ],
        "start": 976,
        "end": 1048
      },
      "expression": false,
      "start": 921,
      "end": 1048
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1059,
        "end": 1061
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
              "start": 1062,
              "end": 1063
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 1072,
                    "end": 1078
                  },
                  "start": 1072,
                  "end": 1080
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1083,
                  "end": 1092
                }
              ],
              "start": 1072,
              "end": 1092
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1062,
            "end": 1092
          }
        ],
        "start": 1061,
        "end": 1093
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1099,
                    "end": 1100
                  },
                  "typeArguments": null,
                  "start": 1099,
                  "end": 1100
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1103,
                  "end": 1112
                }
              ],
              "start": 1099,
              "end": 1112
            },
            "start": 1097,
            "end": 1112
          },
          "start": 1094,
          "end": 1112
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1117,
              "end": 1123
            },
            "start": 1115,
            "end": 1123
          },
          "start": 1114,
          "end": 1123
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1135,
              "end": 1138
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1150,
                        "end": 1153
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1154,
                        "end": 1155
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1150,
                      "end": 1156
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1157,
                      "end": 1163
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1150,
                    "end": 1163
                  },
                  "directive": null,
                  "start": 1150,
                  "end": 1164
                }
              ],
              "start": 1140,
              "end": 1170
            },
            "alternate": null,
            "start": 1131,
            "end": 1170
          }
        ],
        "start": 1125,
        "end": 1172
      },
      "expression": false,
      "start": 1050,
      "end": 1172
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1183,
        "end": 1185
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
              "start": 1186,
              "end": 1187
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1186,
            "end": 1187
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1189,
              "end": 1190
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
                  "start": 1205,
                  "end": 1206
                },
                "typeArguments": null,
                "start": 1205,
                "end": 1206
              },
              "start": 1199,
              "end": 1206
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1189,
            "end": 1206
          }
        ],
        "start": 1185,
        "end": 1207
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1213,
                    "end": 1214
                  },
                  "typeArguments": null,
                  "start": 1213,
                  "end": 1214
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1217,
                  "end": 1226
                }
              ],
              "start": 1213,
              "end": 1226
            },
            "start": 1211,
            "end": 1226
          },
          "start": 1208,
          "end": 1226
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1233,
                "end": 1234
              },
              "typeArguments": null,
              "start": 1233,
              "end": 1234
            },
            "start": 1231,
            "end": 1234
          },
          "start": 1228,
          "end": 1234
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1246,
              "end": 1249
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1261,
                      "end": 1264
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1265,
                      "end": 1268
                    },
                    "optional": false,
                    "computed": true,
                    "start": 1261,
                    "end": 1269
                  },
                  "directive": null,
                  "start": 1261,
                  "end": 1270
                }
              ],
              "start": 1251,
              "end": 1276
            },
            "alternate": null,
            "start": 1242,
            "end": 1276
          }
        ],
        "start": 1236,
        "end": 1278
      },
      "expression": false,
      "start": 1174,
      "end": 1278
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1346,
        "end": 1348
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
              "start": 1349,
              "end": 1350
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1359,
                  "end": 1365
                },
                {
                  "type": "TSConstructorType",
                  "abstract": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1379,
                      "end": 1381
                    },
                    "start": 1376,
                    "end": 1381
                  },
                  "start": 1369,
                  "end": 1381
                }
              ],
              "start": 1359,
              "end": 1382
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1349,
            "end": 1382
          }
        ],
        "start": 1348,
        "end": 1383
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 1387,
                "end": 1388
              },
              "typeArguments": null,
              "start": 1387,
              "end": 1388
            },
            "start": 1385,
            "end": 1388
          },
          "start": 1384,
          "end": 1388
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1405,
                  "end": 1406
                },
                "prefix": true,
                "start": 1398,
                "end": 1406
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1411,
                "end": 1419
              },
              "start": 1398,
              "end": 1419
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1431,
                      "end": 1432
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1427,
                    "end": 1434
                  },
                  "directive": null,
                  "start": 1427,
                  "end": 1435
                }
              ],
              "start": 1421,
              "end": 1439
            },
            "alternate": null,
            "start": 1394,
            "end": 1439
          }
        ],
        "start": 1390,
        "end": 1441
      },
      "expression": false,
      "start": 1337,
      "end": 1441
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 1441
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 49,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 67,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "constructor",
    "start": 95,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 107,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 114,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 121,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 131,
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
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 141,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 170,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 180,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 188,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 231,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "Banana",
    "start": 241,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "String",
    "value": "'yellow'",
    "start": 261,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 274,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "Monkey",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 289,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Banana",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 306,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 323,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 335,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
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
    "value": "if",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 378,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
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
    "type": "Identifier",
    "value": "a",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 407,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 433,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "BigBanana",
    "start": 443,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 453,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "Banana",
    "start": 461,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 473,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "BigMonkey",
    "start": 479,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 489,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "Monkey",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "BigBanana",
    "start": 504,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 540,
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
    "type": "Identifier",
    "value": "a",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 566,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 573,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 617,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 622,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 639,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 654,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 662,
    "end": 663
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 665,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 674,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 679,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 687,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 694,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 705,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 719,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 723,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 738,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 753,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 756,
    "end": 757
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 757,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 771,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 787,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 796,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 801,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 809,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 816,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 827,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 836,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 847,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 853,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 857,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 872,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 887,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 890,
    "end": 891
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 891,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 905,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 921,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 930,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 935,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 943,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 950,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 961,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 968,
    "end": 969
  },
  {
    "type": "Null",
    "value": "null",
    "start": 970,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 976,
    "end": 977
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 982,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 986,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1001,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
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
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1050,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1059,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1064,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1072,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1083,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1094,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1103,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1117,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1131,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1157,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1174,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1183,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1191,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1199,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1208,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1217,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1228,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1242,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1246,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1261,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1265,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1337,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1346,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1351,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1359,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1376,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1394,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1398,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1407,
    "end": 1410
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1411,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1427,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1440,
    "end": 1441
  }
]
```

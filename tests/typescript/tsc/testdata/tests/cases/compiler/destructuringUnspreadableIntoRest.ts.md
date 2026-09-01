__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "start": 14,
              "end": 25
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
                    "name": "publicProp",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      },
                      "start": 52,
                      "end": 60
                    },
                    "start": 42,
                    "end": 60
                  },
                  "readonly": false,
                  "static": false,
                  "start": 35,
                  "end": 60
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateProp",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 91,
                        "end": 97
                      },
                      "start": 89,
                      "end": 97
                    },
                    "start": 78,
                    "end": 97
                  },
                  "readonly": false,
                  "static": false,
                  "start": 70,
                  "end": 97
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "protectedProp",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 132,
                        "end": 138
                      },
                      "start": 130,
                      "end": 138
                    },
                    "start": 117,
                    "end": 138
                  },
                  "readonly": false,
                  "static": false,
                  "start": 107,
                  "end": 138
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 146,
                "end": 148
              },
              "expression": false,
              "start": 25,
              "end": 148
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 148
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getter",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 164
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
                  "type": "TSNumberKeyword",
                  "start": 168,
                  "end": 174
                },
                "start": 166,
                "end": 174
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 192,
                      "end": 193
                    },
                    "start": 185,
                    "end": 194
                  }
                ],
                "start": 175,
                "end": 200
              },
              "expression": false,
              "start": 164,
              "end": 200
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 154,
            "end": 200
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setter",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
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
                  "name": "_v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 221,
                      "end": 227
                    },
                    "start": 219,
                    "end": 227
                  },
                  "start": 217,
                  "end": 227
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 229,
                "end": 231
              },
              "expression": false,
              "start": 216,
              "end": 231
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 206,
            "end": 231
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
              "start": 237,
              "end": 243
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "rest1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 283,
                                "end": 288
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 280,
                              "end": 288
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 262,
                          "end": 290
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 293,
                          "end": 297
                        },
                        "definite": false,
                        "start": 262,
                        "end": 297
                      }
                    ],
                    "declare": false,
                    "start": 256,
                    "end": 298
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "rest2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 334,
                                "end": 339
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 331,
                              "end": 339
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 313,
                          "end": 341
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "ThisExpression",
                            "start": 344,
                            "end": 348
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 352,
                              "end": 353
                            },
                            "typeArguments": null,
                            "start": 352,
                            "end": 353
                          },
                          "start": 344,
                          "end": 353
                        },
                        "definite": false,
                        "start": 313,
                        "end": 353
                      }
                    ],
                    "declare": false,
                    "start": 307,
                    "end": 354
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 371,
                                "end": 381
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 383,
                                "end": 385
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 371,
                              "end": 385
                            },
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "rest3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 390,
                                "end": 395
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 387,
                              "end": 395
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 369,
                          "end": 397
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 400,
                          "end": 404
                        },
                        "definite": false,
                        "start": 369,
                        "end": 404
                      }
                    ],
                    "declare": false,
                    "start": 363,
                    "end": 405
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 422,
                                "end": 432
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 434,
                                "end": 436
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 422,
                              "end": 436
                            },
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "rest4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 441,
                                "end": 446
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 438,
                              "end": 446
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 420,
                          "end": 448
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "ThisExpression",
                            "start": 451,
                            "end": 455
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 459,
                              "end": 460
                            },
                            "typeArguments": null,
                            "start": 459,
                            "end": 460
                          },
                          "start": 451,
                          "end": 460
                        },
                        "definite": false,
                        "start": 420,
                        "end": 460
                      }
                    ],
                    "declare": false,
                    "start": 414,
                    "end": 461
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 471,
                        "end": 476
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 477,
                        "end": 487
                      },
                      "optional": false,
                      "computed": false,
                      "start": 471,
                      "end": 487
                    },
                    "directive": null,
                    "start": 471,
                    "end": 488
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 497,
                        "end": 502
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 503,
                        "end": 513
                      },
                      "optional": false,
                      "computed": false,
                      "start": 497,
                      "end": 513
                    },
                    "directive": null,
                    "start": 497,
                    "end": 514
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 523,
                        "end": 528
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 529,
                        "end": 539
                      },
                      "optional": false,
                      "computed": false,
                      "start": 523,
                      "end": 539
                    },
                    "directive": null,
                    "start": 523,
                    "end": 540
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 549,
                        "end": 554
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 565
                      },
                      "optional": false,
                      "computed": false,
                      "start": 549,
                      "end": 565
                    },
                    "directive": null,
                    "start": 549,
                    "end": 566
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 581
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 593
                      },
                      "optional": false,
                      "computed": false,
                      "start": 576,
                      "end": 593
                    },
                    "directive": null,
                    "start": 576,
                    "end": 594
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 603,
                        "end": 608
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 609,
                        "end": 620
                      },
                      "optional": false,
                      "computed": false,
                      "start": 603,
                      "end": 620
                    },
                    "directive": null,
                    "start": 603,
                    "end": 621
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 630,
                        "end": 635
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 636,
                        "end": 647
                      },
                      "optional": false,
                      "computed": false,
                      "start": 630,
                      "end": 647
                    },
                    "directive": null,
                    "start": 630,
                    "end": 648
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 657,
                        "end": 662
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 663,
                        "end": 674
                      },
                      "optional": false,
                      "computed": false,
                      "start": 657,
                      "end": 674
                    },
                    "directive": null,
                    "start": 657,
                    "end": 675
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 685,
                        "end": 690
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "protectedProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 691,
                        "end": 704
                      },
                      "optional": false,
                      "computed": false,
                      "start": 685,
                      "end": 704
                    },
                    "directive": null,
                    "start": 685,
                    "end": 705
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 714,
                        "end": 719
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "protectedProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 733
                      },
                      "optional": false,
                      "computed": false,
                      "start": 714,
                      "end": 733
                    },
                    "directive": null,
                    "start": 714,
                    "end": 734
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 743,
                        "end": 748
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "protectedProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 762
                      },
                      "optional": false,
                      "computed": false,
                      "start": 743,
                      "end": 762
                    },
                    "directive": null,
                    "start": 743,
                    "end": 763
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 772,
                        "end": 777
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "protectedProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 778,
                        "end": 791
                      },
                      "optional": false,
                      "computed": false,
                      "start": 772,
                      "end": 791
                    },
                    "directive": null,
                    "start": 772,
                    "end": 792
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 802,
                        "end": 807
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 808,
                        "end": 814
                      },
                      "optional": false,
                      "computed": false,
                      "start": 802,
                      "end": 814
                    },
                    "directive": null,
                    "start": 802,
                    "end": 815
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 824,
                        "end": 829
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 830,
                        "end": 836
                      },
                      "optional": false,
                      "computed": false,
                      "start": 824,
                      "end": 836
                    },
                    "directive": null,
                    "start": 824,
                    "end": 837
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 846,
                        "end": 851
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 852,
                        "end": 858
                      },
                      "optional": false,
                      "computed": false,
                      "start": 846,
                      "end": 858
                    },
                    "directive": null,
                    "start": 846,
                    "end": 859
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 868,
                        "end": 873
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 874,
                        "end": 880
                      },
                      "optional": false,
                      "computed": false,
                      "start": 868,
                      "end": 880
                    },
                    "directive": null,
                    "start": 868,
                    "end": 881
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 891,
                        "end": 896
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "setter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 897,
                        "end": 903
                      },
                      "optional": false,
                      "computed": false,
                      "start": 891,
                      "end": 903
                    },
                    "directive": null,
                    "start": 891,
                    "end": 904
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 913,
                        "end": 918
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "setter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 919,
                        "end": 925
                      },
                      "optional": false,
                      "computed": false,
                      "start": 913,
                      "end": 925
                    },
                    "directive": null,
                    "start": 913,
                    "end": 926
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 935,
                        "end": 940
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "setter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 941,
                        "end": 947
                      },
                      "optional": false,
                      "computed": false,
                      "start": 935,
                      "end": 947
                    },
                    "directive": null,
                    "start": 935,
                    "end": 948
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 957,
                        "end": 962
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "setter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 963,
                        "end": 969
                      },
                      "optional": false,
                      "computed": false,
                      "start": 957,
                      "end": 969
                    },
                    "directive": null,
                    "start": 957,
                    "end": 970
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 980,
                        "end": 985
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 986,
                        "end": 992
                      },
                      "optional": false,
                      "computed": false,
                      "start": 980,
                      "end": 992
                    },
                    "directive": null,
                    "start": 980,
                    "end": 993
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1002,
                        "end": 1007
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1008,
                        "end": 1014
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1002,
                      "end": 1014
                    },
                    "directive": null,
                    "start": 1002,
                    "end": 1015
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1024,
                        "end": 1029
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1030,
                        "end": 1036
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1024,
                      "end": 1036
                    },
                    "directive": null,
                    "start": 1024,
                    "end": 1037
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1046,
                        "end": 1051
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1052,
                        "end": 1058
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1046,
                      "end": 1058
                    },
                    "directive": null,
                    "start": 1046,
                    "end": 1059
                  }
                ],
                "start": 246,
                "end": 1065
              },
              "expression": false,
              "start": 243,
              "end": 1065
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 237,
            "end": 1065
          }
        ],
        "start": 8,
        "end": 1067
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 1067
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "destructure",
        "optional": false,
        "typeAnnotation": null,
        "start": 1078,
        "end": 1089
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
              "start": 1090,
              "end": 1091
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1100,
                "end": 1101
              },
              "typeArguments": null,
              "start": 1100,
              "end": 1101
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1090,
            "end": 1101
          }
        ],
        "start": 1089,
        "end": 1102
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
                "start": 1106,
                "end": 1107
              },
              "typeArguments": null,
              "start": 1106,
              "end": 1107
            },
            "start": 1104,
            "end": 1107
          },
          "start": 1103,
          "end": 1107
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1142,
                        "end": 1147
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1139,
                      "end": 1147
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1121,
                  "end": 1149
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1152,
                  "end": 1153
                },
                "definite": false,
                "start": 1121,
                "end": 1153
              }
            ],
            "declare": false,
            "start": 1115,
            "end": 1154
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1186,
                        "end": 1191
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1183,
                      "end": 1191
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1165,
                  "end": 1193
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1196,
                    "end": 1197
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1201,
                      "end": 1202
                    },
                    "typeArguments": null,
                    "start": 1201,
                    "end": 1202
                  },
                  "start": 1196,
                  "end": 1202
                },
                "definite": false,
                "start": 1165,
                "end": 1202
              }
            ],
            "declare": false,
            "start": 1159,
            "end": 1203
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1216,
                        "end": 1226
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1228,
                        "end": 1230
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1216,
                      "end": 1230
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1235,
                        "end": 1240
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1232,
                      "end": 1240
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1214,
                  "end": 1242
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1245,
                  "end": 1246
                },
                "definite": false,
                "start": 1214,
                "end": 1246
              }
            ],
            "declare": false,
            "start": 1208,
            "end": 1247
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1260,
                        "end": 1270
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1272,
                        "end": 1274
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1260,
                      "end": 1274
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1279,
                        "end": 1284
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1276,
                      "end": 1284
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1258,
                  "end": 1286
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1289,
                    "end": 1290
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1294,
                      "end": 1295
                    },
                    "typeArguments": null,
                    "start": 1294,
                    "end": 1295
                  },
                  "start": 1289,
                  "end": 1295
                },
                "definite": false,
                "start": 1258,
                "end": 1295
              }
            ],
            "declare": false,
            "start": 1252,
            "end": 1296
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1302,
                "end": 1307
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1308,
                "end": 1318
              },
              "optional": false,
              "computed": false,
              "start": 1302,
              "end": 1318
            },
            "directive": null,
            "start": 1302,
            "end": 1319
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1324,
                "end": 1329
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1330,
                "end": 1340
              },
              "optional": false,
              "computed": false,
              "start": 1324,
              "end": 1340
            },
            "directive": null,
            "start": 1324,
            "end": 1341
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1346,
                "end": 1351
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1352,
                "end": 1362
              },
              "optional": false,
              "computed": false,
              "start": 1346,
              "end": 1362
            },
            "directive": null,
            "start": 1346,
            "end": 1363
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1368,
                "end": 1373
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1374,
                "end": 1384
              },
              "optional": false,
              "computed": false,
              "start": 1368,
              "end": 1384
            },
            "directive": null,
            "start": 1368,
            "end": 1385
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1391,
                "end": 1396
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1397,
                "end": 1408
              },
              "optional": false,
              "computed": false,
              "start": 1391,
              "end": 1408
            },
            "directive": null,
            "start": 1391,
            "end": 1409
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1414,
                "end": 1419
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1420,
                "end": 1431
              },
              "optional": false,
              "computed": false,
              "start": 1414,
              "end": 1431
            },
            "directive": null,
            "start": 1414,
            "end": 1432
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1437,
                "end": 1442
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1443,
                "end": 1454
              },
              "optional": false,
              "computed": false,
              "start": 1437,
              "end": 1454
            },
            "directive": null,
            "start": 1437,
            "end": 1455
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1460,
                "end": 1465
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1466,
                "end": 1477
              },
              "optional": false,
              "computed": false,
              "start": 1460,
              "end": 1477
            },
            "directive": null,
            "start": 1460,
            "end": 1478
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1484,
                "end": 1489
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "protectedProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1490,
                "end": 1503
              },
              "optional": false,
              "computed": false,
              "start": 1484,
              "end": 1503
            },
            "directive": null,
            "start": 1484,
            "end": 1504
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1509,
                "end": 1514
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "protectedProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1515,
                "end": 1528
              },
              "optional": false,
              "computed": false,
              "start": 1509,
              "end": 1528
            },
            "directive": null,
            "start": 1509,
            "end": 1529
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1534,
                "end": 1539
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "protectedProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1540,
                "end": 1553
              },
              "optional": false,
              "computed": false,
              "start": 1534,
              "end": 1553
            },
            "directive": null,
            "start": 1534,
            "end": 1554
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1559,
                "end": 1564
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "protectedProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1565,
                "end": 1578
              },
              "optional": false,
              "computed": false,
              "start": 1559,
              "end": 1578
            },
            "directive": null,
            "start": 1559,
            "end": 1579
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1585,
                "end": 1590
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1591,
                "end": 1597
              },
              "optional": false,
              "computed": false,
              "start": 1585,
              "end": 1597
            },
            "directive": null,
            "start": 1585,
            "end": 1598
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1603,
                "end": 1608
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1609,
                "end": 1615
              },
              "optional": false,
              "computed": false,
              "start": 1603,
              "end": 1615
            },
            "directive": null,
            "start": 1603,
            "end": 1616
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1621,
                "end": 1626
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1627,
                "end": 1633
              },
              "optional": false,
              "computed": false,
              "start": 1621,
              "end": 1633
            },
            "directive": null,
            "start": 1621,
            "end": 1634
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1639,
                "end": 1644
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1645,
                "end": 1651
              },
              "optional": false,
              "computed": false,
              "start": 1639,
              "end": 1651
            },
            "directive": null,
            "start": 1639,
            "end": 1652
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1658,
                "end": 1663
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1664,
                "end": 1670
              },
              "optional": false,
              "computed": false,
              "start": 1658,
              "end": 1670
            },
            "directive": null,
            "start": 1658,
            "end": 1671
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1676,
                "end": 1681
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1682,
                "end": 1688
              },
              "optional": false,
              "computed": false,
              "start": 1676,
              "end": 1688
            },
            "directive": null,
            "start": 1676,
            "end": 1689
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1694,
                "end": 1699
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1700,
                "end": 1706
              },
              "optional": false,
              "computed": false,
              "start": 1694,
              "end": 1706
            },
            "directive": null,
            "start": 1694,
            "end": 1707
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1712,
                "end": 1717
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1718,
                "end": 1724
              },
              "optional": false,
              "computed": false,
              "start": 1712,
              "end": 1724
            },
            "directive": null,
            "start": 1712,
            "end": 1725
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1731,
                "end": 1736
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 1737,
                "end": 1743
              },
              "optional": false,
              "computed": false,
              "start": 1731,
              "end": 1743
            },
            "directive": null,
            "start": 1731,
            "end": 1744
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1749,
                "end": 1754
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 1755,
                "end": 1761
              },
              "optional": false,
              "computed": false,
              "start": 1749,
              "end": 1761
            },
            "directive": null,
            "start": 1749,
            "end": 1762
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1767,
                "end": 1772
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 1773,
                "end": 1779
              },
              "optional": false,
              "computed": false,
              "start": 1767,
              "end": 1779
            },
            "directive": null,
            "start": 1767,
            "end": 1780
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1785,
                "end": 1790
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 1791,
                "end": 1797
              },
              "optional": false,
              "computed": false,
              "start": 1785,
              "end": 1797
            },
            "directive": null,
            "start": 1785,
            "end": 1798
          }
        ],
        "start": 1109,
        "end": 1800
      },
      "expression": false,
      "start": 1069,
      "end": 1800
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1800
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 14,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 35,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 42,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 70,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 78,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 107,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 117,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139
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
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 185,
    "end": 191
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 210,
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
    "value": "_v",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 280,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 283,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 307,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 331,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 334,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 344,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 349,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 363,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 371,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "_1",
    "start": 383,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 390,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 414,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 422,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "_2",
    "start": 434,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 438,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 441,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 451,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 456,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 477,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 497,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 503,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 523,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 529,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 549,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 555,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 576,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 582,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 603,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 609,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 630,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 636,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 657,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 663,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 685,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 691,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 714,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 720,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 743,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 749,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 772,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 778,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 802,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 824,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 830,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 846,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 852,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 868,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 874,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 891,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 897,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 913,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 919,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 935,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 941,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 957,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 963,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 980,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 986,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1002,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1008,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1024,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1030,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1046,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1052,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1069,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "destructure",
    "start": 1078,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1092,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1115,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 1142,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1159,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1183,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1186,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1198,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1208,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 1216,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "_1",
    "start": 1228,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1232,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1235,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1252,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 1260,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "_2",
    "start": 1272,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1276,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1279,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1291,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 1302,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 1308,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1324,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 1330,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1346,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 1352,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1368,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 1374,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 1391,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 1397,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1414,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 1420,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1437,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 1443,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1460,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 1466,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 1484,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 1490,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1509,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 1515,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1534,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 1540,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1559,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 1565,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 1585,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 1591,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1603,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 1609,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1621,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 1627,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1639,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 1645,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 1658,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 1664,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1676,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 1682,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1694,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 1700,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1712,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 1718,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 1731,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1737,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1749,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1755,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1767,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1773,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1785,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1791,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1799,
    "end": 1800
  }
]
```

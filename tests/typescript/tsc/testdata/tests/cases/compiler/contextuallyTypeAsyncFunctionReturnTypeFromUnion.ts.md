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
        "name": "StateMachine",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 43
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
              "start": 44,
              "end": 45
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 45
          }
        ],
        "start": 43,
        "end": 46
      },
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
              "name": "onDone",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 57
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
                          "start": 63,
                          "end": 64
                        },
                        "typeArguments": null,
                        "start": 63,
                        "end": 64
                      },
                      "start": 61,
                      "end": 64
                    },
                    "start": 60,
                    "end": 64
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 69,
                    "end": 73
                  },
                  "start": 66,
                  "end": 73
                },
                "start": 59,
                "end": 73
              },
              "start": 57,
              "end": 73
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 51,
            "end": 74
          }
        ],
        "start": 47,
        "end": 76
      },
      "abstract": false,
      "declare": true,
      "start": 17,
      "end": 76
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createMachine",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 108
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
              "start": 109,
              "end": 110
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 109,
            "end": 110
          }
        ],
        "start": 108,
        "end": 111
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "implementations",
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
                    "name": "services",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 141
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 143,
                        "end": 149
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 150,
                            "end": 156
                          },
                          {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Promise",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 164,
                                      "end": 171
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
                                            "start": 172,
                                            "end": 173
                                          },
                                          "typeArguments": null,
                                          "start": 172,
                                          "end": 173
                                        }
                                      ],
                                      "start": 171,
                                      "end": 174
                                    },
                                    "start": 164,
                                    "end": 174
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "StateMachine",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 177,
                                      "end": 189
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
                                            "start": 190,
                                            "end": 191
                                          },
                                          "typeArguments": null,
                                          "start": 190,
                                          "end": 191
                                        }
                                      ],
                                      "start": 189,
                                      "end": 192
                                    },
                                    "start": 177,
                                    "end": 192
                                  }
                                ],
                                "start": 164,
                                "end": 192
                              },
                              "start": 161,
                              "end": 192
                            },
                            "start": 158,
                            "end": 192
                          }
                        ],
                        "start": 149,
                        "end": 193
                      },
                      "start": 143,
                      "end": 193
                    },
                    "start": 141,
                    "end": 193
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 133,
                  "end": 194
                }
              ],
              "start": 129,
              "end": 196
            },
            "start": 127,
            "end": 196
          },
          "start": 112,
          "end": 196
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 199,
          "end": 203
        },
        "start": 197,
        "end": 203
      },
      "body": null,
      "expression": false,
      "start": 78,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 219
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 227
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 229,
                      "end": 235
                    },
                    "start": 227,
                    "end": 235
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 222,
                  "end": 235
                }
              ],
              "start": 220,
              "end": 237
            }
          ],
          "start": 219,
          "end": 238
        },
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
                  "name": "services",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 251
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
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 259,
                        "end": 263
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": true,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 277,
                              "end": 284
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "reject",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 285,
                              "end": 291
                            },
                            "optional": false,
                            "computed": false,
                            "start": 277,
                            "end": 291
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "some err",
                              "raw": "\"some err\"",
                              "start": 292,
                              "end": 302
                            }
                          ],
                          "optional": false,
                          "start": 277,
                          "end": 303
                        },
                        "id": null,
                        "generator": false,
                        "start": 265,
                        "end": 303
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 259,
                      "end": 303
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 315,
                        "end": 320
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": true,
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
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 338,
                                    "end": 345
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "reject",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 346,
                                    "end": 352
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 338,
                                  "end": 352
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "some err",
                                    "raw": "\"some err\"",
                                    "start": 353,
                                    "end": 363
                                  }
                                ],
                                "optional": false,
                                "start": 338,
                                "end": 364
                              },
                              "start": 331,
                              "end": 365
                            }
                          ],
                          "start": 323,
                          "end": 371
                        },
                        "expression": false,
                        "start": 320,
                        "end": 371
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 309,
                      "end": 371
                    }
                  ],
                  "start": 253,
                  "end": 376
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 243,
                "end": 376
              }
            ],
            "start": 239,
            "end": 379
          }
        ],
        "optional": false,
        "start": 206,
        "end": 380
      },
      "directive": null,
      "start": 206,
      "end": 381
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 395
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 405,
                    "end": 412
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
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
                              "name": "count",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 415,
                              "end": 420
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 422,
                                "end": 428
                              },
                              "start": 420,
                              "end": 428
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 415,
                            "end": 428
                          }
                        ],
                        "start": 413,
                        "end": 430
                      }
                    ],
                    "start": 412,
                    "end": 431
                  },
                  "start": 405,
                  "end": 431
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StateMachine",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 434,
                    "end": 446
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
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
                              "name": "count",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 449,
                              "end": 454
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 456,
                                "end": 462
                              },
                              "start": 454,
                              "end": 462
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 449,
                            "end": 462
                          }
                        ],
                        "start": 447,
                        "end": 464
                      }
                    ],
                    "start": 446,
                    "end": 465
                  },
                  "start": 434,
                  "end": 465
                }
              ],
              "start": 405,
              "end": 465
            },
            "start": 402,
            "end": 465
          },
          "start": 399,
          "end": 465
        },
        "start": 397,
        "end": 465
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 496
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 497,
                    "end": 503
                  },
                  "optional": false,
                  "computed": false,
                  "start": 489,
                  "end": 503
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "some err",
                    "raw": "'some err'",
                    "start": 504,
                    "end": 514
                  }
                ],
                "optional": false,
                "start": 489,
                "end": 515
              },
              "id": null,
              "generator": false,
              "start": 477,
              "end": 515
            },
            "start": 470,
            "end": 515
          }
        ],
        "start": 466,
        "end": 517
      },
      "expression": false,
      "start": 383,
      "end": 517
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "load",
        "optional": false,
        "typeAnnotation": null,
        "start": 577,
        "end": 581
      },
      "generator": false,
      "async": false,
      "declare": true,
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
            "start": 585,
            "end": 592
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSBooleanKeyword",
                "start": 593,
                "end": 600
              }
            ],
            "start": 592,
            "end": 601
          },
          "start": 585,
          "end": 601
        },
        "start": 583,
        "end": 601
      },
      "body": null,
      "expression": false,
      "start": 560,
      "end": 602
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LoadCallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 609,
        "end": 621
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 637
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 638,
                      "end": 645
                    }
                  ],
                  "start": 637,
                  "end": 646
                },
                "start": 630,
                "end": 646
              },
              {
                "type": "TSStringKeyword",
                "start": 649,
                "end": 655
              }
            ],
            "start": 630,
            "end": 655
          },
          "start": 627,
          "end": 655
        },
        "start": 624,
        "end": 655
      },
      "declare": false,
      "start": 604,
      "end": 656
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
            "name": "cb1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LoadCallback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 732,
                  "end": 744
                },
                "typeArguments": null,
                "start": 732,
                "end": 744
              },
              "start": 730,
              "end": 744
            },
            "start": 727,
            "end": 744
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "load",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 763
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 759,
                  "end": 765
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 766,
                  "end": 770
                },
                "optional": false,
                "computed": false,
                "start": 759,
                "end": 770
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 771,
                      "end": 772
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 776,
                    "end": 777
                  },
                  "id": null,
                  "generator": false,
                  "start": 771,
                  "end": 777
                }
              ],
              "optional": false,
              "start": 759,
              "end": 778
            },
            "id": null,
            "generator": false,
            "start": 747,
            "end": 778
          },
          "definite": false,
          "start": 727,
          "end": 778
        }
      ],
      "declare": false,
      "start": 721,
      "end": 779
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
            "name": "cb2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LoadCallback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 803
                },
                "typeArguments": null,
                "start": 791,
                "end": 803
              },
              "start": 789,
              "end": 803
            },
            "start": 786,
            "end": 803
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "load",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 822
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 818,
              "end": 824
            },
            "id": null,
            "generator": false,
            "start": 806,
            "end": 824
          },
          "definite": false,
          "start": 786,
          "end": 824
        }
      ],
      "declare": false,
      "start": 780,
      "end": 825
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
            "name": "cb3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LoadCallback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 837,
                  "end": 849
                },
                "typeArguments": null,
                "start": 837,
                "end": 849
              },
              "start": 835,
              "end": 849
            },
            "start": 832,
            "end": 849
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "load",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 858,
                    "end": 862
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 858,
                  "end": 864
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 869
                },
                "optional": false,
                "computed": false,
                "start": 858,
                "end": 869
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 870,
                      "end": 871
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 875,
                    "end": 876
                  },
                  "id": null,
                  "generator": false,
                  "start": 870,
                  "end": 876
                }
              ],
              "optional": false,
              "start": 858,
              "end": 877
            },
            "id": null,
            "generator": false,
            "start": 852,
            "end": 877
          },
          "definite": false,
          "start": 832,
          "end": 877
        }
      ],
      "declare": false,
      "start": 826,
      "end": 878
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 878
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 17,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "StateMachine",
    "start": 31,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "onDone",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 66,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 78,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 86,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 95,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "implementations",
    "start": 112,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "services",
    "start": 133,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
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
    "value": "=>",
    "start": 161,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 164,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "StateMachine",
    "start": 177,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 206,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "services",
    "start": 243,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 265,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 274,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 277,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "String",
    "value": "\"some err\"",
    "start": 292,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 309,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 315,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 331,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 338,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 346,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "String",
    "value": "\"some err\"",
    "start": 353,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 383,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 392,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 402,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 405,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 415,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "StateMachine",
    "start": 434,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 449,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 470,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 477,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 486,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 489,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "String",
    "value": "'some err'",
    "start": 504,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 560,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 568,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "load",
    "start": 577,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 585,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 593,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 604,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "LoadCallback",
    "start": 609,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "Promise",
    "start": 630,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 638,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 649,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 721,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "cb1",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "LoadCallback",
    "start": 732,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 747,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 756,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "load",
    "start": 759,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 766,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 773,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 780,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "cb2",
    "start": 786,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "LoadCallback",
    "start": 791,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 806,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 815,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "load",
    "start": 818,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 826,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "cb3",
    "start": 832,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "LoadCallback",
    "start": 837,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 855,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "load",
    "start": 858,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 865,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 872,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878
  }
]
```

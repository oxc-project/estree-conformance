__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 30
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "initializer": null,
            "computed": false,
            "start": 33,
            "end": 34
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "initializer": null,
            "computed": false,
            "start": 36,
            "end": 37
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "initializer": null,
            "computed": false,
            "start": 39,
            "end": 40
          }
        ],
        "start": 31,
        "end": 42
      },
      "const": false,
      "declare": false,
      "start": 21,
      "end": 42
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PayloadStructure",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 70
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
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 85
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 91
                },
                "typeArguments": null,
                "start": 87,
                "end": 91
              },
              "start": 85,
              "end": 91
            },
            "accessibility": null,
            "static": false,
            "start": 77,
            "end": 92
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 101
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 103,
                "end": 110
              },
              "start": 101,
              "end": 110
            },
            "accessibility": null,
            "static": false,
            "start": 97,
            "end": 111
          }
        ],
        "start": 71,
        "end": 113
      },
      "declare": false,
      "start": 44,
      "end": 113
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PayloadA",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 133
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PayloadStructure",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 158
          },
          "typeArguments": null,
          "start": 142,
          "end": 158
        }
      ],
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
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 179
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 181
                  },
                  "start": 175,
                  "end": 181
                },
                "typeArguments": null,
                "start": 175,
                "end": 181
              },
              "start": 173,
              "end": 181
            },
            "accessibility": null,
            "static": false,
            "start": 165,
            "end": 182
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 191
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 193,
                "end": 199
              },
              "start": 191,
              "end": 199
            },
            "accessibility": null,
            "static": false,
            "start": 187,
            "end": 200
          }
        ],
        "start": 159,
        "end": 202
      },
      "declare": false,
      "start": 115,
      "end": 202
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PayloadB",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 222
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PayloadStructure",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 247
          },
          "typeArguments": null,
          "start": 231,
          "end": 247
        }
      ],
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
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 262
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 264,
                    "end": 268
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 269,
                    "end": 270
                  },
                  "start": 264,
                  "end": 270
                },
                "typeArguments": null,
                "start": 264,
                "end": 270
              },
              "start": 262,
              "end": 270
            },
            "accessibility": null,
            "static": false,
            "start": 254,
            "end": 271
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 280
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 282,
                "end": 288
              },
              "start": 280,
              "end": 288
            },
            "accessibility": null,
            "static": false,
            "start": 276,
            "end": 289
          }
        ],
        "start": 248,
        "end": 291
      },
      "declare": false,
      "start": 204,
      "end": 291
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PayloadC",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 311
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PayloadStructure",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 336
          },
          "typeArguments": null,
          "start": 320,
          "end": 336
        }
      ],
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
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 351
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 353,
                    "end": 357
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 359
                  },
                  "start": 353,
                  "end": 359
                },
                "typeArguments": null,
                "start": 353,
                "end": 359
              },
              "start": 351,
              "end": 359
            },
            "accessibility": null,
            "static": false,
            "start": 343,
            "end": 360
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 365,
              "end": 369
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 381,
                      "end": 382
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 384,
                        "end": 390
                      },
                      "start": 382,
                      "end": 390
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 381,
                    "end": 391
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 400,
                      "end": 401
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 403,
                        "end": 409
                      },
                      "start": 401,
                      "end": 409
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 400,
                    "end": 410
                  }
                ],
                "start": 371,
                "end": 416
              },
              "start": 369,
              "end": 416
            },
            "accessibility": null,
            "static": false,
            "start": 365,
            "end": 417
          }
        ],
        "start": 337,
        "end": 419
      },
      "declare": false,
      "start": 293,
      "end": 419
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Payload",
        "optional": false,
        "typeAnnotation": null,
        "start": 426,
        "end": 433
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
              "name": "PayloadA",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 444
            },
            "typeArguments": null,
            "start": 436,
            "end": 444
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PayloadB",
              "optional": false,
              "typeAnnotation": null,
              "start": 447,
              "end": 455
            },
            "typeArguments": null,
            "start": 447,
            "end": 455
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PayloadC",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 466
            },
            "typeArguments": null,
            "start": 458,
            "end": 466
          }
        ],
        "start": 436,
        "end": 466
      },
      "declare": false,
      "start": 421,
      "end": 466
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MappedPayload2",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 487
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 497,
          "end": 498
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 506
          },
          "typeArguments": null,
          "start": 502,
          "end": 506
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Payload",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 518,
                          "end": 525
                        },
                        "typeArguments": null,
                        "start": 518,
                        "end": 525
                      },
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
                              "name": "dataType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 530,
                              "end": 538
                            },
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
                                  "start": 540,
                                  "end": 541
                                },
                                "typeArguments": null,
                                "start": 540,
                                "end": 541
                              },
                              "start": 538,
                              "end": 541
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 530,
                            "end": 541
                          }
                        ],
                        "start": 528,
                        "end": 543
                      }
                    ],
                    "start": 518,
                    "end": 543
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "data",
                      "raw": "\"data\"",
                      "start": 545,
                      "end": 551
                    },
                    "start": 545,
                    "end": 551
                  },
                  "start": 517,
                  "end": 552
                },
                "start": 515,
                "end": 552
              },
              "start": 511,
              "end": 552
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 557,
              "end": 561
            },
            "start": 554,
            "end": 561
          },
          "start": 510,
          "end": 561
        },
        "optional": true,
        "readonly": null,
        "start": 490,
        "end": 563
      },
      "declare": false,
      "start": 468,
      "end": 563
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
            "name": "payloads2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MappedPayload2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 582,
                  "end": 596
                },
                "typeArguments": null,
                "start": 582,
                "end": 596
              },
              "start": 580,
              "end": 596
            },
            "start": 571,
            "end": 596
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 606,
                    "end": 610
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 611,
                    "end": 612
                  },
                  "optional": false,
                  "computed": false,
                  "start": 606,
                  "end": 612
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 615,
                      "end": 619
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
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 625,
                              "end": 632
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 633,
                              "end": 636
                            },
                            "optional": false,
                            "computed": false,
                            "start": 625,
                            "end": 636
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 637,
                              "end": 641
                            }
                          ],
                          "optional": false,
                          "start": 625,
                          "end": 642
                        },
                        "directive": null,
                        "start": 625,
                        "end": 642
                      }
                    ],
                    "start": 623,
                    "end": 644
                  },
                  "id": null,
                  "generator": false,
                  "start": 615,
                  "end": 644
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 605,
                "end": 644
              }
            ],
            "start": 599,
            "end": 646
          },
          "definite": false,
          "start": 571,
          "end": 646
        }
      ],
      "declare": false,
      "start": 565,
      "end": 646
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetPayload",
        "optional": false,
        "typeAnnotation": null,
        "start": 685,
        "end": 695
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
              "start": 696,
              "end": 697
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 713
              },
              "typeArguments": null,
              "start": 706,
              "end": 713
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 696,
            "end": 713
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 716
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 731,
                  "end": 732
                },
                "typeArguments": null,
                "start": 731,
                "end": 732
              },
              "start": 725,
              "end": 732
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 715,
            "end": 732
          }
        ],
        "start": 695,
        "end": 733
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 736,
            "end": 737
          },
          "typeArguments": null,
          "start": 736,
          "end": 737
        },
        "extendsType": {
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
                "name": "dataType",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 756
              },
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
                    "start": 758,
                    "end": 759
                  },
                  "typeArguments": null,
                  "start": 758,
                  "end": 759
                },
                "start": 756,
                "end": 759
              },
              "accessibility": null,
              "static": false,
              "start": 748,
              "end": 759
            }
          ],
          "start": 746,
          "end": 761
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 764,
              "end": 765
            },
            "typeArguments": null,
            "start": 764,
            "end": 765
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "data",
              "raw": "\"data\"",
              "start": 766,
              "end": 772
            },
            "start": 766,
            "end": 772
          },
          "start": 764,
          "end": 773
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 776,
          "end": 781
        },
        "start": 736,
        "end": 781
      },
      "declare": false,
      "start": 680,
      "end": 782
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyOneof",
        "optional": false,
        "typeAnnotation": null,
        "start": 811,
        "end": 819
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "oneofKind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 824,
                  "end": 833
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 835,
                    "end": 841
                  },
                  "start": 833,
                  "end": 841
                },
                "accessibility": null,
                "static": false,
                "start": 824,
                "end": 842
              },
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 847,
                        "end": 853
                      },
                      "start": 845,
                      "end": 853
                    },
                    "start": 844,
                    "end": 853
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 856,
                    "end": 863
                  },
                  "start": 854,
                  "end": 863
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 843,
                "end": 863
              }
            ],
            "start": 822,
            "end": 865
          },
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
                  "name": "oneofKind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 870,
                  "end": 879
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 881,
                    "end": 890
                  },
                  "start": 879,
                  "end": 890
                },
                "accessibility": null,
                "static": false,
                "start": 870,
                "end": 890
              }
            ],
            "start": 868,
            "end": 892
          }
        ],
        "start": 822,
        "end": 892
      },
      "declare": false,
      "start": 806,
      "end": 893
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyOneofKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 899,
        "end": 911
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
              "start": 912,
              "end": 913
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyOneof",
                "optional": false,
                "typeAnnotation": null,
                "start": 922,
                "end": 930
              },
              "typeArguments": null,
              "start": 922,
              "end": 930
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 912,
            "end": 930
          }
        ],
        "start": 911,
        "end": 931
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 934,
            "end": 935
          },
          "typeArguments": null,
          "start": 934,
          "end": 935
        },
        "extendsType": {
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
                "name": "oneofKind",
                "optional": false,
                "typeAnnotation": null,
                "start": 946,
                "end": 955
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                      "start": 963,
                      "end": 964
                    },
                    "typeArguments": null,
                    "start": 963,
                    "end": 964
                  },
                  "start": 957,
                  "end": 964
                },
                "start": 955,
                "end": 964
              },
              "accessibility": null,
              "static": false,
              "start": 946,
              "end": 964
            }
          ],
          "start": 944,
          "end": 966
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 974
            },
            "typeArguments": null,
            "start": 973,
            "end": 974
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "oneofKind",
              "raw": "'oneofKind'",
              "start": 975,
              "end": 986
            },
            "start": 975,
            "end": 986
          },
          "start": 973,
          "end": 987
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 994,
          "end": 999
        },
        "start": 934,
        "end": 999
      },
      "declare": false,
      "start": 894,
      "end": 1000
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 1000
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 21,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 44,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "PayloadStructure",
    "start": 54,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "dataType",
    "start": 77,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 103,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 115,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "PayloadA",
    "start": 125,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 134,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "PayloadStructure",
    "start": 142,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "dataType",
    "start": 165,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 204,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "PayloadB",
    "start": 214,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 223,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "PayloadStructure",
    "start": 231,
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
    "value": "dataType",
    "start": 254,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 264,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 293,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "PayloadC",
    "start": 303,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 312,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "PayloadStructure",
    "start": 320,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "dataType",
    "start": 343,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 353,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 384,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 421,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 426,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "PayloadA",
    "start": 436,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "PayloadB",
    "start": 447,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "PayloadC",
    "start": 458,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 468,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "MappedPayload2",
    "start": 473,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "[",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 499,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 502,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 511,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 518,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "dataType",
    "start": 530,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 544,
    "end": 545
  },
  {
    "type": "String",
    "value": "\"data\"",
    "start": 545,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 551,
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
    "value": "=>",
    "start": 554,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 557,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 565,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "payloads2",
    "start": 571,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "MappedPayload2",
    "start": 582,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 606,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 615,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 620,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 625,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 633,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 637,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 680,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "GetPayload",
    "start": 685,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 698,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "Payload",
    "start": 706,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 717,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 725,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 738,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "dataType",
    "start": 748,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 765,
    "end": 766
  },
  {
    "type": "String",
    "value": "\"data\"",
    "start": 766,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 776,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 806,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "AnyOneof",
    "start": 811,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "oneofKind",
    "start": 824,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 835,
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
    "value": "[",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 847,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 856,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "value": "oneofKind",
    "start": 870,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 881,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 894,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "AnyOneofKind",
    "start": 899,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 914,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "AnyOneof",
    "start": 922,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 936,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "oneofKind",
    "start": 946,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 957,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 974,
    "end": 975
  },
  {
    "type": "String",
    "value": "'oneofKind'",
    "start": 975,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 994,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 999,
    "end": 1000
  }
]
```

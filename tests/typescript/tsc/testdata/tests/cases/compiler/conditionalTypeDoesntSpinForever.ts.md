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
          "name": "PubSubRecordIsStoredInRedisAsA",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 236
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "redisHash",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 252
              },
              "initializer": {
                "type": "Literal",
                "value": "redisHash",
                "raw": "\"redisHash\"",
                "start": 255,
                "end": 266
              },
              "computed": false,
              "start": 243,
              "end": 266
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "jsonEncodedRedisString",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 294
              },
              "initializer": {
                "type": "Literal",
                "value": "jsonEncodedRedisString",
                "raw": "\"jsonEncodedRedisString\"",
                "start": 297,
                "end": 321
              },
              "computed": false,
              "start": 272,
              "end": 321
            }
          ],
          "start": 237,
          "end": 325
        },
        "const": false,
        "declare": false,
        "start": 201,
        "end": 325
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 194,
      "end": 325
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PubSubRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 360
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "NAME",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 365
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 374,
                "end": 380
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 361,
              "end": 380
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "RECORD",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 388
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 382,
              "end": 388
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDENTIFIER",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 400
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 409,
                  "end": 416
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RECORD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 417,
                        "end": 423
                      },
                      "typeArguments": null,
                      "start": 417,
                      "end": 423
                    }
                  ],
                  "start": 416,
                  "end": 424
                },
                "start": 409,
                "end": 424
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 390,
              "end": 424
            }
          ],
          "start": 360,
          "end": 425
        },
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
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 436
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NAME",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 442
                  },
                  "typeArguments": null,
                  "start": 438,
                  "end": 442
                },
                "start": 436,
                "end": 442
              },
              "accessibility": null,
              "static": false,
              "start": 432,
              "end": 443
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "record",
                "optional": false,
                "typeAnnotation": null,
                "start": 448,
                "end": 454
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RECORD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 456,
                    "end": 462
                  },
                  "typeArguments": null,
                  "start": 456,
                  "end": 462
                },
                "start": 454,
                "end": 462
              },
              "accessibility": null,
              "static": false,
              "start": 448,
              "end": 463
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "identifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 478
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IDENTIFIER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 490
                  },
                  "typeArguments": null,
                  "start": 480,
                  "end": 490
                },
                "start": 478,
                "end": 490
              },
              "accessibility": null,
              "static": false,
              "start": 468,
              "end": 491
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "storedAs",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 504
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PubSubRecordIsStoredInRedisAsA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 536
                  },
                  "typeArguments": null,
                  "start": 506,
                  "end": 536
                },
                "start": 504,
                "end": 536
              },
              "accessibility": null,
              "static": false,
              "start": 496,
              "end": 537
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 569
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 571,
                  "end": 577
                },
                "start": 569,
                "end": 577
              },
              "accessibility": null,
              "static": false,
              "start": 542,
              "end": 578
            }
          ],
          "start": 426,
          "end": 582
        },
        "declare": false,
        "start": 338,
        "end": 582
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 331,
      "end": 582
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NameFieldConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 593,
        "end": 613
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 620
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 614,
            "end": 620
          }
        ],
        "start": 613,
        "end": 621
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 628,
            "end": 634
          },
          "typeArguments": null,
          "start": 628,
          "end": 634
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
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 648
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 650,
                  "end": 653
                },
                "start": 648,
                "end": 653
              },
              "accessibility": null,
              "static": false,
              "start": 644,
              "end": 653
            }
          ],
          "start": 643,
          "end": 654
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 657,
          "end": 659
        },
        "falseType": {
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
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 674
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TYPE",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 677,
                          "end": 681
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 677,
                        "end": 681
                      }
                    ],
                    "start": 676,
                    "end": 682
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TYPE",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 687,
                            "end": 691
                          },
                          "typeArguments": null,
                          "start": 687,
                          "end": 691
                        },
                        "start": 685,
                        "end": 691
                      },
                      "start": 683,
                      "end": 691
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 696,
                        "end": 717
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 718,
                                  "end": 724
                                },
                                "typeArguments": null,
                                "start": 718,
                                "end": 724
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
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 728,
                                      "end": 732
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TYPE",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 734,
                                          "end": 738
                                        },
                                        "typeArguments": null,
                                        "start": 734,
                                        "end": 738
                                      },
                                      "start": 732,
                                      "end": 738
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 728,
                                    "end": 738
                                  }
                                ],
                                "start": 727,
                                "end": 739
                              }
                            ],
                            "start": 718,
                            "end": 739
                          }
                        ],
                        "start": 717,
                        "end": 740
                      },
                      "start": 696,
                      "end": 740
                    },
                    "start": 693,
                    "end": 740
                  },
                  "start": 676,
                  "end": 740
                },
                "start": 674,
                "end": 740
              },
              "accessibility": null,
              "static": false,
              "start": 670,
              "end": 740
            }
          ],
          "start": 662,
          "end": 746
        },
        "start": 628,
        "end": 746
      },
      "declare": false,
      "start": 588,
      "end": 746
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
            "name": "buildNameFieldConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 783
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 787,
                    "end": 793
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 787,
                  "end": 793
                }
              ],
              "start": 786,
              "end": 794
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 802,
                      "end": 808
                    },
                    "typeArguments": null,
                    "start": 802,
                    "end": 808
                  },
                  "start": 800,
                  "end": 808
                },
                "start": 795,
                "end": 808
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "name",
                  "raw": "\"name\"",
                  "start": 819,
                  "end": 825
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "soFar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 829,
                  "end": 834
                },
                "start": 819,
                "end": 834
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 837,
                "end": 839
              },
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 850,
                      "end": 854
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 857,
                              "end": 861
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 857,
                            "end": 861
                          }
                        ],
                        "start": 856,
                        "end": 862
                      },
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TYPE",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 873,
                                  "end": 877
                                },
                                "typeArguments": null,
                                "start": 873,
                                "end": 877
                              },
                              "start": 871,
                              "end": 877
                            },
                            "start": 863,
                            "end": 877
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 880,
                            "end": 889
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 863,
                          "end": 889
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 902,
                            "end": 923
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 924,
                                    "end": 930
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 931,
                                    "end": 937
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 924,
                                  "end": 937
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 938,
                                    "end": 940
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 942,
                                    "end": 947
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 950,
                                          "end": 954
                                        },
                                        "value": {
                                          "type": "TSAsExpression",
                                          "expression": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instance",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 956,
                                            "end": 964
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 968,
                                              "end": 972
                                            },
                                            "typeArguments": null,
                                            "start": 968,
                                            "end": 972
                                          },
                                          "start": 956,
                                          "end": 972
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 950,
                                        "end": 972
                                      }
                                    ],
                                    "start": 949,
                                    "end": 973
                                  }
                                ],
                                "optional": false,
                                "start": 924,
                                "end": 974
                              },
                              "typeAnnotation": {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 978,
                                      "end": 984
                                    },
                                    "typeArguments": null,
                                    "start": 978,
                                    "end": 984
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
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 988,
                                          "end": 992
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 994,
                                              "end": 998
                                            },
                                            "typeArguments": null,
                                            "start": 994,
                                            "end": 998
                                          },
                                          "start": 992,
                                          "end": 998
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 988,
                                        "end": 998
                                      }
                                    ],
                                    "start": 987,
                                    "end": 999
                                  }
                                ],
                                "start": 978,
                                "end": 999
                              },
                              "start": 924,
                              "end": 999
                            }
                          ],
                          "optional": false,
                          "start": 902,
                          "end": 1000
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1004,
                            "end": 1025
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1026,
                                      "end": 1032
                                    },
                                    "typeArguments": null,
                                    "start": 1026,
                                    "end": 1032
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
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1036,
                                          "end": 1040
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1042,
                                              "end": 1046
                                            },
                                            "typeArguments": null,
                                            "start": 1042,
                                            "end": 1046
                                          },
                                          "start": 1040,
                                          "end": 1046
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1036,
                                        "end": 1046
                                      }
                                    ],
                                    "start": 1035,
                                    "end": 1047
                                  }
                                ],
                                "start": 1026,
                                "end": 1047
                              }
                            ],
                            "start": 1025,
                            "end": 1048
                          },
                          "start": 1004,
                          "end": 1048
                        },
                        "start": 902,
                        "end": 1048
                      },
                      "id": null,
                      "generator": false,
                      "start": 856,
                      "end": 1048
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 850,
                    "end": 1048
                  }
                ],
                "start": 842,
                "end": 1054
              },
              "start": 819,
              "end": 1054
            },
            "id": null,
            "generator": false,
            "start": 786,
            "end": 1058
          },
          "definite": false,
          "start": 758,
          "end": 1058
        }
      ],
      "declare": false,
      "start": 752,
      "end": 1059
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StoredAsConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1070,
        "end": 1089
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 1090,
              "end": 1096
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1090,
            "end": 1096
          }
        ],
        "start": 1089,
        "end": 1097
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 1104,
            "end": 1110
          },
          "typeArguments": null,
          "start": 1104,
          "end": 1110
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
                "name": "storedAs",
                "optional": false,
                "typeAnnotation": null,
                "start": 1120,
                "end": 1128
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1130,
                  "end": 1133
                },
                "start": 1128,
                "end": 1133
              },
              "accessibility": null,
              "static": false,
              "start": 1120,
              "end": 1133
            }
          ],
          "start": 1119,
          "end": 1134
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1137,
          "end": 1139
        },
        "falseType": {
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
                "name": "storedAsJsonEncodedRedisString",
                "optional": false,
                "typeAnnotation": null,
                "start": 1150,
                "end": 1180
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1188,
                        "end": 1209
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1210,
                                  "end": 1216
                                },
                                "typeArguments": null,
                                "start": 1210,
                                "end": 1216
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
                                      "name": "storedAs",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1220,
                                      "end": 1228
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
                                            "name": "PubSubRecordIsStoredInRedisAsA",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1230,
                                            "end": 1260
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "jsonEncodedRedisString",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1261,
                                            "end": 1283
                                          },
                                          "start": 1230,
                                          "end": 1283
                                        },
                                        "typeArguments": null,
                                        "start": 1230,
                                        "end": 1283
                                      },
                                      "start": 1228,
                                      "end": 1283
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 1220,
                                    "end": 1283
                                  }
                                ],
                                "start": 1219,
                                "end": 1284
                              }
                            ],
                            "start": 1210,
                            "end": 1284
                          }
                        ],
                        "start": 1209,
                        "end": 1285
                      },
                      "start": 1188,
                      "end": 1285
                    },
                    "start": 1185,
                    "end": 1285
                  },
                  "start": 1182,
                  "end": 1285
                },
                "start": 1180,
                "end": 1285
              },
              "accessibility": null,
              "static": false,
              "start": 1150,
              "end": 1286
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "storedRedisHash",
                "optional": false,
                "typeAnnotation": null,
                "start": 1293,
                "end": 1308
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1316,
                        "end": 1337
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1338,
                                  "end": 1344
                                },
                                "typeArguments": null,
                                "start": 1338,
                                "end": 1344
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
                                      "name": "storedAs",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1348,
                                      "end": 1356
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
                                            "name": "PubSubRecordIsStoredInRedisAsA",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1358,
                                            "end": 1388
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "redisHash",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1389,
                                            "end": 1398
                                          },
                                          "start": 1358,
                                          "end": 1398
                                        },
                                        "typeArguments": null,
                                        "start": 1358,
                                        "end": 1398
                                      },
                                      "start": 1356,
                                      "end": 1398
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 1348,
                                    "end": 1398
                                  }
                                ],
                                "start": 1347,
                                "end": 1399
                              }
                            ],
                            "start": 1338,
                            "end": 1399
                          }
                        ],
                        "start": 1337,
                        "end": 1400
                      },
                      "start": 1316,
                      "end": 1400
                    },
                    "start": 1313,
                    "end": 1400
                  },
                  "start": 1310,
                  "end": 1400
                },
                "start": 1308,
                "end": 1400
              },
              "accessibility": null,
              "static": false,
              "start": 1293,
              "end": 1401
            }
          ],
          "start": 1142,
          "end": 1407
        },
        "start": 1104,
        "end": 1407
      },
      "declare": false,
      "start": 1065,
      "end": 1407
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
            "name": "buildStoredAsConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1419,
            "end": 1443
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1447,
                    "end": 1453
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1447,
                  "end": 1453
                }
              ],
              "start": 1446,
              "end": 1454
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1462,
                      "end": 1468
                    },
                    "typeArguments": null,
                    "start": 1462,
                    "end": 1468
                  },
                  "start": 1460,
                  "end": 1468
                },
                "start": 1455,
                "end": 1468
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "storedAs",
                  "raw": "\"storedAs\"",
                  "start": 1479,
                  "end": 1489
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "soFar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1498
                },
                "start": 1479,
                "end": 1498
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1501,
                "end": 1503
              },
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "storedAsJsonEncodedRedisString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1514,
                      "end": 1544
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1560,
                            "end": 1581
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
                                  "name": "Object",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1582,
                                  "end": 1588
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assign",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1589,
                                  "end": 1595
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1582,
                                "end": 1595
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [],
                                  "start": 1596,
                                  "end": 1598
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "soFar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1600,
                                  "end": 1605
                                },
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "storedAs",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1608,
                                        "end": 1616
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "PubSubRecordIsStoredInRedisAsA",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1618,
                                          "end": 1648
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "jsonEncodedRedisString",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1649,
                                          "end": 1671
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1618,
                                        "end": 1671
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1608,
                                      "end": 1671
                                    }
                                  ],
                                  "start": 1607,
                                  "end": 1672
                                }
                              ],
                              "optional": false,
                              "start": 1582,
                              "end": 1673
                            }
                          ],
                          "optional": false,
                          "start": 1560,
                          "end": 1674
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1688,
                            "end": 1709
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1710,
                                      "end": 1716
                                    },
                                    "typeArguments": null,
                                    "start": 1710,
                                    "end": 1716
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
                                          "name": "storedAs",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1720,
                                          "end": 1728
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
                                                "name": "PubSubRecordIsStoredInRedisAsA",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1730,
                                                "end": 1760
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "jsonEncodedRedisString",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1761,
                                                "end": 1783
                                              },
                                              "start": 1730,
                                              "end": 1783
                                            },
                                            "typeArguments": null,
                                            "start": 1730,
                                            "end": 1783
                                          },
                                          "start": 1728,
                                          "end": 1783
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1720,
                                        "end": 1783
                                      }
                                    ],
                                    "start": 1719,
                                    "end": 1784
                                  }
                                ],
                                "start": 1710,
                                "end": 1784
                              }
                            ],
                            "start": 1709,
                            "end": 1785
                          },
                          "start": 1688,
                          "end": 1785
                        },
                        "start": 1560,
                        "end": 1785
                      },
                      "id": null,
                      "generator": false,
                      "start": 1546,
                      "end": 1785
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1514,
                    "end": 1785
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "storedAsRedisHash",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1793,
                      "end": 1810
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1826,
                            "end": 1847
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
                                  "name": "Object",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1848,
                                  "end": 1854
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assign",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1855,
                                  "end": 1861
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1848,
                                "end": 1861
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [],
                                  "start": 1862,
                                  "end": 1864
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "soFar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1866,
                                  "end": 1871
                                },
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "storedAs",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1874,
                                        "end": 1882
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "PubSubRecordIsStoredInRedisAsA",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1884,
                                          "end": 1914
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "redisHash",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1915,
                                          "end": 1924
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1884,
                                        "end": 1924
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1874,
                                      "end": 1924
                                    }
                                  ],
                                  "start": 1873,
                                  "end": 1925
                                }
                              ],
                              "optional": false,
                              "start": 1848,
                              "end": 1926
                            }
                          ],
                          "optional": false,
                          "start": 1826,
                          "end": 1927
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1941,
                            "end": 1962
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1963,
                                      "end": 1969
                                    },
                                    "typeArguments": null,
                                    "start": 1963,
                                    "end": 1969
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
                                          "name": "storedAs",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1973,
                                          "end": 1981
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
                                                "name": "PubSubRecordIsStoredInRedisAsA",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1983,
                                                "end": 2013
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "redisHash",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2014,
                                                "end": 2023
                                              },
                                              "start": 1983,
                                              "end": 2023
                                            },
                                            "typeArguments": null,
                                            "start": 1983,
                                            "end": 2023
                                          },
                                          "start": 1981,
                                          "end": 2023
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1973,
                                        "end": 2023
                                      }
                                    ],
                                    "start": 1972,
                                    "end": 2024
                                  }
                                ],
                                "start": 1963,
                                "end": 2024
                              }
                            ],
                            "start": 1962,
                            "end": 2025
                          },
                          "start": 1941,
                          "end": 2025
                        },
                        "start": 1826,
                        "end": 2025
                      },
                      "id": null,
                      "generator": false,
                      "start": 1812,
                      "end": 2025
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1793,
                    "end": 2025
                  }
                ],
                "start": 1506,
                "end": 2032
              },
              "start": 1479,
              "end": 2032
            },
            "id": null,
            "generator": false,
            "start": 1446,
            "end": 2036
          },
          "definite": false,
          "start": 1419,
          "end": 2036
        }
      ],
      "declare": false,
      "start": 1413,
      "end": 2037
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IdentifierFieldConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2048,
        "end": 2074
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 2075,
              "end": 2081
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2075,
            "end": 2081
          }
        ],
        "start": 2074,
        "end": 2082
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 2089,
            "end": 2095
          },
          "typeArguments": null,
          "start": 2089,
          "end": 2095
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
                "name": "identifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 2105,
                "end": 2115
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2117,
                  "end": 2120
                },
                "start": 2115,
                "end": 2120
              },
              "accessibility": null,
              "static": false,
              "start": 2105,
              "end": 2120
            }
          ],
          "start": 2104,
          "end": 2121
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 2124,
          "end": 2126
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 2133,
              "end": 2139
            },
            "typeArguments": null,
            "start": 2133,
            "end": 2139
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
                  "name": "record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2149,
                  "end": 2155
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2157,
                    "end": 2160
                  },
                  "start": 2155,
                  "end": 2160
                },
                "accessibility": null,
                "static": false,
                "start": 2149,
                "end": 2160
              }
            ],
            "start": 2148,
            "end": 2161
          },
          "trueType": {
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
                  "name": "identifier",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2172,
                  "end": 2182
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TYPE",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2185,
                            "end": 2189
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Partial",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2198,
                              "end": 2205
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2206,
                                      "end": 2212
                                    },
                                    "typeArguments": null,
                                    "start": 2206,
                                    "end": 2212
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "record",
                                      "raw": "\"record\"",
                                      "start": 2213,
                                      "end": 2221
                                    },
                                    "start": 2213,
                                    "end": 2221
                                  },
                                  "start": 2206,
                                  "end": 2222
                                }
                              ],
                              "start": 2205,
                              "end": 2223
                            },
                            "start": 2198,
                            "end": 2223
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2185,
                          "end": 2223
                        }
                      ],
                      "start": 2184,
                      "end": 2224
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2229,
                              "end": 2233
                            },
                            "typeArguments": null,
                            "start": 2229,
                            "end": 2233
                          },
                          "start": 2227,
                          "end": 2233
                        },
                        "start": 2225,
                        "end": 2233
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BuildPubSubRecordType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2238,
                          "end": 2259
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SO_FAR",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2260,
                                    "end": 2266
                                  },
                                  "typeArguments": null,
                                  "start": 2260,
                                  "end": 2266
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
                                        "name": "identifier",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2270,
                                        "end": 2280
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TYPE",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2282,
                                            "end": 2286
                                          },
                                          "typeArguments": null,
                                          "start": 2282,
                                          "end": 2286
                                        },
                                        "start": 2280,
                                        "end": 2286
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 2270,
                                      "end": 2286
                                    }
                                  ],
                                  "start": 2269,
                                  "end": 2287
                                }
                              ],
                              "start": 2260,
                              "end": 2287
                            }
                          ],
                          "start": 2259,
                          "end": 2288
                        },
                        "start": 2238,
                        "end": 2288
                      },
                      "start": 2235,
                      "end": 2288
                    },
                    "start": 2184,
                    "end": 2288
                  },
                  "start": 2182,
                  "end": 2288
                },
                "accessibility": null,
                "static": false,
                "start": 2172,
                "end": 2288
              }
            ],
            "start": 2164,
            "end": 2294
          },
          "falseType": {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 2297,
            "end": 2299
          },
          "start": 2133,
          "end": 2299
        },
        "start": 2089,
        "end": 2299
      },
      "declare": false,
      "start": 2043,
      "end": 2299
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
            "name": "buildIdentifierFieldConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 2311,
            "end": 2342
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2346,
                    "end": 2352
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2346,
                  "end": 2352
                }
              ],
              "start": 2345,
              "end": 2353
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2361,
                      "end": 2367
                    },
                    "typeArguments": null,
                    "start": 2361,
                    "end": 2367
                  },
                  "start": 2359,
                  "end": 2367
                },
                "start": 2354,
                "end": 2367
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "identifier",
                    "raw": "\"identifier\"",
                    "start": 2378,
                    "end": 2390
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "soFar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2394,
                    "end": 2399
                  },
                  "start": 2378,
                  "end": 2399
                },
                "operator": "||",
                "right": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "record",
                      "raw": "\"record\"",
                      "start": 2406,
                      "end": 2414
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "soFar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2418,
                      "end": 2423
                    },
                    "start": 2406,
                    "end": 2423
                  },
                  "prefix": true,
                  "start": 2404,
                  "end": 2424
                },
                "start": 2378,
                "end": 2425
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 2428,
                "end": 2430
              },
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "identifier",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2441,
                      "end": 2451
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2454,
                              "end": 2458
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2454,
                            "end": 2458
                          }
                        ],
                        "start": 2453,
                        "end": 2459
                      },
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TYPE",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2470,
                                  "end": 2474
                                },
                                "typeArguments": null,
                                "start": 2470,
                                "end": 2474
                              },
                              "start": 2468,
                              "end": 2474
                            },
                            "start": 2460,
                            "end": 2474
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2477,
                            "end": 2486
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2460,
                          "end": 2486
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2499,
                            "end": 2520
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2521,
                                    "end": 2527
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2528,
                                    "end": 2534
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2521,
                                  "end": 2534
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 2535,
                                    "end": 2537
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2539,
                                    "end": 2544
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "identifier",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2547,
                                          "end": 2557
                                        },
                                        "value": {
                                          "type": "TSAsExpression",
                                          "expression": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instance",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2559,
                                            "end": 2567
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2571,
                                              "end": 2575
                                            },
                                            "typeArguments": null,
                                            "start": 2571,
                                            "end": 2575
                                          },
                                          "start": 2559,
                                          "end": 2575
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 2547,
                                        "end": 2575
                                      }
                                    ],
                                    "start": 2546,
                                    "end": 2576
                                  }
                                ],
                                "optional": false,
                                "start": 2521,
                                "end": 2577
                              },
                              "typeAnnotation": {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2581,
                                      "end": 2587
                                    },
                                    "typeArguments": null,
                                    "start": 2581,
                                    "end": 2587
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
                                          "name": "identifier",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2591,
                                          "end": 2601
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2603,
                                              "end": 2607
                                            },
                                            "typeArguments": null,
                                            "start": 2603,
                                            "end": 2607
                                          },
                                          "start": 2601,
                                          "end": 2607
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2591,
                                        "end": 2607
                                      }
                                    ],
                                    "start": 2590,
                                    "end": 2608
                                  }
                                ],
                                "start": 2581,
                                "end": 2608
                              },
                              "start": 2521,
                              "end": 2608
                            }
                          ],
                          "optional": false,
                          "start": 2499,
                          "end": 2609
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2613,
                            "end": 2634
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2635,
                                      "end": 2641
                                    },
                                    "typeArguments": null,
                                    "start": 2635,
                                    "end": 2641
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
                                          "name": "identifier",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2645,
                                          "end": 2655
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2657,
                                              "end": 2661
                                            },
                                            "typeArguments": null,
                                            "start": 2657,
                                            "end": 2661
                                          },
                                          "start": 2655,
                                          "end": 2661
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2645,
                                        "end": 2661
                                      }
                                    ],
                                    "start": 2644,
                                    "end": 2662
                                  }
                                ],
                                "start": 2635,
                                "end": 2662
                              }
                            ],
                            "start": 2634,
                            "end": 2663
                          },
                          "start": 2613,
                          "end": 2663
                        },
                        "start": 2499,
                        "end": 2663
                      },
                      "id": null,
                      "generator": false,
                      "start": 2453,
                      "end": 2663
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2441,
                    "end": 2663
                  }
                ],
                "start": 2433,
                "end": 2669
              },
              "start": 2378,
              "end": 2669
            },
            "id": null,
            "generator": false,
            "start": 2345,
            "end": 2673
          },
          "definite": false,
          "start": 2311,
          "end": 2673
        }
      ],
      "declare": false,
      "start": 2305,
      "end": 2674
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecordFieldConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2685,
        "end": 2707
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 2708,
              "end": 2714
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2708,
            "end": 2714
          }
        ],
        "start": 2707,
        "end": 2715
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 2722,
            "end": 2728
          },
          "typeArguments": null,
          "start": 2722,
          "end": 2728
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
                "name": "record",
                "optional": false,
                "typeAnnotation": null,
                "start": 2738,
                "end": 2744
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2746,
                  "end": 2749
                },
                "start": 2744,
                "end": 2749
              },
              "accessibility": null,
              "static": false,
              "start": 2738,
              "end": 2749
            }
          ],
          "start": 2737,
          "end": 2750
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 2753,
          "end": 2755
        },
        "falseType": {
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
                "name": "record",
                "optional": false,
                "typeAnnotation": null,
                "start": 2766,
                "end": 2772
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TYPE",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2775,
                          "end": 2779
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2775,
                        "end": 2779
                      }
                    ],
                    "start": 2774,
                    "end": 2780
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TYPE",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2785,
                            "end": 2789
                          },
                          "typeArguments": null,
                          "start": 2785,
                          "end": 2789
                        },
                        "start": 2783,
                        "end": 2789
                      },
                      "start": 2781,
                      "end": 2789
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2794,
                        "end": 2815
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2816,
                                  "end": 2822
                                },
                                "typeArguments": null,
                                "start": 2816,
                                "end": 2822
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
                                      "name": "record",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2826,
                                      "end": 2832
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TYPE",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2834,
                                          "end": 2838
                                        },
                                        "typeArguments": null,
                                        "start": 2834,
                                        "end": 2838
                                      },
                                      "start": 2832,
                                      "end": 2838
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2826,
                                    "end": 2838
                                  }
                                ],
                                "start": 2825,
                                "end": 2839
                              }
                            ],
                            "start": 2816,
                            "end": 2839
                          }
                        ],
                        "start": 2815,
                        "end": 2840
                      },
                      "start": 2794,
                      "end": 2840
                    },
                    "start": 2791,
                    "end": 2840
                  },
                  "start": 2774,
                  "end": 2840
                },
                "start": 2772,
                "end": 2840
              },
              "accessibility": null,
              "static": false,
              "start": 2766,
              "end": 2840
            }
          ],
          "start": 2758,
          "end": 2846
        },
        "start": 2722,
        "end": 2846
      },
      "declare": false,
      "start": 2680,
      "end": 2846
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
            "name": "buildRecordFieldConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 2858,
            "end": 2885
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2889,
                    "end": 2895
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2889,
                  "end": 2895
                }
              ],
              "start": 2888,
              "end": 2896
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2904,
                      "end": 2910
                    },
                    "typeArguments": null,
                    "start": 2904,
                    "end": 2910
                  },
                  "start": 2902,
                  "end": 2910
                },
                "start": 2897,
                "end": 2910
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "record",
                  "raw": "\"record\"",
                  "start": 2921,
                  "end": 2929
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "soFar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2933,
                  "end": 2938
                },
                "start": 2921,
                "end": 2938
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 2941,
                "end": 2943
              },
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2954,
                      "end": 2960
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2963,
                              "end": 2967
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2963,
                            "end": 2967
                          }
                        ],
                        "start": 2962,
                        "end": 2968
                      },
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TYPE",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2979,
                                  "end": 2983
                                },
                                "typeArguments": null,
                                "start": 2979,
                                "end": 2983
                              },
                              "start": 2977,
                              "end": 2983
                            },
                            "start": 2969,
                            "end": 2983
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2986,
                            "end": 2995
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2969,
                          "end": 2995
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3008,
                            "end": 3029
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3030,
                                    "end": 3036
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3037,
                                    "end": 3043
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3030,
                                  "end": 3043
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 3044,
                                    "end": 3046
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3048,
                                    "end": 3053
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "record",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3056,
                                          "end": 3062
                                        },
                                        "value": {
                                          "type": "TSAsExpression",
                                          "expression": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instance",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3064,
                                            "end": 3072
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3076,
                                              "end": 3080
                                            },
                                            "typeArguments": null,
                                            "start": 3076,
                                            "end": 3080
                                          },
                                          "start": 3064,
                                          "end": 3080
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3056,
                                        "end": 3080
                                      }
                                    ],
                                    "start": 3055,
                                    "end": 3081
                                  }
                                ],
                                "optional": false,
                                "start": 3030,
                                "end": 3082
                              },
                              "typeAnnotation": {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3086,
                                      "end": 3092
                                    },
                                    "typeArguments": null,
                                    "start": 3086,
                                    "end": 3092
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
                                          "name": "record",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3096,
                                          "end": 3102
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3104,
                                              "end": 3108
                                            },
                                            "typeArguments": null,
                                            "start": 3104,
                                            "end": 3108
                                          },
                                          "start": 3102,
                                          "end": 3108
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3096,
                                        "end": 3108
                                      }
                                    ],
                                    "start": 3095,
                                    "end": 3109
                                  }
                                ],
                                "start": 3086,
                                "end": 3109
                              },
                              "start": 3030,
                              "end": 3109
                            }
                          ],
                          "optional": false,
                          "start": 3008,
                          "end": 3110
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3114,
                            "end": 3135
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3136,
                                      "end": 3142
                                    },
                                    "typeArguments": null,
                                    "start": 3136,
                                    "end": 3142
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
                                          "name": "record",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3146,
                                          "end": 3152
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3154,
                                              "end": 3158
                                            },
                                            "typeArguments": null,
                                            "start": 3154,
                                            "end": 3158
                                          },
                                          "start": 3152,
                                          "end": 3158
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3146,
                                        "end": 3158
                                      }
                                    ],
                                    "start": 3145,
                                    "end": 3159
                                  }
                                ],
                                "start": 3136,
                                "end": 3159
                              }
                            ],
                            "start": 3135,
                            "end": 3160
                          },
                          "start": 3114,
                          "end": 3160
                        },
                        "start": 3008,
                        "end": 3160
                      },
                      "id": null,
                      "generator": false,
                      "start": 2962,
                      "end": 3160
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2954,
                    "end": 3160
                  }
                ],
                "start": 2946,
                "end": 3166
              },
              "start": 2921,
              "end": 3166
            },
            "id": null,
            "generator": false,
            "start": 2888,
            "end": 3170
          },
          "definite": false,
          "start": 2858,
          "end": 3170
        }
      ],
      "declare": false,
      "start": 2852,
      "end": 3171
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MaxMsToWaitBeforePublishingFieldConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 3182,
        "end": 3225
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 3226,
              "end": 3232
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3226,
            "end": 3232
          }
        ],
        "start": 3225,
        "end": 3233
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 3240,
            "end": 3246
          },
          "typeArguments": null,
          "start": 3240,
          "end": 3246
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
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "typeAnnotation": null,
                "start": 3256,
                "end": 3283
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3285,
                  "end": 3288
                },
                "start": 3283,
                "end": 3288
              },
              "accessibility": null,
              "static": false,
              "start": 3256,
              "end": 3288
            }
          ],
          "start": 3255,
          "end": 3289
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 3292,
          "end": 3294
        },
        "falseType": {
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
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "typeAnnotation": null,
                "start": 3305,
                "end": 3332
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
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3338,
                          "end": 3344
                        },
                        "start": 3336,
                        "end": 3344
                      },
                      "start": 3335,
                      "end": 3344
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3349,
                        "end": 3370
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3371,
                                  "end": 3377
                                },
                                "typeArguments": null,
                                "start": 3371,
                                "end": 3377
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
                                      "name": "maxMsToWaitBeforePublishing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3381,
                                      "end": 3408
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 3410,
                                        "end": 3416
                                      },
                                      "start": 3408,
                                      "end": 3416
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 3381,
                                    "end": 3416
                                  }
                                ],
                                "start": 3380,
                                "end": 3417
                              }
                            ],
                            "start": 3371,
                            "end": 3417
                          }
                        ],
                        "start": 3370,
                        "end": 3418
                      },
                      "start": 3349,
                      "end": 3418
                    },
                    "start": 3346,
                    "end": 3418
                  },
                  "start": 3334,
                  "end": 3418
                },
                "start": 3332,
                "end": 3418
              },
              "accessibility": null,
              "static": false,
              "start": 3305,
              "end": 3419
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "neverDelayPublishing",
                "optional": false,
                "typeAnnotation": null,
                "start": 3426,
                "end": 3446
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3454,
                        "end": 3475
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3476,
                                  "end": 3482
                                },
                                "typeArguments": null,
                                "start": 3476,
                                "end": 3482
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
                                      "name": "maxMsToWaitBeforePublishing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3486,
                                      "end": 3513
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "literal": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 3515,
                                          "end": 3516
                                        },
                                        "start": 3515,
                                        "end": 3516
                                      },
                                      "start": 3513,
                                      "end": 3516
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 3486,
                                    "end": 3516
                                  }
                                ],
                                "start": 3485,
                                "end": 3517
                              }
                            ],
                            "start": 3476,
                            "end": 3517
                          }
                        ],
                        "start": 3475,
                        "end": 3518
                      },
                      "start": 3454,
                      "end": 3518
                    },
                    "start": 3451,
                    "end": 3518
                  },
                  "start": 3448,
                  "end": 3518
                },
                "start": 3446,
                "end": 3518
              },
              "accessibility": null,
              "static": false,
              "start": 3426,
              "end": 3519
            }
          ],
          "start": 3297,
          "end": 3525
        },
        "start": 3240,
        "end": 3525
      },
      "declare": false,
      "start": 3177,
      "end": 3525
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
            "name": "buildMaxMsToWaitBeforePublishingFieldConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 3537,
            "end": 3585
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3589,
                    "end": 3595
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3589,
                  "end": 3595
                }
              ],
              "start": 3588,
              "end": 3596
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3604,
                      "end": 3610
                    },
                    "typeArguments": null,
                    "start": 3604,
                    "end": 3610
                  },
                  "start": 3602,
                  "end": 3610
                },
                "start": 3597,
                "end": 3610
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaxMsToWaitBeforePublishingFieldConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3613,
                  "end": 3656
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SO_FAR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3657,
                        "end": 3663
                      },
                      "typeArguments": null,
                      "start": 3657,
                      "end": 3663
                    }
                  ],
                  "start": 3656,
                  "end": 3664
                },
                "start": 3613,
                "end": 3664
              },
              "start": 3611,
              "end": 3664
            },
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "maxMsToWaitBeforePublishing",
                    "raw": "\"maxMsToWaitBeforePublishing\"",
                    "start": 3674,
                    "end": 3703
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "soFar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3707,
                    "end": 3712
                  },
                  "start": 3674,
                  "end": 3712
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 3715,
                  "end": 3717
                },
                "alternate": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "maxMsToWaitBeforePublishing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3728,
                        "end": 3755
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "instance",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3768,
                                  "end": 3774
                                },
                                "start": 3766,
                                "end": 3774
                              },
                              "start": 3758,
                              "end": 3774
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 3777,
                              "end": 3778
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3758,
                            "end": 3778
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "buildPubSubRecordType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3791,
                              "end": 3812
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
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3813,
                                    "end": 3819
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3820,
                                    "end": 3826
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3813,
                                  "end": 3826
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 3827,
                                    "end": 3829
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3831,
                                    "end": 3836
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "maxMsToWaitBeforePublishing",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3839,
                                          "end": 3866
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "instance",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3868,
                                          "end": 3876
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3839,
                                        "end": 3876
                                      }
                                    ],
                                    "start": 3838,
                                    "end": 3877
                                  }
                                ],
                                "optional": false,
                                "start": 3813,
                                "end": 3878
                              }
                            ],
                            "optional": false,
                            "start": 3791,
                            "end": 3879
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "BuildPubSubRecordType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3883,
                              "end": 3904
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIntersectionType",
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "SO_FAR",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3905,
                                        "end": 3911
                                      },
                                      "typeArguments": null,
                                      "start": 3905,
                                      "end": 3911
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
                                            "name": "maxMsToWaitBeforePublishing",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3915,
                                            "end": 3942
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 3944,
                                              "end": 3950
                                            },
                                            "start": 3942,
                                            "end": 3950
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3915,
                                          "end": 3950
                                        }
                                      ],
                                      "start": 3914,
                                      "end": 3951
                                    }
                                  ],
                                  "start": 3905,
                                  "end": 3951
                                }
                              ],
                              "start": 3904,
                              "end": 3952
                            },
                            "start": 3883,
                            "end": 3952
                          },
                          "start": 3791,
                          "end": 3952
                        },
                        "id": null,
                        "generator": false,
                        "start": 3757,
                        "end": 3952
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3728,
                      "end": 3952
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "neverDelayPublishing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3960,
                        "end": 3980
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "buildPubSubRecordType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3996,
                              "end": 4017
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
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4018,
                                    "end": 4024
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4025,
                                    "end": 4031
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4018,
                                  "end": 4031
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 4032,
                                    "end": 4034
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4036,
                                    "end": 4041
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "maxMsToWaitBeforePublishing",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4044,
                                          "end": 4071
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 4073,
                                          "end": 4074
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4044,
                                        "end": 4074
                                      }
                                    ],
                                    "start": 4043,
                                    "end": 4075
                                  }
                                ],
                                "optional": false,
                                "start": 4018,
                                "end": 4076
                              }
                            ],
                            "optional": false,
                            "start": 3996,
                            "end": 4077
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "BuildPubSubRecordType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4081,
                              "end": 4102
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIntersectionType",
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "SO_FAR",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4103,
                                        "end": 4109
                                      },
                                      "typeArguments": null,
                                      "start": 4103,
                                      "end": 4109
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
                                            "name": "maxMsToWaitBeforePublishing",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4113,
                                            "end": 4140
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSLiteralType",
                                              "literal": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0",
                                                "start": 4142,
                                                "end": 4143
                                              },
                                              "start": 4142,
                                              "end": 4143
                                            },
                                            "start": 4140,
                                            "end": 4143
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 4113,
                                          "end": 4143
                                        }
                                      ],
                                      "start": 4112,
                                      "end": 4144
                                    }
                                  ],
                                  "start": 4103,
                                  "end": 4144
                                }
                              ],
                              "start": 4102,
                              "end": 4145
                            },
                            "start": 4081,
                            "end": 4145
                          },
                          "start": 3996,
                          "end": 4145
                        },
                        "id": null,
                        "generator": false,
                        "start": 3982,
                        "end": 4145
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3960,
                      "end": 4145
                    }
                  ],
                  "start": 3720,
                  "end": 4152
                },
                "start": 3674,
                "end": 4152
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaxMsToWaitBeforePublishingFieldConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4160,
                  "end": 4203
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SO_FAR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4204,
                        "end": 4210
                      },
                      "typeArguments": null,
                      "start": 4204,
                      "end": 4210
                    }
                  ],
                  "start": 4203,
                  "end": 4211
                },
                "start": 4160,
                "end": 4211
              },
              "start": 3668,
              "end": 4211
            },
            "id": null,
            "generator": false,
            "start": 3588,
            "end": 4211
          },
          "definite": false,
          "start": 3537,
          "end": 4211
        }
      ],
      "declare": false,
      "start": 3531,
      "end": 4212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 4223,
        "end": 4238
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 4239,
              "end": 4245
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4239,
            "end": 4245
          }
        ],
        "start": 4238,
        "end": 4246
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 4253,
            "end": 4259
          },
          "typeArguments": null,
          "start": 4253,
          "end": 4259
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
                "name": "identifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 4269,
                "end": 4279
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4281,
                  "end": 4284
                },
                "start": 4279,
                "end": 4284
              },
              "accessibility": null,
              "static": false,
              "start": 4269,
              "end": 4285
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "record",
                "optional": false,
                "typeAnnotation": null,
                "start": 4286,
                "end": 4292
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4294,
                  "end": 4297
                },
                "start": 4292,
                "end": 4297
              },
              "accessibility": null,
              "static": false,
              "start": 4286,
              "end": 4298
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "typeAnnotation": null,
                "start": 4299,
                "end": 4326
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4328,
                  "end": 4334
                },
                "start": 4326,
                "end": 4334
              },
              "accessibility": null,
              "static": false,
              "start": 4299,
              "end": 4335
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "storedAs",
                "optional": false,
                "typeAnnotation": null,
                "start": 4336,
                "end": 4344
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PubSubRecordIsStoredInRedisAsA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4346,
                    "end": 4376
                  },
                  "typeArguments": null,
                  "start": 4346,
                  "end": 4376
                },
                "start": 4344,
                "end": 4376
              },
              "accessibility": null,
              "static": false,
              "start": 4336,
              "end": 4376
            }
          ],
          "start": 4268,
          "end": 4377
        },
        "trueType": {
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 4388,
                "end": 4392
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4394,
                    "end": 4400
                  },
                  "typeArguments": null,
                  "start": 4394,
                  "end": 4400
                },
                "start": 4392,
                "end": 4400
              },
              "accessibility": null,
              "static": false,
              "start": 4388,
              "end": 4401
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fields",
                "optional": false,
                "typeAnnotation": null,
                "start": 4408,
                "end": 4414
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4416,
                    "end": 4419
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SO_FAR",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4426,
                            "end": 4432
                          },
                          "typeArguments": null,
                          "start": 4426,
                          "end": 4432
                        },
                        "start": 4420,
                        "end": 4432
                      }
                    ],
                    "start": 4419,
                    "end": 4433
                  },
                  "start": 4416,
                  "end": 4433
                },
                "start": 4414,
                "end": 4433
              },
              "accessibility": null,
              "static": false,
              "start": 4408,
              "end": 4434
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasField",
                "optional": false,
                "typeAnnotation": null,
                "start": 4441,
                "end": 4449
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
                      "name": "fieldName",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 4463,
                              "end": 4469
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 4472,
                              "end": 4478
                            },
                            {
                              "type": "TSSymbolKeyword",
                              "start": 4481,
                              "end": 4487
                            }
                          ],
                          "start": 4463,
                          "end": 4487
                        },
                        "start": 4461,
                        "end": 4487
                      },
                      "start": 4452,
                      "end": 4487
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "parameterName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fieldName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4492,
                        "end": 4501
                      },
                      "asserts": false,
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
                              "name": "SO_FAR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4511,
                              "end": 4517
                            },
                            "typeArguments": null,
                            "start": 4511,
                            "end": 4517
                          },
                          "start": 4505,
                          "end": 4517
                        },
                        "start": 4505,
                        "end": 4517
                      },
                      "start": 4492,
                      "end": 4517
                    },
                    "start": 4489,
                    "end": 4517
                  },
                  "start": 4451,
                  "end": 4517
                },
                "start": 4449,
                "end": 4517
              },
              "accessibility": null,
              "static": false,
              "start": 4441,
              "end": 4517
            }
          ],
          "start": 4380,
          "end": 4523
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 4526,
          "end": 4528
        },
        "start": 4253,
        "end": 4528
      },
      "declare": false,
      "start": 4218,
      "end": 4528
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
            "name": "buildType",
            "optional": false,
            "typeAnnotation": null,
            "start": 4540,
            "end": 4549
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4553,
                    "end": 4559
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4553,
                  "end": 4559
                }
              ],
              "start": 4552,
              "end": 4560
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4568,
                      "end": 4574
                    },
                    "typeArguments": null,
                    "start": 4568,
                    "end": 4574
                  },
                  "start": 4566,
                  "end": 4574
                },
                "start": 4561,
                "end": 4574
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "identifier",
                        "raw": "\"identifier\"",
                        "start": 4585,
                        "end": 4597
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4601,
                        "end": 4606
                      },
                      "start": 4585,
                      "end": 4606
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "object",
                        "raw": "\"object\"",
                        "start": 4610,
                        "end": 4618
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4622,
                        "end": 4627
                      },
                      "start": 4610,
                      "end": 4627
                    },
                    "start": 4585,
                    "end": 4627
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "maxMsToWaitBeforePublishing",
                      "raw": "\"maxMsToWaitBeforePublishing\"",
                      "start": 4631,
                      "end": 4660
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "soFar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4664,
                      "end": 4669
                    },
                    "start": 4631,
                    "end": 4669
                  },
                  "start": 4585,
                  "end": 4669
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "PubSubRecordIsStoredInRedisAsA",
                    "raw": "\"PubSubRecordIsStoredInRedisAsA\"",
                    "start": 4673,
                    "end": 4705
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "soFar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4709,
                    "end": 4714
                  },
                  "start": 4673,
                  "end": 4714
                },
                "start": 4585,
                "end": 4714
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 4717,
                "end": 4719
              },
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4730,
                      "end": 4734
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "soFar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4736,
                      "end": 4741
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4730,
                    "end": 4741
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4749,
                      "end": 4755
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Set",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4767,
                          "end": 4770
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4771,
                                  "end": 4777
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "keys",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4778,
                                  "end": 4782
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4771,
                                "end": 4782
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "soFar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4783,
                                  "end": 4788
                                }
                              ],
                              "optional": false,
                              "start": 4771,
                              "end": 4789
                            },
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SO_FAR",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4800,
                                    "end": 4806
                                  },
                                  "typeArguments": null,
                                  "start": 4800,
                                  "end": 4806
                                },
                                "start": 4794,
                                "end": 4806
                              },
                              "start": 4793,
                              "end": 4809
                            },
                            "start": 4771,
                            "end": 4809
                          }
                        ],
                        "start": 4763,
                        "end": 4810
                      },
                      "id": null,
                      "generator": false,
                      "start": 4757,
                      "end": 4810
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4749,
                    "end": 4810
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "hasField",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4818,
                      "end": 4826
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fieldName",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 4840,
                                  "end": 4846
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 4849,
                                  "end": 4855
                                },
                                {
                                  "type": "TSSymbolKeyword",
                                  "start": 4858,
                                  "end": 4864
                                }
                              ],
                              "start": 4840,
                              "end": 4864
                            },
                            "start": 4838,
                            "end": 4864
                          },
                          "start": 4829,
                          "end": 4864
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fieldName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4869,
                          "end": 4878
                        },
                        "operator": "in",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "soFar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4882,
                          "end": 4887
                        },
                        "start": 4869,
                        "end": 4887
                      },
                      "id": null,
                      "generator": false,
                      "start": 4828,
                      "end": 4887
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4818,
                    "end": 4887
                  }
                ],
                "start": 4722,
                "end": 4893
              },
              "start": 4585,
              "end": 4893
            },
            "id": null,
            "generator": false,
            "start": 4552,
            "end": 4897
          },
          "definite": false,
          "start": 4540,
          "end": 4897
        }
      ],
      "declare": false,
      "start": 4534,
      "end": 4898
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BuildPubSubRecordType",
        "optional": false,
        "typeAnnotation": null,
        "start": 4909,
        "end": 4930
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 4931,
              "end": 4937
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4931,
            "end": 4937
          }
        ],
        "start": 4930,
        "end": 4938
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NameFieldConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 4945,
              "end": 4965
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4966,
                    "end": 4972
                  },
                  "typeArguments": null,
                  "start": 4966,
                  "end": 4972
                }
              ],
              "start": 4965,
              "end": 4973
            },
            "start": 4945,
            "end": 4973
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierFieldConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 4980,
              "end": 5006
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5007,
                    "end": 5013
                  },
                  "typeArguments": null,
                  "start": 5007,
                  "end": 5013
                }
              ],
              "start": 5006,
              "end": 5014
            },
            "start": 4980,
            "end": 5014
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "RecordFieldConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 5021,
              "end": 5043
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5044,
                    "end": 5050
                  },
                  "typeArguments": null,
                  "start": 5044,
                  "end": 5050
                }
              ],
              "start": 5043,
              "end": 5051
            },
            "start": 5021,
            "end": 5051
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StoredAsConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 5058,
              "end": 5077
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5078,
                    "end": 5084
                  },
                  "typeArguments": null,
                  "start": 5078,
                  "end": 5084
                }
              ],
              "start": 5077,
              "end": 5085
            },
            "start": 5058,
            "end": 5085
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MaxMsToWaitBeforePublishingFieldConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 5150,
              "end": 5193
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5194,
                    "end": 5200
                  },
                  "typeArguments": null,
                  "start": 5194,
                  "end": 5200
                }
              ],
              "start": 5193,
              "end": 5201
            },
            "start": 5150,
            "end": 5201
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 5208,
              "end": 5223
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5224,
                    "end": 5230
                  },
                  "typeArguments": null,
                  "start": 5224,
                  "end": 5230
                }
              ],
              "start": 5223,
              "end": 5231
            },
            "start": 5208,
            "end": 5231
          }
        ],
        "start": 4945,
        "end": 5231
      },
      "declare": false,
      "start": 4904,
      "end": 5231
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
            "name": "buildPubSubRecordType",
            "optional": false,
            "typeAnnotation": null,
            "start": 5243,
            "end": 5264
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5268,
                    "end": 5274
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5268,
                  "end": 5274
                }
              ],
              "start": 5267,
              "end": 5275
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5283,
                      "end": 5289
                    },
                    "typeArguments": null,
                    "start": 5283,
                    "end": 5289
                  },
                  "start": 5281,
                  "end": 5289
                },
                "start": 5276,
                "end": 5289
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5294,
                    "end": 5300
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5301,
                    "end": 5307
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5294,
                  "end": 5307
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 5313,
                    "end": 5315
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildNameFieldConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5321,
                      "end": 5346
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5347,
                        "end": 5352
                      }
                    ],
                    "optional": false,
                    "start": 5321,
                    "end": 5353
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildIdentifierFieldConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5359,
                      "end": 5390
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5391,
                        "end": 5396
                      }
                    ],
                    "optional": false,
                    "start": 5359,
                    "end": 5397
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildRecordFieldConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5403,
                      "end": 5430
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5431,
                        "end": 5436
                      }
                    ],
                    "optional": false,
                    "start": 5403,
                    "end": 5437
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildStoredAsConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5443,
                      "end": 5467
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5468,
                        "end": 5473
                      }
                    ],
                    "optional": false,
                    "start": 5443,
                    "end": 5474
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildMaxMsToWaitBeforePublishingFieldConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5480,
                      "end": 5528
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5529,
                        "end": 5534
                      }
                    ],
                    "optional": false,
                    "start": 5480,
                    "end": 5535
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5541,
                      "end": 5550
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5551,
                        "end": 5556
                      }
                    ],
                    "optional": false,
                    "start": 5541,
                    "end": 5557
                  }
                ],
                "optional": false,
                "start": 5294,
                "end": 5561
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BuildPubSubRecordType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5565,
                  "end": 5586
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SO_FAR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5587,
                        "end": 5593
                      },
                      "typeArguments": null,
                      "start": 5587,
                      "end": 5593
                    }
                  ],
                  "start": 5586,
                  "end": 5594
                },
                "start": 5565,
                "end": 5594
              },
              "start": 5294,
              "end": 5594
            },
            "id": null,
            "generator": false,
            "start": 5267,
            "end": 5594
          },
          "definite": false,
          "start": 5243,
          "end": 5594
        }
      ],
      "declare": false,
      "start": 5237,
      "end": 5595
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
            "name": "PubSubRecordType",
            "optional": false,
            "typeAnnotation": null,
            "start": 5604,
            "end": 5620
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "buildPubSubRecordType",
              "optional": false,
              "typeAnnotation": null,
              "start": 5623,
              "end": 5644
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 5645,
                "end": 5647
              }
            ],
            "optional": false,
            "start": 5623,
            "end": 5648
          },
          "definite": false,
          "start": 5604,
          "end": 5648
        }
      ],
      "declare": false,
      "start": 5598,
      "end": 5649
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 194,
  "end": 5649
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 194,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 201,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "PubSubRecordIsStoredInRedisAsA",
    "start": 206,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "redisHash",
    "start": 243,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "String",
    "value": "\"redisHash\"",
    "start": 255,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "jsonEncodedRedisString",
    "start": 272,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "String",
    "value": "\"jsonEncodedRedisString\"",
    "start": 297,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 331,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 338,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "PubSubRecord",
    "start": 348,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "NAME",
    "start": 361,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 366,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "RECORD",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "IDENTIFIER",
    "start": 390,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 401,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 409,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "RECORD",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 432,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "NAME",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 448,
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
    "value": "RECORD",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "identifier",
    "start": 468,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "IDENTIFIER",
    "start": 480,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "storedAs",
    "start": 496,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "PubSubRecordIsStoredInRedisAsA",
    "start": 506,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "maxMsToWaitBeforePublishing",
    "start": 542,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 571,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 588,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "NameFieldConstructor",
    "start": 593,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 614,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 628,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 635,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 644,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 650,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 670,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 677,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 687,
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
    "value": "=>",
    "start": 693,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 696,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 718,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 728,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 734,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 752,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "buildNameFieldConstructor",
    "start": 758,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 787,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 795,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 802,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 810,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 819,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 826,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 829,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 850,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 863,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 873,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 880,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 891,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "buildPubSubRecordType",
    "start": 902,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 924,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 931,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 942,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 950,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 956,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 965,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 968,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 975,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 978,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 988,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 994,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 1004,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 1026,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1036,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 1042,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1065,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "StoredAsConstructor",
    "start": 1070,
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
    "value": "SO_FAR",
    "start": 1090,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 1104,
    "end": 1110
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1111,
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
    "value": "storedAs",
    "start": 1120,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1130,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "storedAsJsonEncodedRedisString",
    "start": 1150,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 1188,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 1210,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "storedAs",
    "start": 1220,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "PubSubRecordIsStoredInRedisAsA",
    "start": 1230,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "jsonEncodedRedisString",
    "start": 1261,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "storedRedisHash",
    "start": 1293,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1313,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 1316,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 1338,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "storedAs",
    "start": 1348,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "PubSubRecordIsStoredInRedisAsA",
    "start": 1358,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "redisHash",
    "start": 1389,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1413,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "buildStoredAsConstructor",
    "start": 1419,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 1447,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 1455,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 1462,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1470,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "String",
    "value": "\"storedAs\"",
    "start": 1479,
    "end": 1489
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1490,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 1493,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "storedAsJsonEncodedRedisString",
    "start": 1514,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1549,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "buildPubSubRecordType",
    "start": 1560,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1582,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 1589,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 1600,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "storedAs",
    "start": 1608,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "PubSubRecordIsStoredInRedisAsA",
    "start": 1618,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "jsonEncodedRedisString",
    "start": 1649,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1675,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 1688,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 1710,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "storedAs",
    "start": 1720,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "PubSubRecordIsStoredInRedisAsA",
    "start": 1730,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "jsonEncodedRedisString",
    "start": 1761,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "storedAsRedisHash",
    "start": 1793,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1815,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "buildPubSubRecordType",
    "start": 1826,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1848,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 1855,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 1866,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "storedAs",
    "start": 1874,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "PubSubRecordIsStoredInRedisAsA",
    "start": 1884,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "redisHash",
    "start": 1915,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1928,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 1941,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 1963,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "storedAs",
    "start": 1973,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "PubSubRecordIsStoredInRedisAsA",
    "start": 1983,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "redisHash",
    "start": 2014,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2043,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "IdentifierFieldConstructor",
    "start": 2048,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2075,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2089,
    "end": 2095
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2096,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "identifier",
    "start": 2105,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2117,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2133,
    "end": 2139
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2140,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 2149,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2157,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "identifier",
    "start": 2172,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 2185,
    "end": 2189
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2190,
    "end": 2197
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 2198,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2206,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "String",
    "value": "\"record\"",
    "start": 2213,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 2229,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2235,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 2238,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2260,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "identifier",
    "start": 2270,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 2282,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2305,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "buildIdentifierFieldConstructor",
    "start": 2311,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2346,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 2354,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2361,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2369,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "String",
    "value": "\"identifier\"",
    "start": 2378,
    "end": 2390
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2391,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 2394,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 2400,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "String",
    "value": "\"record\"",
    "start": 2406,
    "end": 2414
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2415,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 2418,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "identifier",
    "start": 2441,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 2454,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 2460,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 2470,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2477,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2488,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "buildPubSubRecordType",
    "start": 2499,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2521,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 2528,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 2539,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Identifier",
    "value": "identifier",
    "start": 2547,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 2559,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2568,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 2571,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2578,
    "end": 2580
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2581,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "identifier",
    "start": 2591,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 2603,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2610,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 2613,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2635,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "identifier",
    "start": 2645,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 2657,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2680,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "RecordFieldConstructor",
    "start": 2685,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2708,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2722,
    "end": 2728
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2729,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 2738,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2746,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 2766,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 2775,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 2785,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2791,
    "end": 2793
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 2794,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2816,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 2826,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 2834,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2852,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "buildRecordFieldConstructor",
    "start": 2858,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2889,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 2897,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 2904,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2912,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "String",
    "value": "\"record\"",
    "start": 2921,
    "end": 2929
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2930,
    "end": 2932
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 2933,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 2954,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 2963,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 2969,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 2979,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2986,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2997,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "buildPubSubRecordType",
    "start": 3008,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 3030,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 3037,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 3048,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 3056,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 3064,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3073,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 3076,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3083,
    "end": 3085
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 3086,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 3096,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 3104,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3111,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 3114,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 3136,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 3146,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Identifier",
    "value": "TYPE",
    "start": 3154,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3177,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "MaxMsToWaitBeforePublishingFieldConstructor",
    "start": 3182,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 3226,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 3240,
    "end": 3246
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3247,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Identifier",
    "value": "maxMsToWaitBeforePublishing",
    "start": 3256,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3285,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Identifier",
    "value": "maxMsToWaitBeforePublishing",
    "start": 3305,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3338,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3346,
    "end": 3348
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 3349,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 3371,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Identifier",
    "value": "maxMsToWaitBeforePublishing",
    "start": 3381,
    "end": 3408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3410,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "neverDelayPublishing",
    "start": 3426,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3451,
    "end": 3453
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 3454,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 3476,
    "end": 3482
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Identifier",
    "value": "maxMsToWaitBeforePublishing",
    "start": 3486,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3531,
    "end": 3536
  },
  {
    "type": "Identifier",
    "value": "buildMaxMsToWaitBeforePublishingFieldConstructor",
    "start": 3537,
    "end": 3585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 3589,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 3597,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 3604,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Identifier",
    "value": "MaxMsToWaitBeforePublishingFieldConstructor",
    "start": 3613,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 3657,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3665,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "String",
    "value": "\"maxMsToWaitBeforePublishing\"",
    "start": 3674,
    "end": 3703
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3704,
    "end": 3706
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 3707,
    "end": 3712
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3715,
    "end": 3716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3716,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3720,
    "end": 3721
  },
  {
    "type": "Identifier",
    "value": "maxMsToWaitBeforePublishing",
    "start": 3728,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 3758,
    "end": 3766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3768,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3777,
    "end": 3778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3778,
    "end": 3779
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3780,
    "end": 3782
  },
  {
    "type": "Identifier",
    "value": "buildPubSubRecordType",
    "start": 3791,
    "end": 3812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 3813,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3819,
    "end": 3820
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 3820,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3826,
    "end": 3827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 3831,
    "end": 3836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3836,
    "end": 3837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Identifier",
    "value": "maxMsToWaitBeforePublishing",
    "start": 3839,
    "end": 3866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3866,
    "end": 3867
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 3868,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3878,
    "end": 3879
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3880,
    "end": 3882
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 3883,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3904,
    "end": 3905
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 3905,
    "end": 3911
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3912,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Identifier",
    "value": "maxMsToWaitBeforePublishing",
    "start": 3915,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3944,
    "end": 3950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "neverDelayPublishing",
    "start": 3960,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3980,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3985,
    "end": 3987
  },
  {
    "type": "Identifier",
    "value": "buildPubSubRecordType",
    "start": 3996,
    "end": 4017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 4018,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 4025,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4033,
    "end": 4034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 4036,
    "end": 4041
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Identifier",
    "value": "maxMsToWaitBeforePublishing",
    "start": 4044,
    "end": 4071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4073,
    "end": 4074
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4075,
    "end": 4076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4076,
    "end": 4077
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4078,
    "end": 4080
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 4081,
    "end": 4102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4102,
    "end": 4103
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 4103,
    "end": 4109
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4112,
    "end": 4113
  },
  {
    "type": "Identifier",
    "value": "maxMsToWaitBeforePublishing",
    "start": 4113,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4140,
    "end": 4141
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4151,
    "end": 4152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4157,
    "end": 4159
  },
  {
    "type": "Identifier",
    "value": "MaxMsToWaitBeforePublishingFieldConstructor",
    "start": 4160,
    "end": 4203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4203,
    "end": 4204
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 4204,
    "end": 4210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4211,
    "end": 4212
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4218,
    "end": 4222
  },
  {
    "type": "Identifier",
    "value": "TypeConstructor",
    "start": 4223,
    "end": 4238
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4238,
    "end": 4239
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 4239,
    "end": 4245
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4247,
    "end": 4248
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 4253,
    "end": 4259
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4260,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4268,
    "end": 4269
  },
  {
    "type": "Identifier",
    "value": "identifier",
    "start": 4269,
    "end": 4279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4279,
    "end": 4280
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4281,
    "end": 4284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4284,
    "end": 4285
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 4286,
    "end": 4292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4292,
    "end": 4293
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4294,
    "end": 4297
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Identifier",
    "value": "maxMsToWaitBeforePublishing",
    "start": 4299,
    "end": 4326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4326,
    "end": 4327
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4328,
    "end": 4334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4334,
    "end": 4335
  },
  {
    "type": "Identifier",
    "value": "storedAs",
    "start": 4336,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Identifier",
    "value": "PubSubRecordIsStoredInRedisAsA",
    "start": 4346,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4376,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4388,
    "end": 4392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 4394,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4400,
    "end": 4401
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 4408,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 4416,
    "end": 4419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4420,
    "end": 4425
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 4426,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Identifier",
    "value": "hasField",
    "start": 4441,
    "end": 4449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4449,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4451,
    "end": 4452
  },
  {
    "type": "Identifier",
    "value": "fieldName",
    "start": 4452,
    "end": 4461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4461,
    "end": 4462
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4463,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4470,
    "end": 4471
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4472,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 4481,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4489,
    "end": 4491
  },
  {
    "type": "Identifier",
    "value": "fieldName",
    "start": 4492,
    "end": 4501
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 4502,
    "end": 4504
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4505,
    "end": 4510
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 4511,
    "end": 4517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4524,
    "end": 4525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4526,
    "end": 4527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4527,
    "end": 4528
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4534,
    "end": 4539
  },
  {
    "type": "Identifier",
    "value": "buildType",
    "start": 4540,
    "end": 4549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4552,
    "end": 4553
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 4553,
    "end": 4559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4559,
    "end": 4560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4560,
    "end": 4561
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 4561,
    "end": 4566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4566,
    "end": 4567
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 4568,
    "end": 4574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4574,
    "end": 4575
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4576,
    "end": 4578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4579,
    "end": 4580
  },
  {
    "type": "String",
    "value": "\"identifier\"",
    "start": 4585,
    "end": 4597
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4598,
    "end": 4600
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 4601,
    "end": 4606
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4607,
    "end": 4609
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 4610,
    "end": 4618
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4619,
    "end": 4621
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 4622,
    "end": 4627
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4628,
    "end": 4630
  },
  {
    "type": "String",
    "value": "\"maxMsToWaitBeforePublishing\"",
    "start": 4631,
    "end": 4660
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4661,
    "end": 4663
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 4664,
    "end": 4669
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4670,
    "end": 4672
  },
  {
    "type": "String",
    "value": "\"PubSubRecordIsStoredInRedisAsA\"",
    "start": 4673,
    "end": 4705
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4706,
    "end": 4708
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 4709,
    "end": 4714
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4715,
    "end": 4716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4717,
    "end": 4718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4718,
    "end": 4719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4722,
    "end": 4723
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4730,
    "end": 4734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4734,
    "end": 4735
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 4736,
    "end": 4741
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4741,
    "end": 4742
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 4749,
    "end": 4755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4755,
    "end": 4756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4757,
    "end": 4758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4758,
    "end": 4759
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4760,
    "end": 4762
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4763,
    "end": 4766
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 4767,
    "end": 4770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4770,
    "end": 4771
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 4771,
    "end": 4777
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4777,
    "end": 4778
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 4778,
    "end": 4782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4782,
    "end": 4783
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 4783,
    "end": 4788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4788,
    "end": 4789
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4790,
    "end": 4792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4793,
    "end": 4794
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4794,
    "end": 4799
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 4800,
    "end": 4806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4806,
    "end": 4807
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4807,
    "end": 4808
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4808,
    "end": 4809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4809,
    "end": 4810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4810,
    "end": 4811
  },
  {
    "type": "Identifier",
    "value": "hasField",
    "start": 4818,
    "end": 4826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4828,
    "end": 4829
  },
  {
    "type": "Identifier",
    "value": "fieldName",
    "start": 4829,
    "end": 4838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4838,
    "end": 4839
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4840,
    "end": 4846
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4847,
    "end": 4848
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4849,
    "end": 4855
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4856,
    "end": 4857
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 4858,
    "end": 4864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4864,
    "end": 4865
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4866,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "fieldName",
    "start": 4869,
    "end": 4878
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4879,
    "end": 4881
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 4882,
    "end": 4887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4892,
    "end": 4893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4896,
    "end": 4897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4897,
    "end": 4898
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4904,
    "end": 4908
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 4909,
    "end": 4930
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4930,
    "end": 4931
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 4931,
    "end": 4937
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4937,
    "end": 4938
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4939,
    "end": 4940
  },
  {
    "type": "Identifier",
    "value": "NameFieldConstructor",
    "start": 4945,
    "end": 4965
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4965,
    "end": 4966
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 4966,
    "end": 4972
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4972,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4974,
    "end": 4975
  },
  {
    "type": "Identifier",
    "value": "IdentifierFieldConstructor",
    "start": 4980,
    "end": 5006
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5006,
    "end": 5007
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 5007,
    "end": 5013
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5013,
    "end": 5014
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5015,
    "end": 5016
  },
  {
    "type": "Identifier",
    "value": "RecordFieldConstructor",
    "start": 5021,
    "end": 5043
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5043,
    "end": 5044
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 5044,
    "end": 5050
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5050,
    "end": 5051
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5052,
    "end": 5053
  },
  {
    "type": "Identifier",
    "value": "StoredAsConstructor",
    "start": 5058,
    "end": 5077
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5077,
    "end": 5078
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 5078,
    "end": 5084
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5084,
    "end": 5085
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5086,
    "end": 5087
  },
  {
    "type": "Identifier",
    "value": "MaxMsToWaitBeforePublishingFieldConstructor",
    "start": 5150,
    "end": 5193
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5193,
    "end": 5194
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 5194,
    "end": 5200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5200,
    "end": 5201
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5202,
    "end": 5203
  },
  {
    "type": "Identifier",
    "value": "TypeConstructor",
    "start": 5208,
    "end": 5223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5223,
    "end": 5224
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 5224,
    "end": 5230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5230,
    "end": 5231
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5237,
    "end": 5242
  },
  {
    "type": "Identifier",
    "value": "buildPubSubRecordType",
    "start": 5243,
    "end": 5264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5265,
    "end": 5266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5267,
    "end": 5268
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 5268,
    "end": 5274
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5274,
    "end": 5275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5275,
    "end": 5276
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 5276,
    "end": 5281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5281,
    "end": 5282
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 5283,
    "end": 5289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5289,
    "end": 5290
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5291,
    "end": 5293
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 5294,
    "end": 5300
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5300,
    "end": 5301
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 5301,
    "end": 5307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5307,
    "end": 5308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5313,
    "end": 5314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5314,
    "end": 5315
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5315,
    "end": 5316
  },
  {
    "type": "Identifier",
    "value": "buildNameFieldConstructor",
    "start": 5321,
    "end": 5346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5346,
    "end": 5347
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 5347,
    "end": 5352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5352,
    "end": 5353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5353,
    "end": 5354
  },
  {
    "type": "Identifier",
    "value": "buildIdentifierFieldConstructor",
    "start": 5359,
    "end": 5390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5390,
    "end": 5391
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 5391,
    "end": 5396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5396,
    "end": 5397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5397,
    "end": 5398
  },
  {
    "type": "Identifier",
    "value": "buildRecordFieldConstructor",
    "start": 5403,
    "end": 5430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5430,
    "end": 5431
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 5431,
    "end": 5436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5436,
    "end": 5437
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5437,
    "end": 5438
  },
  {
    "type": "Identifier",
    "value": "buildStoredAsConstructor",
    "start": 5443,
    "end": 5467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5467,
    "end": 5468
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 5468,
    "end": 5473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5473,
    "end": 5474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5474,
    "end": 5475
  },
  {
    "type": "Identifier",
    "value": "buildMaxMsToWaitBeforePublishingFieldConstructor",
    "start": 5480,
    "end": 5528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5528,
    "end": 5529
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 5529,
    "end": 5534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5534,
    "end": 5535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5535,
    "end": 5536
  },
  {
    "type": "Identifier",
    "value": "buildType",
    "start": 5541,
    "end": 5550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5550,
    "end": 5551
  },
  {
    "type": "Identifier",
    "value": "soFar",
    "start": 5551,
    "end": 5556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5556,
    "end": 5557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5560,
    "end": 5561
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 5562,
    "end": 5564
  },
  {
    "type": "Identifier",
    "value": "BuildPubSubRecordType",
    "start": 5565,
    "end": 5586
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5586,
    "end": 5587
  },
  {
    "type": "Identifier",
    "value": "SO_FAR",
    "start": 5587,
    "end": 5593
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5593,
    "end": 5594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5594,
    "end": 5595
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5598,
    "end": 5603
  },
  {
    "type": "Identifier",
    "value": "PubSubRecordType",
    "start": 5604,
    "end": 5620
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5621,
    "end": 5622
  },
  {
    "type": "Identifier",
    "value": "buildPubSubRecordType",
    "start": 5623,
    "end": 5644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5644,
    "end": 5645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5645,
    "end": 5646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5646,
    "end": 5647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5647,
    "end": 5648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5648,
    "end": 5649
  }
]
```

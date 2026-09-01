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
        "name": "IDLMemberTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 40
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
              "name": "OperationMemberType",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 62
            },
            "typeArguments": null,
            "start": 43,
            "end": 62
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConstantMemberType",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 83
            },
            "typeArguments": null,
            "start": 65,
            "end": 83
          }
        ],
        "start": 43,
        "end": 83
      },
      "declare": false,
      "start": 21,
      "end": 84
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDLTypeDescription",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 114
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
              "name": "origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 127
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 129,
                "end": 135
              },
              "start": 127,
              "end": 135
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 136
          }
        ],
        "start": 115,
        "end": 138
      },
      "declare": false,
      "start": 86,
      "end": 138
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InterfaceType",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 163
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
              "name": "members",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 177
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
                    "name": "IDLMemberTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 193
                  },
                  "typeArguments": null,
                  "start": 179,
                  "end": 193
                },
                "start": 179,
                "end": 195
              },
              "start": 177,
              "end": 195
            },
            "accessibility": null,
            "static": false,
            "start": 170,
            "end": 196
          }
        ],
        "start": 164,
        "end": 198
      },
      "declare": false,
      "start": 140,
      "end": 198
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OperationMemberType",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 229
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "operation",
                  "raw": "\"operation\"",
                  "start": 242,
                  "end": 253
                },
                "start": 242,
                "end": 253
              },
              "start": 240,
              "end": 253
            },
            "accessibility": null,
            "static": false,
            "start": 236,
            "end": 254
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "idlType",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 266
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDLTypeDescription",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 286
                },
                "typeArguments": null,
                "start": 268,
                "end": 286
              },
              "start": 266,
              "end": 286
            },
            "accessibility": null,
            "static": false,
            "start": 259,
            "end": 287
          }
        ],
        "start": 230,
        "end": 289
      },
      "declare": false,
      "start": 200,
      "end": 289
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConstantMemberType",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 319
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 330
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "const",
                  "raw": "\"const\"",
                  "start": 332,
                  "end": 339
                },
                "start": 332,
                "end": 339
              },
              "start": 330,
              "end": 339
            },
            "accessibility": null,
            "static": false,
            "start": 326,
            "end": 340
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "idlType",
              "optional": false,
              "typeAnnotation": null,
              "start": 345,
              "end": 352
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 354,
                "end": 360
              },
              "start": 352,
              "end": 360
            },
            "accessibility": null,
            "static": false,
            "start": 345,
            "end": 361
          }
        ],
        "start": 320,
        "end": 363
      },
      "declare": false,
      "start": 291,
      "end": 363
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "insertInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 374,
        "end": 389
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callbackType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InterfaceType",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 417
              },
              "typeArguments": null,
              "start": 404,
              "end": 417
            },
            "start": 402,
            "end": 417
          },
          "start": 390,
          "end": 417
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "memberType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 446
                  },
                  "init": null,
                  "definite": false,
                  "start": 436,
                  "end": 446
                }
              ],
              "declare": false,
              "start": 430,
              "end": 446
            },
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "callbackType",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 462
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "members",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 470
              },
              "optional": false,
              "computed": false,
              "start": 450,
              "end": 470
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 486,
                        "end": 496
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 497,
                        "end": 501
                      },
                      "optional": false,
                      "computed": false,
                      "start": 486,
                      "end": 501
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "const",
                      "raw": "\"const\"",
                      "start": 506,
                      "end": 513
                    },
                    "start": 486,
                    "end": 513
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
                            "name": "memberType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 529,
                            "end": 539
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "idlType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 540,
                            "end": 547
                          },
                          "optional": false,
                          "computed": false,
                          "start": 529,
                          "end": 547
                        },
                        "directive": null,
                        "start": 529,
                        "end": 548
                      }
                    ],
                    "start": 515,
                    "end": 569
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "memberType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 587,
                          "end": 597
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 598,
                          "end": 602
                        },
                        "optional": false,
                        "computed": false,
                        "start": 587,
                        "end": 602
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "operation",
                        "raw": "\"operation\"",
                        "start": 607,
                        "end": 618
                      },
                      "start": 587,
                      "end": 618
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
                                "name": "memberType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 634,
                                "end": 644
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "idlType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 645,
                                "end": 652
                              },
                              "optional": false,
                              "computed": false,
                              "start": 634,
                              "end": 652
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "origin",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 653,
                              "end": 659
                            },
                            "optional": false,
                            "computed": false,
                            "start": 634,
                            "end": 659
                          },
                          "directive": null,
                          "start": 634,
                          "end": 660
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "memberType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 685,
                                "end": 695
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "idlType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 696,
                                "end": 703
                              },
                              "optional": false,
                              "computed": false,
                              "start": 685,
                              "end": 703
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IDLTypeDescription",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 707,
                                "end": 725
                              },
                              "typeArguments": null,
                              "start": 707,
                              "end": 725
                            },
                            "start": 685,
                            "end": 725
                          },
                          "directive": null,
                          "start": 684,
                          "end": 727
                        }
                      ],
                      "start": 620,
                      "end": 737
                    },
                    "alternate": null,
                    "start": 583,
                    "end": 737
                  },
                  "start": 482,
                  "end": 737
                }
              ],
              "start": 472,
              "end": 743
            },
            "start": 425,
            "end": 743
          }
        ],
        "start": 419,
        "end": 745
      },
      "expression": false,
      "start": 365,
      "end": 745
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "insertInterface2",
        "optional": false,
        "typeAnnotation": null,
        "start": 756,
        "end": 772
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callbackType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InterfaceType",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 800
              },
              "typeArguments": null,
              "start": 787,
              "end": 800
            },
            "start": 785,
            "end": 800
          },
          "start": 773,
          "end": 800
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "memberType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 819,
                    "end": 829
                  },
                  "init": null,
                  "definite": false,
                  "start": 819,
                  "end": 829
                }
              ],
              "declare": false,
              "start": 813,
              "end": 829
            },
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "callbackType",
                "optional": false,
                "typeAnnotation": null,
                "start": 833,
                "end": 845
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "members",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 853
              },
              "optional": false,
              "computed": false,
              "start": 833,
              "end": 853
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 869,
                        "end": 879
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 880,
                        "end": 884
                      },
                      "optional": false,
                      "computed": false,
                      "start": 869,
                      "end": 884
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "operation",
                      "raw": "\"operation\"",
                      "start": 889,
                      "end": 900
                    },
                    "start": 869,
                    "end": 900
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
                              "name": "memberType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 916,
                              "end": 926
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "idlType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 927,
                              "end": 934
                            },
                            "optional": false,
                            "computed": false,
                            "start": 916,
                            "end": 934
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "origin",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 935,
                            "end": 941
                          },
                          "optional": false,
                          "computed": false,
                          "start": 916,
                          "end": 941
                        },
                        "directive": null,
                        "start": 916,
                        "end": 942
                      }
                    ],
                    "start": 902,
                    "end": 963
                  },
                  "alternate": null,
                  "start": 865,
                  "end": 963
                }
              ],
              "start": 855,
              "end": 969
            },
            "start": 808,
            "end": 969
          }
        ],
        "start": 802,
        "end": 971
      },
      "expression": false,
      "start": 747,
      "end": 971
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 982,
        "end": 985
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "memberType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDLMemberTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 998,
                "end": 1012
              },
              "typeArguments": null,
              "start": 998,
              "end": 1012
            },
            "start": 996,
            "end": 1012
          },
          "start": 986,
          "end": 1012
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "memberType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1024,
                  "end": 1034
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1035,
                  "end": 1039
                },
                "optional": false,
                "computed": false,
                "start": 1024,
                "end": 1039
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "const",
                "raw": "\"const\"",
                "start": 1044,
                "end": 1051
              },
              "start": 1024,
              "end": 1051
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
                      "name": "memberType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1063,
                      "end": 1073
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "idlType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1074,
                      "end": 1081
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1063,
                    "end": 1081
                  },
                  "directive": null,
                  "start": 1063,
                  "end": 1082
                }
              ],
              "start": 1053,
              "end": 1099
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "memberType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1113,
                    "end": 1123
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1124,
                    "end": 1128
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1113,
                  "end": 1128
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "operation",
                  "raw": "\"operation\"",
                  "start": 1133,
                  "end": 1144
                },
                "start": 1113,
                "end": 1144
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
                          "name": "memberType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1156,
                          "end": 1166
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "idlType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1167,
                          "end": 1174
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1156,
                        "end": 1174
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "origin",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1175,
                        "end": 1181
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1156,
                      "end": 1181
                    },
                    "directive": null,
                    "start": 1156,
                    "end": 1182
                  }
                ],
                "start": 1146,
                "end": 1199
              },
              "alternate": null,
              "start": 1109,
              "end": 1199
            },
            "start": 1020,
            "end": 1199
          }
        ],
        "start": 1014,
        "end": 1201
      },
      "expression": false,
      "start": 973,
      "end": 1201
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1250,
        "end": 1251
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1258,
              "end": 1262
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1264,
                  "end": 1268
                },
                "start": 1264,
                "end": 1268
              },
              "start": 1262,
              "end": 1268
            },
            "accessibility": null,
            "static": false,
            "start": 1258,
            "end": 1269
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1274,
              "end": 1278
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1282,
                      "end": 1283
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1285,
                        "end": 1291
                      },
                      "start": 1283,
                      "end": 1291
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1282,
                    "end": 1292
                  }
                ],
                "start": 1280,
                "end": 1294
              },
              "start": 1278,
              "end": 1294
            },
            "accessibility": null,
            "static": false,
            "start": 1274,
            "end": 1295
          }
        ],
        "start": 1252,
        "end": 1297
      },
      "declare": false,
      "start": 1240,
      "end": 1297
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1309,
        "end": 1310
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1317,
              "end": 1321
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 1323,
                  "end": 1328
                },
                "start": 1323,
                "end": 1328
              },
              "start": 1321,
              "end": 1328
            },
            "accessibility": null,
            "static": false,
            "start": 1317,
            "end": 1329
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1334,
              "end": 1338
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1342,
                      "end": 1343
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1345,
                        "end": 1351
                      },
                      "start": 1343,
                      "end": 1351
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1342,
                    "end": 1352
                  }
                ],
                "start": 1340,
                "end": 1354
              },
              "start": 1338,
              "end": 1354
            },
            "accessibility": null,
            "static": false,
            "start": 1334,
            "end": 1354
          }
        ],
        "start": 1311,
        "end": 1356
      },
      "declare": false,
      "start": 1299,
      "end": 1356
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1367,
        "end": 1369
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
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
                    "start": 1373,
                    "end": 1374
                  },
                  "typeArguments": null,
                  "start": 1373,
                  "end": 1374
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1377,
                    "end": 1378
                  },
                  "typeArguments": null,
                  "start": 1377,
                  "end": 1378
                }
              ],
              "start": 1373,
              "end": 1378
            },
            "start": 1371,
            "end": 1378
          },
          "start": 1370,
          "end": 1378
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1393,
              "end": 1397
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1409,
                      "end": 1410
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1411,
                      "end": 1415
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1409,
                    "end": 1415
                  },
                  "directive": null,
                  "start": 1409,
                  "end": 1416
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1429,
                        "end": 1430
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1431,
                        "end": 1435
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1429,
                      "end": 1435
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1440,
                      "end": 1444
                    },
                    "start": 1429,
                    "end": 1444
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1460,
                              "end": 1461
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1462,
                              "end": 1466
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1460,
                            "end": 1466
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1467,
                            "end": 1468
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1460,
                          "end": 1468
                        },
                        "directive": null,
                        "start": 1460,
                        "end": 1469
                      }
                    ],
                    "start": 1446,
                    "end": 1479
                  },
                  "alternate": null,
                  "start": 1425,
                  "end": 1479
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1492,
                        "end": 1493
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1494,
                        "end": 1498
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1492,
                      "end": 1498
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1503,
                      "end": 1508
                    },
                    "start": 1492,
                    "end": 1508
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1524,
                              "end": 1525
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1526,
                              "end": 1530
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1524,
                            "end": 1530
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1531,
                            "end": 1532
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1524,
                          "end": 1532
                        },
                        "directive": null,
                        "start": 1524,
                        "end": 1533
                      }
                    ],
                    "start": 1510,
                    "end": 1543
                  },
                  "alternate": null,
                  "start": 1488,
                  "end": 1543
                }
              ],
              "start": 1399,
              "end": 1549
            },
            "start": 1386,
            "end": 1549
          }
        ],
        "start": 1380,
        "end": 1551
      },
      "expression": false,
      "start": 1358,
      "end": 1551
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1562,
        "end": 1564
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
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
                    "start": 1568,
                    "end": 1569
                  },
                  "typeArguments": null,
                  "start": 1568,
                  "end": 1569
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1572,
                    "end": 1573
                  },
                  "typeArguments": null,
                  "start": 1572,
                  "end": 1573
                }
              ],
              "start": 1568,
              "end": 1573
            },
            "start": 1566,
            "end": 1573
          },
          "start": 1565,
          "end": 1573
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1588,
              "end": 1592
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1608,
                      "end": 1609
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1610,
                      "end": 1614
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1608,
                    "end": 1614
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1630,
                              "end": 1631
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1632,
                              "end": 1636
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1630,
                            "end": 1636
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1637,
                            "end": 1638
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1630,
                          "end": 1638
                        },
                        "directive": null,
                        "start": 1630,
                        "end": 1639
                      }
                    ],
                    "start": 1616,
                    "end": 1649
                  },
                  "alternate": null,
                  "start": 1604,
                  "end": 1649
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1663,
                        "end": 1664
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1665,
                        "end": 1669
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1663,
                      "end": 1669
                    },
                    "prefix": true,
                    "start": 1662,
                    "end": 1669
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1685,
                              "end": 1686
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1687,
                              "end": 1691
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1685,
                            "end": 1691
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1692,
                            "end": 1693
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1685,
                          "end": 1693
                        },
                        "directive": null,
                        "start": 1685,
                        "end": 1694
                      }
                    ],
                    "start": 1671,
                    "end": 1704
                  },
                  "alternate": null,
                  "start": 1658,
                  "end": 1704
                }
              ],
              "start": 1594,
              "end": 1710
            },
            "start": 1581,
            "end": 1710
          }
        ],
        "start": 1575,
        "end": 1712
      },
      "expression": false,
      "start": 1553,
      "end": 1712
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 1712
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 21,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "IDLMemberTypes",
    "start": 26,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "OperationMemberType",
    "start": 43,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "ConstantMemberType",
    "start": 65,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 86,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "IDLTypeDescription",
    "start": 96,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 140,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "InterfaceType",
    "start": 150,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "members",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "IDLMemberTypes",
    "start": 179,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 200,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "OperationMemberType",
    "start": 210,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 236,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "String",
    "value": "\"operation\"",
    "start": 242,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "idlType",
    "start": 259,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "IDLTypeDescription",
    "start": 268,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 291,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "ConstantMemberType",
    "start": 301,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 326,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "String",
    "value": "\"const\"",
    "start": 332,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "idlType",
    "start": 345,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 365,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "insertInterface",
    "start": 374,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "callbackType",
    "start": 390,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "InterfaceType",
    "start": 404,
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
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 425,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 430,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "memberType",
    "start": 436,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 447,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "callbackType",
    "start": 450,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "members",
    "start": 463,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 482,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "memberType",
    "start": 486,
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
    "value": "type",
    "start": 497,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 502,
    "end": 505
  },
  {
    "type": "String",
    "value": "\"const\"",
    "start": 506,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "memberType",
    "start": 529,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "idlType",
    "start": 540,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 578,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "memberType",
    "start": 587,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 598,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 603,
    "end": 606
  },
  {
    "type": "String",
    "value": "\"operation\"",
    "start": 607,
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
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "memberType",
    "start": 634,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "idlType",
    "start": 645,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 653,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "memberType",
    "start": 685,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "idlType",
    "start": 696,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 704,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "IDLTypeDescription",
    "start": 707,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 747,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "insertInterface2",
    "start": 756,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "callbackType",
    "start": 773,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "InterfaceType",
    "start": 787,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 808,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 813,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "memberType",
    "start": 819,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 830,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "callbackType",
    "start": 833,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "members",
    "start": 846,
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
    "value": "{",
    "start": 855,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 865,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "memberType",
    "start": 869,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 880,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 885,
    "end": 888
  },
  {
    "type": "String",
    "value": "\"operation\"",
    "start": 889,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "memberType",
    "start": 916,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "idlType",
    "start": 927,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 935,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 973,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 982,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "memberType",
    "start": 986,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "IDLMemberTypes",
    "start": 998,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1020,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "memberType",
    "start": 1024,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1035,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "String",
    "value": "\"const\"",
    "start": 1044,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "memberType",
    "start": 1063,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "idlType",
    "start": 1074,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1104,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "memberType",
    "start": 1113,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1124,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1129,
    "end": 1132
  },
  {
    "type": "String",
    "value": "\"operation\"",
    "start": 1133,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "memberType",
    "start": 1156,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "idlType",
    "start": 1167,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 1175,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1240,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1258,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1264,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1274,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1285,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1299,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1317,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1323,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1334,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1345,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1358,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1367,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1386,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1393,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1411,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1425,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1431,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1436,
    "end": 1439
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1440,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1462,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1488,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1494,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1499,
    "end": 1502
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1503,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1526,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1553,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1562,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1581,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1588,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1604,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1610,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1632,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1658,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1665,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1687,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1711,
    "end": 1712
  }
]
```

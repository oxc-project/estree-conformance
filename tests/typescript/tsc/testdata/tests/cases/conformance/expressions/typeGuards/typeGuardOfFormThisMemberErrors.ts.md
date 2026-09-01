__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 96
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 129
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
                      "name": "isFSO",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 139
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 141,
                          "end": 145
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FileSystemObject",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 149,
                              "end": 165
                            },
                            "typeArguments": null,
                            "start": 149,
                            "end": 165
                          },
                          "start": 149,
                          "end": 165
                        },
                        "start": 141,
                        "end": 165
                      },
                      "start": 139,
                      "end": 165
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
                    "start": 134,
                    "end": 166
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isFile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 179
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
                          "type": "TSTypePredicate",
                          "parameterName": {
                            "type": "TSThisType",
                            "start": 183,
                            "end": 187
                          },
                          "asserts": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "File",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 191,
                                "end": 195
                              },
                              "typeArguments": null,
                              "start": 191,
                              "end": 195
                            },
                            "start": 191,
                            "end": 195
                          },
                          "start": 183,
                          "end": 195
                        },
                        "start": 181,
                        "end": 195
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "ThisExpression",
                                "start": 208,
                                "end": 212
                              },
                              "operator": "instanceof",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "File",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 224,
                                "end": 228
                              },
                              "start": 208,
                              "end": 228
                            },
                            "start": 201,
                            "end": 229
                          }
                        ],
                        "start": 196,
                        "end": 233
                      },
                      "expression": false,
                      "start": 179,
                      "end": 233
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 169,
                    "end": 233
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isFile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 240,
                      "end": 246
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 252
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 254,
                        "end": 270
                      },
                      "expression": false,
                      "start": 246,
                      "end": 270
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 236,
                    "end": 270
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isDirectory",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 288
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
                          "type": "TSTypePredicate",
                          "parameterName": {
                            "type": "TSThisType",
                            "start": 292,
                            "end": 296
                          },
                          "asserts": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Directory",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 300,
                                "end": 309
                              },
                              "typeArguments": null,
                              "start": 300,
                              "end": 309
                            },
                            "start": 300,
                            "end": 309
                          },
                          "start": 292,
                          "end": 309
                        },
                        "start": 290,
                        "end": 309
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "ThisExpression",
                                "start": 322,
                                "end": 326
                              },
                              "operator": "instanceof",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Directory",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 338,
                                "end": 347
                              },
                              "start": 322,
                              "end": 347
                            },
                            "start": 315,
                            "end": 348
                          }
                        ],
                        "start": 310,
                        "end": 352
                      },
                      "expression": false,
                      "start": 288,
                      "end": 352
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 273,
                    "end": 352
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isNetworked",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 355,
                      "end": 366
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 368,
                          "end": 372
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Networked",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 377,
                                  "end": 386
                                },
                                "typeArguments": null,
                                "start": 377,
                                "end": 386
                              },
                              {
                                "type": "TSThisType",
                                "start": 389,
                                "end": 393
                              }
                            ],
                            "start": 377,
                            "end": 393
                          },
                          "start": 377,
                          "end": 393
                        },
                        "start": 368,
                        "end": 394
                      },
                      "start": 366,
                      "end": 394
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
                    "start": 355,
                    "end": 395
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
                      "start": 398,
                      "end": 409
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
                            "name": "path",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 423,
                                "end": 429
                              },
                              "start": 421,
                              "end": 429
                            },
                            "start": 417,
                            "end": 429
                          },
                          "readonly": false,
                          "static": false,
                          "start": 410,
                          "end": 429
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 431,
                        "end": 433
                      },
                      "expression": false,
                      "start": 409,
                      "end": 433
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 398,
                    "end": 433
                  }
                ],
                "start": 130,
                "end": 436
              },
              "abstract": false,
              "declare": false,
              "start": 107,
              "end": 436
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 100,
            "end": 436
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "File",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 456
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 465,
                "end": 481
              },
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
                      "start": 486,
                      "end": 497
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
                          "name": "path",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 504,
                              "end": 510
                            },
                            "start": 502,
                            "end": 510
                          },
                          "start": 498,
                          "end": 510
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "content",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 528,
                                "end": 534
                              },
                              "start": 526,
                              "end": 534
                            },
                            "start": 519,
                            "end": 534
                          },
                          "readonly": false,
                          "static": false,
                          "start": 512,
                          "end": 534
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
                                "type": "Super",
                                "start": 538,
                                "end": 543
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "path",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 544,
                                  "end": 548
                                }
                              ],
                              "optional": false,
                              "start": 538,
                              "end": 549
                            },
                            "directive": null,
                            "start": 538,
                            "end": 550
                          }
                        ],
                        "start": 536,
                        "end": 552
                      },
                      "expression": false,
                      "start": 497,
                      "end": 552
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 486,
                    "end": 552
                  }
                ],
                "start": 482,
                "end": 555
              },
              "abstract": false,
              "declare": false,
              "start": 446,
              "end": 555
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 439,
            "end": 555
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Directory",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 579
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 604
              },
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
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 609,
                      "end": 617
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
                            "name": "FileSystemObject",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 619,
                            "end": 635
                          },
                          "typeArguments": null,
                          "start": 619,
                          "end": 635
                        },
                        "start": 619,
                        "end": 637
                      },
                      "start": 617,
                      "end": 637
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
                    "start": 609,
                    "end": 638
                  }
                ],
                "start": 605,
                "end": 641
              },
              "abstract": false,
              "declare": false,
              "start": 564,
              "end": 641
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 557,
            "end": 641
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Networked",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 669
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
                      "name": "host",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 674,
                      "end": 678
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 680,
                        "end": 686
                      },
                      "start": 678,
                      "end": 686
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 674,
                    "end": 687
                  }
                ],
                "start": 670,
                "end": 690
              },
              "declare": false,
              "start": 650,
              "end": 690
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 643,
            "end": 690
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
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FileSystemObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 703,
                        "end": 719
                      },
                      "typeArguments": null,
                      "start": 703,
                      "end": 719
                    },
                    "start": 701,
                    "end": 719
                  },
                  "start": 697,
                  "end": 719
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "File",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 726,
                    "end": 730
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "foo/bar.txt",
                      "raw": "\"foo/bar.txt\"",
                      "start": 731,
                      "end": 744
                    },
                    {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 746,
                      "end": 751
                    }
                  ],
                  "start": 722,
                  "end": 752
                },
                "definite": false,
                "start": 697,
                "end": 752
              }
            ],
            "declare": false,
            "start": 693,
            "end": 753
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 755,
                  "end": 759
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isNetworked",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 760,
                  "end": 771
                },
                "optional": false,
                "computed": false,
                "start": 755,
                "end": 771
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 774,
                  "end": 778
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 779,
                  "end": 785
                },
                "optional": false,
                "computed": false,
                "start": 774,
                "end": 785
              },
              "start": 755,
              "end": 785
            },
            "directive": null,
            "start": 755,
            "end": 786
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 792
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFSO",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 793,
                  "end": 798
                },
                "optional": false,
                "computed": false,
                "start": 788,
                "end": 798
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 801,
                  "end": 805
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isNetworked",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 806,
                  "end": 817
                },
                "optional": false,
                "computed": false,
                "start": 801,
                "end": 817
              },
              "start": 788,
              "end": 817
            },
            "directive": null,
            "start": 788,
            "end": 818
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 820,
                  "end": 824
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 825,
                  "end": 831
                },
                "optional": false,
                "computed": false,
                "start": 820,
                "end": 831
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 834,
                  "end": 838
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFSO",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 839,
                  "end": 844
                },
                "optional": false,
                "computed": false,
                "start": 834,
                "end": 844
              },
              "start": 820,
              "end": 844
            },
            "directive": null,
            "start": 820,
            "end": 845
          }
        ],
        "start": 97,
        "end": 847
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 82,
      "end": 847
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 847
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 82,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 100,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 113,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "isFSO",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 141,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 146,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 149,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 183,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 188,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 201,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 208,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 213,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 247,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 273,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "isDirectory",
    "start": 277,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 292,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 297,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Directory",
    "start": 300,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 315,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 322,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 327,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "Directory",
    "start": 338,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "isNetworked",
    "start": 355,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 368,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 373,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "Networked",
    "start": 377,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 398,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 410,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 417,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 423,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 439,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 446,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 452,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 457,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 465,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 486,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 498,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 504,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 512,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 519,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 528,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 538,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 557,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 564,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "Directory",
    "start": 570,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 580,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 588,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 609,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 619,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 643,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 650,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "Networked",
    "start": 660,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 674,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 680,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 693,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 697,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 703,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 722,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 726,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "String",
    "value": "\"foo/bar.txt\"",
    "start": 731,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 744,
    "end": 745
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 746,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 755,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "isNetworked",
    "start": 760,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 774,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 779,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 788,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "isFSO",
    "start": 793,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 801,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "isNetworked",
    "start": 806,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 820,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 825,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 834,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "isFSO",
    "start": 839,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 846,
    "end": 847
  }
]
```

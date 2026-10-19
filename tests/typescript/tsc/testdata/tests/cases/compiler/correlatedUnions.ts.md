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
        "name": "RecordMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 45
      },
      "typeParameters": null,
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 53,
                "end": 59
              },
              "start": 51,
              "end": 59
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 60
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
            },
            "accessibility": null,
            "static": false,
            "start": 61,
            "end": 71
          },
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
              "start": 72,
              "end": 73
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 75,
                "end": 82
              },
              "start": 73,
              "end": 82
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 82
          }
        ],
        "start": 48,
        "end": 84
      },
      "declare": false,
      "start": 31,
      "end": 85
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 102
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecordMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 128
                },
                "typeArguments": null,
                "start": 119,
                "end": 128
              },
              "start": 113,
              "end": 128
            },
            "default": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecordMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 146
                },
                "typeArguments": null,
                "start": 137,
                "end": 146
              },
              "start": 131,
              "end": 146
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 103,
            "end": 146
          }
        ],
        "start": 102,
        "end": 147
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 154
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 159
            },
            "typeArguments": null,
            "start": 158,
            "end": 159
          },
          "nameType": null,
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 172
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 175
                    },
                    "typeArguments": null,
                    "start": 174,
                    "end": 175
                  },
                  "start": 172,
                  "end": 175
                },
                "accessibility": null,
                "static": false,
                "start": 168,
                "end": 176
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 182
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RecordMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 193
                      },
                      "typeArguments": null,
                      "start": 184,
                      "end": 193
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 194,
                        "end": 195
                      },
                      "typeArguments": null,
                      "start": 194,
                      "end": 195
                    },
                    "start": 184,
                    "end": 196
                  },
                  "start": 182,
                  "end": 196
                },
                "accessibility": null,
                "static": false,
                "start": 181,
                "end": 197
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 203
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "RecordMap",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 209,
                                "end": 218
                              },
                              "typeArguments": null,
                              "start": 209,
                              "end": 218
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 219,
                                "end": 220
                              },
                              "typeArguments": null,
                              "start": 219,
                              "end": 220
                            },
                            "start": 209,
                            "end": 221
                          },
                          "start": 207,
                          "end": 221
                        },
                        "start": 206,
                        "end": 221
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 226,
                        "end": 230
                      },
                      "start": 223,
                      "end": 230
                    },
                    "start": 205,
                    "end": 230
                  },
                  "start": 203,
                  "end": 230
                },
                "accessibility": null,
                "static": false,
                "start": 202,
                "end": 230
              }
            ],
            "start": 162,
            "end": 232
          },
          "optional": false,
          "readonly": null,
          "start": 150,
          "end": 233
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 235
          },
          "typeArguments": null,
          "start": 234,
          "end": 235
        },
        "start": 150,
        "end": 236
      },
      "declare": false,
      "start": 86,
      "end": 237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "processRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 261
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecordMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 287
                },
                "typeArguments": null,
                "start": 278,
                "end": 287
              },
              "start": 272,
              "end": 287
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 262,
            "end": 287
          }
        ],
        "start": 261,
        "end": 288
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "rec",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnionRecord",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 305
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 307
                    },
                    "typeArguments": null,
                    "start": 306,
                    "end": 307
                  }
                ],
                "start": 305,
                "end": 308
              },
              "start": 294,
              "end": 308
            },
            "start": 292,
            "end": 308
          },
          "start": 289,
          "end": 308
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
                  "name": "rec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 319
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 321
                },
                "optional": false,
                "computed": false,
                "start": 316,
                "end": 321
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 322,
                    "end": 325
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 327
                  },
                  "optional": false,
                  "computed": false,
                  "start": 322,
                  "end": 327
                }
              ],
              "optional": false,
              "start": 316,
              "end": 328
            },
            "directive": null,
            "start": 316,
            "end": 329
          }
        ],
        "start": 310,
        "end": 331
      },
      "expression": false,
      "start": 239,
      "end": 331
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnionRecord",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 362
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "n",
                        "raw": "'n'",
                        "start": 363,
                        "end": 366
                      },
                      "start": 363,
                      "end": 366
                    }
                  ],
                  "start": 362,
                  "end": 367
                },
                "start": 351,
                "end": 367
              },
              "start": 349,
              "end": 367
            },
            "start": 347,
            "end": 367
          },
          "init": null,
          "definite": false,
          "start": 347,
          "end": 367
        }
      ],
      "declare": true,
      "start": 333,
      "end": 368
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnionRecord",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 451
                },
                "typeArguments": null,
                "start": 440,
                "end": 451
              },
              "start": 438,
              "end": 451
            },
            "start": 436,
            "end": 451
          },
          "init": null,
          "definite": false,
          "start": 436,
          "end": 451
        }
      ],
      "declare": true,
      "start": 422,
      "end": 452
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "processRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 519,
          "end": 532
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 533,
            "end": 535
          }
        ],
        "optional": false,
        "start": 519,
        "end": 536
      },
      "directive": null,
      "start": 519,
      "end": 537
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "processRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 538,
          "end": 551
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 554
          }
        ],
        "optional": false,
        "start": 538,
        "end": 555
      },
      "directive": null,
      "start": 538,
      "end": 556
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "processRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 557,
          "end": 570
        },
        "typeArguments": null,
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 577
                },
                "value": {
                  "type": "Literal",
                  "value": "n",
                  "raw": "'n'",
                  "start": 579,
                  "end": 582
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 573,
                "end": 582
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 585
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 587,
                  "end": 589
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 584,
                "end": 589
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 591,
                  "end": 592
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
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 594,
                      "end": 595
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 599,
                        "end": 600
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toExponential",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 601,
                        "end": 614
                      },
                      "optional": false,
                      "computed": false,
                      "start": 599,
                      "end": 614
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 599,
                    "end": 616
                  },
                  "id": null,
                  "generator": false,
                  "start": 594,
                  "end": 616
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 591,
                "end": 616
              }
            ],
            "start": 571,
            "end": 618
          }
        ],
        "optional": false,
        "start": 557,
        "end": 619
      },
      "directive": null,
      "start": 557,
      "end": 620
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextFieldData",
        "optional": false,
        "typeAnnotation": null,
        "start": 640,
        "end": 653
      },
      "typeParameters": null,
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 658,
              "end": 663
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 665,
                "end": 671
              },
              "start": 663,
              "end": 671
            },
            "accessibility": null,
            "static": false,
            "start": 658,
            "end": 671
          }
        ],
        "start": 656,
        "end": 673
      },
      "declare": false,
      "start": 635,
      "end": 673
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SelectFieldData",
        "optional": false,
        "typeAnnotation": null,
        "start": 679,
        "end": 694
      },
      "typeParameters": null,
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
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 706
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 708,
                  "end": 714
                },
                "start": 708,
                "end": 716
              },
              "start": 706,
              "end": 716
            },
            "accessibility": null,
            "static": false,
            "start": 699,
            "end": 717
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "selectedValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 731
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 733,
                "end": 739
              },
              "start": 731,
              "end": 739
            },
            "accessibility": null,
            "static": false,
            "start": 718,
            "end": 739
          }
        ],
        "start": 697,
        "end": 741
      },
      "declare": false,
      "start": 674,
      "end": 741
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 748,
        "end": 756
      },
      "typeParameters": null,
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
              "name": "text",
              "optional": false,
              "typeAnnotation": null,
              "start": 765,
              "end": 769
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TextFieldData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 784
                },
                "typeArguments": null,
                "start": 771,
                "end": 784
              },
              "start": 769,
              "end": 784
            },
            "accessibility": null,
            "static": false,
            "start": 765,
            "end": 785
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 790,
              "end": 796
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SelectFieldData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 798,
                  "end": 813
                },
                "typeArguments": null,
                "start": 798,
                "end": 813
              },
              "start": 796,
              "end": 813
            },
            "accessibility": null,
            "static": false,
            "start": 790,
            "end": 814
          }
        ],
        "start": 759,
        "end": 816
      },
      "declare": false,
      "start": 743,
      "end": 816
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FormField",
        "optional": false,
        "typeAnnotation": null,
        "start": 823,
        "end": 832
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 833,
              "end": 834
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 857
                },
                "typeArguments": null,
                "start": 849,
                "end": 857
              },
              "start": 843,
              "end": 857
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 833,
            "end": 857
          }
        ],
        "start": 832,
        "end": 858
      },
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 867
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
                  "start": 869,
                  "end": 870
                },
                "typeArguments": null,
                "start": 869,
                "end": 870
              },
              "start": 867,
              "end": 870
            },
            "accessibility": null,
            "static": false,
            "start": 863,
            "end": 871
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
              "start": 872,
              "end": 876
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FieldMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 878,
                    "end": 886
                  },
                  "typeArguments": null,
                  "start": 878,
                  "end": 886
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 887,
                    "end": 888
                  },
                  "typeArguments": null,
                  "start": 887,
                  "end": 888
                },
                "start": 878,
                "end": 889
              },
              "start": 876,
              "end": 889
            },
            "accessibility": null,
            "static": false,
            "start": 872,
            "end": 889
          }
        ],
        "start": 861,
        "end": 891
      },
      "declare": false,
      "start": 818,
      "end": 892
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RenderFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 899,
        "end": 909
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 911
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 926,
                  "end": 934
                },
                "typeArguments": null,
                "start": 926,
                "end": 934
              },
              "start": 920,
              "end": 934
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 910,
            "end": 934
          }
        ],
        "start": 909,
        "end": 935
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FieldMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 946,
                    "end": 954
                  },
                  "typeArguments": null,
                  "start": 946,
                  "end": 954
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 955,
                    "end": 956
                  },
                  "typeArguments": null,
                  "start": 955,
                  "end": 956
                },
                "start": 946,
                "end": 957
              },
              "start": 944,
              "end": 957
            },
            "start": 939,
            "end": 957
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 962,
            "end": 966
          },
          "start": 959,
          "end": 966
        },
        "start": 938,
        "end": 966
      },
      "declare": false,
      "start": 894,
      "end": 967
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RenderFuncMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 973,
        "end": 986
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
          "start": 992,
          "end": 993
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FieldMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1003,
              "end": 1011
            },
            "typeArguments": null,
            "start": 1003,
            "end": 1011
          },
          "start": 997,
          "end": 1011
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RenderFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 1014,
            "end": 1024
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1025,
                  "end": 1026
                },
                "typeArguments": null,
                "start": 1025,
                "end": 1026
              }
            ],
            "start": 1024,
            "end": 1027
          },
          "start": 1014,
          "end": 1027
        },
        "optional": false,
        "readonly": null,
        "start": 989,
        "end": 1029
      },
      "declare": false,
      "start": 968,
      "end": 1030
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "renderTextField",
        "optional": false,
        "typeAnnotation": null,
        "start": 1041,
        "end": 1056
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "TextFieldData",
                "optional": false,
                "typeAnnotation": null,
                "start": 1064,
                "end": 1077
              },
              "typeArguments": null,
              "start": 1064,
              "end": 1077
            },
            "start": 1062,
            "end": 1077
          },
          "start": 1057,
          "end": 1077
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1079,
        "end": 1081
      },
      "expression": false,
      "start": 1032,
      "end": 1081
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "renderSelectField",
        "optional": false,
        "typeAnnotation": null,
        "start": 1091,
        "end": 1108
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "SelectFieldData",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1131
              },
              "typeArguments": null,
              "start": 1116,
              "end": 1131
            },
            "start": 1114,
            "end": 1131
          },
          "start": 1109,
          "end": 1131
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1133,
        "end": 1135
      },
      "expression": false,
      "start": 1082,
      "end": 1135
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
            "name": "renderFuncs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RenderFuncMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1156,
                  "end": 1169
                },
                "typeArguments": null,
                "start": 1156,
                "end": 1169
              },
              "start": 1154,
              "end": 1169
            },
            "start": 1143,
            "end": 1169
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1178,
                  "end": 1182
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "renderTextField",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1184,
                  "end": 1199
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1178,
                "end": 1199
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "select",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1205,
                  "end": 1211
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "renderSelectField",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1213,
                  "end": 1230
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1205,
                "end": 1230
              }
            ],
            "start": 1172,
            "end": 1233
          },
          "definite": false,
          "start": 1143,
          "end": 1233
        }
      ],
      "declare": false,
      "start": 1137,
      "end": 1234
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "renderField",
        "optional": false,
        "typeAnnotation": null,
        "start": 1245,
        "end": 1256
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1257,
              "end": 1258
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1273,
                  "end": 1281
                },
                "typeArguments": null,
                "start": 1273,
                "end": 1281
              },
              "start": 1267,
              "end": 1281
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1257,
            "end": 1281
          }
        ],
        "start": 1256,
        "end": 1282
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "field",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FormField",
                "optional": false,
                "typeAnnotation": null,
                "start": 1290,
                "end": 1299
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1300,
                      "end": 1301
                    },
                    "typeArguments": null,
                    "start": 1300,
                    "end": 1301
                  }
                ],
                "start": 1299,
                "end": 1302
              },
              "start": 1290,
              "end": 1302
            },
            "start": 1288,
            "end": 1302
          },
          "start": 1283,
          "end": 1302
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "renderFn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1324
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "renderFuncs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1327,
                    "end": 1338
                  },
                  "property": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "field",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1339,
                      "end": 1344
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1345,
                      "end": 1349
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1339,
                    "end": 1349
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1327,
                  "end": 1350
                },
                "definite": false,
                "start": 1316,
                "end": 1350
              }
            ],
            "declare": false,
            "start": 1310,
            "end": 1351
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "renderFn",
                "optional": false,
                "typeAnnotation": null,
                "start": 1356,
                "end": 1364
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1365,
                    "end": 1370
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1371,
                    "end": 1375
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1365,
                  "end": 1375
                }
              ],
              "optional": false,
              "start": 1356,
              "end": 1376
            },
            "directive": null,
            "start": 1356,
            "end": 1377
          }
        ],
        "start": 1304,
        "end": 1379
      },
      "expression": false,
      "start": 1236,
      "end": 1379
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1399,
        "end": 1406
      },
      "typeParameters": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1415,
              "end": 1418
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1420,
                "end": 1426
              },
              "start": 1418,
              "end": 1426
            },
            "accessibility": null,
            "static": false,
            "start": 1415,
            "end": 1427
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1432,
              "end": 1435
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1437,
                "end": 1443
              },
              "start": 1435,
              "end": 1443
            },
            "accessibility": null,
            "static": false,
            "start": 1432,
            "end": 1443
          }
        ],
        "start": 1409,
        "end": 1445
      },
      "declare": false,
      "start": 1394,
      "end": 1446
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null,
        "start": 1453,
        "end": 1457
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1466,
            "end": 1473
          },
          "typeArguments": null,
          "start": 1466,
          "end": 1473
        },
        "start": 1460,
        "end": 1473
      },
      "declare": false,
      "start": 1448,
      "end": 1474
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HandlerMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1481,
        "end": 1491
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1497,
          "end": 1498
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 1502,
            "end": 1506
          },
          "typeArguments": null,
          "start": 1502,
          "end": 1506
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeMap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1513,
                      "end": 1520
                    },
                    "typeArguments": null,
                    "start": 1513,
                    "end": 1520
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1521,
                      "end": 1522
                    },
                    "typeArguments": null,
                    "start": 1521,
                    "end": 1522
                  },
                  "start": 1513,
                  "end": 1523
                },
                "start": 1511,
                "end": 1523
              },
              "start": 1510,
              "end": 1523
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1528,
              "end": 1532
            },
            "start": 1525,
            "end": 1532
          },
          "start": 1509,
          "end": 1532
        },
        "optional": false,
        "readonly": null,
        "start": 1494,
        "end": 1534
      },
      "declare": false,
      "start": 1476,
      "end": 1535
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
            "name": "handlers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HandlerMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1553,
                  "end": 1563
                },
                "typeArguments": null,
                "start": 1553,
                "end": 1563
              },
              "start": 1551,
              "end": 1563
            },
            "start": 1543,
            "end": 1563
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1572,
                  "end": 1575
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1577,
                      "end": 1578
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1582,
                      "end": 1583
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1584,
                      "end": 1590
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1582,
                    "end": 1590
                  },
                  "id": null,
                  "generator": false,
                  "start": 1577,
                  "end": 1590
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1572,
                "end": 1590
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1596,
                  "end": 1599
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1601,
                      "end": 1602
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1606,
                        "end": 1607
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1608,
                        "end": 1615
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1606,
                      "end": 1615
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1616,
                        "end": 1617
                      }
                    ],
                    "optional": false,
                    "start": 1606,
                    "end": 1618
                  },
                  "id": null,
                  "generator": false,
                  "start": 1601,
                  "end": 1618
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1596,
                "end": 1618
              }
            ],
            "start": 1566,
            "end": 1620
          },
          "definite": false,
          "start": 1543,
          "end": 1620
        }
      ],
      "declare": false,
      "start": 1537,
      "end": 1621
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DataEntry",
        "optional": false,
        "typeAnnotation": null,
        "start": 1628,
        "end": 1637
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1638,
              "end": 1639
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 1648,
                "end": 1652
              },
              "typeArguments": null,
              "start": 1648,
              "end": 1652
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 1655,
                "end": 1659
              },
              "typeArguments": null,
              "start": 1655,
              "end": 1659
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1638,
            "end": 1659
          }
        ],
        "start": 1637,
        "end": 1660
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1666,
            "end": 1667
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1671,
              "end": 1672
            },
            "typeArguments": null,
            "start": 1671,
            "end": 1672
          },
          "nameType": null,
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1681,
                  "end": 1685
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1687,
                      "end": 1688
                    },
                    "typeArguments": null,
                    "start": 1687,
                    "end": 1688
                  },
                  "start": 1685,
                  "end": 1688
                },
                "accessibility": null,
                "static": false,
                "start": 1681,
                "end": 1689
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
                  "start": 1694,
                  "end": 1698
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1700,
                        "end": 1707
                      },
                      "typeArguments": null,
                      "start": 1700,
                      "end": 1707
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1708,
                        "end": 1709
                      },
                      "typeArguments": null,
                      "start": 1708,
                      "end": 1709
                    },
                    "start": 1700,
                    "end": 1710
                  },
                  "start": 1698,
                  "end": 1710
                },
                "accessibility": null,
                "static": false,
                "start": 1694,
                "end": 1710
              }
            ],
            "start": 1675,
            "end": 1712
          },
          "optional": false,
          "readonly": null,
          "start": 1663,
          "end": 1713
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1714,
            "end": 1715
          },
          "typeArguments": null,
          "start": 1714,
          "end": 1715
        },
        "start": 1663,
        "end": 1716
      },
      "declare": false,
      "start": 1623,
      "end": 1717
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
            "name": "data",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DataEntry",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1731,
                    "end": 1740
                  },
                  "typeArguments": null,
                  "start": 1731,
                  "end": 1740
                },
                "start": 1731,
                "end": 1742
              },
              "start": 1729,
              "end": 1742
            },
            "start": 1725,
            "end": 1742
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
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
                      "start": 1753,
                      "end": 1757
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 1759,
                      "end": 1764
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1753,
                    "end": 1764
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1766,
                      "end": 1770
                    },
                    "value": {
                      "type": "Literal",
                      "value": "abc",
                      "raw": "'abc'",
                      "start": 1772,
                      "end": 1777
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1766,
                    "end": 1777
                  }
                ],
                "start": 1751,
                "end": 1779
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1787,
                      "end": 1791
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 1793,
                      "end": 1798
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1787,
                    "end": 1798
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1800,
                      "end": 1804
                    },
                    "value": {
                      "type": "Literal",
                      "value": "def",
                      "raw": "'def'",
                      "start": 1806,
                      "end": 1811
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1800,
                    "end": 1811
                  }
                ],
                "start": 1785,
                "end": 1813
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1821,
                      "end": 1825
                    },
                    "value": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "'bar'",
                      "start": 1827,
                      "end": 1832
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1821,
                    "end": 1832
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1834,
                      "end": 1838
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 1840,
                      "end": 1842
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1834,
                    "end": 1842
                  }
                ],
                "start": 1819,
                "end": 1844
              }
            ],
            "start": 1745,
            "end": 1847
          },
          "definite": false,
          "start": 1725,
          "end": 1847
        }
      ],
      "declare": false,
      "start": 1719,
      "end": 1848
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "process",
        "optional": false,
        "typeAnnotation": null,
        "start": 1859,
        "end": 1866
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1867,
              "end": 1868
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 1877,
                "end": 1881
              },
              "typeArguments": null,
              "start": 1877,
              "end": 1881
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1867,
            "end": 1881
          }
        ],
        "start": 1866,
        "end": 1882
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DataEntry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1889,
                  "end": 1898
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1899,
                        "end": 1900
                      },
                      "typeArguments": null,
                      "start": 1899,
                      "end": 1900
                    }
                  ],
                  "start": 1898,
                  "end": 1901
                },
                "start": 1889,
                "end": 1901
              },
              "start": 1889,
              "end": 1903
            },
            "start": 1887,
            "end": 1903
          },
          "start": 1883,
          "end": 1903
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
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1911,
                  "end": 1915
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1916,
                  "end": 1923
                },
                "optional": false,
                "computed": false,
                "start": 1911,
                "end": 1923
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "block",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1924,
                      "end": 1929
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
                              "name": "block",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1947,
                              "end": 1952
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1953,
                              "end": 1957
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1947,
                            "end": 1957
                          },
                          "operator": "in",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "handlers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1961,
                            "end": 1969
                          },
                          "start": 1947,
                          "end": 1969
                        },
                        "consequent": {
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
                                    "name": "handlers",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1985,
                                    "end": 1993
                                  },
                                  "property": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "block",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1994,
                                      "end": 1999
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "type",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2000,
                                      "end": 2004
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1994,
                                    "end": 2004
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1985,
                                  "end": 2005
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "block",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2006,
                                      "end": 2011
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2012,
                                      "end": 2016
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2006,
                                    "end": 2016
                                  }
                                ],
                                "optional": false,
                                "start": 1985,
                                "end": 2017
                              },
                              "directive": null,
                              "start": 1985,
                              "end": 2017
                            }
                          ],
                          "start": 1971,
                          "end": 2027
                        },
                        "alternate": null,
                        "start": 1943,
                        "end": 2027
                      }
                    ],
                    "start": 1933,
                    "end": 2033
                  },
                  "id": null,
                  "generator": false,
                  "start": 1924,
                  "end": 2033
                }
              ],
              "optional": false,
              "start": 1911,
              "end": 2034
            },
            "directive": null,
            "start": 1911,
            "end": 2035
          }
        ],
        "start": 1905,
        "end": 2037
      },
      "expression": false,
      "start": 1850,
      "end": 2037
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "process",
          "optional": false,
          "typeAnnotation": null,
          "start": 2039,
          "end": 2046
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 2047,
            "end": 2051
          }
        ],
        "optional": false,
        "start": 2039,
        "end": 2052
      },
      "directive": null,
      "start": 2039,
      "end": 2053
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "process",
          "optional": false,
          "typeAnnotation": null,
          "start": 2054,
          "end": 2061
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
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
                      "start": 2065,
                      "end": 2069
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 2071,
                      "end": 2076
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2065,
                    "end": 2076
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2078,
                      "end": 2082
                    },
                    "value": {
                      "type": "Literal",
                      "value": "abc",
                      "raw": "'abc'",
                      "start": 2084,
                      "end": 2089
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2078,
                    "end": 2089
                  }
                ],
                "start": 2063,
                "end": 2091
              }
            ],
            "start": 2062,
            "end": 2092
          }
        ],
        "optional": false,
        "start": 2054,
        "end": 2093
      },
      "directive": null,
      "start": 2054,
      "end": 2094
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LetterMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 2114,
        "end": 2123
      },
      "typeParameters": null,
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 2128,
              "end": 2129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2131,
                "end": 2137
              },
              "start": 2129,
              "end": 2137
            },
            "accessibility": null,
            "static": false,
            "start": 2128,
            "end": 2138
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2139,
              "end": 2140
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2142,
                "end": 2148
              },
              "start": 2140,
              "end": 2148
            },
            "accessibility": null,
            "static": false,
            "start": 2139,
            "end": 2148
          }
        ],
        "start": 2126,
        "end": 2150
      },
      "declare": false,
      "start": 2109,
      "end": 2150
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LetterCaller",
        "optional": false,
        "typeAnnotation": null,
        "start": 2156,
        "end": 2168
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2169,
              "end": 2170
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LetterMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2185,
                  "end": 2194
                },
                "typeArguments": null,
                "start": 2185,
                "end": 2194
              },
              "start": 2179,
              "end": 2194
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2169,
            "end": 2194
          }
        ],
        "start": 2168,
        "end": 2195
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 2201,
            "end": 2202
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2206,
              "end": 2207
            },
            "typeArguments": null,
            "start": 2206,
            "end": 2207
          },
          "nameType": null,
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
                  "name": "letter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2212,
                  "end": 2218
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
                      "start": 2220,
                      "end": 2226
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
                            "start": 2227,
                            "end": 2228
                          },
                          "typeArguments": null,
                          "start": 2227,
                          "end": 2228
                        },
                        {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "LetterMap",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2230,
                              "end": 2239
                            },
                            "typeArguments": null,
                            "start": 2230,
                            "end": 2239
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2240,
                              "end": 2241
                            },
                            "typeArguments": null,
                            "start": 2240,
                            "end": 2241
                          },
                          "start": 2230,
                          "end": 2242
                        }
                      ],
                      "start": 2226,
                      "end": 2243
                    },
                    "start": 2220,
                    "end": 2243
                  },
                  "start": 2218,
                  "end": 2243
                },
                "accessibility": null,
                "static": false,
                "start": 2212,
                "end": 2244
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "caller",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2245,
                  "end": 2251
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NoInfer",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2257,
                              "end": 2264
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Record",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2265,
                                    "end": 2271
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
                                          "start": 2272,
                                          "end": 2273
                                        },
                                        "typeArguments": null,
                                        "start": 2272,
                                        "end": 2273
                                      },
                                      {
                                        "type": "TSIndexedAccessType",
                                        "objectType": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "LetterMap",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2275,
                                            "end": 2284
                                          },
                                          "typeArguments": null,
                                          "start": 2275,
                                          "end": 2284
                                        },
                                        "indexType": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "P",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2285,
                                            "end": 2286
                                          },
                                          "typeArguments": null,
                                          "start": 2285,
                                          "end": 2286
                                        },
                                        "start": 2275,
                                        "end": 2287
                                      }
                                    ],
                                    "start": 2271,
                                    "end": 2288
                                  },
                                  "start": 2265,
                                  "end": 2288
                                }
                              ],
                              "start": 2264,
                              "end": 2289
                            },
                            "start": 2257,
                            "end": 2289
                          },
                          "start": 2255,
                          "end": 2289
                        },
                        "start": 2254,
                        "end": 2289
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2294,
                        "end": 2298
                      },
                      "start": 2291,
                      "end": 2298
                    },
                    "start": 2253,
                    "end": 2298
                  },
                  "start": 2251,
                  "end": 2298
                },
                "accessibility": null,
                "static": false,
                "start": 2245,
                "end": 2298
              }
            ],
            "start": 2210,
            "end": 2300
          },
          "optional": false,
          "readonly": null,
          "start": 2198,
          "end": 2302
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 2303,
            "end": 2304
          },
          "typeArguments": null,
          "start": 2303,
          "end": 2304
        },
        "start": 2198,
        "end": 2305
      },
      "declare": false,
      "start": 2151,
      "end": 2306
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "call",
        "optional": false,
        "typeAnnotation": null,
        "start": 2317,
        "end": 2321
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2322,
              "end": 2323
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LetterMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2338,
                  "end": 2347
                },
                "typeArguments": null,
                "start": 2338,
                "end": 2347
              },
              "start": 2332,
              "end": 2347
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2322,
            "end": 2347
          }
        ],
        "start": 2321,
        "end": 2348
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "letter",
                "optional": false,
                "typeAnnotation": null,
                "start": 2351,
                "end": 2357
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "letter",
                "optional": false,
                "typeAnnotation": null,
                "start": 2351,
                "end": 2357
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 2351,
              "end": 2357
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "caller",
                "optional": false,
                "typeAnnotation": null,
                "start": 2359,
                "end": 2365
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "caller",
                "optional": false,
                "typeAnnotation": null,
                "start": 2359,
                "end": 2365
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 2359,
              "end": 2365
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LetterCaller",
                "optional": false,
                "typeAnnotation": null,
                "start": 2369,
                "end": 2381
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2382,
                      "end": 2383
                    },
                    "typeArguments": null,
                    "start": 2382,
                    "end": 2383
                  }
                ],
                "start": 2381,
                "end": 2384
              },
              "start": 2369,
              "end": 2384
            },
            "start": 2367,
            "end": 2384
          },
          "start": 2349,
          "end": 2384
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2387,
          "end": 2391
        },
        "start": 2385,
        "end": 2391
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "caller",
                "optional": false,
                "typeAnnotation": null,
                "start": 2396,
                "end": 2402
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "letter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2403,
                  "end": 2409
                }
              ],
              "optional": false,
              "start": 2396,
              "end": 2410
            },
            "directive": null,
            "start": 2396,
            "end": 2411
          }
        ],
        "start": 2392,
        "end": 2413
      },
      "expression": false,
      "start": 2308,
      "end": 2413
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 2420,
        "end": 2421
      },
      "typeParameters": null,
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 2426,
              "end": 2427
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2429,
                "end": 2435
              },
              "start": 2427,
              "end": 2435
            },
            "accessibility": null,
            "static": false,
            "start": 2426,
            "end": 2435
          }
        ],
        "start": 2424,
        "end": 2437
      },
      "declare": false,
      "start": 2415,
      "end": 2438
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 2444,
        "end": 2445
      },
      "typeParameters": null,
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
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2450,
              "end": 2451
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2453,
                "end": 2459
              },
              "start": 2451,
              "end": 2459
            },
            "accessibility": null,
            "static": false,
            "start": 2450,
            "end": 2459
          }
        ],
        "start": 2448,
        "end": 2461
      },
      "declare": false,
      "start": 2439,
      "end": 2462
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ACaller",
        "optional": false,
        "typeAnnotation": null,
        "start": 2468,
        "end": 2475
      },
      "typeParameters": null,
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2482,
                  "end": 2483
                },
                "typeArguments": null,
                "start": 2482,
                "end": 2483
              },
              "start": 2480,
              "end": 2483
            },
            "start": 2479,
            "end": 2483
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 2488,
            "end": 2492
          },
          "start": 2485,
          "end": 2492
        },
        "start": 2478,
        "end": 2492
      },
      "declare": false,
      "start": 2463,
      "end": 2493
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BCaller",
        "optional": false,
        "typeAnnotation": null,
        "start": 2499,
        "end": 2506
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2513,
                  "end": 2514
                },
                "typeArguments": null,
                "start": 2513,
                "end": 2514
              },
              "start": 2511,
              "end": 2514
            },
            "start": 2510,
            "end": 2514
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 2519,
            "end": 2523
          },
          "start": 2516,
          "end": 2523
        },
        "start": 2509,
        "end": 2523
      },
      "declare": false,
      "start": 2494,
      "end": 2524
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                          "name": "letter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2546,
                          "end": 2552
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2554,
                              "end": 2555
                            },
                            "typeArguments": null,
                            "start": 2554,
                            "end": 2555
                          },
                          "start": 2552,
                          "end": 2555
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2546,
                        "end": 2556
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "caller",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2557,
                          "end": 2563
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ACaller",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2565,
                              "end": 2572
                            },
                            "typeArguments": null,
                            "start": 2565,
                            "end": 2572
                          },
                          "start": 2563,
                          "end": 2572
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2557,
                        "end": 2572
                      }
                    ],
                    "start": 2544,
                    "end": 2574
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
                          "name": "letter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2579,
                          "end": 2585
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2587,
                              "end": 2588
                            },
                            "typeArguments": null,
                            "start": 2587,
                            "end": 2588
                          },
                          "start": 2585,
                          "end": 2588
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2579,
                        "end": 2589
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "caller",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2590,
                          "end": 2596
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "BCaller",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2598,
                              "end": 2605
                            },
                            "typeArguments": null,
                            "start": 2598,
                            "end": 2605
                          },
                          "start": 2596,
                          "end": 2605
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2590,
                        "end": 2605
                      }
                    ],
                    "start": 2577,
                    "end": 2607
                  }
                ],
                "start": 2544,
                "end": 2607
              },
              "start": 2542,
              "end": 2607
            },
            "start": 2540,
            "end": 2607
          },
          "init": null,
          "definite": false,
          "start": 2540,
          "end": 2607
        }
      ],
      "declare": true,
      "start": 2526,
      "end": 2608
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 2610,
          "end": 2614
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": null,
            "start": 2615,
            "end": 2617
          }
        ],
        "optional": false,
        "start": 2610,
        "end": 2618
      },
      "directive": null,
      "start": 2610,
      "end": 2619
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ev",
        "optional": false,
        "typeAnnotation": null,
        "start": 2639,
        "end": 2641
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2642,
              "end": 2643
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DocumentEventMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2658,
                  "end": 2674
                },
                "typeArguments": null,
                "start": 2658,
                "end": 2674
              },
              "start": 2652,
              "end": 2674
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2642,
            "end": 2674
          }
        ],
        "start": 2641,
        "end": 2675
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 2681,
            "end": 2682
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2686,
              "end": 2687
            },
            "typeArguments": null,
            "start": 2686,
            "end": 2687
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2705,
                  "end": 2709
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2711,
                      "end": 2712
                    },
                    "typeArguments": null,
                    "start": 2711,
                    "end": 2712
                  },
                  "start": 2709,
                  "end": 2712
                },
                "accessibility": null,
                "static": false,
                "start": 2696,
                "end": 2713
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "once",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2727,
                  "end": 2731
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2734,
                    "end": 2741
                  },
                  "start": 2732,
                  "end": 2741
                },
                "accessibility": null,
                "static": false,
                "start": 2718,
                "end": 2742
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2756,
                  "end": 2764
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
                        "name": "ev",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DocumentEventMap",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2771,
                                "end": 2787
                              },
                              "typeArguments": null,
                              "start": 2771,
                              "end": 2787
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2788,
                                "end": 2789
                              },
                              "typeArguments": null,
                              "start": 2788,
                              "end": 2789
                            },
                            "start": 2771,
                            "end": 2790
                          },
                          "start": 2769,
                          "end": 2790
                        },
                        "start": 2767,
                        "end": 2790
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2795,
                        "end": 2799
                      },
                      "start": 2792,
                      "end": 2799
                    },
                    "start": 2766,
                    "end": 2799
                  },
                  "start": 2764,
                  "end": 2799
                },
                "accessibility": null,
                "static": false,
                "start": 2747,
                "end": 2800
              }
            ],
            "start": 2690,
            "end": 2802
          },
          "optional": false,
          "readonly": null,
          "start": 2678,
          "end": 2803
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 2804,
            "end": 2805
          },
          "typeArguments": null,
          "start": 2804,
          "end": 2805
        },
        "start": 2678,
        "end": 2806
      },
      "declare": false,
      "start": 2634,
      "end": 2807
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "processEvents",
        "optional": false,
        "typeAnnotation": null,
        "start": 2818,
        "end": 2831
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2832,
              "end": 2833
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DocumentEventMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2848,
                  "end": 2864
                },
                "typeArguments": null,
                "start": 2848,
                "end": 2864
              },
              "start": 2842,
              "end": 2864
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2832,
            "end": 2864
          }
        ],
        "start": 2831,
        "end": 2865
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "events",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ev",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2874,
                  "end": 2876
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2877,
                        "end": 2878
                      },
                      "typeArguments": null,
                      "start": 2877,
                      "end": 2878
                    }
                  ],
                  "start": 2876,
                  "end": 2879
                },
                "start": 2874,
                "end": 2879
              },
              "start": 2874,
              "end": 2881
            },
            "start": 2872,
            "end": 2881
          },
          "start": 2866,
          "end": 2881
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
                    "name": "event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2900,
                    "end": 2905
                  },
                  "init": null,
                  "definite": false,
                  "start": 2900,
                  "end": 2905
                }
              ],
              "declare": false,
              "start": 2894,
              "end": 2905
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "events",
              "optional": false,
              "typeAnnotation": null,
              "start": 2909,
              "end": 2915
            },
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
                        "name": "document",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2927,
                        "end": 2935
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "addEventListener",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2936,
                        "end": 2952
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2927,
                      "end": 2952
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "event",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2953,
                          "end": 2958
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2959,
                          "end": 2963
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2953,
                        "end": 2963
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2966,
                            "end": 2968
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "event",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2973,
                              "end": 2978
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2979,
                              "end": 2987
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2973,
                            "end": 2987
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ev",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2988,
                              "end": 2990
                            }
                          ],
                          "optional": false,
                          "start": 2973,
                          "end": 2991
                        },
                        "id": null,
                        "generator": false,
                        "start": 2965,
                        "end": 2991
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
                              "name": "once",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2995,
                              "end": 2999
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "event",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3001,
                                "end": 3006
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "once",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3007,
                                "end": 3011
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3001,
                              "end": 3011
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2995,
                            "end": 3011
                          }
                        ],
                        "start": 2993,
                        "end": 3013
                      }
                    ],
                    "optional": false,
                    "start": 2927,
                    "end": 3014
                  },
                  "directive": null,
                  "start": 2927,
                  "end": 3015
                }
              ],
              "start": 2917,
              "end": 3021
            },
            "start": 2889,
            "end": 3021
          }
        ],
        "start": 2883,
        "end": 3023
      },
      "expression": false,
      "start": 2809,
      "end": 3023
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createEventListener",
        "optional": false,
        "typeAnnotation": null,
        "start": 3034,
        "end": 3053
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3054,
              "end": 3055
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DocumentEventMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3070,
                  "end": 3086
                },
                "typeArguments": null,
                "start": 3070,
                "end": 3086
              },
              "start": 3064,
              "end": 3086
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3054,
            "end": 3086
          }
        ],
        "start": 3053,
        "end": 3087
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 3090,
                "end": 3094
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 3090,
                "end": 3094
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3090,
              "end": 3094
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "once",
                "optional": false,
                "typeAnnotation": null,
                "start": 3096,
                "end": 3100
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "once",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3096,
                  "end": 3100
                },
                "right": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 3103,
                  "end": 3108
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 3096,
                "end": 3108
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3096,
              "end": 3108
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 3110,
                "end": 3118
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 3110,
                "end": 3118
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3110,
              "end": 3118
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ev",
                "optional": false,
                "typeAnnotation": null,
                "start": 3122,
                "end": 3124
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3125,
                      "end": 3126
                    },
                    "typeArguments": null,
                    "start": 3125,
                    "end": 3126
                  }
                ],
                "start": 3124,
                "end": 3127
              },
              "start": 3122,
              "end": 3127
            },
            "start": 3120,
            "end": 3127
          },
          "start": 3088,
          "end": 3127
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Ev",
            "optional": false,
            "typeAnnotation": null,
            "start": 3130,
            "end": 3132
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3133,
                  "end": 3134
                },
                "typeArguments": null,
                "start": 3133,
                "end": 3134
              }
            ],
            "start": 3132,
            "end": 3135
          },
          "start": 3130,
          "end": 3135
        },
        "start": 3128,
        "end": 3135
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                    "start": 3151,
                    "end": 3155
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3151,
                    "end": 3155
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3151,
                  "end": 3155
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "once",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3157,
                    "end": 3161
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "once",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3157,
                    "end": 3161
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3157,
                  "end": 3161
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3163,
                    "end": 3171
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3163,
                    "end": 3171
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3163,
                  "end": 3171
                }
              ],
              "start": 3149,
              "end": 3173
            },
            "start": 3142,
            "end": 3174
          }
        ],
        "start": 3136,
        "end": 3176
      },
      "expression": false,
      "start": 3025,
      "end": 3176
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
            "name": "clickEvent",
            "optional": false,
            "typeAnnotation": null,
            "start": 3184,
            "end": 3194
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createEventListener",
              "optional": false,
              "typeAnnotation": null,
              "start": 3197,
              "end": 3216
            },
            "typeArguments": null,
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3223,
                      "end": 3227
                    },
                    "value": {
                      "type": "Literal",
                      "value": "click",
                      "raw": "\"click\"",
                      "start": 3229,
                      "end": 3236
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3223,
                    "end": 3236
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3242,
                      "end": 3250
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
                          "name": "ev",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3252,
                          "end": 3254
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3258,
                            "end": 3265
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3266,
                            "end": 3269
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3258,
                          "end": 3269
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3270,
                            "end": 3272
                          }
                        ],
                        "optional": false,
                        "start": 3258,
                        "end": 3273
                      },
                      "id": null,
                      "generator": false,
                      "start": 3252,
                      "end": 3273
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3242,
                    "end": 3273
                  }
                ],
                "start": 3217,
                "end": 3276
              }
            ],
            "optional": false,
            "start": 3197,
            "end": 3277
          },
          "definite": false,
          "start": 3184,
          "end": 3277
        }
      ],
      "declare": false,
      "start": 3178,
      "end": 3278
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
            "name": "scrollEvent",
            "optional": false,
            "typeAnnotation": null,
            "start": 3286,
            "end": 3297
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createEventListener",
              "optional": false,
              "typeAnnotation": null,
              "start": 3300,
              "end": 3319
            },
            "typeArguments": null,
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3326,
                      "end": 3330
                    },
                    "value": {
                      "type": "Literal",
                      "value": "scroll",
                      "raw": "\"scroll\"",
                      "start": 3332,
                      "end": 3340
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3326,
                    "end": 3340
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3346,
                      "end": 3354
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
                          "name": "ev",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3356,
                          "end": 3358
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3362,
                            "end": 3369
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3370,
                            "end": 3373
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3362,
                          "end": 3373
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3374,
                            "end": 3376
                          }
                        ],
                        "optional": false,
                        "start": 3362,
                        "end": 3377
                      },
                      "id": null,
                      "generator": false,
                      "start": 3356,
                      "end": 3377
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3346,
                    "end": 3377
                  }
                ],
                "start": 3320,
                "end": 3380
              }
            ],
            "optional": false,
            "start": 3300,
            "end": 3381
          },
          "definite": false,
          "start": 3286,
          "end": 3381
        }
      ],
      "declare": false,
      "start": 3280,
      "end": 3382
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "processEvents",
          "optional": false,
          "typeAnnotation": null,
          "start": 3384,
          "end": 3397
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "clickEvent",
                "optional": false,
                "typeAnnotation": null,
                "start": 3399,
                "end": 3409
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "scrollEvent",
                "optional": false,
                "typeAnnotation": null,
                "start": 3411,
                "end": 3422
              }
            ],
            "start": 3398,
            "end": 3423
          }
        ],
        "optional": false,
        "start": 3384,
        "end": 3424
      },
      "directive": null,
      "start": 3384,
      "end": 3425
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "processEvents",
          "optional": false,
          "typeAnnotation": null,
          "start": 3427,
          "end": 3440
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
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
                      "start": 3449,
                      "end": 3453
                    },
                    "value": {
                      "type": "Literal",
                      "value": "click",
                      "raw": "\"click\"",
                      "start": 3455,
                      "end": 3462
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3449,
                    "end": 3462
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3464,
                      "end": 3472
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
                          "name": "ev",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3474,
                          "end": 3476
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3480,
                            "end": 3487
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3488,
                            "end": 3491
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3480,
                          "end": 3491
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3492,
                            "end": 3494
                          }
                        ],
                        "optional": false,
                        "start": 3480,
                        "end": 3495
                      },
                      "id": null,
                      "generator": false,
                      "start": 3474,
                      "end": 3495
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3464,
                    "end": 3495
                  }
                ],
                "start": 3447,
                "end": 3497
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
                      "start": 3505,
                      "end": 3509
                    },
                    "value": {
                      "type": "Literal",
                      "value": "scroll",
                      "raw": "\"scroll\"",
                      "start": 3511,
                      "end": 3519
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3505,
                    "end": 3519
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3521,
                      "end": 3529
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
                          "name": "ev",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3531,
                          "end": 3533
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3537,
                            "end": 3544
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3545,
                            "end": 3548
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3537,
                          "end": 3548
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3549,
                            "end": 3551
                          }
                        ],
                        "optional": false,
                        "start": 3537,
                        "end": 3552
                      },
                      "id": null,
                      "generator": false,
                      "start": 3531,
                      "end": 3552
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3521,
                    "end": 3552
                  }
                ],
                "start": 3503,
                "end": 3554
              }
            ],
            "start": 3441,
            "end": 3557
          }
        ],
        "optional": false,
        "start": 3427,
        "end": 3558
      },
      "directive": null,
      "start": 3427,
      "end": 3559
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3583,
        "end": 3586
      },
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
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArgMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 3600,
              "end": 3606
            },
            "typeParameters": null,
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
                    "name": "sum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3619,
                    "end": 3622
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3625,
                            "end": 3626
                          },
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 3628,
                            "end": 3634
                          },
                          "optional": false,
                          "start": 3625,
                          "end": 3634
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3636,
                            "end": 3637
                          },
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 3639,
                            "end": 3645
                          },
                          "optional": false,
                          "start": 3636,
                          "end": 3645
                        }
                      ],
                      "start": 3624,
                      "end": 3646
                    },
                    "start": 3622,
                    "end": 3646
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3619,
                  "end": 3647
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "concat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3656,
                    "end": 3662
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3665,
                            "end": 3666
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 3668,
                            "end": 3674
                          },
                          "optional": false,
                          "start": 3665,
                          "end": 3674
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3676,
                            "end": 3677
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 3679,
                            "end": 3685
                          },
                          "optional": false,
                          "start": 3676,
                          "end": 3685
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3687,
                            "end": 3688
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 3690,
                            "end": 3696
                          },
                          "optional": false,
                          "start": 3687,
                          "end": 3696
                        }
                      ],
                      "start": 3664,
                      "end": 3697
                    },
                    "start": 3662,
                    "end": 3697
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3656,
                  "end": 3697
                }
              ],
              "start": 3609,
              "end": 3703
            },
            "declare": false,
            "start": 3595,
            "end": 3703
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 3713,
              "end": 3717
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3726,
                  "end": 3732
                },
                "typeArguments": null,
                "start": 3726,
                "end": 3732
              },
              "start": 3720,
              "end": 3732
            },
            "declare": false,
            "start": 3708,
            "end": 3733
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
                  "name": "funs",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3753,
                        "end": 3754
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Keys",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3758,
                          "end": 3762
                        },
                        "typeArguments": null,
                        "start": 3758,
                        "end": 3762
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3769,
                              "end": 3773
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ArgMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3775,
                                    "end": 3781
                                  },
                                  "typeArguments": null,
                                  "start": 3775,
                                  "end": 3781
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3782,
                                    "end": 3783
                                  },
                                  "typeArguments": null,
                                  "start": 3782,
                                  "end": 3783
                                },
                                "start": 3775,
                                "end": 3784
                              },
                              "start": 3773,
                              "end": 3784
                            },
                            "value": null,
                            "start": 3766,
                            "end": 3784
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 3789,
                            "end": 3793
                          },
                          "start": 3786,
                          "end": 3793
                        },
                        "start": 3765,
                        "end": 3793
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 3750,
                      "end": 3795
                    },
                    "start": 3748,
                    "end": 3795
                  },
                  "start": 3744,
                  "end": 3795
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3808,
                        "end": 3811
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3814,
                            "end": 3815
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3817,
                            "end": 3818
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3823,
                            "end": 3824
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3827,
                            "end": 3828
                          },
                          "start": 3823,
                          "end": 3828
                        },
                        "id": null,
                        "generator": false,
                        "start": 3813,
                        "end": 3828
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3808,
                      "end": 3828
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "concat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3838,
                        "end": 3844
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3847,
                            "end": 3848
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3850,
                            "end": 3851
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3853,
                            "end": 3854
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3859,
                              "end": 3860
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3863,
                              "end": 3864
                            },
                            "start": 3859,
                            "end": 3864
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3867,
                            "end": 3868
                          },
                          "start": 3859,
                          "end": 3868
                        },
                        "id": null,
                        "generator": false,
                        "start": 3846,
                        "end": 3868
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3838,
                      "end": 3868
                    }
                  ],
                  "start": 3798,
                  "end": 3874
                },
                "definite": false,
                "start": 3744,
                "end": 3874
              }
            ],
            "declare": false,
            "start": 3738,
            "end": 3874
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 3888,
              "end": 3893
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
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3894,
                    "end": 3895
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Keys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3904,
                      "end": 3908
                    },
                    "typeArguments": null,
                    "start": 3904,
                    "end": 3908
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3894,
                  "end": 3908
                }
              ],
              "start": 3893,
              "end": 3909
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "funKey",
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
                      "start": 3918,
                      "end": 3919
                    },
                    "typeArguments": null,
                    "start": 3918,
                    "end": 3919
                  },
                  "start": 3916,
                  "end": 3919
                },
                "start": 3910,
                "end": 3919
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3924,
                  "end": 3928
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArgMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3930,
                        "end": 3936
                      },
                      "typeArguments": null,
                      "start": 3930,
                      "end": 3936
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3937,
                        "end": 3938
                      },
                      "typeArguments": null,
                      "start": 3937,
                      "end": 3938
                    },
                    "start": 3930,
                    "end": 3939
                  },
                  "start": 3928,
                  "end": 3939
                },
                "value": null,
                "start": 3921,
                "end": 3939
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3957,
                        "end": 3959
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "funs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3962,
                          "end": 3966
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "funKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3967,
                          "end": 3973
                        },
                        "optional": false,
                        "computed": true,
                        "start": 3962,
                        "end": 3974
                      },
                      "definite": false,
                      "start": 3957,
                      "end": 3974
                    }
                  ],
                  "declare": false,
                  "start": 3951,
                  "end": 3975
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3984,
                      "end": 3986
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3990,
                          "end": 3994
                        },
                        "start": 3987,
                        "end": 3994
                      }
                    ],
                    "optional": false,
                    "start": 3984,
                    "end": 3995
                  },
                  "directive": null,
                  "start": 3984,
                  "end": 3996
                }
              ],
              "start": 3941,
              "end": 4002
            },
            "expression": false,
            "start": 3879,
            "end": 4002
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4013,
                  "end": 4015
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "apply",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4018,
                    "end": 4023
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "sum",
                      "raw": "'sum'",
                      "start": 4024,
                      "end": 4029
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4031,
                      "end": 4032
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 4034,
                      "end": 4035
                    }
                  ],
                  "optional": false,
                  "start": 4018,
                  "end": 4036
                },
                "definite": false,
                "start": 4013,
                "end": 4036
              }
            ],
            "declare": false,
            "start": 4007,
            "end": 4036
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4047,
                  "end": 4049
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "apply",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4052,
                    "end": 4057
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "concat",
                      "raw": "'concat'",
                      "start": 4058,
                      "end": 4066
                    },
                    {
                      "type": "Literal",
                      "value": "str1",
                      "raw": "'str1'",
                      "start": 4068,
                      "end": 4074
                    },
                    {
                      "type": "Literal",
                      "value": "str2",
                      "raw": "'str2'",
                      "start": 4076,
                      "end": 4082
                    },
                    {
                      "type": "Literal",
                      "value": "str3",
                      "raw": "'str3'",
                      "start": 4084,
                      "end": 4090
                    }
                  ],
                  "optional": false,
                  "start": 4052,
                  "end": 4092
                },
                "definite": false,
                "start": 4047,
                "end": 4092
              }
            ],
            "declare": false,
            "start": 4041,
            "end": 4092
          }
        ],
        "start": 3589,
        "end": 4094
      },
      "expression": false,
      "start": 3574,
      "end": 4094
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArgMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 4123,
        "end": 4129
      },
      "typeParameters": null,
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
              "start": 4134,
              "end": 4135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4137,
                "end": 4143
              },
              "start": 4135,
              "end": 4143
            },
            "accessibility": null,
            "static": false,
            "start": 4134,
            "end": 4144
          },
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
              "start": 4145,
              "end": 4146
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4148,
                "end": 4154
              },
              "start": 4146,
              "end": 4154
            },
            "accessibility": null,
            "static": false,
            "start": 4145,
            "end": 4154
          }
        ],
        "start": 4132,
        "end": 4156
      },
      "declare": false,
      "start": 4118,
      "end": 4157
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null,
        "start": 4163,
        "end": 4167
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4168,
              "end": 4169
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4184,
                  "end": 4190
                },
                "typeArguments": null,
                "start": 4184,
                "end": 4190
              },
              "start": 4178,
              "end": 4190
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4168,
            "end": 4190
          }
        ],
        "start": 4167,
        "end": 4191
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ArgMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4198,
                    "end": 4204
                  },
                  "typeArguments": null,
                  "start": 4198,
                  "end": 4204
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4205,
                    "end": 4206
                  },
                  "typeArguments": null,
                  "start": 4205,
                  "end": 4206
                },
                "start": 4198,
                "end": 4207
              },
              "start": 4196,
              "end": 4207
            },
            "start": 4195,
            "end": 4207
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 4212,
            "end": 4216
          },
          "start": 4209,
          "end": 4216
        },
        "start": 4194,
        "end": 4216
      },
      "declare": false,
      "start": 4158,
      "end": 4217
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Funcs",
        "optional": false,
        "typeAnnotation": null,
        "start": 4223,
        "end": 4228
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
          "start": 4234,
          "end": 4235
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArgMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 4245,
              "end": 4251
            },
            "typeArguments": null,
            "start": 4245,
            "end": 4251
          },
          "start": 4239,
          "end": 4251
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Func",
            "optional": false,
            "typeAnnotation": null,
            "start": 4254,
            "end": 4258
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4259,
                  "end": 4260
                },
                "typeArguments": null,
                "start": 4259,
                "end": 4260
              }
            ],
            "start": 4258,
            "end": 4261
          },
          "start": 4254,
          "end": 4261
        },
        "optional": false,
        "readonly": null,
        "start": 4231,
        "end": 4263
      },
      "declare": false,
      "start": 4218,
      "end": 4264
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4275,
        "end": 4277
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4278,
              "end": 4279
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4294,
                  "end": 4300
                },
                "typeArguments": null,
                "start": 4294,
                "end": 4300
              },
              "start": 4288,
              "end": 4300
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4278,
            "end": 4300
          }
        ],
        "start": 4277,
        "end": 4301
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "funcs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Funcs",
                "optional": false,
                "typeAnnotation": null,
                "start": 4309,
                "end": 4314
              },
              "typeArguments": null,
              "start": 4309,
              "end": 4314
            },
            "start": 4307,
            "end": 4314
          },
          "start": 4302,
          "end": 4314
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
                "start": 4321,
                "end": 4322
              },
              "typeArguments": null,
              "start": 4321,
              "end": 4322
            },
            "start": 4319,
            "end": 4322
          },
          "start": 4316,
          "end": 4322
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4329,
                  "end": 4335
                },
                "typeArguments": null,
                "start": 4329,
                "end": 4335
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4336,
                  "end": 4337
                },
                "typeArguments": null,
                "start": 4336,
                "end": 4337
              },
              "start": 4329,
              "end": 4338
            },
            "start": 4327,
            "end": 4338
          },
          "start": 4324,
          "end": 4338
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
                  "name": "funcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4346,
                  "end": 4351
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4352,
                  "end": 4355
                },
                "optional": false,
                "computed": true,
                "start": 4346,
                "end": 4356
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4357,
                  "end": 4360
                }
              ],
              "optional": false,
              "start": 4346,
              "end": 4361
            },
            "directive": null,
            "start": 4346,
            "end": 4362
          }
        ],
        "start": 4340,
        "end": 4364
      },
      "expression": false,
      "start": 4266,
      "end": 4364
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4375,
        "end": 4377
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4378,
              "end": 4379
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4394,
                  "end": 4400
                },
                "typeArguments": null,
                "start": 4394,
                "end": 4400
              },
              "start": 4388,
              "end": 4400
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4378,
            "end": 4400
          }
        ],
        "start": 4377,
        "end": 4401
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "funcs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Funcs",
                "optional": false,
                "typeAnnotation": null,
                "start": 4409,
                "end": 4414
              },
              "typeArguments": null,
              "start": 4409,
              "end": 4414
            },
            "start": 4407,
            "end": 4414
          },
          "start": 4402,
          "end": 4414
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
                "start": 4421,
                "end": 4422
              },
              "typeArguments": null,
              "start": 4421,
              "end": 4422
            },
            "start": 4419,
            "end": 4422
          },
          "start": 4416,
          "end": 4422
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4429,
                  "end": 4435
                },
                "typeArguments": null,
                "start": 4429,
                "end": 4435
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4436,
                  "end": 4437
                },
                "typeArguments": null,
                "start": 4436,
                "end": 4437
              },
              "start": 4429,
              "end": 4438
            },
            "start": 4427,
            "end": 4438
          },
          "start": 4424,
          "end": 4438
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4452,
                  "end": 4456
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "funcs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4459,
                    "end": 4464
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4465,
                    "end": 4468
                  },
                  "optional": false,
                  "computed": true,
                  "start": 4459,
                  "end": 4469
                },
                "definite": false,
                "start": 4452,
                "end": 4469
              }
            ],
            "declare": false,
            "start": 4446,
            "end": 4470
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 4493,
                "end": 4497
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4498,
                  "end": 4501
                }
              ],
              "optional": false,
              "start": 4493,
              "end": 4502
            },
            "directive": null,
            "start": 4493,
            "end": 4503
          }
        ],
        "start": 4440,
        "end": 4505
      },
      "expression": false,
      "start": 4366,
      "end": 4505
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4516,
        "end": 4518
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4519,
              "end": 4520
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4535,
                  "end": 4541
                },
                "typeArguments": null,
                "start": 4535,
                "end": 4541
              },
              "start": 4529,
              "end": 4541
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4519,
            "end": 4541
          }
        ],
        "start": 4518,
        "end": 4542
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "funcs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Funcs",
                "optional": false,
                "typeAnnotation": null,
                "start": 4550,
                "end": 4555
              },
              "typeArguments": null,
              "start": 4550,
              "end": 4555
            },
            "start": 4548,
            "end": 4555
          },
          "start": 4543,
          "end": 4555
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
                "start": 4562,
                "end": 4563
              },
              "typeArguments": null,
              "start": 4562,
              "end": 4563
            },
            "start": 4560,
            "end": 4563
          },
          "start": 4557,
          "end": 4563
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4570,
                  "end": 4576
                },
                "typeArguments": null,
                "start": 4570,
                "end": 4576
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4577,
                  "end": 4578
                },
                "typeArguments": null,
                "start": 4577,
                "end": 4578
              },
              "start": 4570,
              "end": 4579
            },
            "start": 4568,
            "end": 4579
          },
          "start": 4565,
          "end": 4579
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Func",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4599,
                        "end": 4603
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4604,
                              "end": 4605
                            },
                            "typeArguments": null,
                            "start": 4604,
                            "end": 4605
                          }
                        ],
                        "start": 4603,
                        "end": 4606
                      },
                      "start": 4599,
                      "end": 4606
                    },
                    "start": 4597,
                    "end": 4606
                  },
                  "start": 4593,
                  "end": 4606
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "funcs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4609,
                    "end": 4614
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4615,
                    "end": 4618
                  },
                  "optional": false,
                  "computed": true,
                  "start": 4609,
                  "end": 4619
                },
                "definite": false,
                "start": 4593,
                "end": 4619
              }
            ],
            "declare": false,
            "start": 4587,
            "end": 4620
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 4625,
                "end": 4629
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4630,
                  "end": 4633
                }
              ],
              "optional": false,
              "start": 4625,
              "end": 4634
            },
            "directive": null,
            "start": 4625,
            "end": 4635
          }
        ],
        "start": 4581,
        "end": 4637
      },
      "expression": false,
      "start": 4507,
      "end": 4637
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 4648,
        "end": 4650
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4651,
              "end": 4652
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4667,
                  "end": 4673
                },
                "typeArguments": null,
                "start": 4667,
                "end": 4673
              },
              "start": 4661,
              "end": 4673
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4651,
            "end": 4673
          }
        ],
        "start": 4650,
        "end": 4674
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
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Funcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4678,
                  "end": 4683
                },
                "typeArguments": null,
                "start": 4678,
                "end": 4683
              },
              "indexType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ArgMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4690,
                    "end": 4696
                  },
                  "typeArguments": null,
                  "start": 4690,
                  "end": 4696
                },
                "start": 4684,
                "end": 4696
              },
              "start": 4678,
              "end": 4697
            },
            "start": 4676,
            "end": 4697
          },
          "start": 4675,
          "end": 4697
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Funcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4702,
                  "end": 4707
                },
                "typeArguments": null,
                "start": 4702,
                "end": 4707
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4708,
                  "end": 4709
                },
                "typeArguments": null,
                "start": 4708,
                "end": 4709
              },
              "start": 4702,
              "end": 4710
            },
            "start": 4700,
            "end": 4710
          },
          "start": 4699,
          "end": 4710
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 4718,
                "end": 4719
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 4722,
                "end": 4723
              },
              "start": 4718,
              "end": 4723
            },
            "directive": null,
            "start": 4718,
            "end": 4724
          }
        ],
        "start": 4712,
        "end": 4726
      },
      "expression": false,
      "start": 4639,
      "end": 4726
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 4760,
        "end": 4765
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
              "name": "someKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 4772,
              "end": 4779
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4789,
                      "end": 4793
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4795,
                        "end": 4801
                      },
                      "start": 4793,
                      "end": 4801
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4789,
                    "end": 4802
                  }
                ],
                "start": 4781,
                "end": 4808
              },
              "start": 4779,
              "end": 4808
            },
            "accessibility": null,
            "static": false,
            "start": 4772,
            "end": 4808
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "someOtherKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 4813,
              "end": 4825
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4835,
                      "end": 4839
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4841,
                        "end": 4847
                      },
                      "start": 4839,
                      "end": 4847
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4835,
                    "end": 4848
                  }
                ],
                "start": 4827,
                "end": 4854
              },
              "start": 4825,
              "end": 4854
            },
            "accessibility": null,
            "static": false,
            "start": 4813,
            "end": 4854
          }
        ],
        "start": 4766,
        "end": 4856
      },
      "declare": false,
      "start": 4750,
      "end": 4856
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
            "name": "ref",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyObj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4869,
                  "end": 4874
                },
                "typeArguments": null,
                "start": 4869,
                "end": 4874
              },
              "start": 4867,
              "end": 4874
            },
            "start": 4864,
            "end": 4874
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4883,
                  "end": 4890
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4894,
                        "end": 4898
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 4900,
                        "end": 4902
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4894,
                      "end": 4902
                    }
                  ],
                  "start": 4892,
                  "end": 4904
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4883,
                "end": 4904
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someOtherKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4910,
                  "end": 4922
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4926,
                        "end": 4930
                      },
                      "value": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 4932,
                        "end": 4934
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4926,
                      "end": 4934
                    }
                  ],
                  "start": 4924,
                  "end": 4936
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4910,
                "end": 4936
              }
            ],
            "start": 4877,
            "end": 4938
          },
          "definite": false,
          "start": 4864,
          "end": 4938
        }
      ],
      "declare": false,
      "start": 4858,
      "end": 4939
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 4950,
        "end": 4954
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4955,
              "end": 4956
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyObj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4971,
                  "end": 4976
                },
                "typeArguments": null,
                "start": 4971,
                "end": 4976
              },
              "start": 4965,
              "end": 4976
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4955,
            "end": 4976
          }
        ],
        "start": 4954,
        "end": 4977
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
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
                "start": 4981,
                "end": 4982
              },
              "typeArguments": null,
              "start": 4981,
              "end": 4982
            },
            "start": 4979,
            "end": 4982
          },
          "start": 4978,
          "end": 4982
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4985,
                    "end": 4990
                  },
                  "typeArguments": null,
                  "start": 4985,
                  "end": 4990
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4991,
                    "end": 4992
                  },
                  "typeArguments": null,
                  "start": 4991,
                  "end": 4992
                },
                "start": 4985,
                "end": 4993
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "name",
                  "raw": "'name'",
                  "start": 4994,
                  "end": 5000
                },
                "start": 4994,
                "end": 5000
              },
              "start": 4985,
              "end": 5001
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 5004,
              "end": 5013
            }
          ],
          "start": 4985,
          "end": 5013
        },
        "start": 4983,
        "end": 5013
      },
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "myObj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5033,
                          "end": 5040
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyObj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5041,
                                "end": 5046
                              },
                              "typeArguments": null,
                              "start": 5041,
                              "end": 5046
                            }
                          ],
                          "start": 5040,
                          "end": 5047
                        },
                        "start": 5033,
                        "end": 5047
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5048,
                          "end": 5049
                        },
                        "typeArguments": null,
                        "start": 5048,
                        "end": 5049
                      },
                      "start": 5033,
                      "end": 5050
                    },
                    "start": 5031,
                    "end": 5050
                  },
                  "start": 5026,
                  "end": 5050
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ref",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5053,
                    "end": 5056
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5057,
                    "end": 5058
                  },
                  "optional": false,
                  "computed": true,
                  "start": 5053,
                  "end": 5059
                },
                "definite": false,
                "start": 5026,
                "end": 5059
              }
            ],
            "declare": false,
            "start": 5020,
            "end": 5060
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "myObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 5069,
              "end": 5074
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myObj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5091,
                      "end": 5096
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5097,
                      "end": 5101
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5091,
                    "end": 5101
                  },
                  "start": 5084,
                  "end": 5102
                }
              ],
              "start": 5076,
              "end": 5108
            },
            "alternate": null,
            "start": 5065,
            "end": 5108
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
                  "name": "myObj2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5127,
                          "end": 5134
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyObj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5135,
                                "end": 5140
                              },
                              "typeArguments": null,
                              "start": 5135,
                              "end": 5140
                            }
                          ],
                          "start": 5134,
                          "end": 5141
                        },
                        "start": 5127,
                        "end": 5141
                      },
                      "indexType": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyObj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5148,
                            "end": 5153
                          },
                          "typeArguments": null,
                          "start": 5148,
                          "end": 5153
                        },
                        "start": 5142,
                        "end": 5153
                      },
                      "start": 5127,
                      "end": 5154
                    },
                    "start": 5125,
                    "end": 5154
                  },
                  "start": 5119,
                  "end": 5154
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ref",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5157,
                    "end": 5160
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5161,
                    "end": 5162
                  },
                  "optional": false,
                  "computed": true,
                  "start": 5157,
                  "end": 5163
                },
                "definite": false,
                "start": 5119,
                "end": 5163
              }
            ],
            "declare": false,
            "start": 5113,
            "end": 5164
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "myObj2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5173,
              "end": 5179
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myObj2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5196,
                      "end": 5202
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5203,
                      "end": 5207
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5196,
                    "end": 5207
                  },
                  "start": 5189,
                  "end": 5208
                }
              ],
              "start": 5181,
              "end": 5214
            },
            "alternate": null,
            "start": 5169,
            "end": 5214
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 5226,
              "end": 5235
            },
            "start": 5219,
            "end": 5236
          }
        ],
        "start": 5014,
        "end": 5238
      },
      "expression": false,
      "start": 4941,
      "end": 5238
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5272,
        "end": 5275
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 5282,
              "end": 5285
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5288,
                "end": 5294
              },
              "start": 5286,
              "end": 5294
            },
            "accessibility": null,
            "static": false,
            "start": 5282,
            "end": 5294
          }
        ],
        "start": 5276,
        "end": 5296
      },
      "declare": false,
      "start": 5262,
      "end": 5296
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5307,
        "end": 5310
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
              "start": 5311,
              "end": 5312
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5327,
                  "end": 5330
                },
                "typeArguments": null,
                "start": 5327,
                "end": 5330
              },
              "start": 5321,
              "end": 5330
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5311,
            "end": 5330
          }
        ],
        "start": 5310,
        "end": 5331
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
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
                "start": 5338,
                "end": 5339
              },
              "typeArguments": null,
              "start": 5338,
              "end": 5339
            },
            "start": 5336,
            "end": 5339
          },
          "start": 5332,
          "end": 5339
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Required",
                "optional": false,
                "typeAnnotation": null,
                "start": 5344,
                "end": 5352
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
                      "start": 5353,
                      "end": 5356
                    },
                    "typeArguments": null,
                    "start": 5353,
                    "end": 5356
                  }
                ],
                "start": 5352,
                "end": 5357
              },
              "start": 5344,
              "end": 5357
            },
            "start": 5342,
            "end": 5357
          },
          "start": 5341,
          "end": 5357
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
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 5365,
                "end": 5368
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5369,
                    "end": 5370
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5371,
                    "end": 5375
                  },
                  "optional": false,
                  "computed": true,
                  "start": 5369,
                  "end": 5376
                }
              ],
              "optional": false,
              "start": 5365,
              "end": 5377
            },
            "directive": null,
            "start": 5365,
            "end": 5378
          }
        ],
        "start": 5359,
        "end": 5380
      },
      "expression": false,
      "start": 5298,
      "end": 5380
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 5399,
        "end": 5402
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 5406,
              "end": 5412
            },
            "start": 5404,
            "end": 5412
          },
          "start": 5403,
          "end": 5412
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5415,
          "end": 5419
        },
        "start": 5413,
        "end": 5419
      },
      "body": null,
      "expression": false,
      "start": 5382,
      "end": 5420
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeCompleteLookupMapping",
        "optional": false,
        "typeAnnotation": null,
        "start": 5461,
        "end": 5486
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
              "start": 5487,
              "end": 5488
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 5497,
                "end": 5510
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 5511,
                    "end": 5514
                  }
                ],
                "start": 5510,
                "end": 5515
              },
              "start": 5497,
              "end": 5515
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5487,
            "end": 5515
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Attr",
              "optional": false,
              "typeAnnotation": null,
              "start": 5517,
              "end": 5521
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5536,
                    "end": 5537
                  },
                  "typeArguments": null,
                  "start": 5536,
                  "end": 5537
                },
                "indexType": {
                  "type": "TSNumberKeyword",
                  "start": 5538,
                  "end": 5544
                },
                "start": 5536,
                "end": 5545
              },
              "start": 5530,
              "end": 5545
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5517,
            "end": 5545
          }
        ],
        "start": 5486,
        "end": 5546
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ops",
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
                "start": 5557,
                "end": 5558
              },
              "typeArguments": null,
              "start": 5557,
              "end": 5558
            },
            "start": 5555,
            "end": 5558
          },
          "start": 5552,
          "end": 5558
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attr",
                "optional": false,
                "typeAnnotation": null,
                "start": 5566,
                "end": 5570
              },
              "typeArguments": null,
              "start": 5566,
              "end": 5570
            },
            "start": 5564,
            "end": 5570
          },
          "start": 5560,
          "end": 5570
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "Item",
            "optional": false,
            "typeAnnotation": null,
            "start": 5576,
            "end": 5580
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5584,
                "end": 5585
              },
              "typeArguments": null,
              "start": 5584,
              "end": 5585
            },
            "indexType": {
              "type": "TSNumberKeyword",
              "start": 5586,
              "end": 5592
            },
            "start": 5584,
            "end": 5593
          },
          "nameType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 5596,
                "end": 5600
              },
              "typeArguments": null,
              "start": 5596,
              "end": 5600
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attr",
                "optional": false,
                "typeAnnotation": null,
                "start": 5601,
                "end": 5605
              },
              "typeArguments": null,
              "start": 5601,
              "end": 5605
            },
            "start": 5596,
            "end": 5606
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 5609,
              "end": 5613
            },
            "typeArguments": null,
            "start": 5609,
            "end": 5613
          },
          "optional": false,
          "readonly": null,
          "start": 5573,
          "end": 5615
        },
        "start": 5571,
        "end": 5615
      },
      "body": null,
      "expression": false,
      "start": 5444,
      "end": 5616
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
            "name": "ALL_BARS",
            "optional": false,
            "typeAnnotation": null,
            "start": 5624,
            "end": 5632
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
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
                        "start": 5638,
                        "end": 5642
                      },
                      "value": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 5644,
                        "end": 5647
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 5638,
                      "end": 5647
                    }
                  ],
                  "start": 5636,
                  "end": 5648
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
                        "start": 5651,
                        "end": 5655
                      },
                      "value": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 5657,
                        "end": 5660
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 5651,
                      "end": 5660
                    }
                  ],
                  "start": 5650,
                  "end": 5661
                }
              ],
              "start": 5635,
              "end": 5662
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 5666,
                "end": 5671
              },
              "typeArguments": null,
              "start": 5666,
              "end": 5671
            },
            "start": 5635,
            "end": 5671
          },
          "definite": false,
          "start": 5624,
          "end": 5671
        }
      ],
      "declare": false,
      "start": 5618,
      "end": 5672
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
            "name": "BAR_LOOKUP",
            "optional": false,
            "typeAnnotation": null,
            "start": 5680,
            "end": 5690
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeCompleteLookupMapping",
              "optional": false,
              "typeAnnotation": null,
              "start": 5693,
              "end": 5718
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ALL_BARS",
                "optional": false,
                "typeAnnotation": null,
                "start": 5719,
                "end": 5727
              },
              {
                "type": "Literal",
                "value": "name",
                "raw": "'name'",
                "start": 5729,
                "end": 5735
              }
            ],
            "optional": false,
            "start": 5693,
            "end": 5736
          },
          "definite": false,
          "start": 5680,
          "end": 5736
        }
      ],
      "declare": false,
      "start": 5674,
      "end": 5737
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BarLookup",
        "optional": false,
        "typeAnnotation": null,
        "start": 5744,
        "end": 5753
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BAR_LOOKUP",
          "optional": false,
          "typeAnnotation": null,
          "start": 5763,
          "end": 5773
        },
        "typeArguments": null,
        "start": 5756,
        "end": 5773
      },
      "declare": false,
      "start": 5739,
      "end": 5774
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 5781,
        "end": 5784
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
          "start": 5790,
          "end": 5791
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BarLookup",
              "optional": false,
              "typeAnnotation": null,
              "start": 5801,
              "end": 5810
            },
            "typeArguments": null,
            "start": 5801,
            "end": 5810
          },
          "start": 5795,
          "end": 5810
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BarLookup",
                "optional": false,
                "typeAnnotation": null,
                "start": 5813,
                "end": 5822
              },
              "typeArguments": null,
              "start": 5813,
              "end": 5822
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 5823,
                "end": 5824
              },
              "typeArguments": null,
              "start": 5823,
              "end": 5824
            },
            "start": 5813,
            "end": 5825
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "name",
              "raw": "'name'",
              "start": 5826,
              "end": 5832
            },
            "start": 5826,
            "end": 5832
          },
          "start": 5813,
          "end": 5833
        },
        "optional": false,
        "readonly": null,
        "start": 5787,
        "end": 5835
      },
      "declare": false,
      "start": 5776,
      "end": 5836
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Original",
        "optional": false,
        "typeAnnotation": null,
        "start": 5870,
        "end": 5878
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5883,
              "end": 5888
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
                      "name": "subProp1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5896,
                      "end": 5904
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 5906,
                        "end": 5912
                      },
                      "start": 5904,
                      "end": 5912
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 5896,
                    "end": 5913
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "subProp2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5918,
                      "end": 5926
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 5928,
                        "end": 5934
                      },
                      "start": 5926,
                      "end": 5934
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 5918,
                    "end": 5935
                  }
                ],
                "start": 5890,
                "end": 5939
              },
              "start": 5888,
              "end": 5939
            },
            "accessibility": null,
            "static": false,
            "start": 5883,
            "end": 5940
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5943,
              "end": 5948
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
                      "name": "subProp3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5956,
                      "end": 5964
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 5966,
                        "end": 5972
                      },
                      "start": 5964,
                      "end": 5972
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 5956,
                    "end": 5973
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "subProp4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5978,
                      "end": 5986
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 5988,
                        "end": 5994
                      },
                      "start": 5986,
                      "end": 5994
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 5978,
                    "end": 5995
                  }
                ],
                "start": 5950,
                "end": 5999
              },
              "start": 5948,
              "end": 5999
            },
            "accessibility": null,
            "static": false,
            "start": 5943,
            "end": 6000
          }
        ],
        "start": 5879,
        "end": 6002
      },
      "declare": false,
      "start": 5860,
      "end": 6002
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeyOfOriginal",
        "optional": false,
        "typeAnnotation": null,
        "start": 6008,
        "end": 6021
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Original",
            "optional": false,
            "typeAnnotation": null,
            "start": 6030,
            "end": 6038
          },
          "typeArguments": null,
          "start": 6030,
          "end": 6038
        },
        "start": 6024,
        "end": 6038
      },
      "declare": false,
      "start": 6003,
      "end": 6039
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedKeyOfOriginalFor",
        "optional": false,
        "typeAnnotation": null,
        "start": 6045,
        "end": 6067
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
              "start": 6068,
              "end": 6069
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "KeyOfOriginal",
                "optional": false,
                "typeAnnotation": null,
                "start": 6078,
                "end": 6091
              },
              "typeArguments": null,
              "start": 6078,
              "end": 6091
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6068,
            "end": 6091
          }
        ],
        "start": 6067,
        "end": 6092
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Original",
              "optional": false,
              "typeAnnotation": null,
              "start": 6101,
              "end": 6109
            },
            "typeArguments": null,
            "start": 6101,
            "end": 6109
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 6110,
              "end": 6111
            },
            "typeArguments": null,
            "start": 6110,
            "end": 6111
          },
          "start": 6101,
          "end": 6112
        },
        "start": 6095,
        "end": 6112
      },
      "declare": false,
      "start": 6040,
      "end": 6113
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SameKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 6120,
        "end": 6128
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
              "start": 6129,
              "end": 6130
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6129,
            "end": 6130
          }
        ],
        "start": 6128,
        "end": 6131
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 6139,
          "end": 6140
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
              "start": 6150,
              "end": 6151
            },
            "typeArguments": null,
            "start": 6150,
            "end": 6151
          },
          "start": 6144,
          "end": 6151
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K2",
            "optional": false,
            "typeAnnotation": null,
            "start": 6161,
            "end": 6163
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6173,
                  "end": 6174
                },
                "typeArguments": null,
                "start": 6173,
                "end": 6174
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6175,
                  "end": 6176
                },
                "typeArguments": null,
                "start": 6175,
                "end": 6176
              },
              "start": 6173,
              "end": 6177
            },
            "start": 6167,
            "end": 6177
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 6180,
            "end": 6186
          },
          "optional": false,
          "readonly": null,
          "start": 6154,
          "end": 6191
        },
        "optional": false,
        "readonly": null,
        "start": 6134,
        "end": 6194
      },
      "declare": false,
      "start": 6115,
      "end": 6195
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MappedFromOriginal",
        "optional": false,
        "typeAnnotation": null,
        "start": 6202,
        "end": 6220
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SameKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 6223,
          "end": 6231
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Original",
                "optional": false,
                "typeAnnotation": null,
                "start": 6232,
                "end": 6240
              },
              "typeArguments": null,
              "start": 6232,
              "end": 6240
            }
          ],
          "start": 6231,
          "end": 6241
        },
        "start": 6223,
        "end": 6241
      },
      "declare": false,
      "start": 6197,
      "end": 6242
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
            "name": "getStringAndNumberFromOriginalAndMapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 6250,
            "end": 6289
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6296,
                    "end": 6297
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "KeyOfOriginal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6306,
                      "end": 6319
                    },
                    "typeArguments": null,
                    "start": 6306,
                    "end": 6319
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6296,
                  "end": 6319
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6323,
                    "end": 6324
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NestedKeyOfOriginalFor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6333,
                      "end": 6355
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6356,
                            "end": 6357
                          },
                          "typeArguments": null,
                          "start": 6356,
                          "end": 6357
                        }
                      ],
                      "start": 6355,
                      "end": 6358
                    },
                    "start": 6333,
                    "end": 6358
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6323,
                  "end": 6358
                }
              ],
              "start": 6292,
              "end": 6360
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "original",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Original",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6374,
                      "end": 6382
                    },
                    "typeArguments": null,
                    "start": 6374,
                    "end": 6382
                  },
                  "start": 6372,
                  "end": 6382
                },
                "start": 6364,
                "end": 6382
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mappedFromOriginal",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MappedFromOriginal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6406,
                      "end": 6424
                    },
                    "typeArguments": null,
                    "start": 6406,
                    "end": 6424
                  },
                  "start": 6404,
                  "end": 6424
                },
                "start": 6386,
                "end": 6424
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
                      "start": 6433,
                      "end": 6434
                    },
                    "typeArguments": null,
                    "start": 6433,
                    "end": 6434
                  },
                  "start": 6431,
                  "end": 6434
                },
                "start": 6428,
                "end": 6434
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nestedKey",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6449,
                      "end": 6450
                    },
                    "typeArguments": null,
                    "start": 6449,
                    "end": 6450
                  },
                  "start": 6447,
                  "end": 6450
                },
                "start": 6438,
                "end": 6450
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Original",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6455,
                          "end": 6463
                        },
                        "typeArguments": null,
                        "start": 6455,
                        "end": 6463
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6464,
                          "end": 6465
                        },
                        "typeArguments": null,
                        "start": 6464,
                        "end": 6465
                      },
                      "start": 6455,
                      "end": 6466
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6467,
                        "end": 6468
                      },
                      "typeArguments": null,
                      "start": 6467,
                      "end": 6468
                    },
                    "start": 6455,
                    "end": 6469
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MappedFromOriginal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6471,
                          "end": 6489
                        },
                        "typeArguments": null,
                        "start": 6471,
                        "end": 6489
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6490,
                          "end": 6491
                        },
                        "typeArguments": null,
                        "start": 6490,
                        "end": 6491
                      },
                      "start": 6471,
                      "end": 6492
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6493,
                        "end": 6494
                      },
                      "typeArguments": null,
                      "start": 6493,
                      "end": 6494
                    },
                    "start": 6471,
                    "end": 6495
                  }
                ],
                "start": 6454,
                "end": 6496
              },
              "start": 6452,
              "end": 6496
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "original",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6512,
                            "end": 6520
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6521,
                            "end": 6524
                          },
                          "optional": false,
                          "computed": true,
                          "start": 6512,
                          "end": 6525
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nestedKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6526,
                          "end": 6535
                        },
                        "optional": false,
                        "computed": true,
                        "start": 6512,
                        "end": 6536
                      },
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mappedFromOriginal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6538,
                            "end": 6556
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6557,
                            "end": 6560
                          },
                          "optional": false,
                          "computed": true,
                          "start": 6538,
                          "end": 6561
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nestedKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6562,
                          "end": 6571
                        },
                        "optional": false,
                        "computed": true,
                        "start": 6538,
                        "end": 6572
                      }
                    ],
                    "start": 6511,
                    "end": 6573
                  },
                  "start": 6504,
                  "end": 6574
                }
              ],
              "start": 6500,
              "end": 6576
            },
            "id": null,
            "generator": false,
            "start": 6292,
            "end": 6576
          },
          "definite": false,
          "start": 6250,
          "end": 6576
        }
      ],
      "declare": false,
      "start": 6244,
      "end": 6577
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Config",
        "optional": false,
        "typeAnnotation": null,
        "start": 6610,
        "end": 6616
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
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 6621,
              "end": 6627
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6629,
                "end": 6635
              },
              "start": 6627,
              "end": 6635
            },
            "accessibility": null,
            "static": false,
            "start": 6621,
            "end": 6636
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 6639,
              "end": 6645
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6647,
                "end": 6653
              },
              "start": 6645,
              "end": 6653
            },
            "accessibility": null,
            "static": false,
            "start": 6639,
            "end": 6654
          }
        ],
        "start": 6617,
        "end": 6656
      },
      "declare": false,
      "start": 6600,
      "end": 6656
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getConfigOrDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 6667,
        "end": 6685
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
              "start": 6686,
              "end": 6687
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Config",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6702,
                  "end": 6708
                },
                "typeArguments": null,
                "start": 6702,
                "end": 6708
              },
              "start": 6696,
              "end": 6708
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6686,
            "end": 6708
          }
        ],
        "start": 6685,
        "end": 6709
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "userConfig",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 6725,
                "end": 6732
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Config",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6733,
                      "end": 6739
                    },
                    "typeArguments": null,
                    "start": 6733,
                    "end": 6739
                  }
                ],
                "start": 6732,
                "end": 6740
              },
              "start": 6725,
              "end": 6740
            },
            "start": 6723,
            "end": 6740
          },
          "start": 6713,
          "end": 6740
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 6749,
                "end": 6750
              },
              "typeArguments": null,
              "start": 6749,
              "end": 6750
            },
            "start": 6747,
            "end": 6750
          },
          "start": 6744,
          "end": 6750
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "defaultValue",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Config",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6768,
                  "end": 6774
                },
                "typeArguments": null,
                "start": 6768,
                "end": 6774
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6775,
                  "end": 6776
                },
                "typeArguments": null,
                "start": 6775,
                "end": 6776
              },
              "start": 6768,
              "end": 6777
            },
            "start": 6766,
            "end": 6777
          },
          "start": 6754,
          "end": 6777
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Config",
              "optional": false,
              "typeAnnotation": null,
              "start": 6781,
              "end": 6787
            },
            "typeArguments": null,
            "start": 6781,
            "end": 6787
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 6788,
              "end": 6789
            },
            "typeArguments": null,
            "start": 6788,
            "end": 6789
          },
          "start": 6781,
          "end": 6790
        },
        "start": 6779,
        "end": 6790
      },
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "userValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6801,
                  "end": 6810
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "userConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6813,
                    "end": 6823
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6824,
                    "end": 6827
                  },
                  "optional": false,
                  "computed": true,
                  "start": 6813,
                  "end": 6828
                },
                "definite": false,
                "start": 6801,
                "end": 6828
              }
            ],
            "declare": false,
            "start": 6795,
            "end": 6829
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
                  "name": "assertedCheck",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6839,
                  "end": 6852
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "userValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6855,
                    "end": 6864
                  },
                  "consequent": {
                    "type": "TSNonNullExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "userValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6867,
                      "end": 6876
                    },
                    "start": 6867,
                    "end": 6877
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "defaultValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6880,
                    "end": 6892
                  },
                  "start": 6855,
                  "end": 6892
                },
                "definite": false,
                "start": 6839,
                "end": 6892
              }
            ],
            "declare": false,
            "start": 6833,
            "end": 6893
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "assertedCheck",
              "optional": false,
              "typeAnnotation": null,
              "start": 6903,
              "end": 6916
            },
            "start": 6896,
            "end": 6917
          }
        ],
        "start": 6791,
        "end": 6919
      },
      "expression": false,
      "start": 6658,
      "end": 6919
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6948,
        "end": 6952
      },
      "typeParameters": null,
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
              "start": 6959,
              "end": 6960
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6962,
                "end": 6968
              },
              "start": 6960,
              "end": 6968
            },
            "accessibility": null,
            "static": false,
            "start": 6959,
            "end": 6969
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
              "start": 6972,
              "end": 6973
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6975,
                "end": 6981
              },
              "start": 6973,
              "end": 6981
            },
            "accessibility": null,
            "static": false,
            "start": 6972,
            "end": 6982
          }
        ],
        "start": 6955,
        "end": 6984
      },
      "declare": false,
      "start": 6943,
      "end": 6985
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getValueConcrete",
        "optional": false,
        "typeAnnotation": null,
        "start": 6996,
        "end": 7012
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 7013,
              "end": 7014
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7029,
                  "end": 7033
                },
                "typeArguments": null,
                "start": 7029,
                "end": 7033
              },
              "start": 7023,
              "end": 7033
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 7013,
            "end": 7033
          }
        ],
        "start": 7012,
        "end": 7034
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 7041,
                "end": 7048
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7049,
                      "end": 7053
                    },
                    "typeArguments": null,
                    "start": 7049,
                    "end": 7053
                  }
                ],
                "start": 7048,
                "end": 7054
              },
              "start": 7041,
              "end": 7054
            },
            "start": 7039,
            "end": 7054
          },
          "start": 7038,
          "end": 7054
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
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
                "start": 7061,
                "end": 7062
              },
              "typeArguments": null,
              "start": 7061,
              "end": 7062
            },
            "start": 7059,
            "end": 7062
          },
          "start": 7058,
          "end": 7062
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7066,
                  "end": 7070
                },
                "typeArguments": null,
                "start": 7066,
                "end": 7070
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7071,
                  "end": 7072
                },
                "typeArguments": null,
                "start": 7071,
                "end": 7072
              },
              "start": 7066,
              "end": 7073
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 7076,
              "end": 7085
            }
          ],
          "start": 7066,
          "end": 7085
        },
        "start": 7064,
        "end": 7085
      },
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
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 7097,
                "end": 7098
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 7099,
                "end": 7100
              },
              "optional": false,
              "computed": true,
              "start": 7097,
              "end": 7101
            },
            "start": 7090,
            "end": 7102
          }
        ],
        "start": 7086,
        "end": 7104
      },
      "expression": false,
      "start": 6987,
      "end": 7104
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 31,
  "end": 7104
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 31,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "RecordMap",
    "start": 36,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 86,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "UnionRecord",
    "start": 91,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 105,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 113,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "RecordMap",
    "start": 119,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 131,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "RecordMap",
    "start": 137,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 155,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "RecordMap",
    "start": 184,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "RecordMap",
    "start": 209,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 223,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 239,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "processRecord",
    "start": 248,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 264,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 272,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "RecordMap",
    "start": 278,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "rec",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "UnionRecord",
    "start": 294,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "rec",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "rec",
    "start": 322,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 333,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 341,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "UnionRecord",
    "start": 351,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 362,
    "end": 363
  },
  {
    "type": "String",
    "value": "'n'",
    "start": 363,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 422,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 430,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "UnionRecord",
    "start": 440,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "processRecord",
    "start": 519,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
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
    "value": "processRecord",
    "start": 538,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 552,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "processRecord",
    "start": 557,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "String",
    "value": "'n'",
    "start": 579,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 585,
    "end": 586
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 587,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 596,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 601,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 635,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "TextFieldData",
    "start": 640,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 658,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 665,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 674,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "SelectFieldData",
    "start": 679,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 699,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 708,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "selectedValue",
    "start": 718,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 733,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 743,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "FieldMap",
    "start": 748,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 765,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "TextFieldData",
    "start": 771,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 790,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "SelectFieldData",
    "start": 798,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 818,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "FormField",
    "start": 823,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 835,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 843,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "FieldMap",
    "start": 849,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 863,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 872,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "FieldMap",
    "start": 878,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 894,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "RenderFunc",
    "start": 899,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 910,
    "end": 911
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 912,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 920,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "FieldMap",
    "start": 926,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 939,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "FieldMap",
    "start": 946,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 959,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 962,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 968,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "RenderFuncMap",
    "start": 973,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 992,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 994,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 997,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "FieldMap",
    "start": 1003,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "RenderFunc",
    "start": 1014,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1032,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "renderTextField",
    "start": 1041,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1057,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "TextFieldData",
    "start": 1064,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1082,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "renderSelectField",
    "start": 1091,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1109,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "SelectFieldData",
    "start": 1116,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1137,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "renderFuncs",
    "start": 1143,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "RenderFuncMap",
    "start": 1156,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 1178,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "renderTextField",
    "start": 1184,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 1205,
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
    "value": "renderSelectField",
    "start": 1213,
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
    "value": "}",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1236,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "renderField",
    "start": 1245,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1259,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1267,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "FieldMap",
    "start": 1273,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 1283,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "FormField",
    "start": 1290,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1310,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "renderFn",
    "start": 1316,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "renderFuncs",
    "start": 1327,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 1339,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1345,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "renderFn",
    "start": 1356,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 1365,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1371,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1394,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "TypeMap",
    "start": 1399,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1415,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1420,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1432,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1437,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1448,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 1453,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1460,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "TypeMap",
    "start": 1466,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1476,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "HandlerMap",
    "start": 1481,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1499,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 1502,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "TypeMap",
    "start": 1513,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1525,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1528,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1537,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "handlers",
    "start": 1543,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "HandlerMap",
    "start": 1553,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1579,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1584,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1596,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1603,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1608,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1623,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "DataEntry",
    "start": 1628,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1640,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 1648,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 1655,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1668,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1681,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1694,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "TypeMap",
    "start": 1700,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1719,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1725,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "DataEntry",
    "start": 1731,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1753,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1759,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1766,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 1772,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1787,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1793,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1800,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "String",
    "value": "'def'",
    "start": 1806,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1821,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1827,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1834,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1840,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1850,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 1859,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1869,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 1877,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1883,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "DataEntry",
    "start": 1889,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1911,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 1916,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "block",
    "start": 1924,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1930,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1943,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "block",
    "start": 1947,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1953,
    "end": 1957
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1958,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "handlers",
    "start": 1961,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "handlers",
    "start": 1985,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "block",
    "start": 1994,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2000,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "block",
    "start": 2006,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2012,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 2039,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2047,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 2054,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2065,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2071,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2078,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 2084,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2109,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "LetterMap",
    "start": 2114,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2131,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2142,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2151,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "LetterCaller",
    "start": 2156,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2171,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2179,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "LetterMap",
    "start": 2185,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2203,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "letter",
    "start": 2212,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2220,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "LetterMap",
    "start": 2230,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 2245,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 2257,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2265,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "LetterMap",
    "start": 2275,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ">",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2291,
    "end": 2293
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2294,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2308,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2317,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2324,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2332,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "LetterMap",
    "start": 2338,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "letter",
    "start": 2351,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 2359,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "LetterCaller",
    "start": 2369,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2387,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 2396,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "letter",
    "start": 2403,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2415,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2429,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2439,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2453,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2463,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "ACaller",
    "start": 2468,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2485,
    "end": 2487
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2488,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2494,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "BCaller",
    "start": 2499,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2516,
    "end": 2518
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2519,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2526,
    "end": 2533
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2534,
    "end": 2539
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 2540,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "letter",
    "start": 2546,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 2557,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Identifier",
    "value": "ACaller",
    "start": 2565,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "letter",
    "start": 2579,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 2590,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "BCaller",
    "start": 2598,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2610,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 2615,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2634,
    "end": 2638
  },
  {
    "type": "Identifier",
    "value": "Ev",
    "start": 2639,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2644,
    "end": 2651
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2652,
    "end": 2657
  },
  {
    "type": "Identifier",
    "value": "DocumentEventMap",
    "start": 2658,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2683,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2696,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2705,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2718,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "once",
    "start": 2727,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2734,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2747,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2756,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 2767,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "DocumentEventMap",
    "start": 2771,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2792,
    "end": 2794
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2795,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2809,
    "end": 2817
  },
  {
    "type": "Identifier",
    "value": "processEvents",
    "start": 2818,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2834,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2842,
    "end": 2847
  },
  {
    "type": "Identifier",
    "value": "DocumentEventMap",
    "start": 2848,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 2866,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "Ev",
    "start": 2874,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2876,
    "end": 2877
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2889,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2894,
    "end": 2899
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 2900,
    "end": 2905
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2906,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 2909,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 2927,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Identifier",
    "value": "addEventListener",
    "start": 2936,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 2953,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2959,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 2966,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2970,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 2973,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2979,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 2988,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Identifier",
    "value": "once",
    "start": 2995,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 3001,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "once",
    "start": 3007,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3025,
    "end": 3033
  },
  {
    "type": "Identifier",
    "value": "createEventListener",
    "start": 3034,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3056,
    "end": 3063
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3064,
    "end": 3069
  },
  {
    "type": "Identifier",
    "value": "DocumentEventMap",
    "start": 3070,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3090,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Identifier",
    "value": "once",
    "start": 3096,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3103,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 3110,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Identifier",
    "value": "Ev",
    "start": 3122,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "Ev",
    "start": 3130,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3142,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3151,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Identifier",
    "value": "once",
    "start": 3157,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 3163,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3178,
    "end": 3183
  },
  {
    "type": "Identifier",
    "value": "clickEvent",
    "start": 3184,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Identifier",
    "value": "createEventListener",
    "start": 3197,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3223,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "String",
    "value": "\"click\"",
    "start": 3229,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 3242,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 3252,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3255,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3258,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3266,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 3270,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3280,
    "end": 3285
  },
  {
    "type": "Identifier",
    "value": "scrollEvent",
    "start": 3286,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "createEventListener",
    "start": 3300,
    "end": 3319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3326,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "String",
    "value": "\"scroll\"",
    "start": 3332,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3340,
    "end": 3341
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 3346,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 3356,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3359,
    "end": 3361
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3362,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3370,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 3374,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Identifier",
    "value": "processEvents",
    "start": 3384,
    "end": 3397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "clickEvent",
    "start": 3399,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Identifier",
    "value": "scrollEvent",
    "start": 3411,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "processEvents",
    "start": 3427,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3449,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "String",
    "value": "\"click\"",
    "start": 3455,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 3464,
    "end": 3472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 3474,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3477,
    "end": 3479
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3480,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3488,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 3492,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3505,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "String",
    "value": "\"scroll\"",
    "start": 3511,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 3521,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3529,
    "end": 3530
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 3531,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3534,
    "end": 3536
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3537,
    "end": 3544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3544,
    "end": 3545
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3545,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 3549,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3574,
    "end": 3582
  },
  {
    "type": "Identifier",
    "value": "ff1",
    "start": 3583,
    "end": 3586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3595,
    "end": 3599
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 3600,
    "end": 3606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 3619,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3622,
    "end": 3623
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3626,
    "end": 3627
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3628,
    "end": 3634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3639,
    "end": 3645
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 3656,
    "end": 3662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3666,
    "end": 3667
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3668,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3679,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3688,
    "end": 3689
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3690,
    "end": 3696
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3696,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3702,
    "end": 3703
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3708,
    "end": 3712
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 3713,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3720,
    "end": 3725
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 3726,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3732,
    "end": 3733
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3738,
    "end": 3743
  },
  {
    "type": "Identifier",
    "value": "funs",
    "start": 3744,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3752,
    "end": 3753
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3755,
    "end": 3757
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 3758,
    "end": 3762
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3762,
    "end": 3763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3766,
    "end": 3769
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3769,
    "end": 3773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 3775,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3782,
    "end": 3783
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3786,
    "end": 3788
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3789,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3798,
    "end": 3799
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 3808,
    "end": 3811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3811,
    "end": 3812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3814,
    "end": 3815
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3815,
    "end": 3816
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3820,
    "end": 3822
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 3838,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3848,
    "end": 3849
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3851,
    "end": 3852
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3853,
    "end": 3854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3854,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3856,
    "end": 3858
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3863,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3865,
    "end": 3866
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3867,
    "end": 3868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3879,
    "end": 3887
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 3888,
    "end": 3893
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3893,
    "end": 3894
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3896,
    "end": 3903
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 3904,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Identifier",
    "value": "funKey",
    "start": 3910,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3918,
    "end": 3919
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3919,
    "end": 3920
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3921,
    "end": 3924
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3924,
    "end": 3928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3928,
    "end": 3929
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 3930,
    "end": 3936
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3936,
    "end": 3937
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3937,
    "end": 3938
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3938,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3951,
    "end": 3956
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 3957,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Identifier",
    "value": "funs",
    "start": 3962,
    "end": 3966
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3966,
    "end": 3967
  },
  {
    "type": "Identifier",
    "value": "funKey",
    "start": 3967,
    "end": 3973
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3973,
    "end": 3974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3974,
    "end": 3975
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 3984,
    "end": 3986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3986,
    "end": 3987
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3987,
    "end": 3990
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3990,
    "end": 3994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4001,
    "end": 4002
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4007,
    "end": 4012
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 4013,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 4018,
    "end": 4023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4023,
    "end": 4024
  },
  {
    "type": "String",
    "value": "'sum'",
    "start": 4024,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4035,
    "end": 4036
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4041,
    "end": 4046
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 4047,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 4052,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "String",
    "value": "'concat'",
    "start": 4058,
    "end": 4066
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4066,
    "end": 4067
  },
  {
    "type": "String",
    "value": "'str1'",
    "start": 4068,
    "end": 4074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "String",
    "value": "'str2'",
    "start": 4076,
    "end": 4082
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "String",
    "value": "'str3'",
    "start": 4084,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4093,
    "end": 4094
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4118,
    "end": 4122
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 4123,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4130,
    "end": 4131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4132,
    "end": 4133
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4137,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4146,
    "end": 4147
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4148,
    "end": 4154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4156,
    "end": 4157
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4158,
    "end": 4162
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 4163,
    "end": 4167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4167,
    "end": 4168
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4168,
    "end": 4169
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4170,
    "end": 4177
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4178,
    "end": 4183
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 4184,
    "end": 4190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4190,
    "end": 4191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4192,
    "end": 4193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4194,
    "end": 4195
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4195,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4196,
    "end": 4197
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 4198,
    "end": 4204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4204,
    "end": 4205
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4205,
    "end": 4206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4206,
    "end": 4207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4207,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4209,
    "end": 4211
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4212,
    "end": 4216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4218,
    "end": 4222
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 4223,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4229,
    "end": 4230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4231,
    "end": 4232
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4233,
    "end": 4234
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4236,
    "end": 4238
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4239,
    "end": 4244
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 4245,
    "end": 4251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4251,
    "end": 4252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4252,
    "end": 4253
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 4254,
    "end": 4258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4258,
    "end": 4259
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4259,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4266,
    "end": 4274
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4275,
    "end": 4277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4278,
    "end": 4279
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4280,
    "end": 4287
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4288,
    "end": 4293
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 4294,
    "end": 4300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4300,
    "end": 4301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4301,
    "end": 4302
  },
  {
    "type": "Identifier",
    "value": "funcs",
    "start": 4302,
    "end": 4307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4307,
    "end": 4308
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 4309,
    "end": 4314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4314,
    "end": 4315
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4316,
    "end": 4319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4319,
    "end": 4320
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4321,
    "end": 4322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4322,
    "end": 4323
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4324,
    "end": 4327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4327,
    "end": 4328
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 4329,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4335,
    "end": 4336
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4340,
    "end": 4341
  },
  {
    "type": "Identifier",
    "value": "funcs",
    "start": 4346,
    "end": 4351
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4351,
    "end": 4352
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4352,
    "end": 4355
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4356,
    "end": 4357
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4357,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4361,
    "end": 4362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4366,
    "end": 4374
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 4375,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4377,
    "end": 4378
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4380,
    "end": 4387
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4388,
    "end": 4393
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 4394,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4400,
    "end": 4401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Identifier",
    "value": "funcs",
    "start": 4402,
    "end": 4407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 4409,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4416,
    "end": 4419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4422,
    "end": 4423
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4424,
    "end": 4427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4427,
    "end": 4428
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 4429,
    "end": 4435
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4436,
    "end": 4437
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4437,
    "end": 4438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4438,
    "end": 4439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4440,
    "end": 4441
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4446,
    "end": 4451
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 4452,
    "end": 4456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4457,
    "end": 4458
  },
  {
    "type": "Identifier",
    "value": "funcs",
    "start": 4459,
    "end": 4464
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4464,
    "end": 4465
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4465,
    "end": 4468
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4468,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 4493,
    "end": 4497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4497,
    "end": 4498
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4498,
    "end": 4501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4501,
    "end": 4502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4502,
    "end": 4503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4504,
    "end": 4505
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4507,
    "end": 4515
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 4516,
    "end": 4518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4518,
    "end": 4519
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4521,
    "end": 4528
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4529,
    "end": 4534
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 4535,
    "end": 4541
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4541,
    "end": 4542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4542,
    "end": 4543
  },
  {
    "type": "Identifier",
    "value": "funcs",
    "start": 4543,
    "end": 4548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4548,
    "end": 4549
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 4550,
    "end": 4555
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4555,
    "end": 4556
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4557,
    "end": 4560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4560,
    "end": 4561
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4562,
    "end": 4563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4563,
    "end": 4564
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4565,
    "end": 4568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4568,
    "end": 4569
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 4570,
    "end": 4576
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4576,
    "end": 4577
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4577,
    "end": 4578
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4578,
    "end": 4579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4579,
    "end": 4580
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4581,
    "end": 4582
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4587,
    "end": 4592
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 4593,
    "end": 4597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4597,
    "end": 4598
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 4599,
    "end": 4603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4603,
    "end": 4604
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4604,
    "end": 4605
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4605,
    "end": 4606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Identifier",
    "value": "funcs",
    "start": 4609,
    "end": 4614
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4615,
    "end": 4618
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4618,
    "end": 4619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4619,
    "end": 4620
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 4625,
    "end": 4629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4629,
    "end": 4630
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4630,
    "end": 4633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4633,
    "end": 4634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4634,
    "end": 4635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4636,
    "end": 4637
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4639,
    "end": 4647
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 4648,
    "end": 4650
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4650,
    "end": 4651
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4651,
    "end": 4652
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4653,
    "end": 4660
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4661,
    "end": 4666
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 4667,
    "end": 4673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4673,
    "end": 4674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4674,
    "end": 4675
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4675,
    "end": 4676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4676,
    "end": 4677
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 4678,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4683,
    "end": 4684
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4684,
    "end": 4689
  },
  {
    "type": "Identifier",
    "value": "ArgMap",
    "start": 4690,
    "end": 4696
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4696,
    "end": 4697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4697,
    "end": 4698
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4699,
    "end": 4700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4700,
    "end": 4701
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 4702,
    "end": 4707
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4707,
    "end": 4708
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4708,
    "end": 4709
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4709,
    "end": 4710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4710,
    "end": 4711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4712,
    "end": 4713
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4718,
    "end": 4719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4722,
    "end": 4723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4723,
    "end": 4724
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4725,
    "end": 4726
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4750,
    "end": 4759
  },
  {
    "type": "Identifier",
    "value": "MyObj",
    "start": 4760,
    "end": 4765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4766,
    "end": 4767
  },
  {
    "type": "Identifier",
    "value": "someKey",
    "start": 4772,
    "end": 4779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4779,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4781,
    "end": 4782
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4789,
    "end": 4793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4793,
    "end": 4794
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4795,
    "end": 4801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4801,
    "end": 4802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4807,
    "end": 4808
  },
  {
    "type": "Identifier",
    "value": "someOtherKey",
    "start": 4813,
    "end": 4825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4825,
    "end": 4826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4827,
    "end": 4828
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4835,
    "end": 4839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4839,
    "end": 4840
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4841,
    "end": 4847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4847,
    "end": 4848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4853,
    "end": 4854
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4855,
    "end": 4856
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4858,
    "end": 4863
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 4864,
    "end": 4867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4867,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "MyObj",
    "start": 4869,
    "end": 4874
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4875,
    "end": 4876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4877,
    "end": 4878
  },
  {
    "type": "Identifier",
    "value": "someKey",
    "start": 4883,
    "end": 4890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4890,
    "end": 4891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4892,
    "end": 4893
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4894,
    "end": 4898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4898,
    "end": 4899
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 4900,
    "end": 4902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4903,
    "end": 4904
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4904,
    "end": 4905
  },
  {
    "type": "Identifier",
    "value": "someOtherKey",
    "start": 4910,
    "end": 4922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4922,
    "end": 4923
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4924,
    "end": 4925
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4926,
    "end": 4930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4930,
    "end": 4931
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4932,
    "end": 4934
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4935,
    "end": 4936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4937,
    "end": 4938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4938,
    "end": 4939
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4941,
    "end": 4949
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 4950,
    "end": 4954
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4954,
    "end": 4955
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4955,
    "end": 4956
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4957,
    "end": 4964
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4965,
    "end": 4970
  },
  {
    "type": "Identifier",
    "value": "MyObj",
    "start": 4971,
    "end": 4976
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4976,
    "end": 4977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4977,
    "end": 4978
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 4978,
    "end": 4979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4979,
    "end": 4980
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4981,
    "end": 4982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4982,
    "end": 4983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4983,
    "end": 4984
  },
  {
    "type": "Identifier",
    "value": "MyObj",
    "start": 4985,
    "end": 4990
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4991,
    "end": 4992
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4992,
    "end": 4993
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4993,
    "end": 4994
  },
  {
    "type": "String",
    "value": "'name'",
    "start": 4994,
    "end": 5000
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5000,
    "end": 5001
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5002,
    "end": 5003
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5004,
    "end": 5013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5014,
    "end": 5015
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5020,
    "end": 5025
  },
  {
    "type": "Identifier",
    "value": "myObj",
    "start": 5026,
    "end": 5031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5031,
    "end": 5032
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 5033,
    "end": 5040
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5040,
    "end": 5041
  },
  {
    "type": "Identifier",
    "value": "MyObj",
    "start": 5041,
    "end": 5046
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5046,
    "end": 5047
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5047,
    "end": 5048
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 5048,
    "end": 5049
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5049,
    "end": 5050
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5051,
    "end": 5052
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 5053,
    "end": 5056
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5056,
    "end": 5057
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 5057,
    "end": 5058
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5058,
    "end": 5059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5059,
    "end": 5060
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5065,
    "end": 5067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5068,
    "end": 5069
  },
  {
    "type": "Identifier",
    "value": "myObj",
    "start": 5069,
    "end": 5074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5074,
    "end": 5075
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5076,
    "end": 5077
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5084,
    "end": 5090
  },
  {
    "type": "Identifier",
    "value": "myObj",
    "start": 5091,
    "end": 5096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5096,
    "end": 5097
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 5097,
    "end": 5101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5101,
    "end": 5102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5107,
    "end": 5108
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5113,
    "end": 5118
  },
  {
    "type": "Identifier",
    "value": "myObj2",
    "start": 5119,
    "end": 5125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5125,
    "end": 5126
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 5127,
    "end": 5134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5134,
    "end": 5135
  },
  {
    "type": "Identifier",
    "value": "MyObj",
    "start": 5135,
    "end": 5140
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5140,
    "end": 5141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5141,
    "end": 5142
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5142,
    "end": 5147
  },
  {
    "type": "Identifier",
    "value": "MyObj",
    "start": 5148,
    "end": 5153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5153,
    "end": 5154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5155,
    "end": 5156
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 5157,
    "end": 5160
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5160,
    "end": 5161
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 5161,
    "end": 5162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5162,
    "end": 5163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5163,
    "end": 5164
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5169,
    "end": 5171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5172,
    "end": 5173
  },
  {
    "type": "Identifier",
    "value": "myObj2",
    "start": 5173,
    "end": 5179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5179,
    "end": 5180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5189,
    "end": 5195
  },
  {
    "type": "Identifier",
    "value": "myObj2",
    "start": 5196,
    "end": 5202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5202,
    "end": 5203
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 5203,
    "end": 5207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5207,
    "end": 5208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5213,
    "end": 5214
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5219,
    "end": 5225
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5226,
    "end": 5235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5235,
    "end": 5236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5237,
    "end": 5238
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5262,
    "end": 5271
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5272,
    "end": 5275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5276,
    "end": 5277
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 5282,
    "end": 5285
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5285,
    "end": 5286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5286,
    "end": 5287
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5288,
    "end": 5294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5295,
    "end": 5296
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5298,
    "end": 5306
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5307,
    "end": 5310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5310,
    "end": 5311
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5311,
    "end": 5312
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5313,
    "end": 5320
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5321,
    "end": 5326
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5327,
    "end": 5330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5330,
    "end": 5331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5331,
    "end": 5332
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 5332,
    "end": 5336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5336,
    "end": 5337
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5338,
    "end": 5339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5339,
    "end": 5340
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 5341,
    "end": 5342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5342,
    "end": 5343
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 5344,
    "end": 5352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5352,
    "end": 5353
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5353,
    "end": 5356
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5356,
    "end": 5357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5357,
    "end": 5358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5359,
    "end": 5360
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 5365,
    "end": 5368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5368,
    "end": 5369
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 5369,
    "end": 5370
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5370,
    "end": 5371
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 5371,
    "end": 5375
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5375,
    "end": 5376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5376,
    "end": 5377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5377,
    "end": 5378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5379,
    "end": 5380
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5382,
    "end": 5389
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5390,
    "end": 5398
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 5399,
    "end": 5402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5402,
    "end": 5403
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 5403,
    "end": 5404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5404,
    "end": 5405
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5406,
    "end": 5412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5412,
    "end": 5413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5413,
    "end": 5414
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5415,
    "end": 5419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5419,
    "end": 5420
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5444,
    "end": 5451
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5452,
    "end": 5460
  },
  {
    "type": "Identifier",
    "value": "makeCompleteLookupMapping",
    "start": 5461,
    "end": 5486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5486,
    "end": 5487
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5487,
    "end": 5488
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5489,
    "end": 5496
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 5497,
    "end": 5510
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5510,
    "end": 5511
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5511,
    "end": 5514
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5514,
    "end": 5515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5515,
    "end": 5516
  },
  {
    "type": "Identifier",
    "value": "Attr",
    "start": 5517,
    "end": 5521
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5522,
    "end": 5529
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5530,
    "end": 5535
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5536,
    "end": 5537
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5537,
    "end": 5538
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5538,
    "end": 5544
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5544,
    "end": 5545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5545,
    "end": 5546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5546,
    "end": 5547
  },
  {
    "type": "Identifier",
    "value": "ops",
    "start": 5552,
    "end": 5555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5555,
    "end": 5556
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5557,
    "end": 5558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5558,
    "end": 5559
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 5560,
    "end": 5564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5564,
    "end": 5565
  },
  {
    "type": "Identifier",
    "value": "Attr",
    "start": 5566,
    "end": 5570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5570,
    "end": 5571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5571,
    "end": 5572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5573,
    "end": 5574
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5575,
    "end": 5576
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 5576,
    "end": 5580
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5581,
    "end": 5583
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5584,
    "end": 5585
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5585,
    "end": 5586
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5586,
    "end": 5592
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5592,
    "end": 5593
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 5593,
    "end": 5595
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 5596,
    "end": 5600
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5600,
    "end": 5601
  },
  {
    "type": "Identifier",
    "value": "Attr",
    "start": 5601,
    "end": 5605
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5605,
    "end": 5606
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5606,
    "end": 5607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5607,
    "end": 5608
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 5609,
    "end": 5613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5614,
    "end": 5615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5615,
    "end": 5616
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5618,
    "end": 5623
  },
  {
    "type": "Identifier",
    "value": "ALL_BARS",
    "start": 5624,
    "end": 5632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5633,
    "end": 5634
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5635,
    "end": 5636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5636,
    "end": 5637
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 5638,
    "end": 5642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5642,
    "end": 5643
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5644,
    "end": 5647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5647,
    "end": 5648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5648,
    "end": 5649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5650,
    "end": 5651
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 5651,
    "end": 5655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5655,
    "end": 5656
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 5657,
    "end": 5660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5660,
    "end": 5661
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5661,
    "end": 5662
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 5663,
    "end": 5665
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 5666,
    "end": 5671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5671,
    "end": 5672
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5674,
    "end": 5679
  },
  {
    "type": "Identifier",
    "value": "BAR_LOOKUP",
    "start": 5680,
    "end": 5690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5691,
    "end": 5692
  },
  {
    "type": "Identifier",
    "value": "makeCompleteLookupMapping",
    "start": 5693,
    "end": 5718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5718,
    "end": 5719
  },
  {
    "type": "Identifier",
    "value": "ALL_BARS",
    "start": 5719,
    "end": 5727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5727,
    "end": 5728
  },
  {
    "type": "String",
    "value": "'name'",
    "start": 5729,
    "end": 5735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5735,
    "end": 5736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5736,
    "end": 5737
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5739,
    "end": 5743
  },
  {
    "type": "Identifier",
    "value": "BarLookup",
    "start": 5744,
    "end": 5753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5754,
    "end": 5755
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5756,
    "end": 5762
  },
  {
    "type": "Identifier",
    "value": "BAR_LOOKUP",
    "start": 5763,
    "end": 5773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5773,
    "end": 5774
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5776,
    "end": 5780
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 5781,
    "end": 5784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5785,
    "end": 5786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5787,
    "end": 5788
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5789,
    "end": 5790
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 5790,
    "end": 5791
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5792,
    "end": 5794
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5795,
    "end": 5800
  },
  {
    "type": "Identifier",
    "value": "BarLookup",
    "start": 5801,
    "end": 5810
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5810,
    "end": 5811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5811,
    "end": 5812
  },
  {
    "type": "Identifier",
    "value": "BarLookup",
    "start": 5813,
    "end": 5822
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5822,
    "end": 5823
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 5823,
    "end": 5824
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5824,
    "end": 5825
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5825,
    "end": 5826
  },
  {
    "type": "String",
    "value": "'name'",
    "start": 5826,
    "end": 5832
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5832,
    "end": 5833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5834,
    "end": 5835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5835,
    "end": 5836
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5860,
    "end": 5869
  },
  {
    "type": "Identifier",
    "value": "Original",
    "start": 5870,
    "end": 5878
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5879,
    "end": 5880
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 5883,
    "end": 5888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5888,
    "end": 5889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5890,
    "end": 5891
  },
  {
    "type": "Identifier",
    "value": "subProp1",
    "start": 5896,
    "end": 5904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5904,
    "end": 5905
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5906,
    "end": 5912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5912,
    "end": 5913
  },
  {
    "type": "Identifier",
    "value": "subProp2",
    "start": 5918,
    "end": 5926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5926,
    "end": 5927
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5928,
    "end": 5934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5934,
    "end": 5935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5938,
    "end": 5939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5939,
    "end": 5940
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 5943,
    "end": 5948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5948,
    "end": 5949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5950,
    "end": 5951
  },
  {
    "type": "Identifier",
    "value": "subProp3",
    "start": 5956,
    "end": 5964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5964,
    "end": 5965
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5966,
    "end": 5972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5972,
    "end": 5973
  },
  {
    "type": "Identifier",
    "value": "subProp4",
    "start": 5978,
    "end": 5986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5986,
    "end": 5987
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5988,
    "end": 5994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5994,
    "end": 5995
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5998,
    "end": 5999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5999,
    "end": 6000
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6001,
    "end": 6002
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6003,
    "end": 6007
  },
  {
    "type": "Identifier",
    "value": "KeyOfOriginal",
    "start": 6008,
    "end": 6021
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6022,
    "end": 6023
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 6024,
    "end": 6029
  },
  {
    "type": "Identifier",
    "value": "Original",
    "start": 6030,
    "end": 6038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6038,
    "end": 6039
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6040,
    "end": 6044
  },
  {
    "type": "Identifier",
    "value": "NestedKeyOfOriginalFor",
    "start": 6045,
    "end": 6067
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6067,
    "end": 6068
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6068,
    "end": 6069
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6070,
    "end": 6077
  },
  {
    "type": "Identifier",
    "value": "KeyOfOriginal",
    "start": 6078,
    "end": 6091
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6091,
    "end": 6092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6093,
    "end": 6094
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 6095,
    "end": 6100
  },
  {
    "type": "Identifier",
    "value": "Original",
    "start": 6101,
    "end": 6109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6109,
    "end": 6110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6110,
    "end": 6111
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6111,
    "end": 6112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6112,
    "end": 6113
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6115,
    "end": 6119
  },
  {
    "type": "Identifier",
    "value": "SameKeys",
    "start": 6120,
    "end": 6128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6128,
    "end": 6129
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6129,
    "end": 6130
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6130,
    "end": 6131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6132,
    "end": 6133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6134,
    "end": 6135
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6138,
    "end": 6139
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6139,
    "end": 6140
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 6141,
    "end": 6143
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 6144,
    "end": 6149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6150,
    "end": 6151
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6151,
    "end": 6152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6152,
    "end": 6153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6154,
    "end": 6155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6160,
    "end": 6161
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 6161,
    "end": 6163
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 6164,
    "end": 6166
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 6167,
    "end": 6172
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6173,
    "end": 6174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6174,
    "end": 6175
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6175,
    "end": 6176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6176,
    "end": 6177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6177,
    "end": 6178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6178,
    "end": 6179
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6180,
    "end": 6186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6186,
    "end": 6187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6190,
    "end": 6191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6191,
    "end": 6192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6193,
    "end": 6194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6194,
    "end": 6195
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6197,
    "end": 6201
  },
  {
    "type": "Identifier",
    "value": "MappedFromOriginal",
    "start": 6202,
    "end": 6220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6221,
    "end": 6222
  },
  {
    "type": "Identifier",
    "value": "SameKeys",
    "start": 6223,
    "end": 6231
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6231,
    "end": 6232
  },
  {
    "type": "Identifier",
    "value": "Original",
    "start": 6232,
    "end": 6240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6240,
    "end": 6241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6241,
    "end": 6242
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6244,
    "end": 6249
  },
  {
    "type": "Identifier",
    "value": "getStringAndNumberFromOriginalAndMapped",
    "start": 6250,
    "end": 6289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6290,
    "end": 6291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6292,
    "end": 6293
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6296,
    "end": 6297
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6298,
    "end": 6305
  },
  {
    "type": "Identifier",
    "value": "KeyOfOriginal",
    "start": 6306,
    "end": 6319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6319,
    "end": 6320
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6323,
    "end": 6324
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6325,
    "end": 6332
  },
  {
    "type": "Identifier",
    "value": "NestedKeyOfOriginalFor",
    "start": 6333,
    "end": 6355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6355,
    "end": 6356
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6356,
    "end": 6357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6357,
    "end": 6358
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6359,
    "end": 6360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6360,
    "end": 6361
  },
  {
    "type": "Identifier",
    "value": "original",
    "start": 6364,
    "end": 6372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6372,
    "end": 6373
  },
  {
    "type": "Identifier",
    "value": "Original",
    "start": 6374,
    "end": 6382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6382,
    "end": 6383
  },
  {
    "type": "Identifier",
    "value": "mappedFromOriginal",
    "start": 6386,
    "end": 6404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6404,
    "end": 6405
  },
  {
    "type": "Identifier",
    "value": "MappedFromOriginal",
    "start": 6406,
    "end": 6424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6424,
    "end": 6425
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6428,
    "end": 6431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6431,
    "end": 6432
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6433,
    "end": 6434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6434,
    "end": 6435
  },
  {
    "type": "Identifier",
    "value": "nestedKey",
    "start": 6438,
    "end": 6447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6447,
    "end": 6448
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6449,
    "end": 6450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6451,
    "end": 6452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6452,
    "end": 6453
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6454,
    "end": 6455
  },
  {
    "type": "Identifier",
    "value": "Original",
    "start": 6455,
    "end": 6463
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6463,
    "end": 6464
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6464,
    "end": 6465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6465,
    "end": 6466
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6466,
    "end": 6467
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6467,
    "end": 6468
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6468,
    "end": 6469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6469,
    "end": 6470
  },
  {
    "type": "Identifier",
    "value": "MappedFromOriginal",
    "start": 6471,
    "end": 6489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6489,
    "end": 6490
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6490,
    "end": 6491
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6491,
    "end": 6492
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6492,
    "end": 6493
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6493,
    "end": 6494
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6494,
    "end": 6495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6495,
    "end": 6496
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6497,
    "end": 6499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6500,
    "end": 6501
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6504,
    "end": 6510
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6511,
    "end": 6512
  },
  {
    "type": "Identifier",
    "value": "original",
    "start": 6512,
    "end": 6520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6520,
    "end": 6521
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6521,
    "end": 6524
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6524,
    "end": 6525
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6525,
    "end": 6526
  },
  {
    "type": "Identifier",
    "value": "nestedKey",
    "start": 6526,
    "end": 6535
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6535,
    "end": 6536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6536,
    "end": 6537
  },
  {
    "type": "Identifier",
    "value": "mappedFromOriginal",
    "start": 6538,
    "end": 6556
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6556,
    "end": 6557
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6557,
    "end": 6560
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6560,
    "end": 6561
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6561,
    "end": 6562
  },
  {
    "type": "Identifier",
    "value": "nestedKey",
    "start": 6562,
    "end": 6571
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6571,
    "end": 6572
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6572,
    "end": 6573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6573,
    "end": 6574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6575,
    "end": 6576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6576,
    "end": 6577
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6600,
    "end": 6609
  },
  {
    "type": "Identifier",
    "value": "Config",
    "start": 6610,
    "end": 6616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6617,
    "end": 6618
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6621,
    "end": 6627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6627,
    "end": 6628
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6629,
    "end": 6635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6635,
    "end": 6636
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6639,
    "end": 6645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6645,
    "end": 6646
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6647,
    "end": 6653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6653,
    "end": 6654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6655,
    "end": 6656
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6658,
    "end": 6666
  },
  {
    "type": "Identifier",
    "value": "getConfigOrDefault",
    "start": 6667,
    "end": 6685
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6685,
    "end": 6686
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6686,
    "end": 6687
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6688,
    "end": 6695
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 6696,
    "end": 6701
  },
  {
    "type": "Identifier",
    "value": "Config",
    "start": 6702,
    "end": 6708
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6708,
    "end": 6709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6709,
    "end": 6710
  },
  {
    "type": "Identifier",
    "value": "userConfig",
    "start": 6713,
    "end": 6723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6723,
    "end": 6724
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 6725,
    "end": 6732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6732,
    "end": 6733
  },
  {
    "type": "Identifier",
    "value": "Config",
    "start": 6733,
    "end": 6739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6739,
    "end": 6740
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6740,
    "end": 6741
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6744,
    "end": 6747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6747,
    "end": 6748
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6749,
    "end": 6750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6750,
    "end": 6751
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 6754,
    "end": 6766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6766,
    "end": 6767
  },
  {
    "type": "Identifier",
    "value": "Config",
    "start": 6768,
    "end": 6774
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6774,
    "end": 6775
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6775,
    "end": 6776
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6776,
    "end": 6777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6778,
    "end": 6779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6779,
    "end": 6780
  },
  {
    "type": "Identifier",
    "value": "Config",
    "start": 6781,
    "end": 6787
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6787,
    "end": 6788
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6788,
    "end": 6789
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6789,
    "end": 6790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6791,
    "end": 6792
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6795,
    "end": 6800
  },
  {
    "type": "Identifier",
    "value": "userValue",
    "start": 6801,
    "end": 6810
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6811,
    "end": 6812
  },
  {
    "type": "Identifier",
    "value": "userConfig",
    "start": 6813,
    "end": 6823
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6823,
    "end": 6824
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6824,
    "end": 6827
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6827,
    "end": 6828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6828,
    "end": 6829
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6833,
    "end": 6838
  },
  {
    "type": "Identifier",
    "value": "assertedCheck",
    "start": 6839,
    "end": 6852
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6853,
    "end": 6854
  },
  {
    "type": "Identifier",
    "value": "userValue",
    "start": 6855,
    "end": 6864
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6865,
    "end": 6866
  },
  {
    "type": "Identifier",
    "value": "userValue",
    "start": 6867,
    "end": 6876
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 6876,
    "end": 6877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6878,
    "end": 6879
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 6880,
    "end": 6892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6892,
    "end": 6893
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6896,
    "end": 6902
  },
  {
    "type": "Identifier",
    "value": "assertedCheck",
    "start": 6903,
    "end": 6916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6916,
    "end": 6917
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6918,
    "end": 6919
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6943,
    "end": 6947
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 6948,
    "end": 6952
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6953,
    "end": 6954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6955,
    "end": 6956
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6959,
    "end": 6960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6960,
    "end": 6961
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6962,
    "end": 6968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6968,
    "end": 6969
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 6972,
    "end": 6973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6973,
    "end": 6974
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6975,
    "end": 6981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6981,
    "end": 6982
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6983,
    "end": 6984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6984,
    "end": 6985
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6987,
    "end": 6995
  },
  {
    "type": "Identifier",
    "value": "getValueConcrete",
    "start": 6996,
    "end": 7012
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7012,
    "end": 7013
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7013,
    "end": 7014
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7015,
    "end": 7022
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 7023,
    "end": 7028
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 7029,
    "end": 7033
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7033,
    "end": 7034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7034,
    "end": 7035
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7038,
    "end": 7039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7039,
    "end": 7040
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 7041,
    "end": 7048
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7048,
    "end": 7049
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 7049,
    "end": 7053
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7053,
    "end": 7054
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7054,
    "end": 7055
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 7058,
    "end": 7059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7059,
    "end": 7060
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7061,
    "end": 7062
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7063,
    "end": 7064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7064,
    "end": 7065
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 7066,
    "end": 7070
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7070,
    "end": 7071
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7071,
    "end": 7072
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7072,
    "end": 7073
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7074,
    "end": 7075
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 7076,
    "end": 7085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7086,
    "end": 7087
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7090,
    "end": 7096
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 7097,
    "end": 7098
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7098,
    "end": 7099
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 7099,
    "end": 7100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7100,
    "end": 7101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7101,
    "end": 7102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7103,
    "end": 7104
  }
]
```

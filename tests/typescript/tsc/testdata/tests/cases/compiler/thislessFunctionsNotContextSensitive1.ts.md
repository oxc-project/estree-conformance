__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 84
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
              "name": "TConfig",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 98
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 109,
                    "end": 110
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 113,
                      "end": 116
                    },
                    "start": 111,
                    "end": 116
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 109,
                  "end": 117
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 119
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 122,
                      "end": 125
                    },
                    "start": 120,
                    "end": 125
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 118,
                  "end": 126
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 128
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 131,
                      "end": 134
                    },
                    "start": 129,
                    "end": 134
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 127,
                  "end": 134
                }
              ],
              "start": 107,
              "end": 136
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 85,
            "end": 136
          }
        ],
        "start": 84,
        "end": 137
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TConfig",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 156
              },
              "typeArguments": null,
              "start": 149,
              "end": 156
            },
            "start": 147,
            "end": 156
          },
          "start": 141,
          "end": 156
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Omit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 176
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TConfig",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 177,
                          "end": 184
                        },
                        "typeArguments": null,
                        "start": 177,
                        "end": 184
                      },
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 186,
                              "end": 189
                            },
                            "start": 186,
                            "end": 189
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "b",
                              "raw": "\"b\"",
                              "start": 192,
                              "end": 195
                            },
                            "start": 192,
                            "end": 195
                          }
                        ],
                        "start": 186,
                        "end": 195
                      }
                    ],
                    "start": 176,
                    "end": 196
                  },
                  "start": 172,
                  "end": 196
                },
                "start": 166,
                "end": 196
              },
              "extendsType": {
                "type": "TSNeverKeyword",
                "start": 205,
                "end": 210
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 213,
                  "end": 217
                },
                "start": 213,
                "end": 217
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 220,
                  "end": 225
                },
                "start": 220,
                "end": 225
              },
              "start": 166,
              "end": 225
            },
            "start": 164,
            "end": 225
          },
          "start": 160,
          "end": 225
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 230,
          "end": 234
        },
        "start": 228,
        "end": 234
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestConfig",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 247
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 258
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 260,
                  "end": 267
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 257,
                "end": 267
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
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
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 303,
                          "end": 306
                        },
                        "start": 296,
                        "end": 307
                      }
                    ],
                    "start": 288,
                    "end": 313
                  },
                  "expression": false,
                  "start": 276,
                  "end": 313
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 273,
                "end": 313
              }
            ],
            "start": 251,
            "end": 318
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 322,
            "end": 326
          }
        ],
        "optional": false,
        "start": 237,
        "end": 329
      },
      "directive": null,
      "start": 237,
      "end": 330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestConfig",
          "optional": false,
          "typeAnnotation": null,
          "start": 332,
          "end": 342
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 353
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 355,
                  "end": 362
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 352,
                "end": 362
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 369
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
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 398,
                          "end": 401
                        },
                        "start": 391,
                        "end": 402
                      }
                    ],
                    "start": 383,
                    "end": 408
                  },
                  "expression": false,
                  "start": 371,
                  "end": 408
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 368,
                "end": 408
              }
            ],
            "start": 346,
            "end": 413
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 417,
            "end": 422
          }
        ],
        "optional": false,
        "start": 332,
        "end": 434
      },
      "directive": null,
      "start": 332,
      "end": 435
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubscribeFieldOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 503,
        "end": 524
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Event",
              "optional": false,
              "typeAnnotation": null,
              "start": 525,
              "end": 530
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 525,
            "end": 530
          }
        ],
        "start": 524,
        "end": 531
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
              "name": "subscribe",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 545
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
                      "name": "Event",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 553,
                      "end": 558
                    },
                    "typeArguments": null,
                    "start": 553,
                    "end": 558
                  },
                  "start": 550,
                  "end": 558
                },
                "start": 547,
                "end": 558
              },
              "start": 545,
              "end": 558
            },
            "accessibility": null,
            "static": false,
            "start": 536,
            "end": 559
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "resolve",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 569
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
                    "name": "event",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Event",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 579,
                          "end": 584
                        },
                        "typeArguments": null,
                        "start": 579,
                        "end": 584
                      },
                      "start": 577,
                      "end": 584
                    },
                    "start": 572,
                    "end": 584
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 589,
                    "end": 595
                  },
                  "start": 586,
                  "end": 595
                },
                "start": 571,
                "end": 595
              },
              "start": 569,
              "end": 595
            },
            "accessibility": null,
            "static": false,
            "start": 562,
            "end": 596
          }
        ],
        "start": 532,
        "end": 598
      },
      "declare": false,
      "start": 493,
      "end": 598
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defineOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 630
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
              "name": "Event",
              "optional": false,
              "typeAnnotation": null,
              "start": 631,
              "end": 636
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 631,
            "end": 636
          }
        ],
        "start": 630,
        "end": 637
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SubscribeFieldOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 650,
                "end": 671
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Event",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 672,
                      "end": 677
                    },
                    "typeArguments": null,
                    "start": 672,
                    "end": 677
                  }
                ],
                "start": 671,
                "end": 678
              },
              "start": 650,
              "end": 678
            },
            "start": 648,
            "end": 678
          },
          "start": 641,
          "end": 678
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 683,
          "end": 687
        },
        "start": 681,
        "end": 687
      },
      "body": null,
      "expression": false,
      "start": 600,
      "end": 688
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "defineOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 690,
          "end": 703
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
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 708,
                  "end": 715
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
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 718,
                      "end": 723
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 728,
                    "end": 733
                  },
                  "id": null,
                  "generator": false,
                  "start": 717,
                  "end": 733
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 708,
                "end": 733
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subscribe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 747,
                  "end": 756
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
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 772,
                          "end": 775
                        },
                        "start": 765,
                        "end": 776
                      }
                    ],
                    "start": 759,
                    "end": 780
                  },
                  "expression": false,
                  "start": 756,
                  "end": 780
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 747,
                "end": 780
              }
            ],
            "start": 704,
            "end": 783
          }
        ],
        "optional": false,
        "start": 690,
        "end": 784
      },
      "directive": null,
      "start": 690,
      "end": 785
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "defineOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 787,
          "end": 800
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
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 812
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
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 815,
                      "end": 820
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 825,
                    "end": 830
                  },
                  "id": null,
                  "generator": false,
                  "start": 814,
                  "end": 830
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 805,
                "end": 830
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subscribe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 844,
                  "end": 853
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
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 880,
                          "end": 883
                        },
                        "start": 873,
                        "end": 884
                      }
                    ],
                    "start": 867,
                    "end": 888
                  },
                  "expression": false,
                  "start": 855,
                  "end": 888
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 844,
                "end": 888
              }
            ],
            "start": 801,
            "end": 891
          }
        ],
        "optional": false,
        "start": 787,
        "end": 892
      },
      "directive": null,
      "start": 787,
      "end": 893
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StateFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 964,
          "end": 977
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 978,
                "end": 983
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 978,
              "end": 983
            }
          ],
          "start": 977,
          "end": 984
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "State",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 991,
                    "end": 996
                  },
                  "typeArguments": null,
                  "start": 991,
                  "end": 996
                },
                "start": 989,
                "end": 996
              },
              "start": 988,
              "end": 996
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
                "start": 1001,
                "end": 1005
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1007,
                    "end": 1010
                  },
                  "start": 1007,
                  "end": 1012
                },
                "start": 1005,
                "end": 1012
              },
              "value": null,
              "start": 998,
              "end": 1012
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1017,
              "end": 1020
            },
            "start": 1014,
            "end": 1020
          },
          "start": 987,
          "end": 1020
        },
        "declare": false,
        "start": 959,
        "end": 1021
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 952,
      "end": 1021
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "VuexStoreOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 1035,
          "end": 1051
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 1052,
                "end": 1057
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1052,
              "end": 1057
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Modules",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1066
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1059,
              "end": 1066
            }
          ],
          "start": 1051,
          "end": 1067
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "state",
                "optional": false,
                "typeAnnotation": null,
                "start": 1074,
                "end": 1079
              },
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
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1082,
                        "end": 1087
                      },
                      "typeArguments": null,
                      "start": 1082,
                      "end": 1087
                    },
                    {
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
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1097,
                            "end": 1102
                          },
                          "typeArguments": null,
                          "start": 1097,
                          "end": 1102
                        },
                        "start": 1094,
                        "end": 1102
                      },
                      "start": 1091,
                      "end": 1102
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "State",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1112,
                                "end": 1117
                              },
                              "typeArguments": null,
                              "start": 1112,
                              "end": 1117
                            },
                            "start": 1110,
                            "end": 1117
                          },
                          "start": 1108,
                          "end": 1117
                        }
                      ],
                      "start": 1106,
                      "end": 1119
                    }
                  ],
                  "start": 1082,
                  "end": 1119
                },
                "start": 1080,
                "end": 1119
              },
              "accessibility": null,
              "static": false,
              "start": 1074,
              "end": 1120
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "mutations",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1132
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
                    "start": 1135,
                    "end": 1141
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1142,
                        "end": 1148
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StateFunction",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1150,
                          "end": 1163
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "State",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1164,
                                "end": 1169
                              },
                              "typeArguments": null,
                              "start": 1164,
                              "end": 1169
                            }
                          ],
                          "start": 1163,
                          "end": 1170
                        },
                        "start": 1150,
                        "end": 1170
                      }
                    ],
                    "start": 1141,
                    "end": 1171
                  },
                  "start": 1135,
                  "end": 1171
                },
                "start": 1133,
                "end": 1171
              },
              "accessibility": null,
              "static": false,
              "start": 1123,
              "end": 1172
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "modules",
                "optional": false,
                "typeAnnotation": null,
                "start": 1175,
                "end": 1182
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1192,
                    "end": 1193
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Modules",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1203,
                        "end": 1210
                      },
                      "typeArguments": null,
                      "start": 1203,
                      "end": 1210
                    },
                    "start": 1197,
                    "end": 1210
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "VuexStoreOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1213,
                      "end": 1229
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
                              "name": "Modules",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1230,
                              "end": 1237
                            },
                            "typeArguments": null,
                            "start": 1230,
                            "end": 1237
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1238,
                              "end": 1239
                            },
                            "typeArguments": null,
                            "start": 1238,
                            "end": 1239
                          },
                          "start": 1230,
                          "end": 1240
                        },
                        {
                          "type": "TSNeverKeyword",
                          "start": 1242,
                          "end": 1247
                        }
                      ],
                      "start": 1229,
                      "end": 1248
                    },
                    "start": 1213,
                    "end": 1248
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 1185,
                  "end": 1253
                },
                "start": 1183,
                "end": 1253
              },
              "accessibility": null,
              "static": false,
              "start": 1175,
              "end": 1254
            }
          ],
          "start": 1070,
          "end": 1256
        },
        "declare": false,
        "start": 1030,
        "end": 1257
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1023,
      "end": 1257
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createStore",
          "optional": false,
          "typeAnnotation": null,
          "start": 1275,
          "end": 1286
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
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 1290,
                "end": 1295
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1304,
                  "end": 1310
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1311,
                      "end": 1317
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 1319,
                      "end": 1326
                    }
                  ],
                  "start": 1310,
                  "end": 1327
                },
                "start": 1304,
                "end": 1327
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1290,
              "end": 1327
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Modules",
                "optional": false,
                "typeAnnotation": null,
                "start": 1331,
                "end": 1338
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1353
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1354,
                      "end": 1360
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1362,
                        "end": 1368
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1369,
                            "end": 1375
                          },
                          {
                            "type": "TSUnknownKeyword",
                            "start": 1377,
                            "end": 1384
                          }
                        ],
                        "start": 1368,
                        "end": 1385
                      },
                      "start": 1362,
                      "end": 1385
                    }
                  ],
                  "start": 1353,
                  "end": 1386
                },
                "start": 1347,
                "end": 1386
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1331,
              "end": 1386
            }
          ],
          "start": 1286,
          "end": 1389
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "options",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VuexStoreOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1399,
                  "end": 1415
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1416,
                        "end": 1421
                      },
                      "typeArguments": null,
                      "start": 1416,
                      "end": 1421
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Modules",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1423,
                        "end": 1430
                      },
                      "typeArguments": null,
                      "start": 1423,
                      "end": 1430
                    }
                  ],
                  "start": 1415,
                  "end": 1431
                },
                "start": 1399,
                "end": 1431
              },
              "start": 1397,
              "end": 1431
            },
            "start": 1390,
            "end": 1431
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 1433,
          "end": 1435
        },
        "expression": false,
        "start": 1266,
        "end": 1435
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1259,
      "end": 1435
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
            "name": "store",
            "optional": false,
            "typeAnnotation": null,
            "start": 1443,
            "end": 1448
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createStore",
              "optional": false,
              "typeAnnotation": null,
              "start": 1451,
              "end": 1462
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
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1467,
                      "end": 1472
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
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "bar2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1490,
                                    "end": 1494
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 1496,
                                    "end": 1497
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1490,
                                  "end": 1497
                                }
                              ],
                              "start": 1488,
                              "end": 1499
                            },
                            "start": 1481,
                            "end": 1500
                          }
                        ],
                        "start": 1475,
                        "end": 1504
                      },
                      "expression": false,
                      "start": 1472,
                      "end": 1504
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1467,
                    "end": 1504
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mutations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1508,
                      "end": 1517
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
                            "name": "inc",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1521,
                            "end": 1524
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
                                "name": "state123",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1527,
                                "end": 1535
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "UpdateExpression",
                              "operator": "++",
                              "prefix": false,
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "state123",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1540,
                                  "end": 1548
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1549,
                                  "end": 1553
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1540,
                                "end": 1553
                              },
                              "start": 1540,
                              "end": 1555
                            },
                            "id": null,
                            "generator": false,
                            "start": 1526,
                            "end": 1555
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1521,
                          "end": 1555
                        }
                      ],
                      "start": 1519,
                      "end": 1557
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1508,
                    "end": 1557
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "modules",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1561,
                      "end": 1568
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1576,
                            "end": 1579
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
                                  "name": "state",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1589,
                                  "end": 1594
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
                                          "type": "ObjectExpression",
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "bar2",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1616,
                                                "end": 1620
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 1622,
                                                "end": 1623
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false,
                                              "start": 1616,
                                              "end": 1623
                                            }
                                          ],
                                          "start": 1614,
                                          "end": 1625
                                        },
                                        "start": 1607,
                                        "end": 1626
                                      }
                                    ],
                                    "start": 1597,
                                    "end": 1634
                                  },
                                  "expression": false,
                                  "start": 1594,
                                  "end": 1634
                                },
                                "method": true,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1589,
                                "end": 1634
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "mutations",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1642,
                                  "end": 1651
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
                                        "name": "inc",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1655,
                                        "end": 1658
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
                                            "name": "state",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1661,
                                            "end": 1666
                                          }
                                        ],
                                        "returnType": null,
                                        "body": {
                                          "type": "UpdateExpression",
                                          "operator": "++",
                                          "prefix": false,
                                          "argument": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "state",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1671,
                                              "end": 1676
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bar2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1677,
                                              "end": 1681
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 1671,
                                            "end": 1681
                                          },
                                          "start": 1671,
                                          "end": 1683
                                        },
                                        "id": null,
                                        "generator": false,
                                        "start": 1660,
                                        "end": 1683
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1655,
                                      "end": 1683
                                    }
                                  ],
                                  "start": 1653,
                                  "end": 1685
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1642,
                                "end": 1685
                              }
                            ],
                            "start": 1581,
                            "end": 1692
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1576,
                          "end": 1692
                        }
                      ],
                      "start": 1570,
                      "end": 1697
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1561,
                    "end": 1697
                  }
                ],
                "start": 1463,
                "end": 1700
              }
            ],
            "optional": false,
            "start": 1451,
            "end": 1701
          },
          "definite": false,
          "start": 1443,
          "end": 1701
        }
      ],
      "declare": false,
      "start": 1437,
      "end": 1702
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1766,
        "end": 1767
      },
      "typeParameters": null,
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
                "name": "Methods",
                "optional": false,
                "typeAnnotation": null,
                "start": 1771,
                "end": 1778
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1771,
              "end": 1778
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attached",
                "optional": false,
                "typeAnnotation": null,
                "start": 1780,
                "end": 1788
              },
              "constraint": null,
              "default": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "methods",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Methods",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1801,
                          "end": 1808
                        },
                        "typeArguments": null,
                        "start": 1801,
                        "end": 1808
                      },
                      "start": 1799,
                      "end": 1808
                    },
                    "start": 1792,
                    "end": 1808
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1813,
                    "end": 1817
                  },
                  "start": 1810,
                  "end": 1817
                },
                "start": 1791,
                "end": 1817
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1780,
              "end": 1817
            }
          ],
          "start": 1770,
          "end": 1818
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "options",
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
                      "name": "methods",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1832,
                      "end": 1839
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Methods",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1841,
                          "end": 1848
                        },
                        "typeArguments": null,
                        "start": 1841,
                        "end": 1848
                      },
                      "start": 1839,
                      "end": 1848
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1832,
                    "end": 1849
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "attached",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1852,
                      "end": 1860
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Attached",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1862,
                          "end": 1870
                        },
                        "typeArguments": null,
                        "start": 1862,
                        "end": 1870
                      },
                      "start": 1860,
                      "end": 1870
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1852,
                    "end": 1871
                  }
                ],
                "start": 1828,
                "end": 1873
              },
              "start": 1826,
              "end": 1873
            },
            "start": 1819,
            "end": 1873
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 1878,
            "end": 1881
          },
          "start": 1875,
          "end": 1881
        },
        "start": 1770,
        "end": 1881
      },
      "declare": false,
      "start": 1761,
      "end": 1882
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1899,
                  "end": 1900
                },
                "typeArguments": null,
                "start": 1899,
                "end": 1900
              },
              "start": 1897,
              "end": 1900
            },
            "start": 1888,
            "end": 1900
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1909,
              "end": 1911
            },
            "id": null,
            "generator": false,
            "start": 1903,
            "end": 1911
          },
          "definite": false,
          "start": 1888,
          "end": 1911
        }
      ],
      "declare": false,
      "start": 1884,
      "end": 1912
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1914,
          "end": 1923
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
                  "name": "attached",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1928,
                  "end": 1936
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
                      "name": "methods",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1937,
                      "end": 1944
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
                              "name": "methods",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1952,
                              "end": 1959
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bbb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1960,
                              "end": 1963
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1952,
                            "end": 1963
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1952,
                          "end": 1965
                        },
                        "directive": null,
                        "start": 1952,
                        "end": 1966
                      }
                    ],
                    "start": 1946,
                    "end": 1976
                  },
                  "expression": false,
                  "start": 1936,
                  "end": 1976
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1928,
                "end": 1976
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methods",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1980,
                  "end": 1987
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
                        "name": "bbb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1995,
                        "end": 1998
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
                          "body": [],
                          "start": 2001,
                          "end": 2003
                        },
                        "expression": false,
                        "start": 1998,
                        "end": 2003
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1995,
                      "end": 2003
                    }
                  ],
                  "start": 1989,
                  "end": 2008
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1980,
                "end": 2008
              }
            ],
            "start": 1924,
            "end": 2011
          }
        ],
        "optional": false,
        "start": 1914,
        "end": 2012
      },
      "directive": null,
      "start": 1914,
      "end": 2013
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 2015,
          "end": 2024
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
                  "name": "attached",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2029,
                  "end": 2037
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
                      "name": "methods",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2038,
                      "end": 2045
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
                              "name": "methods",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2053,
                              "end": 2060
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bbb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2061,
                              "end": 2064
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2053,
                            "end": 2064
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 2053,
                          "end": 2066
                        },
                        "directive": null,
                        "start": 2053,
                        "end": 2067
                      }
                    ],
                    "start": 2047,
                    "end": 2077
                  },
                  "expression": false,
                  "start": 2037,
                  "end": 2077
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2029,
                "end": 2077
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methods",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2081,
                  "end": 2088
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
                        "name": "bbb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2096,
                        "end": 2099
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 2107,
                          "end": 2109
                        },
                        "id": null,
                        "generator": false,
                        "start": 2101,
                        "end": 2109
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2096,
                      "end": 2109
                    }
                  ],
                  "start": 2090,
                  "end": 2114
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2081,
                "end": 2114
              }
            ],
            "start": 2025,
            "end": 2117
          }
        ],
        "optional": false,
        "start": 2015,
        "end": 2118
      },
      "directive": null,
      "start": 2015,
      "end": 2119
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "create56067",
        "optional": false,
        "typeAnnotation": null,
        "start": 2195,
        "end": 2206
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
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 2210,
              "end": 2215
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 2224,
                "end": 2230
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2231,
                    "end": 2237
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 2239,
                    "end": 2242
                  }
                ],
                "start": 2230,
                "end": 2243
              },
              "start": 2224,
              "end": 2243
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2210,
            "end": 2243
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 2247,
              "end": 2251
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 2260,
                "end": 2266
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2267,
                    "end": 2273
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 2275,
                    "end": 2278
                  }
                ],
                "start": 2266,
                "end": 2279
              },
              "start": 2260,
              "end": 2279
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2247,
            "end": 2279
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "typeAnnotation": null,
              "start": 2283,
              "end": 2290
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2307,
                        "end": 2312
                      },
                      "typeArguments": null,
                      "start": 2307,
                      "end": 2312
                    },
                    "start": 2305,
                    "end": 2312
                  },
                  "start": 2300,
                  "end": 2312
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2320,
                        "end": 2324
                      },
                      "typeArguments": null,
                      "start": 2320,
                      "end": 2324
                    },
                    "start": 2318,
                    "end": 2324
                  },
                  "start": 2314,
                  "end": 2324
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2329,
                    "end": 2335
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2336,
                        "end": 2342
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 2344,
                        "end": 2347
                      }
                    ],
                    "start": 2335,
                    "end": 2348
                  },
                  "start": 2329,
                  "end": 2348
                },
                "start": 2326,
                "end": 2348
              },
              "start": 2299,
              "end": 2348
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2283,
            "end": 2348
          }
        ],
        "start": 2206,
        "end": 2351
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                    "name": "getState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2360,
                    "end": 2368
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
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2376,
                            "end": 2381
                          },
                          "typeArguments": null,
                          "start": 2376,
                          "end": 2381
                        },
                        "start": 2373,
                        "end": 2381
                      },
                      "start": 2370,
                      "end": 2381
                    },
                    "start": 2368,
                    "end": 2381
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2360,
                  "end": 2382
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "actions",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2383,
                    "end": 2390
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Actions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2392,
                        "end": 2399
                      },
                      "typeArguments": null,
                      "start": 2392,
                      "end": 2399
                    },
                    "start": 2390,
                    "end": 2399
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2383,
                  "end": 2400
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2401,
                    "end": 2408
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
                            "name": "Data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2416,
                            "end": 2420
                          },
                          "typeArguments": null,
                          "start": 2416,
                          "end": 2420
                        },
                        "start": 2413,
                        "end": 2420
                      },
                      "start": 2410,
                      "end": 2420
                    },
                    "start": 2408,
                    "end": 2420
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2401,
                  "end": 2420
                }
              ],
              "start": 2358,
              "end": 2422
            },
            "start": 2356,
            "end": 2422
          },
          "start": 2352,
          "end": 2422
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2425,
          "end": 2429
        },
        "start": 2423,
        "end": 2429
      },
      "body": null,
      "expression": false,
      "start": 2178,
      "end": 2430
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "create56067",
          "optional": false,
          "typeAnnotation": null,
          "start": 2432,
          "end": 2443
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
                  "name": "getState",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2448,
                  "end": 2456
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
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2474,
                                "end": 2475
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 2477,
                                "end": 2478
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2474,
                              "end": 2478
                            }
                          ],
                          "start": 2472,
                          "end": 2480
                        },
                        "start": 2465,
                        "end": 2481
                      }
                    ],
                    "start": 2459,
                    "end": 2485
                  },
                  "expression": false,
                  "start": 2456,
                  "end": 2485
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2448,
                "end": 2485
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2489,
                  "end": 2496
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2519,
                                "end": 2520
                              },
                              "value": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 2522,
                                "end": 2523
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2519,
                              "end": 2523
                            }
                          ],
                          "start": 2517,
                          "end": 2525
                        },
                        "start": 2510,
                        "end": 2526
                      }
                    ],
                    "start": 2504,
                    "end": 2530
                  },
                  "id": null,
                  "generator": false,
                  "start": 2498,
                  "end": 2530
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2489,
                "end": 2530
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "actions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2534,
                  "end": 2541
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
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2542,
                      "end": 2547
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2549,
                      "end": 2553
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2561,
                          "end": 2566
                        },
                        "directive": null,
                        "start": 2561,
                        "end": 2566
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2588,
                          "end": 2592
                        },
                        "directive": null,
                        "start": 2588,
                        "end": 2593
                      },
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
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2630,
                                "end": 2631
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 2633,
                                "end": 2634
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2630,
                              "end": 2634
                            }
                          ],
                          "start": 2622,
                          "end": 2641
                        },
                        "start": 2615,
                        "end": 2642
                      }
                    ],
                    "start": 2555,
                    "end": 2646
                  },
                  "expression": false,
                  "start": 2541,
                  "end": 2646
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2534,
                "end": 2646
              }
            ],
            "start": 2444,
            "end": 2649
          }
        ],
        "optional": false,
        "start": 2432,
        "end": 2650
      },
      "directive": null,
      "start": 2432,
      "end": 2651
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonStringIterable",
        "optional": false,
        "typeAnnotation": null,
        "start": 2714,
        "end": 2731
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
              "start": 2732,
              "end": 2733
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2732,
            "end": 2733
          }
        ],
        "start": 2731,
        "end": 2734
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
            "start": 2740,
            "end": 2741
          },
          "typeArguments": null,
          "start": 2740,
          "end": 2741
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "start": 2750,
          "end": 2756
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 2759,
          "end": 2764
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2767,
              "end": 2768
            },
            "typeArguments": null,
            "start": 2767,
            "end": 2768
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 2777,
              "end": 2785
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 2786,
                  "end": 2789
                }
              ],
              "start": 2785,
              "end": 2790
            },
            "start": 2777,
            "end": 2790
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2793,
              "end": 2794
            },
            "typeArguments": null,
            "start": 2793,
            "end": 2794
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2797,
            "end": 2802
          },
          "start": 2767,
          "end": 2802
        },
        "start": 2740,
        "end": 2802
      },
      "declare": false,
      "start": 2709,
      "end": 2803
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 2822,
        "end": 2833
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
              "start": 2834,
              "end": 2835
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2834,
            "end": 2835
          }
        ],
        "start": 2833,
        "end": 2836
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NonStringIterable",
                "optional": false,
                "typeAnnotation": null,
                "start": 2844,
                "end": 2861
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
                      "start": 2862,
                      "end": 2863
                    },
                    "typeArguments": null,
                    "start": 2862,
                    "end": 2863
                  }
                ],
                "start": 2861,
                "end": 2864
              },
              "start": 2844,
              "end": 2864
            },
            "start": 2842,
            "end": 2864
          },
          "start": 2837,
          "end": 2864
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2867,
            "end": 2868
          },
          "typeArguments": null,
          "start": 2867,
          "end": 2868
        },
        "start": 2865,
        "end": 2868
      },
      "body": null,
      "expression": false,
      "start": 2805,
      "end": 2869
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 2877,
            "end": 2878
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
                  "start": 2883,
                  "end": 2886
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
                    "body": [],
                    "start": 2889,
                    "end": 2891
                  },
                  "expression": false,
                  "start": 2886,
                  "end": 2891
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2883,
                "end": 2891
              }
            ],
            "start": 2881,
            "end": 2893
          },
          "definite": false,
          "start": 2877,
          "end": 2893
        }
      ],
      "declare": false,
      "start": 2871,
      "end": 2894
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 2896,
          "end": 2907
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "value",
            "raw": "'value'",
            "start": 2908,
            "end": 2915
          }
        ],
        "optional": false,
        "start": 2896,
        "end": 2916
      },
      "directive": null,
      "start": 2896,
      "end": 2917
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 2927,
          "end": 2938
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "v",
                "raw": "'v'",
                "start": 2940,
                "end": 2943
              }
            ],
            "start": 2939,
            "end": 2944
          }
        ],
        "optional": false,
        "start": 2927,
        "end": 2945
      },
      "directive": null,
      "start": 2927,
      "end": 2946
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 2953,
          "end": 2964
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 2966,
                "end": 2967
              }
            ],
            "start": 2965,
            "end": 2968
          }
        ],
        "optional": false,
        "start": 2953,
        "end": 2969
      },
      "directive": null,
      "start": 2953,
      "end": 2970
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 2977,
          "end": 2988
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2992,
                      "end": 2995
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
                        "body": [],
                        "start": 2998,
                        "end": 3000
                      },
                      "expression": false,
                      "start": 2995,
                      "end": 3000
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2992,
                    "end": 3000
                  }
                ],
                "start": 2990,
                "end": 3002
              }
            ],
            "start": 2989,
            "end": 3003
          }
        ],
        "optional": false,
        "start": 2977,
        "end": 3004
      },
      "directive": null,
      "start": 2977,
      "end": 3005
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Values",
        "optional": false,
        "typeAnnotation": null,
        "start": 3074,
        "end": 3080
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
              "start": 3081,
              "end": 3082
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3081,
            "end": 3082
          }
        ],
        "start": 3080,
        "end": 3083
      },
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
            "start": 3086,
            "end": 3087
          },
          "typeArguments": null,
          "start": 3086,
          "end": 3087
        },
        "indexType": {
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
              "start": 3094,
              "end": 3095
            },
            "typeArguments": null,
            "start": 3094,
            "end": 3095
          },
          "start": 3088,
          "end": 3095
        },
        "start": 3086,
        "end": 3096
      },
      "declare": false,
      "start": 3069,
      "end": 3097
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractFields",
        "optional": false,
        "typeAnnotation": null,
        "start": 3103,
        "end": 3116
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 3117,
              "end": 3124
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3117,
            "end": 3124
          }
        ],
        "start": 3116,
        "end": 3125
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Values",
          "optional": false,
          "typeAnnotation": null,
          "start": 3128,
          "end": 3134
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3140,
                "end": 3141
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3151,
                    "end": 3158
                  },
                  "typeArguments": null,
                  "start": 3151,
                  "end": 3158
                },
                "start": 3145,
                "end": 3158
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3161,
                      "end": 3168
                    },
                    "typeArguments": null,
                    "start": 3161,
                    "end": 3168
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3169,
                      "end": 3170
                    },
                    "typeArguments": null,
                    "start": 3169,
                    "end": 3170
                  },
                  "start": 3161,
                  "end": 3171
                },
                "extendsType": {
                  "type": "TSObjectKeyword",
                  "start": 3180,
                  "end": 3186
                },
                "trueType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3195,
                        "end": 3202
                      },
                      "typeArguments": null,
                      "start": 3195,
                      "end": 3202
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3203,
                        "end": 3204
                      },
                      "typeArguments": null,
                      "start": 3203,
                      "end": 3204
                    },
                    "start": 3195,
                    "end": 3205
                  },
                  "start": 3189,
                  "end": 3205
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 3208,
                  "end": 3213
                },
                "start": 3161,
                "end": 3213
              },
              "optional": false,
              "readonly": null,
              "start": 3135,
              "end": 3216
            }
          ],
          "start": 3134,
          "end": 3217
        },
        "start": 3128,
        "end": 3217
      },
      "declare": false,
      "start": 3098,
      "end": 3218
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetType",
        "optional": false,
        "typeAnnotation": null,
        "start": 3224,
        "end": 3231
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 3232,
              "end": 3239
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3232,
            "end": 3239
          }
        ],
        "start": 3231,
        "end": 3240
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3253,
                    "end": 3259
                  },
                  "start": 3251,
                  "end": 3259
                },
                "start": 3248,
                "end": 3259
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3262,
                "end": 3265
              },
              "start": 3260,
              "end": 3265
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3247,
            "end": 3266
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 3269,
              "end": 3275
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExtractFields",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3278,
                  "end": 3291
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3292,
                        "end": 3299
                      },
                      "typeArguments": null,
                      "start": 3292,
                      "end": 3299
                    }
                  ],
                  "start": 3291,
                  "end": 3300
                },
                "start": 3278,
                "end": 3300
              },
              "start": 3276,
              "end": 3300
            },
            "accessibility": null,
            "static": false,
            "start": 3269,
            "end": 3301
          }
        ],
        "start": 3243,
        "end": 3303
      },
      "declare": false,
      "start": 3219,
      "end": 3304
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test55124",
        "optional": false,
        "typeAnnotation": null,
        "start": 3323,
        "end": 3332
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
              "name": "OptionsData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3333,
              "end": 3344
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetType",
                "optional": false,
                "typeAnnotation": null,
                "start": 3353,
                "end": 3360
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OptionsData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3361,
                      "end": 3372
                    },
                    "typeArguments": null,
                    "start": 3361,
                    "end": 3372
                  }
                ],
                "start": 3360,
                "end": 3373
              },
              "start": 3353,
              "end": 3373
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3333,
            "end": 3373
          }
        ],
        "start": 3332,
        "end": 3374
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OptionsData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3387,
                "end": 3398
              },
              "typeArguments": null,
              "start": 3387,
              "end": 3398
            },
            "start": 3385,
            "end": 3398
          },
          "start": 3378,
          "end": 3398
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3403,
          "end": 3407
        },
        "start": 3401,
        "end": 3407
      },
      "body": null,
      "expression": false,
      "start": 3306,
      "end": 3408
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test55124",
          "optional": false,
          "typeAnnotation": null,
          "start": 3410,
          "end": 3419
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
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3424,
                  "end": 3430
                },
                "value": {
                  "type": "Literal",
                  "value": "$test4",
                  "raw": "\"$test4\"",
                  "start": 3432,
                  "end": 3440
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3424,
                "end": 3440
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3450,
                  "end": 3455
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
                        "name": "$test1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3463,
                        "end": 3469
                      },
                      "value": {
                        "type": "Literal",
                        "value": 111,
                        "raw": "111",
                        "start": 3471,
                        "end": 3474
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3463,
                      "end": 3474
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$test2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3480,
                        "end": 3486
                      },
                      "value": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 3488,
                        "end": 3492
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3480,
                      "end": 3492
                    }
                  ],
                  "start": 3457,
                  "end": 3497
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3450,
                "end": 3497
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3501,
                  "end": 3506
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
                        "name": "$test3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3514,
                        "end": 3520
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 3522,
                        "end": 3524
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3514,
                      "end": 3524
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$test4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3530,
                        "end": 3536
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 3544,
                          "end": 3546
                        },
                        "id": null,
                        "generator": false,
                        "start": 3538,
                        "end": 3546
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3530,
                      "end": 3546
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$test5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3552,
                        "end": 3558
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
                          "body": [],
                          "start": 3561,
                          "end": 3563
                        },
                        "expression": false,
                        "start": 3558,
                        "end": 3563
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3552,
                      "end": 3563
                    }
                  ],
                  "start": 3508,
                  "end": 3568
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3501,
                "end": 3568
              }
            ],
            "start": 3420,
            "end": 3571
          }
        ],
        "optional": false,
        "start": 3410,
        "end": 3572
      },
      "directive": null,
      "start": 3410,
      "end": 3573
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test55124",
          "optional": false,
          "typeAnnotation": null,
          "start": 3575,
          "end": 3584
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
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3589,
                  "end": 3595
                },
                "value": {
                  "type": "Literal",
                  "value": "$test6",
                  "raw": "\"$test6\"",
                  "start": 3597,
                  "end": 3605
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3589,
                "end": 3605
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3618,
                  "end": 3623
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
                        "name": "$test1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3631,
                        "end": 3637
                      },
                      "value": {
                        "type": "Literal",
                        "value": 111,
                        "raw": "111",
                        "start": 3639,
                        "end": 3642
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3631,
                      "end": 3642
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$test2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3648,
                        "end": 3654
                      },
                      "value": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 3656,
                        "end": 3660
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3648,
                      "end": 3660
                    }
                  ],
                  "start": 3625,
                  "end": 3665
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3618,
                "end": 3665
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3669,
                  "end": 3674
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
                        "name": "$test3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3682,
                        "end": 3688
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 3690,
                        "end": 3692
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3682,
                      "end": 3692
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$test4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3698,
                        "end": 3704
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 3712,
                          "end": 3714
                        },
                        "id": null,
                        "generator": false,
                        "start": 3706,
                        "end": 3714
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3698,
                      "end": 3714
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$test5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3720,
                        "end": 3726
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
                          "body": [],
                          "start": 3729,
                          "end": 3731
                        },
                        "expression": false,
                        "start": 3726,
                        "end": 3731
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3720,
                      "end": 3731
                    }
                  ],
                  "start": 3676,
                  "end": 3736
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3669,
                "end": 3736
              }
            ],
            "start": 3585,
            "end": 3739
          }
        ],
        "optional": false,
        "start": 3575,
        "end": 3740
      },
      "directive": null,
      "start": 3575,
      "end": 3741
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test53924",
        "optional": false,
        "typeAnnotation": null,
        "start": 3808,
        "end": 3817
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
              "start": 3818,
              "end": 3819
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3822,
              "end": 3829
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3818,
            "end": 3829
          }
        ],
        "start": 3817,
        "end": 3830
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3842,
                    "end": 3843
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
                          "name": "c",
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
                                "start": 3849,
                                "end": 3850
                              },
                              "typeArguments": null,
                              "start": 3849,
                              "end": 3850
                            },
                            "start": 3847,
                            "end": 3850
                          },
                          "start": 3846,
                          "end": 3850
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 3855,
                          "end": 3859
                        },
                        "start": 3852,
                        "end": 3859
                      },
                      "start": 3845,
                      "end": 3859
                    },
                    "start": 3843,
                    "end": 3859
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3842,
                  "end": 3860
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
                    "start": 3861,
                    "end": 3862
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3870,
                            "end": 3871
                          },
                          "typeArguments": null,
                          "start": 3870,
                          "end": 3871
                        },
                        "start": 3867,
                        "end": 3871
                      },
                      "start": 3864,
                      "end": 3871
                    },
                    "start": 3862,
                    "end": 3871
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3861,
                  "end": 3871
                }
              ],
              "start": 3840,
              "end": 3873
            },
            "start": 3838,
            "end": 3873
          },
          "start": 3831,
          "end": 3873
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3875,
        "end": 3877
      },
      "expression": false,
      "start": 3799,
      "end": 3877
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test53924",
          "optional": false,
          "typeAnnotation": null,
          "start": 3879,
          "end": 3888
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3893,
                  "end": 3894
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3897,
                      "end": 3898
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3909,
                          "end": 3910
                        },
                        "directive": null,
                        "start": 3909,
                        "end": 3911
                      }
                    ],
                    "start": 3903,
                    "end": 3926
                  },
                  "id": null,
                  "generator": false,
                  "start": 3896,
                  "end": 3926
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3893,
                "end": 3926
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3930,
                  "end": 3931
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 3939,
                    "end": 3942
                  },
                  "id": null,
                  "generator": false,
                  "start": 3933,
                  "end": 3942
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3930,
                "end": 3942
              }
            ],
            "start": 3889,
            "end": 3945
          }
        ],
        "optional": false,
        "start": 3879,
        "end": 3946
      },
      "directive": null,
      "start": 3879,
      "end": 3947
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test53924",
          "optional": false,
          "typeAnnotation": null,
          "start": 3949,
          "end": 3958
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3963,
                  "end": 3964
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 3972,
                    "end": 3975
                  },
                  "id": null,
                  "generator": false,
                  "start": 3966,
                  "end": 3975
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3963,
                "end": 3975
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3979,
                  "end": 3980
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3983,
                      "end": 3984
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4002,
                          "end": 4003
                        },
                        "start": 3995,
                        "end": 4004
                      }
                    ],
                    "start": 3989,
                    "end": 4018
                  },
                  "id": null,
                  "generator": false,
                  "start": 3982,
                  "end": 4018
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3979,
                "end": 4018
              }
            ],
            "start": 3959,
            "end": 4021
          }
        ],
        "optional": false,
        "start": 3949,
        "end": 4022
      },
      "directive": null,
      "start": 3949,
      "end": 4023
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test53924",
          "optional": false,
          "typeAnnotation": null,
          "start": 4025,
          "end": 4034
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4039,
                  "end": 4040
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
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 4056,
                          "end": 4059
                        },
                        "start": 4049,
                        "end": 4060
                      }
                    ],
                    "start": 4043,
                    "end": 4064
                  },
                  "expression": false,
                  "start": 4040,
                  "end": 4064
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4039,
                "end": 4064
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4068,
                  "end": 4069
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4070,
                      "end": 4071
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4086,
                          "end": 4087
                        },
                        "start": 4079,
                        "end": 4088
                      }
                    ],
                    "start": 4073,
                    "end": 4102
                  },
                  "expression": false,
                  "start": 4069,
                  "end": 4102
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4068,
                "end": 4102
              }
            ],
            "start": 4035,
            "end": 4105
          }
        ],
        "optional": false,
        "start": 4025,
        "end": 4106
      },
      "directive": null,
      "start": 4025,
      "end": 4107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test53924",
          "optional": false,
          "typeAnnotation": null,
          "start": 4109,
          "end": 4118
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4123,
                  "end": 4124
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4125,
                      "end": 4126
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4141,
                          "end": 4142
                        },
                        "start": 4134,
                        "end": 4143
                      }
                    ],
                    "start": 4128,
                    "end": 4157
                  },
                  "expression": false,
                  "start": 4124,
                  "end": 4157
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4123,
                "end": 4157
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4161,
                  "end": 4162
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
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 4178,
                          "end": 4181
                        },
                        "start": 4171,
                        "end": 4182
                      }
                    ],
                    "start": 4165,
                    "end": 4186
                  },
                  "expression": false,
                  "start": 4162,
                  "end": 4186
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4161,
                "end": 4186
              }
            ],
            "start": 4119,
            "end": 4189
          }
        ],
        "optional": false,
        "start": 4109,
        "end": 4190
      },
      "directive": null,
      "start": 4109,
      "end": 4191
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "monitor",
        "optional": false,
        "typeAnnotation": null,
        "start": 4266,
        "end": 4273
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
              "start": 4274,
              "end": 4275
            },
            "constraint": {
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
                    "start": 4288,
                    "end": 4292
                  },
                  "optional": false,
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
                  "value": null,
                  "start": 4285,
                  "end": 4297
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4302,
                  "end": 4305
                },
                "start": 4299,
                "end": 4305
              },
              "start": 4284,
              "end": 4305
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4274,
            "end": 4305
          }
        ],
        "start": 4273,
        "end": 4306
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "extractor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "start": 4325,
                    "end": 4329
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4331,
                        "end": 4341
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
                              "start": 4342,
                              "end": 4343
                            },
                            "typeArguments": null,
                            "start": 4342,
                            "end": 4343
                          }
                        ],
                        "start": 4341,
                        "end": 4344
                      },
                      "start": 4331,
                      "end": 4344
                    },
                    "start": 4329,
                    "end": 4344
                  },
                  "value": null,
                  "start": 4322,
                  "end": 4344
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4349,
                    "end": 4355
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4356,
                        "end": 4362
                      },
                      {
                        "type": "TSUnknownKeyword",
                        "start": 4364,
                        "end": 4371
                      }
                    ],
                    "start": 4355,
                    "end": 4372
                  },
                  "start": 4349,
                  "end": 4372
                },
                "start": 4346,
                "end": 4372
              },
              "start": 4321,
              "end": 4372
            },
            "start": 4319,
            "end": 4372
          },
          "start": 4310,
          "end": 4372
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "executor",
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
                "start": 4386,
                "end": 4387
              },
              "typeArguments": null,
              "start": 4386,
              "end": 4387
            },
            "start": 4384,
            "end": 4387
          },
          "start": 4376,
          "end": 4387
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
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
                "start": 4396,
                "end": 4400
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4402,
                    "end": 4412
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
                          "start": 4413,
                          "end": 4414
                        },
                        "typeArguments": null,
                        "start": 4413,
                        "end": 4414
                      }
                    ],
                    "start": 4412,
                    "end": 4415
                  },
                  "start": 4402,
                  "end": 4415
                },
                "start": 4400,
                "end": 4415
              },
              "value": null,
              "start": 4393,
              "end": 4415
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReturnType",
                "optional": false,
                "typeAnnotation": null,
                "start": 4420,
                "end": 4430
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
                      "start": 4431,
                      "end": 4432
                    },
                    "typeArguments": null,
                    "start": 4431,
                    "end": 4432
                  }
                ],
                "start": 4430,
                "end": 4433
              },
              "start": 4420,
              "end": 4433
            },
            "start": 4417,
            "end": 4433
          },
          "start": 4392,
          "end": 4433
        },
        "start": 4390,
        "end": 4433
      },
      "body": null,
      "expression": false,
      "start": 4249,
      "end": 4434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "monitor",
          "optional": false,
          "typeAnnotation": null,
          "start": 4436,
          "end": 4443
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
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4448,
                "end": 4449
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4457,
                    "end": 4458
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4457,
                    "end": 4458
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 4457,
                  "end": 4458
                }
              ],
              "start": 4455,
              "end": 4460
            },
            "id": null,
            "generator": false,
            "start": 4447,
            "end": 4461
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
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 4486,
                    "end": 4492
                  },
                  "start": 4484,
                  "end": 4492
                },
                "start": 4483,
                "end": 4492
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 4497,
              "end": 4498
            },
            "id": null,
            "generator": false,
            "start": 4482,
            "end": 4498
          }
        ],
        "optional": false,
        "start": 4436,
        "end": 4501
      },
      "directive": null,
      "start": 4436,
      "end": 4502
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "monitor",
          "optional": false,
          "typeAnnotation": null,
          "start": 4503,
          "end": 4510
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
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4515,
                "end": 4516
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4524,
                    "end": 4525
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4524,
                    "end": 4525
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 4524,
                  "end": 4525
                }
              ],
              "start": 4522,
              "end": 4527
            },
            "id": null,
            "generator": false,
            "start": 4514,
            "end": 4528
          },
          {
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
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 4562,
                    "end": 4568
                  },
                  "start": 4560,
                  "end": 4568
                },
                "start": 4559,
                "end": 4568
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4583,
                    "end": 4584
                  },
                  "start": 4576,
                  "end": 4585
                }
              ],
              "start": 4570,
              "end": 4589
            },
            "expression": false,
            "start": 4549,
            "end": 4589
          }
        ],
        "optional": false,
        "start": 4503,
        "end": 4592
      },
      "directive": null,
      "start": 4503,
      "end": 4593
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 4593
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 65,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "TestConfig",
    "start": 74,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 85,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 91,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 99,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 149,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 166,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 172,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 190,
    "end": 191
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 197,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 211,
    "end": 212
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 220,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 230,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "TestConfig",
    "start": 237,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 260,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 276,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 296,
    "end": 302
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 318,
    "end": 319
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "TestConfig",
    "start": 332,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 355,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 371,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 391,
    "end": 397
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 413,
    "end": 414
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 493,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "SubscribeFieldOptions",
    "start": 503,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 525,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "subscribe",
    "start": 536,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
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
    "value": "=>",
    "start": 550,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 553,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 562,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 572,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 579,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 586,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 589,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 600,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 608,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 617,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 631,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 641,
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
    "value": "SubscribeFieldOptions",
    "start": 650,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 672,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 683,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 690,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 708,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 718,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 725,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 728,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "subscribe",
    "start": 747,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 765,
    "end": 771
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 783,
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
    "value": "defineOptions",
    "start": 787,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 805,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 815,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 822,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 825,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "subscribe",
    "start": 844,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 853,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 855,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 873,
    "end": 879
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 880,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ")",
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
    "type": "Keyword",
    "value": "export",
    "start": 952,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 959,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "StateFunction",
    "start": 964,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 978,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 991,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1001,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1007,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1010,
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
    "value": ")",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1014,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1017,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1023,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1030,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "VuexStoreOptions",
    "start": 1035,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1052,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "Modules",
    "start": 1059,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1074,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1082,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1094,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1097,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1112,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "mutations",
    "start": 1123,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1135,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1142,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "StateFunction",
    "start": 1150,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1164,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "modules",
    "start": 1175,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1194,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1197,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "Modules",
    "start": 1203,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1210,
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
    "value": "VuexStoreOptions",
    "start": 1213,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "Modules",
    "start": 1230,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1242,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1259,
    "end": 1265
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1266,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "createStore",
    "start": 1275,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1290,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1296,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1304,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1311,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1319,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "Modules",
    "start": 1331,
    "end": 1338
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1339,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1347,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1354,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1362,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1369,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1377,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1390,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "VuexStoreOptions",
    "start": 1399,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1416,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "Modules",
    "start": 1423,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1437,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "store",
    "start": 1443,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "createStore",
    "start": 1451,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1467,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1481,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1490,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "mutations",
    "start": 1508,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "inc",
    "start": 1521,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "state123",
    "start": 1527,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1537,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "state123",
    "start": 1540,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1549,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1553,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "modules",
    "start": 1561,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1576,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1589,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1607,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1616,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "mutations",
    "start": 1642,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "inc",
    "start": 1655,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1661,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1668,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1671,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1677,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1681,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1761,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "Methods",
    "start": 1771,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "Attached",
    "start": 1780,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "methods",
    "start": 1792,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "Methods",
    "start": 1801,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1810,
    "end": 1812
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1813,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1819,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "methods",
    "start": 1832,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "Methods",
    "start": 1841,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "attached",
    "start": 1852,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "Attached",
    "start": 1862,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1875,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1878,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1884,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1888,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1906,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1914,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "attached",
    "start": 1928,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "methods",
    "start": 1937,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "methods",
    "start": 1952,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "bbb",
    "start": 1960,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "methods",
    "start": 1980,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "bbb",
    "start": 1995,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 2015,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "attached",
    "start": 2029,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "methods",
    "start": 2038,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "methods",
    "start": 2053,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "bbb",
    "start": 2061,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "methods",
    "start": 2081,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "bbb",
    "start": 2096,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2104,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2178,
    "end": 2185
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2186,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "create56067",
    "start": 2195,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2210,
    "end": 2215
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2216,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2224,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2231,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2239,
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
    "value": "Data",
    "start": 2247,
    "end": 2251
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2252,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2260,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2267,
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
    "value": "any",
    "start": 2275,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 2283,
    "end": 2290
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2291,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2300,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2307,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2314,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2320,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2326,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2329,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2336,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2344,
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
    "value": ",",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2352,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "getState",
    "start": 2360,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2373,
    "end": 2375
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2376,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "actions",
    "start": 2383,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 2392,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "getData",
    "start": 2401,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2413,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2416,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2425,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "create56067",
    "start": 2432,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "getState",
    "start": 2448,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2465,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "getData",
    "start": 2489,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2501,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2510,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "actions",
    "start": 2534,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2542,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2549,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2561,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2588,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2615,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2709,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "NonStringIterable",
    "start": 2714,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2742,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2750,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2759,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2769,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 2777,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2786,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2797,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2805,
    "end": 2812
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2813,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 2822,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2837,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Identifier",
    "value": "NonStringIterable",
    "start": 2844,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2871,
    "end": 2876
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2883,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 2896,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 2908,
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
    "value": ";",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 2927,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "String",
    "value": "'v'",
    "start": 2940,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 2953,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2967,
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
    "value": ";",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 2977,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2992,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3069,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 3074,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3088,
    "end": 3093
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3098,
    "end": 3102
  },
  {
    "type": "Identifier",
    "value": "ExtractFields",
    "start": 3103,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 3117,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 3128,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3142,
    "end": 3144
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3145,
    "end": 3150
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 3151,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 3161,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3172,
    "end": 3179
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3180,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3189,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 3195,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3208,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3219,
    "end": 3223
  },
  {
    "type": "Identifier",
    "value": "SetType",
    "start": 3224,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 3232,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3248,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3253,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3262,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 3269,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Identifier",
    "value": "ExtractFields",
    "start": 3278,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 3292,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3306,
    "end": 3313
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3314,
    "end": 3322
  },
  {
    "type": "Identifier",
    "value": "test55124",
    "start": 3323,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Identifier",
    "value": "OptionsData",
    "start": 3333,
    "end": 3344
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3345,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "SetType",
    "start": 3353,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3360,
    "end": 3361
  },
  {
    "type": "Identifier",
    "value": "OptionsData",
    "start": 3361,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 3378,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Identifier",
    "value": "OptionsData",
    "start": 3387,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3403,
    "end": 3407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Identifier",
    "value": "test55124",
    "start": 3410,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 3424,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3430,
    "end": 3431
  },
  {
    "type": "String",
    "value": "\"$test4\"",
    "start": 3432,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Identifier",
    "value": "data1",
    "start": 3450,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Identifier",
    "value": "$test1",
    "start": 3463,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Numeric",
    "value": "111",
    "start": 3471,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "$test2",
    "start": 3480,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3488,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3492,
    "end": 3493
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
    "type": "Identifier",
    "value": "data2",
    "start": 3501,
    "end": 3506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3506,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Identifier",
    "value": "$test3",
    "start": 3514,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3522,
    "end": 3523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Identifier",
    "value": "$test4",
    "start": 3530,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3541,
    "end": 3543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3544,
    "end": 3545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3545,
    "end": 3546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Identifier",
    "value": "$test5",
    "start": 3552,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Identifier",
    "value": "test55124",
    "start": 3575,
    "end": 3584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3584,
    "end": 3585
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3585,
    "end": 3586
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 3589,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "String",
    "value": "\"$test6\"",
    "start": 3597,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Identifier",
    "value": "data1",
    "start": 3618,
    "end": 3623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "$test1",
    "start": 3631,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Numeric",
    "value": "111",
    "start": 3639,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Identifier",
    "value": "$test2",
    "start": 3648,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3656,
    "end": 3660
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Identifier",
    "value": "data2",
    "start": 3669,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Identifier",
    "value": "$test3",
    "start": 3682,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3688,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Identifier",
    "value": "$test4",
    "start": 3698,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3709,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3714,
    "end": 3715
  },
  {
    "type": "Identifier",
    "value": "$test5",
    "start": 3720,
    "end": 3726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3726,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3729,
    "end": 3730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3730,
    "end": 3731
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3740,
    "end": 3741
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3799,
    "end": 3807
  },
  {
    "type": "Identifier",
    "value": "test53924",
    "start": 3808,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3822,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3830,
    "end": 3831
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 3831,
    "end": 3838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3842,
    "end": 3843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3849,
    "end": 3850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3852,
    "end": 3854
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3855,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3865,
    "end": 3866
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3867,
    "end": 3869
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3870,
    "end": 3871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Identifier",
    "value": "test53924",
    "start": 3879,
    "end": 3888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3889,
    "end": 3890
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3893,
    "end": 3894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3896,
    "end": 3897
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3897,
    "end": 3898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3898,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3900,
    "end": 3902
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3930,
    "end": 3931
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3931,
    "end": 3932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3934,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3936,
    "end": 3938
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3939,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3946,
    "end": 3947
  },
  {
    "type": "Identifier",
    "value": "test53924",
    "start": 3949,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3963,
    "end": 3964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3964,
    "end": 3965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3966,
    "end": 3967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3967,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3969,
    "end": 3971
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3972,
    "end": 3975
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3975,
    "end": 3976
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3979,
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
    "type": "Identifier",
    "value": "c",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3986,
    "end": 3988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3995,
    "end": 4001
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4018,
    "end": 4019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4020,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Identifier",
    "value": "test53924",
    "start": 4025,
    "end": 4034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4035,
    "end": 4036
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4040,
    "end": 4041
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 4049,
    "end": 4055
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 4056,
    "end": 4059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4059,
    "end": 4060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4064,
    "end": 4065
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4068,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4073,
    "end": 4074
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4079,
    "end": 4085
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4086,
    "end": 4087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4087,
    "end": 4088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4101,
    "end": 4102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4102,
    "end": 4103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4106,
    "end": 4107
  },
  {
    "type": "Identifier",
    "value": "test53924",
    "start": 4109,
    "end": 4118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4119,
    "end": 4120
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4123,
    "end": 4124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4134,
    "end": 4140
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4156,
    "end": 4157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4157,
    "end": 4158
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4161,
    "end": 4162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4162,
    "end": 4163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4165,
    "end": 4166
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4171,
    "end": 4177
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 4178,
    "end": 4181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4181,
    "end": 4182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4186,
    "end": 4187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4188,
    "end": 4189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4189,
    "end": 4190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4190,
    "end": 4191
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4249,
    "end": 4256
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4257,
    "end": 4265
  },
  {
    "type": "Identifier",
    "value": "monitor",
    "start": 4266,
    "end": 4273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4273,
    "end": 4274
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4274,
    "end": 4275
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4276,
    "end": 4283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4284,
    "end": 4285
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4285,
    "end": 4288
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4288,
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
    "value": ")",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4299,
    "end": 4301
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4302,
    "end": 4305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4305,
    "end": 4306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4306,
    "end": 4307
  },
  {
    "type": "Identifier",
    "value": "extractor",
    "start": 4310,
    "end": 4319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4319,
    "end": 4320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4321,
    "end": 4322
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4322,
    "end": 4325
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4325,
    "end": 4329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4329,
    "end": 4330
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 4331,
    "end": 4341
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4341,
    "end": 4342
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4342,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4346,
    "end": 4348
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 4349,
    "end": 4355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4356,
    "end": 4362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4362,
    "end": 4363
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4364,
    "end": 4371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4372,
    "end": 4373
  },
  {
    "type": "Identifier",
    "value": "executor",
    "start": 4376,
    "end": 4384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4384,
    "end": 4385
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4386,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4389,
    "end": 4390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4390,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4393,
    "end": 4396
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4396,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4400,
    "end": 4401
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 4402,
    "end": 4412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4412,
    "end": 4413
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4413,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4417,
    "end": 4419
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 4420,
    "end": 4430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4431,
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
    "value": ";",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Identifier",
    "value": "monitor",
    "start": 4436,
    "end": 4443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4443,
    "end": 4444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4448,
    "end": 4449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4449,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4451,
    "end": 4453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4454,
    "end": 4455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4455,
    "end": 4456
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4457,
    "end": 4458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4459,
    "end": 4460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4460,
    "end": 4461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4461,
    "end": 4462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4482,
    "end": 4483
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4483,
    "end": 4484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4484,
    "end": 4485
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4486,
    "end": 4492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4492,
    "end": 4493
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4494,
    "end": 4496
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4497,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4500,
    "end": 4501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4501,
    "end": 4502
  },
  {
    "type": "Identifier",
    "value": "monitor",
    "start": 4503,
    "end": 4510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4510,
    "end": 4511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4514,
    "end": 4515
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4515,
    "end": 4516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4516,
    "end": 4517
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4518,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4524,
    "end": 4525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4526,
    "end": 4527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4527,
    "end": 4528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4549,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4558,
    "end": 4559
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4559,
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
    "value": "number",
    "start": 4562,
    "end": 4568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4568,
    "end": 4569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4570,
    "end": 4571
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4576,
    "end": 4582
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4583,
    "end": 4584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4584,
    "end": 4585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4588,
    "end": 4589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4589,
    "end": 4590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4591,
    "end": 4592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4592,
    "end": 4593
  }
]
```

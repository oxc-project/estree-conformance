__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 77,
                  "end": 83
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 86,
                  "end": 95
                }
              ],
              "start": 77,
              "end": 95
            },
            "start": 75,
            "end": 95
          },
          "start": 72,
          "end": 95
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 109
              },
              "prefix": true,
              "start": 105,
              "end": 109
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 126
                },
                "typeArguments": null,
                "arguments": [],
                "start": 117,
                "end": 128
              },
              "start": 111,
              "end": 129
            },
            "alternate": null,
            "start": 101,
            "end": 129
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 141,
              "end": 145
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 161
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 173
                      },
                      "optional": false,
                      "computed": false,
                      "start": 158,
                      "end": 173
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 158,
                    "end": 175
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 180,
                    "end": 183
                  },
                  "start": 158,
                  "end": 183
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 198,
                      "end": 201
                    },
                    "start": 191,
                    "end": 202
                  }
                ],
                "start": 153,
                "end": 202
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 213,
                        "end": 216
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 228
                      },
                      "optional": false,
                      "computed": false,
                      "start": 213,
                      "end": 228
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 213,
                    "end": 230
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 235,
                    "end": 238
                  },
                  "start": 213,
                  "end": 238
                },
                "consequent": [],
                "start": 208,
                "end": 239
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 252
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 253,
                        "end": 264
                      },
                      "optional": false,
                      "computed": false,
                      "start": 249,
                      "end": 264
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 249,
                    "end": 266
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "C",
                    "raw": "\"C\"",
                    "start": 271,
                    "end": 274
                  },
                  "start": 249,
                  "end": 274
                },
                "consequent": [],
                "start": 244,
                "end": 275
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 288
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 289,
                        "end": 300
                      },
                      "optional": false,
                      "computed": false,
                      "start": 285,
                      "end": 300
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 285,
                    "end": 302
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "D",
                    "raw": "\"D\"",
                    "start": 307,
                    "end": 310
                  },
                  "start": 285,
                  "end": 310
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "B, C or D",
                      "raw": "\"B, C or D\"",
                      "start": 325,
                      "end": 336
                    },
                    "start": 318,
                    "end": 337
                  }
                ],
                "start": 280,
                "end": 337
              }
            ],
            "start": 133,
            "end": 341
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "Not A, B, C or D",
              "raw": "\"Not A, B, C or D\"",
              "start": 352,
              "end": 370
            },
            "start": 345,
            "end": 371
          }
        ],
        "start": 97,
        "end": 373
      },
      "expression": false,
      "start": 57,
      "end": 373
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
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
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 395,
                  "end": 401
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 404,
                  "end": 413
                }
              ],
              "start": 395,
              "end": 413
            },
            "start": 393,
            "end": 413
          },
          "start": 390,
          "end": 413
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 427
              },
              "prefix": true,
              "start": 423,
              "end": 427
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 444
                },
                "typeArguments": null,
                "arguments": [],
                "start": 435,
                "end": 446
              },
              "start": 429,
              "end": 447
            },
            "alternate": null,
            "start": 419,
            "end": 447
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 459,
              "end": 463
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 476,
                        "end": 479
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 480,
                        "end": 491
                      },
                      "optional": false,
                      "computed": false,
                      "start": 476,
                      "end": 491
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 476,
                    "end": 493
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 498,
                    "end": 501
                  },
                  "start": 476,
                  "end": 501
                },
                "consequent": [],
                "start": 471,
                "end": 502
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 512,
                        "end": 515
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 527
                      },
                      "optional": false,
                      "computed": false,
                      "start": 512,
                      "end": 527
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 512,
                    "end": 529
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 534,
                    "end": 537
                  },
                  "start": 512,
                  "end": 537
                },
                "consequent": [],
                "start": 507,
                "end": 538
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 548,
                        "end": 551
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 552,
                        "end": 563
                      },
                      "optional": false,
                      "computed": false,
                      "start": 548,
                      "end": 563
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 548,
                    "end": 565
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "C",
                    "raw": "\"C\"",
                    "start": 570,
                    "end": 573
                  },
                  "start": 548,
                  "end": 573
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "A, B or C",
                      "raw": "\"A, B or C\"",
                      "start": 588,
                      "end": 599
                    },
                    "start": 581,
                    "end": 600
                  }
                ],
                "start": 543,
                "end": 600
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 610,
                        "end": 613
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 625
                      },
                      "optional": false,
                      "computed": false,
                      "start": 610,
                      "end": 625
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 610,
                    "end": 627
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "D",
                    "raw": "\"D\"",
                    "start": 632,
                    "end": 635
                  },
                  "start": 610,
                  "end": 635
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "D",
                      "raw": "\"D\"",
                      "start": 650,
                      "end": 653
                    },
                    "start": 643,
                    "end": 654
                  }
                ],
                "start": 605,
                "end": 654
              }
            ],
            "start": 451,
            "end": 658
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "Not A, B, C or D",
              "raw": "\"Not A, B, C or D\"",
              "start": 669,
              "end": 687
            },
            "start": 662,
            "end": 688
          }
        ],
        "start": 415,
        "end": 690
      },
      "expression": false,
      "start": 375,
      "end": 690
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 701,
        "end": 706
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 723,
                        "end": 727
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 729,
                            "end": 732
                          },
                          "start": 729,
                          "end": 732
                        },
                        "start": 727,
                        "end": 732
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 723,
                      "end": 733
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
                        "start": 734,
                        "end": 738
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 740,
                          "end": 746
                        },
                        "start": 738,
                        "end": 746
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 734,
                      "end": 746
                    }
                  ],
                  "start": 721,
                  "end": 748
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 757,
                        "end": 761
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 763,
                            "end": 766
                          },
                          "start": 763,
                          "end": 766
                        },
                        "start": 761,
                        "end": 766
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 757,
                      "end": 767
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
                        "start": 768,
                        "end": 772
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 774,
                          "end": 780
                        },
                        "start": 772,
                        "end": 780
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 768,
                      "end": 780
                    }
                  ],
                  "start": 755,
                  "end": 782
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 791,
                        "end": 795
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\"",
                            "start": 797,
                            "end": 800
                          },
                          "start": 797,
                          "end": 800
                        },
                        "start": 795,
                        "end": 800
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 791,
                      "end": 801
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
                        "start": 802,
                        "end": 806
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 808,
                          "end": 815
                        },
                        "start": 806,
                        "end": 815
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 802,
                      "end": 815
                    }
                  ],
                  "start": 789,
                  "end": 817
                }
              ],
              "start": 719,
              "end": 817
            },
            "start": 713,
            "end": 817
          },
          "start": 710,
          "end": 817
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": true,
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 833,
                    "end": 837
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 839,
                        "end": 842
                      },
                      "start": 839,
                      "end": 842
                    },
                    "start": 837,
                    "end": 842
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 833,
                  "end": 843
                }
              ],
              "start": 827,
              "end": 847
            },
            "start": 825,
            "end": 847
          },
          "start": 821,
          "end": 847
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 860,
                "end": 863
              },
              "prefix": true,
              "start": 859,
              "end": 863
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 871,
                  "end": 878
                }
              ],
              "start": 865,
              "end": 882
            },
            "alternate": null,
            "start": 855,
            "end": 882
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 894,
                "end": 897
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 898,
                "end": 902
              },
              "optional": false,
              "computed": false,
              "start": 894,
              "end": 902
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 915,
                  "end": 918
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 926,
                    "end": 933
                  }
                ],
                "start": 910,
                "end": 933
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 943,
                    "end": 946
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 947,
                    "end": 951
                  },
                  "optional": false,
                  "computed": false,
                  "start": 943,
                  "end": 951
                },
                "consequent": [],
                "start": 938,
                "end": 952
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 962,
                  "end": 965
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 973,
                    "end": 980
                  }
                ],
                "start": 957,
                "end": 980
              }
            ],
            "start": 886,
            "end": 984
          }
        ],
        "start": 851,
        "end": 986
      },
      "expression": false,
      "start": 692,
      "end": 986
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 986
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 57,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 86,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
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
    "value": "if",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 111,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 153,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 162,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 176,
    "end": 179
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 191,
    "end": 197
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 198,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 208,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 217,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 231,
    "end": 234
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 244,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 253,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 267,
    "end": 270
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 271,
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
    "value": "case",
    "start": 280,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 285,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 289,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 303,
    "end": 306
  },
  {
    "type": "String",
    "value": "\"D\"",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 318,
    "end": 324
  },
  {
    "type": "String",
    "value": "\"B, C or D\"",
    "start": 325,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 345,
    "end": 351
  },
  {
    "type": "String",
    "value": "\"Not A, B, C or D\"",
    "start": 352,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 375,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 384,
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
    "value": "arg",
    "start": 390,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 395,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 404,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 424,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 429,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 435,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 439,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 459,
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
    "value": "case",
    "start": 471,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 476,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 480,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 494,
    "end": 497
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 498,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 507,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 516,
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
    "value": "===",
    "start": 530,
    "end": 533
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 534,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 543,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 552,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 566,
    "end": 569
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 581,
    "end": 587
  },
  {
    "type": "String",
    "value": "\"A, B or C\"",
    "start": 588,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 605,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 614,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 628,
    "end": 631
  },
  {
    "type": "String",
    "value": "\"D\"",
    "start": 632,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 643,
    "end": 649
  },
  {
    "type": "String",
    "value": "\"D\"",
    "start": 650,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 662,
    "end": 668
  },
  {
    "type": "String",
    "value": "\"Not A, B, C or D\"",
    "start": 669,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 692,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 701,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 710,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 723,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 729,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 734,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 740,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 757,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 763,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 768,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 774,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 791,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 797,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 802,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 808,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 821,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 833,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 839,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 855,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 860,
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
    "value": "{",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 871,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 886,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 894,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 898,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 910,
    "end": 914
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 915,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 926,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 938,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 943,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 947,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 957,
    "end": 961
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 962,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 965,
    "end": 966
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 973,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 985,
    "end": 986
  }
]
```

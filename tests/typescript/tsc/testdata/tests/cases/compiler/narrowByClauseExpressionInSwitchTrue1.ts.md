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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 72
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 74,
                  "end": 77
                },
                "start": 74,
                "end": 77
              },
              "start": 72,
              "end": 77
            },
            "accessibility": null,
            "static": false,
            "start": 68,
            "end": 77
          }
        ],
        "start": 66,
        "end": 79
      },
      "declare": false,
      "start": 57,
      "end": 80
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 87
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 96
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 98,
                  "end": 101
                },
                "start": 98,
                "end": 101
              },
              "start": 96,
              "end": 101
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 101
          }
        ],
        "start": 90,
        "end": 103
      },
      "declare": false,
      "start": 81,
      "end": 104
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AorB",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 114
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "typeArguments": null,
            "start": 117,
            "end": 118
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "typeArguments": null,
            "start": 121,
            "end": 122
          }
        ],
        "start": 117,
        "end": 122
      },
      "declare": false,
      "start": 105,
      "end": 123
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
            "name": "isA",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 134
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                      "name": "AorB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 145
                    },
                    "typeArguments": null,
                    "start": 141,
                    "end": 145
                  },
                  "start": 139,
                  "end": 145
                },
                "start": 138,
                "end": 145
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 149
                },
                "asserts": false,
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
                      "start": 153,
                      "end": 154
                    },
                    "typeArguments": null,
                    "start": 153,
                    "end": 154
                  },
                  "start": 153,
                  "end": 154
                },
                "start": 148,
                "end": 154
              },
              "start": 146,
              "end": 154
            },
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 159
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 164
                },
                "optional": false,
                "computed": false,
                "start": 158,
                "end": 164
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 169,
                "end": 172
              },
              "start": 158,
              "end": 172
            },
            "id": null,
            "generator": false,
            "start": 137,
            "end": 172
          },
          "definite": false,
          "start": 131,
          "end": 172
        }
      ],
      "declare": false,
      "start": 125,
      "end": 173
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
            "name": "isB",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 183
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                      "name": "AorB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 194
                    },
                    "typeArguments": null,
                    "start": 190,
                    "end": 194
                  },
                  "start": 188,
                  "end": 194
                },
                "start": 187,
                "end": 194
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 198
                },
                "asserts": false,
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
                      "start": 202,
                      "end": 203
                    },
                    "typeArguments": null,
                    "start": 202,
                    "end": 203
                  },
                  "start": 202,
                  "end": 203
                },
                "start": 197,
                "end": 203
              },
              "start": 195,
              "end": 203
            },
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 208
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 213
                },
                "optional": false,
                "computed": false,
                "start": 207,
                "end": 213
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 218,
                "end": 221
              },
              "start": 207,
              "end": 221
            },
            "id": null,
            "generator": false,
            "start": 186,
            "end": 221
          },
          "definite": false,
          "start": 180,
          "end": 221
        }
      ],
      "declare": false,
      "start": 174,
      "end": 222
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 238
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AorB",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 246
              },
              "typeArguments": null,
              "start": 242,
              "end": 246
            },
            "start": 240,
            "end": 246
          },
          "start": 239,
          "end": 246
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 260,
              "end": 264
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 280
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 282
                    }
                  ],
                  "optional": false,
                  "start": 277,
                  "end": 283
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 292
                    },
                    "directive": null,
                    "start": 291,
                    "end": 293
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 300,
                    "end": 306
                  }
                ],
                "start": 272,
                "end": 306
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 319
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 320,
                      "end": 321
                    }
                  ],
                  "optional": false,
                  "start": 316,
                  "end": 322
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 330,
                      "end": 331
                    },
                    "directive": null,
                    "start": 330,
                    "end": 332
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 339,
                    "end": 345
                  }
                ],
                "start": 311,
                "end": 345
              }
            ],
            "start": 252,
            "end": 349
          }
        ],
        "start": 248,
        "end": 351
      },
      "expression": false,
      "start": 224,
      "end": 351
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 367
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AorB",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 375
              },
              "typeArguments": null,
              "start": 371,
              "end": 375
            },
            "start": 369,
            "end": 375
          },
          "start": 368,
          "end": 375
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 389,
              "end": 393
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 406,
                    "end": 409
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 411
                    }
                  ],
                  "optional": false,
                  "start": 406,
                  "end": 412
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 421
                    },
                    "directive": null,
                    "start": 420,
                    "end": 422
                  }
                ],
                "start": 401,
                "end": 422
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 451,
                    "end": 454
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 456
                    }
                  ],
                  "optional": false,
                  "start": 451,
                  "end": 457
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 466
                    },
                    "directive": null,
                    "start": 465,
                    "end": 467
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 474,
                    "end": 480
                  }
                ],
                "start": 446,
                "end": 480
              }
            ],
            "start": 381,
            "end": 484
          }
        ],
        "start": 377,
        "end": 486
      },
      "expression": false,
      "start": 353,
      "end": 486
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 495,
                    "end": 501
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 504,
                    "end": 513
                  }
                ],
                "start": 495,
                "end": 513
              },
              "start": 493,
              "end": 513
            },
            "start": 492,
            "end": 513
          },
          "init": null,
          "definite": false,
          "start": 492,
          "end": 513
        }
      ],
      "declare": false,
      "start": 488,
      "end": 514
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 524,
        "end": 528
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
                "end": 547
              },
              "prefix": true,
              "start": 539,
              "end": 547
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "undefined",
              "raw": "\"undefined\"",
              "start": 552,
              "end": 563
            },
            "start": 539,
            "end": 563
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 570
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "trim",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 575
                  },
                  "optional": false,
                  "computed": false,
                  "start": 569,
                  "end": 575
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 569,
                "end": 577
              },
              "directive": null,
              "start": 569,
              "end": 578
            }
          ],
          "start": 534,
          "end": 578
        }
      ],
      "start": 516,
      "end": 580
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeType",
        "optional": false,
        "typeAnnotation": null,
        "start": 587,
        "end": 595
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 600,
              "end": 604
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "SomeType",
                  "raw": "\"SomeType\"",
                  "start": 606,
                  "end": 616
                },
                "start": 606,
                "end": 616
              },
              "start": 604,
              "end": 616
            },
            "accessibility": null,
            "static": false,
            "start": 600,
            "end": 616
          }
        ],
        "start": 598,
        "end": 618
      },
      "declare": false,
      "start": 582,
      "end": 619
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isSomeType",
        "optional": false,
        "typeAnnotation": null,
        "start": 637,
        "end": 647
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnknownKeyword",
              "start": 651,
              "end": 658
            },
            "start": 649,
            "end": 658
          },
          "start": 648,
          "end": 658
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 661,
            "end": 662
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeType",
                "optional": false,
                "typeAnnotation": null,
                "start": 666,
                "end": 674
              },
              "typeArguments": null,
              "start": 666,
              "end": 674
            },
            "start": 666,
            "end": 674
          },
          "start": 661,
          "end": 674
        },
        "start": 659,
        "end": 674
      },
      "body": null,
      "expression": false,
      "start": 620,
      "end": 675
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "processInput",
        "optional": false,
        "typeAnnotation": null,
        "start": 686,
        "end": 698
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 706,
                  "end": 712
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 715,
                    "end": 721
                  },
                  "typeArguments": null,
                  "start": 715,
                  "end": 721
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SomeType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 724,
                    "end": 732
                  },
                  "typeArguments": null,
                  "start": 724,
                  "end": 732
                }
              ],
              "start": 706,
              "end": 732
            },
            "start": 704,
            "end": 732
          },
          "start": 699,
          "end": 732
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 746,
              "end": 750
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 770,
                      "end": 775
                    },
                    "prefix": true,
                    "start": 763,
                    "end": 775
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 780,
                    "end": 788
                  },
                  "start": 763,
                  "end": 788
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 796,
                      "end": 801
                    },
                    "directive": null,
                    "start": 796,
                    "end": 802
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 809,
                    "end": 815
                  }
                ],
                "start": 758,
                "end": 815
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 825,
                    "end": 830
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 848
                  },
                  "start": 825,
                  "end": 848
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 856,
                      "end": 861
                    },
                    "directive": null,
                    "start": 856,
                    "end": 862
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 869,
                    "end": 875
                  }
                ],
                "start": 820,
                "end": 875
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isSomeType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 885,
                    "end": 895
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 896,
                      "end": 901
                    }
                  ],
                  "optional": false,
                  "start": 885,
                  "end": 902
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 910,
                      "end": 915
                    },
                    "directive": null,
                    "start": 910,
                    "end": 916
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 923,
                    "end": 929
                  }
                ],
                "start": 880,
                "end": 929
              }
            ],
            "start": 738,
            "end": 933
          }
        ],
        "start": 734,
        "end": 935
      },
      "expression": false,
      "start": 677,
      "end": 935
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 935
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 81,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 105,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "AorB",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "AorB",
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
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 150,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 155,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 165,
    "end": 168
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 169,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 174,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "isB",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "AorB",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 199,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 204,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 214,
    "end": 217
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 218,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 224,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 233,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "AorB",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 260,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 272,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 311,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "isB",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 339,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 353,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 362,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "AorB",
    "start": 371,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Boolean",
    "value": "true",
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
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 401,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 406,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 446,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "isB",
    "start": 451,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 474,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 488,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 495,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 504,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 516,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 524,
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
    "value": "case",
    "start": 534,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 539,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 548,
    "end": 551
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 552,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 569,
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
    "value": "trim",
    "start": 571,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
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
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 582,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "SomeType",
    "start": 587,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "String",
    "value": "\"SomeType\"",
    "start": 606,
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
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 620,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 628,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "isSomeType",
    "start": 637,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 651,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 663,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "SomeType",
    "start": 666,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 677,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "processInput",
    "start": 686,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 699,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 706,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 715,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "SomeType",
    "start": 724,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 738,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 746,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 758,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 763,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 770,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 776,
    "end": 779
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 780,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 796,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 809,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 820,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 825,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 831,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 842,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 856,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 869,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 880,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "isSomeType",
    "start": 885,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 896,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 910,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 923,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935
  }
]
```

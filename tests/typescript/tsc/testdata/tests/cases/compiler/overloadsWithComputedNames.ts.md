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
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 68
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
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 76,
              "end": 79
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSNumberKeyword",
                      "start": 84,
                      "end": 90
                    },
                    "start": 82,
                    "end": 90
                  },
                  "start": 81,
                  "end": 90
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 93,
                  "end": 99
                },
                "start": 91,
                "end": 99
              },
              "body": null,
              "expression": false,
              "start": 80,
              "end": 100
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 75,
            "end": 100
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 106,
              "end": 109
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 114,
                          "end": 120
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 121,
                          "end": 127
                        }
                      ],
                      "start": 114,
                      "end": 127
                    },
                    "start": 112,
                    "end": 127
                  },
                  "start": 111,
                  "end": 127
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 130,
                      "end": 136
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 139,
                      "end": 145
                    }
                  ],
                  "start": 130,
                  "end": 145
                },
                "start": 128,
                "end": 145
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 161,
                      "end": 162
                    },
                    "start": 154,
                    "end": 163
                  }
                ],
                "start": 146,
                "end": 169
              },
              "expression": false,
              "start": 110,
              "end": 169
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 105,
            "end": 169
          }
        ],
        "start": 69,
        "end": 171
      },
      "abstract": false,
      "declare": false,
      "start": 56,
      "end": 171
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 177
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 190
            },
            "typeArguments": null,
            "arguments": [],
            "start": 180,
            "end": 192
          },
          "definite": false,
          "start": 176,
          "end": 192
        }
      ],
      "declare": false,
      "start": 172,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 197
          },
          "optional": false,
          "computed": false,
          "start": 194,
          "end": 197
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 198,
            "end": 199
          }
        ],
        "optional": false,
        "start": 194,
        "end": 200
      },
      "directive": null,
      "start": 194,
      "end": 200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 202
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 204
          },
          "optional": false,
          "computed": false,
          "start": 201,
          "end": 204
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 205,
            "end": 206
          }
        ],
        "optional": false,
        "start": 201,
        "end": 207
      },
      "directive": null,
      "start": 201,
      "end": 207
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 272
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
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 280,
              "end": 285
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 290,
                  "end": 294
                },
                "start": 288,
                "end": 294
              },
              "body": null,
              "expression": false,
              "start": 286,
              "end": 294
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 279,
            "end": 294
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 300,
              "end": 305
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 310,
                  "end": 314
                },
                "start": 308,
                "end": 314
              },
              "body": null,
              "expression": false,
              "start": 306,
              "end": 315
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 299,
            "end": 315
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 321,
              "end": 326
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
                      "value": 0,
                      "raw": "0",
                      "start": 347,
                      "end": 348
                    },
                    "start": 340,
                    "end": 349
                  }
                ],
                "start": 330,
                "end": 355
              },
              "expression": false,
              "start": 327,
              "end": 355
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 320,
            "end": 355
          }
        ],
        "start": 273,
        "end": 357
      },
      "abstract": false,
      "declare": false,
      "start": 265,
      "end": 357
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
            "name": "uniqueSym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 391,
                  "end": 397
                },
                "start": 384,
                "end": 397
              },
              "start": 382,
              "end": 397
            },
            "start": 373,
            "end": 397
          },
          "init": null,
          "definite": false,
          "start": 373,
          "end": 397
        }
      ],
      "declare": true,
      "start": 359,
      "end": 398
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
            "name": "uniqueSym2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 432,
                  "end": 438
                },
                "start": 425,
                "end": 438
              },
              "start": 423,
              "end": 438
            },
            "start": 413,
            "end": 438
          },
          "init": null,
          "definite": false,
          "start": 413,
          "end": 438
        }
      ],
      "declare": true,
      "start": 399,
      "end": 439
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
            "name": "sym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 459,
                "end": 465
              },
              "start": 457,
              "end": 465
            },
            "start": 454,
            "end": 465
          },
          "init": null,
          "definite": false,
          "start": 454,
          "end": 465
        }
      ],
      "declare": true,
      "start": 440,
      "end": 466
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
            "name": "strUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 492,
                      "end": 497
                    },
                    "start": 492,
                    "end": 497
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "'bar'",
                      "start": 500,
                      "end": 505
                    },
                    "start": 500,
                    "end": 505
                  }
                ],
                "start": 492,
                "end": 505
              },
              "start": 490,
              "end": 505
            },
            "start": 482,
            "end": 505
          },
          "init": null,
          "definite": false,
          "start": 482,
          "end": 505
        }
      ],
      "declare": true,
      "start": 468,
      "end": 506
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 514,
        "end": 516
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
              "name": "sym",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 527
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 532,
                  "end": 536
                },
                "start": 530,
                "end": 536
              },
              "body": null,
              "expression": false,
              "start": 528,
              "end": 537
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 523,
            "end": 537
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym2",
              "optional": false,
              "typeAnnotation": null,
              "start": 560,
              "end": 570
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 575,
                  "end": 579
                },
                "start": 573,
                "end": 579
              },
              "body": null,
              "expression": false,
              "start": 571,
              "end": 580
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 559,
            "end": 580
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 613
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 618,
                  "end": 622
                },
                "start": 616,
                "end": 622
              },
              "body": null,
              "expression": false,
              "start": 614,
              "end": 623
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 603,
            "end": 623
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 638
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
                "start": 642,
                "end": 645
              },
              "expression": false,
              "start": 639,
              "end": 645
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 628,
            "end": 645
          }
        ],
        "start": 517,
        "end": 647
      },
      "abstract": false,
      "declare": false,
      "start": 508,
      "end": 647
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 661
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 672
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 677,
                "end": 681
              },
              "start": 675,
              "end": 681
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 668,
            "end": 682
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym2",
              "optional": false,
              "typeAnnotation": null,
              "start": 705,
              "end": 715
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 720,
                "end": 724
              },
              "start": 718,
              "end": 724
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 704,
            "end": 725
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "typeAnnotation": null,
              "start": 731,
              "end": 740
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 745,
                "end": 749
              },
              "start": 743,
              "end": 749
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 730,
            "end": 750
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "typeAnnotation": null,
              "start": 756,
              "end": 765
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 770,
                "end": 774
              },
              "start": 768,
              "end": 774
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 755,
            "end": 775
          }
        ],
        "start": 662,
        "end": 777
      },
      "declare": false,
      "start": 649,
      "end": 777
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 785,
        "end": 787
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
              "name": "strUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 803
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 808,
                  "end": 812
                },
                "start": 806,
                "end": 812
              },
              "body": null,
              "expression": false,
              "start": 804,
              "end": 813
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 794,
            "end": 813
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 835,
              "end": 843
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
                "start": 847,
                "end": 850
              },
              "expression": false,
              "start": 844,
              "end": 850
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 834,
            "end": 850
          }
        ],
        "start": 788,
        "end": 852
      },
      "abstract": false,
      "declare": false,
      "start": 779,
      "end": 852
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 860,
        "end": 862
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
              "name": "strUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 878
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 883,
                  "end": 887
                },
                "start": 881,
                "end": 887
              },
              "body": null,
              "expression": false,
              "start": 879,
              "end": 888
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 869,
            "end": 888
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 918
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
                "start": 922,
                "end": 925
              },
              "expression": false,
              "start": 919,
              "end": 925
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 909,
            "end": 925
          }
        ],
        "start": 863,
        "end": 927
      },
      "abstract": false,
      "declare": false,
      "start": 854,
      "end": 927
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 935,
        "end": 937
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 945,
              "end": 946
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 951,
                  "end": 955
                },
                "start": 949,
                "end": 955
              },
              "body": null,
              "expression": false,
              "start": 947,
              "end": 956
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 944,
            "end": 956
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 979,
              "end": 980
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 985,
                  "end": 989
                },
                "start": 983,
                "end": 989
              },
              "body": null,
              "expression": false,
              "start": 981,
              "end": 990
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 978,
            "end": 990
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 996,
              "end": 997
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
                "start": 1001,
                "end": 1004
              },
              "expression": false,
              "start": 998,
              "end": 1004
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 995,
            "end": 1004
          }
        ],
        "start": 938,
        "end": 1006
      },
      "abstract": false,
      "declare": false,
      "start": 929,
      "end": 1006
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1018,
        "end": 1020
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1028,
              "end": 1029
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1034,
                "end": 1038
              },
              "start": 1032,
              "end": 1038
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1027,
            "end": 1039
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1045,
              "end": 1046
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1051,
                "end": 1055
              },
              "start": 1049,
              "end": 1055
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1044,
            "end": 1056
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1062,
              "end": 1063
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1068,
                "end": 1072
              },
              "start": 1066,
              "end": 1072
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1061,
            "end": 1073
          }
        ],
        "start": 1021,
        "end": 1075
      },
      "declare": false,
      "start": 1008,
      "end": 1075
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 1075
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 75,
    "end": 76
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 121,
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
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 154,
    "end": 160
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 265,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 279,
    "end": 280
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 280,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 290,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 299,
    "end": 300
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 320,
    "end": 321
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 321,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 340,
    "end": 346
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 359,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 367,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "uniqueSym",
    "start": 373,
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
    "value": "unique",
    "start": 384,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 391,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 399,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 407,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "uniqueSym2",
    "start": 413,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 425,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 440,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 448,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 454,
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
    "value": "symbol",
    "start": 459,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 468,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 476,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "strUnion",
    "start": 482,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 492,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 498,
    "end": 499
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 508,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 514,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 532,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "uniqueSym2",
    "start": 560,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
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
    "value": "void",
    "start": 575,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "uniqueSym",
    "start": 604,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 613,
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
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "uniqueSym",
    "start": 629,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 649,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 659,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 669,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 677,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "uniqueSym2",
    "start": 705,
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
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 720,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "uniqueSym",
    "start": 731,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 745,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "uniqueSym",
    "start": 756,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 770,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 779,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 785,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "strUnion",
    "start": 795,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 806,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 808,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "strUnion",
    "start": 835,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 854,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 860,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "strUnion",
    "start": 870,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 883,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "strUnion",
    "start": 910,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 929,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 935,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 944,
    "end": 945
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 951,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 978,
    "end": 979
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 985,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 995,
    "end": 996
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1008,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 1018,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1034,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1051,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1068,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1074,
    "end": 1075
  }
]
```

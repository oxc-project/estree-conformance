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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "value": {
              "type": "Literal",
              "value": "A",
              "raw": "'A'",
              "start": 26,
              "end": 29
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 30
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 47,
              "end": 48
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 35,
            "end": 49
          }
        ],
        "start": 8,
        "end": 51
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 60
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
              },
              "start": 68,
              "end": 76
            },
            "value": {
              "type": "Literal",
              "value": "B",
              "raw": "'B'",
              "start": 79,
              "end": 82
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 67,
            "end": 83
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 91,
                "end": 98
              },
              "start": 89,
              "end": 98
            },
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 101,
              "end": 105
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 88,
            "end": 106
          }
        ],
        "start": 61,
        "end": 108
      },
      "abstract": false,
      "declare": false,
      "start": 53,
      "end": 108
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 116
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "constraint": {
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
                    "start": 129,
                    "end": 130
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 132,
                      "end": 135
                    },
                    "start": 130,
                    "end": 135
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 129,
                  "end": 135
                }
              ],
              "start": 127,
              "end": 137
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 117,
            "end": 137
          }
        ],
        "start": 116,
        "end": 138
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 145
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 147
              },
              "typeArguments": null,
              "start": 146,
              "end": 147
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 149,
                "end": 152
              },
              "start": 149,
              "end": 152
            }
          ],
          "start": 145,
          "end": 153
        },
        "start": 141,
        "end": 153
      },
      "declare": false,
      "start": 110,
      "end": 154
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 162
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 166
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 168
              },
              "typeArguments": null,
              "start": 167,
              "end": 168
            }
          ],
          "start": 166,
          "end": 169
        },
        "start": 165,
        "end": 169
      },
      "declare": false,
      "start": 156,
      "end": 170
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 177
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 180,
          "end": 181
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 183
              },
              "typeArguments": null,
              "start": 182,
              "end": 183
            }
          ],
          "start": 181,
          "end": 184
        },
        "start": 180,
        "end": 184
      },
      "declare": false,
      "start": 171,
      "end": 185
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C_extends_D",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 203
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 207
          },
          "typeArguments": null,
          "start": 206,
          "end": 207
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 217
          },
          "typeArguments": null,
          "start": 216,
          "end": 217
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 220,
            "end": 224
          },
          "start": 220,
          "end": 224
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 227,
            "end": 232
          },
          "start": 227,
          "end": 232
        },
        "start": 206,
        "end": 232
      },
      "declare": false,
      "start": 187,
      "end": 233
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PickA_extends_PickB",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 299
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 306
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 308
                },
                "typeArguments": null,
                "start": 307,
                "end": 308
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 310,
                  "end": 313
                },
                "start": 310,
                "end": 313
              }
            ],
            "start": 306,
            "end": 314
          },
          "start": 302,
          "end": 314
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 327
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 329
                },
                "typeArguments": null,
                "start": 328,
                "end": 329
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 331,
                  "end": 334
                },
                "start": 331,
                "end": 334
              }
            ],
            "start": 327,
            "end": 335
          },
          "start": 323,
          "end": 335
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 338,
            "end": 342
          },
          "start": 338,
          "end": 342
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 345,
            "end": 350
          },
          "start": 345,
          "end": 350
        },
        "start": 302,
        "end": 350
      },
      "declare": false,
      "start": 275,
      "end": 351
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TA_extends_TB",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 381
      },
      "typeParameters": null,
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
            "start": 384,
            "end": 385
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 386,
                  "end": 387
                },
                "typeArguments": null,
                "start": 386,
                "end": 387
              }
            ],
            "start": 385,
            "end": 388
          },
          "start": 384,
          "end": 388
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 398
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 399,
                  "end": 400
                },
                "typeArguments": null,
                "start": 399,
                "end": 400
              }
            ],
            "start": 398,
            "end": 401
          },
          "start": 397,
          "end": 401
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 404,
            "end": 408
          },
          "start": 404,
          "end": 408
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 411,
            "end": 416
          },
          "start": 411,
          "end": 416
        },
        "start": 384,
        "end": 416
      },
      "declare": false,
      "start": 363,
      "end": 417
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
                  "start": 477,
                  "end": 478
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 479,
                        "end": 480
                      },
                      "typeArguments": null,
                      "start": 479,
                      "end": 480
                    }
                  ],
                  "start": 478,
                  "end": 481
                },
                "start": 477,
                "end": 481
              },
              "start": 475,
              "end": 481
            },
            "start": 474,
            "end": 481
          },
          "init": null,
          "definite": false,
          "start": 474,
          "end": 481
        }
      ],
      "declare": true,
      "start": 462,
      "end": 482
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
            "name": "b",
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
                  "start": 498,
                  "end": 499
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 500,
                        "end": 501
                      },
                      "typeArguments": null,
                      "start": 500,
                      "end": 501
                    }
                  ],
                  "start": 499,
                  "end": 502
                },
                "start": 498,
                "end": 502
              },
              "start": 496,
              "end": 502
            },
            "start": 495,
            "end": 502
          },
          "init": null,
          "definite": false,
          "start": 495,
          "end": 502
        }
      ],
      "declare": true,
      "start": 483,
      "end": 503
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
            "name": "c",
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
                  "start": 519,
                  "end": 520
                },
                "typeArguments": null,
                "start": 519,
                "end": 520
              },
              "start": 517,
              "end": 520
            },
            "start": 516,
            "end": 520
          },
          "init": null,
          "definite": false,
          "start": 516,
          "end": 520
        }
      ],
      "declare": true,
      "start": 504,
      "end": 521
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 538
                },
                "typeArguments": null,
                "start": 537,
                "end": 538
              },
              "start": 535,
              "end": 538
            },
            "start": 534,
            "end": 538
          },
          "init": null,
          "definite": false,
          "start": 534,
          "end": 538
        }
      ],
      "declare": true,
      "start": 522,
      "end": 539
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 541,
          "end": 542
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 545,
          "end": 546
        },
        "start": 541,
        "end": 546
      },
      "directive": null,
      "start": 541,
      "end": 547
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 575,
          "end": 576
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 579,
          "end": 580
        },
        "start": 575,
        "end": 580
      },
      "directive": null,
      "start": 575,
      "end": 581
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 581
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 91,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 110,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 156,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 171,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "D",
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
    "type": "Identifier",
    "value": "T",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 187,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "C_extends_D",
    "start": 192,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 208,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 218,
    "end": 219
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 227,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 275,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "PickA_extends_PickB",
    "start": 280,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 302,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 308,
    "end": 309
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 315,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 323,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 329,
    "end": 330
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 331,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 336,
    "end": 337
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 338,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 345,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 363,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "TA_extends_TB",
    "start": 368,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 389,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 402,
    "end": 403
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 411,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 462,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 470,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 483,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 504,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 522,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 530,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  }
]
```

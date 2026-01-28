__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 33
          },
          "start": 29,
          "end": 33
        },
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 44
          },
          "start": 40,
          "end": 44
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 79
                },
                "start": 75,
                "end": 79
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 98
                },
                "start": 94,
                "end": 98
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 119
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
                "start": 122,
                "end": 124
              },
              "expression": false,
              "start": 119,
              "end": 124
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 75,
            "end": 124
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 144
                },
                "start": 140,
                "end": 144
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 163
                },
                "start": 159,
                "end": 163
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
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
                      "value": 1,
                      "raw": "1",
                      "start": 195,
                      "end": 196
                    },
                    "start": 188,
                    "end": 197
                  }
                ],
                "start": 186,
                "end": 199
              },
              "expression": false,
              "start": 183,
              "end": 199
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 140,
            "end": 199
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 220
                },
                "start": 216,
                "end": 220
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 240
                },
                "start": 236,
                "end": 240
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 261
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 269,
                      "end": 275
                    },
                    "start": 267,
                    "end": 275
                  },
                  "start": 262,
                  "end": 275
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 277,
                "end": 280
              },
              "expression": false,
              "start": 261,
              "end": 280
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 216,
            "end": 280
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 301
                },
                "start": 297,
                "end": 301
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 321
                },
                "start": 317,
                "end": 321
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 338
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 341,
              "end": 342
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 297,
            "end": 343
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 364
                },
                "start": 360,
                "end": 364
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 384
                },
                "start": 380,
                "end": 384
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 410
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 413,
              "end": 414
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 360,
            "end": 415
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 436
                },
                "start": 432,
                "end": 436
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 456
                },
                "start": 452,
                "end": 456
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method",
              "start": 479,
              "end": 486
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
                "start": 489,
                "end": 491
              },
              "expression": false,
              "start": 486,
              "end": 491
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 432,
            "end": 491
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 509,
                  "end": 512
                },
                "start": 508,
                "end": 512
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 532
                },
                "start": 528,
                "end": 532
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 559,
              "end": 561
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
                      "value": 1,
                      "raw": "1",
                      "start": 573,
                      "end": 574
                    },
                    "start": 566,
                    "end": 575
                  }
                ],
                "start": 564,
                "end": 577
              },
              "expression": false,
              "start": 561,
              "end": 577
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 508,
            "end": 577
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 598
                },
                "start": 594,
                "end": 598
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 615,
                  "end": 618
                },
                "start": 614,
                "end": 618
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 645,
              "end": 647
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 655,
                      "end": 661
                    },
                    "start": 653,
                    "end": 661
                  },
                  "start": 648,
                  "end": 661
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 663,
                "end": 666
              },
              "expression": false,
              "start": 647,
              "end": 666
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 594,
            "end": 666
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 687
                },
                "start": 683,
                "end": 687
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 704,
                  "end": 707
                },
                "start": 703,
                "end": 707
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "y",
              "start": 730,
              "end": 732
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 735,
              "end": 736
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 683,
            "end": 737
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 755,
                  "end": 758
                },
                "start": 754,
                "end": 758
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 778
                },
                "start": 774,
                "end": 778
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "z",
              "start": 810,
              "end": 812
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 815,
              "end": 816
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 754,
            "end": 817
          }
        ],
        "start": 59,
        "end": 819
      },
      "abstract": false,
      "declare": false,
      "start": 29,
      "end": 819
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 820
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
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
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 41,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 95,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 160,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 188,
    "end": 194
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 256,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 318,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 381,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 400,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 411,
    "end": 412
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 433,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 453,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 472,
    "end": 478
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 479,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 509,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 529,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 548,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 555,
    "end": 558
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 559,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 566,
    "end": 572
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 615,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 634,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 641,
    "end": 644
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 645,
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
    "value": "value",
    "start": 648,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 655,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 684,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 704,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 723,
    "end": 729
  },
  {
    "type": "PrivateIdentifier",
    "value": "y",
    "start": 730,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 733,
    "end": 734
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 755,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 775,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 794,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 801,
    "end": 809
  },
  {
    "type": "PrivateIdentifier",
    "value": "z",
    "start": 810,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 813,
    "end": 814
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 818,
    "end": 819
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 11
            },
            "start": 7,
            "end": 11
          },
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 23
            },
            "start": 19,
            "end": 23
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 45
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 46,
          "end": 49
        },
        "abstract": false,
        "declare": false,
        "start": 38,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 31,
      "end": 49
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 62
            },
            "start": 58,
            "end": 62
          },
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 74
            },
            "start": 70,
            "end": 74
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 104
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 105,
          "end": 108
        },
        "abstract": false,
        "declare": false,
        "start": 97,
        "end": 108
      },
      "exportKind": "value",
      "start": 82,
      "end": 108
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 7,
  "end": 109
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "@",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 8,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 20,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 31,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 38,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 71,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 82,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 89,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 25
            },
            "start": 21,
            "end": 25
          },
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 37
            },
            "start": 33,
            "end": 37
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 52
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 53,
          "end": 56
        },
        "abstract": false,
        "declare": false,
        "start": 21,
        "end": 56
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7,
      "end": 56
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 91
            },
            "start": 87,
            "end": 91
          },
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 103
            },
            "start": 99,
            "end": 103
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 118
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 119,
          "end": 122
        },
        "abstract": false,
        "declare": false,
        "start": 87,
        "end": 122
      },
      "exportKind": "value",
      "start": 65,
      "end": 122
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 7,
  "end": 122
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 7,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 34,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 65,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 72,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 100,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 111,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  }
]
```

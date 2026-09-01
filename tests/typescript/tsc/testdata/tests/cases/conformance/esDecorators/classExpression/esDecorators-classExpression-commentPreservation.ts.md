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
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 41
            },
            "start": 37,
            "end": 41
          },
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 52
            },
            "start": 48,
            "end": 52
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 66
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
                    "start": 84,
                    "end": 87
                  },
                  "start": 83,
                  "end": 87
                },
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 106
                  },
                  "start": 102,
                  "end": 106
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 127
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
                  "start": 130,
                  "end": 132
                },
                "expression": false,
                "start": 127,
                "end": 132
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 83,
              "end": 132
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
                    "start": 149,
                    "end": 152
                  },
                  "start": 148,
                  "end": 152
                },
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 171
                  },
                  "start": 167,
                  "end": 171
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 192
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
                        "start": 204,
                        "end": 205
                      },
                      "start": 197,
                      "end": 206
                    }
                  ],
                  "start": 195,
                  "end": 208
                },
                "expression": false,
                "start": 192,
                "end": 208
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 148,
              "end": 208
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
                    "start": 226,
                    "end": 229
                  },
                  "start": 225,
                  "end": 229
                },
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 249
                  },
                  "start": 245,
                  "end": 249
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 270
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
                        "start": 278,
                        "end": 284
                      },
                      "start": 276,
                      "end": 284
                    },
                    "start": 271,
                    "end": 284
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 286,
                  "end": 289
                },
                "expression": false,
                "start": 270,
                "end": 289
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 225,
              "end": 289
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
                    "start": 307,
                    "end": 310
                  },
                  "start": 306,
                  "end": 310
                },
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 330
                  },
                  "start": 326,
                  "end": 330
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 347
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 350,
                "end": 351
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 306,
              "end": 352
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
                    "start": 370,
                    "end": 373
                  },
                  "start": 369,
                  "end": 373
                },
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 393
                  },
                  "start": 389,
                  "end": 393
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 419
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 422,
                "end": 423
              },
              "computed": false,
              "static": false,
              "override": false,
              "definite": false,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "readonly": false,
              "start": 369,
              "end": 424
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
                    "start": 442,
                    "end": 445
                  },
                  "start": 441,
                  "end": 445
                },
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 462,
                    "end": 465
                  },
                  "start": 461,
                  "end": 465
                }
              ],
              "key": {
                "type": "PrivateIdentifier",
                "name": "method",
                "start": 488,
                "end": 495
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
                  "start": 498,
                  "end": 500
                },
                "expression": false,
                "start": 495,
                "end": 500
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 441,
              "end": 500
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
                    "start": 518,
                    "end": 521
                  },
                  "start": 517,
                  "end": 521
                },
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 538,
                    "end": 541
                  },
                  "start": 537,
                  "end": 541
                }
              ],
              "key": {
                "type": "PrivateIdentifier",
                "name": "x",
                "start": 568,
                "end": 570
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
                        "start": 582,
                        "end": 583
                      },
                      "start": 575,
                      "end": 584
                    }
                  ],
                  "start": 573,
                  "end": 586
                },
                "expression": false,
                "start": 570,
                "end": 586
              },
              "kind": "get",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 517,
              "end": 586
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
                    "start": 604,
                    "end": 607
                  },
                  "start": 603,
                  "end": 607
                },
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 624,
                    "end": 627
                  },
                  "start": 623,
                  "end": 627
                }
              ],
              "key": {
                "type": "PrivateIdentifier",
                "name": "x",
                "start": 654,
                "end": 656
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
                        "start": 664,
                        "end": 670
                      },
                      "start": 662,
                      "end": 670
                    },
                    "start": 657,
                    "end": 670
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 672,
                  "end": 675
                },
                "expression": false,
                "start": 656,
                "end": 675
              },
              "kind": "set",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 603,
              "end": 675
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
                    "start": 693,
                    "end": 696
                  },
                  "start": 692,
                  "end": 696
                },
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 713,
                    "end": 716
                  },
                  "start": 712,
                  "end": 716
                }
              ],
              "key": {
                "type": "PrivateIdentifier",
                "name": "y",
                "start": 739,
                "end": 741
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 744,
                "end": 745
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 692,
              "end": 746
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
                    "start": 764,
                    "end": 767
                  },
                  "start": 763,
                  "end": 767
                },
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 784,
                    "end": 787
                  },
                  "start": 783,
                  "end": 787
                }
              ],
              "key": {
                "type": "PrivateIdentifier",
                "name": "z",
                "start": 819,
                "end": 821
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 824,
                "end": 825
              },
              "computed": false,
              "static": true,
              "override": false,
              "definite": false,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "readonly": false,
              "start": 763,
              "end": 826
            }
          ],
          "start": 67,
          "end": 828
        },
        "abstract": false,
        "declare": false,
        "start": 37,
        "end": 828
      },
      "directive": null,
      "start": 29,
      "end": 831
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 831
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
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 49,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 59,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 103,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 197,
    "end": 203
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 246,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 271,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 278,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Punctuator",
    "value": "@",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 327,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 370,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 390,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 409,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 442,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 462,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 481,
    "end": 487
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 488,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 538,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 557,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 564,
    "end": 567
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 568,
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
    "value": ")",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 575,
    "end": 581
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 624,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 643,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 650,
    "end": 653
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 654,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 657,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 664,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 693,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 713,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 732,
    "end": 738
  },
  {
    "type": "PrivateIdentifier",
    "value": "y",
    "start": 739,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 742,
    "end": 743
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 764,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 784,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 803,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 810,
    "end": 818
  },
  {
    "type": "PrivateIdentifier",
    "value": "z",
    "start": 819,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              },
              "start": 28,
              "end": 33
            },
            "start": 27,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 27,
          "end": 33
        }
      ],
      "declare": false,
      "start": 23,
      "end": 34
    },
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
          "start": 138,
          "end": 139
        },
        "right": {
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
                "start": 143,
                "end": 146
              },
              "start": 142,
              "end": 146
            }
          ],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 153,
            "end": 156
          },
          "abstract": false,
          "declare": false,
          "start": 142,
          "end": 156
        },
        "start": 138,
        "end": 156
      },
      "directive": null,
      "start": 138,
      "end": 157
    },
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
          "start": 158,
          "end": 159
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
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
                      "start": 171,
                      "end": 174
                    },
                    "start": 170,
                    "end": 174
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 176
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 178,
                    "end": 181
                  },
                  "start": 176,
                  "end": 181
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
                "start": 170,
                "end": 182
              }
            ],
            "start": 168,
            "end": 184
          },
          "abstract": false,
          "declare": false,
          "start": 162,
          "end": 184
        },
        "start": 158,
        "end": 184
      },
      "directive": null,
      "start": 158,
      "end": 185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "&&=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 291,
          "end": 292
        },
        "right": {
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
                "start": 298,
                "end": 301
              },
              "start": 297,
              "end": 301
            }
          ],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 308,
            "end": 311
          },
          "abstract": false,
          "declare": false,
          "start": 297,
          "end": 311
        },
        "start": 291,
        "end": 311
      },
      "directive": null,
      "start": 291,
      "end": 312
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "&&=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 313,
          "end": 314
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
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
                      "start": 328,
                      "end": 331
                    },
                    "start": 327,
                    "end": 331
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 333
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 335,
                    "end": 338
                  },
                  "start": 333,
                  "end": 338
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
                "start": 327,
                "end": 339
              }
            ],
            "start": 325,
            "end": 341
          },
          "abstract": false,
          "declare": false,
          "start": 319,
          "end": 341
        },
        "start": 313,
        "end": 341
      },
      "directive": null,
      "start": 313,
      "end": 342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "||=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 448,
          "end": 449
        },
        "right": {
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
                "start": 455,
                "end": 458
              },
              "start": 454,
              "end": 458
            }
          ],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 465,
            "end": 468
          },
          "abstract": false,
          "declare": false,
          "start": 454,
          "end": 468
        },
        "start": 448,
        "end": 468
      },
      "directive": null,
      "start": 448,
      "end": 469
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "||=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 470,
          "end": 471
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
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
                      "start": 485,
                      "end": 488
                    },
                    "start": 484,
                    "end": 488
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 490
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 492,
                    "end": 495
                  },
                  "start": 490,
                  "end": 495
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
                "start": 484,
                "end": 496
              }
            ],
            "start": 482,
            "end": 498
          },
          "abstract": false,
          "declare": false,
          "start": 476,
          "end": 498
        },
        "start": 470,
        "end": 498
      },
      "directive": null,
      "start": 470,
      "end": 499
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 605,
          "end": 606
        },
        "right": {
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
                "start": 612,
                "end": 615
              },
              "start": 611,
              "end": 615
            }
          ],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 622,
            "end": 625
          },
          "abstract": false,
          "declare": false,
          "start": 611,
          "end": 625
        },
        "start": 605,
        "end": 625
      },
      "directive": null,
      "start": 605,
      "end": 626
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 627,
          "end": 628
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
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
                      "start": 642,
                      "end": 645
                    },
                    "start": 641,
                    "end": 645
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 646,
                  "end": 647
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 649,
                    "end": 652
                  },
                  "start": 647,
                  "end": 652
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
                "start": 641,
                "end": 653
              }
            ],
            "start": 639,
            "end": 655
          },
          "abstract": false,
          "declare": false,
          "start": 633,
          "end": 655
        },
        "start": 627,
        "end": 655
      },
      "directive": null,
      "start": 627,
      "end": 656
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 656
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
    "value": "let",
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
    "type": "Keyword",
    "value": "let",
    "start": 23,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 143,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
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
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 171,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "x",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 293,
    "end": 296
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
    "type": "Keyword",
    "value": "class",
    "start": 302,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 315,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 319,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 328,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 335,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 450,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 455,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 459,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 472,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 476,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 485,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 607,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 612,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 616,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 629,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 633,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 642,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 649,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  }
]
```

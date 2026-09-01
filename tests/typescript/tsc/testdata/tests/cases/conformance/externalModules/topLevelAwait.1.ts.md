__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 17,
              "end": 18
            },
            "definite": false,
            "start": 13,
            "end": 18
          }
        ],
        "declare": false,
        "start": 7,
        "end": 19
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 19
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 26,
          "end": 27
        },
        "start": 20,
        "end": 27
      },
      "directive": null,
      "start": 20,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            }
          ],
          "start": 71,
          "end": 74
        },
        "start": 65,
        "end": 74
      },
      "directive": null,
      "start": 65,
      "end": 75
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            }
          ],
          "start": 82,
          "end": 88
        },
        "start": 76,
        "end": 88
      },
      "directive": null,
      "start": 76,
      "end": 89
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 134
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 138,
          "end": 144
        },
        "start": 136,
        "end": 144
      },
      "body": null,
      "expression": false,
      "start": 116,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 154
        },
        "start": 146,
        "end": 155
      },
      "directive": null,
      "start": 146,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 165
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 164,
              "end": 167
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            }
          ],
          "start": 164,
          "end": 170
        },
        "start": 157,
        "end": 171
      },
      "directive": null,
      "start": 157,
      "end": 172
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 180,
            "end": 186
          },
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 189
          },
          "start": 179,
          "end": 190
        },
        "start": 173,
        "end": 190
      },
      "directive": null,
      "start": 173,
      "end": 191
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 199,
            "end": 205
          },
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 208
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 207,
                "end": 210
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 213
              }
            ],
            "start": 207,
            "end": 213
          },
          "start": 198,
          "end": 214
        },
        "start": 192,
        "end": 214
      },
      "directive": null,
      "start": 192,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 259,
              "end": 261
            }
          ],
          "expressions": [],
          "start": 259,
          "end": 261
        },
        "start": 253,
        "end": 261
      },
      "directive": null,
      "start": 253,
      "end": 262
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 270,
            "end": 276
          },
          "expression": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 278,
                "end": 280
              }
            ],
            "expressions": [],
            "start": 278,
            "end": 280
          },
          "start": 269,
          "end": 280
        },
        "start": 263,
        "end": 280
      },
      "directive": null,
      "start": 263,
      "end": 281
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
        "start": 318,
        "end": 320
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
              "name": "await",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 332
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
                "start": 335,
                "end": 337
              },
              "expression": false,
              "start": 332,
              "end": 337
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 327,
            "end": 337
          }
        ],
        "start": 321,
        "end": 339
      },
      "abstract": false,
      "declare": false,
      "start": 312,
      "end": 339
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
        "start": 346,
        "end": 348
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
              "name": "await",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 364
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
                      "start": 376,
                      "end": 377
                    },
                    "start": 369,
                    "end": 378
                  }
                ],
                "start": 367,
                "end": 380
              },
              "expression": false,
              "start": 364,
              "end": 380
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 355,
            "end": 380
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 394
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
                  "typeAnnotation": null,
                  "start": 395,
                  "end": 400
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 402,
                "end": 405
              },
              "expression": false,
              "start": 394,
              "end": 405
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 385,
            "end": 405
          }
        ],
        "start": 349,
        "end": 407
      },
      "abstract": false,
      "declare": false,
      "start": 340,
      "end": 407
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
        "start": 414,
        "end": 416
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
              "name": "await",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 428
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 431,
              "end": 432
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 423,
            "end": 433
          }
        ],
        "start": 417,
        "end": 435
      },
      "abstract": false,
      "declare": false,
      "start": 408,
      "end": 435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 448
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
                "start": 451,
                "end": 453
              },
              "expression": false,
              "start": 448,
              "end": 453
            },
            "method": true,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 443,
            "end": 453
          }
        ],
        "start": 437,
        "end": 455
      },
      "directive": null,
      "start": 436,
      "end": 457
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "get",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 474
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
                      "start": 486,
                      "end": 487
                    },
                    "start": 479,
                    "end": 487
                  }
                ],
                "start": 477,
                "end": 489
              },
              "expression": false,
              "start": 474,
              "end": 489
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 465,
            "end": 489
          },
          {
            "type": "Property",
            "kind": "set",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null,
              "start": 499,
              "end": 504
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
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 510
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 512,
                "end": 515
              },
              "expression": false,
              "start": 504,
              "end": 515
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 495,
            "end": 515
          }
        ],
        "start": 459,
        "end": 517
      },
      "directive": null,
      "start": 458,
      "end": 519
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 532
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 534,
              "end": 535
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 527,
            "end": 535
          }
        ],
        "start": 521,
        "end": 537
      },
      "directive": null,
      "start": 520,
      "end": 539
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 578,
            "end": 580
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 590
          },
          "optional": false,
          "computed": false,
          "start": 578,
          "end": 590
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "await",
          "optional": false,
          "typeAnnotation": null,
          "start": 591,
          "end": 596
        },
        "optional": false,
        "computed": false,
        "start": 578,
        "end": 596
      },
      "directive": null,
      "start": 578,
      "end": 597
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 641,
                "end": 644
              },
              "start": 639,
              "end": 644
            },
            "start": 636,
            "end": 644
          },
          "init": null,
          "definite": false,
          "start": 636,
          "end": 644
        }
      ],
      "declare": true,
      "start": 622,
      "end": 645
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "AwaitExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 657
            },
            "start": 648,
            "end": 657
          },
          "start": 646,
          "end": 658
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 665,
        "end": 666
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 667,
        "end": 670
      },
      "abstract": false,
      "declare": false,
      "start": 646,
      "end": 670
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 721
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_await",
            "optional": false,
            "typeAnnotation": null,
            "start": 725,
            "end": 731
          },
          "importKind": "value",
          "start": 716,
          "end": 731
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other",
        "raw": "\"./other\"",
        "start": 739,
        "end": 748
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 707,
      "end": 749
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "AwaitExpression",
        "argument": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 797,
          "end": 798
        },
        "start": 787,
        "end": 798
      },
      "start": 781,
      "end": 799
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 822
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 835,
              "end": 836
            },
            "start": 825,
            "end": 836
          },
          "definite": false,
          "start": 821,
          "end": 836
        }
      ],
      "declare": false,
      "start": 817,
      "end": 837
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 883,
          "end": 884
        },
        "start": 873,
        "end": 884
      },
      "directive": null,
      "start": 873,
      "end": 885
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 886
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 20,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 76,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 116,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 124,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 146,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 173,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 192,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 253,
    "end": 258
  },
  {
    "type": "Template",
    "value": "``",
    "start": 259,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 276,
    "end": 277
  },
  {
    "type": "Template",
    "value": "``",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 312,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 327,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 340,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 359,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 369,
    "end": 375
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 385,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 389,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 395,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 408,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 423,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 443,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 465,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 469,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 479,
    "end": 485
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 495,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 499,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 527,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "C1",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 581,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 591,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 622,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 630,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 636,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 641,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 646,
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
    "value": "await",
    "start": 648,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 654,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 659,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 707,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 716,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 722,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "_await",
    "start": 725,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 734,
    "end": 738
  },
  {
    "type": "String",
    "value": "\"./other\"",
    "start": 739,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 781,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 787,
    "end": 792
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 817,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 825,
    "end": 830
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 873,
    "end": 878
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "_await",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 12
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 15,
            "end": 16
          },
          "definite": false,
          "start": 6,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_await",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 69
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 78
          },
          "exportKind": "value",
          "start": 63,
          "end": 78
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 54,
      "end": 81
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 108
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 112,
                    "end": 119
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 127
                  },
                  "optional": false,
                  "computed": false,
                  "start": 112,
                  "end": 127
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 112,
                "end": 129
              }
            ],
            "start": 111,
            "end": 130
          },
          "definite": false,
          "start": 105,
          "end": 130
        }
      ],
      "declare": false,
      "start": 99,
      "end": 131
    },
    {
      "type": "ForOfStatement",
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 154
            },
            "init": null,
            "definite": false,
            "start": 150,
            "end": 154
          }
        ],
        "declare": false,
        "start": 144,
        "end": 154
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "arr",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 161
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 171
            },
            "directive": null,
            "start": 167,
            "end": 172
          }
        ],
        "start": 163,
        "end": 174
      },
      "start": 133,
      "end": 174
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 174
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "_await",
    "start": 6,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
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
    "value": "_await",
    "start": 63,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 70,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 73,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 99,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 120,
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
    "value": "]",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 137,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 144,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 150,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 155,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  }
]
```

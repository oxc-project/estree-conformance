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
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
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
            "start": 19,
            "end": 30
          }
        ],
        "start": 13,
        "end": 32
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionA",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 47
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 62
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 74
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              },
              "start": 74,
              "end": 82
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
            "start": 69,
            "end": 83
          }
        ],
        "start": 63,
        "end": 85
      },
      "abstract": false,
      "declare": false,
      "start": 34,
      "end": 85
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionB",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 100
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 115
      },
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
              "name": "trueNess",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 132,
                "end": 139
              },
              "start": 130,
              "end": 139
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
            "start": 122,
            "end": 140
          }
        ],
        "start": 116,
        "end": 142
      },
      "abstract": false,
      "declare": false,
      "start": 87,
      "end": 142
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
            "name": "x1",
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
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 158
                  },
                  "typeArguments": null,
                  "start": 152,
                  "end": 158
                },
                "start": 152,
                "end": 160
              },
              "start": 150,
              "end": 160
            },
            "start": 148,
            "end": 160
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 173
                    },
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 175,
                      "end": 176
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 171,
                    "end": 176
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "trueness",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 186
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 188,
                      "end": 193
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 178,
                    "end": 193
                  }
                ],
                "start": 169,
                "end": 195
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 205
                    },
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 207,
                      "end": 208
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 203,
                    "end": 208
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 214
                    },
                    "value": {
                      "type": "Literal",
                      "value": "three",
                      "raw": "\"three\"",
                      "start": 216,
                      "end": 223
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 210,
                    "end": 223
                  }
                ],
                "start": 201,
                "end": 225
              }
            ],
            "start": 163,
            "end": 227
          },
          "definite": false,
          "start": 148,
          "end": 227
        }
      ],
      "declare": false,
      "start": 144,
      "end": 227
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
            "name": "x2",
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
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 243
                  },
                  "typeArguments": null,
                  "start": 237,
                  "end": 243
                },
                "start": 237,
                "end": 245
              },
              "start": 235,
              "end": 245
            },
            "start": 233,
            "end": 245
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 265
                },
                "typeArguments": null,
                "arguments": [],
                "start": 254,
                "end": 267
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 284
                },
                "typeArguments": null,
                "arguments": [],
                "start": 273,
                "end": 286
              }
            ],
            "start": 248,
            "end": 288
          },
          "definite": false,
          "start": 233,
          "end": 288
        }
      ],
      "declare": false,
      "start": 229,
      "end": 288
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
            "name": "x3",
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
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 304
                  },
                  "typeArguments": null,
                  "start": 298,
                  "end": 304
                },
                "start": 298,
                "end": 306
              },
              "start": 296,
              "end": 306
            },
            "start": 294,
            "end": 306
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 325
                },
                "typeArguments": null,
                "arguments": [],
                "start": 315,
                "end": 327
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 344
                },
                "typeArguments": null,
                "arguments": [],
                "start": 333,
                "end": 346
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 363
                },
                "typeArguments": null,
                "arguments": [],
                "start": 352,
                "end": 365
              }
            ],
            "start": 309,
            "end": 367
          },
          "definite": false,
          "start": 294,
          "end": 367
        }
      ],
      "declare": false,
      "start": 290,
      "end": 367
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
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
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 381
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 383,
                          "end": 389
                        },
                        "start": 381,
                        "end": 389
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 379,
                      "end": 389
                    }
                  ],
                  "start": 377,
                  "end": 391
                },
                "start": 377,
                "end": 393
              },
              "start": 375,
              "end": 393
            },
            "start": 373,
            "end": 393
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 412,
                      "end": 414
                    },
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 416,
                      "end": 417
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 412,
                    "end": 417
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "trueness",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 427
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 429,
                      "end": 434
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 419,
                    "end": 434
                  }
                ],
                "start": 410,
                "end": 436
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 448,
                      "end": 450
                    },
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 452,
                      "end": 453
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 448,
                    "end": 453
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 459
                    },
                    "value": {
                      "type": "Literal",
                      "value": "three",
                      "raw": "\"three\"",
                      "start": 461,
                      "end": 468
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 455,
                    "end": 468
                  }
                ],
                "start": 446,
                "end": 470
              }
            ],
            "start": 400,
            "end": 476
          },
          "definite": false,
          "start": 373,
          "end": 476
        }
      ],
      "declare": false,
      "start": 369,
      "end": 476
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
            "name": "z2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
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
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 488,
                        "end": 490
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 492,
                          "end": 498
                        },
                        "start": 490,
                        "end": 498
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 488,
                      "end": 498
                    }
                  ],
                  "start": 486,
                  "end": 500
                },
                "start": 486,
                "end": 502
              },
              "start": 484,
              "end": 502
            },
            "start": 482,
            "end": 502
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 530
                },
                "typeArguments": null,
                "arguments": [],
                "start": 519,
                "end": 532
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 553
                },
                "typeArguments": null,
                "arguments": [],
                "start": 542,
                "end": 555
              }
            ],
            "start": 509,
            "end": 561
          },
          "definite": false,
          "start": 482,
          "end": 561
        }
      ],
      "declare": false,
      "start": 478,
      "end": 561
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
            "name": "z3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
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
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 573,
                        "end": 575
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 577,
                          "end": 583
                        },
                        "start": 575,
                        "end": 583
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 573,
                      "end": 583
                    }
                  ],
                  "start": 571,
                  "end": 585
                },
                "start": 571,
                "end": 587
              },
              "start": 569,
              "end": 587
            },
            "start": 567,
            "end": 587
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 608,
                  "end": 614
                },
                "typeArguments": null,
                "arguments": [],
                "start": 604,
                "end": 616
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 637
                },
                "typeArguments": null,
                "arguments": [],
                "start": 626,
                "end": 639
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 653,
                  "end": 660
                },
                "typeArguments": null,
                "arguments": [],
                "start": 649,
                "end": 662
              }
            ],
            "start": 594,
            "end": 668
          },
          "definite": false,
          "start": 567,
          "end": 668
        }
      ],
      "declare": false,
      "start": 563,
      "end": 668
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 672
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
    "value": "Action",
    "start": 6,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 19,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 34,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "ActionA",
    "start": 40,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 48,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "ActionB",
    "start": 93,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 101,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "trueNess",
    "start": 122,
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
    "value": "boolean",
    "start": 132,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 144,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "trueness",
    "start": 178,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 188,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "String",
    "value": "\"three\"",
    "start": 216,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 229,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "ActionA",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 273,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "ActionB",
    "start": 277,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 290,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 294,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 298,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 304,
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
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 319,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 333,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "ActionA",
    "start": 337,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 352,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "ActionB",
    "start": 356,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 369,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 373,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "id",
    "start": 379,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 383,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "trueness",
    "start": 419,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 429,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 448,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 455,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "String",
    "value": "\"three\"",
    "start": 461,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 478,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 482,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 488,
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
    "value": "number",
    "start": 492,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 519,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "ActionA",
    "start": 523,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 542,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "ActionB",
    "start": 546,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
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
    "value": "]",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 563,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "z3",
    "start": 567,
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
    "value": "{",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 573,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 577,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 604,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 608,
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
    "value": ",",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 626,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "ActionA",
    "start": 630,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 649,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "ActionB",
    "start": 653,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
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
    "value": "]",
    "start": 667,
    "end": 668
  }
]
```

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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 59
                },
                "typeArguments": null,
                "start": 50,
                "end": 59
              },
              "start": 48,
              "end": 59
            },
            "start": 47,
            "end": 59
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 59
        }
      ],
      "declare": true,
      "start": 35,
      "end": 60
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 69
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 72,
            "end": 75
          },
          "definite": false,
          "start": 67,
          "end": 75
        }
      ],
      "declare": false,
      "start": 61,
      "end": 76
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 137
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 143
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 146,
                "end": 152
              },
              "start": 144,
              "end": 152
            },
            "accessibility": null,
            "static": false,
            "start": 140,
            "end": 153
          }
        ],
        "start": 138,
        "end": 155
      },
      "declare": false,
      "start": 123,
      "end": 155
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 164
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 167,
            "end": 170
          },
          "definite": false,
          "start": 162,
          "end": 170
        }
      ],
      "declare": false,
      "start": 156,
      "end": 171
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 209
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 220,
                "end": 226
              },
              "start": 218,
              "end": 226
            },
            "accessibility": null,
            "static": false,
            "start": 214,
            "end": 227
          }
        ],
        "start": 212,
        "end": 229
      },
      "declare": false,
      "start": 200,
      "end": 229
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
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 238
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 241,
            "end": 244
          },
          "definite": false,
          "start": 236,
          "end": 244
        }
      ],
      "declare": false,
      "start": 230,
      "end": 245
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
            "name": "foo4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 296
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 299,
                        "end": 305
                      },
                      "start": 297,
                      "end": 305
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 293,
                    "end": 306
                  }
                ],
                "start": 291,
                "end": 308
              },
              "start": 289,
              "end": 308
            },
            "start": 285,
            "end": 308
          },
          "init": null,
          "definite": false,
          "start": 285,
          "end": 308
        }
      ],
      "declare": true,
      "start": 271,
      "end": 308
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
            "name": "s4",
            "optional": false,
            "typeAnnotation": null,
            "start": 315,
            "end": 317
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 320,
            "end": 323
          },
          "definite": false,
          "start": 315,
          "end": 323
        }
      ],
      "declare": false,
      "start": 309,
      "end": 324
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 370
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
              "name": "s5",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 376
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 379,
                "end": 385
              },
              "start": 377,
              "end": 385
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 373,
            "end": 386
          }
        ],
        "start": 371,
        "end": 388
      },
      "abstract": false,
      "declare": true,
      "start": 352,
      "end": 388
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
            "name": "s5",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 397
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 400,
            "end": 403
          },
          "definite": false,
          "start": 395,
          "end": 403
        }
      ],
      "declare": false,
      "start": 389,
      "end": 404
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 443,
        "end": 447
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls1",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 455
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 457
              },
              "optional": false,
              "computed": false,
              "start": 451,
              "end": 457
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 460,
                "end": 466
              },
              "start": 458,
              "end": 466
            },
            "accessibility": null,
            "static": false,
            "start": 450,
            "end": 467
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls2",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 473
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 475
              },
              "optional": false,
              "computed": false,
              "start": 469,
              "end": 475
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 478,
                "end": 484
              },
              "start": 476,
              "end": 484
            },
            "accessibility": null,
            "static": false,
            "start": 468,
            "end": 485
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 491
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 492,
                "end": 493
              },
              "optional": false,
              "computed": false,
              "start": 487,
              "end": 493
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 496,
                "end": 502
              },
              "start": 494,
              "end": 502
            },
            "accessibility": null,
            "static": false,
            "start": 486,
            "end": 503
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 509
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 511
              },
              "optional": false,
              "computed": false,
              "start": 505,
              "end": 511
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 514,
                "end": 520
              },
              "start": 512,
              "end": 520
            },
            "accessibility": null,
            "static": false,
            "start": 504,
            "end": 520
          }
        ],
        "start": 448,
        "end": 522
      },
      "declare": false,
      "start": 433,
      "end": 522
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls1",
        "optional": false,
        "typeAnnotation": null,
        "start": 537,
        "end": 541
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 552
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 554,
                  "end": 557
                },
                "start": 554,
                "end": 557
              },
              "start": 552,
              "end": 557
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 544,
            "end": 558
          }
        ],
        "start": 542,
        "end": 560
      },
      "abstract": false,
      "declare": true,
      "start": 523,
      "end": 560
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls2",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 571
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 582
            },
            "typeAnnotation": null,
            "value": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 585,
                "end": 588
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 597
                },
                "typeArguments": null,
                "start": 592,
                "end": 597
              },
              "start": 585,
              "end": 597
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 574,
            "end": 598
          }
        ],
        "start": 572,
        "end": 600
      },
      "abstract": false,
      "declare": false,
      "start": 561,
      "end": 600
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
            "name": "obj1",
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 623,
                      "end": 624
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "c",
                          "raw": "'c'",
                          "start": 626,
                          "end": 629
                        },
                        "start": 626,
                        "end": 629
                      },
                      "start": 624,
                      "end": 629
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 623,
                    "end": 629
                  }
                ],
                "start": 621,
                "end": 631
              },
              "start": 619,
              "end": 631
            },
            "start": 615,
            "end": 631
          },
          "init": null,
          "definite": false,
          "start": 615,
          "end": 631
        }
      ],
      "declare": true,
      "start": 601,
      "end": 631
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 642
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 647,
                    "end": 648
                  },
                  "value": {
                    "type": "Literal",
                    "value": "d",
                    "raw": "'d'",
                    "start": 650,
                    "end": 653
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 647,
                  "end": 653
                }
              ],
              "start": 645,
              "end": 655
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 659,
                "end": 664
              },
              "typeArguments": null,
              "start": 659,
              "end": 664
            },
            "start": 645,
            "end": 664
          },
          "definite": false,
          "start": 638,
          "end": 664
        }
      ],
      "declare": false,
      "start": 632,
      "end": 664
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 664
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 35,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 43,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 50,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 123,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 156,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 200,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "Foo3",
    "start": 205,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 230,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 271,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 279,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 285,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 294,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 309,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 315,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 320,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 352,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 360,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "Foo5",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 379,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 389,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 395,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 400,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 433,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "Foo6",
    "start": 443,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "Cls1",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "Cls2",
    "start": 469,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 478,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 514,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 523,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 531,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "Cls1",
    "start": 537,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 544,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 554,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 561,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "Cls2",
    "start": 567,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 574,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 585,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 589,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 592,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 601,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 609,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 615,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 626,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 632,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 638,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649
  },
  {
    "type": "String",
    "value": "'d'",
    "start": 650,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 656,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 659,
    "end": 664
  }
]
```

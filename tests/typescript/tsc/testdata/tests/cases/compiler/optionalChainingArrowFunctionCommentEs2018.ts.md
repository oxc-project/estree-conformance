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
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 22
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "condition",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 26,
                        "end": 35
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 37,
                        "end": 41
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 26,
                      "end": 41
                    }
                  ],
                  "start": 24,
                  "end": 43
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 16,
                "end": 43
              }
            ],
            "start": 14,
            "end": 45
          },
          "definite": false,
          "start": 6,
          "end": 45
        }
      ],
      "declare": false,
      "start": 0,
      "end": 46
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
            "name": "wat",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 57
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 102
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 110
                    },
                    "optional": true,
                    "computed": false,
                    "start": 97,
                    "end": 110
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 112,
                    "end": 121
                  },
                  "optional": true,
                  "computed": false,
                  "start": 97,
                  "end": 121
                },
                "start": 97,
                "end": 121
              },
              "consequent": {
                "type": "Literal",
                "value": "pass",
                "raw": "\"pass\"",
                "start": 124,
                "end": 130
              },
              "alternate": {
                "type": "Literal",
                "value": "fail",
                "raw": "\"fail\"",
                "start": 133,
                "end": 139
              },
              "start": 97,
              "end": 139
            },
            "id": null,
            "generator": false,
            "start": 60,
            "end": 139
          },
          "definite": false,
          "start": 54,
          "end": 139
        }
      ],
      "declare": false,
      "start": 48,
      "end": 140
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
            "name": "watInline",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 157
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 199,
                      "end": 204
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 212
                    },
                    "optional": true,
                    "computed": false,
                    "start": 199,
                    "end": 212
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 223
                  },
                  "optional": true,
                  "computed": false,
                  "start": 199,
                  "end": 223
                },
                "start": 199,
                "end": 223
              },
              "consequent": {
                "type": "Literal",
                "value": "pass",
                "raw": "\"pass\"",
                "start": 226,
                "end": 232
              },
              "alternate": {
                "type": "Literal",
                "value": "fail",
                "raw": "\"fail\"",
                "start": 235,
                "end": 241
              },
              "start": 199,
              "end": 241
            },
            "id": null,
            "generator": false,
            "start": 160,
            "end": 241
          },
          "definite": false,
          "start": 148,
          "end": 241
        }
      ],
      "declare": false,
      "start": 142,
      "end": 242
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
            "name": "watInlineMultiline",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 268
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 315
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 323
                    },
                    "optional": true,
                    "computed": false,
                    "start": 310,
                    "end": 323
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 334
                  },
                  "optional": true,
                  "computed": false,
                  "start": 310,
                  "end": 334
                },
                "start": 310,
                "end": 334
              },
              "consequent": {
                "type": "Literal",
                "value": "pass",
                "raw": "\"pass\"",
                "start": 337,
                "end": 343
              },
              "alternate": {
                "type": "Literal",
                "value": "fail",
                "raw": "\"fail\"",
                "start": 346,
                "end": 352
              },
              "start": 310,
              "end": 352
            },
            "id": null,
            "generator": false,
            "start": 271,
            "end": 352
          },
          "definite": false,
          "start": 250,
          "end": 352
        }
      ],
      "declare": false,
      "start": 244,
      "end": 353
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
            "name": "watInlineThenLeading",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 381
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 462,
                      "end": 467
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 475
                    },
                    "optional": true,
                    "computed": false,
                    "start": 462,
                    "end": 475
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 477,
                    "end": 486
                  },
                  "optional": true,
                  "computed": false,
                  "start": 462,
                  "end": 486
                },
                "start": 462,
                "end": 486
              },
              "consequent": {
                "type": "Literal",
                "value": "pass",
                "raw": "\"pass\"",
                "start": 489,
                "end": 495
              },
              "alternate": {
                "type": "Literal",
                "value": "fail",
                "raw": "\"fail\"",
                "start": 498,
                "end": 504
              },
              "start": 462,
              "end": 504
            },
            "id": null,
            "generator": false,
            "start": 384,
            "end": 504
          },
          "definite": false,
          "start": 361,
          "end": 504
        }
      ],
      "declare": false,
      "start": 355,
      "end": 505
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 526,
                      "end": 527
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 530,
                          "end": 536
                        },
                        "start": 530,
                        "end": 538
                      },
                      "start": 528,
                      "end": 538
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 526,
                    "end": 538
                  }
                ],
                "start": 524,
                "end": 540
              },
              "start": 522,
              "end": 540
            },
            "start": 521,
            "end": 540
          },
          "init": null,
          "definite": false,
          "start": 521,
          "end": 540
        }
      ],
      "declare": true,
      "start": 507,
      "end": 541
    },
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 556,
              "end": 557
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 585,
                      "end": 586
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 587,
                      "end": 588
                    },
                    "optional": false,
                    "computed": false,
                    "start": 585,
                    "end": 588
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 590,
                    "end": 596
                  },
                  "optional": true,
                  "computed": false,
                  "start": 585,
                  "end": 596
                },
                "start": 585,
                "end": 596
              },
              "id": null,
              "generator": false,
              "start": 560,
              "end": 596
            },
            "definite": false,
            "start": 556,
            "end": 596
          }
        ],
        "declare": false,
        "start": 550,
        "end": 597
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 543,
      "end": 597
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 597
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
    "value": "thing",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 26,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 48,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "wat",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 63,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 102,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 110,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 112,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 122,
    "end": 123
  },
  {
    "type": "String",
    "value": "\"pass\"",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "String",
    "value": "\"fail\"",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 142,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "watInline",
    "start": 148,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
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
    "value": "=>",
    "start": 163,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 199,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 204,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 212,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 214,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 224,
    "end": 225
  },
  {
    "type": "String",
    "value": "\"pass\"",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "String",
    "value": "\"fail\"",
    "start": 235,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 244,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "watInlineMultiline",
    "start": 250,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 274,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 310,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 315,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 317,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 323,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 325,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 335,
    "end": 336
  },
  {
    "type": "String",
    "value": "\"pass\"",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "String",
    "value": "\"fail\"",
    "start": 346,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 355,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "watInlineThenLeading",
    "start": 361,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 387,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 462,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 467,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 469,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 475,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 477,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 487,
    "end": 488
  },
  {
    "type": "String",
    "value": "\"pass\"",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "String",
    "value": "\"fail\"",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 507,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 515,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 530,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 543,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 550,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 563,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 588,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 590,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  }
]
```

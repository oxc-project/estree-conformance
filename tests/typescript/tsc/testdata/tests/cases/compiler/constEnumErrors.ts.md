__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 12
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "initializer": null,
            "computed": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 13,
        "end": 22
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 35
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 47
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 50,
                  "end": 51
                },
                "definite": false,
                "start": 46,
                "end": 51
              }
            ],
            "declare": false,
            "start": 42,
            "end": 52
          }
        ],
        "start": 36,
        "end": 54
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 24,
      "end": 54
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 69
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 158
            },
            "computed": false,
            "start": 153,
            "end": 158
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 227
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 229
              },
              "optional": false,
              "computed": false,
              "start": 225,
              "end": 229
            },
            "computed": false,
            "start": 221,
            "end": 229
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 237
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 242
              },
              "property": {
                "type": "Literal",
                "value": "Z",
                "raw": "\"Z\"",
                "start": 243,
                "end": 246
              },
              "optional": false,
              "computed": true,
              "start": 240,
              "end": 247
            },
            "computed": false,
            "start": 235,
            "end": 247
          }
        ],
        "start": 70,
        "end": 249
      },
      "const": true,
      "declare": false,
      "start": 56,
      "end": 249
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 264
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 272
            },
            "initializer": null,
            "computed": false,
            "start": 271,
            "end": 272
          }
        ],
        "start": 265,
        "end": 274
      },
      "const": true,
      "declare": false,
      "start": 251,
      "end": 274
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
            "name": "y0",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 282
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 287
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 288,
              "end": 289
            },
            "optional": false,
            "computed": true,
            "start": 285,
            "end": 290
          },
          "definite": false,
          "start": 280,
          "end": 290
        }
      ],
      "declare": false,
      "start": 276,
      "end": 290
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
            "name": "name",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 299
          },
          "init": {
            "type": "Literal",
            "value": "A",
            "raw": "\"A\"",
            "start": 302,
            "end": 305
          },
          "definite": false,
          "start": 295,
          "end": 305
        }
      ],
      "declare": false,
      "start": 291,
      "end": 306
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 311,
            "end": 313
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 318
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 323
            },
            "optional": false,
            "computed": true,
            "start": 316,
            "end": 324
          },
          "definite": false,
          "start": 311,
          "end": 324
        }
      ],
      "declare": false,
      "start": 307,
      "end": 325
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 332
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 337
            },
            "property": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 338,
                  "end": 341
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 345,
                  "end": 347
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 345
                }
              ],
              "start": 338,
              "end": 347
            },
            "optional": false,
            "computed": true,
            "start": 335,
            "end": 348
          },
          "definite": false,
          "start": 330,
          "end": 348
        }
      ],
      "declare": false,
      "start": 326,
      "end": 349
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 356
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 361
          },
          "definite": false,
          "start": 355,
          "end": 361
        }
      ],
      "declare": false,
      "start": 351,
      "end": 362
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 367,
            "end": 368
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "E2",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 374
              }
            ],
            "start": 371,
            "end": 375
          },
          "definite": false,
          "start": 367,
          "end": 375
        }
      ],
      "declare": false,
      "start": 363,
      "end": 376
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 390
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 394,
              "end": 397
            },
            "start": 392,
            "end": 397
          },
          "start": 391,
          "end": 397
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 400,
          "end": 404
        },
        "start": 398,
        "end": 404
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 405,
        "end": 408
      },
      "expression": false,
      "start": 378,
      "end": 408
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 410,
          "end": 413
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 416
          }
        ],
        "optional": false,
        "start": 410,
        "end": 417
      },
      "directive": null,
      "start": 410,
      "end": 418
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NaNOrInfinity",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 444
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 452
            },
            "initializer": {
              "type": "Literal",
              "value": 9007199254740992,
              "raw": "9007199254740992",
              "start": 455,
              "end": 471
            },
            "computed": false,
            "start": 451,
            "end": 471
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 478
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 482
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 486
              },
              "start": 481,
              "end": 486
            },
            "computed": false,
            "start": 477,
            "end": 486
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 493
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 497
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 501
              },
              "start": 496,
              "end": 501
            },
            "computed": false,
            "start": 492,
            "end": 501
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 507,
              "end": 508
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 512
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 516
              },
              "start": 511,
              "end": 516
            },
            "computed": false,
            "start": 507,
            "end": 516
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 523
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 526,
                "end": 527
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 531
              },
              "start": 526,
              "end": 531
            },
            "computed": false,
            "start": 522,
            "end": 531
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 538
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 546
              },
              "start": 541,
              "end": 546
            },
            "computed": false,
            "start": 537,
            "end": 546
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 565
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 568,
                "end": 569
              },
              "operator": "/",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 572,
                "end": 573
              },
              "start": 568,
              "end": 573
            },
            "computed": false,
            "start": 564,
            "end": 573
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 592
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 595,
                "end": 596
              },
              "operator": "/",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 599,
                "end": 600
              },
              "start": 595,
              "end": 600
            },
            "computed": false,
            "start": 591,
            "end": 600
          }
        ],
        "start": 445,
        "end": 610
      },
      "const": true,
      "declare": false,
      "start": 420,
      "end": 610
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 610
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
    "type": "Keyword",
    "value": "enum",
    "start": 6,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 11,
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
    "value": "A",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 24,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 42,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 62,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "Y1",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 242,
    "end": 243
  },
  {
    "type": "String",
    "value": "\"Z\"",
    "start": 243,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 251,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 257,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 262,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "y0",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 287,
    "end": 288
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 291,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 295,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 302,
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
    "value": "var",
    "start": 307,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 311,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 326,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 337,
    "end": 338
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 338,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 341,
    "end": 345
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "var",
    "start": 351,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 363,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 378,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 387,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 394,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 410,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 420,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 426,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "NaNOrInfinity",
    "start": 431,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "Numeric",
    "value": "9007199254740992",
    "start": 455,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 566,
    "end": 567
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 570,
    "end": 571
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 593,
    "end": 594
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 597,
    "end": 598
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  }
]
```

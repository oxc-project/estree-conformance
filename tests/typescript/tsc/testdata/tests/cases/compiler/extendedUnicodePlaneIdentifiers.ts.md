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
            "name": "𝑚",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 11,
            "end": 12
          },
          "definite": false,
          "start": 6,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
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
            "name": "𝑀",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 22
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 25,
            "end": 26
          },
          "definite": false,
          "start": 20,
          "end": 26
        }
      ],
      "declare": false,
      "start": 14,
      "end": 27
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 35
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 39
          },
          "optional": false,
          "computed": false,
          "start": 28,
          "end": 39
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "𝑀",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 42
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "𝑚",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 47
            },
            "start": 40,
            "end": 47
          }
        ],
        "optional": false,
        "start": 28,
        "end": 48
      },
      "directive": null,
      "start": 28,
      "end": 49
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
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
              "type": "PrivateIdentifier",
              "name": "𝑚",
              "start": 70,
              "end": 73
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 76,
              "end": 77
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 70,
            "end": 78
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "𝑀",
              "start": 83,
              "end": 86
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 89,
              "end": 90
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 83,
            "end": 91
          }
        ],
        "start": 64,
        "end": 93
      },
      "abstract": false,
      "declare": false,
      "start": 56,
      "end": 93
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
            "name": "ၡ",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 132
          },
          "init": {
            "type": "Literal",
            "value": 6,
            "raw": "6",
            "start": 135,
            "end": 136
          },
          "definite": false,
          "start": 131,
          "end": 136
        }
      ],
      "declare": false,
      "start": 125,
      "end": 137
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 149
          },
          "optional": false,
          "computed": false,
          "start": 138,
          "end": 149
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ၡ",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ၡ",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "start": 150,
            "end": 156
          }
        ],
        "optional": false,
        "start": 138,
        "end": 157
      },
      "directive": null,
      "start": 138,
      "end": 158
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
            "name": "ဒ",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 216
          },
          "init": {
            "type": "Literal",
            "value": 7,
            "raw": "7",
            "start": 219,
            "end": 220
          },
          "definite": false,
          "start": 215,
          "end": 220
        }
      ],
      "declare": false,
      "start": 209,
      "end": 221
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 229
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 233
          },
          "optional": false,
          "computed": false,
          "start": 222,
          "end": 233
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ဒ",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 235
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ဒ",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 240
            },
            "start": 234,
            "end": 240
          }
        ],
        "optional": false,
        "start": 222,
        "end": 241
      },
      "directive": null,
      "start": 222,
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
            "name": "ဒၡ𝑀",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 281
          },
          "init": {
            "type": "Literal",
            "value": 7,
            "raw": "7",
            "start": 284,
            "end": 285
          },
          "definite": false,
          "start": 277,
          "end": 285
        }
      ],
      "declare": false,
      "start": 271,
      "end": 286
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 294
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 298
          },
          "optional": false,
          "computed": false,
          "start": 287,
          "end": 298
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ဒၡ𝑀",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 303
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ဒၡ𝑀",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 311
            },
            "start": 299,
            "end": 311
          }
        ],
        "optional": false,
        "start": 287,
        "end": 312
      },
      "directive": null,
      "start": 287,
      "end": 313
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
            "name": "ၡ𝑀ဒ",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 325
          },
          "init": {
            "type": "Literal",
            "value": 7,
            "raw": "7",
            "start": 328,
            "end": 329
          },
          "definite": false,
          "start": 321,
          "end": 329
        }
      ],
      "declare": false,
      "start": 315,
      "end": 330
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 338
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 342
          },
          "optional": false,
          "computed": false,
          "start": 331,
          "end": 342
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ၡ𝑀ဒ",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 347
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ၡ𝑀ဒ",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 355
            },
            "start": 343,
            "end": 355
          }
        ],
        "optional": false,
        "start": 331,
        "end": 356
      },
      "directive": null,
      "start": 331,
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
            "name": "𝑀ဒၡ",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 369
          },
          "init": {
            "type": "Literal",
            "value": 7,
            "raw": "7",
            "start": 372,
            "end": 373
          },
          "definite": false,
          "start": 365,
          "end": 373
        }
      ],
      "declare": false,
      "start": 359,
      "end": 374
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 382
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 386
          },
          "optional": false,
          "computed": false,
          "start": 375,
          "end": 386
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "𝑀ဒၡ",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 391
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "𝑀ဒၡ",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 399
            },
            "start": 387,
            "end": 399
          }
        ],
        "optional": false,
        "start": 375,
        "end": 400
      },
      "directive": null,
      "start": 375,
      "end": 401
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
            "name": "𝓱𝓮𝓵𝓵𝓸",
            "optional": false,
            "typeAnnotation": null,
            "start": 409,
            "end": 419
          },
          "init": {
            "type": "Literal",
            "value": "𝔀𝓸𝓻𝓵𝓭",
            "raw": "\"𝔀𝓸𝓻𝓵𝓭\"",
            "start": 422,
            "end": 434
          },
          "definite": false,
          "start": 409,
          "end": 434
        }
      ],
      "declare": false,
      "start": 403,
      "end": 435
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
            "name": "Ɐⱱ",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 445
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 448,
            "end": 452
          },
          "definite": false,
          "start": 443,
          "end": 452
        }
      ],
      "declare": false,
      "start": 437,
      "end": 453
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
            "name": "𓀸𓀹𓀺",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 474
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 477,
            "end": 481
          },
          "definite": false,
          "start": 468,
          "end": 481
        }
      ],
      "declare": false,
      "start": 462,
      "end": 482
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
            "name": "𡚭𡚮𡚯",
            "optional": false,
            "typeAnnotation": null,
            "start": 497,
            "end": 503
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 506,
            "end": 510
          },
          "definite": false,
          "start": 497,
          "end": 510
        }
      ],
      "declare": false,
      "start": 491,
      "end": 511
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
            "name": "𡚭𓀺ⱱ𝓮",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 533
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 536,
            "end": 540
          },
          "definite": false,
          "start": 526,
          "end": 540
        }
      ],
      "declare": false,
      "start": 520,
      "end": 541
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
            "name": "𓀺ⱱ𝓮𡚭",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 556
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 559,
            "end": 563
          },
          "definite": false,
          "start": 549,
          "end": 563
        }
      ],
      "declare": false,
      "start": 543,
      "end": 564
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
            "name": "ⱱ𝓮𡚭𓀺",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 579
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 582,
            "end": 586
          },
          "definite": false,
          "start": 572,
          "end": 586
        }
      ],
      "declare": false,
      "start": 566,
      "end": 587
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
            "name": "𝓮𡚭𓀺ⱱ",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 602
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 605,
            "end": 609
          },
          "definite": false,
          "start": 595,
          "end": 609
        }
      ],
      "declare": false,
      "start": 589,
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
    "type": "Identifier",
    "value": "𝑚",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 14,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "𝑀",
    "start": 20,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 28,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "𝑀",
    "start": 40,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "𝑚",
    "start": 45,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "class",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "PrivateIdentifier",
    "value": "𝑚",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "PrivateIdentifier",
    "value": "𝑀",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "ၡ",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 138,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 146,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "ၡ",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 152,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "ၡ",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 209,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "ဒ",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "ဒ",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 236,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "ဒ",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
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
    "start": 271,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "ဒၡ𝑀",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 287,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "ဒၡ𝑀",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 304,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "ဒၡ𝑀",
    "start": 307,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 315,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "ၡ𝑀ဒ",
    "start": 321,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 331,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "ၡ𝑀ဒ",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 348,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "ၡ𝑀ဒ",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 359,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "𝑀ဒၡ",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 375,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 383,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "𝑀ဒၡ",
    "start": 387,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 392,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "𝑀ဒၡ",
    "start": 395,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 403,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "𝓱𝓮𝓵𝓵𝓸",
    "start": 409,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "String",
    "value": "\"𝔀𝓸𝓻𝓵𝓭\"",
    "start": 422,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 437,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "Ɐⱱ",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 448,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 462,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "𓀸𓀹𓀺",
    "start": 468,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 491,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "𡚭𡚮𡚯",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 506,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 520,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "𡚭𓀺ⱱ𝓮",
    "start": 526,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 536,
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
    "value": "const",
    "start": 543,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "𓀺ⱱ𝓮𡚭",
    "start": 549,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 557,
    "end": 558
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 559,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 566,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "ⱱ𝓮𡚭𓀺",
    "start": 572,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 580,
    "end": 581
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 589,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "𝓮𡚭𓀺ⱱ",
    "start": 595,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 605,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  }
]
```

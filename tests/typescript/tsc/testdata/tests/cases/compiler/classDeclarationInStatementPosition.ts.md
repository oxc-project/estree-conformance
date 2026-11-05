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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 77,
                "end": 84
              },
              "start": 75,
              "end": 84
            },
            "start": 71,
            "end": 84
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 84
        }
      ],
      "declare": true,
      "start": 57,
      "end": 85
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "cond",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 95
      },
      "consequent": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 105
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 106,
          "end": 108
        },
        "abstract": false,
        "declare": false,
        "start": 97,
        "end": 108
      },
      "alternate": null,
      "start": 87,
      "end": 108
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "cond",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 117
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 119,
        "end": 121
      },
      "alternate": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 135
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 136,
          "end": 138
        },
        "abstract": false,
        "declare": false,
        "start": 127,
        "end": 138
      },
      "start": 109,
      "end": 138
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "cond",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 150
      },
      "body": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C3",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 160
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 161,
          "end": 163
        },
        "abstract": false,
        "declare": false,
        "start": 152,
        "end": 163
      },
      "start": 139,
      "end": 163
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C4",
          "optional": false,
          "typeAnnotation": null,
          "start": 173,
          "end": 175
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 176,
          "end": 178
        },
        "abstract": false,
        "declare": false,
        "start": 167,
        "end": 178
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "cond",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 190
      },
      "start": 164,
      "end": 192
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C5",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 210
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 211,
          "end": 213
        },
        "abstract": false,
        "declare": false,
        "start": 202,
        "end": 213
      },
      "start": 193,
      "end": 213
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 226
            },
            "init": null,
            "definite": false,
            "start": 225,
            "end": 226
          }
        ],
        "declare": false,
        "start": 219,
        "end": 226
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 230,
        "end": 232
      },
      "body": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C6",
          "optional": false,
          "typeAnnotation": null,
          "start": 240,
          "end": 242
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 243,
          "end": 245
        },
        "abstract": false,
        "declare": false,
        "start": 234,
        "end": 245
      },
      "start": 214,
      "end": 245
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 258
            },
            "init": null,
            "definite": false,
            "start": 257,
            "end": 258
          }
        ],
        "declare": false,
        "start": 251,
        "end": 258
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 262,
        "end": 264
      },
      "body": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C7",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 274
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 275,
          "end": 277
        },
        "abstract": false,
        "declare": false,
        "start": 266,
        "end": 277
      },
      "start": 246,
      "end": 277
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "cond",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 286
      },
      "consequent": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "label",
          "optional": false,
          "typeAnnotation": null,
          "start": 288,
          "end": 293
        },
        "body": {
          "type": "ClassDeclaration",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C8",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 303
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 304,
            "end": 306
          },
          "abstract": false,
          "declare": false,
          "start": 295,
          "end": 306
        },
        "start": 288,
        "end": 306
      },
      "alternate": null,
      "start": 278,
      "end": 306
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "cond",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 322
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C10",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 339
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 340,
              "end": 342
            },
            "abstract": false,
            "declare": false,
            "start": 330,
            "end": 342
          }
        ],
        "start": 324,
        "end": 344
      },
      "alternate": null,
      "start": 314,
      "end": 344
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C11",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 354
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 355,
        "end": 357
      },
      "abstract": false,
      "declare": false,
      "start": 345,
      "end": 357
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 366,
        "end": 367
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 380,
            "end": 381
          },
          "consequent": [
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C12",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 400
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 401,
                "end": 403
              },
              "abstract": false,
              "declare": false,
              "start": 391,
              "end": 403
            }
          ],
          "start": 375,
          "end": 403
        }
      ],
      "start": 358,
      "end": 405
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 417
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C13",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 433
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 434,
              "end": 436
            },
            "abstract": false,
            "declare": false,
            "start": 424,
            "end": 436
          }
        ],
        "start": 418,
        "end": 438
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 406,
      "end": 438
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 448,
        "end": 449
      },
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
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C14",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 467
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 468,
              "end": 470
            },
            "abstract": false,
            "declare": false,
            "start": 458,
            "end": 470
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C15",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 491
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 492,
                "end": 494
              },
              "abstract": false,
              "declare": false,
              "start": 482,
              "end": 494
            },
            "start": 475,
            "end": 495
          }
        ],
        "start": 452,
        "end": 497
      },
      "expression": false,
      "start": 439,
      "end": 497
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
            "typeAnnotation": null,
            "start": 502,
            "end": 503
          },
          "init": null,
          "definite": false,
          "start": 502,
          "end": 503
        }
      ],
      "declare": false,
      "start": 498,
      "end": 504
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "cond",
        "optional": false,
        "typeAnnotation": null,
        "start": 509,
        "end": 513
      },
      "consequent": {
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
            "start": 515,
            "end": 516
          },
          "right": {
            "type": "ClassExpression",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C16",
              "optional": false,
              "typeAnnotation": null,
              "start": 525,
              "end": 528
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 529,
              "end": 531
            },
            "abstract": false,
            "declare": false,
            "start": 519,
            "end": 531
          },
          "start": 515,
          "end": 531
        },
        "directive": null,
        "start": 515,
        "end": 532
      },
      "alternate": null,
      "start": 505,
      "end": 532
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 533
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 77,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
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
    "value": "C1",
    "start": 103,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 109,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 122,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 127,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 152,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 164,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 167,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 173,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 202,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 214,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 219,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 227,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 234,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 251,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 259,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 266,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "C7",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 288,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 295,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "C8",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 318,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 330,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "C10",
    "start": 336,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 345,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "C11",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 358,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 375,
    "end": 379
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 391,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "C12",
    "start": 397,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "namespace",
    "start": 406,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 424,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "C13",
    "start": 430,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 439,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 458,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "C14",
    "start": 464,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 475,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 482,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "C15",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 505,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 509,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 519,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "C16",
    "start": 525,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "random",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "optional": false,
          "computed": false,
          "start": 4,
          "end": 15
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 4,
        "end": 17
      },
      "consequent": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C17",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 28
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 29,
          "end": 31
        },
        "abstract": false,
        "declare": false,
        "start": 19,
        "end": 31
      },
      "alternate": null,
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 31
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 0,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "C17",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  }
]
```

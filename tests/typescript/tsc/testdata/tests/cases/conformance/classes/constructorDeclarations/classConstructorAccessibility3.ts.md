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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 28
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 39,
                        "end": 45
                      },
                      "start": 37,
                      "end": 45
                    },
                    "start": 36,
                    "end": 45
                  },
                  "readonly": false,
                  "static": false,
                  "start": 29,
                  "end": 45
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 47,
                "end": 50
              },
              "expression": false,
              "start": 28,
              "end": 50
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 50
          }
        ],
        "start": 10,
        "end": 52
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
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
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 88
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 99,
                        "end": 105
                      },
                      "start": 97,
                      "end": 105
                    },
                    "start": 96,
                    "end": 105
                  },
                  "readonly": false,
                  "static": false,
                  "start": 89,
                  "end": 105
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 107,
                "end": 110
              },
              "expression": false,
              "start": 88,
              "end": 110
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 70,
            "end": 110
          }
        ],
        "start": 64,
        "end": 112
      },
      "abstract": false,
      "declare": false,
      "start": 54,
      "end": 112
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 123
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 151
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 162,
                        "end": 168
                      },
                      "start": 160,
                      "end": 168
                    },
                    "start": 159,
                    "end": 168
                  },
                  "readonly": false,
                  "static": false,
                  "start": 152,
                  "end": 168
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 170,
                "end": 173
              },
              "expression": false,
              "start": 151,
              "end": 173
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 130,
            "end": 173
          }
        ],
        "start": 124,
        "end": 175
      },
      "abstract": false,
      "declare": false,
      "start": 114,
      "end": 175
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Qux",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 186
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 213
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 224,
                        "end": 230
                      },
                      "start": 222,
                      "end": 230
                    },
                    "start": 221,
                    "end": 230
                  },
                  "readonly": false,
                  "static": false,
                  "start": 214,
                  "end": 230
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 232,
                "end": 235
              },
              "expression": false,
              "start": 213,
              "end": 235
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 194,
            "end": 235
          }
        ],
        "start": 187,
        "end": 237
      },
      "abstract": false,
      "declare": false,
      "start": 177,
      "end": 237
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 259
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 265
          },
          "definite": false,
          "start": 258,
          "end": 265
        }
      ],
      "declare": false,
      "start": 254,
      "end": 266
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 267,
          "end": 268
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 271,
          "end": 274
        },
        "start": 267,
        "end": 274
      },
      "directive": null,
      "start": 267,
      "end": 275
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 276,
          "end": 277
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 280,
          "end": 283
        },
        "start": 276,
        "end": 283
      },
      "directive": null,
      "start": 276,
      "end": 284
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 312
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Qux",
          "optional": false,
          "typeAnnotation": null,
          "start": 315,
          "end": 318
        },
        "start": 311,
        "end": 318
      },
      "directive": null,
      "start": 311,
      "end": 319
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 367,
            "end": 368
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 374
          },
          "definite": false,
          "start": 367,
          "end": 374
        }
      ],
      "declare": false,
      "start": 363,
      "end": 375
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 380,
          "end": 383
        },
        "start": 376,
        "end": 383
      },
      "directive": null,
      "start": 376,
      "end": 384
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 385,
          "end": 386
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 389,
          "end": 392
        },
        "start": 385,
        "end": 392
      },
      "directive": null,
      "start": 385,
      "end": 393
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 395
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Qux",
          "optional": false,
          "typeAnnotation": null,
          "start": 398,
          "end": 401
        },
        "start": 394,
        "end": 401
      },
      "directive": null,
      "start": 394,
      "end": 402
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 449
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Qux",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 455
          },
          "definite": false,
          "start": 448,
          "end": 455
        }
      ],
      "declare": false,
      "start": 444,
      "end": 456
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 457,
          "end": 458
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 461,
          "end": 464
        },
        "start": 457,
        "end": 464
      },
      "directive": null,
      "start": 457,
      "end": 465
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 467
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 470,
          "end": 473
        },
        "start": 466,
        "end": 473
      },
      "directive": null,
      "start": 466,
      "end": 474
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 475,
          "end": 476
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 482
        },
        "start": 475,
        "end": 482
      },
      "directive": null,
      "start": 475,
      "end": 483
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 483
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
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 17,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 70,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 77,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 89,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 130,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 140,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 152,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 177,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "Qux",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 194,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 202,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 214,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "Qux",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 363,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "Baz",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 389,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "Qux",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 444,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "Qux",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 470,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 479,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  }
]
```

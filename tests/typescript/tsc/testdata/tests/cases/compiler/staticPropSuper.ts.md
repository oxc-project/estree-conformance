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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 8,
        "end": 11
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 20
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
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
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 54,
                "end": 60
              },
              "start": 52,
              "end": 60
            },
            "value": {
              "type": "Literal",
              "value": 9,
              "raw": "9",
              "start": 63,
              "end": 64
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 37,
            "end": 65
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 82
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
                          "start": 99,
                          "end": 100
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 103,
                          "end": 104
                        },
                        "definite": false,
                        "start": 99,
                        "end": 104
                      }
                    ],
                    "declare": false,
                    "start": 95,
                    "end": 105
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 134,
                        "end": 139
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 134,
                      "end": 141
                    },
                    "directive": null,
                    "start": 134,
                    "end": 142
                  }
                ],
                "start": 85,
                "end": 148
              },
              "expression": false,
              "start": 82,
              "end": 148
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 71,
            "end": 148
          }
        ],
        "start": 31,
        "end": 150
      },
      "abstract": false,
      "declare": false,
      "start": 13,
      "end": 150
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 159
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 169
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 184
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 186,
                "end": 192
              },
              "start": 184,
              "end": 192
            },
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 195,
              "end": 197
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 176,
            "end": 198
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 215
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
                          "start": 232,
                          "end": 233
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 236,
                          "end": 237
                        },
                        "definite": false,
                        "start": 232,
                        "end": 237
                      }
                    ],
                    "declare": false,
                    "start": 228,
                    "end": 238
                  }
                ],
                "start": 218,
                "end": 260
              },
              "expression": false,
              "start": 215,
              "end": 260
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 204,
            "end": 260
          }
        ],
        "start": 170,
        "end": 262
      },
      "abstract": false,
      "declare": false,
      "start": 152,
      "end": 262
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 271
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 281
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 297
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
            "value": {
              "type": "Literal",
              "value": 11,
              "raw": "11",
              "start": 308,
              "end": 310
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 288,
            "end": 311
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 328
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
                          "start": 345,
                          "end": 346
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 349,
                          "end": 350
                        },
                        "definite": false,
                        "start": 345,
                        "end": 350
                      }
                    ],
                    "declare": false,
                    "start": 341,
                    "end": 351
                  }
                ],
                "start": 331,
                "end": 373
              },
              "expression": false,
              "start": 328,
              "end": 373
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 317,
            "end": 373
          }
        ],
        "start": 282,
        "end": 375
      },
      "abstract": false,
      "declare": false,
      "start": 264,
      "end": 375
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 384
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 394
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 402
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 404,
                "end": 410
              },
              "start": 402,
              "end": 410
            },
            "value": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 413,
              "end": 415
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 401,
            "end": 416
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 433
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
                          "start": 450,
                          "end": 451
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 454,
                          "end": 455
                        },
                        "definite": false,
                        "start": 450,
                        "end": 455
                      }
                    ],
                    "declare": false,
                    "start": 446,
                    "end": 456
                  }
                ],
                "start": 436,
                "end": 478
              },
              "expression": false,
              "start": 433,
              "end": 478
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 422,
            "end": 478
          }
        ],
        "start": 395,
        "end": 480
      },
      "abstract": false,
      "declare": false,
      "start": 377,
      "end": 480
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 480
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
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 13,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 21,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 37,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 44,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 71,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 95,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 152,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 160,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Keyword",
    "value": "public",
    "start": 176,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 204,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 228,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 264,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 272,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 288,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 317,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 341,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 377,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 385,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 404,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 411,
    "end": 412
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 413,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 422,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 446,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 452,
    "end": 453
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  }
]
```
